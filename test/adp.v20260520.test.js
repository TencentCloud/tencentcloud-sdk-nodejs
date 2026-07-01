
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.adp.v20260520.Client({
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
describe("adp.v20260520.test.js", function () {

it("adp.v20260520.DescribeSpaceList", async function () {
    try {
       const data = await client.DescribeSpaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteSpace", async function () {
    try {
       const data = await client.DeleteSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeSystemVariableList", async function () {
    try {
       const data = await client.DescribeSystemVariableList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifyConversation", async function () {
    try {
       const data = await client.ModifyConversation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeAppSummaryList", async function () {
    try {
       const data = await client.DescribeAppSummaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeConversation", async function () {
    try {
       const data = await client.DescribeConversation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CopyAgentFromApp", async function () {
    try {
       const data = await client.CopyAgentFromApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeVariable", async function () {
    try {
       const data = await client.DescribeVariable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateRelease", async function () {
    try {
       const data = await client.CreateRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateWorkspaceCredential", async function () {
    try {
       const data = await client.CreateWorkspaceCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifyAgent", async function () {
    try {
       const data = await client.ModifyAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeModelList", async function () {
    try {
       const data = await client.DescribeModelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeReleaseList", async function () {
    try {
       const data = await client.DescribeReleaseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeAgentDetail", async function () {
    try {
       const data = await client.DescribeAgentDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteApp", async function () {
    try {
       const data = await client.DeleteApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateAgent", async function () {
    try {
       const data = await client.CreateAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifyApp", async function () {
    try {
       const data = await client.ModifyApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeReleaseSummary", async function () {
    try {
       const data = await client.DescribeReleaseSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CopyApp", async function () {
    try {
       const data = await client.CopyApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ResetConversation", async function () {
    try {
       const data = await client.ResetConversation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteVariable", async function () {
    try {
       const data = await client.DeleteVariable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeAgentReleasePreviewList", async function () {
    try {
       const data = await client.DescribeAgentReleasePreviewList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateSpace", async function () {
    try {
       const data = await client.CreateSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateVariable", async function () {
    try {
       const data = await client.CreateVariable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribePluginSummaryList", async function () {
    try {
       const data = await client.DescribePluginSummaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateWebSocketToken", async function () {
    try {
       const data = await client.CreateWebSocketToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateConversation", async function () {
    try {
       const data = await client.CreateConversation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifyVariable", async function () {
    try {
       const data = await client.ModifyVariable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeConversationList", async function () {
    try {
       const data = await client.DescribeConversationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifySpace", async function () {
    try {
       const data = await client.ModifySpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribePlugin", async function () {
    try {
       const data = await client.DescribePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeSkillSummaryList", async function () {
    try {
       const data = await client.DescribeSkillSummaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeApp", async function () {
    try {
       const data = await client.DescribeApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateApp", async function () {
    try {
       const data = await client.CreateApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.RollbackRelease", async function () {
    try {
       const data = await client.RollbackRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeVariableList", async function () {
    try {
       const data = await client.DescribeVariableList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeConversationMessageList", async function () {
    try {
       const data = await client.DescribeConversationMessageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeSkillCategoryList", async function () {
    try {
       const data = await client.DescribeSkillCategoryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeLatestRelease", async function () {
    try {
       const data = await client.DescribeLatestRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.RetryRelease", async function () {
    try {
       const data = await client.RetryRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteConversation", async function () {
    try {
       const data = await client.DeleteConversation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
