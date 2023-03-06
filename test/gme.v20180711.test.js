
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gme.v20180711.Client({
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
describe("gme.v20180711.test.js", function () {

it("gme.v20180711.DescribeRoomInfo", async function () {
    try {
       const data = await client.DescribeRoomInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.StopRecord", async function () {
    try {
       const data = await client.StopRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DeleteScanUser", async function () {
    try {
       const data = await client.DeleteScanUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.UpdateScanUsers", async function () {
    try {
       const data = await client.UpdateScanUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.GetCustomizationList", async function () {
    try {
       const data = await client.GetCustomizationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeUserInAndOutTime", async function () {
    try {
       const data = await client.DescribeUserInAndOutTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.UpdateScanRooms", async function () {
    try {
       const data = await client.UpdateScanRooms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.CreateCustomization", async function () {
    try {
       const data = await client.CreateCustomization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeTaskInfo", async function () {
    try {
       const data = await client.DescribeTaskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.CreateAgeDetectTask", async function () {
    try {
       const data = await client.CreateAgeDetectTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DeleteRoomMember", async function () {
    try {
       const data = await client.DeleteRoomMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeApplicationData", async function () {
    try {
       const data = await client.DescribeApplicationData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.ScanVoice", async function () {
    try {
       const data = await client.ScanVoice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.CreateScanUser", async function () {
    try {
       const data = await client.CreateScanUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeAppStatistics", async function () {
    try {
       const data = await client.DescribeAppStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.ModifyCustomization", async function () {
    try {
       const data = await client.ModifyCustomization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeRealtimeScanConfig", async function () {
    try {
       const data = await client.DescribeRealtimeScanConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.ModifyRecordInfo", async function () {
    try {
       const data = await client.ModifyRecordInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.CreateApp", async function () {
    try {
       const data = await client.CreateApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeScanResultList", async function () {
    try {
       const data = await client.DescribeScanResultList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeApplicationList", async function () {
    try {
       const data = await client.DescribeApplicationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.ModifyCustomizationState", async function () {
    try {
       const data = await client.ModifyCustomizationState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeRecordInfo", async function () {
    try {
       const data = await client.DescribeRecordInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.ModifyUserMicStatus", async function () {
    try {
       const data = await client.ModifyUserMicStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DeleteCustomization", async function () {
    try {
       const data = await client.DeleteCustomization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.StartRecord", async function () {
    try {
       const data = await client.StartRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.ModifyAppStatus", async function () {
    try {
       const data = await client.ModifyAppStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gme.v20180711.DescribeAgeDetectTask", async function () {
    try {
       const data = await client.DescribeAgeDetectTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
