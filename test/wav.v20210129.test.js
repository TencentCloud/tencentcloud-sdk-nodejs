
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.wav.v20210129.Client({
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
describe("wav.v20210129.test.js", function () {

it("wav.v20210129.QueryActivityLiveCodeList", async function () {
    try {
       const data = await client.QueryActivityLiveCodeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryActivityList", async function () {
    try {
       const data = await client.QueryActivityList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryCustomerEventDetailStatistics", async function () {
    try {
       const data = await client.QueryCustomerEventDetailStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryActivityJoinList", async function () {
    try {
       const data = await client.QueryActivityJoinList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryChannelCodeList", async function () {
    try {
       const data = await client.QueryChannelCodeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryExternalContactList", async function () {
    try {
       const data = await client.QueryExternalContactList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryUserInfoList", async function () {
    try {
       const data = await client.QueryUserInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryExternalUserEventList", async function () {
    try {
       const data = await client.QueryExternalUserEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryLicenseInfo", async function () {
    try {
       const data = await client.QueryLicenseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryClueInfoList", async function () {
    try {
       const data = await client.QueryClueInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryExternalContactDetail", async function () {
    try {
       const data = await client.QueryExternalContactDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.CreateLead", async function () {
    try {
       const data = await client.CreateLead({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryStaffEventDetailStatistics", async function () {
    try {
       const data = await client.QueryStaffEventDetailStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryVehicleInfoList", async function () {
    try {
       const data = await client.QueryVehicleInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryChatArchivingList", async function () {
    try {
       const data = await client.QueryChatArchivingList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.CreateCorpTag", async function () {
    try {
       const data = await client.CreateCorpTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryCrmStatistics", async function () {
    try {
       const data = await client.QueryCrmStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryMaterialList", async function () {
    try {
       const data = await client.QueryMaterialList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.CreateChannelCode", async function () {
    try {
       const data = await client.CreateChannelCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryMiniAppCodeList", async function () {
    try {
       const data = await client.QueryMiniAppCodeList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryDealerInfoList", async function () {
    try {
       const data = await client.QueryDealerInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("wav.v20210129.QueryExternalUserMappingInfo", async function () {
    try {
       const data = await client.QueryExternalUserMappingInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
