
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.billing.v20180709.Client({
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
describe("billing.v20180709.test.js", function () {

it("billing.v20180709.DescribeAccountBalance", async function () {
    try {
       const data = await client.DescribeAccountBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeVoucherInfo", async function () {
    try {
       const data = await client.DescribeVoucherInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeDosageDetailByDate", async function () {
    try {
       const data = await client.DescribeDosageDetailByDate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeCostSummaryByResource", async function () {
    try {
       const data = await client.DescribeCostSummaryByResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeVoucherUsageDetails", async function () {
    try {
       const data = await client.DescribeVoucherUsageDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillList", async function () {
    try {
       const data = await client.DescribeBillList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillDetail", async function () {
    try {
       const data = await client.DescribeBillDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeDealsByCond", async function () {
    try {
       const data = await client.DescribeDealsByCond({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeCostSummaryByProject", async function () {
    try {
       const data = await client.DescribeCostSummaryByProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillSummaryByPayMode", async function () {
    try {
       const data = await client.DescribeBillSummaryByPayMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillResourceSummary", async function () {
    try {
       const data = await client.DescribeBillResourceSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeCostSummaryByRegion", async function () {
    try {
       const data = await client.DescribeCostSummaryByRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillSummaryByRegion", async function () {
    try {
       const data = await client.DescribeBillSummaryByRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillSummaryByProject", async function () {
    try {
       const data = await client.DescribeBillSummaryByProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillSummaryByProduct", async function () {
    try {
       const data = await client.DescribeBillSummaryByProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillSummaryByTag", async function () {
    try {
       const data = await client.DescribeBillSummaryByTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeCostSummaryByProduct", async function () {
    try {
       const data = await client.DescribeCostSummaryByProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeCostDetail", async function () {
    try {
       const data = await client.DescribeCostDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeDosageCosDetailByDate", async function () {
    try {
       const data = await client.DescribeDosageCosDetailByDate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.PayDeals", async function () {
    try {
       const data = await client.PayDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
