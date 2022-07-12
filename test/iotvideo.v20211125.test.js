
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotvideo.v20211125.Client({
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
describe("iotvideo.v20211125.test.js", function () {

it("iotvideo.v20211125.DescribeMessageDataStats", async function () {
    try {
       const data = await client.DescribeMessageDataStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CallDeviceActionAsync", async function () {
    try {
       const data = await client.CallDeviceActionAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CallDeviceActionSync", async function () {
    try {
       const data = await client.CallDeviceActionSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceDataStats", async function () {
    try {
       const data = await client.DescribeDeviceDataStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
