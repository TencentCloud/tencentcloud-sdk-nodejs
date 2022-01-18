
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotvideoindustry.v20201201.Client({
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
describe("iotvideoindustry.v20201201.test.js", function () {

it("iotvideoindustry.v20201201.DescribeIPCChannels", async function () {
    try {
       const data = await client.DescribeIPCChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyVideoInfo", async function () {
    try {
       const data = await client.ModifyVideoInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeSubGroups", async function () {
    try {
       const data = await client.DescribeSubGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeStatisticSummary", async function () {
    try {
       const data = await client.DescribeStatisticSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateScene", async function () {
    try {
       const data = await client.CreateScene({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeScene", async function () {
    try {
       const data = await client.DescribeScene({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyBindRecordingPlan", async function () {
    try {
       const data = await client.ModifyBindRecordingPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeVideoListByChannel", async function () {
    try {
       const data = await client.DescribeVideoListByChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeLiveStream", async function () {
    try {
       const data = await client.DescribeLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyScene", async function () {
    try {
       const data = await client.ModifyScene({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeRecordingPlanById", async function () {
    try {
       const data = await client.DescribeRecordingPlanById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroupDevices", async function () {
    try {
       const data = await client.DescribeGroupDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeCurrentDeviceData", async function () {
    try {
       const data = await client.DescribeCurrentDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDeviceStreams", async function () {
    try {
       const data = await client.DescribeDeviceStreams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetVideoListByCon", async function () {
    try {
       const data = await client.GetVideoListByCon({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeRecordingPlans", async function () {
    try {
       const data = await client.DescribeRecordingPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDeviceGroup", async function () {
    try {
       const data = await client.DescribeDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteRecordPlan", async function () {
    try {
       const data = await client.DeleteRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateMessageForward", async function () {
    try {
       const data = await client.CreateMessageForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteTimeTemplate", async function () {
    try {
       const data = await client.DeleteTimeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeChannels", async function () {
    try {
       const data = await client.DescribeChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyLiveChannel", async function () {
    try {
       const data = await client.ModifyLiveChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ResetWarning", async function () {
    try {
       const data = await client.ResetWarning({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlDevicePTZ", async function () {
    try {
       const data = await client.ControlDevicePTZ({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordDatesByDev", async function () {
    try {
       const data = await client.GetRecordDatesByDev({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlHomePosition", async function () {
    try {
       const data = await client.ControlHomePosition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeStatisticDetails", async function () {
    try {
       const data = await client.DescribeStatisticDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroupById", async function () {
    try {
       const data = await client.DescribeGroupById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateTimeTemplate", async function () {
    try {
       const data = await client.CreateTimeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateDeviceGroup", async function () {
    try {
       const data = await client.CreateDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlChannelLocalRecord", async function () {
    try {
       const data = await client.ControlChannelLocalRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeChannelLocalRecordURL", async function () {
    try {
       const data = await client.DescribeChannelLocalRecordURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateDevicePassWord", async function () {
    try {
       const data = await client.UpdateDevicePassWord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifySubscriptionStatus", async function () {
    try {
       const data = await client.ModifySubscriptionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeWarnMod", async function () {
    try {
       const data = await client.DescribeWarnMod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyBindPlanLiveChannel", async function () {
    try {
       const data = await client.ModifyBindPlanLiveChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDeviceEvent", async function () {
    try {
       const data = await client.DescribeDeviceEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyLiveRecordPlan", async function () {
    try {
       const data = await client.ModifyLiveRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteChannel", async function () {
    try {
       const data = await client.DeleteChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeChannelsByLiveRecordPlan", async function () {
    try {
       const data = await client.DescribeChannelsByLiveRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyBindSceneDevice", async function () {
    try {
       const data = await client.ModifyBindSceneDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeRecordDatesByLive", async function () {
    try {
       const data = await client.DescribeRecordDatesByLive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeChannelLiveStreamURL", async function () {
    try {
       const data = await client.DescribeChannelLiveStreamURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeSubscriptionStatus", async function () {
    try {
       const data = await client.DescribeSubscriptionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateDevice", async function () {
    try {
       const data = await client.CreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteWarning", async function () {
    try {
       const data = await client.DeleteWarning({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroups", async function () {
    try {
       const data = await client.DescribeGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeLiveRecordPlanIds", async function () {
    try {
       const data = await client.DescribeLiveRecordPlanIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlPreset", async function () {
    try {
       const data = await client.ControlPreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateRecordPlan", async function () {
    try {
       const data = await client.CreateRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateDeviceGroup", async function () {
    try {
       const data = await client.UpdateDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteVideoList", async function () {
    try {
       const data = await client.DeleteVideoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeBindSceneDevices", async function () {
    try {
       const data = await client.DescribeBindSceneDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateTimeTemplate", async function () {
    try {
       const data = await client.UpdateTimeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateRecordingPlan", async function () {
    try {
       const data = await client.CreateRecordingPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDeviceMonitorData", async function () {
    try {
       const data = await client.DescribeDeviceMonitorData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetTimeTemplateById", async function () {
    try {
       const data = await client.GetTimeTemplateById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeMessageForwards", async function () {
    try {
       const data = await client.DescribeMessageForwards({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribePresetList", async function () {
    try {
       const data = await client.DescribePresetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyMessageForward", async function () {
    try {
       const data = await client.ModifyMessageForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDeviceList", async function () {
    try {
       const data = await client.DescribeDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateLiveRecordPlan", async function () {
    try {
       const data = await client.CreateLiveRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeMessageForward", async function () {
    try {
       const data = await client.DescribeMessageForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetTimeTemplates", async function () {
    try {
       const data = await client.GetTimeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeAbnormalEvents", async function () {
    try {
       const data = await client.DescribeAbnormalEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordPlanById", async function () {
    try {
       const data = await client.GetRecordPlanById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeRecordStream", async function () {
    try {
       const data = await client.DescribeRecordStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteLiveRecordPlan", async function () {
    try {
       const data = await client.DeleteLiveRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeMonitorDataByDate", async function () {
    try {
       const data = await client.DescribeMonitorDataByDate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeWarnings", async function () {
    try {
       const data = await client.DescribeWarnings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteDeviceGroup", async function () {
    try {
       const data = await client.DeleteDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyRecordingPlan", async function () {
    try {
       const data = await client.ModifyRecordingPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeChannelStreamURL", async function () {
    try {
       const data = await client.DescribeChannelStreamURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeLiveChannel", async function () {
    try {
       const data = await client.DescribeLiveChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeAllDeviceList", async function () {
    try {
       const data = await client.DescribeAllDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteScene", async function () {
    try {
       const data = await client.DeleteScene({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateLiveChannel", async function () {
    try {
       const data = await client.CreateLiveChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeBindSceneChannels", async function () {
    try {
       const data = await client.DescribeBindSceneChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateRecordPlan", async function () {
    try {
       const data = await client.UpdateRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteRecordingPlan", async function () {
    try {
       const data = await client.DeleteRecordingPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlChannelPTZ", async function () {
    try {
       const data = await client.ControlChannelPTZ({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlRecordStream", async function () {
    try {
       const data = await client.ControlRecordStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeLiveVideoList", async function () {
    try {
       const data = await client.DescribeLiveVideoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyBindSceneChannels", async function () {
    try {
       const data = await client.ModifyBindSceneChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDevicePassWord", async function () {
    try {
       const data = await client.DescribeDevicePassWord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeLiveChannelList", async function () {
    try {
       const data = await client.DescribeLiveChannelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteMessageForward", async function () {
    try {
       const data = await client.DeleteMessageForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyPreset", async function () {
    try {
       const data = await client.ModifyPreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyDeviceData", async function () {
    try {
       const data = await client.ModifyDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroupByPath", async function () {
    try {
       const data = await client.DescribeGroupByPath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteLiveChannel", async function () {
    try {
       const data = await client.DeleteLiveChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordPlans", async function () {
    try {
       const data = await client.GetRecordPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordPlanByDev", async function () {
    try {
       const data = await client.GetRecordPlanByDev({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeSIPServer", async function () {
    try {
       const data = await client.DescribeSIPServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteLiveVideoList", async function () {
    try {
       const data = await client.DeleteLiveVideoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeVideoList", async function () {
    try {
       const data = await client.DescribeVideoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyLiveVideo", async function () {
    try {
       const data = await client.ModifyLiveVideo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeXP2PData", async function () {
    try {
       const data = await client.DescribeXP2PData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeScenes", async function () {
    try {
       const data = await client.DescribeScenes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.BindGroupDevices", async function () {
    try {
       const data = await client.BindGroupDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeLiveRecordPlanById", async function () {
    try {
       const data = await client.DescribeLiveRecordPlanById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeRecordDatesByChannel", async function () {
    try {
       const data = await client.DescribeRecordDatesByChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
