
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.essbasic.v20210526.Client({
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
describe("essbasic.v20210526.test.js", function () {

it("essbasic.v20210526.ChannelDeleteSealPolicies", async function () {
    try {
       const data = await client.ChannelDeleteSealPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelRenewAutoSignLicense", async function () {
    try {
       const data = await client.ChannelRenewAutoSignLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowSignReview", async function () {
    try {
       const data = await client.ChannelCreateFlowSignReview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ModifyExtendedService", async function () {
    try {
       const data = await client.ModifyExtendedService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateMultiFlowSignQRCode", async function () {
    try {
       const data = await client.ChannelCreateMultiFlowSignQRCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelModifyRole", async function () {
    try {
       const data = await client.ChannelModifyRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowByFiles", async function () {
    try {
       const data = await client.ChannelCreateFlowByFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeBatchOrganizationRegistrationUrls", async function () {
    try {
       const data = await client.DescribeBatchOrganizationRegistrationUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateSealByImage", async function () {
    try {
       const data = await client.CreateSealByImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCancelMultiFlowSignQRCode", async function () {
    try {
       const data = await client.ChannelCancelMultiFlowSignQRCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeExtendedServiceAuthInfo", async function () {
    try {
       const data = await client.DescribeExtendedServiceAuthInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDescribeRoles", async function () {
    try {
       const data = await client.ChannelDescribeRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateConvertTaskApi", async function () {
    try {
       const data = await client.ChannelCreateConvertTaskApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeUsage", async function () {
    try {
       const data = await client.DescribeUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeExtendedServiceAuthDetail", async function () {
    try {
       const data = await client.DescribeExtendedServiceAuthDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ModifyFlowDeadline", async function () {
    try {
       const data = await client.ModifyFlowDeadline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCancelFlow", async function () {
    try {
       const data = await client.ChannelCancelFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateOrganizationBatchSignUrl", async function () {
    try {
       const data = await client.ChannelCreateOrganizationBatchSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeCancelFlowsTask", async function () {
    try {
       const data = await client.DescribeCancelFlowsTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateSealPolicy", async function () {
    try {
       const data = await client.ChannelCreateSealPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateBatchQuickSignUrl", async function () {
    try {
       const data = await client.ChannelCreateBatchQuickSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateFlowsByTemplates", async function () {
    try {
       const data = await client.CreateFlowsByTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDisableUserAutoSign", async function () {
    try {
       const data = await client.ChannelDisableUserAutoSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDescribeSignFaceVideo", async function () {
    try {
       const data = await client.ChannelDescribeSignFaceVideo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDescribeOrganizationSeals", async function () {
    try {
       const data = await client.ChannelDescribeOrganizationSeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDeleteRoleUsers", async function () {
    try {
       const data = await client.ChannelDeleteRoleUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeTemplates", async function () {
    try {
       const data = await client.DescribeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateBatchOrganizationRegistrationTasks", async function () {
    try {
       const data = await client.CreateBatchOrganizationRegistrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.UploadFiles", async function () {
    try {
       const data = await client.UploadFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateSignUrls", async function () {
    try {
       const data = await client.CreateSignUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateConsoleLoginUrl", async function () {
    try {
       const data = await client.CreateConsoleLoginUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateOrganizationModifyQrCode", async function () {
    try {
       const data = await client.ChannelCreateOrganizationModifyQrCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreatePrepareFlow", async function () {
    try {
       const data = await client.ChannelCreatePrepareFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateBatchCancelFlowUrl", async function () {
    try {
       const data = await client.ChannelCreateBatchCancelFlowUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDeleteRole", async function () {
    try {
       const data = await client.ChannelDeleteRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelGetTaskResultApi", async function () {
    try {
       const data = await client.ChannelGetTaskResultApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateChannelFlowEvidenceReport", async function () {
    try {
       const data = await client.CreateChannelFlowEvidenceReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelUpdateSealStatus", async function () {
    try {
       const data = await client.ChannelUpdateSealStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateBatchSignUrl", async function () {
    try {
       const data = await client.ChannelCreateBatchSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateBoundFlows", async function () {
    try {
       const data = await client.ChannelCreateBoundFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateUserAutoSignSealUrl", async function () {
    try {
       const data = await client.ChannelCreateUserAutoSignSealUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDescribeUserAutoSignStatus", async function () {
    try {
       const data = await client.ChannelDescribeUserAutoSignStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelVerifyPdf", async function () {
    try {
       const data = await client.ChannelVerifyPdf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateWebThemeConfig", async function () {
    try {
       const data = await client.ChannelCreateWebThemeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowSignUrl", async function () {
    try {
       const data = await client.ChannelCreateFlowSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateReleaseFlow", async function () {
    try {
       const data = await client.ChannelCreateReleaseFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDescribeEmployees", async function () {
    try {
       const data = await client.ChannelDescribeEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelBatchCancelFlows", async function () {
    try {
       const data = await client.ChannelBatchCancelFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.PrepareFlows", async function () {
    try {
       const data = await client.PrepareFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.GetDownloadFlowUrl", async function () {
    try {
       const data = await client.GetDownloadFlowUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowApprovers", async function () {
    try {
       const data = await client.ChannelCreateFlowApprovers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreatePartnerAutoSignAuthUrl", async function () {
    try {
       const data = await client.CreatePartnerAutoSignAuthUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateRole", async function () {
    try {
       const data = await client.ChannelCreateRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeResourceUrlsByFlows", async function () {
    try {
       const data = await client.DescribeResourceUrlsByFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateFlowGroupSignReview", async function () {
    try {
       const data = await client.CreateFlowGroupSignReview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateUserRoles", async function () {
    try {
       const data = await client.ChannelCreateUserRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCancelUserAutoSignEnableUrl", async function () {
    try {
       const data = await client.ChannelCancelUserAutoSignEnableUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeChannelSealPolicyWorkflowUrl", async function () {
    try {
       const data = await client.DescribeChannelSealPolicyWorkflowUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeChannelOrganizations", async function () {
    try {
       const data = await client.DescribeChannelOrganizations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowReminds", async function () {
    try {
       const data = await client.ChannelCreateFlowReminds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.SyncProxyOrganization", async function () {
    try {
       const data = await client.SyncProxyOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowGroupByTemplates", async function () {
    try {
       const data = await client.ChannelCreateFlowGroupByTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.CreateChannelOrganizationInfoChangeUrl", async function () {
    try {
       const data = await client.CreateChannelOrganizationInfoChangeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.SyncProxyOrganizationOperators", async function () {
    try {
       const data = await client.SyncProxyOrganizationOperators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeChannelFlowEvidenceReport", async function () {
    try {
       const data = await client.DescribeChannelFlowEvidenceReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.OperateChannelTemplate", async function () {
    try {
       const data = await client.OperateChannelTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreatePreparedPersonalEsign", async function () {
    try {
       const data = await client.ChannelCreatePreparedPersonalEsign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateFlowGroupByFiles", async function () {
    try {
       const data = await client.ChannelCreateFlowGroupByFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateEmbedWebUrl", async function () {
    try {
       const data = await client.ChannelCreateEmbedWebUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.DescribeFlowDetailInfo", async function () {
    try {
       const data = await client.DescribeFlowDetailInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDescribeBillUsageDetail", async function () {
    try {
       const data = await client.ChannelDescribeBillUsageDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelCreateUserAutoSignEnableUrl", async function () {
    try {
       const data = await client.ChannelCreateUserAutoSignEnableUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20210526.ChannelDescribeFlowComponents", async function () {
    try {
       const data = await client.ChannelDescribeFlowComponents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
