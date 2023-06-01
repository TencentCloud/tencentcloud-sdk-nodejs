
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cms.v20190321.Client({
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
describe("cms.v20190321.test.js", function () {

it("cms.v20190321.TextModeration", async function () {
    try {
       const data = await client.TextModeration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.ImageModeration", async function () {
    try {
       const data = await client.ImageModeration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.DescribeLibSamples", async function () {
    try {
       const data = await client.DescribeLibSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.DescribeKeywordsLibs", async function () {
    try {
       const data = await client.DescribeKeywordsLibs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.CreateKeywordsSamples", async function () {
    try {
       const data = await client.CreateKeywordsSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.DeleteLibSamples", async function () {
    try {
       const data = await client.DeleteLibSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
