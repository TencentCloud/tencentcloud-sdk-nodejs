
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.organization.v20210331.Client({
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
describe("organization.v20210331.test.js", function () {

it("organization.v20210331.QuitOrganization", async function () {
    try {
       const data = await client.QuitOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListGroupMembers", async function () {
    try {
       const data = await client.ListGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddOrganizationNode", async function () {
    try {
       const data = await client.AddOrganizationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateOrganizationMemberEmailBind", async function () {
    try {
       const data = await client.UpdateOrganizationMemberEmailBind({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.RemovePermissionPolicyFromRoleConfiguration", async function () {
    try {
       const data = await client.RemovePermissionPolicyFromRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateUser", async function () {
    try {
       const data = await client.UpdateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateOrgServiceAssign", async function () {
    try {
       const data = await client.CreateOrgServiceAssign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeEffectivePolicy", async function () {
    try {
       const data = await client.DescribeEffectivePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetUser", async function () {
    try {
       const data = await client.GetUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.OpenIdentityCenter", async function () {
    try {
       const data = await client.OpenIdentityCenter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteUser", async function () {
    try {
       const data = await client.DeleteUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetRoleConfiguration", async function () {
    try {
       const data = await client.GetRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateOrganizationMember", async function () {
    try {
       const data = await client.CreateOrganizationMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationMemberEmailBind", async function () {
    try {
       const data = await client.DescribeOrganizationMemberEmailBind({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteShareUnitResources", async function () {
    try {
       const data = await client.DeleteShareUnitResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListTasks", async function () {
    try {
       const data = await client.ListTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.RemoveUserFromGroup", async function () {
    try {
       const data = await client.RemoveUserFromGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListOrganizationIdentity", async function () {
    try {
       const data = await client.ListOrganizationIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationNodes", async function () {
    try {
       const data = await client.DescribeOrganizationNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListExternalSAMLIdPCertificates", async function () {
    try {
       const data = await client.ListExternalSAMLIdPCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.RemoveExternalSAMLIdPCertificate", async function () {
    try {
       const data = await client.RemoveExternalSAMLIdPCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CheckAccountDelete", async function () {
    try {
       const data = await client.CheckAccountDelete({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationMembers", async function () {
    try {
       const data = await client.DescribeOrganizationMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateRoleAssignment", async function () {
    try {
       const data = await client.CreateRoleAssignment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateRoleConfiguration", async function () {
    try {
       const data = await client.CreateRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AcceptJoinShareUnitInvitation", async function () {
    try {
       const data = await client.AcceptJoinShareUnitInvitation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListUsers", async function () {
    try {
       const data = await client.ListUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribePolicy", async function () {
    try {
       const data = await client.DescribePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetExternalSAMLIdentityProvider", async function () {
    try {
       const data = await client.GetExternalSAMLIdentityProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ClearExternalSAMLIdentityProvider", async function () {
    try {
       const data = await client.ClearExternalSAMLIdentityProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationFinancialByProduct", async function () {
    try {
       const data = await client.DescribeOrganizationFinancialByProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateOrganizationIdentity", async function () {
    try {
       const data = await client.UpdateOrganizationIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ProvisionRoleConfiguration", async function () {
    try {
       const data = await client.ProvisionRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CancelOrganizationMemberAuthAccount", async function () {
    try {
       const data = await client.CancelOrganizationMemberAuthAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationFinancialByMember", async function () {
    try {
       const data = await client.DescribeOrganizationFinancialByMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetGroup", async function () {
    try {
       const data = await client.GetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteRoleAssignment", async function () {
    try {
       const data = await client.DeleteRoleAssignment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateOrganizationMembersPolicy", async function () {
    try {
       const data = await client.CreateOrganizationMembersPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.MoveOrganizationNodeMembers", async function () {
    try {
       const data = await client.MoveOrganizationNodeMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateZone", async function () {
    try {
       const data = await client.UpdateZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateOrganizationIdentity", async function () {
    try {
       const data = await client.CreateOrganizationIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddOrganizationMemberEmail", async function () {
    try {
       const data = await client.AddOrganizationMemberEmail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteShareUnitMembers", async function () {
    try {
       const data = await client.DeleteShareUnitMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListJoinedGroupsForUser", async function () {
    try {
       const data = await client.ListJoinedGroupsForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListPermissionPoliciesInRoleConfiguration", async function () {
    try {
       const data = await client.ListPermissionPoliciesInRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddShareUnit", async function () {
    try {
       const data = await client.AddShareUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationMemberAuthAccounts", async function () {
    try {
       const data = await client.DescribeOrganizationMemberAuthAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListRoleConfigurationProvisionings", async function () {
    try {
       const data = await client.ListRoleConfigurationProvisionings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddShareUnitMembers", async function () {
    try {
       const data = await client.AddShareUnitMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribePolicyConfig", async function () {
    try {
       const data = await client.DescribePolicyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdatePolicy", async function () {
    try {
       const data = await client.UpdatePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeShareUnits", async function () {
    try {
       const data = await client.DescribeShareUnits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListUserSyncProvisionings", async function () {
    try {
       const data = await client.ListUserSyncProvisionings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateUserStatus", async function () {
    try {
       const data = await client.UpdateUserStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DisablePolicyType", async function () {
    try {
       const data = await client.DisablePolicyType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateUserSyncProvisioning", async function () {
    try {
       const data = await client.CreateUserSyncProvisioning({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddPermissionPolicyToRoleConfiguration", async function () {
    try {
       const data = await client.AddPermissionPolicyToRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteOrganizationMembersPolicy", async function () {
    try {
       const data = await client.DeleteOrganizationMembersPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeletePolicy", async function () {
    try {
       const data = await client.DeletePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateGroup", async function () {
    try {
       const data = await client.CreateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeShareUnitMembers", async function () {
    try {
       const data = await client.DescribeShareUnitMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DismantleRoleConfiguration", async function () {
    try {
       const data = await client.DismantleRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteShareUnit", async function () {
    try {
       const data = await client.DeleteShareUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteOrganizationMembers", async function () {
    try {
       const data = await client.DeleteOrganizationMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListOrgServiceAssignMember", async function () {
    try {
       const data = await client.ListOrgServiceAssignMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.RejectJoinShareUnitInvitation", async function () {
    try {
       const data = await client.RejectJoinShareUnitInvitation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListNonCompliantResource", async function () {
    try {
       const data = await client.ListNonCompliantResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.SetExternalSAMLIdentityProvider", async function () {
    try {
       const data = await client.SetExternalSAMLIdentityProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteOrganization", async function () {
    try {
       const data = await client.DeleteOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListPoliciesForTarget", async function () {
    try {
       const data = await client.ListPoliciesForTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateUserSyncProvisioning", async function () {
    try {
       const data = await client.UpdateUserSyncProvisioning({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetUserSyncProvisioning", async function () {
    try {
       const data = await client.GetUserSyncProvisioning({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganization", async function () {
    try {
       const data = await client.DescribeOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListGroups", async function () {
    try {
       const data = await client.ListGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeShareUnitResources", async function () {
    try {
       const data = await client.DescribeShareUnitResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.BindOrganizationMemberAuthAccount", async function () {
    try {
       const data = await client.BindOrganizationMemberAuthAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateGroup", async function () {
    try {
       const data = await client.UpdateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreatePolicy", async function () {
    try {
       const data = await client.CreatePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetProvisioningTaskStatus", async function () {
    try {
       const data = await client.GetProvisioningTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateOrganizationNode", async function () {
    try {
       const data = await client.UpdateOrganizationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateShareUnit", async function () {
    try {
       const data = await client.UpdateShareUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateOrganizationMember", async function () {
    try {
       const data = await client.UpdateOrganizationMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationAuthNode", async function () {
    try {
       const data = await client.DescribeOrganizationAuthNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeIdentityCenter", async function () {
    try {
       const data = await client.DescribeIdentityCenter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationMemberAuthIdentities", async function () {
    try {
       const data = await client.DescribeOrganizationMemberAuthIdentities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.SendOrgMemberAccountBindEmail", async function () {
    try {
       const data = await client.SendOrgMemberAccountBindEmail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetZoneStatistics", async function () {
    try {
       const data = await client.GetZoneStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DetachPolicy", async function () {
    try {
       const data = await client.DetachPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateOrganizationMemberAuthIdentity", async function () {
    try {
       const data = await client.CreateOrganizationMemberAuthIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationFinancialByMonth", async function () {
    try {
       const data = await client.DescribeOrganizationFinancialByMonth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteAccount", async function () {
    try {
       const data = await client.DeleteAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteOrganizationNodes", async function () {
    try {
       const data = await client.DeleteOrganizationNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListRoleAssignments", async function () {
    try {
       const data = await client.ListRoleAssignments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeOrganizationMemberPolicies", async function () {
    try {
       const data = await client.DescribeOrganizationMemberPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteUserSyncProvisioning", async function () {
    try {
       const data = await client.DeleteUserSyncProvisioning({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateRoleConfiguration", async function () {
    try {
       const data = await client.UpdateRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListRoleConfigurations", async function () {
    try {
       const data = await client.ListRoleConfigurations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.InviteOrganizationMember", async function () {
    try {
       const data = await client.InviteOrganizationMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddShareUnitResources", async function () {
    try {
       const data = await client.AddShareUnitResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AttachPolicy", async function () {
    try {
       const data = await client.AttachPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DescribeShareAreas", async function () {
    try {
       const data = await client.DescribeShareAreas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddUserToGroup", async function () {
    try {
       const data = await client.AddUserToGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteRoleConfiguration", async function () {
    try {
       const data = await client.DeleteRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateOrganization", async function () {
    try {
       const data = await client.CreateOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.AddExternalSAMLIdPCertificate", async function () {
    try {
       const data = await client.AddExternalSAMLIdPCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteOrgServiceAssign", async function () {
    try {
       const data = await client.DeleteOrgServiceAssign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteOrganizationIdentity", async function () {
    try {
       const data = await client.DeleteOrganizationIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.EnablePolicyType", async function () {
    try {
       const data = await client.EnablePolicyType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetZoneSAMLServiceProviderInfo", async function () {
    try {
       const data = await client.GetZoneSAMLServiceProviderInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListTargetsForPolicy", async function () {
    try {
       const data = await client.ListTargetsForPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListPolicies", async function () {
    try {
       const data = await client.ListPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.GetTaskStatus", async function () {
    try {
       const data = await client.GetTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.CreateOrganizationMemberPolicy", async function () {
    try {
       const data = await client.CreateOrganizationMemberPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.ListOrganizationService", async function () {
    try {
       const data = await client.ListOrganizationService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.UpdateCustomPolicyForRoleConfiguration", async function () {
    try {
       const data = await client.UpdateCustomPolicyForRoleConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20210331.DeleteOrganizationMemberAuthIdentity", async function () {
    try {
       const data = await client.DeleteOrganizationMemberAuthIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
