
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.youmall.v20180228.Client({
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
describe("youmall.v20180228.test.js", function () {

it("youmall.v20180228.DescribeCameraPerson", async function () {
    try {
       const data = await client.DescribeCameraPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribePersonInfo", async function () {
    try {
       const data = await client.DescribePersonInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeZoneTrafficInfo", async function () {
    try {
       const data = await client.DescribeZoneTrafficInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeZoneFlowAgeInfoByZoneId", async function () {
    try {
       const data = await client.DescribeZoneFlowAgeInfoByZoneId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.RegisterCallback", async function () {
    try {
       const data = await client.RegisterCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeZoneFlowGenderAvrStayTimeByZoneId", async function () {
    try {
       const data = await client.DescribeZoneFlowGenderAvrStayTimeByZoneId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeZoneFlowAndStayTime", async function () {
    try {
       const data = await client.DescribeZoneFlowAndStayTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribePersonVisitInfo", async function () {
    try {
       const data = await client.DescribePersonVisitInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeZoneFlowHourlyByZoneId", async function () {
    try {
       const data = await client.DescribeZoneFlowHourlyByZoneId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeShopInfo", async function () {
    try {
       const data = await client.DescribeShopInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeFaceIdByTempId", async function () {
    try {
       const data = await client.DescribeFaceIdByTempId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeZoneFlowGenderInfoByZoneId", async function () {
    try {
       const data = await client.DescribeZoneFlowGenderInfoByZoneId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeShopTrafficInfo", async function () {
    try {
       const data = await client.DescribeShopTrafficInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribePersonInfoByFacePicture", async function () {
    try {
       const data = await client.DescribePersonInfoByFacePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.CreateFacePicture", async function () {
    try {
       const data = await client.CreateFacePicture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.CreateAccount", async function () {
    try {
       const data = await client.CreateAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeShopHourTrafficInfo", async function () {
    try {
       const data = await client.DescribeShopHourTrafficInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribePersonTrace", async function () {
    try {
       const data = await client.DescribePersonTrace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeZoneFlowDailyByZoneId", async function () {
    try {
       const data = await client.DescribeZoneFlowDailyByZoneId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribePersonArrivedMall", async function () {
    try {
       const data = await client.DescribePersonArrivedMall({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeClusterPersonArrivedMall", async function () {
    try {
       const data = await client.DescribeClusterPersonArrivedMall({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribePersonTraceDetail", async function () {
    try {
       const data = await client.DescribePersonTraceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.ModifyPersonType", async function () {
    try {
       const data = await client.ModifyPersonType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.ModifyPersonFeatureInfo", async function () {
    try {
       const data = await client.ModifyPersonFeatureInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeHistoryNetworkInfo", async function () {
    try {
       const data = await client.DescribeHistoryNetworkInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeNetworkInfo", async function () {
    try {
       const data = await client.DescribeNetworkInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DeletePersonFeature", async function () {
    try {
       const data = await client.DeletePersonFeature({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.ModifyPersonTagInfo", async function () {
    try {
       const data = await client.ModifyPersonTagInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribePerson", async function () {
    try {
       const data = await client.DescribePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeClusterPersonTrace", async function () {
    try {
       const data = await client.DescribeClusterPersonTrace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("youmall.v20180228.DescribeTrajectoryData", async function () {
    try {
       const data = await client.DescribeTrajectoryData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
