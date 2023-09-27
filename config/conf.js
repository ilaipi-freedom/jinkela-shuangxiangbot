var mysql = require('mysql');
module.exports = {
    pool: mysql.createPool({
        host: process.env.DB_MYSQL_HOST || 'localhost',
        port: process.env.DB_MYSQL_PORT || 3306, //mysql端口
        user     : process.env.DB_MYSQL_USER || 'shuangxiang', //mysql用户名
        password : process.env.DB_MYSQL_PASSWORD || 'shuangxiang', //mysql密码
        database : process.env.DB_MYSQL_DATABASE || 'shuangxiang', //mysql数据库
    }),
    token: process.env.TG_TOKEN || '5935850388:AAHEssKugiFBhFDxbBP1hOtMq9S7Bm2X78c', //机器人的token
    adminid: process.env.TG_ADMIN_ID || -1001971441758 //管理员或管理群的id    使用机器人 @qunid_bot 获取id
}
