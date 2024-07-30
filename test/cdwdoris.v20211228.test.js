
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

it("cdwdoris.v20211228.DestroyInstance", async function () {
    try {
       const data = await client.DestroyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeSqlApis", async function () {
    try {
       const data = await client.DescribeSqlApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeRestoreTaskDetail", async function () {
    try {
       const data = await client.DescribeRestoreTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.CreateWorkloadGroup", async function () {
    try {
       const data = await client.CreateWorkloadGroup({})
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

it("cdwdoris.v20211228.DescribeInstanceNodesInfo", async function () {
    try {
       const data = await client.DescribeInstanceNodesInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeInstanceUsedSubnets", async function () {
    try {
       const data = await client.DescribeInstanceUsedSubnets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeUserBindWorkloadGroup", async function () {
    try {
       const data = await client.DescribeUserBindWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ScaleUpInstance", async function () {
    try {
       const data = await client.ScaleUpInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeRegionZone", async function () {
    try {
       const data = await client.DescribeRegionZone({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyWorkloadGroup", async function () {
    try {
       const data = await client.ModifyWorkloadGroup({})
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

it("cdwdoris.v20211228.ModifyWorkloadGroupStatus", async function () {
    try {
       const data = await client.ModifyWorkloadGroupStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyUserBindWorkloadGroup", async function () {
    try {
       const data = await client.ModifyUserBindWorkloadGroup({})
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

it("cdwdoris.v20211228.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
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

it("cdwdoris.v20211228.DescribeClusterConfigs", async function () {
    try {
       const data = await client.DescribeClusterConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DeleteWorkloadGroup", async function () {
    try {
       const data = await client.DeleteWorkloadGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifySecurityGroups", async function () {
    try {
       const data = await client.ModifySecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeFederationToken", async function () {
    try {
       const data = await client.DescribeFederationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ReduceInstance", async function () {
    try {
       const data = await client.ReduceInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.ModifyUserPrivilegesV3", async function () {
    try {
       const data = await client.ModifyUserPrivilegesV3({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.FitClsLog", async function () {
    try {
       const data = await client.FitClsLog({})
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

it("cdwdoris.v20211228.DescribeInstance", async function () {
    try {
       const data = await client.DescribeInstance({})
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

it("cdwdoris.v20211228.DescribeInstanceNodes", async function () {
    try {
       const data = await client.DescribeInstanceNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeGoodsDetail", async function () {
    try {
       const data = await client.DescribeGoodsDetail({})
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

it("cdwdoris.v20211228.RestartClusterForNode", async function () {
    try {
       const data = await client.RestartClusterForNode({})
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

it("cdwdoris.v20211228.DescribeReplicaVersion", async function () {
    try {
       const data = await client.DescribeReplicaVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwdoris.v20211228.DescribeWorkloadGroup", async function () {
    try {
       const data = await client.DescribeWorkloadGroup({})
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

it("cdwdoris.v20211228.ModifyInstanceKeyValConfigs", async function () {
    try {
       const data = await client.ModifyInstanceKeyValConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
