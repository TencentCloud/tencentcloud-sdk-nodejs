
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.sms.v20210111.Client({
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
describe("sms.v20210111.test.js", function () {

it("sms.v20210111.ModifySmsSign", async function () {
    try {
       const data = await client.ModifySmsSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.AddSmsSign", async function () {
    try {
       const data = await client.AddSmsSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.PullSmsSendStatus", async function () {
    try {
       const data = await client.PullSmsSendStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.SendSms", async function () {
    try {
       const data = await client.SendSms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.DeleteSmsTemplate", async function () {
    try {
       const data = await client.DeleteSmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.SmsPackagesStatistics", async function () {
    try {
       const data = await client.SmsPackagesStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.SendStatusStatistics", async function () {
    try {
       const data = await client.SendStatusStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.CallbackStatusStatistics", async function () {
    try {
       const data = await client.CallbackStatusStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.DescribeSmsTemplateList", async function () {
    try {
       const data = await client.DescribeSmsTemplateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.PullSmsReplyStatus", async function () {
    try {
       const data = await client.PullSmsReplyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.DescribeSmsSignList", async function () {
    try {
       const data = await client.DescribeSmsSignList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.PullSmsSendStatusByPhoneNumber", async function () {
    try {
       const data = await client.PullSmsSendStatusByPhoneNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.ModifySmsTemplate", async function () {
    try {
       const data = await client.ModifySmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.PullSmsReplyStatusByPhoneNumber", async function () {
    try {
       const data = await client.PullSmsReplyStatusByPhoneNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.DescribePhoneNumberInfo", async function () {
    try {
       const data = await client.DescribePhoneNumberInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.DeleteSmsSign", async function () {
    try {
       const data = await client.DeleteSmsSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("sms.v20210111.AddSmsTemplate", async function () {
    try {
       const data = await client.AddSmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
