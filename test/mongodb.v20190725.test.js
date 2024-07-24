
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mongodb.v20190725.Client({
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
describe("mongodb.v20190725.test.js", function () {

it("mongodb.v20190725.TerminateDBInstances", async function () {
    try {
       const data = await client.TerminateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBInstanceNodeProperty", async function () {
    try {
       const data = await client.DescribeDBInstanceNodeProperty({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBInstanceParamTpl", async function () {
    try {
       const data = await client.DescribeDBInstanceParamTpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBInstanceDeal", async function () {
    try {
       const data = await client.DescribeDBInstanceDeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeCurrentOp", async function () {
    try {
       const data = await client.DescribeCurrentOp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeClientConnections", async function () {
    try {
       const data = await client.DescribeClientConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ResetDBInstancePassword", async function () {
    try {
       const data = await client.ResetDBInstancePassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeSecurityGroup", async function () {
    try {
       const data = await client.DescribeSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.SetAccountUserPrivilege", async function () {
    try {
       const data = await client.SetAccountUserPrivilege({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.FlushInstanceRouterConfig", async function () {
    try {
       const data = await client.FlushInstanceRouterConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBBackups", async function () {
    try {
       const data = await client.DescribeDBBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.IsolateDBInstance", async function () {
    try {
       const data = await client.IsolateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.SetBackupRules", async function () {
    try {
       const data = await client.SetBackupRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.InquirePriceModifyDBInstanceSpec", async function () {
    try {
       const data = await client.InquirePriceModifyDBInstanceSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.RestartNodes", async function () {
    try {
       const data = await client.RestartNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeBackupRules", async function () {
    try {
       const data = await client.DescribeBackupRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.RenameInstance", async function () {
    try {
       const data = await client.RenameInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeAsyncRequestInfo", async function () {
    try {
       const data = await client.DescribeAsyncRequestInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateAccountUser", async function () {
    try {
       const data = await client.CreateAccountUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ModifyDBInstanceParamTpl", async function () {
    try {
       const data = await client.ModifyDBInstanceParamTpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateDBInstanceHour", async function () {
    try {
       const data = await client.CreateDBInstanceHour({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateDBInstanceParamTpl", async function () {
    try {
       const data = await client.CreateDBInstanceParamTpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DropDBInstanceParamTpl", async function () {
    try {
       const data = await client.DropDBInstanceParamTpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.RenewDBInstances", async function () {
    try {
       const data = await client.RenewDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateBackupDownloadTask", async function () {
    try {
       const data = await client.CreateBackupDownloadTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.FlashBackDBInstance", async function () {
    try {
       const data = await client.FlashBackDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBInstances", async function () {
    try {
       const data = await client.DescribeDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.OfflineIsolatedDBInstance", async function () {
    try {
       const data = await client.OfflineIsolatedDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeSlowLogPatterns", async function () {
    try {
       const data = await client.DescribeSlowLogPatterns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeSlowLogs", async function () {
    try {
       const data = await client.DescribeSlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ModifyDBInstanceNetworkAddress", async function () {
    try {
       const data = await client.ModifyDBInstanceNetworkAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateDBInstance", async function () {
    try {
       const data = await client.CreateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ModifyDBInstanceSpec", async function () {
    try {
       const data = await client.ModifyDBInstanceSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeInstanceParams", async function () {
    try {
       const data = await client.DescribeInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeSpecInfo", async function () {
    try {
       const data = await client.DescribeSpecInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeBackupDownloadTask", async function () {
    try {
       const data = await client.DescribeBackupDownloadTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.InquirePriceCreateDBInstances", async function () {
    try {
       const data = await client.InquirePriceCreateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.AssignProject", async function () {
    try {
       const data = await client.AssignProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeTransparentDataEncryptionStatus", async function () {
    try {
       const data = await client.DescribeTransparentDataEncryptionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeAccountUsers", async function () {
    try {
       const data = await client.DescribeAccountUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.SetInstanceMaintenance", async function () {
    try {
       const data = await client.SetInstanceMaintenance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ModifyInstanceParams", async function () {
    try {
       const data = await client.ModifyInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBInstanceParamTplDetail", async function () {
    try {
       const data = await client.DescribeDBInstanceParamTplDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.KillOps", async function () {
    try {
       const data = await client.KillOps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.EnableTransparentDataEncryption", async function () {
    try {
       const data = await client.EnableTransparentDataEncryption({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateBackupDBInstance", async function () {
    try {
       const data = await client.CreateBackupDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.InquirePriceRenewDBInstances", async function () {
    try {
       const data = await client.InquirePriceRenewDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DeleteAccountUser", async function () {
    try {
       const data = await client.DeleteAccountUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ModifyDBInstanceSecurityGroup", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
