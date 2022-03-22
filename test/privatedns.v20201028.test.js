
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.privatedns.v20201028.Client({
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
describe("privatedns.v20201028.test.js", function () {

it("privatedns.v20201028.CreatePrivateDNSAccount", async function () {
    try {
       const data = await client.CreatePrivateDNSAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribePrivateZone", async function () {
    try {
       const data = await client.DescribePrivateZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.ModifyPrivateZoneRecord", async function () {
    try {
       const data = await client.ModifyPrivateZoneRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribeAccountVpcList", async function () {
    try {
       const data = await client.DescribeAccountVpcList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribePrivateZoneRecordList", async function () {
    try {
       const data = await client.DescribePrivateZoneRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribePrivateZoneService", async function () {
    try {
       const data = await client.DescribePrivateZoneService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DeletePrivateDNSAccount", async function () {
    try {
       const data = await client.DeletePrivateDNSAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribeQuotaUsage", async function () {
    try {
       const data = await client.DescribeQuotaUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribeAuditLog", async function () {
    try {
       const data = await client.DescribeAuditLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.CreatePrivateZoneRecord", async function () {
    try {
       const data = await client.CreatePrivateZoneRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.CreatePrivateZone", async function () {
    try {
       const data = await client.CreatePrivateZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribePrivateZoneList", async function () {
    try {
       const data = await client.DescribePrivateZoneList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.ModifyPrivateZone", async function () {
    try {
       const data = await client.ModifyPrivateZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.SubscribePrivateZoneService", async function () {
    try {
       const data = await client.SubscribePrivateZoneService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribeDashboard", async function () {
    try {
       const data = await client.DescribeDashboard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.ModifyPrivateZoneVpc", async function () {
    try {
       const data = await client.ModifyPrivateZoneVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribeRequestData", async function () {
    try {
       const data = await client.DescribeRequestData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DeletePrivateZoneRecord", async function () {
    try {
       const data = await client.DeletePrivateZoneRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DeletePrivateZone", async function () {
    try {
       const data = await client.DeletePrivateZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("privatedns.v20201028.DescribePrivateDNSAccountList", async function () {
    try {
       const data = await client.DescribePrivateDNSAccountList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
