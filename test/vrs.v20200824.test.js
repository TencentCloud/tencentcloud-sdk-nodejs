
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vrs.v20200824.Client({
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
describe("vrs.v20200824.test.js", function () {

it("vrs.v20200824.DownloadVRSModel", async function () {
    try {
       const data = await client.DownloadVRSModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vrs.v20200824.CancelVRSTask", async function () {
    try {
       const data = await client.CancelVRSTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vrs.v20200824.DetectEnvAndSoundQuality", async function () {
    try {
       const data = await client.DetectEnvAndSoundQuality({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vrs.v20200824.DescribeVRSTaskStatus", async function () {
    try {
       const data = await client.DescribeVRSTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vrs.v20200824.CreateVRSTask", async function () {
    try {
       const data = await client.CreateVRSTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vrs.v20200824.GetVRSVoiceTypes", async function () {
    try {
       const data = await client.GetVRSVoiceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vrs.v20200824.GetTrainingText", async function () {
    try {
       const data = await client.GetTrainingText({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
