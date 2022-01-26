
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cbs.v20170312.Client({
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
describe("cbs.v20170312.test.js", function () {

it("cbs.v20170312.ModifyDiskExtraPerformance", async function () {
    try {
       const data = await client.ModifyDiskExtraPerformance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.RenewDisk", async function () {
    try {
       const data = await client.RenewDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.CopySnapshotCrossRegions", async function () {
    try {
       const data = await client.CopySnapshotCrossRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeInstancesDiskNum", async function () {
    try {
       const data = await client.DescribeInstancesDiskNum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.InquiryPriceResizeDisk", async function () {
    try {
       const data = await client.InquiryPriceResizeDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.InquirePriceModifyDiskExtraPerformance", async function () {
    try {
       const data = await client.InquirePriceModifyDiskExtraPerformance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeAutoSnapshotPolicies", async function () {
    try {
       const data = await client.DescribeAutoSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.AttachDisks", async function () {
    try {
       const data = await client.AttachDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ModifyDisksRenewFlag", async function () {
    try {
       const data = await client.ModifyDisksRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ModifyAutoSnapshotPolicyAttribute", async function () {
    try {
       const data = await client.ModifyAutoSnapshotPolicyAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.InquiryPriceCreateDisks", async function () {
    try {
       const data = await client.InquiryPriceCreateDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeDiskOperationLogs", async function () {
    try {
       const data = await client.DescribeDiskOperationLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DeleteAutoSnapshotPolicies", async function () {
    try {
       const data = await client.DeleteAutoSnapshotPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.CreateAutoSnapshotPolicy", async function () {
    try {
       const data = await client.CreateAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeDisks", async function () {
    try {
       const data = await client.DescribeDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.CreateDisks", async function () {
    try {
       const data = await client.CreateDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ModifyDiskAttributes", async function () {
    try {
       const data = await client.ModifyDiskAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DeleteSnapshots", async function () {
    try {
       const data = await client.DeleteSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ModifySnapshotAttribute", async function () {
    try {
       const data = await client.ModifySnapshotAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeDiskAssociatedAutoSnapshotPolicy", async function () {
    try {
       const data = await client.DescribeDiskAssociatedAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.BindAutoSnapshotPolicy", async function () {
    try {
       const data = await client.BindAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeSnapshots", async function () {
    try {
       const data = await client.DescribeSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeSnapshotSharePermission", async function () {
    try {
       const data = await client.DescribeSnapshotSharePermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.InitializeDisks", async function () {
    try {
       const data = await client.InitializeDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ModifyDisksChargeType", async function () {
    try {
       const data = await client.ModifyDisksChargeType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.TerminateDisks", async function () {
    try {
       const data = await client.TerminateDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeDiskConfigQuota", async function () {
    try {
       const data = await client.DescribeDiskConfigQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.UnbindAutoSnapshotPolicy", async function () {
    try {
       const data = await client.UnbindAutoSnapshotPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeDiskStoragePool", async function () {
    try {
       const data = await client.DescribeDiskStoragePool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ApplySnapshot", async function () {
    try {
       const data = await client.ApplySnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DescribeSnapshotOperationLogs", async function () {
    try {
       const data = await client.DescribeSnapshotOperationLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ModifySnapshotsSharePermission", async function () {
    try {
       const data = await client.ModifySnapshotsSharePermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.CreateSnapshot", async function () {
    try {
       const data = await client.CreateSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.GetSnapOverview", async function () {
    try {
       const data = await client.GetSnapOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ResizeDisk", async function () {
    try {
       const data = await client.ResizeDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DetachDisks", async function () {
    try {
       const data = await client.DetachDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.InquiryPriceRenewDisks", async function () {
    try {
       const data = await client.InquiryPriceRenewDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
