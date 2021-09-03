
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bda.v20200324.Client({
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
describe("bda.v20200324.test.js", function () {

it("bda.v20200324.SearchTrace", async function () {
    try {
       const data = await client.SearchTrace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.TerminateSegmentationTask", async function () {
    try {
       const data = await client.TerminateSegmentationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.GetSummaryInfo", async function () {
    try {
       const data = await client.GetSummaryInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.DetectBody", async function () {
    try {
       const data = await client.DetectBody({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.SegmentPortraitPic", async function () {
    try {
       const data = await client.SegmentPortraitPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.DetectBodyJoints", async function () {
    try {
       const data = await client.DetectBodyJoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.CreateTrace", async function () {
    try {
       const data = await client.CreateTrace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.DeletePerson", async function () {
    try {
       const data = await client.DeletePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.ModifyPersonInfo", async function () {
    try {
       const data = await client.ModifyPersonInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.ModifyGroup", async function () {
    try {
       const data = await client.ModifyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.GetGroupList", async function () {
    try {
       const data = await client.GetGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.DescribeSegmentationTask", async function () {
    try {
       const data = await client.DescribeSegmentationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.CreateGroup", async function () {
    try {
       const data = await client.CreateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.CreatePerson", async function () {
    try {
       const data = await client.CreatePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.SegmentCustomizedPortraitPic", async function () {
    try {
       const data = await client.SegmentCustomizedPortraitPic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.GetPersonList", async function () {
    try {
       const data = await client.GetPersonList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bda.v20200324.CreateSegmentationTask", async function () {
    try {
       const data = await client.CreateSegmentationTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
