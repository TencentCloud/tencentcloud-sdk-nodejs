
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iai.v20180301.Client({
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
describe("iai.v20180301.test.js", function () {

it("iai.v20180301.DeletePersonFromGroup", async function () {
    try {
       const data = await client.DeletePersonFromGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.SearchFacesReturnsByGroup", async function () {
    try {
       const data = await client.SearchFacesReturnsByGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.CreateGroup", async function () {
    try {
       const data = await client.CreateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetPersonBaseInfo", async function () {
    try {
       const data = await client.GetPersonBaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.DetectLiveFace", async function () {
    try {
       const data = await client.DetectLiveFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.CreateFace", async function () {
    try {
       const data = await client.CreateFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetPersonListNum", async function () {
    try {
       const data = await client.GetPersonListNum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetPersonGroupInfo", async function () {
    try {
       const data = await client.GetPersonGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.AnalyzeFace", async function () {
    try {
       const data = await client.AnalyzeFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.ModifyPersonBaseInfo", async function () {
    try {
       const data = await client.ModifyPersonBaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.SearchFaces", async function () {
    try {
       const data = await client.SearchFaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.CopyPerson", async function () {
    try {
       const data = await client.CopyPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.VerifyFace", async function () {
    try {
       const data = await client.VerifyFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.AnalyzeDenseLandmarks", async function () {
    try {
       const data = await client.AnalyzeDenseLandmarks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.DeletePerson", async function () {
    try {
       const data = await client.DeletePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.ModifyGroup", async function () {
    try {
       const data = await client.ModifyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.UpgradeGroupFaceModelVersion", async function () {
    try {
       const data = await client.UpgradeGroupFaceModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.RevertGroupFaceModelVersion", async function () {
    try {
       const data = await client.RevertGroupFaceModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.CreatePerson", async function () {
    try {
       const data = await client.CreatePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetUpgradeGroupFaceModelVersionJobList", async function () {
    try {
       const data = await client.GetUpgradeGroupFaceModelVersionJobList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetGroupInfo", async function () {
    try {
       const data = await client.GetGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.DetectFace", async function () {
    try {
       const data = await client.DetectFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetPersonList", async function () {
    try {
       const data = await client.GetPersonList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.VerifyPerson", async function () {
    try {
       const data = await client.VerifyPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.DetectFaceAttributes", async function () {
    try {
       const data = await client.DetectFaceAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetUpgradeGroupFaceModelVersionResult", async function () {
    try {
       const data = await client.GetUpgradeGroupFaceModelVersionResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.ModifyPersonGroupInfo", async function () {
    try {
       const data = await client.ModifyPersonGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.SearchPersons", async function () {
    try {
       const data = await client.SearchPersons({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.CompareFace", async function () {
    try {
       const data = await client.CompareFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.SearchPersonsReturnsByGroup", async function () {
    try {
       const data = await client.SearchPersonsReturnsByGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.GetGroupList", async function () {
    try {
       const data = await client.GetGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20180301.DeleteFace", async function () {
    try {
       const data = await client.DeleteFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
