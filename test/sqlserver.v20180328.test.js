
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.sqlserver.v20180328.Client({
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
describe("sqlserver.v20180328.test.js", function () {

it("sqlserver.v20180328.DescribeMigrations", async function () {
    try {
       const data = await client.DescribeMigrations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RecycleReadOnlyGroup", async function () {
    try {
       const data = await client.RecycleReadOnlyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDBInstanceRenewFlag", async function () {
    try {
       const data = await client.ModifyDBInstanceRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.StartIncrementalMigration", async function () {
    try {
       const data = await client.StartIncrementalMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.QueryMigrationCheckProcess", async function () {
    try {
       const data = await client.QueryMigrationCheckProcess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyAccountRemark", async function () {
    try {
       const data = await client.ModifyAccountRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDBInstanceName", async function () {
    try {
       const data = await client.ModifyDBInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeUploadIncrementalInfo", async function () {
    try {
       const data = await client.DescribeUploadIncrementalInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDatabaseMdf", async function () {
    try {
       const data = await client.ModifyDatabaseMdf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDBRemark", async function () {
    try {
       const data = await client.ModifyDBRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DeleteIncrementalMigration", async function () {
    try {
       const data = await client.DeleteIncrementalMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDBInstanceNetwork", async function () {
    try {
       const data = await client.ModifyDBInstanceNetwork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDBInstanceSecurityGroups", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyMaintenanceSpan", async function () {
    try {
       const data = await client.ModifyMaintenanceSpan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeReadOnlyGroupDetails", async function () {
    try {
       const data = await client.DescribeReadOnlyGroupDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreatePublishSubscribe", async function () {
    try {
       const data = await client.CreatePublishSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeBackupFiles", async function () {
    try {
       const data = await client.DescribeBackupFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeMaintenanceSpan", async function () {
    try {
       const data = await client.DescribeMaintenanceSpan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribePublishSubscribe", async function () {
    try {
       const data = await client.DescribePublishSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeReadOnlyGroupList", async function () {
    try {
       const data = await client.DescribeReadOnlyGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeMigrationDetail", async function () {
    try {
       const data = await client.DescribeMigrationDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeUploadBackupInfo", async function () {
    try {
       const data = await client.DescribeUploadBackupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeProductConfig", async function () {
    try {
       const data = await client.DescribeProductConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.TerminateDBInstance", async function () {
    try {
       const data = await client.TerminateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DeleteDBInstance", async function () {
    try {
       const data = await client.DeleteDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDBName", async function () {
    try {
       const data = await client.ModifyDBName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.InquiryPriceCreateDBInstances", async function () {
    try {
       const data = await client.InquiryPriceCreateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeCrossRegionZone", async function () {
    try {
       const data = await client.DescribeCrossRegionZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDatabaseCT", async function () {
    try {
       const data = await client.ModifyDatabaseCT({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeBackups", async function () {
    try {
       const data = await client.DescribeBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyPublishSubscribeName", async function () {
    try {
       const data = await client.ModifyPublishSubscribeName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RenewPostpaidDBInstance", async function () {
    try {
       const data = await client.RenewPostpaidDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeIncrementalMigration", async function () {
    try {
       const data = await client.DescribeIncrementalMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateBackup", async function () {
    try {
       const data = await client.CreateBackup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeBackupMigration", async function () {
    try {
       const data = await client.DescribeBackupMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDatabaseCDC", async function () {
    try {
       const data = await client.ModifyDatabaseCDC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeProjectSecurityGroups", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateAccount", async function () {
    try {
       const data = await client.CreateAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.StopMigration", async function () {
    try {
       const data = await client.StopMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeInstanceParams", async function () {
    try {
       const data = await client.DescribeInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CompleteExpansion", async function () {
    try {
       const data = await client.CompleteExpansion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateDB", async function () {
    try {
       const data = await client.CreateDB({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.StartBackupMigration", async function () {
    try {
       const data = await client.StartBackupMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RestoreInstance", async function () {
    try {
       const data = await client.RestoreInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeInstanceParamRecords", async function () {
    try {
       const data = await client.DescribeInstanceParamRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.StartMigrationCheck", async function () {
    try {
       const data = await client.StartMigrationCheck({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeDBCharsets", async function () {
    try {
       const data = await client.DescribeDBCharsets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DeletePublishSubscribe", async function () {
    try {
       const data = await client.DeletePublishSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ResetAccountPassword", async function () {
    try {
       const data = await client.ResetAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyInstanceParam", async function () {
    try {
       const data = await client.ModifyInstanceParam({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeSlowlogs", async function () {
    try {
       const data = await client.DescribeSlowlogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DeleteDB", async function () {
    try {
       const data = await client.DeleteDB({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeFlowStatus", async function () {
    try {
       const data = await client.DescribeFlowStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateBasicDBInstances", async function () {
    try {
       const data = await client.CreateBasicDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RestartDBInstance", async function () {
    try {
       const data = await client.RestartDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateDBInstances", async function () {
    try {
       const data = await client.CreateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateMigration", async function () {
    try {
       const data = await client.CreateMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateBackupMigration", async function () {
    try {
       const data = await client.CreateBackupMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeDBInstances", async function () {
    try {
       const data = await client.DescribeDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateIncrementalMigration", async function () {
    try {
       const data = await client.CreateIncrementalMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeBackupUploadSize", async function () {
    try {
       const data = await client.DescribeBackupUploadSize({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DeleteMigration", async function () {
    try {
       const data = await client.DeleteMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyBackupName", async function () {
    try {
       const data = await client.ModifyBackupName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyIncrementalMigration", async function () {
    try {
       const data = await client.ModifyIncrementalMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RemoveBackups", async function () {
    try {
       const data = await client.RemoveBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeMigrationDatabases", async function () {
    try {
       const data = await client.DescribeMigrationDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RunMigration", async function () {
    try {
       const data = await client.RunMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CreateReadOnlyDBInstances", async function () {
    try {
       const data = await client.CreateReadOnlyDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyMigration", async function () {
    try {
       const data = await client.ModifyMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeOrders", async function () {
    try {
       const data = await client.DescribeOrders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RecycleDBInstance", async function () {
    try {
       const data = await client.RecycleDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CloneDB", async function () {
    try {
       const data = await client.CloneDB({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyDBInstanceProject", async function () {
    try {
       const data = await client.ModifyDBInstanceProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DeleteAccount", async function () {
    try {
       const data = await client.DeleteAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyBackupStrategy", async function () {
    try {
       const data = await client.ModifyBackupStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeDBsNormal", async function () {
    try {
       const data = await client.DescribeDBsNormal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyAccountPrivilege", async function () {
    try {
       const data = await client.ModifyAccountPrivilege({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RollbackInstance", async function () {
    try {
       const data = await client.RollbackInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeDBs", async function () {
    try {
       const data = await client.DescribeDBs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeBackupCommand", async function () {
    try {
       const data = await client.DescribeBackupCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.RenewDBInstance", async function () {
    try {
       const data = await client.RenewDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.InquiryPriceUpgradeDBInstance", async function () {
    try {
       const data = await client.InquiryPriceUpgradeDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.InquiryPriceRenewDBInstance", async function () {
    try {
       const data = await client.InquiryPriceRenewDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyBackupMigration", async function () {
    try {
       const data = await client.ModifyBackupMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.CompleteMigration", async function () {
    try {
       const data = await client.CompleteMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeBackupByFlowId", async function () {
    try {
       const data = await client.DescribeBackupByFlowId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeRollbackTime", async function () {
    try {
       const data = await client.DescribeRollbackTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeDBSecurityGroups", async function () {
    try {
       const data = await client.DescribeDBSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DeleteBackupMigration", async function () {
    try {
       const data = await client.DeleteBackupMigration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.UpgradeDBInstance", async function () {
    try {
       const data = await client.UpgradeDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.ModifyReadOnlyGroupDetails", async function () {
    try {
       const data = await client.ModifyReadOnlyGroupDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sqlserver.v20180328.DescribeReadOnlyGroupByReadOnlyInstance", async function () {
    try {
       const data = await client.DescribeReadOnlyGroupByReadOnlyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
