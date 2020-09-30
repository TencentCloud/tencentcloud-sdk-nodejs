
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tiems.v20190416.Client({
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
describe("tiems.v20190416.test.js", function () {

it("tiems.v20190416.CreateService", async function () {
    try {
       const data = await client.CreateService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.CreateServiceConfig", async function () {
    try {
       const data = await client.CreateServiceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.CreateRsgAsGroup", async function () {
    try {
       const data = await client.CreateRsgAsGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DeleteInstance", async function () {
    try {
       const data = await client.DeleteInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DeleteService", async function () {
    try {
       const data = await client.DeleteService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.CreateJob", async function () {
    try {
       const data = await client.CreateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.UpdateRsgAsGroup", async function () {
    try {
       const data = await client.UpdateRsgAsGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DescribeServices", async function () {
    try {
       const data = await client.DescribeServices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DisableRsgAsGroup", async function () {
    try {
       const data = await client.DisableRsgAsGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.UpdateService", async function () {
    try {
       const data = await client.UpdateService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.CreateRuntime", async function () {
    try {
       const data = await client.CreateRuntime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DeleteServiceConfig", async function () {
    try {
       const data = await client.DeleteServiceConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DescribeRsgAsGroupActivities", async function () {
    try {
       const data = await client.DescribeRsgAsGroupActivities({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DescribeRuntimes", async function () {
    try {
       const data = await client.DescribeRuntimes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DescribeResourceGroups", async function () {
    try {
       const data = await client.DescribeResourceGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.UpdateJob", async function () {
    try {
       const data = await client.UpdateJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DeleteRsgAsGroup", async function () {
    try {
       const data = await client.DeleteRsgAsGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DeleteResourceGroup", async function () {
    try {
       const data = await client.DeleteResourceGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DeleteRuntime", async function () {
    try {
       const data = await client.DeleteRuntime({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.ExposeService", async function () {
    try {
       const data = await client.ExposeService({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DeleteJob", async function () {
    try {
       const data = await client.DeleteJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.EnableRsgAsGroup", async function () {
    try {
       const data = await client.EnableRsgAsGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DescribeServiceConfigs", async function () {
    try {
       const data = await client.DescribeServiceConfigs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiems.v20190416.DescribeRsgAsGroups", async function () {
    try {
       const data = await client.DescribeRsgAsGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
