
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.csip.v20221121.Client({
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
describe("csip.v20221121.test.js", function () {

it("csip.v20221121.DescribeDspmAssetSecurityAnalyseStatus", async function () {
    try {
       const data = await client.DescribeDspmAssetSecurityAnalyseStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteIaCFile", async function () {
    try {
       const data = await client.DeleteIaCFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDomainAndIp", async function () {
    try {
       const data = await client.DeleteDomainAndIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeVulRiskList", async function () {
    try {
       const data = await client.DescribeVulRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskRuleDetail", async function () {
    try {
       const data = await client.DescribeRiskRuleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateCosAssetSyncTask", async function () {
    try {
       const data = await client.CreateCosAssetSyncTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDbAssetInfo", async function () {
    try {
       const data = await client.DescribeDbAssetInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmIdentifyInfoList", async function () {
    try {
       const data = await client.DescribeDspmIdentifyInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDomainAssets", async function () {
    try {
       const data = await client.DescribeDomainAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmAssetAccountPrivileges", async function () {
    try {
       const data = await client.ModifyDspmAssetAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAIAgentAssetList", async function () {
    try {
       const data = await client.DescribeAIAgentAssetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateCosRiskScanTask", async function () {
    try {
       const data = await client.CreateCosRiskScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAccessKeyUserList", async function () {
    try {
       const data = await client.DescribeAccessKeyUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetIds", async function () {
    try {
       const data = await client.DescribeDspmAssetIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeConfigCheckRules", async function () {
    try {
       const data = await client.DescribeConfigCheckRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeIpInvokeRecordDetail", async function () {
    try {
       const data = await client.DescribeIpInvokeRecordDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmApproveHistory", async function () {
    try {
       const data = await client.DescribeDspmApproveHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeScanTaskList", async function () {
    try {
       const data = await client.DescribeScanTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskBucketList", async function () {
    try {
       const data = await client.DescribeRiskBucketList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDspmApplyOrder", async function () {
    try {
       const data = await client.DeleteDspmApplyOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmRiskDetail", async function () {
    try {
       const data = await client.DescribeDspmRiskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosSourceIp", async function () {
    try {
       const data = await client.DescribeCosSourceIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmBackupSetting", async function () {
    try {
       const data = await client.DescribeDspmBackupSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosInvokeUa", async function () {
    try {
       const data = await client.DescribeCosInvokeUa({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateIaCAccessToken", async function () {
    try {
       const data = await client.CreateIaCAccessToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeVULRiskDetail", async function () {
    try {
       const data = await client.DescribeVULRiskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterWebsiteRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterWebsiteRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateCosObjectScanTask", async function () {
    try {
       const data = await client.CreateCosObjectScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskTrendData", async function () {
    try {
       const data = await client.DescribeRiskTrendData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeNICAssets", async function () {
    try {
       const data = await client.DescribeNICAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmSyncAssetsStatus", async function () {
    try {
       const data = await client.DescribeDspmSyncAssetsStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateAccessKeySyncTask", async function () {
    try {
       const data = await client.CreateAccessKeySyncTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeTopAttackInfo", async function () {
    try {
       const data = await client.DescribeTopAttackInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmAssetLogDeliverySwitch", async function () {
    try {
       const data = await client.ModifyDspmAssetLogDeliverySwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeIaCFileList", async function () {
    try {
       const data = await client.DescribeIaCFileList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyNotifySettingAlert", async function () {
    try {
       const data = await client.ModifyNotifySettingAlert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosIdentifyFileList", async function () {
    try {
       const data = await client.DescribeCosIdentifyFileList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosRiskScanTask", async function () {
    try {
       const data = await client.DescribeCosRiskScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateIaCFileReScanTask", async function () {
    try {
       const data = await client.CreateIaCFileReScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmAssetAccessTopologyExportJob", async function () {
    try {
       const data = await client.CreateDspmAssetAccessTopologyExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterPortViewPortRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterPortViewPortRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeEdrAlertInfo", async function () {
    try {
       const data = await client.DescribeEdrAlertInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeIpInvokeRecord", async function () {
    try {
       const data = await client.DescribeIpInvokeRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateIaCFileExportJob", async function () {
    try {
       const data = await client.CreateIaCFileExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeSubUserInfo", async function () {
    try {
       const data = await client.DescribeSubUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeNotifyAssetConfig", async function () {
    try {
       const data = await client.DescribeNotifyAssetConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmAssetAccount", async function () {
    try {
       const data = await client.ModifyDspmAssetAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyUebaRuleSwitch", async function () {
    try {
       const data = await client.ModifyUebaRuleSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyNotifySetting", async function () {
    try {
       const data = await client.ModifyNotifySetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyPolicyStatus", async function () {
    try {
       const data = await client.ModifyPolicyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmIdentifyInfo", async function () {
    try {
       const data = await client.ModifyDspmIdentifyInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAuditDictionaryList", async function () {
    try {
       const data = await client.DescribeCosAuditDictionaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmRiskStrategyGroup", async function () {
    try {
       const data = await client.DescribeDspmRiskStrategyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmExportTask", async function () {
    try {
       const data = await client.DescribeDspmExportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmApplyOrderList", async function () {
    try {
       const data = await client.DescribeDspmApplyOrderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAccessKeyAlarmDetail", async function () {
    try {
       const data = await client.DescribeAccessKeyAlarmDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAlarmList", async function () {
    try {
       const data = await client.DescribeCosAlarmList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmSupportedAssetType", async function () {
    try {
       const data = await client.DescribeDspmSupportedAssetType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeOrganizationUserInfo", async function () {
    try {
       const data = await client.DescribeOrganizationUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.StopRiskCenterTask", async function () {
    try {
       const data = await client.StopRiskCenterTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateAccessKeyCheckTask", async function () {
    try {
       const data = await client.CreateAccessKeyCheckTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeSubnetAssets", async function () {
    try {
       const data = await client.DescribeSubnetAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmIdentifyIdList", async function () {
    try {
       const data = await client.DescribeDspmIdentifyIdList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAccessKeyAsset", async function () {
    try {
       const data = await client.DescribeAccessKeyAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.SendDspmAssetLoginSmsCode", async function () {
    try {
       const data = await client.SendDspmAssetLoginSmsCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAccessPermissions", async function () {
    try {
       const data = await client.DescribeCosAccessPermissions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetAccountRecycledPrivileges", async function () {
    try {
       const data = await client.DescribeDspmAssetAccountRecycledPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetDatabaseList", async function () {
    try {
       const data = await client.DescribeDspmAssetDatabaseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeEdrAlertList", async function () {
    try {
       const data = await client.DescribeEdrAlertList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeExposures", async function () {
    try {
       const data = await client.DescribeExposures({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmAssetsExportJob", async function () {
    try {
       const data = await client.CreateDspmAssetsExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmRiskInfo", async function () {
    try {
       const data = await client.ModifyDspmRiskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAILinkSetting", async function () {
    try {
       const data = await client.DescribeAILinkSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterVULViewVULRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterVULViewVULRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAkInvokeIpList", async function () {
    try {
       const data = await client.DescribeCosAkInvokeIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.AddNewBindRoleUser", async function () {
    try {
       const data = await client.AddNewBindRoleUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDspmPersonalIdentify", async function () {
    try {
       const data = await client.DeleteDspmPersonalIdentify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmLogList", async function () {
    try {
       const data = await client.DescribeDspmLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosRoleAccessPermissions", async function () {
    try {
       const data = await client.DescribeCosRoleAccessPermissions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.SyncDspmUsers", async function () {
    try {
       const data = await client.SyncDspmUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateCosPolicy", async function () {
    try {
       const data = await client.CreateCosPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmAssetSecurityAnalysisSwitch", async function () {
    try {
       const data = await client.ModifyDspmAssetSecurityAnalysisSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmDictionaryList", async function () {
    try {
       const data = await client.DescribeDspmDictionaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeKeySandboxCredentialList", async function () {
    try {
       const data = await client.DescribeKeySandboxCredentialList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetDatabases", async function () {
    try {
       const data = await client.DescribeDspmAssetDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCVMAssets", async function () {
    try {
       const data = await client.DescribeCVMAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosOverview", async function () {
    try {
       const data = await client.DescribeCosOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyAlarmRiskStatus", async function () {
    try {
       const data = await client.ModifyAlarmRiskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmApplyOrder", async function () {
    try {
       const data = await client.CreateDspmApplyOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskRules", async function () {
    try {
       const data = await client.DescribeRiskRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosIpInvokeRecordFile", async function () {
    try {
       const data = await client.DescribeCosIpInvokeRecordFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeBucketInvokeIpList", async function () {
    try {
       const data = await client.DescribeBucketInvokeIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmRisk", async function () {
    try {
       const data = await client.DescribeDspmRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeUserDspmInfoList", async function () {
    try {
       const data = await client.DescribeUserDspmInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.RetryDspmExportLog", async function () {
    try {
       const data = await client.RetryDspmExportLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmRiskStrategy", async function () {
    try {
       const data = await client.ModifyDspmRiskStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetLoginCredential", async function () {
    try {
       const data = await client.DescribeDspmAssetLoginCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAlertList", async function () {
    try {
       const data = await client.DescribeAlertList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateSkillScan", async function () {
    try {
       const data = await client.CreateSkillScan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeScanReportList", async function () {
    try {
       const data = await client.DescribeScanReportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.SyncDspmAssets", async function () {
    try {
       const data = await client.SyncDspmAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskDetailList", async function () {
    try {
       const data = await client.DescribeRiskDetailList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAuditAppIdList", async function () {
    try {
       const data = await client.DescribeCosAuditAppIdList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmApproveHistoryExportJob", async function () {
    try {
       const data = await client.CreateDspmApproveHistoryExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetAccountIdentify", async function () {
    try {
       const data = await client.DescribeDspmAssetAccountIdentify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmIdentifyInfoListExportJob", async function () {
    try {
       const data = await client.CreateDspmIdentifyInfoListExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterAssetViewPortRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterAssetViewPortRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCLSLogListV3", async function () {
    try {
       const data = await client.DescribeCLSLogListV3({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeVpcAssets", async function () {
    try {
       const data = await client.DescribeVpcAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAuditPayInfo", async function () {
    try {
       const data = await client.DescribeCosAuditPayInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterCFGViewCFGRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterCFGViewCFGRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmAccessExportJob", async function () {
    try {
       const data = await client.CreateDspmAccessExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.UpdateAccessKeyRemark", async function () {
    try {
       const data = await client.UpdateAccessKeyRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAccessKeyRisk", async function () {
    try {
       const data = await client.DescribeAccessKeyRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRepositoryImageAssets", async function () {
    try {
       const data = await client.DescribeRepositoryImageAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteCosAkAsset", async function () {
    try {
       const data = await client.DeleteCosAkAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterServerRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterServerRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCVMAssetInfo", async function () {
    try {
       const data = await client.DescribeCVMAssetInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAsset", async function () {
    try {
       const data = await client.DescribeCosAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeTaskLogList", async function () {
    try {
       const data = await client.DescribeTaskLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyNotifyAssetConfig", async function () {
    try {
       const data = await client.ModifyNotifyAssetConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.VerifyDspmAssetLoginCode", async function () {
    try {
       const data = await client.VerifyDspmAssetLoginCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAssetSyncTask", async function () {
    try {
       const data = await client.DescribeCosAssetSyncTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeSkillScanPayInfo", async function () {
    try {
       const data = await client.DescribeSkillScanPayInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmPersonApplyHistory", async function () {
    try {
       const data = await client.DescribeDspmPersonApplyHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosPolicy", async function () {
    try {
       const data = await client.DescribeCosPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteCosPolicy", async function () {
    try {
       const data = await client.DeleteCosPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmBackupSetting", async function () {
    try {
       const data = await client.ModifyDspmBackupSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCallRecord", async function () {
    try {
       const data = await client.DescribeCallRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmWhitelistStrategy", async function () {
    try {
       const data = await client.DescribeDspmWhitelistStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeListenerList", async function () {
    try {
       const data = await client.DescribeListenerList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyCosMarkInfo", async function () {
    try {
       const data = await client.ModifyCosMarkInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteIaCAccessToken", async function () {
    try {
       const data = await client.DeleteIaCAccessToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCWPMachineDetail", async function () {
    try {
       const data = await client.DescribeCWPMachineDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeClusterPodAssets", async function () {
    try {
       const data = await client.DescribeClusterPodAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDspmBackupLogList", async function () {
    try {
       const data = await client.DeleteDspmBackupLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetFieldList", async function () {
    try {
       const data = await client.DescribeDspmAssetFieldList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyCosAuditMonitorAccount", async function () {
    try {
       const data = await client.ModifyCosAuditMonitorAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAccessPermission", async function () {
    try {
       const data = await client.DescribeCosAccessPermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmWhitelistStrategy", async function () {
    try {
       const data = await client.ModifyDspmWhitelistStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDspmWhitelistStrategy", async function () {
    try {
       const data = await client.DeleteDspmWhitelistStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDspmRestoreLogList", async function () {
    try {
       const data = await client.DeleteDspmRestoreLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.AddDspmAssetManager", async function () {
    try {
       const data = await client.AddDspmAssetManager({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCFWAssetStatistics", async function () {
    try {
       const data = await client.DescribeCFWAssetStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmRiskStrategy", async function () {
    try {
       const data = await client.DescribeDspmRiskStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmRiskExportJob", async function () {
    try {
       const data = await client.CreateDspmRiskExportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAccessTopologyIps", async function () {
    try {
       const data = await client.DescribeDspmAccessTopologyIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeExposePath", async function () {
    try {
       const data = await client.DescribeExposePath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAbnormalCallRecord", async function () {
    try {
       const data = await client.DescribeAbnormalCallRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmExportTask", async function () {
    try {
       const data = await client.CreateDspmExportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDspmExportTask", async function () {
    try {
       const data = await client.DeleteDspmExportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAccessKeyAlarm", async function () {
    try {
       const data = await client.DescribeAccessKeyAlarm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyMachineRemark", async function () {
    try {
       const data = await client.ModifyMachineRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskItemList", async function () {
    try {
       const data = await client.DescribeRiskItemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeSkillScanResult", async function () {
    try {
       const data = await client.DescribeSkillScanResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetTableList", async function () {
    try {
       const data = await client.DescribeDspmAssetTableList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyRiskCenterRiskStatus", async function () {
    try {
       const data = await client.ModifyRiskCenterRiskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAccessTopologyAssets", async function () {
    try {
       const data = await client.DescribeDspmAccessTopologyAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribePublicIpAssets", async function () {
    try {
       const data = await client.DescribePublicIpAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeExposeAssetCategory", async function () {
    try {
       const data = await client.DescribeExposeAssetCategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeIaCTokenList", async function () {
    try {
       const data = await client.DescribeIaCTokenList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAssetProcessList", async function () {
    try {
       const data = await client.DescribeAssetProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateRiskCenterScanTask", async function () {
    try {
       const data = await client.CreateRiskCenterScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetAccounts", async function () {
    try {
       const data = await client.DescribeDspmAssetAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCLSLogIndexV3", async function () {
    try {
       const data = await client.DescribeCLSLogIndexV3({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeNotifySetting", async function () {
    try {
       const data = await client.DescribeNotifySetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.RevertDspmAssetAccount", async function () {
    try {
       const data = await client.RevertDspmAssetAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeVULRiskAdvanceCFGList", async function () {
    try {
       const data = await client.DescribeVULRiskAdvanceCFGList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmPayInfo", async function () {
    try {
       const data = await client.DescribeDspmPayInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAssumeRole", async function () {
    try {
       const data = await client.DescribeAssumeRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeIaCFileReport", async function () {
    try {
       const data = await client.DescribeIaCFileReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosBucketList", async function () {
    try {
       const data = await client.DescribeCosBucketList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmRiskTendency", async function () {
    try {
       const data = await client.DescribeDspmRiskTendency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeGatewayAssets", async function () {
    try {
       const data = await client.DescribeGatewayAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeClusterAssets", async function () {
    try {
       const data = await client.DescribeClusterAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmAssetDataScanTask", async function () {
    try {
       const data = await client.ModifyDspmAssetDataScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyOrganizationAccountStatus", async function () {
    try {
       const data = await client.ModifyOrganizationAccountStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAccessRecord", async function () {
    try {
       const data = await client.DescribeDspmAccessRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAssetViewVulRiskList", async function () {
    try {
       const data = await client.DescribeAssetViewVulRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmPersonalIdentify", async function () {
    try {
       const data = await client.ModifyDspmPersonalIdentify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeUebaRule", async function () {
    try {
       const data = await client.DescribeUebaRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosBucketRisk", async function () {
    try {
       const data = await client.DescribeCosBucketRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeUserCallRecord", async function () {
    try {
       const data = await client.DescribeUserCallRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetAccountPresetPrivileges", async function () {
    try {
       const data = await client.DescribeDspmAssetAccountPresetPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeEDRRuleList", async function () {
    try {
       const data = await client.DescribeEDRRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeKeySandboxCredential", async function () {
    try {
       const data = await client.DescribeKeySandboxCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeScanStatistic", async function () {
    try {
       const data = await client.DescribeScanStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmSyncUsersStatus", async function () {
    try {
       const data = await client.DescribeDspmSyncUsersStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeVULList", async function () {
    try {
       const data = await client.DescribeVULList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ResetDspmAssetAccountPassword", async function () {
    try {
       const data = await client.ResetDspmAssetAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmIdentifyInfo", async function () {
    try {
       const data = await client.DescribeDspmIdentifyInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmStatistics", async function () {
    try {
       const data = await client.DescribeDspmStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DownloadDspmExportLog", async function () {
    try {
       const data = await client.DownloadDspmExportLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAKAnalysisDetail", async function () {
    try {
       const data = await client.DescribeAKAnalysisDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAccessKeyUserDetail", async function () {
    try {
       const data = await client.DescribeAccessKeyUserDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmApproveOrderList", async function () {
    try {
       const data = await client.DescribeDspmApproveOrderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAkAsset", async function () {
    try {
       const data = await client.DescribeCosAkAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteRiskScanTask", async function () {
    try {
       const data = await client.DeleteRiskScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosIpInvokeLog", async function () {
    try {
       const data = await client.DescribeCosIpInvokeLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmBackupLogList", async function () {
    try {
       const data = await client.DescribeDspmBackupLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeOtherCloudAssets", async function () {
    try {
       const data = await client.DescribeOtherCloudAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmWhitelistStrategy", async function () {
    try {
       const data = await client.CreateDspmWhitelistStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmRestoreLogTask", async function () {
    try {
       const data = await client.ModifyDspmRestoreLogTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyRiskCenterScanTask", async function () {
    try {
       const data = await client.ModifyRiskCenterScanTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCheckViewRisks", async function () {
    try {
       const data = await client.DescribeCheckViewRisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosRoleAccessPermission", async function () {
    try {
       const data = await client.DescribeCosRoleAccessPermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAssetRiskList", async function () {
    try {
       const data = await client.DescribeAssetRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosActionList", async function () {
    try {
       const data = await client.DescribeCosActionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosAlarmTrendData", async function () {
    try {
       const data = await client.DescribeCosAlarmTrendData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDbAssets", async function () {
    try {
       const data = await client.DescribeDbAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosRiskEvidence", async function () {
    try {
       const data = await client.DescribeCosRiskEvidence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmApplyHistory", async function () {
    try {
       const data = await client.DescribeDspmApplyHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribePolicyHitData", async function () {
    try {
       const data = await client.DescribePolicyHitData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeSearchBugInfo", async function () {
    try {
       const data = await client.DescribeSearchBugInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmIpInfo", async function () {
    try {
       const data = await client.ModifyDspmIpInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeNotifySettingAlert", async function () {
    try {
       const data = await client.DescribeNotifySettingAlert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterAssetViewWeakPasswordRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterAssetViewWeakPasswordRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeVulViewVulRiskList", async function () {
    try {
       const data = await client.DescribeVulViewVulRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterAssetViewVULRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterAssetViewVULRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmApproveStatus", async function () {
    try {
       const data = await client.ModifyDspmApproveStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDomainAndIp", async function () {
    try {
       const data = await client.CreateDomainAndIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyDspmAccessRecord", async function () {
    try {
       const data = await client.ModifyDspmAccessRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.UpdateAlertStatusList", async function () {
    try {
       const data = await client.UpdateAlertStatusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeHighBaseLineRiskList", async function () {
    try {
       const data = await client.DescribeHighBaseLineRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeSourceIPAsset", async function () {
    try {
       const data = await client.DescribeSourceIPAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyIaCTokenPeriod", async function () {
    try {
       const data = await client.ModifyIaCTokenPeriod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyEDRRule", async function () {
    try {
       const data = await client.ModifyEDRRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCenterAssetViewCFGRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterAssetViewCFGRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DeleteDspmAssetAccount", async function () {
    try {
       const data = await client.DeleteDspmAssetAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeOrganizationInfo", async function () {
    try {
       const data = await client.DescribeOrganizationInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetSupportedPrivileges", async function () {
    try {
       const data = await client.DescribeDspmAssetSupportedPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.CreateDspmPersonalIdentify", async function () {
    try {
       const data = await client.CreateDspmPersonalIdentify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmPersonalIdentifyList", async function () {
    try {
       const data = await client.DescribeDspmPersonalIdentifyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyAILinkSetting", async function () {
    try {
       const data = await client.ModifyAILinkSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssets", async function () {
    try {
       const data = await client.DescribeDspmAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAccessTopologyAccounts", async function () {
    try {
       const data = await client.DescribeDspmAccessTopologyAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosBucketBillingInfo", async function () {
    try {
       const data = await client.DescribeCosBucketBillingInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeIaCFileOverview", async function () {
    try {
       const data = await client.DescribeIaCFileOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeTaskLogURL", async function () {
    try {
       const data = await client.DescribeTaskLogURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCSIPRiskStatistics", async function () {
    try {
       const data = await client.DescribeCSIPRiskStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCosRiskActionList", async function () {
    try {
       const data = await client.DescribeCosRiskActionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeAccessKeyRiskDetail", async function () {
    try {
       const data = await client.DescribeAccessKeyRiskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeDspmAssetAccessTopology", async function () {
    try {
       const data = await client.DescribeDspmAssetAccessTopology({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeCWPMachines", async function () {
    try {
       const data = await client.DescribeCWPMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.DescribeRiskCallRecord", async function () {
    try {
       const data = await client.DescribeRiskCallRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.ModifyEdrAlertPermanentIgnore", async function () {
    try {
       const data = await client.ModifyEdrAlertPermanentIgnore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("csip.v20221121.UpdateAccessKeyAlarmStatus", async function () {
    try {
       const data = await client.UpdateAccessKeyAlarmStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
