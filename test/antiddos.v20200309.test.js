
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

it("antiddos.v20200309.ModifyCCLevelPolicy", async function () {
    try {
       const data = await client.ModifyCCLevelPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.AssociateDDoSEipAddress", async function () {
    try {
       const data = await client.AssociateDDoSEipAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyDDoSThreshold", async function () {
    try {
       const data = await client.ModifyDDoSThreshold({})
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

it("antiddos.v20200309.ModifyNewDomainRules", async function () {
    try {
       const data = await client.ModifyNewDomainRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateCcBlackWhiteIpList", async function () {
    try {
       const data = await client.CreateCcBlackWhiteIpList({})
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

it("antiddos.v20200309.ModifyDomainUsrName", async function () {
    try {
       const data = await client.ModifyDomainUsrName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeCCPrecisionPlyList", async function () {
    try {
       const data = await client.DescribeCCPrecisionPlyList({})
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

it("antiddos.v20200309.CreatePacketFilterConfig", async function () {
    try {
       const data = await client.CreatePacketFilterConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteCCPrecisionPolicy", async function () {
    try {
       const data = await client.DeleteCCPrecisionPolicy({})
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

it("antiddos.v20200309.DescribeListIPAlarmConfig", async function () {
    try {
       const data = await client.DescribeListIPAlarmConfig({})
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

it("antiddos.v20200309.DeleteDDoSBlackWhiteIpList", async function () {
    try {
       const data = await client.DeleteDDoSBlackWhiteIpList({})
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

it("antiddos.v20200309.DeleteCCThresholdPolicy", async function () {
    try {
       const data = await client.DeleteCCThresholdPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyCCReqLimitPolicy", async function () {
    try {
       const data = await client.ModifyCCReqLimitPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeCcBlackWhiteIpList", async function () {
    try {
       const data = await client.DescribeCcBlackWhiteIpList({})
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

it("antiddos.v20200309.DescribeCCLevelPolicy", async function () {
    try {
       const data = await client.DescribeCCLevelPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyDDoSLevel", async function () {
    try {
       const data = await client.ModifyDDoSLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyCCThresholdPolicy", async function () {
    try {
       const data = await client.ModifyCCThresholdPolicy({})
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

it("antiddos.v20200309.ModifyCcBlackWhiteIpList", async function () {
    try {
       const data = await client.ModifyCcBlackWhiteIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteCcGeoIPBlockConfig", async function () {
    try {
       const data = await client.DeleteCcGeoIPBlockConfig({})
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

it("antiddos.v20200309.DescribeCCLevelList", async function () {
    try {
       const data = await client.DescribeCCLevelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyDDoSBlackWhiteIpList", async function () {
    try {
       const data = await client.ModifyDDoSBlackWhiteIpList({})
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

it("antiddos.v20200309.DescribeCCReqLimitPolicyList", async function () {
    try {
       const data = await client.DescribeCCReqLimitPolicyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateDDoSBlackWhiteIpList", async function () {
    try {
       const data = await client.CreateDDoSBlackWhiteIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeCCThresholdList", async function () {
    try {
       const data = await client.DescribeCCThresholdList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.ModifyCCPrecisionPolicy", async function () {
    try {
       const data = await client.ModifyCCPrecisionPolicy({})
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

it("antiddos.v20200309.CreateIPAlarmThresholdConfig", async function () {
    try {
       const data = await client.CreateIPAlarmThresholdConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteCCLevelPolicy", async function () {
    try {
       const data = await client.DeleteCCLevelPolicy({})
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

it("antiddos.v20200309.DeletePortAclConfig", async function () {
    try {
       const data = await client.DeletePortAclConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DeleteCcBlackWhiteIpList", async function () {
    try {
       const data = await client.DeleteCcBlackWhiteIpList({})
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

it("antiddos.v20200309.CreatePortAclConfig", async function () {
    try {
       const data = await client.CreatePortAclConfig({})
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

it("antiddos.v20200309.CreateDDoSConnectLimit", async function () {
    try {
       const data = await client.CreateDDoSConnectLimit({})
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

it("antiddos.v20200309.ModifyPacketFilterConfig", async function () {
    try {
       const data = await client.ModifyPacketFilterConfig({})
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

it("antiddos.v20200309.DescribeListDDoSGeoIPBlockConfig", async function () {
    try {
       const data = await client.DescribeListDDoSGeoIPBlockConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateCCPrecisionPolicy", async function () {
    try {
       const data = await client.CreateCCPrecisionPolicy({})
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

it("antiddos.v20200309.DescribeCcGeoIPBlockConfigList", async function () {
    try {
       const data = await client.DescribeCcGeoIPBlockConfigList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateCCReqLimitPolicy", async function () {
    try {
       const data = await client.CreateCCReqLimitPolicy({})
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

it("antiddos.v20200309.DescribeDDoSBlackWhiteIpList", async function () {
    try {
       const data = await client.DescribeDDoSBlackWhiteIpList({})
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

it("antiddos.v20200309.CreatePortAclConfigList", async function () {
    try {
       const data = await client.CreatePortAclConfigList({})
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

it("antiddos.v20200309.DescribeListPortAclList", async function () {
    try {
       const data = await client.DescribeListPortAclList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.DescribeDDoSConnectLimitList", async function () {
    try {
       const data = await client.DescribeDDoSConnectLimitList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20200309.CreateCcGeoIPBlockConfig", async function () {
    try {
       const data = await client.CreateCcGeoIPBlockConfig({})
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

it("antiddos.v20200309.ModifyPortAclConfig", async function () {
    try {
       const data = await client.ModifyPortAclConfig({})
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

it("antiddos.v20200309.DeleteCCRequestLimitPolicy", async function () {
    try {
       const data = await client.DeleteCCRequestLimitPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
