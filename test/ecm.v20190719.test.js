
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ecm.v20190719.Client({
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
describe("ecm.v20190719.test.js", function () {

it("ecm.v20190719.ReplaceSecurityGroupPolicy", async function () {
    try {
       const data = await client.ReplaceSecurityGroupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeConfig", async function () {
    try {
       const data = await client.DescribeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeTaskResult", async function () {
    try {
       const data = await client.DescribeTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyModuleName", async function () {
    try {
       const data = await client.ModifyModuleName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeRouteTables", async function () {
    try {
       const data = await client.DescribeRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateRouteTable", async function () {
    try {
       const data = await client.CreateRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.BatchDeregisterTargets", async function () {
    try {
       const data = await client.BatchDeregisterTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyInstancesAttribute", async function () {
    try {
       const data = await client.ModifyInstancesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ResetRoutes", async function () {
    try {
       const data = await client.ResetRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyPrivateIpAddressesAttribute", async function () {
    try {
       const data = await client.ModifyPrivateIpAddressesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.RunInstances", async function () {
    try {
       const data = await client.RunInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ImportImage", async function () {
    try {
       const data = await client.ImportImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeAddresses", async function () {
    try {
       const data = await client.DescribeAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyModuleImage", async function () {
    try {
       const data = await client.ModifyModuleImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeListeners", async function () {
    try {
       const data = await client.DescribeListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateImage", async function () {
    try {
       const data = await client.CreateImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeNode", async function () {
    try {
       const data = await client.DescribeNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeCustomImageTask", async function () {
    try {
       const data = await client.DescribeCustomImageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ReplaceRouteTableAssociation", async function () {
    try {
       const data = await client.ReplaceRouteTableAssociation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeLoadBalancers", async function () {
    try {
       const data = await client.DescribeLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeLoadBalanceTaskStatus", async function () {
    try {
       const data = await client.DescribeLoadBalanceTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeVpcs", async function () {
    try {
       const data = await client.DescribeVpcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.BatchModifyTargetWeight", async function () {
    try {
       const data = await client.BatchModifyTargetWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeImage", async function () {
    try {
       const data = await client.DescribeImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.MigrateNetworkInterface", async function () {
    try {
       const data = await client.MigrateNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyAddressesBandwidth", async function () {
    try {
       const data = await client.ModifyAddressesBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateSubnet", async function () {
    try {
       const data = await client.CreateSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ResetInstancesMaxBandwidth", async function () {
    try {
       const data = await client.ResetInstancesMaxBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeModule", async function () {
    try {
       const data = await client.DescribeModule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.StartInstances", async function () {
    try {
       const data = await client.StartInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteListener", async function () {
    try {
       const data = await client.DeleteListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DisassociateAddress", async function () {
    try {
       const data = await client.DisassociateAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateVpc", async function () {
    try {
       const data = await client.CreateVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyLoadBalancerAttributes", async function () {
    try {
       const data = await client.ModifyLoadBalancerAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.AttachDisks", async function () {
    try {
       const data = await client.AttachDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.SetLoadBalancerSecurityGroups", async function () {
    try {
       const data = await client.SetLoadBalancerSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.AllocateAddresses", async function () {
    try {
       const data = await client.AllocateAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyModuleDisableWanIp", async function () {
    try {
       const data = await client.ModifyModuleDisableWanIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyListener", async function () {
    try {
       const data = await client.ModifyListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DisassociateInstancesKeyPairs", async function () {
    try {
       const data = await client.DisassociateInstancesKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.AssociateAddress", async function () {
    try {
       const data = await client.AssociateAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteSubnet", async function () {
    try {
       const data = await client.DeleteSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.BatchRegisterTargets", async function () {
    try {
       const data = await client.BatchRegisterTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeInstancesDeniedActions", async function () {
    try {
       const data = await client.DescribeInstancesDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateNetworkInterface", async function () {
    try {
       const data = await client.CreateNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.StopInstances", async function () {
    try {
       const data = await client.StopInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeImportImageOs", async function () {
    try {
       const data = await client.DescribeImportImageOs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeMonthPeakNetwork", async function () {
    try {
       const data = await client.DescribeMonthPeakNetwork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DetachNetworkInterface", async function () {
    try {
       const data = await client.DetachNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ResetInstances", async function () {
    try {
       const data = await client.ResetInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.TerminateDisks", async function () {
    try {
       const data = await client.TerminateDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyTargetPort", async function () {
    try {
       const data = await client.ModifyTargetPort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteNetworkInterface", async function () {
    try {
       const data = await client.DeleteNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteModule", async function () {
    try {
       const data = await client.DeleteModule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ReleaseIpv6Addresses", async function () {
    try {
       const data = await client.ReleaseIpv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeTargetHealth", async function () {
    try {
       const data = await client.DescribeTargetHealth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ReplaceRoutes", async function () {
    try {
       const data = await client.ReplaceRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeRouteConflicts", async function () {
    try {
       const data = await client.DescribeRouteConflicts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DetachDisks", async function () {
    try {
       const data = await client.DetachDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DisableRoutes", async function () {
    try {
       const data = await client.DisableRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribePriceRunInstance", async function () {
    try {
       const data = await client.DescribePriceRunInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyIpv6AddressesAttribute", async function () {
    try {
       const data = await client.ModifyIpv6AddressesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeBaseOverview", async function () {
    try {
       const data = await client.DescribeBaseOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.AttachNetworkInterface", async function () {
    try {
       const data = await client.AttachNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteSecurityGroupPolicies", async function () {
    try {
       const data = await client.DeleteSecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateKeyPair", async function () {
    try {
       const data = await client.CreateKeyPair({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyModuleConfig", async function () {
    try {
       const data = await client.ModifyModuleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifySecurityGroupAttribute", async function () {
    try {
       const data = await client.ModifySecurityGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeModuleDetail", async function () {
    try {
       const data = await client.DescribeModuleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteLoadBalancer", async function () {
    try {
       const data = await client.DeleteLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeInstanceTypeConfig", async function () {
    try {
       const data = await client.DescribeInstanceTypeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteRoutes", async function () {
    try {
       const data = await client.DeleteRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifySecurityGroupPolicies", async function () {
    try {
       const data = await client.ModifySecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifySubnetAttribute", async function () {
    try {
       const data = await client.ModifySubnetAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribePackingQuotaGroup", async function () {
    try {
       const data = await client.DescribePackingQuotaGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeNetworkInterfaces", async function () {
    try {
       const data = await client.DescribeNetworkInterfaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateDisks", async function () {
    try {
       const data = await client.CreateDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyImageAttribute", async function () {
    try {
       const data = await client.ModifyImageAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeTaskStatus", async function () {
    try {
       const data = await client.DescribeTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribePeakNetworkOverview", async function () {
    try {
       const data = await client.DescribePeakNetworkOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateSecurityGroup", async function () {
    try {
       const data = await client.CreateSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ImportCustomImage", async function () {
    try {
       const data = await client.ImportCustomImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeSnapshots", async function () {
    try {
       const data = await client.DescribeSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.TerminateInstances", async function () {
    try {
       const data = await client.TerminateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeInstanceVncUrl", async function () {
    try {
       const data = await client.DescribeInstanceVncUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteRouteTable", async function () {
    try {
       const data = await client.DeleteRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeSecurityGroupLimits", async function () {
    try {
       const data = await client.DescribeSecurityGroupLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.SetSecurityGroupForLoadbalancers", async function () {
    try {
       const data = await client.SetSecurityGroupForLoadbalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyDefaultSubnet", async function () {
    try {
       const data = await client.ModifyDefaultSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.RebootInstances", async function () {
    try {
       const data = await client.RebootInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.AssignIpv6Addresses", async function () {
    try {
       const data = await client.AssignIpv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.MigratePrivateIpAddress", async function () {
    try {
       const data = await client.MigratePrivateIpAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateLoadBalancer", async function () {
    try {
       const data = await client.CreateLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyModuleNetwork", async function () {
    try {
       const data = await client.ModifyModuleNetwork({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeHaVips", async function () {
    try {
       const data = await client.DescribeHaVips({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.AssignPrivateIpAddresses", async function () {
    try {
       const data = await client.AssignPrivateIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteHaVip", async function () {
    try {
       const data = await client.DeleteHaVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeAddressQuota", async function () {
    try {
       const data = await client.DescribeAddressQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteLoadBalancerListeners", async function () {
    try {
       const data = await client.DeleteLoadBalancerListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteVpc", async function () {
    try {
       const data = await client.DeleteVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeSubnets", async function () {
    try {
       const data = await client.DescribeSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeSecurityGroups", async function () {
    try {
       const data = await client.DescribeSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeSecurityGroupPolicies", async function () {
    try {
       const data = await client.DescribeSecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeDefaultSubnet", async function () {
    try {
       const data = await client.DescribeDefaultSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ResetInstancesPassword", async function () {
    try {
       const data = await client.ResetInstancesPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateModule", async function () {
    try {
       const data = await client.CreateModule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.EnableRoutes", async function () {
    try {
       const data = await client.EnableRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateHaVip", async function () {
    try {
       const data = await client.CreateHaVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeDisks", async function () {
    try {
       const data = await client.DescribeDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteSecurityGroup", async function () {
    try {
       const data = await client.DeleteSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateListener", async function () {
    try {
       const data = await client.CreateListener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteSnapshots", async function () {
    try {
       const data = await client.DeleteSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyRouteTableAttribute", async function () {
    try {
       const data = await client.ModifyRouteTableAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyTargetWeight", async function () {
    try {
       const data = await client.ModifyTargetWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyModuleSecurityGroups", async function () {
    try {
       const data = await client.ModifyModuleSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateRoutes", async function () {
    try {
       const data = await client.CreateRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyHaVipAttribute", async function () {
    try {
       const data = await client.ModifyHaVipAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ReleaseAddresses", async function () {
    try {
       const data = await client.ReleaseAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyModuleIpDirect", async function () {
    try {
       const data = await client.ModifyModuleIpDirect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeTargets", async function () {
    try {
       const data = await client.DescribeTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyVpcAttribute", async function () {
    try {
       const data = await client.ModifyVpcAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribeSecurityGroupAssociationStatistics", async function () {
    try {
       const data = await client.DescribeSecurityGroupAssociationStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DescribePeakBaseOverview", async function () {
    try {
       const data = await client.DescribePeakBaseOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.ModifyAddressAttribute", async function () {
    try {
       const data = await client.ModifyAddressAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.RemovePrivateIpAddresses", async function () {
    try {
       const data = await client.RemovePrivateIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.CreateSecurityGroupPolicies", async function () {
    try {
       const data = await client.CreateSecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecm.v20190719.DeleteImage", async function () {
    try {
       const data = await client.DeleteImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
