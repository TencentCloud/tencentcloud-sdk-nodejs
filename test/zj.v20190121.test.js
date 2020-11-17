
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.zj.v20190121.Client({
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
describe("zj.v20190121.test.js", function () {

it("zj.v20190121.DescribeMmsInstanceList", async function () {
    try {
       const data = await client.DescribeMmsInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.DelCrowdPack", async function () {
    try {
       const data = await client.DelCrowdPack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.DelTemplate", async function () {
    try {
       const data = await client.DelTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.AddCrowdPackInfo", async function () {
    try {
       const data = await client.AddCrowdPackInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.AddSmsSign", async function () {
    try {
       const data = await client.AddSmsSign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.DeleteMmsInstance", async function () {
    try {
       const data = await client.DeleteMmsInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.GetCrowdPackList", async function () {
    try {
       const data = await client.GetCrowdPackList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.AddSmsTemplate", async function () {
    try {
       const data = await client.AddSmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.SendSms", async function () {
    try {
       const data = await client.SendSms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.GetSmsCampaignStatus", async function () {
    try {
       const data = await client.GetSmsCampaignStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.DescribeSmsSignList", async function () {
    try {
       const data = await client.DescribeSmsSignList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.DescribeSmsTemplateList", async function () {
    try {
       const data = await client.DescribeSmsTemplateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.DescribeSmsCampaignStatistics", async function () {
    try {
       const data = await client.DescribeSmsCampaignStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.CreateMmsInstance", async function () {
    try {
       const data = await client.CreateMmsInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.DescribeMmsInstanceInfo", async function () {
    try {
       const data = await client.DescribeMmsInstanceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.CancelCampaign", async function () {
    try {
       const data = await client.CancelCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.GetSmsAmountInfo", async function () {
    try {
       const data = await client.GetSmsAmountInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.PushMmsContent", async function () {
    try {
       const data = await client.PushMmsContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.CreateCampaign", async function () {
    try {
       const data = await client.CreateCampaign({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.GetCrowdUploadInfo", async function () {
    try {
       const data = await client.GetCrowdUploadInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("zj.v20190121.ModifySmsTemplate", async function () {
    try {
       const data = await client.ModifySmsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
