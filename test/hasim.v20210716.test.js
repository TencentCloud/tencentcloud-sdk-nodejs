
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.hasim.v20210716.Client({
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
describe("hasim.v20210716.test.js", function () {

it("hasim.v20210716.DeleteTactic", async function () {
    try {
       const data = await client.DeleteTactic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeOrders", async function () {
    try {
       const data = await client.DescribeOrders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeTactics", async function () {
    try {
       const data = await client.DescribeTactics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.CreateRule", async function () {
    try {
       const data = await client.CreateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DeleteTag", async function () {
    try {
       const data = await client.DeleteTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeLinks", async function () {
    try {
       const data = await client.DescribeLinks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DeleteRule", async function () {
    try {
       const data = await client.DeleteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.ModifyRuleStatus", async function () {
    try {
       const data = await client.ModifyRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.ModifyLinkAdvancedLog", async function () {
    try {
       const data = await client.ModifyLinkAdvancedLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.CreateTag", async function () {
    try {
       const data = await client.CreateTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.ModifyLinkTele", async function () {
    try {
       const data = await client.ModifyLinkTele({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeRule", async function () {
    try {
       const data = await client.DescribeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeTags", async function () {
    try {
       const data = await client.DescribeTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.ModifyRule", async function () {
    try {
       const data = await client.ModifyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeLink", async function () {
    try {
       const data = await client.DescribeLink({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.CreateTactic", async function () {
    try {
       const data = await client.CreateTactic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.RenewLinkInfo", async function () {
    try {
       const data = await client.RenewLinkInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.ModifyTactic", async function () {
    try {
       const data = await client.ModifyTactic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeTactic", async function () {
    try {
       const data = await client.DescribeTactic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.DescribeRules", async function () {
    try {
       const data = await client.DescribeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.ModifyLinkTactic", async function () {
    try {
       const data = await client.ModifyLinkTactic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("hasim.v20210716.ModifyTag", async function () {
    try {
       const data = await client.ModifyTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
