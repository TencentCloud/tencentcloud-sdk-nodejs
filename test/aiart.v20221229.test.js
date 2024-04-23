
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.aiart.v20221229.Client({
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
describe("aiart.v20221229.test.js", function () {

it("aiart.v20221229.SubmitTextToImageProJob", async function () {
    try {
       const data = await client.SubmitTextToImageProJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.SubmitTrainPortraitModelJob", async function () {
    try {
       const data = await client.SubmitTrainPortraitModelJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.QueryTextToImageProJob", async function () {
    try {
       const data = await client.QueryTextToImageProJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.QueryTrainPortraitModelJob", async function () {
    try {
       const data = await client.QueryTrainPortraitModelJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.UploadTrainPortraitImages", async function () {
    try {
       const data = await client.UploadTrainPortraitImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.QueryDrawPortraitJob", async function () {
    try {
       const data = await client.QueryDrawPortraitJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.TextToImage", async function () {
    try {
       const data = await client.TextToImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.SubmitDrawPortraitJob", async function () {
    try {
       const data = await client.SubmitDrawPortraitJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aiart.v20221229.ImageToImage", async function () {
    try {
       const data = await client.ImageToImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
