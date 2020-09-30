
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

it("ssl.v20191205.DescribeCertificates", async function () {
    try {
       const data = await client.DescribeCertificates({})
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

it("ssl.v20191205.UploadCertificate", async function () {
    try {
       const data = await client.UploadCertificate({})
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

it("ssl.v20191205.CommitCertificateInformation", async function () {
    try {
       const data = await client.CommitCertificateInformation({})
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

it("ssl.v20191205.ModifyCertificateAlias", async function () {
    try {
       const data = await client.ModifyCertificateAlias({})
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

it("ssl.v20191205.DescribeCertificateOperateLogs", async function () {
    try {
       const data = await client.DescribeCertificateOperateLogs({})
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

it("ssl.v20191205.DescribeCertificateDetail", async function () {
    try {
       const data = await client.DescribeCertificateDetail({})
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

})
