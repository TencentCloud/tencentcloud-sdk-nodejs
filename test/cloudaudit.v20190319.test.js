
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cloudaudit.v20190319.Client({
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
describe("cloudaudit.v20190319.test.js", function () {

it("cloudaudit.v20190319.ModifyAuditTrack", async function () {
    try {
       const data = await client.ModifyAuditTrack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.StartLogging", async function () {
    try {
       const data = await client.StartLogging({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.ListCosEnableRegion", async function () {
    try {
       const data = await client.ListCosEnableRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.GetAttributeKey", async function () {
    try {
       const data = await client.GetAttributeKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.CreateAuditTrack", async function () {
    try {
       const data = await client.CreateAuditTrack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.ListCmqEnableRegion", async function () {
    try {
       const data = await client.ListCmqEnableRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.DeleteAudit", async function () {
    try {
       const data = await client.DeleteAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.DescribeEvents", async function () {
    try {
       const data = await client.DescribeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.StopLogging", async function () {
    try {
       const data = await client.StopLogging({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.DescribeAuditTracks", async function () {
    try {
       const data = await client.DescribeAuditTracks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.InquireAuditCredit", async function () {
    try {
       const data = await client.InquireAuditCredit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.UpdateAudit", async function () {
    try {
       const data = await client.UpdateAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.ListKeyAliasByRegion", async function () {
    try {
       const data = await client.ListKeyAliasByRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.DescribeAudit", async function () {
    try {
       const data = await client.DescribeAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.CreateAudit", async function () {
    try {
       const data = await client.CreateAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.DeleteAuditTrack", async function () {
    try {
       const data = await client.DeleteAuditTrack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.LookUpEvents", async function () {
    try {
       const data = await client.LookUpEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudaudit.v20190319.ListAudits", async function () {
    try {
       const data = await client.ListAudits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
