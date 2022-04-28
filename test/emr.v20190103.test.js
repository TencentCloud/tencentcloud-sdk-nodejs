
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.emr.v20190103.Client({
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
describe("emr.v20190103.test.js", function () {

it("emr.v20190103.DescribeInstanceRenewNodes", async function () {
    try {
       const data = await client.DescribeInstanceRenewNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.TerminateTasks", async function () {
    try {
       const data = await client.TerminateTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceUpdateInstance", async function () {
    try {
       const data = await client.InquiryPriceUpdateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeClusterNodes", async function () {
    try {
       const data = await client.DescribeClusterNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyResourceScheduler", async function () {
    try {
       const data = await client.ModifyResourceScheduler({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceRenewInstance", async function () {
    try {
       const data = await client.InquiryPriceRenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyResourcePools", async function () {
    try {
       const data = await client.ModifyResourcePools({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceCreateInstance", async function () {
    try {
       const data = await client.InquiryPriceCreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquirePriceRenewEmr", async function () {
    try {
       const data = await client.InquirePriceRenewEmr({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeResourceSchedule", async function () {
    try {
       const data = await client.DescribeResourceSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.InquiryPriceScaleOutInstance", async function () {
    try {
       const data = await client.InquiryPriceScaleOutInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ModifyResourceScheduleConfig", async function () {
    try {
       const data = await client.ModifyResourceScheduleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeJobFlow", async function () {
    try {
       const data = await client.DescribeJobFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.DescribeCvmQuota", async function () {
    try {
       const data = await client.DescribeCvmQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.SyncPodState", async function () {
    try {
       const data = await client.SyncPodState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.ScaleOutInstance", async function () {
    try {
       const data = await client.ScaleOutInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.RunJobFlow", async function () {
    try {
       const data = await client.RunJobFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("emr.v20190103.TerminateInstance", async function () {
    try {
       const data = await client.TerminateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
