
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.eis.v20210601.Client({
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
describe("eis.v20210601.test.js", function () {

it("eis.v20210601.GetRuntimeMC", async function () {
    try {
       const data = await client.GetRuntimeMC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eis.v20210601.ListDeployableRuntimesMC", async function () {
    try {
       const data = await client.ListDeployableRuntimesMC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eis.v20210601.GetRuntimeResourceMonitorMetricMC", async function () {
    try {
       const data = await client.GetRuntimeResourceMonitorMetricMC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eis.v20210601.ListRuntimeDeployedInstancesMC", async function () {
    try {
       const data = await client.ListRuntimeDeployedInstancesMC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eis.v20210601.ListRuntimesMC", async function () {
    try {
       const data = await client.ListRuntimesMC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
