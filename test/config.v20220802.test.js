
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.config.v20220802.Client({
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
describe("config.v20220802.test.js", function () {

it("config.v20220802.AddConfigRule", async function () {
    try {
       const data = await client.AddConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeCompliancePack", async function () {
    try {
       const data = await client.DescribeCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.StartAggregateConfigRuleEvaluation", async function () {
    try {
       const data = await client.StartAggregateConfigRuleEvaluation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateAggregateConfigDeliver", async function () {
    try {
       const data = await client.UpdateAggregateConfigDeliver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListDiscoveredResources", async function () {
    try {
       const data = await client.ListDiscoveredResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListAggregators", async function () {
    try {
       const data = await client.ListAggregators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListConfigRules", async function () {
    try {
       const data = await client.ListConfigRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.OpenConfigRule", async function () {
    try {
       const data = await client.OpenConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.CreateAggregator", async function () {
    try {
       const data = await client.CreateAggregator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.OpenConfigRecorder", async function () {
    try {
       const data = await client.OpenConfigRecorder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.StartConfigRuleEvaluation", async function () {
    try {
       const data = await client.StartConfigRuleEvaluation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DeleteAlarmPolicy", async function () {
    try {
       const data = await client.DeleteAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.AddAggregateConfigRule", async function () {
    try {
       const data = await client.AddAggregateConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListAggregateDiscoveredResources", async function () {
    try {
       const data = await client.ListAggregateDiscoveredResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.CreateRemediation", async function () {
    try {
       const data = await client.CreateRemediation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListSystemRules", async function () {
    try {
       const data = await client.ListSystemRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DeleteConfigRule", async function () {
    try {
       const data = await client.DeleteConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListResourceTypes", async function () {
    try {
       const data = await client.ListResourceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateRemediation", async function () {
    try {
       const data = await client.UpdateRemediation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateCompliancePack", async function () {
    try {
       const data = await client.UpdateCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.StartRemediation", async function () {
    try {
       const data = await client.StartRemediation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeConfigDeliver", async function () {
    try {
       const data = await client.DescribeConfigDeliver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListRemediations", async function () {
    try {
       const data = await client.ListRemediations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateConfigDeliver", async function () {
    try {
       const data = await client.UpdateConfigDeliver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DeleteAggregateCompliancePack", async function () {
    try {
       const data = await client.DeleteAggregateCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListAggregateCompliancePacks", async function () {
    try {
       const data = await client.ListAggregateCompliancePacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeAggregateConfigRule", async function () {
    try {
       const data = await client.DescribeAggregateConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeConfigRecorder", async function () {
    try {
       const data = await client.DescribeConfigRecorder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListAlarmPolicy", async function () {
    try {
       const data = await client.ListAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateAggregateConfigRule", async function () {
    try {
       const data = await client.UpdateAggregateConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateCompliancePackStatus", async function () {
    try {
       const data = await client.UpdateCompliancePackStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.AddAlarmPolicy", async function () {
    try {
       const data = await client.AddAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeAggregateCompliancePack", async function () {
    try {
       const data = await client.DescribeAggregateCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.OpenAggregateConfigRule", async function () {
    try {
       const data = await client.OpenAggregateConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeAggregateConfigDeliver", async function () {
    try {
       const data = await client.DescribeAggregateConfigDeliver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DetachConfigRuleToCompliancePack", async function () {
    try {
       const data = await client.DetachConfigRuleToCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeConfigRule", async function () {
    try {
       const data = await client.DescribeConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListAggregateConfigRuleEvaluationResults", async function () {
    try {
       const data = await client.ListAggregateConfigRuleEvaluationResults({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.AddCompliancePack", async function () {
    try {
       const data = await client.AddCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.CloseConfigRecorder", async function () {
    try {
       const data = await client.CloseConfigRecorder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeDiscoveredResource", async function () {
    try {
       const data = await client.DescribeDiscoveredResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateAlarmPolicy", async function () {
    try {
       const data = await client.UpdateAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeAggregator", async function () {
    try {
       const data = await client.DescribeAggregator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateConfigRecorder", async function () {
    try {
       const data = await client.UpdateConfigRecorder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DeleteRemediations", async function () {
    try {
       const data = await client.DeleteRemediations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.PutEvaluations", async function () {
    try {
       const data = await client.PutEvaluations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateAggregateCompliancePack", async function () {
    try {
       const data = await client.UpdateAggregateCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeSystemCompliancePack", async function () {
    try {
       const data = await client.DescribeSystemCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateConfigRule", async function () {
    try {
       const data = await client.UpdateConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeSystemRule", async function () {
    try {
       const data = await client.DescribeSystemRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.CloseAggregateConfigRule", async function () {
    try {
       const data = await client.CloseAggregateConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DetachAggregateConfigRuleToCompliancePack", async function () {
    try {
       const data = await client.DetachAggregateConfigRuleToCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListRemediationExecutions", async function () {
    try {
       const data = await client.ListRemediationExecutions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListAggregateConfigRules", async function () {
    try {
       const data = await client.ListAggregateConfigRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListSystemCompliancePacks", async function () {
    try {
       const data = await client.ListSystemCompliancePacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListConfigRuleEvaluationResults", async function () {
    try {
       const data = await client.ListConfigRuleEvaluationResults({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.AddAggregateCompliancePack", async function () {
    try {
       const data = await client.AddAggregateCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DescribeAggregateDiscoveredResource", async function () {
    try {
       const data = await client.DescribeAggregateDiscoveredResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.UpdateAggregateCompliancePackStatus", async function () {
    try {
       const data = await client.UpdateAggregateCompliancePackStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.CloseConfigRule", async function () {
    try {
       const data = await client.CloseConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.ListCompliancePacks", async function () {
    try {
       const data = await client.ListCompliancePacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DeleteCompliancePack", async function () {
    try {
       const data = await client.DeleteCompliancePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("config.v20220802.DeleteAggregateConfigRule", async function () {
    try {
       const data = await client.DeleteAggregateConfigRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
