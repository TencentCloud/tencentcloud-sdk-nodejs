
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

it("tcb.v20180608.DescribeGatewayVersions", async function () {
    try {
       const data = await client.DescribeGatewayVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateCustomLoginKey", async function () {
    try {
       const data = await client.CreateCustomLoginKey({})
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

it("tcb.v20180608.DescribeVmSpec", async function () {
    try {
       const data = await client.DescribeVmSpec({})
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

it("tcb.v20180608.DescribeEnvAccountCircle", async function () {
    try {
       const data = await client.DescribeEnvAccountCircle({})
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

it("tcb.v20180608.UpdateTable", async function () {
    try {
       const data = await client.UpdateTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeApiKeyList", async function () {
    try {
       const data = await client.DescribeApiKeyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteVmInstance", async function () {
    try {
       const data = await client.DeleteVmInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateEnvResource", async function () {
    try {
       const data = await client.CreateEnvResource({})
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

it("tcb.v20180608.CreateVmInstance", async function () {
    try {
       const data = await client.CreateVmInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteHTTPServiceRoute", async function () {
    try {
       const data = await client.DeleteHTTPServiceRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeHTTPServiceRoute", async function () {
    try {
       const data = await client.DescribeHTTPServiceRoute({})
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

it("tcb.v20180608.CreateAuthDomain", async function () {
    try {
       const data = await client.CreateAuthDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeVmInstances", async function () {
    try {
       const data = await client.DescribeVmInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.InquireVmPrice", async function () {
    try {
       const data = await client.InquireVmPrice({})
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

it("tcb.v20180608.DescribeClient", async function () {
    try {
       const data = await client.DescribeClient({})
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

it("tcb.v20180608.DescribeBaasPackageList", async function () {
    try {
       const data = await client.DescribeBaasPackageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyClient", async function () {
    try {
       const data = await client.ModifyClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyHTTPServiceRoute", async function () {
    try {
       const data = await client.ModifyHTTPServiceRoute({})
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

it("tcb.v20180608.RenewEnv", async function () {
    try {
       const data = await client.RenewEnv({})
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

it("tcb.v20180608.ModifyEnv", async function () {
    try {
       const data = await client.ModifyEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteProvider", async function () {
    try {
       const data = await client.DeleteProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ExecutePGSql", async function () {
    try {
       const data = await client.ExecutePGSql({})
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

it("tcb.v20180608.CreateApiKey", async function () {
    try {
       const data = await client.CreateApiKey({})
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

it("tcb.v20180608.ModifyProvider", async function () {
    try {
       const data = await client.ModifyProvider({})
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

it("tcb.v20180608.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.GetProviders", async function () {
    try {
       const data = await client.GetProviders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeLoginConfig", async function () {
    try {
       const data = await client.DescribeLoginConfig({})
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

it("tcb.v20180608.DescribeBillingInfo", async function () {
    try {
       const data = await client.DescribeBillingInfo({})
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

it("tcb.v20180608.ModifyLoginConfig", async function () {
    try {
       const data = await client.ModifyLoginConfig({})
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

it("tcb.v20180608.CreateHTTPServiceRoute", async function () {
    try {
       const data = await client.CreateHTTPServiceRoute({})
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

it("tcb.v20180608.RunSql", async function () {
    try {
       const data = await client.RunSql({})
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

it("tcb.v20180608.DeleteApiKey", async function () {
    try {
       const data = await client.DeleteApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.AddProvider", async function () {
    try {
       const data = await client.AddProvider({})
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

it("tcb.v20180608.ListTables", async function () {
    try {
       const data = await client.ListTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
