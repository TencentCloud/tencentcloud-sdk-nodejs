import * as tencentcloud from "../../../../tencentcloud-sdk-nodejs"

// 导入对应产品模块的client models
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

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client
  .DescribeInstances({
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
  })
  .then(
    (data) => {
      console.log(data)
    },
    (err) => {
      console.error("error", err)
    }
  )
