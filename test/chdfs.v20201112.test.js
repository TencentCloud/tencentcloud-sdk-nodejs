
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.chdfs.v20201112.Client({
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
describe("chdfs.v20201112.test.js", function () {

it("chdfs.v20201112.CreateRestoreTasks", async function () {
    try {
       const data = await client.CreateRestoreTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.CreateLifeCycleRules", async function () {
    try {
       const data = await client.CreateLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.ModifyMountPoint", async function () {
    try {
       const data = await client.ModifyMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.ModifyAccessRules", async function () {
    try {
       const data = await client.ModifyAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeAccessRules", async function () {
    try {
       const data = await client.DescribeAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DeleteMountPoint", async function () {
    try {
       const data = await client.DeleteMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeMountPoint", async function () {
    try {
       const data = await client.DescribeMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DeleteAccessRules", async function () {
    try {
       const data = await client.DeleteAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeResourceTags", async function () {
    try {
       const data = await client.DescribeResourceTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.CreateMountPoint", async function () {
    try {
       const data = await client.CreateMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.ModifyLifeCycleRules", async function () {
    try {
       const data = await client.ModifyLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeAccessGroups", async function () {
    try {
       const data = await client.DescribeAccessGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DisassociateAccessGroups", async function () {
    try {
       const data = await client.DisassociateAccessGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DeleteFileSystem", async function () {
    try {
       const data = await client.DeleteFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeFileSystem", async function () {
    try {
       const data = await client.DescribeFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.CreateFileSystem", async function () {
    try {
       const data = await client.CreateFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeAccessGroup", async function () {
    try {
       const data = await client.DescribeAccessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DeleteLifeCycleRules", async function () {
    try {
       const data = await client.DeleteLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.CreateAccessRules", async function () {
    try {
       const data = await client.CreateAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.ModifyFileSystem", async function () {
    try {
       const data = await client.ModifyFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.AssociateAccessGroups", async function () {
    try {
       const data = await client.AssociateAccessGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeFileSystems", async function () {
    try {
       const data = await client.DescribeFileSystems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeMountPoints", async function () {
    try {
       const data = await client.DescribeMountPoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.ModifyAccessGroup", async function () {
    try {
       const data = await client.ModifyAccessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeRestoreTasks", async function () {
    try {
       const data = await client.DescribeRestoreTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.ModifyResourceTags", async function () {
    try {
       const data = await client.ModifyResourceTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DescribeLifeCycleRules", async function () {
    try {
       const data = await client.DescribeLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.DeleteAccessGroup", async function () {
    try {
       const data = await client.DeleteAccessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20201112.CreateAccessGroup", async function () {
    try {
       const data = await client.CreateAccessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
