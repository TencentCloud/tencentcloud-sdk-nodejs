
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bma.v20210624.Client({
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
describe("bma.v20210624.test.js", function () {

it("bma.v20210624.UpdateCRWork", async function () {
    try {
       const data = await client.UpdateCRWork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRDesktopCode", async function () {
    try {
       const data = await client.CreateCRDesktopCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeBPCompanyInfo", async function () {
    try {
       const data = await client.DescribeBPCompanyInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRUserVerify", async function () {
    try {
       const data = await client.CreateCRUserVerify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRWork", async function () {
    try {
       const data = await client.CreateCRWork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateBPOfflineTicket", async function () {
    try {
       const data = await client.CreateBPOfflineTicket({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeCRObtainDetail", async function () {
    try {
       const data = await client.DescribeCRObtainDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRBlock", async function () {
    try {
       const data = await client.CreateCRBlock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.ModifyCRObtainStatus", async function () {
    try {
       const data = await client.ModifyCRObtainStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRRight", async function () {
    try {
       const data = await client.CreateCRRight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.ModifyBPOfflineAttachment", async function () {
    try {
       const data = await client.ModifyBPOfflineAttachment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.ModifyCRMonitor", async function () {
    try {
       const data = await client.ModifyCRMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeCRMonitorDetail", async function () {
    try {
       const data = await client.DescribeCRMonitorDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateBPFakeURL", async function () {
    try {
       const data = await client.CreateBPFakeURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRRightFile", async function () {
    try {
       const data = await client.CreateCRRightFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.ModifyCRWhiteList", async function () {
    try {
       const data = await client.ModifyCRWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.ModifyCRBlockStatus", async function () {
    try {
       const data = await client.ModifyCRBlockStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateBPFalseTicket", async function () {
    try {
       const data = await client.CreateBPFalseTicket({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateBPProtectURLs", async function () {
    try {
       const data = await client.CreateBPProtectURLs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeBPReportFakeURLs", async function () {
    try {
       const data = await client.DescribeBPReportFakeURLs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeBPFakeURLs", async function () {
    try {
       const data = await client.DescribeBPFakeURLs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeCRWorkInfo", async function () {
    try {
       const data = await client.DescribeCRWorkInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeCRMonitors", async function () {
    try {
       const data = await client.DescribeCRMonitors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.ModifyCRRightStatus", async function () {
    try {
       const data = await client.ModifyCRRightStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateBPOfflineAttachment", async function () {
    try {
       const data = await client.CreateBPOfflineAttachment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.DescribeBPProtectURLs", async function () {
    try {
       const data = await client.DescribeBPProtectURLs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRTort", async function () {
    try {
       const data = await client.CreateCRTort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20210624.CreateCRCompanyVerify", async function () {
    try {
       const data = await client.CreateCRCompanyVerify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
