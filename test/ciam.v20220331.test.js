
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ciam.v20220331.Client({
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
describe("ciam.v20220331.test.js", function () {

it("ciam.v20220331.DeleteUsers", async function () {
    try {
       const data = await client.DeleteUsers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.ListJobs", async function () {
    try {
       const data = await client.ListJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.UpdateUser", async function () {
    try {
       const data = await client.UpdateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.DescribeUser", async function () {
    try {
       const data = await client.DescribeUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.ListUser", async function () {
    try {
       const data = await client.ListUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.UpdateUserStatus", async function () {
    try {
       const data = await client.UpdateUserStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.ListUserByProperty", async function () {
    try {
       const data = await client.ListUserByProperty({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.ListLogMessageByCondition", async function () {
    try {
       const data = await client.ListLogMessageByCondition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.DescribeUserById", async function () {
    try {
       const data = await client.DescribeUserById({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.CreateUser", async function () {
    try {
       const data = await client.CreateUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.SetPassword", async function () {
    try {
       const data = await client.SetPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.CreateFileExportUserJob", async function () {
    try {
       const data = await client.CreateFileExportUserJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.CreateApiImportUserJob", async function () {
    try {
       const data = await client.CreateApiImportUserJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.LinkAccount", async function () {
    try {
       const data = await client.LinkAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ciam.v20220331.ResetPassword", async function () {
    try {
       const data = await client.ResetPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
