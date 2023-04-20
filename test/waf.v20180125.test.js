
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

it("waf.v20180125.DescribeAccessExports", async function () {
    try {
       const data = await client.DescribeAccessExports({})
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

it("waf.v20180125.ModifyAreaBanStatus", async function () {
    try {
       const data = await client.ModifyAreaBanStatus({})
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

it("waf.v20180125.SearchAccessLog", async function () {
    try {
       const data = await client.SearchAccessLog({})
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

it("waf.v20180125.DescribeDomainDetailsSaas", async function () {
    try {
       const data = await client.DescribeDomainDetailsSaas({})
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

it("waf.v20180125.DeleteIpAccessControl", async function () {
    try {
       const data = await client.DeleteIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("waf.v20180125.ModifyWafAutoDenyStatus", async function () {
    try {
       const data = await client.ModifyWafAutoDenyStatus({})
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

it("waf.v20180125.DescribeFlowTrend", async function () {
    try {
       const data = await client.DescribeFlowTrend({})
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

it("waf.v20180125.DescribeUserCdcClbWafRegions", async function () {
    try {
       const data = await client.DescribeUserCdcClbWafRegions({})
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

it("waf.v20180125.DescribeAccessFastAnalysis", async function () {
    try {
       const data = await client.DescribeAccessFastAnalysis({})
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

it("waf.v20180125.DescribeWafAutoDenyStatus", async function () {
    try {
       const data = await client.DescribeWafAutoDenyStatus({})
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

it("waf.v20180125.ModifyCustomWhiteRule", async function () {
    try {
       const data = await client.ModifyCustomWhiteRule({})
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

it("waf.v20180125.DescribeIpAccessControl", async function () {
    try {
       const data = await client.DescribeIpAccessControl({})
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

it("waf.v20180125.ModifyCustomRuleStatus", async function () {
    try {
       const data = await client.ModifyCustomRuleStatus({})
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

it("waf.v20180125.AddCustomWhiteRule", async function () {
    try {
       const data = await client.AddCustomWhiteRule({})
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

it("waf.v20180125.DescribeUserClbWafRegions", async function () {
    try {
       const data = await client.DescribeUserClbWafRegions({})
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

it("waf.v20180125.DescribeWafAutoDenyRules", async function () {
    try {
       const data = await client.DescribeWafAutoDenyRules({})
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

it("waf.v20180125.DeleteDownloadRecord", async function () {
    try {
       const data = await client.DeleteDownloadRecord({})
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

it("waf.v20180125.DeleteSession", async function () {
    try {
       const data = await client.DeleteSession({})
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

it("waf.v20180125.DescribeRuleLimit", async function () {
    try {
       const data = await client.DescribeRuleLimit({})
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

it("waf.v20180125.DescribeWafThreatenIntelligence", async function () {
    try {
       const data = await client.DescribeWafThreatenIntelligence({})
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

it("waf.v20180125.DescribeIpHitItems", async function () {
    try {
       const data = await client.DescribeIpHitItems({})
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

it("waf.v20180125.SwitchDomainRules", async function () {
    try {
       const data = await client.SwitchDomainRules({})
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

it("waf.v20180125.UpsertIpAccessControl", async function () {
    try {
       const data = await client.UpsertIpAccessControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
