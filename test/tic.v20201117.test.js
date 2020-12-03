
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tic.v20201117.Client({
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
describe("tic.v20201117.test.js", function () {

it("tic.v20201117.DescribeStackEvents", async function () {
    try {
       const data = await client.DescribeStackEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.UpdateStack", async function () {
    try {
       const data = await client.UpdateStack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.UpdateStackVersion", async function () {
    try {
       const data = await client.UpdateStackVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.DestroyStack", async function () {
    try {
       const data = await client.DestroyStack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.ApplyStack", async function () {
    try {
       const data = await client.ApplyStack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.CreateStackVersion", async function () {
    try {
       const data = await client.CreateStackVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.DeleteStack", async function () {
    try {
       const data = await client.DeleteStack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.PlanStack", async function () {
    try {
       const data = await client.PlanStack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.DeleteStackVersion", async function () {
    try {
       const data = await client.DeleteStackVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.DescribeStackEvent", async function () {
    try {
       const data = await client.DescribeStackEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.DescribeStackVersions", async function () {
    try {
       const data = await client.DescribeStackVersions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.DescribeStacks", async function () {
    try {
       const data = await client.DescribeStacks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tic.v20201117.CreateStack", async function () {
    try {
       const data = await client.CreateStack({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
