const Koa = require('koa')
const server = new Koa();
const { router } = require('./src/router/index')
const cors = require('@koa/cors')
// server.use(cors())

server.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8081')
    ctx.set('Access-Control-Allow-Methods', ['POST', 'OPTION', 'GET'])
    ctx.set('Access-Control-Allow-Headers', ['token', 'Content-Type'])
    ctx.set('access-control-allow-credentials', true)
    ctx.cookies.set('token', '1234567', {
        maxAge: 100000,
        httpOnly: false,
        sameSite: 'lax',
        domain: 'http://localhost:8081'
    })
    await next()
})

// server.use(async (ctx, next) => {
//     ctx.req.on('data', (chunk) => {
//         console.log(chunk.toString('utf-8'))
//     })
//     const aim = require('fs').WriteStream('./logo.png')
//     ctx.req.pipe(aim)
//     await next()
// })

server
    .use(router.routes())
    .use(router.allowedMethods());

// 把request和response对象全部捆绑到ctx对象
// server.use((ctx) => {
//     ctx.body = 'hello'
// })

server.listen(8082, () => console.log('server is listening on http://localhost:8080'))