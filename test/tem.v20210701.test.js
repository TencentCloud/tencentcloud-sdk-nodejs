
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tem.v20210701.Client({
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
describe("tem.v20210701.test.js", function () {

it("tem.v20210701.ModifyApplicationReplicas", async function () {
    try {
       const data = await client.ModifyApplicationReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.ModifyIngress", async function () {
    try {
       const data = await client.ModifyIngress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DeleteApplication", async function () {
    try {
       const data = await client.DeleteApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DeleteIngress", async function () {
    try {
       const data = await client.DeleteIngress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DeployApplication", async function () {
    try {
       const data = await client.DeployApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DescribeDeployApplicationDetail", async function () {
    try {
       const data = await client.DescribeDeployApplicationDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.ResumeDeployApplication", async function () {
    try {
       const data = await client.ResumeDeployApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.ModifyEnvironment", async function () {
    try {
       const data = await client.ModifyEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.StopApplication", async function () {
    try {
       const data = await client.StopApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DescribeApplicationPods", async function () {
    try {
       const data = await client.DescribeApplicationPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.RestartApplication", async function () {
    try {
       const data = await client.RestartApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.ModifyApplicationInfo", async function () {
    try {
       const data = await client.ModifyApplicationInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DescribeEnvironments", async function () {
    try {
       const data = await client.DescribeEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.CreateCosToken", async function () {
    try {
       const data = await client.CreateCosToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DescribeIngress", async function () {
    try {
       const data = await client.DescribeIngress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.GenerateApplicationPackageDownloadUrl", async function () {
    try {
       const data = await client.GenerateApplicationPackageDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.CreateEnvironment", async function () {
    try {
       const data = await client.CreateEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DescribeIngresses", async function () {
    try {
       const data = await client.DescribeIngresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.CreateApplication", async function () {
    try {
       const data = await client.CreateApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.RestartApplicationPod", async function () {
    try {
       const data = await client.RestartApplicationPod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.RollingUpdateApplicationByVersion", async function () {
    try {
       const data = await client.RollingUpdateApplicationByVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.RevertDeployApplication", async function () {
    try {
       const data = await client.RevertDeployApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.DescribeRelatedIngresses", async function () {
    try {
       const data = await client.DescribeRelatedIngresses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tem.v20210701.CreateResource", async function () {
    try {
       const data = await client.CreateResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
