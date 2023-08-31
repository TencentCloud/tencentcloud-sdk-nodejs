
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dsgc.v20190723.Client({
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
describe("dsgc.v20190723.test.js", function () {

it("dsgc.v20190723.CreateDSPALevelGroup", async function () {
    try {
       const data = await client.CreateDSPALevelGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskDealedOverview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskDealedOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CopyDSPATemplate", async function () {
    try {
       const data = await client.CopyDSPATemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskLevelDetail", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskLevelDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskTemplateDetail", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskTemplateDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPAAssessmentRisk", async function () {
    try {
       const data = await client.ModifyDSPAAssessmentRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPACategoryRelation", async function () {
    try {
       const data = await client.ModifyDSPACategoryRelation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DisableDSPAMetaResourceAuth", async function () {
    try {
       const data = await client.DisableDSPAMetaResourceAuth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.StartDSPADiscoveryTask", async function () {
    try {
       const data = await client.StartDSPADiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentLatestRiskList", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentLatestRiskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPADiscoveryRules", async function () {
    try {
       const data = await client.DescribeDSPADiscoveryRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPAComplianceRules", async function () {
    try {
       const data = await client.CreateDSPAComplianceRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateAssetSortingReportRetryTask", async function () {
    try {
       const data = await client.CreateAssetSortingReportRetryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSDataAssetByComplianceId", async function () {
    try {
       const data = await client.DescribeDSPACOSDataAssetByComplianceId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskLevelList", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskLevelList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyClassificationRule", async function () {
    try {
       const data = await client.ModifyClassificationRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACategoryRuleStatistic", async function () {
    try {
       const data = await client.DescribeDSPACategoryRuleStatistic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeRuleDetail", async function () {
    try {
       const data = await client.DescribeRuleDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DeleteDSPACOSDiscoveryTaskResult", async function () {
    try {
       const data = await client.DeleteDSPACOSDiscoveryTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSDataAssetDetail", async function () {
    try {
       const data = await client.DescribeDSPACOSDataAssetDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeRDBAssetSensitiveDistribution", async function () {
    try {
       const data = await client.DescribeRDBAssetSensitiveDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPACOSDiscoveryTask", async function () {
    try {
       const data = await client.ModifyDSPACOSDiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DeleteDSPAMetaResource", async function () {
    try {
       const data = await client.DeleteDSPAMetaResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DeleteCosMetaResource", async function () {
    try {
       const data = await client.DeleteCosMetaResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyStandardInfo", async function () {
    try {
       const data = await client.ModifyStandardInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeReportTaskDownloadUrl", async function () {
    try {
       const data = await client.DescribeReportTaskDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSDiscoveryTaskResult", async function () {
    try {
       const data = await client.DescribeDSPACOSDiscoveryTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.BindDSPAResourceCosBuckets", async function () {
    try {
       const data = await client.BindDSPAResourceCosBuckets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPAComplianceGroup", async function () {
    try {
       const data = await client.ModifyDSPAComplianceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeAssetDetailDataExportResult", async function () {
    try {
       const data = await client.DescribeAssetDetailDataExportResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskSideDistributed", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskSideDistributed({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPADiscoveryTaskResultDetail", async function () {
    try {
       const data = await client.DescribeDSPADiscoveryTaskResultDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskLevelTrend", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskLevelTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRisks", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAComplianceGroupDetail", async function () {
    try {
       const data = await client.DescribeDSPAComplianceGroupDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPAAssessmentRiskLevel", async function () {
    try {
       const data = await client.CreateDSPAAssessmentRiskLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSTaskResultDetail", async function () {
    try {
       const data = await client.DescribeDSPACOSTaskResultDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPARDBDataAssetByComplianceId", async function () {
    try {
       const data = await client.DescribeDSPARDBDataAssetByComplianceId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeBindDBList", async function () {
    try {
       const data = await client.DescribeBindDBList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeExportTaskResult", async function () {
    try {
       const data = await client.DescribeExportTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ListDSPACosMetaResources", async function () {
    try {
       const data = await client.ListDSPACosMetaResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ListDSPAMetaResources", async function () {
    try {
       const data = await client.ListDSPAMetaResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACategories", async function () {
    try {
       const data = await client.DescribeDSPACategories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateNewClassification", async function () {
    try {
       const data = await client.CreateNewClassification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPAAssessmentRiskTemplate", async function () {
    try {
       const data = await client.ModifyDSPAAssessmentRiskTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPADiscoveryTaskDetail", async function () {
    try {
       const data = await client.DescribeDSPADiscoveryTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPADiscoveryTask", async function () {
    try {
       const data = await client.ModifyDSPADiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskAmountOverview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskAmountOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateClassificationRule", async function () {
    try {
       const data = await client.CreateClassificationRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAESDataAssetByComplianceId", async function () {
    try {
       const data = await client.DescribeDSPAESDataAssetByComplianceId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAComplianceGroups", async function () {
    try {
       const data = await client.DescribeDSPAComplianceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyLevelName", async function () {
    try {
       const data = await client.ModifyLevelName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSDiscoveryTaskDetail", async function () {
    try {
       const data = await client.DescribeDSPACOSDiscoveryTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPATaskResultDataSample", async function () {
    try {
       const data = await client.DescribeDSPATaskResultDataSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DeleteDSPACOSDiscoveryTask", async function () {
    try {
       const data = await client.DeleteDSPACOSDiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeMongoAssetSensitiveDistribution", async function () {
    try {
       const data = await client.DescribeMongoAssetSensitiveDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyLevelInfo", async function () {
    try {
       const data = await client.ModifyLevelInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPACategoryRelation", async function () {
    try {
       const data = await client.CreateDSPACategoryRelation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeSensitiveCOSDataDistribution", async function () {
    try {
       const data = await client.DescribeSensitiveCOSDataDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskDatasourceTop5", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskDatasourceTop5({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeReportTasks", async function () {
    try {
       const data = await client.DescribeReportTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSDiscoveryTaskFiles", async function () {
    try {
       const data = await client.DescribeDSPACOSDiscoveryTaskFiles({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentTemplates", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPAAssessmentRiskLatest", async function () {
    try {
       const data = await client.ModifyDSPAAssessmentRiskLatest({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.EnableDSPADiscoveryRule", async function () {
    try {
       const data = await client.EnableDSPADiscoveryRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateIdentifyRuleAnotherName", async function () {
    try {
       const data = await client.CreateIdentifyRuleAnotherName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DecribeSuggestRiskLevelMatrix", async function () {
    try {
       const data = await client.DecribeSuggestRiskLevelMatrix({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentPendingRiskOverview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentPendingRiskOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPAESTaskResult", async function () {
    try {
       const data = await client.ModifyDSPAESTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPARDBDataAssetDetail", async function () {
    try {
       const data = await client.DescribeDSPARDBDataAssetDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeClassificationInfo", async function () {
    try {
       const data = await client.DescribeClassificationInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskItemTop5", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskItemTop5({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.QueryResourceDbBindStatus", async function () {
    try {
       const data = await client.QueryResourceDbBindStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPADiscoveryServiceStatus", async function () {
    try {
       const data = await client.DescribeDSPADiscoveryServiceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.EnableTrialVersion", async function () {
    try {
       const data = await client.EnableTrialVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPATaskResult", async function () {
    try {
       const data = await client.ModifyDSPATaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPACategory", async function () {
    try {
       const data = await client.CreateDSPACategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPACOSDiscoveryTask", async function () {
    try {
       const data = await client.CreateDSPACOSDiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACategoryRules", async function () {
    try {
       const data = await client.DescribeDSPACategoryRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskTemplateVulnerableList", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskTemplateVulnerableList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyMergeClassification", async function () {
    try {
       const data = await client.ModifyMergeClassification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DeleteDSPAAssessmentTask", async function () {
    try {
       const data = await client.DeleteDSPAAssessmentTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.VerifyDSPADiscoveryRule", async function () {
    try {
       const data = await client.VerifyDSPADiscoveryRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSDiscoveryTasks", async function () {
    try {
       const data = await client.DescribeDSPACOSDiscoveryTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPALevelDetail", async function () {
    try {
       const data = await client.DescribeDSPALevelDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateOrCopyStandard", async function () {
    try {
       const data = await client.CreateOrCopyStandard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeAssetOverview", async function () {
    try {
       const data = await client.DescribeAssetOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPAAssessmentTask", async function () {
    try {
       const data = await client.CreateDSPAAssessmentTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.VerifyDSPACOSRule", async function () {
    try {
       const data = await client.VerifyDSPACOSRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPAAssessmentRiskTemplate", async function () {
    try {
       const data = await client.CreateDSPAAssessmentRiskTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskOverview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAESDataAssetDetail", async function () {
    try {
       const data = await client.DescribeDSPAESDataAssetDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPAComplianceGroup", async function () {
    try {
       const data = await client.CreateDSPAComplianceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPADataSourceDbInfo", async function () {
    try {
       const data = await client.DescribeDSPADataSourceDbInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPAMetaResources", async function () {
    try {
       const data = await client.CreateDSPAMetaResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyClassificationRuleState", async function () {
    try {
       const data = await client.ModifyClassificationRuleState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPAClusterInfo", async function () {
    try {
       const data = await client.ModifyDSPAClusterInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentHighRiskTop10Overview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentHighRiskTop10Overview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentLatestRiskDetailInfo", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentLatestRiskDetailInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeRuleList", async function () {
    try {
       const data = await client.DescribeRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentTasks", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPADiscoveryTaskTables", async function () {
    try {
       const data = await client.DescribeDSPADiscoveryTaskTables({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.GetUserQuotaInfo", async function () {
    try {
       const data = await client.GetUserQuotaInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAComplianceUpdateNotification", async function () {
    try {
       const data = await client.DescribeDSPAComplianceUpdateNotification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPADbMetaResources", async function () {
    try {
       const data = await client.CreateDSPADbMetaResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPACOSTaskResult", async function () {
    try {
       const data = await client.ModifyDSPACOSTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.BindDSPAResourceDatabases", async function () {
    try {
       const data = await client.BindDSPAResourceDatabases({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeESAssetSensitiveDistribution", async function () {
    try {
       const data = await client.DescribeESAssetSensitiveDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.AuthorizeDSPAMetaResources", async function () {
    try {
       const data = await client.AuthorizeDSPAMetaResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPASupportedMetas", async function () {
    try {
       const data = await client.DescribeDSPASupportedMetas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskDealedTrend", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskDealedTrend({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeSensitiveRDBDataDistribution", async function () {
    try {
       const data = await client.DescribeSensitiveRDBDataDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.RestartDSPAAssessmentTask", async function () {
    try {
       const data = await client.RestartDSPAAssessmentTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAESDiscoveryTaskResultDetail", async function () {
    try {
       const data = await client.DescribeDSPAESDiscoveryTaskResultDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DeleteDSPADiscoveryTask", async function () {
    try {
       const data = await client.DeleteDSPADiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.UpdateDSPASelfBuildResource", async function () {
    try {
       const data = await client.UpdateDSPASelfBuildResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPADiscoveryTaskResult", async function () {
    try {
       const data = await client.DescribeDSPADiscoveryTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPAAssessmentRiskLevel", async function () {
    try {
       const data = await client.ModifyDSPAAssessmentRiskLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPADiscoveryRule", async function () {
    try {
       const data = await client.CreateDSPADiscoveryRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyNewClassification", async function () {
    try {
       const data = await client.ModifyNewClassification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeCOSAssetSensitiveDistribution", async function () {
    try {
       const data = await client.DescribeCOSAssetSensitiveDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeLeafClassification", async function () {
    try {
       const data = await client.DescribeLeafClassification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPADiscoveryTask", async function () {
    try {
       const data = await client.CreateDSPADiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentNewDiscoveredRiskOverview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentNewDiscoveredRiskOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskProcessHistory", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskProcessHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.QueryDSPAMetaResourceDbList", async function () {
    try {
       const data = await client.QueryDSPAMetaResourceDbList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.GetTrialVersion", async function () {
    try {
       const data = await client.GetTrialVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskDistributionOverview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskDistributionOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeClassificationRuleCount", async function () {
    try {
       const data = await client.DescribeClassificationRuleCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACategoryTreeWithRules", async function () {
    try {
       const data = await client.DescribeDSPACategoryTreeWithRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.GetResourceConnectionStatus", async function () {
    try {
       const data = await client.GetResourceConnectionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAESDataSample", async function () {
    try {
       const data = await client.DescribeDSPAESDataSample({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentTemplateControlItems", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentTemplateControlItems({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyLevelState", async function () {
    try {
       const data = await client.ModifyLevelState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPALevelGroups", async function () {
    try {
       const data = await client.DescribeDSPALevelGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ListDSPAClusters", async function () {
    try {
       const data = await client.ListDSPAClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ExportAssetDetailData", async function () {
    try {
       const data = await client.ExportAssetDetailData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACategoryTree", async function () {
    try {
       const data = await client.DescribeDSPACategoryTree({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPASelfBuildMetaResource", async function () {
    try {
       const data = await client.CreateDSPASelfBuildMetaResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.StopDSPADiscoveryTask", async function () {
    try {
       const data = await client.StopDSPADiscoveryTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateDSPACosMetaResources", async function () {
    try {
       const data = await client.CreateDSPACosMetaResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPACategory", async function () {
    try {
       const data = await client.ModifyDSPACategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.ModifyDSPADiscoveryRule", async function () {
    try {
       const data = await client.ModifyDSPADiscoveryRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DeleteDSPADiscoveryTaskResult", async function () {
    try {
       const data = await client.DeleteDSPADiscoveryTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentRiskSideList", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentRiskSideList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPACOSDataAssetBuckets", async function () {
    try {
       const data = await client.DescribeDSPACOSDataAssetBuckets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.DescribeDSPAAssessmentProcessingRiskOverview", async function () {
    try {
       const data = await client.DescribeDSPAAssessmentProcessingRiskOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dsgc.v20190723.CreateAssetSortingReportTask", async function () {
    try {
       const data = await client.CreateAssetSortingReportTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
