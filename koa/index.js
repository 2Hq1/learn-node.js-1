const Koa = require('koa')
const server = new Koa();
const { router } = require('./src/router/index')

server
    .use(router.routes())
    .use(router.allowedMethods());

// 把request和response对象全部捆绑到ctx对象
// server.use((ctx) => {
//     ctx.body = 'hello'
// })

server.listen(8080)