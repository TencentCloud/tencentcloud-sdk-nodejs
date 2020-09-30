
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bmeip.v20180625.Client({
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
describe("bmeip.v20180625.test.js", function () {

it("bmeip.v20180625.UnbindRs", async function () {
    try {
       const data = await client.UnbindRs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.BindHosted", async function () {
    try {
       const data = await client.BindHosted({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.CreateEipAcl", async function () {
    try {
       const data = await client.CreateEipAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.CreateEip", async function () {
    try {
       const data = await client.CreateEip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.ModifyEipAcl", async function () {
    try {
       const data = await client.ModifyEipAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.DescribeEipQuota", async function () {
    try {
       const data = await client.DescribeEipQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.BindRs", async function () {
    try {
       const data = await client.BindRs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.DescribeEipTask", async function () {
    try {
       const data = await client.DescribeEipTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.UnbindHosted", async function () {
    try {
       const data = await client.UnbindHosted({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.UnbindVpcIp", async function () {
    try {
       const data = await client.UnbindVpcIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.DeleteEip", async function () {
    try {
       const data = await client.DeleteEip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.ModifyEipCharge", async function () {
    try {
       const data = await client.ModifyEipCharge({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.ModifyEipName", async function () {
    try {
       const data = await client.ModifyEipName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.BindEipAcls", async function () {
    try {
       const data = await client.BindEipAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.DeleteEipAcl", async function () {
    try {
       const data = await client.DeleteEipAcl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.UnbindEipAcls", async function () {
    try {
       const data = await client.UnbindEipAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.DescribeEips", async function () {
    try {
       const data = await client.DescribeEips({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.BindVpcIp", async function () {
    try {
       const data = await client.BindVpcIp({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.UnbindRsList", async function () {
    try {
       const data = await client.UnbindRsList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bmeip.v20180625.DescribeEipAcls", async function () {
    try {
       const data = await client.DescribeEipAcls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
