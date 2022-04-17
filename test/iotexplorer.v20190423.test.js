
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotexplorer.v20190423.Client({
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
describe("iotexplorer.v20190423.test.js", function () {

it("iotexplorer.v20190423.GetCOSURL", async function () {
    try {
       const data = await client.GetCOSURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyStudioProduct", async function () {
    try {
       const data = await client.ModifyStudioProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetBatchProductionsList", async function () {
    try {
       const data = await client.GetBatchProductionsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeTopicPolicy", async function () {
    try {
       const data = await client.DescribeTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetProjectList", async function () {
    try {
       const data = await client.GetProjectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CallDeviceActionSync", async function () {
    try {
       const data = await client.CallDeviceActionSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DirectBindDeviceInFamily", async function () {
    try {
       const data = await client.DirectBindDeviceInFamily({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeDeviceBindGateway", async function () {
    try {
       const data = await client.DescribeDeviceBindGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetDeviceLocationHistory", async function () {
    try {
       const data = await client.GetDeviceLocationHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.PublishMessage", async function () {
    try {
       const data = await client.PublishMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeStudioProduct", async function () {
    try {
       const data = await client.DescribeStudioProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetLoRaGatewayList", async function () {
    try {
       const data = await client.GetLoRaGatewayList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ReleaseStudioProduct", async function () {
    try {
       const data = await client.ReleaseStudioProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyFenceBind", async function () {
    try {
       const data = await client.ModifyFenceBind({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeletePositionSpace", async function () {
    try {
       const data = await client.DeletePositionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeBindedProducts", async function () {
    try {
       const data = await client.DescribeBindedProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyLoRaGateway", async function () {
    try {
       const data = await client.ModifyLoRaGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeFenceEventList", async function () {
    try {
       const data = await client.DescribeFenceEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteTopicRule", async function () {
    try {
       const data = await client.DeleteTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.PublishRRPCMessage", async function () {
    try {
       const data = await client.PublishRRPCMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.SearchPositionSpace", async function () {
    try {
       const data = await client.SearchPositionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteLoRaGateway", async function () {
    try {
       const data = await client.DeleteLoRaGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateStudioProduct", async function () {
    try {
       const data = await client.CreateStudioProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.EnableTopicRule", async function () {
    try {
       const data = await client.EnableTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeGatewaySubDeviceList", async function () {
    try {
       const data = await client.DescribeGatewaySubDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.SearchStudioProduct", async function () {
    try {
       const data = await client.SearchStudioProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyTopicRule", async function () {
    try {
       const data = await client.ModifyTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ListFirmwares", async function () {
    try {
       const data = await client.ListFirmwares({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateDevice", async function () {
    try {
       const data = await client.CreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteFenceBind", async function () {
    try {
       const data = await client.DeleteFenceBind({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ControlDeviceData", async function () {
    try {
       const data = await client.ControlDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeFirmwareTask", async function () {
    try {
       const data = await client.DescribeFirmwareTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetPositionSpaceList", async function () {
    try {
       const data = await client.GetPositionSpaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeLoRaFrequency", async function () {
    try {
       const data = await client.DescribeLoRaFrequency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyTopicPolicy", async function () {
    try {
       const data = await client.ModifyTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetTopicRuleList", async function () {
    try {
       const data = await client.GetTopicRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateProject", async function () {
    try {
       const data = await client.CreateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CallDeviceActionAsync", async function () {
    try {
       const data = await client.CallDeviceActionAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteProject", async function () {
    try {
       const data = await client.DeleteProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeTopicRule", async function () {
    try {
       const data = await client.DescribeTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.PublishBroadcastMessage", async function () {
    try {
       const data = await client.PublishBroadcastMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.UnbindProducts", async function () {
    try {
       const data = await client.UnbindProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteStudioProduct", async function () {
    try {
       const data = await client.DeleteStudioProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeDeviceData", async function () {
    try {
       const data = await client.DescribeDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeGatewayBindDevices", async function () {
    try {
       const data = await client.DescribeGatewayBindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreatePositionFence", async function () {
    try {
       const data = await client.CreatePositionFence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateLoRaGateway", async function () {
    try {
       const data = await client.CreateLoRaGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateTopicRule", async function () {
    try {
       const data = await client.CreateTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateLoRaFrequency", async function () {
    try {
       const data = await client.CreateLoRaFrequency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateTopicPolicy", async function () {
    try {
       const data = await client.CreateTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.UploadFirmware", async function () {
    try {
       const data = await client.UploadFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.UpdateDevicesEnableState", async function () {
    try {
       const data = await client.UpdateDevicesEnableState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyProject", async function () {
    try {
       const data = await client.ModifyProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.BindProducts", async function () {
    try {
       const data = await client.BindProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeFenceBindList", async function () {
    try {
       const data = await client.DescribeFenceBindList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyPositionSpace", async function () {
    try {
       const data = await client.ModifyPositionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeSpaceFenceEventList", async function () {
    try {
       const data = await client.DescribeSpaceFenceEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.UpdateFirmware", async function () {
    try {
       const data = await client.UpdateFirmware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeGatewaySubProducts", async function () {
    try {
       const data = await client.DescribeGatewaySubProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeDevicePositionList", async function () {
    try {
       const data = await client.DescribeDevicePositionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.BindDevices", async function () {
    try {
       const data = await client.BindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateBatchProduction", async function () {
    try {
       const data = await client.CreateBatchProduction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DisableTopicRule", async function () {
    try {
       const data = await client.DisableTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.UnbindDevices", async function () {
    try {
       const data = await client.UnbindDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetStudioProductList", async function () {
    try {
       const data = await client.GetStudioProductList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeBatchProduction", async function () {
    try {
       const data = await client.DescribeBatchProduction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteDevices", async function () {
    try {
       const data = await client.DeleteDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetGatewaySubDeviceList", async function () {
    try {
       const data = await client.GetGatewaySubDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ListEventHistory", async function () {
    try {
       const data = await client.ListEventHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeDeviceDataHistory", async function () {
    try {
       const data = await client.DescribeDeviceDataHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyPositionFence", async function () {
    try {
       const data = await client.ModifyPositionFence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribePositionFenceList", async function () {
    try {
       const data = await client.DescribePositionFenceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteLoRaFrequency", async function () {
    try {
       const data = await client.DeleteLoRaFrequency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifySpaceProperty", async function () {
    try {
       const data = await client.ModifySpaceProperty({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeleteTopicPolicy", async function () {
    try {
       const data = await client.DeleteTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetDeviceList", async function () {
    try {
       const data = await client.GetDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ListTopicPolicy", async function () {
    try {
       const data = await client.ListTopicPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GenSingleDeviceSignatureOfPublic", async function () {
    try {
       const data = await client.GenSingleDeviceSignatureOfPublic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyLoRaFrequency", async function () {
    try {
       const data = await client.ModifyLoRaFrequency({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DeletePositionFence", async function () {
    try {
       const data = await client.DeletePositionFence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.SearchTopicRule", async function () {
    try {
       const data = await client.SearchTopicRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.ModifyModelDefinition", async function () {
    try {
       const data = await client.ModifyModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.GetFamilyDeviceUserList", async function () {
    try {
       const data = await client.GetFamilyDeviceUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeProject", async function () {
    try {
       const data = await client.DescribeProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.DescribeModelDefinition", async function () {
    try {
       const data = await client.DescribeModelDefinition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreatePositionSpace", async function () {
    try {
       const data = await client.CreatePositionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotexplorer.v20190423.CreateFenceBind", async function () {
    try {
       const data = await client.CreateFenceBind({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
