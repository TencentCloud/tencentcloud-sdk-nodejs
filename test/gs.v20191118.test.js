
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gs.v20191118.Client({
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
describe("gs.v20191118.test.js", function () {

it("gs.v20191118.BackUpAndroidInstanceToStorage", async function () {
    try {
       const data = await client.BackUpAndroidInstanceToStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstancesUserId", async function () {
    try {
       const data = await client.ModifyAndroidInstancesUserId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.TrylockWorker", async function () {
    try {
       const data = await client.TrylockWorker({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstancesProperties", async function () {
    try {
       const data = await client.ModifyAndroidInstancesProperties({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StopGame", async function () {
    try {
       const data = await client.StopGame({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SyncExecuteCommandOnAndroidInstances", async function () {
    try {
       const data = await client.SyncExecuteCommandOnAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DisableAndroidInstancesApp", async function () {
    try {
       const data = await client.DisableAndroidInstancesApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.UploadFileToAndroidInstances", async function () {
    try {
       const data = await client.UploadFileToAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.RestoreAndroidInstanceFromStorage", async function () {
    try {
       const data = await client.RestoreAndroidInstanceFromStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CleanAndroidInstancesAppData", async function () {
    try {
       const data = await client.CleanAndroidInstancesAppData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstanceSSH", async function () {
    try {
       const data = await client.CreateAndroidInstanceSSH({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstancesScreenshot", async function () {
    try {
       const data = await client.CreateAndroidInstancesScreenshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.UninstallAndroidInstancesApp", async function () {
    try {
       const data = await client.UninstallAndroidInstancesApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstanceImage", async function () {
    try {
       const data = await client.CreateAndroidInstanceImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.EnableAndroidInstancesApp", async function () {
    try {
       const data = await client.EnableAndroidInstancesApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StartPublishStreamToCSS", async function () {
    try {
       const data = await client.StartPublishStreamToCSS({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstanceInformation", async function () {
    try {
       const data = await client.ModifyAndroidInstanceInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DeleteAndroidInstanceImages", async function () {
    try {
       const data = await client.DeleteAndroidInstanceImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstancesInformation", async function () {
    try {
       const data = await client.ModifyAndroidInstancesInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstancesAppBlacklist", async function () {
    try {
       const data = await client.ModifyAndroidInstancesAppBlacklist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.InstallAndroidInstancesAppWithURL", async function () {
    try {
       const data = await client.InstallAndroidInstancesAppWithURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidInstanceLabels", async function () {
    try {
       const data = await client.DescribeAndroidInstanceLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidInstanceImages", async function () {
    try {
       const data = await client.DescribeAndroidInstanceImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StartAndroidInstancesApp", async function () {
    try {
       const data = await client.StartAndroidInstancesApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.RestartAndroidInstancesApp", async function () {
    try {
       const data = await client.RestartAndroidInstancesApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstancesResolution", async function () {
    try {
       const data = await client.ModifyAndroidInstancesResolution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DeleteAndroidInstanceLabel", async function () {
    try {
       const data = await client.DeleteAndroidInstanceLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SwitchGameArchive", async function () {
    try {
       const data = await client.SwitchGameArchive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstanceLabel", async function () {
    try {
       const data = await client.CreateAndroidInstanceLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.RenewAndroidInstancesAccessToken", async function () {
    try {
       const data = await client.RenewAndroidInstancesAccessToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidApp", async function () {
    try {
       const data = await client.CreateAndroidApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstancesResources", async function () {
    try {
       const data = await client.ModifyAndroidInstancesResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstanceWebShell", async function () {
    try {
       const data = await client.CreateAndroidInstanceWebShell({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StopAndroidInstancesApp", async function () {
    try {
       const data = await client.StopAndroidInstancesApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StartPublishStream", async function () {
    try {
       const data = await client.StartPublishStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidInstances", async function () {
    try {
       const data = await client.DescribeAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.UploadFilesToAndroidInstances", async function () {
    try {
       const data = await client.UploadFilesToAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SyncAndroidInstanceImage", async function () {
    try {
       const data = await client.SyncAndroidInstanceImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DistributePhotoToAndroidInstances", async function () {
    try {
       const data = await client.DistributePhotoToAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidInstancesAppBlacklist", async function () {
    try {
       const data = await client.DescribeAndroidInstancesAppBlacklist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StopAndroidInstances", async function () {
    try {
       const data = await client.StopAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeInstancesCount", async function () {
    try {
       const data = await client.DescribeInstancesCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstances", async function () {
    try {
       const data = await client.CreateAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateCosCredential", async function () {
    try {
       const data = await client.CreateCosCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidApp", async function () {
    try {
       const data = await client.ModifyAndroidApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StartAndroidInstances", async function () {
    try {
       const data = await client.StartAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstanceResolution", async function () {
    try {
       const data = await client.ModifyAndroidInstanceResolution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ConnectAndroidInstance", async function () {
    try {
       const data = await client.ConnectAndroidInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.StopPublishStream", async function () {
    try {
       const data = await client.StopPublishStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidInstanceApps", async function () {
    try {
       const data = await client.DescribeAndroidInstanceApps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DistributeFileToAndroidInstances", async function () {
    try {
       const data = await client.DistributeFileToAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.RebootAndroidInstanceHosts", async function () {
    try {
       const data = await client.RebootAndroidInstanceHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateSession", async function () {
    try {
       const data = await client.CreateSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DeleteAndroidAppVersion", async function () {
    try {
       const data = await client.DeleteAndroidAppVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ResetAndroidInstances", async function () {
    try {
       const data = await client.ResetAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.InstallAndroidInstancesApp", async function () {
    try {
       const data = await client.InstallAndroidInstancesApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SetAndroidInstancesFGAppKeepAlive", async function () {
    try {
       const data = await client.SetAndroidInstancesFGAppKeepAlive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidApps", async function () {
    try {
       const data = await client.DescribeAndroidApps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstancesAccessToken", async function () {
    try {
       const data = await client.CreateAndroidInstancesAccessToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CopyAndroidInstance", async function () {
    try {
       const data = await client.CopyAndroidInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidAppVersion", async function () {
    try {
       const data = await client.CreateAndroidAppVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DestroyAndroidInstances", async function () {
    try {
       const data = await client.DestroyAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DeleteAndroidApp", async function () {
    try {
       const data = await client.DeleteAndroidApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.CreateAndroidInstanceADB", async function () {
    try {
       const data = await client.CreateAndroidInstanceADB({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SetAndroidInstancesBGAppKeepAlive", async function () {
    try {
       const data = await client.SetAndroidInstancesBGAppKeepAlive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.FetchAndroidInstancesLogs", async function () {
    try {
       const data = await client.FetchAndroidInstancesLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ExecuteCommandOnAndroidInstances", async function () {
    try {
       const data = await client.ExecuteCommandOnAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.RebootAndroidInstances", async function () {
    try {
       const data = await client.RebootAndroidInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ImportAndroidInstanceImage", async function () {
    try {
       const data = await client.ImportAndroidInstanceImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidInstancesByApps", async function () {
    try {
       const data = await client.DescribeAndroidInstancesByApps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DeleteAndroidInstanceBackupFiles", async function () {
    try {
       const data = await client.DeleteAndroidInstanceBackupFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidAppVersion", async function () {
    try {
       const data = await client.ModifyAndroidAppVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.ModifyAndroidInstancesLabels", async function () {
    try {
       const data = await client.ModifyAndroidInstancesLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.SaveGameArchive", async function () {
    try {
       const data = await client.SaveGameArchive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gs.v20191118.DescribeAndroidInstanceTasksStatus", async function () {
    try {
       const data = await client.DescribeAndroidInstanceTasksStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
