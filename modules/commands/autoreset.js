module. exports. config = {
  name: "nowtime",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Thời gian",
  commandCategory: "Hệ thống",
  cooldowns: 5
}
module.exports.onLoad = o => setInterval(async({ api, event, args }) => {
const moment = require("moment-timezone");
var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
var idad = global.config.ADMINBOT;    
  console.log(timeNow);
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var timeRestart_1 = `00:00:${seconds}`
  var timeRestart_2 = `01:00:${seconds}`
  var timeRestart_3 = `02:00:${seconds}`
  var timeRestart_4 = `03:00:${seconds}`
  var timeRestart_5 = `04:00:${seconds}`
  var timeRestart_6 = `05:00:${seconds}`
  var timeRestart_7 = `06:00:${seconds}`
  var timeRestart_8 = `07:00:${seconds}`
  var timeRestart_9 = `08:00:${seconds}`
  var timeRestart_10 = `09:00:${seconds}`
  var timeRestart_11 = `10:00:${seconds}`
  var timeRestart_12 = `11:00:${seconds}`
  var timeRestart_13 = `12:00:${seconds}`
  var timeRestart_14 = `13:00:${seconds}`
  var timeRestart_15 = `14:00:${seconds}`
  var timeRestart_16 = `15:00:${seconds}`
  var timeRestart_17 = `16:00:${seconds}`
  var timeRestart_18 = `17:00:${seconds}`
  var timeRestart_19 = `18:00:${seconds}`
  var timeRestart_20 = `19:00:${seconds}`
  var timeRestart_21 = `20:00:${seconds}`
  var timeRestart_22 = `21:00:${seconds}`
  var timeRestart_23 = `22:00:${seconds}`
  var timeRestart_24 = `23:00:${seconds}`
  var timeRestart_25 = `03:40:${seconds}`
//console.log(timeNowRestart)

if ((timeNow == timeRestart_1 || timeNow == timeRestart_2 || timeNow == timeRestart_3 || timeNow == timeRestart_4 || timeNow == timeRestart_5 || timeNow == timeRestart_6 || timeNow == timeRestart_7 || timeNow == timeRestart_8 || timeNow == timeRestart_9 || timeNow == timeRestart_10 || timeNow == timeRestart_11 || timeNow == timeRestart_12 || timeNow == timeRestart_13 || timeNow == timeRestart_14 || timeNow == timeRestart_15 || timeNow == timeRestart_16 || timeNow == timeRestart_17 || timeNow == timeRestart_18 || timeNow == timeRestart_19 || timeNow == timeRestart_20 || timeNow == timeRestart_21 || timeNow == timeRestart_22 || timeNow == timeRestart_23 || timeNow == timeRestart_24 || timeNow == timeRestart_25) && seconds < 1 ) {
  for( let ad of idad) {
setTimeout(() =>
        api.sendMessage(`⚡️Bây giờ là: ${timeNow}\nBé sẽ tiến hành khởi động lại!!!`,ad, () =>process.exit(1)), 1000);
  }
  }
}, 1000);
module. exports. run = async  ({ api, event, args }) => {
    const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
      api.sendMessage(`Now: ${timeNow}, good day! This bot make by Yuki Kiriha!`, event.threadID)
}
