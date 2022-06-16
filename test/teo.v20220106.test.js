
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.teo.v20220106.Client({
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
describe("teo.v20220106.test.js", function () {

it("teo.v20220106.CreateDnsRecord", async function () {
    try {
       const data = await client.CreateDnsRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreatePurgeTask", async function () {
    try {
       const data = await client.CreatePurgeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribePrefetchTasks", async function () {
    try {
       const data = await client.DescribePrefetchTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeWebProtectionAttackEvents", async function () {
    try {
       const data = await client.DescribeWebProtectionAttackEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreateLoadBalancing", async function () {
    try {
       const data = await client.CreateLoadBalancing({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyDDoSPolicyHost", async function () {
    try {
       const data = await client.ModifyDDoSPolicyHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.IdentifyZone", async function () {
    try {
       const data = await client.IdentifyZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDefaultCertificates", async function () {
    try {
       const data = await client.DescribeDefaultCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyOriginGroup", async function () {
    try {
       const data = await client.ModifyOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDDosAttackTopData", async function () {
    try {
       const data = await client.DescribeDDosAttackTopData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeSecurityPortraitRules", async function () {
    try {
       const data = await client.DescribeSecurityPortraitRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DeleteApplicationProxy", async function () {
    try {
       const data = await client.DeleteApplicationProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeWebManagedRulesLog", async function () {
    try {
       const data = await client.DescribeWebManagedRulesLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DownloadL7Logs", async function () {
    try {
       const data = await client.DownloadL7Logs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DeleteApplicationProxyRule", async function () {
    try {
       const data = await client.DeleteApplicationProxyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyLoadBalancingStatus", async function () {
    try {
       const data = await client.ModifyLoadBalancingStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeWebProtectionData", async function () {
    try {
       const data = await client.DescribeWebProtectionData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeWebManagedRulesAttackEvents", async function () {
    try {
       const data = await client.DescribeWebManagedRulesAttackEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyZone", async function () {
    try {
       const data = await client.ModifyZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreatePrefetchTask", async function () {
    try {
       const data = await client.CreatePrefetchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeOverviewL7Data", async function () {
    try {
       const data = await client.DescribeOverviewL7Data({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CheckCertificate", async function () {
    try {
       const data = await client.CheckCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeSecurityPolicyManagedRules", async function () {
    try {
       const data = await client.DescribeSecurityPolicyManagedRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeCnameStatus", async function () {
    try {
       const data = await client.DescribeCnameStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeSecurityPolicyRegions", async function () {
    try {
       const data = await client.DescribeSecurityPolicyRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeZoneDetails", async function () {
    try {
       const data = await client.DescribeZoneDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyZoneSetting", async function () {
    try {
       const data = await client.ModifyZoneSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyApplicationProxyRuleStatus", async function () {
    try {
       const data = await client.ModifyApplicationProxyRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeSecurityPolicyList", async function () {
    try {
       const data = await client.DescribeSecurityPolicyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DeleteOriginGroup", async function () {
    try {
       const data = await client.DeleteOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeWebManagedRulesTopData", async function () {
    try {
       const data = await client.DescribeWebManagedRulesTopData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreateApplicationProxyRules", async function () {
    try {
       const data = await client.CreateApplicationProxyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribePurgeTasks", async function () {
    try {
       const data = await client.DescribePurgeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDDosAttackEventDetail", async function () {
    try {
       const data = await client.DescribeDDosAttackEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeTimingL7CacheData", async function () {
    try {
       const data = await client.DescribeTimingL7CacheData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeLoadBalancing", async function () {
    try {
       const data = await client.DescribeLoadBalancing({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DeleteLoadBalancing", async function () {
    try {
       const data = await client.DeleteLoadBalancing({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeTimingL4Data", async function () {
    try {
       const data = await client.DescribeTimingL4Data({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeTopL7CacheData", async function () {
    try {
       const data = await client.DescribeTopL7CacheData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ScanDnsRecords", async function () {
    try {
       const data = await client.ScanDnsRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeTopL7AnalysisData", async function () {
    try {
       const data = await client.DescribeTopL7AnalysisData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DeleteDnsRecords", async function () {
    try {
       const data = await client.DeleteDnsRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifySecurityPolicy", async function () {
    try {
       const data = await client.ModifySecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeBotManagedRules", async function () {
    try {
       const data = await client.DescribeBotManagedRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDDosAttackSourceEvent", async function () {
    try {
       const data = await client.DescribeDDosAttackSourceEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyApplicationProxyStatus", async function () {
    try {
       const data = await client.ModifyApplicationProxyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeTimingL7AnalysisData", async function () {
    try {
       const data = await client.DescribeTimingL7AnalysisData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeIdentification", async function () {
    try {
       const data = await client.DescribeIdentification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyApplicationProxy", async function () {
    try {
       const data = await client.ModifyApplicationProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreateZone", async function () {
    try {
       const data = await client.CreateZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeZoneDDoSPolicy", async function () {
    try {
       const data = await client.DescribeZoneDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyLoadBalancing", async function () {
    try {
       const data = await client.ModifyLoadBalancing({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreateCustomErrorPage", async function () {
    try {
       const data = await client.CreateCustomErrorPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyDDoSPolicy", async function () {
    try {
       const data = await client.ModifyDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDnsData", async function () {
    try {
       const data = await client.DescribeDnsData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeHostsCertificate", async function () {
    try {
       const data = await client.DescribeHostsCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDDosAttackData", async function () {
    try {
       const data = await client.DescribeDDosAttackData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeOriginGroupDetail", async function () {
    try {
       const data = await client.DescribeOriginGroupDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeApplicationProxyDetail", async function () {
    try {
       const data = await client.DescribeApplicationProxyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeWebProtectionLog", async function () {
    try {
       const data = await client.DescribeWebProtectionLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyZoneStatus", async function () {
    try {
       const data = await client.ModifyZoneStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDDoSPolicy", async function () {
    try {
       const data = await client.DescribeDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyDefaultCertificate", async function () {
    try {
       const data = await client.ModifyDefaultCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeLoadBalancingDetail", async function () {
    try {
       const data = await client.DescribeLoadBalancingDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeSecurityPolicy", async function () {
    try {
       const data = await client.DescribeSecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreateApplicationProxy", async function () {
    try {
       const data = await client.CreateApplicationProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeOriginGroup", async function () {
    try {
       const data = await client.DescribeOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDnssec", async function () {
    try {
       const data = await client.DescribeDnssec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyApplicationProxyRule", async function () {
    try {
       const data = await client.ModifyApplicationProxyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreateOriginGroup", async function () {
    try {
       const data = await client.CreateOriginGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyHostsCertificate", async function () {
    try {
       const data = await client.ModifyHostsCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyZoneCnameSpeedUp", async function () {
    try {
       const data = await client.ModifyZoneCnameSpeedUp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyDnsRecord", async function () {
    try {
       const data = await client.ModifyDnsRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDDosMajorAttackEvent", async function () {
    try {
       const data = await client.DescribeDDosMajorAttackEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeHostsSetting", async function () {
    try {
       const data = await client.DescribeHostsSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeZoneSetting", async function () {
    try {
       const data = await client.DescribeZoneSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.CreateApplicationProxyRule", async function () {
    try {
       const data = await client.CreateApplicationProxyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ReclaimZone", async function () {
    try {
       const data = await client.ReclaimZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DeleteZone", async function () {
    try {
       const data = await client.DeleteZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDDosAttackEvent", async function () {
    try {
       const data = await client.DescribeDDosAttackEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeDnsRecords", async function () {
    try {
       const data = await client.DescribeDnsRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeBotLog", async function () {
    try {
       const data = await client.DescribeBotLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeApplicationProxy", async function () {
    try {
       const data = await client.DescribeApplicationProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeWebManagedRulesData", async function () {
    try {
       const data = await client.DescribeWebManagedRulesData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ImportDnsRecords", async function () {
    try {
       const data = await client.ImportDnsRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.DescribeSecurityPolicyManagedRulesId", async function () {
    try {
       const data = await client.DescribeSecurityPolicyManagedRulesId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("teo.v20220106.ModifyDnssec", async function () {
    try {
       const data = await client.ModifyDnssec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
