// 使用我们的数据库
const { User } = require('../database/database')
function getUserInfoByUserName(username, password) {
    // 去数据库里面查询
    if (User[username] && User[username].password === password) {
        return User[username]
    }
    return null;
}

module.exports = {
    getUserInfoByUserName,
}