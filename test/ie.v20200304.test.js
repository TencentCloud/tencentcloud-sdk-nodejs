
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ie.v20200304.Client({
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
describe("ie.v20200304.test.js", function () {

it("ie.v20200304.DescribeMediaQualityRestorationTaskRusult", async function () {
    try {
       const data = await client.DescribeMediaQualityRestorationTaskRusult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.CreateMediaProcessTask", async function () {
    try {
       const data = await client.CreateMediaProcessTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.StopMediaQualityRestorationTask", async function () {
    try {
       const data = await client.StopMediaQualityRestorationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.DescribeMediaProcessTaskResult", async function () {
    try {
       const data = await client.DescribeMediaProcessTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.CreateMediaQualityRestorationTask", async function () {
    try {
       const data = await client.CreateMediaQualityRestorationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.DescribeEditingTaskResult", async function () {
    try {
       const data = await client.DescribeEditingTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.StopMediaProcessTask", async function () {
    try {
       const data = await client.StopMediaProcessTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.DescribeQualityControlTaskResult", async function () {
    try {
       const data = await client.DescribeQualityControlTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.CreateQualityControlTask", async function () {
    try {
       const data = await client.CreateQualityControlTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ie.v20200304.CreateEditingTask", async function () {
    try {
       const data = await client.CreateEditingTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
