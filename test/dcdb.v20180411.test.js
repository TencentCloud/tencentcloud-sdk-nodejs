
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dcdb.v20180411.Client({
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
describe("dcdb.v20180411.test.js", function () {

it("dcdb.v20180411.DescribeAccountPrivileges", async function () {
    try {
       const data = await client.DescribeAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyAccountConfig", async function () {
    try {
       const data = await client.ModifyAccountConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.UpgradeDedicatedDCDBInstance", async function () {
    try {
       const data = await client.UpgradeDedicatedDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ActiveHourDCDBInstance", async function () {
    try {
       const data = await client.ActiveHourDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDatabaseObjects", async function () {
    try {
       const data = await client.DescribeDatabaseObjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDatabaseTable", async function () {
    try {
       const data = await client.DescribeDatabaseTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeShardSpec", async function () {
    try {
       const data = await client.DescribeShardSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ResetAccountPassword", async function () {
    try {
       const data = await client.ResetAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyInstanceVip", async function () {
    try {
       const data = await client.ModifyInstanceVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBInstances", async function () {
    try {
       const data = await client.DescribeDCDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyRealServerAccessStrategy", async function () {
    try {
       const data = await client.ModifyRealServerAccessStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeFileDownloadUrl", async function () {
    try {
       const data = await client.DescribeFileDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyAccountDescription", async function () {
    try {
       const data = await client.ModifyAccountDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeInstanceSSLAttributes", async function () {
    try {
       const data = await client.DescribeInstanceSSLAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeUserTasks", async function () {
    try {
       const data = await client.DescribeUserTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBPrice", async function () {
    try {
       const data = await client.DescribeDCDBPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyDBParameters", async function () {
    try {
       const data = await client.ModifyDBParameters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBSaleInfo", async function () {
    try {
       const data = await client.DescribeDCDBSaleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDBSlowLogs", async function () {
    try {
       const data = await client.DescribeDBSlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeFlow", async function () {
    try {
       const data = await client.DescribeFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.SwitchDBInstanceHA", async function () {
    try {
       const data = await client.SwitchDBInstanceHA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.InitDCDBInstances", async function () {
    try {
       const data = await client.InitDCDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBInstanceDetail", async function () {
    try {
       const data = await client.DescribeDCDBInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CreateDedicatedClusterDCDBInstance", async function () {
    try {
       const data = await client.CreateDedicatedClusterDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.RenewDCDBInstance", async function () {
    try {
       const data = await client.RenewDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DeleteAccount", async function () {
    try {
       const data = await client.DeleteAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDBParameters", async function () {
    try {
       const data = await client.DescribeDBParameters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyDBInstancesProject", async function () {
    try {
       const data = await client.ModifyDBInstancesProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CreateTmpDCDBInstance", async function () {
    try {
       const data = await client.CreateTmpDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeOnlineDDLJob", async function () {
    try {
       const data = await client.DescribeOnlineDDLJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDBLogFiles", async function () {
    try {
       const data = await client.DescribeDBLogFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyDBInstanceSecurityGroups", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyInstanceProtectedProperty", async function () {
    try {
       const data = await client.ModifyInstanceProtectedProperty({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.IsolateHourDCDBInstance", async function () {
    try {
       const data = await client.IsolateHourDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.UpgradeHourDCDBInstance", async function () {
    try {
       const data = await client.UpgradeHourDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDBSyncMode", async function () {
    try {
       const data = await client.DescribeDBSyncMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.UpgradeDCDBInstance", async function () {
    try {
       const data = await client.UpgradeDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBBinlogTime", async function () {
    try {
       const data = await client.DescribeDCDBBinlogTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeProjectSecurityGroups", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CreateAccount", async function () {
    try {
       const data = await client.CreateAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyInstanceNetwork", async function () {
    try {
       const data = await client.ModifyInstanceNetwork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.KillSession", async function () {
    try {
       const data = await client.KillSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.OpenDBExtranetAccess", async function () {
    try {
       const data = await client.OpenDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyAccountPrivileges", async function () {
    try {
       const data = await client.ModifyAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DestroyDCDBInstance", async function () {
    try {
       const data = await client.DestroyDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBInstanceNodeInfo", async function () {
    try {
       const data = await client.DescribeDCDBInstanceNodeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyDBSyncMode", async function () {
    try {
       const data = await client.ModifyDBSyncMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeLogFileRetentionPeriod", async function () {
    try {
       const data = await client.DescribeLogFileRetentionPeriod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CloseDBExtranetAccess", async function () {
    try {
       const data = await client.CloseDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyInstanceSSLAttributes", async function () {
    try {
       const data = await client.ModifyInstanceSSLAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeBackupFiles", async function () {
    try {
       const data = await client.DescribeBackupFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyDBEncryptAttributes", async function () {
    try {
       const data = await client.ModifyDBEncryptAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DestroyHourDCDBInstance", async function () {
    try {
       const data = await client.DestroyHourDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDcnDetail", async function () {
    try {
       const data = await client.DescribeDcnDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.FlushBinlog", async function () {
    try {
       const data = await client.FlushBinlog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.GrantAccountPrivileges", async function () {
    try {
       const data = await client.GrantAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CancelOnlineDDLJob", async function () {
    try {
       const data = await client.CancelOnlineDDLJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CopyAccountPrivileges", async function () {
    try {
       const data = await client.CopyAccountPrivileges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDBTmpInstances", async function () {
    try {
       const data = await client.DescribeDBTmpInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBShards", async function () {
    try {
       const data = await client.DescribeDCDBShards({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDatabases", async function () {
    try {
       const data = await client.DescribeDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CreateDCDBInstance", async function () {
    try {
       const data = await client.CreateDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeProjects", async function () {
    try {
       const data = await client.DescribeProjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.IsolateDCDBInstance", async function () {
    try {
       const data = await client.IsolateDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyInstanceVport", async function () {
    try {
       const data = await client.ModifyInstanceVport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.TerminateDedicatedDBInstance", async function () {
    try {
       const data = await client.TerminateDedicatedDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDBSecurityGroups", async function () {
    try {
       const data = await client.DescribeDBSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.IsolateDedicatedDBInstance", async function () {
    try {
       const data = await client.IsolateDedicatedDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBUpgradePrice", async function () {
    try {
       const data = await client.DescribeDCDBUpgradePrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CancelDcnJob", async function () {
    try {
       const data = await client.CancelDcnJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeBackupConfigs", async function () {
    try {
       const data = await client.DescribeBackupConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CloneAccount", async function () {
    try {
       const data = await client.CloneAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CreateOnlineDDLJob", async function () {
    try {
       const data = await client.CreateOnlineDDLJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeProcessList", async function () {
    try {
       const data = await client.DescribeProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyBackupConfigs", async function () {
    try {
       const data = await client.ModifyBackupConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.ModifyDBInstanceName", async function () {
    try {
       const data = await client.ModifyDBInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.CreateHourDCDBInstance", async function () {
    try {
       const data = await client.CreateHourDCDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDBEncryptAttributes", async function () {
    try {
       const data = await client.DescribeDBEncryptAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeDCDBRenewalPrice", async function () {
    try {
       const data = await client.DescribeDCDBRenewalPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dcdb.v20180411.DescribeOrders", async function () {
    try {
       const data = await client.DescribeOrders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
