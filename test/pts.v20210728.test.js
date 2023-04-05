
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.pts.v20210728.Client({
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
describe("pts.v20210728.test.js", function () {

it("pts.v20210728.DescribeScenarioWithJobs", async function () {
    try {
       const data = await client.DescribeScenarioWithJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.UpdateJob", async function () {
    try {
       const data = await client.UpdateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.UpdateCronJob", async function () {
    try {
       const data = await client.UpdateCronJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.StartJob", async function () {
    try {
       const data = await client.StartJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.UpdateScenario", async function () {
    try {
       const data = await client.UpdateScenario({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeFiles", async function () {
    try {
       const data = await client.DescribeFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DeleteProjects", async function () {
    try {
       const data = await client.DeleteProjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeSampleQuery", async function () {
    try {
       const data = await client.DescribeSampleQuery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeJobs", async function () {
    try {
       const data = await client.DescribeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.CreateScenario", async function () {
    try {
       const data = await client.CreateScenario({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DeleteFiles", async function () {
    try {
       const data = await client.DeleteFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeCheckSummary", async function () {
    try {
       const data = await client.DescribeCheckSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeSampleMatrixBatchQuery", async function () {
    try {
       const data = await client.DescribeSampleMatrixBatchQuery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeSampleMatrixQuery", async function () {
    try {
       const data = await client.DescribeSampleMatrixQuery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeRequestSummary", async function () {
    try {
       const data = await client.DescribeRequestSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DeleteScenarios", async function () {
    try {
       const data = await client.DeleteScenarios({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeProjects", async function () {
    try {
       const data = await client.DescribeProjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeAlertRecords", async function () {
    try {
       const data = await client.DescribeAlertRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeAlertChannels", async function () {
    try {
       const data = await client.DescribeAlertChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeAvailableMetrics", async function () {
    try {
       const data = await client.DescribeAvailableMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeLabelValues", async function () {
    try {
       const data = await client.DescribeLabelValues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.AbortCronJobs", async function () {
    try {
       const data = await client.AbortCronJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.UpdateFileScenarioRelation", async function () {
    try {
       const data = await client.UpdateFileScenarioRelation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.RestartCronJobs", async function () {
    try {
       const data = await client.RestartCronJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.CreateAlertChannel", async function () {
    try {
       const data = await client.CreateAlertChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeSampleBatchQuery", async function () {
    try {
       const data = await client.DescribeSampleBatchQuery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DeleteJobs", async function () {
    try {
       const data = await client.DeleteJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeErrorSummary", async function () {
    try {
       const data = await client.DescribeErrorSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeNormalLogs", async function () {
    try {
       const data = await client.DescribeNormalLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.CopyScenario", async function () {
    try {
       const data = await client.CopyScenario({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeSampleLogs", async function () {
    try {
       const data = await client.DescribeSampleLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeScenarios", async function () {
    try {
       const data = await client.DescribeScenarios({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DeleteCronJobs", async function () {
    try {
       const data = await client.DeleteCronJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeCronJobs", async function () {
    try {
       const data = await client.DescribeCronJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DeleteAlertChannel", async function () {
    try {
       const data = await client.DeleteAlertChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.CreateFile", async function () {
    try {
       const data = await client.CreateFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.AdjustJobSpeed", async function () {
    try {
       const data = await client.AdjustJobSpeed({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.CreateProject", async function () {
    try {
       const data = await client.CreateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.AbortJob", async function () {
    try {
       const data = await client.AbortJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.UpdateProject", async function () {
    try {
       const data = await client.UpdateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.GenerateTmpKey", async function () {
    try {
       const data = await client.GenerateTmpKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.DescribeMetricLabelWithValues", async function () {
    try {
       const data = await client.DescribeMetricLabelWithValues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("pts.v20210728.CreateCronJob", async function () {
    try {
       const data = await client.CreateCronJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
