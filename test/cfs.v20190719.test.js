
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cfs.v20190719.Client({
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
describe("cfs.v20190719.test.js", function () {

it("cfs.v20190719.CreateCfsFileSystem", async function () {
    try {
       const data = await client.CreateCfsFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsPGroups", async function () {
    try {
       const data = await client.DescribeCfsPGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsRules", async function () {
    try {
       const data = await client.DescribeCfsRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsFileSystemPGroup", async function () {
    try {
       const data = await client.UpdateCfsFileSystemPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeAvailableZoneInfo", async function () {
    try {
       const data = await client.DescribeAvailableZoneInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsFileSystemName", async function () {
    try {
       const data = await client.UpdateCfsFileSystemName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteCfsFileSystem", async function () {
    try {
       const data = await client.DeleteCfsFileSystem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsFileSystemSizeLimit", async function () {
    try {
       const data = await client.UpdateCfsFileSystemSizeLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateCfsPGroup", async function () {
    try {
       const data = await client.CreateCfsPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsRule", async function () {
    try {
       const data = await client.UpdateCfsRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsServiceStatus", async function () {
    try {
       const data = await client.DescribeCfsServiceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsFileSystems", async function () {
    try {
       const data = await client.DescribeCfsFileSystems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.SignUpCfsService", async function () {
    try {
       const data = await client.SignUpCfsService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.CreateCfsRule", async function () {
    try {
       const data = await client.CreateCfsRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteCfsPGroup", async function () {
    try {
       const data = await client.DeleteCfsPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeMountTargets", async function () {
    try {
       const data = await client.DescribeMountTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.UpdateCfsPGroup", async function () {
    try {
       const data = await client.UpdateCfsPGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteCfsRule", async function () {
    try {
       const data = await client.DeleteCfsRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DescribeCfsFileSystemClients", async function () {
    try {
       const data = await client.DescribeCfsFileSystemClients({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfs.v20190719.DeleteMountTarget", async function () {
    try {
       const data = await client.DeleteMountTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
