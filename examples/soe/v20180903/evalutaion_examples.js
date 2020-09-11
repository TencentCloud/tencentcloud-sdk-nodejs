/**
 * 本示例使用了 async/await 关键字，需要 node v8.x.x 以上或者使用 typescript
 * 运行步骤：
 * 1 下载测试音频数据到本地
 *   bike.mp3:                                     https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/bike.mp3
 *   cn.mp3:                                       https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/cn.mp3
 *   Rex was a big dog.wav :                       https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/Rex%20was%20a%20big%20dog.wav
 *   I see sixteen eggs and eighteen apples.wav :  https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/I%20see%20sixteen%20eggs%20and%20eighteen%20apples.wav
 * 2 配置测试音频数据目录常量 AUDIO_FOR_ONCE、AUDIO_FOR_CN、AUDIO_FOR_SEQ、AUDIO_FOR_ASYNC 为音频下载目录
 * 3 修改密钥常量 SecretId、SecretKey 为腾讯云帐号密钥
 * 4 运行示例程序
 */

const tencentcloud = require("../../../../tencentcloud-sdk-nodejs");
const SoeClient = tencentcloud.soe.v20180724.Client;
const models = tencentcloud.soe.v20180724.Models;
const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;
const uuid = require("uuid")
const fs = require("fs")



const SecretId = ""
const SecretKey = ""

/*
 * 测试音频下载地址
 * bike.mp3:                                     https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/bike.mp3
 * cn.mp3:                                       https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/cn.mp3
 * Rex was a big dog.wav :                       https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/Rex%20was%20a%20big%20dog.wav
 * I see sixteen eggs and eighteen apples.wav :  https://soe-common-1255701415.cos.ap-guangzhou.myqcloud.com/I%20see%20sixteen%20eggs%20and%20eighteen%20apples.wav
 *
 */
const AUDIO_FOR_ONCE = "./bike.mp3";
const AUDIO_FOR_CN = "./error.mp3";
const AUDIO_FOR_SEQ = "Rex was a big dog.wav";
const AUDIO_FOR_ASYNC = "./I see sixteen eggs and eighteen apples.wav";


async function test() {
    // 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey
    let cred = new Credential(SecretId, SecretKey);
    // 实例化一个http选项，可选的，没有特殊需求可以跳过。
    let httpProfile = new HttpProfile();
    httpProfile.reqMethod = "POST";
    httpProfile.reqTimeout = 30;

    /*
     *  设置访问域名，如果需要就近部署，可以使用 soe-tencentcloudapi.com, 腾讯云将根据访问的地域解析到合适的服务器上，如果调用服务已确定地域，如华南地区
     *  可以直接使用地域域名，加快访问速度
     */
    httpProfile.endpoint = "soe.tencentcloudapi.com";

    // 实例化一个client选项，可选的，没有特殊需求可以跳过。
    let clientProfile = new ClientProfile();
    clientProfile.signMethod = "HmacSHA256";
    clientProfile.httpProfile = httpProfile;


    // 实例化要请求产品的client对象。clientProfile可选。
    let client = new SoeClient(cred, "", clientProfile);


    await EvaluationOnce(client)
    await EvaluationCn(client)
    await EvaluationMultipleSeq(client)
    await EvaluationMultipleSeqDisorder(client)
    await EvaluationAsync(client)
    await EvaluationTransmitOralProcessWithInit(client)
}
test()


/**
 * 封装 InitOralProcess 异步调用
 * @param {*} client 
 * @param {*} req 
 */
function InitOralProcess(client, req) {
    return new Promise(function (resolve, reject) {
        // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
        client.InitOralProcess(req, function (err, response) {
            if (err) {
                reject(err)
                return;
            }
            resolve(response)
        });
    })
}

/**
 * 封装 TransmitOralProcess 异步调用
 * @param {*} client 
 * @param {*} req 
 */
function TransmitOralProcess(client, req) {
    return new Promise(function (resolve, reject) {
        // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
        client.TransmitOralProcess(req, function (err, response) {
            if (err) {
                reject(err)
                return;
            }
            // 请求正常返回，打印response对象
            resolve(response)
        });
    })
}

/**
 * 封装 TransmitOralProcessWithInit 异步调用
 * @param {*} client 
 * @param {*} req 
 */
function TransmitOralProcessWithInit(client, req) {
    return new Promise(function (resolve, reject) {
        // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
        client.TransmitOralProcessWithInit(req, function (err, response) {
            if (err) {
                reject(err)
                return;
            }
            // 请求正常返回，打印response对象
            resolve(response)
        });
    })
}

