
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

it("lcic.v20220817.DescribeAppDetail", async function () {
    try {
       const data = await client.DescribeAppDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.GetRoomMessage", async function () {
    try {
       const data = await client.GetRoomMessage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeDocuments", async function () {
    try {
       const data = await client.DescribeDocuments({})
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

it("lcic.v20220817.ModifyRoom", async function () {
    try {
       const data = await client.ModifyRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DeleteAppCustomContent", async function () {
    try {
       const data = await client.DeleteAppCustomContent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.SetWatermark", async function () {
    try {
       const data = await client.SetWatermark({})
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

it("lcic.v20220817.GetWatermark", async function () {
    try {
       const data = await client.GetWatermark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeGroup", async function () {
    try {
       const data = await client.DescribeGroup({})
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

it("lcic.v20220817.StartRoom", async function () {
    try {
       const data = await client.StartRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DeleteGroupMember", async function () {
    try {
       const data = await client.DeleteGroupMember({})
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

it("lcic.v20220817.DescribeSupervisors", async function () {
    try {
       const data = await client.DescribeSupervisors({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
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

it("lcic.v20220817.DescribeGroupMemberList", async function () {
    try {
       const data = await client.DescribeGroupMemberList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.ModifyGroup", async function () {
    try {
       const data = await client.ModifyGroup({})
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

it("lcic.v20220817.DeleteSupervisor", async function () {
    try {
       const data = await client.DeleteSupervisor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.BatchDeleteGroupMember", async function () {
    try {
       const data = await client.BatchDeleteGroupMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.GetRoomEvent", async function () {
    try {
       const data = await client.GetRoomEvent({})
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

it("lcic.v20220817.DescribeGroupList", async function () {
    try {
       const data = await client.DescribeGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.BatchAddGroupMember", async function () {
    try {
       const data = await client.BatchAddGroupMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.AddGroupMember", async function () {
    try {
       const data = await client.AddGroupMember({})
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

it("lcic.v20220817.CreateGroupWithMembers", async function () {
    try {
       const data = await client.CreateGroupWithMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeDeveloper", async function () {
    try {
       const data = await client.DescribeDeveloper({})
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

it("lcic.v20220817.DescribeQuestionList", async function () {
    try {
       const data = await client.DescribeQuestionList({})
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

it("lcic.v20220817.BatchDescribeDocument", async function () {
    try {
       const data = await client.BatchDescribeDocument({})
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

it("lcic.v20220817.BatchCreateRoom", async function () {
    try {
       const data = await client.BatchCreateRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.DescribeAnswerList", async function () {
    try {
       const data = await client.DescribeAnswerList({})
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

it("lcic.v20220817.EndRoom", async function () {
    try {
       const data = await client.EndRoom({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.GetRooms", async function () {
    try {
       const data = await client.GetRooms({})
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

it("lcic.v20220817.CreateGroupWithSubGroup", async function () {
    try {
       const data = await client.CreateGroupWithSubGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("lcic.v20220817.BatchCreateGroupWithMembers", async function () {
    try {
       const data = await client.BatchCreateGroupWithMembers({})
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
