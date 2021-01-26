
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mgobe.v20201014.Client({
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
describe("mgobe.v20201014.test.js", function () {

it("mgobe.v20201014.DescribePlayer", async function () {
    try {
       const data = await client.DescribePlayer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mgobe.v20201014.ChangeRoomPlayerStatus", async function () {
    try {
       const data = await client.ChangeRoomPlayerStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mgobe.v20201014.ModifyRoom", async function () {
    try {
       const data = await client.ModifyRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mgobe.v20201014.RemoveRoomPlayer", async function () {
    try {
       const data = await client.RemoveRoomPlayer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mgobe.v20201014.DescribeRoom", async function () {
    try {
       const data = await client.DescribeRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mgobe.v20201014.ChangeRoomPlayerProfile", async function () {
    try {
       const data = await client.ChangeRoomPlayerProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mgobe.v20201014.DismissRoom", async function () {
    try {
       const data = await client.DismissRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