/**
 * 
 * @param {*} msec 
 */
function Sleep(msec) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, msec)
    })
}


/**
 * 用于较短时间音频的评估，例如单词或者短句，评估一次性发布所有音频数据
 */
async function EvaluationOnce(client) {
    try {
        console.log("-----------一次性评估示例------------")
        let sessionId = uuid.v1();
        // 初始化评估
        let initReq = new models.InitOralProcessRequest();
        initReq.SessionId = sessionId;
        initReq.RefText = "bike";
        // 设置评估为一次性评估
        initReq.WorkMode = 1;
        initReq.EvalMode = 1;
        initReq.ScoreCoeff = 3.5;
        let initRsp = await InitOralProcess(client, initReq);
        console.log("初始化返回结果：")
        console.log(initRsp.to_json_string())

        let data = fs.readFileSync(AUDIO_FOR_ONCE)
        let base64Str = data.toString("base64")

        // 传输评估音频数据
        let transReq = new models.TransmitOralProcessRequest();
        transReq.SessionId = sessionId;
        transReq.VoiceFileType = 3;
        transReq.VoiceEncodeType = 3;
        transReq.SeqId = 1;
        transReq.IsEnd = 1;
        transReq.UserVoiceData = base64Str;
        let transRsp = await TransmitOralProcess(client, transReq)
        console.log("评估结果：")
        console.log(transRsp.to_json_string())

    } catch (err) {
        console.log("评估失败", err)
    } finally {
        console.log("-----------完成一次性评估------------\n\n")
    }
}

/**
 * 中文评估，除了init参数 ServerType 以外，和英文评估完全一样
 */
async function EvaluationCn(client) {
    try {
        console.log("----------中文评估示例------------")
        let sessionId = uuid.v1();
        // 初始化评估
        let initReq = new models.InitOralProcessRequest();
        initReq.SessionId = sessionId;
        initReq.RefText = "轻轻的我走了，正如我轻轻的来";
        // 设置评估为一次性评估
        initReq.WorkMode = 1;
        initReq.EvalMode = 1;
        initReq.ServerType = 1;
        initReq.ScoreCoeff = 3.5;
        let initRsp = await InitOralProcess(client, initReq);
        console.log("初始化返回结果：")
        console.log(initRsp.to_json_string())

        let data = fs.readFileSync(AUDIO_FOR_CN)
        let base64Str = data.toString("base64")

        // 传输评估音频数据
        let transReq = new models.TransmitOralProcessRequest();
        transReq.SessionId = sessionId;
        transReq.VoiceFileType = 3;
        transReq.VoiceEncodeType = 3;
        transReq.SeqId = 1;
        transReq.IsEnd = 1;
        transReq.UserVoiceData = base64Str;
        let transRsp = await TransmitOralProcess(client, transReq)
        console.log("评估结果：")
        console.log(transRsp.to_json_string())

    } catch (err) {
        console.log("评估失败", err)
    } finally {
        console.log("-----------完成中文评估------------\n\n")
    }
}



/**
 *  中等长度的音频或者边录边传模式，将音频分片传输到评估服务
 */
async function EvaluationMultipleSeq(client) {

    console.log("----------流式评估示例------------")
    let startTime = Date.now()
    try {
        let sessionId = uuid.v1();
        // 初始化评估
        let initReq = new models.InitOralProcessRequest();
        initReq.SessionId = sessionId;
        initReq.RefText = "Rex was a big dog.";
        // 设置为流式评估
        initReq.WorkMode = 0;
        initReq.EvalMode = 1;
        initReq.ScoreCoeff = 3.5;
        let initRsp = await InitOralProcess(client, initReq);
        console.log("初始化返回结果：")
        console.log(initRsp.to_json_string())

        let data = fs.readFileSync(AUDIO_FOR_SEQ)

        let PKG_SIZE = 16 * 1024;
        let pkgNum = Math.ceil(data.length / PKG_SIZE);
        for (let i = 1; i <= pkgNum; i++) {
            let lastIndex = i * PKG_SIZE;
            if (i == pkgNum) {
                lastIndex = data.length;
            }
            let buf = data.slice((i - 1) * PKG_SIZE, lastIndex)
            let base64Str = buf.toString("base64")
            // 传输评估音频数据
            let transReq = new models.TransmitOralProcessRequest();
            transReq.SessionId = sessionId;
            transReq.VoiceFileType = 2;
            transReq.VoiceEncodeType = 1;
            transReq.SeqId = i;
            if (i == pkgNum) {
                transReq.IsEnd = 1;
            } else {
                transReq.IsEnd = 0;
            }
            transReq.UserVoiceData = base64Str;
            let transRsp = await TransmitOralProcess(client, transReq)
            console.log("评估结果：")
            console.log(transRsp.to_json_string())
            let costTime = Date.now() - startTime
            console.log("完成评估耗时:" + costTime)

        }

        console.log("-----------当评估超时，或者其它业务原因，可以重发一次 IsEnd = 1 的传输查询评估结果------------")
        let transReq = new models.TransmitOralProcessRequest();
        transReq.SessionId = sessionId;
        transReq.VoiceFileType = 2;
        transReq.VoiceEncodeType = 1;
        transReq.SeqId = 1;
        //查询结果设置 IsQuery 为1
        transReq.IsQuery = 1;
        transReq.IsEnd = 0;
        transReq.UserVoiceData = "";
        let transRsp = await TransmitOralProcess(client, transReq)
        console.log("查询结果：")
        console.log(transRsp.to_json_string())

    } catch (err) {
        console.log("评估失败", err)
    } finally {
        console.log("-----------完成流式评估------------\n\n")
    }
}


