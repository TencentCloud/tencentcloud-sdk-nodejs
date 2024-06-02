
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.trocket.v20230308.Client({
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
describe("trocket.v20230308.test.js", function () {

it("trocket.v20230308.DescribeMQTTMessageList", async function () {
    try {
       const data = await client.DescribeMQTTMessageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyMQTTInstanceCertBinding", async function () {
    try {
       const data = await client.ModifyMQTTInstanceCertBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyTopic", async function () {
    try {
       const data = await client.ModifyTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyMQTTTopic", async function () {
    try {
       const data = await client.ModifyMQTTTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteMQTTUser", async function () {
    try {
       const data = await client.DeleteMQTTUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateRole", async function () {
    try {
       const data = await client.CreateRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ImportSourceClusterConsumerGroups", async function () {
    try {
       const data = await client.ImportSourceClusterConsumerGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteInstance", async function () {
    try {
       const data = await client.DeleteInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateConsumerGroup", async function () {
    try {
       const data = await client.CreateConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTProductSKUList", async function () {
    try {
       const data = await client.DescribeMQTTProductSKUList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ImportSourceClusterTopics", async function () {
    try {
       const data = await client.ImportSourceClusterTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTUserList", async function () {
    try {
       const data = await client.DescribeMQTTUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteMQTTInsPublicEndpoint", async function () {
    try {
       const data = await client.DeleteMQTTInsPublicEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeRoleList", async function () {
    try {
       const data = await client.DescribeRoleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyMQTTUser", async function () {
    try {
       const data = await client.ModifyMQTTUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteConsumerGroup", async function () {
    try {
       const data = await client.DeleteConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyConsumerGroup", async function () {
    try {
       const data = await client.ModifyConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTInsVPCEndpoints", async function () {
    try {
       const data = await client.DescribeMQTTInsVPCEndpoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteRole", async function () {
    try {
       const data = await client.DeleteRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteMQTTInstance", async function () {
    try {
       const data = await client.DeleteMQTTInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTMessage", async function () {
    try {
       const data = await client.DescribeMQTTMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTTopic", async function () {
    try {
       const data = await client.DescribeMQTTTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyMQTTInsPublicEndpoint", async function () {
    try {
       const data = await client.ModifyMQTTInsPublicEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeConsumerGroup", async function () {
    try {
       const data = await client.DescribeConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateTopic", async function () {
    try {
       const data = await client.CreateTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTTopicList", async function () {
    try {
       const data = await client.DescribeMQTTTopicList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTInstance", async function () {
    try {
       const data = await client.DescribeMQTTInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateMQTTTopic", async function () {
    try {
       const data = await client.CreateMQTTTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteMQTTTopic", async function () {
    try {
       const data = await client.DeleteMQTTTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeInstance", async function () {
    try {
       const data = await client.DescribeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeTopicList", async function () {
    try {
       const data = await client.DescribeTopicList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTInsPublicEndpoints", async function () {
    try {
       const data = await client.DescribeMQTTInsPublicEndpoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTInstanceCert", async function () {
    try {
       const data = await client.DescribeMQTTInstanceCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyMQTTInstance", async function () {
    try {
       const data = await client.ModifyMQTTInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTInstanceList", async function () {
    try {
       const data = await client.DescribeMQTTInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeConsumerGroupList", async function () {
    try {
       const data = await client.DescribeConsumerGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateMQTTInstance", async function () {
    try {
       const data = await client.CreateMQTTInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeInstanceList", async function () {
    try {
       const data = await client.DescribeInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeFusionInstanceList", async function () {
    try {
       const data = await client.DescribeFusionInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateMQTTUser", async function () {
    try {
       const data = await client.CreateMQTTUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyRole", async function () {
    try {
       const data = await client.ModifyRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeMQTTClient", async function () {
    try {
       const data = await client.DescribeMQTTClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DescribeTopic", async function () {
    try {
       const data = await client.DescribeTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.ModifyInstance", async function () {
    try {
       const data = await client.ModifyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trocket.v20230308.CreateMQTTInsPublicEndpoint", async function () {
    try {
       const data = await client.CreateMQTTInsPublicEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
