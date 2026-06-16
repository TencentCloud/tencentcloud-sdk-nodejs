
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dbdc.v20201029.Client({
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
describe("dbdc.v20201029.test.js", function () {

it("dbdc.v20201029.DestroyDBCustomNode", async function () {
    try {
       const data = await client.DestroyDBCustomNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.AddNodesToDBCustomCluster", async function () {
    try {
       const data = await client.AddNodesToDBCustomCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.ModifyDBCustomNodeTags", async function () {
    try {
       const data = await client.ModifyDBCustomNodeTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeInstanceDetail", async function () {
    try {
       const data = await client.DescribeInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBCustomNodes", async function () {
    try {
       const data = await client.DescribeDBCustomNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.CreateDBCustomNodes", async function () {
    try {
       const data = await client.CreateDBCustomNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBCustomImages", async function () {
    try {
       const data = await client.DescribeDBCustomImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBCustomClusterNodes", async function () {
    try {
       const data = await client.DescribeDBCustomClusterNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DestroyDBCustomCluster", async function () {
    try {
       const data = await client.DestroyDBCustomCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.ModifyInstanceName", async function () {
    try {
       const data = await client.ModifyInstanceName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBInstances", async function () {
    try {
       const data = await client.DescribeDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.RenewDBCustomNode", async function () {
    try {
       const data = await client.RenewDBCustomNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBCustomClusterDetail", async function () {
    try {
       const data = await client.DescribeDBCustomClusterDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.IsolateDBCustomNode", async function () {
    try {
       const data = await client.IsolateDBCustomNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeInstanceList", async function () {
    try {
       const data = await client.DescribeInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.CreateDBCustomCluster", async function () {
    try {
       const data = await client.CreateDBCustomCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.RemoveNodesFromDBCustomCluster", async function () {
    try {
       const data = await client.RemoveNodesFromDBCustomCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.ModifyDBCustomClusterTags", async function () {
    try {
       const data = await client.ModifyDBCustomClusterTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBCustomClusterKubeconfig", async function () {
    try {
       const data = await client.DescribeDBCustomClusterKubeconfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeHostList", async function () {
    try {
       const data = await client.DescribeHostList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBCustomTaskStatus", async function () {
    try {
       const data = await client.DescribeDBCustomTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.CheckRoleAuthorized", async function () {
    try {
       const data = await client.CheckRoleAuthorized({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbdc.v20201029.DescribeDBCustomClusters", async function () {
    try {
       const data = await client.DescribeDBCustomClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
