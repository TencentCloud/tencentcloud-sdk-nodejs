
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.vcube.v20220410.Client({
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
describe("vcube.v20220410.test.js", function () {

it("vcube.v20220410.ModifyTrialLicense", async function () {
    try {
       const data = await client.ModifyTrialLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.RenewTestXMagic", async function () {
    try {
       const data = await client.RenewTestXMagic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeVcubeResources", async function () {
    try {
       const data = await client.DescribeVcubeResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateApplicationAndBindLicense", async function () {
    try {
       const data = await client.CreateApplicationAndBindLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateApplicationAndWebPlayerLicense", async function () {
    try {
       const data = await client.CreateApplicationAndWebPlayerLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeXMagicResource", async function () {
    try {
       const data = await client.DescribeXMagicResource({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.ModifyApplication", async function () {
    try {
       const data = await client.ModifyApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.ModifyFormalApplication", async function () {
    try {
       const data = await client.ModifyFormalApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeUserConfig", async function () {
    try {
       const data = await client.DescribeUserConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeSTS", async function () {
    try {
       const data = await client.DescribeSTS({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.ModifyPresetApplication", async function () {
    try {
       const data = await client.ModifyPresetApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeVcubeResourcesList", async function () {
    try {
       const data = await client.DescribeVcubeResourcesList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateTrialLicense", async function () {
    try {
       const data = await client.CreateTrialLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.ModifyLicense", async function () {
    try {
       const data = await client.ModifyLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeVcubeApplicationAndLicense", async function () {
    try {
       const data = await client.DescribeVcubeApplicationAndLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.UpdateTestXMagic", async function () {
    try {
       const data = await client.UpdateTestXMagic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.UpdateXMagic", async function () {
    try {
       const data = await client.UpdateXMagic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.UpdateTrialLicense", async function () {
    try {
       const data = await client.UpdateTrialLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeVcubeApplicationAndXMagicList", async function () {
    try {
       const data = await client.DescribeVcubeApplicationAndXMagicList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeVcubeApplicationAndPlayList", async function () {
    try {
       const data = await client.DescribeVcubeApplicationAndPlayList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeLicenseList", async function () {
    try {
       const data = await client.DescribeLicenseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateActivityLicense", async function () {
    try {
       const data = await client.CreateActivityLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateLicense", async function () {
    try {
       const data = await client.CreateLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateTestXMagic", async function () {
    try {
       const data = await client.CreateTestXMagic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.RenewVideo", async function () {
    try {
       const data = await client.RenewVideo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.RenewLicense", async function () {
    try {
       const data = await client.RenewLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateTrialApplicationAndLicense", async function () {
    try {
       const data = await client.CreateTrialApplicationAndLicense({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeXMagicResourceList", async function () {
    try {
       const data = await client.DescribeXMagicResourceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeTrialFeature", async function () {
    try {
       const data = await client.DescribeTrialFeature({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateXMagic", async function () {
    try {
       const data = await client.CreateXMagic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.CreateApplicationAndVideo", async function () {
    try {
       const data = await client.CreateApplicationAndVideo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeFeatureList", async function () {
    try {
       const data = await client.DescribeFeatureList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.DescribeNews", async function () {
    try {
       const data = await client.DescribeNews({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("vcube.v20220410.ModifyXMagic", async function () {
    try {
       const data = await client.ModifyXMagic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
