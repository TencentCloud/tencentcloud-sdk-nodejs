
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.waf.v20180125.Client({
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
describe("waf.v20180125.test.js", function () {

it("waf.v20180125.DescribeAttackType", async function () {
    try {
       const data = await client.DescribeAttackType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeDomainDetailsClb", async function () {
    try {
       const data = await client.DescribeDomainDetailsClb({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeDomains", async function () {
    try {
       const data = await client.DescribeDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAccessIndex", async function () {
    try {
       const data = await client.DescribeAccessIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.GetAttackTotalCount", async function () {
    try {
       const data = await client.GetAttackTotalCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ImportIpAccessControl", async function () {
    try {
       const data = await client.ImportIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.AddCustomWhiteRule", async function () {
    try {
       const data = await client.AddCustomWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteIpAccessControl", async function () {
    try {
       const data = await client.DeleteIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAntiInfoLeakRules", async function () {
    try {
       const data = await client.DescribeAntiInfoLeakRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyCustomRule", async function () {
    try {
       const data = await client.ModifyCustomRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyHostFlowMode", async function () {
    try {
       const data = await client.ModifyHostFlowMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyInstanceQpsLimit", async function () {
    try {
       const data = await client.ModifyInstanceQpsLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeSpartaProtectionInfo", async function () {
    try {
       const data = await client.DescribeSpartaProtectionInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAutoDenyIP", async function () {
    try {
       const data = await client.DescribeAutoDenyIP({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteCustomWhiteRule", async function () {
    try {
       const data = await client.DeleteCustomWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.GetAttackDownloadRecords", async function () {
    try {
       const data = await client.GetAttackDownloadRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.AddCustomRule", async function () {
    try {
       const data = await client.AddCustomRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteCustomRule", async function () {
    try {
       const data = await client.DeleteCustomRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyAntiFakeUrl", async function () {
    try {
       const data = await client.ModifyAntiFakeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifySpartaProtection", async function () {
    try {
       const data = await client.ModifySpartaProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyInstanceElasticMode", async function () {
    try {
       const data = await client.ModifyInstanceElasticMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyApiAnalyzeStatus", async function () {
    try {
       const data = await client.ModifyApiAnalyzeStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyWafAutoDenyRules", async function () {
    try {
       const data = await client.ModifyWafAutoDenyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeUserDomainInfo", async function () {
    try {
       const data = await client.DescribeUserDomainInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteCCRule", async function () {
    try {
       const data = await client.DeleteCCRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAntiInfoLeakageRules", async function () {
    try {
       const data = await client.DescribeAntiInfoLeakageRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.SearchAccessLog", async function () {
    try {
       const data = await client.SearchAccessLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeWafThreatenIntelligence", async function () {
    try {
       const data = await client.DescribeWafThreatenIntelligence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeIpHitItems", async function () {
    try {
       const data = await client.DescribeIpHitItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeHistogram", async function () {
    try {
       const data = await client.DescribeHistogram({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeWebshellStatus", async function () {
    try {
       const data = await client.DescribeWebshellStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeDomainWhiteRules", async function () {
    try {
       const data = await client.DescribeDomainWhiteRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteAntiInfoLeakRule", async function () {
    try {
       const data = await client.DeleteAntiInfoLeakRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.CreateDeals", async function () {
    try {
       const data = await client.CreateDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.UpsertCCAutoStatus", async function () {
    try {
       const data = await client.UpsertCCAutoStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeRuleLimit", async function () {
    try {
       const data = await client.DescribeRuleLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.AddAntiInfoLeakRules", async function () {
    try {
       const data = await client.AddAntiInfoLeakRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyHostStatus", async function () {
    try {
       const data = await client.ModifyHostStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeModuleStatus", async function () {
    try {
       const data = await client.DescribeModuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.UpsertIpAccessControl", async function () {
    try {
       const data = await client.UpsertIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.GetAttackHistogram", async function () {
    try {
       const data = await client.GetAttackHistogram({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyAccessPeriod", async function () {
    try {
       const data = await client.ModifyAccessPeriod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyDomainsCLSStatus", async function () {
    try {
       const data = await client.ModifyDomainsCLSStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyAntiFakeUrlStatus", async function () {
    try {
       const data = await client.ModifyAntiFakeUrlStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeVipInfo", async function () {
    try {
       const data = await client.DescribeVipInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteHost", async function () {
    try {
       const data = await client.DeleteHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAccessFastAnalysis", async function () {
    try {
       const data = await client.DescribeAccessFastAnalysis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribePeakPoints", async function () {
    try {
       const data = await client.DescribePeakPoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyCustomWhiteRule", async function () {
    try {
       const data = await client.ModifyCustomWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeCertificateVerifyResult", async function () {
    try {
       const data = await client.DescribeCertificateVerifyResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteIpAccessControlV2", async function () {
    try {
       const data = await client.DeleteIpAccessControlV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.SwitchElasticMode", async function () {
    try {
       const data = await client.SwitchElasticMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyInstanceRenewFlag", async function () {
    try {
       const data = await client.ModifyInstanceRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeUserLevel", async function () {
    try {
       const data = await client.DescribeUserLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeCCRule", async function () {
    try {
       const data = await client.DescribeCCRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribePeakValue", async function () {
    try {
       const data = await client.DescribePeakValue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyWafThreatenIntelligence", async function () {
    try {
       const data = await client.ModifyWafThreatenIntelligence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifySpartaProtectionMode", async function () {
    try {
       const data = await client.ModifySpartaProtectionMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteAttackDownloadRecord", async function () {
    try {
       const data = await client.DeleteAttackDownloadRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeCustomRuleList", async function () {
    try {
       const data = await client.DescribeCustomRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAttackOverview", async function () {
    try {
       const data = await client.DescribeAttackOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAttackWhiteRule", async function () {
    try {
       const data = await client.DescribeAttackWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeHosts", async function () {
    try {
       const data = await client.DescribeHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.AddSpartaProtection", async function () {
    try {
       const data = await client.AddSpartaProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribePolicyStatus", async function () {
    try {
       const data = await client.DescribePolicyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeSession", async function () {
    try {
       const data = await client.DescribeSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeTopAttackDomain", async function () {
    try {
       const data = await client.DescribeTopAttackDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyHost", async function () {
    try {
       const data = await client.ModifyHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyBotStatus", async function () {
    try {
       const data = await client.ModifyBotStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyProtectionStatus", async function () {
    try {
       const data = await client.ModifyProtectionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeCiphersDetail", async function () {
    try {
       const data = await client.DescribeCiphersDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyAreaBanStatus", async function () {
    try {
       const data = await client.ModifyAreaBanStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyIpAccessControl", async function () {
    try {
       const data = await client.ModifyIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAntiFakeRules", async function () {
    try {
       const data = await client.DescribeAntiFakeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeFindDomainList", async function () {
    try {
       const data = await client.DescribeFindDomainList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAccessHistogram", async function () {
    try {
       const data = await client.DescribeAccessHistogram({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteDownloadRecord", async function () {
    try {
       const data = await client.DeleteDownloadRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeTlsVersion", async function () {
    try {
       const data = await client.DescribeTlsVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyAntiInfoLeakRules", async function () {
    try {
       const data = await client.ModifyAntiInfoLeakRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.CreateIpAccessControl", async function () {
    try {
       const data = await client.CreateIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.AddAntiFakeUrl", async function () {
    try {
       const data = await client.AddAntiFakeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeFlowTrend", async function () {
    try {
       const data = await client.DescribeFlowTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAntiFakeUrl", async function () {
    try {
       const data = await client.DescribeAntiFakeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeObjects", async function () {
    try {
       const data = await client.DescribeObjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyDomainWhiteRule", async function () {
    try {
       const data = await client.ModifyDomainWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyCustomRuleStatus", async function () {
    try {
       const data = await client.ModifyCustomRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteAttackWhiteRule", async function () {
    try {
       const data = await client.DeleteAttackWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeIpAccessControl", async function () {
    try {
       const data = await client.DescribeIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.AddAttackWhiteRule", async function () {
    try {
       const data = await client.AddAttackWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeDomainCountInfo", async function () {
    try {
       const data = await client.DescribeDomainCountInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteSpartaProtection", async function () {
    try {
       const data = await client.DeleteSpartaProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.SwitchDomainRules", async function () {
    try {
       const data = await client.SwitchDomainRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeBatchIpAccessControl", async function () {
    try {
       const data = await client.DescribeBatchIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeWafAutoDenyRules", async function () {
    try {
       const data = await client.DescribeWafAutoDenyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteSession", async function () {
    try {
       const data = await client.DeleteSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.GenerateDealsAndPayNew", async function () {
    try {
       const data = await client.GenerateDealsAndPayNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyWebshellStatus", async function () {
    try {
       const data = await client.ModifyWebshellStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyAntiInfoLeakRuleStatus", async function () {
    try {
       const data = await client.ModifyAntiInfoLeakRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.RefreshAccessCheckResult", async function () {
    try {
       const data = await client.RefreshAccessCheckResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.PostAttackDownloadTask", async function () {
    try {
       const data = await client.PostAttackDownloadTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeCustomWhiteRule", async function () {
    try {
       const data = await client.DescribeCustomWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeHost", async function () {
    try {
       const data = await client.DescribeHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeAccessExports", async function () {
    try {
       const data = await client.DescribeAccessExports({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeHostLimit", async function () {
    try {
       const data = await client.DescribeHostLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.GetInstanceQpsLimit", async function () {
    try {
       const data = await client.GetInstanceQpsLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteAccessExport", async function () {
    try {
       const data = await client.DeleteAccessExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteDomainWhiteRules", async function () {
    try {
       const data = await client.DeleteDomainWhiteRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeDomainVerifyResult", async function () {
    try {
       const data = await client.DescribeDomainVerifyResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.CreateAccessExport", async function () {
    try {
       const data = await client.CreateAccessExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.SearchAttackLog", async function () {
    try {
       const data = await client.SearchAttackLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyAttackWhiteRule", async function () {
    try {
       const data = await client.ModifyAttackWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeDomainDetailsSaas", async function () {
    try {
       const data = await client.DescribeDomainDetailsSaas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyUserSignatureRule", async function () {
    try {
       const data = await client.ModifyUserSignatureRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyGenerateDeals", async function () {
    try {
       const data = await client.ModifyGenerateDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyInstanceName", async function () {
    try {
       const data = await client.ModifyInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyModuleStatus", async function () {
    try {
       const data = await client.ModifyModuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeUserCdcClbWafRegions", async function () {
    try {
       const data = await client.DescribeUserCdcClbWafRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeWafAutoDenyStatus", async function () {
    try {
       const data = await client.DescribeWafAutoDenyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyCustomWhiteRuleStatus", async function () {
    try {
       const data = await client.ModifyCustomWhiteRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribePorts", async function () {
    try {
       const data = await client.DescribePorts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyHostMode", async function () {
    try {
       const data = await client.ModifyHostMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyDomainPostAction", async function () {
    try {
       const data = await client.ModifyDomainPostAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeUserClbWafRegions", async function () {
    try {
       const data = await client.DescribeUserClbWafRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.UpsertCCRule", async function () {
    try {
       const data = await client.UpsertCCRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyObject", async function () {
    try {
       const data = await client.ModifyObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DeleteAntiFakeUrl", async function () {
    try {
       const data = await client.DeleteAntiFakeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeCCRuleList", async function () {
    try {
       const data = await client.DescribeCCRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.CreateHost", async function () {
    try {
       const data = await client.CreateHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.UpsertSession", async function () {
    try {
       const data = await client.UpsertSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeCCAutoStatus", async function () {
    try {
       const data = await client.DescribeCCAutoStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeUserSignatureRule", async function () {
    try {
       const data = await client.DescribeUserSignatureRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.FreshAntiFakeUrl", async function () {
    try {
       const data = await client.FreshAntiFakeUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.DescribeDomainRules", async function () {
    try {
       const data = await client.DescribeDomainRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.AddDomainWhiteRule", async function () {
    try {
       const data = await client.AddDomainWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyDomainIpv6Status", async function () {
    try {
       const data = await client.ModifyDomainIpv6Status({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyUserLevel", async function () {
    try {
       const data = await client.ModifyUserLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
