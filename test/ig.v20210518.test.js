
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ig.v20210518.Client({
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
describe("ig.v20210518.test.js", function () {

it("ig.v20210518.QueryDrugInstructions", async function () {
    try {
       const data = await client.QueryDrugInstructions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ig.v20210518.GetLLMReportInterpretation", async function () {
    try {
       const data = await client.GetLLMReportInterpretation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ig.v20210518.GetLLMDiagnosisDrug", async function () {
    try {
       const data = await client.GetLLMDiagnosisDrug({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ig.v20210518.DescribeIgOrderList", async function () {
    try {
       const data = await client.DescribeIgOrderList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ig.v20210518.GetLLMDiagnosisDrugChat", async function () {
    try {
       const data = await client.GetLLMDiagnosisDrugChat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ig.v20210518.GetLLMDiagnosisHealth", async function () {
    try {
       const data = await client.GetLLMDiagnosisHealth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
