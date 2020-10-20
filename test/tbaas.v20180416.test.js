
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tbaas.v20180416.Client({
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
describe("tbaas.v20180416.test.js", function () {

it("tbaas.v20180416.ApplyUserCert", async function () {
    try {
       const data = await client.ApplyUserCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.TransByDynamicContractHandler", async function () {
    try {
       const data = await client.TransByDynamicContractHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.SrvInvoke", async function () {
    try {
       const data = await client.SrvInvoke({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.Invoke", async function () {
    try {
       const data = await client.Invoke({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetClusterSummary", async function () {
    try {
       const data = await client.GetClusterSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetTransactionDetailForUser", async function () {
    try {
       const data = await client.GetTransactionDetailForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.BlockByNumberHandler", async function () {
    try {
       const data = await client.BlockByNumberHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetInvokeTx", async function () {
    try {
       const data = await client.GetInvokeTx({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetTransListHandler", async function () {
    try {
       const data = await client.GetTransListHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.SendTransactionHandler", async function () {
    try {
       const data = await client.SendTransactionHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.DownloadUserCert", async function () {
    try {
       const data = await client.DownloadUserCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetBlockTransactionListForUser", async function () {
    try {
       const data = await client.GetBlockTransactionListForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetBlockList", async function () {
    try {
       const data = await client.GetBlockList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.Query", async function () {
    try {
       const data = await client.Query({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.DeployDynamicContractHandler", async function () {
    try {
       const data = await client.DeployDynamicContractHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetTransByHashHandler", async function () {
    try {
       const data = await client.GetTransByHashHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetBlockListHandler", async function () {
    try {
       const data = await client.GetBlockListHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetLatesdTransactionList", async function () {
    try {
       const data = await client.GetLatesdTransactionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
