
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

it("cwp.v20180228.TrustMalwares", async function () {
    try {
       const data = await client.TrustMalwares({})
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

it("cwp.v20180228.DeleteSearchTemplate", async function () {
    try {
       const data = await client.DeleteSearchTemplate({})
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

it("cwp.v20180228.RenewProVersion", async function () {
    try {
       const data = await client.RenewProVersion({})
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

it("cwp.v20180228.DescribeUsualLoginPlaces", async function () {
    try {
       const data = await client.DescribeUsualLoginPlaces({})
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

it("cwp.v20180228.IgnoreImpactedHosts", async function () {
    try {
       const data = await client.IgnoreImpactedHosts({})
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

it("cwp.v20180228.DeleteNonlocalLoginPlaces", async function () {
    try {
       const data = await client.DeleteNonlocalLoginPlaces({})
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

it("cwp.v20180228.DescribeTagMachines", async function () {
    try {
       const data = await client.DescribeTagMachines({})
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

it("cwp.v20180228.DescribeOverviewStatistics", async function () {
    try {
       const data = await client.DescribeOverviewStatistics({})
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

it("cwp.v20180228.DeleteReverseShellEvents", async function () {
    try {
       const data = await client.DeleteReverseShellEvents({})
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

it("cwp.v20180228.DescribeScanMalwareSchedule", async function () {
    try {
       const data = await client.DescribeScanMalwareSchedule({})
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

it("cwp.v20180228.CloseProVersion", async function () {
    try {
       const data = await client.CloseProVersion({})
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

it("cwp.v20180228.DescribeOpenPortStatistics", async function () {
    try {
       const data = await client.DescribeOpenPortStatistics({})
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

it("cwp.v20180228.SwitchBashRules", async function () {
    try {
       const data = await client.SwitchBashRules({})
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

it("cwp.v20180228.DescribeBruteAttackList", async function () {
    try {
       const data = await client.DescribeBruteAttackList({})
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

it("cwp.v20180228.OpenProVersionPrepaid", async function () {
    try {
       const data = await client.OpenProVersionPrepaid({})
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

it("cwp.v20180228.EditTags", async function () {
    try {
       const data = await client.EditTags({})
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

it("cwp.v20180228.DeleteBashRules", async function () {
    try {
       const data = await client.DeleteBashRules({})
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

it("cwp.v20180228.DescribeReverseShellEvents", async function () {
    try {
       const data = await client.DescribeReverseShellEvents({})
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

it("cwp.v20180228.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
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

it("cwp.v20180228.DescribeESHits", async function () {
    try {
       const data = await client.DescribeESHits({})
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

it("cwp.v20180228.UpdateBaselineStrategy", async function () {
    try {
       const data = await client.UpdateBaselineStrategy({})
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

it("cwp.v20180228.ExportNonlocalLoginPlaces", async function () {
    try {
       const data = await client.ExportNonlocalLoginPlaces({})
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

it("cwp.v20180228.OpenProVersion", async function () {
    try {
       const data = await client.OpenProVersion({})
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

it("cwp.v20180228.ModifyMalwareTimingScanSettings", async function () {
    try {
       const data = await client.ModifyMalwareTimingScanSettings({})
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

it("cwp.v20180228.ModifyProVersionRenewFlag", async function () {
    try {
       const data = await client.ModifyProVersionRenewFlag({})
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

it("cwp.v20180228.DeleteMachine", async function () {
    try {
       const data = await client.DeleteMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.RescanImpactedHost", async function () {
    try {
       const data = await client.RescanImpactedHost({})
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

it("cwp.v20180228.DescribeSecurityTrends", async function () {
    try {
       const data = await client.DescribeSecurityTrends({})
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

it("cwp.v20180228.ExportVulDetectionExcel", async function () {
    try {
       const data = await client.ExportVulDetectionExcel({})
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

it("cwp.v20180228.ExportVulDetectionReport", async function () {
    try {
       const data = await client.ExportVulDetectionReport({})
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

it("cwp.v20180228.InquiryPriceOpenProVersionPrepaid", async function () {
    try {
       const data = await client.InquiryPriceOpenProVersionPrepaid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
