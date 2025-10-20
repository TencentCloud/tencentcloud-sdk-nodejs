
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ioa.v20220601.Client({
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
describe("ioa.v20220601.test.js", function () {

it("ioa.v20220601.DescribeAggrSoftDeviceList", async function () {
    try {
       const data = await client.DescribeAggrSoftDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.ExportDeviceDownloadTask", async function () {
    try {
       const data = await client.ExportDeviceDownloadTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.CreateDeviceTask", async function () {
    try {
       const data = await client.CreateDeviceTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeSoftwareInformation", async function () {
    try {
       const data = await client.DescribeSoftwareInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.CreateDLPFileDetectTask", async function () {
    try {
       const data = await client.CreateDLPFileDetectTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.CreateDeviceVirtualGroup", async function () {
    try {
       const data = await client.CreateDeviceVirtualGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDLPFileDetectTaskResult", async function () {
    try {
       const data = await client.DescribeDLPFileDetectTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeVirtualDevices", async function () {
    try {
       const data = await client.DescribeVirtualDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.ExportSoftwareInformationList", async function () {
    try {
       const data = await client.ExportSoftwareInformationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.CreateDLPFileDetectionTask", async function () {
    try {
       const data = await client.CreateDLPFileDetectionTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.CreatePrivilegeCode", async function () {
    try {
       const data = await client.CreatePrivilegeCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeRootAccountGroup", async function () {
    try {
       const data = await client.DescribeRootAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDLPFileDetectResult", async function () {
    try {
       const data = await client.DescribeDLPFileDetectResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeAggrSoftCategorySoftList", async function () {
    try {
       const data = await client.DescribeAggrSoftCategorySoftList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDLPEdgeNodes", async function () {
    try {
       const data = await client.DescribeDLPEdgeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeAggrSoftDetail", async function () {
    try {
       const data = await client.DescribeAggrSoftDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDeviceInfo", async function () {
    try {
       const data = await client.DescribeDeviceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDeviceHardwareInfoList", async function () {
    try {
       const data = await client.DescribeDeviceHardwareInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDeviceChildGroups", async function () {
    try {
       const data = await client.DescribeDeviceChildGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeAccountGroups", async function () {
    try {
       const data = await client.DescribeAccountGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDeviceDetailList", async function () {
    try {
       const data = await client.DescribeDeviceDetailList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeLocalAccounts", async function () {
    try {
       const data = await client.DescribeLocalAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDLPEdgeNodeGroups", async function () {
    try {
       const data = await client.DescribeDLPEdgeNodeGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDeviceVirtualGroups", async function () {
    try {
       const data = await client.DescribeDeviceVirtualGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeSoftCensusListByDevice", async function () {
    try {
       const data = await client.DescribeSoftCensusListByDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.ModifyVirtualDeviceGroups", async function () {
    try {
       const data = await client.ModifyVirtualDeviceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
