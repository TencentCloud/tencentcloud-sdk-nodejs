
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.lkeap.v20240522.Client({
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
describe("lkeap.v20240522.test.js", function () {

it("lkeap.v20240522.QueryRewrite", async function () {
    try {
       const data = await client.QueryRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.CreateReconstructDocumentFlow", async function () {
    try {
       const data = await client.CreateReconstructDocumentFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.GetCharacterUsage", async function () {
    try {
       const data = await client.GetCharacterUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.GetSplitDocumentResult", async function () {
    try {
       const data = await client.GetSplitDocumentResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.CreateSplitDocumentFlow", async function () {
    try {
       const data = await client.CreateSplitDocumentFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.ReconstructDocumentSSE", async function () {
    try {
       const data = await client.ReconstructDocumentSSE({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.RunRerank", async function () {
    try {
       const data = await client.RunRerank({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.GetReconstructDocumentResult", async function () {
    try {
       const data = await client.GetReconstructDocumentResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.CancelTask", async function () {
    try {
       const data = await client.CancelTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.ChatCompletions", async function () {
    try {
       const data = await client.ChatCompletions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.GetEmbedding", async function () {
    try {
       const data = await client.GetEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
