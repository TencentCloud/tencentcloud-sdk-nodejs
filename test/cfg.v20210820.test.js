
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cfg.v20210820.Client({
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
describe("cfg.v20210820.test.js", function () {

it("cfg.v20210820.CreateTaskFromTemplate", async function () {
    try {
       const data = await client.CreateTaskFromTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.DescribeTemplate", async function () {
    try {
       const data = await client.DescribeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.ExecuteTaskInstance", async function () {
    try {
       const data = await client.ExecuteTaskInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.DescribeTemplateList", async function () {
    try {
       const data = await client.DescribeTemplateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.ModifyTaskRunStatus", async function () {
    try {
       const data = await client.ModifyTaskRunStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.DescribeTaskList", async function () {
    try {
       const data = await client.DescribeTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.DescribeTaskExecuteLogs", async function () {
    try {
       const data = await client.DescribeTaskExecuteLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.DescribeTask", async function () {
    try {
       const data = await client.DescribeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.ExecuteTask", async function () {
    try {
       const data = await client.ExecuteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfg.v20210820.DeleteTask", async function () {
    try {
       const data = await client.DeleteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
