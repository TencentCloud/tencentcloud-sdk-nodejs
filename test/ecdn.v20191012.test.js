
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ecdn.v20191012.Client({
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
describe("ecdn.v20191012.test.js", function () {

it("ecdn.v20191012.AddEcdnDomain", async function () {
    try {
       const data = await client.AddEcdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribeIpStatus", async function () {
    try {
       const data = await client.DescribeIpStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.PurgePathCache", async function () {
    try {
       const data = await client.PurgePathCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.StartEcdnDomain", async function () {
    try {
       const data = await client.StartEcdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.UpdateDomainConfig", async function () {
    try {
       const data = await client.UpdateDomainConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribePurgeTasks", async function () {
    try {
       const data = await client.DescribePurgeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribeEcdnDomainLogs", async function () {
    try {
       const data = await client.DescribeEcdnDomainLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribeDomainsConfig", async function () {
    try {
       const data = await client.DescribeDomainsConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribePurgeQuota", async function () {
    try {
       const data = await client.DescribePurgeQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.PurgeUrlsCache", async function () {
    try {
       const data = await client.PurgeUrlsCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.StopEcdnDomain", async function () {
    try {
       const data = await client.StopEcdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DeleteEcdnDomain", async function () {
    try {
       const data = await client.DeleteEcdnDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribeDomains", async function () {
    try {
       const data = await client.DescribeDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.CreateVerifyRecord", async function () {
    try {
       const data = await client.CreateVerifyRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribeEcdnDomainStatistics", async function () {
    try {
       const data = await client.DescribeEcdnDomainStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ecdn.v20191012.DescribeEcdnStatistics", async function () {
    try {
       const data = await client.DescribeEcdnStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
