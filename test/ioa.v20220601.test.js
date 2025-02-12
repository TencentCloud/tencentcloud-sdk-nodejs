
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ioa.v20220601.Client({
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
describe("ioa.v20220601.test.js", function () {

it("ioa.v20220601.DescribeRootAccountGroup", async function () {
    try {
       const data = await client.DescribeRootAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.CreateDeviceVirtualGroup", async function () {
    try {
       const data = await client.CreateDeviceVirtualGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeAccountGroups", async function () {
    try {
       const data = await client.DescribeAccountGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ioa.v20220601.DescribeLocalAccounts", async function () {
    try {
       const data = await client.DescribeLocalAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
