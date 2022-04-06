
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iotcloud.v20210408.Client({
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
describe("iotcloud.v20210408.test.js", function () {

it("iotcloud.v20210408.UpdateDeviceLogLevel", async function () {
    try {
       const data = await client.UpdateDeviceLogLevel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribePrivateCAs", async function () {
    try {
       const data = await client.DescribePrivateCAs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListLogPayload", async function () {
    try {
       const data = await client.ListLogPayload({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDevice", async function () {
    try {
       const data = await client.DescribeDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProduct", async function () {
    try {
       const data = await client.DescribeProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateProductPrivateCA", async function () {
    try {
       const data = await client.UpdateProductPrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeProductCA", async function () {
    try {
       const data = await client.DescribeProductCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteProductPrivateCA", async function () {
    try {
       const data = await client.DeleteProductPrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateDevicesEnableState", async function () {
    try {
       const data = await client.UpdateDevicesEnableState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListSDKLog", async function () {
    try {
       const data = await client.ListSDKLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreateDevice", async function () {
    try {
       const data = await client.CreateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribePrivateCABindedProducts", async function () {
    try {
       const data = await client.DescribePrivateCABindedProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.CreatePrivateCA", async function () {
    try {
       const data = await client.CreatePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdatePrivateCA", async function () {
    try {
       const data = await client.UpdatePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DeletePrivateCA", async function () {
    try {
       const data = await client.DeletePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateProductDynamicRegister", async function () {
    try {
       const data = await client.UpdateProductDynamicRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.ListLog", async function () {
    try {
       const data = await client.ListLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribePrivateCA", async function () {
    try {
       const data = await client.DescribePrivateCA({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.DescribeDevices", async function () {
    try {
       const data = await client.DescribeDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.SetProductsForbiddenStatus", async function () {
    try {
       const data = await client.SetProductsForbiddenStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.PublishBroadcastMessage", async function () {
    try {
       const data = await client.PublishBroadcastMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iotcloud.v20210408.UpdateDevicePSK", async function () {
    try {
       const data = await client.UpdateDevicePSK({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
