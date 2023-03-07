
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.intlpartnersmgt.v20220928.Client({
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
describe("intlpartnersmgt.v20220928.test.js", function () {

it("intlpartnersmgt.v20220928.QueryCreditByUinList", async function () {
    try {
       const data = await client.QueryCreditByUinList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.QueryVoucherPool", async function () {
    try {
       const data = await client.QueryVoucherPool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.QueryDirectCustomersCredit", async function () {
    try {
       const data = await client.QueryDirectCustomersCredit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.CreateAccount", async function () {
    try {
       const data = await client.CreateAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.QueryVoucherListByUin", async function () {
    try {
       const data = await client.QueryVoucherListByUin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.QueryPartnerCredit", async function () {
    try {
       const data = await client.QueryPartnerCredit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.AllocateCustomerCredit", async function () {
    try {
       const data = await client.AllocateCustomerCredit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.GetCountryCodes", async function () {
    try {
       const data = await client.GetCountryCodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.QueryCreditAllocationHistory", async function () {
    try {
       const data = await client.QueryCreditAllocationHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.QueryCustomersCredit", async function () {
    try {
       const data = await client.QueryCustomersCredit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("intlpartnersmgt.v20220928.QueryVoucherAmountByUin", async function () {
    try {
       const data = await client.QueryVoucherAmountByUin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
