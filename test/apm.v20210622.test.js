
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.apm.v20210622.Client({
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
describe("apm.v20210622.test.js", function () {

it("apm.v20210622.ModifyApmInstance", async function () {
    try {
       const data = await client.ModifyApmInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeGeneralSpanList", async function () {
    try {
       const data = await client.DescribeGeneralSpanList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeGeneralOTSpanList", async function () {
    try {
       const data = await client.DescribeGeneralOTSpanList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.CreateApmInstance", async function () {
    try {
       const data = await client.CreateApmInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeGeneralApmApplicationConfig", async function () {
    try {
       const data = await client.DescribeGeneralApmApplicationConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.ModifyApmAssociation", async function () {
    try {
       const data = await client.ModifyApmAssociation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.ModifyApmSampleConfig", async function () {
    try {
       const data = await client.ModifyApmSampleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeApmAgent", async function () {
    try {
       const data = await client.DescribeApmAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeGeneralMetricData", async function () {
    try {
       const data = await client.DescribeGeneralMetricData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.CreateApmPrometheusRule", async function () {
    try {
       const data = await client.CreateApmPrometheusRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.TerminateApmInstance", async function () {
    try {
       const data = await client.TerminateApmInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeApmAssociation", async function () {
    try {
       const data = await client.DescribeApmAssociation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeApmServiceMetric", async function () {
    try {
       const data = await client.DescribeApmServiceMetric({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.ModifyApmPrometheusRule", async function () {
    try {
       const data = await client.ModifyApmPrometheusRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.CreateApmSampleConfig", async function () {
    try {
       const data = await client.CreateApmSampleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeApmSampleConfig", async function () {
    try {
       const data = await client.DescribeApmSampleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeTagValues", async function () {
    try {
       const data = await client.DescribeTagValues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeApmPrometheusRule", async function () {
    try {
       const data = await client.DescribeApmPrometheusRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeApmInstances", async function () {
    try {
       const data = await client.DescribeApmInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DeleteApmSampleConfig", async function () {
    try {
       const data = await client.DeleteApmSampleConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.CreateProfileTask", async function () {
    try {
       const data = await client.CreateProfileTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeApmApplicationConfig", async function () {
    try {
       const data = await client.DescribeApmApplicationConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.ModifyGeneralApmApplicationConfig", async function () {
    try {
       const data = await client.ModifyGeneralApmApplicationConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeMetricRecords", async function () {
    try {
       const data = await client.DescribeMetricRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.ModifyApmApplicationConfig", async function () {
    try {
       const data = await client.ModifyApmApplicationConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apm.v20210622.DescribeServiceOverview", async function () {
    try {
       const data = await client.DescribeServiceOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
