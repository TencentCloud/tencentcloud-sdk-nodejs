
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bi.v20220105.Client({
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
describe("bi.v20220105.test.js", function () {

it("bi.v20220105.ModifyDatasource", async function () {
    try {
       const data = await client.ModifyDatasource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DescribeDatasourceList", async function () {
    try {
       const data = await client.DescribeDatasourceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.CreateDatasource", async function () {
    try {
       const data = await client.CreateDatasource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DescribeProjectInfo", async function () {
    try {
       const data = await client.DescribeProjectInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.ApplyEmbedInterval", async function () {
    try {
       const data = await client.ApplyEmbedInterval({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.CreateDatasourceCloud", async function () {
    try {
       const data = await client.CreateDatasourceCloud({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.ModifyUserRole", async function () {
    try {
       const data = await client.ModifyUserRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.CreateEmbedToken", async function () {
    try {
       const data = await client.CreateEmbedToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.CreateUserRole", async function () {
    try {
       const data = await client.CreateUserRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DeleteDatasource", async function () {
    try {
       const data = await client.DeleteDatasource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DeleteUserRole", async function () {
    try {
       const data = await client.DeleteUserRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.ModifyProject", async function () {
    try {
       const data = await client.ModifyProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DescribeUserRoleList", async function () {
    try {
       const data = await client.DescribeUserRoleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DescribeUserRoleProjectList", async function () {
    try {
       const data = await client.DescribeUserRoleProjectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.ModifyDatasourceCloud", async function () {
    try {
       const data = await client.ModifyDatasourceCloud({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.CreateUserRoleProject", async function () {
    try {
       const data = await client.CreateUserRoleProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DeleteUserRoleProject", async function () {
    try {
       const data = await client.DeleteUserRoleProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.CreateProject", async function () {
    try {
       const data = await client.CreateProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DescribeUserProjectList", async function () {
    try {
       const data = await client.DescribeUserProjectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DeleteProject", async function () {
    try {
       const data = await client.DeleteProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.ModifyUserRoleProject", async function () {
    try {
       const data = await client.ModifyUserRoleProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bi.v20220105.DescribeProjectList", async function () {
    try {
       const data = await client.DescribeProjectList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
