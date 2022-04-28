
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.essbasic.v20210526.Client({
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
describe("essbasic.v20210526.test.js", function () {

it("essbasic.v20210526.CreateFlowsByTemplates", async function () {
    try {
       const data = await client.CreateFlowsByTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.GetDownloadFlowUrl", async function () {
    try {
       const data = await client.GetDownloadFlowUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeTemplates", async function () {
    try {
       const data = await client.DescribeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowByFiles", async function () {
    try {
       const data = await client.ChannelCreateFlowByFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.PrepareFlows", async function () {
    try {
       const data = await client.PrepareFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.OperateChannelTemplate", async function () {
    try {
       const data = await client.OperateChannelTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateSealByImage", async function () {
    try {
       const data = await client.CreateSealByImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateSignUrls", async function () {
    try {
       const data = await client.CreateSignUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateConsoleLoginUrl", async function () {
    try {
       const data = await client.CreateConsoleLoginUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.SyncProxyOrganizationOperators", async function () {
    try {
       const data = await client.SyncProxyOrganizationOperators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeUsage", async function () {
    try {
       const data = await client.DescribeUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeFlowDetailInfo", async function () {
    try {
       const data = await client.DescribeFlowDetailInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.SyncProxyOrganization", async function () {
    try {
       const data = await client.SyncProxyOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeResourceUrlsByFlows", async function () {
    try {
       const data = await client.DescribeResourceUrlsByFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.UploadFiles", async function () {
    try {
       const data = await client.UploadFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
