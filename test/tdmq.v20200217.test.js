
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

it("tdmq.v20200217.DeleteEnvironments", async function () {
    try {
       const data = await client.DeleteEnvironments({})
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

it("tdmq.v20200217.DescribeRocketMQConsumeStats", async function () {
    try {
       const data = await client.DescribeRocketMQConsumeStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQNamespaces", async function () {
    try {
       const data = await client.DescribeRocketMQNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyAMQPCluster", async function () {
    try {
       const data = await client.ModifyAMQPCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQMsgTrace", async function () {
    try {
       const data = await client.DescribeRocketMQMsgTrace({})
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

it("tdmq.v20200217.DeleteCmqQueue", async function () {
    try {
       const data = await client.DeleteCmqQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyRabbitMQVirtualHost", async function () {
    try {
       const data = await client.ModifyRabbitMQVirtualHost({})
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

it("tdmq.v20200217.DeleteRocketMQGroup", async function () {
    try {
       const data = await client.DeleteRocketMQGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteProCluster", async function () {
    try {
       const data = await client.DeleteProCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQSmoothMigrationTaskList", async function () {
    try {
       const data = await client.DescribeRocketMQSmoothMigrationTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQConsumerConnections", async function () {
    try {
       const data = await client.DescribeRocketMQConsumerConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateRabbitMQUser", async function () {
    try {
       const data = await client.CreateRabbitMQUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRabbitMQVipInstances", async function () {
    try {
       const data = await client.DescribeRabbitMQVipInstances({})
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

it("tdmq.v20200217.CreateRocketMQGroup", async function () {
    try {
       const data = await client.CreateRocketMQGroup({})
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

it("tdmq.v20200217.CreateEnvironment", async function () {
    try {
       const data = await client.CreateEnvironment({})
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

it("tdmq.v20200217.SendMessages", async function () {
    try {
       const data = await client.SendMessages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyRocketMQTopic", async function () {
    try {
       const data = await client.ModifyRocketMQTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQTopicMsgs", async function () {
    try {
       const data = await client.DescribeRocketMQTopicMsgs({})
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

it("tdmq.v20200217.DescribePublisherSummary", async function () {
    try {
       const data = await client.DescribePublisherSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteRocketMQNamespace", async function () {
    try {
       const data = await client.DeleteRocketMQNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateRabbitMQVirtualHost", async function () {
    try {
       const data = await client.CreateRabbitMQVirtualHost({})
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

it("tdmq.v20200217.DeleteCmqTopic", async function () {
    try {
       const data = await client.DeleteCmqTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ModifyPublicNetworkAccessPoint", async function () {
    try {
       const data = await client.ModifyPublicNetworkAccessPoint({})
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

it("tdmq.v20200217.ModifyRocketMQGroup", async function () {
    try {
       const data = await client.ModifyRocketMQGroup({})
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

it("tdmq.v20200217.DescribeRocketMQMigratingTopicList", async function () {
    try {
       const data = await client.DescribeRocketMQMigratingTopicList({})
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

it("tdmq.v20200217.ResetRocketMQConsumerOffSet", async function () {
    try {
       const data = await client.ResetRocketMQConsumerOffSet({})
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

it("tdmq.v20200217.DescribeRocketMQSourceClusterTopicList", async function () {
    try {
       const data = await client.DescribeRocketMQSourceClusterTopicList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQConsumerConnectionDetail", async function () {
    try {
       const data = await client.DescribeRocketMQConsumerConnectionDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRabbitMQVipInstance", async function () {
    try {
       const data = await client.DescribeRabbitMQVipInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQPublicAccessMonitorData", async function () {
    try {
       const data = await client.DescribeRocketMQPublicAccessMonitorData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ImportRocketMQTopics", async function () {
    try {
       const data = await client.ImportRocketMQTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.SetRocketMQPublicAccessPoint", async function () {
    try {
       const data = await client.SetRocketMQPublicAccessPoint({})
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

it("tdmq.v20200217.DescribeCmqTopicDetail", async function () {
    try {
       const data = await client.DescribeCmqTopicDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQVipInstanceDetail", async function () {
    try {
       const data = await client.DescribeRocketMQVipInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRabbitMQUser", async function () {
    try {
       const data = await client.DescribeRabbitMQUser({})
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

it("tdmq.v20200217.ModifyRocketMQCluster", async function () {
    try {
       const data = await client.ModifyRocketMQCluster({})
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

it("tdmq.v20200217.DescribePulsarProInstanceDetail", async function () {
    try {
       const data = await client.DescribePulsarProInstanceDetail({})
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

it("tdmq.v20200217.DescribeRocketMQSubscriptions", async function () {
    try {
       const data = await client.DescribeRocketMQSubscriptions({})
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

it("tdmq.v20200217.DescribeRocketMQCluster", async function () {
    try {
       const data = await client.DescribeRocketMQCluster({})
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

it("tdmq.v20200217.DescribeMsgTrace", async function () {
    try {
       const data = await client.DescribeMsgTrace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRabbitMQNodeList", async function () {
    try {
       const data = await client.DescribeRabbitMQNodeList({})
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

it("tdmq.v20200217.DeleteRocketMQTopic", async function () {
    try {
       const data = await client.DeleteRocketMQTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ExportRocketMQMessageDetail", async function () {
    try {
       const data = await client.ExportRocketMQMessageDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRabbitMQQueues", async function () {
    try {
       const data = await client.DescribeRabbitMQQueues({})
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

it("tdmq.v20200217.ModifyRocketMQInstanceSpec", async function () {
    try {
       const data = await client.ModifyRocketMQInstanceSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.ImportRocketMQConsumerGroups", async function () {
    try {
       const data = await client.ImportRocketMQConsumerGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQVipInstances", async function () {
    try {
       const data = await client.DescribeRocketMQVipInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.VerifyRocketMQConsume", async function () {
    try {
       const data = await client.VerifyRocketMQConsume({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeAMQPClusters", async function () {
    try {
       const data = await client.DescribeAMQPClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateRabbitMQVipInstance", async function () {
    try {
       const data = await client.CreateRabbitMQVipInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeMqMsgTrace", async function () {
    try {
       const data = await client.DescribeMqMsgTrace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQGroups", async function () {
    try {
       const data = await client.DescribeRocketMQGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateRocketMQTopic", async function () {
    try {
       const data = await client.CreateRocketMQTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteRocketMQCluster", async function () {
    try {
       const data = await client.DeleteRocketMQCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DeleteRabbitMQUser", async function () {
    try {
       const data = await client.DeleteRabbitMQUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateProCluster", async function () {
    try {
       const data = await client.CreateProCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRabbitMQVirtualHost", async function () {
    try {
       const data = await client.DescribeRabbitMQVirtualHost({})
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

it("tdmq.v20200217.DeleteRabbitMQVirtualHost", async function () {
    try {
       const data = await client.DeleteRabbitMQVirtualHost({})
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

it("tdmq.v20200217.DescribeRocketMQSmoothMigrationTask", async function () {
    try {
       const data = await client.DescribeRocketMQSmoothMigrationTask({})
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

it("tdmq.v20200217.ModifyRabbitMQUser", async function () {
    try {
       const data = await client.ModifyRabbitMQUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateRocketMQNamespace", async function () {
    try {
       const data = await client.CreateRocketMQNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeMsg", async function () {
    try {
       const data = await client.DescribeMsg({})
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

it("tdmq.v20200217.ModifyRabbitMQVipInstance", async function () {
    try {
       const data = await client.ModifyRabbitMQVipInstance({})
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

it("tdmq.v20200217.DescribeRocketMQTopics", async function () {
    try {
       const data = await client.DescribeRocketMQTopics({})
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

it("tdmq.v20200217.DescribeRabbitMQVirtualHostList", async function () {
    try {
       const data = await client.DescribeRabbitMQVirtualHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQClusters", async function () {
    try {
       const data = await client.DescribeRocketMQClusters({})
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

it("tdmq.v20200217.ModifyRocketMQNamespace", async function () {
    try {
       const data = await client.ModifyRocketMQNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeTopicMsgs", async function () {
    try {
       const data = await client.DescribeTopicMsgs({})
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

it("tdmq.v20200217.DescribePulsarProInstances", async function () {
    try {
       const data = await client.DescribePulsarProInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribePublishers", async function () {
    try {
       const data = await client.DescribePublishers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.CreateRocketMQCluster", async function () {
    try {
       const data = await client.CreateRocketMQCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRabbitMQQueueDetail", async function () {
    try {
       const data = await client.DescribeRabbitMQQueueDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQMsg", async function () {
    try {
       const data = await client.DescribeRocketMQMsg({})
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

it("tdmq.v20200217.DeleteRabbitMQVipInstance", async function () {
    try {
       const data = await client.DeleteRabbitMQVipInstance({})
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

it("tdmq.v20200217.DescribeRocketMQSourceClusterGroupList", async function () {
    try {
       const data = await client.DescribeRocketMQSourceClusterGroupList({})
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

it("tdmq.v20200217.DeleteRocketMQVipInstance", async function () {
    try {
       const data = await client.DeleteRocketMQVipInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.SendRocketMQMessage", async function () {
    try {
       const data = await client.SendRocketMQMessage({})
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

it("tdmq.v20200217.DeleteCmqSubscribe", async function () {
    try {
       const data = await client.DeleteCmqSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeRocketMQPublicAccessPoint", async function () {
    try {
       const data = await client.DescribeRocketMQPublicAccessPoint({})
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

it("tdmq.v20200217.CreateRocketMQVipInstance", async function () {
    try {
       const data = await client.CreateRocketMQVipInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdmq.v20200217.DescribeAllTenants", async function () {
    try {
       const data = await client.DescribeAllTenants({})
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
