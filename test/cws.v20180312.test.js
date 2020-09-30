
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cws.v20180312.Client({
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
describe("cws.v20180312.test.js", function () {

it("cws.v20180312.CreateVulsReport", async function () {
    try {
       const data = await client.CreateVulsReport({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeVuls", async function () {
    try {
       const data = await client.DescribeVuls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.ModifyMonitorAttribute", async function () {
    try {
       const data = await client.ModifyMonitorAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.CreateSitesScans", async function () {
    try {
       const data = await client.CreateSitesScans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.CreateSites", async function () {
    try {
       const data = await client.CreateSites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.CreateVulsMisinformation", async function () {
    try {
       const data = await client.CreateVulsMisinformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeConfig", async function () {
    try {
       const data = await client.DescribeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeSites", async function () {
    try {
       const data = await client.DescribeSites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeSitesVerification", async function () {
    try {
       const data = await client.DescribeSitesVerification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.ModifySiteAttribute", async function () {
    try {
       const data = await client.ModifySiteAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.ModifyConfigAttribute", async function () {
    try {
       const data = await client.ModifyConfigAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeVulsNumberTimeline", async function () {
    try {
       const data = await client.DescribeVulsNumberTimeline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.VerifySites", async function () {
    try {
       const data = await client.VerifySites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DeleteMonitors", async function () {
    try {
       const data = await client.DeleteMonitors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.CreateMonitors", async function () {
    try {
       const data = await client.CreateMonitors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DeleteSites", async function () {
    try {
       const data = await client.DeleteSites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeVulsNumber", async function () {
    try {
       const data = await client.DescribeVulsNumber({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeMonitors", async function () {
    try {
       const data = await client.DescribeMonitors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cws.v20180312.DescribeSiteQuota", async function () {
    try {
       const data = await client.DescribeSiteQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
