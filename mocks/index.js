const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const glob = require('glob')
const { resolve } = require('path')

const flatten = arr =>
  arr.reduce((arr, val) => arr.concat(Array.isArray(val) ? flatten(val) : val), [])

const Mock = require('mockjs')

const mockDir = resolve(process.cwd(), 'mocks')

function registerRoutes(app) {
  let mockLastIndex
  const mocks = flatten(glob.sync(resolve(__dirname, 'routes/**/*.js')).map(item => require(item)))
  const mocksForServer = mocks.map(route => {
    return responseFake(route.url, route.type, route.response)
  })
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || 'get',
    response(req, res) {
      console.log('请求调用:' + req.path)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

module.exports = app => {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

  const mockRoutes = registerRoutes(app)
  let mockRoutesLength = mockRoutes.mockRoutesLength
  let mockStartIndex = mockRoutes.mockStartIndex

  // 监听文件变化
  chokidar
    .watch(mockDir, {
      ignored: /index/,
      ignoreInitial: true
    })
    .on('all', (event, path) => {
      if (event === 'change' || event === 'add') {
        try {
          app._router.stack.splice(mockStartIndex, mockRoutesLength)

          unregisterRoutes()

          const mockRoutes = registerRoutes(app)
          mockRoutesLength = mockRoutes.mockRoutesLength
          mockStartIndex = mockRoutes.mockStartIndex
          console.log(chalk.magentaBright(`\n > Mock Server 热更新成功! 改变的文件： ${path}`))
        } catch (error) {
          console.log(chalk.redBright(error))
        }
      }
    })
}
