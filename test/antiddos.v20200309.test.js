
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.antiddos.v20200309.Client({
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
describe("antiddos.v20200309.test.js", function () {

it("antiddos.v20200309.AssociateDDoSEipAddress", async function () {
    try {
       const data = await client.AssociateDDoSEipAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyDomainUsrName", async function () {
    try {
       const data = await client.ModifyDomainUsrName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListWaterPrintConfig", async function () {
    try {
       const data = await client.DescribeListWaterPrintConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteDDoSSpeedLimitConfig", async function () {
    try {
       const data = await client.DeleteDDoSSpeedLimitConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyDDoSSpeedLimitConfig", async function () {
    try {
       const data = await client.ModifyDDoSSpeedLimitConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeBizTrend", async function () {
    try {
       const data = await client.DescribeBizTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteDDoSGeoIPBlockConfig", async function () {
    try {
       const data = await client.DeleteDDoSGeoIPBlockConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyPacketFilterConfig", async function () {
    try {
       const data = await client.ModifyPacketFilterConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreatePacketFilterConfig", async function () {
    try {
       const data = await client.CreatePacketFilterConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListIPAlarmConfig", async function () {
    try {
       const data = await client.DescribeListIPAlarmConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListBGPIPInstances", async function () {
    try {
       const data = await client.DescribeListBGPIPInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeDefaultAlarmThreshold", async function () {
    try {
       const data = await client.DescribeDefaultAlarmThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListBlackWhiteIpList", async function () {
    try {
       const data = await client.DescribeListBlackWhiteIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListDDoSGeoIPBlockConfig", async function () {
    try {
       const data = await client.DescribeListDDoSGeoIPBlockConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DisassociateDDoSEipAddress", async function () {
    try {
       const data = await client.DisassociateDDoSEipAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateBoundIP", async function () {
    try {
       const data = await client.CreateBoundIP({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListSchedulingDomain", async function () {
    try {
       const data = await client.DescribeListSchedulingDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteWaterPrintKey", async function () {
    try {
       const data = await client.DeleteWaterPrintKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateDefaultAlarmThreshold", async function () {
    try {
       const data = await client.CreateDefaultAlarmThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateWaterPrintConfig", async function () {
    try {
       const data = await client.CreateWaterPrintConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeBlackWhiteIpList", async function () {
    try {
       const data = await client.DescribeBlackWhiteIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListDDoSAI", async function () {
    try {
       const data = await client.DescribeListDDoSAI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeCCTrend", async function () {
    try {
       const data = await client.DescribeCCTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateIPAlarmThresholdConfig", async function () {
    try {
       const data = await client.CreateIPAlarmThresholdConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeL7RulesBySSLCertId", async function () {
    try {
       const data = await client.DescribeL7RulesBySSLCertId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListPacketFilterConfig", async function () {
    try {
       const data = await client.DescribeListPacketFilterConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListDDoSSpeedLimitConfig", async function () {
    try {
       const data = await client.DescribeListDDoSSpeedLimitConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListProtectThresholdConfig", async function () {
    try {
       const data = await client.DescribeListProtectThresholdConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateDDoSSpeedLimitConfig", async function () {
    try {
       const data = await client.CreateDDoSSpeedLimitConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeBasicDeviceStatus", async function () {
    try {
       const data = await client.DescribeBasicDeviceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListBGPInstances", async function () {
    try {
       const data = await client.DescribeListBGPInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.AssociateDDoSEipLoadBalancer", async function () {
    try {
       const data = await client.AssociateDDoSEipLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateBlackWhiteIpList", async function () {
    try {
       const data = await client.CreateBlackWhiteIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyL7RulesEdge", async function () {
    try {
       const data = await client.ModifyL7RulesEdge({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeDDoSTrend", async function () {
    try {
       const data = await client.DescribeDDoSTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteBlackWhiteIpList", async function () {
    try {
       const data = await client.DeleteBlackWhiteIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateDDoSGeoIPBlockConfig", async function () {
    try {
       const data = await client.CreateDDoSGeoIPBlockConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteWaterPrintConfig", async function () {
    try {
       const data = await client.DeleteWaterPrintConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateDDoSAI", async function () {
    try {
       const data = await client.CreateDDoSAI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeletePacketFilterConfig", async function () {
    try {
       const data = await client.DeletePacketFilterConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.SwitchWaterPrintConfig", async function () {
    try {
       const data = await client.SwitchWaterPrintConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListProtocolBlockConfig", async function () {
    try {
       const data = await client.DescribeListProtocolBlockConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateSchedulingDomain", async function () {
    try {
       const data = await client.CreateSchedulingDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateWaterPrintKey", async function () {
    try {
       const data = await client.CreateWaterPrintKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateProtocolBlockConfig", async function () {
    try {
       const data = await client.CreateProtocolBlockConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateL7RuleCerts", async function () {
    try {
       const data = await client.CreateL7RuleCerts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyDDoSGeoIPBlockConfig", async function () {
    try {
       const data = await client.ModifyDDoSGeoIPBlockConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeListListener", async function () {
    try {
       const data = await client.DescribeListListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
