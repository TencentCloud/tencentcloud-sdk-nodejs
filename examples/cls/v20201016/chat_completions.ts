import { cls } from "tencentcloud-sdk-nodejs-cls"
import { SSEResponseModel } from 'tencentcloud-sdk-nodejs-common/tencentcloud/common/sse_response_model'

// 导入对应产品模块的client models
const ClsClient = cls.v20201016.Client

// 1. 实例化要请求产品的 client 对象
// 从环境变量中获取密钥 ID 和密钥 Key，这是访问云 API 的必需凭证。
const client = new ClsClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-guangzhou",
  profile: {
    httpProfile: {
      reqTimeout: 300, // 流式接口可能耗时较长，因此将请求超时时间设置为 300 秒。
      endpoint: 'cls.ai.tencentcloudapi.com' // 通过SSE流式调用此接口时，请务必设置请求域名（Endpoint）为 cls.ai.tencentcloudapi.com。
    },
  },
})

// 2. 构造请求参数
const params = {
  // 指定要使用的功能，例如 "text2sql"。
  Model: 'text2sql',
  // 设置对话消息，角色为 "user"，内容为用户的提问。
  Messages: [{
    Role: 'user',
    Content: '状态码200, 统计日志条数'
  }],
  // 设置元数据，传递日志主题地域和日志主题 ID
  Metadata: [
    {
      Key: "topic_region",
      Value: "ap-guangzhou"
    },
    {
      Key: "topic_id",
      Value: "xxxxxxxx-xxxx"
    }
  ]
}

// 3. 流式调用
// CLS ChatCompletions 同时支持流式和非流式两种模式。
// 将 Stream 参数设置为 true，表示以流式方式获取响应。
async function main() {
  await client.ChatCompletions({
    ...params,
    Stream: true, // 流式调用开关，默认为 false
  }).then(
    (res) => new Promise<void>((resolve, reject) => {
      // 方式一：使用事件监听逐个处理返回的事件
      (res as SSEResponseModel).on('message', (message) => {
        // 跳过心跳等 data 为空的事件（如服务端每隔一段时间发送的 :heartbeat 注释）
        if (!message.data) return
        // 服务端通过 event: error 返回应用层错误
        if (message.event === 'error') {
          const err = JSON.parse(message.data)
          console.error('\n[流式] error', err.Response.Error)
          return
        }
        const data = JSON.parse(message.data)
        for (const choice of (data.Choices || [])) {
          // 实时输出思考过程（ReasoningContent）
          if (choice.Delta.ReasoningContent) {
            process.stdout.write(choice.Delta.ReasoningContent)
          }
          // 实时输出回复内容（Content）
          if (choice.Delta.Content) {
            process.stdout.write(choice.Delta.Content)
          }
        }
      });
      (res as SSEResponseModel).on('close', () => {
        process.stdout.write('\n')
        console.log('[流式] 完成，开始非流式调用...')
        resolve()
      });
      (res as SSEResponseModel).on('error', reject)

      // // 方式二：使用异步迭代器（与方式一二选一，不可同时使用）
      // for await (const message of (res as SSEResponseModel)) {
      //   if (!message.data) continue
      //   if (message.event === 'error') {
      //     const err = JSON.parse(message.data)
      //     console.error('\n[流式] error', err.Response.Error)
      //     break
      //   }
      //   const data = JSON.parse(message.data)
      //   for (const choice of (data.Choices || [])) {
      //     if (choice.Delta.ReasoningContent) {
      //       process.stdout.write(choice.Delta.ReasoningContent)
      //     }
      //     if (choice.Delta.Content) {
      //       process.stdout.write(choice.Delta.Content)
      //     }
      //   }
      // }
      // process.stdout.write('\n')
      // console.log('[流式] 输出完毕')
    }),
    (err) => {
      console.error('[流式] error', err)
    }
  )

  // 4. 非流式调用
  // 通过 Stream=false 参数来指定非 stream 协议，一次性拿到结果。
  await client.ChatCompletions({
    ...params,
    Stream: false,
  }).then(
    (res) => {
      if (res.Choices[0].Message.ReasoningContent) {
        console.log("思考过程：", res.Choices[0].Message.ReasoningContent)
      }
      console.log("[非流式] 回复内容：\n" + res.Choices[0].Message.Content)
    },
    (err) => {
      console.error('[非流式] error', err)
    }
  )
}

main()
