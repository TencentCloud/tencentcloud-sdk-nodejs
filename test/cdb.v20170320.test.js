
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cdb.v20170320.Client({
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
describe("cdb.v20170320.test.js", function () {

it("cdb.v20170320.DescribeDBInstanceGTID", async function () {
    try {
       const data = await client.DescribeDBInstanceGTID({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateRoInstanceIp", async function () {
    try {
       const data = await client.CreateRoInstanceIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeTimeWindow", async function () {
    try {
       const data = await client.DescribeTimeWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDataBackupOverview", async function () {
    try {
       const data = await client.DescribeDataBackupOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.BalanceRoGroupLoad", async function () {
    try {
       const data = await client.BalanceRoGroupLoad({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.IsolateDBInstance", async function () {
    try {
       const data = await client.IsolateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.RestartDBInstances", async function () {
    try {
       const data = await client.RestartDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyInstanceTag", async function () {
    try {
       const data = await client.ModifyInstanceTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateAuditPolicy", async function () {
    try {
       const data = await client.CreateAuditPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBackupOverview", async function () {
    try {
       const data = await client.DescribeBackupOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.StopReplication", async function () {
    try {
       const data = await client.StopReplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyDBInstanceName", async function () {
    try {
       const data = await client.ModifyDBInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.StopRollback", async function () {
    try {
       const data = await client.StopRollback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.OfflineIsolatedInstances", async function () {
    try {
       const data = await client.OfflineIsolatedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateAuditLogFile", async function () {
    try {
       const data = await client.CreateAuditLogFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.OpenDBInstanceGTID", async function () {
    try {
       const data = await client.OpenDBInstanceGTID({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyCDBProxyDesc", async function () {
    try {
       const data = await client.ModifyCDBProxyDesc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeRollbackTaskDetail", async function () {
    try {
       const data = await client.DescribeRollbackTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyBackupDownloadRestriction", async function () {
    try {
       const data = await client.ModifyBackupDownloadRestriction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBackupConfig", async function () {
    try {
       const data = await client.DescribeBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CloseWanService", async function () {
    try {
       const data = await client.CloseWanService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDefaultParams", async function () {
    try {
       const data = await client.DescribeDefaultParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeAuditPolicies", async function () {
    try {
       const data = await client.DescribeAuditPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeTagsOfInstanceIds", async function () {
    try {
       const data = await client.DescribeTagsOfInstanceIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDatabases", async function () {
    try {
       const data = await client.DescribeDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeErrorLogData", async function () {
    try {
       const data = await client.DescribeErrorLogData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.SwitchDBInstanceMasterSlave", async function () {
    try {
       const data = await client.SwitchDBInstanceMasterSlave({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeTables", async function () {
    try {
       const data = await client.DescribeTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeAccountPrivileges", async function () {
    try {
       const data = await client.DescribeAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ReleaseIsolatedDBInstances", async function () {
    try {
       const data = await client.ReleaseIsolatedDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateCloneInstance", async function () {
    try {
       const data = await client.CreateCloneInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAuditConfig", async function () {
    try {
       const data = await client.ModifyAuditConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyTimeWindow", async function () {
    try {
       const data = await client.ModifyTimeWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteDeployGroups", async function () {
    try {
       const data = await client.DeleteDeployGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.SwitchForUpgrade", async function () {
    try {
       const data = await client.SwitchForUpgrade({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteParamTemplate", async function () {
    try {
       const data = await client.DeleteParamTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBackups", async function () {
    try {
       const data = await client.DescribeBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateParamTemplate", async function () {
    try {
       const data = await client.CreateParamTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateDBInstanceHour", async function () {
    try {
       const data = await client.CreateDBInstanceHour({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.AddTimeWindow", async function () {
    try {
       const data = await client.AddTimeWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDeviceMonitorInfo", async function () {
    try {
       const data = await client.DescribeDeviceMonitorInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateBackup", async function () {
    try {
       const data = await client.CreateBackup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyDBInstanceVipVport", async function () {
    try {
       const data = await client.ModifyDBInstanceVipVport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBInstanceConfig", async function () {
    try {
       const data = await client.DescribeDBInstanceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBackupTables", async function () {
    try {
       const data = await client.DescribeBackupTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteAuditPolicy", async function () {
    try {
       const data = await client.DeleteAuditPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeProjectSecurityGroups", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyCDBProxyConnectionPool", async function () {
    try {
       const data = await client.ModifyCDBProxyConnectionPool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeSlowLogs", async function () {
    try {
       const data = await client.DescribeSlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.InquiryPriceUpgradeInstances", async function () {
    try {
       const data = await client.InquiryPriceUpgradeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyLocalBinlogConfig", async function () {
    try {
       const data = await client.ModifyLocalBinlogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateDBInstance", async function () {
    try {
       const data = await client.CreateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyParamTemplate", async function () {
    try {
       const data = await client.ModifyParamTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeInstanceParams", async function () {
    try {
       const data = await client.DescribeInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyCDBProxy", async function () {
    try {
       const data = await client.ModifyCDBProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeProxyCustomConf", async function () {
    try {
       const data = await client.DescribeProxyCustomConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDeployGroupList", async function () {
    try {
       const data = await client.DescribeDeployGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.StopDBImportJob", async function () {
    try {
       const data = await client.StopDBImportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateAccounts", async function () {
    try {
       const data = await client.CreateAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.UpgradeCDBProxy", async function () {
    try {
       const data = await client.UpgradeCDBProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.UpgradeDBInstanceEngineVersion", async function () {
    try {
       const data = await client.UpgradeDBInstanceEngineVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeAuditLogFiles", async function () {
    try {
       const data = await client.DescribeAuditLogFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeInstanceParamRecords", async function () {
    try {
       const data = await client.DescribeInstanceParamRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBackupSummaries", async function () {
    try {
       const data = await client.DescribeBackupSummaries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeParamTemplateInfo", async function () {
    try {
       const data = await client.DescribeParamTemplateInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBinlogBackupOverview", async function () {
    try {
       const data = await client.DescribeBinlogBackupOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.SwitchDrInstanceToMaster", async function () {
    try {
       const data = await client.SwitchDrInstanceToMaster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteAccounts", async function () {
    try {
       const data = await client.DeleteAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBInstanceInfo", async function () {
    try {
       const data = await client.DescribeDBInstanceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeRollbackRangeTime", async function () {
    try {
       const data = await client.DescribeRollbackRangeTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeParamTemplates", async function () {
    try {
       const data = await client.DescribeParamTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteBackup", async function () {
    try {
       const data = await client.DeleteBackup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyCDBProxyVipVPort", async function () {
    try {
       const data = await client.ModifyCDBProxyVipVPort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeRoMinScale", async function () {
    try {
       const data = await client.DescribeRoMinScale({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAccountHost", async function () {
    try {
       const data = await client.ModifyAccountHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeAuditConfig", async function () {
    try {
       const data = await client.DescribeAuditConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyInstanceParam", async function () {
    try {
       const data = await client.ModifyInstanceParam({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CloseCDBProxy", async function () {
    try {
       const data = await client.CloseCDBProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAccountMaxUserConnections", async function () {
    try {
       const data = await client.ModifyAccountMaxUserConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeAsyncRequestInfo", async function () {
    try {
       const data = await client.DescribeAsyncRequestInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBZoneConfig", async function () {
    try {
       const data = await client.DescribeDBZoneConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBInstanceRebootTime", async function () {
    try {
       const data = await client.DescribeDBInstanceRebootTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBInstances", async function () {
    try {
       const data = await client.DescribeDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyRoGroupInfo", async function () {
    try {
       const data = await client.ModifyRoGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateAuditRule", async function () {
    try {
       const data = await client.CreateAuditRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBInstanceCharset", async function () {
    try {
       const data = await client.DescribeDBInstanceCharset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.InitDBInstances", async function () {
    try {
       const data = await client.InitDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAccountPrivileges", async function () {
    try {
       const data = await client.ModifyAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBImportRecords", async function () {
    try {
       const data = await client.DescribeDBImportRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBSwitchRecords", async function () {
    try {
       const data = await client.DescribeDBSwitchRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateDBImportJob", async function () {
    try {
       const data = await client.CreateDBImportJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ReloadBalanceProxyNode", async function () {
    try {
       const data = await client.ReloadBalanceProxyNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.VerifyRootAccount", async function () {
    try {
       const data = await client.VerifyRootAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBackupDownloadRestriction", async function () {
    try {
       const data = await client.DescribeBackupDownloadRestriction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ResetRootAccount", async function () {
    try {
       const data = await client.ResetRootAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAccountPassword", async function () {
    try {
       const data = await client.ModifyAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeUploadedFiles", async function () {
    try {
       const data = await client.DescribeUploadedFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeCDBProxy", async function () {
    try {
       const data = await client.DescribeCDBProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAccountDescription", async function () {
    try {
       const data = await client.ModifyAccountDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeSlowLogData", async function () {
    try {
       const data = await client.DescribeSlowLogData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.StartReplication", async function () {
    try {
       const data = await client.StartReplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteAuditLogFile", async function () {
    try {
       const data = await client.DeleteAuditLogFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyBackupConfig", async function () {
    try {
       const data = await client.ModifyBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ApplyCDBProxy", async function () {
    try {
       const data = await client.ApplyCDBProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeAuditRules", async function () {
    try {
       const data = await client.DescribeAuditRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBackupDatabases", async function () {
    try {
       const data = await client.DescribeBackupDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBPrice", async function () {
    try {
       const data = await client.DescribeDBPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAutoRenewFlag", async function () {
    try {
       const data = await client.ModifyAutoRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.SwitchCDBProxy", async function () {
    try {
       const data = await client.SwitchCDBProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.RenewDBInstance", async function () {
    try {
       const data = await client.RenewDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.StartBatchRollback", async function () {
    try {
       const data = await client.StartBatchRollback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyDBInstanceProject", async function () {
    try {
       const data = await client.ModifyDBInstanceProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeLocalBinlogConfig", async function () {
    try {
       const data = await client.DescribeLocalBinlogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.OpenWanService", async function () {
    try {
       const data = await client.OpenWanService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyAuditRule", async function () {
    try {
       const data = await client.ModifyAuditRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.QueryCDBProxy", async function () {
    try {
       const data = await client.QueryCDBProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyDBInstanceSecurityGroups", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteAuditRule", async function () {
    try {
       const data = await client.DeleteAuditRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeProxyConnectionPoolConf", async function () {
    try {
       const data = await client.DescribeProxyConnectionPoolConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeSupportedPrivileges", async function () {
    try {
       const data = await client.DescribeSupportedPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.UpgradeCDBProxyVersion", async function () {
    try {
       const data = await client.UpgradeCDBProxyVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeBinlogs", async function () {
    try {
       const data = await client.DescribeBinlogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeDBSecurityGroups", async function () {
    try {
       const data = await client.DescribeDBSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeRoGroups", async function () {
    try {
       const data = await client.DescribeRoGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DescribeCloneList", async function () {
    try {
       const data = await client.DescribeCloneList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.ModifyNameOrDescByDpId", async function () {
    try {
       const data = await client.ModifyNameOrDescByDpId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.UpgradeDBInstance", async function () {
    try {
       const data = await client.UpgradeDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.CreateDeployGroup", async function () {
    try {
       const data = await client.CreateDeployGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdb.v20170320.DeleteTimeWindow", async function () {
    try {
       const data = await client.DeleteTimeWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
