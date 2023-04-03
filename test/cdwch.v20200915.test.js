
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cdwch.v20200915.Client({
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
describe("cdwch.v20200915.test.js", function () {

it("cdwch.v20200915.DescribeBackUpSchedule", async function () {
    try {
       const data = await client.DescribeBackUpSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.CreateBackUpSchedule", async function () {
    try {
       const data = await client.CreateBackUpSchedule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.ScaleUpInstance", async function () {
    try {
       const data = await client.ScaleUpInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeCkSqlApis", async function () {
    try {
       const data = await client.DescribeCkSqlApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.ActionAlterCkUser", async function () {
    try {
       const data = await client.ActionAlterCkUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeInstanceState", async function () {
    try {
       const data = await client.DescribeInstanceState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.OpenBackUp", async function () {
    try {
       const data = await client.OpenBackUp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeInstanceClusters", async function () {
    try {
       const data = await client.DescribeInstanceClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeInstanceKeyValConfigs", async function () {
    try {
       const data = await client.DescribeInstanceKeyValConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeSpec", async function () {
    try {
       const data = await client.DescribeSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeClusterConfigs", async function () {
    try {
       const data = await client.DescribeClusterConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DestroyInstance", async function () {
    try {
       const data = await client.DestroyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeInstance", async function () {
    try {
       const data = await client.DescribeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.ModifyClusterConfigs", async function () {
    try {
       const data = await client.ModifyClusterConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.CreateInstanceNew", async function () {
    try {
       const data = await client.CreateInstanceNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.ModifyInstanceKeyValConfigs", async function () {
    try {
       const data = await client.ModifyInstanceKeyValConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.ModifyUserNewPrivilege", async function () {
    try {
       const data = await client.ModifyUserNewPrivilege({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.ScaleOutInstance", async function () {
    try {
       const data = await client.ScaleOutInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.ResizeDisk", async function () {
    try {
       const data = await client.ResizeDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdwch.v20200915.DescribeInstanceShards", async function () {
    try {
       const data = await client.DescribeInstanceShards({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
