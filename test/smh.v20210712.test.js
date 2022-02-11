
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.smh.v20210712.Client({
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
describe("smh.v20210712.test.js", function () {

it("smh.v20210712.DescribeOfficialInstances", async function () {
    try {
       const data = await client.DescribeOfficialInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.CreateLibrary", async function () {
    try {
       const data = await client.CreateLibrary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.SendSmsCode", async function () {
    try {
       const data = await client.SendSmsCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.VerifySmsCode", async function () {
    try {
       const data = await client.VerifySmsCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.DescribeLibraries", async function () {
    try {
       const data = await client.DescribeLibraries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.ModifyLibrary", async function () {
    try {
       const data = await client.ModifyLibrary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.DescribeOfficialOverview", async function () {
    try {
       const data = await client.DescribeOfficialOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.DescribeTrafficPackages", async function () {
    try {
       const data = await client.DescribeTrafficPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.DeleteLibrary", async function () {
    try {
       const data = await client.DeleteLibrary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("smh.v20210712.DescribeLibrarySecret", async function () {
    try {
       const data = await client.DescribeLibrarySecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
