
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cdwdoris.v20211228.Client({
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
describe("cdwdoris.v20211228.test.js", function () {

it("cdwdoris.v20211228.ScaleUpInstance", async function () {
    try {
       const data = await client.ScaleUpInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DestroyInstance", async function () {
    try {
       const data = await client.DestroyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceState", async function () {
    try {
       const data = await client.DescribeInstanceState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeDatabaseAuditRecords", async function () {
    try {
       const data = await client.DescribeDatabaseAuditRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeClusterConfigs", async function () {
    try {
       const data = await client.DescribeClusterConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ResizeDisk", async function () {
    try {
       const data = await client.ResizeDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeDatabaseAuditDownload", async function () {
    try {
       const data = await client.DescribeDatabaseAuditDownload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstance", async function () {
    try {
       const data = await client.DescribeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.RestartClusterForNode", async function () {
    try {
       const data = await client.RestartClusterForNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceNodes", async function () {
    try {
       const data = await client.DescribeInstanceNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeSlowQueryRecordsDownload", async function () {
    try {
       const data = await client.DescribeSlowQueryRecordsDownload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceNodesInfo", async function () {
    try {
       const data = await client.DescribeInstanceNodesInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.CreateInstanceNew", async function () {
    try {
       const data = await client.CreateInstanceNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ScaleOutInstance", async function () {
    try {
       const data = await client.ScaleOutInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyInstance", async function () {
    try {
       const data = await client.ModifyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeSlowQueryRecords", async function () {
    try {
       const data = await client.DescribeSlowQueryRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
