
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cds.v20180420.Client({
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
describe("cds.v20180420.test.js", function () {

it("cds.v20180420.ModifyDbauditInstancesRenewFlag", async function () {
    try {
       const data = await client.ModifyDbauditInstancesRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.DescribeReportList", async function () {
    try {
       const data = await client.DescribeReportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.CreateTimerReport", async function () {
    try {
       const data = await client.CreateTimerReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.DescribeDbauditInstances", async function () {
    try {
       const data = await client.DescribeDbauditInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.InquiryPriceDbauditInstance", async function () {
    try {
       const data = await client.InquiryPriceDbauditInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.DescribeReportMissionList", async function () {
    try {
       const data = await client.DescribeReportMissionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.DescribeDbauditUsedRegions", async function () {
    try {
       const data = await client.DescribeDbauditUsedRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.DescribeAssetsList", async function () {
    try {
       const data = await client.DescribeAssetsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.DescribeDbauditInstanceType", async function () {
    try {
       const data = await client.DescribeDbauditInstanceType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cds.v20180420.CreateReportPdf", async function () {
    try {
       const data = await client.CreateReportPdf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
