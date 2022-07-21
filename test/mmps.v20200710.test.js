
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mmps.v20200710.Client({
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
describe("mmps.v20200710.test.js", function () {

it("mmps.v20200710.CreateAppScanTask", async function () {
    try {
       const data = await client.CreateAppScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.CreateFlySecMiniAppProfessionalScanTask", async function () {
    try {
       const data = await client.CreateFlySecMiniAppProfessionalScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeFlySecMiniAppScanReportList", async function () {
    try {
       const data = await client.DescribeFlySecMiniAppScanReportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeFlySecMiniAppReportUrl", async function () {
    try {
       const data = await client.DescribeFlySecMiniAppReportUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeFlySecMiniAppScanTaskStatus", async function () {
    try {
       const data = await client.DescribeFlySecMiniAppScanTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeResourceUsageInfo", async function () {
    try {
       const data = await client.DescribeResourceUsageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.CreateFlySecMiniAppScanTask", async function () {
    try {
       const data = await client.CreateFlySecMiniAppScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.CreateFlySecMiniAppScanTaskRepeat", async function () {
    try {
       const data = await client.CreateFlySecMiniAppScanTaskRepeat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeScanTaskReportUrl", async function () {
    try {
       const data = await client.DescribeScanTaskReportUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeScanTaskList", async function () {
    try {
       const data = await client.DescribeScanTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeFlySecMiniAppScanTaskList", async function () {
    try {
       const data = await client.DescribeFlySecMiniAppScanTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeScanTaskStatus", async function () {
    try {
       const data = await client.DescribeScanTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeBasicDiagnosisResourceUsageInfo", async function () {
    try {
       const data = await client.DescribeBasicDiagnosisResourceUsageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.CreateAppScanTaskRepeat", async function () {
    try {
       const data = await client.CreateAppScanTaskRepeat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mmps.v20200710.DescribeFlySecMiniAppScanTaskParam", async function () {
    try {
       const data = await client.DescribeFlySecMiniAppScanTaskParam({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
