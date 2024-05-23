
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.svp.v20240125.Client({
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
describe("svp.v20240125.test.js", function () {

it("svp.v20240125.DescribeSavingPlanUsage", async function () {
    try {
       const data = await client.DescribeSavingPlanUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("svp.v20240125.DescribeSavingPlanOverview", async function () {
    try {
       const data = await client.DescribeSavingPlanOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("svp.v20240125.CreateSavingPlanOrder", async function () {
    try {
       const data = await client.CreateSavingPlanOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("svp.v20240125.DescribeSavingPlanDeduct", async function () {
    try {
       const data = await client.DescribeSavingPlanDeduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
