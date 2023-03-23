
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.trtc.v20190722.Client({
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
describe("trtc.v20190722.test.js", function () {

it("trtc.v20190722.DescribeRoomInfo", async function () {
    try {
       const data = await client.DescribeRoomInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTrtcUsage", async function () {
    try {
       const data = await client.DescribeTrtcUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTRTCMarketQualityMetricData", async function () {
    try {
       const data = await client.DescribeTRTCMarketQualityMetricData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StartPublishCdnStream", async function () {
    try {
       const data = await client.StartPublishCdnStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeCallDetailInfo", async function () {
    try {
       const data = await client.DescribeCallDetailInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StopMCUMixTranscode", async function () {
    try {
       const data = await client.StopMCUMixTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTRTCMarketScaleMetricData", async function () {
    try {
       const data = await client.DescribeTRTCMarketScaleMetricData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StartMCUMixTranscodeByStrRoomId", async function () {
    try {
       const data = await client.StartMCUMixTranscodeByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DeletePicture", async function () {
    try {
       const data = await client.DeletePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTRTCRealTimeQualityMetricData", async function () {
    try {
       const data = await client.DescribeTRTCRealTimeQualityMetricData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.CreatePicture", async function () {
    try {
       const data = await client.CreatePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.RemoveUser", async function () {
    try {
       const data = await client.RemoveUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.ModifyCloudRecording", async function () {
    try {
       const data = await client.ModifyCloudRecording({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeUserEvent", async function () {
    try {
       const data = await client.DescribeUserEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StartMCUMixTranscode", async function () {
    try {
       const data = await client.StartMCUMixTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.CreateCloudRecording", async function () {
    try {
       const data = await client.CreateCloudRecording({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeExternalTrtcMeasure", async function () {
    try {
       const data = await client.DescribeExternalTrtcMeasure({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeScaleInfo", async function () {
    try {
       const data = await client.DescribeScaleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeRelayUsage", async function () {
    try {
       const data = await client.DescribeRelayUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeUserInfo", async function () {
    try {
       const data = await client.DescribeUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DismissRoomByStrRoomId", async function () {
    try {
       const data = await client.DismissRoomByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StopMCUMixTranscodeByStrRoomId", async function () {
    try {
       const data = await client.StopMCUMixTranscodeByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeRecordingUsage", async function () {
    try {
       const data = await client.DescribeRecordingUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.RemoveUserByStrRoomId", async function () {
    try {
       const data = await client.RemoveUserByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeMixTranscodingUsage", async function () {
    try {
       const data = await client.DescribeMixTranscodingUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DismissRoom", async function () {
    try {
       const data = await client.DismissRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTrtcRoomUsage", async function () {
    try {
       const data = await client.DescribeTrtcRoomUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeRecordStatistic", async function () {
    try {
       const data = await client.DescribeRecordStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTrtcMcuTranscodeTime", async function () {
    try {
       const data = await client.DescribeTrtcMcuTranscodeTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeCloudRecording", async function () {
    try {
       const data = await client.DescribeCloudRecording({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.ModifyPicture", async function () {
    try {
       const data = await client.ModifyPicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.UpdatePublishCdnStream", async function () {
    try {
       const data = await client.UpdatePublishCdnStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DeleteCloudRecording", async function () {
    try {
       const data = await client.DeleteCloudRecording({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribePicture", async function () {
    try {
       const data = await client.DescribePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StopPublishCdnStream", async function () {
    try {
       const data = await client.StopPublishCdnStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeUnusualEvent", async function () {
    try {
       const data = await client.DescribeUnusualEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTRTCRealTimeScaleMetricData", async function () {
    try {
       const data = await client.DescribeTRTCRealTimeScaleMetricData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
