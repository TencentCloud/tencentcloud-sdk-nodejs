
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tcm.v20210413.Client({
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
describe("tcm.v20210413.test.js", function () {

it("tcm.v20210413.DeleteMesh", async function () {
    try {
       const data = await client.DeleteMesh({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.DescribeAccessLogConfig", async function () {
    try {
       const data = await client.DescribeAccessLogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.LinkClusterList", async function () {
    try {
       const data = await client.LinkClusterList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.LinkPrometheus", async function () {
    try {
       const data = await client.LinkPrometheus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.DescribeMeshList", async function () {
    try {
       const data = await client.DescribeMeshList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.ModifyMesh", async function () {
    try {
       const data = await client.ModifyMesh({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.UnlinkCluster", async function () {
    try {
       const data = await client.UnlinkCluster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.ModifyTracingConfig", async function () {
    try {
       const data = await client.ModifyTracingConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.ModifyAccessLogConfig", async function () {
    try {
       const data = await client.ModifyAccessLogConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.CreateMesh", async function () {
    try {
       const data = await client.CreateMesh({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.DescribeMesh", async function () {
    try {
       const data = await client.DescribeMesh({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tcm.v20210413.UnlinkPrometheus", async function () {
    try {
       const data = await client.UnlinkPrometheus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
