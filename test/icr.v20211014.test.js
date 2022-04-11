
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.icr.v20211014.Client({
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
describe("icr.v20211014.test.js", function () {

it("icr.v20211014.GetIndustryV1HomeMembers", async function () {
    try {
       const data = await client.GetIndustryV1HomeMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
