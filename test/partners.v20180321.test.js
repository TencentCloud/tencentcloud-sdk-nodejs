
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.partners.v20180321.Client({
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
describe("partners.v20180321.test.js", function () {

it("partners.v20180321.DescribeAgentSelfPayDeals", async function () {
    try {
       const data = await client.DescribeAgentSelfPayDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentDealsCache", async function () {
    try {
       const data = await client.DescribeAgentDealsCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.ModifyClientRemark", async function () {
    try {
       const data = await client.ModifyClientRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentSelfPayDealsV2", async function () {
    try {
       const data = await client.DescribeAgentSelfPayDealsV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.AgentPayDeals", async function () {
    try {
       const data = await client.AgentPayDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentBills", async function () {
    try {
       const data = await client.DescribeAgentBills({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.AgentTransferMoney", async function () {
    try {
       const data = await client.AgentTransferMoney({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeRebateInfos", async function () {
    try {
       const data = await client.DescribeRebateInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeSalesmans", async function () {
    try {
       const data = await client.DescribeSalesmans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.RemovePayRelationForClient", async function () {
    try {
       const data = await client.RemovePayRelationForClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeClientBalanceNew", async function () {
    try {
       const data = await client.DescribeClientBalanceNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentPayDeals", async function () {
    try {
       const data = await client.DescribeAgentPayDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeUnbindClientList", async function () {
    try {
       const data = await client.DescribeUnbindClientList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentClients", async function () {
    try {
       const data = await client.DescribeAgentClients({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeClientBalance", async function () {
    try {
       const data = await client.DescribeClientBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentClientGrade", async function () {
    try {
       const data = await client.DescribeAgentClientGrade({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentPayDealsV2", async function () {
    try {
       const data = await client.DescribeAgentPayDealsV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentAuditedClients", async function () {
    try {
       const data = await client.DescribeAgentAuditedClients({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.CreatePayRelationForClient", async function () {
    try {
       const data = await client.CreatePayRelationForClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.AuditApplyClient", async function () {
    try {
       const data = await client.AuditApplyClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentDealsByCache", async function () {
    try {
       const data = await client.DescribeAgentDealsByCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
