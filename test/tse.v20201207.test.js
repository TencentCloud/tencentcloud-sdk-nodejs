
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

it("tse.v20201207.DescribeNacosReplicas", async function () {
    try {
       const data = await client.DescribeNacosReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyNativeGatewayServerGroup", async function () {
    try {
       const data = await client.ModifyNativeGatewayServerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGatewayServiceRateLimit", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayServiceRateLimit({})
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

it("tse.v20201207.DescribeOneCloudNativeAPIGatewayService", async function () {
    try {
       const data = await client.DescribeOneCloudNativeAPIGatewayService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayCertificates", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyCloudNativeAPIGatewayServiceRateLimit", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayServiceRateLimit({})
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

it("tse.v20201207.ModifyCloudNativeAPIGatewayCanaryRule", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayCanaryRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGatewayService", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateCloudNativeAPIGatewayService", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayRoutes", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGateway", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayPorts", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayPorts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGatewayRoute", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayRoute({})
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

it("tse.v20201207.ModifyCloudNativeAPIGatewayCertificate", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGatewayCanaryRule", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayCanaryRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGateways", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateCloudNativeAPIGatewayCertificate", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayServices", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyCloudNativeAPIGatewayRouteRateLimit", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayRouteRateLimit({})
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

it("tse.v20201207.ModifyCloudNativeAPIGatewayRoute", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeZookeeperReplicas", async function () {
    try {
       const data = await client.DescribeZookeeperReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateCloudNativeAPIGateway", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGateway({})
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

it("tse.v20201207.DescribeCloudNativeAPIGatewayRouteRateLimit", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayRouteRateLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayConfig", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyCloudNativeAPIGatewayService", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayService({})
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

it("tse.v20201207.CreateCloudNativeAPIGatewayCanaryRule", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayCanaryRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayCertificateDetails", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayCertificateDetails({})
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

it("tse.v20201207.ModifyCloudNativeAPIGateway", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateCloudNativeAPIGatewayServiceRateLimit", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayServiceRateLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGateway", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.UpdateUpstreamTargets", async function () {
    try {
       const data = await client.UpdateUpstreamTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGatewayCertificate", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateCloudNativeAPIGatewayRoute", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.UpdateCloudNativeAPIGatewayCertificateInfo", async function () {
    try {
       const data = await client.UpdateCloudNativeAPIGatewayCertificateInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateNativeGatewayServerGroup", async function () {
    try {
       const data = await client.CreateNativeGatewayServerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGatewayRouteRateLimit", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayRouteRateLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateCloudNativeAPIGatewayRouteRateLimit", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayRouteRateLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeNativeGatewayServerGroups", async function () {
    try {
       const data = await client.DescribeNativeGatewayServerGroups({})
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

it("tse.v20201207.DeleteNativeGatewayServerGroup", async function () {
    try {
       const data = await client.DeleteNativeGatewayServerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayCanaryRules", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayCanaryRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.UpdateCloudNativeAPIGatewaySpec", async function () {
    try {
       const data = await client.UpdateCloudNativeAPIGatewaySpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayServiceRateLimit", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayServiceRateLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