/**
 *  流式评估可以乱序发送，评估不需要等前一个分片的结果再发送后一个分片，这样会带来一定的往返延迟，实践中可以将所有音频数据并发发送到腾讯云评估
 */
async function EvaluationMultipleSeqDisorder(client) {

    console.log("---------乱序流式评估示例------------")
    let startTime = Date.now()
    try {
        let sessionId = uuid.v1();
        // 初始化评估
        let initReq = new models.InitOralProcessRequest();
        initReq.SessionId = sessionId;
        initReq.RefText = "Rex was a big dog.";
        // 设置为流式评估
        initReq.WorkMode = 0;
        initReq.EvalMode = 1;
        initReq.ScoreCoeff = 3.5;
        let initRsp = await InitOralProcess(client, initReq);
        console.log("初始化返回结果：")
        console.log(initRsp.to_json_string())

        let data = fs.readFileSync(AUDIO_FOR_SEQ)
        let PKG_SIZE = 16 * 1024;
        let pkgNum = Math.ceil(data.length / PKG_SIZE);
        let promises = [];

        for (let i = 1; i <= pkgNum; i++) {
            let lastIndex = i * PKG_SIZE;
            if (i == pkgNum) {
                lastIndex = data.length;
            }
            let buf = data.slice((i - 1) * PKG_SIZE, lastIndex)
            let base64Str = buf.toString("base64")
            // 传输评估音频数据
            let transReq = new models.TransmitOralProcessRequest();
            transReq.SessionId = sessionId;
            transReq.VoiceFileType = 2;
            transReq.VoiceEncodeType = 1;
            transReq.SeqId = i;
            if (i == pkgNum) {
                transReq.IsEnd = 1;
            } else {
                transReq.IsEnd = 0;
            }
            transReq.UserVoiceData = base64Str;
            promises.push(TransmitOralProcess(client, transReq))
        }
        let rsps = await Promise.all(promises)
        for (transRsp of rsps) {
            console.log("评估结果：")
            console.log(transRsp.to_json_string())
        }
        let costTime = Date.now() - startTime
        console.log("完成评估耗时,评估延迟比顺序执行的 EvaluationMultipleSeq 要低:" + costTime)

    } catch (err) {
        console.log("评估失败", err)
    } finally {
        console.log("-----------完成乱序流式评估------------\n\n")
    }
}


/**
 *  较长音频的评估，短时间内获取不了结果(评估时间超过 20s )，采用异步模式，主动轮询评估服务得到评估结果，可用于段落或者离线评估
 */
