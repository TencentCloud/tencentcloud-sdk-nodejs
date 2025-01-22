
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tccatalog.v20241024.Client({
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
describe("tccatalog.v20241024.test.js", function () {

it("tccatalog.v20241024.DescribeTccCatalogs", async function () {
    try {
       const data = await client.DescribeTccCatalogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tccatalog.v20241024.DescribeTccCatalog", async function () {
    try {
       const data = await client.DescribeTccCatalog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tccatalog.v20241024.BindTccVpcEndPointServiceWhiteList", async function () {
    try {
       const data = await client.BindTccVpcEndPointServiceWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tccatalog.v20241024.AcceptTccVpcEndPointConnect", async function () {
    try {
       const data = await client.AcceptTccVpcEndPointConnect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
