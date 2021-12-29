
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.rce.v20201103.Client({
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
describe("rce.v20201103.test.js", function () {

it("rce.v20201103.DescribeRiskModel", async function () {
    try {
       const data = await client.DescribeRiskModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.DescribeRiskTrends", async function () {
    try {
       const data = await client.DescribeRiskTrends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.DescribeRiskAssessment", async function () {
    try {
       const data = await client.DescribeRiskAssessment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.ManageMarketingRisk", async function () {
    try {
       const data = await client.ManageMarketingRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
