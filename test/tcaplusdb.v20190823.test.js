
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tcaplusdb.v20190823.Client({
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
describe("tcaplusdb.v20190823.test.js", function () {

it("tcaplusdb.v20190823.DeleteTableIndex", async function () {
    try {
       const data = await client.DeleteTableIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeTableTags", async function () {
    try {
       const data = await client.DescribeTableTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.UpdateApply", async function () {
    try {
       const data = await client.UpdateApply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyTableTags", async function () {
    try {
       const data = await client.ModifyTableTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.CreateCluster", async function () {
    try {
       const data = await client.CreateCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeMachine", async function () {
    try {
       const data = await client.DescribeMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.MergeTablesData", async function () {
    try {
       const data = await client.MergeTablesData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeUinInWhitelist", async function () {
    try {
       const data = await client.DescribeUinInWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeTablesInRecycle", async function () {
    try {
       const data = await client.DescribeTablesInRecycle({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DisableRestProxy", async function () {
    try {
       const data = await client.DisableRestProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.RollbackTables", async function () {
    try {
       const data = await client.RollbackTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyClusterName", async function () {
    try {
       const data = await client.ModifyClusterName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.SetTableDataFlow", async function () {
    try {
       const data = await client.SetTableDataFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DeleteCluster", async function () {
    try {
       const data = await client.DeleteCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyClusterPassword", async function () {
    try {
       const data = await client.ModifyClusterPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.SetTableIndex", async function () {
    try {
       const data = await client.SetTableIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DeleteIdlFiles", async function () {
    try {
       const data = await client.DeleteIdlFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.CreateSnapshots", async function () {
    try {
       const data = await client.CreateSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.EnableRestProxy", async function () {
    try {
       const data = await client.EnableRestProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.CreateBackup", async function () {
    try {
       const data = await client.CreateBackup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyCensorship", async function () {
    try {
       const data = await client.ModifyCensorship({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.CreateTables", async function () {
    try {
       const data = await client.CreateTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyTableQuotas", async function () {
    try {
       const data = await client.ModifyTableQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeClusters", async function () {
    try {
       const data = await client.DescribeClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyClusterMachine", async function () {
    try {
       const data = await client.ModifyClusterMachine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DeleteTableGroup", async function () {
    try {
       const data = await client.DeleteTableGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyTableGroupName", async function () {
    try {
       const data = await client.ModifyTableGroupName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DeleteSnapshots", async function () {
    try {
       const data = await client.DeleteSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.CreateTableGroup", async function () {
    try {
       const data = await client.CreateTableGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.RecoverRecycleTables", async function () {
    try {
       const data = await client.RecoverRecycleTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeSnapshots", async function () {
    try {
       const data = await client.DescribeSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyClusterTags", async function () {
    try {
       const data = await client.ModifyClusterTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyTableGroupTags", async function () {
    try {
       const data = await client.ModifyTableGroupTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeApplications", async function () {
    try {
       const data = await client.DescribeApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeTableGroupTags", async function () {
    try {
       const data = await client.DescribeTableGroupTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ImportSnapshots", async function () {
    try {
       const data = await client.ImportSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeTableGroups", async function () {
    try {
       const data = await client.DescribeTableGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.CompareIdlFiles", async function () {
    try {
       const data = await client.CompareIdlFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeIdlFileInfos", async function () {
    try {
       const data = await client.DescribeIdlFileInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DeleteTables", async function () {
    try {
       const data = await client.DeleteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyTableMemos", async function () {
    try {
       const data = await client.ModifyTableMemos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifySnapshots", async function () {
    try {
       const data = await client.ModifySnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.VerifyIdlFiles", async function () {
    try {
       const data = await client.VerifyIdlFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ClearTables", async function () {
    try {
       const data = await client.ClearTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DeleteTableDataFlow", async function () {
    try {
       const data = await client.DeleteTableDataFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.ModifyTables", async function () {
    try {
       const data = await client.ModifyTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeTables", async function () {
    try {
       const data = await client.DescribeTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcaplusdb.v20190823.DescribeClusterTags", async function () {
    try {
       const data = await client.DescribeClusterTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
