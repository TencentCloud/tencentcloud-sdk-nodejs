
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

it("cii.v20210408.DescribeStructureTaskResult", async function () {
    try {
       const data = await client.DescribeStructureTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cii.v20210408.CreateStructureTaskTest", async function () {
    try {
       const data = await client.CreateStructureTaskTest({})
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

it("cii.v20210408.CreateStructureTask", async function () {
    try {
       const data = await client.CreateStructureTask({})
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

it("cii.v20210408.DescribeStructureTaskResultTest", async function () {
    try {
       const data = await client.DescribeStructureTaskResultTest({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
