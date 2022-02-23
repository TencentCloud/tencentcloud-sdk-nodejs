
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

it("monitor.v20180724.PutMonitorData", async function () {
    try {
       const data = await client.PutMonitorData({})
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

it("monitor.v20180724.UnBindingPolicyObject", async function () {
    try {
       const data = await client.UnBindingPolicyObject({})
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

it("monitor.v20180724.SendCustomAlarmMsg", async function () {
    try {
       const data = await client.SendCustomAlarmMsg({})
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

it("monitor.v20180724.DescribeBindingPolicyObjectList", async function () {
    try {
       const data = await client.DescribeBindingPolicyObjectList({})
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

it("monitor.v20180724.DeleteServiceDiscovery", async function () {
    try {
       const data = await client.DeleteServiceDiscovery({})
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

it("monitor.v20180724.ModifyAlarmPolicyTasks", async function () {
    try {
       const data = await client.ModifyAlarmPolicyTasks({})
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

it("monitor.v20180724.DescribeBasicAlarmList", async function () {
    try {
       const data = await client.DescribeBasicAlarmList({})
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

it("monitor.v20180724.ModifyAlarmPolicyInfo", async function () {
    try {
       const data = await client.ModifyAlarmPolicyInfo({})
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

it("monitor.v20180724.UpdateAlertRuleState", async function () {
    try {
       const data = await client.UpdateAlertRuleState({})
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

it("monitor.v20180724.DescribePolicyGroupInfo", async function () {
    try {
       const data = await client.DescribePolicyGroupInfo({})
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

it("monitor.v20180724.DescribeStatisticData", async function () {
    try {
       const data = await client.DescribeStatisticData({})
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

it("monitor.v20180724.BindingPolicyTag", async function () {
    try {
       const data = await client.BindingPolicyTag({})
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

it("monitor.v20180724.DescribeAlarmNoticeCallbacks", async function () {
    try {
       const data = await client.DescribeAlarmNoticeCallbacks({})
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

it("monitor.v20180724.UpdateAlertRule", async function () {
    try {
       const data = await client.UpdateAlertRule({})
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

it("monitor.v20180724.CreatePolicyGroup", async function () {
    try {
       const data = await client.CreatePolicyGroup({})
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

it("monitor.v20180724.DescribeAccidentEventList", async function () {
    try {
       const data = await client.DescribeAccidentEventList({})
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

it("monitor.v20180724.DescribeAlarmHistories", async function () {
    try {
       const data = await client.DescribeAlarmHistories({})
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

it("monitor.v20180724.DescribePrometheusInstances", async function () {
    try {
       const data = await client.DescribePrometheusInstances({})
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

it("monitor.v20180724.DescribeAlarmNotice", async function () {
    try {
       const data = await client.DescribeAlarmNotice({})
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

it("monitor.v20180724.DescribeServiceDiscovery", async function () {
    try {
       const data = await client.DescribeServiceDiscovery({})
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

it("monitor.v20180724.ModifyPolicyGroup", async function () {
    try {
       const data = await client.ModifyPolicyGroup({})
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
