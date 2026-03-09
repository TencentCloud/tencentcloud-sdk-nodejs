
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cetcd.v20220325.Client({
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
describe("cetcd.v20220325.test.js", function () {

it("cetcd.v20220325.ModifyEtcdConfiguration", async function () {
    try {
       const data = await client.ModifyEtcdConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdSnapshotPolicies", async function () {
    try {
       const data = await client.DescribeEtcdSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.UpgradeEtcdInstance", async function () {
    try {
       const data = await client.UpgradeEtcdInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.ResizeEtcdInstance", async function () {
    try {
       const data = await client.ResizeEtcdInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.CreateEtcdSnapshot", async function () {
    try {
       const data = await client.CreateEtcdSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdSnapshots", async function () {
    try {
       const data = await client.DescribeEtcdSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdCredentials", async function () {
    try {
       const data = await client.DescribeEtcdCredentials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.ModifyEtcdSnapshotPolicy", async function () {
    try {
       const data = await client.ModifyEtcdSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.EnableEtcdInstanceDeletionProtection", async function () {
    try {
       const data = await client.EnableEtcdInstanceDeletionProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdInstances", async function () {
    try {
       const data = await client.DescribeEtcdInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.ModifyEtcdAttribute", async function () {
    try {
       const data = await client.ModifyEtcdAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdAvailableVersions", async function () {
    try {
       const data = await client.DescribeEtcdAvailableVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdCreatingProgress", async function () {
    try {
       const data = await client.DescribeEtcdCreatingProgress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.CreateEtcdSnapshotPolicy", async function () {
    try {
       const data = await client.CreateEtcdSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DisableEtcdInstanceDeletionProtection", async function () {
    try {
       const data = await client.DisableEtcdInstanceDeletionProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeRPCMethodList", async function () {
    try {
       const data = await client.DescribeRPCMethodList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdTasks", async function () {
    try {
       const data = await client.DescribeEtcdTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.CreateEtcdInstance", async function () {
    try {
       const data = await client.CreateEtcdInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdQuota", async function () {
    try {
       const data = await client.DescribeEtcdQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cetcd.v20220325.DescribeEtcdRegions", async function () {
    try {
       const data = await client.DescribeEtcdRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
