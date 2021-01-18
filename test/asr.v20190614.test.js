
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.asr.v20190614.Client({
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
describe("asr.v20190614.test.js", function () {

it("asr.v20190614.CloseAsyncRecognitionTask", async function () {
    try {
       const data = await client.CloseAsyncRecognitionTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.GetAsrVocabList", async function () {
    try {
       const data = await client.GetAsrVocabList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DownloadAsrVocab", async function () {
    try {
       const data = await client.DownloadAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.CreateRecTask", async function () {
    try {
       const data = await client.CreateRecTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.GetAsrVocab", async function () {
    try {
       const data = await client.GetAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DescribeTaskStatus", async function () {
    try {
       const data = await client.DescribeTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.ModifyCustomizationState", async function () {
    try {
       const data = await client.ModifyCustomizationState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.UpdateAsrVocab", async function () {
    try {
       const data = await client.UpdateAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.SetVocabState", async function () {
    try {
       const data = await client.SetVocabState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.CreateAsyncRecognitionTask", async function () {
    try {
       const data = await client.CreateAsyncRecognitionTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.CreateAsrVocab", async function () {
    try {
       const data = await client.CreateAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DeleteCustomization", async function () {
    try {
       const data = await client.DeleteCustomization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.CreateCustomization", async function () {
    try {
       const data = await client.CreateCustomization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DescribeAsyncRecognitionTasks", async function () {
    try {
       const data = await client.DescribeAsyncRecognitionTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.GetCustomizationList", async function () {
    try {
       const data = await client.GetCustomizationList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DeleteAsrVocab", async function () {
    try {
       const data = await client.DeleteAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.ModifyCustomization", async function () {
    try {
       const data = await client.ModifyCustomization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.SentenceRecognition", async function () {
    try {
       const data = await client.SentenceRecognition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DownloadCustomization", async function () {
    try {
       const data = await client.DownloadCustomization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
