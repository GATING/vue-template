const Mock = require('mockjs')

const list = []
const count = 100

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: '@increment',
      name: '@first',
      'age|1-100': 100,
      'sex|1': ['男', '女'],
      timestamp: +Mock.Random.date('T')
    })
  )
}
module.exports = [
  {
    url: '/article/list',
    type: 'get',
    response: req => {
      const { name, current = 1, size = 20 } = req.query

      let mockList = list.filter(item => {
        if (name && item.name.indexOf(name) < 0) return false
        return true
      })

      const pageList = mockList.filter(
        (item, index) => index < size * current && index >= size * (current - 1)
      )
      return {
        code: 200,
        data: {
          list: pageList,
          current,
          size,
          total: mockList.length
        },
        message: 'success'
      }
    }
  }
]
