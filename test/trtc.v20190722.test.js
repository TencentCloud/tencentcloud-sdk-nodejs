
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.trtc.v20190722.Client({
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
describe("trtc.v20190722.test.js", function () {

it("trtc.v20190722.DescribeRecordStatistic", async function () {
    try {
       const data = await client.DescribeRecordStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeTrtcMcuTranscodeTime", async function () {
    try {
       const data = await client.DescribeTrtcMcuTranscodeTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.CreateTroubleInfo", async function () {
    try {
       const data = await client.CreateTroubleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeHistoryScale", async function () {
    try {
       const data = await client.DescribeHistoryScale({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StartMCUMixTranscodeByStrRoomId", async function () {
    try {
       const data = await client.StartMCUMixTranscodeByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StartMCUMixTranscode", async function () {
    try {
       const data = await client.StartMCUMixTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DeletePicture", async function () {
    try {
       const data = await client.DeletePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StopMCUMixTranscodeByStrRoomId", async function () {
    try {
       const data = await client.StopMCUMixTranscodeByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.CreatePicture", async function () {
    try {
       const data = await client.CreatePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribePicture", async function () {
    try {
       const data = await client.DescribePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.ModifyPicture", async function () {
    try {
       const data = await client.ModifyPicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.RemoveUser", async function () {
    try {
       const data = await client.RemoveUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeDetailEvent", async function () {
    try {
       const data = await client.DescribeDetailEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeCallDetail", async function () {
    try {
       const data = await client.DescribeCallDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DismissRoomByStrRoomId", async function () {
    try {
       const data = await client.DismissRoomByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeAbnormalEvent", async function () {
    try {
       const data = await client.DescribeAbnormalEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.StopMCUMixTranscode", async function () {
    try {
       const data = await client.StopMCUMixTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeRoomInformation", async function () {
    try {
       const data = await client.DescribeRoomInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.RemoveUserByStrRoomId", async function () {
    try {
       const data = await client.RemoveUserByStrRoomId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DismissRoom", async function () {
    try {
       const data = await client.DismissRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trtc.v20190722.DescribeUserInformation", async function () {
    try {
       const data = await client.DescribeUserInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
