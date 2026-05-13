
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

it("csip.v20221121.DescribeDspmAssetDatabaseList", async function () {
    try {
       const data = await client.DescribeDspmAssetDatabaseList({})
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

it("csip.v20221121.DescribeDspmApproveHistory", async function () {
    try {
       const data = await client.DescribeDspmApproveHistory({})
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

it("csip.v20221121.DescribeDspmBackupSetting", async function () {
    try {
       const data = await client.DescribeDspmBackupSetting({})
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

it("csip.v20221121.DescribeAssetViewVulRiskList", async function () {
    try {
       const data = await client.DescribeAssetViewVulRiskList({})
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

it("csip.v20221121.DescribeDspmRiskStrategy", async function () {
    try {
       const data = await client.DescribeDspmRiskStrategy({})
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

it("csip.v20221121.DeleteDspmAssetAccount", async function () {
    try {
       const data = await client.DeleteDspmAssetAccount({})
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

it("csip.v20221121.DescribeScanTaskList", async function () {
    try {
       const data = await client.DescribeScanTaskList({})
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

it("csip.v20221121.DescribeDspmAssetAccountRecycledPrivileges", async function () {
    try {
       const data = await client.DescribeDspmAssetAccountRecycledPrivileges({})
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

it("csip.v20221121.DescribeAbnormalCallRecord", async function () {
    try {
       const data = await client.DescribeAbnormalCallRecord({})
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

it("csip.v20221121.SyncDspmUsers", async function () {
    try {
       const data = await client.SyncDspmUsers({})
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

it("csip.v20221121.DescribeDspmAccessTopologyIps", async function () {
    try {
       const data = await client.DescribeDspmAccessTopologyIps({})
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

it("csip.v20221121.DescribeDspmPayInfo", async function () {
    try {
       const data = await client.DescribeDspmPayInfo({})
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

it("csip.v20221121.DescribeCVMAssetInfo", async function () {
    try {
       const data = await client.DescribeCVMAssetInfo({})
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

it("csip.v20221121.VerifyDspmAssetLoginCode", async function () {
    try {
       const data = await client.VerifyDspmAssetLoginCode({})
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

it("csip.v20221121.ModifyDspmApproveStatus", async function () {
    try {
       const data = await client.ModifyDspmApproveStatus({})
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

it("csip.v20221121.DeleteDspmWhitelistStrategy", async function () {
    try {
       const data = await client.DeleteDspmWhitelistStrategy({})
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

it("csip.v20221121.DescribeDspmApplyHistory", async function () {
    try {
       const data = await client.DescribeDspmApplyHistory({})
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

it("csip.v20221121.DescribeRiskCenterServerRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterServerRiskList({})
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

it("csip.v20221121.DescribeCallRecord", async function () {
    try {
       const data = await client.DescribeCallRecord({})
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

it("csip.v20221121.StopRiskCenterTask", async function () {
    try {
       const data = await client.StopRiskCenterTask({})
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

it("csip.v20221121.CreateDspmApproveHistoryExportJob", async function () {
    try {
       const data = await client.CreateDspmApproveHistoryExportJob({})
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

it("csip.v20221121.DescribeGatewayAssets", async function () {
    try {
       const data = await client.DescribeGatewayAssets({})
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

it("csip.v20221121.ModifyDspmIpInfo", async function () {
    try {
       const data = await client.ModifyDspmIpInfo({})
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

it("csip.v20221121.DescribeDspmRiskStrategyGroup", async function () {
    try {
       const data = await client.DescribeDspmRiskStrategyGroup({})
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

it("csip.v20221121.DescribeDspmRiskTendency", async function () {
    try {
       const data = await client.DescribeDspmRiskTendency({})
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

it("csip.v20221121.DeleteRiskScanTask", async function () {
    try {
       const data = await client.DeleteRiskScanTask({})
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

it("csip.v20221121.DescribeDspmBackupLogList", async function () {
    try {
       const data = await client.DescribeDspmBackupLogList({})
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

it("csip.v20221121.DescribeAssetRiskList", async function () {
    try {
       const data = await client.DescribeAssetRiskList({})
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

it("csip.v20221121.DescribeDbAssets", async function () {
    try {
       const data = await client.DescribeDbAssets({})
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

it("csip.v20221121.DescribeSubUserInfo", async function () {
    try {
       const data = await client.DescribeSubUserInfo({})
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

it("csip.v20221121.DescribeRiskCenterAssetViewCFGRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterAssetViewCFGRiskList({})
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

it("csip.v20221121.ModifyDspmIdentifyInfo", async function () {
    try {
       const data = await client.ModifyDspmIdentifyInfo({})
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

it("csip.v20221121.DescribeDspmAssetSupportedPrivileges", async function () {
    try {
       const data = await client.DescribeDspmAssetSupportedPrivileges({})
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

it("csip.v20221121.DescribeRiskCallRecord", async function () {
    try {
       const data = await client.DescribeRiskCallRecord({})
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
