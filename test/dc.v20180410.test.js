
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.dc.v20180410.Client({
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
describe("dc.v20180410.test.js", function () {

it("dc.v20180410.ModifyDirectConnectAttribute", async function () {
    try {
       const data = await client.ModifyDirectConnectAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.CreateDirectConnectTunnel", async function () {
    try {
       const data = await client.CreateDirectConnectTunnel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.DeleteDirectConnect", async function () {
    try {
       const data = await client.DeleteDirectConnect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.AcceptDirectConnectTunnel", async function () {
    try {
       const data = await client.AcceptDirectConnectTunnel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.DeleteDirectConnectTunnel", async function () {
    try {
       const data = await client.DeleteDirectConnectTunnel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.DescribeAccessPoints", async function () {
    try {
       const data = await client.DescribeAccessPoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.DescribeDirectConnectTunnels", async function () {
    try {
       const data = await client.DescribeDirectConnectTunnels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.CreateDirectConnect", async function () {
    try {
       const data = await client.CreateDirectConnect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.RejectDirectConnectTunnel", async function () {
    try {
       const data = await client.RejectDirectConnectTunnel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.DescribeDirectConnects", async function () {
    try {
       const data = await client.DescribeDirectConnects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("dc.v20180410.ModifyDirectConnectTunnelAttribute", async function () {
    try {
       const data = await client.ModifyDirectConnectTunnelAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
