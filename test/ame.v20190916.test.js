
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ame.v20190916.Client({
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
describe("ame.v20190916.test.js", function () {

it("ame.v20190916.DescribePackages", async function () {
    try {
       const data = await client.DescribePackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeLyric", async function () {
    try {
       const data = await client.DescribeLyric({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeItems", async function () {
    try {
       const data = await client.DescribeItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeAuthInfo", async function () {
    try {
       const data = await client.DescribeAuthInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.BatchDescribeKTVMusicDetails", async function () {
    try {
       const data = await client.BatchDescribeKTVMusicDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeCloudMusicPurchased", async function () {
    try {
       const data = await client.DescribeCloudMusicPurchased({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribePkgOfflineMusic", async function () {
    try {
       const data = await client.DescribePkgOfflineMusic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVSingerMusics", async function () {
    try {
       const data = await client.DescribeKTVSingerMusics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeMusic", async function () {
    try {
       const data = await client.DescribeMusic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVSuggestions", async function () {
    try {
       const data = await client.DescribeKTVSuggestions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.ModifyMusicOnShelves", async function () {
    try {
       const data = await client.ModifyMusicOnShelves({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVMusicTags", async function () {
    try {
       const data = await client.DescribeKTVMusicTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribePackageItems", async function () {
    try {
       const data = await client.DescribePackageItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.TakeMusicOffShelves", async function () {
    try {
       const data = await client.TakeMusicOffShelves({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVPlaylists", async function () {
    try {
       const data = await client.DescribeKTVPlaylists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.CreateKTVRobot", async function () {
    try {
       const data = await client.CreateKTVRobot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.SyncKTVRobotCommand", async function () {
    try {
       const data = await client.SyncKTVRobotCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVTopList", async function () {
    try {
       const data = await client.DescribeKTVTopList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVPlaylistDetail", async function () {
    try {
       const data = await client.DescribeKTVPlaylistDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.ReportData", async function () {
    try {
       const data = await client.ReportData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVSingerCategories", async function () {
    try {
       const data = await client.DescribeKTVSingerCategories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeStations", async function () {
    try {
       const data = await client.DescribeStations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVMusicDetail", async function () {
    try {
       const data = await client.DescribeKTVMusicDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeItemById", async function () {
    try {
       const data = await client.DescribeItemById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeMusicSaleStatus", async function () {
    try {
       const data = await client.DescribeMusicSaleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVSingers", async function () {
    try {
       const data = await client.DescribeKTVSingers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DestroyKTVRobot", async function () {
    try {
       const data = await client.DestroyKTVRobot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeCloudMusic", async function () {
    try {
       const data = await client.DescribeCloudMusic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.PutMusicOnTheShelves", async function () {
    try {
       const data = await client.PutMusicOnTheShelves({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.DescribeKTVRobots", async function () {
    try {
       const data = await client.DescribeKTVRobots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ame.v20190916.SearchKTVMusics", async function () {
    try {
       const data = await client.SearchKTVMusics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
