
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dts.v20180330.Client({
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
describe("dts.v20180330.test.js", function () {

it("dts.v20180330.ActivateSubscribe", async function () {
    try {
       const data = await client.ActivateSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.ModifySubscribeObjects", async function () {
    try {
       const data = await client.ModifySubscribeObjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.DescribeMigrateCheckJob", async function () {
    try {
       const data = await client.DescribeMigrateCheckJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.DescribeAsyncRequestInfo", async function () {
    try {
       const data = await client.DescribeAsyncRequestInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.ModifySubscribeAutoRenewFlag", async function () {
    try {
       const data = await client.ModifySubscribeAutoRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.StopMigrateJob", async function () {
    try {
       const data = await client.StopMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.DescribeRegionConf", async function () {
    try {
       const data = await client.DescribeRegionConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.DescribeMigrateJobs", async function () {
    try {
       const data = await client.DescribeMigrateJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.DescribeSubscribes", async function () {
    try {
       const data = await client.DescribeSubscribes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.CreateMigrateJob", async function () {
    try {
       const data = await client.CreateMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.ModifySubscribeVipVport", async function () {
    try {
       const data = await client.ModifySubscribeVipVport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.CreateMigrateCheckJob", async function () {
    try {
       const data = await client.CreateMigrateCheckJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.ModifySubscribeConsumeTime", async function () {
    try {
       const data = await client.ModifySubscribeConsumeTime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.ModifySubscribeName", async function () {
    try {
       const data = await client.ModifySubscribeName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.CreateSubscribe", async function () {
    try {
       const data = await client.CreateSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.ResetSubscribe", async function () {
    try {
       const data = await client.ResetSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.StartMigrateJob", async function () {
    try {
       const data = await client.StartMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.ModifyMigrateJob", async function () {
    try {
       const data = await client.ModifyMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.OfflineIsolatedSubscribe", async function () {
    try {
       const data = await client.OfflineIsolatedSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.IsolateSubscribe", async function () {
    try {
       const data = await client.IsolateSubscribe({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.DescribeSubscribeConf", async function () {
    try {
       const data = await client.DescribeSubscribeConf({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.DeleteMigrateJob", async function () {
    try {
       const data = await client.DeleteMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dts.v20180330.CompleteMigrateJob", async function () {
    try {
       const data = await client.CompleteMigrateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
