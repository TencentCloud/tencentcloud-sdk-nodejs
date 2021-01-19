
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mps.v20190612.Client({
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
describe("mps.v20190612.test.js", function () {

it("mps.v20190612.CreateSnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.CreateSnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ParseNotification", async function () {
    try {
       const data = await client.ParseNotification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyContentReviewTemplate", async function () {
    try {
       const data = await client.ModifyContentReviewTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateContentReviewTemplate", async function () {
    try {
       const data = await client.CreateContentReviewTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateSampleSnapshotTemplate", async function () {
    try {
       const data = await client.CreateSampleSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.EditMedia", async function () {
    try {
       const data = await client.EditMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteAIAnalysisTemplate", async function () {
    try {
       const data = await client.DeleteAIAnalysisTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ParseLiveStreamProcessNotification", async function () {
    try {
       const data = await client.ParseLiveStreamProcessNotification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeWorkflows", async function () {
    try {
       const data = await client.DescribeWorkflows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeSnapshotByTimeOffsetTemplates", async function () {
    try {
       const data = await client.DescribeSnapshotByTimeOffsetTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeMediaMetaData", async function () {
    try {
       const data = await client.DescribeMediaMetaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ResetWorkflow", async function () {
    try {
       const data = await client.ResetWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyTranscodeTemplate", async function () {
    try {
       const data = await client.ModifyTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteAnimatedGraphicsTemplate", async function () {
    try {
       const data = await client.DeleteAnimatedGraphicsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeAIAnalysisTemplates", async function () {
    try {
       const data = await client.DescribeAIAnalysisTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyAIRecognitionTemplate", async function () {
    try {
       const data = await client.ModifyAIRecognitionTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyAdaptiveDynamicStreamingTemplate", async function () {
    try {
       const data = await client.ModifyAdaptiveDynamicStreamingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifySampleSnapshotTemplate", async function () {
    try {
       const data = await client.ModifySampleSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteWatermarkTemplate", async function () {
    try {
       const data = await client.DeleteWatermarkTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeletePersonSample", async function () {
    try {
       const data = await client.DeletePersonSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteTranscodeTemplate", async function () {
    try {
       const data = await client.DeleteTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteSnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.DeleteSnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyAnimatedGraphicsTemplate", async function () {
    try {
       const data = await client.ModifyAnimatedGraphicsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeWordSamples", async function () {
    try {
       const data = await client.DescribeWordSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyWatermarkTemplate", async function () {
    try {
       const data = await client.ModifyWatermarkTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteWordSamples", async function () {
    try {
       const data = await client.DeleteWordSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteWorkflow", async function () {
    try {
       const data = await client.DeleteWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteAdaptiveDynamicStreamingTemplate", async function () {
    try {
       const data = await client.DeleteAdaptiveDynamicStreamingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateAdaptiveDynamicStreamingTemplate", async function () {
    try {
       const data = await client.CreateAdaptiveDynamicStreamingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DisableWorkflow", async function () {
    try {
       const data = await client.DisableWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeSampleSnapshotTemplates", async function () {
    try {
       const data = await client.DescribeSampleSnapshotTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateWatermarkTemplate", async function () {
    try {
       const data = await client.CreateWatermarkTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribePersonSamples", async function () {
    try {
       const data = await client.DescribePersonSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteSampleSnapshotTemplate", async function () {
    try {
       const data = await client.DeleteSampleSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteAIRecognitionTemplate", async function () {
    try {
       const data = await client.DeleteAIRecognitionTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateAnimatedGraphicsTemplate", async function () {
    try {
       const data = await client.CreateAnimatedGraphicsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeAnimatedGraphicsTemplates", async function () {
    try {
       const data = await client.DescribeAnimatedGraphicsTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.EnableWorkflow", async function () {
    try {
       const data = await client.EnableWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.RecognizeMediaForZhiXue", async function () {
    try {
       const data = await client.RecognizeMediaForZhiXue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ManageTask", async function () {
    try {
       const data = await client.ManageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyAIAnalysisTemplate", async function () {
    try {
       const data = await client.ModifyAIAnalysisTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifySnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.ModifySnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateWordSamples", async function () {
    try {
       const data = await client.CreateWordSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreatePersonSample", async function () {
    try {
       const data = await client.CreatePersonSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ExecuteFunction", async function () {
    try {
       const data = await client.ExecuteFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyPersonSample", async function () {
    try {
       const data = await client.ModifyPersonSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateTranscodeTemplate", async function () {
    try {
       const data = await client.CreateTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateWorkflow", async function () {
    try {
       const data = await client.CreateWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ProcessLiveStream", async function () {
    try {
       const data = await client.ProcessLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeAdaptiveDynamicStreamingTemplates", async function () {
    try {
       const data = await client.DescribeAdaptiveDynamicStreamingTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ProcessMedia", async function () {
    try {
       const data = await client.ProcessMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateAIRecognitionTemplate", async function () {
    try {
       const data = await client.CreateAIRecognitionTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyImageSpriteTemplate", async function () {
    try {
       const data = await client.ModifyImageSpriteTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyWordSample", async function () {
    try {
       const data = await client.ModifyWordSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeImageSpriteTemplates", async function () {
    try {
       const data = await client.DescribeImageSpriteTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteContentReviewTemplate", async function () {
    try {
       const data = await client.DeleteContentReviewTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateAIAnalysisTemplate", async function () {
    try {
       const data = await client.CreateAIAnalysisTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeAIRecognitionTemplates", async function () {
    try {
       const data = await client.DescribeAIRecognitionTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeWatermarkTemplates", async function () {
    try {
       const data = await client.DescribeWatermarkTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateImageSpriteTemplate", async function () {
    try {
       const data = await client.CreateImageSpriteTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteImageSpriteTemplate", async function () {
    try {
       const data = await client.DeleteImageSpriteTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeTranscodeTemplates", async function () {
    try {
       const data = await client.DescribeTranscodeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeContentReviewTemplates", async function () {
    try {
       const data = await client.DescribeContentReviewTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
