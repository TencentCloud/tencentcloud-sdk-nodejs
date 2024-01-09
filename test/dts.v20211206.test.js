
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

it("dts.v20211206.ResumeSubscribe", async function () {
    try {
       const data = await client.ResumeSubscribe({})
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

it("dts.v20211206.DestroyIsolatedSubscribe", async function () {
    try {
       const data = await client.DestroyIsolatedSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateModifyCheckSyncJob", async function () {
    try {
       const data = await client.CreateModifyCheckSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

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

it("dts.v20211206.ModifyMigrateRuntimeAttribute", async function () {
    try {
       const data = await client.ModifyMigrateRuntimeAttribute({})
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

it("dts.v20211206.DescribeSubscribeJobs", async function () {
    try {
       const data = await client.DescribeSubscribeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifyMigrateRateLimit", async function () {
    try {
       const data = await client.ModifyMigrateRateLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeSubscribeReturnable", async function () {
    try {
       const data = await client.DescribeSubscribeReturnable({})
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

it("dts.v20211206.ConfigureSubscribeJob", async function () {
    try {
       const data = await client.ConfigureSubscribeJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DescribeConsumerGroups", async function () {
    try {
       const data = await client.DescribeConsumerGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateConsumerGroup", async function () {
    try {
       const data = await client.CreateConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ResetConsumerGroupOffset", async function () {
    try {
       const data = await client.ResetConsumerGroupOffset({})
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

it("dts.v20211206.StartSubscribe", async function () {
    try {
       const data = await client.StartSubscribe({})
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

it("dts.v20211206.ModifySubscribeObjects", async function () {
    try {
       const data = await client.ModifySubscribeObjects({})
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

it("dts.v20211206.IsolateSubscribe", async function () {
    try {
       const data = await client.IsolateSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.StartModifySyncJob", async function () {
    try {
       const data = await client.StartModifySyncJob({})
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

it("dts.v20211206.ModifySubscribeAutoRenewFlag", async function () {
    try {
       const data = await client.ModifySubscribeAutoRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifySyncJobConfig", async function () {
    try {
       const data = await client.ModifySyncJobConfig({})
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

it("dts.v20211206.ModifySyncRateLimit", async function () {
    try {
       const data = await client.ModifySyncRateLimit({})
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

it("dts.v20211206.DescribeSubscribeCheckJob", async function () {
    try {
       const data = await client.DescribeSubscribeCheckJob({})
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

it("dts.v20211206.IsolateMigrateJob", async function () {
    try {
       const data = await client.IsolateMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifyConsumerGroupDescription", async function () {
    try {
       const data = await client.ModifyConsumerGroupDescription({})
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

it("dts.v20211206.ModifyConsumerGroupPassword", async function () {
    try {
       const data = await client.ModifyConsumerGroupPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.CreateSubscribeCheckJob", async function () {
    try {
       const data = await client.CreateSubscribeCheckJob({})
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

it("dts.v20211206.DescribeSubscribeDetail", async function () {
    try {
       const data = await client.DescribeSubscribeDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.DeleteConsumerGroup", async function () {
    try {
       const data = await client.DeleteConsumerGroup({})
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

it("dts.v20211206.CreateSubscribe", async function () {
    try {
       const data = await client.CreateSubscribe({})
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

it("dts.v20211206.ResetSubscribe", async function () {
    try {
       const data = await client.ResetSubscribe({})
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

it("dts.v20211206.DescribeModifyCheckSyncJobResult", async function () {
    try {
       const data = await client.DescribeModifyCheckSyncJobResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20211206.ModifySubscribeName", async function () {
    try {
       const data = await client.ModifySubscribeName({})
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

it("dts.v20211206.DescribeOffsetByTime", async function () {
    try {
       const data = await client.DescribeOffsetByTime({})
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

it("dts.v20211206.DestroySyncJob", async function () {
    try {
       const data = await client.DestroySyncJob({})
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
