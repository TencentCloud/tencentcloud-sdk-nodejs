
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vpc.v20170312.Client({
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
describe("vpc.v20170312.test.js", function () {

it("vpc.v20170312.AssociateDirectConnectGatewayNatGateway", async function () {
    try {
       const data = await client.AssociateDirectConnectGatewayNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNatGatewayAttribute", async function () {
    try {
       const data = await client.ModifyNatGatewayAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeTaskResult", async function () {
    try {
       const data = await client.DescribeTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeRouteTables", async function () {
    try {
       const data = await client.DescribeRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.RemoveBandwidthPackageResources", async function () {
    try {
       const data = await client.RemoveBandwidthPackageResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeInstanceJumbo", async function () {
    try {
       const data = await client.DescribeInstanceJumbo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyServiceTemplateGroupAttribute", async function () {
    try {
       const data = await client.ModifyServiceTemplateGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyAddressInternetChargeType", async function () {
    try {
       const data = await client.ModifyAddressInternetChargeType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyIPv6AddressesAttributes", async function () {
    try {
       const data = await client.ModifyIPv6AddressesAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreatePrivateNatGateway", async function () {
    try {
       const data = await client.CreatePrivateNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AcceptVpcPeeringConnection", async function () {
    try {
       const data = await client.AcceptVpcPeeringConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.EnableGatewayFlowMonitor", async function () {
    try {
       const data = await client.EnableGatewayFlowMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeAddresses", async function () {
    try {
       const data = await client.DescribeAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CheckGatewayFlowMonitor", async function () {
    try {
       const data = await client.CheckGatewayFlowMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateCcnRouteTables", async function () {
    try {
       const data = await client.CreateCcnRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceCcnRouteTableBroadcastPolicys", async function () {
    try {
       const data = await client.ReplaceCcnRouteTableBroadcastPolicys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpnGatewaySslClientCert", async function () {
    try {
       const data = await client.ModifyVpnGatewaySslClientCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpnGatewaySslServer", async function () {
    try {
       const data = await client.ModifyVpnGatewaySslServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSpecificTrafficPackageUsedDetails", async function () {
    try {
       const data = await client.DescribeSpecificTrafficPackageUsedDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceRouteTableAssociation", async function () {
    try {
       const data = await client.ReplaceRouteTableAssociation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteTrafficPackages", async function () {
    try {
       const data = await client.DeleteTrafficPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeTemplateLimits", async function () {
    try {
       const data = await client.DescribeTemplateLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CheckNetDetectState", async function () {
    try {
       const data = await client.CheckNetDetectState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.InquiryPriceResetVpnGatewayInternetMaxBandwidth", async function () {
    try {
       const data = await client.InquiryPriceResetVpnGatewayInternetMaxBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNetworkAccountType", async function () {
    try {
       const data = await client.DescribeNetworkAccountType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyAddressesBandwidth", async function () {
    try {
       const data = await client.ModifyAddressesBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateSubnet", async function () {
    try {
       const data = await client.CreateSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpnGatewaySslClient", async function () {
    try {
       const data = await client.CreateVpnGatewaySslClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AllocateIp6AddressesBandwidth", async function () {
    try {
       const data = await client.AllocateIp6AddressesBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.LockCcnBandwidths", async function () {
    try {
       const data = await client.LockCcnBandwidths({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteServiceTemplateGroup", async function () {
    try {
       const data = await client.DeleteServiceTemplateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AddBandwidthPackageResources", async function () {
    try {
       const data = await client.AddBandwidthPackageResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AllocateAddresses", async function () {
    try {
       const data = await client.AllocateAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteCdcLDCXList", async function () {
    try {
       const data = await client.DeleteCdcLDCXList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeIp6Addresses", async function () {
    try {
       const data = await client.DescribeIp6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNetworkAclQuintupleEntries", async function () {
    try {
       const data = await client.DeleteNetworkAclQuintupleEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteDirectConnectGateway", async function () {
    try {
       const data = await client.DeleteDirectConnectGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNetworkInterface", async function () {
    try {
       const data = await client.CreateNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNetDetectStates", async function () {
    try {
       const data = await client.DescribeNetDetectStates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyCdcNetPlaneAttribute", async function () {
    try {
       const data = await client.ModifyCdcNetPlaneAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCcns", async function () {
    try {
       const data = await client.DescribeCcns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteCcn", async function () {
    try {
       const data = await client.DeleteCcn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNetworkAclEntries", async function () {
    try {
       const data = await client.ModifyNetworkAclEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCcnRouteTables", async function () {
    try {
       const data = await client.DescribeCcnRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DetachNetworkInterface", async function () {
    try {
       const data = await client.DetachNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNetworkAclQuintupleEntries", async function () {
    try {
       const data = await client.ModifyNetworkAclQuintupleEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteAssistantCidr", async function () {
    try {
       const data = await client.DeleteAssistantCidr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNetworkInterface", async function () {
    try {
       const data = await client.DeleteNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyLocalGateway", async function () {
    try {
       const data = await client.ModifyLocalGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSubnetResourceDashboard", async function () {
    try {
       const data = await client.DescribeSubnetResourceDashboard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeFlowLog", async function () {
    try {
       const data = await client.DescribeFlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssociateInstancesToCcnRouteTable", async function () {
    try {
       const data = await client.AssociateInstancesToCcnRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.RenewAddresses", async function () {
    try {
       const data = await client.RenewAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCcnRegionBandwidthLimits", async function () {
    try {
       const data = await client.DescribeCcnRegionBandwidthLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AddIp6Rules", async function () {
    try {
       const data = await client.AddIp6Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateDirectConnectGatewayNatGateway", async function () {
    try {
       const data = await client.DisassociateDirectConnectGatewayNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeUsedIpAddress", async function () {
    try {
       const data = await client.DescribeUsedIpAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCcnRoutes", async function () {
    try {
       const data = await client.DescribeCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceDirectConnectGatewayCcnRoutes", async function () {
    try {
       const data = await client.ReplaceDirectConnectGatewayCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.GetCcnRegionBandwidthLimits", async function () {
    try {
       const data = await client.GetCcnRegionBandwidthLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AddTemplateMember", async function () {
    try {
       const data = await client.AddTemplateMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeAddressBandwidthRange", async function () {
    try {
       const data = await client.DescribeAddressBandwidthRange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteAddressTemplate", async function () {
    try {
       const data = await client.DeleteAddressTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.MigrateBandwidthPackageResources", async function () {
    try {
       const data = await client.MigrateBandwidthPackageResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.WithdrawNotifyRoutes", async function () {
    try {
       const data = await client.WithdrawNotifyRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateCdcNetPlanes", async function () {
    try {
       const data = await client.CreateCdcNetPlanes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteRoutes", async function () {
    try {
       const data = await client.DeleteRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.InquiryPriceCreateVpnGateway", async function () {
    try {
       const data = await client.InquiryPriceCreateVpnGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteHighPriorityRouteTables", async function () {
    try {
       const data = await client.DeleteHighPriorityRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCrossBorderCompliance", async function () {
    try {
       const data = await client.DescribeCrossBorderCompliance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateSecurityGroup", async function () {
    try {
       const data = await client.CreateSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNetworkInterfaceAttribute", async function () {
    try {
       const data = await client.ModifyNetworkInterfaceAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpcPeeringConnection", async function () {
    try {
       const data = await client.ModifyVpcPeeringConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcLimits", async function () {
    try {
       const data = await client.DescribeVpcLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSnapshotAttachedInstances", async function () {
    try {
       const data = await client.DescribeSnapshotAttachedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteTrafficMirror", async function () {
    try {
       const data = await client.DeleteTrafficMirror({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteHaVip", async function () {
    try {
       const data = await client.DeleteHaVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeProductQuota", async function () {
    try {
       const data = await client.DescribeProductQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyBandwidthPackageAttribute", async function () {
    try {
       const data = await client.ModifyBandwidthPackageAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpnGatewaySslServer", async function () {
    try {
       const data = await client.CreateVpnGatewaySslServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpnGatewayAttribute", async function () {
    try {
       const data = await client.ModifyVpnGatewayAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpc", async function () {
    try {
       const data = await client.DeleteVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSubnets", async function () {
    try {
       const data = await client.DescribeSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeGlobalRoutes", async function () {
    try {
       const data = await client.DescribeGlobalRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyPrivateNatGatewayTranslationAclRule", async function () {
    try {
       const data = await client.ModifyPrivateNatGatewayTranslationAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyPrivateIpAddressesAttribute", async function () {
    try {
       const data = await client.ModifyPrivateIpAddressesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceCcnRouteTableInputPolicys", async function () {
    try {
       const data = await client.ReplaceCcnRouteTableInputPolicys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNetworkInterfaceQos", async function () {
    try {
       const data = await client.ModifyNetworkInterfaceQos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DetachCcnInstances", async function () {
    try {
       const data = await client.DetachCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateReserveIpAddresses", async function () {
    try {
       const data = await client.CreateReserveIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.EnableRoutes", async function () {
    try {
       const data = await client.EnableRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.SetCcnRegionBandwidthLimits", async function () {
    try {
       const data = await client.SetCcnRegionBandwidthLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyRouteTableAttribute", async function () {
    try {
       const data = await client.ModifyRouteTableAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyHaVipAttribute", async function () {
    try {
       const data = await client.ModifyHaVipAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReleaseAddresses", async function () {
    try {
       const data = await client.ReleaseAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeReserveIpAddresses", async function () {
    try {
       const data = await client.DescribeReserveIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeBandwidthPackageBandwidthRange", async function () {
    try {
       const data = await client.DescribeBandwidthPackageBandwidthRange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceRoutes", async function () {
    try {
       const data = await client.ReplaceRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcPrivateIpAddresses", async function () {
    try {
       const data = await client.DescribeVpcPrivateIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyIp6Translator", async function () {
    try {
       const data = await client.ModifyIp6Translator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeAddressTemplates", async function () {
    try {
       const data = await client.DescribeAddressTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateAddressTemplate", async function () {
    try {
       const data = await client.CreateAddressTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.TransformAddress", async function () {
    try {
       const data = await client.TransformAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcEndPoint", async function () {
    try {
       const data = await client.DescribeVpcEndPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeIp6TranslatorQuota", async function () {
    try {
       const data = await client.DescribeIp6TranslatorQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpcEndPointServiceWhiteList", async function () {
    try {
       const data = await client.CreateVpcEndPointServiceWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DownloadCustomerGatewayConfiguration", async function () {
    try {
       const data = await client.DownloadCustomerGatewayConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCustomerGateways", async function () {
    try {
       const data = await client.DescribeCustomerGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNetworkAcls", async function () {
    try {
       const data = await client.DescribeNetworkAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeServiceTemplateGroups", async function () {
    try {
       const data = await client.DescribeServiceTemplateGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssignIpv6CidrBlock", async function () {
    try {
       const data = await client.AssignIpv6CidrBlock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNatGatewayDestinationIpPortTranslationNatRules", async function () {
    try {
       const data = await client.DescribeNatGatewayDestinationIpPortTranslationNatRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCcnAttachedInstances", async function () {
    try {
       const data = await client.DescribeCcnAttachedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribePrivateNatGatewayRegions", async function () {
    try {
       const data = await client.DescribePrivateNatGatewayRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyReserveIpAddress", async function () {
    try {
       const data = await client.ModifyReserveIpAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateNatGatewayAddress", async function () {
    try {
       const data = await client.DisassociateNatGatewayAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeGatewayFlowMonitorDetail", async function () {
    try {
       const data = await client.DescribeGatewayFlowMonitorDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UnassignIpv6Addresses", async function () {
    try {
       const data = await client.UnassignIpv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssociateIPv6Address", async function () {
    try {
       const data = await client.AssociateIPv6Address({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteAddressTemplateGroup", async function () {
    try {
       const data = await client.DeleteAddressTemplateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcTaskResult", async function () {
    try {
       const data = await client.DescribeVpcTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateDirectConnectGateway", async function () {
    try {
       const data = await client.CreateDirectConnectGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssociateNatGatewayAddress", async function () {
    try {
       const data = await client.AssociateNatGatewayAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteCcnRouteTables", async function () {
    try {
       const data = await client.DeleteCcnRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyPrivateNatGatewayTranslationNatRule", async function () {
    try {
       const data = await client.ModifyPrivateNatGatewayTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpnGatewayRoutes", async function () {
    try {
       const data = await client.ModifyVpnGatewayRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CheckTrafficMirror", async function () {
    try {
       const data = await client.CheckTrafficMirror({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyIPv6AddressesBandwidth", async function () {
    try {
       const data = await client.ModifyIPv6AddressesBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCrossBorderCcnRegionBandwidthLimits", async function () {
    try {
       const data = await client.DescribeCrossBorderCcnRegionBandwidthLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifySnapshotPolicies", async function () {
    try {
       const data = await client.ModifySnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpnGatewaySslClient", async function () {
    try {
       const data = await client.DeleteVpnGatewaySslClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNatGatewayDestinationIpPortTranslationNatRule", async function () {
    try {
       const data = await client.CreateNatGatewayDestinationIpPortTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyAddressTemplateAttribute", async function () {
    try {
       const data = await client.ModifyAddressTemplateAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteTemplateMember", async function () {
    try {
       const data = await client.DeleteTemplateMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssignIpv6SubnetCidrBlock", async function () {
    try {
       const data = await client.AssignIpv6SubnetCidrBlock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpnGatewayCcnRoutes", async function () {
    try {
       const data = await client.DescribeVpnGatewayCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AttachCcnInstances", async function () {
    try {
       const data = await client.AttachCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteSubnet", async function () {
    try {
       const data = await client.DeleteSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AttachClassicLinkVpc", async function () {
    try {
       const data = await client.AttachClassicLinkVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyTemplateMember", async function () {
    try {
       const data = await client.ModifyTemplateMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeTrafficPackages", async function () {
    try {
       const data = await client.DescribeTrafficPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpcEndPointService", async function () {
    try {
       const data = await client.CreateVpcEndPointService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetVpnConnection", async function () {
    try {
       const data = await client.ResetVpnConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpnGatewayCcnRoutes", async function () {
    try {
       const data = await client.ModifyVpnGatewayCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteGlobalRoutes", async function () {
    try {
       const data = await client.DeleteGlobalRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeletePrivateNatGatewayDestinationIpPortTranslationNatRule", async function () {
    try {
       const data = await client.DeletePrivateNatGatewayDestinationIpPortTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyDhcpIpAttribute", async function () {
    try {
       const data = await client.ModifyDhcpIpAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeBandwidthPackageResources", async function () {
    try {
       const data = await client.DescribeBandwidthPackageResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcPeeringConnections", async function () {
    try {
       const data = await client.DescribeVpcPeeringConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateHighPriorityRouteTable", async function () {
    try {
       const data = await client.CreateHighPriorityRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.InquiryPriceRenewAddresses", async function () {
    try {
       const data = await client.InquiryPriceRenewAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyGatewayFlowQos", async function () {
    try {
       const data = await client.ModifyGatewayFlowQos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeRouteConflicts", async function () {
    try {
       const data = await client.DescribeRouteConflicts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateDefaultSecurityGroup", async function () {
    try {
       const data = await client.CreateDefaultSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssociateDhcpIpWithAddressIp", async function () {
    try {
       const data = await client.AssociateDhcpIpWithAddressIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteServiceTemplate", async function () {
    try {
       const data = await client.DeleteServiceTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UnassignPrivateIpAddresses", async function () {
    try {
       const data = await client.UnassignPrivateIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyAddressTemplateGroupAttribute", async function () {
    try {
       const data = await client.ModifyAddressTemplateGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateIp6Translators", async function () {
    try {
       const data = await client.CreateIp6Translators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateDefaultVpc", async function () {
    try {
       const data = await client.CreateDefaultVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AttachNetworkInterface", async function () {
    try {
       const data = await client.AttachNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteSecurityGroupPolicies", async function () {
    try {
       const data = await client.DeleteSecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNetworkAclQuintupleEntries", async function () {
    try {
       const data = await client.DescribeNetworkAclQuintupleEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifySecurityGroupAttribute", async function () {
    try {
       const data = await client.ModifySecurityGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeletePrivateNatGatewayTranslationAclRule", async function () {
    try {
       const data = await client.DeletePrivateNatGatewayTranslationAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribePrivateNatGatewayTranslationAclRules", async function () {
    try {
       const data = await client.DescribePrivateNatGatewayTranslationAclRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisableFlowLogs", async function () {
    try {
       const data = await client.DisableFlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetTrafficMirrorFilter", async function () {
    try {
       const data = await client.ResetTrafficMirrorFilter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateCustomerGateway", async function () {
    try {
       const data = await client.CreateCustomerGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateTrafficMirror", async function () {
    try {
       const data = await client.CreateTrafficMirror({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AuditCrossBorderCompliance", async function () {
    try {
       const data = await client.AuditCrossBorderCompliance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcInstances", async function () {
    try {
       const data = await client.DescribeVpcInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpnGatewaySslServers", async function () {
    try {
       const data = await client.DescribeVpnGatewaySslServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteRouteTable", async function () {
    try {
       const data = await client.DeleteRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeAccountAttributes", async function () {
    try {
       const data = await client.DescribeAccountAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssignIpv6Addresses", async function () {
    try {
       const data = await client.AssignIpv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeRouteTableSelectionPolicies", async function () {
    try {
       const data = await client.DescribeRouteTableSelectionPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeIpGeolocationInfos", async function () {
    try {
       const data = await client.DescribeIpGeolocationInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UnassignIpv6CidrBlock", async function () {
    try {
       const data = await client.UnassignIpv6CidrBlock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNatGatewaySourceIpTranslationNatRule", async function () {
    try {
       const data = await client.CreateNatGatewaySourceIpTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.RemoveIp6Rules", async function () {
    try {
       const data = await client.RemoveIp6Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.RejectVpcPeeringConnection", async function () {
    try {
       const data = await client.RejectVpcPeeringConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribePrivateNatGateways", async function () {
    try {
       const data = await client.DescribePrivateNatGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpnConnection", async function () {
    try {
       const data = await client.CreateVpnConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyCustomerGatewayAttribute", async function () {
    try {
       const data = await client.ModifyCustomerGatewayAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.EnableCcnRoutes", async function () {
    try {
       const data = await client.EnableCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreatePrivateNatGatewayDestinationIpPortTranslationNatRule", async function () {
    try {
       const data = await client.CreatePrivateNatGatewayDestinationIpPortTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteSecurityGroup", async function () {
    try {
       const data = await client.DeleteSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNatGatewaySourceIpTranslationNatRules", async function () {
    try {
       const data = await client.DescribeNatGatewaySourceIpTranslationNatRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNetDetect", async function () {
    try {
       const data = await client.ModifyNetDetect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeBandwidthPackageQuota", async function () {
    try {
       const data = await client.DescribeBandwidthPackageQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateSnapshotPolicies", async function () {
    try {
       const data = await client.CreateSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetAttachCcnInstances", async function () {
    try {
       const data = await client.ResetAttachCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpcEndPointServiceAttribute", async function () {
    try {
       const data = await client.ModifyVpcEndPointServiceAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeBandwidthPackages", async function () {
    try {
       const data = await client.DescribeBandwidthPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeRouteTableAssociatedInstances", async function () {
    try {
       const data = await client.DescribeRouteTableAssociatedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateServiceTemplateGroup", async function () {
    try {
       const data = await client.CreateServiceTemplateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReleaseIp6AddressesBandwidth", async function () {
    try {
       const data = await client.ReleaseIp6AddressesBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyCcnAttribute", async function () {
    try {
       const data = await client.ModifyCcnAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.InquirePriceCreateDirectConnectGateway", async function () {
    try {
       const data = await client.InquirePriceCreateDirectConnectGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeAddressTemplateGroups", async function () {
    try {
       const data = await client.DescribeAddressTemplateGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DetachClassicLinkVpc", async function () {
    try {
       const data = await client.DetachClassicLinkVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateSecurityGroupPolicies", async function () {
    try {
       const data = await client.CreateSecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetNatGatewayConnection", async function () {
    try {
       const data = await client.ResetNatGatewayConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AttachSnapshotInstances", async function () {
    try {
       const data = await client.AttachSnapshotInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcResourceDashboard", async function () {
    try {
       const data = await client.DescribeVpcResourceDashboard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceSecurityGroupPolicy", async function () {
    try {
       const data = await client.ReplaceSecurityGroupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AdjustPublicAddress", async function () {
    try {
       const data = await client.AdjustPublicAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNetworkAcl", async function () {
    try {
       const data = await client.CreateNetworkAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UpdateTrafficMirrorAllFilter", async function () {
    try {
       const data = await client.UpdateTrafficMirrorAllFilter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateBandwidthPackage", async function () {
    try {
       const data = await client.CreateBandwidthPackage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteFlowLog", async function () {
    try {
       const data = await client.DeleteFlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.GenerateVpnConnectionDefaultHealthCheckIp", async function () {
    try {
       const data = await client.GenerateVpnConnectionDefaultHealthCheckIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpnGatewaySslServer", async function () {
    try {
       const data = await client.DeleteVpnGatewaySslServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNetworkInterfaceLimit", async function () {
    try {
       const data = await client.DescribeNetworkInterfaceLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.EnableSnapshotPolicies", async function () {
    try {
       const data = await client.EnableSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpnConnection", async function () {
    try {
       const data = await client.DeleteVpnConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCustomerGatewayVendors", async function () {
    try {
       const data = await client.DescribeCustomerGatewayVendors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteCdcNetPlanes", async function () {
    try {
       const data = await client.DeleteCdcNetPlanes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteLocalGateway", async function () {
    try {
       const data = await client.DeleteLocalGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyServiceTemplateAttribute", async function () {
    try {
       const data = await client.ModifyServiceTemplateAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateNetworkAclSubnets", async function () {
    try {
       const data = await client.DisassociateNetworkAclSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule", async function () {
    try {
       const data = await client.ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpnGatewayRoutes", async function () {
    try {
       const data = await client.DescribeVpnGatewayRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceSecurityGroupPolicies", async function () {
    try {
       const data = await client.ReplaceSecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeTrafficMirrors", async function () {
    try {
       const data = await client.DescribeTrafficMirrors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateDirectConnectGatewayCcnRoutes", async function () {
    try {
       const data = await client.CreateDirectConnectGatewayCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssignPrivateIpAddresses", async function () {
    try {
       const data = await client.AssignPrivateIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCrossBorderFlowMonitor", async function () {
    try {
       const data = await client.DescribeCrossBorderFlowMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateSubnets", async function () {
    try {
       const data = await client.CreateSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpcPeeringConnection", async function () {
    try {
       const data = await client.CreateVpcPeeringConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteDirectConnectGatewayCcnRoutes", async function () {
    try {
       const data = await client.DeleteDirectConnectGatewayCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.RejectAttachCcnInstances", async function () {
    try {
       const data = await client.RejectAttachCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpnConnections", async function () {
    try {
       const data = await client.DescribeVpnConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteDhcpIp", async function () {
    try {
       const data = await client.DeleteDhcpIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribePrivateNatGatewayDestinationIpPortTranslationNatRules", async function () {
    try {
       const data = await client.DescribePrivateNatGatewayDestinationIpPortTranslationNatRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeHighPriorityRoutes", async function () {
    try {
       const data = await client.DescribeHighPriorityRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateAddress", async function () {
    try {
       const data = await client.DisassociateAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCdcLDCXList", async function () {
    try {
       const data = await client.DescribeCdcLDCXList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyIp6Rule", async function () {
    try {
       const data = await client.ModifyIp6Rule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcIpv6Addresses", async function () {
    try {
       const data = await client.DescribeVpcIpv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UnlockCcnBandwidths", async function () {
    try {
       const data = await client.UnlockCcnBandwidths({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteCustomerGateway", async function () {
    try {
       const data = await client.DeleteCustomerGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeLocalGateway", async function () {
    try {
       const data = await client.DescribeLocalGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNetDetects", async function () {
    try {
       const data = await client.DescribeNetDetects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeBandwidthPackageBillUsage", async function () {
    try {
       const data = await client.DescribeBandwidthPackageBillUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyCcnRouteTables", async function () {
    try {
       const data = await client.ModifyCcnRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyAddressesRenewFlag", async function () {
    try {
       const data = await client.ModifyAddressesRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyHighPriorityRouteECMPAlgorithm", async function () {
    try {
       const data = await client.ModifyHighPriorityRouteECMPAlgorithm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNatGatewaySourceIpTranslationNatRule", async function () {
    try {
       const data = await client.DeleteNatGatewaySourceIpTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateIPv6Address", async function () {
    try {
       const data = await client.DisassociateIPv6Address({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNatGatewaySourceIpTranslationNatRule", async function () {
    try {
       const data = await client.ModifyNatGatewaySourceIpTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UnassignIpv6SubnetCidrBlock", async function () {
    try {
       const data = await client.UnassignIpv6SubnetCidrBlock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisableRoutes", async function () {
    try {
       const data = await client.DisableRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.EnableVpnGatewaySslClientCert", async function () {
    try {
       const data = await client.EnableVpnGatewaySslClientCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateAssistantCidr", async function () {
    try {
       const data = await client.CreateAssistantCidr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpnGatewaySslClients", async function () {
    try {
       const data = await client.DescribeVpnGatewaySslClients({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNatGateway", async function () {
    try {
       const data = await client.CreateNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNetDetect", async function () {
    try {
       const data = await client.DeleteNetDetect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.NotifyRoutes", async function () {
    try {
       const data = await client.NotifyRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpcEndPoint", async function () {
    try {
       const data = await client.DeleteVpcEndPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteHighPriorityRoutes", async function () {
    try {
       const data = await client.DeleteHighPriorityRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateServiceTemplate", async function () {
    try {
       const data = await client.CreateServiceTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.InquiryPriceAllocateAddresses", async function () {
    try {
       const data = await client.InquiryPriceAllocateAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyDirectConnectGatewayAttribute", async function () {
    try {
       const data = await client.ModifyDirectConnectGatewayAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifySubnetAttribute", async function () {
    try {
       const data = await client.ModifySubnetAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSgSnapshotFileContent", async function () {
    try {
       const data = await client.DescribeSgSnapshotFileContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNetworkInterfaces", async function () {
    try {
       const data = await client.DescribeNetworkInterfaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisableCcnRoutes", async function () {
    try {
       const data = await client.DisableCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCcnRouteTableBroadcastPolicys", async function () {
    try {
       const data = await client.DescribeCcnRouteTableBroadcastPolicys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateAddressTemplateGroup", async function () {
    try {
       const data = await client.CreateAddressTemplateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssociateNetworkAclSubnets", async function () {
    try {
       const data = await client.AssociateNetworkAclSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpnGateways", async function () {
    try {
       const data = await client.DescribeVpnGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssociateNetworkInterfaceSecurityGroups", async function () {
    try {
       const data = await client.AssociateNetworkInterfaceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceHighPriorityRouteTableAssociation", async function () {
    try {
       const data = await client.ReplaceHighPriorityRouteTableAssociation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReturnNormalAddresses", async function () {
    try {
       const data = await client.ReturnNormalAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.EnableFlowLogs", async function () {
    try {
       const data = await client.EnableFlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateCdcLDCXList", async function () {
    try {
       const data = await client.CreateCdcLDCXList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNatGatewayDestinationIpPortTranslationNatRule", async function () {
    try {
       const data = await client.ModifyNatGatewayDestinationIpPortTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisableVpnGatewaySslClientCert", async function () {
    try {
       const data = await client.DisableVpnGatewaySslClientCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeHaVips", async function () {
    try {
       const data = await client.DescribeHaVips({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateLocalGateway", async function () {
    try {
       const data = await client.CreateLocalGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetVpnGatewayInternetMaxBandwidth", async function () {
    try {
       const data = await client.ResetVpnGatewayInternetMaxBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpnConnectionAttribute", async function () {
    try {
       const data = await client.ModifyVpnConnectionAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribePrivateNatGatewayTranslationNatRules", async function () {
    try {
       const data = await client.DescribePrivateNatGatewayTranslationNatRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateDhcpIpWithAddressIp", async function () {
    try {
       const data = await client.DisassociateDhcpIpWithAddressIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateHaVip", async function () {
    try {
       const data = await client.CreateHaVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeTenantCcns", async function () {
    try {
       const data = await client.DescribeTenantCcns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateHighPriorityRoutes", async function () {
    try {
       const data = await client.CreateHighPriorityRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.LockCcns", async function () {
    try {
       const data = await client.LockCcns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateRoutes", async function () {
    try {
       const data = await client.CreateRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyRouteTableSelectionPolicies", async function () {
    try {
       const data = await client.ModifyRouteTableSelectionPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSecurityGroupAssociationStatistics", async function () {
    try {
       const data = await client.DescribeSecurityGroupAssociationStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeIpGeolocationDatabaseUrl", async function () {
    try {
       const data = await client.DescribeIpGeolocationDatabaseUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyAddressAttribute", async function () {
    try {
       const data = await client.ModifyAddressAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeTrafficQosPolicy", async function () {
    try {
       const data = await client.DescribeTrafficQosPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeIPv6Addresses", async function () {
    try {
       const data = await client.DescribeIPv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateFlowLog", async function () {
    try {
       const data = await client.CreateFlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateRouteTable", async function () {
    try {
       const data = await client.CreateRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyPrivateNatGatewayAttribute", async function () {
    try {
       const data = await client.ModifyPrivateNatGatewayAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNetworkAcl", async function () {
    try {
       const data = await client.DeleteNetworkAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpcEndPointServiceWhiteList", async function () {
    try {
       const data = await client.DeleteVpcEndPointServiceWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyFlowLogAttribute", async function () {
    try {
       const data = await client.ModifyFlowLogAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateNetworkInterfaceSecurityGroups", async function () {
    try {
       const data = await client.DisassociateNetworkInterfaceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetRoutes", async function () {
    try {
       const data = await client.ResetRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNetworkAclEntries", async function () {
    try {
       const data = await client.DeleteNetworkAclEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.StopTrafficMirror", async function () {
    try {
       const data = await client.StopTrafficMirror({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyCcnRegionBandwidthLimitsType", async function () {
    try {
       const data = await client.ModifyCcnRegionBandwidthLimitsType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCcnRouteTableInputPolicys", async function () {
    try {
       const data = await client.DescribeCcnRouteTableInputPolicys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.InquiryPriceRenewVpnGateway", async function () {
    try {
       const data = await client.InquiryPriceRenewVpnGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteSnapshotPolicies", async function () {
    try {
       const data = await client.DeleteSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcEndPointService", async function () {
    try {
       const data = await client.DescribeVpcEndPointService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.RefreshDirectConnectGatewayRouteToNatGateway", async function () {
    try {
       const data = await client.RefreshDirectConnectGatewayRouteToNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreatePrivateNatGatewayTranslationNatRule", async function () {
    try {
       const data = await client.CreatePrivateNatGatewayTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpcEndPointAttribute", async function () {
    try {
       const data = await client.ModifyVpcEndPointAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyHighPriorityRouteAttribute", async function () {
    try {
       const data = await client.ModifyHighPriorityRouteAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisassociateVpcEndPointSecurityGroups", async function () {
    try {
       const data = await client.DisassociateVpcEndPointSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CloneSecurityGroup", async function () {
    try {
       const data = await client.CloneSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.EnableVpcEndPointConnect", async function () {
    try {
       const data = await client.EnableVpcEndPointConnect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateAndAttachNetworkInterface", async function () {
    try {
       const data = await client.CreateAndAttachNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpcEndPointServiceWhiteList", async function () {
    try {
       const data = await client.ModifyVpcEndPointServiceWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNatGateways", async function () {
    try {
       const data = await client.DescribeNatGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateGlobalRoutes", async function () {
    try {
       const data = await client.CreateGlobalRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetHighPriorityRoutes", async function () {
    try {
       const data = await client.ResetHighPriorityRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcs", async function () {
    try {
       const data = await client.DescribeVpcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.MigrateNetworkInterface", async function () {
    try {
       const data = await client.MigrateNetworkInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeHighPriorityRouteTables", async function () {
    try {
       const data = await client.DescribeHighPriorityRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AcceptAttachCcnInstances", async function () {
    try {
       const data = await client.AcceptAttachCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeGatewayFlowQos", async function () {
    try {
       const data = await client.DescribeGatewayFlowQos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeIp6Translators", async function () {
    try {
       const data = await client.DescribeIp6Translators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNatGatewayFlowMonitorDetail", async function () {
    try {
       const data = await client.DescribeNatGatewayFlowMonitorDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisableGatewayFlowMonitor", async function () {
    try {
       const data = await client.DisableGatewayFlowMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpc", async function () {
    try {
       const data = await client.CreateVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CheckAssistantCidr", async function () {
    try {
       const data = await client.CheckAssistantCidr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyNetworkAclAttribute", async function () {
    try {
       const data = await client.ModifyNetworkAclAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DisableSnapshotPolicies", async function () {
    try {
       const data = await client.DisableSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeletePrivateNatGatewayTranslationNatRule", async function () {
    try {
       const data = await client.DeletePrivateNatGatewayTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeDhcpIps", async function () {
    try {
       const data = await client.DescribeDhcpIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AssociateAddress", async function () {
    try {
       const data = await client.AssociateAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyGlobalRouteECMPAlgorithm", async function () {
    try {
       const data = await client.ModifyGlobalRouteECMPAlgorithm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpcPeeringConnection", async function () {
    try {
       const data = await client.DeleteVpcPeeringConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeFlowLogs", async function () {
    try {
       const data = await client.DescribeFlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeDirectConnectGatewayCcnRoutes", async function () {
    try {
       const data = await client.DescribeDirectConnectGatewayCcnRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNetworkAclEntries", async function () {
    try {
       const data = await client.CreateNetworkAclEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteBandwidthPackage", async function () {
    try {
       const data = await client.DeleteBandwidthPackage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteIp6Translators", async function () {
    try {
       const data = await client.DeleteIp6Translators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeRoutes", async function () {
    try {
       const data = await client.DescribeRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpnGatewayRoutes", async function () {
    try {
       const data = await client.DeleteVpnGatewayRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReplaceHighPriorityRoutes", async function () {
    try {
       const data = await client.ReplaceHighPriorityRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyCcnAttachedInstancesAttribute", async function () {
    try {
       const data = await client.ModifyCcnAttachedInstancesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetTrafficMirrorTarget", async function () {
    try {
       const data = await client.ResetTrafficMirrorTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNatGateway", async function () {
    try {
       const data = await client.DeleteNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeRouteList", async function () {
    try {
       const data = await client.DescribeRouteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyGlobalRoutes", async function () {
    try {
       const data = await client.ModifyGlobalRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyHighPriorityRouteTableAttribute", async function () {
    try {
       const data = await client.ModifyHighPriorityRouteTableAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ReleaseIPv6Addresses", async function () {
    try {
       const data = await client.ReleaseIPv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteReserveIpAddresses", async function () {
    try {
       const data = await client.DeleteReserveIpAddresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyCdcLDCXAttribute", async function () {
    try {
       const data = await client.ModifyCdcLDCXAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpcEndPointService", async function () {
    try {
       const data = await client.DeleteVpcEndPointService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNetworkAclQuintupleEntries", async function () {
    try {
       const data = await client.CreateNetworkAclQuintupleEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteVpnGateway", async function () {
    try {
       const data = await client.DeleteVpnGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeVpcEndPointServiceWhiteList", async function () {
    try {
       const data = await client.DescribeVpcEndPointServiceWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyBandwidthPackageBandwidth", async function () {
    try {
       const data = await client.ModifyBandwidthPackageBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribePrivateNatGatewayLimits", async function () {
    try {
       const data = await client.DescribePrivateNatGatewayLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifySecurityGroupPolicies", async function () {
    try {
       const data = await client.ModifySecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreatePrivateNatGatewayTranslationAclRule", async function () {
    try {
       const data = await client.CreatePrivateNatGatewayTranslationAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSecurityGroupLimits", async function () {
    try {
       const data = await client.DescribeSecurityGroupLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCdcUsedIdcVlan", async function () {
    try {
       const data = await client.DescribeCdcUsedIdcVlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSecurityGroupReferences", async function () {
    try {
       const data = await client.DescribeSecurityGroupReferences({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyIpv6AddressesAttribute", async function () {
    try {
       const data = await client.ModifyIpv6AddressesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeDirectConnectGateways", async function () {
    try {
       const data = await client.DescribeDirectConnectGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.RenewVpnGateway", async function () {
    try {
       const data = await client.RenewVpnGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.MigratePrivateIpAddress", async function () {
    try {
       const data = await client.MigratePrivateIpAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DetachSnapshotInstances", async function () {
    try {
       const data = await client.DetachSnapshotInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeServiceTemplates", async function () {
    try {
       const data = await client.DescribeServiceTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.HaVipDisassociateAddressIp", async function () {
    try {
       const data = await client.HaVipDisassociateAddressIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeNatGatewayDirectConnectGatewayRoute", async function () {
    try {
       const data = await client.DescribeNatGatewayDirectConnectGatewayRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UnlockCcns", async function () {
    try {
       const data = await client.UnlockCcns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.HaVipAssociateAddressIp", async function () {
    try {
       const data = await client.HaVipAssociateAddressIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CheckDefaultSubnet", async function () {
    try {
       const data = await client.CheckDefaultSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DownloadVpnGatewaySslClientCert", async function () {
    try {
       const data = await client.DownloadVpnGatewaySslClientCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeAddressQuota", async function () {
    try {
       const data = await client.DescribeAddressQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.UpdateTrafficMirrorDirection", async function () {
    try {
       const data = await client.UpdateTrafficMirrorDirection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.StartTrafficMirror", async function () {
    try {
       const data = await client.StartTrafficMirror({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateCcn", async function () {
    try {
       const data = await client.CreateCcn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSecurityGroups", async function () {
    try {
       const data = await client.DescribeSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpnGateway", async function () {
    try {
       const data = await client.CreateVpnGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSecurityGroupPolicies", async function () {
    try {
       const data = await client.DescribeSecurityGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeAssistantCidr", async function () {
    try {
       const data = await client.DescribeAssistantCidr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeClassicLinkInstances", async function () {
    try {
       const data = await client.DescribeClassicLinkInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ClearRouteTableSelectionPolicies", async function () {
    try {
       const data = await client.ClearRouteTableSelectionPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.InquiryPriceModifyAddressesBandwidth", async function () {
    try {
       const data = await client.InquiryPriceModifyAddressesBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.AllocateIPv6Addresses", async function () {
    try {
       const data = await client.AllocateIPv6Addresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyAssistantCidr", async function () {
    try {
       const data = await client.ModifyAssistantCidr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeleteNatGatewayDestinationIpPortTranslationNatRule", async function () {
    try {
       const data = await client.DeleteNatGatewayDestinationIpPortTranslationNatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateTrafficPackages", async function () {
    try {
       const data = await client.CreateTrafficPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateNetDetect", async function () {
    try {
       const data = await client.CreateNetDetect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSnapshotFiles", async function () {
    try {
       const data = await client.DescribeSnapshotFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateDhcpIp", async function () {
    try {
       const data = await client.CreateDhcpIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyVpcAttribute", async function () {
    try {
       const data = await client.ModifyVpcAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResumeSnapshotInstance", async function () {
    try {
       const data = await client.ResumeSnapshotInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.SetVpnGatewaysRenewFlag", async function () {
    try {
       const data = await client.SetVpnGatewaysRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeSnapshotPolicies", async function () {
    try {
       const data = await client.DescribeSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyIp6AddressesBandwidth", async function () {
    try {
       const data = await client.ModifyIp6AddressesBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpcEndPoint", async function () {
    try {
       const data = await client.CreateVpcEndPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateSecurityGroupWithPolicies", async function () {
    try {
       const data = await client.CreateSecurityGroupWithPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ResetTrafficMirrorSrcs", async function () {
    try {
       const data = await client.ResetTrafficMirrorSrcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.ModifyTrafficMirrorAttribute", async function () {
    try {
       const data = await client.ModifyTrafficMirrorAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DescribeCdcNetPlanes", async function () {
    try {
       const data = await client.DescribeCdcNetPlanes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.DeletePrivateNatGateway", async function () {
    try {
       const data = await client.DeletePrivateNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vpc.v20170312.CreateVpnGatewayRoutes", async function () {
    try {
       const data = await client.CreateVpnGatewayRoutes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
