
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tdmq.v20200217.Client({
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
describe("tdmq.v20200217.test.js", function () {

it("tdmq.v20200217.DeleteCmqTopic", async function () {
    try {
       const data = await client.DeleteCmqTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteEnvironments", async function () {
    try {
       const data = await client.DeleteEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeBindVpcs", async function () {
    try {
       const data = await client.DescribeBindVpcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateCluster", async function () {
    try {
       const data = await client.CreateCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyTopic", async function () {
    try {
       const data = await client.ModifyTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ClearCmqQueue", async function () {
    try {
       const data = await client.ClearCmqQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeNodeHealthOpt", async function () {
    try {
       const data = await client.DescribeNodeHealthOpt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateRole", async function () {
    try {
       const data = await client.CreateRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateCmqQueue", async function () {
    try {
       const data = await client.CreateCmqQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyCmqTopicAttribute", async function () {
    try {
       const data = await client.ModifyCmqTopicAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyCmqQueueAttribute", async function () {
    try {
       const data = await client.ModifyCmqQueueAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateCmqTopic", async function () {
    try {
       const data = await client.CreateCmqTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeCmqSubscriptionDetail", async function () {
    try {
       const data = await client.DescribeCmqSubscriptionDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeCmqDeadLetterSourceQueues", async function () {
    try {
       const data = await client.DescribeCmqDeadLetterSourceQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteCmqQueue", async function () {
    try {
       const data = await client.DeleteCmqQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeCmqTopics", async function () {
    try {
       const data = await client.DescribeCmqTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteTopics", async function () {
    try {
       const data = await client.DeleteTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeEnvironmentRoles", async function () {
    try {
       const data = await client.DescribeEnvironmentRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteCluster", async function () {
    try {
       const data = await client.DeleteCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeBindClusters", async function () {
    try {
       const data = await client.DescribeBindClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeCmqQueueDetail", async function () {
    try {
       const data = await client.DescribeCmqQueueDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.RewindCmqQueue", async function () {
    try {
       const data = await client.RewindCmqQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeClusters", async function () {
    try {
       const data = await client.DescribeClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.SendMsg", async function () {
    try {
       const data = await client.SendMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateTopic", async function () {
    try {
       const data = await client.CreateTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeCmqQueues", async function () {
    try {
       const data = await client.DescribeCmqQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.PublishCmqMsg", async function () {
    try {
       const data = await client.PublishCmqMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeEnvironments", async function () {
    try {
       const data = await client.DescribeEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeClusterDetail", async function () {
    try {
       const data = await client.DescribeClusterDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeSubscriptions", async function () {
    try {
       const data = await client.DescribeSubscriptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteCmqSubscribe", async function () {
    try {
       const data = await client.DeleteCmqSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.AcknowledgeMessage", async function () {
    try {
       const data = await client.AcknowledgeMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeCmqTopicDetail", async function () {
    try {
       const data = await client.DescribeCmqTopicDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateEnvironment", async function () {
    try {
       const data = await client.CreateEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteRoles", async function () {
    try {
       const data = await client.DeleteRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeProducers", async function () {
    try {
       const data = await client.DescribeProducers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ReceiveMessage", async function () {
    try {
       const data = await client.ReceiveMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeTopics", async function () {
    try {
       const data = await client.DescribeTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ClearCmqSubscriptionFilterTags", async function () {
    try {
       const data = await client.ClearCmqSubscriptionFilterTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyEnvironmentRole", async function () {
    try {
       const data = await client.ModifyEnvironmentRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.SendMessages", async function () {
    try {
       const data = await client.SendMessages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.SendCmqMsg", async function () {
    try {
       const data = await client.SendCmqMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyCluster", async function () {
    try {
       const data = await client.ModifyCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyRole", async function () {
    try {
       const data = await client.ModifyRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyEnvironmentAttributes", async function () {
    try {
       const data = await client.ModifyEnvironmentAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyCmqSubscriptionAttribute", async function () {
    try {
       const data = await client.ModifyCmqSubscriptionAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRoles", async function () {
    try {
       const data = await client.DescribeRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.UnbindCmqDeadLetter", async function () {
    try {
       const data = await client.UnbindCmqDeadLetter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateSubscription", async function () {
    try {
       const data = await client.CreateSubscription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.SendBatchMessages", async function () {
    try {
       const data = await client.SendBatchMessages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeEnvironmentAttributes", async function () {
    try {
       const data = await client.DescribeEnvironmentAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateCmqSubscribe", async function () {
    try {
       const data = await client.CreateCmqSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateEnvironmentRole", async function () {
    try {
       const data = await client.CreateEnvironmentRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteEnvironmentRoles", async function () {
    try {
       const data = await client.DeleteEnvironmentRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ResetMsgSubOffsetByTimestamp", async function () {
    try {
       const data = await client.ResetMsgSubOffsetByTimestamp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeNamespaceBundlesOpt", async function () {
    try {
       const data = await client.DescribeNamespaceBundlesOpt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteSubscriptions", async function () {
    try {
       const data = await client.DeleteSubscriptions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
