
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dlc.v20210125.Client({
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
describe("dlc.v20210125.test.js", function () {

it("dlc.v20210125.CheckServiceName", async function () {
    try {
       const data = await client.CheckServiceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayClusterEvent", async function () {
    try {
       const data = await client.GetRayClusterEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTaskResult", async function () {
    try {
       const data = await client.DescribeTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribePartitionDetail", async function () {
    try {
       const data = await client.DescribePartitionDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUserRoles", async function () {
    try {
       const data = await client.DescribeUserRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyUserType", async function () {
    try {
       const data = await client.ModifyUserType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeWorkGroupInfo", async function () {
    try {
       const data = await client.DescribeWorkGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteWorkGroup", async function () {
    try {
       const data = await client.DeleteWorkGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UnlockMetaData", async function () {
    try {
       const data = await client.UnlockMetaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateStoreLocation", async function () {
    try {
       const data = await client.CreateStoreLocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateDatasourceConnection", async function () {
    try {
       const data = await client.CreateDatasourceConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyJobDefinition", async function () {
    try {
       const data = await client.ModifyJobDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUserRegisterTime", async function () {
    try {
       const data = await client.DescribeUserRegisterTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeClusterGroup", async function () {
    try {
       const data = await client.DescribeClusterGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteDataMaskStrategy", async function () {
    try {
       const data = await client.DeleteDataMaskStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyClusterPriority", async function () {
    try {
       const data = await client.ModifyClusterPriority({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUserType", async function () {
    try {
       const data = await client.DescribeUserType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateBenchmarkTask", async function () {
    try {
       const data = await client.CreateBenchmarkTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreatePartition", async function () {
    try {
       const data = await client.CreatePartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ImportExternalCluster", async function () {
    try {
       const data = await client.ImportExternalCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeOtherCHDFSBindingList", async function () {
    try {
       const data = await client.DescribeOtherCHDFSBindingList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.SwitchDataEngineImage", async function () {
    try {
       const data = await client.SwitchDataEngineImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetLabHistory", async function () {
    try {
       const data = await client.GetLabHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateServiceAuthConfig", async function () {
    try {
       const data = await client.UpdateServiceAuthConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AddOptimizerEngines", async function () {
    try {
       const data = await client.AddOptimizerEngines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSparkAppJobs", async function () {
    try {
       const data = await client.DescribeSparkAppJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckResourceName", async function () {
    try {
       const data = await client.CheckResourceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateInternalTable", async function () {
    try {
       const data = await client.CreateInternalTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteStandardEngineResourceGroup", async function () {
    try {
       const data = await client.DeleteStandardEngineResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CopyJobSpec", async function () {
    try {
       const data = await client.CopyJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.SuspendResumeDataEngine", async function () {
    try {
       const data = await client.SuspendResumeDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyGovernEventRule", async function () {
    try {
       const data = await client.ModifyGovernEventRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListAvailableApiKeys", async function () {
    try {
       const data = await client.ListAvailableApiKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNotebookSessionStatementSqlResult", async function () {
    try {
       const data = await client.DescribeNotebookSessionStatementSqlResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteLab", async function () {
    try {
       const data = await client.DeleteLab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeMlFlowConfig", async function () {
    try {
       const data = await client.DescribeMlFlowConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataEngines", async function () {
    try {
       const data = await client.DescribeDataEngines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeMlflowServerPods", async function () {
    try {
       const data = await client.DescribeMlflowServerPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateUserDataEngineConfig", async function () {
    try {
       const data = await client.UpdateUserDataEngineConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CancelNotebookSessionStatementBatch", async function () {
    try {
       const data = await client.CancelNotebookSessionStatementBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListExampleDifficulties", async function () {
    try {
       const data = await client.ListExampleDifficulties({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateInferenceModel", async function () {
    try {
       const data = await client.UpdateInferenceModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.QueryTaskCostDetail", async function () {
    try {
       const data = await client.QueryTaskCostDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DropDMSPartitions", async function () {
    try {
       const data = await client.DropDMSPartitions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateCHDFSBindingProduct", async function () {
    try {
       const data = await client.CreateCHDFSBindingProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckDataEngineImageCanBeRollback", async function () {
    try {
       const data = await client.CheckDataEngineImageCanBeRollback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeMlflowServerEvents", async function () {
    try {
       const data = await client.DescribeMlflowServerEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CancelSparkSessionBatchSQL", async function () {
    try {
       const data = await client.CancelSparkSessionBatchSQL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTable", async function () {
    try {
       const data = await client.DescribeTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetOptimizerPolicy", async function () {
    try {
       const data = await client.GetOptimizerPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeFlowList", async function () {
    try {
       const data = await client.DescribeFlowList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteDataEngine", async function () {
    try {
       const data = await client.DeleteDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeEngineUsageInfo", async function () {
    try {
       const data = await client.DescribeEngineUsageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateTasksInOrder", async function () {
    try {
       const data = await client.CreateTasksInOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateRowFilter", async function () {
    try {
       const data = await client.UpdateRowFilter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTrainingJobInstance", async function () {
    try {
       const data = await client.DescribeTrainingJobInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpgradeDataEngineImage", async function () {
    try {
       const data = await client.UpgradeDataEngineImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListRegionLbs", async function () {
    try {
       const data = await client.ListRegionLbs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeClusterEventLogSwitch", async function () {
    try {
       const data = await client.DescribeClusterEventLogSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataEngineEvents", async function () {
    try {
       const data = await client.DescribeDataEngineEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.QueryResult", async function () {
    try {
       const data = await client.QueryResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateResourceConfig", async function () {
    try {
       const data = await client.UpdateResourceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSaleRegions", async function () {
    try {
       const data = await client.DescribeSaleRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateExportTask", async function () {
    try {
       const data = await client.CreateExportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.QueryDashboardServiceList", async function () {
    try {
       const data = await client.QueryDashboardServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteUsersFromWorkGroup", async function () {
    try {
       const data = await client.DeleteUsersFromWorkGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateJobSpec", async function () {
    try {
       const data = await client.UpdateJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyTrainingJobSpec", async function () {
    try {
       const data = await client.ModifyTrainingJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetInferenceService", async function () {
    try {
       const data = await client.GetInferenceService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateJob", async function () {
    try {
       const data = await client.CreateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RenewDataEngine", async function () {
    try {
       const data = await client.RenewDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSchemaNamesPage", async function () {
    try {
       const data = await client.DescribeSchemaNamesPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeViews", async function () {
    try {
       const data = await client.DescribeViews({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyLabPriority", async function () {
    try {
       const data = await client.ModifyLabPriority({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeBindablePrometheus", async function () {
    try {
       const data = await client.DescribeBindablePrometheus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.BindWorkGroupsToUser", async function () {
    try {
       const data = await client.BindWorkGroupsToUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListTrainingJobSpec", async function () {
    try {
       const data = await client.ListTrainingJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetLabYaml", async function () {
    try {
       const data = await client.GetLabYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateDataMaskStrategy", async function () {
    try {
       const data = await client.CreateDataMaskStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateDataMaskStrategy", async function () {
    try {
       const data = await client.UpdateDataMaskStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteModelVersion", async function () {
    try {
       const data = await client.DeleteModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateLab", async function () {
    try {
       const data = await client.UpdateLab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeStandardEngineResourceGroupConfigInfo", async function () {
    try {
       const data = await client.DescribeStandardEngineResourceGroupConfigInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AddUsersToWorkGroup", async function () {
    try {
       const data = await client.AddUsersToWorkGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AlterDMSTable", async function () {
    try {
       const data = await client.AlterDMSTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.InitializeTCLake", async function () {
    try {
       const data = await client.InitializeTCLake({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.LaunchStandardEngineResourceGroups", async function () {
    try {
       const data = await client.LaunchStandardEngineResourceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTaskMonitorInfos", async function () {
    try {
       const data = await client.DescribeTaskMonitorInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateRayCluster", async function () {
    try {
       const data = await client.UpdateRayCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUpdatableDataEngines", async function () {
    try {
       const data = await client.DescribeUpdatableDataEngines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckJobSpecName", async function () {
    try {
       const data = await client.CheckJobSpecName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RunJobSpec", async function () {
    try {
       const data = await client.RunJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteMlflowServer", async function () {
    try {
       const data = await client.DeleteMlflowServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateSparkSubmitTask", async function () {
    try {
       const data = await client.CreateSparkSubmitTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListJobSpecs", async function () {
    try {
       const data = await client.ListJobSpecs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeletePartitionQueue", async function () {
    try {
       const data = await client.DeletePartitionQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.BindApiKey", async function () {
    try {
       const data = await client.BindApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateScript", async function () {
    try {
       const data = await client.CreateScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateSparkAppTask", async function () {
    try {
       const data = await client.CreateSparkAppTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyPartitionDescription", async function () {
    try {
       const data = await client.ModifyPartitionDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateStandardEngineResourceGroupBaseInfo", async function () {
    try {
       const data = await client.UpdateStandardEngineResourceGroupBaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckApiKeyName", async function () {
    try {
       const data = await client.CheckApiKeyName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayJobYaml", async function () {
    try {
       const data = await client.GetRayJobYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AlterDMSPartition", async function () {
    try {
       const data = await client.AlterDMSPartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeClsTopics", async function () {
    try {
       const data = await client.DescribeClsTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetInferenceModel", async function () {
    try {
       const data = await client.GetInferenceModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StopMlflowServer", async function () {
    try {
       const data = await client.StopMlflowServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListInferenceEngines", async function () {
    try {
       const data = await client.ListInferenceEngines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUsers", async function () {
    try {
       const data = await client.DescribeUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AddDeployment", async function () {
    try {
       const data = await client.AddDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GenerateInternalTable", async function () {
    try {
       const data = await client.GenerateInternalTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyWorkGroup", async function () {
    try {
       const data = await client.ModifyWorkGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTablesName", async function () {
    try {
       const data = await client.DescribeTablesName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.PauseStandardEngineResourceGroups", async function () {
    try {
       const data = await client.PauseStandardEngineResourceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RevokeDLCCatalogAccess", async function () {
    try {
       const data = await client.RevokeDLCCatalogAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTasksCostInfo", async function () {
    try {
       const data = await client.DescribeTasksCostInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AttachWorkGroupPolicy", async function () {
    try {
       const data = await client.AttachWorkGroupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataEnginesScaleDetail", async function () {
    try {
       const data = await client.DescribeDataEnginesScaleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateSparkApp", async function () {
    try {
       const data = await client.CreateSparkApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSessionImageVersion", async function () {
    try {
       const data = await client.DescribeSessionImageVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateApiKey", async function () {
    try {
       const data = await client.CreateApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateDeployment", async function () {
    try {
       const data = await client.UpdateDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StartRayCluster", async function () {
    try {
       const data = await client.StartRayCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetModelConfig", async function () {
    try {
       const data = await client.GetModelConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateDMSDatabase", async function () {
    try {
       const data = await client.CreateDMSDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetResourceConfig", async function () {
    try {
       const data = await client.GetResourceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StopLab", async function () {
    try {
       const data = await client.StopLab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyAdvancedStoreLocation", async function () {
    try {
       const data = await client.ModifyAdvancedStoreLocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeMCPSubUin", async function () {
    try {
       const data = await client.DescribeMCPSubUin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListDeploymentReplicas", async function () {
    try {
       const data = await client.ListDeploymentReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteBenchmarkTask", async function () {
    try {
       const data = await client.DeleteBenchmarkTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckModifyPartition", async function () {
    try {
       const data = await client.CheckModifyPartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeEngineNodeSpec", async function () {
    try {
       const data = await client.DescribeEngineNodeSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifySparkAppBatch", async function () {
    try {
       const data = await client.ModifySparkAppBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CancelTrainingJobInstance", async function () {
    try {
       const data = await client.CancelTrainingJobInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListExampleTags", async function () {
    try {
       const data = await client.ListExampleTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListMlflowServerTrainingInstances", async function () {
    try {
       const data = await client.ListMlflowServerTrainingInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDMSTable", async function () {
    try {
       const data = await client.DescribeDMSTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeCatalogTableInfo", async function () {
    try {
       const data = await client.DescribeCatalogTableInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateTcIcebergTable", async function () {
    try {
       const data = await client.CreateTcIcebergTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDatasourceConnection", async function () {
    try {
       const data = await client.DescribeDatasourceConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetLabEvent", async function () {
    try {
       const data = await client.GetLabEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayJobHistory", async function () {
    try {
       const data = await client.GetRayJobHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifySparkApp", async function () {
    try {
       const data = await client.ModifySparkApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteUserVpcConnection", async function () {
    try {
       const data = await client.DeleteUserVpcConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayJobPods", async function () {
    try {
       const data = await client.GetRayJobPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribePostTrainingPreset", async function () {
    try {
       const data = await client.DescribePostTrainingPreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckDataEngineConfigPairsValidity", async function () {
    try {
       const data = await client.CheckDataEngineConfigPairsValidity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribePartitionQueues", async function () {
    try {
       const data = await client.DescribePartitionQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteRayCluster", async function () {
    try {
       const data = await client.DeleteRayCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataEngineSessionParameters", async function () {
    try {
       const data = await client.DescribeDataEngineSessionParameters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTasksOverview", async function () {
    try {
       const data = await client.DescribeTasksOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataEngineImageVersions", async function () {
    try {
       const data = await client.DescribeDataEngineImageVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateClusterGroup", async function () {
    try {
       const data = await client.UpdateClusterGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateUDFPolicy", async function () {
    try {
       const data = await client.UpdateUDFPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DetachWorkGroupPolicy", async function () {
    try {
       const data = await client.DetachWorkGroupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeCatalogs", async function () {
    try {
       const data = await client.DescribeCatalogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifySparkAppForTDLC", async function () {
    try {
       const data = await client.ModifySparkAppForTDLC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateStandardEngineResourceGroupConfigInfo", async function () {
    try {
       const data = await client.UpdateStandardEngineResourceGroupConfigInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateTable", async function () {
    try {
       const data = await client.CreateTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateSparkAppForTDLC", async function () {
    try {
       const data = await client.CreateSparkAppForTDLC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteTrainingJobInstance", async function () {
    try {
       const data = await client.DeleteTrainingJobInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTasksAnalysis", async function () {
    try {
       const data = await client.DescribeTasksAnalysis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateNetworkConnection", async function () {
    try {
       const data = await client.UpdateNetworkConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListRayJobs", async function () {
    try {
       const data = await client.ListRayJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateUserRole", async function () {
    try {
       const data = await client.CreateUserRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteResourceConfig", async function () {
    try {
       const data = await client.DeleteResourceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ResumeTrainingJobInstance", async function () {
    try {
       const data = await client.ResumeTrainingJobInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StartLab", async function () {
    try {
       const data = await client.StartLab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeJobDefinitionDetail", async function () {
    try {
       const data = await client.DescribeJobDefinitionDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeClusterMonitorInfos", async function () {
    try {
       const data = await client.DescribeClusterMonitorInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListImages", async function () {
    try {
       const data = await client.ListImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetModelReadme", async function () {
    try {
       const data = await client.GetModelReadme({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayClusterYaml", async function () {
    try {
       const data = await client.GetRayClusterYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListModelVersions", async function () {
    try {
       const data = await client.ListModelVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DropDMSTable", async function () {
    try {
       const data = await client.DropDMSTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CancelNotebookSessionStatement", async function () {
    try {
       const data = await client.CancelNotebookSessionStatement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListClusterGroups", async function () {
    try {
       const data = await client.ListClusterGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSparkAppTasks", async function () {
    try {
       const data = await client.DescribeSparkAppTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeStandardEngineResourceGroups", async function () {
    try {
       const data = await client.DescribeStandardEngineResourceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateDataEngine", async function () {
    try {
       const data = await client.UpdateDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeForbiddenTablePro", async function () {
    try {
       const data = await client.DescribeForbiddenTablePro({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNotebookSession", async function () {
    try {
       const data = await client.DescribeNotebookSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateNotebookSession", async function () {
    try {
       const data = await client.CreateNotebookSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataEngine", async function () {
    try {
       const data = await client.DescribeDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreatePartitionQueue", async function () {
    try {
       const data = await client.CreatePartitionQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetLabPodYaml", async function () {
    try {
       const data = await client.GetLabPodYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.SwitchDataEngine", async function () {
    try {
       const data = await client.SwitchDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTkeClusterImportInfo", async function () {
    try {
       const data = await client.DescribeTkeClusterImportInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CancelTask", async function () {
    try {
       const data = await client.CancelTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDMSTables", async function () {
    try {
       const data = await client.DescribeDMSTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNetworkConnections", async function () {
    try {
       const data = await client.DescribeNetworkConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateStandardEngineResourceGroup", async function () {
    try {
       const data = await client.CreateStandardEngineResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteScript", async function () {
    try {
       const data = await client.DeleteScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDatabases", async function () {
    try {
       const data = await client.DescribeDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetLabDetail", async function () {
    try {
       const data = await client.GetLabDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNotebookSessions", async function () {
    try {
       const data = await client.DescribeNotebookSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateDatabase", async function () {
    try {
       const data = await client.CreateDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetModelFiles", async function () {
    try {
       const data = await client.GetModelFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListTaskJobLogName", async function () {
    try {
       const data = await client.ListTaskJobLogName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AssociateDatasourceHouse", async function () {
    try {
       const data = await client.AssociateDatasourceHouse({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeLakeFsTaskResult", async function () {
    try {
       const data = await client.DescribeLakeFsTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListApiKeys", async function () {
    try {
       const data = await client.ListApiKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeAdvancedStoreLocation", async function () {
    try {
       const data = await client.DescribeAdvancedStoreLocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.LockMetaData", async function () {
    try {
       const data = await client.LockMetaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListRayClusters", async function () {
    try {
       const data = await client.ListRayClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateInferenceModel", async function () {
    try {
       const data = await client.CreateInferenceModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ImportTkeCluster", async function () {
    try {
       const data = await client.ImportTkeCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AssignMangedTableProperties", async function () {
    try {
       const data = await client.AssignMangedTableProperties({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTrainingJobSpec", async function () {
    try {
       const data = await client.DescribeTrainingJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetExampleDetail", async function () {
    try {
       const data = await client.GetExampleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteDeployment", async function () {
    try {
       const data = await client.DeleteDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeThirdPartyAccessUser", async function () {
    try {
       const data = await client.DescribeThirdPartyAccessUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListExampleCategories", async function () {
    try {
       const data = await client.ListExampleCategories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateUserVpcConnection", async function () {
    try {
       const data = await client.CreateUserVpcConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUDFPolicy", async function () {
    try {
       const data = await client.DescribeUDFPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateRayJobPriority", async function () {
    try {
       const data = await client.UpdateRayJobPriority({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AttachUserPolicy", async function () {
    try {
       const data = await client.AttachUserPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateNotebookSessionStatement", async function () {
    try {
       const data = await client.CreateNotebookSessionStatement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteApiKey", async function () {
    try {
       const data = await client.DeleteApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UnboundDatasourceHouse", async function () {
    try {
       const data = await client.UnboundDatasourceHouse({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetLabServiceUrls", async function () {
    try {
       const data = await client.GetLabServiceUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSparkSessionBatchSQL", async function () {
    try {
       const data = await client.DescribeSparkSessionBatchSQL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DropDMSDatabase", async function () {
    try {
       const data = await client.DropDMSDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AddDMSPartitions", async function () {
    try {
       const data = await client.AddDMSPartitions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckDataEngineImageCanBeUpgrade", async function () {
    try {
       const data = await client.CheckDataEngineImageCanBeUpgrade({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteSparkApp", async function () {
    try {
       const data = await client.DeleteSparkApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTaskResourceUsage", async function () {
    try {
       const data = await client.DescribeTaskResourceUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateJobSpecPriority", async function () {
    try {
       const data = await client.UpdateJobSpecPriority({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateInferenceService", async function () {
    try {
       const data = await client.CreateInferenceService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateMetaDatabase", async function () {
    try {
       const data = await client.CreateMetaDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateWorkGroup", async function () {
    try {
       const data = await client.CreateWorkGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.QueryInternalTableWarehouse", async function () {
    try {
       const data = await client.QueryInternalTableWarehouse({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RerunBenchmarkTask", async function () {
    try {
       const data = await client.RerunBenchmarkTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTablePartitions", async function () {
    try {
       const data = await client.DescribeTablePartitions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RestartInferenceService", async function () {
    try {
       const data = await client.RestartInferenceService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteTrainingJobSpec", async function () {
    try {
       const data = await client.DeleteTrainingJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribePartitions", async function () {
    try {
       const data = await client.DescribePartitions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeJobDetail", async function () {
    try {
       const data = await client.DescribeJobDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUserInfo", async function () {
    try {
       const data = await client.DescribeUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayJobEvent", async function () {
    try {
       const data = await client.GetRayJobEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUserVpcConnection", async function () {
    try {
       const data = await client.DescribeUserVpcConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateDataEngineConfig", async function () {
    try {
       const data = await client.UpdateDataEngineConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateDMSTable", async function () {
    try {
       const data = await client.CreateDMSTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DetachUserPolicy", async function () {
    try {
       const data = await client.DetachUserPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckLockMetaData", async function () {
    try {
       const data = await client.CheckLockMetaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StopRayCluster", async function () {
    try {
       const data = await client.StopRayCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CancelTasks", async function () {
    try {
       const data = await client.CancelTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeCatalogTableNames", async function () {
    try {
       const data = await client.DescribeCatalogTableNames({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateResourceConfig", async function () {
    try {
       const data = await client.CreateResourceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RegisterThirdPartyAccessUser", async function () {
    try {
       const data = await client.RegisterThirdPartyAccessUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayCluster", async function () {
    try {
       const data = await client.GetRayCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNativeSparkSessions", async function () {
    try {
       const data = await client.DescribeNativeSparkSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeWorkGroups", async function () {
    try {
       const data = await client.DescribeWorkGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeJobList", async function () {
    try {
       const data = await client.DescribeJobList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListExamples", async function () {
    try {
       const data = await client.ListExamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDatabase", async function () {
    try {
       const data = await client.DescribeDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNotebookSessionStatement", async function () {
    try {
       const data = await client.DescribeNotebookSessionStatement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeMlflowServer", async function () {
    try {
       const data = await client.DescribeMlflowServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.QueryMonitorOverview", async function () {
    try {
       const data = await client.QueryMonitorOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteThirdPartyAccessUser", async function () {
    try {
       const data = await client.DeleteThirdPartyAccessUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateRayCluster", async function () {
    try {
       const data = await client.CreateRayCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeUserDataEngineConfig", async function () {
    try {
       const data = await client.DescribeUserDataEngineConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTaskLog", async function () {
    try {
       const data = await client.DescribeTaskLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSparkAppJob", async function () {
    try {
       const data = await client.DescribeSparkAppJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.SetOptimizerPolicy", async function () {
    try {
       const data = await client.SetOptimizerPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateDataEngine", async function () {
    try {
       const data = await client.CreateDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataEnginePythonSparkImages", async function () {
    try {
       const data = await client.DescribeDataEnginePythonSparkImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteRayJob", async function () {
    try {
       const data = await client.DeleteRayJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeWarehouses", async function () {
    try {
       const data = await client.DescribeWarehouses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeEngineNetworks", async function () {
    try {
       const data = await client.DescribeEngineNetworks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckModelIdentifier", async function () {
    try {
       const data = await client.CheckModelIdentifier({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTaskList", async function () {
    try {
       const data = await client.DescribeTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDataMaskStrategies", async function () {
    try {
       const data = await client.DescribeDataMaskStrategies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteMetaDatabase", async function () {
    try {
       const data = await client.DeleteMetaDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListTrainingJobInstance", async function () {
    try {
       const data = await client.ListTrainingJobInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateNotebookSessionStatementSupportBatchSQL", async function () {
    try {
       const data = await client.CreateNotebookSessionStatementSupportBatchSQL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeJobResult", async function () {
    try {
       const data = await client.DescribeJobResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDMSPartitions", async function () {
    try {
       const data = await client.DescribeDMSPartitions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSparkSessionBatchSqlLog", async function () {
    try {
       const data = await client.DescribeSparkSessionBatchSqlLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDLCCatalogAccess", async function () {
    try {
       const data = await client.DescribeDLCCatalogAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListResourceConfigs", async function () {
    try {
       const data = await client.ListResourceConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateStandardEngineResourceGroupResourceInfo", async function () {
    try {
       const data = await client.UpdateStandardEngineResourceGroupResourceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeLakeFsDirSummary", async function () {
    try {
       const data = await client.DescribeLakeFsDirSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeModelTaskOptions", async function () {
    try {
       const data = await client.DescribeModelTaskOptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayClusterHistory", async function () {
    try {
       const data = await client.GetRayClusterHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeClusterGroupClusters", async function () {
    try {
       const data = await client.DescribeClusterGroupClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayClusterPodYaml", async function () {
    try {
       const data = await client.GetRayClusterPodYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteModel", async function () {
    try {
       const data = await client.DeleteModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeModelEngines", async function () {
    try {
       const data = await client.DescribeModelEngines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTables", async function () {
    try {
       const data = await client.DescribeTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListRayClusterJobs", async function () {
    try {
       const data = await client.ListRayClusterJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AlterTableComment", async function () {
    try {
       const data = await client.AlterTableComment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListJobsBySpec", async function () {
    try {
       const data = await client.ListJobsBySpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeScripts", async function () {
    try {
       const data = await client.DescribeScripts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StopDeployment", async function () {
    try {
       const data = await client.StopDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateTrainingJobInstance", async function () {
    try {
       const data = await client.CreateTrainingJobInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateLab", async function () {
    try {
       const data = await client.CreateLab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListInferenceServices", async function () {
    try {
       const data = await client.ListInferenceServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ReportHeartbeatMetaData", async function () {
    try {
       const data = await client.ReportHeartbeatMetaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayClusterPods", async function () {
    try {
       const data = await client.GetRayClusterPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListTaskJobLogDetail", async function () {
    try {
       const data = await client.ListTaskJobLogDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateModelVersion", async function () {
    try {
       const data = await client.CreateModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StartMlflowServer", async function () {
    try {
       const data = await client.StartMlflowServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GenerateCreateMangedTableSql", async function () {
    try {
       const data = await client.GenerateCreateMangedTableSql({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeResultDownload", async function () {
    try {
       const data = await client.DescribeResultDownload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RollbackDataEngineImage", async function () {
    try {
       const data = await client.RollbackDataEngineImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSubUserAccessPolicy", async function () {
    try {
       const data = await client.DescribeSubUserAccessPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateSparkSessionBatchSQL", async function () {
    try {
       const data = await client.CreateSparkSessionBatchSQL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateClusterGroup", async function () {
    try {
       const data = await client.CreateClusterGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNotebookSessionStatements", async function () {
    try {
       const data = await client.DescribeNotebookSessionStatements({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GrantDLCCatalogAccess", async function () {
    try {
       const data = await client.GrantDLCCatalogAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateJobFromDefinition", async function () {
    try {
       const data = await client.CreateJobFromDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StopBenchmarkTask", async function () {
    try {
       const data = await client.StopBenchmarkTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeCatalogTableNamesPage", async function () {
    try {
       const data = await client.DescribeCatalogTableNamesPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListBenchmarkTasks", async function () {
    try {
       const data = await client.ListBenchmarkTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListDeployments", async function () {
    try {
       const data = await client.ListDeployments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetLabPods", async function () {
    try {
       const data = await client.GetLabPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSaleResourceInfo", async function () {
    try {
       const data = await client.DescribeSaleResourceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateResultDownload", async function () {
    try {
       const data = await client.CreateResultDownload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AttachDataMaskPolicy", async function () {
    try {
       const data = await client.AttachDataMaskPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListMlflowServers", async function () {
    try {
       const data = await client.ListMlflowServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteInferenceService", async function () {
    try {
       const data = await client.DeleteInferenceService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateMlflowServer", async function () {
    try {
       const data = await client.CreateMlflowServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.AlterDMSDatabase", async function () {
    try {
       const data = await client.AlterDMSDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateJobSpec", async function () {
    try {
       const data = await client.CreateJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.QueryDashboardOverview", async function () {
    try {
       const data = await client.QueryDashboardOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeNotebookSessionLog", async function () {
    try {
       const data = await client.DescribeNotebookSessionLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetJobSpec", async function () {
    try {
       const data = await client.GetJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTrainingCheckpoints", async function () {
    try {
       const data = await client.DescribeTrainingCheckpoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CheckQueueName", async function () {
    try {
       const data = await client.CheckQueueName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayJobPodYaml", async function () {
    try {
       const data = await client.GetRayJobPodYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeJobDefinitions", async function () {
    try {
       const data = await client.DescribeJobDefinitions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteJobSpec", async function () {
    try {
       const data = await client.DeleteJobSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeRecommendedParams", async function () {
    try {
       const data = await client.DescribeRecommendedParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.GetRayJob", async function () {
    try {
       const data = await client.GetRayJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.SubmitTrainingJob", async function () {
    try {
       const data = await client.SubmitTrainingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeTCLakeMetaInstance", async function () {
    try {
       const data = await client.DescribeTCLakeMetaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeResourceGroupUsageInfo", async function () {
    try {
       const data = await client.DescribeResourceGroupUsageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListTkeCosBuckets", async function () {
    try {
       const data = await client.ListTkeCosBuckets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteNativeSparkSession", async function () {
    try {
       const data = await client.DeleteNativeSparkSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeFlowDetailList", async function () {
    try {
       const data = await client.DescribeFlowDetailList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RestartDeployment", async function () {
    try {
       const data = await client.RestartDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteUser", async function () {
    try {
       const data = await client.DeleteUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteTable", async function () {
    try {
       const data = await client.DeleteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteClusterGroup", async function () {
    try {
       const data = await client.DeleteClusterGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeSparkSessionBatchSQLCost", async function () {
    try {
       const data = await client.DescribeSparkSessionBatchSQLCost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListInferenceModels", async function () {
    try {
       const data = await client.ListInferenceModels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteNotebookSession", async function () {
    try {
       const data = await client.DeleteNotebookSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateImportTask", async function () {
    try {
       const data = await client.CreateImportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateTasks", async function () {
    try {
       const data = await client.CreateTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CancelRayJob", async function () {
    try {
       const data = await client.CancelRayJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListServiceApiKeys", async function () {
    try {
       const data = await client.ListServiceApiKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListLabs", async function () {
    try {
       const data = await client.ListLabs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.CreateJobDefinition", async function () {
    try {
       const data = await client.CreateJobDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UnbindWorkGroupsFromUser", async function () {
    try {
       const data = await client.UnbindWorkGroupsFromUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeMCPTask", async function () {
    try {
       const data = await client.DescribeMCPTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeEmrClusterInfo", async function () {
    try {
       const data = await client.DescribeEmrClusterInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyPartitionQueue", async function () {
    try {
       const data = await client.ModifyPartitionQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.RestartDataEngine", async function () {
    try {
       const data = await client.RestartDataEngine({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateEngineResourceGroupNetworkConfigInfo", async function () {
    try {
       const data = await client.UpdateEngineResourceGroupNetworkConfigInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeDMSDatabase", async function () {
    try {
       const data = await client.DescribeDMSDatabase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeJobLog", async function () {
    try {
       const data = await client.DescribeJobLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DeleteCHDFSBindingProduct", async function () {
    try {
       const data = await client.DeleteCHDFSBindingProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.StopInferenceService", async function () {
    try {
       const data = await client.StopInferenceService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.UpdateApiKeyStatus", async function () {
    try {
       const data = await client.UpdateApiKeyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeMCPTaskResult", async function () {
    try {
       const data = await client.DescribeMCPTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ModifyDataEngineDescription", async function () {
    try {
       const data = await client.ModifyDataEngineDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeStoreLocation", async function () {
    try {
       const data = await client.DescribeStoreLocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.DescribeLakeFsInfo", async function () {
    try {
       const data = await client.DescribeLakeFsInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dlc.v20210125.ListBenchmarkSummary", async function () {
    try {
       const data = await client.ListBenchmarkSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
