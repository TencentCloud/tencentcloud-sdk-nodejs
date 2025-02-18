
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.trabbit.v20230418.Client({
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
describe("trabbit.v20230418.test.js", function () {

it("trabbit.v20230418.DeleteRabbitMQServerlessBinding", async function () {
    try {
       const data = await client.DeleteRabbitMQServerlessBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.ModifyRabbitMQServerlessInstance", async function () {
    try {
       const data = await client.ModifyRabbitMQServerlessInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.CreateRabbitMQServerlessVirtualHost", async function () {
    try {
       const data = await client.CreateRabbitMQServerlessVirtualHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessInstance", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessConsumers", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessConsumers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DeleteRabbitMQServerlessQueue", async function () {
    try {
       const data = await client.DeleteRabbitMQServerlessQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DeleteRabbitMQServerlessUser", async function () {
    try {
       const data = await client.DeleteRabbitMQServerlessUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DeleteRabbitMQServerlessVirtualHost", async function () {
    try {
       const data = await client.DeleteRabbitMQServerlessVirtualHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.ModifyRabbitMQServerlessUser", async function () {
    try {
       const data = await client.ModifyRabbitMQServerlessUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessUser", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessExchangeDetail", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessExchangeDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessVirtualHost", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessVirtualHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessExchanges", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessExchanges({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessBindings", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessBindings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.CreateRabbitMQServerlessUser", async function () {
    try {
       const data = await client.CreateRabbitMQServerlessUser({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessQueues", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessQueues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.ModifyRabbitMQServerlessVirtualHost", async function () {
    try {
       const data = await client.ModifyRabbitMQServerlessVirtualHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.CreateRabbitMQServerlessQueue", async function () {
    try {
       const data = await client.CreateRabbitMQServerlessQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DeleteRabbitMQServerlessExchange", async function () {
    try {
       const data = await client.DeleteRabbitMQServerlessExchange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessPermission", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessPermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessQueueDetail", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessQueueDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DescribeRabbitMQServerlessConnection", async function () {
    try {
       const data = await client.DescribeRabbitMQServerlessConnection({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.ModifyRabbitMQServerlessQueue", async function () {
    try {
       const data = await client.ModifyRabbitMQServerlessQueue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.ModifyRabbitMQServerlessExchange", async function () {
    try {
       const data = await client.ModifyRabbitMQServerlessExchange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.CreateRabbitMQServerlessBinding", async function () {
    try {
       const data = await client.CreateRabbitMQServerlessBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.DeleteRabbitMQServerlessPermission", async function () {
    try {
       const data = await client.DeleteRabbitMQServerlessPermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.ListRabbitMQServerlessInstances", async function () {
    try {
       const data = await client.ListRabbitMQServerlessInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.CreateRabbitMQServerlessExchange", async function () {
    try {
       const data = await client.CreateRabbitMQServerlessExchange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("trabbit.v20230418.ModifyRabbitMQServerlessPermission", async function () {
    try {
       const data = await client.ModifyRabbitMQServerlessPermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
