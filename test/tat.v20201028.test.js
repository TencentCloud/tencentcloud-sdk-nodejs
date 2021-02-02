
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tat.v20201028.Client({
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
describe("tat.v20201028.test.js", function () {

it("tat.v20201028.DescribeCommands", async function () {
    try {
       const data = await client.DescribeCommands({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.DescribeInvocations", async function () {
    try {
       const data = await client.DescribeInvocations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.DescribeInvocationTasks", async function () {
    try {
       const data = await client.DescribeInvocationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.CreateCommand", async function () {
    try {
       const data = await client.CreateCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.DeleteCommand", async function () {
    try {
       const data = await client.DeleteCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.ModifyCommand", async function () {
    try {
       const data = await client.ModifyCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.DescribeAutomationAgentStatus", async function () {
    try {
       const data = await client.DescribeAutomationAgentStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.RunCommand", async function () {
    try {
       const data = await client.RunCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tat.v20201028.InvokeCommand", async function () {
    try {
       const data = await client.InvokeCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
