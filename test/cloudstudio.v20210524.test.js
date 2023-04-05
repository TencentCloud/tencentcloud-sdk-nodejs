
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cloudstudio.v20210524.Client({
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
describe("cloudstudio.v20210524.test.js", function () {

it("cloudstudio.v20210524.DescribeCustomizeTemplatesById", async function () {
    try {
       const data = await client.DescribeCustomizeTemplatesById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.CreateWorkspaceTemporaryToken", async function () {
    try {
       const data = await client.CreateWorkspaceTemporaryToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.ModifyCustomizeTemplatesPartById", async function () {
    try {
       const data = await client.ModifyCustomizeTemplatesPartById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DescribeWorkspaceIsReady", async function () {
    try {
       const data = await client.DescribeWorkspaceIsReady({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.RunWorkspace", async function () {
    try {
       const data = await client.RunWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DescribeCustomizeTemplates", async function () {
    try {
       const data = await client.DescribeCustomizeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.RecoverWorkspace", async function () {
    try {
       const data = await client.RecoverWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.CreateWorkspaceByVersionControl", async function () {
    try {
       const data = await client.CreateWorkspaceByVersionControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.ModifyCustomizeTemplateVersionControl", async function () {
    try {
       const data = await client.ModifyCustomizeTemplateVersionControl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.CreateWorkspaceByAgent", async function () {
    try {
       const data = await client.CreateWorkspaceByAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.RemoveWorkspace", async function () {
    try {
       const data = await client.RemoveWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DescribeWorkspaceEnvList", async function () {
    try {
       const data = await client.DescribeWorkspaceEnvList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DeleteCustomizeTemplatesById", async function () {
    try {
       const data = await client.DeleteCustomizeTemplatesById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.StopWorkspace", async function () {
    try {
       const data = await client.StopWorkspace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DescribeWorkspaceStatus", async function () {
    try {
       const data = await client.DescribeWorkspaceStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DescribeCustomizeTemplatesPresets", async function () {
    try {
       const data = await client.DescribeCustomizeTemplatesPresets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.CreateCustomizeTemplates", async function () {
    try {
       const data = await client.CreateCustomizeTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.ModifyCustomizeTemplatesFullById", async function () {
    try {
       const data = await client.ModifyCustomizeTemplatesFullById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.CreateWorkspaceByTemplate", async function () {
    try {
       const data = await client.CreateWorkspaceByTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DescribeWorkspaceStatusList", async function () {
    try {
       const data = await client.DescribeWorkspaceStatusList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.DescribeWorkspaceNameExist", async function () {
    try {
       const data = await client.DescribeWorkspaceNameExist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudstudio.v20210524.ModifyWorkspaceAttributes", async function () {
    try {
       const data = await client.ModifyWorkspaceAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
