
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.sts.v20180813.Client({
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
describe("sts.v20180813.test.js", function () {

it("sts.v20180813.GetFederationToken", async function () {
    try {
       const data = await client.GetFederationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sts.v20180813.QueryApiKey", async function () {
    try {
       const data = await client.QueryApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sts.v20180813.AssumeRole", async function () {
    try {
       const data = await client.AssumeRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sts.v20180813.AssumeRoleWithWebIdentity", async function () {
    try {
       const data = await client.AssumeRoleWithWebIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sts.v20180813.GetCallerIdentity", async function () {
    try {
       const data = await client.GetCallerIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sts.v20180813.AssumeRoleWithSAML", async function () {
    try {
       const data = await client.AssumeRoleWithSAML({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
