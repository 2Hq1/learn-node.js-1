const fs = require('fs')
const filePath = require('path').join(__dirname, './wirtemd.png')
const aimPath = require('path').join(__dirname, './wirtemd-recover.png')
const {writeFileSync} = require('fs')

fs.open(filePath, (err, fd) => {
    if (err) {
        console.log(err)
    }
    // 2.fs read
    fs.read(fd, (err, byteRead, buffer) => {
        console.log(buffer)

        // 3.写入文件
        buffer[0] = 137
        // fs.writeFile(aimPath, buffer, (err) => {
        //     console.log(err)
        // })
        // 同步方式
        writeFileSync(aimPath, buffer)
    })
})