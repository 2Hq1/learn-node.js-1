const Router = require('@koa/router')
const router = new Router();
const { LoginController } = require('../controller/login')
const { fileHandler } = require('../controller/file')

// 路由和contoller函数的映射关系
router.get('/login', LoginController);
router.post('/file', fileHandler)

module.exports = {
    router
}