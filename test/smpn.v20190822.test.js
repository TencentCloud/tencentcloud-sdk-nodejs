
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.smpn.v20190822.Client({
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
describe("smpn.v20190822.test.js", function () {

it("smpn.v20190822.DescribeSmpnMhm", async function () {
    try {
       const data = await client.DescribeSmpnMhm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smpn.v20190822.DescribeSmpnFnr", async function () {
    try {
       const data = await client.DescribeSmpnFnr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smpn.v20190822.CreateSmpnEpa", async function () {
    try {
       const data = await client.CreateSmpnEpa({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smpn.v20190822.DescribeSmpnChp", async function () {
    try {
       const data = await client.DescribeSmpnChp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smpn.v20190822.DescribeSmpnMrl", async function () {
    try {
       const data = await client.DescribeSmpnMrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
