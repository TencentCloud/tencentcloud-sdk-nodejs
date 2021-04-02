
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.asw.v20200722.Client({
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
describe("asw.v20200722.test.js", function () {

it("asw.v20200722.StartExecution", async function () {
    try {
       const data = await client.StartExecution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.StopExecution", async function () {
    try {
       const data = await client.StopExecution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.DescribeExecutionHistory", async function () {
    try {
       const data = await client.DescribeExecutionHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.DescribeExecution", async function () {
    try {
       const data = await client.DescribeExecution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.DescribeFlowServices", async function () {
    try {
       const data = await client.DescribeFlowServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.DescribeExecutions", async function () {
    try {
       const data = await client.DescribeExecutions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.CreateFlowService", async function () {
    try {
       const data = await client.CreateFlowService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.DescribeFlowServiceDetail", async function () {
    try {
       const data = await client.DescribeFlowServiceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asw.v20200722.ModifyFlowService", async function () {
    try {
       const data = await client.ModifyFlowService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
