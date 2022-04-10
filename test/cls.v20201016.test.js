
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cls.v20201016.Client({
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
describe("cls.v20201016.test.js", function () {

it("cls.v20201016.CreateMachineGroup", async function () {
    try {
       const data = await client.CreateMachineGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeMachineGroups", async function () {
    try {
       const data = await client.DescribeMachineGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.GetAlarmLog", async function () {
    try {
       const data = await client.GetAlarmLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateConsumer", async function () {
    try {
       const data = await client.CreateConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyTopic", async function () {
    try {
       const data = await client.ModifyTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeMachines", async function () {
    try {
       const data = await client.DescribeMachines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeLogsets", async function () {
    try {
       const data = await client.DescribeLogsets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyLogset", async function () {
    try {
       const data = await client.ModifyLogset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeExports", async function () {
    try {
       const data = await client.DescribeExports({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyIndex", async function () {
    try {
       const data = await client.ModifyIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyConfigExtra", async function () {
    try {
       const data = await client.ModifyConfigExtra({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeIndex", async function () {
    try {
       const data = await client.DescribeIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribePartitions", async function () {
    try {
       const data = await client.DescribePartitions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateIndex", async function () {
    try {
       const data = await client.CreateIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteConfig", async function () {
    try {
       const data = await client.DeleteConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeConfigExtras", async function () {
    try {
       const data = await client.DescribeConfigExtras({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateShipper", async function () {
    try {
       const data = await client.CreateShipper({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyConsumer", async function () {
    try {
       const data = await client.ModifyConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateAlarmNotice", async function () {
    try {
       const data = await client.CreateAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteConsumer", async function () {
    try {
       const data = await client.DeleteConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyAlarm", async function () {
    try {
       const data = await client.ModifyAlarm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteMachineGroup", async function () {
    try {
       const data = await client.DeleteMachineGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeTopics", async function () {
    try {
       const data = await client.DescribeTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteLogset", async function () {
    try {
       const data = await client.DeleteLogset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeShippers", async function () {
    try {
       const data = await client.DescribeShippers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyMachineGroup", async function () {
    try {
       const data = await client.ModifyMachineGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteConfigFromMachineGroup", async function () {
    try {
       const data = await client.DeleteConfigFromMachineGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteDataTransform", async function () {
    try {
       const data = await client.DeleteDataTransform({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteConfigExtra", async function () {
    try {
       const data = await client.DeleteConfigExtra({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateDataTransform", async function () {
    try {
       const data = await client.CreateDataTransform({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeDataTransformInfo", async function () {
    try {
       const data = await client.DescribeDataTransformInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeAlarmNotices", async function () {
    try {
       const data = await client.DescribeAlarmNotices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateTopic", async function () {
    try {
       const data = await client.CreateTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ApplyConfigToMachineGroup", async function () {
    try {
       const data = await client.ApplyConfigToMachineGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateLogset", async function () {
    try {
       const data = await client.CreateLogset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteAlarmNotice", async function () {
    try {
       const data = await client.DeleteAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeLogHistogram", async function () {
    try {
       const data = await client.DescribeLogHistogram({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.SearchLog", async function () {
    try {
       const data = await client.SearchLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyAlarmNotice", async function () {
    try {
       const data = await client.ModifyAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.OpenKafkaConsumer", async function () {
    try {
       const data = await client.OpenKafkaConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyConfig", async function () {
    try {
       const data = await client.ModifyConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.UploadLog", async function () {
    try {
       const data = await client.UploadLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeShipperTasks", async function () {
    try {
       const data = await client.DescribeShipperTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyShipper", async function () {
    try {
       const data = await client.ModifyShipper({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateConfig", async function () {
    try {
       const data = await client.CreateConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeMachineGroupConfigs", async function () {
    try {
       const data = await client.DescribeMachineGroupConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteShipper", async function () {
    try {
       const data = await client.DeleteShipper({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteIndex", async function () {
    try {
       const data = await client.DeleteIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyDataTransform", async function () {
    try {
       const data = await client.ModifyDataTransform({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteAlarm", async function () {
    try {
       const data = await client.DeleteAlarm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeLogContext", async function () {
    try {
       const data = await client.DescribeLogContext({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeConsumer", async function () {
    try {
       const data = await client.DescribeConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.SplitPartition", async function () {
    try {
       const data = await client.SplitPartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeConfigs", async function () {
    try {
       const data = await client.DescribeConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.MergePartition", async function () {
    try {
       const data = await client.MergePartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateConfigExtra", async function () {
    try {
       const data = await client.CreateConfigExtra({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.RetryShipperTask", async function () {
    try {
       const data = await client.RetryShipperTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeConfigMachineGroups", async function () {
    try {
       const data = await client.DescribeConfigMachineGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteExport", async function () {
    try {
       const data = await client.DeleteExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateAlarm", async function () {
    try {
       const data = await client.CreateAlarm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateExport", async function () {
    try {
       const data = await client.CreateExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CloseKafkaConsumer", async function () {
    try {
       const data = await client.CloseKafkaConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeAlarms", async function () {
    try {
       const data = await client.DescribeAlarms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
