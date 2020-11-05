
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.fmu.v20191213.Client({
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
describe("fmu.v20191213.test.js", function () {

it("fmu.v20191213.CreateModel", async function () {
    try {
       const data = await client.CreateModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.StyleImage", async function () {
    try {
       const data = await client.StyleImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.StyleImagePro", async function () {
    try {
       const data = await client.StyleImagePro({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.CancelBeautifyVideoJob", async function () {
    try {
       const data = await client.CancelBeautifyVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.QueryBeautifyVideoJob", async function () {
    try {
       const data = await client.QueryBeautifyVideoJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.DeleteModel", async function () {
    try {
       const data = await client.DeleteModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.BeautifyPic", async function () {
    try {
       const data = await client.BeautifyPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.TryLipstickPic", async function () {
    try {
       const data = await client.TryLipstickPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.GetModelList", async function () {
    try {
       const data = await client.GetModelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("fmu.v20191213.BeautifyVideo", async function () {
    try {
       const data = await client.BeautifyVideo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
