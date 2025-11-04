
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bda.v20200324.Client({
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
describe("bda.v20200324.test.js", function () {

it("bda.v20200324.SegmentPortraitPic", async function () {
    try {
       const data = await client.SegmentPortraitPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.SegmentCustomizedPortraitPic", async function () {
    try {
       const data = await client.SegmentCustomizedPortraitPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.TerminateSegmentationTask", async function () {
    try {
       const data = await client.TerminateSegmentationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.DescribeSegmentationTask", async function () {
    try {
       const data = await client.DescribeSegmentationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.CreateSegmentationTask", async function () {
    try {
       const data = await client.CreateSegmentationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
