
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mariadb.v20170312.Client({
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
describe("mariadb.v20170312.test.js", function () {

it("mariadb.v20170312.DescribeAccountPrivileges", async function () {
    try {
       const data = await client.DescribeAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeRenewalPrice", async function () {
    try {
       const data = await client.DescribeRenewalPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CreateHourDBInstance", async function () {
    try {
       const data = await client.CreateHourDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeInstanceNodeInfo", async function () {
    try {
       const data = await client.DescribeInstanceNodeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDatabaseObjects", async function () {
    try {
       const data = await client.DescribeDatabaseObjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyBackupTime", async function () {
    try {
       const data = await client.ModifyBackupTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyInstanceVport", async function () {
    try {
       const data = await client.ModifyInstanceVport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeSaleInfo", async function () {
    try {
       const data = await client.DescribeSaleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyAccountDescription", async function () {
    try {
       const data = await client.ModifyAccountDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DestroyDBInstance", async function () {
    try {
       const data = await client.DestroyDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.SwitchDBInstanceHA", async function () {
    try {
       const data = await client.SwitchDBInstanceHA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeFileDownloadUrl", async function () {
    try {
       const data = await client.DescribeFileDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeBackupTime", async function () {
    try {
       const data = await client.DescribeBackupTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeInstanceSSLAttributes", async function () {
    try {
       const data = await client.DescribeInstanceSSLAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ActivateHourDBInstance", async function () {
    try {
       const data = await client.ActivateHourDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ResetAccountPassword", async function () {
    try {
       const data = await client.ResetAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyDBParameters", async function () {
    try {
       const data = await client.ModifyDBParameters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.KillSession", async function () {
    try {
       const data = await client.KillSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyInstanceSSLAttributes", async function () {
    try {
       const data = await client.ModifyInstanceSSLAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBSlowLogs", async function () {
    try {
       const data = await client.DescribeDBSlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeFlow", async function () {
    try {
       const data = await client.DescribeFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CreateDedicatedClusterDBInstance", async function () {
    try {
       const data = await client.CreateDedicatedClusterDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyDBInstanceName", async function () {
    try {
       const data = await client.ModifyDBInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.IsolateDedicatedDBInstance", async function () {
    try {
       const data = await client.IsolateDedicatedDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeOrders", async function () {
    try {
       const data = await client.DescribeOrders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifySyncTaskAttribute", async function () {
    try {
       const data = await client.ModifySyncTaskAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DeleteAccount", async function () {
    try {
       const data = await client.DeleteAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBParameters", async function () {
    try {
       const data = await client.DescribeDBParameters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyDBInstancesProject", async function () {
    try {
       const data = await client.ModifyDBInstancesProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.RestartDBInstances", async function () {
    try {
       const data = await client.RestartDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyInstanceVip", async function () {
    try {
       const data = await client.ModifyInstanceVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.IsolateDBInstance", async function () {
    try {
       const data = await client.IsolateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBLogFiles", async function () {
    try {
       const data = await client.DescribeDBLogFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyRealServerAccessStrategy", async function () {
    try {
       const data = await client.ModifyRealServerAccessStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyInstanceProtectedProperty", async function () {
    try {
       const data = await client.ModifyInstanceProtectedProperty({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyInstanceNetwork", async function () {
    try {
       const data = await client.ModifyInstanceNetwork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DestroyHourDBInstance", async function () {
    try {
       const data = await client.DestroyHourDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBInstanceSpecs", async function () {
    try {
       const data = await client.DescribeDBInstanceSpecs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBInstances", async function () {
    try {
       const data = await client.DescribeDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.RenewDBInstance", async function () {
    try {
       const data = await client.RenewDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeUpgradePrice", async function () {
    try {
       const data = await client.DescribeUpgradePrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeProjectSecurityGroups", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CreateAccount", async function () {
    try {
       const data = await client.CreateAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.OpenDBExtranetAccess", async function () {
    try {
       const data = await client.OpenDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.InitDBInstances", async function () {
    try {
       const data = await client.InitDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.UpgradeDedicatedDBInstance", async function () {
    try {
       const data = await client.UpgradeDedicatedDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CreateDBInstance", async function () {
    try {
       const data = await client.CreateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyAccountPrivileges", async function () {
    try {
       const data = await client.ModifyAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyDBInstanceSecurityGroups", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyDBSyncMode", async function () {
    try {
       const data = await client.ModifyDBSyncMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CloseDBExtranetAccess", async function () {
    try {
       const data = await client.CloseDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CreateTmpInstances", async function () {
    try {
       const data = await client.CreateTmpInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeBackupFiles", async function () {
    try {
       const data = await client.DescribeBackupFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyDBEncryptAttributes", async function () {
    try {
       const data = await client.ModifyDBEncryptAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDcnDetail", async function () {
    try {
       const data = await client.DescribeDcnDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.FlushBinlog", async function () {
    try {
       const data = await client.FlushBinlog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.GrantAccountPrivileges", async function () {
    try {
       const data = await client.GrantAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CopyAccountPrivileges", async function () {
    try {
       const data = await client.CopyAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBTmpInstances", async function () {
    try {
       const data = await client.DescribeDBTmpInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBSyncMode", async function () {
    try {
       const data = await client.DescribeDBSyncMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDatabases", async function () {
    try {
       const data = await client.DescribeDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribePrice", async function () {
    try {
       const data = await client.DescribePrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeBinlogTime", async function () {
    try {
       const data = await client.DescribeBinlogTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.TerminateDedicatedDBInstance", async function () {
    try {
       const data = await client.TerminateDedicatedDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBSecurityGroups", async function () {
    try {
       const data = await client.DescribeDBSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.UpgradeHourDBInstance", async function () {
    try {
       const data = await client.UpgradeHourDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDatabaseTable", async function () {
    try {
       const data = await client.DescribeDatabaseTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CancelDcnJob", async function () {
    try {
       const data = await client.CancelDcnJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeBackupConfigs", async function () {
    try {
       const data = await client.DescribeBackupConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.CloneAccount", async function () {
    try {
       const data = await client.CloneAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.IsolateHourDBInstance", async function () {
    try {
       const data = await client.IsolateHourDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.UpgradeDBInstance", async function () {
    try {
       const data = await client.UpgradeDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeProcessList", async function () {
    try {
       const data = await client.DescribeProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyBackupConfigs", async function () {
    try {
       const data = await client.ModifyBackupConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBInstanceDetail", async function () {
    try {
       const data = await client.DescribeDBInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeLogFileRetentionPeriod", async function () {
    try {
       const data = await client.DescribeLogFileRetentionPeriod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.DescribeDBEncryptAttributes", async function () {
    try {
       const data = await client.DescribeDBEncryptAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mariadb.v20170312.ModifyLogFileRetentionPeriod", async function () {
    try {
       const data = await client.ModifyLogFileRetentionPeriod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
