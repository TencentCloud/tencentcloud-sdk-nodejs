
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tcss.v20201101.Client({
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
describe("tcss.v20201101.test.js", function () {

it("tcss.v20201101.DescribeImageAuthorizedInfo", async function () {
    try {
       const data = await client.DescribeImageAuthorizedInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateK8sApiAbnormalEventExportJob", async function () {
    try {
       const data = await client.CreateK8sApiAbnormalEventExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifySecLogDeliveryClsSetting", async function () {
    try {
       const data = await client.ModifySecLogDeliveryClsSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessEventsExport", async function () {
    try {
       const data = await client.DescribeAbnormalProcessEventsExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusScanTimeoutSetting", async function () {
    try {
       const data = await client.DescribeVirusScanTimeoutSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusSummary", async function () {
    try {
       const data = await client.DescribeVirusSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVulDefenceSetting", async function () {
    try {
       const data = await client.ModifyVulDefenceSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateAbnormalProcessRulesExportJob", async function () {
    try {
       const data = await client.CreateAbnormalProcessRulesExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetHostList", async function () {
    try {
       const data = await client.DescribeAssetHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ScanComplianceScanFailedAssets", async function () {
    try {
       const data = await client.ScanComplianceScanFailedAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeIndexList", async function () {
    try {
       const data = await client.DescribeIndexList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribePublicKey", async function () {
    try {
       const data = await client.DescribePublicKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAccessControlDetail", async function () {
    try {
       const data = await client.DescribeAccessControlDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusAutoIsolateSampleDetail", async function () {
    try {
       const data = await client.DescribeVirusAutoIsolateSampleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessRulesExport", async function () {
    try {
       const data = await client.DescribeAbnormalProcessRulesExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallPolicyStatus", async function () {
    try {
       const data = await client.DescribeNetworkFirewallPolicyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeK8sApiAbnormalSummary", async function () {
    try {
       const data = await client.DescribeK8sApiAbnormalSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVulDefenceEventExportJob", async function () {
    try {
       const data = await client.CreateVulDefenceEventExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetAppServiceList", async function () {
    try {
       const data = await client.DescribeAssetAppServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteSearchTemplate", async function () {
    try {
       const data = await client.DeleteSearchTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVulImageExportJob", async function () {
    try {
       const data = await client.CreateVulImageExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulScanAuthorizedImageSummary", async function () {
    try {
       const data = await client.DescribeVulScanAuthorizedImageSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.RemoveAssetImageRegistryRegistryDetail", async function () {
    try {
       const data = await client.RemoveAssetImageRegistryRegistryDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateRefreshTask", async function () {
    try {
       const data = await client.CreateRefreshTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSearchExportList", async function () {
    try {
       const data = await client.DescribeSearchExportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifySecLogKafkaUIN", async function () {
    try {
       const data = await client.ModifySecLogKafkaUIN({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAssetImageRegistryScanStopOneKey", async function () {
    try {
       const data = await client.ModifyAssetImageRegistryScanStopOneKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeReverseShellWhiteLists", async function () {
    try {
       const data = await client.DescribeReverseShellWhiteLists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateComponentExportJob", async function () {
    try {
       const data = await client.CreateComponentExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusAutoIsolateSampleDownloadURL", async function () {
    try {
       const data = await client.DescribeVirusAutoIsolateSampleDownloadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageRegistryNamespaceList", async function () {
    try {
       const data = await client.DescribeImageRegistryNamespaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeScanIgnoreVulList", async function () {
    try {
       const data = await client.DescribeScanIgnoreVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogJoinObjectList", async function () {
    try {
       const data = await client.DescribeSecLogJoinObjectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetComponentList", async function () {
    try {
       const data = await client.DescribeAssetComponentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageScanStatus", async function () {
    try {
       const data = await client.DescribeAssetImageScanStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAgentDaemonSetCmd", async function () {
    try {
       const data = await client.DescribeAgentDaemonSetCmd({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateK8sApiAbnormalRuleExportJob", async function () {
    try {
       const data = await client.CreateK8sApiAbnormalRuleExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateNetworkFirewallPolicyDiscover", async function () {
    try {
       const data = await client.CreateNetworkFirewallPolicyDiscover({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateClusterCheckTask", async function () {
    try {
       const data = await client.CreateClusterCheckTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAccessControlEvents", async function () {
    try {
       const data = await client.DescribeAccessControlEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.SwitchImageAutoAuthorizedRule", async function () {
    try {
       const data = await client.SwitchImageAutoAuthorizedRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVirusScanSetting", async function () {
    try {
       const data = await client.ModifyVirusScanSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogDeliveryKafkaOptions", async function () {
    try {
       const data = await client.DescribeSecLogDeliveryKafkaOptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryVirusListExport", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryVirusListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ConfirmNetworkFirewallPolicy", async function () {
    try {
       const data = await client.ConfirmNetworkFirewallPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteComplianceAssetPolicySetFromWhitelist", async function () {
    try {
       const data = await client.DeleteComplianceAssetPolicySetFromWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageComponentList", async function () {
    try {
       const data = await client.DescribeImageComponentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistrySummary", async function () {
    try {
       const data = await client.DescribeAssetImageRegistrySummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.UpdateNetworkFirewallPolicyDetail", async function () {
    try {
       const data = await client.UpdateNetworkFirewallPolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryAssetStatus", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryAssetStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryRegistryList", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryRegistryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAssetImageRegistryScanStop", async function () {
    try {
       const data = await client.ModifyAssetImageRegistryScanStop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeClusterDetail", async function () {
    try {
       const data = await client.DescribeClusterDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryVirusList", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryVirusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.UpdateImageRegistryTimingScanTask", async function () {
    try {
       const data = await client.UpdateImageRegistryTimingScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateAssetImageRegistryScanTaskOneKey", async function () {
    try {
       const data = await client.CreateAssetImageRegistryScanTaskOneKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAccessControlRuleStatus", async function () {
    try {
       const data = await client.ModifyAccessControlRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallPolicyYamlDetail", async function () {
    try {
       const data = await client.DescribeNetworkFirewallPolicyYamlDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeEventsExport", async function () {
    try {
       const data = await client.DescribeEscapeEventsExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CheckNetworkFirewallPolicyYaml", async function () {
    try {
       const data = await client.CheckNetworkFirewallPolicyYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.UpdateNetworkFirewallPolicyYamlDetail", async function () {
    try {
       const data = await client.UpdateNetworkFirewallPolicyYamlDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallNamespaceList", async function () {
    try {
       const data = await client.DescribeNetworkFirewallNamespaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageListExport", async function () {
    try {
       const data = await client.DescribeAssetImageListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageScanSetting", async function () {
    try {
       const data = await client.DescribeAssetImageScanSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateCheckComponent", async function () {
    try {
       const data = await client.CreateCheckComponent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNewestVul", async function () {
    try {
       const data = await client.DescribeNewestVul({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRiskSyscallNames", async function () {
    try {
       const data = await client.DescribeRiskSyscallNames({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyK8sApiAbnormalRuleInfo", async function () {
    try {
       const data = await client.ModifyK8sApiAbnormalRuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeCompliancePeriodTaskList", async function () {
    try {
       const data = await client.DescribeCompliancePeriodTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteAccessControlRules", async function () {
    try {
       const data = await client.DeleteAccessControlRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVulDefenceHostExportJob", async function () {
    try {
       const data = await client.CreateVulDefenceHostExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyEscapeEventStatus", async function () {
    try {
       const data = await client.ModifyEscapeEventStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessLevelSummary", async function () {
    try {
       const data = await client.DescribeAbnormalProcessLevelSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribePurchaseStateInfo", async function () {
    try {
       const data = await client.DescribePurchaseStateInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRiskSyscallWhiteListDetail", async function () {
    try {
       const data = await client.DescribeRiskSyscallWhiteListDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryDetail", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyEscapeWhiteList", async function () {
    try {
       const data = await client.ModifyEscapeWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusManualScanEstimateTimeout", async function () {
    try {
       const data = await client.DescribeVirusManualScanEstimateTimeout({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRiskSyscallEventsExport", async function () {
    try {
       const data = await client.DescribeRiskSyscallEventsExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageAutoAuthorizedRule", async function () {
    try {
       const data = await client.DescribeImageAutoAuthorizedRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessRuleDetail", async function () {
    try {
       const data = await client.DescribeAbnormalProcessRuleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateDefenceVulExportJob", async function () {
    try {
       const data = await client.CreateDefenceVulExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeValueAddedSrvInfo", async function () {
    try {
       const data = await client.DescribeValueAddedSrvInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVirusFileStatus", async function () {
    try {
       const data = await client.ModifyVirusFileStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddEditReverseShellWhiteList", async function () {
    try {
       const data = await client.AddEditReverseShellWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeReverseShellDetail", async function () {
    try {
       const data = await client.DescribeReverseShellDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeESAggregations", async function () {
    try {
       const data = await client.DescribeESAggregations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageBindRuleInfo", async function () {
    try {
       const data = await client.DescribeAssetImageBindRuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteIgnoreVul", async function () {
    try {
       const data = await client.DeleteIgnoreVul({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateAssetImageVirusExportJob", async function () {
    try {
       const data = await client.CreateAssetImageVirusExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallPolicyDiscover", async function () {
    try {
       const data = await client.DescribeNetworkFirewallPolicyDiscover({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogDeliveryClsOptions", async function () {
    try {
       const data = await client.DescribeSecLogDeliveryClsOptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeUnauthorizedCoresTendency", async function () {
    try {
       const data = await client.DescribeUnauthorizedCoresTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeTaskResultSummary", async function () {
    try {
       const data = await client.DescribeTaskResultSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetContainerDetail", async function () {
    try {
       const data = await client.DescribeAssetContainerDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryRiskInfoList", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryRiskInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyEscapeRule", async function () {
    try {
       const data = await client.ModifyEscapeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeCompliancePolicyItemAffectedSummary", async function () {
    try {
       const data = await client.DescribeCompliancePolicyItemAffectedSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRefreshTask", async function () {
    try {
       const data = await client.DescribeRefreshTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateNetworkFirewallClusterRefresh", async function () {
    try {
       const data = await client.CreateNetworkFirewallClusterRefresh({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRiskSyscallEvents", async function () {
    try {
       const data = await client.DescribeRiskSyscallEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddComplianceAssetPolicySetToWhitelist", async function () {
    try {
       const data = await client.AddComplianceAssetPolicySetToWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifySecLogJoinObjects", async function () {
    try {
       const data = await client.ModifySecLogJoinObjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeContainerAssetSummary", async function () {
    try {
       const data = await client.DescribeContainerAssetSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageRegistryTimingScanTask", async function () {
    try {
       const data = await client.DescribeImageRegistryTimingScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeReverseShellEventsExport", async function () {
    try {
       const data = await client.DescribeReverseShellEventsExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetDBServiceList", async function () {
    try {
       const data = await client.DescribeAssetDBServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulImageList", async function () {
    try {
       const data = await client.DescribeVulImageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAbnormalProcessRuleStatus", async function () {
    try {
       const data = await client.ModifyAbnormalProcessRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulDefenceEvent", async function () {
    try {
       const data = await client.DescribeVulDefenceEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulIgnoreRegistryImageList", async function () {
    try {
       const data = await client.DescribeVulIgnoreRegistryImageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulScanInfo", async function () {
    try {
       const data = await client.DescribeVulScanInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulImageSummary", async function () {
    try {
       const data = await client.DescribeVulImageSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateWebVulExportJob", async function () {
    try {
       const data = await client.CreateWebVulExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.UpdateAndPublishNetworkFirewallPolicyDetail", async function () {
    try {
       const data = await client.UpdateAndPublishNetworkFirewallPolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyContainerNetStatus", async function () {
    try {
       const data = await client.ModifyContainerNetStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageRiskTendency", async function () {
    try {
       const data = await client.DescribeImageRiskTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAgentInstallCommand", async function () {
    try {
       const data = await client.DescribeAgentInstallCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeExportJobResult", async function () {
    try {
       const data = await client.DescribeExportJobResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateAssetImageScanTask", async function () {
    try {
       const data = await client.CreateAssetImageScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateEmergencyVulExportJob", async function () {
    try {
       const data = await client.CreateEmergencyVulExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageScanTask", async function () {
    try {
       const data = await client.DescribeAssetImageScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryListExport", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulDefencePlugin", async function () {
    try {
       const data = await client.DescribeVulDefencePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeK8sApiAbnormalEventList", async function () {
    try {
       const data = await client.DescribeK8sApiAbnormalEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeComplianceTaskAssetSummary", async function () {
    try {
       const data = await client.DescribeComplianceTaskAssetSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVirusMonitorSetting", async function () {
    try {
       const data = await client.ModifyVirusMonitorSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAccessControlRules", async function () {
    try {
       const data = await client.DescribeAccessControlRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageVirusListExport", async function () {
    try {
       const data = await client.DescribeAssetImageVirusListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetContainerList", async function () {
    try {
       const data = await client.DescribeAssetContainerList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateSearchTemplate", async function () {
    try {
       const data = await client.CreateSearchTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribePostPayDetail", async function () {
    try {
       const data = await client.DescribePostPayDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddNetworkFirewallPolicyYamlDetail", async function () {
    try {
       const data = await client.AddNetworkFirewallPolicyYamlDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteReverseShellEvents", async function () {
    try {
       const data = await client.DeleteReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryRegistryDetail", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryRegistryDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddEscapeWhiteList", async function () {
    try {
       const data = await client.AddEscapeWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateImageExportJob", async function () {
    try {
       const data = await client.CreateImageExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogDeliveryClsSetting", async function () {
    try {
       const data = await client.DescribeSecLogDeliveryClsSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusList", async function () {
    try {
       const data = await client.DescribeVirusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAssetImageScanStop", async function () {
    try {
       const data = await client.ModifyAssetImageScanStop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ScanComplianceAssets", async function () {
    try {
       const data = await client.ScanComplianceAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyK8sApiAbnormalEventStatus", async function () {
    try {
       const data = await client.ModifyK8sApiAbnormalEventStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddIgnoreVul", async function () {
    try {
       const data = await client.AddIgnoreVul({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeCheckItemList", async function () {
    try {
       const data = await client.DescribeCheckItemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateSystemVulExportJob", async function () {
    try {
       const data = await client.CreateSystemVulExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusDetail", async function () {
    try {
       const data = await client.DescribeVirusDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVulExportJob", async function () {
    try {
       const data = await client.CreateVulExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeComplianceWhitelistItemList", async function () {
    try {
       const data = await client.DescribeComplianceWhitelistItemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallPolicyList", async function () {
    try {
       const data = await client.DescribeNetworkFirewallPolicyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.SyncAssetImageRegistryAsset", async function () {
    try {
       const data = await client.SyncAssetImageRegistryAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateComplianceTask", async function () {
    try {
       const data = await client.CreateComplianceTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeComplianceScanFailedAssetList", async function () {
    try {
       const data = await client.DescribeComplianceScanFailedAssetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeK8sApiAbnormalRuleScopeList", async function () {
    try {
       const data = await client.DescribeK8sApiAbnormalRuleScopeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetClusterList", async function () {
    try {
       const data = await client.DescribeAssetClusterList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSupportDefenceVul", async function () {
    try {
       const data = await client.DescribeSupportDefenceVul({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteRiskSyscallEvents", async function () {
    try {
       const data = await client.DeleteRiskSyscallEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAffectedWorkloadList", async function () {
    try {
       const data = await client.DescribeAffectedWorkloadList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddCompliancePolicyAssetSetToWhitelist", async function () {
    try {
       const data = await client.AddCompliancePolicyAssetSetToWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteAbnormalProcessRules", async function () {
    try {
       const data = await client.DeleteAbnormalProcessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulDetail", async function () {
    try {
       const data = await client.DescribeVulDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeExportJobManageList", async function () {
    try {
       const data = await client.DescribeExportJobManageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVulScanTask", async function () {
    try {
       const data = await client.CreateVulScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallClusterList", async function () {
    try {
       const data = await client.DescribeNetworkFirewallClusterList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.StopVulScanTask", async function () {
    try {
       const data = await client.StopVulScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryRiskListExport", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryRiskListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVirusScanTimeoutSetting", async function () {
    try {
       const data = await client.ModifyVirusScanTimeoutSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVirusScanTask", async function () {
    try {
       const data = await client.CreateVirusScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulDefenceHost", async function () {
    try {
       const data = await client.DescribeVulDefenceHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulIgnoreLocalImageList", async function () {
    try {
       const data = await client.DescribeVulIgnoreLocalImageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeEventDetail", async function () {
    try {
       const data = await client.DescribeEscapeEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyRiskSyscallStatus", async function () {
    try {
       const data = await client.ModifyRiskSyscallStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateRiskDnsEventExportJob", async function () {
    try {
       const data = await client.CreateRiskDnsEventExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulDefenceEventTendency", async function () {
    try {
       const data = await client.DescribeVulDefenceEventTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeWhiteList", async function () {
    try {
       const data = await client.DescribeEscapeWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ScanCompliancePolicyItems", async function () {
    try {
       const data = await client.ScanCompliancePolicyItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteReverseShellWhiteLists", async function () {
    try {
       const data = await client.DeleteReverseShellWhiteLists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeComplianceAssetDetailInfo", async function () {
    try {
       const data = await client.DescribeComplianceAssetDetailInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAccessControlRuleDetail", async function () {
    try {
       const data = await client.DescribeAccessControlRuleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.UpdateAndPublishNetworkFirewallPolicyYamlDetail", async function () {
    try {
       const data = await client.UpdateAndPublishNetworkFirewallPolicyYamlDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyImageAuthorized", async function () {
    try {
       const data = await client.ModifyImageAuthorized({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAbnormalProcessStatus", async function () {
    try {
       const data = await client.ModifyAbnormalProcessStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateExportComplianceStatusListJob", async function () {
    try {
       const data = await client.CreateExportComplianceStatusListJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageSimpleList", async function () {
    try {
       const data = await client.DescribeAssetImageSimpleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageSimpleList", async function () {
    try {
       const data = await client.DescribeImageSimpleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAccessControlStatus", async function () {
    try {
       const data = await client.ModifyAccessControlStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateEscapeWhiteListExportJob", async function () {
    try {
       const data = await client.CreateEscapeWhiteListExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeRuleInfo", async function () {
    try {
       const data = await client.DescribeEscapeRuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRiskList", async function () {
    try {
       const data = await client.DescribeAssetImageRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageHostList", async function () {
    try {
       const data = await client.DescribeAssetImageHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeClusterSummary", async function () {
    try {
       const data = await client.DescribeClusterSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulDefenceEventDetail", async function () {
    try {
       const data = await client.DescribeVulDefenceEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeSafeState", async function () {
    try {
       const data = await client.DescribeEscapeSafeState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusTaskList", async function () {
    try {
       const data = await client.DescribeVirusTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSearchLogs", async function () {
    try {
       const data = await client.DescribeSearchLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddAssetImageRegistryRegistryDetail", async function () {
    try {
       const data = await client.AddAssetImageRegistryRegistryDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetPortList", async function () {
    try {
       const data = await client.DescribeAssetPortList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddEditImageAutoAuthorizedRule", async function () {
    try {
       const data = await client.AddEditImageAutoAuthorizedRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeTcssSummary", async function () {
    try {
       const data = await client.DescribeTcssSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageRiskSummary", async function () {
    try {
       const data = await client.DescribeImageRiskSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEmergencyVulList", async function () {
    try {
       const data = await client.DescribeEmergencyVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulLevelSummary", async function () {
    try {
       const data = await client.DescribeVulLevelSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallNamespaceLabelList", async function () {
    try {
       const data = await client.DescribeNetworkFirewallNamespaceLabelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVirusAutoIsolateExampleSwitch", async function () {
    try {
       const data = await client.ModifyVirusAutoIsolateExampleSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallClusterRefreshStatus", async function () {
    try {
       const data = await client.DescribeNetworkFirewallClusterRefreshStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusMonitorSetting", async function () {
    try {
       const data = await client.DescribeVirusMonitorSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusAutoIsolateSetting", async function () {
    try {
       const data = await client.DescribeVirusAutoIsolateSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeEventTendency", async function () {
    try {
       const data = await client.DescribeEscapeEventTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyCompliancePeriodTask", async function () {
    try {
       const data = await client.ModifyCompliancePeriodTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogCleanSettingInfo", async function () {
    try {
       const data = await client.DescribeSecLogCleanSettingInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSystemVulList", async function () {
    try {
       const data = await client.DescribeSystemVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulScanLocalImageList", async function () {
    try {
       const data = await client.DescribeVulScanLocalImageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.StopVirusScanTask", async function () {
    try {
       const data = await client.StopVirusScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddEditAbnormalProcessRule", async function () {
    try {
       const data = await client.AddEditAbnormalProcessRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVulDefenceEventStatus", async function () {
    try {
       const data = await client.ModifyVulDefenceEventStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ResetSecLogTopicConfig", async function () {
    try {
       const data = await client.ResetSecLogTopicConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVirusScanAgain", async function () {
    try {
       const data = await client.CreateVirusScanAgain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallAuditRecord", async function () {
    try {
       const data = await client.DescribeNetworkFirewallAuditRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifySecLogJoinState", async function () {
    try {
       const data = await client.ModifySecLogJoinState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeContainerSecEventSummary", async function () {
    try {
       const data = await client.DescribeContainerSecEventSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageAutoAuthorizedTaskList", async function () {
    try {
       const data = await client.DescribeImageAutoAuthorizedTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeComplianceTaskPolicyItemSummaryList", async function () {
    try {
       const data = await client.DescribeComplianceTaskPolicyItemSummaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageList", async function () {
    try {
       const data = await client.DescribeAssetImageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteK8sApiAbnormalRule", async function () {
    try {
       const data = await client.DeleteK8sApiAbnormalRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeReverseShellEvents", async function () {
    try {
       const data = await client.DescribeReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateProcessEventsExportJob", async function () {
    try {
       const data = await client.CreateProcessEventsExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallPolicyDetail", async function () {
    try {
       const data = await client.DescribeNetworkFirewallPolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateAssetImageRegistryScanTask", async function () {
    try {
       const data = await client.CreateAssetImageRegistryScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogAlertMsg", async function () {
    try {
       const data = await client.DescribeSecLogAlertMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeUnfinishRefreshTask", async function () {
    try {
       const data = await client.DescribeUnfinishRefreshTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddEditRiskSyscallWhiteList", async function () {
    try {
       const data = await client.AddEditRiskSyscallWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryScanStatusOneKey", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryScanStatusOneKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddAndPublishNetworkFirewallPolicyDetail", async function () {
    try {
       const data = await client.AddAndPublishNetworkFirewallPolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageVulListExport", async function () {
    try {
       const data = await client.DescribeAssetImageVulListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryList", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetProcessList", async function () {
    try {
       const data = await client.DescribeAssetProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeNetworkFirewallPodLabelsList", async function () {
    try {
       const data = await client.DescribeNetworkFirewallPodLabelsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeK8sApiAbnormalTendency", async function () {
    try {
       const data = await client.DescribeK8sApiAbnormalTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessEvents", async function () {
    try {
       const data = await client.DescribeAbnormalProcessEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.UpdateAssetImageRegistryRegistryDetail", async function () {
    try {
       const data = await client.UpdateAssetImageRegistryRegistryDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeProVersionInfo", async function () {
    try {
       const data = await client.DescribeProVersionInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeComplianceAssetPolicyItemList", async function () {
    try {
       const data = await client.DescribeComplianceAssetPolicyItemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.SetCheckMode", async function () {
    try {
       const data = await client.SetCheckMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeESHits", async function () {
    try {
       const data = await client.DescribeESHits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulDefenceSetting", async function () {
    try {
       const data = await client.DescribeVulDefenceSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetSyncLastTime", async function () {
    try {
       const data = await client.DescribeAssetSyncLastTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeK8sApiAbnormalRuleInfo", async function () {
    try {
       const data = await client.DescribeK8sApiAbnormalRuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteCompliancePolicyItemFromWhitelist", async function () {
    try {
       const data = await client.DeleteCompliancePolicyItemFromWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusScanSetting", async function () {
    try {
       const data = await client.DescribeVirusScanSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribePromotionActivity", async function () {
    try {
       const data = await client.DescribePromotionActivity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeComplianceAssetList", async function () {
    try {
       const data = await client.DescribeComplianceAssetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeCompliancePolicyItemAffectedAssetList", async function () {
    try {
       const data = await client.DescribeCompliancePolicyItemAffectedAssetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeLogStorageStatistic", async function () {
    try {
       const data = await client.DescribeLogStorageStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyAsset", async function () {
    try {
       const data = await client.ModifyAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateOrModifyPostPayCores", async function () {
    try {
       const data = await client.CreateOrModifyPostPayCores({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyVirusAutoIsolateSetting", async function () {
    try {
       const data = await client.ModifyVirusAutoIsolateSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogKafkaUIN", async function () {
    try {
       const data = await client.DescribeSecLogKafkaUIN({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessDetail", async function () {
    try {
       const data = await client.DescribeAbnormalProcessDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.RenewImageAuthorizeState", async function () {
    try {
       const data = await client.RenewImageAuthorizeState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAffectedClusterCount", async function () {
    try {
       const data = await client.DescribeAffectedClusterCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateVulContainerExportJob", async function () {
    try {
       const data = await client.CreateVulContainerExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAffectedNodeList", async function () {
    try {
       const data = await client.DescribeAffectedNodeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAccessControlEventsExport", async function () {
    try {
       const data = await client.DescribeAccessControlEventsExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusEventTendency", async function () {
    try {
       const data = await client.DescribeVirusEventTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeImageAutoAuthorizedLogList", async function () {
    try {
       const data = await client.DescribeImageAutoAuthorizedLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulLevelImageSummary", async function () {
    try {
       const data = await client.DescribeVulLevelImageSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyReverseShellStatus", async function () {
    try {
       const data = await client.ModifyReverseShellStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogJoinTypeList", async function () {
    try {
       const data = await client.DescribeSecLogJoinTypeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddEditWarningRules", async function () {
    try {
       const data = await client.AddEditWarningRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeABTestConfig", async function () {
    try {
       const data = await client.DescribeABTestConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRiskListExport", async function () {
    try {
       const data = await client.DescribeAssetImageRiskListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifySecLogCleanSettingInfo", async function () {
    try {
       const data = await client.ModifySecLogCleanSettingInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeExportJobDownloadURL", async function () {
    try {
       const data = await client.DescribeExportJobDownloadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryVulList", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRiskList", async function () {
    try {
       const data = await client.DescribeRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeEventInfo", async function () {
    try {
       const data = await client.DescribeEscapeEventInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulSummary", async function () {
    try {
       const data = await client.DescribeVulSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAutoAuthorizedRuleHost", async function () {
    try {
       const data = await client.DescribeAutoAuthorizedRuleHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddAndPublishNetworkFirewallPolicyYamlDetail", async function () {
    try {
       const data = await client.AddAndPublishNetworkFirewallPolicyYamlDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeEscapeEventTypeSummary", async function () {
    try {
       const data = await client.DescribeEscapeEventTypeSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateEscapeEventsExportJob", async function () {
    try {
       const data = await client.CreateEscapeEventsExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageVulList", async function () {
    try {
       const data = await client.DescribeAssetImageVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulTopRanking", async function () {
    try {
       const data = await client.DescribeVulTopRanking({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeWarningRules", async function () {
    try {
       const data = await client.DescribeWarningRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSearchTemplates", async function () {
    try {
       const data = await client.DescribeSearchTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddCompliancePolicyItemToWhitelist", async function () {
    try {
       const data = await client.AddCompliancePolicyItemToWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.InitializeUserComplianceEnvironment", async function () {
    try {
       const data = await client.InitializeUserComplianceEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeUserCluster", async function () {
    try {
       const data = await client.DescribeUserCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteMachine", async function () {
    try {
       const data = await client.DeleteMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateHostExportJob", async function () {
    try {
       const data = await client.CreateHostExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.OpenTcssTrial", async function () {
    try {
       const data = await client.OpenTcssTrial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessRules", async function () {
    try {
       const data = await client.DescribeAbnormalProcessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ScanComplianceAssetsByPolicyItem", async function () {
    try {
       const data = await client.ScanComplianceAssetsByPolicyItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteEscapeWhiteList", async function () {
    try {
       const data = await client.DeleteEscapeWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateNetworkFirewallPublish", async function () {
    try {
       const data = await client.CreateNetworkFirewallPublish({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateNetworkFirewallUndoPublish", async function () {
    try {
       const data = await client.CreateNetworkFirewallUndoPublish({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteRiskSyscallWhiteLists", async function () {
    try {
       const data = await client.DeleteRiskSyscallWhiteLists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddEditAccessControlRule", async function () {
    try {
       const data = await client.AddEditAccessControlRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulTendency", async function () {
    try {
       const data = await client.DescribeVulTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeReverseShellWhiteListDetail", async function () {
    try {
       const data = await client.DescribeReverseShellWhiteListDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateAssetImageScanSetting", async function () {
    try {
       const data = await client.CreateAssetImageScanSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageVirusList", async function () {
    try {
       const data = await client.DescribeAssetImageVirusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateK8sApiAbnormalRuleInfo", async function () {
    try {
       const data = await client.CreateK8sApiAbnormalRuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetSummary", async function () {
    try {
       const data = await client.DescribeAssetSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogDeliveryKafkaSetting", async function () {
    try {
       const data = await client.DescribeSecLogDeliveryKafkaSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeInspectionReport", async function () {
    try {
       const data = await client.DescribeInspectionReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteNetworkFirewallPolicyDetail", async function () {
    try {
       const data = await client.DeleteNetworkFirewallPolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetWebServiceList", async function () {
    try {
       const data = await client.DescribeAssetWebServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CheckRepeatAssetImageRegistry", async function () {
    try {
       const data = await client.CheckRepeatAssetImageRegistry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.AddNetworkFirewallPolicyDetail", async function () {
    try {
       const data = await client.AddNetworkFirewallPolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeK8sApiAbnormalEventInfo", async function () {
    try {
       const data = await client.DescribeK8sApiAbnormalEventInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAbnormalProcessEventTendency", async function () {
    try {
       const data = await client.DescribeAbnormalProcessEventTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVulContainerList", async function () {
    try {
       const data = await client.DescribeVulContainerList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecLogVasInfo", async function () {
    try {
       const data = await client.DescribeSecLogVasInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ExportVirusList", async function () {
    try {
       const data = await client.ExportVirusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusSampleDownloadUrl", async function () {
    try {
       const data = await client.DescribeVirusSampleDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetHostDetail", async function () {
    try {
       const data = await client.DescribeAssetHostDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageRegistryVulListExport", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryVulListExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeWebVulList", async function () {
    try {
       const data = await client.DescribeWebVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRiskSyscallWhiteLists", async function () {
    try {
       const data = await client.DescribeRiskSyscallWhiteLists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAccessControlRulesExport", async function () {
    try {
       const data = await client.DescribeAccessControlRulesExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeRiskSyscallDetail", async function () {
    try {
       const data = await client.DescribeRiskSyscallDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusAutoIsolateSampleList", async function () {
    try {
       const data = await client.DescribeVirusAutoIsolateSampleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeVirusScanTaskStatus", async function () {
    try {
       const data = await client.DescribeVirusScanTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifyK8sApiAbnormalRuleStatus", async function () {
    try {
       const data = await client.ModifyK8sApiAbnormalRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeSecEventsTendency", async function () {
    try {
       const data = await client.DescribeSecEventsTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeAssetImageDetail", async function () {
    try {
       const data = await client.DescribeAssetImageDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.ModifySecLogDeliveryKafkaSetting", async function () {
    try {
       const data = await client.ModifySecLogDeliveryKafkaSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.CreateAccessControlsRuleExportJob", async function () {
    try {
       const data = await client.CreateAccessControlsRuleExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DeleteCompliancePolicyAssetSetFromWhitelist", async function () {
    try {
       const data = await client.DeleteCompliancePolicyAssetSetFromWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcss.v20201101.DescribeK8sApiAbnormalRuleList", async function () {
    try {
       const data = await client.DescribeK8sApiAbnormalRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
