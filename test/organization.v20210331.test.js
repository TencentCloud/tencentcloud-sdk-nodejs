
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

it("organization.v20210331.DescribeOrganizationMembers", async function () {
    try {
       const data = await client.DescribeOrganizationMembers({})
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

it("organization.v20210331.UpdateOrganizationNode", async function () {
    try {
       const data = await client.UpdateOrganizationNode({})
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

it("organization.v20210331.BindOrganizationMemberAuthAccount", async function () {
    try {
       const data = await client.BindOrganizationMemberAuthAccount({})
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

it("organization.v20210331.DescribeOrganizationAuthNode", async function () {
    try {
       const data = await client.DescribeOrganizationAuthNode({})
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

it("organization.v20210331.DeleteOrganizationNodes", async function () {
    try {
       const data = await client.DeleteOrganizationNodes({})
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

it("organization.v20210331.DescribeOrganizationNodes", async function () {
    try {
       const data = await client.DescribeOrganizationNodes({})
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

it("organization.v20210331.DescribeOrganizationMemberPolicies", async function () {
    try {
       const data = await client.DescribeOrganizationMemberPolicies({})
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

it("organization.v20210331.DescribeOrganizationMemberAuthIdentities", async function () {
    try {
       const data = await client.DescribeOrganizationMemberAuthIdentities({})
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

it("organization.v20210331.ListOrganizationIdentity", async function () {
    try {
       const data = await client.ListOrganizationIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
