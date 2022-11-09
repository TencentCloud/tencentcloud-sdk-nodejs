
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cat.v20180409.Client({
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
describe("cat.v20180409.test.js", function () {

it("cat.v20180409.SuspendProbeTask", async function () {
    try {
       const data = await client.SuspendProbeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeProbeMetricData", async function () {
    try {
       const data = await client.DescribeProbeMetricData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeProbeTasks", async function () {
    try {
       const data = await client.DescribeProbeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.UpdateProbeTaskAttributes", async function () {
    try {
       const data = await client.UpdateProbeTaskAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeNodes", async function () {
    try {
       const data = await client.DescribeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeProbeNodes", async function () {
    try {
       const data = await client.DescribeProbeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.UpdateProbeTaskConfigurationList", async function () {
    try {
       const data = await client.UpdateProbeTaskConfigurationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.CreateProbeTasks", async function () {
    try {
       const data = await client.CreateProbeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeDetailedSingleProbeData", async function () {
    try {
       const data = await client.DescribeDetailedSingleProbeData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DeleteProbeTask", async function () {
    try {
       const data = await client.DeleteProbeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.ResumeProbeTask", async function () {
    try {
       const data = await client.ResumeProbeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
