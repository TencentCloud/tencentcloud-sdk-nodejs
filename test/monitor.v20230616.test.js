
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.monitor.v20230616.Client({
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
describe("monitor.v20230616.test.js", function () {

it("monitor.v20230616.DeleteNoticeContentTmpls", async function () {
    try {
       const data = await client.DeleteNoticeContentTmpls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeNoticeContentTmpl", async function () {
    try {
       const data = await client.DescribeNoticeContentTmpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSREDigitalTwinWorkLogDetail", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSREDigitalTwinWorkLogDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.CreateNoticeContentTmpl", async function () {
    try {
       const data = await client.CreateNoticeContentTmpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.TriggerAIWorkbenchSREDigitalTwinTask", async function () {
    try {
       const data = await client.TriggerAIWorkbenchSREDigitalTwinTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ModifyNoticeContentTmpl", async function () {
    try {
       const data = await client.ModifyNoticeContentTmpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSREDigitalTwinWorkLogList", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSREDigitalTwinWorkLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAlarmNotifyHistories", async function () {
    try {
       const data = await client.DescribeAlarmNotifyHistories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSREDigitalTwinTaskList", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSREDigitalTwinTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
