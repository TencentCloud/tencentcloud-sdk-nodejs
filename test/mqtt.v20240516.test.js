
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.mqtt.v20240516.Client({
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
describe("mqtt.v20240516.test.js", function () {

it("mqtt.v20240516.DescribeUserList", async function () {
    try {
       const data = await client.DescribeUserList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.CreateInsPublicEndpoint", async function () {
    try {
       const data = await client.CreateInsPublicEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyTopic", async function () {
    try {
       const data = await client.ModifyTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteCaCertificate", async function () {
    try {
       const data = await client.DeleteCaCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeactivateDeviceCertificate", async function () {
    try {
       const data = await client.DeactivateDeviceCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeTopic", async function () {
    try {
       const data = await client.DescribeTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeactivateCaCertificate", async function () {
    try {
       const data = await client.DeactivateCaCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.CreateJWTAuthenticator", async function () {
    try {
       const data = await client.CreateJWTAuthenticator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteDeviceCertificate", async function () {
    try {
       const data = await client.DeleteDeviceCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteInstance", async function () {
    try {
       const data = await client.DeleteInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.PublishMessage", async function () {
    try {
       const data = await client.PublishMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyJWTAuthenticator", async function () {
    try {
       const data = await client.ModifyJWTAuthenticator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyJWKSAuthenticator", async function () {
    try {
       const data = await client.ModifyJWKSAuthenticator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeDeviceCertificates", async function () {
    try {
       const data = await client.DescribeDeviceCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeInsPublicEndpoints", async function () {
    try {
       const data = await client.DescribeInsPublicEndpoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyInsPublicEndpoint", async function () {
    try {
       const data = await client.ModifyInsPublicEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeDeviceCertificate", async function () {
    try {
       const data = await client.DescribeDeviceCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.RegisterDeviceCertificate", async function () {
    try {
       const data = await client.RegisterDeviceCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyInstanceCertBinding", async function () {
    try {
       const data = await client.ModifyInstanceCertBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeInsVPCEndpoints", async function () {
    try {
       const data = await client.DescribeInsVPCEndpoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeClientList", async function () {
    try {
       const data = await client.DescribeClientList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeProductSKUList", async function () {
    try {
       const data = await client.DescribeProductSKUList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeCaCertificates", async function () {
    try {
       const data = await client.DescribeCaCertificates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.UpdateAuthorizationPolicyPriority", async function () {
    try {
       const data = await client.UpdateAuthorizationPolicyPriority({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.CreateTopic", async function () {
    try {
       const data = await client.CreateTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ActivateDeviceCertificate", async function () {
    try {
       const data = await client.ActivateDeviceCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeAuthorizationPolicies", async function () {
    try {
       const data = await client.DescribeAuthorizationPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeTopicList", async function () {
    try {
       const data = await client.DescribeTopicList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteInsPublicEndpoint", async function () {
    try {
       const data = await client.DeleteInsPublicEndpoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeInstanceList", async function () {
    try {
       const data = await client.DescribeInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.RevokedDeviceCertificate", async function () {
    try {
       const data = await client.RevokedDeviceCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeInstance", async function () {
    try {
       const data = await client.DescribeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeCaCertificate", async function () {
    try {
       const data = await client.DescribeCaCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.CreateJWKSAuthenticator", async function () {
    try {
       const data = await client.CreateJWKSAuthenticator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyUser", async function () {
    try {
       const data = await client.ModifyUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteUser", async function () {
    try {
       const data = await client.DeleteUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyAuthorizationPolicy", async function () {
    try {
       const data = await client.ModifyAuthorizationPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteAuthorizationPolicy", async function () {
    try {
       const data = await client.DeleteAuthorizationPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DeleteAuthenticator", async function () {
    try {
       const data = await client.DeleteAuthenticator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.RegisterCaCertificate", async function () {
    try {
       const data = await client.RegisterCaCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeAuthenticator", async function () {
    try {
       const data = await client.DescribeAuthenticator({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ActivateCaCertificate", async function () {
    try {
       const data = await client.ActivateCaCertificate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeMessageList", async function () {
    try {
       const data = await client.DescribeMessageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.DescribeSharedSubscriptionLag", async function () {
    try {
       const data = await client.DescribeSharedSubscriptionLag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ApplyRegistrationCode", async function () {
    try {
       const data = await client.ApplyRegistrationCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.CreateAuthorizationPolicy", async function () {
    try {
       const data = await client.CreateAuthorizationPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mqtt.v20240516.ModifyInstance", async function () {
    try {
       const data = await client.ModifyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
