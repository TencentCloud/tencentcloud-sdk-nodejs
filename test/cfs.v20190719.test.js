
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cfs.v20190719.Client({
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
describe("cfs.v20190719.test.js", function () {

it("cfs.v20190719.DescribeCfsRules", async function () {
    try {
       const data = await client.DescribeCfsRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsFileSystemPGroup", async function () {
    try {
       const data = await client.UpdateCfsFileSystemPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.SignUpCfsService", async function () {
    try {
       const data = await client.SignUpCfsService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteCfsSnapshot", async function () {
    try {
       const data = await client.DeleteCfsSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsPGroups", async function () {
    try {
       const data = await client.DescribeCfsPGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.SetUserQuota", async function () {
    try {
       const data = await client.SetUserQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeAutoSnapshotPolicies", async function () {
    try {
       const data = await client.DescribeAutoSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeMountTargets", async function () {
    try {
       const data = await client.DescribeMountTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteCfsPGroup", async function () {
    try {
       const data = await client.DeleteCfsPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsFileSystemClients", async function () {
    try {
       const data = await client.DescribeCfsFileSystemClients({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsServiceStatus", async function () {
    try {
       const data = await client.DescribeCfsServiceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.StopMigrationTask", async function () {
    try {
       const data = await client.StopMigrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeMigrationTasks", async function () {
    try {
       const data = await client.DescribeMigrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeAvailableZoneInfo", async function () {
    try {
       const data = await client.DescribeAvailableZoneInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsFileSystemName", async function () {
    try {
       const data = await client.UpdateCfsFileSystemName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteMigrationTask", async function () {
    try {
       const data = await client.DeleteMigrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.ScaleUpFileSystem", async function () {
    try {
       const data = await client.ScaleUpFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsFileSystemSizeLimit", async function () {
    try {
       const data = await client.UpdateCfsFileSystemSizeLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateAutoSnapshotPolicy", async function () {
    try {
       const data = await client.CreateAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteCfsFileSystem", async function () {
    try {
       const data = await client.DeleteCfsFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateCfsFileSystem", async function () {
    try {
       const data = await client.CreateCfsFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsSnapshotAttribute", async function () {
    try {
       const data = await client.UpdateCfsSnapshotAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsSnapshotOverview", async function () {
    try {
       const data = await client.DescribeCfsSnapshotOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeUserQuota", async function () {
    try {
       const data = await client.DescribeUserQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.ModifyFileSystemAutoScaleUpRule", async function () {
    try {
       const data = await client.ModifyFileSystemAutoScaleUpRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateAutoSnapshotPolicy", async function () {
    try {
       const data = await client.UpdateAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsFileSystems", async function () {
    try {
       const data = await client.DescribeCfsFileSystems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsSnapshots", async function () {
    try {
       const data = await client.DescribeCfsSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.BindAutoSnapshotPolicy", async function () {
    try {
       const data = await client.BindAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteCfsRule", async function () {
    try {
       const data = await client.DeleteCfsRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeBucketList", async function () {
    try {
       const data = await client.DescribeBucketList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateMigrationTask", async function () {
    try {
       const data = await client.CreateMigrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteMountTarget", async function () {
    try {
       const data = await client.DeleteMountTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteUserQuota", async function () {
    try {
       const data = await client.DeleteUserQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateCfsPGroup", async function () {
    try {
       const data = await client.CreateCfsPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteAutoSnapshotPolicy", async function () {
    try {
       const data = await client.DeleteAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateCfsSnapshot", async function () {
    try {
       const data = await client.CreateCfsSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UnbindAutoSnapshotPolicy", async function () {
    try {
       const data = await client.UnbindAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeSnapshotOperationLogs", async function () {
    try {
       const data = await client.DescribeSnapshotOperationLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateCfsRule", async function () {
    try {
       const data = await client.CreateCfsRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsRule", async function () {
    try {
       const data = await client.UpdateCfsRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsPGroup", async function () {
    try {
       const data = await client.UpdateCfsPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
