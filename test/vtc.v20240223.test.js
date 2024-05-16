
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vtc.v20240223.Client({
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
describe("vtc.v20240223.test.js", function () {

it("vtc.v20240223.SubmitVideoTranslateJob", async function () {
    try {
       const data = await client.SubmitVideoTranslateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vtc.v20240223.DescribeVideoTranslateJob", async function () {
    try {
       const data = await client.DescribeVideoTranslateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vtc.v20240223.ConfirmVideoTranslateJob", async function () {
    try {
       const data = await client.ConfirmVideoTranslateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
