
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

it("monitor.v20180724.UnBindingPolicyObject", async function () {
    try {
       const data = await client.UnBindingPolicyObject({})
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

it("monitor.v20180724.ModifyAlarmReceivers", async function () {
    try {
       const data = await client.ModifyAlarmReceivers({})
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

it("monitor.v20180724.SendCustomAlarmMsg", async function () {
    try {
       const data = await client.SendCustomAlarmMsg({})
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

it("monitor.v20180724.DescribeBaseMetrics", async function () {
    try {
       const data = await client.DescribeBaseMetrics({})
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

it("monitor.v20180724.DescribePolicyGroupList", async function () {
    try {
       const data = await client.DescribePolicyGroupList({})
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

it("monitor.v20180724.GetMonitorData", async function () {
    try {
       const data = await client.GetMonitorData({})
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

it("monitor.v20180724.CreatePolicyGroup", async function () {
    try {
       const data = await client.CreatePolicyGroup({})
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

it("monitor.v20180724.PutMonitorData", async function () {
    try {
       const data = await client.PutMonitorData({})
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

})
