
module.exports.config = {
	name: "sendnoti",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Mirai mod by HĐGN",
	description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnotiUwU",
	commandCategory: "Admin",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"sendSuccess": "Đã gửi thánh chỉ tới %1 nhóm",
		"sendFail": "Không thể gửi thánh chỉ tới %1 nhóm"
	},
	"en": {
		"sendSuccess": "Sent message to %1 thread!",
		"sendFail": "[!] Can't send message to %1 thread"
	}
}
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");

module.exports.run = async ({ api, event, args, getText, Users }) => {
  const name = await Users.getNameUser(event.senderID)
const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");  
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')
			var getURL = await request.get(event.messageReply.attachments[0].url);
			
					var pathname = getURL.uri.pathname;
var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
			
					var path = __dirname + `/cache/snoti`+`.${ext}`;


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage({body: `» Thông Báo Từ Admin «\n──────────────────\n👤 Admin: ${name}\n🌐 Link fb: https://www.facebook.com/profile.php?id=${event.senderID}\n🏘️ Nơi gửi: ${event.isGroup == true ? 'Nhóm ' + global.data.threadInfo.get(event.threadID).threadName: 'từ cuộc trò chuyện riêng với bot'}\n⏰ time: ${fullTime()}\n💬 Nội dung: ` + args.join(` `) ,attachment: fs.createReadStream(path) }, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage(`» Thông Báo Từ Admin «\n──────────────────\n👤 Admin: ${name}\n🌐 Link fb: https://www.facebook.com/profile.php?id=${event.senderID}\n🏘️ Nơi gửi: ${event.isGroup == true ? 'Nhóm ' + global.data.threadInfo.get(event.threadID).threadName: 'từ cuộc trò chuyện riêng với bot'}\n⏰ time: ${fullTime()}\n💬 Nội dung: ` + args.join(` `), idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
  }

  module.exports.handleReply = async({ api, event, handleReply: h, Users, Threads }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
    const { ADMINBOT } = global.config;
    switch (h.type) {
        case "userReply": {
            const atm = atms.length != 0 ? atms : "nofile";
            var msg = `👤 Phản hồi từ người dùng: ${(await Users.getData(sid)).name}\n🌐 Link fb: https://www.facebook.com/profile.php?id=${event.senderID}\n🎀 Nhóm: ${(await Threads.getData(tid)).threadInfo.threadName}\n⏱ Time: ${fullTime()}\n\n📝 Nội dung: ${atm == "nofile" ? body : "Chỉ có tệp tới bạn"}\n\n» Reply tin nhắn này nếu muốn phản hồi đến người dùng.`
            const uwu = atm == "nofile" ? msg : {
                body: msg,
                attachment: await DownLoad(atm)
            };
          var c1 = 0, c2 = 0;
            for (var idA of ADMINBOT) {
              var promise = new Promise (async(r1, r2) => {
                await api.sendMessage(uwu, idA, async(e, i) => {
     if (e) r2(++c2); else r1(++c1)
                    return global.client.handleReply.push({
                        name: this.config.name,
                        messageID: i.messageID,
                        author: h.author, idThread: tid, idMessage: mid, idUser: sid,
                        type: "adminReply"
                    })
                });
            });
       }; 
          promise.then(async(r1) => api.sendMessage(`📨 Phản hồi thành công đến Admin ${(await Users.getData(h.author)).name} và ${+r1-1} Admin khác`, tid, mid)).catch(async(err) => api.sendMessage(`Không thể phản hồi tới ${err} Admin`, tid, mid))
            break;
        };
    case "adminReply": {
        const atm = atms.length != 0 ? atms : "nofile";
        var msg = `Phản hồi từ Admin ${(await Users.getData(sid)).name}\n⏱ time: ${fullTime()}\n\n📝 Nội dung: ${atm == "nofile" ? body : "Chủ có tệp tới bạn"}\n\n» Reply tin nhắn này nếu muốn phản hồi đến Admin`
        const uwu = atm == "nofile" ? msg : {
            body: msg,
            attachment: await DownLoad(atm)
        };
        await api.sendMessage(uwu, h.idThread, async(e, i) => {
            if (e) return api.sendMessage(`Error`, tid, mid);
            else api.sendMessage(`📨 Phản hồi thành công đến người dùng ${(await Users.getData(h.idUser)).name} tại nhóm ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
            return global.client.handleReply.push({
                name: this.config.name,
                messageID: i.messageID,
                author: sid,
                type: "userReply"
            })
        }, h.idMessage);
        break;
    };
  }
};

const DownLoad = async(atm) => {
    var arr = [];
    for (var i = 0; i < atm.length; i++) {
        const nameUrl = request.get(atm[i].url).uri.pathname
        const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
        const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
        await imageDownload.image({
            url: atm[i].url,
            dest: path
        });
        arr.push(fse.createReadStream(path));
        fse.unlinkSync(path);
    }
    return arr;
};
