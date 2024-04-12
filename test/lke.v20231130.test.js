
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.lke.v20231130.Client({
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
describe("lke.v20231130.test.js", function () {

it("lke.v20231130.ListDoc", async function () {
    try {
       const data = await client.ListDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListUnsatisfiedReply", async function () {
    try {
       const data = await client.ListUnsatisfiedReply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DeleteAttributeLabel", async function () {
    try {
       const data = await client.DeleteAttributeLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.SaveDoc", async function () {
    try {
       const data = await client.SaveDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CreateRejectedQuestion", async function () {
    try {
       const data = await client.CreateRejectedQuestion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CheckAttributeLabelExist", async function () {
    try {
       const data = await client.CheckAttributeLabelExist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyQAAttrRange", async function () {
    try {
       const data = await client.ModifyQAAttrRange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeDoc", async function () {
    try {
       const data = await client.DescribeDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DeleteRejectedQuestion", async function () {
    try {
       const data = await client.DeleteRejectedQuestion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListSelectDoc", async function () {
    try {
       const data = await client.ListSelectDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.QueryRewrite", async function () {
    try {
       const data = await client.QueryRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyQA", async function () {
    try {
       const data = await client.ModifyQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyDocAttrRange", async function () {
    try {
       const data = await client.ModifyDocAttrRange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeStorageCredential", async function () {
    try {
       const data = await client.DescribeStorageCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CreateRelease", async function () {
    try {
       const data = await client.CreateRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GetEmbedding", async function () {
    try {
       const data = await client.GetEmbedding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.RetryDocAudit", async function () {
    try {
       const data = await client.RetryDocAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GetAppSecret", async function () {
    try {
       const data = await client.GetAppSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyAttributeLabel", async function () {
    try {
       const data = await client.ModifyAttributeLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListRelease", async function () {
    try {
       const data = await client.ListRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.RateMsgRecord", async function () {
    try {
       const data = await client.RateMsgRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListQA", async function () {
    try {
       const data = await client.ListQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DeleteQA", async function () {
    try {
       const data = await client.DeleteQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeRobotBizIDByAppKey", async function () {
    try {
       const data = await client.DescribeRobotBizIDByAppKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListReleaseQAPreview", async function () {
    try {
       const data = await client.ListReleaseQAPreview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ExportQAList", async function () {
    try {
       const data = await client.ExportQAList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyQACate", async function () {
    try {
       const data = await client.ModifyQACate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DeleteApp", async function () {
    try {
       const data = await client.DeleteApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyApp", async function () {
    try {
       const data = await client.ModifyApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.StopDocParse", async function () {
    try {
       const data = await client.StopDocParse({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyRejectedQuestion", async function () {
    try {
       const data = await client.ModifyRejectedQuestion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CheckAttributeLabelRefer", async function () {
    try {
       const data = await client.CheckAttributeLabelRefer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeCorp", async function () {
    try {
       const data = await client.DescribeCorp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CreateAttributeLabel", async function () {
    try {
       const data = await client.CreateAttributeLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeUnsatisfiedReplyContext", async function () {
    try {
       const data = await client.DescribeUnsatisfiedReplyContext({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.UploadAttributeLabel", async function () {
    try {
       const data = await client.UploadAttributeLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListApp", async function () {
    try {
       const data = await client.ListApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GetDocPreview", async function () {
    try {
       const data = await client.GetDocPreview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListReleaseDocPreview", async function () {
    try {
       const data = await client.ListReleaseDocPreview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CreateCorp", async function () {
    try {
       const data = await client.CreateCorp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeAttributeLabel", async function () {
    try {
       const data = await client.DescribeAttributeLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeRelease", async function () {
    try {
       const data = await client.DescribeRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeQA", async function () {
    try {
       const data = await client.DescribeQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.RetryDocParse", async function () {
    try {
       const data = await client.RetryDocParse({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeReleaseInfo", async function () {
    try {
       const data = await client.DescribeReleaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CreateQA", async function () {
    try {
       const data = await client.CreateQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.QueryParseDocResult", async function () {
    try {
       const data = await client.QueryParseDocResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListAttributeLabel", async function () {
    try {
       const data = await client.ListAttributeLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListQACate", async function () {
    try {
       const data = await client.ListQACate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GetAppKnowledgeCount", async function () {
    try {
       const data = await client.GetAppKnowledgeCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GenerateQA", async function () {
    try {
       const data = await client.GenerateQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListAppCategory", async function () {
    try {
       const data = await client.ListAppCategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeApp", async function () {
    try {
       const data = await client.DescribeApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CreateApp", async function () {
    try {
       const data = await client.CreateApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.IsTransferIntent", async function () {
    try {
       const data = await client.IsTransferIntent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListRejectedQuestionPreview", async function () {
    try {
       const data = await client.ListRejectedQuestionPreview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GetMsgRecord", async function () {
    try {
       const data = await client.GetMsgRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ModifyDoc", async function () {
    try {
       const data = await client.ModifyDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ParseDoc", async function () {
    try {
       const data = await client.ParseDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GetWsToken", async function () {
    try {
       const data = await client.GetWsToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DeleteDoc", async function () {
    try {
       const data = await client.DeleteDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListModel", async function () {
    try {
       const data = await client.ListModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.VerifyQA", async function () {
    try {
       const data = await client.VerifyQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GroupQA", async function () {
    try {
       const data = await client.GroupQA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListRejectedQuestion", async function () {
    try {
       const data = await client.ListRejectedQuestion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ListReleaseConfigPreview", async function () {
    try {
       const data = await client.ListReleaseConfigPreview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.GetTaskStatus", async function () {
    try {
       const data = await client.GetTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DeleteQACate", async function () {
    try {
       const data = await client.DeleteQACate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.CreateQACate", async function () {
    try {
       const data = await client.CreateQACate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ExportUnsatisfiedReply", async function () {
    try {
       const data = await client.ExportUnsatisfiedReply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ResetSession", async function () {
    try {
       const data = await client.ResetSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.ExportAttributeLabel", async function () {
    try {
       const data = await client.ExportAttributeLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.RetryRelease", async function () {
    try {
       const data = await client.RetryRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.DescribeRefer", async function () {
    try {
       const data = await client.DescribeRefer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lke.v20231130.IgnoreUnsatisfiedReply", async function () {
    try {
       const data = await client.IgnoreUnsatisfiedReply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
