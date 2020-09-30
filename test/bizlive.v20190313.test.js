
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bizlive.v20190313.Client({
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
describe("bizlive.v20190313.test.js", function () {

it("bizlive.v20190313.ForbidLiveStream", async function () {
    try {
       const data = await client.ForbidLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bizlive.v20190313.StopGame", async function () {
    try {
       const data = await client.StopGame({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bizlive.v20190313.RegisterIM", async function () {
    try {
       const data = await client.RegisterIM({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bizlive.v20190313.DescribeWorkers", async function () {
    try {
       const data = await client.DescribeWorkers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bizlive.v20190313.DescribeStreamPlayInfoList", async function () {
    try {
       const data = await client.DescribeStreamPlayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bizlive.v20190313.CreateSession", async function () {
    try {
       const data = await client.CreateSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
