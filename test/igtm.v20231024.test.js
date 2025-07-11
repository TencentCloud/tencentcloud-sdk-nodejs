
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.igtm.v20231024.Client({
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
describe("igtm.v20231024.test.js", function () {

it("igtm.v20231024.DescribeAddressPoolList", async function () {
    try {
       const data = await client.DescribeAddressPoolList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.ModifyAddressPool", async function () {
    try {
       const data = await client.ModifyAddressPool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.ModifyInstanceConfig", async function () {
    try {
       const data = await client.ModifyInstanceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeDetectPackageDetail", async function () {
    try {
       const data = await client.DescribeDetectPackageDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.CreateAddressPool", async function () {
    try {
       const data = await client.CreateAddressPool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeInstanceDetail", async function () {
    try {
       const data = await client.DescribeInstanceDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeAddressLocation", async function () {
    try {
       const data = await client.DescribeAddressLocation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.CreateStrategy", async function () {
    try {
       const data = await client.CreateStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeDetectors", async function () {
    try {
       const data = await client.DescribeDetectors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DeleteStrategy", async function () {
    try {
       const data = await client.DeleteStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DeleteMonitor", async function () {
    try {
       const data = await client.DeleteMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.ModifyMonitor", async function () {
    try {
       const data = await client.ModifyMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeMonitors", async function () {
    try {
       const data = await client.DescribeMonitors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.CreateMonitor", async function () {
    try {
       const data = await client.CreateMonitor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeDnsLineList", async function () {
    try {
       const data = await client.DescribeDnsLineList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.CreateInstance", async function () {
    try {
       const data = await client.CreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeInstanceList", async function () {
    try {
       const data = await client.DescribeInstanceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeMonitorDetail", async function () {
    try {
       const data = await client.DescribeMonitorDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeDetectTaskPackageList", async function () {
    try {
       const data = await client.DescribeDetectTaskPackageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeStrategyList", async function () {
    try {
       const data = await client.DescribeStrategyList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeQuotas", async function () {
    try {
       const data = await client.DescribeQuotas({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeAddressPoolDetail", async function () {
    try {
       const data = await client.DescribeAddressPoolDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.ModifyStrategy", async function () {
    try {
       const data = await client.ModifyStrategy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DeleteAddressPool", async function () {
    try {
       const data = await client.DeleteAddressPool({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeStrategyDetail", async function () {
    try {
       const data = await client.DescribeStrategyDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("igtm.v20231024.DescribeInstancePackageList", async function () {
    try {
       const data = await client.DescribeInstancePackageList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
