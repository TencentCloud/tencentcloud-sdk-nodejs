
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

it("tke.v20180525.DeletePrometheusClusterAgent", async function () {
    try {
       const data = await client.DeletePrometheusClusterAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateECMInstances", async function () {
    try {
       const data = await client.CreateECMInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterVirtualNode", async function () {
    try {
       const data = await client.DescribeClusterVirtualNode({})
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

it("tke.v20180525.DescribeSupportedRuntime", async function () {
    try {
       const data = await client.DescribeSupportedRuntime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.InstallEdgeLogAgent", async function () {
    try {
       const data = await client.InstallEdgeLogAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeOpenPolicyList", async function () {
    try {
       const data = await client.DescribeOpenPolicyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateClusterVirtualNodePool", async function () {
    try {
       const data = await client.CreateClusterVirtualNodePool({})
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

it("tke.v20180525.UpdateEdgeClusterVersion", async function () {
    try {
       const data = await client.UpdateEdgeClusterVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UninstallEdgeLogAgent", async function () {
    try {
       const data = await client.UninstallEdgeLogAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeExternalNodeSupportConfig", async function () {
    try {
       const data = await client.DescribeExternalNodeSupportConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteEdgeClusterInstances", async function () {
    try {
       const data = await client.DeleteEdgeClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePostNodeResources", async function () {
    try {
       const data = await client.DescribePostNodeResources({})
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

it("tke.v20180525.DescribeEdgeAvailableExtraArgs", async function () {
    try {
       const data = await client.DescribeEdgeAvailableExtraArgs({})
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

it("tke.v20180525.DescribePrometheusInstanceInitStatus", async function () {
    try {
       const data = await client.DescribePrometheusInstanceInitStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.EnableEventPersistence", async function () {
    try {
       const data = await client.EnableEventPersistence({})
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

it("tke.v20180525.DescribeIPAMD", async function () {
    try {
       const data = await client.DescribeIPAMD({})
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

it("tke.v20180525.DescribePodsBySpec", async function () {
    try {
       const data = await client.DescribePodsBySpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeReservedInstances", async function () {
    try {
       const data = await client.DescribeReservedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterVirtualNode", async function () {
    try {
       const data = await client.DeleteClusterVirtualNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteBackupStorageLocation", async function () {
    try {
       const data = await client.DeleteBackupStorageLocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeTKEEdgeExternalKubeconfig", async function () {
    try {
       const data = await client.DescribeTKEEdgeExternalKubeconfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeAvailableTKEEdgeVersion", async function () {
    try {
       const data = await client.DescribeAvailableTKEEdgeVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeTKEEdgeClusters", async function () {
    try {
       const data = await client.DescribeTKEEdgeClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UninstallLogAgent", async function () {
    try {
       const data = await client.UninstallLogAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePodChargeInfo", async function () {
    try {
       const data = await client.DescribePodChargeInfo({})
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

it("tke.v20180525.ModifyPrometheusAgentExternalLabels", async function () {
    try {
       const data = await client.ModifyPrometheusAgentExternalLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEdgeClusterExtraArgs", async function () {
    try {
       const data = await client.DescribeEdgeClusterExtraArgs({})
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

it("tke.v20180525.DescribeEdgeLogSwitches", async function () {
    try {
       const data = await client.DescribeEdgeLogSwitches({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyReservedInstanceScope", async function () {
    try {
       const data = await client.ModifyReservedInstanceScope({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeOSImages", async function () {
    try {
       const data = await client.DescribeOSImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterTags", async function () {
    try {
       const data = await client.ModifyClusterTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateCLSLogConfig", async function () {
    try {
       const data = await client.CreateCLSLogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.EnableClusterAudit", async function () {
    try {
       const data = await client.EnableClusterAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateBackupStorageLocation", async function () {
    try {
       const data = await client.CreateBackupStorageLocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterVirtualNodePool", async function () {
    try {
       const data = await client.ModifyClusterVirtualNodePool({})
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

it("tke.v20180525.ModifyPrometheusConfig", async function () {
    try {
       const data = await client.ModifyPrometheusConfig({})
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

it("tke.v20180525.UpdateClusterVersion", async function () {
    try {
       const data = await client.UpdateClusterVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterPendingReleases", async function () {
    try {
       const data = await client.DescribeClusterPendingReleases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusRecordRuleYaml", async function () {
    try {
       const data = await client.CreatePrometheusRecordRuleYaml({})
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

it("tke.v20180525.DescribeTKEEdgeScript", async function () {
    try {
       const data = await client.DescribeTKEEdgeScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyPrometheusAlertPolicy", async function () {
    try {
       const data = await client.ModifyPrometheusAlertPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpdateAddon", async function () {
    try {
       const data = await client.UpdateAddon({})
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

it("tke.v20180525.ModifyClusterAsGroupAttribute", async function () {
    try {
       const data = await client.ModifyClusterAsGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.InstallAddon", async function () {
    try {
       const data = await client.InstallAddon({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteECMInstances", async function () {
    try {
       const data = await client.DeleteECMInstances({})
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

it("tke.v20180525.UninstallClusterRelease", async function () {
    try {
       const data = await client.UninstallClusterRelease({})
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

it("tke.v20180525.DescribeImages", async function () {
    try {
       const data = await client.DescribeImages({})
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

it("tke.v20180525.ListClusterInspectionResults", async function () {
    try {
       const data = await client.ListClusterInspectionResults({})
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

it("tke.v20180525.DescribeTKEEdgeClusterCredential", async function () {
    try {
       const data = await client.DescribeTKEEdgeClusterCredential({})
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

it("tke.v20180525.DeleteEdgeCVMInstances", async function () {
    try {
       const data = await client.DeleteEdgeCVMInstances({})
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

it("tke.v20180525.CreateReservedInstances", async function () {
    try {
       const data = await client.CreateReservedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpdateImageCache", async function () {
    try {
       const data = await client.UpdateImageCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeBatchModifyTagsStatus", async function () {
    try {
       const data = await client.DescribeBatchModifyTagsStatus({})
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

it("tke.v20180525.DescribeReservedInstanceUtilizationRate", async function () {
    try {
       const data = await client.DescribeReservedInstanceUtilizationRate({})
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

it("tke.v20180525.ModifyPrometheusAlertRule", async function () {
    try {
       const data = await client.ModifyPrometheusAlertRule({})
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

it("tke.v20180525.DescribeEdgeCVMInstances", async function () {
    try {
       const data = await client.DescribeEdgeCVMInstances({})
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

it("tke.v20180525.DescribeAddonValues", async function () {
    try {
       const data = await client.DescribeAddonValues({})
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

it("tke.v20180525.CreateImageCache", async function () {
    try {
       const data = await client.CreateImageCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteClusterVirtualNodePool", async function () {
    try {
       const data = await client.DeleteClusterVirtualNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DisableEncryptionProtection", async function () {
    try {
       const data = await client.DisableEncryptionProtection({})
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

it("tke.v20180525.DescribePrometheusTemp", async function () {
    try {
       const data = await client.DescribePrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteAddon", async function () {
    try {
       const data = await client.DeleteAddon({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateEksLogConfig", async function () {
    try {
       const data = await client.CreateEksLogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DrainClusterVirtualNode", async function () {
    try {
       const data = await client.DrainClusterVirtualNode({})
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

it("tke.v20180525.DeletePrometheusConfig", async function () {
    try {
       const data = await client.DeletePrometheusConfig({})
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

it("tke.v20180525.ModifyClusterAuthenticationOptions", async function () {
    try {
       const data = await client.ModifyClusterAuthenticationOptions({})
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

it("tke.v20180525.DescribeClusterExtraArgs", async function () {
    try {
       const data = await client.DescribeClusterExtraArgs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpdateClusterKubeconfig", async function () {
    try {
       const data = await client.UpdateClusterKubeconfig({})
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

it("tke.v20180525.ModifyNodePoolInstanceTypes", async function () {
    try {
       const data = await client.ModifyNodePoolInstanceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyMasterComponent", async function () {
    try {
       const data = await client.ModifyMasterComponent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyClusterImage", async function () {
    try {
       const data = await client.ModifyClusterImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeLogConfigs", async function () {
    try {
       const data = await client.DescribeLogConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusTemp", async function () {
    try {
       const data = await client.CreatePrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ListClusterInspectionResultsItems", async function () {
    try {
       const data = await client.ListClusterInspectionResultsItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.EnableEncryptionProtection", async function () {
    try {
       const data = await client.EnableEncryptionProtection({})
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

it("tke.v20180525.DisableVpcCniNetworkType", async function () {
    try {
       const data = await client.DisableVpcCniNetworkType({})
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

it("tke.v20180525.CreatePrometheusGlobalNotification", async function () {
    try {
       const data = await client.CreatePrometheusGlobalNotification({})
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

it("tke.v20180525.DescribeLogSwitches", async function () {
    try {
       const data = await client.DescribeLogSwitches({})
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

it("tke.v20180525.DescribeClusterReleaseHistory", async function () {
    try {
       const data = await client.DescribeClusterReleaseHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.RollbackClusterRelease", async function () {
    try {
       const data = await client.RollbackClusterRelease({})
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

it("tke.v20180525.DescribeEncryptionStatus", async function () {
    try {
       const data = await client.DescribeEncryptionStatus({})
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

it("tke.v20180525.DescribePrometheusRecordRules", async function () {
    try {
       const data = await client.DescribePrometheusRecordRules({})
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

it("tke.v20180525.DescribePrometheusGlobalNotification", async function () {
    try {
       const data = await client.DescribePrometheusGlobalNotification({})
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

it("tke.v20180525.DescribePodDeductionRate", async function () {
    try {
       const data = await client.DescribePodDeductionRate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyPrometheusGlobalNotification", async function () {
    try {
       const data = await client.ModifyPrometheusGlobalNotification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteReservedInstances", async function () {
    try {
       const data = await client.DeleteReservedInstances({})
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

it("tke.v20180525.DeletePrometheusRecordRuleYaml", async function () {
    try {
       const data = await client.DeletePrometheusRecordRuleYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeBackupStorageLocations", async function () {
    try {
       const data = await client.DescribeBackupStorageLocations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyPrometheusTemp", async function () {
    try {
       const data = await client.ModifyPrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyPrometheusRecordRuleYaml", async function () {
    try {
       const data = await client.ModifyPrometheusRecordRuleYaml({})
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

it("tke.v20180525.DescribeClusterSecurity", async function () {
    try {
       const data = await client.DescribeClusterSecurity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.RenewReservedInstances", async function () {
    try {
       const data = await client.RenewReservedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusClusterAgents", async function () {
    try {
       const data = await client.DescribePrometheusClusterAgents({})
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

it("tke.v20180525.CreateTKEEdgeCluster", async function () {
    try {
       const data = await client.CreateTKEEdgeCluster({})
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

it("tke.v20180525.DescribePrometheusTempSync", async function () {
    try {
       const data = await client.DescribePrometheusTempSync({})
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

it("tke.v20180525.DescribeECMInstances", async function () {
    try {
       const data = await client.DescribeECMInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteTKEEdgeCluster", async function () {
    try {
       const data = await client.DeleteTKEEdgeCluster({})
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

it("tke.v20180525.DescribeClusterEndpoints", async function () {
    try {
       const data = await client.DescribeClusterEndpoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusClusterAgent", async function () {
    try {
       const data = await client.CreatePrometheusClusterAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeletePrometheusAlertPolicy", async function () {
    try {
       const data = await client.DeletePrometheusAlertPolicy({})
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

it("tke.v20180525.DescribeClusterReleaseDetails", async function () {
    try {
       const data = await client.DescribeClusterReleaseDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DisableClusterAudit", async function () {
    try {
       const data = await client.DisableClusterAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreateEdgeCVMInstances", async function () {
    try {
       const data = await client.CreateEdgeCVMInstances({})
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

it("tke.v20180525.DescribePrometheusGlobalConfig", async function () {
    try {
       const data = await client.DescribePrometheusGlobalConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.SyncPrometheusTemp", async function () {
    try {
       const data = await client.SyncPrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.ModifyOpenPolicyList", async function () {
    try {
       const data = await client.ModifyOpenPolicyList({})
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

it("tke.v20180525.RemoveNodeFromNodePool", async function () {
    try {
       const data = await client.RemoveNodeFromNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeTKEEdgeClusterStatus", async function () {
    try {
       const data = await client.DescribeTKEEdgeClusterStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusAlertPolicy", async function () {
    try {
       const data = await client.CreatePrometheusAlertPolicy({})
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

it("tke.v20180525.DescribePrometheusAlertPolicy", async function () {
    try {
       const data = await client.DescribePrometheusAlertPolicy({})
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

it("tke.v20180525.DisableEventPersistence", async function () {
    try {
       const data = await client.DisableEventPersistence({})
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

it("tke.v20180525.CreateClusterRelease", async function () {
    try {
       const data = await client.CreateClusterRelease({})
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

it("tke.v20180525.DescribeClusterVirtualNodePools", async function () {
    try {
       const data = await client.DescribeClusterVirtualNodePools({})
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

it("tke.v20180525.DescribeRIUtilizationDetail", async function () {
    try {
       const data = await client.DescribeRIUtilizationDetail({})
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

it("tke.v20180525.DescribeEdgeClusterUpgradeInfo", async function () {
    try {
       const data = await client.DescribeEdgeClusterUpgradeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeleteLogConfigs", async function () {
    try {
       const data = await client.DeleteLogConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusConfig", async function () {
    try {
       const data = await client.DescribePrometheusConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CancelClusterRelease", async function () {
    try {
       const data = await client.CancelClusterRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeEdgeClusterInstances", async function () {
    try {
       const data = await client.DescribeEdgeClusterInstances({})
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

it("tke.v20180525.DescribeClusterAsGroups", async function () {
    try {
       const data = await client.DescribeClusterAsGroups({})
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

it("tke.v20180525.CreateEdgeLogConfig", async function () {
    try {
       const data = await client.CreateEdgeLogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeClusterInspectionResultsOverview", async function () {
    try {
       const data = await client.DescribeClusterInspectionResultsOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DeletePrometheusTemp", async function () {
    try {
       const data = await client.DeletePrometheusTemp({})
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

it("tke.v20180525.DescribePrometheusAlertRule", async function () {
    try {
       const data = await client.DescribePrometheusAlertRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeMasterComponent", async function () {
    try {
       const data = await client.DescribeMasterComponent({})
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

it("tke.v20180525.ForwardTKEEdgeApplicationRequestV3", async function () {
    try {
       const data = await client.ForwardTKEEdgeApplicationRequestV3({})
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

it("tke.v20180525.DescribeClusterReleases", async function () {
    try {
       const data = await client.DescribeClusterReleases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.UpgradeClusterRelease", async function () {
    try {
       const data = await client.UpgradeClusterRelease({})
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

it("tke.v20180525.UpdateTKEEdgeCluster", async function () {
    try {
       const data = await client.UpdateTKEEdgeCluster({})
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

it("tke.v20180525.DescribePrometheusTemplates", async function () {
    try {
       const data = await client.DescribePrometheusTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribeAddon", async function () {
    try {
       const data = await client.DescribeAddon({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.DescribePrometheusInstancesOverview", async function () {
    try {
       const data = await client.DescribePrometheusInstancesOverview({})
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

it("tke.v20180525.DeletePrometheusTempSync", async function () {
    try {
       const data = await client.DeletePrometheusTempSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CreatePrometheusConfig", async function () {
    try {
       const data = await client.CreatePrometheusConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.RunPrometheusInstance", async function () {
    try {
       const data = await client.RunPrometheusInstance({})
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

it("tke.v20180525.CreateClusterVirtualNode", async function () {
    try {
       const data = await client.CreateClusterVirtualNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.InstallLogAgent", async function () {
    try {
       const data = await client.InstallLogAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20180525.CheckEdgeClusterCIDR", async function () {
    try {
       const data = await client.CheckEdgeClusterCIDR({})
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

it("tke.v20180525.ModifyClusterRuntimeConfig", async function () {
    try {
       const data = await client.ModifyClusterRuntimeConfig({})
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

})
