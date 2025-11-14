
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ai3d.v20250513.Client({
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
describe("ai3d.v20250513.test.js", function () {

it("ai3d.v20250513.SubmitHunyuanTo3DProJob", async function () {
    try {
       const data = await client.SubmitHunyuanTo3DProJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.QueryHunyuanTo3DRapidJob", async function () {
    try {
       const data = await client.QueryHunyuanTo3DRapidJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.QueryHunyuanTo3DProJob", async function () {
    try {
       const data = await client.QueryHunyuanTo3DProJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.SubmitHunyuanTo3DRapidJob", async function () {
    try {
       const data = await client.SubmitHunyuanTo3DRapidJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
