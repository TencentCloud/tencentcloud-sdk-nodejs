
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

it("yinsuda.v20220527.DescribeKTVPlaylists", async function () {
    try {
       const data = await client.DescribeKTVPlaylists({})
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

it("yinsuda.v20220527.BatchDescribeKTVMusicDetails", async function () {
    try {
       const data = await client.BatchDescribeKTVMusicDetails({})
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

it("yinsuda.v20220527.DescribeKTVSuggestions", async function () {
    try {
       const data = await client.DescribeKTVSuggestions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
