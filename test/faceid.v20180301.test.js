
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.faceid.v20180301.Client({
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
describe("faceid.v20180301.test.js", function () {

it("faceid.v20180301.GetLiveCode", async function () {
    try {
       const data = await client.GetLiveCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetActionSequence", async function () {
    try {
       const data = await client.GetActionSequence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetWeChatBillDetails", async function () {
    try {
       const data = await client.GetWeChatBillDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.CheckIdCardInformation", async function () {
    try {
       const data = await client.CheckIdCardInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.CheckEidTokenStatus", async function () {
    try {
       const data = await client.CheckEidTokenStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.BankCard4EVerification", async function () {
    try {
       const data = await client.BankCard4EVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.EncryptedPhoneVerification", async function () {
    try {
       const data = await client.EncryptedPhoneVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetDetectInfoEnhanced", async function () {
    try {
       const data = await client.GetDetectInfoEnhanced({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetFaceIdToken", async function () {
    try {
       const data = await client.GetFaceIdToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.CheckPhoneAndName", async function () {
    try {
       const data = await client.CheckPhoneAndName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.BankCardVerification", async function () {
    try {
       const data = await client.BankCardVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.LivenessCompare", async function () {
    try {
       const data = await client.LivenessCompare({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetRealNameAuthToken", async function () {
    try {
       const data = await client.GetRealNameAuthToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.IdCardOCRVerification", async function () {
    try {
       const data = await client.IdCardOCRVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetFaceIdResult", async function () {
    try {
       const data = await client.GetFaceIdResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.ImageRecognition", async function () {
    try {
       const data = await client.ImageRecognition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetEidToken", async function () {
    try {
       const data = await client.GetEidToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.PhoneVerification", async function () {
    try {
       const data = await client.PhoneVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.MobileStatus", async function () {
    try {
       const data = await client.MobileStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.PhoneVerificationCMCC", async function () {
    try {
       const data = await client.PhoneVerificationCMCC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.MinorsVerification", async function () {
    try {
       const data = await client.MinorsVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.DetectReflectLivenessAndCompare", async function () {
    try {
       const data = await client.DetectReflectLivenessAndCompare({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.CheckIdNameDate", async function () {
    try {
       const data = await client.CheckIdNameDate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.Liveness", async function () {
    try {
       const data = await client.Liveness({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.PhoneVerificationCUCC", async function () {
    try {
       const data = await client.PhoneVerificationCUCC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.LivenessRecognition", async function () {
    try {
       const data = await client.LivenessRecognition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.IdCardVerification", async function () {
    try {
       const data = await client.IdCardVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.MobileNetworkTimeVerification", async function () {
    try {
       const data = await client.MobileNetworkTimeVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetEidResult", async function () {
    try {
       const data = await client.GetEidResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.DetectAuth", async function () {
    try {
       const data = await client.DetectAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.CheckBankCardInformation", async function () {
    try {
       const data = await client.CheckBankCardInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetDetectInfo", async function () {
    try {
       const data = await client.GetDetectInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.BankCard2EVerification", async function () {
    try {
       const data = await client.BankCard2EVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.PhoneVerificationCTCC", async function () {
    try {
       const data = await client.PhoneVerificationCTCC({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("faceid.v20180301.GetRealNameAuthResult", async function () {
    try {
       const data = await client.GetRealNameAuthResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
