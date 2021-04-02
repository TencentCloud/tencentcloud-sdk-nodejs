
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dayu.v20180709.Client({
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
describe("dayu.v20180709.test.js", function () {

it("dayu.v20180709.ModifyCCIpAllowDeny", async function () {
    try {
       const data = await client.ModifyCCIpAllowDeny({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSCount", async function () {
    try {
       const data = await client.DescribeDDoSCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteNewL4Rules", async function () {
    try {
       const data = await client.DeleteNewL4Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeRuleSets", async function () {
    try {
       const data = await client.DescribeRuleSets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateNewL7RulesUpload", async function () {
    try {
       const data = await client.CreateNewL7RulesUpload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateL7CCRule", async function () {
    try {
       const data = await client.CreateL7CCRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateCCSelfDefinePolicy", async function () {
    try {
       const data = await client.CreateCCSelfDefinePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateNewL7Rules", async function () {
    try {
       const data = await client.CreateNewL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCPolicySwitch", async function () {
    try {
       const data = await client.ModifyCCPolicySwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeNewL7RulesErrHealth", async function () {
    try {
       const data = await client.DescribeNewL7RulesErrHealth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateDDoSPolicyCase", async function () {
    try {
       const data = await client.CreateDDoSPolicyCase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSNetTrend", async function () {
    try {
       const data = await client.DescribeDDoSNetTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSPolicyName", async function () {
    try {
       const data = await client.ModifyDDoSPolicyName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyL4Health", async function () {
    try {
       const data = await client.ModifyL4Health({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSUsedStatis", async function () {
    try {
       const data = await client.DescribeDDoSUsedStatis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSDefendStatus", async function () {
    try {
       const data = await client.DescribeDDoSDefendStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeCCAlarmThreshold", async function () {
    try {
       const data = await client.DescribeCCAlarmThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribePcap", async function () {
    try {
       const data = await client.DescribePcap({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeNewL4Rules", async function () {
    try {
       const data = await client.DescribeNewL4Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyElasticLimit", async function () {
    try {
       const data = await client.ModifyElasticLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSNetIpLog", async function () {
    try {
       const data = await client.DescribeDDoSNetIpLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCAlarmThreshold", async function () {
    try {
       const data = await client.ModifyCCAlarmThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSEvList", async function () {
    try {
       const data = await client.DescribeDDoSEvList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeIpBlockList", async function () {
    try {
       const data = await client.DescribeIpBlockList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeL4HealthConfig", async function () {
    try {
       const data = await client.DescribeL4HealthConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeSecIndex", async function () {
    try {
       const data = await client.DescribeSecIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeSchedulingDomainList", async function () {
    try {
       const data = await client.DescribeSchedulingDomainList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeCCFrequencyRules", async function () {
    try {
       const data = await client.DescribeCCFrequencyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteDDoSPolicyCase", async function () {
    try {
       const data = await client.DeleteDDoSPolicyCase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteL7Rules", async function () {
    try {
       const data = await client.DeleteL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateNewL4Rules", async function () {
    try {
       const data = await client.CreateNewL4Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateL4Rules", async function () {
    try {
       const data = await client.CreateL4Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeBaradData", async function () {
    try {
       const data = await client.DescribeBaradData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCFrequencyRules", async function () {
    try {
       const data = await client.ModifyCCFrequencyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribleL7Rules", async function () {
    try {
       const data = await client.DescribleL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateDDoSPolicy", async function () {
    try {
       const data = await client.CreateDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyResBindDDoSPolicy", async function () {
    try {
       const data = await client.ModifyResBindDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyNetReturnSwitch", async function () {
    try {
       const data = await client.ModifyNetReturnSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeNewL4RulesErrHealth", async function () {
    try {
       const data = await client.DescribeNewL4RulesErrHealth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeSourceIpSegment", async function () {
    try {
       const data = await client.DescribeSourceIpSegment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCUrlAllow", async function () {
    try {
       const data = await client.ModifyCCUrlAllow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeBasicDeviceThreshold", async function () {
    try {
       const data = await client.DescribeBasicDeviceThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateUnblockIp", async function () {
    try {
       const data = await client.CreateUnblockIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteDDoSPolicy", async function () {
    try {
       const data = await client.DeleteDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyNewL4Rule", async function () {
    try {
       const data = await client.ModifyNewL4Rule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeResourceList", async function () {
    try {
       const data = await client.DescribeResourceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeBizHttpStatus", async function () {
    try {
       const data = await client.DescribeBizHttpStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteCCSelfDefinePolicy", async function () {
    try {
       const data = await client.DeleteCCSelfDefinePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribePolicyCase", async function () {
    try {
       const data = await client.DescribePolicyCase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeActionLog", async function () {
    try {
       const data = await client.DescribeActionLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyL4Rules", async function () {
    try {
       const data = await client.ModifyL4Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSIpLog", async function () {
    try {
       const data = await client.DescribeDDoSIpLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSAlarmThreshold", async function () {
    try {
       const data = await client.DescribeDDoSAlarmThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribePackIndex", async function () {
    try {
       const data = await client.DescribePackIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribleNewL7Rules", async function () {
    try {
       const data = await client.DescribleNewL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateBasicDDoSAlarmThreshold", async function () {
    try {
       const data = await client.CreateBasicDDoSAlarmThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSThreshold", async function () {
    try {
       const data = await client.ModifyDDoSThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateL7RuleCert", async function () {
    try {
       const data = await client.CreateL7RuleCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSAIStatus", async function () {
    try {
       const data = await client.ModifyDDoSAIStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeCCIpAllowDeny", async function () {
    try {
       const data = await client.DescribeCCIpAllowDeny({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateL4HealthConfig", async function () {
    try {
       const data = await client.CreateL4HealthConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSNetCount", async function () {
    try {
       const data = await client.DescribeDDoSNetCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateBoundIP", async function () {
    try {
       const data = await client.CreateBoundIP({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSPolicy", async function () {
    try {
       const data = await client.ModifyDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSPolicyCase", async function () {
    try {
       const data = await client.ModifyDDoSPolicyCase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSAlarmThreshold", async function () {
    try {
       const data = await client.ModifyDDoSAlarmThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSNetEvInfo", async function () {
    try {
       const data = await client.DescribeDDoSNetEvInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteCCFrequencyRules", async function () {
    try {
       const data = await client.DeleteCCFrequencyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyL4KeepTime", async function () {
    try {
       const data = await client.ModifyL4KeepTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeL4RulesErrHealth", async function () {
    try {
       const data = await client.DescribeL4RulesErrHealth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateL7RulesUpload", async function () {
    try {
       const data = await client.CreateL7RulesUpload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSPolicy", async function () {
    try {
       const data = await client.DescribeDDoSPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeTransmitStatis", async function () {
    try {
       const data = await client.DescribeTransmitStatis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCLevel", async function () {
    try {
       const data = await client.ModifyCCLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSDefendStatus", async function () {
    try {
       const data = await client.ModifyDDoSDefendStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeUnBlockStatis", async function () {
    try {
       const data = await client.DescribeUnBlockStatis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSTrend", async function () {
    try {
       const data = await client.DescribeDDoSTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateNetReturn", async function () {
    try {
       const data = await client.CreateNetReturn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSSwitch", async function () {
    try {
       const data = await client.ModifyDDoSSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSLevel", async function () {
    try {
       const data = await client.ModifyDDoSLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSAttackSource", async function () {
    try {
       const data = await client.DescribeDDoSAttackSource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteNewL7Rules", async function () {
    try {
       const data = await client.DeleteNewL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeCCEvList", async function () {
    try {
       const data = await client.DescribeCCEvList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyDDoSWaterKey", async function () {
    try {
       const data = await client.ModifyDDoSWaterKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeInsurePacks", async function () {
    try {
       const data = await client.DescribeInsurePacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DeleteL4Rules", async function () {
    try {
       const data = await client.DeleteL4Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSNetEvList", async function () {
    try {
       const data = await client.DescribeDDoSNetEvList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCHostProtection", async function () {
    try {
       const data = await client.ModifyCCHostProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeBizTrend", async function () {
    try {
       const data = await client.DescribeBizTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribleRegionCount", async function () {
    try {
       const data = await client.DescribleRegionCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateL7Rules", async function () {
    try {
       const data = await client.CreateL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeIpUnBlockList", async function () {
    try {
       const data = await client.DescribeIpUnBlockList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeIPProductInfo", async function () {
    try {
       const data = await client.DescribeIPProductInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeCCSelfDefinePolicy", async function () {
    try {
       const data = await client.DescribeCCSelfDefinePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCFrequencyRulesStatus", async function () {
    try {
       const data = await client.ModifyCCFrequencyRulesStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCThreshold", async function () {
    try {
       const data = await client.ModifyCCThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribleL4Rules", async function () {
    try {
       const data = await client.DescribleL4Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyNewDomainRules", async function () {
    try {
       const data = await client.ModifyNewDomainRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeCCUrlAllow", async function () {
    try {
       const data = await client.DescribeCCUrlAllow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeL7HealthConfig", async function () {
    try {
       const data = await client.DescribeL7HealthConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeCCTrend", async function () {
    try {
       const data = await client.DescribeCCTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateCCFrequencyRules", async function () {
    try {
       const data = await client.CreateCCFrequencyRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyL7Rules", async function () {
    try {
       const data = await client.ModifyL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeBasicCCThreshold", async function () {
    try {
       const data = await client.DescribeBasicCCThreshold({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateL7HealthConfig", async function () {
    try {
       const data = await client.CreateL7HealthConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeResIpList", async function () {
    try {
       const data = await client.DescribeResIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.CreateInstanceName", async function () {
    try {
       const data = await client.CreateInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeBGPIPL7RuleMaxCnt", async function () {
    try {
       const data = await client.DescribeBGPIPL7RuleMaxCnt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyResourceRenewFlag", async function () {
    try {
       const data = await client.ModifyResourceRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.ModifyCCSelfDefinePolicy", async function () {
    try {
       const data = await client.ModifyCCSelfDefinePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSEvInfo", async function () {
    try {
       const data = await client.DescribeDDoSEvInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dayu.v20180709.DescribeDDoSAttackIPRegionMap", async function () {
    try {
       const data = await client.DescribeDDoSAttackIPRegionMap({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
