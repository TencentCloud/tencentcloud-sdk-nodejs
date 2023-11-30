import * as tencentcloud from "../../../../tencentcloud-sdk-nodejs"
import { SSEResponseModel } from "../../../tencentcloud/common/sse_response_model"
import { ChatProResponse } from "../../../tencentcloud/services/hunyuan/v20230901/hunyuan_models"

// 导入对应产品模块的client models
const HunyuanClient = tencentcloud.hunyuan.v20230901.Client

// 实例化要请求产品的client对象。profile可选。
const client = new HunyuanClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-guangzhou",
  profile: {
    httpProfile: {
      endpoint: 'hunyuan.tencentcloudapi.com'
    },
  },
})

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数

client.ChatStd({
  Messages: [{
    Role: 'user',
    Content: '你好, 可以讲个笑话吗'
  }]
}).then(
  async (res) => {
    res.on('message', (message) => {
      console.log(message)
    })
    // 或者
    for await (let message of res) {
      console.log(message)
    }
  },
  (err) => {
    console.error('error', err)
  }
)
