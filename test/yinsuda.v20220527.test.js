
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.yinsuda.v20220527.Client({
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
describe("yinsuda.v20220527.test.js", function () {

it("yinsuda.v20220527.CreateKTVRobot", async function () {
    try {
       const data = await client.CreateKTVRobot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.RechargeLiveVip", async function () {
    try {
       const data = await client.RechargeLiveVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeKTVTags", async function () {
    try {
       const data = await client.DescribeKTVTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeKTVPlaylistDetail", async function () {
    try {
       const data = await client.DescribeKTVPlaylistDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.SyncKTVRobotCommand", async function () {
    try {
       const data = await client.SyncKTVRobotCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DestroyKTVRobot", async function () {
    try {
       const data = await client.DestroyKTVRobot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeKTVSuggestions", async function () {
    try {
       const data = await client.DescribeKTVSuggestions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeUserInfo", async function () {
    try {
       const data = await client.DescribeUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeLiveVipTradeInfos", async function () {
    try {
       const data = await client.DescribeLiveVipTradeInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.BatchDescribeKTVMusicDetails", async function () {
    try {
       const data = await client.BatchDescribeKTVMusicDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeKTVPlaylists", async function () {
    try {
       const data = await client.DescribeKTVPlaylists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.ApplyChorus", async function () {
    try {
       const data = await client.ApplyChorus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeKTVRobots", async function () {
    try {
       const data = await client.DescribeKTVRobots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeKTVMatchMusics", async function () {
    try {
       const data = await client.DescribeKTVMatchMusics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.SearchKTVMusics", async function () {
    try {
       const data = await client.SearchKTVMusics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("yinsuda.v20220527.DescribeKTVMusicsByTag", async function () {
    try {
       const data = await client.DescribeKTVMusicsByTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
