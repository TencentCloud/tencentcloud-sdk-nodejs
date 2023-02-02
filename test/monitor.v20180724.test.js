
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.monitor.v20180724.Client({
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
describe("monitor.v20180724.test.js", function () {

it("monitor.v20180724.UpdateGrafanaNotificationChannel", async function () {
    try {
       const data = await client.UpdateGrafanaNotificationChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateAlertRule", async function () {
    try {
       const data = await client.CreateAlertRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePrometheusClusterAgent", async function () {
    try {
       const data = await client.DeletePrometheusClusterAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeBindingPolicyObjectList", async function () {
    try {
       const data = await client.DescribeBindingPolicyObjectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateAlertRule", async function () {
    try {
       const data = await client.UpdateAlertRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPrometheusAlertPolicy", async function () {
    try {
       const data = await client.ModifyPrometheusAlertPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusInstanceUsage", async function () {
    try {
       const data = await client.DescribePrometheusInstanceUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyAlarmReceivers", async function () {
    try {
       const data = await client.ModifyAlarmReceivers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.BindingPolicyObject", async function () {
    try {
       const data = await client.BindingPolicyObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateGrafanaInstance", async function () {
    try {
       const data = await client.CreateGrafanaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateAlarmPolicy", async function () {
    try {
       const data = await client.CreateAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeProductList", async function () {
    try {
       const data = await client.DescribeProductList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusRecordRules", async function () {
    try {
       const data = await client.DescribePrometheusRecordRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateSSOAccount", async function () {
    try {
       const data = await client.UpdateSSOAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusClusterAgents", async function () {
    try {
       const data = await client.DescribePrometheusClusterAgents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CheckIsPrometheusNewUser", async function () {
    try {
       const data = await client.CheckIsPrometheusNewUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeGrafanaEnvironments", async function () {
    try {
       const data = await client.DescribeGrafanaEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateRecordingRule", async function () {
    try {
       const data = await client.UpdateRecordingRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteGrafanaNotificationChannel", async function () {
    try {
       const data = await client.DeleteGrafanaNotificationChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeStatisticData", async function () {
    try {
       const data = await client.DescribeStatisticData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeGrafanaConfig", async function () {
    try {
       const data = await client.DescribeGrafanaConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyAlarmPolicyInfo", async function () {
    try {
       const data = await client.ModifyAlarmPolicyInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyAlarmPolicyStatus", async function () {
    try {
       const data = await client.ModifyAlarmPolicyStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePrometheusScrapeJobs", async function () {
    try {
       const data = await client.DeletePrometheusScrapeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.EnableGrafanaSSO", async function () {
    try {
       const data = await client.EnableGrafanaSSO({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteAlertRules", async function () {
    try {
       const data = await client.DeleteAlertRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeBaseMetrics", async function () {
    try {
       const data = await client.DescribeBaseMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmEvents", async function () {
    try {
       const data = await client.DescribeAlarmEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteAlarmNotices", async function () {
    try {
       const data = await client.DeleteAlarmNotices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyAlarmNotice", async function () {
    try {
       const data = await client.ModifyAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusInstanceDetail", async function () {
    try {
       const data = await client.DescribePrometheusInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusScrapeJob", async function () {
    try {
       const data = await client.CreatePrometheusScrapeJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UnBindingPolicyObject", async function () {
    try {
       const data = await client.UnBindingPolicyObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeConditionsTemplateList", async function () {
    try {
       const data = await client.DescribeConditionsTemplateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusScrapeJobs", async function () {
    try {
       const data = await client.DescribePrometheusScrapeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteServiceDiscovery", async function () {
    try {
       const data = await client.DeleteServiceDiscovery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusClusterAgent", async function () {
    try {
       const data = await client.CreatePrometheusClusterAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.BindingPolicyTag", async function () {
    try {
       const data = await client.BindingPolicyTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusMultiTenantInstancePostPayMode", async function () {
    try {
       const data = await client.CreatePrometheusMultiTenantInstancePostPayMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateGrafanaEnvironments", async function () {
    try {
       const data = await client.UpdateGrafanaEnvironments({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePolicyConditionList", async function () {
    try {
       const data = await client.DescribePolicyConditionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyAlarmPolicyCondition", async function () {
    try {
       const data = await client.ModifyAlarmPolicyCondition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.GetPrometheusAgentManagementCommand", async function () {
    try {
       const data = await client.GetPrometheusAgentManagementCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateExporterIntegration", async function () {
    try {
       const data = await client.UpdateExporterIntegration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdatePrometheusScrapeJob", async function () {
    try {
       const data = await client.UpdatePrometheusScrapeJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusInstanceInitStatus", async function () {
    try {
       const data = await client.DescribePrometheusInstanceInitStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpgradeGrafanaInstance", async function () {
    try {
       const data = await client.UpgradeGrafanaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeGrafanaChannels", async function () {
    try {
       const data = await client.DescribeGrafanaChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteGrafanaIntegration", async function () {
    try {
       const data = await client.DeleteGrafanaIntegration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.BindPrometheusManagedGrafana", async function () {
    try {
       const data = await client.BindPrometheusManagedGrafana({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UnBindingAllPolicyObject", async function () {
    try {
       const data = await client.UnBindingAllPolicyObject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePolicyGroup", async function () {
    try {
       const data = await client.DeletePolicyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateServiceDiscovery", async function () {
    try {
       const data = await client.UpdateServiceDiscovery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeMonitorTypes", async function () {
    try {
       const data = await client.DescribeMonitorTypes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.EnableSSOCamCheck", async function () {
    try {
       const data = await client.EnableSSOCamCheck({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.InstallPlugins", async function () {
    try {
       const data = await client.InstallPlugins({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateExporterIntegration", async function () {
    try {
       const data = await client.CreateExporterIntegration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteRecordingRules", async function () {
    try {
       const data = await client.DeleteRecordingRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeProductEventList", async function () {
    try {
       const data = await client.DescribeProductEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmHistories", async function () {
    try {
       const data = await client.DescribeAlarmHistories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateAlarmNotice", async function () {
    try {
       const data = await client.CreateAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteSSOAccount", async function () {
    try {
       const data = await client.DeleteSSOAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmNotice", async function () {
    try {
       const data = await client.DescribeAlarmNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateGrafanaIntegration", async function () {
    try {
       const data = await client.CreateGrafanaIntegration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusTemp", async function () {
    try {
       const data = await client.DescribePrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateGrafanaWhiteList", async function () {
    try {
       const data = await client.UpdateGrafanaWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.SetDefaultAlarmPolicy", async function () {
    try {
       const data = await client.SetDefaultAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteGrafanaInstance", async function () {
    try {
       const data = await client.DeleteGrafanaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePrometheusConfig", async function () {
    try {
       const data = await client.DeletePrometheusConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateSSOAccount", async function () {
    try {
       const data = await client.CreateSSOAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.SendCustomAlarmMsg", async function () {
    try {
       const data = await client.SendCustomAlarmMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyAlarmPolicyNotice", async function () {
    try {
       const data = await client.ModifyAlarmPolicyNotice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.EnableGrafanaInternet", async function () {
    try {
       const data = await client.EnableGrafanaInternet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateGrafanaNotificationChannel", async function () {
    try {
       const data = await client.CreateGrafanaNotificationChannel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyGrafanaInstance", async function () {
    try {
       const data = await client.ModifyGrafanaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ResumeGrafanaInstance", async function () {
    try {
       const data = await client.ResumeGrafanaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusTemp", async function () {
    try {
       const data = await client.CreatePrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeSSOAccount", async function () {
    try {
       const data = await client.DescribeSSOAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeBasicAlarmList", async function () {
    try {
       const data = await client.DescribeBasicAlarmList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusAgent", async function () {
    try {
       const data = await client.CreatePrometheusAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.SyncPrometheusTemp", async function () {
    try {
       const data = await client.SyncPrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusGlobalNotification", async function () {
    try {
       const data = await client.CreatePrometheusGlobalNotification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateAlertRuleState", async function () {
    try {
       const data = await client.UpdateAlertRuleState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPrometheusTemp", async function () {
    try {
       const data = await client.ModifyPrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UnbindPrometheusManagedGrafana", async function () {
    try {
       const data = await client.UnbindPrometheusManagedGrafana({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.RunPrometheusInstance", async function () {
    try {
       const data = await client.RunPrometheusInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeExporterIntegrations", async function () {
    try {
       const data = await client.DescribeExporterIntegrations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeInstalledPlugins", async function () {
    try {
       const data = await client.DescribeInstalledPlugins({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusGlobalNotification", async function () {
    try {
       const data = await client.DescribePrometheusGlobalNotification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpgradeGrafanaDashboard", async function () {
    try {
       const data = await client.UpgradeGrafanaDashboard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmNotices", async function () {
    try {
       const data = await client.DescribeAlarmNotices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeDNSConfig", async function () {
    try {
       const data = await client.DescribeDNSConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPrometheusGlobalNotification", async function () {
    try {
       const data = await client.ModifyPrometheusGlobalNotification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusAgentInstances", async function () {
    try {
       const data = await client.DescribePrometheusAgentInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePrometheusRecordRuleYaml", async function () {
    try {
       const data = await client.DeletePrometheusRecordRuleYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusInstances", async function () {
    try {
       const data = await client.DescribePrometheusInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeGrafanaInstances", async function () {
    try {
       const data = await client.DescribeGrafanaInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPrometheusRecordRuleYaml", async function () {
    try {
       const data = await client.ModifyPrometheusRecordRuleYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateGrafanaConfig", async function () {
    try {
       const data = await client.UpdateGrafanaConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeGrafanaNotificationChannels", async function () {
    try {
       const data = await client.DescribeGrafanaNotificationChannels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPrometheusAgentExternalLabels", async function () {
    try {
       const data = await client.ModifyPrometheusAgentExternalLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPolicyGroup", async function () {
    try {
       const data = await client.ModifyPolicyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAccidentEventList", async function () {
    try {
       const data = await client.DescribeAccidentEventList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusTempSync", async function () {
    try {
       const data = await client.DescribePrometheusTempSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusZones", async function () {
    try {
       const data = await client.DescribePrometheusZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmMetrics", async function () {
    try {
       const data = await client.DescribeAlarmMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyAlarmPolicyTasks", async function () {
    try {
       const data = await client.ModifyAlarmPolicyTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteExporterIntegration", async function () {
    try {
       const data = await client.DeleteExporterIntegration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePrometheusAlertPolicy", async function () {
    try {
       const data = await client.DeletePrometheusAlertPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdatePrometheusAgentStatus", async function () {
    try {
       const data = await client.UpdatePrometheusAgentStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateRecordingRule", async function () {
    try {
       const data = await client.CreateRecordingRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlertRules", async function () {
    try {
       const data = await client.DescribeAlertRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusGlobalConfig", async function () {
    try {
       const data = await client.DescribePrometheusGlobalConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusAgents", async function () {
    try {
       const data = await client.DescribePrometheusAgents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmPolicies", async function () {
    try {
       const data = await client.DescribeAlarmPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusTargetsTMP", async function () {
    try {
       const data = await client.DescribePrometheusTargetsTMP({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeGrafanaWhiteList", async function () {
    try {
       const data = await client.DescribeGrafanaWhiteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusAlertPolicy", async function () {
    try {
       const data = await client.CreatePrometheusAlertPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CleanGrafanaInstance", async function () {
    try {
       const data = await client.CleanGrafanaInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UninstallGrafanaDashboard", async function () {
    try {
       const data = await client.UninstallGrafanaDashboard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusAlertPolicy", async function () {
    try {
       const data = await client.DescribePrometheusAlertPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePolicyGroupList", async function () {
    try {
       const data = await client.DescribePolicyGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPrometheusInstanceAttributes", async function () {
    try {
       const data = await client.ModifyPrometheusInstanceAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeleteAlarmPolicy", async function () {
    try {
       const data = await client.DeleteAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.GetMonitorData", async function () {
    try {
       const data = await client.GetMonitorData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.PutMonitorData", async function () {
    try {
       const data = await client.PutMonitorData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateDNSConfig", async function () {
    try {
       const data = await client.UpdateDNSConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeServiceDiscovery", async function () {
    try {
       const data = await client.DescribeServiceDiscovery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeGrafanaIntegrations", async function () {
    try {
       const data = await client.DescribeGrafanaIntegrations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusConfig", async function () {
    try {
       const data = await client.DescribePrometheusConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePolicyGroupInfo", async function () {
    try {
       const data = await client.DescribePolicyGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusRecordRuleYaml", async function () {
    try {
       const data = await client.DescribePrometheusRecordRuleYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAllNamespaces", async function () {
    try {
       const data = await client.DescribeAllNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreateServiceDiscovery", async function () {
    try {
       const data = await client.CreateServiceDiscovery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusRecordRuleYaml", async function () {
    try {
       const data = await client.CreatePrometheusRecordRuleYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePrometheusTemp", async function () {
    try {
       const data = await client.DeletePrometheusTemp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmNoticeCallbacks", async function () {
    try {
       const data = await client.DescribeAlarmNoticeCallbacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DestroyPrometheusInstance", async function () {
    try {
       const data = await client.DestroyPrometheusInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UninstallGrafanaPlugins", async function () {
    try {
       const data = await client.UninstallGrafanaPlugins({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.UpdateGrafanaIntegration", async function () {
    try {
       const data = await client.UpdateGrafanaIntegration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePolicyGroup", async function () {
    try {
       const data = await client.CreatePolicyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.TerminatePrometheusInstances", async function () {
    try {
       const data = await client.TerminatePrometheusInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePrometheusInstancesOverview", async function () {
    try {
       const data = await client.DescribePrometheusInstancesOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DeletePrometheusTempSync", async function () {
    try {
       const data = await client.DeletePrometheusTempSync({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.CreatePrometheusConfig", async function () {
    try {
       const data = await client.CreatePrometheusConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribePluginOverviews", async function () {
    try {
       const data = await client.DescribePluginOverviews({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeRecordingRules", async function () {
    try {
       const data = await client.DescribeRecordingRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.ModifyPrometheusConfig", async function () {
    try {
       const data = await client.ModifyPrometheusConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20180724.DescribeAlarmPolicy", async function () {
    try {
       const data = await client.DescribeAlarmPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
