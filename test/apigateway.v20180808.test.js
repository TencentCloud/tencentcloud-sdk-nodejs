
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.apigateway.v20180808.Client({
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
describe("apigateway.v20180808.test.js", function () {

it("apigateway.v20180808.CreateService", async function () {
    try {
       const data = await client.CreateService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeUsagePlansStatus", async function () {
    try {
       const data = await client.DescribeUsagePlansStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeAPIDocDetail", async function () {
    try {
       const data = await client.DescribeAPIDocDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiAppBindApisStatus", async function () {
    try {
       const data = await client.DescribeApiAppBindApisStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeUsagePlanSecretIds", async function () {
    try {
       const data = await client.DescribeUsagePlanSecretIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceForApiApp", async function () {
    try {
       const data = await client.DescribeServiceForApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyIPStrategy", async function () {
    try {
       const data = await client.ModifyIPStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UpdateService", async function () {
    try {
       const data = await client.UpdateService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyPlugin", async function () {
    try {
       const data = await client.ModifyPlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteApiApp", async function () {
    try {
       const data = await client.DeleteApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServicesStatus", async function () {
    try {
       const data = await client.DescribeServicesStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeAPIDocs", async function () {
    try {
       const data = await client.DescribeAPIDocs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceSubDomainMappings", async function () {
    try {
       const data = await client.DescribeServiceSubDomainMappings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeAllPluginApis", async function () {
    try {
       const data = await client.DescribeAllPluginApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UnBindIPStrategy", async function () {
    try {
       const data = await client.UnBindIPStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ResetAPIDocPassword", async function () {
    try {
       const data = await client.ResetAPIDocPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribePluginApis", async function () {
    try {
       const data = await client.DescribePluginApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DisableApiKey", async function () {
    try {
       const data = await client.DisableApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiEnvironmentStrategy", async function () {
    try {
       const data = await client.DescribeApiEnvironmentStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiAppsStatus", async function () {
    try {
       const data = await client.DescribeApiAppsStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiApp", async function () {
    try {
       const data = await client.DescribeApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeUpstreams", async function () {
    try {
       const data = await client.DescribeUpstreams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApi", async function () {
    try {
       const data = await client.DescribeApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.GenerateApiDocument", async function () {
    try {
       const data = await client.GenerateApiDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UnbindApiApp", async function () {
    try {
       const data = await client.UnbindApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteUsagePlan", async function () {
    try {
       const data = await client.DeleteUsagePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreateApiApp", async function () {
    try {
       const data = await client.CreateApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiKeysStatus", async function () {
    try {
       const data = await client.DescribeApiKeysStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreateAPIDoc", async function () {
    try {
       const data = await client.CreateAPIDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeIPStrategyApisStatus", async function () {
    try {
       const data = await client.DescribeIPStrategyApisStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UnReleaseService", async function () {
    try {
       const data = await client.UnReleaseService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceEnvironmentReleaseHistory", async function () {
    try {
       const data = await client.DescribeServiceEnvironmentReleaseHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteApi", async function () {
    try {
       const data = await client.DeleteApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UpdateApiAppKey", async function () {
    try {
       const data = await client.UpdateApiAppKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyUsagePlan", async function () {
    try {
       const data = await client.ModifyUsagePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.BindEnvironment", async function () {
    try {
       const data = await client.BindEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyAPIDoc", async function () {
    try {
       const data = await client.ModifyAPIDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UnBindSecretIds", async function () {
    try {
       const data = await client.UnBindSecretIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeIPStrategy", async function () {
    try {
       const data = await client.DescribeIPStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyUpstream", async function () {
    try {
       const data = await client.ModifyUpstream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceReleaseVersion", async function () {
    try {
       const data = await client.DescribeServiceReleaseVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApisStatus", async function () {
    try {
       const data = await client.DescribeApisStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreateApiKey", async function () {
    try {
       const data = await client.CreateApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifySubDomain", async function () {
    try {
       const data = await client.ModifySubDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteIPStrategy", async function () {
    try {
       const data = await client.DeleteIPStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyService", async function () {
    try {
       const data = await client.ModifyService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeExclusiveInstances", async function () {
    try {
       const data = await client.DescribeExclusiveInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeService", async function () {
    try {
       const data = await client.DescribeService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreatePlugin", async function () {
    try {
       const data = await client.CreatePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribePlugins", async function () {
    try {
       const data = await client.DescribePlugins({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteApiKey", async function () {
    try {
       const data = await client.DeleteApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreateApi", async function () {
    try {
       const data = await client.CreateApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeExclusiveInstanceDetail", async function () {
    try {
       const data = await client.DescribeExclusiveInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.AttachPlugin", async function () {
    try {
       const data = await client.AttachPlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.BindApiApp", async function () {
    try {
       const data = await client.BindApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiBindApiAppsStatus", async function () {
    try {
       const data = await client.DescribeApiBindApiAppsStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeLogSearch", async function () {
    try {
       const data = await client.DescribeLogSearch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteService", async function () {
    try {
       const data = await client.DeleteService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyApiIncrement", async function () {
    try {
       const data = await client.ModifyApiIncrement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiUsagePlan", async function () {
    try {
       const data = await client.DescribeApiUsagePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeIPStrategysStatus", async function () {
    try {
       const data = await client.DescribeIPStrategysStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyServiceEnvironmentStrategy", async function () {
    try {
       const data = await client.ModifyServiceEnvironmentStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyExclusiveInstance", async function () {
    try {
       const data = await client.ModifyExclusiveInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreateUpstream", async function () {
    try {
       const data = await client.CreateUpstream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeUsagePlanEnvironments", async function () {
    try {
       const data = await client.DescribeUsagePlanEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribePlugin", async function () {
    try {
       const data = await client.DescribePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DetachPlugin", async function () {
    try {
       const data = await client.DetachPlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceEnvironmentList", async function () {
    try {
       const data = await client.DescribeServiceEnvironmentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteUpstream", async function () {
    try {
       const data = await client.DeleteUpstream({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UnBindSubDomain", async function () {
    try {
       const data = await client.UnBindSubDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceEnvironmentStrategy", async function () {
    try {
       const data = await client.DescribeServiceEnvironmentStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteServiceSubDomainMapping", async function () {
    try {
       const data = await client.DeleteServiceSubDomainMapping({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiKey", async function () {
    try {
       const data = await client.DescribeApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeUpstreamBindApis", async function () {
    try {
       const data = await client.DescribeUpstreamBindApis({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ReleaseService", async function () {
    try {
       const data = await client.ReleaseService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.BindSecretIds", async function () {
    try {
       const data = await client.BindSecretIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeApiForApiApp", async function () {
    try {
       const data = await client.DescribeApiForApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.BuildAPIDoc", async function () {
    try {
       const data = await client.BuildAPIDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyApiEnvironmentStrategy", async function () {
    try {
       const data = await client.ModifyApiEnvironmentStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyApi", async function () {
    try {
       const data = await client.ModifyApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DemoteServiceUsagePlan", async function () {
    try {
       const data = await client.DemoteServiceUsagePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceSubDomains", async function () {
    try {
       const data = await client.DescribeServiceSubDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeServiceUsagePlan", async function () {
    try {
       const data = await client.DescribeServiceUsagePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreateUsagePlan", async function () {
    try {
       const data = await client.CreateUsagePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UpdateApiKey", async function () {
    try {
       const data = await client.UpdateApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeletePlugin", async function () {
    try {
       const data = await client.DeletePlugin({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.BindIPStrategy", async function () {
    try {
       const data = await client.BindIPStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.EnableApiKey", async function () {
    try {
       const data = await client.EnableApiKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.CreateIPStrategy", async function () {
    try {
       const data = await client.CreateIPStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DeleteAPIDoc", async function () {
    try {
       const data = await client.DeleteAPIDoc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.UnBindEnvironment", async function () {
    try {
       const data = await client.UnBindEnvironment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.ModifyApiApp", async function () {
    try {
       const data = await client.ModifyApiApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.DescribeUsagePlan", async function () {
    try {
       const data = await client.DescribeUsagePlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("apigateway.v20180808.BindSubDomain", async function () {
    try {
       const data = await client.BindSubDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
