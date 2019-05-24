import * as types from './mutation.types'

export default {
  [types.APP_VERSION] (state, data) {
    state.appVersion = data
  },
  [types.DEVICE_DPR] (state, data) {
    state.deviceDPR = data
  },
  [types.UCID] (state, data) {
    state.ucid = data
  },
  [types.APP_PARAMS] (state, data) {
    state.appParams = data
  }
}
