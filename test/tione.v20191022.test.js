
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tione.v20191022.Client({
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
describe("tione.v20191022.test.js", function () {

it("tione.v20191022.UpdateNotebookInstance", async function () {
    try {
       const data = await client.UpdateNotebookInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeNotebookLifecycleScripts", async function () {
    try {
       const data = await client.DescribeNotebookLifecycleScripts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.StartNotebookInstance", async function () {
    try {
       const data = await client.StartNotebookInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DeleteNotebookInstance", async function () {
    try {
       const data = await client.DeleteNotebookInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeNotebookLifecycleScript", async function () {
    try {
       const data = await client.DescribeNotebookLifecycleScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.CreatePresignedNotebookInstanceUrl", async function () {
    try {
       const data = await client.CreatePresignedNotebookInstanceUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.CreateCodeRepository", async function () {
    try {
       const data = await client.CreateCodeRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.UpdateNotebookLifecycleScript", async function () {
    try {
       const data = await client.UpdateNotebookLifecycleScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeTrainingJob", async function () {
    try {
       const data = await client.DescribeTrainingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.StopNotebookInstance", async function () {
    try {
       const data = await client.StopNotebookInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.CreateNotebookInstance", async function () {
    try {
       const data = await client.CreateNotebookInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeCodeRepository", async function () {
    try {
       const data = await client.DescribeCodeRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeTrainingJobs", async function () {
    try {
       const data = await client.DescribeTrainingJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DeleteCodeRepository", async function () {
    try {
       const data = await client.DeleteCodeRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeNotebookSummary", async function () {
    try {
       const data = await client.DescribeNotebookSummary({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.CreateNotebookLifecycleScript", async function () {
    try {
       const data = await client.CreateNotebookLifecycleScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DeleteNotebookLifecycleScript", async function () {
    try {
       const data = await client.DeleteNotebookLifecycleScript({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeNotebookInstance", async function () {
    try {
       const data = await client.DescribeNotebookInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.UpdateCodeRepository", async function () {
    try {
       const data = await client.UpdateCodeRepository({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeNotebookInstances", async function () {
    try {
       const data = await client.DescribeNotebookInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.CreateTrainingJob", async function () {
    try {
       const data = await client.CreateTrainingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.DescribeCodeRepositories", async function () {
    try {
       const data = await client.DescribeCodeRepositories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tione.v20191022.StopTrainingJob", async function () {
    try {
       const data = await client.StopTrainingJob({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
