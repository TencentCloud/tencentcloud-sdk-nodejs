
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

it("tse.v20201207.DescribeOneCloudNativeAPIGatewayService", async function () {
    try {
       const data = await client.DescribeOneCloudNativeAPIGatewayService({})
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

it("tse.v20201207.DescribeCloudNativeAPIGatewayServiceRateLimit", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayServiceRateLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteCloudNativeAPIGatewayPublicNetwork", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayPublicNetwork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeGovernanceAliases", async function () {
    try {
       const data = await client.DescribeGovernanceAliases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteConfigFileGroup", async function () {
    try {
       const data = await client.DeleteConfigFileGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateConfigFileGroup", async function () {
    try {
       const data = await client.CreateConfigFileGroup({})
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

it("tse.v20201207.ModifyGovernanceServices", async function () {
    try {
       const data = await client.ModifyGovernanceServices({})
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

it("tse.v20201207.DeleteGovernanceAliases", async function () {
    try {
       const data = await client.DeleteGovernanceAliases({})
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

it("tse.v20201207.DeleteGovernanceInstances", async function () {
    try {
       const data = await client.DeleteGovernanceInstances({})
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

it("tse.v20201207.DescribeWafDomains", async function () {
    try {
       const data = await client.DescribeWafDomains({})
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

it("tse.v20201207.DescribeAutoScalerResourceStrategies", async function () {
    try {
       const data = await client.DescribeAutoScalerResourceStrategies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyNetworkBasicInfo", async function () {
    try {
       const data = await client.ModifyNetworkBasicInfo({})
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

it("tse.v20201207.DescribeGovernanceServiceContracts", async function () {
    try {
       const data = await client.DescribeGovernanceServiceContracts({})
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

it("tse.v20201207.DescribeAllConfigFileTemplates", async function () {
    try {
       const data = await client.DescribeAllConfigFileTemplates({})
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

it("tse.v20201207.DeleteConfigFiles", async function () {
    try {
       const data = await client.DeleteConfigFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyAutoScalerResourceStrategy", async function () {
    try {
       const data = await client.ModifyAutoScalerResourceStrategy({})
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

it("tse.v20201207.PublishConfigFiles", async function () {
    try {
       const data = await client.PublishConfigFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeConfigFile", async function () {
    try {
       const data = await client.DescribeConfigFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeConfigFileReleases", async function () {
    try {
       const data = await client.DescribeConfigFileReleases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CloseWafProtection", async function () {
    try {
       const data = await client.CloseWafProtection({})
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

it("tse.v20201207.DescribeCloudNativeAPIGatewayRouteRateLimit", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayRouteRateLimit({})
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

it("tse.v20201207.DescribeAutoScalerResourceStrategyBindingGroups", async function () {
    try {
       const data = await client.DescribeAutoScalerResourceStrategyBindingGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeConfigFileRelease", async function () {
    try {
       const data = await client.DescribeConfigFileRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeGovernanceNamespaces", async function () {
    try {
       const data = await client.DescribeGovernanceNamespaces({})
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

it("tse.v20201207.CreateCloudNativeAPIGatewayRoute", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateGovernanceInstances", async function () {
    try {
       const data = await client.CreateGovernanceInstances({})
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

it("tse.v20201207.DeleteConfigFileReleases", async function () {
    try {
       const data = await client.DeleteConfigFileReleases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteAutoScalerResourceStrategy", async function () {
    try {
       const data = await client.DeleteAutoScalerResourceStrategy({})
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

it("tse.v20201207.DeleteNativeGatewayServerGroup", async function () {
    try {
       const data = await client.DeleteNativeGatewayServerGroup({})
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

it("tse.v20201207.DescribeCloudNativeAPIGatewayCanaryRules", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayCanaryRules({})
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

it("tse.v20201207.ModifyConsoleNetwork", async function () {
    try {
       const data = await client.ModifyConsoleNetwork({})
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

it("tse.v20201207.DescribeUpstreamHealthCheckConfig", async function () {
    try {
       const data = await client.DescribeUpstreamHealthCheckConfig({})
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

it("tse.v20201207.DeleteGovernanceServices", async function () {
    try {
       const data = await client.DeleteGovernanceServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateGovernanceAlias", async function () {
    try {
       const data = await client.CreateGovernanceAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeGovernanceInstances", async function () {
    try {
       const data = await client.DescribeGovernanceInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeGovernanceServices", async function () {
    try {
       const data = await client.DescribeGovernanceServices({})
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

it("tse.v20201207.DescribeCloudNativeAPIGatewayNodes", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.UnbindAutoScalerResourceStrategyFromGroups", async function () {
    try {
       const data = await client.UnbindAutoScalerResourceStrategyFromGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeConfigFileReleaseVersions", async function () {
    try {
       const data = await client.DescribeConfigFileReleaseVersions({})
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

it("tse.v20201207.DescribeConfigFilesByGroup", async function () {
    try {
       const data = await client.DescribeConfigFilesByGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeWafProtection", async function () {
    try {
       const data = await client.DescribeWafProtection({})
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

it("tse.v20201207.CreateGovernanceNamespaces", async function () {
    try {
       const data = await client.CreateGovernanceNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeGovernanceServiceContractVersions", async function () {
    try {
       const data = await client.DescribeGovernanceServiceContractVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.OpenWafProtection", async function () {
    try {
       const data = await client.OpenWafProtection({})
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

it("tse.v20201207.CreateCloudNativeAPIGatewayService", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayService({})
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

it("tse.v20201207.ModifyGovernanceNamespaces", async function () {
    try {
       const data = await client.ModifyGovernanceNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribePublicNetwork", async function () {
    try {
       const data = await client.DescribePublicNetwork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateAutoScalerResourceStrategy", async function () {
    try {
       const data = await client.CreateAutoScalerResourceStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateConfigFile", async function () {
    try {
       const data = await client.CreateConfigFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyNetworkAccessStrategy", async function () {
    try {
       const data = await client.ModifyNetworkAccessStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeCloudNativeAPIGatewayUpstream", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayUpstream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateOrUpdateConfigFileAndRelease", async function () {
    try {
       const data = await client.CreateOrUpdateConfigFileAndRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyGovernanceAlias", async function () {
    try {
       const data = await client.ModifyGovernanceAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateWafDomains", async function () {
    try {
       const data = await client.CreateWafDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyConfigFileGroup", async function () {
    try {
       const data = await client.ModifyConfigFileGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.RollbackConfigFileReleases", async function () {
    try {
       const data = await client.RollbackConfigFileReleases({})
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

it("tse.v20201207.ModifyUpstreamNodeStatus", async function () {
    try {
       const data = await client.ModifyUpstreamNodeStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.BindAutoScalerResourceStrategyToGroups", async function () {
    try {
       const data = await client.BindAutoScalerResourceStrategyToGroups({})
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

it("tse.v20201207.DeleteWafDomains", async function () {
    try {
       const data = await client.DeleteWafDomains({})
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

it("tse.v20201207.DescribeCloudNativeAPIGatewayRoutes", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeConfigFileGroups", async function () {
    try {
       const data = await client.DescribeConfigFileGroups({})
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

it("tse.v20201207.DeleteCloudNativeAPIGatewayRoute", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.CreateCloudNativeAPIGatewayPublicNetwork", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayPublicNetwork({})
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

it("tse.v20201207.ModifyConfigFiles", async function () {
    try {
       const data = await client.ModifyConfigFiles({})
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

it("tse.v20201207.CreateGovernanceServices", async function () {
    try {
       const data = await client.CreateGovernanceServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DeleteGovernanceNamespaces", async function () {
    try {
       const data = await client.DeleteGovernanceNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.ModifyGovernanceInstances", async function () {
    try {
       const data = await client.ModifyGovernanceInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeConfigFiles", async function () {
    try {
       const data = await client.DescribeConfigFiles({})
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

it("tse.v20201207.DeleteGovernanceInstancesByHost", async function () {
    try {
       const data = await client.DeleteGovernanceInstancesByHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tse.v20201207.DescribeConfigFileReleaseHistories", async function () {
    try {
       const data = await client.DescribeConfigFileReleaseHistories({})
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

it("tse.v20201207.UpdateUpstreamHealthCheckConfig", async function () {
    try {
       const data = await client.UpdateUpstreamHealthCheckConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
