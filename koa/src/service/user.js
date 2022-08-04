// 使用我们的数据库
const { getUserById } = require('../database/database')
async function getUserInfoByUserName(username, password) {
    // 去数据库里面查询
    // if (User[username] && User[username].password === password) {
    //     return User[username]
    // }
    const rows = await getUserById(username);
    if (rows.length !== 1) {
        return null
    }
    const user = rows[0]
    if (user.password === password) {
        return user;
    }
    return null;
}

module.exports = {
    getUserInfoByUserName,
}