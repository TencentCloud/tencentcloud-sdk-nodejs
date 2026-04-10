
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.omics.v20221128.Client({
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
describe("omics.v20221128.test.js", function () {

it("omics.v20221128.ImportCommonApplication", async function () {
    try {
       const data = await client.ImportCommonApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeApplicationVersions", async function () {
    try {
       const data = await client.DescribeApplicationVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.GetRunStatus", async function () {
    try {
       const data = await client.GetRunStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.CreateVolume", async function () {
    try {
       const data = await client.CreateVolume({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.GetInputTemplateFile", async function () {
    try {
       const data = await client.GetInputTemplateFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.RetryRuns", async function () {
    try {
       const data = await client.RetryRuns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.ImportTableFile", async function () {
    try {
       const data = await client.ImportTableFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.TerminateRunGroup", async function () {
    try {
       const data = await client.TerminateRunGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.RunApplication", async function () {
    try {
       const data = await client.RunApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DeleteVolume", async function () {
    try {
       const data = await client.DeleteVolume({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeTablesRows", async function () {
    try {
       const data = await client.DescribeTablesRows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeHPCClusters", async function () {
    try {
       const data = await client.DescribeHPCClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeEnvironments", async function () {
    try {
       const data = await client.DescribeEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.GetRunMetadataFile", async function () {
    try {
       const data = await client.GetRunMetadataFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.RebootHPCNodes", async function () {
    try {
       const data = await client.RebootHPCNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeProjects", async function () {
    try {
       const data = await client.DescribeProjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.RunWorkflow", async function () {
    try {
       const data = await client.RunWorkflow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.CreateEnvironment", async function () {
    try {
       const data = await client.CreateEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeRuns", async function () {
    try {
       const data = await client.DescribeRuns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeRunGroups", async function () {
    try {
       const data = await client.DescribeRunGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DeleteEnvironment", async function () {
    try {
       const data = await client.DeleteEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.GetRunCalls", async function () {
    try {
       const data = await client.GetRunCalls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeApplications", async function () {
    try {
       const data = await client.DescribeApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DeleteVolumeData", async function () {
    try {
       const data = await client.DeleteVolumeData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeVolumes", async function () {
    try {
       const data = await client.DescribeVolumes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeInputTemplates", async function () {
    try {
       const data = await client.DescribeInputTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeHPCNodes", async function () {
    try {
       const data = await client.DescribeHPCNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.ModifyVolume", async function () {
    try {
       const data = await client.ModifyVolume({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("omics.v20221128.DescribeTables", async function () {
    try {
       const data = await client.DescribeTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
