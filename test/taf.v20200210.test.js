
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.taf.v20200210.Client({
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
describe("taf.v20200210.test.js", function () {

it("taf.v20200210.EnhanceTaDegree", async function () {
    try {
       const data = await client.EnhanceTaDegree({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("taf.v20200210.RecognizeTargetAudience", async function () {
    try {
       const data = await client.RecognizeTargetAudience({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("taf.v20200210.RecognizeEffectiveFlow", async function () {
    try {
       const data = await client.RecognizeEffectiveFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("taf.v20200210.RecognizeCustomizedAudience", async function () {
    try {
       const data = await client.RecognizeCustomizedAudience({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("taf.v20200210.DetectFraudKOL", async function () {
    try {
       const data = await client.DetectFraudKOL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("taf.v20200210.RecognizePreciseTargetAudience", async function () {
    try {
       const data = await client.RecognizePreciseTargetAudience({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("taf.v20200210.SendTrafficSecuritySmsMessage", async function () {
    try {
       const data = await client.SendTrafficSecuritySmsMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
