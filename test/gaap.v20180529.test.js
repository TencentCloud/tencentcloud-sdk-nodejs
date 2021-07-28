
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gaap.v20180529.Client({
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
describe("gaap.v20180529.test.js", function () {

it("gaap.v20180529.DescribeCertificates", async function () {
    try {
       const data = await client.DescribeCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateSecurityRules", async function () {
    try {
       const data = await client.CreateSecurityRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeHTTPSListeners", async function () {
    try {
       const data = await client.DescribeHTTPSListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteSecurityPolicy", async function () {
    try {
       const data = await client.DeleteSecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeBlackHeader", async function () {
    try {
       const data = await client.DescribeBlackHeader({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeCountryAreaMapping", async function () {
    try {
       const data = await client.DescribeCountryAreaMapping({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyHTTPListenerAttribute", async function () {
    try {
       const data = await client.ModifyHTTPListenerAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyCertificateAttributes", async function () {
    try {
       const data = await client.ModifyCertificateAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateCustomHeader", async function () {
    try {
       const data = await client.CreateCustomHeader({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeGroupAndStatisticsProxy", async function () {
    try {
       const data = await client.DescribeGroupAndStatisticsProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CloseSecurityPolicy", async function () {
    try {
       const data = await client.CloseSecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateProxyGroupDomain", async function () {
    try {
       const data = await client.CreateProxyGroupDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateUDPListeners", async function () {
    try {
       const data = await client.CreateUDPListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxyDetail", async function () {
    try {
       const data = await client.DescribeProxyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeRuleRealServers", async function () {
    try {
       const data = await client.DescribeRuleRealServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeDestRegions", async function () {
    try {
       const data = await client.DescribeDestRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeRulesByRuleIds", async function () {
    try {
       const data = await client.DescribeRulesByRuleIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxyGroupList", async function () {
    try {
       const data = await client.DescribeProxyGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.OpenSecurityPolicy", async function () {
    try {
       const data = await client.OpenSecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteDomainErrorPageInfo", async function () {
    try {
       const data = await client.DeleteDomainErrorPageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyCertificate", async function () {
    try {
       const data = await client.ModifyCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateDomainErrorPageInfo", async function () {
    try {
       const data = await client.CreateDomainErrorPageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxyGroupStatistics", async function () {
    try {
       const data = await client.DescribeProxyGroupStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyRealServerName", async function () {
    try {
       const data = await client.ModifyRealServerName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.BindListenerRealServers", async function () {
    try {
       const data = await client.BindListenerRealServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteSecurityRules", async function () {
    try {
       const data = await client.DeleteSecurityRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteCertificate", async function () {
    try {
       const data = await client.DeleteCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeAccessRegionsByDestRegion", async function () {
    try {
       const data = await client.DescribeAccessRegionsByDestRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyGroupDomainConfig", async function () {
    try {
       const data = await client.ModifyGroupDomainConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeTCPListeners", async function () {
    try {
       const data = await client.DescribeTCPListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeRealServers", async function () {
    try {
       const data = await client.DescribeRealServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxyAndStatisticsListeners", async function () {
    try {
       const data = await client.DescribeProxyAndStatisticsListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateHTTPListener", async function () {
    try {
       const data = await client.CreateHTTPListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeUDPListeners", async function () {
    try {
       const data = await client.DescribeUDPListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyProxyConfiguration", async function () {
    try {
       const data = await client.ModifyProxyConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CloseProxyGroup", async function () {
    try {
       const data = await client.CloseProxyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyTCPListenerAttribute", async function () {
    try {
       const data = await client.ModifyTCPListenerAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeRealServerStatistics", async function () {
    try {
       const data = await client.DescribeRealServerStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeHTTPListeners", async function () {
    try {
       const data = await client.DescribeHTTPListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateProxyGroup", async function () {
    try {
       const data = await client.CreateProxyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateCertificate", async function () {
    try {
       const data = await client.CreateCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeCustomHeader", async function () {
    try {
       const data = await client.DescribeCustomHeader({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyProxiesAttribute", async function () {
    try {
       const data = await client.ModifyProxiesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DestroyProxies", async function () {
    try {
       const data = await client.DestroyProxies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateProxy", async function () {
    try {
       const data = await client.CreateProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteDomain", async function () {
    try {
       const data = await client.DeleteDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeSecurityPolicyDetail", async function () {
    try {
       const data = await client.DescribeSecurityPolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.RemoveRealServers", async function () {
    try {
       const data = await client.RemoveRealServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeSecurityRules", async function () {
    try {
       const data = await client.DescribeSecurityRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateSecurityPolicy", async function () {
    try {
       const data = await client.CreateSecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteRule", async function () {
    try {
       const data = await client.DeleteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateRule", async function () {
    try {
       const data = await client.CreateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyDomain", async function () {
    try {
       const data = await client.ModifyDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.OpenProxies", async function () {
    try {
       const data = await client.OpenProxies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyUDPListenerAttribute", async function () {
    try {
       const data = await client.ModifyUDPListenerAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxyGroupDetails", async function () {
    try {
       const data = await client.DescribeProxyGroupDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxies", async function () {
    try {
       const data = await client.DescribeProxies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteProxyGroup", async function () {
    try {
       const data = await client.DeleteProxyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyProxiesProject", async function () {
    try {
       const data = await client.ModifyProxiesProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.AddRealServers", async function () {
    try {
       const data = await client.AddRealServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateDomain", async function () {
    try {
       const data = await client.CreateDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeCertificateDetail", async function () {
    try {
       const data = await client.DescribeCertificateDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeRegionAndPrice", async function () {
    try {
       const data = await client.DescribeRegionAndPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeRealServersStatus", async function () {
    try {
       const data = await client.DescribeRealServersStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeRules", async function () {
    try {
       const data = await client.DescribeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeListenerRealServers", async function () {
    try {
       const data = await client.DescribeListenerRealServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.SetAuthentication", async function () {
    try {
       const data = await client.SetAuthentication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateHTTPSListener", async function () {
    try {
       const data = await client.CreateHTTPSListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CheckProxyCreate", async function () {
    try {
       const data = await client.CheckProxyCreate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.OpenProxyGroup", async function () {
    try {
       const data = await client.OpenProxyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeAccessRegions", async function () {
    try {
       const data = await client.DescribeAccessRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyRuleAttribute", async function () {
    try {
       const data = await client.ModifyRuleAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeGroupDomainConfig", async function () {
    try {
       const data = await client.DescribeGroupDomainConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyHTTPSListenerAttribute", async function () {
    try {
       const data = await client.ModifyHTTPSListenerAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeListenerStatistics", async function () {
    try {
       const data = await client.DescribeListenerStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DeleteListeners", async function () {
    try {
       const data = await client.DeleteListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxyStatistics", async function () {
    try {
       const data = await client.DescribeProxyStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeDomainErrorPageInfo", async function () {
    try {
       const data = await client.DescribeDomainErrorPageInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifyProxyGroupAttribute", async function () {
    try {
       const data = await client.ModifyProxyGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.InquiryPriceCreateProxy", async function () {
    try {
       const data = await client.InquiryPriceCreateProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.ModifySecurityRule", async function () {
    try {
       const data = await client.ModifySecurityRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CloseProxies", async function () {
    try {
       const data = await client.CloseProxies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeDomainErrorPageInfoByIds", async function () {
    try {
       const data = await client.DescribeDomainErrorPageInfoByIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeProxiesStatus", async function () {
    try {
       const data = await client.DescribeProxiesStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.CreateTCPListeners", async function () {
    try {
       const data = await client.CreateTCPListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.BindRuleRealServers", async function () {
    try {
       const data = await client.BindRuleRealServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gaap.v20180529.DescribeResourcesByTag", async function () {
    try {
       const data = await client.DescribeResourcesByTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
