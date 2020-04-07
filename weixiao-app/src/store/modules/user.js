import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    id: '',
    token: getToken(),
    username: '',
    truename: '',
    nickname: '',
    sex: '',
    age: 0,
    area: '',
    number: '',
    phone: '',
    faceImg: '',
    faceImgMin: '',
    academy: '',
    autograph: '',
    hide: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AVATAR: (state, avatar) => {
      state.faceImgMin = avatar
    },
    SET_INFO: (state, studentInfo) => {
      state.id = studentInfo.id
      state.username = studentInfo.username
      state.truename = studentInfo.truename
      state.nickname = studentInfo.nickname
      state.sex = studentInfo.sex === 1 ? '男' : studentInfo.sex === 2 ? '女' : '未知'
      state.age = studentInfo.age
      state.area = studentInfo.area
      state.number = studentInfo.number
      state.phone = studentInfo.phone
      state.faceImg = studentInfo.faceImg
      state.faceImgMin = studentInfo.faceImgMin
      state.academy = studentInfo.academy
      state.autograph = studentInfo.autograph
      state.hide = studentInfo.hide
    }

  },

  actions: {

    SetFace ({ commit }, avatar) {
      commit('SET_AVATAR', avatar)
    },

    // 登录
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          const token = data.tokenHead + data.token
          setToken(token)
          commit('SET_TOKEN', token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token.slice(6)).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            // reject('getInfo: roles must be a non-null array !')
            const role = ['common']
            commit('SET_ROLES', role)
          }
          commit('SET_INFO', data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
