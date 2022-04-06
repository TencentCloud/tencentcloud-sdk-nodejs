
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bsca.v20210811.Client({
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
describe("bsca.v20210811.test.js", function () {

it("bsca.v20210811.DescribeKBComponentVulnerability", async function () {
    try {
       const data = await client.DescribeKBComponentVulnerability({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bsca.v20210811.DescribeKBComponent", async function () {
    try {
       const data = await client.DescribeKBComponent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bsca.v20210811.DescribeKBLicense", async function () {
    try {
       const data = await client.DescribeKBLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bsca.v20210811.DescribeKBVulnerability", async function () {
    try {
       const data = await client.DescribeKBVulnerability({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
