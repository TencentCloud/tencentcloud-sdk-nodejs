
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

it("databuddy.v20260715.RerunWorkflowRun", async function () {
    try {
       const data = await client.RerunWorkflowRun({})
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

it("databuddy.v20260715.CreateWorkflow", async function () {
    try {
       const data = await client.CreateWorkflow({})
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

it("databuddy.v20260715.GetWorkflowRun", async function () {
    try {
       const data = await client.GetWorkflowRun({})
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

it("databuddy.v20260715.CreateFile", async function () {
    try {
       const data = await client.CreateFile({})
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

it("databuddy.v20260715.ListConsoleUsers", async function () {
    try {
       const data = await client.ListConsoleUsers({})
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

it("databuddy.v20260715.RunWorkflow", async function () {
    try {
       const data = await client.RunWorkflow({})
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

it("databuddy.v20260715.GetFile", async function () {
    try {
       const data = await client.GetFile({})
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

it("databuddy.v20260715.ListWorkflows", async function () {
    try {
       const data = await client.ListWorkflows({})
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

it("databuddy.v20260715.UnbindWorkflowBundle", async function () {
    try {
       const data = await client.UnbindWorkflowBundle({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
