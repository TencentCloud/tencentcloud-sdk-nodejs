
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iai.v20200303.Client({
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
describe("iai.v20200303.test.js", function () {

it("iai.v20200303.DeletePersonFromGroup", async function () {
    try {
       const data = await client.DeletePersonFromGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.SearchFacesReturnsByGroup", async function () {
    try {
       const data = await client.SearchFacesReturnsByGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.CreateGroup", async function () {
    try {
       const data = await client.CreateGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetPersonBaseInfo", async function () {
    try {
       const data = await client.GetPersonBaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.DetectLiveFace", async function () {
    try {
       const data = await client.DetectLiveFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.CreateFace", async function () {
    try {
       const data = await client.CreateFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.DeleteGroup", async function () {
    try {
       const data = await client.DeleteGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetPersonListNum", async function () {
    try {
       const data = await client.GetPersonListNum({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetPersonGroupInfo", async function () {
    try {
       const data = await client.GetPersonGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.AnalyzeFace", async function () {
    try {
       const data = await client.AnalyzeFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.ModifyPersonBaseInfo", async function () {
    try {
       const data = await client.ModifyPersonBaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.SearchFaces", async function () {
    try {
       const data = await client.SearchFaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.CopyPerson", async function () {
    try {
       const data = await client.CopyPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.VerifyFace", async function () {
    try {
       const data = await client.VerifyFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.AnalyzeDenseLandmarks", async function () {
    try {
       const data = await client.AnalyzeDenseLandmarks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.DeletePerson", async function () {
    try {
       const data = await client.DeletePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.ModifyGroup", async function () {
    try {
       const data = await client.ModifyGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.UpgradeGroupFaceModelVersion", async function () {
    try {
       const data = await client.UpgradeGroupFaceModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.RevertGroupFaceModelVersion", async function () {
    try {
       const data = await client.RevertGroupFaceModelVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.CreatePerson", async function () {
    try {
       const data = await client.CreatePerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.CompareMaskFace", async function () {
    try {
       const data = await client.CompareMaskFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetUpgradeGroupFaceModelVersionJobList", async function () {
    try {
       const data = await client.GetUpgradeGroupFaceModelVersionJobList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetGroupInfo", async function () {
    try {
       const data = await client.GetGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.DetectFace", async function () {
    try {
       const data = await client.DetectFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetPersonList", async function () {
    try {
       const data = await client.GetPersonList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.VerifyPerson", async function () {
    try {
       const data = await client.VerifyPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.DetectFaceAttributes", async function () {
    try {
       const data = await client.DetectFaceAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.DetectLiveFaceAccurate", async function () {
    try {
       const data = await client.DetectLiveFaceAccurate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetUpgradeGroupFaceModelVersionResult", async function () {
    try {
       const data = await client.GetUpgradeGroupFaceModelVersionResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.ModifyPersonGroupInfo", async function () {
    try {
       const data = await client.ModifyPersonGroupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.SearchPersons", async function () {
    try {
       const data = await client.SearchPersons({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.CompareFace", async function () {
    try {
       const data = await client.CompareFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.SearchPersonsReturnsByGroup", async function () {
    try {
       const data = await client.SearchPersonsReturnsByGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.GetGroupList", async function () {
    try {
       const data = await client.GetGroupList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iai.v20200303.DeleteFace", async function () {
    try {
       const data = await client.DeleteFace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
