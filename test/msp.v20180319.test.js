
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.msp.v20180319.Client({
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
describe("msp.v20180319.test.js", function () {

it("msp.v20180319.ListMigrationTask", async function () {
    try {
       const data = await client.ListMigrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("msp.v20180319.RegisterMigrationTask", async function () {
    try {
       const data = await client.RegisterMigrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("msp.v20180319.ModifyMigrationTaskStatus", async function () {
    try {
       const data = await client.ModifyMigrationTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("msp.v20180319.DeregisterMigrationTask", async function () {
    try {
       const data = await client.DeregisterMigrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("msp.v20180319.DescribeMigrationTask", async function () {
    try {
       const data = await client.DescribeMigrationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("msp.v20180319.ModifyMigrationTaskBelongToProject", async function () {
    try {
       const data = await client.ModifyMigrationTaskBelongToProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("msp.v20180319.ListMigrationProject", async function () {
    try {
       const data = await client.ListMigrationProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
