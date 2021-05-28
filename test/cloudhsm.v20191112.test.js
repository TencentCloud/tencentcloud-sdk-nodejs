
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cloudhsm.v20191112.Client({
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
describe("cloudhsm.v20191112.test.js", function () {

it("cloudhsm.v20191112.ModifyVsmAttributes", async function () {
    try {
       const data = await client.ModifyVsmAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeVsmAttributes", async function () {
    try {
       const data = await client.DescribeVsmAttributes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeVsms", async function () {
    try {
       const data = await client.DescribeVsms({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeVpc", async function () {
    try {
       const data = await client.DescribeVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeHSMByVpcId", async function () {
    try {
       const data = await client.DescribeHSMByVpcId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeHSMBySubnetId", async function () {
    try {
       const data = await client.DescribeHSMBySubnetId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeUsg", async function () {
    try {
       const data = await client.DescribeUsg({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeSubnet", async function () {
    try {
       const data = await client.DescribeSubnet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeSupportedHsm", async function () {
    try {
       const data = await client.DescribeSupportedHsm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.InquiryPriceBuyVsm", async function () {
    try {
       const data = await client.InquiryPriceBuyVsm({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cloudhsm.v20191112.DescribeUsgRule", async function () {
    try {
       const data = await client.DescribeUsgRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
