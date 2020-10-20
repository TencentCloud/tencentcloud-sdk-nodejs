
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.organization.v20181225.Client({
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
describe("organization.v20181225.test.js", function () {

it("organization.v20181225.DenyOrganizationInvitation", async function () {
    try {
       const data = await client.DenyOrganizationInvitation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.ListOrganizationInvitations", async function () {
    try {
       const data = await client.ListOrganizationInvitations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.UpdateOrganizationNode", async function () {
    try {
       const data = await client.UpdateOrganizationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.AcceptOrganizationInvitation", async function () {
    try {
       const data = await client.AcceptOrganizationInvitation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.GetOrganizationMember", async function () {
    try {
       const data = await client.GetOrganizationMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.GetOrganization", async function () {
    try {
       const data = await client.GetOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.ListOrganizationNodes", async function () {
    try {
       const data = await client.ListOrganizationNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.UpdateOrganizationMember", async function () {
    try {
       const data = await client.UpdateOrganizationMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.QuitOrganization", async function () {
    try {
       const data = await client.QuitOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.DeleteOrganizationNodes", async function () {
    try {
       const data = await client.DeleteOrganizationNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.ListOrganizationMembers", async function () {
    try {
       const data = await client.ListOrganizationMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.DeleteOrganizationMemberFromNode", async function () {
    try {
       const data = await client.DeleteOrganizationMemberFromNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.AddOrganizationNode", async function () {
    try {
       const data = await client.AddOrganizationNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.SendOrganizationInvitation", async function () {
    try {
       const data = await client.SendOrganizationInvitation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.CancelOrganizationInvitation", async function () {
    try {
       const data = await client.CancelOrganizationInvitation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.DeleteOrganization", async function () {
    try {
       const data = await client.DeleteOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.DeleteOrganizationMembers", async function () {
    try {
       const data = await client.DeleteOrganizationMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.ListOrganizationNodeMembers", async function () {
    try {
       const data = await client.ListOrganizationNodeMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.CreateOrganization", async function () {
    try {
       const data = await client.CreateOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("organization.v20181225.MoveOrganizationMembersToNode", async function () {
    try {
       const data = await client.MoveOrganizationMembersToNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
