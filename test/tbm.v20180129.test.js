
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tbm.v20180129.Client({
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
describe("tbm.v20180129.test.js", function () {

it("tbm.v20180129.DescribeUserPortrait", async function () {
    try {
       const data = await client.DescribeUserPortrait({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeBrandPosComments", async function () {
    try {
       const data = await client.DescribeBrandPosComments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeIndustryNews", async function () {
    try {
       const data = await client.DescribeIndustryNews({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeBrandMediaReport", async function () {
    try {
       const data = await client.DescribeBrandMediaReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeBrandNegComments", async function () {
    try {
       const data = await client.DescribeBrandNegComments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeBrandSocialReport", async function () {
    try {
       const data = await client.DescribeBrandSocialReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeBrandSocialOpinion", async function () {
    try {
       const data = await client.DescribeBrandSocialOpinion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeBrandCommentCount", async function () {
    try {
       const data = await client.DescribeBrandCommentCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbm.v20180129.DescribeBrandExposure", async function () {
    try {
       const data = await client.DescribeBrandExposure({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
