
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iap.v20240713.Client({
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
describe("iap.v20240713.test.js", function () {

it("iap.v20240713.UpdateIAPUserOIDCConfig", async function () {
    try {
       const data = await client.UpdateIAPUserOIDCConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iap.v20240713.DescribeIAPLoginSessionDuration", async function () {
    try {
       const data = await client.DescribeIAPLoginSessionDuration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iap.v20240713.DescribeIAPUserOIDCConfig", async function () {
    try {
       const data = await client.DescribeIAPUserOIDCConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iap.v20240713.DisableIAPUserSSO", async function () {
    try {
       const data = await client.DisableIAPUserSSO({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iap.v20240713.CreateIAPUserOIDCConfig", async function () {
    try {
       const data = await client.CreateIAPUserOIDCConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iap.v20240713.ModifyIAPLoginSessionDuration", async function () {
    try {
       const data = await client.ModifyIAPLoginSessionDuration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
