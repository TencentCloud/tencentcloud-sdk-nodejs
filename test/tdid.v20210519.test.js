
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tdid.v20210519.Client({
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
describe("tdid.v20210519.test.js", function () {

it("tdid.v20210519.CreateSelectiveCredential", async function () {
    try {
       const data = await client.CreateSelectiveCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetAuthoritiesList", async function () {
    try {
       const data = await client.GetAuthoritiesList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetPolicyList", async function () {
    try {
       const data = await client.GetPolicyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCredentialStatus", async function () {
    try {
       const data = await client.GetCredentialStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetPublicKey", async function () {
    try {
       const data = await client.GetPublicKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CheckChain", async function () {
    try {
       const data = await client.CheckChain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.QueryPolicy", async function () {
    try {
       const data = await client.QueryPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CheckDidDeploy", async function () {
    try {
       const data = await client.CheckDidDeploy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.RecognizeAuthorityIssuer", async function () {
    try {
       const data = await client.RecognizeAuthorityIssuer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CancelAuthorityIssuer", async function () {
    try {
       const data = await client.CancelAuthorityIssuer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidRegisterTrend", async function () {
    try {
       const data = await client.GetDidRegisterTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidDetail", async function () {
    try {
       const data = await client.GetDidDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.RemoveHash", async function () {
    try {
       const data = await client.RemoveHash({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCredentialIssueRank", async function () {
    try {
       const data = await client.GetCredentialIssueRank({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetGroupList", async function () {
    try {
       const data = await client.GetGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.RegisterClaimPolicy", async function () {
    try {
       const data = await client.RegisterClaimPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetConsortiumList", async function () {
    try {
       const data = await client.GetConsortiumList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidClusterList", async function () {
    try {
       const data = await client.GetDidClusterList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidServiceDetail", async function () {
    try {
       const data = await client.GetDidServiceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCptList", async function () {
    try {
       const data = await client.GetCptList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCredentialIssueTrend", async function () {
    try {
       const data = await client.GetCredentialIssueTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.DeployByName", async function () {
    try {
       const data = await client.DeployByName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateDidService", async function () {
    try {
       const data = await client.CreateDidService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateCredential", async function () {
    try {
       const data = await client.CreateCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidClusterDetail", async function () {
    try {
       const data = await client.GetDidClusterDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.SetCredentialStatus", async function () {
    try {
       const data = await client.SetCredentialStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetLabelList", async function () {
    try {
       const data = await client.GetLabelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.EnableHash", async function () {
    try {
       const data = await client.EnableHash({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDeployList", async function () {
    try {
       const data = await client.GetDeployList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDid", async function () {
    try {
       const data = await client.CreateTDid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.RegisterIssuer", async function () {
    try {
       const data = await client.RegisterIssuer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDeployInfo", async function () {
    try {
       const data = await client.GetDeployInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCredentialCptRank", async function () {
    try {
       const data = await client.GetCredentialCptRank({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCptInfo", async function () {
    try {
       const data = await client.GetCptInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidDocument", async function () {
    try {
       const data = await client.GetDidDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidServiceList", async function () {
    try {
       const data = await client.GetDidServiceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDidList", async function () {
    try {
       const data = await client.GetDidList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDidByPublicKey", async function () {
    try {
       const data = await client.CreateTDidByPublicKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetAgencyTDid", async function () {
    try {
       const data = await client.GetAgencyTDid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDidByPrivateKey", async function () {
    try {
       const data = await client.CreateTDidByPrivateKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.AddLabel", async function () {
    try {
       const data = await client.AddLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.DownCpt", async function () {
    try {
       const data = await client.DownCpt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.RegisterCpt", async function () {
    try {
       const data = await client.RegisterCpt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetConsortiumClusterList", async function () {
    try {
       const data = await client.GetConsortiumClusterList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.VerifyCredential", async function () {
    try {
       const data = await client.VerifyCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetDataPanel", async function () {
    try {
       const data = await client.GetDataPanel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetAuthorityIssuer", async function () {
    try {
       const data = await client.GetAuthorityIssuer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateLabel", async function () {
    try {
       const data = await client.CreateLabel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
