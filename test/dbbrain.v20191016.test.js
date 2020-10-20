
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dbbrain.v20191016.Client({
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
describe("dbbrain.v20191016.test.js", function () {

it("dbbrain.v20191016.DescribeTopSpaceTableTimeSeries", async function () {
    try {
       const data = await client.DescribeTopSpaceTableTimeSeries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeSlowLogTimeSeriesStats", async function () {
    try {
       const data = await client.DescribeSlowLogTimeSeriesStats({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDBDiagHistory", async function () {
    try {
       const data = await client.DescribeDBDiagHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDBSpaceStatus", async function () {
    try {
       const data = await client.DescribeDBSpaceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeDBDiagEvent", async function () {
    try {
       const data = await client.DescribeDBDiagEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeTopSpaceTables", async function () {
    try {
       const data = await client.DescribeTopSpaceTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dbbrain.v20191016.DescribeSlowLogTopSqls", async function () {
    try {
       const data = await client.DescribeSlowLogTopSqls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
