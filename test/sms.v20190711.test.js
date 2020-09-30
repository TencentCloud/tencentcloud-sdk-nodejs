
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.sms.v20190711.Client({
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
describe("sms.v20190711.test.js", function () {

it("sms.v20190711.ModifySmsSign", async function () {
    try {
       const data = await client.ModifySmsSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.AddSmsSign", async function () {
    try {
       const data = await client.AddSmsSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.PullSmsSendStatus", async function () {
    try {
       const data = await client.PullSmsSendStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.SendSms", async function () {
    try {
       const data = await client.SendSms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.DeleteSmsTemplate", async function () {
    try {
       const data = await client.DeleteSmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.SmsPackagesStatistics", async function () {
    try {
       const data = await client.SmsPackagesStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.SendStatusStatistics", async function () {
    try {
       const data = await client.SendStatusStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.CallbackStatusStatistics", async function () {
    try {
       const data = await client.CallbackStatusStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.DescribeSmsTemplateList", async function () {
    try {
       const data = await client.DescribeSmsTemplateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.PullSmsReplyStatus", async function () {
    try {
       const data = await client.PullSmsReplyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.DescribeSmsSignList", async function () {
    try {
       const data = await client.DescribeSmsSignList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.PullSmsSendStatusByPhoneNumber", async function () {
    try {
       const data = await client.PullSmsSendStatusByPhoneNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.ModifySmsTemplate", async function () {
    try {
       const data = await client.ModifySmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.PullSmsReplyStatusByPhoneNumber", async function () {
    try {
       const data = await client.PullSmsReplyStatusByPhoneNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.DeleteSmsSign", async function () {
    try {
       const data = await client.DeleteSmsSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20190711.AddSmsTemplate", async function () {
    try {
       const data = await client.AddSmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
