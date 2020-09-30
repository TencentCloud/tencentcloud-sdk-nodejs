
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

it("cms.v20190321.DeleteTextSample", async function () {
    try {
       const data = await client.DeleteTextSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.CreateTextSample", async function () {
    try {
       const data = await client.CreateTextSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.CreateFileSample", async function () {
    try {
       const data = await client.CreateFileSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.DescribeTextSample", async function () {
    try {
       const data = await client.DescribeTextSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.ManualReview", async function () {
    try {
       const data = await client.ManualReview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cms.v20190321.DescribeFileSample", async function () {
    try {
       const data = await client.DescribeFileSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

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

it("cms.v20190321.DeleteFileSample", async function () {
    try {
       const data = await client.DeleteFileSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
