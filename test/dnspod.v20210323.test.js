
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

it("dnspod.v20210323.DescribeDomainShareInfo", async function () {
    try {
       const data = await client.DescribeDomainShareInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeSnapshotRollbackTask", async function () {
    try {
       const data = await client.DescribeSnapshotRollbackTask({})
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

it("dnspod.v20210323.DescribeRecordType", async function () {
    try {
       const data = await client.DescribeRecordType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DeleteRecordGroup", async function () {
    try {
       const data = await client.DeleteRecordGroup({})
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

it("dnspod.v20210323.DescribeDomainAliasList", async function () {
    try {
       const data = await client.DescribeDomainAliasList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeSnapshotList", async function () {
    try {
       const data = await client.DescribeSnapshotList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyRecordFields", async function () {
    try {
       const data = await client.ModifyRecordFields({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DeleteDomainBatch", async function () {
    try {
       const data = await client.DeleteDomainBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DownloadSnapshot", async function () {
    try {
       const data = await client.DownloadSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CheckSnapshotRollback", async function () {
    try {
       const data = await client.CheckSnapshotRollback({})
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

it("dnspod.v20210323.DescribeDomainWhois", async function () {
    try {
       const data = await client.DescribeDomainWhois({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeRecordGroupList", async function () {
    try {
       const data = await client.DescribeRecordGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeSnapshotRollbackResult", async function () {
    try {
       const data = await client.DescribeSnapshotRollbackResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DeleteSnapshot", async function () {
    try {
       const data = await client.DeleteSnapshot({})
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

it("dnspod.v20210323.DescribeDomainGroupList", async function () {
    try {
       const data = await client.DescribeDomainGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.CreateDeal", async function () {
    try {
       const data = await client.CreateDeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeSnapshotConfig", async function () {
    try {
       const data = await client.DescribeSnapshotConfig({})
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

it("dnspod.v20210323.ModifyVasAutoRenewStatus", async function () {
    try {
       const data = await client.ModifyVasAutoRenewStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyRecordGroup", async function () {
    try {
       const data = await client.ModifyRecordGroup({})
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

it("dnspod.v20210323.CreateRecordBatch", async function () {
    try {
       const data = await client.CreateRecordBatch({})
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

it("dnspod.v20210323.RollbackSnapshot", async function () {
    try {
       const data = await client.RollbackSnapshot({})
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

it("dnspod.v20210323.DescribeRecord", async function () {
    try {
       const data = await client.DescribeRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifySnapshotConfig", async function () {
    try {
       const data = await client.ModifySnapshotConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribePackageDetail", async function () {
    try {
       const data = await client.DescribePackageDetail({})
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

it("dnspod.v20210323.DescribeVASStatistic", async function () {
    try {
       const data = await client.DescribeVASStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomainAnalytics", async function () {
    try {
       const data = await client.DescribeDomainAnalytics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyPackageAutoRenew", async function () {
    try {
       const data = await client.ModifyPackageAutoRenew({})
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

it("dnspod.v20210323.DescribeRecordExistExceptDefaultNS", async function () {
    try {
       const data = await client.DescribeRecordExistExceptDefaultNS({})
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

it("dnspod.v20210323.CreateRecordGroup", async function () {
    try {
       const data = await client.CreateRecordGroup({})
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

it("dnspod.v20210323.CheckRecordSnapshotRollback", async function () {
    try {
       const data = await client.CheckRecordSnapshotRollback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeDomainPreview", async function () {
    try {
       const data = await client.DescribeDomainPreview({})
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

it("dnspod.v20210323.RollbackRecordSnapshot", async function () {
    try {
       const data = await client.RollbackRecordSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.ModifyRecordToGroup", async function () {
    try {
       const data = await client.ModifyRecordToGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.PayOrderWithBalance", async function () {
    try {
       const data = await client.PayOrderWithBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeSubdomainAnalytics", async function () {
    try {
       const data = await client.DescribeSubdomainAnalytics({})
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

it("dnspod.v20210323.CreateSnapshot", async function () {
    try {
       const data = await client.CreateSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dnspod.v20210323.DescribeRecordSnapshotRollbackResult", async function () {
    try {
       const data = await client.DescribeRecordSnapshotRollbackResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
