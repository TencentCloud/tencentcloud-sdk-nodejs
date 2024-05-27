
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.domain.v20180808.Client({
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
describe("domain.v20180808.test.js", function () {

it("domain.v20180808.TransferProhibitionBatch", async function () {
    try {
       const data = await client.TransferProhibitionBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBiddingAppointList", async function () {
    try {
       const data = await client.DescribeBiddingAppointList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.BiddingPreRelease", async function () {
    try {
       const data = await client.BiddingPreRelease({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.SetDomainAutoRenew", async function () {
    try {
       const data = await client.SetDomainAutoRenew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeReservedBidInfo", async function () {
    try {
       const data = await client.DescribeReservedBidInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.ModifyCustomDnsHost", async function () {
    try {
       const data = await client.ModifyCustomDnsHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.CheckBatchStatus", async function () {
    try {
       const data = await client.CheckBatchStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.UploadImage", async function () {
    try {
       const data = await client.UploadImage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DeletePhoneEmail", async function () {
    try {
       const data = await client.DeletePhoneEmail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribePreDomainList", async function () {
    try {
       const data = await client.DescribePreDomainList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.BidPreDomains", async function () {
    try {
       const data = await client.BidPreDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeCustomDnsHostSet", async function () {
    try {
       const data = await client.DescribeCustomDnsHostSet({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeDomainNameList", async function () {
    try {
       const data = await client.DescribeDomainNameList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.ModifyIntlCustomDnsHost", async function () {
    try {
       const data = await client.ModifyIntlCustomDnsHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeDomainSimpleInfo", async function () {
    try {
       const data = await client.DescribeDomainSimpleInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.CreateDomainBatch", async function () {
    try {
       const data = await client.CreateDomainBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeDomainBaseInfo", async function () {
    try {
       const data = await client.DescribeDomainBaseInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBatchOperationLogDetails", async function () {
    try {
       const data = await client.DescribeBatchOperationLogDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DeleteTemplate", async function () {
    try {
       const data = await client.DeleteTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeTldList", async function () {
    try {
       const data = await client.DescribeTldList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBiddingSuccessfulList", async function () {
    try {
       const data = await client.DescribeBiddingSuccessfulList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.CheckDomain", async function () {
    try {
       const data = await client.CheckDomain({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.ReservedPreDomains", async function () {
    try {
       const data = await client.ReservedPreDomains({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.SyncCustomDnsHost", async function () {
    try {
       const data = await client.SyncCustomDnsHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribePreAuctionList", async function () {
    try {
       const data = await client.DescribePreAuctionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.ModifyDomainDNSBatch", async function () {
    try {
       const data = await client.ModifyDomainDNSBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.CreateCustomDnsHost", async function () {
    try {
       const data = await client.CreateCustomDnsHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeTemplate", async function () {
    try {
       const data = await client.DescribeTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.CreatePhoneEmail", async function () {
    try {
       const data = await client.CreatePhoneEmail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.CreateDomainRedemption", async function () {
    try {
       const data = await client.CreateDomainRedemption({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribePreReleaseList", async function () {
    try {
       const data = await client.DescribePreReleaseList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeAuctionList", async function () {
    try {
       const data = await client.DescribeAuctionList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeTemplateList", async function () {
    try {
       const data = await client.DescribeTemplateList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DeleteReservedPreDomainInfo", async function () {
    try {
       const data = await client.DeleteReservedPreDomainInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DeleteBidding", async function () {
    try {
       const data = await client.DeleteBidding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.ModifyTemplate", async function () {
    try {
       const data = await client.ModifyTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.BidDetailPage", async function () {
    try {
       const data = await client.BidDetailPage({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeUnPreDomainDetail", async function () {
    try {
       const data = await client.DescribeUnPreDomainDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.TransferInDomainBatch", async function () {
    try {
       const data = await client.TransferInDomainBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.UpdateProhibitionBatch", async function () {
    try {
       const data = await client.UpdateProhibitionBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribePayWaitDetail", async function () {
    try {
       const data = await client.DescribePayWaitDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBiddingList", async function () {
    try {
       const data = await client.DescribeBiddingList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.CreateTemplate", async function () {
    try {
       const data = await client.CreateTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBiddingDetail", async function () {
    try {
       const data = await client.DescribeBiddingDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeReservedPreDomainInfo", async function () {
    try {
       const data = await client.DescribeReservedPreDomainInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBiddingAppointDetail", async function () {
    try {
       const data = await client.DescribeBiddingAppointDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribePhoneEmailList", async function () {
    try {
       const data = await client.DescribePhoneEmailList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.SendPhoneEmailCode", async function () {
    try {
       const data = await client.SendPhoneEmailCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.ModifyDomainOwnerBatch", async function () {
    try {
       const data = await client.ModifyDomainOwnerBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.RenewDomainBatch", async function () {
    try {
       const data = await client.RenewDomainBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DeleteCustomDnsHost", async function () {
    try {
       const data = await client.DeleteCustomDnsHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.BatchModifyDomainInfo", async function () {
    try {
       const data = await client.BatchModifyDomainInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeDomainPriceList", async function () {
    try {
       const data = await client.DescribeDomainPriceList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBatchOperationLogs", async function () {
    try {
       const data = await client.DescribeBatchOperationLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("domain.v20180808.DescribeBiddingSuccessfulDetail", async function () {
    try {
       const data = await client.DescribeBiddingSuccessfulDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
