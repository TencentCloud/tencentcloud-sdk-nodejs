
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tiia.v20190529.Client({
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
describe("tiia.v20190529.test.js", function () {

it("tiia.v20190529.DetectProductBeta", async function () {
    try {
       const data = await client.DetectProductBeta({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.RecognizeCar", async function () {
    try {
       const data = await client.RecognizeCar({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.DetectLabel", async function () {
    try {
       const data = await client.DetectLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.AssessQuality", async function () {
    try {
       const data = await client.AssessQuality({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.DetectDisgust", async function () {
    try {
       const data = await client.DetectDisgust({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.DetectLabelBeta", async function () {
    try {
       const data = await client.DetectLabelBeta({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.CropImage", async function () {
    try {
       const data = await client.CropImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.DetectMisbehavior", async function () {
    try {
       const data = await client.DetectMisbehavior({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.DetectProduct", async function () {
    try {
       const data = await client.DetectProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.EnhanceImage", async function () {
    try {
       const data = await client.EnhanceImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiia.v20190529.DetectCelebrity", async function () {
    try {
       const data = await client.DetectCelebrity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
