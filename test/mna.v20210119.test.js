
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mna.v20210119.Client({
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
describe("mna.v20210119.test.js", function () {

it("mna.v20210119.SetNotifyUrl", async function () {
    try {
       const data = await client.SetNotifyUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.UpdateHardware", async function () {
    try {
       const data = await client.UpdateHardware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.DownloadActiveDeviceCount", async function () {
    try {
       const data = await client.DownloadActiveDeviceCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.ModifyPackageRenewFlag", async function () {
    try {
       const data = await client.ModifyPackageRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetFlowStatistic", async function () {
    try {
       const data = await client.GetFlowStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetFlowStatisticByGroup", async function () {
    try {
       const data = await client.GetFlowStatisticByGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetMultiFlowStatistic", async function () {
    try {
       const data = await client.GetMultiFlowStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetDevices", async function () {
    try {
       const data = await client.GetDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetPublicKey", async function () {
    try {
       const data = await client.GetPublicKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GroupAddDevice", async function () {
    try {
       const data = await client.GroupAddDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.ActivateHardware", async function () {
    try {
       const data = await client.ActivateHardware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetFlowPackages", async function () {
    try {
       const data = await client.GetFlowPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.AddHardware", async function () {
    try {
       const data = await client.AddHardware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetDevice", async function () {
    try {
       const data = await client.GetDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.CreateQos", async function () {
    try {
       const data = await client.CreateQos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.DeleteL3Conn", async function () {
    try {
       const data = await client.DeleteL3Conn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.DescribeQos", async function () {
    try {
       const data = await client.DescribeQos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetActiveDeviceCount", async function () {
    try {
       const data = await client.GetActiveDeviceCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.UpdateDevice", async function () {
    try {
       const data = await client.UpdateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.OrderPerLicense", async function () {
    try {
       const data = await client.OrderPerLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetNetMonitor", async function () {
    try {
       const data = await client.GetNetMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetDevicePayMode", async function () {
    try {
       const data = await client.GetDevicePayMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetGroupDetail", async function () {
    try {
       const data = await client.GetGroupDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.UpdateL3Cidr", async function () {
    try {
       const data = await client.UpdateL3Cidr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetVendorHardware", async function () {
    try {
       const data = await client.GetVendorHardware({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.AddL3Conn", async function () {
    try {
       const data = await client.AddL3Conn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.CreateEncryptedKey", async function () {
    try {
       const data = await client.CreateEncryptedKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.DeleteQos", async function () {
    try {
       const data = await client.DeleteQos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetFlowAlarmInfo", async function () {
    try {
       const data = await client.GetFlowAlarmInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GroupDeleteDevice", async function () {
    try {
       const data = await client.GroupDeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.OrderFlowPackage", async function () {
    try {
       const data = await client.OrderFlowPackage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetStatisticData", async function () {
    try {
       const data = await client.GetStatisticData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetHardwareList", async function () {
    try {
       const data = await client.GetHardwareList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.UpdateL3Switch", async function () {
    try {
       const data = await client.UpdateL3Switch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.AddDevice", async function () {
    try {
       const data = await client.AddDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetFlowStatisticByRegion", async function () {
    try {
       const data = await client.GetFlowStatisticByRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetGroupList", async function () {
    try {
       const data = await client.GetGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.UpdateGroup", async function () {
    try {
       const data = await client.UpdateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.AddGroup", async function () {
    try {
       const data = await client.AddGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.GetL3ConnList", async function () {
    try {
       const data = await client.GetL3ConnList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mna.v20210119.UpdateL3Conn", async function () {
    try {
       const data = await client.UpdateL3Conn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
