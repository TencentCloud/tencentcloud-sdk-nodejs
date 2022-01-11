
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gs.v20191118.Client({
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
describe("gs.v20191118.test.js", function () {

it("gs.v20191118.DescribeInstancesCount", async function () {
    try {
       const data = await client.DescribeInstancesCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.TrylockWorker", async function () {
    try {
       const data = await client.TrylockWorker({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StopGame", async function () {
    try {
       const data = await client.StopGame({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SaveGameArchive", async function () {
    try {
       const data = await client.SaveGameArchive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SwitchGameArchive", async function () {
    try {
       const data = await client.SwitchGameArchive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StartPublishStream", async function () {
    try {
       const data = await client.StartPublishStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StopPublishStream", async function () {
    try {
       const data = await client.StopPublishStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateSession", async function () {
    try {
       const data = await client.CreateSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
