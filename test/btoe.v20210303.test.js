
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.btoe.v20210303.Client({
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
describe("btoe.v20210303.test.js", function () {

it("btoe.v20210303.GetDepositCert", async function () {
    try {
       const data = await client.GetDepositCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateHashDeposit", async function () {
    try {
       const data = await client.CreateHashDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.GetDepositFile", async function () {
    try {
       const data = await client.GetDepositFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateVideoDeposit", async function () {
    try {
       const data = await client.CreateVideoDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateDocDeposit", async function () {
    try {
       const data = await client.CreateDocDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateHashDepositNoCert", async function () {
    try {
       const data = await client.CreateHashDepositNoCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateImageDeposit", async function () {
    try {
       const data = await client.CreateImageDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateAudioDeposit", async function () {
    try {
       const data = await client.CreateAudioDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateHashDepositNoSeal", async function () {
    try {
       const data = await client.CreateHashDepositNoSeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.GetDepositInfo", async function () {
    try {
       const data = await client.GetDepositInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateWebpageDeposit", async function () {
    try {
       const data = await client.CreateWebpageDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("btoe.v20210303.CreateDataDeposit", async function () {
    try {
       const data = await client.CreateDataDeposit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
