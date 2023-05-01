
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.thpc.v20230321.Client({
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
describe("thpc.v20230321.test.js", function () {

it("thpc.v20230321.DescribeClusterStorageOption", async function () {
    try {
       const data = await client.DescribeClusterStorageOption({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DeleteNodes", async function () {
    try {
       const data = await client.DeleteNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.ModifyInitNodeScripts", async function () {
    try {
       const data = await client.ModifyInitNodeScripts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.CreateCluster", async function () {
    try {
       const data = await client.CreateCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.AddClusterStorageOption", async function () {
    try {
       const data = await client.AddClusterStorageOption({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.SetAutoScalingConfiguration", async function () {
    try {
       const data = await client.SetAutoScalingConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.AddQueue", async function () {
    try {
       const data = await client.AddQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DescribeNodes", async function () {
    try {
       const data = await client.DescribeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DeleteQueue", async function () {
    try {
       const data = await client.DeleteQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DeleteClusterStorageOption", async function () {
    try {
       const data = await client.DeleteClusterStorageOption({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.AddNodes", async function () {
    try {
       const data = await client.AddNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DescribeAutoScalingConfiguration", async function () {
    try {
       const data = await client.DescribeAutoScalingConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DescribeClusters", async function () {
    try {
       const data = await client.DescribeClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DeleteCluster", async function () {
    try {
       const data = await client.DeleteCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DescribeClusterActivities", async function () {
    try {
       const data = await client.DescribeClusterActivities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("thpc.v20230321.DescribeQueues", async function () {
    try {
       const data = await client.DescribeQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
