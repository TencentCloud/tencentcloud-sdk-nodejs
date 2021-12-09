
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dnspod.v20210323.Client({
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
describe("dnspod.v20210323.test.js", function () {

it("dnspod.v20210323.DescribeRecordList", async function () {
    try {
       const data = await client.DescribeRecordList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomainPurview", async function () {
    try {
       const data = await client.DescribeDomainPurview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifySubdomainStatus", async function () {
    try {
       const data = await client.ModifySubdomainStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DeleteRecord", async function () {
    try {
       const data = await client.DeleteRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomainAliasList", async function () {
    try {
       const data = await client.DescribeDomainAliasList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyRecordStatus", async function () {
    try {
       const data = await client.ModifyRecordStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyDomainStatus", async function () {
    try {
       const data = await client.ModifyDomainStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyDomainUnlock", async function () {
    try {
       const data = await client.ModifyDomainUnlock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CreateDomainBatch", async function () {
    try {
       const data = await client.CreateDomainBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomainShareInfo", async function () {
    try {
       const data = await client.DescribeDomainShareInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DeleteShareDomain", async function () {
    try {
       const data = await client.DeleteShareDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomain", async function () {
    try {
       const data = await client.DescribeDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyDynamicDNS", async function () {
    try {
       const data = await client.ModifyDynamicDNS({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CreateDomain", async function () {
    try {
       const data = await client.CreateDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeUserDetail", async function () {
    try {
       const data = await client.DescribeUserDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeRecordType", async function () {
    try {
       const data = await client.DescribeRecordType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeRecord", async function () {
    try {
       const data = await client.DescribeRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeRecordLineList", async function () {
    try {
       const data = await client.DescribeRecordLineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyRecordRemark", async function () {
    try {
       const data = await client.ModifyRecordRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CreateDomainAlias", async function () {
    try {
       const data = await client.CreateDomainAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CreateRecord", async function () {
    try {
       const data = await client.CreateRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyDomainRemark", async function () {
    try {
       const data = await client.ModifyDomainRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyDomainOwner", async function () {
    try {
       const data = await client.ModifyDomainOwner({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CreateDomainGroup", async function () {
    try {
       const data = await client.CreateDomainGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DeleteDomainAlias", async function () {
    try {
       const data = await client.DeleteDomainAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeBatchTask", async function () {
    try {
       const data = await client.DescribeBatchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CreateRecordBatch", async function () {
    try {
       const data = await client.CreateRecordBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomainList", async function () {
    try {
       const data = await client.DescribeDomainList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DeleteDomain", async function () {
    try {
       const data = await client.DeleteDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomainLogList", async function () {
    try {
       const data = await client.DescribeDomainLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyDomainLock", async function () {
    try {
       const data = await client.ModifyDomainLock({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyRecordBatch", async function () {
    try {
       const data = await client.ModifyRecordBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyRecord", async function () {
    try {
       const data = await client.ModifyRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
