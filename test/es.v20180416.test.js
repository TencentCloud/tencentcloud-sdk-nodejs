
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.es.v20180416.Client({
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
describe("es.v20180416.test.js", function () {

it("es.v20180416.DiagnoseInstance", async function () {
    try {
       const data = await client.DiagnoseInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DeleteLogstashInstance", async function () {
    try {
       const data = await client.DeleteLogstashInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateIndex", async function () {
    try {
       const data = await client.UpdateIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.GetRequestTargetNodeTypes", async function () {
    try {
       const data = await client.GetRequestTargetNodeTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.StopLogstashPipelines", async function () {
    try {
       const data = await client.StopLogstashPipelines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeServerlessSpaces", async function () {
    try {
       const data = await client.DescribeServerlessSpaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeIndexList", async function () {
    try {
       const data = await client.DescribeIndexList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateLogstashPipelineDesc", async function () {
    try {
       const data = await client.UpdateLogstashPipelineDesc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeUserCosSnapshotList", async function () {
    try {
       const data = await client.DescribeUserCosSnapshotList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DeleteInstance", async function () {
    try {
       const data = await client.DeleteInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.GetDiagnoseSettings", async function () {
    try {
       const data = await client.GetDiagnoseSettings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.CreateIndex", async function () {
    try {
       const data = await client.CreateIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateRequestTargetNodeTypes", async function () {
    try {
       const data = await client.UpdateRequestTargetNodeTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateDiagnoseSettings", async function () {
    try {
       const data = await client.UpdateDiagnoseSettings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.CreateCosMigrateToServerlessInstance", async function () {
    try {
       const data = await client.CreateCosMigrateToServerlessInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdatePlugins", async function () {
    try {
       const data = await client.UpdatePlugins({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateLogstashInstance", async function () {
    try {
       const data = await client.UpdateLogstashInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.CheckMigrateIndexMetaData", async function () {
    try {
       const data = await client.CheckMigrateIndexMetaData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateJdk", async function () {
    try {
       const data = await client.UpdateJdk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DeleteServerlessInstance", async function () {
    try {
       const data = await client.DeleteServerlessInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeDiagnose", async function () {
    try {
       const data = await client.DescribeDiagnose({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateInstance", async function () {
    try {
       const data = await client.UpdateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.CreateLogstashInstance", async function () {
    try {
       const data = await client.CreateLogstashInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.RestartInstance", async function () {
    try {
       const data = await client.RestartInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeInstanceLogs", async function () {
    try {
       const data = await client.DescribeInstanceLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.RestartKibana", async function () {
    try {
       const data = await client.RestartKibana({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.ModifyEsVipSecurityGroup", async function () {
    try {
       const data = await client.ModifyEsVipSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeLogstashInstanceOperations", async function () {
    try {
       const data = await client.DescribeLogstashInstanceOperations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.StartLogstashPipelines", async function () {
    try {
       const data = await client.StartLogstashPipelines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeInstanceOperations", async function () {
    try {
       const data = await client.DescribeInstanceOperations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeLogstashPipelines", async function () {
    try {
       const data = await client.DescribeLogstashPipelines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeLogstashInstances", async function () {
    try {
       const data = await client.DescribeLogstashInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.CreateServerlessSpaceV2", async function () {
    try {
       const data = await client.CreateServerlessSpaceV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeViews", async function () {
    try {
       const data = await client.DescribeViews({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateServerlessInstance", async function () {
    try {
       const data = await client.UpdateServerlessInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpgradeInstance", async function () {
    try {
       const data = await client.UpgradeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DeleteLogstashPipelines", async function () {
    try {
       const data = await client.DeleteLogstashPipelines({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateServerlessSpace", async function () {
    try {
       const data = await client.UpdateServerlessSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DeleteIndex", async function () {
    try {
       const data = await client.DeleteIndex({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.RestartLogstashInstance", async function () {
    try {
       const data = await client.RestartLogstashInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DeleteServerlessSpaceUser", async function () {
    try {
       const data = await client.DeleteServerlessSpaceUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeLogstashInstanceLogs", async function () {
    try {
       const data = await client.DescribeLogstashInstanceLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.RestartNodes", async function () {
    try {
       const data = await client.RestartNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeServerlessSpaceUser", async function () {
    try {
       const data = await client.DescribeServerlessSpaceUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.SaveAndDeployLogstashPipeline", async function () {
    try {
       const data = await client.SaveAndDeployLogstashPipeline({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpdateDictionaries", async function () {
    try {
       const data = await client.UpdateDictionaries({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.UpgradeLicense", async function () {
    try {
       const data = await client.UpgradeLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeInstancePluginList", async function () {
    try {
       const data = await client.DescribeInstancePluginList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeServerlessInstances", async function () {
    try {
       const data = await client.DescribeServerlessInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.DescribeIndexMeta", async function () {
    try {
       const data = await client.DescribeIndexMeta({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.CreateServerlessInstance", async function () {
    try {
       const data = await client.CreateServerlessInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("es.v20180416.InquirePriceRenewInstance", async function () {
    try {
       const data = await client.InquirePriceRenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
