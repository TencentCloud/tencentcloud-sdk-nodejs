
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gpm.v20200820.Client({
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
describe("gpm.v20200820.test.js", function () {

it("gpm.v20200820.CancelMatching", async function () {
    try {
       const data = await client.CancelMatching({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.ModifyToken", async function () {
    try {
       const data = await client.ModifyToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeMatchingProgress", async function () {
    try {
       const data = await client.DescribeMatchingProgress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.CreateMatch", async function () {
    try {
       const data = await client.CreateMatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.ModifyMatch", async function () {
    try {
       const data = await client.ModifyMatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeToken", async function () {
    try {
       const data = await client.DescribeToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeRule", async function () {
    try {
       const data = await client.DescribeRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.StartMatchingBackfill", async function () {
    try {
       const data = await client.StartMatchingBackfill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeMatch", async function () {
    try {
       const data = await client.DescribeMatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DeleteRule", async function () {
    try {
       const data = await client.DeleteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DeleteMatch", async function () {
    try {
       const data = await client.DeleteMatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeRules", async function () {
    try {
       const data = await client.DescribeRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.ModifyRule", async function () {
    try {
       const data = await client.ModifyRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.CreateRule", async function () {
    try {
       const data = await client.CreateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.StartMatching", async function () {
    try {
       const data = await client.StartMatching({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeMatches", async function () {
    try {
       const data = await client.DescribeMatches({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeMatchCodes", async function () {
    try {
       const data = await client.DescribeMatchCodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gpm.v20200820.DescribeData", async function () {
    try {
       const data = await client.DescribeData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
