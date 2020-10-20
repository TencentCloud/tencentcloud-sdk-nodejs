
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cmq.v20190304.Client({
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
describe("cmq.v20190304.test.js", function () {

it("cmq.v20190304.CreateTopic", async function () {
    try {
       const data = await client.CreateTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.CreateSubscribe", async function () {
    try {
       const data = await client.CreateSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.ModifyTopicAttribute", async function () {
    try {
       const data = await client.ModifyTopicAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.ClearSubscriptionFilterTags", async function () {
    try {
       const data = await client.ClearSubscriptionFilterTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.DeleteSubscribe", async function () {
    try {
       const data = await client.DeleteSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.CreateQueue", async function () {
    try {
       const data = await client.CreateQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.RewindQueue", async function () {
    try {
       const data = await client.RewindQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.ModifySubscriptionAttribute", async function () {
    try {
       const data = await client.ModifySubscriptionAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.DescribeTopicDetail", async function () {
    try {
       const data = await client.DescribeTopicDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.DescribeQueueDetail", async function () {
    try {
       const data = await client.DescribeQueueDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.DeleteQueue", async function () {
    try {
       const data = await client.DeleteQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.DescribeSubscriptionDetail", async function () {
    try {
       const data = await client.DescribeSubscriptionDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.DescribeDeadLetterSourceQueues", async function () {
    try {
       const data = await client.DescribeDeadLetterSourceQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.ClearQueue", async function () {
    try {
       const data = await client.ClearQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.UnbindDeadLetter", async function () {
    try {
       const data = await client.UnbindDeadLetter({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cmq.v20190304.ModifyQueueAttribute", async function () {
    try {
       const data = await client.ModifyQueueAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
