
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tdid.v20210519.Client({
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
describe("tdid.v20210519.test.js", function () {

it("tdid.v20210519.GetCptInfo", async function () {
    try {
       const data = await client.GetCptInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidDocument", async function () {
    try {
       const data = await client.GetDidDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateSelectiveCredential", async function () {
    try {
       const data = await client.CreateSelectiveCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDid", async function () {
    try {
       const data = await client.CreateTDid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateCredential", async function () {
    try {
       const data = await client.CreateCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDidByPublicKey", async function () {
    try {
       const data = await client.CreateTDidByPublicKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCredentialStatus", async function () {
    try {
       const data = await client.GetCredentialStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDidByPrivateKey", async function () {
    try {
       const data = await client.CreateTDidByPrivateKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CheckChain", async function () {
    try {
       const data = await client.CheckChain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.RegisterCpt", async function () {
    try {
       const data = await client.RegisterCpt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.VerifyCredential", async function () {
    try {
       const data = await client.VerifyCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetAuthorityIssuer", async function () {
    try {
       const data = await client.GetAuthorityIssuer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.SetCredentialStatus", async function () {
    try {
       const data = await client.SetCredentialStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
