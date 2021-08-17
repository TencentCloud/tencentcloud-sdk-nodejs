
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ssm.v20190923.Client({
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
describe("ssm.v20190923.test.js", function () {

it("ssm.v20190923.DescribeRotationHistory", async function () {
    try {
       const data = await client.DescribeRotationHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.RotateProductSecret", async function () {
    try {
       const data = await client.RotateProductSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.DeleteSecret", async function () {
    try {
       const data = await client.DeleteSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.UpdateSecret", async function () {
    try {
       const data = await client.UpdateSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.ListSecrets", async function () {
    try {
       const data = await client.ListSecrets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.CreateSSHKeyPairSecret", async function () {
    try {
       const data = await client.CreateSSHKeyPairSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.UpdateRotationStatus", async function () {
    try {
       const data = await client.UpdateRotationStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.DescribeSupportedProducts", async function () {
    try {
       const data = await client.DescribeSupportedProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.GetSecretValue", async function () {
    try {
       const data = await client.GetSecretValue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.DescribeAsyncRequestInfo", async function () {
    try {
       const data = await client.DescribeAsyncRequestInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.CreateProductSecret", async function () {
    try {
       const data = await client.CreateProductSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.DeleteSecretVersion", async function () {
    try {
       const data = await client.DeleteSecretVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.UpdateDescription", async function () {
    try {
       const data = await client.UpdateDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.PutSecretValue", async function () {
    try {
       const data = await client.PutSecretValue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.DescribeSecret", async function () {
    try {
       const data = await client.DescribeSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.DescribeRotationDetail", async function () {
    try {
       const data = await client.DescribeRotationDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.GetSSHKeyPairValue", async function () {
    try {
       const data = await client.GetSSHKeyPairValue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.ListSecretVersionIds", async function () {
    try {
       const data = await client.ListSecretVersionIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.CreateSecret", async function () {
    try {
       const data = await client.CreateSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.EnableSecret", async function () {
    try {
       const data = await client.EnableSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.RestoreSecret", async function () {
    try {
       const data = await client.RestoreSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.GetServiceStatus", async function () {
    try {
       const data = await client.GetServiceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.GetRegions", async function () {
    try {
       const data = await client.GetRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ssm.v20190923.DisableSecret", async function () {
    try {
       const data = await client.DisableSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
