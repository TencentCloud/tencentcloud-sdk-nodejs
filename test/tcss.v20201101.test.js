
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

it("tcss.v20201101.ModifyAccessControlRuleStatus", async function () {
    try {
       const data = await client.ModifyAccessControlRuleStatus({})
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

it("tcss.v20201101.ModifyEscapeEventStatus", async function () {
    try {
       const data = await client.ModifyEscapeEventStatus({})
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

it("tcss.v20201101.DescribeAssetAppServiceList", async function () {
    try {
       const data = await client.DescribeAssetAppServiceList({})
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

it("tcss.v20201101.DescribeReverseShellWhiteLists", async function () {
    try {
       const data = await client.DescribeReverseShellWhiteLists({})
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

it("tcss.v20201101.DescribeVirusMonitorSetting", async function () {
    try {
       const data = await client.DescribeVirusMonitorSetting({})
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

it("tcss.v20201101.ModifyVirusScanSetting", async function () {
    try {
       const data = await client.ModifyVirusScanSetting({})
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

it("tcss.v20201101.DescribeAffectedClusterCount", async function () {
    try {
       const data = await client.DescribeAffectedClusterCount({})
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

it("tcss.v20201101.DescribeEscapeEventInfo", async function () {
    try {
       const data = await client.DescribeEscapeEventInfo({})
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

it("tcss.v20201101.ModifyAssetImageScanStop", async function () {
    try {
       const data = await client.ModifyAssetImageScanStop({})
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

it("tcss.v20201101.DescribeRiskSyscallNames", async function () {
    try {
       const data = await client.DescribeRiskSyscallNames({})
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

it("tcss.v20201101.DescribeRiskSyscallEventsExport", async function () {
    try {
       const data = await client.DescribeRiskSyscallEventsExport({})
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

it("tcss.v20201101.DescribeAssetImageRegistryRegistryDetail", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryRegistryDetail({})
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

it("tcss.v20201101.DescribeAssetImageBindRuleInfo", async function () {
    try {
       const data = await client.DescribeAssetImageBindRuleInfo({})
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

it("tcss.v20201101.DescribeRefreshTask", async function () {
    try {
       const data = await client.DescribeRefreshTask({})
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

it("tcss.v20201101.DescribeContainerAssetSummary", async function () {
    try {
       const data = await client.DescribeContainerAssetSummary({})
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

it("tcss.v20201101.ModifyAbnormalProcessRuleStatus", async function () {
    try {
       const data = await client.ModifyAbnormalProcessRuleStatus({})
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

it("tcss.v20201101.DescribeComplianceTaskAssetSummary", async function () {
    try {
       const data = await client.DescribeComplianceTaskAssetSummary({})
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

it("tcss.v20201101.ModifyVirusMonitorSetting", async function () {
    try {
       const data = await client.ModifyVirusMonitorSetting({})
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

it("tcss.v20201101.ScanComplianceAssets", async function () {
    try {
       const data = await client.ScanComplianceAssets({})
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

it("tcss.v20201101.DescribeCheckItemList", async function () {
    try {
       const data = await client.DescribeCheckItemList({})
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

it("tcss.v20201101.DescribeComplianceWhitelistItemList", async function () {
    try {
       const data = await client.DescribeComplianceWhitelistItemList({})
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

it("tcss.v20201101.DescribeAssetPortList", async function () {
    try {
       const data = await client.DescribeAssetPortList({})
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

it("tcss.v20201101.DeleteAbnormalProcessRules", async function () {
    try {
       const data = await client.DeleteAbnormalProcessRules({})
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

it("tcss.v20201101.CreateVirusScanTask", async function () {
    try {
       const data = await client.CreateVirusScanTask({})
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

it("tcss.v20201101.DescribeWarningRules", async function () {
    try {
       const data = await client.DescribeWarningRules({})
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

it("tcss.v20201101.DescribeAssetImageVulListExport", async function () {
    try {
       const data = await client.DescribeAssetImageVulListExport({})
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

it("tcss.v20201101.AddAssetImageRegistryRegistryDetail", async function () {
    try {
       const data = await client.AddAssetImageRegistryRegistryDetail({})
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

it("tcss.v20201101.SyncAssetImageRegistryAsset", async function () {
    try {
       const data = await client.SyncAssetImageRegistryAsset({})
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

it("tcss.v20201101.ScanCompliancePolicyItems", async function () {
    try {
       const data = await client.ScanCompliancePolicyItems({})
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

it("tcss.v20201101.DescribeContainerSecEventSummary", async function () {
    try {
       const data = await client.DescribeContainerSecEventSummary({})
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

it("tcss.v20201101.DescribeReverseShellEvents", async function () {
    try {
       const data = await client.DescribeReverseShellEvents({})
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

it("tcss.v20201101.CreateAssetImageRegistryScanTask", async function () {
    try {
       const data = await client.CreateAssetImageRegistryScanTask({})
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

it("tcss.v20201101.DescribeAccessControlDetail", async function () {
    try {
       const data = await client.DescribeAccessControlDetail({})
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

it("tcss.v20201101.ModifyAssetImageRegistryScanStopOneKey", async function () {
    try {
       const data = await client.ModifyAssetImageRegistryScanStopOneKey({})
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

it("tcss.v20201101.ModifyReverseShellStatus", async function () {
    try {
       const data = await client.ModifyReverseShellStatus({})
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

it("tcss.v20201101.DescribeAssetImageRiskListExport", async function () {
    try {
       const data = await client.DescribeAssetImageRiskListExport({})
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

it("tcss.v20201101.DescribeRiskList", async function () {
    try {
       const data = await client.DescribeRiskList({})
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

it("tcss.v20201101.ModifyCompliancePeriodTask", async function () {
    try {
       const data = await client.ModifyCompliancePeriodTask({})
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

it("tcss.v20201101.DescribeAbnormalProcessRules", async function () {
    try {
       const data = await client.DescribeAbnormalProcessRules({})
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

it("tcss.v20201101.DescribeRiskSyscallEvents", async function () {
    try {
       const data = await client.DescribeRiskSyscallEvents({})
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

it("tcss.v20201101.DescribeAssetSummary", async function () {
    try {
       const data = await client.DescribeAssetSummary({})
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

it("tcss.v20201101.AddEditAbnormalProcessRule", async function () {
    try {
       const data = await client.AddEditAbnormalProcessRule({})
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

it("tcss.v20201101.DescribeAssetImageHostList", async function () {
    try {
       const data = await client.DescribeAssetImageHostList({})
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

it("tcss.v20201101.DescribeAssetImageRegistryVulList", async function () {
    try {
       const data = await client.DescribeAssetImageRegistryVulList({})
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

it("tcss.v20201101.ScanComplianceAssetsByPolicyItem", async function () {
    try {
       const data = await client.ScanComplianceAssetsByPolicyItem({})
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

it("tcss.v20201101.DescribeSecEventsTendency", async function () {
    try {
       const data = await client.DescribeSecEventsTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
