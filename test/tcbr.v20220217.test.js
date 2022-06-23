
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tcbr.v20220217.Client({
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
describe("tcbr.v20220217.test.js", function () {

it("tcbr.v20220217.CreateCloudRunServer", async function () {
    try {
       const data = await client.CreateCloudRunServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.DescribeServerManageTask", async function () {
    try {
       const data = await client.DescribeServerManageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.DescribeEnvBaseInfo", async function () {
    try {
       const data = await client.DescribeEnvBaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.DescribeCloudRunServers", async function () {
    try {
       const data = await client.DescribeCloudRunServers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.ReleaseGray", async function () {
    try {
       const data = await client.ReleaseGray({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.UpdateCloudRunServer", async function () {
    try {
       const data = await client.UpdateCloudRunServer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.CreateCloudRunEnv", async function () {
    try {
       const data = await client.CreateCloudRunEnv({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.DescribeCloudRunEnvs", async function () {
    try {
       const data = await client.DescribeCloudRunEnvs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.OperateServerManage", async function () {
    try {
       const data = await client.OperateServerManage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcbr.v20220217.DescribeCloudRunServerDetail", async function () {
    try {
       const data = await client.DescribeCloudRunServerDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
