
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.essbasic.v20201222.Client({
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
describe("essbasic.v20201222.test.js", function () {

it("essbasic.v20201222.CheckMobileVerification", async function () {
    try {
       const data = await client.CheckMobileVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateSubOrganization", async function () {
    try {
       const data = await client.CreateSubOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CancelFlow", async function () {
    try {
       const data = await client.CancelFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeFileUrls", async function () {
    try {
       const data = await client.DescribeFileUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateH5FaceIdUrl", async function () {
    try {
       const data = await client.CreateH5FaceIdUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeFlowApprovers", async function () {
    try {
       const data = await client.DescribeFlowApprovers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckBankCard4EVerification", async function () {
    try {
       const data = await client.CheckBankCard4EVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DeleteSeal", async function () {
    try {
       const data = await client.DeleteSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateSignUrl", async function () {
    try {
       const data = await client.CreateSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeUsers", async function () {
    try {
       const data = await client.DescribeUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.SendFlowUrl", async function () {
    try {
       const data = await client.SendFlowUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.SendSignInnerVerifyCode", async function () {
    try {
       const data = await client.SendSignInnerVerifyCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeFlowFiles", async function () {
    try {
       const data = await client.DescribeFlowFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateSeal", async function () {
    try {
       const data = await client.CreateSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.ModifyUserDefaultSeal", async function () {
    try {
       const data = await client.ModifyUserDefaultSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreatePreviewSignUrl", async function () {
    try {
       const data = await client.CreatePreviewSignUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckVerifyCodeMatchFlowId", async function () {
    try {
       const data = await client.CheckVerifyCodeMatchFlowId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckFaceIdentify", async function () {
    try {
       const data = await client.CheckFaceIdentify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.GenerateUserSeal", async function () {
    try {
       const data = await client.GenerateUserSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.UploadFiles", async function () {
    try {
       const data = await client.UploadFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeCustomFlowIds", async function () {
    try {
       const data = await client.DescribeCustomFlowIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateSubOrganizationAndSeal", async function () {
    try {
       const data = await client.CreateSubOrganizationAndSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeFlow", async function () {
    try {
       const data = await client.DescribeFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateFlowByFiles", async function () {
    try {
       const data = await client.CreateFlowByFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeCatalogApprovers", async function () {
    try {
       const data = await client.DescribeCatalogApprovers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeSubOrganizations", async function () {
    try {
       const data = await client.DescribeSubOrganizations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckBankCard2EVerification", async function () {
    try {
       const data = await client.CheckBankCard2EVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.ArchiveFlow", async function () {
    try {
       const data = await client.ArchiveFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckMobileAndName", async function () {
    try {
       const data = await client.CheckMobileAndName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.GenerateOrganizationSeal", async function () {
    try {
       const data = await client.GenerateOrganizationSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.ModifySubOrganizationInfo", async function () {
    try {
       const data = await client.ModifySubOrganizationInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateUserAndSeal", async function () {
    try {
       const data = await client.CreateUserAndSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DestroyFlowFile", async function () {
    try {
       const data = await client.DestroyFlowFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.ModifySeal", async function () {
    try {
       const data = await client.ModifySeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeFileIdsByCustomIds", async function () {
    try {
       const data = await client.DescribeFileIdsByCustomIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.SignFlow", async function () {
    try {
       const data = await client.SignFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeFaceIdResults", async function () {
    try {
       const data = await client.DescribeFaceIdResults({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeCatalogSignComponents", async function () {
    try {
       const data = await client.DescribeCatalogSignComponents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.RejectFlow", async function () {
    try {
       const data = await client.RejectFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.VerifySubOrganization", async function () {
    try {
       const data = await client.VerifySubOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.VerifyUser", async function () {
    try {
       const data = await client.VerifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeCustomFlowIdsByFlowId", async function () {
    try {
       const data = await client.DescribeCustomFlowIdsByFlowId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeFaceIdPhotos", async function () {
    try {
       const data = await client.DescribeFaceIdPhotos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateFaceIdSign", async function () {
    try {
       const data = await client.CreateFaceIdSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckIdCardVerification", async function () {
    try {
       const data = await client.CheckIdCardVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckBankCard3EVerification", async function () {
    try {
       const data = await client.CheckBankCard3EVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.SendFlow", async function () {
    try {
       const data = await client.SendFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.ModifyOrganizationDefaultSeal", async function () {
    try {
       const data = await client.ModifyOrganizationDefaultSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.DescribeSeals", async function () {
    try {
       const data = await client.DescribeSeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CheckBankCardVerification", async function () {
    try {
       const data = await client.CheckBankCardVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("essbasic.v20201222.CreateServerFlowSign", async function () {
    try {
       const data = await client.CreateServerFlowSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
