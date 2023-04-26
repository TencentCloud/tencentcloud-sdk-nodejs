
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

it("teo.v20220901.CreatePlanForZone", async function () {
    try {
       const data = await client.CreatePlanForZone({})
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

it("teo.v20220901.DescribeWebManagedRulesLog", async function () {
    try {
       const data = await client.DescribeWebManagedRulesLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateCredential", async function () {
    try {
       const data = await client.CreateCredential({})
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

it("teo.v20220901.DeleteApplicationProxyRule", async function () {
    try {
       const data = await client.DeleteApplicationProxyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeWebProtectionData", async function () {
    try {
       const data = await client.DescribeWebProtectionData({})
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

it("teo.v20220901.DescribeAddableEntityList", async function () {
    try {
       const data = await client.DescribeAddableEntityList({})
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

it("teo.v20220901.CheckCertificate", async function () {
    try {
       const data = await client.CheckCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateReplayTask", async function () {
    try {
       const data = await client.CreateReplayTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeSpeedTestingQuota", async function () {
    try {
       const data = await client.DescribeSpeedTestingQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.CreateSpeedTesting", async function () {
    try {
       const data = await client.CreateSpeedTesting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeSpeedTestingMetricData", async function () {
    try {
       const data = await client.DescribeSpeedTestingMetricData({})
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

it("teo.v20220901.ModifyApplicationProxyRuleStatus", async function () {
    try {
       const data = await client.ModifyApplicationProxyRuleStatus({})
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

it("teo.v20220901.DeleteOriginGroup", async function () {
    try {
       const data = await client.DeleteOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.UpdateOriginProtectionIPWhitelist", async function () {
    try {
       const data = await client.UpdateOriginProtectionIPWhitelist({})
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

it("teo.v20220901.DescribePurgeTasks", async function () {
    try {
       const data = await client.DescribePurgeTasks({})
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

it("teo.v20220901.DescribeTimingL7CacheData", async function () {
    try {
       const data = await client.DescribeTimingL7CacheData({})
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

it("teo.v20220901.DescribeWebProtectionHitRuleDetail", async function () {
    try {
       const data = await client.DescribeWebProtectionHitRuleDetail({})
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

it("teo.v20220901.ModifyRulePriority", async function () {
    try {
       const data = await client.ModifyRulePriority({})
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

it("teo.v20220901.ModifyAccelerationDomain", async function () {
    try {
       const data = await client.ModifyAccelerationDomain({})
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

it("teo.v20220901.DescribeTimingL7SourceData", async function () {
    try {
       const data = await client.DescribeTimingL7SourceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeClientRuleList", async function () {
    try {
       const data = await client.DescribeClientRuleList({})
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

it("teo.v20220901.DescribeWebProtectionClientIpList", async function () {
    try {
       const data = await client.DescribeWebProtectionClientIpList({})
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

it("teo.v20220901.ModifySecurityWafGroupPolicy", async function () {
    try {
       const data = await client.ModifySecurityWafGroupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeDnsData", async function () {
    try {
       const data = await client.DescribeDnsData({})
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

it("teo.v20220901.DescribeLogTopicTasks", async function () {
    try {
       const data = await client.DescribeLogTopicTasks({})
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

it("teo.v20220901.DeleteRules", async function () {
    try {
       const data = await client.DeleteRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeSingleL7AnalysisData", async function () {
    try {
       const data = await client.DescribeSingleL7AnalysisData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.ModifyDefaultCertificate", async function () {
    try {
       const data = await client.ModifyDefaultCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeWebManagedRulesHitRuleDetail", async function () {
    try {
       const data = await client.DescribeWebManagedRulesHitRuleDetail({})
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

it("teo.v20220901.DescribeSpeedTestingDetails", async function () {
    try {
       const data = await client.DescribeSpeedTestingDetails({})
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

it("teo.v20220901.DescribeHostsSetting", async function () {
    try {
       const data = await client.DescribeHostsSetting({})
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

it("teo.v20220901.DescribeLogSets", async function () {
    try {
       const data = await client.DescribeLogSets({})
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

it("teo.v20220901.ReclaimAliasDomain", async function () {
    try {
       const data = await client.ReclaimAliasDomain({})
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

it("teo.v20220901.ReclaimZone", async function () {
    try {
       const data = await client.ReclaimZone({})
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

it("teo.v20220901.DescribeDDoSAttackData", async function () {
    try {
       const data = await client.DescribeDDoSAttackData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeWebProtectionTopData", async function () {
    try {
       const data = await client.DescribeWebProtectionTopData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220901.DescribeWebManagedRulesData", async function () {
    try {
       const data = await client.DescribeWebManagedRulesData({})
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

})
