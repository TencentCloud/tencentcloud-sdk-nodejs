
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotcloud.v20180614.Client({
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
describe("iotcloud.v20180614.test.js", function () {

it("iotcloud.v20180614.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.GetCOSURL", async function () {
    try {
       const data = await client.GetCOSURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.PublishRRPCMessage", async function () {
    try {
       const data = await client.PublishRRPCMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DeleteLoraDevice", async function () {
    try {
       const data = await client.DeleteLoraDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeMultiDevices", async function () {
    try {
       const data = await client.DescribeMultiDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.ListLogPayload", async function () {
    try {
       const data = await client.ListLogPayload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeFirmware", async function () {
    try {
       const data = await client.DescribeFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeDeviceShadow", async function () {
    try {
       const data = await client.DescribeDeviceShadow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateMultiDevice", async function () {
    try {
       const data = await client.CreateMultiDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.UpdateDeviceAvailableState", async function () {
    try {
       const data = await client.UpdateDeviceAvailableState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeProduct", async function () {
    try {
       const data = await client.DescribeProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateTopicRule", async function () {
    try {
       const data = await client.CreateTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CancelTask", async function () {
    try {
       const data = await client.CancelTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.RetryDeviceFirmwareTask", async function () {
    try {
       const data = await client.RetryDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateTopicPolicy", async function () {
    try {
       const data = await client.CreateTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.BatchUpdateFirmware", async function () {
    try {
       const data = await client.BatchUpdateFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateProduct", async function () {
    try {
       const data = await client.CreateProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.GetUserResourceInfo", async function () {
    try {
       const data = await client.GetUserResourceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.SetProductsForbiddenStatus", async function () {
    try {
       const data = await client.SetProductsForbiddenStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeDeviceClientKey", async function () {
    try {
       const data = await client.DescribeDeviceClientKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeProducts", async function () {
    try {
       const data = await client.DescribeProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateMultiDevicesTask", async function () {
    try {
       const data = await client.CreateMultiDevicesTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeResourceTasks", async function () {
    try {
       const data = await client.DescribeResourceTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeFirmwareTaskStatistics", async function () {
    try {
       const data = await client.DescribeFirmwareTaskStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeLoraDevice", async function () {
    try {
       const data = await client.DescribeLoraDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeTask", async function () {
    try {
       const data = await client.DescribeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.UpdateDevicesEnableState", async function () {
    try {
       const data = await client.UpdateDevicesEnableState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.ReplaceTopicRule", async function () {
    try {
       const data = await client.ReplaceTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.ListSDKLog", async function () {
    try {
       const data = await client.ListSDKLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeProductResource", async function () {
    try {
       const data = await client.DescribeProductResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribePushResourceTaskStatistics", async function () {
    try {
       const data = await client.DescribePushResourceTaskStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.EditFirmware", async function () {
    try {
       const data = await client.EditFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateDevice", async function () {
    try {
       const data = await client.CreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeDeviceResource", async function () {
    try {
       const data = await client.DescribeDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.PublishMessage", async function () {
    try {
       const data = await client.PublishMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeFirmwareTaskDistribution", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DownloadDeviceResource", async function () {
    try {
       const data = await client.DownloadDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateTaskFileUrl", async function () {
    try {
       const data = await client.CreateTaskFileUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.ResetDeviceState", async function () {
    try {
       const data = await client.ResetDeviceState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeFirmwareTask", async function () {
    try {
       const data = await client.DescribeFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.UploadFirmware", async function () {
    try {
       const data = await client.UploadFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeDeviceResources", async function () {
    try {
       const data = await client.DescribeDeviceResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.UpdateProductDynamicRegister", async function () {
    try {
       const data = await client.UpdateProductDynamicRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.ListLog", async function () {
    try {
       const data = await client.ListLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeFirmwareTaskDevices", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CancelDeviceFirmwareTask", async function () {
    try {
       const data = await client.CancelDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.PublishAsDevice", async function () {
    try {
       const data = await client.PublishAsDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.CreateLoraDevice", async function () {
    try {
       const data = await client.CreateLoraDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.EnableTopicRule", async function () {
    try {
       const data = await client.EnableTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.BindDevices", async function () {
    try {
       const data = await client.BindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.UpdateTopicPolicy", async function () {
    try {
       const data = await client.UpdateTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.UnbindDevices", async function () {
    try {
       const data = await client.UnbindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.PublishBroadcastMessage", async function () {
    try {
       const data = await client.PublishBroadcastMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeProductTasks", async function () {
    try {
       const data = await client.DescribeProductTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeAllDevices", async function () {
    try {
       const data = await client.DescribeAllDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DisableTopicRule", async function () {
    try {
       const data = await client.DisableTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeMultiDevTask", async function () {
    try {
       const data = await client.DescribeMultiDevTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.UpdateDeviceShadow", async function () {
    try {
       const data = await client.UpdateDeviceShadow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeFirmwareTasks", async function () {
    try {
       const data = await client.DescribeFirmwareTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.PublishToDevice", async function () {
    try {
       const data = await client.PublishToDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeProductResources", async function () {
    try {
       const data = await client.DescribeProductResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DeleteDeviceResource", async function () {
    try {
       const data = await client.DeleteDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DescribeProductTask", async function () {
    try {
       const data = await client.DescribeProductTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20180614.DeleteTopicRule", async function () {
    try {
       const data = await client.DeleteTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
