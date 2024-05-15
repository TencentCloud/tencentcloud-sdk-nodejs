
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

it("csip.v20221121.DeleteDomainAndIp", async function () {
    try {
       const data = await client.DeleteDomainAndIp({})
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

it("csip.v20221121.DescribeListenerList", async function () {
    try {
       const data = await client.DescribeListenerList({})
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

it("csip.v20221121.DescribeAssetViewVulRiskList", async function () {
    try {
       const data = await client.DescribeAssetViewVulRiskList({})
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

it("csip.v20221121.DescribeTaskLogURL", async function () {
    try {
       const data = await client.DescribeTaskLogURL({})
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

it("csip.v20221121.DescribeTaskLogList", async function () {
    try {
       const data = await client.DescribeTaskLogList({})
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

it("csip.v20221121.UpdateAlertStatusList", async function () {
    try {
       const data = await client.UpdateAlertStatusList({})
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

it("csip.v20221121.DescribeDbAssets", async function () {
    try {
       const data = await client.DescribeDbAssets({})
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

it("csip.v20221121.DescribeSubnetAssets", async function () {
    try {
       const data = await client.DescribeSubnetAssets({})
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
