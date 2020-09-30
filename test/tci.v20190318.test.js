
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tci.v20190318.Client({
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
describe("tci.v20190318.test.js", function () {

it("tci.v20190318.SubmitOpenClassTask", async function () {
    try {
       const data = await client.SubmitOpenClassTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitCheckAttendanceTaskPlus", async function () {
    try {
       const data = await client.SubmitCheckAttendanceTaskPlus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.CreateLibrary", async function () {
    try {
       const data = await client.CreateLibrary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitAudioTask", async function () {
    try {
       const data = await client.SubmitAudioTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.CreateFace", async function () {
    try {
       const data = await client.CreateFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.ModifyPerson", async function () {
    try {
       const data = await client.ModifyPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeImageTaskStatistic", async function () {
    try {
       const data = await client.DescribeImageTaskStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.AIAssistant", async function () {
    try {
       const data = await client.AIAssistant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.ModifyLibrary", async function () {
    try {
       const data = await client.ModifyLibrary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitDoubleVideoHighlights", async function () {
    try {
       const data = await client.SubmitDoubleVideoHighlights({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribePersons", async function () {
    try {
       const data = await client.DescribePersons({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitConversationTask", async function () {
    try {
       const data = await client.SubmitConversationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeHighlightResult", async function () {
    try {
       const data = await client.DescribeHighlightResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitTraditionalClassTask", async function () {
    try {
       const data = await client.SubmitTraditionalClassTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeAITaskResult", async function () {
    try {
       const data = await client.DescribeAITaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DeletePerson", async function () {
    try {
       const data = await client.DeletePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeLibraries", async function () {
    try {
       const data = await client.DescribeLibraries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.CancelTask", async function () {
    try {
       const data = await client.CancelTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitHighlights", async function () {
    try {
       const data = await client.SubmitHighlights({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeVocabLib", async function () {
    try {
       const data = await client.DescribeVocabLib({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.CreateVocab", async function () {
    try {
       const data = await client.CreateVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitOneByOneClassTask", async function () {
    try {
       const data = await client.SubmitOneByOneClassTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitPartialBodyClassTask", async function () {
    try {
       const data = await client.SubmitPartialBodyClassTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitCheckAttendanceTask", async function () {
    try {
       const data = await client.SubmitCheckAttendanceTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.CreatePerson", async function () {
    try {
       const data = await client.CreatePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeConversationTask", async function () {
    try {
       const data = await client.DescribeConversationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DeleteLibrary", async function () {
    try {
       const data = await client.DeleteLibrary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeImageTask", async function () {
    try {
       const data = await client.DescribeImageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitImageTask", async function () {
    try {
       const data = await client.SubmitImageTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeAttendanceResult", async function () {
    try {
       const data = await client.DescribeAttendanceResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitImageTaskPlus", async function () {
    try {
       const data = await client.SubmitImageTaskPlus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.CreateVocabLib", async function () {
    try {
       const data = await client.CreateVocabLib({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DeleteVocab", async function () {
    try {
       const data = await client.DeleteVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.SubmitFullBodyClassTask", async function () {
    try {
       const data = await client.SubmitFullBodyClassTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.CheckFacePhoto", async function () {
    try {
       const data = await client.CheckFacePhoto({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeVocab", async function () {
    try {
       const data = await client.DescribeVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DeleteVocabLib", async function () {
    try {
       const data = await client.DeleteVocabLib({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribePerson", async function () {
    try {
       const data = await client.DescribePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DeleteFace", async function () {
    try {
       const data = await client.DeleteFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.DescribeAudioTask", async function () {
    try {
       const data = await client.DescribeAudioTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tci.v20190318.TransmitAudioStream", async function () {
    try {
       const data = await client.TransmitAudioStream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
