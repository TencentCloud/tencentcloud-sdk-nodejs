
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ump.v20200918.Client({
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
describe("ump.v20200918.test.js", function () {

it("ump.v20200918.ReportServiceRegister", async function () {
    try {
       const data = await client.ReportServiceRegister({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.ModifyMultiBizConfig", async function () {
    try {
       const data = await client.ModifyMultiBizConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.CreateCameraAlerts", async function () {
    try {
       const data = await client.CreateCameraAlerts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DescribeConfig", async function () {
    try {
       const data = await client.DescribeConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DescribeImage", async function () {
    try {
       const data = await client.DescribeImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DeleteMultiBizAlert", async function () {
    try {
       const data = await client.DeleteMultiBizAlert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DescribeCameras", async function () {
    try {
       const data = await client.DescribeCameras({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DescribeZones", async function () {
    try {
       const data = await client.DescribeZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DeleteTask", async function () {
    try {
       const data = await client.DeleteTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.CreateProgramState", async function () {
    try {
       const data = await client.CreateProgramState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DescribeTasks", async function () {
    try {
       const data = await client.DescribeTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.CreateMultiBizAlert", async function () {
    try {
       const data = await client.CreateMultiBizAlert({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.SearchImage", async function () {
    try {
       const data = await client.SearchImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.CreateServerState", async function () {
    try {
       const data = await client.CreateServerState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.DescribeMultiBizBaseImage", async function () {
    try {
       const data = await client.DescribeMultiBizBaseImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.CreateCameraState", async function () {
    try {
       const data = await client.CreateCameraState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ump.v20200918.CreateCapture", async function () {
    try {
       const data = await client.CreateCapture({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
