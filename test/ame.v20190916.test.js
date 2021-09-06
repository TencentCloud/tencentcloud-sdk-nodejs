
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

it("ame.v20190916.DescribeMusicSaleStatus", async function () {
    try {
       const data = await client.DescribeMusicSaleStatus({})
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

it("ame.v20190916.DescribePackageItems", async function () {
    try {
       const data = await client.DescribePackageItems({})
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

it("ame.v20190916.ReportData", async function () {
    try {
       const data = await client.ReportData({})
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

it("ame.v20190916.DescribeCloudMusic", async function () {
    try {
       const data = await client.DescribeCloudMusic({})
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

it("ame.v20190916.SearchKTVMusics", async function () {
    try {
       const data = await client.SearchKTVMusics({})
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

it("ame.v20190916.TakeMusicOffShelves", async function () {
    try {
       const data = await client.TakeMusicOffShelves({})
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

it("ame.v20190916.DescribeStations", async function () {
    try {
       const data = await client.DescribeStations({})
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

it("ame.v20190916.DescribePkgOfflineMusic", async function () {
    try {
       const data = await client.DescribePkgOfflineMusic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
