
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tse.v20201207.Client({
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
describe("tse.v20201207.test.js", function () {

it("tse.v20201207.DescribeZookeeperReplicas", async function () {
    try {
       const data = await client.DescribeZookeeperReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteEngine", async function () {
    try {
       const data = await client.DeleteEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeSREInstances", async function () {
    try {
       const data = await client.DescribeSREInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeNacosReplicas", async function () {
    try {
       const data = await client.DescribeNacosReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayNodes", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeZookeeperServerInterfaces", async function () {
    try {
       const data = await client.DescribeZookeeperServerInterfaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.UpdateEngineInternetAccess", async function () {
    try {
       const data = await client.UpdateEngineInternetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateEngine", async function () {
    try {
       const data = await client.CreateEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeNacosServerInterfaces", async function () {
    try {
       const data = await client.DescribeNacosServerInterfaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeSREInstanceAccessAddress", async function () {
    try {
       const data = await client.DescribeSREInstanceAccessAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
