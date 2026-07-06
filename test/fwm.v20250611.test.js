
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.fwm.v20250611.Client({
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
describe("fwm.v20250611.test.js", function () {

it("fwm.v20250611.ModifyRuleGroup", async function () {
    try {
       const data = await client.ModifyRuleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyNatAclRuleSequence", async function () {
    try {
       const data = await client.ModifyNatAclRuleSequence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeStrategyAccounts", async function () {
    try {
       const data = await client.DescribeStrategyAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribePolicyRiskAccountProductStats", async function () {
    try {
       const data = await client.DescribePolicyRiskAccountProductStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateNatAclRuleGroup", async function () {
    try {
       const data = await client.CreateNatAclRuleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifySecurityGroupRule", async function () {
    try {
       const data = await client.ModifySecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeStrategyDispatchStatus", async function () {
    try {
       const data = await client.DescribeStrategyDispatchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeRiskAnalysisDetails", async function () {
    try {
       const data = await client.DescribeRiskAnalysisDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateSecurityGroupRule", async function () {
    try {
       const data = await client.CreateSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DeleteNatAclRule", async function () {
    try {
       const data = await client.DeleteNatAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeRiskList", async function () {
    try {
       const data = await client.DescribeRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateVpcAclRule", async function () {
    try {
       const data = await client.CreateVpcAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateAnalyzePolicyTask", async function () {
    try {
       const data = await client.CreateAnalyzePolicyTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateStrategy", async function () {
    try {
       const data = await client.CreateStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DispatchStrategy", async function () {
    try {
       const data = await client.DispatchStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateSecurityGroupRuleGroup", async function () {
    try {
       const data = await client.CreateSecurityGroupRuleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyEdgeAclRuleSequence", async function () {
    try {
       const data = await client.ModifyEdgeAclRuleSequence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeSecurityGroupRules", async function () {
    try {
       const data = await client.DescribeSecurityGroupRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DeleteStrategy", async function () {
    try {
       const data = await client.DeleteStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeVpcAclRules", async function () {
    try {
       const data = await client.DescribeVpcAclRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeRiskCategoryStats", async function () {
    try {
       const data = await client.DescribeRiskCategoryStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeOrganMembers", async function () {
    try {
       const data = await client.DescribeOrganMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyStrategySequence", async function () {
    try {
       const data = await client.ModifyStrategySequence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.IgnorePolicyRisk", async function () {
    try {
       const data = await client.IgnorePolicyRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DeleteVpcAclRule", async function () {
    try {
       const data = await client.DeleteVpcAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DeleteEdgeAclRule", async function () {
    try {
       const data = await client.DeleteEdgeAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyVpcAclRuleSequence", async function () {
    try {
       const data = await client.ModifyVpcAclRuleSequence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DeleteRuleGroup", async function () {
    try {
       const data = await client.DeleteRuleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateNatAclRule", async function () {
    try {
       const data = await client.CreateNatAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeSecurityGroupRule", async function () {
    try {
       const data = await client.DescribeSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeStrategies", async function () {
    try {
       const data = await client.DescribeStrategies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeNatAclRules", async function () {
    try {
       const data = await client.DescribeNatAclRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateEdgeAclRule", async function () {
    try {
       const data = await client.CreateEdgeAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateVpcAclRuleGroup", async function () {
    try {
       const data = await client.CreateVpcAclRuleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeStrategy", async function () {
    try {
       const data = await client.DescribeStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CancelIgnorePolicyRisk", async function () {
    try {
       const data = await client.CancelIgnorePolicyRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeEdgeAclRules", async function () {
    try {
       const data = await client.DescribeEdgeAclRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DescribeOrganSummary", async function () {
    try {
       const data = await client.DescribeOrganSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyStrategy", async function () {
    try {
       const data = await client.ModifyStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.CreateEdgeAclRuleGroup", async function () {
    try {
       const data = await client.CreateEdgeAclRuleGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.DeleteSecurityGroupRule", async function () {
    try {
       const data = await client.DeleteSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyEdgeAclRule", async function () {
    try {
       const data = await client.ModifyEdgeAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyVpcAclRule", async function () {
    try {
       const data = await client.ModifyVpcAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fwm.v20250611.ModifyNatAclRule", async function () {
    try {
       const data = await client.ModifyNatAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
