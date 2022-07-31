// 1.文件路径
const path = require('path')
// path.join
// path.resolve
// 当前文件目录 __dirname
// __filename
console.log(__dirname, __filename)

const aimPath = path.join(__dirname, 'test/test')
const resolveAimPath = path.resolve('test/test')
