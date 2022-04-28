
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.as.v20180419.Client({
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
describe("as.v20180419.test.js", function () {

it("as.v20180419.ExecuteScalingPolicy", async function () {
    try {
       const data = await client.ExecuteScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CreateAutoScalingGroup", async function () {
    try {
       const data = await client.CreateAutoScalingGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ClearLaunchConfigurationAttributes", async function () {
    try {
       const data = await client.ClearLaunchConfigurationAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyScalingPolicy", async function () {
    try {
       const data = await client.ModifyScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyLoadBalancerTargetAttributes", async function () {
    try {
       const data = await client.ModifyLoadBalancerTargetAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeNotificationConfigurations", async function () {
    try {
       const data = await client.DescribeNotificationConfigurations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DeleteAutoScalingGroup", async function () {
    try {
       const data = await client.DeleteAutoScalingGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ScaleOutInstances", async function () {
    try {
       const data = await client.ScaleOutInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.StartAutoScalingInstances", async function () {
    try {
       const data = await client.StartAutoScalingInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.UpgradeLaunchConfiguration", async function () {
    try {
       const data = await client.UpgradeLaunchConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyLifecycleHook", async function () {
    try {
       const data = await client.ModifyLifecycleHook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DetachLoadBalancers", async function () {
    try {
       const data = await client.DetachLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.AttachInstances", async function () {
    try {
       const data = await client.AttachInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeScalingPolicies", async function () {
    try {
       const data = await client.DescribeScalingPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DeleteScheduledAction", async function () {
    try {
       const data = await client.DeleteScheduledAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.AttachLoadBalancers", async function () {
    try {
       const data = await client.AttachLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DetachInstances", async function () {
    try {
       const data = await client.DetachInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ScaleInInstances", async function () {
    try {
       const data = await client.ScaleInInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CreateScheduledAction", async function () {
    try {
       const data = await client.CreateScheduledAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeAutoScalingAdvices", async function () {
    try {
       const data = await client.DescribeAutoScalingAdvices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.RemoveInstances", async function () {
    try {
       const data = await client.RemoveInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DeleteScalingPolicy", async function () {
    try {
       const data = await client.DeleteScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CompleteLifecycleAction", async function () {
    try {
       const data = await client.CompleteLifecycleAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyLoadBalancers", async function () {
    try {
       const data = await client.ModifyLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyDesiredCapacity", async function () {
    try {
       const data = await client.ModifyDesiredCapacity({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.SetInstancesProtection", async function () {
    try {
       const data = await client.SetInstancesProtection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyNotificationConfiguration", async function () {
    try {
       const data = await client.ModifyNotificationConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.StopAutoScalingInstances", async function () {
    try {
       const data = await client.StopAutoScalingInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CreateLaunchConfiguration", async function () {
    try {
       const data = await client.CreateLaunchConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyAutoScalingGroup", async function () {
    try {
       const data = await client.ModifyAutoScalingGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CreateNotificationConfiguration", async function () {
    try {
       const data = await client.CreateNotificationConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeAutoScalingInstances", async function () {
    try {
       const data = await client.DescribeAutoScalingInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CreateAutoScalingGroupFromInstance", async function () {
    try {
       const data = await client.CreateAutoScalingGroupFromInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CreateLifecycleHook", async function () {
    try {
       const data = await client.CreateLifecycleHook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.UpgradeLifecycleHook", async function () {
    try {
       const data = await client.UpgradeLifecycleHook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DisableAutoScalingGroup", async function () {
    try {
       const data = await client.DisableAutoScalingGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeLaunchConfigurations", async function () {
    try {
       const data = await client.DescribeLaunchConfigurations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.CreateScalingPolicy", async function () {
    try {
       const data = await client.CreateScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DeleteLaunchConfiguration", async function () {
    try {
       const data = await client.DeleteLaunchConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DeleteLifecycleHook", async function () {
    try {
       const data = await client.DeleteLifecycleHook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeAutoScalingGroupLastActivities", async function () {
    try {
       const data = await client.DescribeAutoScalingGroupLastActivities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeLifecycleHooks", async function () {
    try {
       const data = await client.DescribeLifecycleHooks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.EnableAutoScalingGroup", async function () {
    try {
       const data = await client.EnableAutoScalingGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeScheduledActions", async function () {
    try {
       const data = await client.DescribeScheduledActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeAutoScalingGroups", async function () {
    try {
       const data = await client.DescribeAutoScalingGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyScheduledAction", async function () {
    try {
       const data = await client.ModifyScheduledAction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeAutoScalingActivities", async function () {
    try {
       const data = await client.DescribeAutoScalingActivities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DeleteNotificationConfiguration", async function () {
    try {
       const data = await client.DeleteNotificationConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.DescribeAccountLimits", async function () {
    try {
       const data = await client.DescribeAccountLimits({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("as.v20180419.ModifyLaunchConfigurationAttributes", async function () {
    try {
       const data = await client.ModifyLaunchConfigurationAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
