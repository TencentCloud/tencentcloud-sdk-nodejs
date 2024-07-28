
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vclm.v20240523.Client({
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
describe("vclm.v20240523.test.js", function () {

it("vclm.v20240523.SubmitVideoTranslateJob", async function () {
    try {
       const data = await client.SubmitVideoTranslateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoTranslateJob", async function () {
    try {
       const data = await client.DescribeVideoTranslateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitVideoStylizationJob", async function () {
    try {
       const data = await client.SubmitVideoStylizationJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitPortraitSingJob", async function () {
    try {
       const data = await client.SubmitPortraitSingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.ConfirmVideoTranslateJob", async function () {
    try {
       const data = await client.ConfirmVideoTranslateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribePortraitSingJob", async function () {
    try {
       const data = await client.DescribePortraitSingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeImageAnimateJob", async function () {
    try {
       const data = await client.DescribeImageAnimateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.SubmitImageAnimateJob", async function () {
    try {
       const data = await client.SubmitImageAnimateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vclm.v20240523.DescribeVideoStylizationJob", async function () {
    try {
       const data = await client.DescribeVideoStylizationJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
