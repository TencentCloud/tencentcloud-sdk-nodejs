
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ckafka.v20190819.Client({
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
describe("ckafka.v20190819.test.js", function () {

it("ckafka.v20190819.RenewCkafkaInstance", async function () {
    try {
       const data = await client.RenewCkafkaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeRoute", async function () {
    try {
       const data = await client.DescribeRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeGroupInfo", async function () {
    try {
       const data = await client.DescribeGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateConsumer", async function () {
    try {
       const data = await client.CreateConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeConsumerGroup", async function () {
    try {
       const data = await client.DescribeConsumerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeConnectResource", async function () {
    try {
       const data = await client.DescribeConnectResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateInstancePost", async function () {
    try {
       const data = await client.CreateInstancePost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeAclRule", async function () {
    try {
       const data = await client.DescribeAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeTopicSubscribeGroup", async function () {
    try {
       const data = await client.DescribeTopicSubscribeGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyInstancePre", async function () {
    try {
       const data = await client.ModifyInstancePre({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeTopicDetail", async function () {
    try {
       const data = await client.DescribeTopicDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.BatchModifyTopicAttributes", async function () {
    try {
       const data = await client.BatchModifyTopicAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteRoute", async function () {
    try {
       const data = await client.DeleteRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.SendMessage", async function () {
    try {
       const data = await client.SendMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyDatahubTopic", async function () {
    try {
       const data = await client.ModifyDatahubTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateTopicIpWhiteList", async function () {
    try {
       const data = await client.CreateTopicIpWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteConnectResource", async function () {
    try {
       const data = await client.DeleteConnectResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeGroup", async function () {
    try {
       const data = await client.DescribeGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyDatahubTask", async function () {
    try {
       const data = await client.ModifyDatahubTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeDatahubTasks", async function () {
    try {
       const data = await client.DescribeDatahubTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateRoute", async function () {
    try {
       const data = await client.CreateRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteDatahubTask", async function () {
    try {
       const data = await client.DeleteDatahubTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeUser", async function () {
    try {
       const data = await client.DescribeUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.FetchMessageListByOffset", async function () {
    try {
       const data = await client.FetchMessageListByOffset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateDatahubTopic", async function () {
    try {
       const data = await client.CreateDatahubTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeACL", async function () {
    try {
       const data = await client.DescribeACL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeDatahubTopics", async function () {
    try {
       const data = await client.DescribeDatahubTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CancelAuthorizationToken", async function () {
    try {
       const data = await client.CancelAuthorizationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateInstancePre", async function () {
    try {
       const data = await client.CreateInstancePre({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.FetchMessageByOffset", async function () {
    try {
       const data = await client.FetchMessageByOffset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteDatahubTopic", async function () {
    try {
       const data = await client.DeleteDatahubTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteTopicIpWhiteList", async function () {
    try {
       const data = await client.DeleteTopicIpWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeRegion", async function () {
    try {
       const data = await client.DescribeRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyGroupOffsets", async function () {
    try {
       const data = await client.ModifyGroupOffsets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateAcl", async function () {
    try {
       const data = await client.CreateAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateTopic", async function () {
    try {
       const data = await client.CreateTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateConnectResource", async function () {
    try {
       const data = await client.CreateConnectResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeDatahubTask", async function () {
    try {
       const data = await client.DescribeDatahubTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CheckCdcCluster", async function () {
    try {
       const data = await client.CheckCdcCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyAclRule", async function () {
    try {
       const data = await client.ModifyAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreatePartition", async function () {
    try {
       const data = await client.CreatePartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.FetchLatestDatahubMessageList", async function () {
    try {
       const data = await client.FetchLatestDatahubMessageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteUser", async function () {
    try {
       const data = await client.DeleteUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyConnectResource", async function () {
    try {
       const data = await client.ModifyConnectResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.FetchDatahubMessageByOffset", async function () {
    try {
       const data = await client.FetchDatahubMessageByOffset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateToken", async function () {
    try {
       const data = await client.CreateToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeDatahubGroupOffsets", async function () {
    try {
       const data = await client.DescribeDatahubGroupOffsets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteAcl", async function () {
    try {
       const data = await client.DeleteAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeAppInfo", async function () {
    try {
       const data = await client.DescribeAppInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeTopicAttributes", async function () {
    try {
       const data = await client.DescribeTopicAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteInstancePre", async function () {
    try {
       const data = await client.DeleteInstancePre({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeInstanceAttributes", async function () {
    try {
       const data = await client.DescribeInstanceAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeInstancesDetail", async function () {
    try {
       const data = await client.DescribeInstancesDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.BatchCreateAcl", async function () {
    try {
       const data = await client.BatchCreateAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateDatahubTask", async function () {
    try {
       const data = await client.CreateDatahubTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteAclRule", async function () {
    try {
       const data = await client.DeleteAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteRouteTriggerTime", async function () {
    try {
       const data = await client.DeleteRouteTriggerTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.BatchModifyGroupOffsets", async function () {
    try {
       const data = await client.BatchModifyGroupOffsets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeTopicSyncReplica", async function () {
    try {
       const data = await client.DescribeTopicSyncReplica({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeGroupOffsets", async function () {
    try {
       const data = await client.DescribeGroupOffsets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.AuthorizeToken", async function () {
    try {
       const data = await client.AuthorizeToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyInstanceAttributes", async function () {
    try {
       const data = await client.ModifyInstanceAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeTopicProduceConnection", async function () {
    try {
       const data = await client.DescribeTopicProduceConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeTopic", async function () {
    try {
       const data = await client.DescribeTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateAclRule", async function () {
    try {
       const data = await client.CreateAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeDatahubTopic", async function () {
    try {
       const data = await client.DescribeDatahubTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeCkafkaZone", async function () {
    try {
       const data = await client.DescribeCkafkaZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DescribeConnectResources", async function () {
    try {
       const data = await client.DescribeConnectResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateCdcCluster", async function () {
    try {
       const data = await client.CreateCdcCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyPassword", async function () {
    try {
       const data = await client.ModifyPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.InquireCkafkaPrice", async function () {
    try {
       const data = await client.InquireCkafkaPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ckafka.v20190819.ModifyTopicAttributes", async function () {
    try {
       const data = await client.ModifyTopicAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
