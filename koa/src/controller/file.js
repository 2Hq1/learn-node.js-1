const fs = require('fs')

function fileHandler(ctx) {
    ctx.req.on('data', (chunk) => {
        console.log(chunk.toString('utf-8'))
    })
    const aim = fs.WriteStream('./logo')
    ctx.req.pipe(aim)
    ctx.body = 'success'
}

module.exports = {
    fileHandler
}