async function EvaluationAsync(client) {
    try {
        console.log("----------异步评估示例------------")
        let sessionId = uuid.v1();
        // 初始化评估
        let initReq = new models.InitOralProcessRequest();
        initReq.SessionId = sessionId;
        initReq.RefText = "I see sixteen eggs and eighteen apples.";
        // 设置为流式评估
        initReq.WorkMode = 0;
        initReq.EvalMode = 1;
        initReq.ScoreCoeff = 3.5;
        // 设置评估为异步
        initReq.IsAsync = 1;
        let initRsp = await InitOralProcess(client, initReq);
        console.log("初始化返回结果：")
        console.log(initRsp.to_json_string())

        let data = fs.readFileSync(AUDIO_FOR_ASYNC)
        let PKG_SIZE = 128 * 1024;
        let pkgNum = Math.ceil(data.length / PKG_SIZE);
        for (let i = 1; i <= pkgNum; i++) {
            let lastIndex = i * PKG_SIZE;
            if (i == pkgNum) {
                lastIndex = data.length;
            }
            let buf = data.slice((i - 1) * PKG_SIZE, lastIndex)
            let base64Str = buf.toString("base64")
            // 传输评估音频数据
            let transReq = new models.TransmitOralProcessRequest();
            transReq.SessionId = sessionId;
            transReq.VoiceFileType = 2;
            transReq.VoiceEncodeType = 1;
            transReq.SeqId = i;
            if (i == pkgNum) {
                transReq.IsEnd = 1;
            } else {
                transReq.IsEnd = 0;
            }
            transReq.UserVoiceData = base64Str;
            let transRsp = await TransmitOralProcess(client, transReq)
            console.log("评估结果：")
            console.log(transRsp.to_json_string())
            if (transRsp.Status == "Finished") {
                console.log("完成评估")
                return
            }
        }

        // 轮询评估结果直到评估完成
        for (let i = 0; i < 10; i++) {
            let transReq = new models.TransmitOralProcessRequest();
            transReq.SessionId = sessionId;
            transReq.VoiceFileType = 2;
            transReq.VoiceEncodeType = 1;
            transReq.SeqId = 1;
            //查询结果设置 IsQuery 为1
            transReq.IsQuery = 1;
            transReq.IsEnd = 0;
            transReq.UserVoiceData = "";
            let transRsp = await TransmitOralProcess(client, transReq)
            console.log("查询结果：")
            console.log(transRsp.to_json_string())
            if (transRsp.Status == "Finished") {
                console.log("完成评估")
                return
            }
            await Sleep(10 * 1000)
        }
    } catch (err) {
        console.log("评估失败", err)

    } finally {
        console.log("-----------完成异步评估------------\n\n")
    }
}



/**
 *  中等长度的音频或者边录边传模式，将音频分片传输到评估服务
 */
async function EvaluationTransmitOralProcessWithInit(client) {

    console.log("----------流式评估示例------------")
    let startTime = Date.now()
    try {
        let sessionId = uuid.v1();


        let data = fs.readFileSync(AUDIO_FOR_SEQ)
        let PKG_SIZE = 16 * 1024;
        let pkgNum = Math.ceil(data.length / PKG_SIZE);
        for (let i = 1; i <= pkgNum; i++) {
            let lastIndex = i * PKG_SIZE;
            if (i == pkgNum) {
                lastIndex = data.length;
            }
            let buf = data.slice((i - 1) * PKG_SIZE, lastIndex)
            let base64Str = buf.toString("base64")
            // 传输评估音频数据
            let transReq = new models.TransmitOralProcessWithInitRequest();
            transReq.SessionId = sessionId;
            transReq.VoiceFileType = 2;
            transReq.VoiceEncodeType = 1;
            transReq.RefText = "Rex was a big dog.";
            // 设置为流式评估
            transReq.WorkMode = 0;
            transReq.EvalMode = 1;
            transReq.ScoreCoeff = 3.5;
            transReq.SeqId = i;
            if (i == pkgNum) {
                transReq.IsEnd = 1;
            } else {
                transReq.IsEnd = 0;
            }
            transReq.UserVoiceData = base64Str;
            let transRsp = await TransmitOralProcessWithInit(client, transReq)
            console.log("评估结果：")
            console.log(transRsp.to_json_string())
            let costTime = Date.now() - startTime
            console.log("完成评估耗时:" + costTime)

        }

        console.log("-----------当评估超时，或者其它业务原因，可以重发一次 IsQuery = 1 的传输查询评估结果------------")
        let transReq = new models.TransmitOralProcessWithInitRequest();
        transReq.SessionId = sessionId;
        transReq.VoiceFileType = 2;
        transReq.VoiceEncodeType = 1;
        transReq.SeqId = 1;
        //查询结果设置 IsQuery 为1
        transReq.IsQuery = 1;
        transReq.IsEnd = 0;
        transReq.RefText = "Rex was a big dog.";
        transReq.WorkMode = 0;
        transReq.EvalMode = 1;
        transReq.ScoreCoeff = 3.5;
        transReq.UserVoiceData = "  ";
        let transRsp = await TransmitOralProcessWithInit(client, transReq)
        console.log("查询结果：")
        console.log(transRsp.to_json_string())

    } catch (err) {
        console.log("评估失败", err)
    } finally {
        console.log("-----------完成流式评估------------\n\n")
    }
}