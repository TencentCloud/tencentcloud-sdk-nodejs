const tencentcloud = require("../../../../tencentcloud-sdk-nodejs")

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client

// 实例化要请求产品的client对象。profile可选。
const client = new CvmClient({
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

client.DescribeInstances(
  {
    Filters: [
      {
        Name: "zone",
        Values: ["ap-shanghai-1", "ap-shanghai-2"],
      },
      {
        Name: "instance-charge-type",
        Values: ["POSTPAID_BY_HOUR"],
      },
    ],
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
