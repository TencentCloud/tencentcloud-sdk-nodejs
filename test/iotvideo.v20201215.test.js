
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotvideo.v20201215.Client({
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
describe("iotvideo.v20201215.test.js", function () {

it("iotvideo.v20201215.DescribeProducts", async function () {
    try {
       const data = await client.DescribeProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDeviceCommLog", async function () {
    try {
       const data = await client.DescribeDeviceCommLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CheckForwardAuth", async function () {
    try {
       const data = await client.CheckForwardAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDeviceData", async function () {
    try {
       const data = await client.DescribeDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeSDKLog", async function () {
    try {
       const data = await client.DescribeSDKLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyProduct", async function () {
    try {
       const data = await client.ModifyProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.TransferCloudStorage", async function () {
    try {
       const data = await client.TransferCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyDeviceLogLevel", async function () {
    try {
       const data = await client.ModifyDeviceLogLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateAIDetection", async function () {
    try {
       const data = await client.CreateAIDetection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeFirmware", async function () {
    try {
       const data = await client.DescribeFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeCloudStorageDate", async function () {
    try {
       const data = await client.DescribeCloudStorageDate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.RetryDeviceFirmwareTask", async function () {
    try {
       const data = await client.RetryDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeAIModels", async function () {
    try {
       const data = await client.DescribeAIModels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.UploadFirmware", async function () {
    try {
       const data = await client.UploadFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeAIModelApplications", async function () {
    try {
       const data = await client.DescribeAIModelApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeProduct", async function () {
    try {
       const data = await client.DescribeProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeAIModelUsage", async function () {
    try {
       const data = await client.DescribeAIModelUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeBatch", async function () {
    try {
       const data = await client.DescribeBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyDevice", async function () {
    try {
       const data = await client.ModifyDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeCloudStorageUsers", async function () {
    try {
       const data = await client.DescribeCloudStorageUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CancelAIModelApplication", async function () {
    try {
       const data = await client.CancelAIModelApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyDataForward", async function () {
    try {
       const data = await client.ModifyDataForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeCloudStorage", async function () {
    try {
       const data = await client.DescribeCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeBatchs", async function () {
    try {
       const data = await client.DescribeBatchs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.BatchUpdateFirmware", async function () {
    try {
       const data = await client.BatchUpdateFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateProduct", async function () {
    try {
       const data = await client.CreateProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDeviceActionHistory", async function () {
    try {
       const data = await client.DescribeDeviceActionHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.UpdateAIModelChannel", async function () {
    try {
       const data = await client.UpdateAIModelChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateCOSCredentials", async function () {
    try {
       const data = await client.CreateCOSCredentials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeModelDefinition", async function () {
    try {
       const data = await client.DescribeModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DeleteForwardRule", async function () {
    try {
       const data = await client.DeleteForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.InheritCloudStorageUser", async function () {
    try {
       const data = await client.InheritCloudStorageUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateBatch", async function () {
    try {
       const data = await client.CreateBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeFirmwareTaskStatistics", async function () {
    try {
       const data = await client.DescribeFirmwareTaskStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyProductDynamicRegister", async function () {
    try {
       const data = await client.ModifyProductDynamicRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDeviceDataHistory", async function () {
    try {
       const data = await client.DescribeDeviceDataHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeFirmwareTasks", async function () {
    try {
       const data = await client.DescribeFirmwareTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.GetFirmwareURL", async function () {
    try {
       const data = await client.GetFirmwareURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyForwardRule", async function () {
    try {
       const data = await client.ModifyForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateCloudStorage", async function () {
    try {
       const data = await client.CreateCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.GenerateSignedVideoURL", async function () {
    try {
       const data = await client.GenerateSignedVideoURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.SetForwardAuth", async function () {
    try {
       const data = await client.SetForwardAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ListFirmwares", async function () {
    try {
       const data = await client.ListFirmwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.EditFirmware", async function () {
    try {
       const data = await client.EditFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeCategory", async function () {
    try {
       const data = await client.DescribeCategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.PublishMessage", async function () {
    try {
       const data = await client.PublishMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeFirmwareTaskDistribution", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeProductDynamicRegister", async function () {
    try {
       const data = await client.DescribeProductDynamicRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDeviceEventHistory", async function () {
    try {
       const data = await client.DescribeDeviceEventHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyDataForwardStatus", async function () {
    try {
       const data = await client.ModifyDataForwardStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateTaskFileUrl", async function () {
    try {
       const data = await client.CreateTaskFileUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeFirmwareTask", async function () {
    try {
       const data = await client.DescribeFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ImportModelDefinition", async function () {
    try {
       const data = await client.ImportModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ReportAliveDevice", async function () {
    try {
       const data = await client.ReportAliveDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ResetCloudStorage", async function () {
    try {
       const data = await client.ResetCloudStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDeviceStatusLog", async function () {
    try {
       const data = await client.DescribeDeviceStatusLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeCloudStorageEvents", async function () {
    try {
       const data = await client.DescribeCloudStorageEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateDataForward", async function () {
    try {
       const data = await client.CreateDataForward({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeFirmwareTaskDevices", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CancelDeviceFirmwareTask", async function () {
    try {
       const data = await client.CancelDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeAIModelChannel", async function () {
    try {
       const data = await client.DescribeAIModelChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDataForwardList", async function () {
    try {
       const data = await client.DescribeDataForwardList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeCloudStorageTime", async function () {
    try {
       const data = await client.DescribeCloudStorageTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeForwardRule", async function () {
    try {
       const data = await client.DescribeForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.CreateForwardRule", async function () {
    try {
       const data = await client.CreateForwardRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.GetAllFirmwareVersion", async function () {
    try {
       const data = await client.GetAllFirmwareVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ModifyModelDefinition", async function () {
    try {
       const data = await client.ModifyModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ApplyAIModel", async function () {
    try {
       const data = await client.ApplyAIModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.BindCloudStorageUser", async function () {
    try {
       const data = await client.BindCloudStorageUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DeleteFirmware", async function () {
    try {
       const data = await client.DeleteFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeBalanceTransactions", async function () {
    try {
       const data = await client.DescribeBalanceTransactions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.ControlDeviceData", async function () {
    try {
       const data = await client.ControlDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeCloudStorageThumbnail", async function () {
    try {
       const data = await client.DescribeCloudStorageThumbnail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.DescribeBalance", async function () {
    try {
       const data = await client.DescribeBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20201215.WakeUpDevice", async function () {
    try {
       const data = await client.WakeUpDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
