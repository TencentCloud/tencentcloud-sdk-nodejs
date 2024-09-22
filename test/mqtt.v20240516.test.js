
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

it("mqtt.v20240516.DescribeInstance", async function () {
    try {
       const data = await client.DescribeInstance({})
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

it("mqtt.v20240516.RegisterDeviceCertificate", async function () {
    try {
       const data = await client.RegisterDeviceCertificate({})
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

it("mqtt.v20240516.ModifyTopic", async function () {
    try {
       const data = await client.ModifyTopic({})
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

it("mqtt.v20240516.DescribeInstanceList", async function () {
    try {
       const data = await client.DescribeInstanceList({})
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

it("mqtt.v20240516.DescribeTopic", async function () {
    try {
       const data = await client.DescribeTopic({})
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

it("mqtt.v20240516.CreateJWTAuthenticator", async function () {
    try {
       const data = await client.CreateJWTAuthenticator({})
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

it("mqtt.v20240516.ModifyJWTAuthenticator", async function () {
    try {
       const data = await client.ModifyJWTAuthenticator({})
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

it("mqtt.v20240516.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
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

it("mqtt.v20240516.ModifyJWKSAuthenticator", async function () {
    try {
       const data = await client.ModifyJWKSAuthenticator({})
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

})
