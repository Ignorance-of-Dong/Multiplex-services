var mysql = require('mysql');
let log = require('../utils/log')
var connection = mysql.createConnection({
  host     : '118.24.96.233',
  user     : 'root',
  password : '971058',
  database : 'open_knowledge_base'
});

connection.connect((err) => {
  if (err) {
    log('red', '\n\n⚠️⚠️⚠️⚠️⚠️⚠️连接数据库失败, 请核对密码 --- 账号 --- 库名 \n\n')
  } else {
    log('yellow', '\n\n😳😳😳😳😳成功连接云服务端数据库....\n\n')
  }
});

module.exports = connection