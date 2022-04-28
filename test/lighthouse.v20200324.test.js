
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.lighthouse.v20200324.Client({
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
describe("lighthouse.v20200324.test.js", function () {

it("lighthouse.v20200324.StopInstances", async function () {
    try {
       const data = await client.StopInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyFirewallRuleDescription", async function () {
    try {
       const data = await client.ModifyFirewallRuleDescription({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DeleteBlueprints", async function () {
    try {
       const data = await client.DeleteBlueprints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeInstancesDiskNum", async function () {
    try {
       const data = await client.DescribeInstancesDiskNum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.IsolateInstances", async function () {
    try {
       const data = await client.IsolateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyInstancesRenewFlag", async function () {
    try {
       const data = await client.ModifyInstancesRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.CreateFirewallRules", async function () {
    try {
       const data = await client.CreateFirewallRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeInstancesReturnable", async function () {
    try {
       const data = await client.DescribeInstancesReturnable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyInstancesAttribute", async function () {
    try {
       const data = await client.ModifyInstancesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeModifyInstanceBundles", async function () {
    try {
       const data = await client.DescribeModifyInstanceBundles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeCcnAttachedInstances", async function () {
    try {
       const data = await client.DescribeCcnAttachedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.CreateKeyPair", async function () {
    try {
       const data = await client.CreateKeyPair({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeBundles", async function () {
    try {
       const data = await client.DescribeBundles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DeleteKeyPairs", async function () {
    try {
       const data = await client.DeleteKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyDisksRenewFlag", async function () {
    try {
       const data = await client.ModifyDisksRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeFirewallRulesTemplate", async function () {
    try {
       const data = await client.DescribeFirewallRulesTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ImportKeyPair", async function () {
    try {
       const data = await client.ImportKeyPair({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeInstancesTrafficPackages", async function () {
    try {
       const data = await client.DescribeInstancesTrafficPackages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.InquirePriceCreateBlueprint", async function () {
    try {
       const data = await client.InquirePriceCreateBlueprint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.AttachDisks", async function () {
    try {
       const data = await client.AttachDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.AssociateInstancesKeyPairs", async function () {
    try {
       const data = await client.AssociateInstancesKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DeleteFirewallRules", async function () {
    try {
       const data = await client.DeleteFirewallRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DisassociateInstancesKeyPairs", async function () {
    try {
       const data = await client.DisassociateInstancesKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeBundleDiscount", async function () {
    try {
       const data = await client.DescribeBundleDiscount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.AttachCcn", async function () {
    try {
       const data = await client.AttachCcn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeBlueprints", async function () {
    try {
       const data = await client.DescribeBlueprints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ResetInstancesPassword", async function () {
    try {
       const data = await client.ResetInstancesPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeInstanceLoginKeyPairAttribute", async function () {
    try {
       const data = await client.DescribeInstanceLoginKeyPairAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeDisksDeniedActions", async function () {
    try {
       const data = await client.DescribeDisksDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeFirewallRules", async function () {
    try {
       const data = await client.DescribeFirewallRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeDisks", async function () {
    try {
       const data = await client.DescribeDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeGeneralResourceQuotas", async function () {
    try {
       const data = await client.DescribeGeneralResourceQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyBlueprintAttribute", async function () {
    try {
       const data = await client.ModifyBlueprintAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeInstancesDeniedActions", async function () {
    try {
       const data = await client.DescribeInstancesDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.InquirePriceRenewInstances", async function () {
    try {
       const data = await client.InquirePriceRenewInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DeleteSnapshots", async function () {
    try {
       const data = await client.DeleteSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.InquirePriceCreateInstances", async function () {
    try {
       const data = await client.InquirePriceCreateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.CreateInstanceSnapshot", async function () {
    try {
       const data = await client.CreateInstanceSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyDisksAttribute", async function () {
    try {
       const data = await client.ModifyDisksAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyInstancesLoginKeyPairAttribute", async function () {
    try {
       const data = await client.ModifyInstancesLoginKeyPairAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifySnapshotAttribute", async function () {
    try {
       const data = await client.ModifySnapshotAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeDisksReturnable", async function () {
    try {
       const data = await client.DescribeDisksReturnable({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.InquirePriceRenewDisks", async function () {
    try {
       const data = await client.InquirePriceRenewDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeBlueprintInstances", async function () {
    try {
       const data = await client.DescribeBlueprintInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ResetInstance", async function () {
    try {
       const data = await client.ResetInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ApplyInstanceSnapshot", async function () {
    try {
       const data = await client.ApplyInstanceSnapshot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DetachCcn", async function () {
    try {
       const data = await client.DetachCcn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeSnapshots", async function () {
    try {
       const data = await client.DescribeSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ModifyFirewallRules", async function () {
    try {
       const data = await client.ModifyFirewallRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.TerminateInstances", async function () {
    try {
       const data = await client.TerminateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.RenewInstances", async function () {
    try {
       const data = await client.RenewInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeInstanceVncUrl", async function () {
    try {
       const data = await client.DescribeInstanceVncUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.TerminateDisks", async function () {
    try {
       const data = await client.TerminateDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.StartInstances", async function () {
    try {
       const data = await client.StartInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeKeyPairs", async function () {
    try {
       const data = await client.DescribeKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeResetInstanceBlueprints", async function () {
    try {
       const data = await client.DescribeResetInstanceBlueprints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeSnapshotsDeniedActions", async function () {
    try {
       const data = await client.DescribeSnapshotsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.InquirePriceCreateDisks", async function () {
    try {
       const data = await client.InquirePriceCreateDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeDiskDiscount", async function () {
    try {
       const data = await client.DescribeDiskDiscount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeDiskConfigs", async function () {
    try {
       const data = await client.DescribeDiskConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.ResetAttachCcn", async function () {
    try {
       const data = await client.ResetAttachCcn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.RebootInstances", async function () {
    try {
       const data = await client.RebootInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.CreateInstances", async function () {
    try {
       const data = await client.CreateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.CreateBlueprint", async function () {
    try {
       const data = await client.CreateBlueprint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lighthouse.v20200324.DetachDisks", async function () {
    try {
       const data = await client.DetachDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
