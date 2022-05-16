
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cdc.v20201214.Client({
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
describe("cdc.v20201214.test.js", function () {

it("cdc.v20201214.ModifySiteDeviceInfo", async function () {
    try {
       const data = await client.ModifySiteDeviceInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DeleteDedicatedClusters", async function () {
    try {
       const data = await client.DeleteDedicatedClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusterCosCapacity", async function () {
    try {
       const data = await client.DescribeDedicatedClusterCosCapacity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.ModifySiteInfo", async function () {
    try {
       const data = await client.ModifySiteInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusterHostStatistics", async function () {
    try {
       const data = await client.DescribeDedicatedClusterHostStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.ModifyDedicatedClusterInfo", async function () {
    try {
       const data = await client.ModifyDedicatedClusterInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeSites", async function () {
    try {
       const data = await client.DescribeSites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusterOrders", async function () {
    try {
       const data = await client.DescribeDedicatedClusterOrders({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.ModifyOrderStatus", async function () {
    try {
       const data = await client.ModifyOrderStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.CreateDedicatedCluster", async function () {
    try {
       const data = await client.CreateDedicatedCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusters", async function () {
    try {
       const data = await client.DescribeDedicatedClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusterHosts", async function () {
    try {
       const data = await client.DescribeDedicatedClusterHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedSupportedZones", async function () {
    try {
       const data = await client.DescribeDedicatedSupportedZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.CreateDedicatedClusterOrder", async function () {
    try {
       const data = await client.CreateDedicatedClusterOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusterOverview", async function () {
    try {
       const data = await client.DescribeDedicatedClusterOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DeleteSites", async function () {
    try {
       const data = await client.DeleteSites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeSitesDetail", async function () {
    try {
       const data = await client.DescribeSitesDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusterInstanceTypes", async function () {
    try {
       const data = await client.DescribeDedicatedClusterInstanceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.DescribeDedicatedClusterTypes", async function () {
    try {
       const data = await client.DescribeDedicatedClusterTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cdc.v20201214.CreateSite", async function () {
    try {
       const data = await client.CreateSite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
