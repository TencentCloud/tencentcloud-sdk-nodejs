
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.weilingwith.v20230427.Client({
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
describe("weilingwith.v20230427.test.js", function () {

it("weilingwith.v20230427.DescribeApplicationList", async function () {
    try {
       const data = await client.DescribeApplicationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeInterfaceList", async function () {
    try {
       const data = await client.DescribeInterfaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeWorkspaceUserList", async function () {
    try {
       const data = await client.DescribeWorkspaceUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeEdgeApplicationToken", async function () {
    try {
       const data = await client.DescribeEdgeApplicationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("weilingwith.v20230427.DescribeWorkspaceList", async function () {
    try {
       const data = await client.DescribeWorkspaceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
