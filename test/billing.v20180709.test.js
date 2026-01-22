
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

it("billing.v20180709.DescribeBillDetailForOrganization", async function () {
    try {
       const data = await client.DescribeBillDetailForOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DeleteGatherRule", async function () {
    try {
       const data = await client.DeleteGatherRule({})
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

it("billing.v20180709.DescribeBillList", async function () {
    try {
       const data = await client.DescribeBillList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationSummaryByResource", async function () {
    try {
       const data = await client.DescribeAllocationSummaryByResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationRuleSummary", async function () {
    try {
       const data = await client.DescribeAllocationRuleSummary({})
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

it("billing.v20180709.DeleteAllocationUnit", async function () {
    try {
       const data = await client.DeleteAllocationUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocateConditions", async function () {
    try {
       const data = await client.DescribeAllocateConditions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.CreateBudget", async function () {
    try {
       const data = await client.CreateBudget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBudgetRemindRecordList", async function () {
    try {
       const data = await client.DescribeBudgetRemindRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationOverview", async function () {
    try {
       const data = await client.DescribeAllocationOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeDosageDetailList", async function () {
    try {
       const data = await client.DescribeDosageDetailList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.CreateAllocationUnit", async function () {
    try {
       const data = await client.CreateAllocationUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.CreateAllocationTag", async function () {
    try {
       const data = await client.CreateAllocationTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DeleteBudget", async function () {
    try {
       const data = await client.DeleteBudget({})
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

it("billing.v20180709.DescribeCostSummaryByProject", async function () {
    try {
       const data = await client.DescribeCostSummaryByProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeCostExplorerSummary", async function () {
    try {
       const data = await client.DescribeCostExplorerSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillResourceSummaryForOrganization", async function () {
    try {
       const data = await client.DescribeBillResourceSummaryForOrganization({})
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

it("billing.v20180709.DescribeBillSummary", async function () {
    try {
       const data = await client.DescribeBillSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DeleteAllocationRule", async function () {
    try {
       const data = await client.DeleteAllocationRule({})
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

it("billing.v20180709.DescribeAllocationRuleDetail", async function () {
    try {
       const data = await client.DescribeAllocationRuleDetail({})
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

it("billing.v20180709.DescribeVoucherUsageDetails", async function () {
    try {
       const data = await client.DescribeVoucherUsageDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.ModifyGatherRule", async function () {
    try {
       const data = await client.ModifyGatherRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.ModifyAllocationUnit", async function () {
    try {
       const data = await client.ModifyAllocationUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationTrendByMonth", async function () {
    try {
       const data = await client.DescribeAllocationTrendByMonth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillDownloadUrl", async function () {
    try {
       const data = await client.DescribeBillDownloadUrl({})
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

it("billing.v20180709.CreateGatherRule", async function () {
    try {
       const data = await client.CreateGatherRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationBillConditions", async function () {
    try {
       const data = await client.DescribeAllocationBillConditions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.ModifyBudget", async function () {
    try {
       const data = await client.ModifyBudget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAccountBalance", async function () {
    try {
       const data = await client.DescribeAccountBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationTree", async function () {
    try {
       const data = await client.DescribeAllocationTree({})
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

it("billing.v20180709.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationUnitDetail", async function () {
    try {
       const data = await client.DescribeAllocationUnitDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeTagList", async function () {
    try {
       const data = await client.DescribeTagList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBillAdjustInfo", async function () {
    try {
       const data = await client.DescribeBillAdjustInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationBillDetail", async function () {
    try {
       const data = await client.DescribeAllocationBillDetail({})
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

it("billing.v20180709.DescribeAllocationMonthOverview", async function () {
    try {
       const data = await client.DescribeAllocationMonthOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.CreateAllocationRule", async function () {
    try {
       const data = await client.CreateAllocationRule({})
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

it("billing.v20180709.DescribeBillSummaryForOrganization", async function () {
    try {
       const data = await client.DescribeBillSummaryForOrganization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeGatherResource", async function () {
    try {
       const data = await client.DescribeGatherResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeSavingPlanResourceInfo", async function () {
    try {
       const data = await client.DescribeSavingPlanResourceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeBudget", async function () {
    try {
       const data = await client.DescribeBudget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.RenewInstance", async function () {
    try {
       const data = await client.RenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeCostSummaryByTag", async function () {
    try {
       const data = await client.DescribeCostSummaryByTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DescribeAllocationSummaryByBusiness", async function () {
    try {
       const data = await client.DescribeAllocationSummaryByBusiness({})
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

it("billing.v20180709.DescribeBudgetOperationLog", async function () {
    try {
       const data = await client.DescribeBudgetOperationLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.DeleteAllocationTag", async function () {
    try {
       const data = await client.DeleteAllocationTag({})
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

it("billing.v20180709.DescribeGatherRuleDetail", async function () {
    try {
       const data = await client.DescribeGatherRuleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("billing.v20180709.RefundInstance", async function () {
    try {
       const data = await client.RefundInstance({})
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

it("billing.v20180709.DescribeAllocationSummaryByItem", async function () {
    try {
       const data = await client.DescribeAllocationSummaryByItem({})
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

it("billing.v20180709.ModifyAllocationRule", async function () {
    try {
       const data = await client.ModifyAllocationRule({})
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

})
