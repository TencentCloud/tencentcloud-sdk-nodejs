
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.alb.v20251030.Client({
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
describe("alb.v20251030.test.js", function () {

it("alb.v20251030.AddTargetsToTargetGroup", async function () {
    try {
       const data = await client.AddTargetsToTargetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.SetLoadBalancerSecurityGroups", async function () {
    try {
       const data = await client.SetLoadBalancerSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.CreateSecurityPolicy", async function () {
    try {
       const data = await client.CreateSecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DeleteSecurityPolicy", async function () {
    try {
       const data = await client.DeleteSecurityPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.NotifyUnbindTarget", async function () {
    try {
       const data = await client.NotifyUnbindTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DeleteListener", async function () {
    try {
       const data = await client.DeleteListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DeleteLoadBalancers", async function () {
    try {
       const data = await client.DeleteLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyListenerAttributes", async function () {
    try {
       const data = await client.ModifyListenerAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeSystemSecurityPolicies", async function () {
    try {
       const data = await client.DescribeSystemSecurityPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyTargetGroupAttributes", async function () {
    try {
       const data = await client.ModifyTargetGroupAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyLoadBalancerAttributes", async function () {
    try {
       const data = await client.ModifyLoadBalancerAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyRulesAttributes", async function () {
    try {
       const data = await client.ModifyRulesAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DeleteTargetGroups", async function () {
    try {
       const data = await client.DeleteTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.CreateRules", async function () {
    try {
       const data = await client.CreateRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeAsyncJobs", async function () {
    try {
       const data = await client.DescribeAsyncJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeHealthCheckTemplates", async function () {
    try {
       const data = await client.DescribeHealthCheckTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DisassociateBandwidthPackageFromLoadBalancer", async function () {
    try {
       const data = await client.DisassociateBandwidthPackageFromLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.RemoveTargetsFromTargetGroup", async function () {
    try {
       const data = await client.RemoveTargetsFromTargetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeTargetGroupTargets", async function () {
    try {
       const data = await client.DescribeTargetGroupTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeLoadBalancers", async function () {
    try {
       const data = await client.DescribeLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeListeners", async function () {
    try {
       const data = await client.DescribeListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeSecurityPolicyRelations", async function () {
    try {
       const data = await client.DescribeSecurityPolicyRelations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.CreateListener", async function () {
    try {
       const data = await client.CreateListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyLoadBalancerModificationProtection", async function () {
    try {
       const data = await client.ModifyLoadBalancerModificationProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DeleteRules", async function () {
    try {
       const data = await client.DeleteRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeSecurityPolicies", async function () {
    try {
       const data = await client.DescribeSecurityPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeListenerDetail", async function () {
    try {
       const data = await client.DescribeListenerDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeLoadBalancerDetail", async function () {
    try {
       const data = await client.DescribeLoadBalancerDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.InquirePriceCreateLoadBalancer", async function () {
    try {
       const data = await client.InquirePriceCreateLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeListenerHealthStatus", async function () {
    try {
       const data = await client.DescribeListenerHealthStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeSecurityPolicyCapabilities", async function () {
    try {
       const data = await client.DescribeSecurityPolicyCapabilities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.CreateTargetGroup", async function () {
    try {
       const data = await client.CreateTargetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyHealthCheckTemplate", async function () {
    try {
       const data = await client.ModifyHealthCheckTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyTargetsInTargetGroup", async function () {
    try {
       const data = await client.ModifyTargetsInTargetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeTargetGroups", async function () {
    try {
       const data = await client.DescribeTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifySecurityPolicyAttributes", async function () {
    try {
       const data = await client.ModifySecurityPolicyAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.AssociateBandwidthPackageWithLoadBalancer", async function () {
    try {
       const data = await client.AssociateBandwidthPackageWithLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeTargetGroupsByTarget", async function () {
    try {
       const data = await client.DescribeTargetGroupsByTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeRules", async function () {
    try {
       const data = await client.DescribeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DeleteHealthCheckTemplates", async function () {
    try {
       const data = await client.DeleteHealthCheckTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.CreateHealthCheckTemplate", async function () {
    try {
       const data = await client.CreateHealthCheckTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeListenerCertificates", async function () {
    try {
       const data = await client.DescribeListenerCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DescribeQuota", async function () {
    try {
       const data = await client.DescribeQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.DisassociateListenerAdditionalCertificates", async function () {
    try {
       const data = await client.DisassociateListenerAdditionalCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.CreateLoadBalancer", async function () {
    try {
       const data = await client.CreateLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.AssociateListenerAdditionalCertificates", async function () {
    try {
       const data = await client.AssociateListenerAdditionalCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("alb.v20251030.ModifyLoadBalancerAddressType", async function () {
    try {
       const data = await client.ModifyLoadBalancerAddressType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
