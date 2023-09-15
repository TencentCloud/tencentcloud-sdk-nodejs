
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.nlp.v20190408.Client({
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
describe("nlp.v20190408.test.js", function () {

it("nlp.v20190408.TextEmbellish", async function () {
    try {
       const data = await client.TextEmbellish({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.ClassifyContent", async function () {
    try {
       const data = await client.ClassifyContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.SentenceCorrection", async function () {
    try {
       const data = await client.SentenceCorrection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.ComposePoetry", async function () {
    try {
       const data = await client.ComposePoetry({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.RetrieveSimilarWords", async function () {
    try {
       const data = await client.RetrieveSimilarWords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.EvaluateSentenceSimilarity", async function () {
    try {
       const data = await client.EvaluateSentenceSimilarity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.GenerateKeywordSentence", async function () {
    try {
       const data = await client.GenerateKeywordSentence({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.TextWriting", async function () {
    try {
       const data = await client.TextWriting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.EvaluateWordSimilarity", async function () {
    try {
       const data = await client.EvaluateWordSimilarity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.ComposeCouplet", async function () {
    try {
       const data = await client.ComposeCouplet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.AnalyzeSentiment", async function () {
    try {
       const data = await client.AnalyzeSentiment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.ParseWords", async function () {
    try {
       const data = await client.ParseWords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
