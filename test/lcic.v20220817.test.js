
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.lcic.v20220817.Client({
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
describe("lcic.v20220817.test.js", function () {

it("lcic.v20220817.DescribeUser", async function () {
    try {
       const data = await client.DescribeUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.LoginOriginId", async function () {
    try {
       const data = await client.LoginOriginId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.RegisterUser", async function () {
    try {
       const data = await client.RegisterUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.LoginUser", async function () {
    try {
       const data = await client.LoginUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.CreateSupervisor", async function () {
    try {
       const data = await client.CreateSupervisor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeRoom", async function () {
    try {
       const data = await client.DescribeRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.CreateRoom", async function () {
    try {
       const data = await client.CreateRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
