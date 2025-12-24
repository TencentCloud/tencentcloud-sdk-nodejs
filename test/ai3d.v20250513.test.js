
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ai3d.v20250513.Client({
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
describe("ai3d.v20250513.test.js", function () {

it("ai3d.v20250513.SubmitTextureTo3DJob", async function () {
    try {
       const data = await client.SubmitTextureTo3DJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.SubmitReduceFaceJob", async function () {
    try {
       const data = await client.SubmitReduceFaceJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.SubmitHunyuanTo3DProJob", async function () {
    try {
       const data = await client.SubmitHunyuanTo3DProJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.SubmitHunyuanTo3DRapidJob", async function () {
    try {
       const data = await client.SubmitHunyuanTo3DRapidJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.SubmitHunyuanTo3DUVJob", async function () {
    try {
       const data = await client.SubmitHunyuanTo3DUVJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.SubmitHunyuan3DPartJob", async function () {
    try {
       const data = await client.SubmitHunyuan3DPartJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.DescribeReduceFaceJob", async function () {
    try {
       const data = await client.DescribeReduceFaceJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.QueryHunyuanTo3DRapidJob", async function () {
    try {
       const data = await client.QueryHunyuanTo3DRapidJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.QueryHunyuan3DPartJob", async function () {
    try {
       const data = await client.QueryHunyuan3DPartJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.DescribeTextureTo3DJob", async function () {
    try {
       const data = await client.DescribeTextureTo3DJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.DescribeHunyuanTo3DUVJob", async function () {
    try {
       const data = await client.DescribeHunyuanTo3DUVJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.QueryHunyuanTo3DProJob", async function () {
    try {
       const data = await client.QueryHunyuanTo3DProJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ai3d.v20250513.Convert3DFormat", async function () {
    try {
       const data = await client.Convert3DFormat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
