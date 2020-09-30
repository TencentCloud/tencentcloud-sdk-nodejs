
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.gse.v20191112.Client({
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
describe("gse.v20191112.test.js", function () {

it("gse.v20191112.UpdateGameServerSession", async function () {
    try {
       const data = await client.UpdateGameServerSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeScalingPolicies", async function () {
    try {
       const data = await client.DescribeScalingPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessions", async function () {
    try {
       const data = await client.DescribeGameServerSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.GetInstanceAccess", async function () {
    try {
       const data = await client.GetInstanceAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.JoinGameServerSession", async function () {
    try {
       const data = await client.JoinGameServerSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessionPlacement", async function () {
    try {
       const data = await client.DescribeGameServerSessionPlacement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessionDetails", async function () {
    try {
       const data = await client.DescribeGameServerSessionDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.PutScalingPolicy", async function () {
    try {
       const data = await client.PutScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.StartGameServerSessionPlacement", async function () {
    try {
       const data = await client.StartGameServerSessionPlacement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.SetServerWeight", async function () {
    try {
       const data = await client.SetServerWeight({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.StartMatchPlacement", async function () {
    try {
       const data = await client.StartMatchPlacement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.StopGameServerSessionPlacement", async function () {
    try {
       const data = await client.StopGameServerSessionPlacement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribePlayerSessions", async function () {
    try {
       const data = await client.DescribePlayerSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.GetGameServerSessionLogUrl", async function () {
    try {
       const data = await client.GetGameServerSessionLogUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.SearchGameServerSessions", async function () {
    try {
       const data = await client.SearchGameServerSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DeleteScalingPolicy", async function () {
    try {
       const data = await client.DeleteScalingPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.CreateGameServerSession", async function () {
    try {
       const data = await client.CreateGameServerSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("gse.v20191112.DescribeGameServerSessionQueues", async function () {
    try {
       const data = await client.DescribeGameServerSessionQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
