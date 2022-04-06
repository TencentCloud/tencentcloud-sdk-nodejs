
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cam.v20190116.Client({
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
describe("cam.v20190116.test.js", function () {

it("cam.v20190116.GetUserAppId", async function () {
    try {
       const data = await client.GetUserAppId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.SetMfaFlag", async function () {
    try {
       const data = await client.SetMfaFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateRoleConsoleLogin", async function () {
    try {
       const data = await client.UpdateRoleConsoleLogin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreateGroup", async function () {
    try {
       const data = await client.CreateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeleteServiceLinkedRole", async function () {
    try {
       const data = await client.DeleteServiceLinkedRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.AddUser", async function () {
    try {
       const data = await client.AddUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreateServiceLinkedRole", async function () {
    try {
       const data = await client.CreateServiceLinkedRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetSAMLProvider", async function () {
    try {
       const data = await client.GetSAMLProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListSAMLProviders", async function () {
    try {
       const data = await client.ListSAMLProviders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreateRole", async function () {
    try {
       const data = await client.CreateRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateUserOIDCConfig", async function () {
    try {
       const data = await client.UpdateUserOIDCConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.PutRolePermissionsBoundary", async function () {
    try {
       const data = await client.PutRolePermissionsBoundary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListUsers", async function () {
    try {
       const data = await client.ListUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListAttachedRolePolicies", async function () {
    try {
       const data = await client.ListAttachedRolePolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeletePolicy", async function () {
    try {
       const data = await client.DeletePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeleteRolePermissionsBoundary", async function () {
    try {
       const data = await client.DeleteRolePermissionsBoundary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DescribeUserSAMLConfig", async function () {
    try {
       const data = await client.DescribeUserSAMLConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeletePolicyVersion", async function () {
    try {
       const data = await client.DeletePolicyVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DetachRolePolicy", async function () {
    try {
       const data = await client.DetachRolePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.SetDefaultPolicyVersion", async function () {
    try {
       const data = await client.SetDefaultPolicyVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DescribeRoleList", async function () {
    try {
       const data = await client.DescribeRoleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreateSAMLProvider", async function () {
    try {
       const data = await client.CreateSAMLProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeleteSAMLProvider", async function () {
    try {
       const data = await client.DeleteSAMLProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateUser", async function () {
    try {
       const data = await client.UpdateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetPolicy", async function () {
    try {
       const data = await client.GetPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetRolePermissionBoundary", async function () {
    try {
       const data = await client.GetRolePermissionBoundary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetCustomMFATokenInfo", async function () {
    try {
       const data = await client.GetCustomMFATokenInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListAccessKeys", async function () {
    try {
       const data = await client.ListAccessKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeleteRole", async function () {
    try {
       const data = await client.DeleteRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetUser", async function () {
    try {
       const data = await client.GetUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeleteUserPermissionsBoundary", async function () {
    try {
       const data = await client.DeleteUserPermissionsBoundary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListAttachedGroupPolicies", async function () {
    try {
       const data = await client.ListAttachedGroupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetServiceLinkedRoleDeletionStatus", async function () {
    try {
       const data = await client.GetServiceLinkedRoleDeletionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DescribeUserOIDCConfig", async function () {
    try {
       const data = await client.DescribeUserOIDCConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListPoliciesGrantingServiceAccess", async function () {
    try {
       const data = await client.ListPoliciesGrantingServiceAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ConsumeCustomMFAToken", async function () {
    try {
       const data = await client.ConsumeCustomMFAToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetGroup", async function () {
    try {
       const data = await client.GetGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetPolicyVersion", async function () {
    try {
       const data = await client.GetPolicyVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListAttachedUserAllPolicies", async function () {
    try {
       const data = await client.ListAttachedUserAllPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetUserPermissionBoundary", async function () {
    try {
       const data = await client.GetUserPermissionBoundary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreateUserSAMLConfig", async function () {
    try {
       const data = await client.CreateUserSAMLConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateSAMLProvider", async function () {
    try {
       const data = await client.UpdateSAMLProvider({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListGroups", async function () {
    try {
       const data = await client.ListGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.AddUserToGroup", async function () {
    try {
       const data = await client.AddUserToGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.AttachRolePolicy", async function () {
    try {
       const data = await client.AttachRolePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DescribeSafeAuthFlagColl", async function () {
    try {
       const data = await client.DescribeSafeAuthFlagColl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetAccountSummary", async function () {
    try {
       const data = await client.GetAccountSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListPolicyVersions", async function () {
    try {
       const data = await client.ListPolicyVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DescribeSafeAuthFlag", async function () {
    try {
       const data = await client.DescribeSafeAuthFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DescribeSafeAuthFlagIntl", async function () {
    try {
       const data = await client.DescribeSafeAuthFlagIntl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateGroup", async function () {
    try {
       const data = await client.UpdateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetRole", async function () {
    try {
       const data = await client.GetRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateRoleDescription", async function () {
    try {
       const data = await client.UpdateRoleDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListAttachedUserPolicies", async function () {
    try {
       const data = await client.ListAttachedUserPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DeleteUser", async function () {
    try {
       const data = await client.DeleteUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateUserSAMLConfig", async function () {
    try {
       const data = await client.UpdateUserSAMLConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreatePolicyVersion", async function () {
    try {
       const data = await client.CreatePolicyVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListCollaborators", async function () {
    try {
       const data = await client.ListCollaborators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DetachGroupPolicy", async function () {
    try {
       const data = await client.DetachGroupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DescribeSubAccounts", async function () {
    try {
       const data = await client.DescribeSubAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.RemoveUserFromGroup", async function () {
    try {
       const data = await client.RemoveUserFromGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListPolicies", async function () {
    try {
       const data = await client.ListPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListUsersForGroup", async function () {
    try {
       const data = await client.ListUsersForGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.AttachUserPolicy", async function () {
    try {
       const data = await client.AttachUserPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListEntitiesForPolicy", async function () {
    try {
       const data = await client.ListEntitiesForPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreateUserOIDCConfig", async function () {
    try {
       const data = await client.CreateUserOIDCConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListWeChatWorkSubAccounts", async function () {
    try {
       const data = await client.ListWeChatWorkSubAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.GetSecurityLastUsed", async function () {
    try {
       const data = await client.GetSecurityLastUsed({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.AttachGroupPolicy", async function () {
    try {
       const data = await client.AttachGroupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DisableUserSSO", async function () {
    try {
       const data = await client.DisableUserSSO({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.PutUserPermissionsBoundary", async function () {
    try {
       const data = await client.PutUserPermissionsBoundary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.CreatePolicy", async function () {
    try {
       const data = await client.CreatePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdateAssumeRolePolicy", async function () {
    try {
       const data = await client.UpdateAssumeRolePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.DetachUserPolicy", async function () {
    try {
       const data = await client.DetachUserPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.ListGroupsForUser", async function () {
    try {
       const data = await client.ListGroupsForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cam.v20190116.UpdatePolicy", async function () {
    try {
       const data = await client.UpdatePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
