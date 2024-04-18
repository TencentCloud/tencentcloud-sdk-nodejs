
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

it("wedata.v20210820.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
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

it("wedata.v20210820.DescribeIntegrationStatisticsRecordsTrend", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsRecordsTrend({})
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

it("wedata.v20210820.GetFileInfo", async function () {
    try {
       const data = await client.GetFileInfo({})
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

it("wedata.v20210820.CreateRuleTemplate", async function () {
    try {
       const data = await client.CreateRuleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20210820.DiagnosePro", async function () {
    try {
       const data = await client.DiagnosePro({})
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

it("wedata.v20210820.BatchKillIntegrationTaskInstances", async function () {
    try {
       const data = await client.BatchKillIntegrationTaskInstances({})
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

it("wedata.v20210820.RegisterEventListener", async function () {
    try {
       const data = await client.RegisterEventListener({})
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

it("wedata.v20210820.DescribeOperateOpsTasks", async function () {
    try {
       const data = await client.DescribeOperateOpsTasks({})
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

it("wedata.v20210820.DescribeIntegrationNode", async function () {
    try {
       const data = await client.DescribeIntegrationNode({})
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

it("wedata.v20210820.BatchSuspendIntegrationTasks", async function () {
    try {
       const data = await client.BatchSuspendIntegrationTasks({})
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

it("wedata.v20210820.DescribeDsParentFolderTree", async function () {
    try {
       const data = await client.DescribeDsParentFolderTree({})
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

it("wedata.v20210820.ModifyTaskName", async function () {
    try {
       const data = await client.ModifyTaskName({})
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

it("wedata.v20210820.CreateCustomFunction", async function () {
    try {
       const data = await client.CreateCustomFunction({})
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

it("wedata.v20210820.BatchStopIntegrationTasks", async function () {
    try {
       const data = await client.BatchStopIntegrationTasks({})
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

it("wedata.v20210820.DescribeOfflineTaskToken", async function () {
    try {
       const data = await client.DescribeOfflineTaskToken({})
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

it("wedata.v20210820.DescribeApproveList", async function () {
    try {
       const data = await client.DescribeApproveList({})
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

it("wedata.v20210820.RunTasksByMultiWorkflow", async function () {
    try {
       const data = await client.RunTasksByMultiWorkflow({})
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

it("wedata.v20210820.DescribeRuleDimStat", async function () {
    try {
       const data = await client.DescribeRuleDimStat({})
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

it("wedata.v20210820.DescribeTaskRunHistory", async function () {
    try {
       const data = await client.DescribeTaskRunHistory({})
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

it("wedata.v20210820.DescribeTopTableStat", async function () {
    try {
       const data = await client.DescribeTopTableStat({})
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

it("wedata.v20210820.RunForceSucScheduleInstances", async function () {
    try {
       const data = await client.RunForceSucScheduleInstances({})
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

it("wedata.v20210820.DescribeApproveTypeList", async function () {
    try {
       const data = await client.DescribeApproveTypeList({})
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

it("wedata.v20210820.DeleteFilePath", async function () {
    try {
       const data = await client.DeleteFilePath({})
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

it("wedata.v20210820.DescribeDimensionScore", async function () {
    try {
       const data = await client.DescribeDimensionScore({})
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

it("wedata.v20210820.DescribeRule", async function () {
    try {
       const data = await client.DescribeRule({})
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

it("wedata.v20210820.DescribeDataSourceList", async function () {
    try {
       const data = await client.DescribeDataSourceList({})
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

it("wedata.v20210820.TriggerDsEvent", async function () {
    try {
       const data = await client.TriggerDsEvent({})
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

it("wedata.v20210820.DescribeSchedulerTaskCntByStatus", async function () {
    try {
       const data = await client.DescribeSchedulerTaskCntByStatus({})
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

it("wedata.v20210820.DescribeTableScoreTrend", async function () {
    try {
       const data = await client.DescribeTableScoreTrend({})
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

it("wedata.v20210820.BatchStartIntegrationTasks", async function () {
    try {
       const data = await client.BatchStartIntegrationTasks({})
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

it("wedata.v20210820.DescribeRuleExecDetail", async function () {
    try {
       const data = await client.DescribeRuleExecDetail({})
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

it("wedata.v20210820.DescribeDatasource", async function () {
    try {
       const data = await client.DescribeDatasource({})
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

it("wedata.v20210820.DescribeWorkflowInfoById", async function () {
    try {
       const data = await client.DescribeWorkflowInfoById({})
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

it("wedata.v20210820.GetOfflineInstanceList", async function () {
    try {
       const data = await client.GetOfflineInstanceList({})
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

it("wedata.v20210820.ModifyWorkflowSchedule", async function () {
    try {
       const data = await client.ModifyWorkflowSchedule({})
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

it("wedata.v20210820.ModifyRule", async function () {
    try {
       const data = await client.ModifyRule({})
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

it("wedata.v20210820.DeleteDataSources", async function () {
    try {
       const data = await client.DeleteDataSources({})
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

it("wedata.v20210820.StopIntegrationTask", async function () {
    try {
       const data = await client.StopIntegrationTask({})
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

it("wedata.v20210820.DescribeInstanceList", async function () {
    try {
       const data = await client.DescribeInstanceList({})
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

it("wedata.v20210820.DescribeSchedulerInstanceStatus", async function () {
    try {
       const data = await client.DescribeSchedulerInstanceStatus({})
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

it("wedata.v20210820.BatchUpdateIntegrationTasks", async function () {
    try {
       const data = await client.BatchUpdateIntegrationTasks({})
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

it("wedata.v20210820.CreateOpsMakePlan", async function () {
    try {
       const data = await client.CreateOpsMakePlan({})
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

it("wedata.v20210820.DescribeRuleGroup", async function () {
    try {
       const data = await client.DescribeRuleGroup({})
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

it("wedata.v20210820.DescribeInstanceLogDetail", async function () {
    try {
       const data = await client.DescribeInstanceLogDetail({})
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

it("wedata.v20210820.CreateHiveTableByDDL", async function () {
    try {
       const data = await client.CreateHiveTableByDDL({})
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

it("wedata.v20210820.DescribeResourceManagePathTrees", async function () {
    try {
       const data = await client.DescribeResourceManagePathTrees({})
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

it("wedata.v20210820.DescribeEvent", async function () {
    try {
       const data = await client.DescribeEvent({})
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

it("wedata.v20210820.CheckAlarmRegularNameExist", async function () {
    try {
       const data = await client.CheckAlarmRegularNameExist({})
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

it("wedata.v20210820.DeleteFile", async function () {
    try {
       const data = await client.DeleteFile({})
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

it("wedata.v20210820.UploadContent", async function () {
    try {
       const data = await client.UploadContent({})
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

it("wedata.v20210820.BatchRunOpsTask", async function () {
    try {
       const data = await client.BatchRunOpsTask({})
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

it("wedata.v20210820.ModifyWorkflowInfo", async function () {
    try {
       const data = await client.ModifyWorkflowInfo({})
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

it("wedata.v20210820.RunRerunScheduleInstances", async function () {
    try {
       const data = await client.RunRerunScheduleInstances({})
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

it("wedata.v20210820.DeleteResourceFile", async function () {
    try {
       const data = await client.DeleteResourceFile({})
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

it("wedata.v20210820.DagInstances", async function () {
    try {
       const data = await client.DagInstances({})
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

it("wedata.v20210820.DescribeInstanceLogFile", async function () {
    try {
       const data = await client.DescribeInstanceLogFile({})
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

it("wedata.v20210820.ModifyMonitorStatus", async function () {
    try {
       const data = await client.ModifyMonitorStatus({})
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

it("wedata.v20210820.DescribeTableLineage", async function () {
    try {
       const data = await client.DescribeTableLineage({})
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

it("wedata.v20210820.CreateWorkflowDs", async function () {
    try {
       const data = await client.CreateWorkflowDs({})
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

it("wedata.v20210820.GetOfflineDIInstanceList", async function () {
    try {
       const data = await client.GetOfflineDIInstanceList({})
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

it("wedata.v20210820.StartIntegrationTask", async function () {
    try {
       const data = await client.StartIntegrationTask({})
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

it("wedata.v20210820.DescribeIntegrationTasks", async function () {
    try {
       const data = await client.DescribeIntegrationTasks({})
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

it("wedata.v20210820.DescribeColumnLineage", async function () {
    try {
       const data = await client.DescribeColumnLineage({})
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

it("wedata.v20210820.DescribeTableInfoList", async function () {
    try {
       const data = await client.DescribeTableInfoList({})
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

it("wedata.v20210820.DeleteTaskDs", async function () {
    try {
       const data = await client.DeleteTaskDs({})
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

it("wedata.v20210820.DeleteTaskAlarmRegular", async function () {
    try {
       const data = await client.DeleteTaskAlarmRegular({})
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

it("wedata.v20210820.FreezeTasksByWorkflowIds", async function () {
    try {
       const data = await client.FreezeTasksByWorkflowIds({})
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

it("wedata.v20210820.SaveCustomFunction", async function () {
    try {
       const data = await client.SaveCustomFunction({})
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

it("wedata.v20210820.DescribeTaskAlarmRegulations", async function () {
    try {
       const data = await client.DescribeTaskAlarmRegulations({})
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

it("wedata.v20210820.ModifyTaskAlarmRegular", async function () {
    try {
       const data = await client.ModifyTaskAlarmRegular({})
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

it("wedata.v20210820.DescribeTemplateDimCount", async function () {
    try {
       const data = await client.DescribeTemplateDimCount({})
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

it("wedata.v20210820.DescribeIntegrationTask", async function () {
    try {
       const data = await client.DescribeIntegrationTask({})
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

it("wedata.v20210820.CountOpsInstanceState", async function () {
    try {
       const data = await client.CountOpsInstanceState({})
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

it("wedata.v20210820.DescribeWorkflowExecuteById", async function () {
    try {
       const data = await client.DescribeWorkflowExecuteById({})
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

it("wedata.v20210820.DescribeInstanceLastLog", async function () {
    try {
       const data = await client.DescribeInstanceLastLog({})
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

it("wedata.v20210820.RegisterEvent", async function () {
    try {
       const data = await client.RegisterEvent({})
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

it("wedata.v20210820.DescribeWorkflowCanvasInfo", async function () {
    try {
       const data = await client.DescribeWorkflowCanvasInfo({})
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

it("wedata.v20210820.BatchResumeIntegrationTasks", async function () {
    try {
       const data = await client.BatchResumeIntegrationTasks({})
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

it("wedata.v20210820.SubmitTask", async function () {
    try {
       const data = await client.SubmitTask({})
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

it("wedata.v20210820.DescribeDataSourceInfoList", async function () {
    try {
       const data = await client.DescribeDataSourceInfoList({})
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

it("wedata.v20210820.TaskLog", async function () {
    try {
       const data = await client.TaskLog({})
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

it("wedata.v20210820.UpdateWorkflowOwner", async function () {
    try {
       const data = await client.UpdateWorkflowOwner({})
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

it("wedata.v20210820.DescribeProject", async function () {
    try {
       const data = await client.DescribeProject({})
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

it("wedata.v20210820.BatchRerunIntegrationTaskInstances", async function () {
    try {
       const data = await client.BatchRerunIntegrationTaskInstances({})
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

it("wedata.v20210820.DescribeRealTimeTaskInstanceNodeInfo", async function () {
    try {
       const data = await client.DescribeRealTimeTaskInstanceNodeInfo({})
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

it("wedata.v20210820.BatchStopWorkflowsByIds", async function () {
    try {
       const data = await client.BatchStopWorkflowsByIds({})
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

})
