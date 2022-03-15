
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ses.v20201002.Client({
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
describe("ses.v20201002.test.js", function () {

it("ses.v20201002.ListEmailIdentities", async function () {
    try {
       const data = await client.ListEmailIdentities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.CreateEmailAddress", async function () {
    try {
       const data = await client.CreateEmailAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.CreateReceiverDetailWithData", async function () {
    try {
       const data = await client.CreateReceiverDetailWithData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.GetSendEmailStatus", async function () {
    try {
       const data = await client.GetSendEmailStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.CreateReceiver", async function () {
    try {
       const data = await client.CreateReceiver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.GetEmailIdentity", async function () {
    try {
       const data = await client.GetEmailIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.GetEmailTemplate", async function () {
    try {
       const data = await client.GetEmailTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.GetStatisticsReport", async function () {
    try {
       const data = await client.GetStatisticsReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.UpdateEmailTemplate", async function () {
    try {
       const data = await client.UpdateEmailTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.UpdateEmailIdentity", async function () {
    try {
       const data = await client.UpdateEmailIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.DeleteEmailIdentity", async function () {
    try {
       const data = await client.DeleteEmailIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.ListEmailAddress", async function () {
    try {
       const data = await client.ListEmailAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.DeleteReceiver", async function () {
    try {
       const data = await client.DeleteReceiver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.CreateEmailTemplate", async function () {
    try {
       const data = await client.CreateEmailTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.BatchSendEmail", async function () {
    try {
       const data = await client.BatchSendEmail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.DeleteEmailTemplate", async function () {
    try {
       const data = await client.DeleteEmailTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.ListEmailTemplates", async function () {
    try {
       const data = await client.ListEmailTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.ListSendTasks", async function () {
    try {
       const data = await client.ListSendTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.CreateEmailIdentity", async function () {
    try {
       const data = await client.CreateEmailIdentity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.DeleteBlackList", async function () {
    try {
       const data = await client.DeleteBlackList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.SendEmail", async function () {
    try {
       const data = await client.SendEmail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.ListBlackEmailAddress", async function () {
    try {
       const data = await client.ListBlackEmailAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.CreateReceiverDetail", async function () {
    try {
       const data = await client.CreateReceiverDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.ListReceivers", async function () {
    try {
       const data = await client.ListReceivers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ses.v20201002.DeleteEmailAddress", async function () {
    try {
       const data = await client.DeleteEmailAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
