
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

it("cbs.v20170312.ApplyDiskBackup", async function () {
    try {
       const data = await client.ApplyDiskBackup({})
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

it("cbs.v20170312.RenewRemoteDisk", async function () {
    try {
       const data = await client.RenewRemoteDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.TerminateRemoteDisks", async function () {
    try {
       const data = await client.TerminateRemoteDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.SwitchParameterRenewRemoteDisks", async function () {
    try {
       const data = await client.SwitchParameterRenewRemoteDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.CreateRemoteDisks", async function () {
    try {
       const data = await client.CreateRemoteDisks({})
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

it("cbs.v20170312.DescribeRemoteDisks", async function () {
    try {
       const data = await client.DescribeRemoteDisks({})
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

it("cbs.v20170312.CreateSnapshotGroup", async function () {
    try {
       const data = await client.CreateSnapshotGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.SwitchParameterCreateRemoteDisks", async function () {
    try {
       const data = await client.SwitchParameterCreateRemoteDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DeleteSnapshotGroup", async function () {
    try {
       const data = await client.DeleteSnapshotGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.DeleteDiskBackups", async function () {
    try {
       const data = await client.DeleteDiskBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.InquirePriceCreateRemoteDisks", async function () {
    try {
       const data = await client.InquirePriceCreateRemoteDisks({})
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

it("cbs.v20170312.DescribeDiskBackups", async function () {
    try {
       const data = await client.DescribeDiskBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ApplySnapshotGroup", async function () {
    try {
       const data = await client.ApplySnapshotGroup({})
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

it("cbs.v20170312.InitializeDisks", async function () {
    try {
       const data = await client.InitializeDisks({})
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

it("cbs.v20170312.DescribeSnapshotGroups", async function () {
    try {
       const data = await client.DescribeSnapshotGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.ModifyDiskBackupQuota", async function () {
    try {
       const data = await client.ModifyDiskBackupQuota({})
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

it("cbs.v20170312.CopyAutoSnapshotPolicyCrossAccount", async function () {
    try {
       const data = await client.CopyAutoSnapshotPolicyCrossAccount({})
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

it("cbs.v20170312.DescribeRemoteDisksDeniedActions", async function () {
    try {
       const data = await client.DescribeRemoteDisksDeniedActions({})
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

it("cbs.v20170312.ModifyRemoteDiskAttributes", async function () {
    try {
       const data = await client.ModifyRemoteDiskAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.InquirePriceRenewRemoteDisks", async function () {
    try {
       const data = await client.InquirePriceRenewRemoteDisks({})
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

it("cbs.v20170312.DetachRemoteDisks", async function () {
    try {
       const data = await client.DetachRemoteDisks({})
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

it("cbs.v20170312.DescribeRemoteDiskConfigQuota", async function () {
    try {
       const data = await client.DescribeRemoteDiskConfigQuota({})
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

it("cbs.v20170312.CreateAutoSnapshotPolicy", async function () {
    try {
       const data = await client.CreateAutoSnapshotPolicy({})
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

it("cbs.v20170312.CreateDiskBackup", async function () {
    try {
       const data = await client.CreateDiskBackup({})
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

it("cbs.v20170312.InquirePriceModifyDiskBackupQuota", async function () {
    try {
       const data = await client.InquirePriceModifyDiskBackupQuota({})
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

it("cbs.v20170312.DescribeSnapshotOverview", async function () {
    try {
       const data = await client.DescribeSnapshotOverview({})
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

it("cbs.v20170312.GetSnapOverview", async function () {
    try {
       const data = await client.GetSnapOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cbs.v20170312.AttachRemoteDisks", async function () {
    try {
       const data = await client.AttachRemoteDisks({})
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

it("cbs.v20170312.CreateSnapshot", async function () {
    try {
       const data = await client.CreateSnapshot({})
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
