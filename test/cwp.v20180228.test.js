
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cwp.v20180228.Client({
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
describe("cwp.v20180228.test.js", function () {

it("cwp.v20180228.DeleteTags", async function () {
    try {
       const data = await client.DeleteTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.EditTags", async function () {
    try {
       const data = await client.EditTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.TrustMalwares", async function () {
    try {
       const data = await client.TrustMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetPortInfoList", async function () {
    try {
       const data = await client.DescribeAssetPortInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeComponentStatistics", async function () {
    try {
       const data = await client.DescribeComponentStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScanSchedule", async function () {
    try {
       const data = await client.DescribeScanSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMachineTag", async function () {
    try {
       const data = await client.DeleteMachineTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAttackLogs", async function () {
    try {
       const data = await client.DescribeAttackLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSearchExportList", async function () {
    try {
       const data = await client.DescribeSearchExportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetPlanTaskList", async function () {
    try {
       const data = await client.DescribeAssetPlanTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBanMode", async function () {
    try {
       const data = await client.DescribeBanMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ChangeRuleEventsIgnoreStatus", async function () {
    try {
       const data = await client.ChangeRuleEventsIgnoreStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetSystemPackageList", async function () {
    try {
       const data = await client.DescribeAssetSystemPackageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebAppPluginList", async function () {
    try {
       const data = await client.DescribeAssetWebAppPluginList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteSearchTemplate", async function () {
    try {
       const data = await client.DeleteSearchTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CheckBashRuleParams", async function () {
    try {
       const data = await client.CheckBashRuleParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScanTaskDetails", async function () {
    try {
       const data = await client.DescribeScanTaskDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeServerRelatedDirInfo", async function () {
    try {
       const data = await client.DescribeServerRelatedDirInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateBaselineStrategy", async function () {
    try {
       const data = await client.CreateBaselineStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeImportMachineInfo", async function () {
    try {
       const data = await client.DescribeImportMachineInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBashRules", async function () {
    try {
       const data = await client.DescribeBashRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSearchLogs", async function () {
    try {
       const data = await client.DescribeSearchLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeletePrivilegeEvents", async function () {
    try {
       const data = await client.DeletePrivilegeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAttackLogs", async function () {
    try {
       const data = await client.ExportAttackLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineHostTop", async function () {
    try {
       const data = await client.DescribeBaselineHostTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeExpertServiceList", async function () {
    try {
       const data = await client.DescribeExpertServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineList", async function () {
    try {
       const data = await client.DescribeBaselineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteBashEvents", async function () {
    try {
       const data = await client.DeleteBashEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineEffectHostList", async function () {
    try {
       const data = await client.DescribeBaselineEffectHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMaliciousRequests", async function () {
    try {
       const data = await client.DeleteMaliciousRequests({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeIndexList", async function () {
    try {
       const data = await client.DescribeIndexList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBaselineList", async function () {
    try {
       const data = await client.ExportBaselineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeProVersionInfo", async function () {
    try {
       const data = await client.DescribeProVersionInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeProtectNetList", async function () {
    try {
       const data = await client.DescribeProtectNetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeReverseShellRules", async function () {
    try {
       const data = await client.DescribeReverseShellRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportTasks", async function () {
    try {
       const data = await client.ExportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportIgnoreRuleEffectHostList", async function () {
    try {
       const data = await client.ExportIgnoreRuleEffectHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.RecoverMalwares", async function () {
    try {
       const data = await client.RecoverMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteReverseShellRules", async function () {
    try {
       const data = await client.DeleteReverseShellRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeHistoryService", async function () {
    try {
       const data = await client.DescribeHistoryService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebAppList", async function () {
    try {
       const data = await client.DescribeAssetWebAppList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulCountByDates", async function () {
    try {
       const data = await client.DescribeVulCountByDates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeProtectDirRelatedServer", async function () {
    try {
       const data = await client.DescribeProtectDirRelatedServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteProtectDir", async function () {
    try {
       const data = await client.DeleteProtectDir({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteBruteAttacks", async function () {
    try {
       const data = await client.DeleteBruteAttacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBashEvents", async function () {
    try {
       const data = await client.ExportBashEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeIgnoreRuleEffectHostList", async function () {
    try {
       const data = await client.DescribeIgnoreRuleEffectHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportVulEffectHostList", async function () {
    try {
       const data = await client.ExportVulEffectHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetAppList", async function () {
    try {
       const data = await client.DescribeAssetAppList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWebPageGeneralize", async function () {
    try {
       const data = await client.DescribeWebPageGeneralize({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportVulDetectionExcel", async function () {
    try {
       const data = await client.ExportVulDetectionExcel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetCoreModuleList", async function () {
    try {
       const data = await client.ExportAssetCoreModuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SyncAssetScan", async function () {
    try {
       const data = await client.SyncAssetScan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeESAggregations", async function () {
    try {
       const data = await client.DescribeESAggregations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateSearchLog", async function () {
    try {
       const data = await client.CreateSearchLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeEmergencyVulList", async function () {
    try {
       const data = await client.DescribeEmergencyVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.StopNoticeBanTips", async function () {
    try {
       const data = await client.StopNoticeBanTips({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.IgnoreImpactedHosts", async function () {
    try {
       const data = await client.IgnoreImpactedHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineScanSchedule", async function () {
    try {
       const data = await client.DescribeBaselineScanSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportIgnoreBaselineRule", async function () {
    try {
       const data = await client.ExportIgnoreBaselineRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMalwareRiskWarning", async function () {
    try {
       const data = await client.DescribeMalwareRiskWarning({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribePrivilegeRules", async function () {
    try {
       const data = await client.DescribePrivilegeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetJarList", async function () {
    try {
       const data = await client.DescribeAssetJarList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteNonlocalLoginPlaces", async function () {
    try {
       const data = await client.DeleteNonlocalLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebServiceProcessList", async function () {
    try {
       const data = await client.DescribeAssetWebServiceProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBanStatus", async function () {
    try {
       const data = await client.ModifyBanStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportMaliciousRequests", async function () {
    try {
       const data = await client.ExportMaliciousRequests({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeUsualLoginPlaces", async function () {
    try {
       const data = await client.DescribeUsualLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeTagMachines", async function () {
    try {
       const data = await client.DescribeTagMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.UpdateMachineTags", async function () {
    try {
       const data = await client.UpdateMachineTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ScanVul", async function () {
    try {
       const data = await client.ScanVul({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportPrivilegeEvents", async function () {
    try {
       const data = await client.ExportPrivilegeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportProtectDirList", async function () {
    try {
       const data = await client.ExportProtectDirList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeOverviewStatistics", async function () {
    try {
       const data = await client.DescribeOverviewStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAvailableExpertServiceDetail", async function () {
    try {
       const data = await client.DescribeAvailableExpertServiceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeServersAndRiskAndFirstInfo", async function () {
    try {
       const data = await client.DescribeServersAndRiskAndFirstInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateSearchTemplate", async function () {
    try {
       const data = await client.CreateSearchTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ScanAsset", async function () {
    try {
       const data = await client.ScanAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSecurityDynamics", async function () {
    try {
       const data = await client.DescribeSecurityDynamics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSecurityEventStat", async function () {
    try {
       const data = await client.DescribeSecurityEventStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteReverseShellEvents", async function () {
    try {
       const data = await client.DeleteReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetUserInfo", async function () {
    try {
       const data = await client.DescribeAssetUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CancelIgnoreVul", async function () {
    try {
       const data = await client.CancelIgnoreVul({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeletePrivilegeRules", async function () {
    try {
       const data = await client.DeletePrivilegeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportScanTaskDetails", async function () {
    try {
       const data = await client.ExportScanTaskDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulLevelCount", async function () {
    try {
       const data = await client.DescribeVulLevelCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMalwares", async function () {
    try {
       const data = await client.DeleteMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineList", async function () {
    try {
       const data = await client.DescribeMachineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWebPageProtectSetting", async function () {
    try {
       const data = await client.ModifyWebPageProtectSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeHostLoginList", async function () {
    try {
       const data = await client.DescribeHostLoginList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteLoginWhiteList", async function () {
    try {
       const data = await client.DeleteLoginWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWarningList", async function () {
    try {
       const data = await client.DescribeWarningList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.UpdateBaselineStrategy", async function () {
    try {
       const data = await client.UpdateBaselineStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ScanVulSetting", async function () {
    try {
       const data = await client.ScanVulSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAccountStatistics", async function () {
    try {
       const data = await client.DescribeAccountStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeExportMachines", async function () {
    try {
       const data = await client.DescribeExportMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineRegions", async function () {
    try {
       const data = await client.DescribeMachineRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetMachineDetail", async function () {
    try {
       const data = await client.DescribeAssetMachineDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportSecurityTrends", async function () {
    try {
       const data = await client.ExportSecurityTrends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetCoreModuleList", async function () {
    try {
       const data = await client.DescribeAssetCoreModuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeOpenPortStatistics", async function () {
    try {
       const data = await client.DescribeOpenPortStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSaveOrUpdateWarnings", async function () {
    try {
       const data = await client.DescribeSaveOrUpdateWarnings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBruteAttacks", async function () {
    try {
       const data = await client.ExportBruteAttacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBanMode", async function () {
    try {
       const data = await client.ModifyBanMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWebPageProtectDir", async function () {
    try {
       const data = await client.ModifyWebPageProtectDir({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMaliciousRequestWhiteList", async function () {
    try {
       const data = await client.DescribeMaliciousRequestWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetUserList", async function () {
    try {
       const data = await client.DescribeAssetUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineStrategyDetail", async function () {
    try {
       const data = await client.DescribeBaselineStrategyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebLocationInfo", async function () {
    try {
       const data = await client.DescribeAssetWebLocationInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeProtectDirList", async function () {
    try {
       const data = await client.DescribeProtectDirList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportMalwares", async function () {
    try {
       const data = await client.ExportMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetJarInfo", async function () {
    try {
       const data = await client.DescribeAssetJarInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportWebPageEventList", async function () {
    try {
       const data = await client.ExportWebPageEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBruteAttackList", async function () {
    try {
       const data = await client.DescribeBruteAttackList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetDatabaseList", async function () {
    try {
       const data = await client.DescribeAssetDatabaseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulEffectHostList", async function () {
    try {
       const data = await client.DescribeVulEffectHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScanTaskStatus", async function () {
    try {
       const data = await client.DescribeScanTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSearchTemplates", async function () {
    try {
       const data = await client.DescribeSearchTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeEmergencyResponseList", async function () {
    try {
       const data = await client.DescribeEmergencyResponseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetWebServiceInfoList", async function () {
    try {
       const data = await client.ExportAssetWebServiceInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ScanVulAgain", async function () {
    try {
       const data = await client.ScanVulAgain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineStrategyList", async function () {
    try {
       const data = await client.DescribeBaselineStrategyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SeparateMalwares", async function () {
    try {
       const data = await client.SeparateMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScanMalwareSchedule", async function () {
    try {
       const data = await client.DescribeScanMalwareSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineRule", async function () {
    try {
       const data = await client.DescribeBaselineRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBaselineEffectHostList", async function () {
    try {
       const data = await client.ExportBaselineEffectHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportNonlocalLoginPlaces", async function () {
    try {
       const data = await client.ExportNonlocalLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetMachineList", async function () {
    try {
       const data = await client.DescribeAssetMachineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBanStatus", async function () {
    try {
       const data = await client.DescribeBanStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLoginWhiteCombinedList", async function () {
    try {
       const data = await client.DescribeLoginWhiteCombinedList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeProcessStatistics", async function () {
    try {
       const data = await client.DescribeProcessStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMalwareInfo", async function () {
    try {
       const data = await client.DescribeMalwareInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebLocationList", async function () {
    try {
       const data = await client.DescribeAssetWebLocationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineTop", async function () {
    try {
       const data = await client.DescribeBaselineTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteBashRules", async function () {
    try {
       const data = await client.DeleteBashRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetProcessInfoList", async function () {
    try {
       const data = await client.DescribeAssetProcessInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeReverseShellEvents", async function () {
    try {
       const data = await client.DescribeReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBruteAttackRules", async function () {
    try {
       const data = await client.ModifyBruteAttackRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyAutoOpenProVersionConfig", async function () {
    try {
       const data = await client.ModifyAutoOpenProVersionConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMalwareTimingScanSetting", async function () {
    try {
       const data = await client.DescribeMalwareTimingScanSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetRecentMachineInfo", async function () {
    try {
       const data = await client.DescribeAssetRecentMachineInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMalwareScanTask", async function () {
    try {
       const data = await client.DeleteMalwareScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulTop", async function () {
    try {
       const data = await client.DescribeVulTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWarningSetting", async function () {
    try {
       const data = await client.ModifyWarningSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulHostCountScanTime", async function () {
    try {
       const data = await client.DescribeVulHostCountScanTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBruteAttackRules", async function () {
    try {
       const data = await client.DescribeBruteAttackRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetEnvList", async function () {
    try {
       const data = await client.DescribeAssetEnvList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeESHits", async function () {
    try {
       const data = await client.DescribeESHits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateEmergencyVulScan", async function () {
    try {
       const data = await client.CreateEmergencyVulScan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSecurityEventsCnt", async function () {
    try {
       const data = await client.DescribeSecurityEventsCnt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribePrivilegeEvents", async function () {
    try {
       const data = await client.DescribePrivilegeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineInfo", async function () {
    try {
       const data = await client.DescribeMachineInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBanWhiteList", async function () {
    try {
       const data = await client.DescribeBanWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogStorageStatistic", async function () {
    try {
       const data = await client.DescribeLogStorageStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAttackVulTypeList", async function () {
    try {
       const data = await client.DescribeAttackVulTypeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLoginWhiteList", async function () {
    try {
       const data = await client.DescribeLoginWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeIgnoreBaselineRule", async function () {
    try {
       const data = await client.DescribeIgnoreBaselineRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineDetail", async function () {
    try {
       const data = await client.DescribeBaselineDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRiskDnsList", async function () {
    try {
       const data = await client.DescribeRiskDnsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWebPageProtectStat", async function () {
    try {
       const data = await client.DescribeWebPageProtectStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeHistoryAccounts", async function () {
    try {
       const data = await client.DescribeHistoryAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateProtectServer", async function () {
    try {
       const data = await client.CreateProtectServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScanState", async function () {
    try {
       const data = await client.DescribeScanState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteBaselineStrategy", async function () {
    try {
       const data = await client.DeleteBaselineStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulHostTop", async function () {
    try {
       const data = await client.DescribeVulHostTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.UntrustMalwares", async function () {
    try {
       const data = await client.UntrustMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebFrameList", async function () {
    try {
       const data = await client.DescribeAssetWebFrameList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBanRegions", async function () {
    try {
       const data = await client.DescribeBanRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineOsList", async function () {
    try {
       const data = await client.DescribeMachineOsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulInfoCvss", async function () {
    try {
       const data = await client.DescribeVulInfoCvss({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMalWareList", async function () {
    try {
       const data = await client.DescribeMalWareList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateScanMalwareSetting", async function () {
    try {
       const data = await client.CreateScanMalwareSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyMalwareTimingScanSettings", async function () {
    try {
       const data = await client.ModifyMalwareTimingScanSettings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulList", async function () {
    try {
       const data = await client.DescribeVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetCoreModuleInfo", async function () {
    try {
       const data = await client.DescribeAssetCoreModuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeGeneralStat", async function () {
    try {
       const data = await client.DescribeGeneralStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetAppProcessList", async function () {
    try {
       const data = await client.DescribeAssetAppProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetDatabaseInfo", async function () {
    try {
       const data = await client.DescribeAssetDatabaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SetBashEventsStatus", async function () {
    try {
       const data = await client.SetBashEventsStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportReverseShellEvents", async function () {
    try {
       const data = await client.ExportReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteAttackLogs", async function () {
    try {
       const data = await client.DeleteAttackLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScanVulSetting", async function () {
    try {
       const data = await client.DescribeScanVulSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetInitServiceList", async function () {
    try {
       const data = await client.DescribeAssetInitServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMachine", async function () {
    try {
       const data = await client.DeleteMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeExpertServiceOrderList", async function () {
    try {
       const data = await client.DescribeExpertServiceOrderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeStrategyExist", async function () {
    try {
       const data = await client.DescribeStrategyExist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWebPageServiceInfo", async function () {
    try {
       const data = await client.DescribeWebPageServiceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SwitchBashRules", async function () {
    try {
       const data = await client.SwitchBashRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeTags", async function () {
    try {
       const data = await client.DescribeTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineBasicInfo", async function () {
    try {
       const data = await client.DescribeBaselineBasicInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSecurityTrends", async function () {
    try {
       const data = await client.DescribeSecurityTrends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineAnalysisData", async function () {
    try {
       const data = await client.DescribeBaselineAnalysisData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAttackLogInfo", async function () {
    try {
       const data = await client.DescribeAttackLogInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWebPageProtectSwitch", async function () {
    try {
       const data = await client.ModifyWebPageProtectSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.EditBashRules", async function () {
    try {
       const data = await client.EditBashRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMonthInspectionReport", async function () {
    try {
       const data = await client.DescribeMonthInspectionReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetInfo", async function () {
    try {
       const data = await client.DescribeAssetInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteWebPageEventLog", async function () {
    try {
       const data = await client.DeleteWebPageEventLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVersionStatistics", async function () {
    try {
       const data = await client.DescribeVersionStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportVulList", async function () {
    try {
       const data = await client.ExportVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeProVersionStatus", async function () {
    try {
       const data = await client.DescribeProVersionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBashEvents", async function () {
    try {
       const data = await client.DescribeBashEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachines", async function () {
    try {
       const data = await client.DescribeMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebServiceInfoList", async function () {
    try {
       const data = await client.DescribeAssetWebServiceInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportVulDetectionReport", async function () {
    try {
       const data = await client.ExportVulDetectionReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWebPageEventList", async function () {
    try {
       const data = await client.DescribeWebPageEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMalwareFile", async function () {
    try {
       const data = await client.DescribeMalwareFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeUndoVulCounts", async function () {
    try {
       const data = await client.DescribeUndoVulCounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
