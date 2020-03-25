const getters = {
  id: state => state.user.id,
  token: state => state.user.token,
  nickname: state => state.user.nickname,
  faceImgMin: state => state.user.faceImgMin
}
export default getters
