// 承接请求，回应请求
const { getUserInfoByUserName } = require('../service/user')
async function LoginController(ctx) {
    // 1.查询参数拿的是查询参数
    const { username, password } = ctx.query
    // 查询数据库
    const userInfo = await getUserInfoByUserName(username, password)
    if (userInfo) {
        ctx.body = {
            success: true,
            data: userInfo
        }
    } else {
        ctx.body = {
            success: false,
            data: {
                msg: '此用户不存在或者密码错误'
            }
        }
    }
}

module.exports = {
    LoginController
}