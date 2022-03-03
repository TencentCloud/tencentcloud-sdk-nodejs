
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ivld.v20210903.Client({
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
describe("ivld.v20210903.test.js", function () {

it("ivld.v20210903.CreateTask", async function () {
    try {
       const data = await client.CreateTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.ImportMedia", async function () {
    try {
       const data = await client.ImportMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.CreateCustomPerson", async function () {
    try {
       const data = await client.CreateCustomPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DeleteCustomPersonImage", async function () {
    try {
       const data = await client.DeleteCustomPersonImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.QueryCallback", async function () {
    try {
       const data = await client.QueryCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.UpdateCustomCategory", async function () {
    try {
       const data = await client.UpdateCustomCategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.UpdateCustomPerson", async function () {
    try {
       const data = await client.UpdateCustomPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DeleteCustomCategory", async function () {
    try {
       const data = await client.DeleteCustomCategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.AddCustomPersonImage", async function () {
    try {
       const data = await client.AddCustomPersonImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeTaskDetail", async function () {
    try {
       const data = await client.DescribeTaskDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.CreateDefaultCategories", async function () {
    try {
       const data = await client.CreateDefaultCategories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeTask", async function () {
    try {
       const data = await client.DescribeTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeCustomPersonDetail", async function () {
    try {
       const data = await client.DescribeCustomPersonDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.CreateCustomCategory", async function () {
    try {
       const data = await client.CreateCustomCategory({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeCustomPersons", async function () {
    try {
       const data = await client.DescribeCustomPersons({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DeleteCustomPerson", async function () {
    try {
       const data = await client.DeleteCustomPerson({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeMedia", async function () {
    try {
       const data = await client.DescribeMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DeleteMedia", async function () {
    try {
       const data = await client.DeleteMedia({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.ModifyCallback", async function () {
    try {
       const data = await client.ModifyCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.CreateCustomGroup", async function () {
    try {
       const data = await client.CreateCustomGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeCustomCategories", async function () {
    try {
       const data = await client.DescribeCustomCategories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DeleteTask", async function () {
    try {
       const data = await client.DeleteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeCustomGroup", async function () {
    try {
       const data = await client.DescribeCustomGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ivld.v20210903.DescribeMedias", async function () {
    try {
       const data = await client.DescribeMedias({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
