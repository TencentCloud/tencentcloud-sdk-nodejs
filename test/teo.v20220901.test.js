
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.teo.v20220901.Client({
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
describe("teo.v20220901.test.js", function () {

it("teo.v20220901.DestroyPlan", async function () {
    try {
       const data = await client.DestroyPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreatePurgeTask", async function () {
    try {
       const data = await client.CreatePurgeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DownloadL4Logs", async function () {
    try {
       const data = await client.DownloadL4Logs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribePrefetchTasks", async function () {
    try {
       const data = await client.DescribePrefetchTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeContentQuota", async function () {
    try {
       const data = await client.DescribeContentQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeIdentifications", async function () {
    try {
       const data = await client.DescribeIdentifications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeRealtimeLogDeliveryTasks", async function () {
    try {
       const data = await client.DescribeRealtimeLogDeliveryTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.VerifyOwnership", async function () {
    try {
       const data = await client.VerifyOwnership({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.IdentifyZone", async function () {
    try {
       const data = await client.IdentifyZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeDefaultCertificates", async function () {
    try {
       const data = await client.DescribeDefaultCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeAccelerationDomains", async function () {
    try {
       const data = await client.DescribeAccelerationDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyOriginGroup", async function () {
    try {
       const data = await client.ModifyOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteApplicationProxy", async function () {
    try {
       const data = await client.DeleteApplicationProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyL4ProxyStatus", async function () {
    try {
       const data = await client.ModifyL4ProxyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DownloadL7Logs", async function () {
    try {
       const data = await client.DownloadL7Logs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeEnvironments", async function () {
    try {
       const data = await client.DescribeEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.IncreasePlanQuota", async function () {
    try {
       const data = await client.IncreasePlanQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteApplicationProxyRule", async function () {
    try {
       const data = await client.DeleteApplicationProxyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CheckCnameStatus", async function () {
    try {
       const data = await client.CheckCnameStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyZone", async function () {
    try {
       const data = await client.ModifyZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreatePrefetchTask", async function () {
    try {
       const data = await client.CreatePrefetchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteAliasDomain", async function () {
    try {
       const data = await client.DeleteAliasDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeOverviewL7Data", async function () {
    try {
       const data = await client.DescribeOverviewL7Data({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateAccelerationDomain", async function () {
    try {
       const data = await client.CreateAccelerationDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeConfigGroupVersionDetail", async function () {
    try {
       const data = await client.DescribeConfigGroupVersionDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.BindSecurityTemplateToEntity", async function () {
    try {
       const data = await client.BindSecurityTemplateToEntity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyApplicationProxyRuleStatus", async function () {
    try {
       const data = await client.ModifyApplicationProxyRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreatePlanForZone", async function () {
    try {
       const data = await client.CreatePlanForZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteOriginGroup", async function () {
    try {
       const data = await client.DeleteOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateSecurityIPGroup", async function () {
    try {
       const data = await client.CreateSecurityIPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeIPRegion", async function () {
    try {
       const data = await client.DescribeIPRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteAccelerationDomains", async function () {
    try {
       const data = await client.DeleteAccelerationDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateRealtimeLogDeliveryTask", async function () {
    try {
       const data = await client.CreateRealtimeLogDeliveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyL4Proxy", async function () {
    try {
       const data = await client.ModifyL4Proxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyL4ProxyRules", async function () {
    try {
       const data = await client.ModifyL4ProxyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeTimingL7CacheData", async function () {
    try {
       const data = await client.DescribeTimingL7CacheData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeConfigGroupVersions", async function () {
    try {
       const data = await client.DescribeConfigGroupVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyZoneSetting", async function () {
    try {
       const data = await client.ModifyZoneSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateAliasDomain", async function () {
    try {
       const data = await client.CreateAliasDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyAliasDomainStatus", async function () {
    try {
       const data = await client.ModifyAliasDomainStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateL4ProxyRules", async function () {
    try {
       const data = await client.CreateL4ProxyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeTopL7CacheData", async function () {
    try {
       const data = await client.DescribeTopL7CacheData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeTimingL4Data", async function () {
    try {
       const data = await client.DescribeTimingL4Data({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyRule", async function () {
    try {
       const data = await client.ModifyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeTopL7AnalysisData", async function () {
    try {
       const data = await client.DescribeTopL7AnalysisData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifySecurityPolicy", async function () {
    try {
       const data = await client.ModifySecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyPlan", async function () {
    try {
       const data = await client.ModifyPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.BindZoneToPlan", async function () {
    try {
       const data = await client.BindZoneToPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeDDoSAttackEvent", async function () {
    try {
       const data = await client.DescribeDDoSAttackEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteL4ProxyRules", async function () {
    try {
       const data = await client.DeleteL4ProxyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyAccelerationDomain", async function () {
    try {
       const data = await client.ModifyAccelerationDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateL4Proxy", async function () {
    try {
       const data = await client.CreateL4Proxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyApplicationProxyStatus", async function () {
    try {
       const data = await client.ModifyApplicationProxyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreatePlan", async function () {
    try {
       const data = await client.CreatePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeTimingL7AnalysisData", async function () {
    try {
       const data = await client.DescribeTimingL7AnalysisData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeApplicationProxies", async function () {
    try {
       const data = await client.DescribeApplicationProxies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateSharedCNAME", async function () {
    try {
       const data = await client.CreateSharedCNAME({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateRule", async function () {
    try {
       const data = await client.CreateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateConfigGroupVersion", async function () {
    try {
       const data = await client.CreateConfigGroupVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyApplicationProxy", async function () {
    try {
       const data = await client.ModifyApplicationProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateZone", async function () {
    try {
       const data = await client.CreateZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeAvailablePlans", async function () {
    try {
       const data = await client.DescribeAvailablePlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeRulesSetting", async function () {
    try {
       const data = await client.DescribeRulesSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyAccelerationDomainStatuses", async function () {
    try {
       const data = await client.ModifyAccelerationDomainStatuses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifySecurityIPGroup", async function () {
    try {
       const data = await client.ModifySecurityIPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteRealtimeLogDeliveryTask", async function () {
    try {
       const data = await client.DeleteRealtimeLogDeliveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeDDoSAttackTopData", async function () {
    try {
       const data = await client.DescribeDDoSAttackTopData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyZoneStatus", async function () {
    try {
       const data = await client.ModifyZoneStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribePurgeTasks", async function () {
    try {
       const data = await client.DescribePurgeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteRules", async function () {
    try {
       const data = await client.DeleteRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeL4ProxyRules", async function () {
    try {
       const data = await client.DescribeL4ProxyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeL4Proxy", async function () {
    try {
       const data = await client.DescribeL4Proxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.UpgradePlan", async function () {
    try {
       const data = await client.UpgradePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeRules", async function () {
    try {
       const data = await client.DescribeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateCLSIndex", async function () {
    try {
       const data = await client.CreateCLSIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateApplicationProxy", async function () {
    try {
       const data = await client.CreateApplicationProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeOriginGroup", async function () {
    try {
       const data = await client.DescribeOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyAliasDomain", async function () {
    try {
       const data = await client.ModifyAliasDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyApplicationProxyRule", async function () {
    try {
       const data = await client.ModifyApplicationProxyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateOriginGroup", async function () {
    try {
       const data = await client.CreateOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyHostsCertificate", async function () {
    try {
       const data = await client.ModifyHostsCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeDeployHistory", async function () {
    try {
       const data = await client.DescribeDeployHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeployConfigGroupVersion", async function () {
    try {
       const data = await client.DeployConfigGroupVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeHostsSetting", async function () {
    try {
       const data = await client.DescribeHostsSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeSecurityTemplateBindings", async function () {
    try {
       const data = await client.DescribeSecurityTemplateBindings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteL4Proxy", async function () {
    try {
       const data = await client.DeleteL4Proxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.BindSharedCNAME", async function () {
    try {
       const data = await client.BindSharedCNAME({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyRealtimeLogDeliveryTask", async function () {
    try {
       const data = await client.ModifyRealtimeLogDeliveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeOriginProtection", async function () {
    try {
       const data = await client.DescribeOriginProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyL4ProxyRulesStatus", async function () {
    try {
       const data = await client.ModifyL4ProxyRulesStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.RenewPlan", async function () {
    try {
       const data = await client.RenewPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeZoneSetting", async function () {
    try {
       const data = await client.DescribeZoneSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteSecurityIPGroup", async function () {
    try {
       const data = await client.DeleteSecurityIPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateApplicationProxyRule", async function () {
    try {
       const data = await client.CreateApplicationProxyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteZone", async function () {
    try {
       const data = await client.DeleteZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeSecurityIPGroupInfo", async function () {
    try {
       const data = await client.DescribeSecurityIPGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeSecurityIPGroup", async function () {
    try {
       const data = await client.DescribeSecurityIPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeDDoSAttackData", async function () {
    try {
       const data = await client.DescribeDDoSAttackData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DeleteSharedCNAME", async function () {
    try {
       const data = await client.DeleteSharedCNAME({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeAliasDomains", async function () {
    try {
       const data = await client.DescribeAliasDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeBillingData", async function () {
    try {
       const data = await client.DescribeBillingData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
