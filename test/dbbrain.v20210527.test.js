
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

it("dbbrain.v20210527.DescribeSecurityAuditLogDownloadUrls", async function () {
    try {
       const data = await client.DescribeSecurityAuditLogDownloadUrls({})
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

it("dbbrain.v20210527.DescribeSlowLogTimeSeriesStats", async function () {
    try {
       const data = await client.DescribeSlowLogTimeSeriesStats({})
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

it("dbbrain.v20210527.DescribeSlowLogTopSqls", async function () {
    try {
       const data = await client.DescribeSlowLogTopSqls({})
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

it("dbbrain.v20210527.DescribeUserSqlAdvice", async function () {
    try {
       const data = await client.DescribeUserSqlAdvice({})
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

it("dbbrain.v20210527.DescribeAllUserContact", async function () {
    try {
       const data = await client.DescribeAllUserContact({})
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

it("dbbrain.v20210527.DescribeDBDiagHistory", async function () {
    try {
       const data = await client.DescribeDBDiagHistory({})
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

it("dbbrain.v20210527.AddUserContact", async function () {
    try {
       const data = await client.AddUserContact({})
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

it("dbbrain.v20210527.CreateKillTask", async function () {
    try {
       const data = await client.CreateKillTask({})
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

it("dbbrain.v20210527.DescribeTopSpaceTableTimeSeries", async function () {
    try {
       const data = await client.DescribeTopSpaceTableTimeSeries({})
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

it("dbbrain.v20210527.VerifyUserAccount", async function () {
    try {
       const data = await client.VerifyUserAccount({})
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

})
