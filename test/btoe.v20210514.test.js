
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.btoe.v20210514.Client({
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
describe("btoe.v20210514.test.js", function () {

it("btoe.v20210514.GetDepositCert", async function () {
    try {
       const data = await client.GetDepositCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateHashDeposit", async function () {
    try {
       const data = await client.CreateHashDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.GetDepositFile", async function () {
    try {
       const data = await client.GetDepositFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateVideoDeposit", async function () {
    try {
       const data = await client.CreateVideoDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateDocDeposit", async function () {
    try {
       const data = await client.CreateDocDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateHashDepositNoCert", async function () {
    try {
       const data = await client.CreateHashDepositNoCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateImageDeposit", async function () {
    try {
       const data = await client.CreateImageDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateAudioDeposit", async function () {
    try {
       const data = await client.CreateAudioDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateHashDepositNoSeal", async function () {
    try {
       const data = await client.CreateHashDepositNoSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.VerifyEvidenceBlockChainTxHash", async function () {
    try {
       const data = await client.VerifyEvidenceBlockChainTxHash({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.VerifyEvidenceHash", async function () {
    try {
       const data = await client.VerifyEvidenceHash({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.GetDepositInfo", async function () {
    try {
       const data = await client.GetDepositInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210514.CreateDataDeposit", async function () {
    try {
       const data = await client.CreateDataDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
