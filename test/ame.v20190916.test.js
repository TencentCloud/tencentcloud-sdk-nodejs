
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

it("ame.v20190916.DescribePackageItems", async function () {
    try {
       const data = await client.DescribePackageItems({})
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

})
