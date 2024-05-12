
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ssl.v20191205.Client({
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
describe("ssl.v20191205.test.js", function () {

it("ssl.v20191205.DescribeHostCosInstanceList", async function () {
    try {
       const data = await client.DescribeHostCosInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeCertificates", async function () {
    try {
       const data = await client.DescribeCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostCdnInstanceList", async function () {
    try {
       const data = await client.DescribeHostCdnInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostTkeInstanceList", async function () {
    try {
       const data = await client.DescribeHostTkeInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostUpdateRecord", async function () {
    try {
       const data = await client.DescribeHostUpdateRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.UploadRevokeLetter", async function () {
    try {
       const data = await client.UploadRevokeLetter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DeleteManager", async function () {
    try {
       const data = await client.DeleteManager({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeDownloadCertificateUrl", async function () {
    try {
       const data = await client.DescribeDownloadCertificateUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DeployCertificateInstance", async function () {
    try {
       const data = await client.DeployCertificateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.SubmitAuditManager", async function () {
    try {
       const data = await client.SubmitAuditManager({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribePackages", async function () {
    try {
       const data = await client.DescribePackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.SubmitCertificateInformation", async function () {
    try {
       const data = await client.SubmitCertificateInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.UpdateCertificateRecordRollback", async function () {
    try {
       const data = await client.UpdateCertificateRecordRollback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostDdosInstanceList", async function () {
    try {
       const data = await client.DescribeHostDdosInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.VerifyManager", async function () {
    try {
       const data = await client.VerifyManager({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostClbInstanceList", async function () {
    try {
       const data = await client.DescribeHostClbInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostTeoInstanceList", async function () {
    try {
       const data = await client.DescribeHostTeoInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CancelCertificateOrder", async function () {
    try {
       const data = await client.CancelCertificateOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DownloadCertificate", async function () {
    try {
       const data = await client.DownloadCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DeleteCertificate", async function () {
    try {
       const data = await client.DeleteCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CompleteCertificate", async function () {
    try {
       const data = await client.CompleteCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.UpdateCertificateInstance", async function () {
    try {
       const data = await client.UpdateCertificateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.UploadCertificate", async function () {
    try {
       const data = await client.UploadCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CheckCertificateChain", async function () {
    try {
       const data = await client.CheckCertificateChain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.ModifyCertificateAlias", async function () {
    try {
       const data = await client.ModifyCertificateAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeCompanies", async function () {
    try {
       const data = await client.DescribeCompanies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeCertificateDetail", async function () {
    try {
       const data = await client.DescribeCertificateDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostVodInstanceList", async function () {
    try {
       const data = await client.DescribeHostVodInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostLiveInstanceList", async function () {
    try {
       const data = await client.DescribeHostLiveInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostWafInstanceList", async function () {
    try {
       const data = await client.DescribeHostWafInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeManagerDetail", async function () {
    try {
       const data = await client.DescribeManagerDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostDeployRecordDetail", async function () {
    try {
       const data = await client.DescribeHostDeployRecordDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DeployCertificateRecordRollback", async function () {
    try {
       const data = await client.DeployCertificateRecordRollback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DeployCertificateRecordRetry", async function () {
    try {
       const data = await client.DeployCertificateRecordRetry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeCertificateBindResourceTaskResult", async function () {
    try {
       const data = await client.DescribeCertificateBindResourceTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CancelAuditCertificate", async function () {
    try {
       const data = await client.CancelAuditCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostDeployRecord", async function () {
    try {
       const data = await client.DescribeHostDeployRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.UpdateCertificateRecordRetry", async function () {
    try {
       const data = await client.UpdateCertificateRecordRetry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.RevokeCertificate", async function () {
    try {
       const data = await client.RevokeCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.ModifyCertificateProject", async function () {
    try {
       const data = await client.ModifyCertificateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeCertificate", async function () {
    try {
       const data = await client.DescribeCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeDeployedResources", async function () {
    try {
       const data = await client.DescribeDeployedResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CreateCertificate", async function () {
    try {
       const data = await client.CreateCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.UploadConfirmLetter", async function () {
    try {
       const data = await client.UploadConfirmLetter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostLighthouseInstanceList", async function () {
    try {
       const data = await client.DescribeHostLighthouseInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostUpdateRecordDetail", async function () {
    try {
       const data = await client.DescribeHostUpdateRecordDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CommitCertificateInformation", async function () {
    try {
       const data = await client.CommitCertificateInformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeCertificateOperateLogs", async function () {
    try {
       const data = await client.DescribeCertificateOperateLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeHostApiGatewayInstanceList", async function () {
    try {
       const data = await client.DescribeHostApiGatewayInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CreateCertificateByPackage", async function () {
    try {
       const data = await client.CreateCertificateByPackage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.CreateCertificateBindResourceSyncTask", async function () {
    try {
       const data = await client.CreateCertificateBindResourceSyncTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.ModifyCertificatesExpiringNotificationSwitch", async function () {
    try {
       const data = await client.ModifyCertificatesExpiringNotificationSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.ReplaceCertificate", async function () {
    try {
       const data = await client.ReplaceCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.ApplyCertificate", async function () {
    try {
       const data = await client.ApplyCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeDeleteCertificatesTaskResult", async function () {
    try {
       const data = await client.DescribeDeleteCertificatesTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeManagers", async function () {
    try {
       const data = await client.DescribeManagers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.DescribeCertificateBindResourceTaskDetail", async function () {
    try {
       const data = await client.DescribeCertificateBindResourceTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssl.v20191205.ModifyCertificateResubmit", async function () {
    try {
       const data = await client.ModifyCertificateResubmit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
