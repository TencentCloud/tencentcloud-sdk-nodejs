
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

it("cfw.v20190904.DescribeNatRuleOverview", async function () {
    try {
       const data = await client.DescribeNatRuleOverview({})
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

it("cfw.v20190904.DescribeAssociatedInstanceList", async function () {
    try {
       const data = await client.DescribeAssociatedInstanceList({})
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

it("cfw.v20190904.DeleteAcRule", async function () {
    try {
       const data = await client.DeleteAcRule({})
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

it("cfw.v20190904.DescribeSyncAssetStatus", async function () {
    try {
       const data = await client.DescribeSyncAssetStatus({})
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

it("cfw.v20190904.DeleteSecurityGroupAllRule", async function () {
    try {
       const data = await client.DeleteSecurityGroupAllRule({})
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

it("cfw.v20190904.DescribeSwitchLists", async function () {
    try {
       const data = await client.DescribeSwitchLists({})
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

it("cfw.v20190904.ModifySequenceRules", async function () {
    try {
       const data = await client.ModifySequenceRules({})
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

it("cfw.v20190904.ModifyAllRuleStatus", async function () {
    try {
       const data = await client.ModifyAllRuleStatus({})
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

it("cfw.v20190904.DescribeAcLists", async function () {
    try {
       const data = await client.DescribeAcLists({})
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
