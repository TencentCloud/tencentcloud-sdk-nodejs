
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cdwdoris.v20211228.Client({
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
describe("cdwdoris.v20211228.test.js", function () {

it("cdwdoris.v20211228.CreateBackUpSchedule", async function () {
    try {
       const data = await client.CreateBackUpSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.OpenCoolDownPolicy", async function () {
    try {
       const data = await client.OpenCoolDownPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeBackUpSchedules", async function () {
    try {
       const data = await client.DescribeBackUpSchedules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeBackUpJob", async function () {
    try {
       const data = await client.DescribeBackUpJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DestroyInstance", async function () {
    try {
       const data = await client.DestroyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeCoolDownTableData", async function () {
    try {
       const data = await client.DescribeCoolDownTableData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeDatabaseAuditRecords", async function () {
    try {
       const data = await client.DescribeDatabaseAuditRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeRestoreTaskDetail", async function () {
    try {
       const data = await client.DescribeRestoreTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.CreateWorkloadGroup", async function () {
    try {
       const data = await client.CreateWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeDatabaseAuditDownload", async function () {
    try {
       const data = await client.DescribeDatabaseAuditDownload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeUserBindWorkloadGroup", async function () {
    try {
       const data = await client.DescribeUserBindWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceNodesInfo", async function () {
    try {
       const data = await client.DescribeInstanceNodesInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceUsedSubnets", async function () {
    try {
       const data = await client.DescribeInstanceUsedSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeTableList", async function () {
    try {
       const data = await client.DescribeTableList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeBackUpTables", async function () {
    try {
       const data = await client.DescribeBackUpTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ScaleOutInstance", async function () {
    try {
       const data = await client.ScaleOutInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyNodeStatus", async function () {
    try {
       const data = await client.ModifyNodeStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeClusterConfigsHistory", async function () {
    try {
       const data = await client.DescribeClusterConfigsHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeSlowQueryRecords", async function () {
    try {
       const data = await client.DescribeSlowQueryRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.RecoverBackUpJob", async function () {
    try {
       const data = await client.RecoverBackUpJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyUserBindWorkloadGroup", async function () {
    try {
       const data = await client.ModifyUserBindWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DeleteBackUpData", async function () {
    try {
       const data = await client.DeleteBackUpData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ResizeDisk", async function () {
    try {
       const data = await client.ResizeDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.CreateCoolDownPolicy", async function () {
    try {
       const data = await client.CreateCoolDownPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.UpdateCoolDown", async function () {
    try {
       const data = await client.UpdateCoolDown({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceState", async function () {
    try {
       const data = await client.DescribeInstanceState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeClusterConfigs", async function () {
    try {
       const data = await client.DescribeClusterConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DeleteWorkloadGroup", async function () {
    try {
       const data = await client.DeleteWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyClusterConfigs", async function () {
    try {
       const data = await client.ModifyClusterConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifySecurityGroups", async function () {
    try {
       const data = await client.ModifySecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeCoolDownBackends", async function () {
    try {
       const data = await client.DescribeCoolDownBackends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ScaleUpInstance", async function () {
    try {
       const data = await client.ScaleUpInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ReduceInstance", async function () {
    try {
       const data = await client.ReduceInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyUserPrivilegesV3", async function () {
    try {
       const data = await client.ModifyUserPrivilegesV3({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceOperations", async function () {
    try {
       const data = await client.DescribeInstanceOperations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyWorkloadGroupStatus", async function () {
    try {
       const data = await client.ModifyWorkloadGroupStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyCoolDownPolicy", async function () {
    try {
       const data = await client.ModifyCoolDownPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ActionAlterUser", async function () {
    try {
       const data = await client.ActionAlterUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeSqlApis", async function () {
    try {
       const data = await client.DescribeSqlApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeBackUpTaskDetail", async function () {
    try {
       const data = await client.DescribeBackUpTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstance", async function () {
    try {
       const data = await client.DescribeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.CreateInstanceNew", async function () {
    try {
       const data = await client.CreateInstanceNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyWorkloadGroup", async function () {
    try {
       const data = await client.ModifyWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.CancelBackupJob", async function () {
    try {
       const data = await client.CancelBackupJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeBackUpJobDetail", async function () {
    try {
       const data = await client.DescribeBackUpJobDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.CheckCoolDownWorkingVariableConfigCorrect", async function () {
    try {
       const data = await client.CheckCoolDownWorkingVariableConfigCorrect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceNodesRole", async function () {
    try {
       const data = await client.DescribeInstanceNodesRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.RestartClusterForConfigs", async function () {
    try {
       const data = await client.RestartClusterForConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeSpec", async function () {
    try {
       const data = await client.DescribeSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeAreaRegion", async function () {
    try {
       const data = await client.DescribeAreaRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.OpenCoolDown", async function () {
    try {
       const data = await client.OpenCoolDown({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstancesHealthState", async function () {
    try {
       const data = await client.DescribeInstancesHealthState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.RestartClusterForNode", async function () {
    try {
       const data = await client.RestartClusterForNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeSlowQueryRecordsDownload", async function () {
    try {
       const data = await client.DescribeSlowQueryRecordsDownload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceNodes", async function () {
    try {
       const data = await client.DescribeInstanceNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeCoolDownPolicies", async function () {
    try {
       const data = await client.DescribeCoolDownPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeWorkloadGroup", async function () {
    try {
       const data = await client.DescribeWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyInstance", async function () {
    try {
       const data = await client.ModifyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyInstanceKeyValConfigs", async function () {
    try {
       const data = await client.ModifyInstanceKeyValConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
