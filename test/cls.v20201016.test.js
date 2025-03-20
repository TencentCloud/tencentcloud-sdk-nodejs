
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

it("cls.v20201016.ModifyKafkaConsumer", async function () {
    try {
       const data = await client.ModifyKafkaConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateKafkaRecharge", async function () {
    try {
       const data = await client.CreateKafkaRecharge({})
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

it("cls.v20201016.GetAlarmLog", async function () {
    try {
       const data = await client.GetAlarmLog({})
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

it("cls.v20201016.QueryMetric", async function () {
    try {
       const data = await client.QueryMetric({})
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

it("cls.v20201016.CreateWebCallback", async function () {
    try {
       const data = await client.CreateWebCallback({})
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

it("cls.v20201016.CreateDeliverCloudFunction", async function () {
    try {
       const data = await client.CreateDeliverCloudFunction({})
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

it("cls.v20201016.CreateLogset", async function () {
    try {
       const data = await client.CreateLogset({})
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

it("cls.v20201016.DeleteAlarmNotice", async function () {
    try {
       const data = await client.DeleteAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeAlertRecordHistory", async function () {
    try {
       const data = await client.DescribeAlertRecordHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteKafkaRecharge", async function () {
    try {
       const data = await client.DeleteKafkaRecharge({})
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

it("cls.v20201016.DescribeTopics", async function () {
    try {
       const data = await client.DescribeTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateCosRecharge", async function () {
    try {
       const data = await client.CreateCosRecharge({})
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

it("cls.v20201016.DeleteScheduledSql", async function () {
    try {
       const data = await client.DeleteScheduledSql({})
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

it("cls.v20201016.ModifyIndex", async function () {
    try {
       const data = await client.ModifyIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyKafkaRecharge", async function () {
    try {
       const data = await client.ModifyKafkaRecharge({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateAlarmShield", async function () {
    try {
       const data = await client.CreateAlarmShield({})
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

it("cls.v20201016.CreateNoticeContent", async function () {
    try {
       const data = await client.CreateNoticeContent({})
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

it("cls.v20201016.DeleteMachineGroup", async function () {
    try {
       const data = await client.DeleteMachineGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeKafkaRecharges", async function () {
    try {
       const data = await client.DescribeKafkaRecharges({})
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

it("cls.v20201016.DescribeCosRecharges", async function () {
    try {
       const data = await client.DescribeCosRecharges({})
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

it("cls.v20201016.DeleteAlarmShield", async function () {
    try {
       const data = await client.DeleteAlarmShield({})
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

it("cls.v20201016.DescribeShipperTasks", async function () {
    try {
       const data = await client.DescribeShipperTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyDashboardSubscribe", async function () {
    try {
       const data = await client.ModifyDashboardSubscribe({})
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

it("cls.v20201016.DescribeKafkaConsumer", async function () {
    try {
       const data = await client.DescribeKafkaConsumer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.PreviewKafkaRecharge", async function () {
    try {
       const data = await client.PreviewKafkaRecharge({})
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

it("cls.v20201016.ModifyAlarmShield", async function () {
    try {
       const data = await client.ModifyAlarmShield({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.SearchDashboardSubscribe", async function () {
    try {
       const data = await client.SearchDashboardSubscribe({})
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

it("cls.v20201016.DescribeAlarmShields", async function () {
    try {
       const data = await client.DescribeAlarmShields({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyScheduledSql", async function () {
    try {
       const data = await client.ModifyScheduledSql({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateMachineGroup", async function () {
    try {
       const data = await client.CreateMachineGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteMachineGroupInfo", async function () {
    try {
       const data = await client.DeleteMachineGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeConsoleSharingList", async function () {
    try {
       const data = await client.DescribeConsoleSharingList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateConsoleSharing", async function () {
    try {
       const data = await client.CreateConsoleSharing({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.CreateScheduledSql", async function () {
    try {
       const data = await client.CreateScheduledSql({})
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

it("cls.v20201016.CreateDashboardSubscribe", async function () {
    try {
       const data = await client.CreateDashboardSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyNoticeContent", async function () {
    try {
       const data = await client.ModifyNoticeContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.SearchCosRechargeInfo", async function () {
    try {
       const data = await client.SearchCosRechargeInfo({})
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

it("cls.v20201016.CreateAlarmNotice", async function () {
    try {
       const data = await client.CreateAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteDashboardSubscribe", async function () {
    try {
       const data = await client.DeleteDashboardSubscribe({})
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

it("cls.v20201016.AddMachineGroupInfo", async function () {
    try {
       const data = await client.AddMachineGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteNoticeContent", async function () {
    try {
       const data = await client.DeleteNoticeContent({})
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

it("cls.v20201016.DescribePartitions", async function () {
    try {
       const data = await client.DescribePartitions({})
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

it("cls.v20201016.CheckFunction", async function () {
    try {
       const data = await client.CheckFunction({})
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

it("cls.v20201016.DeleteShipper", async function () {
    try {
       const data = await client.DeleteShipper({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteWebCallback", async function () {
    try {
       const data = await client.DeleteWebCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.QueryRangeMetric", async function () {
    try {
       const data = await client.QueryRangeMetric({})
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

it("cls.v20201016.SplitPartition", async function () {
    try {
       const data = await client.SplitPartition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DeleteConsoleSharing", async function () {
    try {
       const data = await client.DeleteConsoleSharing({})
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

it("cls.v20201016.DescribeDashboardSubscribes", async function () {
    try {
       const data = await client.DescribeDashboardSubscribes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyWebCallback", async function () {
    try {
       const data = await client.ModifyWebCallback({})
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

it("cls.v20201016.DescribeScheduledSqlInfo", async function () {
    try {
       const data = await client.DescribeScheduledSqlInfo({})
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

it("cls.v20201016.CheckRechargeKafkaServer", async function () {
    try {
       const data = await client.CheckRechargeKafkaServer({})
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

it("cls.v20201016.DescribeShippers", async function () {
    try {
       const data = await client.DescribeShippers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyConsoleSharing", async function () {
    try {
       const data = await client.ModifyConsoleSharing({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.DescribeDashboards", async function () {
    try {
       const data = await client.DescribeDashboards({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cls.v20201016.ModifyCosRecharge", async function () {
    try {
       const data = await client.ModifyCosRecharge({})
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

it("cls.v20201016.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
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

it("cls.v20201016.ModifyConsumer", async function () {
    try {
       const data = await client.ModifyConsumer({})
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

it("cls.v20201016.DescribeNoticeContents", async function () {
    try {
       const data = await client.DescribeNoticeContents({})
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

it("cls.v20201016.RetryShipperTask", async function () {
    try {
       const data = await client.RetryShipperTask({})
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

it("cls.v20201016.DescribeWebCallbacks", async function () {
    try {
       const data = await client.DescribeWebCallbacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
