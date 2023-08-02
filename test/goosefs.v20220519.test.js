
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

it("goosefs.v20220519.DescribeClusterRoles", async function () {
    try {
       const data = await client.DescribeClusterRoles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DeleteFileSystem", async function () {
    try {
       const data = await client.DeleteFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.AddCrossVpcSubnetSupportForClientNode", async function () {
    try {
       const data = await client.AddCrossVpcSubnetSupportForClientNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.BatchAddClientNodes", async function () {
    try {
       const data = await client.BatchAddClientNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DetachFileSystemBucket", async function () {
    try {
       const data = await client.DetachFileSystemBucket({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DescribeFileSystems", async function () {
    try {
       const data = await client.DescribeFileSystems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.QueryDataRepositoryBandwidth", async function () {
    try {
       const data = await client.QueryDataRepositoryBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DescribeFileSystemBuckets", async function () {
    try {
       const data = await client.DescribeFileSystemBuckets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DescribeClientNodes", async function () {
    try {
       const data = await client.DescribeClientNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DescribeDataRepositoryTaskStatus", async function () {
    try {
       const data = await client.DescribeDataRepositoryTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DeleteCrossVpcSubnetSupportForClientNode", async function () {
    try {
       const data = await client.DeleteCrossVpcSubnetSupportForClientNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.ModifyDataRepositoryBandwidth", async function () {
    try {
       const data = await client.ModifyDataRepositoryBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.AttachFileSystemBucket", async function () {
    try {
       const data = await client.AttachFileSystemBucket({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.BatchDeleteClientNodes", async function () {
    try {
       const data = await client.BatchDeleteClientNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.QueryCrossVpcSubnetSupportForClientNode", async function () {
    try {
       const data = await client.QueryCrossVpcSubnetSupportForClientNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DescribeClusterClientToken", async function () {
    try {
       const data = await client.DescribeClusterClientToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.CreateFileSystem", async function () {
    try {
       const data = await client.CreateFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.ExpandCapacity", async function () {
    try {
       const data = await client.ExpandCapacity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("goosefs.v20220519.DescribeClusterRoleToken", async function () {
    try {
       const data = await client.DescribeClusterRoleToken({})
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
