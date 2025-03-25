
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.chc.v20230418.Client({
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
describe("chc.v20230418.test.js", function () {

it("chc.v20230418.CreateQuitWorkOrder", async function () {
    try {
       const data = await client.CreateQuitWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeWorkOrderTypes", async function () {
    try {
       const data = await client.DescribeWorkOrderTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeModel", async function () {
    try {
       const data = await client.DescribeModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeRacks", async function () {
    try {
       const data = await client.DescribeRacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateModelEvaluationWorkOrder", async function () {
    try {
       const data = await client.CreateModelEvaluationWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateServerModel", async function () {
    try {
       const data = await client.CreateServerModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateRackOffWorkOrder", async function () {
    try {
       const data = await client.CreateRackOffWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeModelVersionList", async function () {
    try {
       const data = await client.DescribeModelVersionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeCommonServiceWorkOrderDetail", async function () {
    try {
       const data = await client.DescribeCommonServiceWorkOrderDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.ModifyWorkOrderTypeCollectFlag", async function () {
    try {
       const data = await client.ModifyWorkOrderTypeCollectFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeModelEvaluationWorkOrderDetail", async function () {
    try {
       const data = await client.DescribeModelEvaluationWorkOrderDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeCustomerInfo", async function () {
    try {
       const data = await client.DescribeCustomerInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeCampusList", async function () {
    try {
       const data = await client.DescribeCampusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeRacksDistribution", async function () {
    try {
       const data = await client.DescribeRacksDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribePositions", async function () {
    try {
       const data = await client.DescribePositions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateCommonServiceWorkOrder", async function () {
    try {
       const data = await client.CreateCommonServiceWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeDeviceWorkOrderDetail", async function () {
    try {
       const data = await client.DescribeDeviceWorkOrderDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeAvailableModelList", async function () {
    try {
       const data = await client.DescribeAvailableModelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeDeviceList", async function () {
    try {
       const data = await client.DescribeDeviceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreatePowerOnWorkOrder", async function () {
    try {
       const data = await client.CreatePowerOnWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribePositionStatusSummary", async function () {
    try {
       const data = await client.DescribePositionStatusSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeIdcUnitAssetDetail", async function () {
    try {
       const data = await client.DescribeIdcUnitAssetDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreatePowerOffWorkOrder", async function () {
    try {
       const data = await client.CreatePowerOffWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreatePersonnelVisitWorkOrder", async function () {
    try {
       const data = await client.CreatePersonnelVisitWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribePersonnelVisitWorkOrderDetail", async function () {
    try {
       const data = await client.DescribePersonnelVisitWorkOrderDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeIdcUnitDetail", async function () {
    try {
       const data = await client.DescribeIdcUnitDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.ConfirmCommonServiceWorkOrder", async function () {
    try {
       const data = await client.ConfirmCommonServiceWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateMovingWorkOrder", async function () {
    try {
       const data = await client.CreateMovingWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateNetDeviceModel", async function () {
    try {
       const data = await client.CreateNetDeviceModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeWorkOrderStatistics", async function () {
    try {
       const data = await client.DescribeWorkOrderStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeResourceUsage", async function () {
    try {
       const data = await client.DescribeResourceUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateRackOnWorkOrder", async function () {
    try {
       const data = await client.CreateRackOnWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeIdcs", async function () {
    try {
       const data = await client.DescribeIdcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.CreateReceivingWorkOrder", async function () {
    try {
       const data = await client.CreateReceivingWorkOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeModelTemplate", async function () {
    try {
       const data = await client.DescribeModelTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chc.v20230418.DescribeWorkOrderList", async function () {
    try {
       const data = await client.DescribeWorkOrderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
