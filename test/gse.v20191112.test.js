
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gse.v20191112.Client({
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
describe("gse.v20191112.test.js", function () {

it("gse.v20191112.UpdateBucketCORSOpt", async function () {
    try {
       const data = await client.UpdateBucketCORSOpt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DeleteFleet", async function () {
    try {
       const data = await client.DeleteFleet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateFleetCapacity", async function () {
    try {
       const data = await client.UpdateFleetCapacity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetRelatedResources", async function () {
    try {
       const data = await client.DescribeFleetRelatedResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeRuntimeConfiguration", async function () {
    try {
       const data = await client.DescribeRuntimeConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateAlias", async function () {
    try {
       const data = await client.UpdateAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessionPlacement", async function () {
    try {
       const data = await client.DescribeGameServerSessionPlacement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessionDetails", async function () {
    try {
       const data = await client.DescribeGameServerSessionDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CreateAsset", async function () {
    try {
       const data = await client.CreateAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.SetServerReserved", async function () {
    try {
       const data = await client.SetServerReserved({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CreateGameServerSessionQueue", async function () {
    try {
       const data = await client.CreateGameServerSessionQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeInstanceLimit", async function () {
    try {
       const data = await client.DescribeInstanceLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DeleteAsset", async function () {
    try {
       const data = await client.DeleteAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.ListFleets", async function () {
    try {
       const data = await client.ListFleets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.GetGameServerSessionLogUrl", async function () {
    try {
       const data = await client.GetGameServerSessionLogUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateRuntimeConfiguration", async function () {
    try {
       const data = await client.UpdateRuntimeConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetCapacity", async function () {
    try {
       const data = await client.DescribeFleetCapacity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.StopGameServerSessionPlacement", async function () {
    try {
       const data = await client.StopGameServerSessionPlacement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateBucketAccelerateOpt", async function () {
    try {
       const data = await client.UpdateBucketAccelerateOpt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DeleteGameServerSessionQueue", async function () {
    try {
       const data = await client.DeleteGameServerSessionQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessionQueues", async function () {
    try {
       const data = await client.DescribeGameServerSessionQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeCcnInstances", async function () {
    try {
       const data = await client.DescribeCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.PutScalingPolicy", async function () {
    try {
       const data = await client.PutScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeScalingPolicies", async function () {
    try {
       const data = await client.DescribeScalingPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CopyFleet", async function () {
    try {
       const data = await client.CopyFleet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessions", async function () {
    try {
       const data = await client.DescribeGameServerSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.StartGameServerSessionPlacement", async function () {
    try {
       const data = await client.StartGameServerSessionPlacement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.JoinGameServerSession", async function () {
    try {
       const data = await client.JoinGameServerSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.JoinGameServerSessionBatch", async function () {
    try {
       const data = await client.JoinGameServerSessionBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetStatisticSummary", async function () {
    try {
       const data = await client.DescribeFleetStatisticSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.ResolveAlias", async function () {
    try {
       const data = await client.ResolveAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DeleteAlias", async function () {
    try {
       const data = await client.DeleteAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DeleteTimerScalingPolicy", async function () {
    try {
       const data = await client.DeleteTimerScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateAsset", async function () {
    try {
       const data = await client.UpdateAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.StartFleetActions", async function () {
    try {
       const data = await client.StartFleetActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetPortSettings", async function () {
    try {
       const data = await client.DescribeFleetPortSettings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.GetUploadCredentials", async function () {
    try {
       const data = await client.GetUploadCredentials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.AttachCcnInstances", async function () {
    try {
       const data = await client.AttachCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DetachCcnInstances", async function () {
    try {
       const data = await client.DetachCcnInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DeleteScalingPolicy", async function () {
    try {
       const data = await client.DeleteScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CreateAlias", async function () {
    try {
       const data = await client.CreateAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetStatisticFlows", async function () {
    try {
       const data = await client.DescribeFleetStatisticFlows({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CreateGameServerSession", async function () {
    try {
       const data = await client.CreateGameServerSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribePlayerSessions", async function () {
    try {
       const data = await client.DescribePlayerSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeAsset", async function () {
    try {
       const data = await client.DescribeAsset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeAssetSystems", async function () {
    try {
       const data = await client.DescribeAssetSystems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CreateFleet", async function () {
    try {
       const data = await client.CreateFleet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeTimerScalingPolicies", async function () {
    try {
       const data = await client.DescribeTimerScalingPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateGameServerSessionQueue", async function () {
    try {
       const data = await client.UpdateGameServerSessionQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.GetInstanceAccess", async function () {
    try {
       const data = await client.GetInstanceAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateFleetAttributes", async function () {
    try {
       const data = await client.UpdateFleetAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeUserQuota", async function () {
    try {
       const data = await client.DescribeUserQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetAttributes", async function () {
    try {
       const data = await client.DescribeFleetAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateGameServerSession", async function () {
    try {
       const data = await client.UpdateGameServerSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.GetUploadFederationToken", async function () {
    try {
       const data = await client.GetUploadFederationToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.GetGameServerInstanceLogUrl", async function () {
    try {
       const data = await client.GetGameServerInstanceLogUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.SearchGameServerSessions", async function () {
    try {
       const data = await client.SearchGameServerSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetStatisticDetails", async function () {
    try {
       const data = await client.DescribeFleetStatisticDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeAssets", async function () {
    try {
       const data = await client.DescribeAssets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CreateAssetWithImage", async function () {
    try {
       const data = await client.CreateAssetWithImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.StopFleetActions", async function () {
    try {
       const data = await client.StopFleetActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeInstancesExtend", async function () {
    try {
       const data = await client.DescribeInstancesExtend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeAlias", async function () {
    try {
       const data = await client.DescribeAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.ListAliases", async function () {
    try {
       const data = await client.ListAliases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateFleetPortSettings", async function () {
    try {
       const data = await client.UpdateFleetPortSettings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeUserQuotas", async function () {
    try {
       const data = await client.DescribeUserQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeInstanceTypes", async function () {
    try {
       const data = await client.DescribeInstanceTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetEvents", async function () {
    try {
       const data = await client.DescribeFleetEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.SetServerWeight", async function () {
    try {
       const data = await client.SetServerWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.UpdateFleetName", async function () {
    try {
       const data = await client.UpdateFleetName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeFleetUtilization", async function () {
    try {
       const data = await client.DescribeFleetUtilization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.EndGameServerSessionAndProcess", async function () {
    try {
       const data = await client.EndGameServerSessionAndProcess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.PutTimerScalingPolicy", async function () {
    try {
       const data = await client.PutTimerScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
