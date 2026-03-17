
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tcb.v20180608.Client({
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
describe("tcb.v20180608.test.js", function () {

it("tcb.v20180608.DescribeCreateMySQLResult", async function () {
    try {
       const data = await client.DescribeCreateMySQLResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyClsTopic", async function () {
    try {
       const data = await client.ModifyClsTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeUserList", async function () {
    try {
       const data = await client.DescribeUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateHostingDomain", async function () {
    try {
       const data = await client.CreateHostingDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateMySQL", async function () {
    try {
       const data = await client.CreateMySQL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateTable", async function () {
    try {
       const data = await client.CreateTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyCloudBaseGWAPI", async function () {
    try {
       const data = await client.ModifyCloudBaseGWAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateEnv", async function () {
    try {
       const data = await client.CreateEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyDatabaseACL", async function () {
    try {
       const data = await client.ModifyDatabaseACL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.RunCommands", async function () {
    try {
       const data = await client.RunCommands({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeBaasPackageList", async function () {
    try {
       const data = await client.DescribeBaasPackageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateAuthDomain", async function () {
    try {
       const data = await client.CreateAuthDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseGWAPI", async function () {
    try {
       const data = await client.DescribeCloudBaseGWAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunServerVersion", async function () {
    try {
       const data = await client.DescribeCloudBaseRunServerVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeAuthDomains", async function () {
    try {
       const data = await client.DescribeAuthDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.BindCloudBaseAccessDomain", async function () {
    try {
       const data = await client.BindCloudBaseAccessDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifySafeRule", async function () {
    try {
       const data = await client.ModifySafeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteAuthDomain", async function () {
    try {
       const data = await client.DeleteAuthDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeMySQLClusterDetail", async function () {
    try {
       const data = await client.DescribeMySQLClusterDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeBillingInfo", async function () {
    try {
       const data = await client.DescribeBillingInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.RenewEnv", async function () {
    try {
       const data = await client.RenewEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeHostingDomainTask", async function () {
    try {
       const data = await client.DescribeHostingDomainTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ReinstateEnv", async function () {
    try {
       const data = await client.ReinstateEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeDatabaseACL", async function () {
    try {
       const data = await client.DescribeDatabaseACL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteUsers", async function () {
    try {
       const data = await client.DeleteUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeStaticStore", async function () {
    try {
       const data = await client.DescribeStaticStore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeTable", async function () {
    try {
       const data = await client.DescribeTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.UpdateTable", async function () {
    try {
       const data = await client.UpdateTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteCloudBaseGWAPI", async function () {
    try {
       const data = await client.DeleteCloudBaseGWAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CheckTcbService", async function () {
    try {
       const data = await client.CheckTcbService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ListTables", async function () {
    try {
       const data = await client.ListTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeSafeRule", async function () {
    try {
       const data = await client.DescribeSafeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyEnvPlan", async function () {
    try {
       const data = await client.ModifyEnvPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeMySQLTaskStatus", async function () {
    try {
       const data = await client.DescribeMySQLTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.SearchClsLog", async function () {
    try {
       const data = await client.SearchClsLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeQuotaData", async function () {
    try {
       const data = await client.DescribeQuotaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.EditAuthConfig", async function () {
    try {
       const data = await client.EditAuthConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyEnv", async function () {
    try {
       const data = await client.ModifyEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.RunSql", async function () {
    try {
       const data = await client.RunSql({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteTable", async function () {
    try {
       const data = await client.DeleteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DestroyEnv", async function () {
    try {
       const data = await client.DestroyEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseGWService", async function () {
    try {
       const data = await client.DescribeCloudBaseGWService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseBuildService", async function () {
    try {
       const data = await client.DescribeCloudBaseBuildService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeEnvs", async function () {
    try {
       const data = await client.DescribeEnvs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DestroyMySQL", async function () {
    try {
       const data = await client.DestroyMySQL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateBillDeal", async function () {
    try {
       const data = await client.CreateBillDeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCurveData", async function () {
    try {
       const data = await client.DescribeCurveData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateCloudBaseGWAPI", async function () {
    try {
       const data = await client.CreateCloudBaseGWAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.BindCloudBaseGWDomain", async function () {
    try {
       const data = await client.BindCloudBaseGWDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateStaticStore", async function () {
    try {
       const data = await client.CreateStaticStore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeEnvLimit", async function () {
    try {
       const data = await client.DescribeEnvLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteCloudBaseGWDomain", async function () {
    try {
       const data = await client.DeleteCloudBaseGWDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DestroyStaticStore", async function () {
    try {
       const data = await client.DestroyStaticStore({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeEnvAccountCircle", async function () {
    try {
       const data = await client.DescribeEnvAccountCircle({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeTables", async function () {
    try {
       const data = await client.DescribeTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
