import variables from '@/styles/variables.scss'

const getters = {
  token: (state: any) => state.user.token,
  userInfo: (state: any) => state.user.userinfo,
  hasUserInfo: (state: any) => {
    // 如果用户信息存在，return true
    return JSON.stringify(state.user.userinfo) !== '{}'
  },
  cssVars: () => variables
}

export default getters
