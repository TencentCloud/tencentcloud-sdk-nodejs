
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tione.v20211111.Client({
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
describe("tione.v20211111.test.js", function () {

it("tione.v20211111.DescribeTrainingModelVersion", async function () {
    try {
       const data = await client.DescribeTrainingModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteBatchTask", async function () {
    try {
       const data = await client.DeleteBatchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBillingSpecs", async function () {
    try {
       const data = await client.DescribeBillingSpecs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateTrainingModel", async function () {
    try {
       const data = await client.CreateTrainingModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBillingSpecsPrice", async function () {
    try {
       const data = await client.DescribeBillingSpecsPrice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelServiceCallInfo", async function () {
    try {
       const data = await client.DescribeModelServiceCallInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.ModifyModelServicePartialConfig", async function () {
    try {
       const data = await client.ModifyModelServicePartialConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateOptimizedModel", async function () {
    try {
       const data = await client.CreateOptimizedModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeTrainingTasks", async function () {
    try {
       const data = await client.DescribeTrainingTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelServiceGroup", async function () {
    try {
       const data = await client.DescribeModelServiceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelService", async function () {
    try {
       const data = await client.DescribeModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeTrainingFrameworks", async function () {
    try {
       const data = await client.DescribeTrainingFrameworks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteDataset", async function () {
    try {
       const data = await client.DeleteDataset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateTrainingTask", async function () {
    try {
       const data = await client.CreateTrainingTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.StopBatchTask", async function () {
    try {
       const data = await client.StopBatchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeDatasetDetailUnstructured", async function () {
    try {
       const data = await client.DescribeDatasetDetailUnstructured({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeTrainingModels", async function () {
    try {
       const data = await client.DescribeTrainingModels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeTrainingTaskPods", async function () {
    try {
       const data = await client.DescribeTrainingTaskPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelServiceHotUpdated", async function () {
    try {
       const data = await client.DescribeModelServiceHotUpdated({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelAccelerateTask", async function () {
    try {
       const data = await client.DescribeModelAccelerateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeTrainingMetrics", async function () {
    try {
       const data = await client.DescribeTrainingMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteTrainingModel", async function () {
    try {
       const data = await client.DeleteTrainingModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.ModifyServiceGroupWeights", async function () {
    try {
       const data = await client.ModifyServiceGroupWeights({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateDataset", async function () {
    try {
       const data = await client.CreateDataset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBatchTaskInstances", async function () {
    try {
       const data = await client.DescribeBatchTaskInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelAccEngineVersions", async function () {
    try {
       const data = await client.DescribeModelAccEngineVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.StopTrainingTask", async function () {
    try {
       const data = await client.StopTrainingTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.StartTrainingTask", async function () {
    try {
       const data = await client.StartTrainingTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteModelAccelerateTask", async function () {
    try {
       const data = await client.DeleteModelAccelerateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeAPIConfigs", async function () {
    try {
       const data = await client.DescribeAPIConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteModelServiceGroup", async function () {
    try {
       const data = await client.DeleteModelServiceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.PushTrainingMetrics", async function () {
    try {
       const data = await client.PushTrainingMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBatchTasks", async function () {
    try {
       const data = await client.DescribeBatchTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeTrainingModelVersions", async function () {
    try {
       const data = await client.DescribeTrainingModelVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelAccelerateTasks", async function () {
    try {
       const data = await client.DescribeModelAccelerateTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateModelService", async function () {
    try {
       const data = await client.CreateModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeDatasets", async function () {
    try {
       const data = await client.DescribeDatasets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeLogs", async function () {
    try {
       const data = await client.DescribeLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteModelService", async function () {
    try {
       const data = await client.DeleteModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeDatasetDetailStructured", async function () {
    try {
       const data = await client.DescribeDatasetDetailStructured({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.RestartModelAccelerateTask", async function () {
    try {
       const data = await client.RestartModelAccelerateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelServices", async function () {
    try {
       const data = await client.DescribeModelServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.ModifyModelService", async function () {
    try {
       const data = await client.ModifyModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeTrainingTask", async function () {
    try {
       const data = await client.DescribeTrainingTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateBatchTask", async function () {
    try {
       const data = await client.CreateBatchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteTrainingTask", async function () {
    try {
       const data = await client.DeleteTrainingTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateBatchModelAccTasks", async function () {
    try {
       const data = await client.CreateBatchModelAccTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBatchTask", async function () {
    try {
       const data = await client.DescribeBatchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeLatestTrainingMetrics", async function () {
    try {
       const data = await client.DescribeLatestTrainingMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelServiceHistory", async function () {
    try {
       const data = await client.DescribeModelServiceHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteTrainingModelVersion", async function () {
    try {
       const data = await client.DeleteTrainingModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBillingResourceGroups", async function () {
    try {
       const data = await client.DescribeBillingResourceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeInferTemplates", async function () {
    try {
       const data = await client.DescribeInferTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeModelServiceGroups", async function () {
    try {
       const data = await client.DescribeModelServiceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.StopModelAccelerateTask", async function () {
    try {
       const data = await client.StopModelAccelerateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
