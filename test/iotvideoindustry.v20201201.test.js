
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotvideoindustry.v20201201.Client({
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
describe("iotvideoindustry.v20201201.test.js", function () {

it("iotvideoindustry.v20201201.DescribeIPCChannels", async function () {
    try {
       const data = await client.DescribeIPCChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateRecordPlan", async function () {
    try {
       const data = await client.UpdateRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeSubGroups", async function () {
    try {
       const data = await client.DescribeSubGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateDeviceGroup", async function () {
    try {
       const data = await client.UpdateDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateDeviceGroup", async function () {
    try {
       const data = await client.CreateDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeRecordStream", async function () {
    try {
       const data = await client.DescribeRecordStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeStatisticSummary", async function () {
    try {
       const data = await client.DescribeStatisticSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetVideoListByCon", async function () {
    try {
       const data = await client.GetVideoListByCon({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateTimeTemplate", async function () {
    try {
       const data = await client.UpdateTimeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.UpdateDevicePassWord", async function () {
    try {
       const data = await client.UpdateDevicePassWord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlRecordStream", async function () {
    try {
       const data = await client.ControlRecordStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetTimeTemplateById", async function () {
    try {
       const data = await client.GetTimeTemplateById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDevicePassWord", async function () {
    try {
       const data = await client.DescribeDevicePassWord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroupDevices", async function () {
    try {
       const data = await client.DescribeGroupDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordPlans", async function () {
    try {
       const data = await client.GetRecordPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ModifyDeviceData", async function () {
    try {
       const data = await client.ModifyDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroupByPath", async function () {
    try {
       const data = await client.DescribeGroupByPath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordDatesByDev", async function () {
    try {
       const data = await client.GetRecordDatesByDev({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetTimeTemplates", async function () {
    try {
       const data = await client.GetTimeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDeviceStreams", async function () {
    try {
       const data = await client.DescribeDeviceStreams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeStatisticDetails", async function () {
    try {
       const data = await client.DescribeStatisticDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateDevice", async function () {
    try {
       const data = await client.CreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordPlanById", async function () {
    try {
       const data = await client.GetRecordPlanById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.GetRecordPlanByDev", async function () {
    try {
       const data = await client.GetRecordPlanByDev({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeDeviceGroup", async function () {
    try {
       const data = await client.DescribeDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteRecordPlan", async function () {
    try {
       const data = await client.DeleteRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroups", async function () {
    try {
       const data = await client.DescribeGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteTimeTemplate", async function () {
    try {
       const data = await client.DeleteTimeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeSIPServer", async function () {
    try {
       const data = await client.DescribeSIPServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DeleteDeviceGroup", async function () {
    try {
       const data = await client.DeleteDeviceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.ControlDevicePTZ", async function () {
    try {
       const data = await client.ControlDevicePTZ({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeVideoList", async function () {
    try {
       const data = await client.DescribeVideoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeAllDeviceList", async function () {
    try {
       const data = await client.DescribeAllDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.BindGroupDevices", async function () {
    try {
       const data = await client.BindGroupDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.DescribeGroupById", async function () {
    try {
       const data = await client.DescribeGroupById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateRecordPlan", async function () {
    try {
       const data = await client.CreateRecordPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideoindustry.v20201201.CreateTimeTemplate", async function () {
    try {
       const data = await client.CreateTimeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
