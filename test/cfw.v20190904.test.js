
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cfw.v20190904.Client({
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
describe("cfw.v20190904.test.js", function () {

it("cfw.v20190904.DescribeNatFwInfoCount", async function () {
    try {
       const data = await client.DescribeNatFwInfoCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeNatRuleOverview", async function () {
    try {
       const data = await client.DescribeNatRuleOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.StopSecurityGroupRuleDispatch", async function () {
    try {
       const data = await client.StopSecurityGroupRuleDispatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyTableStatus", async function () {
    try {
       const data = await client.ModifyTableStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeNatFwVpcDnsLst", async function () {
    try {
       const data = await client.DescribeNatFwVpcDnsLst({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAllPublicIPSwitchStatus", async function () {
    try {
       const data = await client.ModifyAllPublicIPSwitchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeAssociatedInstanceList", async function () {
    try {
       const data = await client.DescribeAssociatedInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateChooseVpcs", async function () {
    try {
       const data = await client.CreateChooseVpcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeVpcRuleOverview", async function () {
    try {
       const data = await client.DescribeVpcRuleOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeNatFwInstanceWithRegion", async function () {
    try {
       const data = await client.DescribeNatFwInstanceWithRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteAcRule", async function () {
    try {
       const data = await client.DeleteAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyResourceGroup", async function () {
    try {
       const data = await client.ModifyResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateSecurityGroupApiRules", async function () {
    try {
       const data = await client.CreateSecurityGroupApiRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeResourceGroupNew", async function () {
    try {
       const data = await client.DescribeResourceGroupNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteAllAccessControlRule", async function () {
    try {
       const data = await client.DeleteAllAccessControlRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeSecurityGroupList", async function () {
    try {
       const data = await client.DescribeSecurityGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifySecurityGroupRule", async function () {
    try {
       const data = await client.ModifySecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeNatFwInstance", async function () {
    try {
       const data = await client.DescribeNatFwInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAssetScan", async function () {
    try {
       const data = await client.ModifyAssetScan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeSwitchLists", async function () {
    try {
       const data = await client.DescribeSwitchLists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateDatabaseWhiteListRules", async function () {
    try {
       const data = await client.CreateDatabaseWhiteListRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateNatFwInstanceWithDomain", async function () {
    try {
       const data = await client.CreateNatFwInstanceWithDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteSecurityGroupAllRule", async function () {
    try {
       const data = await client.DeleteSecurityGroupAllRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.AddAcRule", async function () {
    try {
       const data = await client.AddAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.AddEnterpriseSecurityGroupRules", async function () {
    try {
       const data = await client.AddEnterpriseSecurityGroupRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateAcRules", async function () {
    try {
       const data = await client.CreateAcRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifySecurityGroupAllRuleStatus", async function () {
    try {
       const data = await client.ModifySecurityGroupAllRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeAcLists", async function () {
    try {
       const data = await client.DescribeAcLists({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateSecurityGroupRules", async function () {
    try {
       const data = await client.CreateSecurityGroupRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.RemoveEnterpriseSecurityGroupRule", async function () {
    try {
       const data = await client.RemoveEnterpriseSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeRuleOverview", async function () {
    try {
       const data = await client.DescribeRuleOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeIPStatusList", async function () {
    try {
       const data = await client.DescribeIPStatusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeTLogInfo", async function () {
    try {
       const data = await client.DescribeTLogInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyRunSyncAsset", async function () {
    try {
       const data = await client.ModifyRunSyncAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyNatFwVpcDnsSwitch", async function () {
    try {
       const data = await client.ModifyNatFwVpcDnsSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyVPCSwitchStatus", async function () {
    try {
       const data = await client.ModifyVPCSwitchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAllVPCSwitchStatus", async function () {
    try {
       const data = await client.ModifyAllVPCSwitchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeEnterpriseSecurityGroupRule", async function () {
    try {
       const data = await client.DescribeEnterpriseSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyBlockIgnoreList", async function () {
    try {
       const data = await client.ModifyBlockIgnoreList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteVpcInstance", async function () {
    try {
       const data = await client.DeleteVpcInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeGuideScanInfo", async function () {
    try {
       const data = await client.DescribeGuideScanInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeUnHandleEventTabList", async function () {
    try {
       const data = await client.DescribeUnHandleEventTabList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.SetNatFwEip", async function () {
    try {
       const data = await client.SetNatFwEip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeSourceAsset", async function () {
    try {
       const data = await client.DescribeSourceAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteResourceGroup", async function () {
    try {
       const data = await client.DeleteResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateNatFwInstance", async function () {
    try {
       const data = await client.CreateNatFwInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.SetNatFwDnatRule", async function () {
    try {
       const data = await client.SetNatFwDnatRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAllRuleStatus", async function () {
    try {
       const data = await client.ModifyAllRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifySequenceRules", async function () {
    try {
       const data = await client.ModifySequenceRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.RemoveAcRule", async function () {
    try {
       const data = await client.RemoveAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyBlockTop", async function () {
    try {
       const data = await client.ModifyBlockTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeTableStatus", async function () {
    try {
       const data = await client.DescribeTableStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeNatFwInstancesInfo", async function () {
    try {
       const data = await client.DescribeNatFwInstancesInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyNatFwReSelect", async function () {
    try {
       const data = await client.ModifyNatFwReSelect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeResourceGroup", async function () {
    try {
       const data = await client.DescribeResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeCfwEips", async function () {
    try {
       const data = await client.DescribeCfwEips({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.RunSyncAsset", async function () {
    try {
       const data = await client.RunSyncAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAcRule", async function () {
    try {
       const data = await client.ModifyAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteSecurityGroupRule", async function () {
    try {
       const data = await client.DeleteSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifySecurityGroupSequenceRules", async function () {
    try {
       const data = await client.ModifySecurityGroupSequenceRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyNatFwSwitch", async function () {
    try {
       const data = await client.ModifyNatFwSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeTLogIpList", async function () {
    try {
       const data = await client.DescribeTLogIpList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifySecurityGroupItemRuleStatus", async function () {
    try {
       const data = await client.ModifySecurityGroupItemRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAllSwitchStatus", async function () {
    try {
       const data = await client.ModifyAllSwitchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteNatFwInstance", async function () {
    try {
       const data = await client.DeleteNatFwInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyPublicIPSwitchStatus", async function () {
    try {
       const data = await client.ModifyPublicIPSwitchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeSyncAssetStatus", async function () {
    try {
       const data = await client.DescribeSyncAssetStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ExpandCfwVertical", async function () {
    try {
       const data = await client.ExpandCfwVertical({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeBlockByIpTimesList", async function () {
    try {
       const data = await client.DescribeBlockByIpTimesList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeAddrTemplateList", async function () {
    try {
       const data = await client.DescribeAddrTemplateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeBlockStaticList", async function () {
    try {
       const data = await client.DescribeBlockStaticList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyItemSwitchStatus", async function () {
    try {
       const data = await client.ModifyItemSwitchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
