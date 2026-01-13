
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ags.v20250920.Client({
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
describe("ags.v20250920.test.js", function () {

it("ags.v20250920.CreatePreCacheImageTask", async function () {
    try {
       const data = await client.CreatePreCacheImageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.UpdateSandboxInstance", async function () {
    try {
       const data = await client.UpdateSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.StartSandboxInstance", async function () {
    try {
       const data = await client.StartSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.AcquireSandboxInstanceToken", async function () {
    try {
       const data = await client.AcquireSandboxInstanceToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribePreCacheImageTask", async function () {
    try {
       const data = await client.DescribePreCacheImageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSandboxToolList", async function () {
    try {
       const data = await client.DescribeSandboxToolList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeAPIKeyList", async function () {
    try {
       const data = await client.DescribeAPIKeyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSandboxInstanceList", async function () {
    try {
       const data = await client.DescribeSandboxInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateAPIKey", async function () {
    try {
       const data = await client.CreateAPIKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteSandboxTool", async function () {
    try {
       const data = await client.DeleteSandboxTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.StopSandboxInstance", async function () {
    try {
       const data = await client.StopSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteAPIKey", async function () {
    try {
       const data = await client.DeleteAPIKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateSandboxTool", async function () {
    try {
       const data = await client.CreateSandboxTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.UpdateSandboxTool", async function () {
    try {
       const data = await client.UpdateSandboxTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
