
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

it("tcb.v20180608.DescribeWxCloudBaseRunSubNets", async function () {
    try {
       const data = await client.DescribeWxCloudBaseRunSubNets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeSpecialCostItems", async function () {
    try {
       const data = await client.DescribeSpecialCostItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunAllVpcs", async function () {
    try {
       const data = await client.DescribeCloudBaseRunAllVpcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.EstablishWxGatewayRoute", async function () {
    try {
       const data = await client.EstablishWxGatewayRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DestroyStandaloneGateway", async function () {
    try {
       const data = await client.DestroyStandaloneGateway({})
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

it("tcb.v20180608.DeleteWxGatewayRoute", async function () {
    try {
       const data = await client.DeleteWxGatewayRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.BindEnvGateway", async function () {
    try {
       const data = await client.BindEnvGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeWxCloudBaseRunEnvs", async function () {
    try {
       const data = await client.DescribeWxCloudBaseRunEnvs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeSmsQuotas", async function () {
    try {
       const data = await client.DescribeSmsQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyCloudBaseRunServerVersion", async function () {
    try {
       const data = await client.ModifyCloudBaseRunServerVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.RollUpdateCloudBaseRunServerVersion", async function () {
    try {
       const data = await client.RollUpdateCloudBaseRunServerVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateWxCloudBaseRunServerDBCluster", async function () {
    try {
       const data = await client.CreateWxCloudBaseRunServerDBCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeEnvPostpaidDeduct", async function () {
    try {
       const data = await client.DescribeEnvPostpaidDeduct({})
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

it("tcb.v20180608.DescribeCloudBaseRunServerDomainName", async function () {
    try {
       const data = await client.DescribeCloudBaseRunServerDomainName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunResource", async function () {
    try {
       const data = await client.DescribeCloudBaseRunResource({})
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

it("tcb.v20180608.DescribePostpayPackageFreeQuotas", async function () {
    try {
       const data = await client.DescribePostpayPackageFreeQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateCloudBaseRunServerVersion", async function () {
    try {
       const data = await client.CreateCloudBaseRunServerVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateStandaloneGateway", async function () {
    try {
       const data = await client.CreateStandaloneGateway({})
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

it("tcb.v20180608.TurnOnStandaloneGateway", async function () {
    try {
       const data = await client.TurnOnStandaloneGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeStandaloneGatewayPackage", async function () {
    try {
       const data = await client.DescribeStandaloneGatewayPackage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.UnfreezeCloudBaseRunServers", async function () {
    try {
       const data = await client.UnfreezeCloudBaseRunServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreatePostpayPackage", async function () {
    try {
       const data = await client.CreatePostpayPackage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ReplaceActivityRecord", async function () {
    try {
       const data = await client.ReplaceActivityRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeUserActivityInfo", async function () {
    try {
       const data = await client.DescribeUserActivityInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateWxCloudBaseRunEnv", async function () {
    try {
       const data = await client.CreateWxCloudBaseRunEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.TurnOffStandaloneGateway", async function () {
    try {
       const data = await client.TurnOffStandaloneGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseProjectVersionList", async function () {
    try {
       const data = await client.DescribeCloudBaseProjectVersionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseProjectLatestVersionList", async function () {
    try {
       const data = await client.DescribeCloudBaseProjectLatestVersionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunConfForGateWay", async function () {
    try {
       const data = await client.DescribeCloudBaseRunConfForGateWay({})
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

it("tcb.v20180608.DescribeStandaloneGateway", async function () {
    try {
       const data = await client.DescribeStandaloneGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyCloudBaseRunServerFlowConf", async function () {
    try {
       const data = await client.ModifyCloudBaseRunServerFlowConf({})
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

it("tcb.v20180608.DescribeCloudBaseRunResourceForExtend", async function () {
    try {
       const data = await client.DescribeCloudBaseRunResourceForExtend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.ModifyEndUser", async function () {
    try {
       const data = await client.ModifyEndUser({})
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

it("tcb.v20180608.DescribeEnvDealRegion", async function () {
    try {
       const data = await client.DescribeEnvDealRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeExtraPkgBillingInfo", async function () {
    try {
       const data = await client.DescribeExtraPkgBillingInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeExtensionUploadInfo", async function () {
    try {
       const data = await client.DescribeExtensionUploadInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.EstablishCloudBaseRunServer", async function () {
    try {
       const data = await client.EstablishCloudBaseRunServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CommonServiceAPI", async function () {
    try {
       const data = await client.CommonServiceAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.CreateAndDeployCloudBaseProject", async function () {
    try {
       const data = await client.CreateAndDeployCloudBaseProject({})
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

it("tcb.v20180608.DeleteEndUser", async function () {
    try {
       const data = await client.DeleteEndUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeEndUserLoginStatistic", async function () {
    try {
       const data = await client.DescribeEndUserLoginStatistic({})
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

it("tcb.v20180608.DescribeHostingDomainTask", async function () {
    try {
       const data = await client.DescribeHostingDomainTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeActivityRecord", async function () {
    try {
       const data = await client.DescribeActivityRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteCloudBaseRunServerVersion", async function () {
    try {
       const data = await client.DeleteCloudBaseRunServerVersion({})
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

it("tcb.v20180608.CreateCloudBaseRunResource", async function () {
    try {
       const data = await client.CreateCloudBaseRunResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DeleteCloudBaseProjectLatestVersion", async function () {
    try {
       const data = await client.DeleteCloudBaseProjectLatestVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeDownloadFile", async function () {
    try {
       const data = await client.DescribeDownloadFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunOperationTypes", async function () {
    try {
       const data = await client.DescribeCloudBaseRunOperationTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunServer", async function () {
    try {
       const data = await client.DescribeCloudBaseRunServer({})
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

it("tcb.v20180608.DescribeEndUserStatistic", async function () {
    try {
       const data = await client.DescribeEndUserStatistic({})
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

it("tcb.v20180608.FreezeCloudBaseRunServers", async function () {
    try {
       const data = await client.FreezeCloudBaseRunServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeActivityInfo", async function () {
    try {
       const data = await client.DescribeActivityInfo({})
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

it("tcb.v20180608.DescribeCloudBaseRunOneClickTaskExternal", async function () {
    try {
       const data = await client.DescribeCloudBaseRunOneClickTaskExternal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunVersionSnapshot", async function () {
    try {
       const data = await client.DescribeCloudBaseRunVersionSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeEndUsers", async function () {
    try {
       const data = await client.DescribeEndUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunVersion", async function () {
    try {
       const data = await client.DescribeCloudBaseRunVersion({})
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

it("tcb.v20180608.ModifyDatabaseACL", async function () {
    try {
       const data = await client.ModifyDatabaseACL({})
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

it("tcb.v20180608.DescribeCloudBaseRunVersionRsByCondition", async function () {
    try {
       const data = await client.DescribeCloudBaseRunVersionRsByCondition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeCloudBaseRunPodList", async function () {
    try {
       const data = await client.DescribeCloudBaseRunPodList({})
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

it("tcb.v20180608.DescribePostpayFreeQuotas", async function () {
    try {
       const data = await client.DescribePostpayFreeQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcb.v20180608.DescribeEnvFreeQuota", async function () {
    try {
       const data = await client.DescribeEnvFreeQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
