
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tem.v20201221.Client({
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
describe("tem.v20201221.test.js", function () {

it("tem.v20201221.ModifyNamespace", async function () {
    try {
       const data = await client.ModifyNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.CreateNamespace", async function () {
    try {
       const data = await client.CreateNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.ModifyIngress", async function () {
    try {
       const data = await client.ModifyIngress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.GenerateDownloadUrl", async function () {
    try {
       const data = await client.GenerateDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.CreateCosToken", async function () {
    try {
       const data = await client.CreateCosToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.DescribeIngress", async function () {
    try {
       const data = await client.DescribeIngress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.CreateCosTokenV2", async function () {
    try {
       const data = await client.CreateCosTokenV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.DeployServiceV2", async function () {
    try {
       const data = await client.DeployServiceV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.CreateServiceV2", async function () {
    try {
       const data = await client.CreateServiceV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.DescribeRelatedIngresses", async function () {
    try {
       const data = await client.DescribeRelatedIngresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.ModifyServiceInfo", async function () {
    try {
       const data = await client.ModifyServiceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.RestartServiceRunPod", async function () {
    try {
       const data = await client.RestartServiceRunPod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.CreateResource", async function () {
    try {
       const data = await client.CreateResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.DescribeServiceRunPodListV2", async function () {
    try {
       const data = await client.DescribeServiceRunPodListV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.DescribeIngresses", async function () {
    try {
       const data = await client.DescribeIngresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.DescribeNamespaces", async function () {
    try {
       const data = await client.DescribeNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20201221.DeleteIngress", async function () {
    try {
       const data = await client.DeleteIngress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
