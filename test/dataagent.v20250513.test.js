
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dataagent.v20250513.Client({
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
describe("dataagent.v20250513.test.js", function () {

it("dataagent.v20250513.UploadAndCommitFile", async function () {
    try {
       const data = await client.UploadAndCommitFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.ModifyChunk", async function () {
    try {
       const data = await client.ModifyChunk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.DeleteChunk", async function () {
    try {
       const data = await client.DeleteChunk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.GetUploadJobDetails", async function () {
    try {
       const data = await client.GetUploadJobDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.GetKnowledgeBaseList", async function () {
    try {
       const data = await client.GetKnowledgeBaseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.AddChunk", async function () {
    try {
       const data = await client.AddChunk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.ChatAI", async function () {
    try {
       const data = await client.ChatAI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.CreateDataAgentSession", async function () {
    try {
       const data = await client.CreateDataAgentSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.ModifyKnowledgeBase", async function () {
    try {
       const data = await client.ModifyKnowledgeBase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.DeleteDataAgentSession", async function () {
    try {
       const data = await client.DeleteDataAgentSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.QueryChunkList", async function () {
    try {
       const data = await client.QueryChunkList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.GetKnowledgeBaseFileList", async function () {
    try {
       const data = await client.GetKnowledgeBaseFileList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.GetSessionDetails", async function () {
    try {
       const data = await client.GetSessionDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.GetJobsByKnowledgeBaseId", async function () {
    try {
       const data = await client.GetJobsByKnowledgeBaseId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dataagent.v20250513.StopChatAI", async function () {
    try {
       const data = await client.StopChatAI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
