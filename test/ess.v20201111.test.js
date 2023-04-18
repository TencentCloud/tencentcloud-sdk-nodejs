
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

it("ess.v20201111.DescribeOrganizationGroupOrganizations", async function () {
    try {
       const data = await client.DescribeOrganizationGroupOrganizations({})
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

it("ess.v20201111.StartFlow", async function () {
    try {
       const data = await client.StartFlow({})
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

it("ess.v20201111.DescribeFlowTemplates", async function () {
    try {
       const data = await client.DescribeFlowTemplates({})
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

it("ess.v20201111.DescribeFileUrls", async function () {
    try {
       const data = await client.DescribeFileUrls({})
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

it("ess.v20201111.CreateFlowEvidenceReport", async function () {
    try {
       const data = await client.CreateFlowEvidenceReport({})
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

it("ess.v20201111.BindEmployeeUserIdWithClientOpenId", async function () {
    try {
       const data = await client.BindEmployeeUserIdWithClientOpenId({})
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

it("ess.v20201111.CreateFlowApprovers", async function () {
    try {
       const data = await client.CreateFlowApprovers({})
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

it("ess.v20201111.DeleteIntegrationRoleUsers", async function () {
    try {
       const data = await client.DeleteIntegrationRoleUsers({})
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

it("ess.v20201111.CreatePrepareFlow", async function () {
    try {
       const data = await client.CreatePrepareFlow({})
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

it("ess.v20201111.DescribeUserAutoSignStatus", async function () {
    try {
       const data = await client.DescribeUserAutoSignStatus({})
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

it("ess.v20201111.CreateFlowByFiles", async function () {
    try {
       const data = await client.CreateFlowByFiles({})
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

it("ess.v20201111.CreateMultiFlowSignQRCode", async function () {
    try {
       const data = await client.CreateMultiFlowSignQRCode({})
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

it("ess.v20201111.CancelMultiFlowSignQRCode", async function () {
    try {
       const data = await client.CancelMultiFlowSignQRCode({})
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

it("ess.v20201111.CreateFlowSignUrl", async function () {
    try {
       const data = await client.CreateFlowSignUrl({})
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

it("ess.v20201111.DescribeFlowBriefs", async function () {
    try {
       const data = await client.DescribeFlowBriefs({})
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

it("ess.v20201111.UploadFiles", async function () {
    try {
       const data = await client.UploadFiles({})
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

it("ess.v20201111.DescribeIntegrationMainOrganizationUser", async function () {
    try {
       const data = await client.DescribeIntegrationMainOrganizationUser({})
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

it("ess.v20201111.DescribeOrganizationSeals", async function () {
    try {
       const data = await client.DescribeOrganizationSeals({})
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

it("ess.v20201111.CreateSchemeUrl", async function () {
    try {
       const data = await client.CreateSchemeUrl({})
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

it("ess.v20201111.UpdateIntegrationEmployees", async function () {
    try {
       const data = await client.UpdateIntegrationEmployees({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
