
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vclm.v20240523.Client({
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
describe("vclm.v20240523.test.js", function () {

it("vclm.v20240523.SubmitHunyuanToVideoJob", async function () {
    try {
       const data = await client.SubmitHunyuanToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoEditJob", async function () {
    try {
       const data = await client.DescribeVideoEditJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitPortraitSingJob", async function () {
    try {
       const data = await client.SubmitPortraitSingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoEditKlingJob", async function () {
    try {
       const data = await client.DescribeVideoEditKlingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeTextToVideoJob", async function () {
    try {
       const data = await client.DescribeTextToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitTextToVideoViduJob", async function () {
    try {
       const data = await client.SubmitTextToVideoViduJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitMotionControlKlingJob", async function () {
    try {
       const data = await client.SubmitMotionControlKlingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitVideoFaceFusionJob", async function () {
    try {
       const data = await client.SubmitVideoFaceFusionJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeReferenceToVideoViduJob", async function () {
    try {
       const data = await client.DescribeReferenceToVideoViduJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitImageToVideoViduJob", async function () {
    try {
       const data = await client.SubmitImageToVideoViduJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.CheckAnimateImageJob", async function () {
    try {
       const data = await client.CheckAnimateImageJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitVideoExtendKlingJob", async function () {
    try {
       const data = await client.SubmitVideoExtendKlingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeImageToVideoGeneralJob", async function () {
    try {
       const data = await client.DescribeImageToVideoGeneralJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeTemplateToVideoJob", async function () {
    try {
       const data = await client.DescribeTemplateToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitVideoStylizationJob", async function () {
    try {
       const data = await client.SubmitVideoStylizationJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribePortraitSingJob", async function () {
    try {
       const data = await client.DescribePortraitSingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeAigcVideoJob", async function () {
    try {
       const data = await client.DescribeAigcVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoExtendKlingJob", async function () {
    try {
       const data = await client.DescribeVideoExtendKlingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitTemplateToVideoJob", async function () {
    try {
       const data = await client.SubmitTemplateToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitVideoEditJob", async function () {
    try {
       const data = await client.SubmitVideoEditJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoVoiceJob", async function () {
    try {
       const data = await client.DescribeVideoVoiceJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitImageToVideoJob", async function () {
    try {
       const data = await client.SubmitImageToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeHumanActorJob", async function () {
    try {
       const data = await client.DescribeHumanActorJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitAigcVideoJob", async function () {
    try {
       const data = await client.SubmitAigcVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitVideoVoiceJob", async function () {
    try {
       const data = await client.SubmitVideoVoiceJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitHumanActorJob", async function () {
    try {
       const data = await client.SubmitHumanActorJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeHunyuanToVideoJob", async function () {
    try {
       const data = await client.DescribeHunyuanToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeImageAnimateJob", async function () {
    try {
       const data = await client.DescribeImageAnimateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitImageAnimateJob", async function () {
    try {
       const data = await client.SubmitImageAnimateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitVideoEditKlingJob", async function () {
    try {
       const data = await client.SubmitVideoEditKlingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeImageToVideoViduJob", async function () {
    try {
       const data = await client.DescribeImageToVideoViduJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoStylizationJob", async function () {
    try {
       const data = await client.DescribeVideoStylizationJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeTextToVideoViduJob", async function () {
    try {
       const data = await client.DescribeTextToVideoViduJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitTextToVideoJob", async function () {
    try {
       const data = await client.SubmitTextToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeImageToVideoJob", async function () {
    try {
       const data = await client.DescribeImageToVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitReferenceToVideoViduJob", async function () {
    try {
       const data = await client.SubmitReferenceToVideoViduJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoFaceFusionJob", async function () {
    try {
       const data = await client.DescribeVideoFaceFusionJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeMotionControlKlingJob", async function () {
    try {
       const data = await client.DescribeMotionControlKlingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitImageToVideoGeneralJob", async function () {
    try {
       const data = await client.SubmitImageToVideoGeneralJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
