
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bh.v20230418.Client({
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
describe("bh.v20230418.test.js", function () {

it("bh.v20230418.ModifyDeviceGroup", async function () {
    try {
       const data = await client.ModifyDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeDeviceGroupMembers", async function () {
    try {
       const data = await client.DescribeDeviceGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyOAuthSetting", async function () {
    try {
       const data = await client.ModifyOAuthSetting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyCmdTemplate", async function () {
    try {
       const data = await client.ModifyCmdTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeLoginEvent", async function () {
    try {
       const data = await client.DescribeLoginEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateDeviceGroup", async function () {
    try {
       const data = await client.CreateDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeDeviceAccounts", async function () {
    try {
       const data = await client.DescribeDeviceAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ResetUser", async function () {
    try {
       const data = await client.ResetUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteDevices", async function () {
    try {
       const data = await client.DeleteDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateChangePwdTask", async function () {
    try {
       const data = await client.CreateChangePwdTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeUserGroups", async function () {
    try {
       const data = await client.DescribeUserGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeDomains", async function () {
    try {
       const data = await client.DescribeDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeployResource", async function () {
    try {
       const data = await client.DeployResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyDevice", async function () {
    try {
       const data = await client.ModifyDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.BindDeviceResource", async function () {
    try {
       const data = await client.BindDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.BindDeviceAccountPassword", async function () {
    try {
       const data = await client.BindDeviceAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.SearchFile", async function () {
    try {
       const data = await client.SearchFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.SearchSession", async function () {
    try {
       const data = await client.SearchSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteAcls", async function () {
    try {
       const data = await client.DeleteAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.AccessDevices", async function () {
    try {
       const data = await client.AccessDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeResources", async function () {
    try {
       const data = await client.DescribeResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteUserGroupMembers", async function () {
    try {
       const data = await client.DeleteUserGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyChangePwdTask", async function () {
    try {
       const data = await client.ModifyChangePwdTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateAssetSyncJob", async function () {
    try {
       const data = await client.CreateAssetSyncJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeAcls", async function () {
    try {
       const data = await client.DescribeAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.RunChangePwdTask", async function () {
    try {
       const data = await client.RunChangePwdTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ResetDeviceAccountPassword", async function () {
    try {
       const data = await client.ResetDeviceAccountPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyUserGroup", async function () {
    try {
       const data = await client.ModifyUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteDeviceGroups", async function () {
    try {
       const data = await client.DeleteDeviceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyAcl", async function () {
    try {
       const data = await client.ModifyAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteUsers", async function () {
    try {
       const data = await client.DeleteUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateAcl", async function () {
    try {
       const data = await client.CreateAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.SearchCommandBySid", async function () {
    try {
       const data = await client.SearchCommandBySid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ResetDeviceAccountPrivateKey", async function () {
    try {
       const data = await client.ResetDeviceAccountPrivateKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeAssetSyncStatus", async function () {
    try {
       const data = await client.DescribeAssetSyncStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateDeviceAccount", async function () {
    try {
       const data = await client.CreateDeviceAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeChangePwdTaskDetail", async function () {
    try {
       const data = await client.DescribeChangePwdTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteDeviceGroupMembers", async function () {
    try {
       const data = await client.DeleteDeviceGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteChangePwdTask", async function () {
    try {
       const data = await client.DeleteChangePwdTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeOperationEvent", async function () {
    try {
       const data = await client.DescribeOperationEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteDeviceAccounts", async function () {
    try {
       const data = await client.DeleteDeviceAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteUserGroups", async function () {
    try {
       const data = await client.DeleteUserGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateCmdTemplate", async function () {
    try {
       const data = await client.CreateCmdTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyResource", async function () {
    try {
       const data = await client.ModifyResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.SearchAuditLog", async function () {
    try {
       const data = await client.SearchAuditLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeCmdTemplates", async function () {
    try {
       const data = await client.DescribeCmdTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DeleteCmdTemplates", async function () {
    try {
       const data = await client.DeleteCmdTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.AddUserGroupMembers", async function () {
    try {
       const data = await client.AddUserGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeDeviceGroups", async function () {
    try {
       const data = await client.DescribeDeviceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeUsers", async function () {
    try {
       const data = await client.DescribeUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeUserGroupMembers", async function () {
    try {
       const data = await client.DescribeUserGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.SearchFileBySid", async function () {
    try {
       const data = await client.SearchFileBySid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.ImportExternalDevice", async function () {
    try {
       const data = await client.ImportExternalDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.DescribeChangePwdTask", async function () {
    try {
       const data = await client.DescribeChangePwdTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.AddDeviceGroupMembers", async function () {
    try {
       const data = await client.AddDeviceGroupMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateUserGroup", async function () {
    try {
       const data = await client.CreateUserGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateResource", async function () {
    try {
       const data = await client.CreateResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.BindDeviceAccountPrivateKey", async function () {
    try {
       const data = await client.BindDeviceAccountPrivateKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.SearchCommand", async function () {
    try {
       const data = await client.SearchCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bh.v20230418.SearchSessionCommand", async function () {
    try {
       const data = await client.SearchSessionCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
