
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tsf.v20180326.Client({
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
describe("tsf.v20180326.test.js", function () {

it("tsf.v20180326.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeletePublicConfig", async function () {
    try {
       const data = await client.DeletePublicConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeConfig", async function () {
    try {
       const data = await client.DescribeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeMicroservices", async function () {
    try {
       const data = await client.DescribeMicroservices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyContainerReplicas", async function () {
    try {
       const data = await client.ModifyContainerReplicas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ShrinkInstances", async function () {
    try {
       const data = await client.ShrinkInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DisableUnitRule", async function () {
    try {
       const data = await client.DisableUnitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePodInstances", async function () {
    try {
       const data = await client.DescribePodInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeUsableUnitNamespaces", async function () {
    try {
       const data = await client.DescribeUsableUnitNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateNamespace", async function () {
    try {
       const data = await client.CreateNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.AddClusterInstances", async function () {
    try {
       const data = await client.AddClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteLaneRule", async function () {
    try {
       const data = await client.DeleteLaneRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RedoTaskFlowBatch", async function () {
    try {
       const data = await client.RedoTaskFlowBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePublicConfigSummary", async function () {
    try {
       const data = await client.DescribePublicConfigSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeContainerGroups", async function () {
    try {
       const data = await client.DescribeContainerGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroupAttribute", async function () {
    try {
       const data = await client.DescribeGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeConfigs", async function () {
    try {
       const data = await client.DescribeConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DisableTask", async function () {
    try {
       const data = await client.DisableTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeMsApiList", async function () {
    try {
       const data = await client.DescribeMsApiList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RevocationPublicConfig", async function () {
    try {
       const data = await client.RevocationPublicConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateCluster", async function () {
    try {
       const data = await client.CreateCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeOverviewInvocation", async function () {
    try {
       const data = await client.DescribeOverviewInvocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.StopTaskExecute", async function () {
    try {
       const data = await client.StopTaskExecute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeContainerGroupDetail", async function () {
    try {
       const data = await client.DescribeContainerGroupDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.EnableUnitRule", async function () {
    try {
       const data = await client.EnableUnitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RollbackConfig", async function () {
    try {
       const data = await client.RollbackConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeImageTags", async function () {
    try {
       const data = await client.DescribeImageTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeFileConfigs", async function () {
    try {
       const data = await client.DescribeFileConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeSimpleClusters", async function () {
    try {
       const data = await client.DescribeSimpleClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApiDetail", async function () {
    try {
       const data = await client.DescribeApiDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroupsWithPlugin", async function () {
    try {
       const data = await client.DescribeGroupsWithPlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DisableUnitRoute", async function () {
    try {
       const data = await client.DisableUnitRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateConfig", async function () {
    try {
       const data = await client.CreateConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateMicroservice", async function () {
    try {
       const data = await client.CreateMicroservice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteImageTags", async function () {
    try {
       const data = await client.DeleteImageTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeDownloadInfo", async function () {
    try {
       const data = await client.DescribeDownloadInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApplications", async function () {
    try {
       const data = await client.DescribeApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeContainerGroupDeployInfo", async function () {
    try {
       const data = await client.DescribeContainerGroupDeployInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeUnitApiUseDetail", async function () {
    try {
       const data = await client.DescribeUnitApiUseDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.BindPlugin", async function () {
    try {
       const data = await client.BindPlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroupBindedGateways", async function () {
    try {
       const data = await client.DescribeGroupBindedGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteUnitRule", async function () {
    try {
       const data = await client.DeleteUnitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApplication", async function () {
    try {
       const data = await client.DescribeApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateUnitRule", async function () {
    try {
       const data = await client.UpdateUnitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateUnitRule", async function () {
    try {
       const data = await client.CreateUnitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroupUseDetail", async function () {
    try {
       const data = await client.DescribeGroupUseDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePublicConfig", async function () {
    try {
       const data = await client.DescribePublicConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateRepository", async function () {
    try {
       const data = await client.UpdateRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateApiTimeouts", async function () {
    try {
       const data = await client.UpdateApiTimeouts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeFlowLastBatchState", async function () {
    try {
       const data = await client.DescribeFlowLastBatchState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateHealthCheckSettings", async function () {
    try {
       const data = await client.UpdateHealthCheckSettings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeTaskRecords", async function () {
    try {
       const data = await client.DescribeTaskRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ExecuteTask", async function () {
    try {
       const data = await client.ExecuteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateGatewayApi", async function () {
    try {
       const data = await client.CreateGatewayApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeSimpleNamespaces", async function () {
    try {
       const data = await client.DescribeSimpleNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateApiRateLimitRule", async function () {
    try {
       const data = await client.CreateApiRateLimitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteMicroservice", async function () {
    try {
       const data = await client.DeleteMicroservice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.StopContainerGroup", async function () {
    try {
       const data = await client.StopContainerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroupRelease", async function () {
    try {
       const data = await client.DescribeGroupRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeCreateGatewayApiStatus", async function () {
    try {
       const data = await client.DescribeCreateGatewayApiStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeInvocationMetricDataPoint", async function () {
    try {
       const data = await client.DescribeInvocationMetricDataPoint({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyTask", async function () {
    try {
       const data = await client.ModifyTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateApiRateLimitRule", async function () {
    try {
       const data = await client.UpdateApiRateLimitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePluginInstances", async function () {
    try {
       const data = await client.DescribePluginInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UnbindApiGroup", async function () {
    try {
       const data = await client.UnbindApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateLaneRule", async function () {
    try {
       const data = await client.CreateLaneRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteContainerGroup", async function () {
    try {
       const data = await client.DeleteContainerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApiGroups", async function () {
    try {
       const data = await client.DescribeApiGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ReleaseConfig", async function () {
    try {
       const data = await client.ReleaseConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.TerminateTaskFlowBatch", async function () {
    try {
       const data = await client.TerminateTaskFlowBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateApiRateLimitRules", async function () {
    try {
       const data = await client.UpdateApiRateLimitRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroups", async function () {
    try {
       const data = await client.DescribeGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeImageRepository", async function () {
    try {
       const data = await client.DescribeImageRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeRepositories", async function () {
    try {
       const data = await client.DescribeRepositories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DisableTaskFlow", async function () {
    try {
       const data = await client.DisableTaskFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateAllGatewayApiAsync", async function () {
    try {
       const data = await client.CreateAllGatewayApiAsync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateRepository", async function () {
    try {
       const data = await client.CreateRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeClusterInstances", async function () {
    try {
       const data = await client.DescribeClusterInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreatePublicConfig", async function () {
    try {
       const data = await client.CreatePublicConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.BindApiGroup", async function () {
    try {
       const data = await client.BindApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeInovcationIndicators", async function () {
    try {
       const data = await client.DescribeInovcationIndicators({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeSimpleGroups", async function () {
    try {
       const data = await client.DescribeSimpleGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeStatistics", async function () {
    try {
       const data = await client.DescribeStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.EnableTask", async function () {
    try {
       const data = await client.EnableTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ReleaseFileConfig", async function () {
    try {
       const data = await client.ReleaseFileConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroupGateways", async function () {
    try {
       const data = await client.DescribeGroupGateways({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeUnitNamespaces", async function () {
    try {
       const data = await client.DescribeUnitNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyUploadInfo", async function () {
    try {
       const data = await client.ModifyUploadInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.AddInstances", async function () {
    try {
       const data = await client.AddInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeConfigSummary", async function () {
    try {
       const data = await client.DescribeConfigSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeInvocationMetricScatterPlot", async function () {
    try {
       const data = await client.DescribeInvocationMetricScatterPlot({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateFileConfig", async function () {
    try {
       const data = await client.CreateFileConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RedoTask", async function () {
    try {
       const data = await client.RedoTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePkgs", async function () {
    try {
       const data = await client.DescribePkgs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateApiGroup", async function () {
    try {
       const data = await client.CreateApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeSimpleApplications", async function () {
    try {
       const data = await client.DescribeSimpleApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApiGroup", async function () {
    try {
       const data = await client.DescribeApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ReleaseApiGroup", async function () {
    try {
       const data = await client.ReleaseApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeletePathRewrites", async function () {
    try {
       const data = await client.DeletePathRewrites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateGroup", async function () {
    try {
       const data = await client.CreateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeTaskLastStatus", async function () {
    try {
       const data = await client.DescribeTaskLastStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroupInstances", async function () {
    try {
       const data = await client.DescribeGroupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteRepository", async function () {
    try {
       const data = await client.DeleteRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeletePkgs", async function () {
    try {
       const data = await client.DeletePkgs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.StopTaskBatch", async function () {
    try {
       const data = await client.StopTaskBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePublicConfigs", async function () {
    try {
       const data = await client.DescribePublicConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePathRewrite", async function () {
    try {
       const data = await client.DescribePathRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeInvocationMetricDataCurve", async function () {
    try {
       const data = await client.DescribeInvocationMetricDataCurve({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RemoveInstances", async function () {
    try {
       const data = await client.RemoveInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.OperateApplicationTcrBinding", async function () {
    try {
       const data = await client.OperateApplicationTcrBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ExpandGroup", async function () {
    try {
       const data = await client.ExpandGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteTask", async function () {
    try {
       const data = await client.DeleteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePathRewrites", async function () {
    try {
       const data = await client.DescribePathRewrites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteLane", async function () {
    try {
       const data = await client.DeleteLane({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeConfigReleases", async function () {
    try {
       const data = await client.DescribeConfigReleases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateLane", async function () {
    try {
       const data = await client.CreateLane({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.StopGroup", async function () {
    try {
       const data = await client.StopGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGatewayMonitorOverview", async function () {
    try {
       const data = await client.DescribeGatewayMonitorOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeployGroup", async function () {
    try {
       const data = await client.DeployGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateApiGroup", async function () {
    try {
       const data = await client.UpdateApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyLane", async function () {
    try {
       const data = await client.ModifyLane({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyMicroservice", async function () {
    try {
       const data = await client.ModifyMicroservice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.EnableTaskFlow", async function () {
    try {
       const data = await client.EnableTaskFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeUnitRule", async function () {
    try {
       const data = await client.DescribeUnitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreatePathRewrites", async function () {
    try {
       const data = await client.CreatePathRewrites({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteApiGroup", async function () {
    try {
       const data = await client.DeleteApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateApplication", async function () {
    try {
       const data = await client.CreateApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyPathRewrite", async function () {
    try {
       const data = await client.ModifyPathRewrite({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RedoTaskBatch", async function () {
    try {
       const data = await client.RedoTaskBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePublicConfigReleaseLogs", async function () {
    try {
       const data = await client.DescribePublicConfigReleaseLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeConfigReleaseLogs", async function () {
    try {
       const data = await client.DescribeConfigReleaseLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ExecuteTaskFlow", async function () {
    try {
       const data = await client.ExecuteTaskFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeMicroservice", async function () {
    try {
       const data = await client.DescribeMicroservice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteServerlessGroup", async function () {
    try {
       const data = await client.DeleteServerlessGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RedoTaskExecute", async function () {
    try {
       const data = await client.RedoTaskExecute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeJvmMonitor", async function () {
    try {
       const data = await client.DescribeJvmMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGatewayAllGroupApis", async function () {
    try {
       const data = await client.DescribeGatewayAllGroupApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.StartContainerGroup", async function () {
    try {
       const data = await client.StartContainerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.SearchBusinessLog", async function () {
    try {
       const data = await client.SearchBusinessLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeployContainerGroup", async function () {
    try {
       const data = await client.DeployContainerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.SearchStdoutLog", async function () {
    try {
       const data = await client.SearchStdoutLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateTaskFlow", async function () {
    try {
       const data = await client.CreateTaskFlow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGroup", async function () {
    try {
       const data = await client.DescribeGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteApplication", async function () {
    try {
       const data = await client.DeleteApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApiRateLimitRules", async function () {
    try {
       const data = await client.DescribeApiRateLimitRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteNamespace", async function () {
    try {
       const data = await client.DeleteNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeBasicResourceUsage", async function () {
    try {
       const data = await client.DescribeBasicResourceUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteConfig", async function () {
    try {
       const data = await client.DeleteConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ReleasePublicConfig", async function () {
    try {
       const data = await client.ReleasePublicConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DeleteUnitNamespaces", async function () {
    try {
       const data = await client.DeleteUnitNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DraftApiGroup", async function () {
    try {
       const data = await client.DraftApiGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeGatewayApis", async function () {
    try {
       const data = await client.DescribeGatewayApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ContinueRunFailedTaskBatch", async function () {
    try {
       const data = await client.ContinueRunFailedTaskBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApiVersions", async function () {
    try {
       const data = await client.DescribeApiVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ChangeApiUsableStatus", async function () {
    try {
       const data = await client.ChangeApiUsableStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.CreateContainGroup", async function () {
    try {
       const data = await client.CreateContainGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeEnabledUnitRule", async function () {
    try {
       const data = await client.DescribeEnabledUnitRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeRepository", async function () {
    try {
       const data = await client.DescribeRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeInvocationMetricDataDimension", async function () {
    try {
       const data = await client.DescribeInvocationMetricDataDimension({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApplicationAttribute", async function () {
    try {
       const data = await client.DescribeApplicationAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.RevocationConfig", async function () {
    try {
       const data = await client.RevocationConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeLaneRules", async function () {
    try {
       const data = await client.DescribeLaneRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyLaneRule", async function () {
    try {
       const data = await client.ModifyLaneRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeReleasedConfig", async function () {
    try {
       const data = await client.DescribeReleasedConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribePublicConfigReleases", async function () {
    try {
       const data = await client.DescribePublicConfigReleases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeLanes", async function () {
    try {
       const data = await client.DescribeLanes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeApiUseDetail", async function () {
    try {
       const data = await client.DescribeApiUseDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeUploadInfo", async function () {
    try {
       const data = await client.DescribeUploadInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.EnableUnitRoute", async function () {
    try {
       const data = await client.EnableUnitRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.UpdateGatewayApi", async function () {
    try {
       const data = await client.UpdateGatewayApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeContainerEvents", async function () {
    try {
       const data = await client.DescribeContainerEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ShrinkGroup", async function () {
    try {
       const data = await client.ShrinkGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.StartGroup", async function () {
    try {
       const data = await client.StartGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.ModifyContainerGroup", async function () {
    try {
       const data = await client.ModifyContainerGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tsf.v20180326.DescribeUnitRules", async function () {
    try {
       const data = await client.DescribeUnitRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
