
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gwlb.v20240906.Client({
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
describe("gwlb.v20240906.test.js", function () {

it("gwlb.v20240906.DeleteTargetGroups", async function () {
    try {
       const data = await client.DeleteTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DeleteGatewayLoadBalancer", async function () {
    try {
       const data = await client.DeleteGatewayLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.RegisterTargetGroupInstances", async function () {
    try {
       const data = await client.RegisterTargetGroupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DescribeTargetGroups", async function () {
    try {
       const data = await client.DescribeTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.ModifyTargetGroupAttribute", async function () {
    try {
       const data = await client.ModifyTargetGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DescribeTaskStatus", async function () {
    try {
       const data = await client.DescribeTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.CreateGatewayLoadBalancer", async function () {
    try {
       const data = await client.CreateGatewayLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DisassociateTargetGroups", async function () {
    try {
       const data = await client.DisassociateTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.ModifyTargetGroupInstancesWeight", async function () {
    try {
       const data = await client.ModifyTargetGroupInstancesWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DescribeTargetGroupInstanceStatus", async function () {
    try {
       const data = await client.DescribeTargetGroupInstanceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.AssociateTargetGroups", async function () {
    try {
       const data = await client.AssociateTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DescribeGatewayLoadBalancers", async function () {
    try {
       const data = await client.DescribeGatewayLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.ModifyGatewayLoadBalancerAttribute", async function () {
    try {
       const data = await client.ModifyGatewayLoadBalancerAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DescribeTargetGroupList", async function () {
    try {
       const data = await client.DescribeTargetGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.InquirePriceCreateGatewayLoadBalancer", async function () {
    try {
       const data = await client.InquirePriceCreateGatewayLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DeregisterTargetGroupInstances", async function () {
    try {
       const data = await client.DeregisterTargetGroupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.CreateTargetGroup", async function () {
    try {
       const data = await client.CreateTargetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gwlb.v20240906.DescribeTargetGroupInstances", async function () {
    try {
       const data = await client.DescribeTargetGroupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
