
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ccc.v20200210.Client({
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
describe("ccc.v20200210.test.js", function () {

it("ccc.v20200210.TransferToManual", async function () {
    try {
       const data = await client.TransferToManual({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ModifyCompanyApply", async function () {
    try {
       const data = await client.ModifyCompanyApply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ModifyStaff", async function () {
    try {
       const data = await client.ModifyStaff({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeExtensions", async function () {
    try {
       const data = await client.DescribeExtensions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeAILatency", async function () {
    try {
       const data = await client.DescribeAILatency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeAutoCalloutTasks", async function () {
    try {
       const data = await client.DescribeAutoCalloutTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.AbortAgentCruiseDialingCampaign", async function () {
    try {
       const data = await client.AbortAgentCruiseDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateAICall", async function () {
    try {
       const data = await client.CreateAICall({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeAgentCruiseDialingCampaign", async function () {
    try {
       const data = await client.DescribeAgentCruiseDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DeleteCCCSkillGroup", async function () {
    try {
       const data = await client.DeleteCCCSkillGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ModifyOwnNumberApply", async function () {
    try {
       const data = await client.ModifyOwnNumberApply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribePredictiveDialingCampaign", async function () {
    try {
       const data = await client.DescribePredictiveDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribePSTNActiveSessionList", async function () {
    try {
       const data = await client.DescribePSTNActiveSessionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.StopAutoCalloutTask", async function () {
    try {
       const data = await client.StopAutoCalloutTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DeleteExtension", async function () {
    try {
       const data = await client.DeleteExtension({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeChatMessages", async function () {
    try {
       const data = await client.DescribeChatMessages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.BindStaffSkillGroupList", async function () {
    try {
       const data = await client.BindStaffSkillGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.BindNumberCallOutSkillGroup", async function () {
    try {
       const data = await client.BindNumberCallOutSkillGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeStaffStatusHistory", async function () {
    try {
       const data = await client.DescribeStaffStatusHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeIMCdrs", async function () {
    try {
       const data = await client.DescribeIMCdrs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeIvrAudioList", async function () {
    try {
       const data = await client.DescribeIvrAudioList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DeleteStaff", async function () {
    try {
       const data = await client.DeleteStaff({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DisableCCCPhoneNumber", async function () {
    try {
       const data = await client.DisableCCCPhoneNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateExtension", async function () {
    try {
       const data = await client.CreateExtension({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ResetExtensionPassword", async function () {
    try {
       const data = await client.ResetExtensionPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeTelCallInfo", async function () {
    try {
       const data = await client.DescribeTelCallInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.UploadIvrAudio", async function () {
    try {
       const data = await client.UploadIvrAudio({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeExtension", async function () {
    try {
       const data = await client.DescribeExtension({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeCarrierPrivilegeNumberApplicants", async function () {
    try {
       const data = await client.DescribeCarrierPrivilegeNumberApplicants({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeTelSession", async function () {
    try {
       const data = await client.DescribeTelSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateCallOutSession", async function () {
    try {
       const data = await client.CreateCallOutSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribePredictiveDialingCampaigns", async function () {
    try {
       const data = await client.DescribePredictiveDialingCampaigns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeAutoCalloutTask", async function () {
    try {
       const data = await client.DescribeAutoCalloutTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribePredictiveDialingSessions", async function () {
    try {
       const data = await client.DescribePredictiveDialingSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateCompanyApply", async function () {
    try {
       const data = await client.CreateCompanyApply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ControlAIConversation", async function () {
    try {
       const data = await client.ControlAIConversation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeTelCdr", async function () {
    try {
       const data = await client.DescribeTelCdr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeSkillGroupInfoList", async function () {
    try {
       const data = await client.DescribeSkillGroupInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.UnbindNumberCallOutSkillGroup", async function () {
    try {
       const data = await client.UnbindNumberCallOutSkillGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeSessionDetail", async function () {
    try {
       const data = await client.DescribeSessionDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreatePredictiveDialingCampaign", async function () {
    try {
       const data = await client.CreatePredictiveDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateCarrierPrivilegeNumberApplicant", async function () {
    try {
       const data = await client.CreateCarrierPrivilegeNumberApplicant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeAICallExtractResult", async function () {
    try {
       const data = await client.DescribeAICallExtractResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateAgentCruiseDialingCampaign", async function () {
    try {
       const data = await client.CreateAgentCruiseDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateOwnNumberApply", async function () {
    try {
       const data = await client.CreateOwnNumberApply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeCCCBuyInfoList", async function () {
    try {
       const data = await client.DescribeCCCBuyInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ResumePredictiveDialingCampaign", async function () {
    try {
       const data = await client.ResumePredictiveDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateCCCSkillGroup", async function () {
    try {
       const data = await client.CreateCCCSkillGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.UnbindStaffSkillGroupList", async function () {
    try {
       const data = await client.UnbindStaffSkillGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ModifyStaffPassword", async function () {
    try {
       const data = await client.ModifyStaffPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeStaffInfoList", async function () {
    try {
       const data = await client.DescribeStaffInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.BindNumberCallInInterface", async function () {
    try {
       const data = await client.BindNumberCallInInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeStaffStatusMetrics", async function () {
    try {
       const data = await client.DescribeStaffStatusMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateStaff", async function () {
    try {
       const data = await client.CreateStaff({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateIVRSession", async function () {
    try {
       const data = await client.CreateIVRSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateAutoCalloutTask", async function () {
    try {
       const data = await client.CreateAutoCalloutTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ModifyExtension", async function () {
    try {
       const data = await client.ModifyExtension({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.UpdateCCCSkillGroup", async function () {
    try {
       const data = await client.UpdateCCCSkillGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateUserSig", async function () {
    try {
       const data = await client.CreateUserSig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeTelRecordAsr", async function () {
    try {
       const data = await client.DescribeTelRecordAsr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.HangUpCall", async function () {
    try {
       const data = await client.HangUpCall({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.PausePredictiveDialingCampaign", async function () {
    try {
       const data = await client.PausePredictiveDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateAdminURL", async function () {
    try {
       const data = await client.CreateAdminURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeProtectedTelCdr", async function () {
    try {
       const data = await client.DescribeProtectedTelCdr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeIMCdrList", async function () {
    try {
       const data = await client.DescribeIMCdrList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.ForceMemberOffline", async function () {
    try {
       const data = await client.ForceMemberOffline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeCallInMetrics", async function () {
    try {
       const data = await client.DescribeCallInMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateSDKLoginToken", async function () {
    try {
       const data = await client.CreateSDKLoginToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeActiveCarrierPrivilegeNumber", async function () {
    try {
       const data = await client.DescribeActiveCarrierPrivilegeNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeNumbers", async function () {
    try {
       const data = await client.DescribeNumbers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.AbortPredictiveDialingCampaign", async function () {
    try {
       const data = await client.AbortPredictiveDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DescribeCompanyList", async function () {
    try {
       const data = await client.DescribeCompanyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.CreateAIAgentCall", async function () {
    try {
       const data = await client.CreateAIAgentCall({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.DeletePredictiveDialingCampaign", async function () {
    try {
       const data = await client.DeletePredictiveDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.RestoreMemberOnline", async function () {
    try {
       const data = await client.RestoreMemberOnline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ccc.v20200210.UpdatePredictiveDialingCampaign", async function () {
    try {
       const data = await client.UpdatePredictiveDialingCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
