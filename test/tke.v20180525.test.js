
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tke.v20180525.Client({
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
describe("tke.v20180525.test.js", function () {

it("tke.v20180525.UpdateImageCache", async function () {
    try {
       const data = await client.UpdateImageCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateCluster", async function () {
    try {
       const data = await client.CreateCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterAsGroupOptionAttribute", async function () {
    try {
       const data = await client.ModifyClusterAsGroupOptionAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.EnableVpcCniNetworkType", async function () {
    try {
       const data = await client.EnableVpcCniNetworkType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteCluster", async function () {
    try {
       const data = await client.DeleteCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyPrometheusAlertRule", async function () {
    try {
       const data = await client.ModifyPrometheusAlertRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.SetNodePoolNodeProtection", async function () {
    try {
       const data = await client.SetNodePoolNodeProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEKSContainerInstanceEvent", async function () {
    try {
       const data = await client.DescribeEKSContainerInstanceEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterCommonNames", async function () {
    try {
       const data = await client.DescribeClusterCommonNames({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusAlertHistory", async function () {
    try {
       const data = await client.DescribePrometheusAlertHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterRouteTable", async function () {
    try {
       const data = await client.CreateClusterRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.GetUpgradeInstanceProgress", async function () {
    try {
       const data = await client.GetUpgradeInstanceProgress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusTemplate", async function () {
    try {
       const data = await client.CreatePrometheusTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.GetMostSuitableImageCache", async function () {
    try {
       const data = await client.GetMostSuitableImageCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterNodePoolFromExistingAsg", async function () {
    try {
       const data = await client.CreateClusterNodePoolFromExistingAsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeVersions", async function () {
    try {
       const data = await client.DescribeVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteEKSCluster", async function () {
    try {
       const data = await client.DeleteEKSCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterNodePool", async function () {
    try {
       const data = await client.ModifyClusterNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeImageCaches", async function () {
    try {
       const data = await client.DescribeImageCaches({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpdateClusterVersion", async function () {
    try {
       const data = await client.UpdateClusterVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeAvailableClusterVersion", async function () {
    try {
       const data = await client.DescribeAvailableClusterVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteImageCaches", async function () {
    try {
       const data = await client.DeleteImageCaches({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterRouteTable", async function () {
    try {
       const data = await client.DeleteClusterRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterAuthenticationOptions", async function () {
    try {
       const data = await client.DescribeClusterAuthenticationOptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterStatus", async function () {
    try {
       const data = await client.DescribeClusterStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterNodePoolDetail", async function () {
    try {
       const data = await client.DescribeClusterNodePoolDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeletePrometheusTemplateSync", async function () {
    try {
       const data = await client.DeletePrometheusTemplateSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterInstances", async function () {
    try {
       const data = await client.CreateClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterAttribute", async function () {
    try {
       const data = await client.ModifyClusterAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterAsGroups", async function () {
    try {
       const data = await client.DeleteClusterAsGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterRoute", async function () {
    try {
       const data = await client.DeleteClusterRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.AddVpcCniSubnets", async function () {
    try {
       const data = await client.AddVpcCniSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterAsGroup", async function () {
    try {
       const data = await client.CreateClusterAsGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeExistedInstances", async function () {
    try {
       const data = await client.DescribeExistedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEKSClusterCredential", async function () {
    try {
       const data = await client.DescribeEKSClusterCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpgradeClusterInstances", async function () {
    try {
       const data = await client.UpgradeClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterRouteTables", async function () {
    try {
       const data = await client.DescribeClusterRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.AddNodeToNodePool", async function () {
    try {
       const data = await client.AddNodeToNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusters", async function () {
    try {
       const data = await client.DescribeClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterEndpointStatus", async function () {
    try {
       const data = await client.DescribeClusterEndpointStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.AddExistedInstances", async function () {
    try {
       const data = await client.AddExistedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DisableClusterDeletionProtection", async function () {
    try {
       const data = await client.DisableClusterDeletionProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusTargets", async function () {
    try {
       const data = await client.DescribePrometheusTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteEKSContainerInstances", async function () {
    try {
       const data = await client.DeleteEKSContainerInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterInstances", async function () {
    try {
       const data = await client.DescribeClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterLevelAttribute", async function () {
    try {
       const data = await client.DescribeClusterLevelAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.AddClusterCIDR", async function () {
    try {
       const data = await client.AddClusterCIDR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEksContainerInstanceLog", async function () {
    try {
       const data = await client.DescribeEksContainerInstanceLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpdateEKSContainerInstance", async function () {
    try {
       const data = await client.UpdateEKSContainerInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusAlertRule", async function () {
    try {
       const data = await client.DescribePrometheusAlertRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.RestartEKSContainerInstances", async function () {
    try {
       const data = await client.RestartEKSContainerInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeTKEEdgeScript", async function () {
    try {
       const data = await client.DescribeTKEEdgeScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyNodePoolDesiredCapacityAboutAsg", async function () {
    try {
       const data = await client.ModifyNodePoolDesiredCapacityAboutAsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateEKSCluster", async function () {
    try {
       const data = await client.CreateEKSCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeVpcCniPodLimits", async function () {
    try {
       const data = await client.DescribeVpcCniPodLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyNodePoolInstanceTypes", async function () {
    try {
       const data = await client.ModifyNodePoolInstanceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterAsGroupAttribute", async function () {
    try {
       const data = await client.ModifyClusterAsGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterAsGroups", async function () {
    try {
       const data = await client.DescribeClusterAsGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusTemplateSync", async function () {
    try {
       const data = await client.DescribePrometheusTemplateSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusInstance", async function () {
    try {
       const data = await client.DescribePrometheusInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterEndpointVipStatus", async function () {
    try {
       const data = await client.DescribeClusterEndpointVipStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEKSContainerInstances", async function () {
    try {
       const data = await client.DescribeEKSContainerInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeRouteTableConflicts", async function () {
    try {
       const data = await client.DescribeRouteTableConflicts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.AcquireClusterAdminRole", async function () {
    try {
       const data = await client.AcquireClusterAdminRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterRoute", async function () {
    try {
       const data = await client.CreateClusterRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeExternalClusterSpec", async function () {
    try {
       const data = await client.DescribeExternalClusterSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateEKSContainerInstances", async function () {
    try {
       const data = await client.CreateEKSContainerInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeletePrometheusAlertRule", async function () {
    try {
       const data = await client.DeletePrometheusAlertRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterLevelChangeRecords", async function () {
    try {
       const data = await client.DescribeClusterLevelChangeRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterEndpoint", async function () {
    try {
       const data = await client.CreateClusterEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ForwardApplicationRequestV3", async function () {
    try {
       const data = await client.ForwardApplicationRequestV3({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusAgentInstances", async function () {
    try {
       const data = await client.DescribePrometheusAgentInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ScaleOutClusterMaster", async function () {
    try {
       const data = await client.ScaleOutClusterMaster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusAlertRule", async function () {
    try {
       const data = await client.CreatePrometheusAlertRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterControllers", async function () {
    try {
       const data = await client.DescribeClusterControllers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterSecurity", async function () {
    try {
       const data = await client.DescribeClusterSecurity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterNodePool", async function () {
    try {
       const data = await client.DeleteClusterNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ScaleInClusterMaster", async function () {
    try {
       const data = await client.ScaleInClusterMaster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeResourceUsage", async function () {
    try {
       const data = await client.DescribeResourceUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterEndpointVip", async function () {
    try {
       const data = await client.DeleteClusterEndpointVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterNodePools", async function () {
    try {
       const data = await client.DescribeClusterNodePools({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeImages", async function () {
    try {
       const data = await client.DescribeImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterEndpointSP", async function () {
    try {
       const data = await client.ModifyClusterEndpointSP({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterRoutes", async function () {
    try {
       const data = await client.DescribeClusterRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateImageCache", async function () {
    try {
       const data = await client.CreateImageCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CheckInstancesUpgradeAble", async function () {
    try {
       const data = await client.CheckInstancesUpgradeAble({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusDashboard", async function () {
    try {
       const data = await client.CreatePrometheusDashboard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusOverviews", async function () {
    try {
       const data = await client.DescribePrometheusOverviews({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeletePrometheusTemplate", async function () {
    try {
       const data = await client.DeletePrometheusTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterAuthenticationOptions", async function () {
    try {
       const data = await client.ModifyClusterAuthenticationOptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusAgents", async function () {
    try {
       const data = await client.DescribePrometheusAgents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterEndpoint", async function () {
    try {
       const data = await client.DeleteClusterEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.GetClusterLevelPrice", async function () {
    try {
       const data = await client.GetClusterLevelPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyPrometheusTemplate", async function () {
    try {
       const data = await client.ModifyPrometheusTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterKubeconfig", async function () {
    try {
       const data = await client.DescribeClusterKubeconfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterAsGroupOption", async function () {
    try {
       const data = await client.DescribeClusterAsGroupOption({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEKSClusters", async function () {
    try {
       const data = await client.DescribeEKSClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterNodePool", async function () {
    try {
       const data = await client.CreateClusterNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusTemplates", async function () {
    try {
       const data = await client.DescribePrometheusTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEnableVpcCniProgress", async function () {
    try {
       const data = await client.DescribeEnableVpcCniProgress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.EnableClusterDeletionProtection", async function () {
    try {
       const data = await client.EnableClusterDeletionProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.SyncPrometheusTemplate", async function () {
    try {
       const data = await client.SyncPrometheusTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEKSContainerInstanceRegions", async function () {
    try {
       const data = await client.DescribeEKSContainerInstanceRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.RemoveNodeFromNodePool", async function () {
    try {
       const data = await client.RemoveNodeFromNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DisableVpcCniNetworkType", async function () {
    try {
       const data = await client.DisableVpcCniNetworkType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterInstances", async function () {
    try {
       const data = await client.DeleteClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpdateEKSCluster", async function () {
    try {
       const data = await client.UpdateEKSCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.GetTkeAppChartList", async function () {
    try {
       const data = await client.GetTkeAppChartList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterEndpointVip", async function () {
    try {
       const data = await client.CreateClusterEndpointVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
