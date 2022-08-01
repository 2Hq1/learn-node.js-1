const Router = require('@koa/router')
const router = new Router();
const { LoginController } = require('../controller/login')

// 路由和contoller函数的映射关系
router.post('/login', LoginController);

module.exports = {
    router
}