
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cis.v20180408.Client({
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
describe("cis.v20180408.test.js", function () {

it("cis.v20180408.DescribeContainerInstances", async function () {
    try {
       const data = await client.DescribeContainerInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cis.v20180408.CreateContainerInstance", async function () {
    try {
       const data = await client.CreateContainerInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cis.v20180408.InquiryPriceCreateCis", async function () {
    try {
       const data = await client.InquiryPriceCreateCis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cis.v20180408.DescribeContainerInstance", async function () {
    try {
       const data = await client.DescribeContainerInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cis.v20180408.DescribeContainerInstanceEvents", async function () {
    try {
       const data = await client.DescribeContainerInstanceEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cis.v20180408.DeleteContainerInstance", async function () {
    try {
       const data = await client.DeleteContainerInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cis.v20180408.DescribeContainerLog", async function () {
    try {
       const data = await client.DescribeContainerLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
