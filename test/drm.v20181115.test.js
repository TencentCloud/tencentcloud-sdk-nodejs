
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.drm.v20181115.Client({
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
describe("drm.v20181115.test.js", function () {

it("drm.v20181115.StartEncryption", async function () {
    try {
       const data = await client.StartEncryption({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.AddFairPlayPem", async function () {
    try {
       const data = await client.AddFairPlayPem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.CreateEncryptKeys", async function () {
    try {
       const data = await client.CreateEncryptKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.CreateLicense", async function () {
    try {
       const data = await client.CreateLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.ModifyFairPlayPem", async function () {
    try {
       const data = await client.ModifyFairPlayPem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.DescribeKeys", async function () {
    try {
       const data = await client.DescribeKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.DescribeAllKeys", async function () {
    try {
       const data = await client.DescribeAllKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.DeleteFairPlayPem", async function () {
    try {
       const data = await client.DeleteFairPlayPem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("drm.v20181115.DescribeFairPlayPem", async function () {
    try {
       const data = await client.DescribeFairPlayPem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
