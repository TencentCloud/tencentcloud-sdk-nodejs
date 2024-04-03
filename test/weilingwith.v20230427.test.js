
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.weilingwith.v20230427.Client({
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
describe("weilingwith.v20230427.test.js", function () {

it("weilingwith.v20230427.DescribeVideoCloudRecord", async function () {
    try {
       const data = await client.DescribeVideoCloudRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeBuildingProfile", async function () {
    try {
       const data = await client.DescribeBuildingProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ChangeAlarmStatus", async function () {
    try {
       const data = await client.ChangeAlarmStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeLinkRuleList", async function () {
    try {
       const data = await client.DescribeLinkRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeElementProfileTree", async function () {
    try {
       const data = await client.DescribeElementProfileTree({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeAlarmStatusList", async function () {
    try {
       const data = await client.DescribeAlarmStatusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeDeviceStatusStat", async function () {
    try {
       const data = await client.DescribeDeviceStatusStat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeSpaceDeviceIdList", async function () {
    try {
       const data = await client.DescribeSpaceDeviceIdList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeVideoLiveStream", async function () {
    try {
       const data = await client.DescribeVideoLiveStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeTenantDepartmentList", async function () {
    try {
       const data = await client.DescribeTenantDepartmentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ReportAppMessage", async function () {
    try {
       const data = await client.ReportAppMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeTenantBuildingCountAndArea", async function () {
    try {
       const data = await client.DescribeTenantBuildingCountAndArea({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeWorkSpaceBuildingCountAndArea", async function () {
    try {
       const data = await client.DescribeWorkSpaceBuildingCountAndArea({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeDeviceShadowList", async function () {
    try {
       const data = await client.DescribeDeviceShadowList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeDeviceTagList", async function () {
    try {
       const data = await client.DescribeDeviceTagList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeDeviceGroupList", async function () {
    try {
       const data = await client.DescribeDeviceGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeAlarmTypeList", async function () {
    try {
       const data = await client.DescribeAlarmTypeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeSpaceTypeList", async function () {
    try {
       const data = await client.DescribeSpaceTypeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ModifyDeviceGroup", async function () {
    try {
       const data = await client.ModifyDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeDeviceTypeList", async function () {
    try {
       const data = await client.DescribeDeviceTypeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeSpaceInfoByDeviceId", async function () {
    try {
       const data = await client.DescribeSpaceInfoByDeviceId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeWorkspaceList", async function () {
    try {
       const data = await client.DescribeWorkspaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeRuleDetail", async function () {
    try {
       const data = await client.DescribeRuleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.UpdateWorkspaceParkAttributes", async function () {
    try {
       const data = await client.UpdateWorkspaceParkAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.StopVideoStreaming", async function () {
    try {
       const data = await client.StopVideoStreaming({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeModelList", async function () {
    try {
       const data = await client.DescribeModelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribePropertyList", async function () {
    try {
       const data = await client.DescribePropertyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeProductList", async function () {
    try {
       const data = await client.DescribeProductList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.BatchDeleteDevice", async function () {
    try {
       const data = await client.BatchDeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeActionList", async function () {
    try {
       const data = await client.DescribeActionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeSceneList", async function () {
    try {
       const data = await client.DescribeSceneList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeSpaceRelationByDeviceId", async function () {
    try {
       const data = await client.DescribeSpaceRelationByDeviceId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeDeviceList", async function () {
    try {
       const data = await client.DescribeDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.BatchKillAlarm", async function () {
    try {
       const data = await client.BatchKillAlarm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeWorkspaceUserList", async function () {
    try {
       const data = await client.DescribeWorkspaceUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ControlDevice", async function () {
    try {
       const data = await client.ControlDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.BatchReportAppMessage", async function () {
    try {
       const data = await client.BatchReportAppMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeElementProfilePage", async function () {
    try {
       const data = await client.DescribeElementProfilePage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ModifyDeviceName", async function () {
    try {
       const data = await client.ModifyDeviceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeEventList", async function () {
    try {
       const data = await client.DescribeEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeAdministrationByTag", async function () {
    try {
       const data = await client.DescribeAdministrationByTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.BatchCreateDevice", async function () {
    try {
       const data = await client.BatchCreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ModifyDeviceTag", async function () {
    try {
       const data = await client.ModifyDeviceTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeCameraExtendInfo", async function () {
    try {
       const data = await client.DescribeCameraExtendInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeFileDownloadURL", async function () {
    try {
       const data = await client.DescribeFileDownloadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeCityWorkspaceList", async function () {
    try {
       const data = await client.DescribeCityWorkspaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeEdgeApplicationToken", async function () {
    try {
       const data = await client.DescribeEdgeApplicationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeBuildingModel", async function () {
    try {
       const data = await client.DescribeBuildingModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DeleteDeviceGroup", async function () {
    try {
       const data = await client.DeleteDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeSpaceDeviceRelationList", async function () {
    try {
       const data = await client.DescribeSpaceDeviceRelationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeBuildingList", async function () {
    try {
       const data = await client.DescribeBuildingList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.SaveDeviceGroup", async function () {
    try {
       const data = await client.SaveDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ControlCameraPTZ", async function () {
    try {
       const data = await client.ControlCameraPTZ({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeInterfaceList", async function () {
    try {
       const data = await client.DescribeInterfaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeVideoRecordStream", async function () {
    try {
       const data = await client.DescribeVideoRecordStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeAlarmList", async function () {
    try {
       const data = await client.DescribeAlarmList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeApplicationList", async function () {
    try {
       const data = await client.DescribeApplicationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.AddAlarmProcessRecord", async function () {
    try {
       const data = await client.AddAlarmProcessRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeFileUploadURL", async function () {
    try {
       const data = await client.DescribeFileUploadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeTenantUserList", async function () {
    try {
       const data = await client.DescribeTenantUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeAlarmLevelList", async function () {
    try {
       const data = await client.DescribeAlarmLevelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.CreateApplicationToken", async function () {
    try {
       const data = await client.CreateApplicationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeDeviceStatusList", async function () {
    try {
       const data = await client.DescribeDeviceStatusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.ModifyDeviceField", async function () {
    try {
       const data = await client.ModifyDeviceField({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
