
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.eiam.v20210420.Client({
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
describe("eiam.v20210420.test.js", function () {

it("eiam.v20210420.DescribeUserGroup", async function () {
    try {
       const data = await client.DescribeUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.CreateAccountGroup", async function () {
    try {
       const data = await client.CreateAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeOrgResourcesAuthorization", async function () {
    try {
       const data = await client.DescribeOrgResourcesAuthorization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ModifyUserInfo", async function () {
    try {
       const data = await client.ModifyUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribePublicKey", async function () {
    try {
       const data = await client.DescribePublicKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListUsers", async function () {
    try {
       const data = await client.ListUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.RemoveAccountFromAccountGroup", async function () {
    try {
       const data = await client.RemoveAccountFromAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListAccountInAccountGroup", async function () {
    try {
       const data = await client.ListAccountInAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListAuthorizedApplicationsToUserGroup", async function () {
    try {
       const data = await client.ListAuthorizedApplicationsToUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListApplicationAuthorizations", async function () {
    try {
       const data = await client.ListApplicationAuthorizations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ModifyAccountGroup", async function () {
    try {
       const data = await client.ModifyAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeUserResourcesAuthorization", async function () {
    try {
       const data = await client.DescribeUserResourcesAuthorization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ModifyAppAccount", async function () {
    try {
       const data = await client.ModifyAppAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeUserThirdPartyAccountInfo", async function () {
    try {
       const data = await client.DescribeUserThirdPartyAccountInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DeleteUserGroup", async function () {
    try {
       const data = await client.DeleteUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DeleteAccountGroup", async function () {
    try {
       const data = await client.DeleteAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ModifyApplication", async function () {
    try {
       const data = await client.ModifyApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListUserGroups", async function () {
    try {
       const data = await client.ListUserGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.AddUserToUserGroup", async function () {
    try {
       const data = await client.AddUserToUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DeleteAppAccount", async function () {
    try {
       const data = await client.DeleteAppAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeAccountGroup", async function () {
    try {
       const data = await client.DescribeAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DeleteUsers", async function () {
    try {
       const data = await client.DeleteUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeUserGroupResourcesAuthorization", async function () {
    try {
       const data = await client.DescribeUserGroupResourcesAuthorization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.CreateAppAccount", async function () {
    try {
       const data = await client.CreateAppAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListUsersInUserGroup", async function () {
    try {
       const data = await client.ListUsersInUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListUserGroupsOfUser", async function () {
    try {
       const data = await client.ListUserGroupsOfUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListAuthorizedApplicationsToUser", async function () {
    try {
       const data = await client.ListAuthorizedApplicationsToUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeAppAccount", async function () {
    try {
       const data = await client.DescribeAppAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeOrgNode", async function () {
    try {
       const data = await client.DescribeOrgNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeUserInfo", async function () {
    try {
       const data = await client.DescribeUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.RemoveUserFromUserGroup", async function () {
    try {
       const data = await client.RemoveUserFromUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.CreateOrgNode", async function () {
    try {
       const data = await client.CreateOrgNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DeleteUser", async function () {
    try {
       const data = await client.DeleteUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListApplications", async function () {
    try {
       const data = await client.ListApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListAuthorizedApplicationsToOrgNode", async function () {
    try {
       const data = await client.ListAuthorizedApplicationsToOrgNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DeleteOrgNode", async function () {
    try {
       const data = await client.DeleteOrgNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.AddAccountToAccountGroup", async function () {
    try {
       const data = await client.AddAccountToAccountGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.CreateUserGroup", async function () {
    try {
       const data = await client.CreateUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.DescribeApplication", async function () {
    try {
       const data = await client.DescribeApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.ListUsersInOrgNode", async function () {
    try {
       const data = await client.ListUsersInOrgNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eiam.v20210420.UpdateOrgNode", async function () {
    try {
       const data = await client.UpdateOrgNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
