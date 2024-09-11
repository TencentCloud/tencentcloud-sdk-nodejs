
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tke.v20220501.Client({
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
describe("tke.v20220501.test.js", function () {

it("tke.v20220501.DescribeNodePools", async function () {
    try {
       const data = await client.DescribeNodePools({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.ModifyNodePool", async function () {
    try {
       const data = await client.ModifyNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.DeleteHealthCheckPolicy", async function () {
    try {
       const data = await client.DeleteHealthCheckPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.DeleteNodePool", async function () {
    try {
       const data = await client.DeleteNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.DescribeHealthCheckPolicies", async function () {
    try {
       const data = await client.DescribeHealthCheckPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.ModifyHealthCheckPolicy", async function () {
    try {
       const data = await client.ModifyHealthCheckPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.CreateNodePool", async function () {
    try {
       const data = await client.CreateNodePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.DescribeHealthCheckTemplate", async function () {
    try {
       const data = await client.DescribeHealthCheckTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.DescribeHealthCheckPolicyBindings", async function () {
    try {
       const data = await client.DescribeHealthCheckPolicyBindings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.CreateHealthCheckPolicy", async function () {
    try {
       const data = await client.CreateHealthCheckPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tke.v20220501.DescribeClusterInstances", async function () {
    try {
       const data = await client.DescribeClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
