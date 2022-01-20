
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.eb.v20210416.Client({
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
describe("eb.v20210416.test.js", function () {

it("eb.v20210416.DeleteEventBus", async function () {
    try {
       const data = await client.DeleteEventBus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.CreateTransformation", async function () {
    try {
       const data = await client.CreateTransformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.CreateEventBus", async function () {
    try {
       const data = await client.CreateEventBus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.CreateRule", async function () {
    try {
       const data = await client.CreateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.DeleteTarget", async function () {
    try {
       const data = await client.DeleteTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.ListTargets", async function () {
    try {
       const data = await client.ListTargets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.CheckRule", async function () {
    try {
       const data = await client.CheckRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.PublishEvent", async function () {
    try {
       const data = await client.PublishEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.PutEvents", async function () {
    try {
       const data = await client.PutEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.UpdateTarget", async function () {
    try {
       const data = await client.UpdateTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.GetTransformation", async function () {
    try {
       const data = await client.GetTransformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.ListRules", async function () {
    try {
       const data = await client.ListRules({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.DeleteRule", async function () {
    try {
       const data = await client.DeleteRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.UpdateEventBus", async function () {
    try {
       const data = await client.UpdateEventBus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.CreateTarget", async function () {
    try {
       const data = await client.CreateTarget({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.UpdateRule", async function () {
    try {
       const data = await client.UpdateRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.DeleteTransformation", async function () {
    try {
       const data = await client.DeleteTransformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.CreateConnection", async function () {
    try {
       const data = await client.CreateConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.GetRule", async function () {
    try {
       const data = await client.GetRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.DeleteConnection", async function () {
    try {
       const data = await client.DeleteConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.ListEventBuses", async function () {
    try {
       const data = await client.ListEventBuses({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.GetEventBus", async function () {
    try {
       const data = await client.GetEventBus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.UpdateTransformation", async function () {
    try {
       const data = await client.UpdateTransformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.CheckTransformation", async function () {
    try {
       const data = await client.CheckTransformation({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.ListConnections", async function () {
    try {
       const data = await client.ListConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("eb.v20210416.UpdateConnection", async function () {
    try {
       const data = await client.UpdateConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
