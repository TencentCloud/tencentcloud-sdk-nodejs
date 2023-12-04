
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ms.v20180408.Client({
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
describe("ms.v20180408.test.js", function () {

it("ms.v20180408.RequestLocalTask", async function () {
    try {
       const data = await client.RequestLocalTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeResourceInstances", async function () {
    try {
       const data = await client.DescribeResourceInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeShieldPlanInstance", async function () {
    try {
       const data = await client.DescribeShieldPlanInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeShieldInstances", async function () {
    try {
       const data = await client.DescribeShieldInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeUrlDetectionResult", async function () {
    try {
       const data = await client.DescribeUrlDetectionResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CreateEncryptInstance", async function () {
    try {
       const data = await client.CreateEncryptInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeEncryptPlan", async function () {
    try {
       const data = await client.DescribeEncryptPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeOrderInstances", async function () {
    try {
       const data = await client.DescribeOrderInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.UpdateLocalTaskResult", async function () {
    try {
       const data = await client.UpdateLocalTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CreateShieldPlanInstance", async function () {
    try {
       const data = await client.CreateShieldPlanInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CreateResourceInstances", async function () {
    try {
       const data = await client.CreateResourceInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CreateBindInstance", async function () {
    try {
       const data = await client.CreateBindInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CreateShieldInstance", async function () {
    try {
       const data = await client.CreateShieldInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DeleteShieldInstances", async function () {
    try {
       const data = await client.DeleteShieldInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeShieldResult", async function () {
    try {
       const data = await client.DescribeShieldResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.UpdateClientState", async function () {
    try {
       const data = await client.UpdateClientState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DestroyResourceInstances", async function () {
    try {
       const data = await client.DestroyResourceInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CreateCosSecKeyInstance", async function () {
    try {
       const data = await client.CreateCosSecKeyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CancelEncryptTask", async function () {
    try {
       const data = await client.CancelEncryptTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeUserBaseInfoInstance", async function () {
    try {
       const data = await client.DescribeUserBaseInfoInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeApkDetectionResult", async function () {
    try {
       const data = await client.DescribeApkDetectionResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.DescribeEncryptInstances", async function () {
    try {
       const data = await client.DescribeEncryptInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ms.v20180408.CreateOrderInstance", async function () {
    try {
       const data = await client.CreateOrderInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
