
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mrs.v20200910.Client({
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
describe("mrs.v20200910.test.js", function () {

it("mrs.v20200910.ImageToClass", async function () {
    try {
       const data = await client.ImageToClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.DrugInstructionObject", async function () {
    try {
       const data = await client.DrugInstructionObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.TurnPDFToObjectAsyncGetResult", async function () {
    try {
       const data = await client.TurnPDFToObjectAsyncGetResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.TextToObject", async function () {
    try {
       const data = await client.TextToObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.ImageMask", async function () {
    try {
       const data = await client.ImageMask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.ImageToObject", async function () {
    try {
       const data = await client.ImageToObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.TurnPDFToObjectAsync", async function () {
    try {
       const data = await client.TurnPDFToObjectAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.ImageMaskAsync", async function () {
    try {
       const data = await client.ImageMaskAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.ImageMaskAsyncGetResult", async function () {
    try {
       const data = await client.ImageMaskAsyncGetResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.TurnPDFToObject", async function () {
    try {
       const data = await client.TurnPDFToObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mrs.v20200910.TextToClass", async function () {
    try {
       const data = await client.TextToClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
