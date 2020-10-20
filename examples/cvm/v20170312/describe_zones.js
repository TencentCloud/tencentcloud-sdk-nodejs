const tencentcloud = require("../../../../tencentcloud-sdk-nodejs")

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client
// 实例化要请求产品的client对象
const client = new CvmClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
})
// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.DescribeZones(null, function (err, response) {
  // 请求异常返回，打印异常信息
  if (err) {
    console.log(err)
    return
  }
  // 请求正常返回，打印response对象
  console.log(response)
})
