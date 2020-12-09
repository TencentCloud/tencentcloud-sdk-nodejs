
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.captcha.v20190722.Client({
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
describe("captcha.v20190722.test.js", function () {

it("captcha.v20190722.DescribeCaptchaMiniRiskResult", async function () {
    try {
       const data = await client.DescribeCaptchaMiniRiskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaTicketData", async function () {
    try {
       const data = await client.DescribeCaptchaTicketData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaDataSum", async function () {
    try {
       const data = await client.DescribeCaptchaDataSum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaOperData", async function () {
    try {
       const data = await client.DescribeCaptchaOperData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaMiniData", async function () {
    try {
       const data = await client.DescribeCaptchaMiniData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaMiniOperData", async function () {
    try {
       const data = await client.DescribeCaptchaMiniOperData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaData", async function () {
    try {
       const data = await client.DescribeCaptchaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaMiniDataSum", async function () {
    try {
       const data = await client.DescribeCaptchaMiniDataSum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaMiniResult", async function () {
    try {
       const data = await client.DescribeCaptchaMiniResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.UpdateCaptchaAppIdInfo", async function () {
    try {
       const data = await client.UpdateCaptchaAppIdInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaUserAllAppId", async function () {
    try {
       const data = await client.DescribeCaptchaUserAllAppId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaAppIdInfo", async function () {
    try {
       const data = await client.DescribeCaptchaAppIdInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("captcha.v20190722.DescribeCaptchaResult", async function () {
    try {
       const data = await client.DescribeCaptchaResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
