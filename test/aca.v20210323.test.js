
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.aca.v20210323.Client({
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
describe("aca.v20210323.test.js", function () {

it("aca.v20210323.LoginHisTool", async function () {
    try {
       const data = await client.LoginHisTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aca.v20210323.GetDrugIndications", async function () {
    try {
       const data = await client.GetDrugIndications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aca.v20210323.LoginOutHisTool", async function () {
    try {
       const data = await client.LoginOutHisTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aca.v20210323.SmartPredict", async function () {
    try {
       const data = await client.SmartPredict({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aca.v20210323.SmartDrugInfo", async function () {
    try {
       const data = await client.SmartDrugInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aca.v20210323.SyncDepartment", async function () {
    try {
       const data = await client.SyncDepartment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aca.v20210323.SyncStandardDict", async function () {
    try {
       const data = await client.SyncStandardDict({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("aca.v20210323.UploadDrugs", async function () {
    try {
       const data = await client.UploadDrugs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
