
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.lcic.v20220817.Client({
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
describe("lcic.v20220817.test.js", function () {

it("lcic.v20220817.SetWatermark", async function () {
    try {
       const data = await client.SetWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeDocumentsByRoom", async function () {
    try {
       const data = await client.DescribeDocumentsByRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.GetWatermark", async function () {
    try {
       const data = await client.GetWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.ModifyApp", async function () {
    try {
       const data = await client.ModifyApp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.UnbindDocumentFromRoom", async function () {
    try {
       const data = await client.UnbindDocumentFromRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeSdkAppIdUsers", async function () {
    try {
       const data = await client.DescribeSdkAppIdUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.CreateDocument", async function () {
    try {
       const data = await client.CreateDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.ModifyRoom", async function () {
    try {
       const data = await client.ModifyRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeUser", async function () {
    try {
       const data = await client.DescribeUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.BatchRegister", async function () {
    try {
       const data = await client.BatchRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.ModifyUserProfile", async function () {
    try {
       const data = await client.ModifyUserProfile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeRoom", async function () {
    try {
       const data = await client.DescribeRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DeleteRecord", async function () {
    try {
       const data = await client.DeleteRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.BatchCreateRoom", async function () {
    try {
       const data = await client.BatchCreateRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.RegisterUser", async function () {
    try {
       const data = await client.RegisterUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeRoomStatistics", async function () {
    try {
       const data = await client.DescribeRoomStatistics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.BindDocumentToRoom", async function () {
    try {
       const data = await client.BindDocumentToRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.LoginOriginId", async function () {
    try {
       const data = await client.LoginOriginId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.LoginUser", async function () {
    try {
       const data = await client.LoginUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.CreateSupervisor", async function () {
    try {
       const data = await client.CreateSupervisor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.SetAppCustomContent", async function () {
    try {
       const data = await client.SetAppCustomContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeCurrentMemberList", async function () {
    try {
       const data = await client.DescribeCurrentMemberList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeAppDetail", async function () {
    try {
       const data = await client.DescribeAppDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DeleteDocument", async function () {
    try {
       const data = await client.DeleteDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.BatchDeleteRecord", async function () {
    try {
       const data = await client.BatchDeleteRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DeleteRoom", async function () {
    try {
       const data = await client.DeleteRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeDocument", async function () {
    try {
       const data = await client.DescribeDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.CreateRoom", async function () {
    try {
       const data = await client.CreateRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
