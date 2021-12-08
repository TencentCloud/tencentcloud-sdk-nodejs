
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.scf.v20180416.Client({
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
describe("scf.v20180416.test.js", function () {

it("scf.v20180416.UpdateAlias", async function () {
    try {
       const data = await client.UpdateAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.UpdateNamespace", async function () {
    try {
       const data = await client.UpdateNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.InvokeFunction", async function () {
    try {
       const data = await client.InvokeFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.DeleteFunction", async function () {
    try {
       const data = await client.DeleteFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.TerminateAsyncEvent", async function () {
    try {
       const data = await client.TerminateAsyncEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListTriggers", async function () {
    try {
       const data = await client.ListTriggers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListVersionByFunction", async function () {
    try {
       const data = await client.ListVersionByFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetLayerVersion", async function () {
    try {
       const data = await client.GetLayerVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.CreateTrigger", async function () {
    try {
       const data = await client.CreateTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.CreateNamespace", async function () {
    try {
       const data = await client.CreateNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.CopyFunction", async function () {
    try {
       const data = await client.CopyFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.DeleteTrigger", async function () {
    try {
       const data = await client.DeleteTrigger({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListAliases", async function () {
    try {
       const data = await client.ListAliases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetFunctionLogs", async function () {
    try {
       const data = await client.GetFunctionLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetProvisionedConcurrencyConfig", async function () {
    try {
       const data = await client.GetProvisionedConcurrencyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.PublishLayerVersion", async function () {
    try {
       const data = await client.PublishLayerVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.DeleteProvisionedConcurrencyConfig", async function () {
    try {
       const data = await client.DeleteProvisionedConcurrencyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.PublishVersion", async function () {
    try {
       const data = await client.PublishVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.DeleteLayerVersion", async function () {
    try {
       const data = await client.DeleteLayerVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetFunction", async function () {
    try {
       const data = await client.GetFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.DeleteAlias", async function () {
    try {
       const data = await client.DeleteAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetAsyncEventStatus", async function () {
    try {
       const data = await client.GetAsyncEventStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.DeleteNamespace", async function () {
    try {
       const data = await client.DeleteNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.CreateAlias", async function () {
    try {
       const data = await client.CreateAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.PutProvisionedConcurrencyConfig", async function () {
    try {
       const data = await client.PutProvisionedConcurrencyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.UpdateFunctionEventInvokeConfig", async function () {
    try {
       const data = await client.UpdateFunctionEventInvokeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetFunctionEventInvokeConfig", async function () {
    try {
       const data = await client.GetFunctionEventInvokeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListLayers", async function () {
    try {
       const data = await client.ListLayers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListAsyncEvents", async function () {
    try {
       const data = await client.ListAsyncEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListLayerVersions", async function () {
    try {
       const data = await client.ListLayerVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetReservedConcurrencyConfig", async function () {
    try {
       const data = await client.GetReservedConcurrencyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListFunctions", async function () {
    try {
       const data = await client.ListFunctions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.UpdateFunctionConfiguration", async function () {
    try {
       const data = await client.UpdateFunctionConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.PutReservedConcurrencyConfig", async function () {
    try {
       const data = await client.PutReservedConcurrencyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetAccount", async function () {
    try {
       const data = await client.GetAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.DeleteReservedConcurrencyConfig", async function () {
    try {
       const data = await client.DeleteReservedConcurrencyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.Invoke", async function () {
    try {
       const data = await client.Invoke({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetFunctionAddress", async function () {
    try {
       const data = await client.GetFunctionAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetAlias", async function () {
    try {
       const data = await client.GetAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.PutTotalConcurrencyConfig", async function () {
    try {
       const data = await client.PutTotalConcurrencyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.CreateFunction", async function () {
    try {
       const data = await client.CreateFunction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.ListNamespaces", async function () {
    try {
       const data = await client.ListNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.UpdateFunctionCode", async function () {
    try {
       const data = await client.UpdateFunctionCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("scf.v20180416.GetRequestStatus", async function () {
    try {
       const data = await client.GetRequestStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
