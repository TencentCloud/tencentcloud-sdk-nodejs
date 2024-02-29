
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

it("cfw.v20190904.RemoveVpcAcRule", async function () {
    try {
       const data = await client.RemoveVpcAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteBlockIgnoreRuleNew", async function () {
    try {
       const data = await client.DeleteBlockIgnoreRuleNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeVpcFwGroupSwitch", async function () {
    try {
       const data = await client.DescribeVpcFwGroupSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyEWRuleStatus", async function () {
    try {
       const data = await client.ModifyEWRuleStatus({})
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

it("cfw.v20190904.ModifyResourceGroup", async function () {
    try {
       const data = await client.ModifyResourceGroup({})
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

it("cfw.v20190904.ModifyVpcFwGroup", async function () {
    try {
       const data = await client.ModifyVpcFwGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAssetSync", async function () {
    try {
       const data = await client.ModifyAssetSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DeleteVpcFwGroup", async function () {
    try {
       const data = await client.DeleteVpcFwGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.AddVpcAcRule", async function () {
    try {
       const data = await client.AddVpcAcRule({})
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

it("cfw.v20190904.DescribeTableStatus", async function () {
    try {
       const data = await client.DescribeTableStatus({})
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

it("cfw.v20190904.RemoveEnterpriseSecurityGroupRule", async function () {
    try {
       const data = await client.RemoveEnterpriseSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyNatSequenceRules", async function () {
    try {
       const data = await client.ModifyNatSequenceRules({})
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

it("cfw.v20190904.DescribeUnHandleEventTabList", async function () {
    try {
       const data = await client.DescribeUnHandleEventTabList({})
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

it("cfw.v20190904.ModifyBlockTop", async function () {
    try {
       const data = await client.ModifyBlockTop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.RemoveAclRule", async function () {
    try {
       const data = await client.RemoveAclRule({})
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

it("cfw.v20190904.CreateBlockIgnoreRuleList", async function () {
    try {
       const data = await client.CreateBlockIgnoreRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyBlockIgnoreRuleNew", async function () {
    try {
       const data = await client.ModifyBlockIgnoreRuleNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyEdgeIpSwitch", async function () {
    try {
       const data = await client.ModifyEdgeIpSwitch({})
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

it("cfw.v20190904.DescribeEnterpriseSGRuleProgress", async function () {
    try {
       const data = await client.DescribeEnterpriseSGRuleProgress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeNatFwInfoCount", async function () {
    try {
       const data = await client.DescribeNatFwInfoCount({})
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

it("cfw.v20190904.ModifyBlockIgnoreRule", async function () {
    try {
       const data = await client.ModifyBlockIgnoreRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeAclRule", async function () {
    try {
       const data = await client.DescribeAclRule({})
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

it("cfw.v20190904.ModifyVpcAcRule", async function () {
    try {
       const data = await client.ModifyVpcAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeAssetSync", async function () {
    try {
       const data = await client.DescribeAssetSync({})
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

it("cfw.v20190904.DescribeDefenseSwitch", async function () {
    try {
       const data = await client.DescribeDefenseSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeFwGroupInstanceInfo", async function () {
    try {
       const data = await client.DescribeFwGroupInstanceInfo({})
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

it("cfw.v20190904.ModifySecurityGroupItemRuleStatus", async function () {
    try {
       const data = await client.ModifySecurityGroupItemRuleStatus({})
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

it("cfw.v20190904.DeleteIdsWhiteRule", async function () {
    try {
       const data = await client.DeleteIdsWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateBlockIgnoreRuleNew", async function () {
    try {
       const data = await client.CreateBlockIgnoreRuleNew({})
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

it("cfw.v20190904.RemoveAcRule", async function () {
    try {
       const data = await client.RemoveAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyVpcFwSequenceRules", async function () {
    try {
       const data = await client.ModifyVpcFwSequenceRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateAlertCenterOmit", async function () {
    try {
       const data = await client.CreateAlertCenterOmit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateIdsWhiteRule", async function () {
    try {
       const data = await client.CreateIdsWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeVpcAcRule", async function () {
    try {
       const data = await client.DescribeVpcAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyEnterpriseSecurityGroupRule", async function () {
    try {
       const data = await client.ModifyEnterpriseSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.AddAclRule", async function () {
    try {
       const data = await client.AddAclRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyNatAcRule", async function () {
    try {
       const data = await client.ModifyNatAcRule({})
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

it("cfw.v20190904.ModifyAddressTemplate", async function () {
    try {
       const data = await client.ModifyAddressTemplate({})
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

it("cfw.v20190904.ModifyTableStatus", async function () {
    try {
       const data = await client.ModifyTableStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateAlertCenterIsolate", async function () {
    try {
       const data = await client.CreateAlertCenterIsolate({})
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

it("cfw.v20190904.CreateChooseVpcs", async function () {
    try {
       const data = await client.CreateChooseVpcs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeNatSwitchList", async function () {
    try {
       const data = await client.DescribeNatSwitchList({})
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

it("cfw.v20190904.DeleteAddressTemplate", async function () {
    try {
       const data = await client.DeleteAddressTemplate({})
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

it("cfw.v20190904.AddAcRule", async function () {
    try {
       const data = await client.AddAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifySequenceAclRules", async function () {
    try {
       const data = await client.ModifySequenceAclRules({})
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

it("cfw.v20190904.DescribeEnterpriseSecurityGroupRule", async function () {
    try {
       const data = await client.DescribeEnterpriseSecurityGroupRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyFwGroupSwitch", async function () {
    try {
       const data = await client.ModifyFwGroupSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeLogs", async function () {
    try {
       const data = await client.DescribeLogs({})
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

it("cfw.v20190904.DeleteBlockIgnoreRuleList", async function () {
    try {
       const data = await client.DeleteBlockIgnoreRuleList({})
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

it("cfw.v20190904.CreateAlertCenterRule", async function () {
    try {
       const data = await client.CreateAlertCenterRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyAclRule", async function () {
    try {
       const data = await client.ModifyAclRule({})
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

it("cfw.v20190904.DescribeBlockIgnoreList", async function () {
    try {
       const data = await client.DescribeBlockIgnoreList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.RemoveNatAcRule", async function () {
    try {
       const data = await client.RemoveNatAcRule({})
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

it("cfw.v20190904.ExpandCfwVertical", async function () {
    try {
       const data = await client.ExpandCfwVertical({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.CreateVpcFwGroup", async function () {
    try {
       const data = await client.CreateVpcFwGroup({})
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

it("cfw.v20190904.ModifyNatInstance", async function () {
    try {
       const data = await client.ModifyNatInstance({})
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

it("cfw.v20190904.DescribeNatAcRule", async function () {
    try {
       const data = await client.DescribeNatAcRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.DescribeFwSyncStatus", async function () {
    try {
       const data = await client.DescribeFwSyncStatus({})
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

it("cfw.v20190904.CreateAcRules", async function () {
    try {
       const data = await client.CreateAcRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.ModifyEnterpriseSecurityDispatchStatus", async function () {
    try {
       const data = await client.ModifyEnterpriseSecurityDispatchStatus({})
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

it("cfw.v20190904.ModifyAllVPCSwitchStatus", async function () {
    try {
       const data = await client.ModifyAllVPCSwitchStatus({})
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

it("cfw.v20190904.DescribeAddressTemplateList", async function () {
    try {
       const data = await client.DescribeAddressTemplateList({})
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

it("cfw.v20190904.ModifyStorageSetting", async function () {
    try {
       const data = await client.ModifyStorageSetting({})
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

it("cfw.v20190904.SyncFwOperate", async function () {
    try {
       const data = await client.SyncFwOperate({})
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

it("cfw.v20190904.DescribeFwEdgeIps", async function () {
    try {
       const data = await client.DescribeFwEdgeIps({})
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

it("cfw.v20190904.CreateAddressTemplate", async function () {
    try {
       const data = await client.CreateAddressTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cfw.v20190904.AddNatAcRule", async function () {
    try {
       const data = await client.AddNatAcRule({})
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

it("cfw.v20190904.DescribeIdsWhiteRule", async function () {
    try {
       const data = await client.DescribeIdsWhiteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
