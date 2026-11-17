
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dbs.v20211108.Client({
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
describe("dbs.v20211108.test.js", function () {

it("dbs.v20211108.DeleteBackupPlan", async function () {
    try {
       const data = await client.DeleteBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.CreateConnectTestJob", async function () {
    try {
       const data = await client.CreateConnectTestJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.StartBackupCheckJob", async function () {
    try {
       const data = await client.StartBackupCheckJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DestroyBackupPlanByUser", async function () {
    try {
       const data = await client.DestroyBackupPlanByUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.ResumeBackupPlan", async function () {
    try {
       const data = await client.ResumeBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.StartBackupPlan", async function () {
    try {
       const data = await client.StartBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DescribeIncrementBackupSetFiles", async function () {
    try {
       const data = await client.DescribeIncrementBackupSetFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DescribeBackupPlanDetail", async function () {
    try {
       const data = await client.DescribeBackupPlanDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.ModifyBackupPlanSourceInfo", async function () {
    try {
       const data = await client.ModifyBackupPlanSourceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.StopBackupPlan", async function () {
    try {
       const data = await client.StopBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DescribeBackupPlans", async function () {
    try {
       const data = await client.DescribeBackupPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DescribeFullBackupSetDetail", async function () {
    try {
       const data = await client.DescribeFullBackupSetDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.ConfigureBackupPlan", async function () {
    try {
       const data = await client.ConfigureBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DescribeBackupCheckJob", async function () {
    try {
       const data = await client.DescribeBackupCheckJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.CreateBackupPlan", async function () {
    try {
       const data = await client.CreateBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DescribeIncrementBackupSets", async function () {
    try {
       const data = await client.DescribeIncrementBackupSets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbs.v20211108.DescribeConnectTestResult", async function () {
    try {
       const data = await client.DescribeConnectTestResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
