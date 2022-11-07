
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

it("wedata.v20210820.DeleteIntegrationTask", async function () {
    try {
       const data = await client.DeleteIntegrationTask({})
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

it("wedata.v20210820.GetOfflineInstanceList", async function () {
    try {
       const data = await client.GetOfflineInstanceList({})
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

it("wedata.v20210820.DescribeInLongAgentVpcList", async function () {
    try {
       const data = await client.DescribeInLongAgentVpcList({})
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

it("wedata.v20210820.BatchKillIntegrationTaskInstances", async function () {
    try {
       const data = await client.BatchKillIntegrationTaskInstances({})
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

it("wedata.v20210820.DescribeIntegrationNode", async function () {
    try {
       const data = await client.DescribeIntegrationNode({})
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

it("wedata.v20210820.DescribeInLongAgentList", async function () {
    try {
       const data = await client.DescribeInLongAgentList({})
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

it("wedata.v20210820.ResumeIntegrationTask", async function () {
    try {
       const data = await client.ResumeIntegrationTask({})
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

it("wedata.v20210820.DescribeIntegrationStatisticsAgentStatus", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsAgentStatus({})
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

it("wedata.v20210820.BatchStopTasksNew", async function () {
    try {
       const data = await client.BatchStopTasksNew({})
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

it("wedata.v20210820.CreateDataSource", async function () {
    try {
       const data = await client.CreateDataSource({})
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

it("wedata.v20210820.DescribeOfflineTaskToken", async function () {
    try {
       const data = await client.DescribeOfflineTaskToken({})
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

it("wedata.v20210820.DescribeOrganizationalFunctions", async function () {
    try {
       const data = await client.DescribeOrganizationalFunctions({})
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

it("wedata.v20210820.TaskLog", async function () {
    try {
       const data = await client.TaskLog({})
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

it("wedata.v20210820.DescribeInLongTkeClusterList", async function () {
    try {
       const data = await client.DescribeInLongTkeClusterList({})
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

it("wedata.v20210820.ModifyIntegrationTask", async function () {
    try {
       const data = await client.ModifyIntegrationTask({})
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

it("wedata.v20210820.ModifyTaskName", async function () {
    try {
       const data = await client.ModifyTaskName({})
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

it("wedata.v20210820.DescribeRelatedInstances", async function () {
    try {
       const data = await client.DescribeRelatedInstances({})
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

it("wedata.v20210820.CreateInLongAgent", async function () {
    try {
       const data = await client.CreateInLongAgent({})
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

it("wedata.v20210820.DescribeTableSchemaInfo", async function () {
    try {
       const data = await client.DescribeTableSchemaInfo({})
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

it("wedata.v20210820.DescribeTaskReportDetailList", async function () {
    try {
       const data = await client.DescribeTaskReportDetailList({})
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

it("wedata.v20210820.BatchUpdateIntegrationTasks", async function () {
    try {
       const data = await client.BatchUpdateIntegrationTasks({})
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

it("wedata.v20210820.DescribeDatabaseInfoList", async function () {
    try {
       const data = await client.DescribeDatabaseInfoList({})
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

it("wedata.v20210820.FreezeTasks", async function () {
    try {
       const data = await client.FreezeTasks({})
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

it("wedata.v20210820.ModifyDataSource", async function () {
    try {
       const data = await client.ModifyDataSource({})
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

it("wedata.v20210820.ModifyFolder", async function () {
    try {
       const data = await client.ModifyFolder({})
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

it("wedata.v20210820.BatchMakeUpIntegrationTasks", async function () {
    try {
       const data = await client.BatchMakeUpIntegrationTasks({})
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

it("wedata.v20210820.ModifyTaskLinks", async function () {
    try {
       const data = await client.ModifyTaskLinks({})
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

it("wedata.v20210820.DescribeDataSourceWithoutInfo", async function () {
    try {
       const data = await client.DescribeDataSourceWithoutInfo({})
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

it("wedata.v20210820.DescribeIntegrationStatisticsTaskStatusTrend", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsTaskStatusTrend({})
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

it("wedata.v20210820.CreateWorkflow", async function () {
    try {
       const data = await client.CreateWorkflow({})
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

it("wedata.v20210820.ModifyTaskScript", async function () {
    try {
       const data = await client.ModifyTaskScript({})
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

it("wedata.v20210820.DescribeTaskInstances", async function () {
    try {
       const data = await client.DescribeTaskInstances({})
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

it("wedata.v20210820.TriggerEvent", async function () {
    try {
       const data = await client.TriggerEvent({})
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

it("wedata.v20210820.DescribeIntegrationStatisticsRecordsTrend", async function () {
    try {
       const data = await client.DescribeIntegrationStatisticsRecordsTrend({})
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

it("wedata.v20210820.DescribeInstanceLastLog", async function () {
    try {
       const data = await client.DescribeInstanceLastLog({})
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

it("wedata.v20210820.RegisterEvent", async function () {
    try {
       const data = await client.RegisterEvent({})
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

it("wedata.v20210820.BatchResumeIntegrationTasks", async function () {
    try {
       const data = await client.BatchResumeIntegrationTasks({})
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

it("wedata.v20210820.SubmitTask", async function () {
    try {
       const data = await client.SubmitTask({})
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

it("wedata.v20210820.DescribeInLongAgentTaskList", async function () {
    try {
       const data = await client.DescribeInLongAgentTaskList({})
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

it("wedata.v20210820.DescribeKafkaTopicInfo", async function () {
    try {
       const data = await client.DescribeKafkaTopicInfo({})
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

it("wedata.v20210820.CreateOrUpdateResource", async function () {
    try {
       const data = await client.CreateOrUpdateResource({})
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

it("wedata.v20210820.DescribeIntegrationStatistics", async function () {
    try {
       const data = await client.DescribeIntegrationStatistics({})
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

it("wedata.v20210820.BatchStopIntegrationTasks", async function () {
    try {
       const data = await client.BatchStopIntegrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
