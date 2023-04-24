
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.keewidb.v20220308.Client({
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
describe("keewidb.v20220308.test.js", function () {

it("keewidb.v20220308.DescribeInstanceNodeInfo", async function () {
    try {
       const data = await client.DescribeInstanceNodeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ModifyMaintenanceWindow", async function () {
    try {
       const data = await client.ModifyMaintenanceWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeTaskList", async function () {
    try {
       const data = await client.DescribeTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.CleanUpInstance", async function () {
    try {
       const data = await client.CleanUpInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeMaintenanceWindow", async function () {
    try {
       const data = await client.DescribeMaintenanceWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeInstanceBackups", async function () {
    try {
       const data = await client.DescribeInstanceBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ModifyNetworkConfig", async function () {
    try {
       const data = await client.ModifyNetworkConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ModifyAutoBackupConfig", async function () {
    try {
       const data = await client.ModifyAutoBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ResetPassword", async function () {
    try {
       const data = await client.ResetPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeConnectionConfig", async function () {
    try {
       const data = await client.DescribeConnectionConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeInstanceBinlogs", async function () {
    try {
       const data = await client.DescribeInstanceBinlogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeAutoBackupConfig", async function () {
    try {
       const data = await client.DescribeAutoBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ChangeInstanceMaster", async function () {
    try {
       const data = await client.ChangeInstanceMaster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.CreateInstances", async function () {
    try {
       const data = await client.CreateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.RenewInstance", async function () {
    try {
       const data = await client.RenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeTaskInfo", async function () {
    try {
       const data = await client.DescribeTaskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeProxySlowLog", async function () {
    try {
       const data = await client.DescribeProxySlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeProjectSecurityGroups", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeTendisSlowLog", async function () {
    try {
       const data = await client.DescribeTendisSlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ModifyInstanceParams", async function () {
    try {
       const data = await client.ModifyInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ModifyDBInstanceSecurityGroups", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeInstanceParams", async function () {
    try {
       const data = await client.DescribeInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeInstanceReplicas", async function () {
    try {
       const data = await client.DescribeInstanceReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ModifyConnectionConfig", async function () {
    try {
       const data = await client.ModifyConnectionConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeProductInfo", async function () {
    try {
       const data = await client.DescribeProductInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.UpgradeInstance", async function () {
    try {
       const data = await client.UpgradeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeDBSecurityGroups", async function () {
    try {
       const data = await client.DescribeDBSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.CreateBackupManually", async function () {
    try {
       const data = await client.CreateBackupManually({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DestroyPrepaidInstance", async function () {
    try {
       const data = await client.DestroyPrepaidInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeInstanceParamRecords", async function () {
    try {
       const data = await client.DescribeInstanceParamRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ClearInstance", async function () {
    try {
       const data = await client.ClearInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DescribeInstanceDealDetail", async function () {
    try {
       const data = await client.DescribeInstanceDealDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DestroyPostpaidInstance", async function () {
    try {
       const data = await client.DestroyPostpaidInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.ModifyInstance", async function () {
    try {
       const data = await client.ModifyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("keewidb.v20220308.StartUpInstance", async function () {
    try {
       const data = await client.StartUpInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
