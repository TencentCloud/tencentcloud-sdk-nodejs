
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ft.v20200304.Client({
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
describe("ft.v20200304.test.js", function () {

it("ft.v20200304.CancelFaceMorphJob", async function () {
    try {
       const data = await client.CancelFaceMorphJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ft.v20200304.SwapGenderPic", async function () {
    try {
       const data = await client.SwapGenderPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ft.v20200304.MorphFace", async function () {
    try {
       const data = await client.MorphFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ft.v20200304.ChangeAgePic", async function () {
    try {
       const data = await client.ChangeAgePic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ft.v20200304.QueryFaceMorphJob", async function () {
    try {
       const data = await client.QueryFaceMorphJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ft.v20200304.FaceCartoonPic", async function () {
    try {
       const data = await client.FaceCartoonPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
