/*
 * @Author: 张政
 * @Date: 2019-06-27 13:28:55
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-07-02 19:50:20
 * @Description: 增加数据库实时时间更新
 */
function CurentTime() {
  var now = new Date();

  var year = now.getFullYear();       //年
  var month = now.getMonth() + 1;     //月
  var day = now.getDate();            //日

  var hh = now.getHours();            //时
  var mm = now.getMinutes();          //分
  var ss = now.getSeconds();           //秒

  var clock = year + "-";

  if (month < 10)
    clock += "0";

  clock += month + "-";

  if (day < 10)
    clock += "0";

  clock += day + " ";

  if (hh < 10)
    clock += "0";

  clock += hh + ":";
  if (mm < 10) clock += '0';
  clock += mm + ":";

  if (ss < 10) clock += '0';
  clock += ss;
  return (clock);
}

module.exports = CurentTime
