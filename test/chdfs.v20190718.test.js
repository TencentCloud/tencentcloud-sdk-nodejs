
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.chdfs.v20190718.Client({
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
describe("chdfs.v20190718.test.js", function () {

it("chdfs.v20190718.CreateRestoreTasks", async function () {
    try {
       const data = await client.CreateRestoreTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.CreateLifeCycleRules", async function () {
    try {
       const data = await client.CreateLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.ModifyMountPoint", async function () {
    try {
       const data = await client.ModifyMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.ModifyAccessRules", async function () {
    try {
       const data = await client.ModifyAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DeleteMountPoint", async function () {
    try {
       const data = await client.DeleteMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeMountPoint", async function () {
    try {
       const data = await client.DescribeMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DeleteAccessRules", async function () {
    try {
       const data = await client.DeleteAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.ModifyAccessGroup", async function () {
    try {
       const data = await client.ModifyAccessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.CreateMountPoint", async function () {
    try {
       const data = await client.CreateMountPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.ModifyLifeCycleRules", async function () {
    try {
       const data = await client.ModifyLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeAccessGroups", async function () {
    try {
       const data = await client.DescribeAccessGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DeleteFileSystem", async function () {
    try {
       const data = await client.DeleteFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeFileSystem", async function () {
    try {
       const data = await client.DescribeFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.CreateFileSystem", async function () {
    try {
       const data = await client.CreateFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeAccessRules", async function () {
    try {
       const data = await client.DescribeAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DeleteLifeCycleRules", async function () {
    try {
       const data = await client.DeleteLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.CreateAccessRules", async function () {
    try {
       const data = await client.CreateAccessRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.ModifyFileSystem", async function () {
    try {
       const data = await client.ModifyFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeFileSystems", async function () {
    try {
       const data = await client.DescribeFileSystems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeMountPoints", async function () {
    try {
       const data = await client.DescribeMountPoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeResourceTags", async function () {
    try {
       const data = await client.DescribeResourceTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeRestoreTasks", async function () {
    try {
       const data = await client.DescribeRestoreTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.ModifyResourceTags", async function () {
    try {
       const data = await client.ModifyResourceTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DescribeLifeCycleRules", async function () {
    try {
       const data = await client.DescribeLifeCycleRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.DeleteAccessGroup", async function () {
    try {
       const data = await client.DeleteAccessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("chdfs.v20190718.CreateAccessGroup", async function () {
    try {
       const data = await client.CreateAccessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
