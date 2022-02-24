
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.live.v20180801.Client({
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
describe("live.v20180801.test.js", function () {

it("live.v20180801.DropLiveStream", async function () {
    try {
       const data = await client.DropLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveWatermarks", async function () {
    try {
       const data = await client.DescribeLiveWatermarks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeConcurrentRecordStreamNum", async function () {
    try {
       const data = await client.DescribeConcurrentRecordStreamNum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveRecord", async function () {
    try {
       const data = await client.CreateLiveRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.UpdateLiveWatermark", async function () {
    try {
       const data = await client.UpdateLiveWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLiveSnapshotTemplate", async function () {
    try {
       const data = await client.ModifyLiveSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeRecordTask", async function () {
    try {
       const data = await client.DescribeRecordTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveWatermarkRule", async function () {
    try {
       const data = await client.CreateLiveWatermarkRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveStreamEventList", async function () {
    try {
       const data = await client.DescribeLiveStreamEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateCommonMixStream", async function () {
    try {
       const data = await client.CreateCommonMixStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeHttpStatusInfoList", async function () {
    try {
       const data = await client.DescribeHttpStatusInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeProvinceIspPlayInfoList", async function () {
    try {
       const data = await client.DescribeProvinceIspPlayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLivePlayDomain", async function () {
    try {
       const data = await client.ModifyLivePlayDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeStreamPushInfoList", async function () {
    try {
       const data = await client.DescribeStreamPushInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveSnapshotRules", async function () {
    try {
       const data = await client.DescribeLiveSnapshotRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveTranscodeTemplate", async function () {
    try {
       const data = await client.DeleteLiveTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveDomainReferer", async function () {
    try {
       const data = await client.DescribeLiveDomainReferer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeTopClientIpSumInfoList", async function () {
    try {
       const data = await client.DescribeTopClientIpSumInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyPullStreamStatus", async function () {
    try {
       const data = await client.ModifyPullStreamStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateScreenshotTask", async function () {
    try {
       const data = await client.CreateScreenshotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveRecordTemplates", async function () {
    try {
       const data = await client.DescribeLiveRecordTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLiveDomainCert", async function () {
    try {
       const data = await client.ModifyLiveDomainCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeVisitTopSumInfoList", async function () {
    try {
       const data = await client.DescribeVisitTopSumInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLiveRecordTemplate", async function () {
    try {
       const data = await client.ModifyLiveRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveDomainCert", async function () {
    try {
       const data = await client.DescribeLiveDomainCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.AddLiveWatermark", async function () {
    try {
       const data = await client.AddLiveWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeAreaBillBandwidthAndFluxList", async function () {
    try {
       const data = await client.DescribeAreaBillBandwidthAndFluxList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveWatermarkRule", async function () {
    try {
       const data = await client.DeleteLiveWatermarkRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveCallbackRule", async function () {
    try {
       const data = await client.DeleteLiveCallbackRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyPullStreamConfig", async function () {
    try {
       const data = await client.ModifyPullStreamConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveSnapshotTemplate", async function () {
    try {
       const data = await client.CreateLiveSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveStreamOnlineList", async function () {
    try {
       const data = await client.DescribeLiveStreamOnlineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveCallbackTemplate", async function () {
    try {
       const data = await client.DeleteLiveCallbackTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLivePushAuthKey", async function () {
    try {
       const data = await client.DescribeLivePushAuthKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeletePullStreamConfig", async function () {
    try {
       const data = await client.DeletePullStreamConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveRecordTemplate", async function () {
    try {
       const data = await client.DescribeLiveRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.StopScreenshotTask", async function () {
    try {
       const data = await client.StopScreenshotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribePullStreamConfigs", async function () {
    try {
       const data = await client.DescribePullStreamConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveWatermark", async function () {
    try {
       const data = await client.DeleteLiveWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribePlayErrorCodeSumInfoList", async function () {
    try {
       const data = await client.DescribePlayErrorCodeSumInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.AddDelayLiveStream", async function () {
    try {
       const data = await client.AddDelayLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeUploadStreamNums", async function () {
    try {
       const data = await client.DescribeUploadStreamNums({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeStreamDayPlayInfoList", async function () {
    try {
       const data = await client.DescribeStreamDayPlayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLivePushAuthKey", async function () {
    try {
       const data = await client.ModifyLivePushAuthKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLiveTranscodeTemplate", async function () {
    try {
       const data = await client.ModifyLiveTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveTranscodeRule", async function () {
    try {
       const data = await client.DeleteLiveTranscodeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveTranscodeTotalInfo", async function () {
    try {
       const data = await client.DescribeLiveTranscodeTotalInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveSnapshotRule", async function () {
    try {
       const data = await client.DeleteLiveSnapshotRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLivePullStreamTask", async function () {
    try {
       const data = await client.DeleteLivePullStreamTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveForbidStreamList", async function () {
    try {
       const data = await client.DescribeLiveForbidStreamList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLivePullStreamTask", async function () {
    try {
       const data = await client.CreateLivePullStreamTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveCert", async function () {
    try {
       const data = await client.DescribeLiveCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLiveCert", async function () {
    try {
       const data = await client.ModifyLiveCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveDomains", async function () {
    try {
       const data = await client.DescribeLiveDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLivePullStreamTask", async function () {
    try {
       const data = await client.ModifyLivePullStreamTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveCert", async function () {
    try {
       const data = await client.DeleteLiveCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveCallbackTemplate", async function () {
    try {
       const data = await client.CreateLiveCallbackTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ResumeLiveStream", async function () {
    try {
       const data = await client.ResumeLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveCallbackTemplate", async function () {
    try {
       const data = await client.DescribeLiveCallbackTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveDomain", async function () {
    try {
       const data = await client.DeleteLiveDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLiveCallbackTemplate", async function () {
    try {
       const data = await client.ModifyLiveCallbackTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLivePullStreamTasks", async function () {
    try {
       const data = await client.DescribeLivePullStreamTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeProIspPlaySumInfoList", async function () {
    try {
       const data = await client.DescribeProIspPlaySumInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeStreamPlayInfoList", async function () {
    try {
       const data = await client.DescribeStreamPlayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveCert", async function () {
    try {
       const data = await client.CreateLiveCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveTranscodeRules", async function () {
    try {
       const data = await client.DescribeLiveTranscodeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveSnapshotTemplate", async function () {
    try {
       const data = await client.DescribeLiveSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveCallbackTemplates", async function () {
    try {
       const data = await client.DescribeLiveCallbackTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.StopRecordTask", async function () {
    try {
       const data = await client.StopRecordTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveSnapshotTemplates", async function () {
    try {
       const data = await client.DescribeLiveSnapshotTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.StopLiveRecord", async function () {
    try {
       const data = await client.StopLiveRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLivePlayAuthKey", async function () {
    try {
       const data = await client.ModifyLivePlayAuthKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveTranscodeTemplate", async function () {
    try {
       const data = await client.DescribeLiveTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeScreenShotSheetNumList", async function () {
    try {
       const data = await client.DescribeScreenShotSheetNumList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.UnBindLiveDomainCert", async function () {
    try {
       const data = await client.UnBindLiveDomainCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteRecordTask", async function () {
    try {
       const data = await client.DeleteRecordTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveTranscodeDetailInfo", async function () {
    try {
       const data = await client.DescribeLiveTranscodeDetailInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLogDownloadList", async function () {
    try {
       const data = await client.DescribeLogDownloadList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveRecordRules", async function () {
    try {
       const data = await client.DescribeLiveRecordRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveDelayInfoList", async function () {
    try {
       const data = await client.DescribeLiveDelayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveRecordRule", async function () {
    try {
       const data = await client.DeleteLiveRecordRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveDomain", async function () {
    try {
       const data = await client.DescribeLiveDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveCallbackRule", async function () {
    try {
       const data = await client.CreateLiveCallbackRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.BindLiveDomainCert", async function () {
    try {
       const data = await client.BindLiveDomainCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveCallbackRules", async function () {
    try {
       const data = await client.DescribeLiveCallbackRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribePlayErrorCodeDetailInfoList", async function () {
    try {
       const data = await client.DescribePlayErrorCodeDetailInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveStreamPublishedList", async function () {
    try {
       const data = await client.DescribeLiveStreamPublishedList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeScreenshotTask", async function () {
    try {
       const data = await client.DescribeScreenshotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribePushBandwidthAndFluxList", async function () {
    try {
       const data = await client.DescribePushBandwidthAndFluxList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteScreenshotTask", async function () {
    try {
       const data = await client.DeleteScreenshotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ForbidLiveStream", async function () {
    try {
       const data = await client.ForbidLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.AddLiveDomain", async function () {
    try {
       const data = await client.AddLiveDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeDeliverBandwidthList", async function () {
    try {
       const data = await client.DescribeDeliverBandwidthList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveDomainPlayInfoList", async function () {
    try {
       const data = await client.DescribeLiveDomainPlayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeCallbackRecordsList", async function () {
    try {
       const data = await client.DescribeCallbackRecordsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveRecordRule", async function () {
    try {
       const data = await client.CreateLiveRecordRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveWatermark", async function () {
    try {
       const data = await client.DescribeLiveWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveTranscodeTemplates", async function () {
    try {
       const data = await client.DescribeLiveTranscodeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveRecordTemplate", async function () {
    try {
       const data = await client.CreateLiveRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeBillBandwidthAndFluxList", async function () {
    try {
       const data = await client.DescribeBillBandwidthAndFluxList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ForbidLiveDomain", async function () {
    try {
       const data = await client.ForbidLiveDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveTranscodeRule", async function () {
    try {
       const data = await client.CreateLiveTranscodeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveWatermarkRules", async function () {
    try {
       const data = await client.DescribeLiveWatermarkRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveRecord", async function () {
    try {
       const data = await client.DeleteLiveRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveSnapshotRule", async function () {
    try {
       const data = await client.CreateLiveSnapshotRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeGroupProIspPlayInfoList", async function () {
    try {
       const data = await client.DescribeGroupProIspPlayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeAllStreamPlayInfoList", async function () {
    try {
       const data = await client.DescribeAllStreamPlayInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLivePlayAuthKey", async function () {
    try {
       const data = await client.DescribeLivePlayAuthKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveStreamState", async function () {
    try {
       const data = await client.DescribeLiveStreamState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ModifyLiveDomainReferer", async function () {
    try {
       const data = await client.ModifyLiveDomainReferer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveRecordTemplate", async function () {
    try {
       const data = await client.DeleteLiveRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.ResumeDelayLiveStream", async function () {
    try {
       const data = await client.ResumeDelayLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateRecordTask", async function () {
    try {
       const data = await client.CreateRecordTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreateLiveTranscodeTemplate", async function () {
    try {
       const data = await client.CreateLiveTranscodeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveCerts", async function () {
    try {
       const data = await client.DescribeLiveCerts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.EnableLiveDomain", async function () {
    try {
       const data = await client.EnableLiveDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CancelCommonMixStream", async function () {
    try {
       const data = await client.CancelCommonMixStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLivePackageInfo", async function () {
    try {
       const data = await client.DescribeLivePackageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.CreatePullStreamConfig", async function () {
    try {
       const data = await client.CreatePullStreamConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DescribeLiveStreamPushInfoList", async function () {
    try {
       const data = await client.DescribeLiveStreamPushInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("live.v20180801.DeleteLiveSnapshotTemplate", async function () {
    try {
       const data = await client.DeleteLiveSnapshotTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
