
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tiw.v20190919.Client({
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
describe("tiw.v20190919.test.js", function () {

it("tiw.v20190919.DescribeWhiteboardBucketConfig", async function () {
    try {
       const data = await client.DescribeWhiteboardBucketConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetOnlineRecordCallback", async function () {
    try {
       const data = await client.SetOnlineRecordCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.StopOnlineRecord", async function () {
    try {
       const data = await client.StopOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeBoardSDKLog", async function () {
    try {
       const data = await client.DescribeBoardSDKLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeUserList", async function () {
    try {
       const data = await client.DescribeUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetVideoGenerationTaskCallback", async function () {
    try {
       const data = await client.SetVideoGenerationTaskCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeRecordSearch", async function () {
    try {
       const data = await client.DescribeRecordSearch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.CreatePPTCheckTask", async function () {
    try {
       const data = await client.CreatePPTCheckTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetOnlineRecordCallbackKey", async function () {
    try {
       const data = await client.SetOnlineRecordCallbackKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeWhiteboardApplicationConfig", async function () {
    try {
       const data = await client.DescribeWhiteboardApplicationConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetTranscodeCallback", async function () {
    try {
       const data = await client.SetTranscodeCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.StartOnlineRecord", async function () {
    try {
       const data = await client.StartOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.ResumeOnlineRecord", async function () {
    try {
       const data = await client.ResumeOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.ApplyTiwTrial", async function () {
    try {
       const data = await client.ApplyTiwTrial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribePPTCheckCallback", async function () {
    try {
       const data = await client.DescribePPTCheckCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeTIWRoomDailyUsage", async function () {
    try {
       const data = await client.DescribeTIWRoomDailyUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetTranscodeCallbackKey", async function () {
    try {
       const data = await client.SetTranscodeCallbackKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetOfflineRecordCallback", async function () {
    try {
       const data = await client.SetOfflineRecordCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetPPTCheckCallbackKey", async function () {
    try {
       const data = await client.SetPPTCheckCallbackKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.CreateSnapshotTask", async function () {
    try {
       const data = await client.CreateSnapshotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetPPTCheckCallback", async function () {
    try {
       const data = await client.SetPPTCheckCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeVideoGenerationTaskCallback", async function () {
    try {
       const data = await client.DescribeVideoGenerationTaskCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.ModifyApplication", async function () {
    try {
       const data = await client.ModifyApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.ModifyWhiteboardApplicationConfig", async function () {
    try {
       const data = await client.ModifyWhiteboardApplicationConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeOnlineRecord", async function () {
    try {
       const data = await client.DescribeOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.ModifyAutoRenewFlag", async function () {
    try {
       const data = await client.ModifyAutoRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeOnlineRecordCallback", async function () {
    try {
       const data = await client.DescribeOnlineRecordCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeTranscodeCallback", async function () {
    try {
       const data = await client.DescribeTranscodeCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetWarningCallback", async function () {
    try {
       const data = await client.SetWarningCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeAPIService", async function () {
    try {
       const data = await client.DescribeAPIService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeWhiteboardPushCallback", async function () {
    try {
       const data = await client.DescribeWhiteboardPushCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeApplicationInfos", async function () {
    try {
       const data = await client.DescribeApplicationInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeWarningCallback", async function () {
    try {
       const data = await client.DescribeWarningCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribePostpaidUsage", async function () {
    try {
       const data = await client.DescribePostpaidUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.CreateTranscode", async function () {
    try {
       const data = await client.CreateTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeTranscodeSearch", async function () {
    try {
       const data = await client.DescribeTranscodeSearch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeUserResources", async function () {
    try {
       const data = await client.DescribeUserResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetWhiteboardPushCallback", async function () {
    try {
       const data = await client.SetWhiteboardPushCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeOfflineRecordCallback", async function () {
    try {
       const data = await client.DescribeOfflineRecordCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.CreateVideoGenerationTask", async function () {
    try {
       const data = await client.CreateVideoGenerationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeTranscode", async function () {
    try {
       const data = await client.DescribeTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.CreateOfflineRecord", async function () {
    try {
       const data = await client.CreateOfflineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeUsageSummary", async function () {
    try {
       const data = await client.DescribeUsageSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetWhiteboardPushCallbackKey", async function () {
    try {
       const data = await client.SetWhiteboardPushCallbackKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeWhiteboardPushSearch", async function () {
    try {
       const data = await client.DescribeWhiteboardPushSearch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeVideoGenerationTask", async function () {
    try {
       const data = await client.DescribeVideoGenerationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.CreateApplication", async function () {
    try {
       const data = await client.CreateApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeRunningTasks", async function () {
    try {
       const data = await client.DescribeRunningTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeTIWDailyUsage", async function () {
    try {
       const data = await client.DescribeTIWDailyUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.StopWhiteboardPush", async function () {
    try {
       const data = await client.StopWhiteboardPush({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeIMApplications", async function () {
    try {
       const data = await client.DescribeIMApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeQualityMetrics", async function () {
    try {
       const data = await client.DescribeQualityMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeOfflineRecord", async function () {
    try {
       const data = await client.DescribeOfflineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.StartWhiteboardPush", async function () {
    try {
       const data = await client.StartWhiteboardPush({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.PauseOnlineRecord", async function () {
    try {
       const data = await client.PauseOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeApplicationUsage", async function () {
    try {
       const data = await client.DescribeApplicationUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeRoomList", async function () {
    try {
       const data = await client.DescribeRoomList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetVideoGenerationTaskCallbackKey", async function () {
    try {
       const data = await client.SetVideoGenerationTaskCallbackKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeWhiteboardPush", async function () {
    try {
       const data = await client.DescribeWhiteboardPush({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeUserStatus", async function () {
    try {
       const data = await client.DescribeUserStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribePPTCheck", async function () {
    try {
       const data = await client.DescribePPTCheck({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeSnapshotTask", async function () {
    try {
       const data = await client.DescribeSnapshotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.ModifyWhiteboardBucketConfig", async function () {
    try {
       const data = await client.ModifyWhiteboardBucketConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
