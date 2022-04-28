
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vod.v20180717.Client({
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
describe("vod.v20180717.test.js", function () {

it("vod.v20180717.CreateImageProcessingTemplate", async function () {
    try {
       const data = await client.CreateImageProcessingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateSnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.CreateSnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyDefaultStorageRegion", async function () {
    try {
       const data = await client.ModifyDefaultStorageRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.EditMedia", async function () {
    try {
       const data = await client.EditMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeVodDomains", async function () {
    try {
       const data = await client.DescribeVodDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ApplyUpload", async function () {
    try {
       const data = await client.ApplyUpload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteAnimatedGraphicsTemplate", async function () {
    try {
       const data = await client.DeleteAnimatedGraphicsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeAIAnalysisTemplates", async function () {
    try {
       const data = await client.DescribeAIAnalysisTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.PullEvents", async function () {
    try {
       const data = await client.PullEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ProcessMediaByProcedure", async function () {
    try {
       const data = await client.ProcessMediaByProcedure({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteTranscodeTemplate", async function () {
    try {
       const data = await client.DeleteTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeReviewDetails", async function () {
    try {
       const data = await client.DescribeReviewDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeWordSamples", async function () {
    try {
       const data = await client.DescribeWordSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeStorageData", async function () {
    try {
       const data = await client.DescribeStorageData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.SplitMedia", async function () {
    try {
       const data = await client.SplitMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeImageProcessingTemplates", async function () {
    try {
       const data = await client.DescribeImageProcessingTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteProcedureTemplate", async function () {
    try {
       const data = await client.DeleteProcedureTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteAdaptiveDynamicStreamingTemplate", async function () {
    try {
       const data = await client.DeleteAdaptiveDynamicStreamingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateAdaptiveDynamicStreamingTemplate", async function () {
    try {
       const data = await client.CreateAdaptiveDynamicStreamingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeDrmDataKey", async function () {
    try {
       const data = await client.DescribeDrmDataKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteSnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.DeleteSnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeCdnLogs", async function () {
    try {
       const data = await client.DescribeCdnLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyClass", async function () {
    try {
       const data = await client.ModifyClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateStorageRegion", async function () {
    try {
       const data = await client.CreateStorageRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ResetProcedureTemplate", async function () {
    try {
       const data = await client.ResetProcedureTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeCDNUsageData", async function () {
    try {
       const data = await client.DescribeCDNUsageData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateTranscodeTemplate", async function () {
    try {
       const data = await client.CreateTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeCDNStatDetails", async function () {
    try {
       const data = await client.DescribeCDNStatDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeMediaPlayStatDetails", async function () {
    try {
       const data = await client.DescribeMediaPlayStatDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyImageSpriteTemplate", async function () {
    try {
       const data = await client.ModifyImageSpriteTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteClass", async function () {
    try {
       const data = await client.DeleteClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ExecuteFunction", async function () {
    try {
       const data = await client.ExecuteFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeTranscodeTemplates", async function () {
    try {
       const data = await client.DescribeTranscodeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeMediaProcessUsageData", async function () {
    try {
       const data = await client.DescribeMediaProcessUsageData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribePrepaidProducts", async function () {
    try {
       const data = await client.DescribePrepaidProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeSnapshotByTimeOffsetTemplates", async function () {
    try {
       const data = await client.DescribeSnapshotByTimeOffsetTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ComposeMedia", async function () {
    try {
       const data = await client.ComposeMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateContentReviewTemplate", async function () {
    try {
       const data = await client.CreateContentReviewTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateSampleSnapshotTemplate", async function () {
    try {
       const data = await client.CreateSampleSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteAIAnalysisTemplate", async function () {
    try {
       const data = await client.DeleteAIAnalysisTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeMediaInfos", async function () {
    try {
       const data = await client.DescribeMediaInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.LiveRealTimeClip", async function () {
    try {
       const data = await client.LiveRealTimeClip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyMediaStorageClass", async function () {
    try {
       const data = await client.ModifyMediaStorageClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.PullUpload", async function () {
    try {
       const data = await client.PullUpload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifySampleSnapshotTemplate", async function () {
    try {
       const data = await client.ModifySampleSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyVodDomainAccelerateConfig", async function () {
    try {
       const data = await client.ModifyVodDomainAccelerateConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteSuperPlayerConfig", async function () {
    try {
       const data = await client.DeleteSuperPlayerConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeProcedureTemplates", async function () {
    try {
       const data = await client.DescribeProcedureTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteVodDomain", async function () {
    try {
       const data = await client.DeleteVodDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ParseStreamingManifest", async function () {
    try {
       const data = await client.ParseStreamingManifest({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ProcessImage", async function () {
    try {
       const data = await client.ProcessImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateProcedureTemplate", async function () {
    try {
       const data = await client.CreateProcedureTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.PushUrlCache", async function () {
    try {
       const data = await client.PushUrlCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteMedia", async function () {
    try {
       const data = await client.DeleteMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeImageReviewUsageData", async function () {
    try {
       const data = await client.DescribeImageReviewUsageData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyPersonSample", async function () {
    try {
       const data = await client.ModifyPersonSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeDailyMediaPlayStat", async function () {
    try {
       const data = await client.DescribeDailyMediaPlayStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteContentReviewTemplate", async function () {
    try {
       const data = await client.DeleteContentReviewTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateAIAnalysisTemplate", async function () {
    try {
       const data = await client.CreateAIAnalysisTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeDailyMostPlayedStat", async function () {
    try {
       const data = await client.DescribeDailyMostPlayedStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeStorageRegions", async function () {
    try {
       const data = await client.DescribeStorageRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeEventsState", async function () {
    try {
       const data = await client.DescribeEventsState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateSuperPlayerConfig", async function () {
    try {
       const data = await client.CreateSuperPlayerConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyVodDomainConfig", async function () {
    try {
       const data = await client.ModifyVodDomainConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ConfirmEvents", async function () {
    try {
       const data = await client.ConfirmEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ProcessMediaByUrl", async function () {
    try {
       const data = await client.ProcessMediaByUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyTranscodeTemplate", async function () {
    try {
       const data = await client.ModifyTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeContentReviewTemplates", async function () {
    try {
       const data = await client.DescribeContentReviewTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyHeadTailTemplate", async function () {
    try {
       const data = await client.ModifyHeadTailTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteImageProcessingTemplate", async function () {
    try {
       const data = await client.DeleteImageProcessingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateHeadTailTemplate", async function () {
    try {
       const data = await client.CreateHeadTailTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyWatermarkTemplate", async function () {
    try {
       const data = await client.ModifyWatermarkTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeStorageDetails", async function () {
    try {
       const data = await client.DescribeStorageDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ForbidMediaDistribution", async function () {
    try {
       const data = await client.ForbidMediaDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateVodDomain", async function () {
    try {
       const data = await client.CreateVodDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateImageSpriteTemplate", async function () {
    try {
       const data = await client.CreateImageSpriteTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribePersonSamples", async function () {
    try {
       const data = await client.DescribePersonSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteAIRecognitionTemplate", async function () {
    try {
       const data = await client.DeleteAIRecognitionTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateSubAppId", async function () {
    try {
       const data = await client.CreateSubAppId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeAnimatedGraphicsTemplates", async function () {
    try {
       const data = await client.DescribeAnimatedGraphicsTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteWordSamples", async function () {
    try {
       const data = await client.DeleteWordSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ManageTask", async function () {
    try {
       const data = await client.ManageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyAIAnalysisTemplate", async function () {
    try {
       const data = await client.ModifyAIAnalysisTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifySnapshotByTimeOffsetTemplate", async function () {
    try {
       const data = await client.ModifySnapshotByTimeOffsetTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifySuperPlayerConfig", async function () {
    try {
       const data = await client.ModifySuperPlayerConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateClass", async function () {
    try {
       const data = await client.CreateClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateWordSamples", async function () {
    try {
       const data = await client.CreateWordSamples({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeEventConfig", async function () {
    try {
       const data = await client.DescribeEventConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifySubAppIdInfo", async function () {
    try {
       const data = await client.ModifySubAppIdInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeAdaptiveDynamicStreamingTemplates", async function () {
    try {
       const data = await client.DescribeAdaptiveDynamicStreamingTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeSampleSnapshotTemplates", async function () {
    try {
       const data = await client.DescribeSampleSnapshotTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyWordSample", async function () {
    try {
       const data = await client.ModifyWordSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeImageSpriteTemplates", async function () {
    try {
       const data = await client.DescribeImageSpriteTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeAllClass", async function () {
    try {
       const data = await client.DescribeAllClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeWatermarkTemplates", async function () {
    try {
       const data = await client.DescribeWatermarkTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateWatermarkTemplate", async function () {
    try {
       const data = await client.CreateWatermarkTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeAIRecognitionTemplates", async function () {
    try {
       const data = await client.DescribeAIRecognitionTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateAIRecognitionTemplate", async function () {
    try {
       const data = await client.CreateAIRecognitionTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeSubAppIds", async function () {
    try {
       const data = await client.DescribeSubAppIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeHeadTailTemplates", async function () {
    try {
       const data = await client.DescribeHeadTailTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CommitUpload", async function () {
    try {
       const data = await client.CommitUpload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyAIRecognitionTemplate", async function () {
    try {
       const data = await client.ModifyAIRecognitionTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyAdaptiveDynamicStreamingTemplate", async function () {
    try {
       const data = await client.ModifyAdaptiveDynamicStreamingTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.SearchMedia", async function () {
    try {
       const data = await client.SearchMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteWatermarkTemplate", async function () {
    try {
       const data = await client.DeleteWatermarkTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeletePersonSample", async function () {
    try {
       const data = await client.DeletePersonSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreateAnimatedGraphicsTemplate", async function () {
    try {
       const data = await client.CreateAnimatedGraphicsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyAnimatedGraphicsTemplate", async function () {
    try {
       const data = await client.ModifyAnimatedGraphicsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.AttachMediaSubtitles", async function () {
    try {
       const data = await client.AttachMediaSubtitles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyEventConfig", async function () {
    try {
       const data = await client.ModifyEventConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyMediaInfo", async function () {
    try {
       const data = await client.ModifyMediaInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ReviewImage", async function () {
    try {
       const data = await client.ReviewImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteSampleSnapshotTemplate", async function () {
    try {
       const data = await client.DeleteSampleSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.WeChatMiniProgramPublish", async function () {
    try {
       const data = await client.WeChatMiniProgramPublish({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.SimpleHlsClip", async function () {
    try {
       const data = await client.SimpleHlsClip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteHeadTailTemplate", async function () {
    try {
       const data = await client.DeleteHeadTailTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.CreatePersonSample", async function () {
    try {
       const data = await client.CreatePersonSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifySubAppIdStatus", async function () {
    try {
       const data = await client.ModifySubAppIdStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ModifyContentReviewTemplate", async function () {
    try {
       const data = await client.ModifyContentReviewTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.ProcessMedia", async function () {
    try {
       const data = await client.ProcessMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeSuperPlayerConfigs", async function () {
    try {
       const data = await client.DescribeSuperPlayerConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DescribeDailyPlayStatFileList", async function () {
    try {
       const data = await client.DescribeDailyPlayStatFileList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20180717.DeleteImageSpriteTemplate", async function () {
    try {
       const data = await client.DeleteImageSpriteTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
