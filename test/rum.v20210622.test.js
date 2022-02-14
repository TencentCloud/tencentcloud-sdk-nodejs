
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.rum.v20210622.Client({
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
describe("rum.v20210622.test.js", function () {

it("rum.v20210622.DescribeTawAreas", async function () {
    try {
       const data = await client.DescribeTawAreas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateReleaseFile", async function () {
    try {
       const data = await client.CreateReleaseFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeScores", async function () {
    try {
       const data = await client.DescribeScores({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTawInstances", async function () {
    try {
       const data = await client.DescribeTawInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataPerformancePage", async function () {
    try {
       const data = await client.DescribeDataPerformancePage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataLogUrlStatistics", async function () {
    try {
       const data = await client.DescribeDataLogUrlStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataFetchProject", async function () {
    try {
       const data = await client.DescribeDataFetchProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteInstance", async function () {
    try {
       const data = await client.DeleteInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteStarProject", async function () {
    try {
       const data = await client.DeleteStarProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ResumeInstance", async function () {
    try {
       const data = await client.ResumeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataPerformanceProject", async function () {
    try {
       const data = await client.DescribeDataPerformanceProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeError", async function () {
    try {
       const data = await client.DescribeError({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeLogList", async function () {
    try {
       const data = await client.DescribeLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeOfflineLogs", async function () {
    try {
       const data = await client.DescribeOfflineLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateTawInstance", async function () {
    try {
       const data = await client.CreateTawInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribePvList", async function () {
    try {
       const data = await client.DescribePvList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeLogExports", async function () {
    try {
       const data = await client.DescribeLogExports({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataWebVitalsPage", async function () {
    try {
       const data = await client.DescribeDataWebVitalsPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataStaticUrl", async function () {
    try {
       const data = await client.DescribeDataStaticUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyProjectLimit", async function () {
    try {
       const data = await client.ModifyProjectLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataPvUrlStatistics", async function () {
    try {
       const data = await client.DescribeDataPvUrlStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeReleaseFileSign", async function () {
    try {
       const data = await client.DescribeReleaseFileSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateLogExport", async function () {
    try {
       const data = await client.CreateLogExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataSetUrlStatistics", async function () {
    try {
       const data = await client.DescribeDataSetUrlStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyInstance", async function () {
    try {
       const data = await client.ModifyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataStaticResource", async function () {
    try {
       const data = await client.DescribeDataStaticResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeProjectLimits", async function () {
    try {
       const data = await client.DescribeProjectLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataCustomUrl", async function () {
    try {
       const data = await client.DescribeDataCustomUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateWhitelist", async function () {
    try {
       const data = await client.CreateWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeProjects", async function () {
    try {
       const data = await client.DescribeProjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateStarProject", async function () {
    try {
       const data = await client.CreateStarProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteWhitelist", async function () {
    try {
       const data = await client.DeleteWhitelist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataFetchUrlInfo", async function () {
    try {
       const data = await client.DescribeDataFetchUrlInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.StopInstance", async function () {
    try {
       const data = await client.StopInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyProject", async function () {
    try {
       const data = await client.ModifyProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeReleaseFiles", async function () {
    try {
       const data = await client.DescribeReleaseFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteLogExport", async function () {
    try {
       const data = await client.DeleteLogExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeWhitelists", async function () {
    try {
       const data = await client.DescribeWhitelists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataEventUrl", async function () {
    try {
       const data = await client.DescribeDataEventUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteOfflineLogRecord", async function () {
    try {
       const data = await client.DeleteOfflineLogRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeOfflineLogConfigs", async function () {
    try {
       const data = await client.DescribeOfflineLogConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataLogUrlInfo", async function () {
    try {
       const data = await client.DescribeDataLogUrlInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateProject", async function () {
    try {
       const data = await client.CreateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataReportCount", async function () {
    try {
       const data = await client.DescribeDataReportCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataPvUrlInfo", async function () {
    try {
       const data = await client.DescribeDataPvUrlInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataStaticProject", async function () {
    try {
       const data = await client.DescribeDataStaticProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteProject", async function () {
    try {
       const data = await client.DeleteProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeOfflineLogRecords", async function () {
    try {
       const data = await client.DescribeOfflineLogRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeUvList", async function () {
    try {
       const data = await client.DescribeUvList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteOfflineLogConfig", async function () {
    try {
       const data = await client.DeleteOfflineLogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteReleaseFile", async function () {
    try {
       const data = await client.DeleteReleaseFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateOfflineLogConfig", async function () {
    try {
       const data = await client.CreateOfflineLogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataFetchUrl", async function () {
    try {
       const data = await client.DescribeDataFetchUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeData", async function () {
    try {
       const data = await client.DescribeData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
