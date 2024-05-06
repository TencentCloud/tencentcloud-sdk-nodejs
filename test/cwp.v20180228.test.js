
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

it("cwp.v20180228.DescribeAESKey", async function () {
    try {
       const data = await client.DescribeAESKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyRansomDefenseStrategyStatus", async function () {
    try {
       const data = await client.ModifyRansomDefenseStrategyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRansomDefenseStrategyList", async function () {
    try {
       const data = await client.DescribeRansomDefenseStrategyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetJarList", async function () {
    try {
       const data = await client.ExportAssetJarList({})
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

it("cwp.v20180228.StopAssetScan", async function () {
    try {
       const data = await client.StopAssetScan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.KeysLocalStorage", async function () {
    try {
       const data = await client.KeysLocalStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportJavaMemShellPlugins", async function () {
    try {
       const data = await client.ExportJavaMemShellPlugins({})
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

it("cwp.v20180228.ExportVulDefenceList", async function () {
    try {
       const data = await client.ExportVulDefenceList({})
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

it("cwp.v20180228.CreateBaselineStrategy", async function () {
    try {
       const data = await client.CreateBaselineStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeHostInfo", async function () {
    try {
       const data = await client.DescribeHostInfo({})
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

it("cwp.v20180228.DescribeBaselineRuleList", async function () {
    try {
       const data = await client.DescribeBaselineRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenRiskAssetsTop", async function () {
    try {
       const data = await client.DescribeScreenRiskAssetsTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetAppCount", async function () {
    try {
       const data = await client.DescribeAssetAppCount({})
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

it("cwp.v20180228.DescribeJavaMemShellList", async function () {
    try {
       const data = await client.DescribeJavaMemShellList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineDetectList", async function () {
    try {
       const data = await client.DescribeBaselineDetectList({})
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

it("cwp.v20180228.DeleteBashPolicies", async function () {
    try {
       const data = await client.DeleteBashPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulDefenceOverview", async function () {
    try {
       const data = await client.DescribeVulDefenceOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetUserCount", async function () {
    try {
       const data = await client.DescribeAssetUserCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetMachineDetail", async function () {
    try {
       const data = await client.ExportAssetMachineDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebLocationCount", async function () {
    try {
       const data = await client.DescribeAssetWebLocationCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebLocationPathList", async function () {
    try {
       const data = await client.DescribeAssetWebLocationPathList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenHostInvasion", async function () {
    try {
       const data = await client.DescribeScreenHostInvasion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeFileTamperEventRuleInfo", async function () {
    try {
       const data = await client.DescribeFileTamperEventRuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogIndex", async function () {
    try {
       const data = await client.DescribeLogIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DestroyOrder", async function () {
    try {
       const data = await client.DestroyOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWebHookReceiver", async function () {
    try {
       const data = await client.ModifyWebHookReceiver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenGeneralStat", async function () {
    try {
       const data = await client.DescribeScreenGeneralStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBashEventsInfoNew", async function () {
    try {
       const data = await client.DescribeBashEventsInfoNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBaselineRuleIgnore", async function () {
    try {
       const data = await client.ModifyBaselineRuleIgnore({})
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

it("cwp.v20180228.ExportMaliciousRequests", async function () {
    try {
       const data = await client.ExportMaliciousRequests({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetLoadInfo", async function () {
    try {
       const data = await client.DescribeAssetLoadInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.FixBaselineDetect", async function () {
    try {
       const data = await client.FixBaselineDetect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineRuleDetectList", async function () {
    try {
       const data = await client.DescribeBaselineRuleDetectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteLicenseRecordAll", async function () {
    try {
       const data = await client.DeleteLicenseRecordAll({})
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

it("cwp.v20180228.ExportBaselineItemDetectList", async function () {
    try {
       const data = await client.ExportBaselineItemDetectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLoginWhiteRecord", async function () {
    try {
       const data = await client.ModifyLoginWhiteRecord({})
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

it("cwp.v20180228.DescribeNetAttackSetting", async function () {
    try {
       const data = await client.DescribeNetAttackSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetWebFrameList", async function () {
    try {
       const data = await client.ExportAssetWebFrameList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CheckFileTamperRule", async function () {
    try {
       const data = await client.CheckFileTamperRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeNetAttackWhiteList", async function () {
    try {
       const data = await client.DescribeNetAttackWhiteList({})
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

it("cwp.v20180228.ModifyBashPolicyStatus", async function () {
    try {
       const data = await client.ModifyBashPolicyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteRiskDnsEvent", async function () {
    try {
       const data = await client.DeleteRiskDnsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SetLocalStorageItem", async function () {
    try {
       const data = await client.SetLocalStorageItem({})
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

it("cwp.v20180228.DeleteLogExport", async function () {
    try {
       const data = await client.DeleteLogExport({})
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

it("cwp.v20180228.ClearLocalStorage", async function () {
    try {
       const data = await client.ClearLocalStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebFrameCount", async function () {
    try {
       const data = await client.DescribeAssetWebFrameCount({})
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

it("cwp.v20180228.DescribeLicense", async function () {
    try {
       const data = await client.DescribeLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBashPolicies", async function () {
    try {
       const data = await client.ExportBashPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineLicenseDetail", async function () {
    try {
       const data = await client.DescribeMachineLicenseDetail({})
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

it("cwp.v20180228.DescribeAssetUserList", async function () {
    try {
       const data = await client.DescribeAssetUserList({})
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

it("cwp.v20180228.DescribeJavaMemShellPluginInfo", async function () {
    try {
       const data = await client.DescribeJavaMemShellPluginInfo({})
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

it("cwp.v20180228.CheckFirstScanBaseline", async function () {
    try {
       const data = await client.CheckFirstScanBaseline({})
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

it("cwp.v20180228.ExportAssetWebServiceInfoList", async function () {
    try {
       const data = await client.ExportAssetWebServiceInfoList({})
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

it("cwp.v20180228.DeleteNetAttackWhiteList", async function () {
    try {
       const data = await client.DeleteNetAttackWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogExports", async function () {
    try {
       const data = await client.DescribeLogExports({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenMachines", async function () {
    try {
       const data = await client.DescribeScreenMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenProtectionStat", async function () {
    try {
       const data = await client.DescribeScreenProtectionStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBashEventsNew", async function () {
    try {
       const data = await client.DescribeBashEventsNew({})
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

it("cwp.v20180228.RemoveMachine", async function () {
    try {
       const data = await client.RemoveMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetHostTotalCount", async function () {
    try {
       const data = await client.DescribeAssetHostTotalCount({})
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

it("cwp.v20180228.DescribeRiskDnsEventInfo", async function () {
    try {
       const data = await client.DescribeRiskDnsEventInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBashEventsNew", async function () {
    try {
       const data = await client.ExportBashEventsNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRiskBatchStatus", async function () {
    try {
       const data = await client.DescribeRiskBatchStatus({})
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

it("cwp.v20180228.DescribeWebHookReceiver", async function () {
    try {
       const data = await client.DescribeWebHookReceiver({})
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

it("cwp.v20180228.SetLocalStorageExpire", async function () {
    try {
       const data = await client.SetLocalStorageExpire({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeCanFixVulMachine", async function () {
    try {
       const data = await client.DescribeCanFixVulMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBaselinePolicyState", async function () {
    try {
       const data = await client.ModifyBaselinePolicyState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.TestWebHookRule", async function () {
    try {
       const data = await client.TestWebHookRule({})
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

it("cwp.v20180228.DescribeFileTamperRules", async function () {
    try {
       const data = await client.DescribeFileTamperRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineDefenseCnt", async function () {
    try {
       const data = await client.DescribeMachineDefenseCnt({})
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

it("cwp.v20180228.ModifyNetAttackSetting", async function () {
    try {
       const data = await client.ModifyNetAttackSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteBanWhiteList", async function () {
    try {
       const data = await client.DeleteBanWhiteList({})
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

it("cwp.v20180228.DescribeAssetTypeTop", async function () {
    try {
       const data = await client.DescribeAssetTypeTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportRansomDefenseStrategyMachines", async function () {
    try {
       const data = await client.ExportRansomDefenseStrategyMachines({})
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

it("cwp.v20180228.DescribeIgnoreHostAndItemConfig", async function () {
    try {
       const data = await client.DescribeIgnoreHostAndItemConfig({})
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

it("cwp.v20180228.DescribeLogDeliveryKafkaOptions", async function () {
    try {
       const data = await client.DescribeLogDeliveryKafkaOptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineRiskCnt", async function () {
    try {
       const data = await client.DescribeMachineRiskCnt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenBroadcasts", async function () {
    try {
       const data = await client.DescribeScreenBroadcasts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateWhiteListOrder", async function () {
    try {
       const data = await client.CreateWhiteListOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLicenseUnBinds", async function () {
    try {
       const data = await client.ModifyLicenseUnBinds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVersionCompareChart", async function () {
    try {
       const data = await client.DescribeVersionCompareChart({})
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

it("cwp.v20180228.DescribeRansomDefenseTrend", async function () {
    try {
       const data = await client.DescribeRansomDefenseTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetWebAppList", async function () {
    try {
       const data = await client.ExportAssetWebAppList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLicenseBindList", async function () {
    try {
       const data = await client.DescribeLicenseBindList({})
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

it("cwp.v20180228.ModifyJavaMemShellPluginSwitch", async function () {
    try {
       const data = await client.ModifyJavaMemShellPluginSwitch({})
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

it("cwp.v20180228.DescribeMalwareWhiteList", async function () {
    try {
       const data = await client.DescribeMalwareWhiteList({})
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

it("cwp.v20180228.CreateMalwareWhiteList", async function () {
    try {
       const data = await client.CreateMalwareWhiteList({})
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

it("cwp.v20180228.ModifyFileTamperEvents", async function () {
    try {
       const data = await client.ModifyFileTamperEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSecurityBroadcastInfo", async function () {
    try {
       const data = await client.DescribeSecurityBroadcastInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ScanTaskAgain", async function () {
    try {
       const data = await client.ScanTaskAgain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulOverview", async function () {
    try {
       const data = await client.DescribeVulOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogType", async function () {
    try {
       const data = await client.DescribeLogType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAttackEventInfo", async function () {
    try {
       const data = await client.DescribeAttackEventInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenAttackHotspot", async function () {
    try {
       const data = await client.DescribeScreenAttackHotspot({})
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

it("cwp.v20180228.ExportBaselineFixList", async function () {
    try {
       const data = await client.ExportBaselineFixList({})
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

it("cwp.v20180228.DescribeMachines", async function () {
    try {
       const data = await client.DescribeMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineHostDetectList", async function () {
    try {
       const data = await client.DescribeBaselineHostDetectList({})
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

it("cwp.v20180228.DescribeAssetProcessCount", async function () {
    try {
       const data = await client.DescribeAssetProcessCount({})
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

it("cwp.v20180228.DescribeVulTrend", async function () {
    try {
       const data = await client.DescribeVulTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVertexDetail", async function () {
    try {
       const data = await client.DescribeVertexDetail({})
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

it("cwp.v20180228.ModifyWebHookPolicyStatus", async function () {
    try {
       const data = await client.ModifyWebHookPolicyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBaselineItemList", async function () {
    try {
       const data = await client.ExportBaselineItemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineItemRiskTop", async function () {
    try {
       const data = await client.DescribeBaselineItemRiskTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetAppList", async function () {
    try {
       const data = await client.ExportAssetAppList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportBaselineWeakPasswordList", async function () {
    try {
       const data = await client.ExportBaselineWeakPasswordList({})
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

it("cwp.v20180228.RemoveLocalStorageItem", async function () {
    try {
       const data = await client.RemoveLocalStorageItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetPortInfoList", async function () {
    try {
       const data = await client.ExportAssetPortInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetMachineList", async function () {
    try {
       const data = await client.ExportAssetMachineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogStorageRecord", async function () {
    try {
       const data = await client.DescribeLogStorageRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CheckBashPolicyParams", async function () {
    try {
       const data = await client.CheckBashPolicyParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyEventAttackStatus", async function () {
    try {
       const data = await client.ModifyEventAttackStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateIncidentBacktracking", async function () {
    try {
       const data = await client.CreateIncidentBacktracking({})
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

it("cwp.v20180228.DescribeVersionStatistics", async function () {
    try {
       const data = await client.DescribeVersionStatistics({})
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

it("cwp.v20180228.DescribeAssetWebAppList", async function () {
    try {
       const data = await client.DescribeAssetWebAppList({})
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

it("cwp.v20180228.ExportBaselineHostDetectList", async function () {
    try {
       const data = await client.ExportBaselineHostDetectList({})
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

it("cwp.v20180228.DeleteWebHookReceiver", async function () {
    try {
       const data = await client.DeleteWebHookReceiver({})
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

it("cwp.v20180228.DescribeMachineGeneral", async function () {
    try {
       const data = await client.DescribeMachineGeneral({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRiskDnsPolicyList", async function () {
    try {
       const data = await client.DescribeRiskDnsPolicyList({})
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

it("cwp.v20180228.DescribeJavaMemShellInfo", async function () {
    try {
       const data = await client.DescribeJavaMemShellInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineDownloadList", async function () {
    try {
       const data = await client.DescribeBaselineDownloadList({})
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

it("cwp.v20180228.ModifyLogKafkaAccess", async function () {
    try {
       const data = await client.ModifyLogKafkaAccess({})
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

it("cwp.v20180228.DescribeDefenceEventDetail", async function () {
    try {
       const data = await client.DescribeDefenceEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMalwareRiskOverview", async function () {
    try {
       const data = await client.DescribeMalwareRiskOverview({})
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

it("cwp.v20180228.DescribeMachineClearHistory", async function () {
    try {
       const data = await client.DescribeMachineClearHistory({})
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

it("cwp.v20180228.DescribeAgentInstallCommand", async function () {
    try {
       const data = await client.DescribeAgentInstallCommand({})
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

it("cwp.v20180228.DeleteReverseShellEvents", async function () {
    try {
       const data = await client.DeleteReverseShellEvents({})
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

it("cwp.v20180228.DescribeMachineRegionList", async function () {
    try {
       const data = await client.DescribeMachineRegionList({})
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

it("cwp.v20180228.ExportAssetInitServiceList", async function () {
    try {
       const data = await client.ExportAssetInitServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLoginWhiteInfo", async function () {
    try {
       const data = await client.ModifyLoginWhiteInfo({})
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

it("cwp.v20180228.DescribeWarningList", async function () {
    try {
       const data = await client.DescribeWarningList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineRuleIgnoreList", async function () {
    try {
       const data = await client.DescribeBaselineRuleIgnoreList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyMachineRemark", async function () {
    try {
       const data = await client.ModifyMachineRemark({})
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

it("cwp.v20180228.DescribeMachineRegions", async function () {
    try {
       const data = await client.DescribeMachineRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulDefenceSetting", async function () {
    try {
       const data = await client.DescribeVulDefenceSetting({})
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

it("cwp.v20180228.ExportBaselineRuleDetectList", async function () {
    try {
       const data = await client.ExportBaselineRuleDetectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogStorageConfig", async function () {
    try {
       const data = await client.DescribeLogStorageConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMachineClearHistory", async function () {
    try {
       const data = await client.DeleteMachineClearHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineSnapshot", async function () {
    try {
       const data = await client.DescribeMachineSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLicenseWhiteConfig", async function () {
    try {
       const data = await client.DescribeLicenseWhiteConfig({})
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

it("cwp.v20180228.DescribeAttackTop", async function () {
    try {
       const data = await client.DescribeAttackTop({})
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

it("cwp.v20180228.ModifyBaselinePolicy", async function () {
    try {
       const data = await client.ModifyBaselinePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAttackSourceEvents", async function () {
    try {
       const data = await client.DescribeAttackSourceEvents({})
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

it("cwp.v20180228.DeleteBaselinePolicy", async function () {
    try {
       const data = await client.DeleteBaselinePolicy({})
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

it("cwp.v20180228.CreateLicenseOrder", async function () {
    try {
       const data = await client.CreateLicenseOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenMachineRegions", async function () {
    try {
       const data = await client.DescribeScreenMachineRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineHostIgnoreList", async function () {
    try {
       const data = await client.DescribeBaselineHostIgnoreList({})
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

it("cwp.v20180228.CreateLogExport", async function () {
    try {
       const data = await client.CreateLogExport({})
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

it("cwp.v20180228.ExportNonlocalLoginPlaces", async function () {
    try {
       const data = await client.ExportNonlocalLoginPlaces({})
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

it("cwp.v20180228.DescribeAssetAppProcessList", async function () {
    try {
       const data = await client.DescribeAssetAppProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SyncMachines", async function () {
    try {
       const data = await client.SyncMachines({})
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

it("cwp.v20180228.DescribeMalwareTimingScanSetting", async function () {
    try {
       const data = await client.DescribeMalwareTimingScanSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteRiskDnsPolicy", async function () {
    try {
       const data = await client.DeleteRiskDnsPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportVulInfo", async function () {
    try {
       const data = await client.ExportVulInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetDatabaseList", async function () {
    try {
       const data = await client.ExportAssetDatabaseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportFileTamperRules", async function () {
    try {
       const data = await client.ExportFileTamperRules({})
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

it("cwp.v20180228.DescribeScreenProtectionCnt", async function () {
    try {
       const data = await client.DescribeScreenProtectionCnt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBashPolicy", async function () {
    try {
       const data = await client.ModifyBashPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSafeInfo", async function () {
    try {
       const data = await client.DescribeSafeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetWebLocationList", async function () {
    try {
       const data = await client.ExportAssetWebLocationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRansomDefenseBackupList", async function () {
    try {
       const data = await client.DescribeRansomDefenseBackupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineDetectOverview", async function () {
    try {
       const data = await client.DescribeBaselineDetectOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineItemDetectList", async function () {
    try {
       const data = await client.DescribeBaselineItemDetectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachinesSimple", async function () {
    try {
       const data = await client.DescribeMachinesSimple({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRansomDefenseStrategyDetail", async function () {
    try {
       const data = await client.DescribeRansomDefenseStrategyDetail({})
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

it("cwp.v20180228.DescribeBanRegions", async function () {
    try {
       const data = await client.DescribeBanRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMaliciousRequestWhiteList", async function () {
    try {
       const data = await client.DeleteMaliciousRequestWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateBanWhiteList", async function () {
    try {
       const data = await client.CreateBanWhiteList({})
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

it("cwp.v20180228.DescribeUsersConfig", async function () {
    try {
       const data = await client.DescribeUsersConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLogKafkaState", async function () {
    try {
       const data = await client.ModifyLogKafkaState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportJavaMemShells", async function () {
    try {
       const data = await client.ExportJavaMemShells({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineWeakPasswordList", async function () {
    try {
       const data = await client.DescribeBaselineWeakPasswordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRecommendedProtectCpu", async function () {
    try {
       const data = await client.DescribeRecommendedProtectCpu({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineItemInfo", async function () {
    try {
       const data = await client.DescribeBaselineItemInfo({})
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

it("cwp.v20180228.ExportAttackEvents", async function () {
    try {
       const data = await client.ExportAttackEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineFixList", async function () {
    try {
       const data = await client.DescribeBaselineFixList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWarningHostConfig", async function () {
    try {
       const data = await client.DescribeWarningHostConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyMachineAutoClearConfig", async function () {
    try {
       const data = await client.ModifyMachineAutoClearConfig({})
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

it("cwp.v20180228.DescribeWebPageServiceInfo", async function () {
    try {
       const data = await client.DescribeWebPageServiceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulDefenceEvent", async function () {
    try {
       const data = await client.DescribeVulDefenceEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyRiskDnsPolicyStatus", async function () {
    try {
       const data = await client.ModifyRiskDnsPolicyStatus({})
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

it("cwp.v20180228.ModifyWebHookRuleStatus", async function () {
    try {
       const data = await client.ModifyWebHookRuleStatus({})
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

it("cwp.v20180228.DescribeFileTamperRuleInfo", async function () {
    try {
       const data = await client.DescribeFileTamperRuleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ScanBaseline", async function () {
    try {
       const data = await client.ScanBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLogStorageConfig", async function () {
    try {
       const data = await client.ModifyLogStorageConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyFileTamperRule", async function () {
    try {
       const data = await client.ModifyFileTamperRule({})
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

it("cwp.v20180228.DescribeRiskDnsEventList", async function () {
    try {
       const data = await client.DescribeRiskDnsEventList({})
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

it("cwp.v20180228.DescribeWebHookPolicy", async function () {
    try {
       const data = await client.DescribeWebHookPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyRansomDefenseEventsStatus", async function () {
    try {
       const data = await client.ModifyRansomDefenseEventsStatus({})
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

it("cwp.v20180228.DescribeAttackEvents", async function () {
    try {
       const data = await client.DescribeAttackEvents({})
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

it("cwp.v20180228.DescribeLoginWhiteHostList", async function () {
    try {
       const data = await client.DescribeLoginWhiteHostList({})
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

it("cwp.v20180228.DescribeBaselineTop", async function () {
    try {
       const data = await client.DescribeBaselineTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeFastAnalysis", async function () {
    try {
       const data = await client.DescribeFastAnalysis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeTrialReport", async function () {
    try {
       const data = await client.DescribeTrialReport({})
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

it("cwp.v20180228.ExportFileTamperEvents", async function () {
    try {
       const data = await client.ExportFileTamperEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.AddLoginWhiteLists", async function () {
    try {
       const data = await client.AddLoginWhiteLists({})
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

it("cwp.v20180228.ExportProtectDirList", async function () {
    try {
       const data = await client.ExportProtectDirList({})
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

it("cwp.v20180228.DescribeRiskDnsInfo", async function () {
    try {
       const data = await client.DescribeRiskDnsInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportRansomDefenseEventsList", async function () {
    try {
       const data = await client.ExportRansomDefenseEventsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWebHookRule", async function () {
    try {
       const data = await client.ModifyWebHookRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulDefencePluginExceptionCount", async function () {
    try {
       const data = await client.DescribeVulDefencePluginExceptionCount({})
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

it("cwp.v20180228.DescribeAssetAppList", async function () {
    try {
       const data = await client.DescribeAssetAppList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAttackSource", async function () {
    try {
       const data = await client.DescribeAttackSource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogKafkaDeliverInfo", async function () {
    try {
       const data = await client.DescribeLogKafkaDeliverInfo({})
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

it("cwp.v20180228.DeleteWebHookRule", async function () {
    try {
       const data = await client.DeleteWebHookRule({})
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

it("cwp.v20180228.ExportIgnoreBaselineRule", async function () {
    try {
       const data = await client.ExportIgnoreBaselineRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribePrivilegeEventInfo", async function () {
    try {
       const data = await client.DescribePrivilegeEventInfo({})
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

it("cwp.v20180228.DescribeBaselineDefaultStrategyList", async function () {
    try {
       const data = await client.DescribeBaselineDefaultStrategyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateVulFix", async function () {
    try {
       const data = await client.CreateVulFix({})
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

it("cwp.v20180228.EditPrivilegeRules", async function () {
    try {
       const data = await client.EditPrivilegeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRiskProcessEvents", async function () {
    try {
       const data = await client.DescribeRiskProcessEvents({})
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

it("cwp.v20180228.DescribeEventByTable", async function () {
    try {
       const data = await client.DescribeEventByTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteLicenseRecord", async function () {
    try {
       const data = await client.DeleteLicenseRecord({})
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

it("cwp.v20180228.DescribeAssetDatabaseCount", async function () {
    try {
       const data = await client.DescribeAssetDatabaseCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLogHistogram", async function () {
    try {
       const data = await client.DescribeLogHistogram({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeMachineFileTamperRules", async function () {
    try {
       const data = await client.DescribeMachineFileTamperRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLicenseOrder", async function () {
    try {
       const data = await client.ModifyLicenseOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribePublicProxyInstallCommand", async function () {
    try {
       const data = await client.DescribePublicProxyInstallCommand({})
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

it("cwp.v20180228.ExportAssetUserList", async function () {
    try {
       const data = await client.ExportAssetUserList({})
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

it("cwp.v20180228.DescribeHostLoginList", async function () {
    try {
       const data = await client.DescribeHostLoginList({})
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

it("cwp.v20180228.CancelIgnoreVul", async function () {
    try {
       const data = await client.CancelIgnoreVul({})
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

it("cwp.v20180228.DescribeOpenPortStatistics", async function () {
    try {
       const data = await client.DescribeOpenPortStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeSecurityProtectionStat", async function () {
    try {
       const data = await client.DescribeSecurityProtectionStat({})
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

it("cwp.v20180228.DescribeDirectConnectInstallCommand", async function () {
    try {
       const data = await client.DescribeDirectConnectInstallCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWebHookRules", async function () {
    try {
       const data = await client.DescribeWebHookRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselinePolicyList", async function () {
    try {
       const data = await client.DescribeBaselinePolicyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebAppCount", async function () {
    try {
       const data = await client.DescribeAssetWebAppCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLogKafkaDeliverType", async function () {
    try {
       const data = await client.ModifyLogKafkaDeliverType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBashEventsInfo", async function () {
    try {
       const data = await client.DescribeBashEventsInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAlarmVertexId", async function () {
    try {
       const data = await client.DescribeAlarmVertexId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulCveIdInfo", async function () {
    try {
       const data = await client.DescribeVulCveIdInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportRansomDefenseBackupList", async function () {
    try {
       const data = await client.ExportRansomDefenseBackupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAttackStatistics", async function () {
    try {
       const data = await client.DescribeAttackStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetUserKeyList", async function () {
    try {
       const data = await client.DescribeAssetUserKeyList({})
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

it("cwp.v20180228.ModifyMalwareWhiteList", async function () {
    try {
       const data = await client.ModifyMalwareWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWebHookRule", async function () {
    try {
       const data = await client.DescribeWebHookRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.RetryVulFix", async function () {
    try {
       const data = await client.RetryVulFix({})
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

it("cwp.v20180228.RetryCreateSnapshot", async function () {
    try {
       const data = await client.RetryCreateSnapshot({})
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

it("cwp.v20180228.DescribeVulEffectModules", async function () {
    try {
       const data = await client.DescribeVulEffectModules({})
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

it("cwp.v20180228.DescribeSecurityEventsCnt", async function () {
    try {
       const data = await client.DescribeSecurityEventsCnt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteMalwareWhiteList", async function () {
    try {
       const data = await client.DeleteMalwareWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SyncBaselineDetectSummary", async function () {
    try {
       const data = await client.SyncBaselineDetectSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLicenseBindSchedule", async function () {
    try {
       const data = await client.DescribeLicenseBindSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyNetAttackWhiteList", async function () {
    try {
       const data = await client.ModifyNetAttackWhiteList({})
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

it("cwp.v20180228.DescribeBaselineList", async function () {
    try {
       const data = await client.DescribeBaselineList({})
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

it("cwp.v20180228.DescribeVulHostTop", async function () {
    try {
       const data = await client.DescribeVulHostTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyOrderAttribute", async function () {
    try {
       const data = await client.ModifyOrderAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeABTestConfig", async function () {
    try {
       const data = await client.DescribeABTestConfig({})
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

it("cwp.v20180228.DescribeAssetCoreModuleList", async function () {
    try {
       const data = await client.DescribeAssetCoreModuleList({})
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

it("cwp.v20180228.CreateMaliciousRequestWhiteList", async function () {
    try {
       const data = await client.CreateMaliciousRequestWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetWebServiceCount", async function () {
    try {
       const data = await client.DescribeAssetWebServiceCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBaselineWeakPassword", async function () {
    try {
       const data = await client.ModifyBaselineWeakPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenDefenseTrends", async function () {
    try {
       const data = await client.DescribeScreenDefenseTrends({})
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

it("cwp.v20180228.ChangeStrategyEnableStatus", async function () {
    try {
       const data = await client.ChangeStrategyEnableStatus({})
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

it("cwp.v20180228.DescribeExpertServiceOrderList", async function () {
    try {
       const data = await client.DescribeExpertServiceOrderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CheckLogKafkaConnectionState", async function () {
    try {
       const data = await client.CheckLogKafkaConnectionState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulDefencePluginStatus", async function () {
    try {
       const data = await client.DescribeVulDefencePluginStatus({})
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

it("cwp.v20180228.DescribeVulDefencePluginDetail", async function () {
    try {
       const data = await client.DescribeVulDefencePluginDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBaselineRule", async function () {
    try {
       const data = await client.ModifyBaselineRule({})
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

it("cwp.v20180228.ModifyVulDefenceEventStatus", async function () {
    try {
       const data = await client.ModifyVulDefenceEventStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.GetLocalStorageItem", async function () {
    try {
       const data = await client.GetLocalStorageItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportRansomDefenseMachineList", async function () {
    try {
       const data = await client.ExportRansomDefenseMachineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRansomDefenseEventsList", async function () {
    try {
       const data = await client.DescribeRansomDefenseEventsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetProcessInfoList", async function () {
    try {
       const data = await client.ExportAssetProcessInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRansomDefenseMachineStrategyInfo", async function () {
    try {
       const data = await client.DescribeRansomDefenseMachineStrategyInfo({})
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

it("cwp.v20180228.ExportVulDetectionReport", async function () {
    try {
       const data = await client.ExportVulDetectionReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWarningHostConfig", async function () {
    try {
       const data = await client.ModifyWarningHostConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLicenseList", async function () {
    try {
       const data = await client.DescribeLicenseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateCloudProtectServiceOrderRecord", async function () {
    try {
       const data = await client.CreateCloudProtectServiceOrderRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.StartBaselineDetect", async function () {
    try {
       const data = await client.StartBaselineDetect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

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

it("cwp.v20180228.DeleteBaselineRule", async function () {
    try {
       const data = await client.DeleteBaselineRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeWebHookReceiverUsage", async function () {
    try {
       const data = await client.DescribeWebHookReceiverUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyMaliciousRequestWhiteList", async function () {
    try {
       const data = await client.ModifyMaliciousRequestWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteBaselineRuleIgnore", async function () {
    try {
       const data = await client.DeleteBaselineRuleIgnore({})
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

it("cwp.v20180228.RansomDefenseRollback", async function () {
    try {
       const data = await client.RansomDefenseRollback({})
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

it("cwp.v20180228.DescribeSecurityBroadcasts", async function () {
    try {
       const data = await client.DescribeSecurityBroadcasts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetTypes", async function () {
    try {
       const data = await client.DescribeAssetTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateNetAttackWhiteList", async function () {
    try {
       const data = await client.CreateNetAttackWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulLabels", async function () {
    try {
       const data = await client.DescribeVulLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeCloudProtectServiceOrderList", async function () {
    try {
       const data = await client.DescribeCloudProtectServiceOrderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.StopBaselineDetect", async function () {
    try {
       const data = await client.StopBaselineDetect({})
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

it("cwp.v20180228.DescribeAssetDiskList", async function () {
    try {
       const data = await client.DescribeAssetDiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyVulDefenceSetting", async function () {
    try {
       const data = await client.ModifyVulDefenceSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportVulDefenceEvent", async function () {
    try {
       const data = await client.ExportVulDefenceEvent({})
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

it("cwp.v20180228.DescribeScanState", async function () {
    try {
       const data = await client.DescribeScanState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteScanTask", async function () {
    try {
       const data = await client.DeleteScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyUsersConfig", async function () {
    try {
       const data = await client.ModifyUsersConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyWebHookPolicy", async function () {
    try {
       const data = await client.ModifyWebHookPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteAllJavaMemShells", async function () {
    try {
       const data = await client.DeleteAllJavaMemShells({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineItemList", async function () {
    try {
       const data = await client.DescribeBaselineItemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBashPolicies", async function () {
    try {
       const data = await client.DescribeBashPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRansomDefenseStrategyMachines", async function () {
    try {
       const data = await client.DescribeRansomDefenseStrategyMachines({})
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

it("cwp.v20180228.DescribeVulCountByDates", async function () {
    try {
       const data = await client.DescribeVulCountByDates({})
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

it("cwp.v20180228.DescribeVulStoreList", async function () {
    try {
       const data = await client.DescribeVulStoreList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAlarmIncidentNodes", async function () {
    try {
       const data = await client.DescribeAlarmIncidentNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenEventsCnt", async function () {
    try {
       const data = await client.DescribeScreenEventsCnt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetTotalCount", async function () {
    try {
       const data = await client.DescribeAssetTotalCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeHotVulTop", async function () {
    try {
       const data = await client.DescribeHotVulTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteBaselineWeakPassword", async function () {
    try {
       const data = await client.DeleteBaselineWeakPassword({})
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

it("cwp.v20180228.ExportAssetSystemPackageList", async function () {
    try {
       const data = await client.ExportAssetSystemPackageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.EditReverseShellRules", async function () {
    try {
       const data = await client.EditReverseShellRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DeleteWebHookPolicy", async function () {
    try {
       const data = await client.DeleteWebHookPolicy({})
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

it("cwp.v20180228.ModifyRiskEventsStatus", async function () {
    try {
       const data = await client.ModifyRiskEventsStatus({})
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

it("cwp.v20180228.DeleteMalwares", async function () {
    try {
       const data = await client.DeleteMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportVulDefencePluginEvent", async function () {
    try {
       const data = await client.ExportVulDefencePluginEvent({})
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

it("cwp.v20180228.ExportRiskProcessEvents", async function () {
    try {
       const data = await client.ExportRiskProcessEvents({})
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

it("cwp.v20180228.DescribeCanNotSeparateMachine", async function () {
    try {
       const data = await client.DescribeCanNotSeparateMachine({})
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

it("cwp.v20180228.ExportAssetEnvList", async function () {
    try {
       const data = await client.ExportAssetEnvList({})
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

it("cwp.v20180228.ExportSecurityTrends", async function () {
    try {
       const data = await client.ExportSecurityTrends({})
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

it("cwp.v20180228.ModifyFileTamperRuleStatus", async function () {
    try {
       const data = await client.ModifyFileTamperRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyBanWhiteList", async function () {
    try {
       const data = await client.ModifyBanWhiteList({})
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

it("cwp.v20180228.DescribeBaselineHostRiskTop", async function () {
    try {
       const data = await client.DescribeBaselineHostRiskTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportRiskDnsEventList", async function () {
    try {
       const data = await client.ExportRiskDnsEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportLicenseDetail", async function () {
    try {
       const data = await client.ExportLicenseDetail({})
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

it("cwp.v20180228.DescribeAttackTrends", async function () {
    try {
       const data = await client.DescribeAttackTrends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.CreateRansomDefenseStrategy", async function () {
    try {
       const data = await client.CreateRansomDefenseStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeScreenEmergentMsg", async function () {
    try {
       const data = await client.DescribeScreenEmergentMsg({})
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

it("cwp.v20180228.DescribeFileTamperEvents", async function () {
    try {
       const data = await client.DescribeFileTamperEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyLicenseBinds", async function () {
    try {
       const data = await client.ModifyLicenseBinds({})
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

it("cwp.v20180228.DescribeVulDefenceList", async function () {
    try {
       const data = await client.DescribeVulDefenceList({})
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

it("cwp.v20180228.DescribeRansomDefenseState", async function () {
    try {
       const data = await client.DescribeRansomDefenseState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportRiskDnsPolicyList", async function () {
    try {
       const data = await client.ExportRiskDnsPolicyList({})
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

it("cwp.v20180228.CreateBuyBindTask", async function () {
    try {
       const data = await client.CreateBuyBindTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.SearchLog", async function () {
    try {
       const data = await client.SearchLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeFileTamperRuleCount", async function () {
    try {
       const data = await client.DescribeFileTamperRuleCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeJavaMemShellPluginList", async function () {
    try {
       const data = await client.DescribeJavaMemShellPluginList({})
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

it("cwp.v20180228.DescribeProductStatus", async function () {
    try {
       const data = await client.DescribeProductStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeReverseShellEventInfo", async function () {
    try {
       const data = await client.DescribeReverseShellEventInfo({})
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

it("cwp.v20180228.ScanVul", async function () {
    try {
       const data = await client.ScanVul({})
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

it("cwp.v20180228.DescribeBaselineDetail", async function () {
    try {
       const data = await client.DescribeBaselineDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetPortCount", async function () {
    try {
       const data = await client.DescribeAssetPortCount({})
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

it("cwp.v20180228.DescribeVdbAndPocInfo", async function () {
    try {
       const data = await client.DescribeVdbAndPocInfo({})
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

it("cwp.v20180228.DescribeMachineOsList", async function () {
    try {
       const data = await client.DescribeMachineOsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulEmergentMsg", async function () {
    try {
       const data = await client.DescribeVulEmergentMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeLicenseGeneral", async function () {
    try {
       const data = await client.DescribeLicenseGeneral({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeRansomDefenseRollBackTaskList", async function () {
    try {
       const data = await client.DescribeRansomDefenseRollBackTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetRecentMachineInfo", async function () {
    try {
       const data = await client.ExportAssetRecentMachineInfo({})
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

it("cwp.v20180228.ModifyRiskDnsPolicy", async function () {
    try {
       const data = await client.ModifyRiskDnsPolicy({})
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

it("cwp.v20180228.DescribeBaselineItemIgnoreList", async function () {
    try {
       const data = await client.DescribeBaselineItemIgnoreList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportRansomDefenseStrategyList", async function () {
    try {
       const data = await client.ExportRansomDefenseStrategyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeVulFixStatus", async function () {
    try {
       const data = await client.DescribeVulFixStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeClientException", async function () {
    try {
       const data = await client.DescribeClientException({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeBaselineRuleCategoryList", async function () {
    try {
       const data = await client.DescribeBaselineRuleCategoryList({})
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

it("cwp.v20180228.DescribeRansomDefenseMachineList", async function () {
    try {
       const data = await client.DescribeRansomDefenseMachineList({})
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

it("cwp.v20180228.DescribeMalwareWhiteListAffectList", async function () {
    try {
       const data = await client.DescribeMalwareWhiteListAffectList({})
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

it("cwp.v20180228.ExportVulList", async function () {
    try {
       const data = await client.ExportVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ModifyJavaMemShellsStatus", async function () {
    try {
       const data = await client.ModifyJavaMemShellsStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.ExportAssetPlanTaskList", async function () {
    try {
       const data = await client.ExportAssetPlanTaskList({})
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

it("cwp.v20180228.DescribeAgentInstallationToken", async function () {
    try {
       const data = await client.DescribeAgentInstallationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cwp.v20180228.DescribeAssetMachineTagTop", async function () {
    try {
       const data = await client.DescribeAssetMachineTagTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
