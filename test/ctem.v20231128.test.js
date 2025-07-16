
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ctem.v20231128.Client({
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
describe("ctem.v20231128.test.js", function () {

it("ctem.v20231128.DescribeNetDisks", async function () {
    try {
       const data = await client.DescribeNetDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeManages", async function () {
    try {
       const data = await client.DescribeManages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeLeakageDatas", async function () {
    try {
       const data = await client.DescribeLeakageDatas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.ModifyCustomer", async function () {
    try {
       const data = await client.ModifyCustomer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeDomains", async function () {
    try {
       const data = await client.DescribeDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeVuls", async function () {
    try {
       const data = await client.DescribeVuls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeConfigs", async function () {
    try {
       const data = await client.DescribeConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeWechatApplets", async function () {
    try {
       const data = await client.DescribeWechatApplets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeFakeWebsites", async function () {
    try {
       const data = await client.DescribeFakeWebsites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeSensitiveInfos", async function () {
    try {
       const data = await client.DescribeSensitiveInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeFakeMiniPrograms", async function () {
    try {
       const data = await client.DescribeFakeMiniPrograms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeSubDomains", async function () {
    try {
       const data = await client.DescribeSubDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeFakeWechatOfficials", async function () {
    try {
       const data = await client.DescribeFakeWechatOfficials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeLeakageEmails", async function () {
    try {
       const data = await client.DescribeLeakageEmails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeFakeApps", async function () {
    try {
       const data = await client.DescribeFakeApps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeApps", async function () {
    try {
       const data = await client.DescribeApps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeCustomers", async function () {
    try {
       const data = await client.DescribeCustomers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeJobRecordDetails", async function () {
    try {
       const data = await client.DescribeJobRecordDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeSuspiciousAssets", async function () {
    try {
       const data = await client.DescribeSuspiciousAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeGithubs", async function () {
    try {
       const data = await client.DescribeGithubs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribePorts", async function () {
    try {
       const data = await client.DescribePorts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.CreateJobRecord", async function () {
    try {
       const data = await client.CreateJobRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeHttps", async function () {
    try {
       const data = await client.DescribeHttps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeAssets", async function () {
    try {
       const data = await client.DescribeAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeDarkWebs", async function () {
    try {
       const data = await client.DescribeDarkWebs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeLeakageCodes", async function () {
    try {
       const data = await client.DescribeLeakageCodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeWechatOfficialAccounts", async function () {
    try {
       const data = await client.DescribeWechatOfficialAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeEnterprises", async function () {
    try {
       const data = await client.DescribeEnterprises({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.CreateCustomer", async function () {
    try {
       const data = await client.CreateCustomer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.StopJobRecord", async function () {
    try {
       const data = await client.StopJobRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeJobRecords", async function () {
    try {
       const data = await client.DescribeJobRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ctem.v20231128.DescribeWeakPasswords", async function () {
    try {
       const data = await client.DescribeWeakPasswords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
