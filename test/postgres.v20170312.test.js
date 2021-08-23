
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.postgres.v20170312.Client({
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
describe("postgres.v20170312.test.js", function () {

it("postgres.v20170312.ModifyDBInstancesProject", async function () {
    try {
       const data = await client.ModifyDBInstancesProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeOrders", async function () {
    try {
       const data = await client.DescribeOrders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DestroyDBInstance", async function () {
    try {
       const data = await client.DestroyDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeDBBackups", async function () {
    try {
       const data = await client.DescribeDBBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.ResetAccountPassword", async function () {
    try {
       const data = await client.ResetAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeDBErrlogs", async function () {
    try {
       const data = await client.DescribeDBErrlogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeSlowQueryAnalysis", async function () {
    try {
       const data = await client.DescribeSlowQueryAnalysis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.ModifySwitchTimePeriod", async function () {
    try {
       const data = await client.ModifySwitchTimePeriod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.InquiryPriceCreateDBInstances", async function () {
    try {
       const data = await client.InquiryPriceCreateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.OpenDBExtranetAccess", async function () {
    try {
       const data = await client.OpenDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.CloseServerlessDBExtranetAccess", async function () {
    try {
       const data = await client.CloseServerlessDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DeleteReadOnlyGroup", async function () {
    try {
       const data = await client.DeleteReadOnlyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.ModifyAccountRemark", async function () {
    try {
       const data = await client.ModifyAccountRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeDBXlogs", async function () {
    try {
       const data = await client.DescribeDBXlogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.SetAutoRenewFlag", async function () {
    try {
       const data = await client.SetAutoRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeDBInstanceAttribute", async function () {
    try {
       const data = await client.DescribeDBInstanceAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.ModifyDBInstanceName", async function () {
    try {
       const data = await client.ModifyDBInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.UpgradeDBInstance", async function () {
    try {
       const data = await client.UpgradeDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.CreateDBInstances", async function () {
    try {
       const data = await client.CreateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.CreateServerlessDBInstance", async function () {
    try {
       const data = await client.CreateServerlessDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeDBInstances", async function () {
    try {
       const data = await client.DescribeDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.RestartDBInstance", async function () {
    try {
       const data = await client.RestartDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.IsolateDBInstances", async function () {
    try {
       const data = await client.IsolateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DeleteServerlessDBInstance", async function () {
    try {
       const data = await client.DeleteServerlessDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.InitDBInstances", async function () {
    try {
       const data = await client.InitDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.InquiryPriceUpgradeDBInstance", async function () {
    try {
       const data = await client.InquiryPriceUpgradeDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.RemoveDBInstanceFromReadOnlyGroup", async function () {
    try {
       const data = await client.RemoveDBInstanceFromReadOnlyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.CreateReadOnlyGroup", async function () {
    try {
       const data = await client.CreateReadOnlyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeSlowQueryList", async function () {
    try {
       const data = await client.DescribeSlowQueryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.ModifyDBInstanceReadOnlyGroup", async function () {
    try {
       const data = await client.ModifyDBInstanceReadOnlyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.CloseDBExtranetAccess", async function () {
    try {
       const data = await client.CloseDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.AddDBInstanceToReadOnlyGroup", async function () {
    try {
       const data = await client.AddDBInstanceToReadOnlyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.InquiryPriceRenewDBInstance", async function () {
    try {
       const data = await client.InquiryPriceRenewDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DisIsolateDBInstances", async function () {
    try {
       const data = await client.DisIsolateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeServerlessDBInstances", async function () {
    try {
       const data = await client.DescribeServerlessDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.RebalanceReadOnlyGroup", async function () {
    try {
       const data = await client.RebalanceReadOnlyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.RenewInstance", async function () {
    try {
       const data = await client.RenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeDatabases", async function () {
    try {
       const data = await client.DescribeDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.CreateReadOnlyDBInstance", async function () {
    try {
       const data = await client.CreateReadOnlyDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeReadOnlyGroups", async function () {
    try {
       const data = await client.DescribeReadOnlyGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.ModifyReadOnlyGroupConfig", async function () {
    try {
       const data = await client.ModifyReadOnlyGroupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.CreateInstances", async function () {
    try {
       const data = await client.CreateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeProductConfig", async function () {
    try {
       const data = await client.DescribeProductConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.DescribeDBSlowlogs", async function () {
    try {
       const data = await client.DescribeDBSlowlogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("postgres.v20170312.OpenServerlessDBExtranetAccess", async function () {
    try {
       const data = await client.OpenServerlessDBExtranetAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
