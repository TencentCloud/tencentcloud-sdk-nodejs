
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cngw.v20230418.Client({
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
describe("cngw.v20230418.test.js", function () {

it("cngw.v20230418.DeleteCloudNativeAPIGatewayConsumer", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayConsumerGroup", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DeleteCloudNativeAPIGatewayMCPServer", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayMCPServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.CreateCloudNativeAPIGatewaySecretKey", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewaySecretKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayMCPServerACL", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayMCPServerACL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.RemoveCloudNativeAPIGatewayConsumerGroupAuth", async function () {
    try {
       const data = await client.RemoveCloudNativeAPIGatewayConsumerGroupAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DeleteCloudNativeAPIGatewayMCPTool", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayMCPTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.CreateCloudNativeAPIGatewayLLMModelAPI", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayLLMModelAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayLLMModelAPI", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayLLMModelAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayMCPToolACL", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayMCPToolACL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayMCPToolStatus", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayMCPToolStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.UnbindCloudNativeAPIGatewaySecretKey", async function () {
    try {
       const data = await client.UnbindCloudNativeAPIGatewaySecretKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayLLMModelService", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayLLMModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayConsumerGroup", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.RemoveCloudNativeAPIGatewayConsumerInGroup", async function () {
    try {
       const data = await client.RemoveCloudNativeAPIGatewayConsumerInGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayMCPServerACL", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayMCPServerACL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayMCPToolACLList", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayMCPToolACLList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.CreateCloudNativeAPIGatewayLLMModelService", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayLLMModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayMCPServer", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayMCPServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayLLMModelAPIs", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayLLMModelAPIs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.AddCloudNativeAPIGatewayConsumerInGroup", async function () {
    try {
       const data = await client.AddCloudNativeAPIGatewayConsumerInGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayConsumer", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayMCPServer", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayMCPServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayMCPServerList", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayMCPServerList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayMCPServerAuth", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayMCPServerAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DeleteCloudNativeAPIGatewayLLMModelAPI", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayLLMModelAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DeleteCloudNativeAPIGatewaySecretKey", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewaySecretKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayLLMModelService", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayLLMModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayLLMModelAPI", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayLLMModelAPI({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.CreateCloudNativeAPIGatewayConsumerGroup", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayMCPTool", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayMCPTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.CreateCloudNativeAPIGatewayMCPTool", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayMCPTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayMCPTool", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayMCPTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayMCPServerAuth", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayMCPServerAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewaySecretKeyValue", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewaySecretKeyValue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewayMCPServerStatus", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewayMCPServerStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.CreateCloudNativeAPIGatewayMCPServer", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayMCPServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.ModifyCloudNativeAPIGatewaySecretKey", async function () {
    try {
       const data = await client.ModifyCloudNativeAPIGatewaySecretKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayLLMTokenUsageList", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayLLMTokenUsageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayMCPToolList", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayMCPToolList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DeleteCloudNativeAPIGatewayLLMModelService", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayLLMModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayConsumer", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewaySecretKey", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewaySecretKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.AddCloudNativeAPIGatewayConsumerGroupAuth", async function () {
    try {
       const data = await client.AddCloudNativeAPIGatewayConsumerGroupAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.BindCloudNativeAPIGatewaySecretKey", async function () {
    try {
       const data = await client.BindCloudNativeAPIGatewaySecretKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DescribeCloudNativeAPIGatewayLLMModelServices", async function () {
    try {
       const data = await client.DescribeCloudNativeAPIGatewayLLMModelServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.DeleteCloudNativeAPIGatewayConsumerGroup", async function () {
    try {
       const data = await client.DeleteCloudNativeAPIGatewayConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cngw.v20230418.CreateCloudNativeAPIGatewayConsumer", async function () {
    try {
       const data = await client.CreateCloudNativeAPIGatewayConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
