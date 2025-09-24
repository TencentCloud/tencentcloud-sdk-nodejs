
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

it("mps.v20190612.DescribeAsrHotwords", async function () {
    try {
       const data = await client.DescribeAsrHotwords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateSnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.CreateSnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkFlowRealtimeStatus", async function () {
    try {
       const data = await client.DescribeStreamLinkFlowRealtimeStatus({})
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

it("mps.v20190612.ModifySmartSubtitleTemplate", async function () {
    try {
       const data = await client.ModifySmartSubtitleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeBatchTaskDetail", async function () {
    try {
       const data = await client.DescribeBatchTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyLiveRecordTemplate", async function () {
    try {
       const data = await client.ModifyLiveRecordTemplate({})
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

it("mps.v20190612.DescribeStreamLinkEvent", async function () {
    try {
       const data = await client.DescribeStreamLinkEvent({})
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

it("mps.v20190612.DeleteSmartSubtitleTemplate", async function () {
    try {
       const data = await client.DeleteSmartSubtitleTemplate({})
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

it("mps.v20190612.DeleteTranscodeTemplate", async function () {
    try {
       const data = await client.DeleteTranscodeTemplate({})
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

it("mps.v20190612.DescribeWordSamples", async function () {
    try {
       const data = await client.DescribeWordSamples({})
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

it("mps.v20190612.ModifyAIAnalysisTemplate", async function () {
    try {
       const data = await client.ModifyAIAnalysisTemplate({})
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

it("mps.v20190612.DescribeStreamLinkFlowStatistics", async function () {
    try {
       const data = await client.DescribeStreamLinkFlowStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.BatchDeleteStreamLinkFlow", async function () {
    try {
       const data = await client.BatchDeleteStreamLinkFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeLiveRecordTemplates", async function () {
    try {
       const data = await client.DescribeLiveRecordTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteAsrHotwords", async function () {
    try {
       const data = await client.DeleteAsrHotwords({})
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

it("mps.v20190612.DescribeAsrHotwordsList", async function () {
    try {
       const data = await client.DescribeAsrHotwordsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyStreamLinkFlow", async function () {
    try {
       const data = await client.ModifyStreamLinkFlow({})
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

it("mps.v20190612.CreateWordSamples", async function () {
    try {
       const data = await client.CreateWordSamples({})
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

it("mps.v20190612.CreateStreamLinkFlow", async function () {
    try {
       const data = await client.CreateStreamLinkFlow({})
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

it("mps.v20190612.BatchProcessMedia", async function () {
    try {
       const data = await client.BatchProcessMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkFlows", async function () {
    try {
       const data = await client.DescribeStreamLinkFlows({})
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

it("mps.v20190612.DescribeImageTaskDetail", async function () {
    try {
       const data = await client.DescribeImageTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteStreamLinkOutput", async function () {
    try {
       const data = await client.DeleteStreamLinkOutput({})
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

it("mps.v20190612.ModifyStreamLinkOutputInfo", async function () {
    try {
       const data = await client.ModifyStreamLinkOutputInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeGroupAttachFlowsById", async function () {
    try {
       const data = await client.DescribeGroupAttachFlowsById({})
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

it("mps.v20190612.DeleteAIAnalysisTemplate", async function () {
    try {
       const data = await client.DeleteAIAnalysisTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifySchedule", async function () {
    try {
       const data = await client.ModifySchedule({})
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

it("mps.v20190612.DescribeVideoSearchTaskDetail", async function () {
    try {
       const data = await client.DescribeVideoSearchTaskDetail({})
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

it("mps.v20190612.ResetWorkflow", async function () {
    try {
       const data = await client.ResetWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteQualityControlTemplate", async function () {
    try {
       const data = await client.DeleteQualityControlTemplate({})
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

it("mps.v20190612.CreateMediaEvaluation", async function () {
    try {
       const data = await client.CreateMediaEvaluation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateQualityControlTemplate", async function () {
    try {
       const data = await client.CreateQualityControlTemplate({})
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

it("mps.v20190612.DescribeTranscodeTemplates", async function () {
    try {
       const data = await client.DescribeTranscodeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyStreamLinkSecurityGroup", async function () {
    try {
       const data = await client.ModifyStreamLinkSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteStreamLinkFlow", async function () {
    try {
       const data = await client.DeleteStreamLinkFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.StartStreamLinkFlow", async function () {
    try {
       const data = await client.StartStreamLinkFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ProcessImage", async function () {
    try {
       const data = await client.ProcessImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyStreamLinkInput", async function () {
    try {
       const data = await client.ModifyStreamLinkInput({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeSmartEraseTemplates", async function () {
    try {
       const data = await client.DescribeSmartEraseTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifySmartEraseTemplate", async function () {
    try {
       const data = await client.ModifySmartEraseTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateSmartSubtitleTemplate", async function () {
    try {
       const data = await client.CreateSmartSubtitleTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkRegions", async function () {
    try {
       const data = await client.DescribeStreamLinkRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeSchedules", async function () {
    try {
       const data = await client.DescribeSchedules({})
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

it("mps.v20190612.CreateLiveRecordTemplate", async function () {
    try {
       const data = await client.CreateLiveRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkSecurityGroups", async function () {
    try {
       const data = await client.DescribeStreamLinkSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteStreamLinkSecurityGroup", async function () {
    try {
       const data = await client.DeleteStreamLinkSecurityGroup({})
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

it("mps.v20190612.ModifyQualityControlTemplate", async function () {
    try {
       const data = await client.ModifyQualityControlTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.StopStreamLinkFlow", async function () {
    try {
       const data = await client.StopStreamLinkFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkEventAttachedFlows", async function () {
    try {
       const data = await client.DescribeStreamLinkEventAttachedFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeSmartSubtitleTemplates", async function () {
    try {
       const data = await client.DescribeSmartSubtitleTemplates({})
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

it("mps.v20190612.DescribeSnapshotByTimeOffsetTemplates", async function () {
    try {
       const data = await client.DescribeSnapshotByTimeOffsetTemplates({})
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

it("mps.v20190612.DescribeContentReviewTemplates", async function () {
    try {
       const data = await client.DescribeContentReviewTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkEvents", async function () {
    try {
       const data = await client.DescribeStreamLinkEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.ModifyAsrHotwords", async function () {
    try {
       const data = await client.ModifyAsrHotwords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkFlowSRTStatistics", async function () {
    try {
       const data = await client.DescribeStreamLinkFlowSRTStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateStreamLinkOutputInfo", async function () {
    try {
       const data = await client.CreateStreamLinkOutputInfo({})
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

it("mps.v20190612.ModifyWatermarkTemplate", async function () {
    try {
       const data = await client.ModifyWatermarkTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateVideoSearchTask", async function () {
    try {
       const data = await client.CreateVideoSearchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkActivateState", async function () {
    try {
       const data = await client.DescribeStreamLinkActivateState({})
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

it("mps.v20190612.DescribePersonSamples", async function () {
    try {
       const data = await client.DescribePersonSamples({})
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

it("mps.v20190612.DeleteAIRecognitionTemplate", async function () {
    try {
       const data = await client.DeleteAIRecognitionTemplate({})
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

it("mps.v20190612.DeleteWordSamples", async function () {
    try {
       const data = await client.DeleteWordSamples({})
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

it("mps.v20190612.DescribeVideoDatabaseEntryTaskDetail", async function () {
    try {
       const data = await client.DescribeVideoDatabaseEntryTaskDetail({})
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

it("mps.v20190612.BatchStartStreamLinkFlow", async function () {
    try {
       const data = await client.BatchStartStreamLinkFlow({})
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

it("mps.v20190612.DescribeAdaptiveDynamicStreamingTemplates", async function () {
    try {
       const data = await client.DescribeAdaptiveDynamicStreamingTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateSchedule", async function () {
    try {
       const data = await client.CreateSchedule({})
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

it("mps.v20190612.DescribeWatermarkTemplates", async function () {
    try {
       const data = await client.DescribeWatermarkTemplates({})
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

it("mps.v20190612.ModifyStreamLinkEvent", async function () {
    try {
       const data = await client.ModifyStreamLinkEvent({})
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

it("mps.v20190612.WithdrawsWatermark", async function () {
    try {
       const data = await client.WithdrawsWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkFlow", async function () {
    try {
       const data = await client.DescribeStreamLinkFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteSchedule", async function () {
    try {
       const data = await client.DeleteSchedule({})
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

it("mps.v20190612.DeleteSnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.DeleteSnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.EnableSchedule", async function () {
    try {
       const data = await client.EnableSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateVideoDatabaseEntryTask", async function () {
    try {
       const data = await client.CreateVideoDatabaseEntryTask({})
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

it("mps.v20190612.DeleteLiveRecordTemplate", async function () {
    try {
       const data = await client.DeleteLiveRecordTemplate({})
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

it("mps.v20190612.DeleteSampleSnapshotTemplate", async function () {
    try {
       const data = await client.DeleteSampleSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkFlowMediaStatistics", async function () {
    try {
       const data = await client.DescribeStreamLinkFlowMediaStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateAsrHotwords", async function () {
    try {
       const data = await client.CreateAsrHotwords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateStreamLinkEvent", async function () {
    try {
       const data = await client.CreateStreamLinkEvent({})
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

it("mps.v20190612.DescribeQualityControlTemplates", async function () {
    try {
       const data = await client.DescribeQualityControlTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateStreamLinkSecurityGroup", async function () {
    try {
       const data = await client.CreateStreamLinkSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DisableSchedule", async function () {
    try {
       const data = await client.DisableSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateStreamLinkInput", async function () {
    try {
       const data = await client.CreateStreamLinkInput({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DisassociateSecurityGroup", async function () {
    try {
       const data = await client.DisassociateSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.CreateSmartEraseTemplate", async function () {
    try {
       const data = await client.CreateSmartEraseTemplate({})
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

it("mps.v20190612.CreateAIRecognitionTemplate", async function () {
    try {
       const data = await client.CreateAIRecognitionTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.BatchStopStreamLinkFlow", async function () {
    try {
       const data = await client.BatchStopStreamLinkFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteSmartEraseTemplate", async function () {
    try {
       const data = await client.DeleteSmartEraseTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DeleteStreamLinkEvent", async function () {
    try {
       const data = await client.DeleteStreamLinkEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mps.v20190612.DescribeStreamLinkFlowLogs", async function () {
    try {
       const data = await client.DescribeStreamLinkFlowLogs({})
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

})
