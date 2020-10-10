const users = {
  gating: {
    pass: '123456',
    avatar: 'https://cdn.jsdelivr.net/gh/GATING/blog_imgs@master/blog/avatar.png',
    name: 'gating',
    token: 'gating-token'
  }
}

module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: req => {
      const { user, pass } = req.body
      const userInfo = users[user]
      if (userInfo && userInfo.pass === pass) {
        return {
          code: 200,
          data: userInfo
        }
      } else {
        return {
          code: 29999,
          data: null,
          message: '用户名或密码错误'
        }
      }
    }
  },
  {
    url: '/user/info',
    type: 'get',
    response: req => {
      const { token } = req.headers
      const info = Object.values(users).find(user => user.token === token)
      if (!info) {
        return {
          code: 39999,
          message: 'token已过期，请重新登录'
        }
      }
      return {
        code: 200,
        data: info
      }
    }
  },
  {
    url: '/user/logout',
    type: 'put',
    response: () => {
      return {
        code: 200,
        data: 'success'
      }
    }
  },
  {
    url: '/user/delete',
    type: 'delete',
    response: () => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
