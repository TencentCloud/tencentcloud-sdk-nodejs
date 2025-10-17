
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ess.v20201111.Client({
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
describe("ess.v20201111.test.js", function () {

it("ess.v20201111.StartFlow", async function () {
    try {
       const data = await client.StartFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateContractComparisonTask", async function () {
    try {
       const data = await client.CreateContractComparisonTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFlowTemplates", async function () {
    try {
       const data = await client.DescribeFlowTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateUserAutoSignEnableUrl", async function () {
    try {
       const data = await client.CreateUserAutoSignEnableUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateContractDiffTaskWebUrl", async function () {
    try {
       const data = await client.CreateContractDiffTaskWebUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateUserVerifyUrl", async function () {
    try {
       const data = await client.CreateUserVerifyUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateEmbedWebUrl", async function () {
    try {
       const data = await client.CreateEmbedWebUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeBatchOrganizationRegistrationUrls", async function () {
    try {
       const data = await client.DescribeBatchOrganizationRegistrationUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeBatchOrganizationRegistrationTasks", async function () {
    try {
       const data = await client.DescribeBatchOrganizationRegistrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreatePreparedPersonalEsign", async function () {
    try {
       const data = await client.CreatePreparedPersonalEsign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowSignReview", async function () {
    try {
       const data = await client.CreateFlowSignReview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateDocument", async function () {
    try {
       const data = await client.CreateDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeExtendedServiceAuthInfos", async function () {
    try {
       const data = await client.DescribeExtendedServiceAuthInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeUserAutoSignStatus", async function () {
    try {
       const data = await client.DescribeUserAutoSignStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowGroupByTemplates", async function () {
    try {
       const data = await client.CreateFlowGroupByTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.VerifyDigitFile", async function () {
    try {
       const data = await client.VerifyDigitFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreatePartnerAutoSignAuthUrl", async function () {
    try {
       const data = await client.CreatePartnerAutoSignAuthUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DeleteSealPolicies", async function () {
    try {
       const data = await client.DeleteSealPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowForwards", async function () {
    try {
       const data = await client.CreateFlowForwards({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeIntegrationRoles", async function () {
    try {
       const data = await client.DescribeIntegrationRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeIntegrationEmployees", async function () {
    try {
       const data = await client.DescribeIntegrationEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreatePersonAuthCertificateImage", async function () {
    try {
       const data = await client.CreatePersonAuthCertificateImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowGroupSignReview", async function () {
    try {
       const data = await client.CreateFlowGroupSignReview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateIntegrationUserRoles", async function () {
    try {
       const data = await client.CreateIntegrationUserRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchSignUrl", async function () {
    try {
       const data = await client.CreateBatchSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeInformationExtractionTask", async function () {
    try {
       const data = await client.DescribeInformationExtractionTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowReminds", async function () {
    try {
       const data = await client.CreateFlowReminds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeContractReviewWebUrl", async function () {
    try {
       const data = await client.DescribeContractReviewWebUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateUserNameChangeUrl", async function () {
    try {
       const data = await client.CreateUserNameChangeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DisableUserAutoSign", async function () {
    try {
       const data = await client.DisableUserAutoSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeContractDiffTaskWebUrl", async function () {
    try {
       const data = await client.DescribeContractDiffTaskWebUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribePersonCertificate", async function () {
    try {
       const data = await client.DescribePersonCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DeleteIntegrationEmployees", async function () {
    try {
       const data = await client.DeleteIntegrationEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchContractReviewTask", async function () {
    try {
       const data = await client.CreateBatchContractReviewTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateUserAutoSignSealUrl", async function () {
    try {
       const data = await client.CreateUserAutoSignSealUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeOrganizationAuthStatus", async function () {
    try {
       const data = await client.DescribeOrganizationAuthStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ModifyExtendedService", async function () {
    try {
       const data = await client.ModifyExtendedService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeContractReviewTask", async function () {
    try {
       const data = await client.DescribeContractReviewTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.RenewAutoSignLicense", async function () {
    try {
       const data = await client.RenewAutoSignLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.VerifyPdf", async function () {
    try {
       const data = await client.VerifyPdf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.BindEmployeeUserIdWithClientOpenId", async function () {
    try {
       const data = await client.BindEmployeeUserIdWithClientOpenId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateOrganizationAuthFile", async function () {
    try {
       const data = await client.CreateOrganizationAuthFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DeleteIntegrationRoleUsers", async function () {
    try {
       const data = await client.DeleteIntegrationRoleUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowGroupByFiles", async function () {
    try {
       const data = await client.CreateFlowGroupByFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateIntegrationDepartment", async function () {
    try {
       const data = await client.CreateIntegrationDepartment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowEvidenceReport", async function () {
    try {
       const data = await client.CreateFlowEvidenceReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlow", async function () {
    try {
       const data = await client.CreateFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateReleaseFlow", async function () {
    try {
       const data = await client.CreateReleaseFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateSingleSignOnEmployees", async function () {
    try {
       const data = await client.CreateSingleSignOnEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeSingleSignOnEmployees", async function () {
    try {
       const data = await client.DescribeSingleSignOnEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateLegalSealQrCode", async function () {
    try {
       const data = await client.CreateLegalSealQrCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateSeal", async function () {
    try {
       const data = await client.CreateSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateMultiFlowSignQRCode", async function () {
    try {
       const data = await client.CreateMultiFlowSignQRCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeExtendedServiceAuthDetail", async function () {
    try {
       const data = await client.DescribeExtendedServiceAuthDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateOrganizationInfoChangeUrl", async function () {
    try {
       const data = await client.CreateOrganizationInfoChangeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CancelMultiFlowSignQRCode", async function () {
    try {
       const data = await client.CancelMultiFlowSignQRCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFlowBriefs", async function () {
    try {
       const data = await client.DescribeFlowBriefs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeSignFaceVideo", async function () {
    try {
       const data = await client.DescribeSignFaceVideo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowByFiles", async function () {
    try {
       const data = await client.CreateFlowByFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowSignUrl", async function () {
    try {
       const data = await client.CreateFlowSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchInitOrganizationUrl", async function () {
    try {
       const data = await client.CreateBatchInitOrganizationUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CancelUserAutoSignEnableUrl", async function () {
    try {
       const data = await client.CancelUserAutoSignEnableUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeBillUsageDetail", async function () {
    try {
       const data = await client.DescribeBillUsageDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeIntegrationDepartments", async function () {
    try {
       const data = await client.DescribeIntegrationDepartments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ModifyIntegrationDepartment", async function () {
    try {
       const data = await client.ModifyIntegrationDepartment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeOrganizationGroupOrganizations", async function () {
    try {
       const data = await client.DescribeOrganizationGroupOrganizations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateUserMobileChangeUrl", async function () {
    try {
       const data = await client.CreateUserMobileChangeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ExportContractComparisonTask", async function () {
    try {
       const data = await client.ExportContractComparisonTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchInformationExtractionTask", async function () {
    try {
       const data = await client.CreateBatchInformationExtractionTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFileUrls", async function () {
    try {
       const data = await client.DescribeFileUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.OperateSeals", async function () {
    try {
       const data = await client.OperateSeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateIntegrationRole", async function () {
    try {
       const data = await client.CreateIntegrationRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.OperateTemplate", async function () {
    try {
       const data = await client.OperateTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeContractComparisonTask", async function () {
    try {
       const data = await client.DescribeContractComparisonTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateEmployeeChangeUrl", async function () {
    try {
       const data = await client.CreateEmployeeChangeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ModifyFlowDeadline", async function () {
    try {
       const data = await client.ModifyFlowDeadline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowBlockchainEvidenceUrl", async function () {
    try {
       const data = await client.CreateFlowBlockchainEvidenceUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchOrganizationRegistrationTasks", async function () {
    try {
       const data = await client.CreateBatchOrganizationRegistrationTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeUserVerifyStatus", async function () {
    try {
       const data = await client.DescribeUserVerifyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ModifyIntegrationRole", async function () {
    try {
       const data = await client.ModifyIntegrationRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchOrganizationAuthorizationUrl", async function () {
    try {
       const data = await client.CreateBatchOrganizationAuthorizationUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateEmployeeQualificationSealQrCode", async function () {
    try {
       const data = await client.CreateEmployeeQualificationSealQrCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateExtendedServiceAuthInfos", async function () {
    try {
       const data = await client.CreateExtendedServiceAuthInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateMiniAppPrepareFlow", async function () {
    try {
       const data = await client.CreateMiniAppPrepareFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateConvertTaskApi", async function () {
    try {
       const data = await client.CreateConvertTaskApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ModifyPartnerAutoSignAuthUrl", async function () {
    try {
       const data = await client.ModifyPartnerAutoSignAuthUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateOrganizationAuthUrl", async function () {
    try {
       const data = await client.CreateOrganizationAuthUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.UploadFiles", async function () {
    try {
       const data = await client.UploadFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateIntegrationSubOrganizationActiveRecord", async function () {
    try {
       const data = await client.CreateIntegrationSubOrganizationActiveRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFlowComponents", async function () {
    try {
       const data = await client.DescribeFlowComponents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateWebThemeConfig", async function () {
    try {
       const data = await client.CreateWebThemeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateDynamicFlowApprover", async function () {
    try {
       const data = await client.CreateDynamicFlowApprover({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeUserFlowType", async function () {
    try {
       const data = await client.DescribeUserFlowType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeThirdPartyAuthCode", async function () {
    try {
       const data = await client.DescribeThirdPartyAuthCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateModifyAdminAuthorizationUrl", async function () {
    try {
       const data = await client.CreateModifyAdminAuthorizationUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateIntegrationEmployees", async function () {
    try {
       const data = await client.CreateIntegrationEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DeleteOrganizationAuthorizations", async function () {
    try {
       const data = await client.DeleteOrganizationAuthorizations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchQuickSignUrl", async function () {
    try {
       const data = await client.CreateBatchQuickSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ModifyApplicationCallbackInfo", async function () {
    try {
       const data = await client.ModifyApplicationCallbackInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CancelFlow", async function () {
    try {
       const data = await client.CancelFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.UnbindEmployeeUserIdWithClientOpenId", async function () {
    try {
       const data = await client.UnbindEmployeeUserIdWithClientOpenId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateBatchCancelFlowUrl", async function () {
    try {
       const data = await client.CreateBatchCancelFlowUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DeleteIntegrationDepartment", async function () {
    try {
       const data = await client.DeleteIntegrationDepartment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFlowApprovers", async function () {
    try {
       const data = await client.CreateFlowApprovers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreatePrepareFlow", async function () {
    try {
       const data = await client.CreatePrepareFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeBillUsage", async function () {
    try {
       const data = await client.DescribeBillUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFlowInfo", async function () {
    try {
       const data = await client.DescribeFlowInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateSealPolicy", async function () {
    try {
       const data = await client.CreateSealPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DeleteSingleSignOnEmployees", async function () {
    try {
       const data = await client.DeleteSingleSignOnEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeCancelFlowsTask", async function () {
    try {
       const data = await client.DescribeCancelFlowsTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeOrganizationVerifyStatus", async function () {
    try {
       const data = await client.DescribeOrganizationVerifyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateOrganizationGroupInvitationLink", async function () {
    try {
       const data = await client.CreateOrganizationGroupInvitationLink({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFlowEvidenceReport", async function () {
    try {
       const data = await client.DescribeFlowEvidenceReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeFileCounterSignResult", async function () {
    try {
       const data = await client.DescribeFileCounterSignResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.GetTaskResultApi", async function () {
    try {
       const data = await client.GetTaskResultApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ArchiveDynamicFlow", async function () {
    try {
       const data = await client.ArchiveDynamicFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreatePrepareFlowGroup", async function () {
    try {
       const data = await client.CreatePrepareFlowGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.UpdateIntegrationEmployees", async function () {
    try {
       const data = await client.UpdateIntegrationEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateOrganizationBatchSignUrl", async function () {
    try {
       const data = await client.CreateOrganizationBatchSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.ModifySingleSignOnEmployees", async function () {
    try {
       const data = await client.ModifySingleSignOnEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateContractReviewWebUrl", async function () {
    try {
       const data = await client.CreateContractReviewWebUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateFileCounterSign", async function () {
    try {
       const data = await client.CreateFileCounterSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DescribeOrganizationSeals", async function () {
    try {
       const data = await client.DescribeOrganizationSeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.CreateSchemeUrl", async function () {
    try {
       const data = await client.CreateSchemeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ess.v20201111.DeleteExtendedServiceAuthInfos", async function () {
    try {
       const data = await client.DeleteExtendedServiceAuthInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
