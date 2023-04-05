
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.trro.v20220325.Client({
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
describe("trro.v20220325.test.js", function () {

it("trro.v20220325.DescribeProjectInfo", async function () {
    try {
       const data = await client.DescribeProjectInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.GetDevices", async function () {
    try {
       const data = await client.GetDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.ModifyDevice", async function () {
    try {
       const data = await client.ModifyDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribePolicy", async function () {
    try {
       const data = await client.DescribePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.GetLicenseStat", async function () {
    try {
       const data = await client.GetLicenseStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeSessionStatisticsByInterval", async function () {
    try {
       const data = await client.DescribeSessionStatisticsByInterval({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.BoundLicenses", async function () {
    try {
       const data = await client.BoundLicenses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.BatchDeletePolicy", async function () {
    try {
       const data = await client.BatchDeletePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.GetLicenses", async function () {
    try {
       const data = await client.GetLicenses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeDeviceList", async function () {
    try {
       const data = await client.DescribeDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.ModifyProject", async function () {
    try {
       const data = await client.ModifyProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeDeviceSessionDetails", async function () {
    try {
       const data = await client.DescribeDeviceSessionDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.ModifyPolicy", async function () {
    try {
       const data = await client.ModifyPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.CreateDevice", async function () {
    try {
       const data = await client.CreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.BatchDeleteDevices", async function () {
    try {
       const data = await client.BatchDeleteDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeSessionStatistics", async function () {
    try {
       const data = await client.DescribeSessionStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeDeviceInfo", async function () {
    try {
       const data = await client.DescribeDeviceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeDeviceSessionList", async function () {
    try {
       const data = await client.DescribeDeviceSessionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.CreateProject", async function () {
    try {
       const data = await client.CreateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeRecentSessionList", async function () {
    try {
       const data = await client.DescribeRecentSessionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.GetDeviceLicense", async function () {
    try {
       const data = await client.GetDeviceLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DeleteProject", async function () {
    try {
       const data = await client.DeleteProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trro.v20220325.DescribeProjectList", async function () {
    try {
       const data = await client.DescribeProjectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
