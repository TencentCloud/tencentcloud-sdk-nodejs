
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ssa.v20180608.Client({
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
describe("ssa.v20180608.test.js", function () {

it("ssa.v20180608.DescribeComplianceList", async function () {
    try {
       const data = await client.DescribeComplianceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeConfigList", async function () {
    try {
       const data = await client.DescribeConfigList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeAssetList", async function () {
    try {
       const data = await client.DescribeAssetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeEventDetail", async function () {
    try {
       const data = await client.DescribeEventDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.SaDivulgeDataQueryPub", async function () {
    try {
       const data = await client.SaDivulgeDataQueryPub({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeComplianceAssetList", async function () {
    try {
       const data = await client.DescribeComplianceAssetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeCheckConfigAssetList", async function () {
    try {
       const data = await client.DescribeCheckConfigAssetList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeLeakDetectionList", async function () {
    try {
       const data = await client.DescribeLeakDetectionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeAssetsMappingList", async function () {
    try {
       const data = await client.DescribeAssetsMappingList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeSocCspmCompliance", async function () {
    try {
       const data = await client.DescribeSocCspmCompliance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeMappingResults", async function () {
    try {
       const data = await client.DescribeMappingResults({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeSocCheckItemList", async function () {
    try {
       const data = await client.DescribeSocCheckItemList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeVulList", async function () {
    try {
       const data = await client.DescribeVulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeAssetDetail", async function () {
    try {
       const data = await client.DescribeAssetDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeCheckConfigDetail", async function () {
    try {
       const data = await client.DescribeCheckConfigDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeComplianceDetail", async function () {
    try {
       const data = await client.DescribeComplianceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeSafetyEventList", async function () {
    try {
       const data = await client.DescribeSafetyEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeSocAlertDetails", async function () {
    try {
       const data = await client.DescribeSocAlertDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeSocAlertList", async function () {
    try {
       const data = await client.DescribeSocAlertList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeVulDetail", async function () {
    try {
       const data = await client.DescribeVulDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssa.v20180608.DescribeSocCheckResultList", async function () {
    try {
       const data = await client.DescribeSocCheckResultList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
