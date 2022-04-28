
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ess.v20201111.Client({
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
describe("ess.v20201111.test.js", function () {

it("ess.v20201111.StartFlow", async function () {
    try {
       const data = await client.StartFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CancelFlow", async function () {
    try {
       const data = await client.CancelFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateDocument", async function () {
    try {
       const data = await client.CreateDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFileUrls", async function () {
    try {
       const data = await client.DescribeFileUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlow", async function () {
    try {
       const data = await client.CreateFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateSchemeUrl", async function () {
    try {
       const data = await client.CreateSchemeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeThirdPartyAuthCode", async function () {
    try {
       const data = await client.DescribeThirdPartyAuthCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFlowBriefs", async function () {
    try {
       const data = await client.DescribeFlowBriefs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowByFiles", async function () {
    try {
       const data = await client.CreateFlowByFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.UploadFiles", async function () {
    try {
       const data = await client.UploadFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
