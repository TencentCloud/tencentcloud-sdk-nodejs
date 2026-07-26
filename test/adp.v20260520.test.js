
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

it("adp.v20260520.ModifyAgent", async function () {
    try {
       const data = await client.ModifyAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifyAppTrigger", async function () {
    try {
       const data = await client.ModifyAppTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteAppTrigger", async function () {
    try {
       const data = await client.DeleteAppTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.MarkAppTriggerRunLogRead", async function () {
    try {
       const data = await client.MarkAppTriggerRunLogRead({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

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

it("adp.v20260520.ResetConversation", async function () {
    try {
       const data = await client.ResetConversation({})
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

it("adp.v20260520.DescribeSkillDetail", async function () {
    try {
       const data = await client.DescribeSkillDetail({})
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

it("adp.v20260520.DescribeAppTriggerInstance", async function () {
    try {
       const data = await client.DescribeAppTriggerInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ResumeTimerTask", async function () {
    try {
       const data = await client.ResumeTimerTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.PauseTimerTask", async function () {
    try {
       const data = await client.PauseTimerTask({})
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

it("adp.v20260520.DeleteVariable", async function () {
    try {
       const data = await client.DeleteVariable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeSkillReferenceList", async function () {
    try {
       const data = await client.DescribeSkillReferenceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ReleaseSkill", async function () {
    try {
       const data = await client.ReleaseSkill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.UnfavoriteSkill", async function () {
    try {
       const data = await client.UnfavoriteSkill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifyPlugin", async function () {
    try {
       const data = await client.ModifyPlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeAuditLogList", async function () {
    try {
       const data = await client.DescribeAuditLogList({})
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

it("adp.v20260520.MarkTimerTaskRunLogRead", async function () {
    try {
       const data = await client.MarkTimerTaskRunLogRead({})
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

it("adp.v20260520.DescribeAppTriggerSummaryList", async function () {
    try {
       const data = await client.DescribeAppTriggerSummaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateAppTrigger", async function () {
    try {
       const data = await client.CreateAppTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeAgentSummaryList", async function () {
    try {
       const data = await client.DescribeAgentSummaryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.RunAppTriggerNow", async function () {
    try {
       const data = await client.RunAppTriggerNow({})
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

it("adp.v20260520.FavoritePlugin", async function () {
    try {
       const data = await client.FavoritePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeAppTriggerRunLogList", async function () {
    try {
       const data = await client.DescribeAppTriggerRunLogList({})
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

it("adp.v20260520.ResumeAppTrigger", async function () {
    try {
       const data = await client.ResumeAppTrigger({})
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

it("adp.v20260520.DeletePlugin", async function () {
    try {
       const data = await client.DeletePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteSkillShare", async function () {
    try {
       const data = await client.DeleteSkillShare({})
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

it("adp.v20260520.CreateSkill", async function () {
    try {
       const data = await client.CreateSkill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.RunTimerTaskNow", async function () {
    try {
       const data = await client.RunTimerTaskNow({})
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

it("adp.v20260520.DescribeAppTrigger", async function () {
    try {
       const data = await client.DescribeAppTrigger({})
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

it("adp.v20260520.DescribeAccountList", async function () {
    try {
       const data = await client.DescribeAccountList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreateSkillShare", async function () {
    try {
       const data = await client.CreateSkillShare({})
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

it("adp.v20260520.DeleteTimerTask", async function () {
    try {
       const data = await client.DeleteTimerTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.ModifyTimerTask", async function () {
    try {
       const data = await client.ModifyTimerTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.UnfavoritePlugin", async function () {
    try {
       const data = await client.UnfavoritePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.FavoriteSkill", async function () {
    try {
       const data = await client.FavoriteSkill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeAuditLogMeta", async function () {
    try {
       const data = await client.DescribeAuditLogMeta({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteSkill", async function () {
    try {
       const data = await client.DeleteSkill({})
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

it("adp.v20260520.ModifySkill", async function () {
    try {
       const data = await client.ModifySkill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeTimerTask", async function () {
    try {
       const data = await client.DescribeTimerTask({})
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

it("adp.v20260520.CreateTimerTask", async function () {
    try {
       const data = await client.CreateTimerTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.PauseAppTrigger", async function () {
    try {
       const data = await client.PauseAppTrigger({})
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

it("adp.v20260520.RetryRelease", async function () {
    try {
       const data = await client.RetryRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.CreatePlugin", async function () {
    try {
       const data = await client.CreatePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DeleteAgent", async function () {
    try {
       const data = await client.DeleteAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeTimerTaskRunLogList", async function () {
    try {
       const data = await client.DescribeTimerTaskRunLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("adp.v20260520.DescribeTimerTaskSummaryList", async function () {
    try {
       const data = await client.DescribeTimerTaskSummaryList({})
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

it("adp.v20260520.DescribePlugin", async function () {
    try {
       const data = await client.DescribePlugin({})
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

it("adp.v20260520.DescribeVariable", async function () {
    try {
       const data = await client.DescribeVariable({})
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
