
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.clb.v20180317.Client({
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
describe("clb.v20180317.test.js", function () {

it("clb.v20180317.RegisterTargets", async function () {
    try {
       const data = await client.RegisterTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyDomainAttributes", async function () {
    try {
       const data = await client.ModifyDomainAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeLoadBalancerListByCertId", async function () {
    try {
       const data = await client.DescribeLoadBalancerListByCertId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeClassicalLBListeners", async function () {
    try {
       const data = await client.DescribeClassicalLBListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.RegisterTargetsWithClassicalLB", async function () {
    try {
       const data = await client.RegisterTargetsWithClassicalLB({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeCustomizedConfigAssociateList", async function () {
    try {
       const data = await client.DescribeCustomizedConfigAssociateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CreateTopic", async function () {
    try {
       const data = await client.CreateTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeleteLoadBalancerSnatIps", async function () {
    try {
       const data = await client.DeleteLoadBalancerSnatIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeleteListener", async function () {
    try {
       const data = await client.DeleteListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.SetSecurityGroupForLoadbalancers", async function () {
    try {
       const data = await client.SetSecurityGroupForLoadbalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.BatchDeregisterTargets", async function () {
    try {
       const data = await client.BatchDeregisterTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyLoadBalancerMixIpTarget", async function () {
    try {
       const data = await client.ModifyLoadBalancerMixIpTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CreateRule", async function () {
    try {
       const data = await client.CreateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeExclusiveClusters", async function () {
    try {
       const data = await client.DescribeExclusiveClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.SetLoadBalancerClsLog", async function () {
    try {
       const data = await client.SetLoadBalancerClsLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.AutoRewrite", async function () {
    try {
       const data = await client.AutoRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DisassociateTargetGroups", async function () {
    try {
       const data = await client.DisassociateTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyListener", async function () {
    try {
       const data = await client.ModifyListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeleteLoadBalancerListeners", async function () {
    try {
       const data = await client.DeleteLoadBalancerListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.SetLoadBalancerSecurityGroups", async function () {
    try {
       const data = await client.SetLoadBalancerSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeleteTargetGroups", async function () {
    try {
       const data = await client.DeleteTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyLoadBalancerSla", async function () {
    try {
       const data = await client.ModifyLoadBalancerSla({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyBlockIPList", async function () {
    try {
       const data = await client.ModifyBlockIPList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.RegisterTargetGroupInstances", async function () {
    try {
       const data = await client.RegisterTargetGroupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeregisterTargetsFromClassicalLB", async function () {
    try {
       const data = await client.DeregisterTargetsFromClassicalLB({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CreateClsLogSet", async function () {
    try {
       const data = await client.CreateClsLogSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeLoadBalancersDetail", async function () {
    try {
       const data = await client.DescribeLoadBalancersDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeleteLoadBalancer", async function () {
    try {
       const data = await client.DeleteLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeResources", async function () {
    try {
       const data = await client.DescribeResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyTargetPort", async function () {
    try {
       const data = await client.ModifyTargetPort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeleteRule", async function () {
    try {
       const data = await client.DeleteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ReplaceCertForLoadBalancers", async function () {
    try {
       const data = await client.ReplaceCertForLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeTargetGroupInstances", async function () {
    try {
       const data = await client.DescribeTargetGroupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.AssociateTargetGroups", async function () {
    try {
       const data = await client.AssociateTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeLBListeners", async function () {
    try {
       const data = await client.DescribeLBListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyTargetGroupInstancesPort", async function () {
    try {
       const data = await client.ModifyTargetGroupInstancesPort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeregisterTargetGroupInstances", async function () {
    try {
       const data = await client.DeregisterTargetGroupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeLoadBalancers", async function () {
    try {
       const data = await client.DescribeLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeBlockIPList", async function () {
    try {
       const data = await client.DescribeBlockIPList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeListeners", async function () {
    try {
       const data = await client.DescribeListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeClassicalLBTargets", async function () {
    try {
       const data = await client.DescribeClassicalLBTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CreateListener", async function () {
    try {
       const data = await client.CreateListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.BatchRegisterTargets", async function () {
    try {
       const data = await client.BatchRegisterTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyRule", async function () {
    try {
       const data = await client.ModifyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeClsLogSet", async function () {
    try {
       const data = await client.DescribeClsLogSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeCustomizedConfigList", async function () {
    try {
       const data = await client.DescribeCustomizedConfigList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyTargetWeight", async function () {
    try {
       const data = await client.ModifyTargetWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeTaskStatus", async function () {
    try {
       const data = await client.DescribeTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.SetCustomizedConfigForLoadBalancer", async function () {
    try {
       const data = await client.SetCustomizedConfigForLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeClusterResources", async function () {
    try {
       const data = await client.DescribeClusterResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeTargetHealth", async function () {
    try {
       const data = await client.DescribeTargetHealth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeTargetGroupList", async function () {
    try {
       const data = await client.DescribeTargetGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeBlockIPTask", async function () {
    try {
       const data = await client.DescribeBlockIPTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CreateTargetGroup", async function () {
    try {
       const data = await client.CreateTargetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeLoadBalancerOverview", async function () {
    try {
       const data = await client.DescribeLoadBalancerOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeTargets", async function () {
    try {
       const data = await client.DescribeTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyDomain", async function () {
    try {
       const data = await client.ModifyDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.MigrateClassicalLoadBalancers", async function () {
    try {
       const data = await client.MigrateClassicalLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeRewrite", async function () {
    try {
       const data = await client.DescribeRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeTargetGroups", async function () {
    try {
       const data = await client.DescribeTargetGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyTargetGroupAttribute", async function () {
    try {
       const data = await client.ModifyTargetGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeClassicalLBHealthStatus", async function () {
    try {
       const data = await client.DescribeClassicalLBHealthStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeregisterTargets", async function () {
    try {
       const data = await client.DeregisterTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyLoadBalancerAttributes", async function () {
    try {
       const data = await client.ModifyLoadBalancerAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ModifyTargetGroupInstancesWeight", async function () {
    try {
       const data = await client.ModifyTargetGroupInstancesWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CreateLoadBalancerSnatIps", async function () {
    try {
       const data = await client.CreateLoadBalancerSnatIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeClassicalLBByInstanceId", async function () {
    try {
       const data = await client.DescribeClassicalLBByInstanceId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeLoadBalancerTraffic", async function () {
    try {
       const data = await client.DescribeLoadBalancerTraffic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CloneLoadBalancer", async function () {
    try {
       const data = await client.CloneLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeCrossTargets", async function () {
    try {
       const data = await client.DescribeCrossTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.BatchModifyTargetWeight", async function () {
    try {
       const data = await client.BatchModifyTargetWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DescribeQuota", async function () {
    try {
       const data = await client.DescribeQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.DeleteRewrite", async function () {
    try {
       const data = await client.DeleteRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.CreateLoadBalancer", async function () {
    try {
       const data = await client.CreateLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("clb.v20180317.ManualRewrite", async function () {
    try {
       const data = await client.ManualRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
