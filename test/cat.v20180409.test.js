
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cat.v20180409.Client({
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
describe("cat.v20180409.test.js", function () {

it("cat.v20180409.SuspendProbeTask", async function () {
    try {
       const data = await client.SuspendProbeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetRespTimeTrendEx", async function () {
    try {
       const data = await client.GetRespTimeTrendEx({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.ModifyAgentGroup", async function () {
    try {
       const data = await client.ModifyAgentGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeTasksByType", async function () {
    try {
       const data = await client.DescribeTasksByType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.VerifyResult", async function () {
    try {
       const data = await client.VerifyResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.CreateTaskEx", async function () {
    try {
       const data = await client.CreateTaskEx({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.PauseTask", async function () {
    try {
       const data = await client.PauseTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeAgentGroups", async function () {
    try {
       const data = await client.DescribeAgentGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetRealAvailRatio", async function () {
    try {
       const data = await client.GetRealAvailRatio({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.CreateAgentGroup", async function () {
    try {
       const data = await client.CreateAgentGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.CreateProbeTasks", async function () {
    try {
       const data = await client.CreateProbeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeAlarmTopic", async function () {
    try {
       const data = await client.DescribeAlarmTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeAlarms", async function () {
    try {
       const data = await client.DescribeAlarms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetReturnCodeHistory", async function () {
    try {
       const data = await client.GetReturnCodeHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DeleteTasks", async function () {
    try {
       const data = await client.DeleteTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetDailyAvailRatio", async function () {
    try {
       const data = await client.GetDailyAvailRatio({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeProbeMetricData", async function () {
    try {
       const data = await client.DescribeProbeMetricData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.ResumeProbeTask", async function () {
    try {
       const data = await client.ResumeProbeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.ModifyTaskEx", async function () {
    try {
       const data = await client.ModifyTaskEx({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeAgents", async function () {
    try {
       const data = await client.DescribeAgents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeUserLimit", async function () {
    try {
       const data = await client.DescribeUserLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeCatLogs", async function () {
    try {
       const data = await client.DescribeCatLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.UpdateProbeTaskConfigurationList", async function () {
    try {
       const data = await client.UpdateProbeTaskConfigurationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeDetailedSingleProbeData", async function () {
    try {
       const data = await client.DescribeDetailedSingleProbeData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.BindAlarmPolicy", async function () {
    try {
       const data = await client.BindAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeProbeTasks", async function () {
    try {
       const data = await client.DescribeProbeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetResultSummary", async function () {
    try {
       const data = await client.GetResultSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DeleteAgentGroup", async function () {
    try {
       const data = await client.DeleteAgentGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetAvailRatioHistory", async function () {
    try {
       const data = await client.GetAvailRatioHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.RunTask", async function () {
    try {
       const data = await client.RunTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeProbeNodes", async function () {
    try {
       const data = await client.DescribeProbeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetReturnCodeInfo", async function () {
    try {
       const data = await client.GetReturnCodeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DescribeAlarmsByTask", async function () {
    try {
       const data = await client.DescribeAlarmsByTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.DeleteProbeTask", async function () {
    try {
       const data = await client.DeleteProbeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cat.v20180409.GetTaskTotalNumber", async function () {
    try {
       const data = await client.GetTaskTotalNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
