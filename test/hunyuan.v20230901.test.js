
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

it("hunyuan.v20230901.SubmitHunyuanImageJob", async function () {
    try {
       const data = await client.SubmitHunyuanImageJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hunyuan.v20230901.ChatPro", async function () {
    try {
       const data = await client.ChatPro({})
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

it("hunyuan.v20230901.ChatStd", async function () {
    try {
       const data = await client.ChatStd({})
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
