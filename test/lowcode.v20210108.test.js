
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.lowcode.v20210108.Client({
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
describe("lowcode.v20210108.test.js", function () {

it("lowcode.v20210108.CreateKnowledgeSet", async function () {
    try {
       const data = await client.CreateKnowledgeSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.CheckDeployApp", async function () {
    try {
       const data = await client.CheckDeployApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.UpdateKnowledgeSet", async function () {
    try {
       const data = await client.UpdateKnowledgeSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.SearchDocList", async function () {
    try {
       const data = await client.SearchDocList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DescribeKnowledgeSetList", async function () {
    try {
       const data = await client.DescribeKnowledgeSetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DescribeDataSourceList", async function () {
    try {
       const data = await client.DescribeDataSourceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DeleteKnowledgeDocumentSet", async function () {
    try {
       const data = await client.DeleteKnowledgeDocumentSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DescribeKnowledgeDocumentSetDetail", async function () {
    try {
       const data = await client.DescribeKnowledgeDocumentSetDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.UploadKnowledgeDocumentSet", async function () {
    try {
       const data = await client.UploadKnowledgeDocumentSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DeleteAppBindWxApp", async function () {
    try {
       const data = await client.DeleteAppBindWxApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DescribeKnowledgeDocumentSetList", async function () {
    try {
       const data = await client.DescribeKnowledgeDocumentSetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DeployApp", async function () {
    try {
       const data = await client.DeployApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.PutWxAppIdToWeApp", async function () {
    try {
       const data = await client.PutWxAppIdToWeApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lowcode.v20210108.DeleteKnowledgeSet", async function () {
    try {
       const data = await client.DeleteKnowledgeSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
