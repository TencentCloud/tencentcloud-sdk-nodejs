
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

it("tbaas.v20180416.QueryChainMakerTransaction", async function () {
    try {
       const data = await client.QueryChainMakerTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.ApplyChainMakerBatchUserCert", async function () {
    try {
       const data = await client.ApplyChainMakerBatchUserCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.QueryChainMakerDemoTransaction", async function () {
    try {
       const data = await client.QueryChainMakerDemoTransaction({})
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

it("tbaas.v20180416.QueryChainMakerDemoBlockTransaction", async function () {
    try {
       const data = await client.QueryChainMakerDemoBlockTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.DescribeFabricBlock", async function () {
    try {
       const data = await client.DescribeFabricBlock({})
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

it("tbaas.v20180416.GetLatestTransactionList", async function () {
    try {
       const data = await client.GetLatestTransactionList({})
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

it("tbaas.v20180416.GetInvokeTx", async function () {
    try {
       const data = await client.GetInvokeTx({})
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

it("tbaas.v20180416.QueryChainMakerDemoContract", async function () {
    try {
       const data = await client.QueryChainMakerDemoContract({})
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

it("tbaas.v20180416.QueryFabricChaincode", async function () {
    try {
       const data = await client.QueryFabricChaincode({})
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

it("tbaas.v20180416.DescribeFabricTransaction", async function () {
    try {
       const data = await client.DescribeFabricTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tbaas.v20180416.InvokeChainMakerDemoContract", async function () {
    try {
       const data = await client.InvokeChainMakerDemoContract({})
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

it("tbaas.v20180416.InvokeFabricChaincode", async function () {
    try {
       const data = await client.InvokeFabricChaincode({})
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

})
