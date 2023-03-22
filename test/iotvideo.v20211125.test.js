
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotvideo.v20211125.Client({
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
describe("iotvideo.v20211125.test.js", function () {

it("iotvideo.v20211125.CallTRTCDevice", async function () {
    try {
       const data = await client.CallTRTCDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateAIDetection", async function () {
    try {
       const data = await client.CreateAIDetection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeAIModels", async function () {
    try {
       const data = await client.DescribeAIModels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeAIModelApplications", async function () {
    try {
       const data = await client.DescribeAIModelApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeProduct", async function () {
    try {
       const data = await client.DescribeProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.GetAllFirmwareVersion", async function () {
    try {
       const data = await client.GetAllFirmwareVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeProducts", async function () {
    try {
       const data = await client.DescribeProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeUser", async function () {
    try {
       const data = await client.DescribeUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeFirmwareTaskStatistics", async function () {
    try {
       const data = await client.DescribeFirmwareTaskStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CallDeviceActionSync", async function () {
    try {
       const data = await client.CallDeviceActionSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyPushChannel", async function () {
    try {
       const data = await client.ModifyPushChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.GenerateSignedVideoURL", async function () {
    try {
       const data = await client.GenerateSignedVideoURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.EditFirmware", async function () {
    try {
       const data = await client.EditFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.PublishMessage", async function () {
    try {
       const data = await client.PublishMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceEventHistory", async function () {
    try {
       const data = await client.DescribeDeviceEventHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ImportModelDefinition", async function () {
    try {
       const data = await client.ImportModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CancelDeviceFirmwareTask", async function () {
    try {
       const data = await client.CancelDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ReportAliveDevice", async function () {
    try {
       const data = await client.ReportAliveDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeForwardRule", async function () {
    try {
       const data = await client.DescribeForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribePackageConsumeTasks", async function () {
    try {
       const data = await client.DescribePackageConsumeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeAccount", async function () {
    try {
       const data = await client.DescribeAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStoragePackageConsumeStats", async function () {
    try {
       const data = await client.DescribeCloudStoragePackageConsumeStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeFirmwareTasks", async function () {
    try {
       const data = await client.DescribeFirmwareTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ControlDeviceData", async function () {
    try {
       const data = await client.ControlDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceCommLog", async function () {
    try {
       const data = await client.DescribeDeviceCommLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeFirmware", async function () {
    try {
       const data = await client.DescribeFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStorageDate", async function () {
    try {
       const data = await client.DescribeCloudStorageDate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStorageUsers", async function () {
    try {
       const data = await client.DescribeCloudStorageUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeAIModelUsage", async function () {
    try {
       const data = await client.DescribeAIModelUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.RetryDeviceFirmwareTask", async function () {
    try {
       const data = await client.RetryDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyDevice", async function () {
    try {
       const data = await client.ModifyDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyDataForward", async function () {
    try {
       const data = await client.ModifyDataForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.BatchUpdateFirmware", async function () {
    try {
       const data = await client.BatchUpdateFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateProduct", async function () {
    try {
       const data = await client.CreateProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.InheritCloudStorageUser", async function () {
    try {
       const data = await client.InheritCloudStorageUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.GetFirmwareURL", async function () {
    try {
       const data = await client.GetFirmwareURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeBatch", async function () {
    try {
       const data = await client.DescribeBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ListFirmwares", async function () {
    try {
       const data = await client.ListFirmwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCategory", async function () {
    try {
       const data = await client.DescribeCategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyDataForwardStatus", async function () {
    try {
       const data = await client.ModifyDataForwardStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeFirmwareTask", async function () {
    try {
       const data = await client.DescribeFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ResetCloudStorage", async function () {
    try {
       const data = await client.ResetCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeFirmwareTaskDevices", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDataForwardList", async function () {
    try {
       const data = await client.DescribeDataForwardList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeProductDynamicRegister", async function () {
    try {
       const data = await client.DescribeProductDynamicRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.UpdateAIModelChannel", async function () {
    try {
       const data = await client.UpdateAIModelChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStorageThumbnail", async function () {
    try {
       const data = await client.DescribeCloudStorageThumbnail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DeleteFirmware", async function () {
    try {
       const data = await client.DeleteFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CallDeviceActionAsync", async function () {
    try {
       const data = await client.CallDeviceActionAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CheckForwardAuth", async function () {
    try {
       const data = await client.CheckForwardAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceData", async function () {
    try {
       const data = await client.DescribeDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyProduct", async function () {
    try {
       const data = await client.ModifyProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyDeviceLogLevel", async function () {
    try {
       const data = await client.ModifyDeviceLogLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyForwardRule", async function () {
    try {
       const data = await client.ModifyForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CancelAIModelApplication", async function () {
    try {
       const data = await client.CancelAIModelApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStorage", async function () {
    try {
       const data = await client.DescribeCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeBatchs", async function () {
    try {
       const data = await client.DescribeBatchs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceActionHistory", async function () {
    try {
       const data = await client.DescribeDeviceActionHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateCOSCredentials", async function () {
    try {
       const data = await client.CreateCOSCredentials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateBatch", async function () {
    try {
       const data = await client.CreateBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribePushChannel", async function () {
    try {
       const data = await client.DescribePushChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateCloudStorage", async function () {
    try {
       const data = await client.CreateCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStorageTime", async function () {
    try {
       const data = await client.DescribeCloudStorageTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceDataStats", async function () {
    try {
       const data = await client.DescribeDeviceDataStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.WakeUpDevice", async function () {
    try {
       const data = await client.WakeUpDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceStatusLog", async function () {
    try {
       const data = await client.DescribeDeviceStatusLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateForwardRule", async function () {
    try {
       const data = await client.CreateForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeAIModelChannel", async function () {
    try {
       const data = await client.DescribeAIModelChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeBalance", async function () {
    try {
       const data = await client.DescribeBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeSDKLog", async function () {
    try {
       const data = await client.DescribeSDKLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.BindCloudStorageUser", async function () {
    try {
       const data = await client.BindCloudStorageUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeMessageDataStats", async function () {
    try {
       const data = await client.DescribeMessageDataStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.TransferCloudStorage", async function () {
    try {
       const data = await client.TransferCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeBalanceTransactions", async function () {
    try {
       const data = await client.DescribeBalanceTransactions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DeleteForwardRule", async function () {
    try {
       const data = await client.DeleteForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyProductDynamicRegister", async function () {
    try {
       const data = await client.ModifyProductDynamicRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDeviceDataHistory", async function () {
    try {
       const data = await client.DescribeDeviceDataHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribePackageConsumeTask", async function () {
    try {
       const data = await client.DescribePackageConsumeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.SetForwardAuth", async function () {
    try {
       const data = await client.SetForwardAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeFirmwareTaskDistribution", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.GenSingleDeviceSignatureOfPublic", async function () {
    try {
       const data = await client.GenSingleDeviceSignatureOfPublic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateTaskFileUrl", async function () {
    try {
       const data = await client.CreateTaskFileUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStorageStreamData", async function () {
    try {
       const data = await client.DescribeCloudStorageStreamData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.UploadFirmware", async function () {
    try {
       const data = await client.UploadFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.CreateDataForward", async function () {
    try {
       const data = await client.CreateDataForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeBonuses", async function () {
    try {
       const data = await client.DescribeBonuses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStorageEvents", async function () {
    try {
       const data = await client.DescribeCloudStorageEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ModifyModelDefinition", async function () {
    try {
       const data = await client.ModifyModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.ApplyAIModel", async function () {
    try {
       const data = await client.ApplyAIModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeModelDefinition", async function () {
    try {
       const data = await client.DescribeModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20211125.DescribeCloudStoragePackageConsumeDetails", async function () {
    try {
       const data = await client.DescribeCloudStoragePackageConsumeDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
