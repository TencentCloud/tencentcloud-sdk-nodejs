
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dts.v20211206.Client({
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
describe("dts.v20211206.test.js", function () {

it("dts.v20211206.ModifyMigrationJob", async function () {
    try {
       const data = await client.ModifyMigrationJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeSyncJobs", async function () {
    try {
       const data = await client.DescribeSyncJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateMigrationService", async function () {
    try {
       const data = await client.CreateMigrationService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.IsolateSyncJob", async function () {
    try {
       const data = await client.IsolateSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.StopCompare", async function () {
    try {
       const data = await client.StopCompare({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateSyncJob", async function () {
    try {
       const data = await client.CreateSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DeleteCompareTask", async function () {
    try {
       const data = await client.DeleteCompareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.StartSyncJob", async function () {
    try {
       const data = await client.StartSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.StopSyncJob", async function () {
    try {
       const data = await client.StopSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateCheckSyncJob", async function () {
    try {
       const data = await client.CreateCheckSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeCompareReport", async function () {
    try {
       const data = await client.DescribeCompareReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ContinueMigrateJob", async function () {
    try {
       const data = await client.ContinueMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.PauseMigrateJob", async function () {
    try {
       const data = await client.PauseMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.SkipSyncCheckItem", async function () {
    try {
       const data = await client.SkipSyncCheckItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ConfigureSyncJob", async function () {
    try {
       const data = await client.ConfigureSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ResizeSyncJob", async function () {
    try {
       const data = await client.ResizeSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.StartCompare", async function () {
    try {
       const data = await client.StartCompare({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ResumeMigrateJob", async function () {
    try {
       const data = await client.ResumeMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.StopMigrateJob", async function () {
    try {
       const data = await client.StopMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.PauseSyncJob", async function () {
    try {
       const data = await client.PauseSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ContinueSyncJob", async function () {
    try {
       const data = await client.ContinueSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DestroySyncJob", async function () {
    try {
       const data = await client.DestroySyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeMigrateDBInstances", async function () {
    try {
       const data = await client.DescribeMigrateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.SkipCheckItem", async function () {
    try {
       const data = await client.SkipCheckItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateMigrateCheckJob", async function () {
    try {
       const data = await client.CreateMigrateCheckJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeCheckSyncJobResult", async function () {
    try {
       const data = await client.DescribeCheckSyncJobResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeCompareTasks", async function () {
    try {
       const data = await client.DescribeCompareTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifyCompareTask", async function () {
    try {
       const data = await client.ModifyCompareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeMigrationJobs", async function () {
    try {
       const data = await client.DescribeMigrationJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.RecoverMigrateJob", async function () {
    try {
       const data = await client.RecoverMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.RecoverSyncJob", async function () {
    try {
       const data = await client.RecoverSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateCompareTask", async function () {
    try {
       const data = await client.CreateCompareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DestroyMigrateJob", async function () {
    try {
       const data = await client.DestroyMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeMigrationDetail", async function () {
    try {
       const data = await client.DescribeMigrationDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ResumeSyncJob", async function () {
    try {
       const data = await client.ResumeSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeMigrationCheckJob", async function () {
    try {
       const data = await client.DescribeMigrationCheckJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.StartMigrateJob", async function () {
    try {
       const data = await client.StartMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifyMigrateJobSpec", async function () {
    try {
       const data = await client.ModifyMigrateJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.IsolateMigrateJob", async function () {
    try {
       const data = await client.IsolateMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifyCompareTaskName", async function () {
    try {
       const data = await client.ModifyCompareTaskName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifyMigrateName", async function () {
    try {
       const data = await client.ModifyMigrateName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CompleteMigrateJob", async function () {
    try {
       const data = await client.CompleteMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
