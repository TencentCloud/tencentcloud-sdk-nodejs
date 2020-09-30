
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bm.v20180423.Client({
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
describe("bm.v20180423.test.js", function () {

it("bm.v20180423.DescribeUserCmds", async function () {
    try {
       const data = await client.DescribeUserCmds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.RebootDevices", async function () {
    try {
       const data = await client.RebootDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ModifyPsaRegulation", async function () {
    try {
       const data = await client.ModifyPsaRegulation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribePsaRegulations", async function () {
    try {
       const data = await client.DescribePsaRegulations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ModifyDeviceAutoRenewFlag", async function () {
    try {
       const data = await client.ModifyDeviceAutoRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.OfflineDevices", async function () {
    try {
       const data = await client.OfflineDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ModifyLanIp", async function () {
    try {
       const data = await client.ModifyLanIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.RunUserCmd", async function () {
    try {
       const data = await client.RunUserCmd({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeCustomImageProcess", async function () {
    try {
       const data = await client.DescribeCustomImageProcess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.StartDevices", async function () {
    try {
       const data = await client.StartDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ReloadDeviceOs", async function () {
    try {
       const data = await client.ReloadDeviceOs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDeviceHardwareInfo", async function () {
    try {
       const data = await client.DescribeDeviceHardwareInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeUserCmdTasks", async function () {
    try {
       const data = await client.DescribeUserCmdTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.CreatePsaRegulation", async function () {
    try {
       const data = await client.CreatePsaRegulation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDeviceClass", async function () {
    try {
       const data = await client.DescribeDeviceClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.BuyDevices", async function () {
    try {
       const data = await client.BuyDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ModifyUserCmd", async function () {
    try {
       const data = await client.ModifyUserCmd({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DeleteUserCmds", async function () {
    try {
       const data = await client.DeleteUserCmds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeHostedDeviceOutBandInfo", async function () {
    try {
       const data = await client.DescribeHostedDeviceOutBandInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.BindPsaTag", async function () {
    try {
       const data = await client.BindPsaTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DeleteCustomImages", async function () {
    try {
       const data = await client.DeleteCustomImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DeletePsaRegulation", async function () {
    try {
       const data = await client.DeletePsaRegulation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.CreateUserCmd", async function () {
    try {
       const data = await client.CreateUserCmd({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeHardwareSpecification", async function () {
    try {
       const data = await client.DescribeHardwareSpecification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DetachCamRole", async function () {
    try {
       const data = await client.DetachCamRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.AttachCamRole", async function () {
    try {
       const data = await client.AttachCamRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeOsInfo", async function () {
    try {
       const data = await client.DescribeOsInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeOperationResult", async function () {
    try {
       const data = await client.DescribeOperationResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ModifyCustomImageAttribute", async function () {
    try {
       const data = await client.ModifyCustomImageAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDevicePosition", async function () {
    try {
       const data = await client.DescribeDevicePosition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeUserCmdTaskInfo", async function () {
    try {
       const data = await client.DescribeUserCmdTaskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDevicePriceInfo", async function () {
    try {
       const data = await client.DescribeDevicePriceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ReturnDevices", async function () {
    try {
       const data = await client.ReturnDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeTaskOperationLog", async function () {
    try {
       const data = await client.DescribeTaskOperationLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ModifyPayModePre2Post", async function () {
    try {
       const data = await client.ModifyPayModePre2Post({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.UnbindPsaTag", async function () {
    try {
       const data = await client.UnbindPsaTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.CreateSpotDevice", async function () {
    try {
       const data = await client.CreateSpotDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ModifyDeviceAliases", async function () {
    try {
       const data = await client.ModifyDeviceAliases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDeviceInventory", async function () {
    try {
       const data = await client.DescribeDeviceInventory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDeviceOperationLog", async function () {
    try {
       const data = await client.DescribeDeviceOperationLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeTaskInfo", async function () {
    try {
       const data = await client.DescribeTaskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.RepairTaskControl", async function () {
    try {
       const data = await client.RepairTaskControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeRepairTaskConstant", async function () {
    try {
       const data = await client.DescribeRepairTaskConstant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.SetOutBandVpnAuthPassword", async function () {
    try {
       const data = await client.SetOutBandVpnAuthPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeCustomImages", async function () {
    try {
       const data = await client.DescribeCustomImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.RecoverDevices", async function () {
    try {
       const data = await client.RecoverDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDevicePartition", async function () {
    try {
       const data = await client.DescribeDevicePartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ShutdownDevices", async function () {
    try {
       const data = await client.ShutdownDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.ResetDevicePassword", async function () {
    try {
       const data = await client.ResetDevicePassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.DescribeDeviceClassPartition", async function () {
    try {
       const data = await client.DescribeDeviceClassPartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bm.v20180423.CreateCustomImage", async function () {
    try {
       const data = await client.CreateCustomImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
