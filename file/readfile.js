const fs = require('fs')
const filePath = require('path').join(__dirname, './md')
const {readFileSync} = require('fs')

// 一、异步读文件
// 1.fs open
// fs.open(filePath, (err, fd) => {
//     if (err) {
//         console.log(err)
//     }
//     // 2.fs read
//     fs.read(fd, (err, byteRead, buffer) => {
//         console.log(err)
//         const buffeerT = buffer.slice(0, byteRead)
//         console.log(buffeerT.toString('base64'))
//     })
// })

// 二、同步读文件
const resultBuf = readFileSync(filePath)
console.log(resultBuf.length)

