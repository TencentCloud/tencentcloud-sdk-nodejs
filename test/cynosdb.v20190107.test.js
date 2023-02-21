
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cynosdb.v20190107.Client({
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
describe("cynosdb.v20190107.test.js", function () {

it("cynosdb.v20190107.ModifyAuditService", async function () {
    try {
       const data = await client.ModifyAuditService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.OfflineInstance", async function () {
    try {
       const data = await client.OfflineInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeBackupList", async function () {
    try {
       const data = await client.DescribeBackupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.RevokeAccountPrivileges", async function () {
    try {
       const data = await client.RevokeAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.RollBackCluster", async function () {
    try {
       const data = await client.RollBackCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeProjectSecurityGroups", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeBinlogSaveDays", async function () {
    try {
       const data = await client.DescribeBinlogSaveDays({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeInstanceSpecs", async function () {
    try {
       const data = await client.DescribeInstanceSpecs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.AddClusterSlaveZone", async function () {
    try {
       const data = await client.AddClusterSlaveZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeParamTemplates", async function () {
    try {
       const data = await client.DescribeParamTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DeleteBackup", async function () {
    try {
       const data = await client.DeleteBackup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeClusterInstanceGrps", async function () {
    try {
       const data = await client.DescribeClusterInstanceGrps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyVipVport", async function () {
    try {
       const data = await client.ModifyVipVport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.OpenAuditService", async function () {
    try {
       const data = await client.OpenAuditService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.CreateAuditRuleTemplate", async function () {
    try {
       const data = await client.CreateAuditRuleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyBackupName", async function () {
    try {
       const data = await client.ModifyBackupName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DeleteAuditLogFile", async function () {
    try {
       const data = await client.DeleteAuditLogFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ResetAccountPassword", async function () {
    try {
       const data = await client.ResetAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeInstanceDetail", async function () {
    try {
       const data = await client.DescribeInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeAuditRuleTemplates", async function () {
    try {
       const data = await client.DescribeAuditRuleTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeRollbackTimeRange", async function () {
    try {
       const data = await client.DescribeRollbackTimeRange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeFlow", async function () {
    try {
       const data = await client.DescribeFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyBackupConfig", async function () {
    try {
       const data = await client.ModifyBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DeleteAuditRuleTemplates", async function () {
    try {
       const data = await client.DeleteAuditRuleTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeClusterParamLogs", async function () {
    try {
       const data = await client.DescribeClusterParamLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyMaintainPeriodConfig", async function () {
    try {
       const data = await client.ModifyMaintainPeriodConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeAuditLogs", async function () {
    try {
       const data = await client.DescribeAuditLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyClusterSlaveZone", async function () {
    try {
       const data = await client.ModifyClusterSlaveZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyAccountParams", async function () {
    try {
       const data = await client.ModifyAccountParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeClusterParams", async function () {
    try {
       const data = await client.DescribeClusterParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.CreateBackup", async function () {
    try {
       const data = await client.CreateBackup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.CloseAuditService", async function () {
    try {
       const data = await client.CloseAuditService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyInstanceName", async function () {
    try {
       const data = await client.ModifyInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeMaintainPeriod", async function () {
    try {
       const data = await client.DescribeMaintainPeriod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ResumeServerless", async function () {
    try {
       const data = await client.ResumeServerless({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.RestartInstance", async function () {
    try {
       const data = await client.RestartInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeClusters", async function () {
    try {
       const data = await client.DescribeClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.CreateAuditLogFile", async function () {
    try {
       const data = await client.CreateAuditLogFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.IsolateCluster", async function () {
    try {
       const data = await client.IsolateCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.InquirePriceCreate", async function () {
    try {
       const data = await client.InquirePriceCreate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeBackupDownloadUrl", async function () {
    try {
       const data = await client.DescribeBackupDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.SwitchClusterVpc", async function () {
    try {
       const data = await client.SwitchClusterVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.RemoveClusterSlaveZone", async function () {
    try {
       const data = await client.RemoveClusterSlaveZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyClusterName", async function () {
    try {
       const data = await client.ModifyClusterName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.SwitchProxyVpc", async function () {
    try {
       const data = await client.SwitchProxyVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeClusterDetail", async function () {
    try {
       const data = await client.DescribeClusterDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeAuditRuleWithInstanceIds", async function () {
    try {
       const data = await client.DescribeAuditRuleWithInstanceIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.IsolateInstance", async function () {
    try {
       const data = await client.IsolateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeBackupConfig", async function () {
    try {
       const data = await client.DescribeBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeAccountAllGrantPrivileges", async function () {
    try {
       const data = await client.DescribeAccountAllGrantPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.InquirePriceRenew", async function () {
    try {
       const data = await client.InquirePriceRenew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeBinlogDownloadUrl", async function () {
    try {
       const data = await client.DescribeBinlogDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeResourcesByDealName", async function () {
    try {
       const data = await client.DescribeResourcesByDealName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ExportInstanceSlowQueries", async function () {
    try {
       const data = await client.ExportInstanceSlowQueries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.PauseServerless", async function () {
    try {
       const data = await client.PauseServerless({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyClusterParam", async function () {
    try {
       const data = await client.ModifyClusterParam({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.UpgradeInstance", async function () {
    try {
       const data = await client.UpgradeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.CreateClusters", async function () {
    try {
       const data = await client.CreateClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeBinlogs", async function () {
    try {
       const data = await client.DescribeBinlogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.CreateAccounts", async function () {
    try {
       const data = await client.CreateAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyClusterStorage", async function () {
    try {
       const data = await client.ModifyClusterStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ActivateInstance", async function () {
    try {
       const data = await client.ActivateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeDBSecurityGroups", async function () {
    try {
       const data = await client.DescribeDBSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeAuditLogFiles", async function () {
    try {
       const data = await client.DescribeAuditLogFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.SetRenewFlag", async function () {
    try {
       const data = await client.SetRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.OfflineCluster", async function () {
    try {
       const data = await client.OfflineCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyAuditRuleTemplates", async function () {
    try {
       const data = await client.ModifyAuditRuleTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.GrantAccountPrivileges", async function () {
    try {
       const data = await client.GrantAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.SearchClusterTables", async function () {
    try {
       const data = await client.SearchClusterTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.SwitchClusterZone", async function () {
    try {
       const data = await client.SwitchClusterZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.SearchClusterDatabases", async function () {
    try {
       const data = await client.SearchClusterDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeInstanceSlowQueries", async function () {
    try {
       const data = await client.DescribeInstanceSlowQueries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.DescribeRollbackTimeValidity", async function () {
    try {
       const data = await client.DescribeRollbackTimeValidity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.ModifyDBInstanceSecurityGroups", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cynosdb.v20190107.AddInstances", async function () {
    try {
       const data = await client.AddInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
