
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

it("lkeap.v20240522.RetrieveKnowledge", async function () {
    try {
       const data = await client.RetrieveKnowledge({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.ModifyQA", async function () {
    try {
       const data = await client.ModifyQA({})
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

it("lkeap.v20240522.GetSplitDocumentResult", async function () {
    try {
       const data = await client.GetSplitDocumentResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.DescribeDoc", async function () {
    try {
       const data = await client.DescribeDoc({})
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

it("lkeap.v20240522.DeleteDocs", async function () {
    try {
       const data = await client.DeleteDocs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.DeleteQAs", async function () {
    try {
       const data = await client.DeleteQAs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.QueryRewrite", async function () {
    try {
       const data = await client.QueryRewrite({})
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

it("lkeap.v20240522.ModifyAttributeLabel", async function () {
    try {
       const data = await client.ModifyAttributeLabel({})
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

it("lkeap.v20240522.ListQAs", async function () {
    try {
       const data = await client.ListQAs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.DeleteAttributeLabels", async function () {
    try {
       const data = await client.DeleteAttributeLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.CreateAttributeLabel", async function () {
    try {
       const data = await client.CreateAttributeLabel({})
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

it("lkeap.v20240522.ListAttributeLabels", async function () {
    try {
       const data = await client.ListAttributeLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.ListDocs", async function () {
    try {
       const data = await client.ListDocs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.CreateKnowledgeBase", async function () {
    try {
       const data = await client.CreateKnowledgeBase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.ImportQAs", async function () {
    try {
       const data = await client.ImportQAs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.CreateQA", async function () {
    try {
       const data = await client.CreateQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.DeleteKnowledgeBase", async function () {
    try {
       const data = await client.DeleteKnowledgeBase({})
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

it("lkeap.v20240522.GetCharacterUsage", async function () {
    try {
       const data = await client.GetCharacterUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lkeap.v20240522.UploadDoc", async function () {
    try {
       const data = await client.UploadDoc({})
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

})
