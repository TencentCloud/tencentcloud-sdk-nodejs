
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.goosefs.v20220519.Client({
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
describe("goosefs.v20220519.test.js", function () {

it("goosefs.v20220519.DescribeDataRepositoryTaskStatus", async function () {
    try {
       const data = await client.DescribeDataRepositoryTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.CreateDataRepositoryTask", async function () {
    try {
       const data = await client.CreateDataRepositoryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
