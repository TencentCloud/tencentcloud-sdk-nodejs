
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

it("tione.v20211111.DeleteDataset", async function () {
    try {
       const data = await client.DeleteDataset({})
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

it("tione.v20211111.DescribeTrainingTasks", async function () {
    try {
       const data = await client.DescribeTrainingTasks({})
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

it("tione.v20211111.CreateTrainingModel", async function () {
    try {
       const data = await client.CreateTrainingModel({})
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

it("tione.v20211111.StartTrainingTask", async function () {
    try {
       const data = await client.StartTrainingTask({})
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

it("tione.v20211111.DescribeDatasetDetailStructured", async function () {
    try {
       const data = await client.DescribeDatasetDetailStructured({})
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

it("tione.v20211111.DescribeDatasets", async function () {
    try {
       const data = await client.DescribeDatasets({})
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

it("tione.v20211111.DeleteTrainingTask", async function () {
    try {
       const data = await client.DeleteTrainingTask({})
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

})
