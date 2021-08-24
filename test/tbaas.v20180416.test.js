
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

it("tbaas.v20180416.InvokeBcosTrans", async function () {
    try {
       const data = await client.InvokeBcosTrans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.QueryChainMakerTransaction", async function () {
    try {
       const data = await client.QueryChainMakerTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetBcosBlockByNumber", async function () {
    try {
       const data = await client.GetBcosBlockByNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.QueryChainMakerContract", async function () {
    try {
       const data = await client.QueryChainMakerContract({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetChaincodeLogForUser", async function () {
    try {
       const data = await client.GetChaincodeLogForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetBcosTransByHash", async function () {
    try {
       const data = await client.GetBcosTransByHash({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetClusterListForUser", async function () {
    try {
       const data = await client.GetClusterListForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetBcosBlockList", async function () {
    try {
       const data = await client.GetBcosBlockList({})
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

it("tbaas.v20180416.GetTransListHandler", async function () {
    try {
       const data = await client.GetTransListHandler({})
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

it("tbaas.v20180416.GetPeerLogForUser", async function () {
    try {
       const data = await client.GetPeerLogForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.DeployDynamicBcosContract", async function () {
    try {
       const data = await client.DeployDynamicBcosContract({})
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

it("tbaas.v20180416.CreateChaincodeAndInstallForUser", async function () {
    try {
       const data = await client.CreateChaincodeAndInstallForUser({})
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

it("tbaas.v20180416.GetLatesdTransactionList", async function () {
    try {
       const data = await client.GetLatesdTransactionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.ApplyUserCert", async function () {
    try {
       const data = await client.ApplyUserCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.InvokeChainMakerContract", async function () {
    try {
       const data = await client.InvokeChainMakerContract({})
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

it("tbaas.v20180416.GetChaincodeInitializeResultForUser", async function () {
    try {
       const data = await client.GetChaincodeInitializeResultForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetChannelListForUser", async function () {
    try {
       const data = await client.GetChannelListForUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.QueryChainMakerBlockTransaction", async function () {
    try {
       const data = await client.QueryChainMakerBlockTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.InitializeChaincodeForUser", async function () {
    try {
       const data = await client.InitializeChaincodeForUser({})
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

it("tbaas.v20180416.SrvInvoke", async function () {
    try {
       const data = await client.SrvInvoke({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetBcosTransList", async function () {
    try {
       const data = await client.GetBcosTransList({})
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

it("tbaas.v20180416.SendTransactionHandler", async function () {
    try {
       const data = await client.SendTransactionHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.GetChaincodeCompileLogForUser", async function () {
    try {
       const data = await client.GetChaincodeCompileLogForUser({})
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

it("tbaas.v20180416.GetBlockListHandler", async function () {
    try {
       const data = await client.GetBlockListHandler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
