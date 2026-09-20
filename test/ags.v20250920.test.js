
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ags.v20250920.Client({
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
describe("ags.v20250920.test.js", function () {

it("ags.v20250920.CreatePreCacheImageTask", async function () {
    try {
       const data = await client.CreatePreCacheImageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.PreviewRegistryRecord", async function () {
    try {
       const data = await client.PreviewRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.UpdateSandboxInstance", async function () {
    try {
       const data = await client.UpdateSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.ModifyDeployment", async function () {
    try {
       const data = await client.ModifyDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.StartSandboxInstance", async function () {
    try {
       const data = await client.StartSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.AcquireSandboxInstanceToken", async function () {
    try {
       const data = await client.AcquireSandboxInstanceToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeEvents", async function () {
    try {
       const data = await client.DescribeEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateRegistry", async function () {
    try {
       const data = await client.CreateRegistry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.SyncRegistryRecord", async function () {
    try {
       const data = await client.SyncRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeRegistryAuditLogList", async function () {
    try {
       const data = await client.DescribeRegistryAuditLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateAPIKey", async function () {
    try {
       const data = await client.CreateAPIKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.UpdateRegistry", async function () {
    try {
       const data = await client.UpdateRegistry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateDeployment", async function () {
    try {
       const data = await client.CreateDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.AppendEvent", async function () {
    try {
       const data = await client.AppendEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.UpdateSandboxTool", async function () {
    try {
       const data = await client.UpdateSandboxTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeDeployment", async function () {
    try {
       const data = await client.DescribeDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeRegistryRecordVersionList", async function () {
    try {
       const data = await client.DescribeRegistryRecordVersionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.ApproveRegistryRecord", async function () {
    try {
       const data = await client.ApproveRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeRegistryRecordList", async function () {
    try {
       const data = await client.DescribeRegistryRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSandboxInstanceList", async function () {
    try {
       const data = await client.DescribeSandboxInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.ResumeSandboxInstance", async function () {
    try {
       const data = await client.ResumeSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateRegistryRecord", async function () {
    try {
       const data = await client.CreateRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CancelRegistryRecord", async function () {
    try {
       const data = await client.CancelRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteSessionSpace", async function () {
    try {
       const data = await client.DeleteSessionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteRegistry", async function () {
    try {
       const data = await client.DeleteRegistry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.ModifySession", async function () {
    try {
       const data = await client.ModifySession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteDeployment", async function () {
    try {
       const data = await client.DeleteDeployment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateSandboxTool", async function () {
    try {
       const data = await client.CreateSandboxTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.GetSkillPackageUploadURL", async function () {
    try {
       const data = await client.GetSkillPackageUploadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeRegistryRecord", async function () {
    try {
       const data = await client.DescribeRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.ModifySessionSpace", async function () {
    try {
       const data = await client.ModifySessionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteRegistryRecord", async function () {
    try {
       const data = await client.DeleteRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSessions", async function () {
    try {
       const data = await client.DescribeSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSandboxToolList", async function () {
    try {
       const data = await client.DescribeSandboxToolList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.GetSkillPackageDownloadURL", async function () {
    try {
       const data = await client.GetSkillPackageDownloadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.RejectRegistryRecord", async function () {
    try {
       const data = await client.RejectRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeAPIKeyList", async function () {
    try {
       const data = await client.DescribeAPIKeyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.UpdateRegistryRecord", async function () {
    try {
       const data = await client.UpdateRegistryRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteSandboxTool", async function () {
    try {
       const data = await client.DeleteSandboxTool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.PauseSandboxInstance", async function () {
    try {
       const data = await client.PauseSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateSession", async function () {
    try {
       const data = await client.CreateSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.CreateSessionSpace", async function () {
    try {
       const data = await client.CreateSessionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSessionSpaces", async function () {
    try {
       const data = await client.DescribeSessionSpaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeRegistryList", async function () {
    try {
       const data = await client.DescribeRegistryList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteSession", async function () {
    try {
       const data = await client.DeleteSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeDeploymentList", async function () {
    try {
       const data = await client.DescribeDeploymentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribePreCacheImageTask", async function () {
    try {
       const data = await client.DescribePreCacheImageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.StopSandboxInstance", async function () {
    try {
       const data = await client.StopSandboxInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeRegistry", async function () {
    try {
       const data = await client.DescribeRegistry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSession", async function () {
    try {
       const data = await client.DescribeSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeSessionSpace", async function () {
    try {
       const data = await client.DescribeSessionSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DeleteAPIKey", async function () {
    try {
       const data = await client.DeleteAPIKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.DescribeQuotaOverview", async function () {
    try {
       const data = await client.DescribeQuotaOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ags.v20250920.AcquireDeploymentToken", async function () {
    try {
       const data = await client.AcquireDeploymentToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
