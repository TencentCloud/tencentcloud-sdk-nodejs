
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.irp.v20220805.Client({
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
describe("irp.v20220805.test.js", function () {

it("irp.v20220805.ReportGoodsInfo", async function () {
    try {
       const data = await client.ReportGoodsInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("irp.v20220805.ReportGoodsBehavior", async function () {
    try {
       const data = await client.ReportGoodsBehavior({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("irp.v20220805.ReportFeedBehavior", async function () {
    try {
       const data = await client.ReportFeedBehavior({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("irp.v20220805.DescribeGoodsRecommend", async function () {
    try {
       const data = await client.DescribeGoodsRecommend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("irp.v20220805.ReportFeedUser", async function () {
    try {
       const data = await client.ReportFeedUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("irp.v20220805.ReportFeedItem", async function () {
    try {
       const data = await client.ReportFeedItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("irp.v20220805.FeedRecommend", async function () {
    try {
       const data = await client.FeedRecommend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
