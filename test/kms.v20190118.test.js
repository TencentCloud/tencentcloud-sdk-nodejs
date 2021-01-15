
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.kms.v20190118.Client({
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
describe("kms.v20190118.test.js", function () {

it("kms.v20190118.Encrypt", async function () {
    try {
       const data = await client.Encrypt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.Decrypt", async function () {
    try {
       const data = await client.Decrypt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.UpdateAlias", async function () {
    try {
       const data = await client.UpdateAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DeleteWhiteBoxKey", async function () {
    try {
       const data = await client.DeleteWhiteBoxKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.ImportKeyMaterial", async function () {
    try {
       const data = await client.ImportKeyMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.GetPublicKey", async function () {
    try {
       const data = await client.GetPublicKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DisableKey", async function () {
    try {
       const data = await client.DisableKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.GenerateDataKey", async function () {
    try {
       const data = await client.GenerateDataKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.GetServiceStatus", async function () {
    try {
       const data = await client.GetServiceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.AsymmetricSm2Decrypt", async function () {
    try {
       const data = await client.AsymmetricSm2Decrypt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.SignByAsymmetricKey", async function () {
    try {
       const data = await client.SignByAsymmetricKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.CancelKeyDeletion", async function () {
    try {
       const data = await client.CancelKeyDeletion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.GetKeyRotationStatus", async function () {
    try {
       const data = await client.GetKeyRotationStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DescribeWhiteBoxKeyDetails", async function () {
    try {
       const data = await client.DescribeWhiteBoxKeyDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.BindCloudResource", async function () {
    try {
       const data = await client.BindCloudResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.ArchiveKey", async function () {
    try {
       const data = await client.ArchiveKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.CancelKeyArchive", async function () {
    try {
       const data = await client.CancelKeyArchive({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.ReEncrypt", async function () {
    try {
       const data = await client.ReEncrypt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.EnableWhiteBoxKeys", async function () {
    try {
       const data = await client.EnableWhiteBoxKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.ListAlgorithms", async function () {
    try {
       const data = await client.ListAlgorithms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DescribeKey", async function () {
    try {
       const data = await client.DescribeKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.ListKeys", async function () {
    try {
       const data = await client.ListKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.GenerateRandom", async function () {
    try {
       const data = await client.GenerateRandom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.OverwriteWhiteBoxDeviceFingerprints", async function () {
    try {
       const data = await client.OverwriteWhiteBoxDeviceFingerprints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.CreateKey", async function () {
    try {
       const data = await client.CreateKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DescribeWhiteBoxKey", async function () {
    try {
       const data = await client.DescribeWhiteBoxKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.EncryptByWhiteBox", async function () {
    try {
       const data = await client.EncryptByWhiteBox({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.GetParametersForImport", async function () {
    try {
       const data = await client.GetParametersForImport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DisableWhiteBoxKeys", async function () {
    try {
       const data = await client.DisableWhiteBoxKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.ListKeyDetail", async function () {
    try {
       const data = await client.ListKeyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DisableKeyRotation", async function () {
    try {
       const data = await client.DisableKeyRotation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DisableWhiteBoxKey", async function () {
    try {
       const data = await client.DisableWhiteBoxKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.EnableKeys", async function () {
    try {
       const data = await client.EnableKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.ScheduleKeyDeletion", async function () {
    try {
       const data = await client.ScheduleKeyDeletion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DescribeWhiteBoxDeviceFingerprints", async function () {
    try {
       const data = await client.DescribeWhiteBoxDeviceFingerprints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.AsymmetricRsaDecrypt", async function () {
    try {
       const data = await client.AsymmetricRsaDecrypt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.UnbindCloudResource", async function () {
    try {
       const data = await client.UnbindCloudResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.EnableKeyRotation", async function () {
    try {
       const data = await client.EnableKeyRotation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.CreateWhiteBoxKey", async function () {
    try {
       const data = await client.CreateWhiteBoxKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.EnableWhiteBoxKey", async function () {
    try {
       const data = await client.EnableWhiteBoxKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.EnableKey", async function () {
    try {
       const data = await client.EnableKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DeleteImportedKeyMaterial", async function () {
    try {
       const data = await client.DeleteImportedKeyMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DescribeKeys", async function () {
    try {
       const data = await client.DescribeKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DescribeWhiteBoxServiceStatus", async function () {
    try {
       const data = await client.DescribeWhiteBoxServiceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.UpdateKeyDescription", async function () {
    try {
       const data = await client.UpdateKeyDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DisableKeys", async function () {
    try {
       const data = await client.DisableKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.DescribeWhiteBoxDecryptKey", async function () {
    try {
       const data = await client.DescribeWhiteBoxDecryptKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.GetRegions", async function () {
    try {
       const data = await client.GetRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("kms.v20190118.VerifyByAsymmetricKey", async function () {
    try {
       const data = await client.VerifyByAsymmetricKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
