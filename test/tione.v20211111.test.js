
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

it("tione.v20211111.DescribeModelService", async function () {
    try {
       const data = await client.DescribeModelService({})
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

it("tione.v20211111.DescribeSubAccountLinuxUserInfos", async function () {
    try {
       const data = await client.DescribeSubAccountLinuxUserInfos({})
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

it("tione.v20211111.DescribeEvents", async function () {
    try {
       const data = await client.DescribeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBuildInImages", async function () {
    try {
       const data = await client.DescribeBuildInImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.StartNotebook", async function () {
    try {
       const data = await client.StartNotebook({})
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

it("tione.v20211111.ModifyModelServiceAuthorization", async function () {
    try {
       const data = await client.ModifyModelServiceAuthorization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.ModifyNotebook", async function () {
    try {
       const data = await client.ModifyNotebook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteNotebook", async function () {
    try {
       const data = await client.DeleteNotebook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DeleteModelServiceAuthToken", async function () {
    try {
       const data = await client.DeleteModelServiceAuthToken({})
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

it("tione.v20211111.ChatCompletion", async function () {
    try {
       const data = await client.ChatCompletion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.ModifyNotebookTags", async function () {
    try {
       const data = await client.ModifyNotebookTags({})
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

it("tione.v20211111.CreateDataset", async function () {
    try {
       const data = await client.CreateDataset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateNotebook", async function () {
    try {
       const data = await client.CreateNotebook({})
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

it("tione.v20211111.DescribeModelServiceGroup", async function () {
    try {
       const data = await client.DescribeModelServiceGroup({})
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

it("tione.v20211111.StopTrainingTask", async function () {
    try {
       const data = await client.StopTrainingTask({})
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

it("tione.v20211111.ModifyModelServiceAuthToken", async function () {
    try {
       const data = await client.ModifyModelServiceAuthToken({})
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

it("tione.v20211111.UpdateSubAccountLinuxUserInfo", async function () {
    try {
       const data = await client.UpdateSubAccountLinuxUserInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreatePresignedNotebookUrl", async function () {
    try {
       const data = await client.CreatePresignedNotebookUrl({})
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

it("tione.v20211111.DescribeDatasets", async function () {
    try {
       const data = await client.DescribeDatasets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateModelServiceAuthToken", async function () {
    try {
       const data = await client.CreateModelServiceAuthToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBillingResourceInstanceRunningJobs", async function () {
    try {
       const data = await client.DescribeBillingResourceInstanceRunningJobs({})
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

it("tione.v20211111.ModifyModelService", async function () {
    try {
       const data = await client.ModifyModelService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeNotebooks", async function () {
    try {
       const data = await client.DescribeNotebooks({})
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

it("tione.v20211111.DescribeModelAccelerateVersions", async function () {
    try {
       const data = await client.DescribeModelAccelerateVersions({})
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

it("tione.v20211111.DescribePlatformImages", async function () {
    try {
       const data = await client.DescribePlatformImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeBillingResourceGroup", async function () {
    try {
       const data = await client.DescribeBillingResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeExport", async function () {
    try {
       const data = await client.DescribeExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.DescribeNotebook", async function () {
    try {
       const data = await client.DescribeNotebook({})
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

it("tione.v20211111.DeleteExport", async function () {
    try {
       const data = await client.DeleteExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.CreateExport", async function () {
    try {
       const data = await client.CreateExport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20211111.StopNotebook", async function () {
    try {
       const data = await client.StopNotebook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
