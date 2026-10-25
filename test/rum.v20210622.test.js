
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

it("rum.v20210622.DescribeFieldValues", async function () {
    try {
       const data = await client.DescribeFieldValues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeMiniProgramReplayPack", async function () {
    try {
       const data = await client.DescribeMiniProgramReplayPack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumStatsLogList", async function () {
    try {
       const data = await client.DescribeRumStatsLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMFunnelTrend", async function () {
    try {
       const data = await client.DescribeTDEMFunnelTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMOverviewScores", async function () {
    try {
       const data = await client.DescribeTDEMOverviewScores({})
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

it("rum.v20210622.DeleteTDEMBusinessSystem", async function () {
    try {
       const data = await client.DeleteTDEMBusinessSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMDialTasks", async function () {
    try {
       const data = await client.DescribeTDEMDialTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumLogExport", async function () {
    try {
       const data = await client.DescribeRumLogExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMRelatedEvents", async function () {
    try {
       const data = await client.DescribeTDEMRelatedEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateTDEMFieldTransformRule", async function () {
    try {
       const data = await client.CreateTDEMFieldTransformRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumLogExports", async function () {
    try {
       const data = await client.DescribeRumLogExports({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMDialOverview", async function () {
    try {
       const data = await client.DescribeTDEMDialOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyTDEMSampleConfig", async function () {
    try {
       const data = await client.ModifyTDEMSampleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMUsageDetail", async function () {
    try {
       const data = await client.DescribeTDEMUsageDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeExceptionReportList", async function () {
    try {
       const data = await client.DescribeExceptionReportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMEventSearchSummary", async function () {
    try {
       const data = await client.DescribeTDEMEventSearchSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMBusinessSystems", async function () {
    try {
       const data = await client.DescribeTDEMBusinessSystems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssueDetail", async function () {
    try {
       const data = await client.DescribeIssueDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataCustomUrlV2", async function () {
    try {
       const data = await client.DescribeDataCustomUrlV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyTDEMSampleRate", async function () {
    try {
       const data = await client.ModifyTDEMSampleRate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateTDEMDialTask", async function () {
    try {
       const data = await client.CreateTDEMDialTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssueEventDetail", async function () {
    try {
       const data = await client.DescribeIssueEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataStaticProjectV2", async function () {
    try {
       const data = await client.DescribeDataStaticProjectV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMDialTrend", async function () {
    try {
       const data = await client.DescribeTDEMDialTrend({})
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

it("rum.v20210622.DeleteFieldTransformRule", async function () {
    try {
       const data = await client.DeleteFieldTransformRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssues", async function () {
    try {
       const data = await client.DescribeIssues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeFOOMMallocProblemList", async function () {
    try {
       const data = await client.DescribeFOOMMallocProblemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumLogExportV2", async function () {
    try {
       const data = await client.DescribeRumLogExportV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssueEvents", async function () {
    try {
       const data = await client.DescribeIssueEvents({})
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

it("rum.v20210622.DescribeSymbolArtifacts", async function () {
    try {
       const data = await client.DescribeSymbolArtifacts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateTDEMBusinessSystem", async function () {
    try {
       const data = await client.CreateTDEMBusinessSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteTDEMDialTask", async function () {
    try {
       const data = await client.DeleteTDEMDialTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMDialExecutionDetail", async function () {
    try {
       const data = await client.DescribeTDEMDialExecutionDetail({})
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

it("rum.v20210622.DescribeTDEMFieldTransformRules", async function () {
    try {
       const data = await client.DescribeTDEMFieldTransformRules({})
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

it("rum.v20210622.DescribeTDEMApplications", async function () {
    try {
       const data = await client.DescribeTDEMApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumGroupLogV2", async function () {
    try {
       const data = await client.DescribeRumGroupLogV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeStruggleDistribution", async function () {
    try {
       const data = await client.DescribeStruggleDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyFieldTransformRule", async function () {
    try {
       const data = await client.ModifyFieldTransformRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssueAffectedUsers", async function () {
    try {
       const data = await client.DescribeIssueAffectedUsers({})
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

it("rum.v20210622.DescribeSymbolArtifactUploadCredential", async function () {
    try {
       const data = await client.DescribeSymbolArtifactUploadCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMEventSearch", async function () {
    try {
       const data = await client.DescribeTDEMEventSearch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumLogTotalV2", async function () {
    try {
       const data = await client.DescribeRumLogTotalV2({})
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

it("rum.v20210622.DescribeIssuesList", async function () {
    try {
       const data = await client.DescribeIssuesList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataPerformancePageV2", async function () {
    try {
       const data = await client.DescribeDataPerformancePageV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumStatsLogListV2", async function () {
    try {
       const data = await client.DescribeRumStatsLogListV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifySampleRate", async function () {
    try {
       const data = await client.ModifySampleRate({})
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

it("rum.v20210622.DescribeRumGroupLog", async function () {
    try {
       const data = await client.DescribeRumGroupLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyMiniProgramReplayPack", async function () {
    try {
       const data = await client.ModifyMiniProgramReplayPack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataFetchUrlV2", async function () {
    try {
       const data = await client.DescribeDataFetchUrlV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataPvUrlStatisticsV2", async function () {
    try {
       const data = await client.DescribeDataPvUrlStatisticsV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeReplayMeta", async function () {
    try {
       const data = await client.DescribeReplayMeta({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.UploadMiniProgramSource", async function () {
    try {
       const data = await client.UploadMiniProgramSource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeFileCertificate", async function () {
    try {
       const data = await client.DescribeFileCertificate({})
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

it("rum.v20210622.DescribeTDEMSSEDistribution", async function () {
    try {
       const data = await client.DescribeTDEMSSEDistribution({})
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

it("rum.v20210622.DeleteSymbolArtifact", async function () {
    try {
       const data = await client.DeleteSymbolArtifact({})
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

it("rum.v20210622.DescribeReleaseFileSign", async function () {
    try {
       const data = await client.DescribeReleaseFileSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteTDEMFieldTransformRule", async function () {
    try {
       const data = await client.DeleteTDEMFieldTransformRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMUsageSummary", async function () {
    try {
       const data = await client.DescribeTDEMUsageSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssueTrend", async function () {
    try {
       const data = await client.DescribeIssueTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataEventUrlV2", async function () {
    try {
       const data = await client.DescribeDataEventUrlV2({})
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

it("rum.v20210622.DescribeTDEMEventRank", async function () {
    try {
       const data = await client.DescribeTDEMEventRank({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyTDEMFieldTransformRule", async function () {
    try {
       const data = await client.ModifyTDEMFieldTransformRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumLogExportsV2", async function () {
    try {
       const data = await client.DescribeRumLogExportsV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataStaticUrlV2", async function () {
    try {
       const data = await client.DescribeDataStaticUrlV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeSessionList", async function () {
    try {
       const data = await client.DescribeSessionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ResumeProject", async function () {
    try {
       const data = await client.ResumeProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyTDEMBusinessSystem", async function () {
    try {
       const data = await client.ModifyTDEMBusinessSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.PreviewTDEMFunnelReport", async function () {
    try {
       const data = await client.PreviewTDEMFunnelReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTopIssues", async function () {
    try {
       const data = await client.DescribeTopIssues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMDialExecutionList", async function () {
    try {
       const data = await client.DescribeTDEMDialExecutionList({})
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

it("rum.v20210622.ModifyIssueStatus", async function () {
    try {
       const data = await client.ModifyIssueStatus({})
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

it("rum.v20210622.DescribeApplicationExitReportList", async function () {
    try {
       const data = await client.DescribeApplicationExitReportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMSSETrend", async function () {
    try {
       const data = await client.DescribeTDEMSSETrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataWebVitalsPageV2", async function () {
    try {
       const data = await client.DescribeDataWebVitalsPageV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMSSEPercentile", async function () {
    try {
       const data = await client.DescribeTDEMSSEPercentile({})
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

it("rum.v20210622.CreateFieldTransformRule", async function () {
    try {
       const data = await client.CreateFieldTransformRule({})
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

it("rum.v20210622.DescribeTDEMSampleConfig", async function () {
    try {
       const data = await client.DescribeTDEMSampleConfig({})
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

it("rum.v20210622.DescribeDataStaticProject", async function () {
    try {
       const data = await client.DescribeDataStaticProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTawAreas", async function () {
    try {
       const data = await client.DescribeTawAreas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteTDEMFunnel", async function () {
    try {
       const data = await client.DeleteTDEMFunnel({})
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

it("rum.v20210622.DescribeTDEMMetricDistribution", async function () {
    try {
       const data = await client.DescribeTDEMMetricDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeToken", async function () {
    try {
       const data = await client.DescribeToken({})
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

it("rum.v20210622.DescribeReplayDetails", async function () {
    try {
       const data = await client.DescribeReplayDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.UploadSymbolArtifact", async function () {
    try {
       const data = await client.UploadSymbolArtifact({})
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

it("rum.v20210622.ModifyTDEMApplication", async function () {
    try {
       const data = await client.ModifyTDEMApplication({})
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

it("rum.v20210622.DescribeUserJourneySanKey", async function () {
    try {
       const data = await client.DescribeUserJourneySanKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.StopProject", async function () {
    try {
       const data = await client.StopProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMFunnelList", async function () {
    try {
       const data = await client.DescribeTDEMFunnelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeAppSingleCaseList", async function () {
    try {
       const data = await client.DescribeAppSingleCaseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeLagANRProblemFeatureAccounts", async function () {
    try {
       const data = await client.DescribeLagANRProblemFeatureAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMFunnelStepSessionList", async function () {
    try {
       const data = await client.DescribeTDEMFunnelStepSessionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataSetUrlStatisticsV2", async function () {
    try {
       const data = await client.DescribeDataSetUrlStatisticsV2({})
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

it("rum.v20210622.DescribeMiniProgramReplayPacks", async function () {
    try {
       const data = await client.DescribeMiniProgramReplayPacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssuesStatisticsTrend", async function () {
    try {
       const data = await client.DescribeIssuesStatisticsTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeFieldTransformRules", async function () {
    try {
       const data = await client.DescribeFieldTransformRules({})
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

it("rum.v20210622.DescribeReplayData", async function () {
    try {
       const data = await client.DescribeReplayData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMFunnelDimensions", async function () {
    try {
       const data = await client.DescribeTDEMFunnelDimensions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.StopTDEMApplication", async function () {
    try {
       const data = await client.StopTDEMApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeAppDimensionMetrics", async function () {
    try {
       const data = await client.DescribeAppDimensionMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeFOOMProblemDetail", async function () {
    try {
       const data = await client.DescribeFOOMProblemDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMSSEDimensions", async function () {
    try {
       const data = await client.DescribeTDEMSSEDimensions({})
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

it("rum.v20210622.DescribeTDEMMetricSummary", async function () {
    try {
       const data = await client.DescribeTDEMMetricSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeFOOMMallocProblemDetail", async function () {
    try {
       const data = await client.DescribeFOOMMallocProblemDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataStaticResourceV2", async function () {
    try {
       const data = await client.DescribeDataStaticResourceV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumLogList", async function () {
    try {
       const data = await client.DescribeRumLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMDialDimensions", async function () {
    try {
       const data = await client.DescribeTDEMDialDimensions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataLogUrlStatisticsV2", async function () {
    try {
       const data = await client.DescribeDataLogUrlStatisticsV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMSessionReplayTimeline", async function () {
    try {
       const data = await client.DescribeTDEMSessionReplayTimeline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMSampleRate", async function () {
    try {
       const data = await client.DescribeTDEMSampleRate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeFOOMProblemList", async function () {
    try {
       const data = await client.DescribeFOOMProblemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribePerformanceMetrics", async function () {
    try {
       const data = await client.DescribePerformanceMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMFunnelReport", async function () {
    try {
       const data = await client.DescribeTDEMFunnelReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataReportCountV2", async function () {
    try {
       const data = await client.DescribeDataReportCountV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.CreateTDEMApplication", async function () {
    try {
       const data = await client.CreateTDEMApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeLagANRProblemList", async function () {
    try {
       const data = await client.DescribeLagANRProblemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssueCrashLogDownloadURL", async function () {
    try {
       const data = await client.DescribeIssueCrashLogDownloadURL({})
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

it("rum.v20210622.DescribeExceptionDetail", async function () {
    try {
       const data = await client.DescribeExceptionDetail({})
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

it("rum.v20210622.DescribeIssueBreadcrumbs", async function () {
    try {
       const data = await client.DescribeIssueBreadcrumbs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeApplicationExitReportDetail", async function () {
    try {
       const data = await client.DescribeApplicationExitReportDetail({})
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

it("rum.v20210622.DescribeFOOMReportList", async function () {
    try {
       const data = await client.DescribeFOOMReportList({})
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

it("rum.v20210622.DescribeDataWebVitalsPage", async function () {
    try {
       const data = await client.DescribeDataWebVitalsPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeAppSingleCaseDetailList", async function () {
    try {
       const data = await client.DescribeAppSingleCaseDetailList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeAppMetricsData", async function () {
    try {
       const data = await client.DescribeAppMetricsData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ResumeTDEMApplication", async function () {
    try {
       const data = await client.ResumeTDEMApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeFOOMMallocReportList", async function () {
    try {
       const data = await client.DescribeFOOMMallocReportList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMMetricTrend", async function () {
    try {
       const data = await client.DescribeTDEMMetricTrend({})
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

it("rum.v20210622.DeleteMiniProgramReplayPack", async function () {
    try {
       const data = await client.DeleteMiniProgramReplayPack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyTDEMFunnel", async function () {
    try {
       const data = await client.ModifyTDEMFunnel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMSSESummary", async function () {
    try {
       const data = await client.DescribeTDEMSSESummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.ModifyTDEMDialTask", async function () {
    try {
       const data = await client.ModifyTDEMDialTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMEventDetail", async function () {
    try {
       const data = await client.DescribeTDEMEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DeleteTDEMApplication", async function () {
    try {
       const data = await client.DeleteTDEMApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeIssuesDistribution", async function () {
    try {
       const data = await client.DescribeIssuesDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeDataBridgeUrlV2", async function () {
    try {
       const data = await client.DescribeDataBridgeUrlV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeSampleRate", async function () {
    try {
       const data = await client.DescribeSampleRate({})
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

it("rum.v20210622.DescribeScoresV2", async function () {
    try {
       const data = await client.DescribeScoresV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeTDEMFunnelDetail", async function () {
    try {
       const data = await client.DescribeTDEMFunnelDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeLagANRProblemAccountDetail", async function () {
    try {
       const data = await client.DescribeLagANRProblemAccountDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rum.v20210622.DescribeRumLogDetailsV2", async function () {
    try {
       const data = await client.DescribeRumLogDetailsV2({})
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

it("rum.v20210622.CreateTDEMFunnel", async function () {
    try {
       const data = await client.CreateTDEMFunnel({})
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
