
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iss.v20230517.Client({
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
describe("iss.v20230517.test.js", function () {

it("iss.v20230517.DeleteRecordTemplate", async function () {
    try {
       const data = await client.DeleteRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateDeviceStatus", async function () {
    try {
       const data = await client.UpdateDeviceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateGateway", async function () {
    try {
       const data = await client.UpdateGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordRetrieveTasks", async function () {
    try {
       const data = await client.ListRecordRetrieveTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateRecordBackupTemplate", async function () {
    try {
       const data = await client.UpdateRecordBackupTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteUserDevice", async function () {
    try {
       const data = await client.DeleteUserDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeDeviceChannel", async function () {
    try {
       const data = await client.DescribeDeviceChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteRecordBackupTemplate", async function () {
    try {
       const data = await client.DeleteRecordBackupTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeDomainRegion", async function () {
    try {
       const data = await client.DescribeDomainRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordSlice", async function () {
    try {
       const data = await client.DescribeRecordSlice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeGatewayProtocol", async function () {
    try {
       const data = await client.DescribeGatewayProtocol({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordPlaybackUrl", async function () {
    try {
       const data = await client.DescribeRecordPlaybackUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordBackupTemplate", async function () {
    try {
       const data = await client.DescribeRecordBackupTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeGatewayMonitor", async function () {
    try {
       const data = await client.DescribeGatewayMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordBackupPlans", async function () {
    try {
       const data = await client.ListRecordBackupPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeVideoBitRate", async function () {
    try {
       const data = await client.DescribeVideoBitRate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeGatewayVersion", async function () {
    try {
       const data = await client.DescribeGatewayVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateAITask", async function () {
    try {
       const data = await client.UpdateAITask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListSubTasks", async function () {
    try {
       const data = await client.ListSubTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordPlanChannels", async function () {
    try {
       const data = await client.ListRecordPlanChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeDeviceRegion", async function () {
    try {
       const data = await client.DescribeDeviceRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddOrganization", async function () {
    try {
       const data = await client.AddOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeDevicePreset", async function () {
    try {
       const data = await client.DescribeDevicePreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordPlans", async function () {
    try {
       const data = await client.ListRecordPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordBackupPlan", async function () {
    try {
       const data = await client.DescribeRecordBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordFile", async function () {
    try {
       const data = await client.DescribeRecordFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordRetrieveTask", async function () {
    try {
       const data = await client.DescribeRecordRetrieveTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeUserDevice", async function () {
    try {
       const data = await client.DescribeUserDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeAITaskResult", async function () {
    try {
       const data = await client.DescribeAITaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordTemplate", async function () {
    try {
       const data = await client.DescribeRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateRecordTemplate", async function () {
    try {
       const data = await client.UpdateRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddRecordRetrieveTask", async function () {
    try {
       const data = await client.AddRecordRetrieveTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeCNAME", async function () {
    try {
       const data = await client.DescribeCNAME({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddUserDevice", async function () {
    try {
       const data = await client.AddUserDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeTask", async function () {
    try {
       const data = await client.DescribeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddAITask", async function () {
    try {
       const data = await client.AddAITask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteOrganization", async function () {
    try {
       const data = await client.DeleteOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.CheckDomain", async function () {
    try {
       const data = await client.CheckDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateDeviceOrganization", async function () {
    try {
       const data = await client.UpdateDeviceOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeDomain", async function () {
    try {
       const data = await client.DescribeDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ControlDeviceStream", async function () {
    try {
       const data = await client.ControlDeviceStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeVideoDownloadUrl", async function () {
    try {
       const data = await client.DescribeVideoDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.RefreshDeviceChannel", async function () {
    try {
       const data = await client.RefreshDeviceChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ControlDevicePreset", async function () {
    try {
       const data = await client.ControlDevicePreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.BatchOperateDevice", async function () {
    try {
       const data = await client.BatchOperateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateOrganization", async function () {
    try {
       const data = await client.UpdateOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeRecordPlan", async function () {
    try {
       const data = await client.DescribeRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateRecordPlan", async function () {
    try {
       const data = await client.UpdateRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeGateway", async function () {
    try {
       const data = await client.DescribeGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpgradeGateway", async function () {
    try {
       const data = await client.UpgradeGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateUserDevice", async function () {
    try {
       const data = await client.UpdateUserDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteRecordPlan", async function () {
    try {
       const data = await client.DeleteRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddRecordTemplate", async function () {
    try {
       const data = await client.AddRecordTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddRecordPlan", async function () {
    try {
       const data = await client.AddRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListOrganizationChannelNumbers", async function () {
    try {
       const data = await client.ListOrganizationChannelNumbers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateRecordBackupPlan", async function () {
    try {
       const data = await client.UpdateRecordBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListGateways", async function () {
    try {
       const data = await client.ListGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeOrganization", async function () {
    try {
       const data = await client.DescribeOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ControlRecord", async function () {
    try {
       const data = await client.ControlRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListDevices", async function () {
    try {
       const data = await client.ListDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordBackupTemplates", async function () {
    try {
       const data = await client.ListRecordBackupTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ControlDevicePTZ", async function () {
    try {
       const data = await client.ControlDevicePTZ({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.UpdateAITaskStatus", async function () {
    try {
       const data = await client.UpdateAITaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordBackupPlanDevices", async function () {
    try {
       const data = await client.ListRecordBackupPlanDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListAITasks", async function () {
    try {
       const data = await client.ListAITasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordTemplates", async function () {
    try {
       const data = await client.ListRecordTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListRecordPlanDevices", async function () {
    try {
       const data = await client.ListRecordPlanDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteAITask", async function () {
    try {
       const data = await client.DeleteAITask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddStreamAuth", async function () {
    try {
       const data = await client.AddStreamAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListTasks", async function () {
    try {
       const data = await client.ListTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteRecordRetrieveTask", async function () {
    try {
       const data = await client.DeleteRecordRetrieveTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddRecordBackupPlan", async function () {
    try {
       const data = await client.AddRecordBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeStreamAuth", async function () {
    try {
       const data = await client.DescribeStreamAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ControlRecordTimeline", async function () {
    try {
       const data = await client.ControlRecordTimeline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DescribeAITask", async function () {
    try {
       const data = await client.DescribeAITask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteRecordBackupPlan", async function () {
    try {
       const data = await client.DeleteRecordBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteGateway", async function () {
    try {
       const data = await client.DeleteGateway({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListGatewayDevices", async function () {
    try {
       const data = await client.ListGatewayDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.DeleteDomain", async function () {
    try {
       const data = await client.DeleteDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.PlayRecord", async function () {
    try {
       const data = await client.PlayRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.AddRecordBackupTemplate", async function () {
    try {
       const data = await client.AddRecordBackupTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iss.v20230517.ListOrganizationChannels", async function () {
    try {
       const data = await client.ListOrganizationChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
