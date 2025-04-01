
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vod.v20240718.Client({
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
describe("vod.v20240718.test.js", function () {

it("vod.v20240718.ModifyIncrementalMigrationStrategy", async function () {
    try {
       const data = await client.ModifyIncrementalMigrationStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20240718.DescribeIncrementalMigrationStrategyInfos", async function () {
    try {
       const data = await client.DescribeIncrementalMigrationStrategyInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20240718.CreateStorage", async function () {
    try {
       const data = await client.CreateStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20240718.CreateIncrementalMigrationStrategy", async function () {
    try {
       const data = await client.CreateIncrementalMigrationStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20240718.DeleteIncrementalMigrationStrategy", async function () {
    try {
       const data = await client.DeleteIncrementalMigrationStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20240718.DescribeStorage", async function () {
    try {
       const data = await client.DescribeStorage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vod.v20240718.CreateStorageCredentials", async function () {
    try {
       const data = await client.CreateStorageCredentials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
