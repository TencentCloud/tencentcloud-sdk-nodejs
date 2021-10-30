import * as tencentcloud from "tencentcloud-sdk-nodejs"
var messages = require('./cls_pb');

// 导入对应产品模块的client models。
const ClsClient = tencentcloud.cls.v20201016.Client

const clientConfig: any = {
    // 腾讯云认证信息
    credential: {
        secretId: "【必填】",
        secretKey: "【必填】",
    },
    // 产品地域
    region: "ap-guangzhou",
    // 可选配置实例
    profile: {
        signMethod: "TC3-HMAC-SHA256", // 签名方法
        httpProfile: {
            endpoint: "cls.tencentcloudapi.com",
            reqMethod: "POST", // 请求方法
            reqTimeout: 30, // 请求超时时间，默认60s
        },
        headers: {
            "X-CLS-TopicId": "【必填topicid】",
            "Content-Type": "application/octet-stream",
        }
    },
}

const client = new ClsClient(clientConfig)


var grouplist = new messages.LogGroupList();
var loggroup = new messages.LogGroup();
var log = new messages.Log();
var content =  new  messages.Log.Content(["system1,log", "start1,report"])
log.setTime(123456)
log.addContents(content)
loggroup.addLogs(log)
grouplist.addLoggrouplist(loggroup)


console.log( Number.isSafeInteger( parseInt( "123456" ) ) );


var tmp = Uint8ArrayToString(grouplist.serializeBinary());

client.UploadLog(tmp).then(
    (data) => {
        console.log(data)
    },
    (err) => {
        console.error("error", err)
    }
);

function Uint8ArrayToString(fileData: any){
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
      dataString += String.fromCharCode(fileData[i]);
    }
    return dataString  
}

