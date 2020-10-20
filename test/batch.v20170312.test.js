
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.batch.v20170312.Client({
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
describe("batch.v20170312.test.js", function () {

it("batch.v20170312.DescribeComputeEnv", async function () {
    try {
       const data = await client.DescribeComputeEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.CreateTaskTemplate", async function () {
    try {
       const data = await client.CreateTaskTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.CreateCpmComputeEnv", async function () {
    try {
       const data = await client.CreateCpmComputeEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.TerminateComputeNode", async function () {
    try {
       const data = await client.TerminateComputeNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeJobs", async function () {
    try {
       const data = await client.DescribeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeAvailableCvmInstanceTypes", async function () {
    try {
       const data = await client.DescribeAvailableCvmInstanceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.AttachInstances", async function () {
    try {
       const data = await client.AttachInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.CreateComputeEnv", async function () {
    try {
       const data = await client.CreateComputeEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DeleteComputeEnv", async function () {
    try {
       const data = await client.DeleteComputeEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DetachInstances", async function () {
    try {
       const data = await client.DetachInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeTaskLogs", async function () {
    try {
       const data = await client.DescribeTaskLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.TerminateJob", async function () {
    try {
       const data = await client.TerminateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeTask", async function () {
    try {
       const data = await client.DescribeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeCvmZoneInstanceConfigInfos", async function () {
    try {
       const data = await client.DescribeCvmZoneInstanceConfigInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeJob", async function () {
    try {
       const data = await client.DescribeJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.SubmitJob", async function () {
    try {
       const data = await client.SubmitJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.TerminateComputeNodes", async function () {
    try {
       const data = await client.TerminateComputeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeTaskTemplates", async function () {
    try {
       const data = await client.DescribeTaskTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeInstanceCategories", async function () {
    try {
       const data = await client.DescribeInstanceCategories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DeleteTaskTemplates", async function () {
    try {
       const data = await client.DeleteTaskTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.TerminateTaskInstance", async function () {
    try {
       const data = await client.TerminateTaskInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.ModifyComputeEnv", async function () {
    try {
       const data = await client.ModifyComputeEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeJobSubmitInfo", async function () {
    try {
       const data = await client.DescribeJobSubmitInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeComputeEnvCreateInfo", async function () {
    try {
       const data = await client.DescribeComputeEnvCreateInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeComputeEnvActivities", async function () {
    try {
       const data = await client.DescribeComputeEnvActivities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeComputeEnvCreateInfos", async function () {
    try {
       const data = await client.DescribeComputeEnvCreateInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DeleteJob", async function () {
    try {
       const data = await client.DeleteJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeCpmOsInfo", async function () {
    try {
       const data = await client.DescribeCpmOsInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.DescribeComputeEnvs", async function () {
    try {
       const data = await client.DescribeComputeEnvs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.ModifyTaskTemplate", async function () {
    try {
       const data = await client.ModifyTaskTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("batch.v20170312.RetryJobs", async function () {
    try {
       const data = await client.RetryJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
