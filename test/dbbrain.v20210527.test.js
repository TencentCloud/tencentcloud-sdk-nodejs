
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dbbrain.v20210527.Client({
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
describe("dbbrain.v20210527.test.js", function () {

it("dbbrain.v20210527.DescribeDBAutonomyEvents", async function () {
    try {
       const data = await client.DescribeDBAutonomyEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeTopSpaceTableTimeSeries", async function () {
    try {
       const data = await client.DescribeTopSpaceTableTimeSeries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSecurityAuditLogDownloadUrls", async function () {
    try {
       const data = await client.DescribeSecurityAuditLogDownloadUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DeleteDBDiagReportTasks", async function () {
    try {
       const data = await client.DeleteDBDiagReportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeMailProfile", async function () {
    try {
       const data = await client.DescribeMailProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateSchedulerMailProfile", async function () {
    try {
       const data = await client.CreateSchedulerMailProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSqlTemplate", async function () {
    try {
       const data = await client.DescribeSqlTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBPerfTimeSeries", async function () {
    try {
       const data = await client.DescribeDBPerfTimeSeries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeTopSpaceSchemas", async function () {
    try {
       const data = await client.DescribeTopSpaceSchemas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeMySqlProcessList", async function () {
    try {
       const data = await client.DescribeMySqlProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateMailProfile", async function () {
    try {
       const data = await client.CreateMailProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBDiagReportTasks", async function () {
    try {
       const data = await client.DescribeDBDiagReportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisTopHotKeys", async function () {
    try {
       const data = await client.DescribeRedisTopHotKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.UpdateMonitorSwitch", async function () {
    try {
       const data = await client.UpdateMonitorSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisTopKeyPrefixList", async function () {
    try {
       const data = await client.DescribeRedisTopKeyPrefixList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateRedisBigKeyAnalysisTask", async function () {
    try {
       const data = await client.CreateRedisBigKeyAnalysisTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DeleteAuditLogFile", async function () {
    try {
       const data = await client.DeleteAuditLogFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeAllUserGroup", async function () {
    try {
       const data = await client.DescribeAllUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBDiagEvents", async function () {
    try {
       const data = await client.DescribeDBDiagEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeAuditInstanceList", async function () {
    try {
       const data = await client.DescribeAuditInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DeleteRedisBigKeyAnalysisTasks", async function () {
    try {
       const data = await client.DeleteRedisBigKeyAnalysisTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeTopSpaceSchemaTimeSeries", async function () {
    try {
       const data = await client.DescribeTopSpaceSchemaTimeSeries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSlowLogTimeSeriesStats", async function () {
    try {
       const data = await client.DescribeSlowLogTimeSeriesStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisProcessList", async function () {
    try {
       const data = await client.DescribeRedisProcessList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSlowLogUserHostStats", async function () {
    try {
       const data = await client.DescribeSlowLogUserHostStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisCmdPerfTimeSeries", async function () {
    try {
       const data = await client.DescribeRedisCmdPerfTimeSeries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateSqlFilter", async function () {
    try {
       const data = await client.CreateSqlFilter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBSpaceStatus", async function () {
    try {
       const data = await client.DescribeDBSpaceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateProxySessionKillTask", async function () {
    try {
       const data = await client.CreateProxySessionKillTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeHealthScore", async function () {
    try {
       const data = await client.DescribeHealthScore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CancelKillTask", async function () {
    try {
       const data = await client.CancelKillTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateSecurityAuditLogExportTask", async function () {
    try {
       const data = await client.CreateSecurityAuditLogExportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CloseAuditService", async function () {
    try {
       const data = await client.CloseAuditService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeUserSqlAdvice", async function () {
    try {
       const data = await client.DescribeUserSqlAdvice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CancelRedisBigKeyAnalysisTasks", async function () {
    try {
       const data = await client.CancelRedisBigKeyAnalysisTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DeleteSecurityAuditLogExportTasks", async function () {
    try {
       const data = await client.DeleteSecurityAuditLogExportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBAutonomyActions", async function () {
    try {
       const data = await client.DescribeDBAutonomyActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisBigKeyAnalysisTasks", async function () {
    try {
       const data = await client.DescribeRedisBigKeyAnalysisTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisCommandCostStatistics", async function () {
    try {
       const data = await client.DescribeRedisCommandCostStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateAuditLogFile", async function () {
    try {
       const data = await client.CreateAuditLogFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisTopBigKeys", async function () {
    try {
       const data = await client.DescribeRedisTopBigKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSecurityAuditLogExportTasks", async function () {
    try {
       const data = await client.DescribeSecurityAuditLogExportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSlowLogTopSqls", async function () {
    try {
       const data = await client.DescribeSlowLogTopSqls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeAllUserContact", async function () {
    try {
       const data = await client.DescribeAllUserContact({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CancelDBAutonomyEvent", async function () {
    try {
       const data = await client.CancelDBAutonomyEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSlowLogs", async function () {
    try {
       const data = await client.DescribeSlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisCommandOverview", async function () {
    try {
       const data = await client.DescribeRedisCommandOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBDiagEvent", async function () {
    try {
       const data = await client.DescribeDBDiagEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeUserAutonomyProfile", async function () {
    try {
       const data = await client.DescribeUserAutonomyProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBDiagHistory", async function () {
    try {
       const data = await client.DescribeDBDiagHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeProxyProcessStatistics", async function () {
    try {
       const data = await client.DescribeProxyProcessStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateDBDiagReportTask", async function () {
    try {
       const data = await client.CreateDBDiagReportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDiagDBInstances", async function () {
    try {
       const data = await client.DescribeDiagDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DeleteSqlFilters", async function () {
    try {
       const data = await client.DeleteSqlFilters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.ModifyAlarmPolicy", async function () {
    try {
       const data = await client.ModifyAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateUserAutonomyProfile", async function () {
    try {
       const data = await client.CreateUserAutonomyProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.OpenAuditService", async function () {
    try {
       const data = await client.OpenAuditService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.AddUserContact", async function () {
    try {
       const data = await client.AddUserContact({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeIndexRecommendInfo", async function () {
    try {
       const data = await client.DescribeIndexRecommendInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.VerifyUserAccount", async function () {
    try {
       const data = await client.VerifyUserAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.ModifyAuditService", async function () {
    try {
       const data = await client.ModifyAuditService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeIndexRecommendAggregationSlowLogs", async function () {
    try {
       const data = await client.DescribeIndexRecommendAggregationSlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.ModifyDiagDBInstanceConf", async function () {
    try {
       const data = await client.ModifyDiagDBInstanceConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CancelDBAutonomyAction", async function () {
    try {
       const data = await client.CancelDBAutonomyAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeRedisSlowLogTopSqls", async function () {
    try {
       const data = await client.DescribeRedisSlowLogTopSqls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateKillTask", async function () {
    try {
       const data = await client.CreateKillTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.UpdateAgentSwitch", async function () {
    try {
       const data = await client.UpdateAgentSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeNoPrimaryKeyTables", async function () {
    try {
       const data = await client.DescribeNoPrimaryKeyTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeTopSpaceTables", async function () {
    try {
       const data = await client.DescribeTopSpaceTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSqlFilters", async function () {
    try {
       const data = await client.DescribeSqlFilters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeAlarmTemplate", async function () {
    try {
       const data = await client.DescribeAlarmTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeAuditLogFiles", async function () {
    try {
       const data = await client.DescribeAuditLogFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.KillMySqlThreads", async function () {
    try {
       const data = await client.KillMySqlThreads({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.CreateDBDiagReportUrl", async function () {
    try {
       const data = await client.CreateDBDiagReportUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBDiagReportContent", async function () {
    try {
       const data = await client.DescribeDBDiagReportContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeDBAutonomyAction", async function () {
    try {
       const data = await client.DescribeDBAutonomyAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.ModifySqlFilters", async function () {
    try {
       const data = await client.ModifySqlFilters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeProxySessionKillTasks", async function () {
    try {
       const data = await client.DescribeProxySessionKillTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.ModifyUserAutonomyProfile", async function () {
    try {
       const data = await client.ModifyUserAutonomyProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20210527.DescribeSlowLogQueryTimeStats", async function () {
    try {
       const data = await client.DescribeSlowLogQueryTimeStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
