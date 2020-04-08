const getters = {
  id: state => state.user.id,
  token: state => state.user.token,
  nickname: state => state.user.nickname,
  faceImgMin: state => state.user.faceImgMin,
  websocket: state => state.user.websocket
}
export default getters
