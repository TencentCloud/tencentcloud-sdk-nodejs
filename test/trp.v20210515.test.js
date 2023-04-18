
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.trp.v20210515.Client({
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
describe("trp.v20210515.test.js", function () {

it("trp.v20210515.DescribeTraceCodeById", async function () {
    try {
       const data = await client.DescribeTraceCodeById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCustomRules", async function () {
    try {
       const data = await client.DescribeCustomRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyTraceCodeUnlink", async function () {
    try {
       const data = await client.ModifyTraceCodeUnlink({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.AuthorizedTransfer", async function () {
    try {
       const data = await client.AuthorizedTransfer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCustomRuleById", async function () {
    try {
       const data = await client.DescribeCustomRuleById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateTraceCodesAsync", async function () {
    try {
       const data = await client.CreateTraceCodesAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCodeBatchById", async function () {
    try {
       const data = await client.DescribeCodeBatchById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeTraceCodes", async function () {
    try {
       const data = await client.DescribeTraceCodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyTraceDataRanks", async function () {
    try {
       const data = await client.ModifyTraceDataRanks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCodesByPack", async function () {
    try {
       const data = await client.DescribeCodesByPack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeMerchantById", async function () {
    try {
       const data = await client.DescribeMerchantById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateProduct", async function () {
    try {
       const data = await client.CreateProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeProducts", async function () {
    try {
       const data = await client.DescribeProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCorpQuotas", async function () {
    try {
       const data = await client.DescribeCorpQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ReportBatchCallbackStatus", async function () {
    try {
       const data = await client.ReportBatchCallbackStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyCustomRule", async function () {
    try {
       const data = await client.ModifyCustomRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyTraceData", async function () {
    try {
       const data = await client.ModifyTraceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyProduct", async function () {
    try {
       const data = await client.ModifyProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyCustomRuleStatus", async function () {
    try {
       const data = await client.ModifyCustomRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeProductById", async function () {
    try {
       const data = await client.DescribeProductById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeTmpToken", async function () {
    try {
       const data = await client.DescribeTmpToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateTraceCodes", async function () {
    try {
       const data = await client.CreateTraceCodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateTraceChain", async function () {
    try {
       const data = await client.CreateTraceChain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateCustomPack", async function () {
    try {
       const data = await client.CreateCustomPack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeTraceDataById", async function () {
    try {
       const data = await client.DescribeTraceDataById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateCorporationOrder", async function () {
    try {
       const data = await client.CreateCorporationOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DeleteMerchant", async function () {
    try {
       const data = await client.DeleteMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeScanStats", async function () {
    try {
       const data = await client.DescribeScanStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCodePackStatus", async function () {
    try {
       const data = await client.DescribeCodePackStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCodeBatchs", async function () {
    try {
       const data = await client.DescribeCodeBatchs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateCustomRule", async function () {
    try {
       const data = await client.CreateCustomRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCodePackUrl", async function () {
    try {
       const data = await client.DescribeCodePackUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyMerchant", async function () {
    try {
       const data = await client.ModifyMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateCodeBatch", async function () {
    try {
       const data = await client.CreateCodeBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.EffectFeedback", async function () {
    try {
       const data = await client.EffectFeedback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DeleteCodeBatch", async function () {
    try {
       const data = await client.DeleteCodeBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DeleteTraceData", async function () {
    try {
       const data = await client.DeleteTraceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateTraceData", async function () {
    try {
       const data = await client.CreateTraceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateCodePack", async function () {
    try {
       const data = await client.CreateCodePack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeTraceDataList", async function () {
    try {
       const data = await client.DescribeTraceDataList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyTraceCode", async function () {
    try {
       const data = await client.ModifyTraceCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeCodePacks", async function () {
    try {
       const data = await client.DescribeCodePacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeScanLogs", async function () {
    try {
       const data = await client.DescribeScanLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.ModifyCodeBatch", async function () {
    try {
       const data = await client.ModifyCodeBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeMerchants", async function () {
    try {
       const data = await client.DescribeMerchants({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.CreateMerchant", async function () {
    try {
       const data = await client.CreateMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trp.v20210515.DescribeJobFileUrl", async function () {
    try {
       const data = await client.DescribeJobFileUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
