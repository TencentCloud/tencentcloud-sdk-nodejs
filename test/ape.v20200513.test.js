
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ape.v20200513.Client({
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
describe("ape.v20200513.test.js", function () {

it("ape.v20200513.DescribeAuthUsers", async function () {
    try {
       const data = await client.DescribeAuthUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ape.v20200513.DescribeDownloadInfos", async function () {
    try {
       const data = await client.DescribeDownloadInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ape.v20200513.BatchDescribeOrderCertificate", async function () {
    try {
       const data = await client.BatchDescribeOrderCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ape.v20200513.DescribeImages", async function () {
    try {
       const data = await client.DescribeImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ape.v20200513.CreateOrderAndDownloads", async function () {
    try {
       const data = await client.CreateOrderAndDownloads({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ape.v20200513.DescribeImage", async function () {
    try {
       const data = await client.DescribeImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ape.v20200513.CreateOrderAndPay", async function () {
    try {
       const data = await client.CreateOrderAndPay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ape.v20200513.BatchDescribeOrderImage", async function () {
    try {
       const data = await client.BatchDescribeOrderImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
