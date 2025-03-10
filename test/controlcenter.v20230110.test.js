
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.controlcenter.v20230110.Client({
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
describe("controlcenter.v20230110.test.js", function () {

it("controlcenter.v20230110.ListDeployStepTasks", async function () {
    try {
       const data = await client.ListDeployStepTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("controlcenter.v20230110.GetAccountFactoryBaseline", async function () {
    try {
       const data = await client.GetAccountFactoryBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("controlcenter.v20230110.UpdateAccountFactoryBaseline", async function () {
    try {
       const data = await client.UpdateAccountFactoryBaseline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("controlcenter.v20230110.BatchApplyAccountBaselines", async function () {
    try {
       const data = await client.BatchApplyAccountBaselines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("controlcenter.v20230110.ListAccountFactoryBaselineItems", async function () {
    try {
       const data = await client.ListAccountFactoryBaselineItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
