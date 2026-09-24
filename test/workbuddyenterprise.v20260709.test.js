
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.workbuddyenterprise.v20260709.Client({
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
describe("workbuddyenterprise.v20260709.test.js", function () {

it("workbuddyenterprise.v20260709.DescribeExpertList", async function () {
    try {
       const data = await client.DescribeExpertList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.UnbindExternalAgent", async function () {
    try {
       const data = await client.UnbindExternalAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeAgentSession", async function () {
    try {
       const data = await client.DescribeAgentSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.ModifyAgentA2AConfig", async function () {
    try {
       const data = await client.ModifyAgentA2AConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeAgentVersion", async function () {
    try {
       const data = await client.DescribeAgentVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeExternalAgentList", async function () {
    try {
       const data = await client.DescribeExternalAgentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeAgentVersionList", async function () {
    try {
       const data = await client.DescribeAgentVersionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.MigrateAgentSession", async function () {
    try {
       const data = await client.MigrateAgentSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.ModifyAgentRouting", async function () {
    try {
       const data = await client.ModifyAgentRouting({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeConnectorList", async function () {
    try {
       const data = await client.DescribeConnectorList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeSkillList", async function () {
    try {
       const data = await client.DescribeSkillList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeAgentSessionList", async function () {
    try {
       const data = await client.DescribeAgentSessionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeBuiltinModelList", async function () {
    try {
       const data = await client.DescribeBuiltinModelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.ModifyAgent", async function () {
    try {
       const data = await client.ModifyAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.CreateAgent", async function () {
    try {
       const data = await client.CreateAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.CreateAgentVersionFromSource", async function () {
    try {
       const data = await client.CreateAgentVersionFromSource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.ModifyAgentVersion", async function () {
    try {
       const data = await client.ModifyAgentVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.BindExternalAgent", async function () {
    try {
       const data = await client.BindExternalAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeExternalAgent", async function () {
    try {
       const data = await client.DescribeExternalAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.CreateAgentSession", async function () {
    try {
       const data = await client.CreateAgentSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeMessageEventList", async function () {
    try {
       const data = await client.DescribeMessageEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeAgent", async function () {
    try {
       const data = await client.DescribeAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeUserAccessToken", async function () {
    try {
       const data = await client.DescribeUserAccessToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DeleteAgent", async function () {
    try {
       const data = await client.DeleteAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.CreateAgentVersion", async function () {
    try {
       const data = await client.CreateAgentVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("workbuddyenterprise.v20260709.DescribeAgentList", async function () {
    try {
       const data = await client.DescribeAgentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
