const tencentcloud = require("../../../../tencentcloud-sdk-nodejs")

// 导入对应产品模块的client models
const EccClient = tencentcloud.ecc.v20181213.Client

// 实例化要请求产品的client对象。profile可选。
const client = new EccClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "HmacSHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
    },
  },
})

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数

client.ECC(
  {
    Content: "this composition content",
  },
  function (err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
      console.log(err)
      return
    }
    // 请求正常返回，打印response对象
    console.log(response)
  }
)
