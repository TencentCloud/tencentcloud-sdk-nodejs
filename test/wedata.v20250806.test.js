
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.wedata.v20250806.Client({
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
describe("wedata.v20250806.test.js", function () {

it("wedata.v20250806.CreateResourceFolder", async function () {
    try {
       const data = await client.CreateResourceFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListOpsWorkflows", async function () {
    try {
       const data = await client.ListOpsWorkflows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateSQLFolder", async function () {
    try {
       const data = await client.CreateSQLFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateCodeFolder", async function () {
    try {
       const data = await client.UpdateCodeFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListAlarmMessages", async function () {
    try {
       const data = await client.ListAlarmMessages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetWorkflow", async function () {
    try {
       const data = await client.GetWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListDownstreamTaskInstances", async function () {
    try {
       const data = await client.ListDownstreamTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateWorkflow", async function () {
    try {
       const data = await client.UpdateWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListUpstreamTasks", async function () {
    try {
       const data = await client.ListUpstreamTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetTaskVersion", async function () {
    try {
       const data = await client.GetTaskVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateDataBackfillPlan", async function () {
    try {
       const data = await client.CreateDataBackfillPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListSQLFolderContents", async function () {
    try {
       const data = await client.ListSQLFolderContents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.RunSQLScript", async function () {
    try {
       const data = await client.RunSQLScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateCodeFolder", async function () {
    try {
       const data = await client.CreateCodeFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListUpstreamOpsTasks", async function () {
    try {
       const data = await client.ListUpstreamOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateSQLScript", async function () {
    try {
       const data = await client.CreateSQLScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.PauseOpsTasksAsync", async function () {
    try {
       const data = await client.PauseOpsTasksAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetOpsAsyncJob", async function () {
    try {
       const data = await client.GetOpsAsyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateCodeFile", async function () {
    try {
       const data = await client.UpdateCodeFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateOpsTasksOwner", async function () {
    try {
       const data = await client.UpdateOpsTasksOwner({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteOpsAlarmRule", async function () {
    try {
       const data = await client.DeleteOpsAlarmRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetAlarmMessage", async function () {
    try {
       const data = await client.GetAlarmMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListDownstreamOpsTasks", async function () {
    try {
       const data = await client.ListDownstreamOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListTaskVersions", async function () {
    try {
       const data = await client.ListTaskVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.RerunTaskInstancesAsync", async function () {
    try {
       const data = await client.RerunTaskInstancesAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.StopOpsTasksAsync", async function () {
    try {
       const data = await client.StopOpsTasksAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteCodeFile", async function () {
    try {
       const data = await client.DeleteCodeFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteTask", async function () {
    try {
       const data = await client.DeleteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetSQLScript", async function () {
    try {
       const data = await client.GetSQLScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetTaskCode", async function () {
    try {
       const data = await client.GetTaskCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListCodeFolderContents", async function () {
    try {
       const data = await client.ListCodeFolderContents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateResourceFile", async function () {
    try {
       const data = await client.CreateResourceFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateSQLFolder", async function () {
    try {
       const data = await client.UpdateSQLFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListSQLScriptRuns", async function () {
    try {
       const data = await client.ListSQLScriptRuns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateOpsAlarmRule", async function () {
    try {
       const data = await client.UpdateOpsAlarmRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListOpsAlarmRules", async function () {
    try {
       const data = await client.ListOpsAlarmRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetOpsAlarmRule", async function () {
    try {
       const data = await client.GetOpsAlarmRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListResourceFolders", async function () {
    try {
       const data = await client.ListResourceFolders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListWorkflows", async function () {
    try {
       const data = await client.ListWorkflows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetOpsTask", async function () {
    try {
       const data = await client.GetOpsTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.SetSuccessTaskInstancesAsync", async function () {
    try {
       const data = await client.SetSuccessTaskInstancesAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateResourceFile", async function () {
    try {
       const data = await client.UpdateResourceFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListTaskInstances", async function () {
    try {
       const data = await client.ListTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetOpsWorkflow", async function () {
    try {
       const data = await client.GetOpsWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetOpsTaskCode", async function () {
    try {
       const data = await client.GetOpsTaskCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateOpsAlarmRule", async function () {
    try {
       const data = await client.CreateOpsAlarmRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListDataBackfillInstances", async function () {
    try {
       const data = await client.ListDataBackfillInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListUpstreamTaskInstances", async function () {
    try {
       const data = await client.ListUpstreamTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListWorkflowFolders", async function () {
    try {
       const data = await client.ListWorkflowFolders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteResourceFile", async function () {
    try {
       const data = await client.DeleteResourceFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateCodeFile", async function () {
    try {
       const data = await client.CreateCodeFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetTask", async function () {
    try {
       const data = await client.GetTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.SubmitTask", async function () {
    try {
       const data = await client.SubmitTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetTaskInstanceLog", async function () {
    try {
       const data = await client.GetTaskInstanceLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListResourceFiles", async function () {
    try {
       const data = await client.ListResourceFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateTask", async function () {
    try {
       const data = await client.UpdateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteWorkflow", async function () {
    try {
       const data = await client.DeleteWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetResourceFile", async function () {
    try {
       const data = await client.GetResourceFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteCodeFolder", async function () {
    try {
       const data = await client.DeleteCodeFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteResourceFolder", async function () {
    try {
       const data = await client.DeleteResourceFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateWorkflow", async function () {
    try {
       const data = await client.CreateWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.KillTaskInstancesAsync", async function () {
    try {
       const data = await client.KillTaskInstancesAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteWorkflowFolder", async function () {
    try {
       const data = await client.DeleteWorkflowFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListTasks", async function () {
    try {
       const data = await client.ListTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListTaskInstanceExecutions", async function () {
    try {
       const data = await client.ListTaskInstanceExecutions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetCodeFile", async function () {
    try {
       const data = await client.GetCodeFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.CreateWorkflowFolder", async function () {
    try {
       const data = await client.CreateWorkflowFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteSQLFolder", async function () {
    try {
       const data = await client.DeleteSQLFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.DeleteSQLScript", async function () {
    try {
       const data = await client.DeleteSQLScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateWorkflowFolder", async function () {
    try {
       const data = await client.UpdateWorkflowFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListOpsTasks", async function () {
    try {
       const data = await client.ListOpsTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.StopSQLScriptRun", async function () {
    try {
       const data = await client.StopSQLScriptRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.ListDownstreamTasks", async function () {
    try {
       const data = await client.ListDownstreamTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateResourceFolder", async function () {
    try {
       const data = await client.UpdateResourceFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.UpdateSQLScript", async function () {
    try {
       const data = await client.UpdateSQLScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wedata.v20250806.GetTaskInstance", async function () {
    try {
       const data = await client.GetTaskInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
