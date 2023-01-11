
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.acp.v20220105.Client({
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
describe("acp.v20220105.test.js", function () {

it("acp.v20220105.CreateAppScanTask", async function () {
    try {
       const data = await client.CreateAppScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("acp.v20220105.CreateAppScanTaskRepeat", async function () {
    try {
       const data = await client.CreateAppScanTaskRepeat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("acp.v20220105.DescribeChannelTaskReportUrl", async function () {
    try {
       const data = await client.DescribeChannelTaskReportUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("acp.v20220105.DescribeResourceUsageInfo", async function () {
    try {
       const data = await client.DescribeResourceUsageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("acp.v20220105.DescribeScanTaskStatus", async function () {
    try {
       const data = await client.DescribeScanTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("acp.v20220105.DescribeScanTaskReportUrl", async function () {
    try {
       const data = await client.DescribeScanTaskReportUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("acp.v20220105.DescribeFileTicket", async function () {
    try {
       const data = await client.DescribeFileTicket({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("acp.v20220105.DescribeScanTaskList", async function () {
    try {
       const data = await client.DescribeScanTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
