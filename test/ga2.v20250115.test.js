
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ga2.v20250115.Client({
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
describe("ga2.v20250115.test.js", function () {

it("ga2.v20250115.DeleteEndpointGroups", async function () {
    try {
       const data = await client.DeleteEndpointGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.CreateEndpointGroup", async function () {
    try {
       const data = await client.CreateEndpointGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DescribeAccelerateAreas", async function () {
    try {
       const data = await client.DescribeAccelerateAreas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DeleteGlobalAccelerator", async function () {
    try {
       const data = await client.DeleteGlobalAccelerator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DeleteListener", async function () {
    try {
       const data = await client.DeleteListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DescribeCrossBorderSettlement", async function () {
    try {
       const data = await client.DescribeCrossBorderSettlement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.ModifyListener", async function () {
    try {
       const data = await client.ModifyListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DescribeAccelerateRegions", async function () {
    try {
       const data = await client.DescribeAccelerateRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.ModifyForwardingRule", async function () {
    try {
       const data = await client.ModifyForwardingRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DescribeEndpointGroups", async function () {
    try {
       const data = await client.DescribeEndpointGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DescribeListeners", async function () {
    try {
       const data = await client.DescribeListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DescribeGlobalAccelerators", async function () {
    try {
       const data = await client.DescribeGlobalAccelerators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DeleteAccelerateAreas", async function () {
    try {
       const data = await client.DeleteAccelerateAreas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.CreateListener", async function () {
    try {
       const data = await client.CreateListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.CreateAccelerateAreas", async function () {
    try {
       const data = await client.CreateAccelerateAreas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.ModifyEndpointGroup", async function () {
    try {
       const data = await client.ModifyEndpointGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DeleteForwardingRule", async function () {
    try {
       const data = await client.DeleteForwardingRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.CreateForwardingRule", async function () {
    try {
       const data = await client.CreateForwardingRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.CreateGlobalAccelerator", async function () {
    try {
       const data = await client.CreateGlobalAccelerator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.ModifyAccelerateAreas", async function () {
    try {
       const data = await client.ModifyAccelerateAreas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.ModifyGlobalAccelerator", async function () {
    try {
       const data = await client.ModifyGlobalAccelerator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ga2.v20250115.DescribeForwardingRule", async function () {
    try {
       const data = await client.DescribeForwardingRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
