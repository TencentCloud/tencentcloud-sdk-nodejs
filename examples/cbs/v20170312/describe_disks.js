const tencentcloud = require("tencentcloud-sdk-nodejs-cbs")

// 导入对应产品模块的client models
const CbsClient = tencentcloud.cbs.v20170312.Client

// 实例化要请求产品的client对象。profile可选。
const client = new CbsClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "TC3-HMAC-SHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
    },
  },
})

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数

client.DescribeDisks({}, function (err, response) {
  // 请求异常返回，打印异常信息
  if (err) {
    console.log(err)
    return
  }
  // 请求正常返回，打印response对象
  console.log(response)
})
