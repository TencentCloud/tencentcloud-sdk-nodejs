
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.yunjing.v20180228.Client({
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
describe("yunjing.v20180228.test.js", function () {

it("yunjing.v20180228.DeleteTags", async function () {
    try {
       const data = await client.DeleteTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.TrustMalwares", async function () {
    try {
       const data = await client.TrustMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeComponentStatistics", async function () {
    try {
       const data = await client.DescribeComponentStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteMachineTag", async function () {
    try {
       const data = await client.DeleteMachineTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeAttackLogs", async function () {
    try {
       const data = await client.DescribeAttackLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.OpenProVersion", async function () {
    try {
       const data = await client.OpenProVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeWeeklyReportMalwares", async function () {
    try {
       const data = await client.DescribeWeeklyReportMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeVulInfo", async function () {
    try {
       const data = await client.DescribeVulInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.EditBashRule", async function () {
    try {
       const data = await client.EditBashRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteUsualLoginPlaces", async function () {
    try {
       const data = await client.DeleteUsualLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeVuls", async function () {
    try {
       const data = await client.DescribeVuls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.MisAlarmNonlocalLoginPlaces", async function () {
    try {
       const data = await client.MisAlarmNonlocalLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.CreateBaselineStrategy", async function () {
    try {
       const data = await client.CreateBaselineStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeBashRules", async function () {
    try {
       const data = await client.DescribeBashRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeletePrivilegeEvents", async function () {
    try {
       const data = await client.DeletePrivilegeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.RenewProVersion", async function () {
    try {
       const data = await client.RenewProVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportAttackLogs", async function () {
    try {
       const data = await client.ExportAttackLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeUsualLoginPlaces", async function () {
    try {
       const data = await client.DescribeUsualLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteBashEvents", async function () {
    try {
       const data = await client.DeleteBashEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteMaliciousRequests", async function () {
    try {
       const data = await client.DeleteMaliciousRequests({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeReverseShellRules", async function () {
    try {
       const data = await client.DescribeReverseShellRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.RecoverMalwares", async function () {
    try {
       const data = await client.RecoverMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteReverseShellRules", async function () {
    try {
       const data = await client.DeleteReverseShellRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteBruteAttacks", async function () {
    try {
       const data = await client.DeleteBruteAttacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportBashEvents", async function () {
    try {
       const data = await client.ExportBashEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.CreateProcessTask", async function () {
    try {
       const data = await client.CreateProcessTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.EditReverseShellRule", async function () {
    try {
       const data = await client.EditReverseShellRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeProcesses", async function () {
    try {
       const data = await client.DescribeProcesses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeMalwares", async function () {
    try {
       const data = await client.DescribeMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ModifyLoginWhiteList", async function () {
    try {
       const data = await client.ModifyLoginWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribePrivilegeRules", async function () {
    try {
       const data = await client.DescribePrivilegeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.UntrustMaliciousRequest", async function () {
    try {
       const data = await client.UntrustMaliciousRequest({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeImpactedHosts", async function () {
    try {
       const data = await client.DescribeImpactedHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteNonlocalLoginPlaces", async function () {
    try {
       const data = await client.DeleteNonlocalLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeOpenPorts", async function () {
    try {
       const data = await client.DescribeOpenPorts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportMaliciousRequests", async function () {
    try {
       const data = await client.ExportMaliciousRequests({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeTagMachines", async function () {
    try {
       const data = await client.DescribeTagMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeNonlocalLoginPlaces", async function () {
    try {
       const data = await client.DescribeNonlocalLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportPrivilegeEvents", async function () {
    try {
       const data = await client.ExportPrivilegeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeOverviewStatistics", async function () {
    try {
       const data = await client.DescribeOverviewStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeOpenPortTaskStatus", async function () {
    try {
       const data = await client.DescribeOpenPortTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeSecurityDynamics", async function () {
    try {
       const data = await client.DescribeSecurityDynamics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteReverseShellEvents", async function () {
    try {
       const data = await client.DeleteReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeletePrivilegeRules", async function () {
    try {
       const data = await client.DeletePrivilegeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteMalwares", async function () {
    try {
       const data = await client.DeleteMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeWeeklyReportNonlocalLoginPlaces", async function () {
    try {
       const data = await client.DescribeWeeklyReportNonlocalLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteLoginWhiteList", async function () {
    try {
       const data = await client.DeleteLoginWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.CreateOpenPortTask", async function () {
    try {
       const data = await client.CreateOpenPortTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.CloseProVersion", async function () {
    try {
       const data = await client.CloseProVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeAccountStatistics", async function () {
    try {
       const data = await client.DescribeAccountStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ModifyAlarmAttribute", async function () {
    try {
       const data = await client.ModifyAlarmAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeOpenPortStatistics", async function () {
    try {
       const data = await client.DescribeOpenPortStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportBruteAttacks", async function () {
    try {
       const data = await client.ExportBruteAttacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.TrustMaliciousRequest", async function () {
    try {
       const data = await client.TrustMaliciousRequest({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.SwitchBashRules", async function () {
    try {
       const data = await client.SwitchBashRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.EditPrivilegeRule", async function () {
    try {
       const data = await client.EditPrivilegeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportMalwares", async function () {
    try {
       const data = await client.ExportMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeBruteAttacks", async function () {
    try {
       const data = await client.DescribeBruteAttacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.OpenProVersionPrepaid", async function () {
    try {
       const data = await client.OpenProVersionPrepaid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.AddMachineTag", async function () {
    try {
       const data = await client.AddMachineTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.EditTags", async function () {
    try {
       const data = await client.EditTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.SeparateMalwares", async function () {
    try {
       const data = await client.SeparateMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.AddLoginWhiteList", async function () {
    try {
       const data = await client.AddLoginWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportNonlocalLoginPlaces", async function () {
    try {
       const data = await client.ExportNonlocalLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeMaliciousRequests", async function () {
    try {
       const data = await client.DescribeMaliciousRequests({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteBashRules", async function () {
    try {
       const data = await client.DeleteBashRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeReverseShellEvents", async function () {
    try {
       const data = await client.DescribeReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ModifyAutoOpenProVersionConfig", async function () {
    try {
       const data = await client.ModifyAutoOpenProVersionConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeAgentVuls", async function () {
    try {
       const data = await client.DescribeAgentVuls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeWeeklyReports", async function () {
    try {
       const data = await client.DescribeWeeklyReports({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeProVersionInfo", async function () {
    try {
       const data = await client.DescribeProVersionInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribePrivilegeEvents", async function () {
    try {
       const data = await client.DescribePrivilegeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeMachineInfo", async function () {
    try {
       const data = await client.DescribeMachineInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeAlarmAttribute", async function () {
    try {
       const data = await client.DescribeAlarmAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeComponents", async function () {
    try {
       const data = await client.DescribeComponents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeLoginWhiteList", async function () {
    try {
       const data = await client.DescribeLoginWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeVulScanResult", async function () {
    try {
       const data = await client.DescribeVulScanResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeHistoryAccounts", async function () {
    try {
       const data = await client.DescribeHistoryAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeProcessStatistics", async function () {
    try {
       const data = await client.DescribeProcessStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeWeeklyReportBruteAttacks", async function () {
    try {
       const data = await client.DescribeWeeklyReportBruteAttacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.UntrustMalwares", async function () {
    try {
       const data = await client.UntrustMalwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeWeeklyReportVuls", async function () {
    try {
       const data = await client.DescribeWeeklyReportVuls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeWeeklyReportInfo", async function () {
    try {
       const data = await client.DescribeWeeklyReportInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeComponentInfo", async function () {
    try {
       const data = await client.DescribeComponentInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ModifyProVersionRenewFlag", async function () {
    try {
       const data = await client.ModifyProVersionRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.SetBashEventsStatus", async function () {
    try {
       const data = await client.SetBashEventsStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.ExportReverseShellEvents", async function () {
    try {
       const data = await client.ExportReverseShellEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteAttackLogs", async function () {
    try {
       const data = await client.DeleteAttackLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DeleteMachine", async function () {
    try {
       const data = await client.DeleteMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeProcessTaskStatus", async function () {
    try {
       const data = await client.DescribeProcessTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.RescanImpactedHost", async function () {
    try {
       const data = await client.RescanImpactedHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeTags", async function () {
    try {
       const data = await client.DescribeTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeSecurityTrends", async function () {
    try {
       const data = await client.DescribeSecurityTrends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeAttackLogInfo", async function () {
    try {
       const data = await client.DescribeAttackLogInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.IgnoreImpactedHosts", async function () {
    try {
       const data = await client.IgnoreImpactedHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeBashEvents", async function () {
    try {
       const data = await client.DescribeBashEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.DescribeMachines", async function () {
    try {
       const data = await client.DescribeMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.CreateUsualLoginPlaces", async function () {
    try {
       const data = await client.CreateUsualLoginPlaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yunjing.v20180228.InquiryPriceOpenProVersionPrepaid", async function () {
    try {
       const data = await client.InquiryPriceOpenProVersionPrepaid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
