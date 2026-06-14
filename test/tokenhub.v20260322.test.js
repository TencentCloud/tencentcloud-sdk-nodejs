
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tokenhub.v20260322.Client({
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
describe("tokenhub.v20260322.test.js", function () {

it("tokenhub.v20260322.RenewTokenPlanTeamOrder", async function () {
    try {
       const data = await client.RenewTokenPlanTeamOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.CreateTokenPlanTeamOrderAndBuy", async function () {
    try {
       const data = await client.CreateTokenPlanTeamOrderAndBuy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeApiKeyList", async function () {
    try {
       const data = await client.DescribeApiKeyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeModelList", async function () {
    try {
       const data = await client.DescribeModelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeTokenPlanApiKey", async function () {
    try {
       const data = await client.DescribeTokenPlanApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.CreateTokenPlanApiKeys", async function () {
    try {
       const data = await client.CreateTokenPlanApiKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeTokenPlanApiKeyList", async function () {
    try {
       const data = await client.DescribeTokenPlanApiKeyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.CreateGlossaryEntries", async function () {
    try {
       const data = await client.CreateGlossaryEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeTokenPlanApiKeyUsageDetail", async function () {
    try {
       const data = await client.DescribeTokenPlanApiKeyUsageDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeGlossaries", async function () {
    try {
       const data = await client.DescribeGlossaries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeGlossaryEntries", async function () {
    try {
       const data = await client.DescribeGlossaryEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeUsageRankList", async function () {
    try {
       const data = await client.DescribeUsageRankList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DeleteGlossaryEntries", async function () {
    try {
       const data = await client.DeleteGlossaryEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.UpgradeTokenPlanTeamOrder", async function () {
    try {
       const data = await client.UpgradeTokenPlanTeamOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.CreateGlossary", async function () {
    try {
       const data = await client.CreateGlossary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DeleteGlossary", async function () {
    try {
       const data = await client.DeleteGlossary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.ModifyTokenPlanApiKeySecret", async function () {
    try {
       const data = await client.ModifyTokenPlanApiKeySecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeTokenPlan", async function () {
    try {
       const data = await client.DescribeTokenPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.ModifyGlossaryEntries", async function () {
    try {
       const data = await client.ModifyGlossaryEntries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeTokenPlanList", async function () {
    try {
       const data = await client.DescribeTokenPlanList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeApiKey", async function () {
    try {
       const data = await client.DescribeApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DeleteTokenPlanApiKey", async function () {
    try {
       const data = await client.DeleteTokenPlanApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.ModifyTokenPlanApiKey", async function () {
    try {
       const data = await client.ModifyTokenPlanApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tokenhub.v20260322.DescribeTokenPlanApiKeySecret", async function () {
    try {
       const data = await client.DescribeTokenPlanApiKeySecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
