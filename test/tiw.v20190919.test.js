
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

it("tiw.v20190919.SetOnlineRecordCallback", async function () {
    try {
       const data = await client.SetOnlineRecordCallback({})
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

it("tiw.v20190919.CreateVideoGenerationTask", async function () {
    try {
       const data = await client.CreateVideoGenerationTask({})
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

it("tiw.v20190919.SetTranscodeCallback", async function () {
    try {
       const data = await client.SetTranscodeCallback({})
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

it("tiw.v20190919.SetTranscodeCallbackKey", async function () {
    try {
       const data = await client.SetTranscodeCallbackKey({})
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

it("tiw.v20190919.DescribeOnlineRecord", async function () {
    try {
       const data = await client.DescribeOnlineRecord({})
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

it("tiw.v20190919.DescribeWhiteboardPushCallback", async function () {
    try {
       const data = await client.DescribeWhiteboardPushCallback({})
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

it("tiw.v20190919.CreateTranscode", async function () {
    try {
       const data = await client.CreateTranscode({})
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

it("tiw.v20190919.SetWhiteboardPushCallback", async function () {
    try {
       const data = await client.SetWhiteboardPushCallback({})
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

it("tiw.v20190919.StopOnlineRecord", async function () {
    try {
       const data = await client.StopOnlineRecord({})
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

it("tiw.v20190919.DescribeTranscode", async function () {
    try {
       const data = await client.DescribeTranscode({})
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

it("tiw.v20190919.DescribeQualityMetrics", async function () {
    try {
       const data = await client.DescribeQualityMetrics({})
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

it("tiw.v20190919.DescribeTranscodeCallback", async function () {
    try {
       const data = await client.DescribeTranscodeCallback({})
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

it("tiw.v20190919.DescribeVideoGenerationTask", async function () {
    try {
       const data = await client.DescribeVideoGenerationTask({})
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

})
