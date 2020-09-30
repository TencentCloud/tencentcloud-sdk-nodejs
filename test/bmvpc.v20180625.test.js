
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bmvpc.v20180625.Client({
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
describe("bmvpc.v20180625.test.js", function () {

it("bmvpc.v20180625.DownloadCustomerGatewayConfiguration", async function () {
    try {
       const data = await client.DownloadCustomerGatewayConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeCustomerGateways", async function () {
    try {
       const data = await client.DescribeCustomerGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateVpcPeerConnection", async function () {
    try {
       const data = await client.CreateVpcPeerConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.AsyncRegisterIps", async function () {
    try {
       const data = await client.AsyncRegisterIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeRouteTables", async function () {
    try {
       const data = await client.DescribeRouteTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.UnbindEipsFromNatGateway", async function () {
    try {
       const data = await client.UnbindEipsFromNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.BindEipsToNatGateway", async function () {
    try {
       const data = await client.BindEipsToNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifyVpcPeerConnection", async function () {
    try {
       const data = await client.ModifyVpcPeerConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateVpc", async function () {
    try {
       const data = await client.CreateVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateNatGateway", async function () {
    try {
       const data = await client.CreateNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeSubnetAvailableIps", async function () {
    try {
       const data = await client.DescribeSubnetAvailableIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeRoutePolicies", async function () {
    try {
       const data = await client.DescribeRoutePolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteVpc", async function () {
    try {
       const data = await client.DeleteVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteHostedInterface", async function () {
    try {
       const data = await client.DeleteHostedInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeregisterIps", async function () {
    try {
       const data = await client.DeregisterIps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifyRoutePolicy", async function () {
    try {
       const data = await client.ModifyRoutePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateInterfaces", async function () {
    try {
       const data = await client.CreateInterfaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifyCustomerGatewayAttribute", async function () {
    try {
       const data = await client.ModifyCustomerGatewayAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteRoutePolicy", async function () {
    try {
       const data = await client.DeleteRoutePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifyVpnConnectionAttribute", async function () {
    try {
       const data = await client.ModifyVpnConnectionAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteVpnConnection", async function () {
    try {
       const data = await client.DeleteVpnConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteVpnGateway", async function () {
    try {
       const data = await client.DeleteVpnGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.BindIpsToNatGateway", async function () {
    try {
       const data = await client.BindIpsToNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifyVpnGatewayAttribute", async function () {
    try {
       const data = await client.ModifyVpnGatewayAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.UnbindIpsFromNatGateway", async function () {
    try {
       const data = await client.UnbindIpsFromNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteCustomerGateway", async function () {
    try {
       const data = await client.DeleteCustomerGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteSubnet", async function () {
    try {
       const data = await client.DeleteSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifySubnetAttribute", async function () {
    try {
       const data = await client.ModifySubnetAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeNatSubnets", async function () {
    try {
       const data = await client.DescribeNatSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.RejectVpcPeerConnection", async function () {
    try {
       const data = await client.RejectVpcPeerConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeSubnets", async function () {
    try {
       const data = await client.DescribeSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeSubnetByDevice", async function () {
    try {
       const data = await client.DescribeSubnetByDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifyRouteTable", async function () {
    try {
       const data = await client.ModifyRouteTable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifySubnetDHCPRelay", async function () {
    try {
       const data = await client.ModifySubnetDHCPRelay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeVpcView", async function () {
    try {
       const data = await client.DescribeVpcView({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteVirtualIp", async function () {
    try {
       const data = await client.DeleteVirtualIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateCustomerGateway", async function () {
    try {
       const data = await client.CreateCustomerGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeTaskStatus", async function () {
    try {
       const data = await client.DescribeTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateDockerSubnetWithVlan", async function () {
    try {
       const data = await client.CreateDockerSubnetWithVlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.UpgradeNatGateway", async function () {
    try {
       const data = await client.UpgradeNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateRoutePolicies", async function () {
    try {
       const data = await client.CreateRoutePolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeVpcResource", async function () {
    try {
       const data = await client.DescribeVpcResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.UnbindSubnetsFromNatGateway", async function () {
    try {
       const data = await client.UnbindSubnetsFromNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ResetVpnConnection", async function () {
    try {
       const data = await client.ResetVpnConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeVpnGateways", async function () {
    try {
       const data = await client.DescribeVpnGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteHostedInterfaces", async function () {
    try {
       const data = await client.DeleteHostedInterfaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.AcceptVpcPeerConnection", async function () {
    try {
       const data = await client.AcceptVpcPeerConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeVpcQuota", async function () {
    try {
       const data = await client.DescribeVpcQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeNatGateways", async function () {
    try {
       const data = await client.DescribeNatGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.BindSubnetsToNatGateway", async function () {
    try {
       const data = await client.BindSubnetsToNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteInterfaces", async function () {
    try {
       const data = await client.DeleteInterfaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateHostedInterface", async function () {
    try {
       const data = await client.CreateHostedInterface({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeVpnConnections", async function () {
    try {
       const data = await client.DescribeVpnConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeSubnetByHostedDevice", async function () {
    try {
       const data = await client.DescribeSubnetByHostedDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeVpcPeerConnections", async function () {
    try {
       const data = await client.DescribeVpcPeerConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DescribeVpcs", async function () {
    try {
       const data = await client.DescribeVpcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteVpcPeerConnection", async function () {
    try {
       const data = await client.DeleteVpcPeerConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.ModifyVpcAttribute", async function () {
    try {
       const data = await client.ModifyVpcAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.DeleteNatGateway", async function () {
    try {
       const data = await client.DeleteNatGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateVirtualSubnetWithVlan", async function () {
    try {
       const data = await client.CreateVirtualSubnetWithVlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmvpc.v20180625.CreateSubnet", async function () {
    try {
       const data = await client.CreateSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
