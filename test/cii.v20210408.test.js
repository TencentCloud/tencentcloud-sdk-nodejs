
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cii.v20210408.Client({
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
describe("cii.v20210408.test.js", function () {

it("cii.v20210408.DescribeStructureDifference", async function () {
    try {
       const data = await client.DescribeStructureDifference({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.DescribeStructureTaskResult", async function () {
    try {
       const data = await client.DescribeStructureTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.UploadMedicalFile", async function () {
    try {
       const data = await client.UploadMedicalFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.CreateUnderwriteTaskById", async function () {
    try {
       const data = await client.CreateUnderwriteTaskById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.DescribeUnderwriteTask", async function () {
    try {
       const data = await client.DescribeUnderwriteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.DescribeMachineUnderwrite", async function () {
    try {
       const data = await client.DescribeMachineUnderwrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.CreateStructureTask", async function () {
    try {
       const data = await client.CreateStructureTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.CreateAutoClassifyStructureTask", async function () {
    try {
       const data = await client.CreateAutoClassifyStructureTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.DescribeStructCompareData", async function () {
    try {
       const data = await client.DescribeStructCompareData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.DescribeQualityScore", async function () {
    try {
       const data = await client.DescribeQualityScore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.DescribeStructureResult", async function () {
    try {
       const data = await client.DescribeStructureResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.DescribeReportClassify", async function () {
    try {
       const data = await client.DescribeReportClassify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.AddSubStructureTasks", async function () {
    try {
       const data = await client.AddSubStructureTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
