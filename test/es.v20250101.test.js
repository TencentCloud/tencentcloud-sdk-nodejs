
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.es.v20250101.Client({
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
describe("es.v20250101.test.js", function () {

it("es.v20250101.ChunkDocumentAsync", async function () {
    try {
       const data = await client.ChunkDocumentAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.GetDocumentChunkResult", async function () {
    try {
       const data = await client.GetDocumentChunkResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.ParseDocumentAsync", async function () {
    try {
       const data = await client.ParseDocumentAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.GetDocumentParseResult", async function () {
    try {
       const data = await client.GetDocumentParseResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.GetTextEmbedding", async function () {
    try {
       const data = await client.GetTextEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.ParseDocument", async function () {
    try {
       const data = await client.ParseDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.ChatCompletions", async function () {
    try {
       const data = await client.ChatCompletions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.ChunkDocument", async function () {
    try {
       const data = await client.ChunkDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.GetMultiModalEmbedding", async function () {
    try {
       const data = await client.GetMultiModalEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20250101.RunRerank", async function () {
    try {
       const data = await client.RunRerank({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
