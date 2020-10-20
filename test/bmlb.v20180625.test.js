
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bmlb.v20180625.Client({
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
describe("bmlb.v20180625.test.js", function () {

it("bmlb.v20180625.DescribeL7Listeners", async function () {
    try {
       const data = await client.DescribeL7Listeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.UnbindTrafficMirrorReceivers", async function () {
    try {
       const data = await client.UnbindTrafficMirrorReceivers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL7BackendWeight", async function () {
    try {
       const data = await client.ModifyL7BackendWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL4BackendWeight", async function () {
    try {
       const data = await client.ModifyL4BackendWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.CreateL4Listeners", async function () {
    try {
       const data = await client.CreateL4Listeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.UnbindL4Backends", async function () {
    try {
       const data = await client.UnbindL4Backends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL7Listener", async function () {
    try {
       const data = await client.ModifyL7Listener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DeleteTrafficMirror", async function () {
    try {
       const data = await client.DeleteTrafficMirror({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.CreateL7Rules", async function () {
    try {
       const data = await client.CreateL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeTrafficMirrorReceiverHealthStatus", async function () {
    try {
       const data = await client.DescribeTrafficMirrorReceiverHealthStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.UnbindL7Backends", async function () {
    try {
       const data = await client.UnbindL7Backends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DeleteL7Rules", async function () {
    try {
       const data = await client.DeleteL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeL4ListenerInfo", async function () {
    try {
       const data = await client.DescribeL4ListenerInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeTrafficMirrorListeners", async function () {
    try {
       const data = await client.DescribeTrafficMirrorListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL7Locations", async function () {
    try {
       const data = await client.ModifyL7Locations({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL4BackendPort", async function () {
    try {
       const data = await client.ModifyL4BackendPort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DeleteLoadBalancer", async function () {
    try {
       const data = await client.DeleteLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.CreateLoadBalancers", async function () {
    try {
       const data = await client.CreateLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeL7Rules", async function () {
    try {
       const data = await client.DescribeL7Rules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeLoadBalancerTaskResult", async function () {
    try {
       const data = await client.DescribeLoadBalancerTaskResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeL7ListenerInfo", async function () {
    try {
       const data = await client.DescribeL7ListenerInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeL4Listeners", async function () {
    try {
       const data = await client.DescribeL4Listeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.SetTrafficMirrorHealthSwitch", async function () {
    try {
       const data = await client.SetTrafficMirrorHealthSwitch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeLoadBalancers", async function () {
    try {
       const data = await client.DescribeLoadBalancers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DeleteListeners", async function () {
    try {
       const data = await client.DeleteListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeCertDetail", async function () {
    try {
       const data = await client.DescribeCertDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.UnbindTrafficMirrorListeners", async function () {
    try {
       const data = await client.UnbindTrafficMirrorListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL7BackendPort", async function () {
    try {
       const data = await client.ModifyL7BackendPort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeL7Backends", async function () {
    try {
       const data = await client.DescribeL7Backends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.CreateTrafficMirror", async function () {
    try {
       const data = await client.CreateTrafficMirror({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL4BackendProbePort", async function () {
    try {
       const data = await client.ModifyL4BackendProbePort({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.BindL4Backends", async function () {
    try {
       const data = await client.BindL4Backends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.BindTrafficMirrorReceivers", async function () {
    try {
       const data = await client.BindTrafficMirrorReceivers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ReplaceCert", async function () {
    try {
       const data = await client.ReplaceCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DeleteL7Domains", async function () {
    try {
       const data = await client.DeleteL7Domains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeTrafficMirrors", async function () {
    try {
       const data = await client.DescribeTrafficMirrors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeL7ListenersEx", async function () {
    try {
       const data = await client.DescribeL7ListenersEx({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.UploadCert", async function () {
    try {
       const data = await client.UploadCert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.BindL7Backends", async function () {
    try {
       const data = await client.BindL7Backends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeL4Backends", async function () {
    try {
       const data = await client.DescribeL4Backends({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.BindTrafficMirrorListeners", async function () {
    try {
       const data = await client.BindTrafficMirrorListeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyLoadBalancer", async function () {
    try {
       const data = await client.ModifyLoadBalancer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.SetTrafficMirrorAlias", async function () {
    try {
       const data = await client.SetTrafficMirrorAlias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeLoadBalancerPortInfo", async function () {
    try {
       const data = await client.DescribeLoadBalancerPortInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyLoadBalancerChargeMode", async function () {
    try {
       const data = await client.ModifyLoadBalancerChargeMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.CreateL7Listeners", async function () {
    try {
       const data = await client.CreateL7Listeners({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeDevicesBindInfo", async function () {
    try {
       const data = await client.DescribeDevicesBindInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.ModifyL4Listener", async function () {
    try {
       const data = await client.ModifyL4Listener({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmlb.v20180625.DescribeTrafficMirrorReceivers", async function () {
    try {
       const data = await client.DescribeTrafficMirrorReceivers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
