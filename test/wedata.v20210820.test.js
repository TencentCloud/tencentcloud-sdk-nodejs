
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.wedata.v20210820.Client({
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
describe("wedata.v20210820.test.js", function () {

it("wedata.v20210820.DescribeSqlTaskResult", async function () {
    try {
       const data = await client.DescribeSqlTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetResourcePathTree", async function () {
    try {
       const data = await client.GetResourcePathTree({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteIntegrationTask", async function () {
    try {
       const data = await client.DeleteIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.KillScheduleInstances", async function () {
    try {
       const data = await client.KillScheduleInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRealTimeTaskMetricOverview", async function () {
    try {
       const data = await client.DescribeRealTimeTaskMetricOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeScheduleInstances", async function () {
    try {
       const data = await client.DescribeScheduleInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchStopOpsTasks", async function () {
    try {
       const data = await client.BatchStopOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeMonitorsByPage", async function () {
    try {
       const data = await client.DescribeMonitorsByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyExecStrategy", async function () {
    try {
       const data = await client.ModifyExecStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchCreateTaskVersionAsync", async function () {
    try {
       const data = await client.BatchCreateTaskVersionAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRecycleTaskList", async function () {
    try {
       const data = await client.DescribeRecycleTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeGlobalWorkflowDs", async function () {
    try {
       const data = await client.DescribeGlobalWorkflowDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOperateOpsTasks", async function () {
    try {
       const data = await client.DescribeOperateOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationNode", async function () {
    try {
       const data = await client.DescribeIntegrationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DownloadSqlResult", async function () {
    try {
       const data = await client.DownloadSqlResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateBatchTaskResourceGroup", async function () {
    try {
       const data = await client.UpdateBatchTaskResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RemoveWorkflowDs", async function () {
    try {
       const data = await client.RemoveWorkflowDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeThirdTaskRunLog", async function () {
    try {
       const data = await client.DescribeThirdTaskRunLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsEventListener", async function () {
    try {
       const data = await client.DescribeDsEventListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeLock", async function () {
    try {
       const data = await client.DescribeLock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateCustomFunction", async function () {
    try {
       const data = await client.CreateCustomFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchStopTasksNew", async function () {
    try {
       const data = await client.BatchStopTasksNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitBatchTestRun", async function () {
    try {
       const data = await client.SubmitBatchTestRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ImportDsEvent", async function () {
    try {
       const data = await client.ImportDsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteProjectParamDs", async function () {
    try {
       const data = await client.DeleteProjectParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowListByProjectId", async function () {
    try {
       const data = await client.DescribeWorkflowListByProjectId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateTaskDs", async function () {
    try {
       const data = await client.UpdateTaskDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FindFuzzyTasksDs", async function () {
    try {
       const data = await client.FindFuzzyTasksDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCodeSearchInfoV2", async function () {
    try {
       const data = await client.DescribeCodeSearchInfoV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyIntegrationTask", async function () {
    try {
       const data = await client.ModifyIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeQualityScore", async function () {
    try {
       const data = await client.DescribeQualityScore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetCosToken", async function () {
    try {
       const data = await client.GetCosToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskOutputRegistries", async function () {
    try {
       const data = await client.DescribeTaskOutputRegistries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOrganizationalFunctions", async function () {
    try {
       const data = await client.DescribeOrganizationalFunctions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeProjectParamDs", async function () {
    try {
       const data = await client.DescribeProjectParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenewWorkflowDs", async function () {
    try {
       const data = await client.RenewWorkflowDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeApproveTypeList", async function () {
    try {
       const data = await client.DescribeApproveTypeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleTemplate", async function () {
    try {
       const data = await client.DescribeRuleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RegisterDsEventPublisher", async function () {
    try {
       const data = await client.RegisterDsEventPublisher({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.MakeUpOpsTasks", async function () {
    try {
       const data = await client.MakeUpOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEtlTaskType", async function () {
    try {
       const data = await client.DescribeEtlTaskType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataSourceList", async function () {
    try {
       const data = await client.DescribeDataSourceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SetTaskAlarmNew", async function () {
    try {
       const data = await client.SetTaskAlarmNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEventTypes", async function () {
    try {
       const data = await client.DescribeEventTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowTasksForProjectClone", async function () {
    try {
       const data = await client.DescribeWorkflowTasksForProjectClone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskName", async function () {
    try {
       const data = await client.ModifyTaskName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitIntegrationTask", async function () {
    try {
       const data = await client.SubmitIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDatasource", async function () {
    try {
       const data = await client.DescribeDatasource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateInLongAgent", async function () {
    try {
       const data = await client.UpdateInLongAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyWorkflowSchedule", async function () {
    try {
       const data = await client.ModifyWorkflowSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.AnalyzeDependentTasks", async function () {
    try {
       const data = await client.AnalyzeDependentTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyRule", async function () {
    try {
       const data = await client.ModifyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateBaseline", async function () {
    try {
       const data = await client.CreateBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeProjectParamDsPage", async function () {
    try {
       const data = await client.DescribeProjectParamDsPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CompareDsTaskVersionInfo", async function () {
    try {
       const data = await client.CompareDsTaskVersionInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationTasks", async function () {
    try {
       const data = await client.DescribeIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DownloadNewSqlResult", async function () {
    try {
       const data = await client.DownloadNewSqlResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDependencyWorkflowForProjectClone", async function () {
    try {
       const data = await client.DescribeDependencyWorkflowForProjectClone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchUpdateIntegrationTasks", async function () {
    try {
       const data = await client.BatchUpdateIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateBatchTaskInCharge", async function () {
    try {
       const data = await client.UpdateBatchTaskInCharge({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenewWorkflowOwnerDs", async function () {
    try {
       const data = await client.RenewWorkflowOwnerDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOperateOpsTaskDatasourceType", async function () {
    try {
       const data = await client.DescribeOperateOpsTaskDatasourceType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDatabaseInfoList", async function () {
    try {
       const data = await client.DescribeDatabaseInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDependOpsTasks", async function () {
    try {
       const data = await client.DescribeDependOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleGroupExecResultsByPageWithoutAuth", async function () {
    try {
       const data = await client.DescribeRuleGroupExecResultsByPageWithoutAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteDsEventListener", async function () {
    try {
       const data = await client.DeleteDsEventListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetRunSonListDs", async function () {
    try {
       const data = await client.GetRunSonListDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEvents", async function () {
    try {
       const data = await client.DescribeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.StopAdhocTask", async function () {
    try {
       const data = await client.StopAdhocTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEvent", async function () {
    try {
       const data = await client.DescribeEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableScoreTrend", async function () {
    try {
       const data = await client.DescribeTableScoreTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteDataSources", async function () {
    try {
       const data = await client.DeleteDataSources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetTestRunTaskInstancesStatusInfo", async function () {
    try {
       const data = await client.GetTestRunTaskInstancesStatusInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBatchOperateTask", async function () {
    try {
       const data = await client.DescribeBatchOperateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteRule", async function () {
    try {
       const data = await client.DeleteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckIntegrationTaskNameExists", async function () {
    try {
       const data = await client.CheckIntegrationTaskNameExists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataTypes", async function () {
    try {
       const data = await client.DescribeDataTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetOfflineDIInstanceList", async function () {
    try {
       const data = await client.GetOfflineDIInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEventIsAlarmTypes", async function () {
    try {
       const data = await client.DescribeEventIsAlarmTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FindAllFolder", async function () {
    try {
       const data = await client.FindAllFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ImportFiles", async function () {
    try {
       const data = await client.ImportFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataBases", async function () {
    try {
       const data = await client.DescribeDataBases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsLatestTaskVersionInfo", async function () {
    try {
       const data = await client.DescribeDsLatestTaskVersionInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRule", async function () {
    try {
       const data = await client.DescribeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleExecStat", async function () {
    try {
       const data = await client.DescribeRuleExecStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteTaskAlarmRegular", async function () {
    try {
       const data = await client.DeleteTaskAlarmRegular({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteResourceFile", async function () {
    try {
       const data = await client.DeleteResourceFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleTemplatesByPage", async function () {
    try {
       const data = await client.DescribeRuleTemplatesByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DagInstances", async function () {
    try {
       const data = await client.DagInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEventListenerTask", async function () {
    try {
       const data = await client.DescribeEventListenerTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UploadAdvanceRunParams", async function () {
    try {
       const data = await client.UploadAdvanceRunParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeExecStrategy", async function () {
    try {
       const data = await client.DescribeExecStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceByCycleReport", async function () {
    try {
       const data = await client.DescribeInstanceByCycleReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataTableImportProgress", async function () {
    try {
       const data = await client.DescribeDataTableImportProgress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateWorkflowDs", async function () {
    try {
       const data = await client.CreateWorkflowDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBaselineInstanceDag", async function () {
    try {
       const data = await client.DescribeBaselineInstanceDag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeParentTask", async function () {
    try {
       const data = await client.DescribeParentTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeColumnLineage", async function () {
    try {
       const data = await client.DescribeColumnLineage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CopyTaskDs", async function () {
    try {
       const data = await client.CopyTaskDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleGroupExecResultsByPage", async function () {
    try {
       const data = await client.DescribeRuleGroupExecResultsByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteResource", async function () {
    try {
       const data = await client.DeleteResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskReport", async function () {
    try {
       const data = await client.DescribeTaskReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowSchedulerInfoDs", async function () {
    try {
       const data = await client.DescribeWorkflowSchedulerInfoDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskInfoDs", async function () {
    try {
       const data = await client.ModifyTaskInfoDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationStatisticsRecordsTrend", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsRecordsTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchDeleteOpsTasks", async function () {
    try {
       const data = await client.BatchDeleteOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CommitRuleGroupTask", async function () {
    try {
       const data = await client.CommitRuleGroupTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOpsMakePlans", async function () {
    try {
       const data = await client.DescribeOpsMakePlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckDuplicateTemplateName", async function () {
    try {
       const data = await client.CheckDuplicateTemplateName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitTask", async function () {
    try {
       const data = await client.SubmitTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SavePositionsDs", async function () {
    try {
       const data = await client.SavePositionsDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataSourceInfoList", async function () {
    try {
       const data = await client.DescribeDataSourceInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskDetailDs", async function () {
    try {
       const data = await client.DescribeTaskDetailDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyRuleGroupSubscription", async function () {
    try {
       const data = await client.ModifyRuleGroupSubscription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.LockIntegrationTask", async function () {
    try {
       const data = await client.LockIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenameTaskDs", async function () {
    try {
       const data = await client.RenameTaskDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDependencyTasksForProjectClone", async function () {
    try {
       const data = await client.DescribeDependencyTasksForProjectClone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.JudgeResourceFile", async function () {
    try {
       const data = await client.JudgeResourceFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationStatistics", async function () {
    try {
       const data = await client.DescribeIntegrationStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTrendStat", async function () {
    try {
       const data = await client.DescribeTrendStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchModifyOwnersNew", async function () {
    try {
       const data = await client.BatchModifyOwnersNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FindDependTaskListsDs", async function () {
    try {
       const data = await client.FindDependTaskListsDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeImportableOfflineTask", async function () {
    try {
       const data = await client.DescribeImportableOfflineTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.KillTasksTestRun", async function () {
    try {
       const data = await client.KillTasksTestRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CountOpsInstanceState", async function () {
    try {
       const data = await client.CountOpsInstanceState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckDuplicateRuleName", async function () {
    try {
       const data = await client.CheckDuplicateRuleName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteDsEventPublisher", async function () {
    try {
       const data = await client.DeleteDsEventPublisher({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteFolder", async function () {
    try {
       const data = await client.DeleteFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskByCycleReport", async function () {
    try {
       const data = await client.DescribeTaskByCycleReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataCheckStat", async function () {
    try {
       const data = await client.DescribeDataCheckStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.MakeUpTasksNew", async function () {
    try {
       const data = await client.MakeUpTasksNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeProdWorkflowCanvasInfoDs", async function () {
    try {
       const data = await client.DescribeProdWorkflowCanvasInfoDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.KillInstances", async function () {
    try {
       const data = await client.KillInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.StopTestRun", async function () {
    try {
       const data = await client.StopTestRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateHiveTableByDDL", async function () {
    try {
       const data = await client.CreateHiveTableByDDL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateHiveTable", async function () {
    try {
       const data = await client.CreateHiveTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeStandardRuleDetailInfoList", async function () {
    try {
       const data = await client.DescribeStandardRuleDetailInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FreezeTasksByMultiWorkflow", async function () {
    try {
       const data = await client.FreezeTasksByMultiWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetBatchDetailErrorLog", async function () {
    try {
       const data = await client.GetBatchDetailErrorLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFieldBasicInfo", async function () {
    try {
       const data = await client.DescribeFieldBasicInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CommitWorkflow", async function () {
    try {
       const data = await client.CommitWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsParentFolderTree", async function () {
    try {
       const data = await client.DescribeDsParentFolderTree({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ImportWorkflowZip", async function () {
    try {
       const data = await client.ImportWorkflowZip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenameFile", async function () {
    try {
       const data = await client.RenameFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationStatisticsAgentStatus", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsAgentStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.StopBaseline", async function () {
    try {
       const data = await client.StopBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceLogList", async function () {
    try {
       const data = await client.DescribeInstanceLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskVersionDs", async function () {
    try {
       const data = await client.CreateTaskVersionDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchModifyOpsOwners", async function () {
    try {
       const data = await client.BatchModifyOpsOwners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskInParamDs", async function () {
    try {
       const data = await client.CreateTaskInParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInfoTransByTypeIdDs", async function () {
    try {
       const data = await client.DescribeInfoTransByTypeIdDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeScriptsImportTaskType", async function () {
    try {
       const data = await client.DescribeScriptsImportTaskType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceLogs", async function () {
    try {
       const data = await client.DescribeInstanceLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDiagnosticInfoByBaselineId", async function () {
    try {
       const data = await client.DescribeDiagnosticInfoByBaselineId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteRuleTemplate", async function () {
    try {
       const data = await client.DeleteRuleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateDsFolder", async function () {
    try {
       const data = await client.CreateDsFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RobAndLockIntegrationTask", async function () {
    try {
       const data = await client.RobAndLockIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateResourcePath", async function () {
    try {
       const data = await client.CreateResourcePath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.HeartBeat", async function () {
    try {
       const data = await client.HeartBeat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataDevelopTaskType", async function () {
    try {
       const data = await client.DescribeDataDevelopTaskType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeAllUsedVersionSon", async function () {
    try {
       const data = await client.DescribeAllUsedVersionSon({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteInLongAgent", async function () {
    try {
       const data = await client.DeleteInLongAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteResourcePath", async function () {
    try {
       const data = await client.DeleteResourcePath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsFolderTree", async function () {
    try {
       const data = await client.DescribeDsFolderTree({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitTaskTestRun", async function () {
    try {
       const data = await client.SubmitTaskTestRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteFilePath", async function () {
    try {
       const data = await client.DeleteFilePath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDimensionScore", async function () {
    try {
       const data = await client.DescribeDimensionScore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteBaseline", async function () {
    try {
       const data = await client.DeleteBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeSchedulerRunTimeInstanceCntByStatus", async function () {
    try {
       const data = await client.DescribeSchedulerRunTimeInstanceCntByStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowParamDs", async function () {
    try {
       const data = await client.DescribeWorkflowParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationStatisticsTaskStatus", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenameResourcePath", async function () {
    try {
       const data = await client.RenameResourcePath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchStartIntegrationTasks", async function () {
    try {
       const data = await client.BatchStartIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckTaskNameExist", async function () {
    try {
       const data = await client.CheckTaskNameExist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOpsMakePlanInstances", async function () {
    try {
       const data = await client.DescribeOpsMakePlanInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRelatedInstances", async function () {
    try {
       const data = await client.DescribeRelatedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsEventPublisherList", async function () {
    try {
       const data = await client.DescribeDsEventPublisherList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeSchedulerTaskCntByStatus", async function () {
    try {
       const data = await client.DescribeSchedulerTaskCntByStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTasksByPage", async function () {
    try {
       const data = await client.DescribeTasksByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateFolder", async function () {
    try {
       const data = await client.CreateFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateBatchTaskSchedule", async function () {
    try {
       const data = await client.UpdateBatchTaskSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFunctionTypes", async function () {
    try {
       const data = await client.DescribeFunctionTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeChildrenDs", async function () {
    try {
       const data = await client.DescribeChildrenDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RerunInstances", async function () {
    try {
       const data = await client.RerunInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceList", async function () {
    try {
       const data = await client.DescribeInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskRunHistory", async function () {
    try {
       const data = await client.DescribeTaskRunHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeAlarmReceiver", async function () {
    try {
       const data = await client.DescribeAlarmReceiver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskLockStatus", async function () {
    try {
       const data = await client.DescribeTaskLockStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceLog", async function () {
    try {
       const data = await client.DescribeInstanceLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteResourceFiles", async function () {
    try {
       const data = await client.DeleteResourceFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOperateTasks", async function () {
    try {
       const data = await client.DescribeOperateTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFileVersions", async function () {
    try {
       const data = await client.DescribeFileVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFatherDatasourceInfoDs", async function () {
    try {
       const data = await client.DescribeFatherDatasourceInfoDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCodeSearchAuditInfo", async function () {
    try {
       const data = await client.DescribeCodeSearchAuditInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEventListenerByTaskId", async function () {
    try {
       const data = await client.DescribeEventListenerByTaskId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskOutputRegistries", async function () {
    try {
       const data = await client.CreateTaskOutputRegistries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBaselineInstanceGantt", async function () {
    try {
       const data = await client.DescribeBaselineInstanceGantt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FreezeTasks", async function () {
    try {
       const data = await client.FreezeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.EditBaseline", async function () {
    try {
       const data = await client.EditBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteTaskInParamDs", async function () {
    try {
       const data = await client.DeleteTaskInParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCodeSearchCount", async function () {
    try {
       const data = await client.DescribeCodeSearchCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ImportProjectParamDs", async function () {
    try {
       const data = await client.ImportProjectParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchMakeUpIntegrationTasks", async function () {
    try {
       const data = await client.BatchMakeUpIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UploadResource", async function () {
    try {
       const data = await client.UploadResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleExecLog", async function () {
    try {
       const data = await client.DescribeRuleExecLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCodeSearchAuditInfoV2", async function () {
    try {
       const data = await client.DescribeCodeSearchAuditInfoV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.PreviewDataTableCsv", async function () {
    try {
       const data = await client.PreviewDataTableCsv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribePathTrees", async function () {
    try {
       const data = await client.DescribePathTrees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ExportWorkflowXml", async function () {
    try {
       const data = await client.ExportWorkflowXml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteEventListenerByTaskId", async function () {
    try {
       const data = await client.DeleteEventListenerByTaskId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskDs", async function () {
    try {
       const data = await client.CreateTaskDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateEventListener", async function () {
    try {
       const data = await client.UpdateEventListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RegisterEventListener", async function () {
    try {
       const data = await client.RegisterEventListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsEventDetail", async function () {
    try {
       const data = await client.DescribeDsEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskBindVirtualTask", async function () {
    try {
       const data = await client.DescribeTaskBindVirtualTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeProjectParamVersionInfoDs", async function () {
    try {
       const data = await client.DescribeProjectParamVersionInfoDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCrontabTopNDs", async function () {
    try {
       const data = await client.DescribeCrontabTopNDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsEventPublisher", async function () {
    try {
       const data = await client.DescribeDsEventPublisher({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteLink", async function () {
    try {
       const data = await client.DeleteLink({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitWorkflow", async function () {
    try {
       const data = await client.SubmitWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchDeleteIntegrationTasks", async function () {
    try {
       const data = await client.BatchDeleteIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskScript", async function () {
    try {
       const data = await client.ModifyTaskScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBelongTo", async function () {
    try {
       const data = await client.DescribeBelongTo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskTypeByScriptType", async function () {
    try {
       const data = await client.DescribeTaskTypeByScriptType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBaselineById", async function () {
    try {
       const data = await client.DescribeBaselineById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeQualityScoreTrend", async function () {
    try {
       const data = await client.DescribeQualityScoreTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDependTaskLists", async function () {
    try {
       const data = await client.DescribeDependTaskLists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ClearRecycleTask", async function () {
    try {
       const data = await client.ClearRecycleTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyDataSource", async function () {
    try {
       const data = await client.ModifyDataSource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskAlarmRegular", async function () {
    try {
       const data = await client.ModifyTaskAlarmRegular({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteTaskOutParamDs", async function () {
    try {
       const data = await client.DeleteTaskOutParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDrInstanceScriptContent", async function () {
    try {
       const data = await client.DescribeDrInstanceScriptContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateIntegrationNode", async function () {
    try {
       const data = await client.CreateIntegrationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchSuspendIntegrationTasks", async function () {
    try {
       const data = await client.BatchSuspendIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDependOpsTaskList", async function () {
    try {
       const data = await client.DescribeDependOpsTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskLinks", async function () {
    try {
       const data = await client.ModifyTaskLinks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetLatestAnalyseInfo", async function () {
    try {
       const data = await client.GetLatestAnalyseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteDsEvent", async function () {
    try {
       const data = await client.DeleteDsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleHistoryByPage", async function () {
    try {
       const data = await client.DescribeRuleHistoryByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDatabaseMetas", async function () {
    try {
       const data = await client.DescribeDatabaseMetas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitShellTask", async function () {
    try {
       const data = await client.SubmitShellTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RunRerunScheduleInstances", async function () {
    try {
       const data = await client.RunRerunScheduleInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchResumeIntegrationTasks", async function () {
    try {
       const data = await client.BatchResumeIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitSqlTask", async function () {
    try {
       const data = await client.SubmitSqlTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetPathTrees", async function () {
    try {
       const data = await client.GetPathTrees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskLatestRunTime", async function () {
    try {
       const data = await client.DescribeTaskLatestRunTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleExecHistory", async function () {
    try {
       const data = await client.DescribeRuleExecHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCustomFunctionVersionList", async function () {
    try {
       const data = await client.DescribeCustomFunctionVersionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateBrowsingHistory", async function () {
    try {
       const data = await client.CreateBrowsingHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateBatchTaskParams", async function () {
    try {
       const data = await client.UpdateBatchTaskParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetIntegrationNodeColumnSchema", async function () {
    try {
       const data = await client.GetIntegrationNodeColumnSchema({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOpsWorkflows", async function () {
    try {
       const data = await client.DescribeOpsWorkflows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDependTasksNew", async function () {
    try {
       const data = await client.DescribeDependTasksNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskInstance", async function () {
    try {
       const data = await client.DescribeTaskInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRealTimeTaskInstanceNodeInfo", async function () {
    try {
       const data = await client.DescribeRealTimeTaskInstanceNodeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDrInstancePage", async function () {
    try {
       const data = await client.DescribeDrInstancePage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetLatestTestRunInfo", async function () {
    try {
       const data = await client.GetLatestTestRunInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskOutParamDs", async function () {
    try {
       const data = await client.DescribeTaskOutParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBaselineAllTaskDag", async function () {
    try {
       const data = await client.DescribeBaselineAllTaskDag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskAlarmRegular", async function () {
    try {
       const data = await client.CreateTaskAlarmRegular({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetFileInfo", async function () {
    try {
       const data = await client.GetFileInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateScriptsImportTasksDs", async function () {
    try {
       const data = await client.CreateScriptsImportTasksDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateBatchTaskParameter", async function () {
    try {
       const data = await client.UpdateBatchTaskParameter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchStopIntegrationTasks", async function () {
    try {
       const data = await client.BatchStopIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCodeDetailV2", async function () {
    try {
       const data = await client.DescribeCodeDetailV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetOfflineInstanceList", async function () {
    try {
       const data = await client.GetOfflineInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeResourceManagePathTrees", async function () {
    try {
       const data = await client.DescribeResourceManagePathTrees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceByCycle", async function () {
    try {
       const data = await client.DescribeInstanceByCycle({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceLogFile", async function () {
    try {
       const data = await client.DescribeInstanceLogFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ResumeIntegrationTask", async function () {
    try {
       const data = await client.ResumeIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetAdvanceRunParams", async function () {
    try {
       const data = await client.GetAdvanceRunParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyBaselineAlarmStatus", async function () {
    try {
       const data = await client.ModifyBaselineAlarmStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UnlockIntegrationTask", async function () {
    try {
       const data = await client.UnlockIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UploadFilesDs", async function () {
    try {
       const data = await client.UploadFilesDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBrowsingHistories", async function () {
    try {
       const data = await client.DescribeBrowsingHistories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchCreateVirtualTaskDs", async function () {
    try {
       const data = await client.BatchCreateVirtualTaskDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsEventListenerList", async function () {
    try {
       const data = await client.DescribeDsEventListenerList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateDataSource", async function () {
    try {
       const data = await client.CreateDataSource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOpsInstanceLogList", async function () {
    try {
       const data = await client.DescribeOpsInstanceLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEventConsumeTasks", async function () {
    try {
       const data = await client.DescribeEventConsumeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeApproveList", async function () {
    try {
       const data = await client.DescribeApproveList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchUpdateTasksDs", async function () {
    try {
       const data = await client.BatchUpdateTasksDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckIntegrationNodeNameExists", async function () {
    try {
       const data = await client.CheckIntegrationNodeNameExists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeAlarmEvents", async function () {
    try {
       const data = await client.DescribeAlarmEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenameResourceFile", async function () {
    try {
       const data = await client.RenameResourceFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeSchedulerTaskTypeCnt", async function () {
    try {
       const data = await client.DescribeSchedulerTaskTypeCnt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GenHiveTableDDLSql", async function () {
    try {
       const data = await client.GenHiveTableDDLSql({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskScript", async function () {
    try {
       const data = await client.DescribeTaskScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SaveCustomFunction", async function () {
    try {
       const data = await client.SaveCustomFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateWorkflowInfo", async function () {
    try {
       const data = await client.UpdateWorkflowInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ReleaseLock", async function () {
    try {
       const data = await client.ReleaseLock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteBatchWorkflowDs", async function () {
    try {
       const data = await client.DeleteBatchWorkflowDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CommitRuleGroupExecResult", async function () {
    try {
       const data = await client.CommitRuleGroupExecResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowCanvasOperators", async function () {
    try {
       const data = await client.DescribeWorkflowCanvasOperators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInLongTkeClusterList", async function () {
    try {
       const data = await client.DescribeInLongTkeClusterList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteTaskOutputRegistry", async function () {
    try {
       const data = await client.DeleteTaskOutputRegistry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CommitExportTask", async function () {
    try {
       const data = await client.CommitExportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RestartInLongAgent", async function () {
    try {
       const data = await client.RestartInLongAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.TriggerDsEvent", async function () {
    try {
       const data = await client.TriggerDsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckTaskNameExistDs", async function () {
    try {
       const data = await client.CheckTaskNameExistDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateDsEvent", async function () {
    try {
       const data = await client.UpdateDsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckCustomFunctionPremise", async function () {
    try {
       const data = await client.CheckCustomFunctionPremise({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTestRun", async function () {
    try {
       const data = await client.DescribeTestRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyFolder", async function () {
    try {
       const data = await client.ModifyFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleExecDetail", async function () {
    try {
       const data = await client.DescribeRuleExecDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteRecycleTask", async function () {
    try {
       const data = await client.DeleteRecycleTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateOfflineTask", async function () {
    try {
       const data = await client.CreateOfflineTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskListByConditionDs", async function () {
    try {
       const data = await client.DescribeTaskListByConditionDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableSchemaInfo", async function () {
    try {
       const data = await client.DescribeTableSchemaInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskReportDetailList", async function () {
    try {
       const data = await client.DescribeTaskReportDetailList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableMetas", async function () {
    try {
       const data = await client.DescribeTableMetas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRealTimeTaskSpeed", async function () {
    try {
       const data = await client.DescribeRealTimeTaskSpeed({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateWorkflowOwner", async function () {
    try {
       const data = await client.UpdateWorkflowOwner({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsKettleServerFolderTree", async function () {
    try {
       const data = await client.DescribeDsKettleServerFolderTree({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDevelopmentSpaceSupportType", async function () {
    try {
       const data = await client.DescribeDevelopmentSpaceSupportType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeSchedulerInstanceStatus", async function () {
    try {
       const data = await client.DescribeSchedulerInstanceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateOpsMakePlan", async function () {
    try {
       const data = await client.CreateOpsMakePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ForceSucInstances", async function () {
    try {
       const data = await client.ForceSucInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleGroup", async function () {
    try {
       const data = await client.DescribeRuleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceLogDetail", async function () {
    try {
       const data = await client.DescribeInstanceLogDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ScriptUsedByOtherTaskDs", async function () {
    try {
       const data = await client.ScriptUsedByOtherTaskDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RollbackCustomFunctionVersion", async function () {
    try {
       const data = await client.RollbackCustomFunctionVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteDsFolder", async function () {
    try {
       const data = await client.DeleteDsFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRecycleTaskDetail", async function () {
    try {
       const data = await client.DescribeRecycleTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateRule", async function () {
    try {
       const data = await client.CreateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyRuleTemplate", async function () {
    try {
       const data = await client.ModifyRuleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeAllByFolderNew", async function () {
    try {
       const data = await client.DescribeAllByFolderNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteTaskDs", async function () {
    try {
       const data = await client.DeleteTaskDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FindTaskByRemotePath", async function () {
    try {
       const data = await client.FindTaskByRemotePath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEventDetail", async function () {
    try {
       const data = await client.DescribeEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckAlarmRegularNameExist", async function () {
    try {
       const data = await client.CheckAlarmRegularNameExist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBatchTestRun", async function () {
    try {
       const data = await client.DescribeBatchTestRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskOutParamDs", async function () {
    try {
       const data = await client.CreateTaskOutParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCodeDetail", async function () {
    try {
       const data = await client.DescribeCodeDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstancesInfoWithTaskInfo", async function () {
    try {
       const data = await client.DescribeInstancesInfoWithTaskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeAllTaskType", async function () {
    try {
       const data = await client.DescribeAllTaskType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsTaskVersionList", async function () {
    try {
       const data = await client.DescribeDsTaskVersionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFathers", async function () {
    try {
       const data = await client.DescribeFathers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBaselines", async function () {
    try {
       const data = await client.DescribeBaselines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyWorkflowInfo", async function () {
    try {
       const data = await client.ModifyWorkflowInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyIntegrationNode", async function () {
    try {
       const data = await client.ModifyIntegrationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchCreateIntegrationTaskAlarms", async function () {
    try {
       const data = await client.BatchCreateIntegrationTaskAlarms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFolderList", async function () {
    try {
       const data = await client.DescribeFolderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyApproveStatus", async function () {
    try {
       const data = await client.ModifyApproveStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.MakeUpWorkflowNew", async function () {
    try {
       const data = await client.MakeUpWorkflowNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsNotSubmitTasksAndCanRunByWorkflow", async function () {
    try {
       const data = await client.DescribeDsNotSubmitTasksAndCanRunByWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.QueryWorkflowVersion", async function () {
    try {
       const data = await client.QueryWorkflowVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyMonitorStatus", async function () {
    try {
       const data = await client.ModifyMonitorStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDrSonInstance", async function () {
    try {
       const data = await client.DescribeDrSonInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeEventCases", async function () {
    try {
       const data = await client.DescribeEventCases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleExecExportResult", async function () {
    try {
       const data = await client.DescribeRuleExecExportResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitPythonTask", async function () {
    try {
       const data = await client.SubmitPythonTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ImportWorkflowXml", async function () {
    try {
       const data = await client.ImportWorkflowXml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ListBatchDetail", async function () {
    try {
       const data = await client.ListBatchDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableBasicInfo", async function () {
    try {
       const data = await client.DescribeTableBasicInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateResourceDirectory", async function () {
    try {
       const data = await client.CreateResourceDirectory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RestoreRecycleTask", async function () {
    try {
       const data = await client.RestoreRecycleTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleGroupSubscription", async function () {
    try {
       const data = await client.DescribeRuleGroupSubscription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskInstances", async function () {
    try {
       const data = await client.DescribeTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ExportFiles", async function () {
    try {
       const data = await client.ExportFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateFileVersion", async function () {
    try {
       const data = await client.CreateFileVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteRecordList", async function () {
    try {
       const data = await client.DeleteRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FreezeTasksByWorkflowIds", async function () {
    try {
       const data = await client.FreezeTasksByWorkflowIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ReplaceProjectParamVersionDs", async function () {
    try {
       const data = await client.ReplaceProjectParamVersionDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeNewSqlTaskResult", async function () {
    try {
       const data = await client.DescribeNewSqlTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskAlarmRegulations", async function () {
    try {
       const data = await client.DescribeTaskAlarmRegulations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationTask", async function () {
    try {
       const data = await client.DescribeIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.GetResourceCosPath", async function () {
    try {
       const data = await client.GetResourceCosPath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowExecuteById", async function () {
    try {
       const data = await client.DescribeWorkflowExecuteById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOperateOpsTaskDatasource", async function () {
    try {
       const data = await client.DescribeOperateOpsTaskDatasource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeSonInstances", async function () {
    try {
       const data = await client.DescribeSonInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeChildrenPathTrees", async function () {
    try {
       const data = await client.DescribeChildrenPathTrees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateBatchTaskDatasource", async function () {
    try {
       const data = await client.UpdateBatchTaskDatasource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskFolder", async function () {
    try {
       const data = await client.CreateTaskFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RerunScheduleInstances", async function () {
    try {
       const data = await client.RerunScheduleInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeExecutionLog", async function () {
    try {
       const data = await client.DescribeExecutionLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowInfoById", async function () {
    try {
       const data = await client.DescribeWorkflowInfoById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFunctionKinds", async function () {
    try {
       const data = await client.DescribeFunctionKinds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitPySparkTask", async function () {
    try {
       const data = await client.SubmitPySparkTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskInstanceReportDetail", async function () {
    try {
       const data = await client.DescribeTaskInstanceReportDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataObjects", async function () {
    try {
       const data = await client.DescribeDataObjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FindDependTaskListDs", async function () {
    try {
       const data = await client.FindDependTaskListDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RunTask", async function () {
    try {
       const data = await client.RunTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeProdTasks", async function () {
    try {
       const data = await client.DescribeProdTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeScheduleInstance", async function () {
    try {
       const data = await client.DescribeScheduleInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeProjectParamVersionDs", async function () {
    try {
       const data = await client.DescribeProjectParamVersionDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateRuleTemplate", async function () {
    try {
       const data = await client.CreateRuleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ExportProjectParamDs", async function () {
    try {
       const data = await client.ExportProjectParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleExecResultsByPage", async function () {
    try {
       const data = await client.DescribeRuleExecResultsByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowForProjectClone", async function () {
    try {
       const data = await client.DescribeWorkflowForProjectClone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInLongAgentVpcList", async function () {
    try {
       const data = await client.DescribeInLongAgentVpcList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowOpsCanvasInfo", async function () {
    try {
       const data = await client.DescribeWorkflowOpsCanvasInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchKillIntegrationTaskInstances", async function () {
    try {
       const data = await client.BatchKillIntegrationTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskParamDs", async function () {
    try {
       const data = await client.DescribeTaskParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeClusterNamespaceList", async function () {
    try {
       const data = await client.DescribeClusterNamespaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskByCycle", async function () {
    try {
       const data = await client.DescribeTaskByCycle({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInLongAgentList", async function () {
    try {
       const data = await client.DescribeInLongAgentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchRunTasksDs", async function () {
    try {
       const data = await client.BatchRunTasksDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchDeleteTasksNew", async function () {
    try {
       const data = await client.BatchDeleteTasksNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteWorkflowNew", async function () {
    try {
       const data = await client.DeleteWorkflowNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.MoveTasksToFolder", async function () {
    try {
       const data = await client.MoveTasksToFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInstanceLastLog", async function () {
    try {
       const data = await client.DescribeInstanceLastLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.MakeUpTasksByWorkflow", async function () {
    try {
       const data = await client.MakeUpTasksByWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDataSourceWithoutInfo", async function () {
    try {
       const data = await client.DescribeDataSourceWithoutInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeCodeSearchInfo", async function () {
    try {
       const data = await client.DescribeCodeSearchInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateProjectParamDs", async function () {
    try {
       const data = await client.CreateProjectParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenewWorkflowSchedulerInfoDs", async function () {
    try {
       const data = await client.RenewWorkflowSchedulerInfoDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOfflineTaskToken", async function () {
    try {
       const data = await client.DescribeOfflineTaskToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RunTasksByMultiWorkflow", async function () {
    try {
       const data = await client.RunTasksByMultiWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UpdateBatchTaskAdvancedSettings", async function () {
    try {
       const data = await client.UpdateBatchTaskAdvancedSettings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskInParamDs", async function () {
    try {
       const data = await client.DescribeTaskInParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeOpsMakePlanTasks", async function () {
    try {
       const data = await client.DescribeOpsMakePlanTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskOutputRegistry", async function () {
    try {
       const data = await client.CreateTaskOutputRegistry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTopTableStat", async function () {
    try {
       const data = await client.DescribeTopTableStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyBaselineTaskAlarmStatus", async function () {
    try {
       const data = await client.ModifyBaselineTaskAlarmStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.TaskLog", async function () {
    try {
       const data = await client.TaskLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CheckTaskPriorityDs", async function () {
    try {
       const data = await client.CheckTaskPriorityDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeSuccessorOpsTaskInfos", async function () {
    try {
       const data = await client.DescribeSuccessorOpsTaskInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DryRunDIOfflineTask", async function () {
    try {
       const data = await client.DryRunDIOfflineTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleGroupTable", async function () {
    try {
       const data = await client.DescribeRuleGroupTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateIntegrationTask", async function () {
    try {
       const data = await client.CreateIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.KillOpsMakePlanInstances", async function () {
    try {
       const data = await client.KillOpsMakePlanInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskInfo", async function () {
    try {
       const data = await client.ModifyTaskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleTablesByPage", async function () {
    try {
       const data = await client.DescribeRuleTablesByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreatePath", async function () {
    try {
       const data = await client.CreatePath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateTaskParamDs", async function () {
    try {
       const data = await client.CreateTaskParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDependTasksDevDs", async function () {
    try {
       const data = await client.DescribeDependTasksDevDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyDimensionWeight", async function () {
    try {
       const data = await client.ModifyDimensionWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyDsFolder", async function () {
    try {
       const data = await client.ModifyDsFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskByStatusReport", async function () {
    try {
       const data = await client.DescribeTaskByStatusReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateInLongAgent", async function () {
    try {
       const data = await client.CreateInLongAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowByFordIds", async function () {
    try {
       const data = await client.DescribeWorkflowByFordIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ExportDsEvent", async function () {
    try {
       const data = await client.ExportDsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DiagnosePlus", async function () {
    try {
       const data = await client.DiagnosePlus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteIntegrationNode", async function () {
    try {
       const data = await client.DeleteIntegrationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ImportTableData", async function () {
    try {
       const data = await client.ImportTableData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.StopIntegrationTask", async function () {
    try {
       const data = await client.StopIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CopyWorkflowDs", async function () {
    try {
       const data = await client.CopyWorkflowDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RunForceSucScheduleInstances", async function () {
    try {
       const data = await client.RunForceSucScheduleInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitBaseline", async function () {
    try {
       const data = await client.SubmitBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.FreezeOpsTasks", async function () {
    try {
       const data = await client.FreezeOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.AcquireLock", async function () {
    try {
       const data = await client.AcquireLock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTemplateHistory", async function () {
    try {
       const data = await client.DescribeTemplateHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeAllParamDs", async function () {
    try {
       const data = await client.DescribeAllParamDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CommitIntegrationTask", async function () {
    try {
       const data = await client.CommitIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteOfflineTask", async function () {
    try {
       const data = await client.DeleteOfflineTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleDataSources", async function () {
    try {
       const data = await client.DescribeRuleDataSources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeToken", async function () {
    try {
       const data = await client.DescribeToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ForceSucScheduleInstances", async function () {
    try {
       const data = await client.ForceSucScheduleInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteProjectParamVersionDs", async function () {
    try {
       const data = await client.DeleteProjectParamVersionDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchForceSuccessIntegrationTaskInstances", async function () {
    try {
       const data = await client.BatchForceSuccessIntegrationTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeStreamTaskLogList", async function () {
    try {
       const data = await client.DescribeStreamTaskLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleDimStat", async function () {
    try {
       const data = await client.DescribeRuleDimStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableQualityDetails", async function () {
    try {
       const data = await client.DescribeTableQualityDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleGroupsByPage", async function () {
    try {
       const data = await client.DescribeRuleGroupsByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeColumnsMeta", async function () {
    try {
       const data = await client.DescribeColumnsMeta({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchDeleteTasksDsAsync", async function () {
    try {
       const data = await client.BatchDeleteTasksDsAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ImportOfflineTask", async function () {
    try {
       const data = await client.ImportOfflineTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskFolder", async function () {
    try {
       const data = await client.ModifyTaskFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRulesByPage", async function () {
    try {
       const data = await client.DescribeRulesByPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteProjectUsers", async function () {
    try {
       const data = await client.DeleteProjectUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeBaselineInstances", async function () {
    try {
       const data = await client.DescribeBaselineInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteFile", async function () {
    try {
       const data = await client.DeleteFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.UploadContent", async function () {
    try {
       const data = await client.UploadContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenameResource", async function () {
    try {
       const data = await client.RenameResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchRunOpsTask", async function () {
    try {
       const data = await client.BatchRunOpsTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ListBatchJob", async function () {
    try {
       const data = await client.ListBatchJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowCanvasOpLogs", async function () {
    try {
       const data = await client.DescribeWorkflowCanvasOpLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RegisterDsEvent", async function () {
    try {
       const data = await client.RegisterDsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationStatisticsTaskStatusTrend", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsTaskStatusTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskScriptDs", async function () {
    try {
       const data = await client.ModifyTaskScriptDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ExportWorkflowZip", async function () {
    try {
       const data = await client.ExportWorkflowZip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateWorkflow", async function () {
    try {
       const data = await client.CreateWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.ModifyTaskLinksDs", async function () {
    try {
       const data = await client.ModifyTaskLinksDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableLineage", async function () {
    try {
       const data = await client.DescribeTableLineage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchCreateTaskVersionDs", async function () {
    try {
       const data = await client.BatchCreateTaskVersionDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteWorkflowById", async function () {
    try {
       const data = await client.DeleteWorkflowById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRules", async function () {
    try {
       const data = await client.DescribeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsEvent", async function () {
    try {
       const data = await client.DescribeDsEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.StartIntegrationTask", async function () {
    try {
       const data = await client.StartIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteTaskFolder", async function () {
    try {
       const data = await client.DeleteTaskFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableMeta", async function () {
    try {
       const data = await client.DescribeTableMeta({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeStatisticInstanceStatusTrendOps", async function () {
    try {
       const data = await client.DescribeStatisticInstanceStatusTrendOps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableInfoList", async function () {
    try {
       const data = await client.DescribeTableInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRecordList", async function () {
    try {
       const data = await client.DescribeRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeDsTaskVersionInfo", async function () {
    try {
       const data = await client.DescribeDsTaskVersionInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitTestRun", async function () {
    try {
       const data = await client.SubmitTestRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleExecResults", async function () {
    try {
       const data = await client.DescribeRuleExecResults({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.TriggerEvent", async function () {
    try {
       const data = await client.TriggerEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchDeleteTasksDs", async function () {
    try {
       const data = await client.BatchDeleteTasksDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTasksForProjectClone", async function () {
    try {
       const data = await client.DescribeTasksForProjectClone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RenewWorkflowFolderDs", async function () {
    try {
       const data = await client.RenewWorkflowFolderDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationVersionNodesInfo", async function () {
    try {
       const data = await client.DescribeIntegrationVersionNodesInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DeleteCustomFunction", async function () {
    try {
       const data = await client.DeleteCustomFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RerunOpsMakePlanInstances", async function () {
    try {
       const data = await client.RerunOpsMakePlanInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeFolderWorkflowList", async function () {
    try {
       const data = await client.DescribeFolderWorkflowList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowTaskCount", async function () {
    try {
       const data = await client.DescribeWorkflowTaskCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeIntegrationStatisticsInstanceTrend", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsInstanceTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchRerunIntegrationTaskInstances", async function () {
    try {
       const data = await client.BatchRerunIntegrationTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateLink", async function () {
    try {
       const data = await client.CreateLink({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RegisterEvent", async function () {
    try {
       const data = await client.RegisterEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.JudgeTaskListenEvent", async function () {
    try {
       const data = await client.JudgeTaskListenEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.BatchStopWorkflowsByIds", async function () {
    try {
       const data = await client.BatchStopWorkflowsByIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeInLongAgentTaskList", async function () {
    try {
       const data = await client.DescribeInLongAgentTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SuspendIntegrationTask", async function () {
    try {
       const data = await client.SuspendIntegrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeProject", async function () {
    try {
       const data = await client.DescribeProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.RegisterDsEventListener", async function () {
    try {
       const data = await client.RegisterDsEventListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowCanvasInfoDs", async function () {
    try {
       const data = await client.DescribeWorkflowCanvasInfoDs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.MoveFile", async function () {
    try {
       const data = await client.MoveFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.CreateOrUpdateResource", async function () {
    try {
       const data = await client.CreateOrUpdateResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTableLineageInfo", async function () {
    try {
       const data = await client.DescribeTableLineageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.SubmitCustomFunction", async function () {
    try {
       const data = await client.SubmitCustomFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeWorkflowCanvasInfo", async function () {
    try {
       const data = await client.DescribeWorkflowCanvasInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTemplateDimCount", async function () {
    try {
       const data = await client.DescribeTemplateDimCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeRuleTemplates", async function () {
    try {
       const data = await client.DescribeRuleTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DescribeTaskParentRunTime", async function () {
    try {
       const data = await client.DescribeTaskParentRunTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
