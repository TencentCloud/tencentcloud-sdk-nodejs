
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tdai.v20250717.Client({
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
describe("tdai.v20250717.test.js", function () {

it("tdai.v20250717.DescribeChatDetail", async function () {
    try {
       const data = await client.DescribeChatDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.RemoveChat", async function () {
    try {
       const data = await client.RemoveChat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.IsolateAgentInstance", async function () {
    try {
       const data = await client.IsolateAgentInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.ContinueAgentWork", async function () {
    try {
       const data = await client.ContinueAgentWork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.DescribeAgentDutyTasks", async function () {
    try {
       const data = await client.DescribeAgentDutyTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.PauseAgentWork", async function () {
    try {
       const data = await client.PauseAgentWork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.DescribeChats", async function () {
    try {
       const data = await client.DescribeChats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.DescribeAgentInstance", async function () {
    try {
       const data = await client.DescribeAgentInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.CreateChatCompletion", async function () {
    try {
       const data = await client.CreateChatCompletion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.ModifyChatTitle", async function () {
    try {
       const data = await client.ModifyChatTitle({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.DescribeAgentDutyTaskDetail", async function () {
    try {
       const data = await client.DescribeAgentDutyTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.DescribeReportUrl", async function () {
    try {
       const data = await client.DescribeReportUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.TerminateAgentInstance", async function () {
    try {
       const data = await client.TerminateAgentInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.RecoverAgentInstance", async function () {
    try {
       const data = await client.RecoverAgentInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.ModifyAgentInstanceParameters", async function () {
    try {
       const data = await client.ModifyAgentInstanceParameters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.DescribeAgentInstances", async function () {
    try {
       const data = await client.DescribeAgentInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.StartAgentTask", async function () {
    try {
       const data = await client.StartAgentTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.DescribeAgents", async function () {
    try {
       const data = await client.DescribeAgents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdai.v20250717.CreateAgentInstance", async function () {
    try {
       const data = await client.CreateAgentInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
