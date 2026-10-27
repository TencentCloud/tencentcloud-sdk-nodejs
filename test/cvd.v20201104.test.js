
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cvd.v20201104.Client({
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
describe("cvd.v20201104.test.js", function () {

it("cvd.v20201104.DescribeInstancesStatus", async function () {
    try {
       const data = await client.DescribeInstancesStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.ModifyDiskConfiguration", async function () {
    try {
       const data = await client.ModifyDiskConfiguration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeSnapshots", async function () {
    try {
       const data = await client.DescribeSnapshots({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInstanceRegionDistribution", async function () {
    try {
       const data = await client.DescribeInstanceRegionDistribution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.ModifyInstanceBasicAttribute", async function () {
    try {
       const data = await client.ModifyInstanceBasicAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeImages", async function () {
    try {
       const data = await client.DescribeImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DeleteDomainControlPolicy", async function () {
    try {
       const data = await client.DeleteDomainControlPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeUsers", async function () {
    try {
       const data = await client.DescribeUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeUsage", async function () {
    try {
       const data = await client.DescribeUsage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.RemoveDataDisks", async function () {
    try {
       const data = await client.RemoveDataDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribePolicyDetail", async function () {
    try {
       const data = await client.DescribePolicyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInstanceGraphData", async function () {
    try {
       const data = await client.DescribeInstanceGraphData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInstancesBindStatus", async function () {
    try {
       const data = await client.DescribeInstancesBindStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInvocations", async function () {
    try {
       const data = await client.DescribeInvocations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.ModifyInstancesVpc", async function () {
    try {
       const data = await client.ModifyInstancesVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.RemovePolicy", async function () {
    try {
       const data = await client.RemovePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeSecurityGroups", async function () {
    try {
       const data = await client.DescribeSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.CreateCommandTask", async function () {
    try {
       const data = await client.CreateCommandTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DeleteImages", async function () {
    try {
       const data = await client.DeleteImages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.StopSession", async function () {
    try {
       const data = await client.StopSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInstanceMonitorData", async function () {
    try {
       const data = await client.DescribeInstanceMonitorData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.StartInstances", async function () {
    try {
       const data = await client.StartInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.CreateImage", async function () {
    try {
       const data = await client.CreateImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInstanceLoginMsg", async function () {
    try {
       const data = await client.DescribeInstanceLoginMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.CreateDataDisk", async function () {
    try {
       const data = await client.CreateDataDisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.StopInstances", async function () {
    try {
       const data = await client.StopInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.StopCommandTasks", async function () {
    try {
       const data = await client.StopCommandTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.StopInvocation", async function () {
    try {
       const data = await client.StopInvocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.UpdatePolicy", async function () {
    try {
       const data = await client.UpdatePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInvocationDetail", async function () {
    try {
       const data = await client.DescribeInvocationDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.AssociateSecurityGroup", async function () {
    try {
       const data = await client.AssociateSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.TerminateInstances", async function () {
    try {
       const data = await client.TerminateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.ModifyImageAttrs", async function () {
    try {
       const data = await client.ModifyImageAttrs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.ModifyInstancesType", async function () {
    try {
       const data = await client.ModifyInstancesType({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.ResetInstances", async function () {
    try {
       const data = await client.ResetInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.UnbindInstances", async function () {
    try {
       const data = await client.UnbindInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.RenewInstances", async function () {
    try {
       const data = await client.RenewInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DisassociateSecurityGroup", async function () {
    try {
       const data = await client.DisassociateSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.CreateDomainControlPolicy", async function () {
    try {
       const data = await client.CreateDomainControlPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DeleteCommandTasks", async function () {
    try {
       const data = await client.DeleteCommandTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.RunCommand", async function () {
    try {
       const data = await client.RunCommand({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.RebootInstances", async function () {
    try {
       const data = await client.RebootInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.CreateInstances", async function () {
    try {
       const data = await client.CreateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.CreatePolicy", async function () {
    try {
       const data = await client.CreatePolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.BindInstances", async function () {
    try {
       const data = await client.BindInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeCommandTasks", async function () {
    try {
       const data = await client.DescribeCommandTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cvd.v20201104.DescribeInstanceFetchMsg", async function () {
    try {
       const data = await client.DescribeInstanceFetchMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
