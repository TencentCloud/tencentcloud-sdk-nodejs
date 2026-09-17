
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.edgezone.v20260401.Client({
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
describe("edgezone.v20260401.test.js", function () {

it("edgezone.v20260401.CreatePrivateNetworkInstance", async function () {
    try {
       const data = await client.CreatePrivateNetworkInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.CreateEdgeNodeService", async function () {
    try {
       const data = await client.CreateEdgeNodeService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DescribePublicIps", async function () {
    try {
       const data = await client.DescribePublicIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DeletePrivateNetworkInstance", async function () {
    try {
       const data = await client.DeletePrivateNetworkInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.TerminateInstances", async function () {
    try {
       const data = await client.TerminateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.ReleasePublicIp", async function () {
    try {
       const data = await client.ReleasePublicIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DescribePrivateNetworkInstances", async function () {
    try {
       const data = await client.DescribePrivateNetworkInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DeletePublicNetworkInstance", async function () {
    try {
       const data = await client.DeletePublicNetworkInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DescribeInstanceTypes", async function () {
    try {
       const data = await client.DescribeInstanceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.ApplyPublicIps", async function () {
    try {
       const data = await client.ApplyPublicIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.ModifyPrivateNetworkInstance", async function () {
    try {
       const data = await client.ModifyPrivateNetworkInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.CreateInstances", async function () {
    try {
       const data = await client.CreateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.ModifyInstanceAttribute", async function () {
    try {
       const data = await client.ModifyInstanceAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DescribeZoneData", async function () {
    try {
       const data = await client.DescribeZoneData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.DescribePublicNetworkInstances", async function () {
    try {
       const data = await client.DescribePublicNetworkInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.ModifyPublicNetworkInstance", async function () {
    try {
       const data = await client.ModifyPublicNetworkInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("edgezone.v20260401.CreatePublicNetworkInstance", async function () {
    try {
       const data = await client.CreatePublicNetworkInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
