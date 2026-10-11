
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.databuddy.v20260715.Client({
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
describe("databuddy.v20260715.test.js", function () {

it("databuddy.v20260715.UnbindWorkflowBundle", async function () {
    try {
       const data = await client.UnbindWorkflowBundle({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateWorkflow", async function () {
    try {
       const data = await client.UpdateWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.AddConsoleUsers", async function () {
    try {
       const data = await client.AddConsoleUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetWorkflow", async function () {
    try {
       const data = await client.GetWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateSchema", async function () {
    try {
       const data = await client.CreateSchema({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetWorkflowTaskRun", async function () {
    try {
       const data = await client.GetWorkflowTaskRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListWorkflowTaskRuns", async function () {
    try {
       const data = await client.ListWorkflowTaskRuns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetWorkspace", async function () {
    try {
       const data = await client.GetWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetWorkflowRun", async function () {
    try {
       const data = await client.GetWorkflowRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetFolder", async function () {
    try {
       const data = await client.GetFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteConsoleGroups", async function () {
    try {
       const data = await client.DeleteConsoleGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.AddWorkspaceUsers", async function () {
    try {
       const data = await client.AddWorkspaceUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListWorkspaces", async function () {
    try {
       const data = await client.ListWorkspaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetFile", async function () {
    try {
       const data = await client.GetFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListWorkflows", async function () {
    try {
       const data = await client.ListWorkflows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.RemoveWorkspaceGroups", async function () {
    try {
       const data = await client.RemoveWorkspaceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteCatalog", async function () {
    try {
       const data = await client.DeleteCatalog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetTables", async function () {
    try {
       const data = await client.GetTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateWorkspaceUsersRoles", async function () {
    try {
       const data = await client.UpdateWorkspaceUsersRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateWorkspace", async function () {
    try {
       const data = await client.CreateWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.KillWorkflowRun", async function () {
    try {
       const data = await client.KillWorkflowRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteWorkflow", async function () {
    try {
       const data = await client.DeleteWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetSchema", async function () {
    try {
       const data = await client.GetSchema({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListSchemas", async function () {
    try {
       const data = await client.ListSchemas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateWorkspace", async function () {
    try {
       const data = await client.UpdateWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteFile", async function () {
    try {
       const data = await client.DeleteFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateConsoleGroup", async function () {
    try {
       const data = await client.CreateConsoleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateWorkspaceGroupsRoles", async function () {
    try {
       const data = await client.UpdateWorkspaceGroupsRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateCatalog", async function () {
    try {
       const data = await client.CreateCatalog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteSchema", async function () {
    try {
       const data = await client.DeleteSchema({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateWorkspaceRole", async function () {
    try {
       const data = await client.CreateWorkspaceRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.StartCompute", async function () {
    try {
       const data = await client.StartCompute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateFolder", async function () {
    try {
       const data = await client.CreateFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListConsoleUsers", async function () {
    try {
       const data = await client.ListConsoleUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.RemoveConsoleUsers", async function () {
    try {
       const data = await client.RemoveConsoleUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.StopCompute", async function () {
    try {
       const data = await client.StopCompute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.RunWorkflow", async function () {
    try {
       const data = await client.RunWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListFiles", async function () {
    try {
       const data = await client.ListFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListTables", async function () {
    try {
       const data = await client.ListTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListCatalogs", async function () {
    try {
       const data = await client.ListCatalogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteFolder", async function () {
    try {
       const data = await client.DeleteFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListConsoleGroups", async function () {
    try {
       const data = await client.ListConsoleGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetCatalog", async function () {
    try {
       const data = await client.GetCatalog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListWorkspaceGroups", async function () {
    try {
       const data = await client.ListWorkspaceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListConsoleRoles", async function () {
    try {
       const data = await client.ListConsoleRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.RerunWorkflowRun", async function () {
    try {
       const data = await client.RerunWorkflowRun({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateConsoleGroup", async function () {
    try {
       const data = await client.UpdateConsoleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListWorkspaceUsers", async function () {
    try {
       const data = await client.ListWorkspaceUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteTable", async function () {
    try {
       const data = await client.DeleteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateWorkflow", async function () {
    try {
       const data = await client.CreateWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateFile", async function () {
    try {
       const data = await client.UpdateFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateConsoleUsers", async function () {
    try {
       const data = await client.UpdateConsoleUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.AddWorkspaceGroups", async function () {
    try {
       const data = await client.AddWorkspaceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListWorkspaceGroupUsers", async function () {
    try {
       const data = await client.ListWorkspaceGroupUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.CreateFile", async function () {
    try {
       const data = await client.CreateFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListConsoleGroupUsers", async function () {
    try {
       const data = await client.ListConsoleGroupUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateWorkspaceRole", async function () {
    try {
       const data = await client.UpdateWorkspaceRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteWorkspaceRole", async function () {
    try {
       const data = await client.DeleteWorkspaceRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.GetTable", async function () {
    try {
       const data = await client.GetTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.ListWorkflowRuns", async function () {
    try {
       const data = await client.ListWorkflowRuns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.UpdateFolder", async function () {
    try {
       const data = await client.UpdateFolder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("databuddy.v20260715.DeleteWorkspace", async function () {
    try {
       const data = await client.DeleteWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
