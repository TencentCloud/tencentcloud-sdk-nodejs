
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotcloud.v20210408.Client({
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
describe("iotcloud.v20210408.test.js", function () {

it("iotcloud.v20210408.GetCOSURL", async function () {
    try {
       const data = await client.GetCOSURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ReplaceTopicRule", async function () {
    try {
       const data = await client.ReplaceTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.PublishRRPCMessage", async function () {
    try {
       const data = await client.PublishRRPCMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateDeviceLogLevel", async function () {
    try {
       const data = await client.UpdateDeviceLogLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeGatewayBindDevices", async function () {
    try {
       const data = await client.DescribeGatewayBindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListLogPayload", async function () {
    try {
       const data = await client.ListLogPayload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateTopicPolicy", async function () {
    try {
       const data = await client.UpdateTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeFirmware", async function () {
    try {
       const data = await client.DescribeFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDeviceShadow", async function () {
    try {
       const data = await client.DescribeDeviceShadow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.PublishBroadcastMessage", async function () {
    try {
       const data = await client.PublishBroadcastMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateDeviceAvailableState", async function () {
    try {
       const data = await client.UpdateDeviceAvailableState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProduct", async function () {
    try {
       const data = await client.DescribeProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreateTopicRule", async function () {
    try {
       const data = await client.CreateTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.RetryDeviceFirmwareTask", async function () {
    try {
       const data = await client.RetryDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreateTopicPolicy", async function () {
    try {
       const data = await client.CreateTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateProductPrivateCA", async function () {
    try {
       const data = await client.UpdateProductPrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribePrivateCABindedProducts", async function () {
    try {
       const data = await client.DescribePrivateCABindedProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.BatchUpdateFirmware", async function () {
    try {
       const data = await client.BatchUpdateFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreateProduct", async function () {
    try {
       const data = await client.CreateProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.GetUserResourceInfo", async function () {
    try {
       const data = await client.GetUserResourceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.SetProductsForbiddenStatus", async function () {
    try {
       const data = await client.SetProductsForbiddenStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProductCA", async function () {
    try {
       const data = await client.DescribeProductCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDeviceClientKey", async function () {
    try {
       const data = await client.DescribeDeviceClientKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProducts", async function () {
    try {
       const data = await client.DescribeProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreateMultiDevicesTask", async function () {
    try {
       const data = await client.CreateMultiDevicesTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeResourceTasks", async function () {
    try {
       const data = await client.DescribeResourceTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeFirmwareTaskStatistics", async function () {
    try {
       const data = await client.DescribeFirmwareTaskStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteProductPrivateCA", async function () {
    try {
       const data = await client.DeleteProductPrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribePushResourceTaskStatistics", async function () {
    try {
       const data = await client.DescribePushResourceTaskStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProductTask", async function () {
    try {
       const data = await client.DescribeProductTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateDevicesEnableState", async function () {
    try {
       const data = await client.UpdateDevicesEnableState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListFirmwares", async function () {
    try {
       const data = await client.ListFirmwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListSDKLog", async function () {
    try {
       const data = await client.ListSDKLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProductResource", async function () {
    try {
       const data = await client.DescribeProductResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.EditFirmware", async function () {
    try {
       const data = await client.EditFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteDeviceShadow", async function () {
    try {
       const data = await client.DeleteDeviceShadow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreateDevice", async function () {
    try {
       const data = await client.CreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDeviceResource", async function () {
    try {
       const data = await client.DescribeDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.PublishMessage", async function () {
    try {
       const data = await client.PublishMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeFirmwareTaskDistribution", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreatePrivateCA", async function () {
    try {
       const data = await client.CreatePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdatePrivateCA", async function () {
    try {
       const data = await client.UpdatePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DownloadDeviceResource", async function () {
    try {
       const data = await client.DownloadDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeletePrivateCA", async function () {
    try {
       const data = await client.DeletePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ResetDeviceState", async function () {
    try {
       const data = await client.ResetDeviceState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeFirmwareTask", async function () {
    try {
       const data = await client.DescribeFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UploadFirmware", async function () {
    try {
       const data = await client.UploadFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDeviceResources", async function () {
    try {
       const data = await client.DescribeDeviceResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateProductDynamicRegister", async function () {
    try {
       const data = await client.UpdateProductDynamicRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListLog", async function () {
    try {
       const data = await client.ListLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeFirmwareTaskDevices", async function () {
    try {
       const data = await client.DescribeFirmwareTaskDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CancelDeviceFirmwareTask", async function () {
    try {
       const data = await client.CancelDeviceFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.EnableTopicRule", async function () {
    try {
       const data = await client.EnableTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.BindDevices", async function () {
    try {
       const data = await client.BindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreateTaskFileUrl", async function () {
    try {
       const data = await client.CreateTaskFileUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UnbindDevices", async function () {
    try {
       const data = await client.UnbindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribePrivateCA", async function () {
    try {
       const data = await client.DescribePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProductTasks", async function () {
    try {
       const data = await client.DescribeProductTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.GetAllVersion", async function () {
    try {
       const data = await client.GetAllVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DisableTopicRule", async function () {
    try {
       const data = await client.DisableTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateDeviceShadow", async function () {
    try {
       const data = await client.UpdateDeviceShadow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeFirmwareTasks", async function () {
    try {
       const data = await client.DescribeFirmwareTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListTopicRules", async function () {
    try {
       const data = await client.ListTopicRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProductResources", async function () {
    try {
       const data = await client.DescribeProductResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteDeviceResource", async function () {
    try {
       const data = await client.DeleteDeviceResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribePrivateCAs", async function () {
    try {
       const data = await client.DescribePrivateCAs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateDevicePSK", async function () {
    try {
       const data = await client.UpdateDevicePSK({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteTopicRule", async function () {
    try {
       const data = await client.DeleteTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
