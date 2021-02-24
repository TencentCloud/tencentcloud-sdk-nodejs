
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cr.v20180321.Client({
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
describe("cr.v20180321.test.js", function () {

it("cr.v20180321.UploadFile", async function () {
    try {
       const data = await client.UploadFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.QueryBotList", async function () {
    try {
       const data = await client.QueryBotList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DescribeBotFlow", async function () {
    try {
       const data = await client.DescribeBotFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.QueryRecordList", async function () {
    try {
       const data = await client.QueryRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.QueryInstantData", async function () {
    try {
       const data = await client.QueryInstantData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.UpdateBotTask", async function () {
    try {
       const data = await client.UpdateBotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.UploadBotData", async function () {
    try {
       const data = await client.UploadBotData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.QueryBlackListData", async function () {
    try {
       const data = await client.QueryBlackListData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DescribeRecords", async function () {
    try {
       const data = await client.DescribeRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.ExportBotData", async function () {
    try {
       const data = await client.ExportBotData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DownloadDialogueText", async function () {
    try {
       const data = await client.DownloadDialogueText({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.UploadBotFile", async function () {
    try {
       const data = await client.UploadBotFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DescribeFileModel", async function () {
    try {
       const data = await client.DescribeFileModel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.ChangeBotCallStatus", async function () {
    try {
       const data = await client.ChangeBotCallStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.ApplyBlackList", async function () {
    try {
       const data = await client.ApplyBlackList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.ChangeBotTaskStatus", async function () {
    try {
       const data = await client.ChangeBotTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DescribeCreditResult", async function () {
    try {
       const data = await client.DescribeCreditResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DescribeTaskStatus", async function () {
    try {
       const data = await client.DescribeTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.ApplyBlackListData", async function () {
    try {
       const data = await client.ApplyBlackListData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.QueryProducts", async function () {
    try {
       const data = await client.QueryProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DownloadRecordList", async function () {
    try {
       const data = await client.DownloadRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.UploadDataJson", async function () {
    try {
       const data = await client.UploadDataJson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.ApplyCreditAudit", async function () {
    try {
       const data = await client.ApplyCreditAudit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DownloadReport", async function () {
    try {
       const data = await client.DownloadReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.DownloadBotRecord", async function () {
    try {
       const data = await client.DownloadBotRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.UploadDataFile", async function () {
    try {
       const data = await client.UploadDataFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.CreateBotTask", async function () {
    try {
       const data = await client.CreateBotTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cr.v20180321.QueryCallList", async function () {
    try {
       const data = await client.QueryCallList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
