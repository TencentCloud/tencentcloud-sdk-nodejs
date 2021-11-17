
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cme.v20191029.Client({
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
describe("cme.v20191029.test.js", function () {

it("cme.v20191029.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeTeams", async function () {
    try {
       const data = await client.DescribeTeams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeVideoEncodingPresets", async function () {
    try {
       const data = await client.DescribeVideoEncodingPresets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ExportVideoEditProject", async function () {
    try {
       const data = await client.ExportVideoEditProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeSharedSpace", async function () {
    try {
       const data = await client.DescribeSharedSpace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.GenerateVideoSegmentationSchemeByAi", async function () {
    try {
       const data = await client.GenerateVideoSegmentationSchemeByAi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ExportVideoByVideoSegmentationData", async function () {
    try {
       const data = await client.ExportVideoByVideoSegmentationData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.GrantResourceAuthorization", async function () {
    try {
       const data = await client.GrantResourceAuthorization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.SearchMaterial", async function () {
    try {
       const data = await client.SearchMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ParseEvent", async function () {
    try {
       const data = await client.ParseEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeJoinTeams", async function () {
    try {
       const data = await client.DescribeJoinTeams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeResourceAuthorization", async function () {
    try {
       const data = await client.DescribeResourceAuthorization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ImportMaterial", async function () {
    try {
       const data = await client.ImportMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ExportVideoByEditorTrackData", async function () {
    try {
       const data = await client.ExportVideoByEditorTrackData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeClass", async function () {
    try {
       const data = await client.DescribeClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.CreateVideoEncodingPreset", async function () {
    try {
       const data = await client.CreateVideoEncodingPreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ModifyTeam", async function () {
    try {
       const data = await client.ModifyTeam({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DeleteMaterial", async function () {
    try {
       const data = await client.DeleteMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ModifyMaterial", async function () {
    try {
       const data = await client.ModifyMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DeleteTeam", async function () {
    try {
       const data = await client.DeleteTeam({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.AddTeamMember", async function () {
    try {
       const data = await client.AddTeamMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.MoveClass", async function () {
    try {
       const data = await client.MoveClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.CreateLink", async function () {
    try {
       const data = await client.CreateLink({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ModifyTeamMember", async function () {
    try {
       const data = await client.ModifyTeamMember({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DeleteVideoEncodingPreset", async function () {
    try {
       const data = await client.DeleteVideoEncodingPreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DeleteTeamMembers", async function () {
    try {
       const data = await client.DeleteTeamMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DeleteLoginStatus", async function () {
    try {
       const data = await client.DeleteLoginStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeProjects", async function () {
    try {
       const data = await client.DescribeProjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeLoginStatus", async function () {
    try {
       const data = await client.DescribeLoginStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ModifyVideoEncodingPreset", async function () {
    try {
       const data = await client.ModifyVideoEncodingPreset({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeMaterials", async function () {
    try {
       const data = await client.DescribeMaterials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.HandleStreamConnectProject", async function () {
    try {
       const data = await client.HandleStreamConnectProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeAccounts", async function () {
    try {
       const data = await client.DescribeAccounts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribePlatforms", async function () {
    try {
       const data = await client.DescribePlatforms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.CreateTeam", async function () {
    try {
       const data = await client.CreateTeam({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ModifyProject", async function () {
    try {
       const data = await client.ModifyProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.CreateClass", async function () {
    try {
       const data = await client.CreateClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.RevokeResourceAuthorization", async function () {
    try {
       const data = await client.RevokeResourceAuthorization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ImportMediaToProject", async function () {
    try {
       const data = await client.ImportMediaToProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ListMedia", async function () {
    try {
       const data = await client.ListMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.CreateProject", async function () {
    try {
       const data = await client.CreateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.ExportVideoByTemplate", async function () {
    try {
       const data = await client.ExportVideoByTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.MoveResource", async function () {
    try {
       const data = await client.MoveResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DeleteClass", async function () {
    try {
       const data = await client.DeleteClass({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DeleteProject", async function () {
    try {
       const data = await client.DeleteProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.FlattenListMedia", async function () {
    try {
       const data = await client.FlattenListMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.CopyProject", async function () {
    try {
       const data = await client.CopyProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cme.v20191029.DescribeTeamMembers", async function () {
    try {
       const data = await client.DescribeTeamMembers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
