
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.emr.v20190103.Client({
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
describe("emr.v20190103.test.js", function () {

it("emr.v20190103.DescribeYarnApplications", async function () {
    try {
       const data = await client.DescribeYarnApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyResourcesTags", async function () {
    try {
       const data = await client.ModifyResourcesTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceUpdateInstance", async function () {
    try {
       const data = await client.InquiryPriceUpdateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.CreateCluster", async function () {
    try {
       const data = await client.CreateCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceRenewInstance", async function () {
    try {
       const data = await client.InquiryPriceRenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeImpalaQueries", async function () {
    try {
       const data = await client.DescribeImpalaQueries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeYarnQueue", async function () {
    try {
       const data = await client.DescribeYarnQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyYarnQueueV2", async function () {
    try {
       const data = await client.ModifyYarnQueueV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeInstanceRenewNodes", async function () {
    try {
       const data = await client.DescribeInstanceRenewNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DeployYarnConf", async function () {
    try {
       const data = await client.DeployYarnConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeClusterFlowStatusDetail", async function () {
    try {
       const data = await client.DescribeClusterFlowStatusDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceScaleOutInstance", async function () {
    try {
       const data = await client.InquiryPriceScaleOutInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeAutoScaleRecords", async function () {
    try {
       const data = await client.DescribeAutoScaleRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeCvmQuota", async function () {
    try {
       const data = await client.DescribeCvmQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyGlobalConfig", async function () {
    try {
       const data = await client.ModifyGlobalConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ScaleOutInstance", async function () {
    try {
       const data = await client.ScaleOutInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeResourceSchedule", async function () {
    try {
       const data = await client.DescribeResourceSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeStarRocksQueryInfo", async function () {
    try {
       const data = await client.DescribeStarRocksQueryInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeHBaseTableOverview", async function () {
    try {
       const data = await client.DescribeHBaseTableOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeServiceNodeInfos", async function () {
    try {
       const data = await client.DescribeServiceNodeInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyYarnDeploy", async function () {
    try {
       const data = await client.ModifyYarnDeploy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.TerminateTasks", async function () {
    try {
       const data = await client.TerminateTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.TerminateClusterNodes", async function () {
    try {
       const data = await client.TerminateClusterNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ResetYarnConfig", async function () {
    try {
       const data = await client.ResetYarnConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeUsersForUserManager", async function () {
    try {
       const data = await client.DescribeUsersForUserManager({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyUserManagerPwd", async function () {
    try {
       const data = await client.ModifyUserManagerPwd({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DeleteUserManagerUserList", async function () {
    try {
       const data = await client.DeleteUserManagerUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.TerminateSLInstance", async function () {
    try {
       const data = await client.TerminateSLInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.AddUsersForUserManager", async function () {
    try {
       const data = await client.AddUsersForUserManager({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyAutoRenewFlag", async function () {
    try {
       const data = await client.ModifyAutoRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.CreateSLInstance", async function () {
    try {
       const data = await client.CreateSLInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeSLInstanceList", async function () {
    try {
       const data = await client.DescribeSLInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyAutoScaleStrategy", async function () {
    try {
       const data = await client.ModifyAutoScaleStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeKyuubiQueryInfo", async function () {
    try {
       const data = await client.DescribeKyuubiQueryInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DeleteAutoScaleStrategy", async function () {
    try {
       const data = await client.DeleteAutoScaleStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeEmrApplicationStatics", async function () {
    try {
       const data = await client.DescribeEmrApplicationStatics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeHDFSStorageInfo", async function () {
    try {
       const data = await client.DescribeHDFSStorageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.StartStopServiceOrMonitor", async function () {
    try {
       const data = await client.StartStopServiceOrMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyResourceScheduler", async function () {
    try {
       const data = await client.ModifyResourceScheduler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeResourceScheduleDiffDetail", async function () {
    try {
       const data = await client.DescribeResourceScheduleDiffDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeSLInstance", async function () {
    try {
       const data = await client.DescribeSLInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeSparkQueries", async function () {
    try {
       const data = await client.DescribeSparkQueries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceCreateInstance", async function () {
    try {
       const data = await client.InquiryPriceCreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeGlobalConfig", async function () {
    try {
       const data = await client.DescribeGlobalConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeYarnScheduleHistory", async function () {
    try {
       const data = await client.DescribeYarnScheduleHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyResourceScheduleConfig", async function () {
    try {
       const data = await client.ModifyResourceScheduleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeJobFlow", async function () {
    try {
       const data = await client.DescribeJobFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeHiveQueries", async function () {
    try {
       const data = await client.DescribeHiveQueries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeEmrOverviewMetrics", async function () {
    try {
       const data = await client.DescribeEmrOverviewMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.SyncPodState", async function () {
    try {
       const data = await client.SyncPodState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquirePriceRenewEmr", async function () {
    try {
       const data = await client.InquirePriceRenewEmr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.TerminateInstance", async function () {
    try {
       const data = await client.TerminateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifySLInstance", async function () {
    try {
       const data = await client.ModifySLInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeAutoScaleStrategies", async function () {
    try {
       const data = await client.DescribeAutoScaleStrategies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.AddMetricScaleStrategy", async function () {
    try {
       const data = await client.AddMetricScaleStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeAutoScaleGroupGlobalConf", async function () {
    try {
       const data = await client.DescribeAutoScaleGroupGlobalConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeClusterNodes", async function () {
    try {
       const data = await client.DescribeClusterNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeTrinoQueryInfo", async function () {
    try {
       const data = await client.DescribeTrinoQueryInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeInstancesList", async function () {
    try {
       const data = await client.DescribeInstancesList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyResourcePools", async function () {
    try {
       const data = await client.ModifyResourcePools({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeInsightList", async function () {
    try {
       const data = await client.DescribeInsightList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ScaleOutCluster", async function () {
    try {
       const data = await client.ScaleOutCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.RunJobFlow", async function () {
    try {
       const data = await client.RunJobFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
