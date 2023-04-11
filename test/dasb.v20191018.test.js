
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

it("dasb.v20191018.ModifyDeviceGroup", async function () {
    try {
       const data = await client.ModifyDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeDeviceGroupMembers", async function () {
    try {
       const data = await client.DescribeDeviceGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeLoginEvent", async function () {
    try {
       const data = await client.DescribeLoginEvent({})
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

it("dasb.v20191018.DescribeDeviceAccounts", async function () {
    try {
       const data = await client.DescribeDeviceAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.ResetUser", async function () {
    try {
       const data = await client.ResetUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteDevices", async function () {
    try {
       const data = await client.DeleteDevices({})
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

it("dasb.v20191018.DescribeUserGroups", async function () {
    try {
       const data = await client.DescribeUserGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeployResource", async function () {
    try {
       const data = await client.DeployResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.ModifyDevice", async function () {
    try {
       const data = await client.ModifyDevice({})
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

it("dasb.v20191018.BindDeviceAccountPassword", async function () {
    try {
       const data = await client.BindDeviceAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.SearchFile", async function () {
    try {
       const data = await client.SearchFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.SearchSession", async function () {
    try {
       const data = await client.SearchSession({})
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

it("dasb.v20191018.CreateAssetSyncJob", async function () {
    try {
       const data = await client.CreateAssetSyncJob({})
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

it("dasb.v20191018.ResetDeviceAccountPassword", async function () {
    try {
       const data = await client.ResetDeviceAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.SearchCommandBySid", async function () {
    try {
       const data = await client.SearchCommandBySid({})
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

it("dasb.v20191018.CreateDeviceAccount", async function () {
    try {
       const data = await client.CreateDeviceAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.SearchAuditLog", async function () {
    try {
       const data = await client.SearchAuditLog({})
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

it("dasb.v20191018.DescribeOperationEvent", async function () {
    try {
       const data = await client.DescribeOperationEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteDeviceAccounts", async function () {
    try {
       const data = await client.DeleteDeviceAccounts({})
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

it("dasb.v20191018.CreateCmdTemplate", async function () {
    try {
       const data = await client.CreateCmdTemplate({})
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

it("dasb.v20191018.DescribeCmdTemplates", async function () {
    try {
       const data = await client.DescribeCmdTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DeleteCmdTemplates", async function () {
    try {
       const data = await client.DeleteCmdTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.DescribeAssetSyncStatus", async function () {
    try {
       const data = await client.DescribeAssetSyncStatus({})
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

it("dasb.v20191018.DescribeUsers", async function () {
    try {
       const data = await client.DescribeUsers({})
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

it("dasb.v20191018.SearchFileBySid", async function () {
    try {
       const data = await client.SearchFileBySid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.ImportExternalDevice", async function () {
    try {
       const data = await client.ImportExternalDevice({})
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

it("dasb.v20191018.ResetDeviceAccountPrivateKey", async function () {
    try {
       const data = await client.ResetDeviceAccountPrivateKey({})
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

it("dasb.v20191018.BindDeviceAccountPrivateKey", async function () {
    try {
       const data = await client.BindDeviceAccountPrivateKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.SearchCommand", async function () {
    try {
       const data = await client.SearchCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dasb.v20191018.SearchSessionCommand", async function () {
    try {
       const data = await client.SearchSessionCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
