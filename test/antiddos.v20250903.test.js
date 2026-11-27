
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.antiddos.v20250903.Client({
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
describe("antiddos.v20250903.test.js", function () {

it("antiddos.v20250903.DescribeDDoSBlockRecords", async function () {
    try {
       const data = await client.DescribeDDoSBlockRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.DeleteProtection", async function () {
    try {
       const data = await client.DeleteProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.DescribeResourceProtections", async function () {
    try {
       const data = await client.DescribeResourceProtections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.DescribeProtections", async function () {
    try {
       const data = await client.DescribeProtections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.UnblockResources", async function () {
    try {
       const data = await client.UnblockResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.CreateProtection", async function () {
    try {
       const data = await client.CreateProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.DescribeDDoSProtectionPolicy", async function () {
    try {
       const data = await client.DescribeDDoSProtectionPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.ModifyProtectionResource", async function () {
    try {
       const data = await client.ModifyProtectionResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.ModifyProtection", async function () {
    try {
       const data = await client.ModifyProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.DescribeProtectionResources", async function () {
    try {
       const data = await client.DescribeProtectionResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("antiddos.v20250903.ModifyDDoSProtectionPolicy", async function () {
    try {
       const data = await client.ModifyDDoSProtectionPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
