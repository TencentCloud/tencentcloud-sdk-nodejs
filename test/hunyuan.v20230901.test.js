
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

it("hunyuan.v20230901.QueryHunyuanImageChatJob", async function () {
    try {
       const data = await client.QueryHunyuanImageChatJob({})
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

it("hunyuan.v20230901.SetPayMode", async function () {
    try {
       const data = await client.SetPayMode({})
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

it("hunyuan.v20230901.ActivateService", async function () {
    try {
       const data = await client.ActivateService({})
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

it("hunyuan.v20230901.GetEmbedding", async function () {
    try {
       const data = await client.GetEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
