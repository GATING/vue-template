module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: {
          test: 'success'
        }
      }
    }
  },
  {
    url: '/user/info',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          test: 'success'
        }
      }
    }
  },
  {
    url: '/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
