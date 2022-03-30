
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

it("nlp.v20190408.DescribeDict", async function () {
    try {
       const data = await client.DescribeDict({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.SearchWordItems", async function () {
    try {
       const data = await client.SearchWordItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.DeleteWordItems", async function () {
    try {
       const data = await client.DeleteWordItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.UpdateDict", async function () {
    try {
       const data = await client.UpdateDict({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.DependencyParsing", async function () {
    try {
       const data = await client.DependencyParsing({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.WordEmbedding", async function () {
    try {
       const data = await client.WordEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.DescribeDicts", async function () {
    try {
       const data = await client.DescribeDicts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.CreateDict", async function () {
    try {
       const data = await client.CreateDict({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.TextClassification", async function () {
    try {
       const data = await client.TextClassification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.WordSimilarity", async function () {
    try {
       const data = await client.WordSimilarity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.SentenceEmbedding", async function () {
    try {
       const data = await client.SentenceEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.DescribeWordItems", async function () {
    try {
       const data = await client.DescribeWordItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.TextCorrection", async function () {
    try {
       const data = await client.TextCorrection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.CreateWordItems", async function () {
    try {
       const data = await client.CreateWordItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.TextSimilarityPro", async function () {
    try {
       const data = await client.TextSimilarityPro({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.TextSimilarity", async function () {
    try {
       const data = await client.TextSimilarity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.SentimentAnalysis", async function () {
    try {
       const data = await client.SentimentAnalysis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.ChatBot", async function () {
    try {
       const data = await client.ChatBot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.LexicalAnalysis", async function () {
    try {
       const data = await client.LexicalAnalysis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.KeywordsExtraction", async function () {
    try {
       const data = await client.KeywordsExtraction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.TextCorrectionPro", async function () {
    try {
       const data = await client.TextCorrectionPro({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.DeleteDict", async function () {
    try {
       const data = await client.DeleteDict({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.SimilarWords", async function () {
    try {
       const data = await client.SimilarWords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("nlp.v20190408.AutoSummarization", async function () {
    try {
       const data = await client.AutoSummarization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
