
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tag.v20180813.Client({
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
describe("tag.v20180813.test.js", function () {

it("tag.v20180813.DeleteTags", async function () {
    try {
       const data = await client.DeleteTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeResourceTagsByTagKeys", async function () {
    try {
       const data = await client.DescribeResourceTagsByTagKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.GetTagValues", async function () {
    try {
       const data = await client.GetTagValues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeResourceTagsByResourceIds", async function () {
    try {
       const data = await client.DescribeResourceTagsByResourceIds({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.UpdateResourceTagValue", async function () {
    try {
       const data = await client.UpdateResourceTagValue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeResourceTagsByResourceIdsSeq", async function () {
    try {
       const data = await client.DescribeResourceTagsByResourceIdsSeq({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.GetTags", async function () {
    try {
       const data = await client.GetTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.ModifyResourcesTagValue", async function () {
    try {
       const data = await client.ModifyResourcesTagValue({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeResourcesByTags", async function () {
    try {
       const data = await client.DescribeResourcesByTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DeleteTag", async function () {
    try {
       const data = await client.DeleteTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.GetResources", async function () {
    try {
       const data = await client.GetResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeResourceTags", async function () {
    try {
       const data = await client.DescribeResourceTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.GetTagKeys", async function () {
    try {
       const data = await client.GetTagKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeTagsSeq", async function () {
    try {
       const data = await client.DescribeTagsSeq({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.AddResourceTag", async function () {
    try {
       const data = await client.AddResourceTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.AttachResourcesTag", async function () {
    try {
       const data = await client.AttachResourcesTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.CreateTag", async function () {
    try {
       const data = await client.CreateTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DetachResourcesTag", async function () {
    try {
       const data = await client.DetachResourcesTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeTagValues", async function () {
    try {
       const data = await client.DescribeTagValues({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.TagResources", async function () {
    try {
       const data = await client.TagResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DeleteResourceTag", async function () {
    try {
       const data = await client.DeleteResourceTag({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeTags", async function () {
    try {
       const data = await client.DescribeTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeTagKeys", async function () {
    try {
       const data = await client.DescribeTagKeys({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.UnTagResources", async function () {
    try {
       const data = await client.UnTagResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeTagValuesSeq", async function () {
    try {
       const data = await client.DescribeTagValuesSeq({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.CreateTags", async function () {
    try {
       const data = await client.CreateTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.DescribeResourcesByTagsUnion", async function () {
    try {
       const data = await client.DescribeResourcesByTagsUnion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tag.v20180813.ModifyResourceTags", async function () {
    try {
       const data = await client.ModifyResourceTags({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
