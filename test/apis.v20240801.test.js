
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.apis.v20240801.Client({
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
describe("apis.v20240801.test.js", function () {

it("apis.v20240801.DescribeAgentCredential", async function () {
    try {
       const data = await client.DescribeAgentCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeAgentApps", async function () {
    try {
       const data = await client.DescribeAgentApps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeModel", async function () {
    try {
       const data = await client.DescribeModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DeleteAgentAppMcpServers", async function () {
    try {
       const data = await client.DeleteAgentAppMcpServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeModelService", async function () {
    try {
       const data = await client.DescribeModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeAgentCredentials", async function () {
    try {
       const data = await client.DescribeAgentCredentials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.CreateAgentAppMcpServers", async function () {
    try {
       const data = await client.CreateAgentAppMcpServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeAgentApp", async function () {
    try {
       const data = await client.DescribeAgentApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeAgentAppMcpServers", async function () {
    try {
       const data = await client.DescribeAgentAppMcpServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.ModifyModel", async function () {
    try {
       const data = await client.ModifyModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeMcpServer", async function () {
    try {
       const data = await client.DescribeMcpServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.ModifyAgentCredential", async function () {
    try {
       const data = await client.ModifyAgentCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DeleteMcpServer", async function () {
    try {
       const data = await client.DeleteMcpServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeMcpServers", async function () {
    try {
       const data = await client.DescribeMcpServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.ModifyMcpServer", async function () {
    try {
       const data = await client.ModifyMcpServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.CreateAgentApp", async function () {
    try {
       const data = await client.CreateAgentApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeAgentAppModelServices", async function () {
    try {
       const data = await client.DescribeAgentAppModelServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DeleteAgentAppModelServices", async function () {
    try {
       const data = await client.DeleteAgentAppModelServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.CreateModelService", async function () {
    try {
       const data = await client.CreateModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.CreateAgentCredential", async function () {
    try {
       const data = await client.CreateAgentCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DeleteAgentCredential", async function () {
    try {
       const data = await client.DeleteAgentCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.CreateAgentAppModelServices", async function () {
    try {
       const data = await client.CreateAgentAppModelServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DeleteModelService", async function () {
    try {
       const data = await client.DeleteModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeModels", async function () {
    try {
       const data = await client.DescribeModels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.ModifyAgentApp", async function () {
    try {
       const data = await client.ModifyAgentApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.ModifyModelService", async function () {
    try {
       const data = await client.ModifyModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DeleteAgentApp", async function () {
    try {
       const data = await client.DeleteAgentApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.CreateModel", async function () {
    try {
       const data = await client.CreateModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DescribeModelServices", async function () {
    try {
       const data = await client.DescribeModelServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.ModifyAgentAppModelServices", async function () {
    try {
       const data = await client.ModifyAgentAppModelServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.CreateMcpServer", async function () {
    try {
       const data = await client.CreateMcpServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apis.v20240801.DeleteModel", async function () {
    try {
       const data = await client.DeleteModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
