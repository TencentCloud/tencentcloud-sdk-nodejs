
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

it("dlc.v20210125.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
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

it("dlc.v20210125.CreateNotebookSessionStatementSupportBatchSQL", async function () {
    try {
       const data = await client.CreateNotebookSessionStatementSupportBatchSQL({})
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

it("dlc.v20210125.AlterDMSDatabase", async function () {
    try {
       const data = await client.AlterDMSDatabase({})
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

it("dlc.v20210125.DescribeTaskResult", async function () {
    try {
       const data = await client.DescribeTaskResult({})
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

it("dlc.v20210125.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
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

it("dlc.v20210125.CreateSparkAppTask", async function () {
    try {
       const data = await client.CreateSparkAppTask({})
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

it("dlc.v20210125.DescribeDatabases", async function () {
    try {
       const data = await client.DescribeDatabases({})
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

it("dlc.v20210125.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
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

it("dlc.v20210125.AlterDMSPartition", async function () {
    try {
       const data = await client.AlterDMSPartition({})
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

it("dlc.v20210125.DescribeSparkAppJobs", async function () {
    try {
       const data = await client.DescribeSparkAppJobs({})
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

it("dlc.v20210125.CreateTasks", async function () {
    try {
       const data = await client.CreateTasks({})
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

it("dlc.v20210125.ModifyWorkGroup", async function () {
    try {
       const data = await client.ModifyWorkGroup({})
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

it("dlc.v20210125.ListTaskJobLogDetail", async function () {
    try {
       const data = await client.ListTaskJobLogDetail({})
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

it("dlc.v20210125.GenerateCreateMangedTableSql", async function () {
    try {
       const data = await client.GenerateCreateMangedTableSql({})
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

it("dlc.v20210125.CreateSparkApp", async function () {
    try {
       const data = await client.CreateSparkApp({})
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

it("dlc.v20210125.DescribeNotebookSessionStatements", async function () {
    try {
       const data = await client.DescribeNotebookSessionStatements({})
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

it("dlc.v20210125.CreateDMSDatabase", async function () {
    try {
       const data = await client.CreateDMSDatabase({})
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

it("dlc.v20210125.ModifyGovernEventRule", async function () {
    try {
       const data = await client.ModifyGovernEventRule({})
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

it("dlc.v20210125.DescribeNotebookSessionStatementSqlResult", async function () {
    try {
       const data = await client.DescribeNotebookSessionStatementSqlResult({})
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

it("dlc.v20210125.DescribeDataEngines", async function () {
    try {
       const data = await client.DescribeDataEngines({})
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

it("dlc.v20210125.CancelNotebookSessionStatementBatch", async function () {
    try {
       const data = await client.CancelNotebookSessionStatementBatch({})
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

it("dlc.v20210125.DescribeNotebookSessionLog", async function () {
    try {
       const data = await client.DescribeNotebookSessionLog({})
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

it("dlc.v20210125.DescribeDMSTable", async function () {
    try {
       const data = await client.DescribeDMSTable({})
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

it("dlc.v20210125.CreateWorkGroup", async function () {
    try {
       const data = await client.CreateWorkGroup({})
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

it("dlc.v20210125.ModifySparkApp", async function () {
    try {
       const data = await client.ModifySparkApp({})
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

it("dlc.v20210125.DetachWorkGroupPolicy", async function () {
    try {
       const data = await client.DetachWorkGroupPolicy({})
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

it("dlc.v20210125.CheckLockMetaData", async function () {
    try {
       const data = await client.CheckLockMetaData({})
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

it("dlc.v20210125.CreateTable", async function () {
    try {
       const data = await client.CreateTable({})
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

it("dlc.v20210125.DeleteUsersFromWorkGroup", async function () {
    try {
       const data = await client.DeleteUsersFromWorkGroup({})
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

it("dlc.v20210125.UnbindWorkGroupsFromUser", async function () {
    try {
       const data = await client.UnbindWorkGroupsFromUser({})
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

it("dlc.v20210125.CreateScript", async function () {
    try {
       const data = await client.CreateScript({})
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

it("dlc.v20210125.DescribeTable", async function () {
    try {
       const data = await client.DescribeTable({})
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

it("dlc.v20210125.DescribeDMSDatabase", async function () {
    try {
       const data = await client.DescribeDMSDatabase({})
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

it("dlc.v20210125.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
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

it("dlc.v20210125.CancelNotebookSessionStatement", async function () {
    try {
       const data = await client.CancelNotebookSessionStatement({})
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

it("dlc.v20210125.DescribeSparkAppJob", async function () {
    try {
       const data = await client.DescribeSparkAppJob({})
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

it("dlc.v20210125.DescribeLakeFsInfo", async function () {
    try {
       const data = await client.DescribeLakeFsInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
