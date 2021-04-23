
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dbbrain.v20191016.Client({
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
describe("dbbrain.v20191016.test.js", function () {

it("dbbrain.v20191016.DescribeSecurityAuditLogDownloadUrls", async function () {
    try {
       const data = await client.DescribeSecurityAuditLogDownloadUrls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeMailProfile", async function () {
    try {
       const data = await client.DescribeMailProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.CreateSchedulerMailProfile", async function () {
    try {
       const data = await client.CreateSchedulerMailProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeTopSpaceSchemas", async function () {
    try {
       const data = await client.DescribeTopSpaceSchemas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDBDiagReportTasks", async function () {
    try {
       const data = await client.DescribeDBDiagReportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeAllUserGroup", async function () {
    try {
       const data = await client.DescribeAllUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeSlowLogTimeSeriesStats", async function () {
    try {
       const data = await client.DescribeSlowLogTimeSeriesStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeSlowLogUserHostStats", async function () {
    try {
       const data = await client.DescribeSlowLogUserHostStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeTopSpaceTables", async function () {
    try {
       const data = await client.DescribeTopSpaceTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDBSpaceStatus", async function () {
    try {
       const data = await client.DescribeDBSpaceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.CreateMailProfile", async function () {
    try {
       const data = await client.CreateMailProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeHealthScore", async function () {
    try {
       const data = await client.DescribeHealthScore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.CreateSecurityAuditLogExportTask", async function () {
    try {
       const data = await client.CreateSecurityAuditLogExportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DeleteSecurityAuditLogExportTasks", async function () {
    try {
       const data = await client.DeleteSecurityAuditLogExportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeSlowLogTopSqls", async function () {
    try {
       const data = await client.DescribeSlowLogTopSqls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeSecurityAuditLogExportTasks", async function () {
    try {
       const data = await client.DescribeSecurityAuditLogExportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeAllUserContact", async function () {
    try {
       const data = await client.DescribeAllUserContact({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDBDiagEvent", async function () {
    try {
       const data = await client.DescribeDBDiagEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDBDiagHistory", async function () {
    try {
       const data = await client.DescribeDBDiagHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.CreateDBDiagReportTask", async function () {
    try {
       const data = await client.CreateDBDiagReportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDiagDBInstances", async function () {
    try {
       const data = await client.DescribeDiagDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.AddUserContact", async function () {
    try {
       const data = await client.AddUserContact({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeTopSpaceSchemaTimeSeries", async function () {
    try {
       const data = await client.DescribeTopSpaceSchemaTimeSeries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeUserSqlAdvice", async function () {
    try {
       const data = await client.DescribeUserSqlAdvice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeTopSpaceTableTimeSeries", async function () {
    try {
       const data = await client.DescribeTopSpaceTableTimeSeries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.ModifyDiagDBInstanceConf", async function () {
    try {
       const data = await client.ModifyDiagDBInstanceConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.CreateDBDiagReportUrl", async function () {
    try {
       const data = await client.CreateDBDiagReportUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
