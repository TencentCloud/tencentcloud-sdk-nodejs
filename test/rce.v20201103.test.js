
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.rce.v20201103.Client({
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
describe("rce.v20201103.test.js", function () {

it("rce.v20201103.ModifyNameListData", async function () {
    try {
       const data = await client.ModifyNameListData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.DeleteNameListData", async function () {
    try {
       const data = await client.DeleteNameListData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.DescribeNameListDataList", async function () {
    try {
       const data = await client.DescribeNameListDataList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.DescribeNameListDetail", async function () {
    try {
       const data = await client.DescribeNameListDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.ManageMarketingRisk", async function () {
    try {
       const data = await client.ManageMarketingRisk({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.ModifyNameList", async function () {
    try {
       const data = await client.ModifyNameList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.CreateNameList", async function () {
    try {
       const data = await client.CreateNameList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.DeleteNameList", async function () {
    try {
       const data = await client.DeleteNameList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.ImportNameListData", async function () {
    try {
       const data = await client.ImportNameListData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("rce.v20201103.DescribeNameList", async function () {
    try {
       const data = await client.DescribeNameList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
