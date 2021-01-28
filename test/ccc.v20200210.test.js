
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ccc.v20200210.Client({
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
describe("ccc.v20200210.test.js", function () {

it("ccc.v20200210.DescribeChatMessages", async function () {
    try {
       const data = await client.DescribeChatMessages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeIMCdrs", async function () {
    try {
       const data = await client.DescribeIMCdrs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeTelCallInfo", async function () {
    try {
       const data = await client.DescribeTelCallInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateSDKLoginToken", async function () {
    try {
       const data = await client.CreateSDKLoginToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeSeatUserList", async function () {
    try {
       const data = await client.DescribeSeatUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribePSTNActiveSessionList", async function () {
    try {
       const data = await client.DescribePSTNActiveSessionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateStaff", async function () {
    try {
       const data = await client.CreateStaff({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeTelCdr", async function () {
    try {
       const data = await client.DescribeTelCdr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
