const { CommonClient } = require("../../../tencentcloud/common/common_client")
const protobuf = require("protobufjs")
const lz4 = require("lz4")
const path = require("path")

// 实例化要请求产品的client对象。profile可选。
const clientConfig = {
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-guangzhou",
  profile: {
    httpProfile: {
      endpoint: "cls.tencentcloudapi.com",
      headers: {
        "X-CLS-TopicId": "", // 替换为自己业务的 topic
        "X-CLS-HashKey": "", // 可选参数，具体参考官方文档：https://cloud.tencent.com/document/product/614/59470
        "X-CLS-CompressType": "lz4", // lz4压缩方式, 空字符串意味不压缩
      },
    },
  },
}

// 实例化要请求产品的client对象,clientProfile是可选的
const client = new CommonClient("cls.tencentcloudapi.com", "2020-10-16", clientConfig)
// lz4 压缩数据
const params = compress(getBodyInfo())
client.requestOctetStream("UploadLog", params).then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.error("error", err)
  }
)

function compress(input) {
  const output = Buffer.alloc(lz4.encodeBound(input.length))
  const compressedBlockSize = lz4.encodeBlock(input, output)
  return output.slice(0, compressedBlockSize)
}

function getBodyInfo() {
  const root = protobuf.loadSync(path.join(__dirname, "cls.proto"))
  const LogGroupList = root.lookupType("cls.LogGroupList")
  const payload = {
    logGroupList: [
      {
        logs: [
          {
            time: Date.now(),
            contents: [
              {
                key: "name",
                value: "张三",
              },
              {
                key: "age",
                value: "18",
              },
            ],
          },
        ],
      },
    ],
  }
  return LogGroupList.encode(payload).finish()
}
