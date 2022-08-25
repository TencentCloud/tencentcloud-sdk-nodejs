
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.oceanus.v20190422.Client({
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
describe("oceanus.v20190422.test.js", function () {

it("oceanus.v20190422.DescribeTreeJobs", async function () {
    try {
       const data = await client.DescribeTreeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeTreeResources", async function () {
    try {
       const data = await client.DescribeTreeResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.CopyJobs", async function () {
    try {
       const data = await client.CopyJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DeleteResourceConfigs", async function () {
    try {
       const data = await client.DeleteResourceConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.CreateResourceConfig", async function () {
    try {
       const data = await client.CreateResourceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DeleteTableConfig", async function () {
    try {
       const data = await client.DeleteTableConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeResourceConfigs", async function () {
    try {
       const data = await client.DescribeResourceConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeJobSavepoint", async function () {
    try {
       const data = await client.DescribeJobSavepoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeResources", async function () {
    try {
       const data = await client.DescribeResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeClusters", async function () {
    try {
       const data = await client.DescribeClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.CreateJob", async function () {
    try {
       const data = await client.CreateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.TriggerJobSavepoint", async function () {
    try {
       const data = await client.TriggerJobSavepoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.RunJobs", async function () {
    try {
       const data = await client.RunJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DeleteJobs", async function () {
    try {
       const data = await client.DeleteJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.CreateFolder", async function () {
    try {
       const data = await client.CreateFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.CheckSavepoint", async function () {
    try {
       const data = await client.CheckSavepoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.CreateJobConfig", async function () {
    try {
       const data = await client.CreateJobConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.StopJobs", async function () {
    try {
       const data = await client.StopJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeResourceRelatedJobs", async function () {
    try {
       const data = await client.DescribeResourceRelatedJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DeleteResources", async function () {
    try {
       const data = await client.DeleteResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeJobs", async function () {
    try {
       const data = await client.DescribeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.ModifyJob", async function () {
    try {
       const data = await client.ModifyJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.CreateResource", async function () {
    try {
       const data = await client.CreateResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeSystemResources", async function () {
    try {
       const data = await client.DescribeSystemResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("oceanus.v20190422.DescribeJobConfigs", async function () {
    try {
       const data = await client.DescribeJobConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
