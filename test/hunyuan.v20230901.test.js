
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.hunyuan.v20230901.Client({
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
      endpoint: "cvm.ap-shanghai.tencentcloudapi.com",
    },
  },
})
describe("hunyuan.v20230901.test.js", function () {

it("hunyuan.v20230901.GetThread", async function () {
    try {
       const data = await client.GetThread({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.SubmitHunyuanImageJob", async function () {
    try {
       const data = await client.SubmitHunyuanImageJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.QueryHunyuanImageJob", async function () {
    try {
       const data = await client.QueryHunyuanImageJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.ChatTranslations", async function () {
    try {
       const data = await client.ChatTranslations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.GetThreadMessageList", async function () {
    try {
       const data = await client.GetThreadMessageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.GetEmbedding", async function () {
    try {
       const data = await client.GetEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.GroupChatCompletions", async function () {
    try {
       const data = await client.GroupChatCompletions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.RunThread", async function () {
    try {
       const data = await client.RunThread({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.SetPayMode", async function () {
    try {
       const data = await client.SetPayMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.QueryHunyuanImageChatJob", async function () {
    try {
       const data = await client.QueryHunyuanImageChatJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.CreateThread", async function () {
    try {
       const data = await client.CreateThread({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.FilesDeletions", async function () {
    try {
       const data = await client.FilesDeletions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.GetThreadMessage", async function () {
    try {
       const data = await client.GetThreadMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.SubmitHunyuanTo3DJob", async function () {
    try {
       const data = await client.SubmitHunyuanTo3DJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.FilesUploads", async function () {
    try {
       const data = await client.FilesUploads({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.ActivateService", async function () {
    try {
       const data = await client.ActivateService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.FilesList", async function () {
    try {
       const data = await client.FilesList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.QueryHunyuanTo3DJob", async function () {
    try {
       const data = await client.QueryHunyuanTo3DJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.SubmitHunyuanImageChatJob", async function () {
    try {
       const data = await client.SubmitHunyuanImageChatJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.ChatCompletions", async function () {
    try {
       const data = await client.ChatCompletions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.GetTokenCount", async function () {
    try {
       const data = await client.GetTokenCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.TextToImageLite", async function () {
    try {
       const data = await client.TextToImageLite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
