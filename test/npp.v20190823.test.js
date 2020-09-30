
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.npp.v20190823.Client({
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
describe("npp.v20190823.test.js", function () {

it("npp.v20190823.DeleteCallBack", async function () {
    try {
       const data = await client.DeleteCallBack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("npp.v20190823.DescribeCallerDisplayList", async function () {
    try {
       const data = await client.DescribeCallerDisplayList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("npp.v20190823.DelVirtualNum", async function () {
    try {
       const data = await client.DelVirtualNum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("npp.v20190823.GetVirtualNum", async function () {
    try {
       const data = await client.GetVirtualNum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("npp.v20190823.Get400Cdr", async function () {
    try {
       const data = await client.Get400Cdr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("npp.v20190823.DescribeCallBackStatus", async function () {
    try {
       const data = await client.DescribeCallBackStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("npp.v20190823.CreateCallBack", async function () {
    try {
       const data = await client.CreateCallBack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("npp.v20190823.DescribeCallBackCdr", async function () {
    try {
       const data = await client.DescribeCallBackCdr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
