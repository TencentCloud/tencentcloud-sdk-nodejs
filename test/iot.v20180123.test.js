
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iot.v20180123.Client({
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
describe("iot.v20180123.test.js", function () {

it("iot.v20180123.GetDataHistory", async function () {
    try {
       const data = await client.GetDataHistory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.ResetDevice", async function () {
    try {
       const data = await client.ResetDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDeviceStatistics", async function () {
    try {
       const data = await client.GetDeviceStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppSecureAddDevice", async function () {
    try {
       const data = await client.AppSecureAddDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.IssueDeviceControl", async function () {
    try {
       const data = await client.IssueDeviceControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDebugLog", async function () {
    try {
       const data = await client.GetDebugLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.DeactivateRule", async function () {
    try {
       const data = await client.DeactivateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDevices", async function () {
    try {
       const data = await client.GetDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AddTopic", async function () {
    try {
       const data = await client.AddTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppGetDeviceStatuses", async function () {
    try {
       const data = await client.AppGetDeviceStatuses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetProducts", async function () {
    try {
       const data = await client.GetProducts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppGetToken", async function () {
    try {
       const data = await client.AppGetToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppUpdateUser", async function () {
    try {
       const data = await client.AppUpdateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AddRule", async function () {
    try {
       const data = await client.AddRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.UnassociateSubDeviceFromGatewayProduct", async function () {
    try {
       const data = await client.UnassociateSubDeviceFromGatewayProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDeviceSignatures", async function () {
    try {
       const data = await client.GetDeviceSignatures({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.DeleteRule", async function () {
    try {
       const data = await client.DeleteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AddProduct", async function () {
    try {
       const data = await client.AddProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.DeleteDevice", async function () {
    try {
       const data = await client.DeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.PublishMsg", async function () {
    try {
       const data = await client.PublishMsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.UpdateRule", async function () {
    try {
       const data = await client.UpdateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppDeleteDevice", async function () {
    try {
       const data = await client.AppDeleteDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDeviceStatuses", async function () {
    try {
       const data = await client.GetDeviceStatuses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetRules", async function () {
    try {
       const data = await client.GetRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.DeleteProduct", async function () {
    try {
       const data = await client.DeleteProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppGetUser", async function () {
    try {
       const data = await client.AppGetUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppGetDevices", async function () {
    try {
       const data = await client.AppGetDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppAddUser", async function () {
    try {
       const data = await client.AppAddUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.UpdateProduct", async function () {
    try {
       const data = await client.UpdateProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppIssueDeviceControl", async function () {
    try {
       const data = await client.AppIssueDeviceControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetTopic", async function () {
    try {
       const data = await client.GetTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppGetDeviceData", async function () {
    try {
       const data = await client.AppGetDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDevice", async function () {
    try {
       const data = await client.GetDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppGetDevice", async function () {
    try {
       const data = await client.AppGetDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDeviceData", async function () {
    try {
       const data = await client.GetDeviceData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetRule", async function () {
    try {
       const data = await client.GetRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetDeviceLog", async function () {
    try {
       const data = await client.GetDeviceLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetTopics", async function () {
    try {
       const data = await client.GetTopics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AddDevice", async function () {
    try {
       const data = await client.AddDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.GetProduct", async function () {
    try {
       const data = await client.GetProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppResetPassword", async function () {
    try {
       const data = await client.AppResetPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.ActivateRule", async function () {
    try {
       const data = await client.ActivateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AssociateSubDeviceToGatewayProduct", async function () {
    try {
       const data = await client.AssociateSubDeviceToGatewayProduct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.DeleteTopic", async function () {
    try {
       const data = await client.DeleteTopic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iot.v20180123.AppUpdateDevice", async function () {
    try {
       const data = await client.AppUpdateDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
