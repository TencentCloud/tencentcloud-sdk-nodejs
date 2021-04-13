
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotvideo.v20191126.Client({
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
describe("iotvideo.v20191126.test.js", function () {

it("iotvideo.v20191126.DescribeOtaVersions", async function () {
    try {
       const data = await client.DescribeOtaVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DisableOtaVersion", async function () {
    try {
       const data = await client.DisableOtaVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.ClearDeviceActiveCode", async function () {
    try {
       const data = await client.ClearDeviceActiveCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeIotDataType", async function () {
    try {
       const data = await client.DescribeIotDataType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DisableDevice", async function () {
    try {
       const data = await client.DisableDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteTraceIds", async function () {
    try {
       const data = await client.DeleteTraceIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.RunOtaVersion", async function () {
    try {
       const data = await client.RunOtaVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.RunTestOtaVersion", async function () {
    try {
       const data = await client.RunTestOtaVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeProduct", async function () {
    try {
       const data = await client.DescribeProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.SendOnlineMsg", async function () {
    try {
       const data = await client.SendOnlineMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.RunIotModel", async function () {
    try {
       const data = await client.RunIotModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.ModifyDevice", async function () {
    try {
       const data = await client.ModifyDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateIotDataType", async function () {
    try {
       const data = await client.CreateIotDataType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateAnonymousAccessToken", async function () {
    try {
       const data = await client.CreateAnonymousAccessToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateDevices", async function () {
    try {
       const data = await client.CreateDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateProduct", async function () {
    try {
       const data = await client.CreateProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateIotModel", async function () {
    try {
       const data = await client.CreateIotModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteIotDataType", async function () {
    try {
       const data = await client.DeleteIotDataType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeMessageQueue", async function () {
    try {
       const data = await client.DescribeMessageQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeIotModel", async function () {
    try {
       const data = await client.DescribeIotModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.ModifyDeviceAction", async function () {
    try {
       const data = await client.ModifyDeviceAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeProducts", async function () {
    try {
       const data = await client.DescribeProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateTraceIds", async function () {
    try {
       const data = await client.CreateTraceIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeBindUsr", async function () {
    try {
       const data = await client.DescribeBindUsr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateAppUsr", async function () {
    try {
       const data = await client.CreateAppUsr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateBinding", async function () {
    try {
       const data = await client.CreateBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateDevToken", async function () {
    try {
       const data = await client.CreateDevToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteOtaVersion", async function () {
    try {
       const data = await client.DeleteOtaVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteAppUsr", async function () {
    try {
       const data = await client.DeleteAppUsr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeRechargeRecords", async function () {
    try {
       const data = await client.DescribeRechargeRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.ModifyProduct", async function () {
    try {
       const data = await client.ModifyProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeLogs", async function () {
    try {
       const data = await client.DescribeLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.RefundStorageService", async function () {
    try {
       const data = await client.RefundStorageService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateStorageService", async function () {
    try {
       const data = await client.CreateStorageService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.SetMessageQueue", async function () {
    try {
       const data = await client.SetMessageQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeAccountBalance", async function () {
    try {
       const data = await client.DescribeAccountBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeOsList", async function () {
    try {
       const data = await client.DescribeOsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeIotModels", async function () {
    try {
       const data = await client.DescribeIotModels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeliverStorageService", async function () {
    try {
       const data = await client.DeliverStorageService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeTraceStatus", async function () {
    try {
       const data = await client.DescribeTraceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeStream", async function () {
    try {
       const data = await client.DescribeStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeRegistrationStatus", async function () {
    try {
       const data = await client.DescribeRegistrationStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeRunLog", async function () {
    try {
       const data = await client.DescribeRunLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeBindDev", async function () {
    try {
       const data = await client.DescribeBindDev({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeStorageService", async function () {
    try {
       const data = await client.DescribeStorageService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DisableDeviceStream", async function () {
    try {
       const data = await client.DisableDeviceStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateUploadPath", async function () {
    try {
       const data = await client.CreateUploadPath({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeModelDataRet", async function () {
    try {
       const data = await client.DescribeModelDataRet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribePubVersions", async function () {
    try {
       const data = await client.DescribePubVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.RunDeviceStream", async function () {
    try {
       const data = await client.RunDeviceStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.ModifyVerContent", async function () {
    try {
       const data = await client.ModifyVerContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateGencode", async function () {
    try {
       const data = await client.CreateGencode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeDeviceModel", async function () {
    try {
       const data = await client.DescribeDeviceModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteBinding", async function () {
    try {
       const data = await client.DeleteBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateStorage", async function () {
    try {
       const data = await client.CreateStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DescribeTraceIds", async function () {
    try {
       const data = await client.DescribeTraceIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.DeleteMessageQueue", async function () {
    try {
       const data = await client.DeleteMessageQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.ModifyDeviceProperty", async function () {
    try {
       const data = await client.ModifyDeviceProperty({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.RunDevice", async function () {
    try {
       const data = await client.RunDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.UploadOtaVersion", async function () {
    try {
       const data = await client.UploadOtaVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.UpgradeDevice", async function () {
    try {
       const data = await client.UpgradeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotvideo.v20191126.CreateUsrToken", async function () {
    try {
       const data = await client.CreateUsrToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
