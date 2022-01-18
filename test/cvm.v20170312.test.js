
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cvm.v20170312.Client({
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
describe("cvm.v20170312.test.js", function () {

it("cvm.v20170312.DescribeImageQuota", async function () {
    try {
       const data = await client.DescribeImageQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.StopInstances", async function () {
    try {
       const data = await client.StopInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstancesStatus", async function () {
    try {
       const data = await client.DescribeInstancesStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyImageSharePermission", async function () {
    try {
       const data = await client.ModifyImageSharePermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeImageSharePermission", async function () {
    try {
       const data = await client.DescribeImageSharePermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyLaunchTemplateDefaultVersion", async function () {
    try {
       const data = await client.ModifyLaunchTemplateDefaultVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceModifyInstancesChargeType", async function () {
    try {
       const data = await client.InquiryPriceModifyInstancesChargeType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstancesModification", async function () {
    try {
       const data = await client.DescribeInstancesModification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeImages", async function () {
    try {
       const data = await client.DescribeImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyKeyPairAttribute", async function () {
    try {
       const data = await client.ModifyKeyPairAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeZoneInstanceConfigInfos", async function () {
    try {
       const data = await client.DescribeZoneInstanceConfigInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyInstancesAttribute", async function () {
    try {
       const data = await client.ModifyInstancesAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeRegions", async function () {
    try {
       const data = await client.DescribeRegions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceResetInstancesInternetMaxBandwidth", async function () {
    try {
       const data = await client.InquiryPriceResetInstancesInternetMaxBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ProgramFpgaImage", async function () {
    try {
       const data = await client.ProgramFpgaImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DisassociateInstancesKeyPairs", async function () {
    try {
       const data = await client.DisassociateInstancesKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.CreateKeyPair", async function () {
    try {
       const data = await client.CreateKeyPair({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DeleteKeyPairs", async function () {
    try {
       const data = await client.DeleteKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.CreateDisasterRecoverGroup", async function () {
    try {
       const data = await client.CreateDisasterRecoverGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeLaunchTemplateVersions", async function () {
    try {
       const data = await client.DescribeLaunchTemplateVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.SyncImages", async function () {
    try {
       const data = await client.SyncImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstanceInternetBandwidthConfigs", async function () {
    try {
       const data = await client.DescribeInstanceInternetBandwidthConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceTerminateInstances", async function () {
    try {
       const data = await client.InquiryPriceTerminateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.AssociateInstancesKeyPairs", async function () {
    try {
       const data = await client.AssociateInstancesKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstanceVncUrl", async function () {
    try {
       const data = await client.DescribeInstanceVncUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DeleteLaunchTemplate", async function () {
    try {
       const data = await client.DeleteLaunchTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DeleteImages", async function () {
    try {
       const data = await client.DeleteImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceResizeInstanceDisks", async function () {
    try {
       const data = await client.InquiryPriceResizeInstanceDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.TerminateInstances", async function () {
    try {
       const data = await client.TerminateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyInstancesVpcAttribute", async function () {
    try {
       const data = await client.ModifyInstancesVpcAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceResetInstance", async function () {
    try {
       const data = await client.InquiryPriceResetInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeDisasterRecoverGroupQuota", async function () {
    try {
       const data = await client.DescribeDisasterRecoverGroupQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ResetInstancesPassword", async function () {
    try {
       const data = await client.ResetInstancesPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyInstancesRenewFlag", async function () {
    try {
       const data = await client.ModifyInstancesRenewFlag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.RenewInstances", async function () {
    try {
       const data = await client.RenewInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.PurchaseReservedInstancesOffering", async function () {
    try {
       const data = await client.PurchaseReservedInstancesOffering({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ResizeInstanceDisks", async function () {
    try {
       const data = await client.ResizeInstanceDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.CreateLaunchTemplate", async function () {
    try {
       const data = await client.CreateLaunchTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeReservedInstances", async function () {
    try {
       const data = await client.DescribeReservedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeReservedInstancesConfigInfos", async function () {
    try {
       const data = await client.DescribeReservedInstancesConfigInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.CreateImage", async function () {
    try {
       const data = await client.CreateImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeAccountQuota", async function () {
    try {
       const data = await client.DescribeAccountQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ResetInstancesType", async function () {
    try {
       const data = await client.ResetInstancesType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyImageAttribute", async function () {
    try {
       const data = await client.ModifyImageAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.StartInstances", async function () {
    try {
       const data = await client.StartInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstancesOperationLimit", async function () {
    try {
       const data = await client.DescribeInstancesOperationLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceResetInstancesType", async function () {
    try {
       const data = await client.InquiryPriceResetInstancesType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DeleteLaunchTemplateVersions", async function () {
    try {
       const data = await client.DeleteLaunchTemplateVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.CreateLaunchTemplateVersion", async function () {
    try {
       const data = await client.CreateLaunchTemplateVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DeleteDisasterRecoverGroups", async function () {
    try {
       const data = await client.DeleteDisasterRecoverGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeImportImageOs", async function () {
    try {
       const data = await client.DescribeImportImageOs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquirePricePurchaseReservedInstancesOffering", async function () {
    try {
       const data = await client.InquirePricePurchaseReservedInstancesOffering({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyInstancesProject", async function () {
    try {
       const data = await client.ModifyInstancesProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ResetInstance", async function () {
    try {
       const data = await client.ResetInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceRenewInstances", async function () {
    try {
       const data = await client.InquiryPriceRenewInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.InquiryPriceRunInstances", async function () {
    try {
       const data = await client.InquiryPriceRunInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ImportImage", async function () {
    try {
       const data = await client.ImportImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ImportKeyPair", async function () {
    try {
       const data = await client.ImportKeyPair({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeLaunchTemplates", async function () {
    try {
       const data = await client.DescribeLaunchTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyDisasterRecoverGroupAttribute", async function () {
    try {
       const data = await client.ModifyDisasterRecoverGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstanceFamilyConfigs", async function () {
    try {
       const data = await client.DescribeInstanceFamilyConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyInstancesChargeType", async function () {
    try {
       const data = await client.ModifyInstancesChargeType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.RenewHosts", async function () {
    try {
       const data = await client.RenewHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeDisasterRecoverGroups", async function () {
    try {
       const data = await client.DescribeDisasterRecoverGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.RunInstances", async function () {
    try {
       const data = await client.RunInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ResetInstancesInternetMaxBandwidth", async function () {
    try {
       const data = await client.ResetInstancesInternetMaxBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeKeyPairs", async function () {
    try {
       const data = await client.DescribeKeyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeReservedInstancesOfferings", async function () {
    try {
       const data = await client.DescribeReservedInstancesOfferings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeHosts", async function () {
    try {
       const data = await client.DescribeHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.AllocateHosts", async function () {
    try {
       const data = await client.AllocateHosts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInternetChargeTypeConfigs", async function () {
    try {
       const data = await client.DescribeInternetChargeTypeConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.RebootInstances", async function () {
    try {
       const data = await client.RebootInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyHostsAttribute", async function () {
    try {
       const data = await client.ModifyHostsAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DescribeInstanceTypeConfigs", async function () {
    try {
       const data = await client.DescribeInstanceTypeConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvm.v20170312.ModifyInstanceDiskType", async function () {
    try {
       const data = await client.ModifyInstanceDiskType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
