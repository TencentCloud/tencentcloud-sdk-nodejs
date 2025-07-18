
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

it("csip.v20221121.DescribeUebaRule", async function () {
    try {
       const data = await client.DescribeUebaRule({})
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

it("csip.v20221121.DescribeNICAssets", async function () {
    try {
       const data = await client.DescribeNICAssets({})
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

it("csip.v20221121.DescribeDomainAssets", async function () {
    try {
       const data = await client.DescribeDomainAssets({})
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

it("csip.v20221121.DescribePublicIpAssets", async function () {
    try {
       const data = await client.DescribePublicIpAssets({})
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

it("csip.v20221121.DescribeVULList", async function () {
    try {
       const data = await client.DescribeVULList({})
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

it("csip.v20221121.DescribeAccessKeyUserList", async function () {
    try {
       const data = await client.DescribeAccessKeyUserList({})
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

it("csip.v20221121.StopRiskCenterTask", async function () {
    try {
       const data = await client.StopRiskCenterTask({})
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

it("csip.v20221121.DescribeRiskDetailList", async function () {
    try {
       const data = await client.DescribeRiskDetailList({})
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

it("csip.v20221121.DescribeRiskCenterAssetViewVULRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterAssetViewVULRiskList({})
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

it("csip.v20221121.DescribeOtherCloudAssets", async function () {
    try {
       const data = await client.DescribeOtherCloudAssets({})
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

it("csip.v20221121.DescribeVpcAssets", async function () {
    try {
       const data = await client.DescribeVpcAssets({})
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

it("csip.v20221121.DescribeRiskCenterServerRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterServerRiskList({})
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

it("csip.v20221121.ModifyRiskCenterScanTask", async function () {
    try {
       const data = await client.ModifyRiskCenterScanTask({})
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

it("csip.v20221121.DescribeAssetViewVulRiskList", async function () {
    try {
       const data = await client.DescribeAssetViewVulRiskList({})
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

it("csip.v20221121.DescribeCheckViewRisks", async function () {
    try {
       const data = await client.DescribeCheckViewRisks({})
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

it("csip.v20221121.DescribeCFWAssetStatistics", async function () {
    try {
       const data = await client.DescribeCFWAssetStatistics({})
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

it("csip.v20221121.DescribeAssetRiskList", async function () {
    try {
       const data = await client.DescribeAssetRiskList({})
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

it("csip.v20221121.CreateRiskCenterScanTask", async function () {
    try {
       const data = await client.CreateRiskCenterScanTask({})
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

it("csip.v20221121.DescribeTopAttackInfo", async function () {
    try {
       const data = await client.DescribeTopAttackInfo({})
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

it("csip.v20221121.DescribeVULRiskDetail", async function () {
    try {
       const data = await client.DescribeVULRiskDetail({})
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

it("csip.v20221121.DescribeVulViewVulRiskList", async function () {
    try {
       const data = await client.DescribeVulViewVulRiskList({})
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

it("csip.v20221121.DescribeHighBaseLineRiskList", async function () {
    try {
       const data = await client.DescribeHighBaseLineRiskList({})
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

it("csip.v20221121.CreateDomainAndIp", async function () {
    try {
       const data = await client.CreateDomainAndIp({})
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

it("csip.v20221121.DescribeScanTaskList", async function () {
    try {
       const data = await client.DescribeScanTaskList({})
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

it("csip.v20221121.ModifyUebaRuleSwitch", async function () {
    try {
       const data = await client.ModifyUebaRuleSwitch({})
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

it("csip.v20221121.DescribeScanStatistic", async function () {
    try {
       const data = await client.DescribeScanStatistic({})
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

it("csip.v20221121.DescribeOrganizationUserInfo", async function () {
    try {
       const data = await client.DescribeOrganizationUserInfo({})
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

it("csip.v20221121.CreateAccessKeySyncTask", async function () {
    try {
       const data = await client.CreateAccessKeySyncTask({})
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

it("csip.v20221121.DescribeSubUserInfo", async function () {
    try {
       const data = await client.DescribeSubUserInfo({})
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

it("csip.v20221121.DescribeVULRiskAdvanceCFGList", async function () {
    try {
       const data = await client.DescribeVULRiskAdvanceCFGList({})
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

it("csip.v20221121.DescribeExposures", async function () {
    try {
       const data = await client.DescribeExposures({})
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

it("csip.v20221121.ModifyOrganizationAccountStatus", async function () {
    try {
       const data = await client.ModifyOrganizationAccountStatus({})
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

it("csip.v20221121.DescribeRiskCenterCFGViewCFGRiskList", async function () {
    try {
       const data = await client.DescribeRiskCenterCFGViewCFGRiskList({})
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

it("csip.v20221121.DescribeClusterAssets", async function () {
    try {
       const data = await client.DescribeClusterAssets({})
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

it("csip.v20221121.DescribeSubnetAssets", async function () {
    try {
       const data = await client.DescribeSubnetAssets({})
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

it("csip.v20221121.DescribeAccessKeyAsset", async function () {
    try {
       const data = await client.DescribeAccessKeyAsset({})
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

it("csip.v20221121.DescribeCVMAssetInfo", async function () {
    try {
       const data = await client.DescribeCVMAssetInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
