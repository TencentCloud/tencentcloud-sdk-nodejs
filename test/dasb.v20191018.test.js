
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dasb.v20191018.Client({
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
describe("dasb.v20191018.test.js", function () {

it("dasb.v20191018.DescribeDeviceGroupMembers", async function () {
    try {
       const data = await client.DescribeDeviceGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.CreateDeviceGroup", async function () {
    try {
       const data = await client.CreateDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.AddUserGroupMembers", async function () {
    try {
       const data = await client.AddUserGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeUsers", async function () {
    try {
       const data = await client.DescribeUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.BindDeviceResource", async function () {
    try {
       const data = await client.BindDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteAcls", async function () {
    try {
       const data = await client.DeleteAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeUserGroups", async function () {
    try {
       const data = await client.DescribeUserGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeResources", async function () {
    try {
       const data = await client.DescribeResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteUserGroupMembers", async function () {
    try {
       const data = await client.DeleteUserGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteDeviceGroups", async function () {
    try {
       const data = await client.DeleteDeviceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.ModifyAcl", async function () {
    try {
       const data = await client.ModifyAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteUsers", async function () {
    try {
       const data = await client.DeleteUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.CreateAcl", async function () {
    try {
       const data = await client.CreateAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeDasbImageIds", async function () {
    try {
       const data = await client.DescribeDasbImageIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeAcls", async function () {
    try {
       const data = await client.DescribeAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteDeviceGroupMembers", async function () {
    try {
       const data = await client.DeleteDeviceGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteUserGroups", async function () {
    try {
       const data = await client.DeleteUserGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeDeviceGroups", async function () {
    try {
       const data = await client.DescribeDeviceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeUserGroupMembers", async function () {
    try {
       const data = await client.DescribeUserGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.AddDeviceGroupMembers", async function () {
    try {
       const data = await client.AddDeviceGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.CreateUserGroup", async function () {
    try {
       const data = await client.CreateUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
