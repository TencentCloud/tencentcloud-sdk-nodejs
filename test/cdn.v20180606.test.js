
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cdn.v20180606.Client({
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
describe("cdn.v20180606.test.js", function () {

it("cdn.v20180606.CreateEdgePackTask", async function () {
    try {
       const data = await client.CreateEdgePackTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeIpStatus", async function () {
    try {
       const data = await client.DescribeIpStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeMapInfo", async function () {
    try {
       const data = await client.DescribeMapInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DeleteCdnDomain", async function () {
    try {
       const data = await client.DeleteCdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.VerifyDomainRecord", async function () {
    try {
       const data = await client.VerifyDomainRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListTopWafData", async function () {
    try {
       const data = await client.ListTopWafData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribePurgeTasks", async function () {
    try {
       const data = await client.DescribePurgeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DeleteScdnDomain", async function () {
    try {
       const data = await client.DeleteScdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribePayType", async function () {
    try {
       const data = await client.DescribePayType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeDomainsConfig", async function () {
    try {
       const data = await client.DescribeDomainsConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.AddCdnDomain", async function () {
    try {
       const data = await client.AddCdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.GetDisableRecords", async function () {
    try {
       const data = await client.GetDisableRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeIpVisit", async function () {
    try {
       const data = await client.DescribeIpVisit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeCdnData", async function () {
    try {
       const data = await client.DescribeCdnData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DisableCaches", async function () {
    try {
       const data = await client.DisableCaches({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeDomains", async function () {
    try {
       const data = await client.DescribeDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.CreateVerifyRecord", async function () {
    try {
       const data = await client.CreateVerifyRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeCcData", async function () {
    try {
       const data = await client.DescribeCcData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ManageClsTopicDomains", async function () {
    try {
       const data = await client.ManageClsTopicDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.CreateDiagnoseUrl", async function () {
    try {
       const data = await client.CreateDiagnoseUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.StartCdnDomain", async function () {
    try {
       const data = await client.StartCdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DuplicateDomainConfig", async function () {
    try {
       const data = await client.DuplicateDomainConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.StopScdnDomain", async function () {
    try {
       const data = await client.StopScdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeDiagnoseReport", async function () {
    try {
       const data = await client.DescribeDiagnoseReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeDDoSData", async function () {
    try {
       const data = await client.DescribeDDoSData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListScdnTopBotData", async function () {
    try {
       const data = await client.ListScdnTopBotData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListDiagnoseReport", async function () {
    try {
       const data = await client.ListDiagnoseReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListTopCcData", async function () {
    try {
       const data = await client.ListTopCcData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeScdnIpStrategy", async function () {
    try {
       const data = await client.DescribeScdnIpStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribePurgeQuota", async function () {
    try {
       const data = await client.DescribePurgeQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.UpdateScdnDomain", async function () {
    try {
       const data = await client.UpdateScdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListScdnLogTasks", async function () {
    try {
       const data = await client.ListScdnLogTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListTopBotData", async function () {
    try {
       const data = await client.ListTopBotData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.CreateScdnLogTask", async function () {
    try {
       const data = await client.CreateScdnLogTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeImageConfig", async function () {
    try {
       const data = await client.DescribeImageConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeScdnTopData", async function () {
    try {
       const data = await client.DescribeScdnTopData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.SearchClsLog", async function () {
    try {
       const data = await client.SearchClsLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.StopCdnDomain", async function () {
    try {
       const data = await client.StopCdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListTopData", async function () {
    try {
       const data = await client.ListTopData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeOriginData", async function () {
    try {
       const data = await client.DescribeOriginData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeCdnIp", async function () {
    try {
       const data = await client.DescribeCdnIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.StartScdnDomain", async function () {
    try {
       const data = await client.StartScdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.PurgePathCache", async function () {
    try {
       const data = await client.PurgePathCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeUrlViolations", async function () {
    try {
       const data = await client.DescribeUrlViolations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeWafData", async function () {
    try {
       const data = await client.DescribeWafData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListTopDDoSData", async function () {
    try {
       const data = await client.ListTopDDoSData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.PurgeUrlsCache", async function () {
    try {
       const data = await client.PurgeUrlsCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeTrafficPackages", async function () {
    try {
       const data = await client.DescribeTrafficPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.UpdateDomainConfig", async function () {
    try {
       const data = await client.UpdateDomainConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeCdnDomainLogs", async function () {
    try {
       const data = await client.DescribeCdnDomainLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribePushTasks", async function () {
    try {
       const data = await client.DescribePushTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeCertDomains", async function () {
    try {
       const data = await client.DescribeCertDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeEventLogData", async function () {
    try {
       const data = await client.DescribeEventLogData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.CreateClsLogTopic", async function () {
    try {
       const data = await client.CreateClsLogTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.PushUrlsCache", async function () {
    try {
       const data = await client.PushUrlsCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.CreateScdnDomain", async function () {
    try {
       const data = await client.CreateScdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.UpdateImageConfig", async function () {
    try {
       const data = await client.UpdateImageConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ModifyPurgeFetchTaskStatus", async function () {
    try {
       const data = await client.ModifyPurgeFetchTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.CreateScdnFailedLogTask", async function () {
    try {
       const data = await client.CreateScdnFailedLogTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DisableClsLogTopic", async function () {
    try {
       const data = await client.DisableClsLogTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListClsTopicDomains", async function () {
    try {
       const data = await client.ListClsTopicDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListClsLogTopics", async function () {
    try {
       const data = await client.ListClsLogTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeScdnBotRecords", async function () {
    try {
       const data = await client.DescribeScdnBotRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeScdnConfig", async function () {
    try {
       const data = await client.DescribeScdnConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DeleteClsLogTopic", async function () {
    try {
       const data = await client.DeleteClsLogTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeCdnOriginIp", async function () {
    try {
       const data = await client.DescribeCdnOriginIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeBillingData", async function () {
    try {
       const data = await client.DescribeBillingData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribePushQuota", async function () {
    try {
       const data = await client.DescribePushQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.EnableClsLogTopic", async function () {
    try {
       const data = await client.EnableClsLogTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListScdnDomains", async function () {
    try {
       const data = await client.ListScdnDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeReportData", async function () {
    try {
       const data = await client.DescribeReportData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeDistrictIspData", async function () {
    try {
       const data = await client.DescribeDistrictIspData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeScdnBotData", async function () {
    try {
       const data = await client.DescribeScdnBotData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.UpdatePayType", async function () {
    try {
       const data = await client.UpdatePayType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.DescribeTopData", async function () {
    try {
       const data = await client.DescribeTopData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.EnableCaches", async function () {
    try {
       const data = await client.EnableCaches({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdn.v20180606.ListTopClsLogData", async function () {
    try {
       const data = await client.ListTopClsLogData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
