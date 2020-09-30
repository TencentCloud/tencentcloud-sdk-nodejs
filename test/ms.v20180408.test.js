
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

it("ms.v20180408.CreateScanInstances", async function () {
    try {
       const data = await client.CreateScanInstances({})
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

it("ms.v20180408.DeleteScanInstances", async function () {
    try {
       const data = await client.DeleteScanInstances({})
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

it("ms.v20180408.CreateCosSecKeyInstance", async function () {
    try {
       const data = await client.CreateCosSecKeyInstance({})
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

it("ms.v20180408.DescribeScanResults", async function () {
    try {
       const data = await client.DescribeScanResults({})
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

it("ms.v20180408.CreateShieldInstance", async function () {
    try {
       const data = await client.CreateShieldInstance({})
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

it("ms.v20180408.CreateShieldPlanInstance", async function () {
    try {
       const data = await client.CreateShieldPlanInstance({})
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

it("ms.v20180408.DescribeScanInstances", async function () {
    try {
       const data = await client.DescribeScanInstances({})
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

})
