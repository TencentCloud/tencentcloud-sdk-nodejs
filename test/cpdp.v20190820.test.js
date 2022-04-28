
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.cpdp.v20190820.Client({
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
describe("cpdp.v20190820.test.js", function () {

it("cpdp.v20190820.QueryAssignment", async function () {
    try {
       const data = await client.QueryAssignment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeAccreditQuery", async function () {
    try {
       const data = await client.DistributeAccreditQuery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMemberTransactionDetails", async function () {
    try {
       const data = await client.QueryMemberTransactionDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ModifyAgentTaxPaymentInfo", async function () {
    try {
       const data = await client.ModifyAgentTaxPaymentInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ModifyMntMbrBindRelateAcctBankCode", async function () {
    try {
       const data = await client.ModifyMntMbrBindRelateAcctBankCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateBatchPayment", async function () {
    try {
       const data = await client.CreateBatchPayment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DeduceQuota", async function () {
    try {
       const data = await client.DeduceQuota({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateExternalAnchor", async function () {
    try {
       const data = await client.CreateExternalAnchor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOrder", async function () {
    try {
       const data = await client.QueryOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UploadExternalAnchorInfo", async function () {
    try {
       const data = await client.UploadExternalAnchorInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryCloudOrder", async function () {
    try {
       const data = await client.QueryCloudOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.WithdrawCashMembership", async function () {
    try {
       const data = await client.WithdrawCashMembership({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryBankTransactionDetails", async function () {
    try {
       const data = await client.QueryBankTransactionDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateOpenBankExternalSubMerchantRegistration", async function () {
    try {
       const data = await client.CreateOpenBankExternalSubMerchantRegistration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryCommonTransferRecharge", async function () {
    try {
       const data = await client.QueryCommonTransferRecharge({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DownloadBill", async function () {
    try {
       const data = await client.DownloadBill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ViewContract", async function () {
    try {
       const data = await client.ViewContract({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryCustAcctIdBalance", async function () {
    try {
       const data = await client.QueryCustAcctIdBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryAnchorContractInfo", async function () {
    try {
       const data = await client.QueryAnchorContractInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.TransferSinglePay", async function () {
    try {
       const data = await client.TransferSinglePay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMerchantPayWayList", async function () {
    try {
       const data = await client.QueryMerchantPayWayList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ModifyMerchant", async function () {
    try {
       const data = await client.ModifyMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankDailyReceiptDownloadUrl", async function () {
    try {
       const data = await client.QueryOpenBankDailyReceiptDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateOpenBankRechargeOrder", async function () {
    try {
       const data = await client.CreateOpenBankRechargeOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryTrade", async function () {
    try {
       const data = await client.QueryTrade({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryTransferDetail", async function () {
    try {
       const data = await client.QueryTransferDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.AddShop", async function () {
    try {
       const data = await client.AddShop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankExternalSubAccountBookBalance", async function () {
    try {
       const data = await client.QueryOpenBankExternalSubAccountBookBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMerchantClassification", async function () {
    try {
       const data = await client.QueryMerchantClassification({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyApplicationMaterial", async function () {
    try {
       const data = await client.ApplyApplicationMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateTransferBatch", async function () {
    try {
       const data = await client.CreateTransferBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateInvoiceV2", async function () {
    try {
       const data = await client.CreateInvoiceV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryInvoice", async function () {
    try {
       const data = await client.QueryInvoice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankBankBranchList", async function () {
    try {
       const data = await client.QueryOpenBankBankBranchList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryExchangeRate", async function () {
    try {
       const data = await client.QueryExchangeRate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UnbindRelateAcct", async function () {
    try {
       const data = await client.UnbindRelateAcct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreatePayMerchant", async function () {
    try {
       const data = await client.CreatePayMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QuerySinglePaymentResult", async function () {
    try {
       const data = await client.QuerySinglePaymentResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyOpenBankOrderDetailReceipt", async function () {
    try {
       const data = await client.ApplyOpenBankOrderDetailReceipt({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ViewMerchant", async function () {
    try {
       const data = await client.ViewMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UploadTaxPayment", async function () {
    try {
       const data = await client.UploadTaxPayment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMemberBind", async function () {
    try {
       const data = await client.QueryMemberBind({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateOpenBankPaymentOrder", async function () {
    try {
       const data = await client.CreateOpenBankPaymentOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RefundTlinxOrder", async function () {
    try {
       const data = await client.RefundTlinxOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UnBindAcct", async function () {
    try {
       const data = await client.UnBindAcct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeApply", async function () {
    try {
       const data = await client.DistributeApply({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RegisterBillSupportWithdraw", async function () {
    try {
       const data = await client.RegisterBillSupportWithdraw({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryContractPayWayList", async function () {
    try {
       const data = await client.QueryContractPayWayList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateCloudSubMerchant", async function () {
    try {
       const data = await client.CreateCloudSubMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DeleteAgentTaxPaymentInfo", async function () {
    try {
       const data = await client.DeleteAgentTaxPaymentInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateAgentTaxPaymentInfos", async function () {
    try {
       const data = await client.CreateAgentTaxPaymentInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DeleteAgentTaxPaymentInfos", async function () {
    try {
       const data = await client.DeleteAgentTaxPaymentInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ContractOrder", async function () {
    try {
       const data = await client.ContractOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RegisterBehavior", async function () {
    try {
       const data = await client.RegisterBehavior({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMerchantBalance", async function () {
    try {
       const data = await client.QueryMerchantBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UnifiedOrder", async function () {
    try {
       const data = await client.UnifiedOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankUnbindExternalSubMerchantBankAccount", async function () {
    try {
       const data = await client.QueryOpenBankUnbindExternalSubMerchantBankAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ConfirmOrder", async function () {
    try {
       const data = await client.ConfirmOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryContractRelateShop", async function () {
    try {
       const data = await client.QueryContractRelateShop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CheckAmount", async function () {
    try {
       const data = await client.CheckAmount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryTransferResult", async function () {
    try {
       const data = await client.QueryTransferResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateAnchor", async function () {
    try {
       const data = await client.CreateAnchor({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOutwardOrder", async function () {
    try {
       const data = await client.QueryOutwardOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryShopOpenId", async function () {
    try {
       const data = await client.QueryShopOpenId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankPaymentOrder", async function () {
    try {
       const data = await client.QueryOpenBankPaymentOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMaliciousRegistration", async function () {
    try {
       const data = await client.QueryMaliciousRegistration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.MigrateOrderRefund", async function () {
    try {
       const data = await client.MigrateOrderRefund({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryAcctInfo", async function () {
    try {
       const data = await client.QueryAcctInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyReconciliationFile", async function () {
    try {
       const data = await client.ApplyReconciliationFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryReconciliationFileApplyInfo", async function () {
    try {
       const data = await client.QueryReconciliationFileApplyInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryBankWithdrawCashDetails", async function () {
    try {
       const data = await client.QueryBankWithdrawCashDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryDownloadBillURL", async function () {
    try {
       const data = await client.QueryDownloadBillURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CheckAcct", async function () {
    try {
       const data = await client.CheckAcct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.BindAccount", async function () {
    try {
       const data = await client.BindAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMerchantOrder", async function () {
    try {
       const data = await client.QueryMerchantOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateRedInvoiceV2", async function () {
    try {
       const data = await client.CreateRedInvoiceV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.SyncContractData", async function () {
    try {
       const data = await client.SyncContractData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UploadTaxList", async function () {
    try {
       const data = await client.UploadTaxList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ModifyBindedAccount", async function () {
    try {
       const data = await client.ModifyBindedAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryInvoiceV2", async function () {
    try {
       const data = await client.QueryInvoiceV2({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.BindAcct", async function () {
    try {
       const data = await client.BindAcct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.BindRelateAcctSmallAmount", async function () {
    try {
       const data = await client.BindRelateAcctSmallAmount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateOrder", async function () {
    try {
       const data = await client.CreateOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UnifiedTlinxOrder", async function () {
    try {
       const data = await client.UnifiedTlinxOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UploadOrgFile", async function () {
    try {
       const data = await client.UploadOrgFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.BindRelateAccReUnionPay", async function () {
    try {
       const data = await client.BindRelateAccReUnionPay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMerchant", async function () {
    try {
       const data = await client.QueryMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ReviseMbrProperty", async function () {
    try {
       const data = await client.ReviseMbrProperty({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.BindOpenBankExternalSubMerchantBankAccount", async function () {
    try {
       const data = await client.BindOpenBankExternalSubMerchantBankAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryBalance", async function () {
    try {
       const data = await client.QueryBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RevokeRechargeByThirdPay", async function () {
    try {
       const data = await client.RevokeRechargeByThirdPay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryCloudRefundOrder", async function () {
    try {
       const data = await client.QueryCloudRefundOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DownloadOrgFile", async function () {
    try {
       const data = await client.DownloadOrgFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.GetBillDownloadUrl", async function () {
    try {
       const data = await client.GetBillDownloadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryAgentTaxPaymentBatch", async function () {
    try {
       const data = await client.QueryAgentTaxPaymentBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DescribeOrderStatus", async function () {
    try {
       const data = await client.DescribeOrderStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryAcctBinding", async function () {
    try {
       const data = await client.QueryAcctBinding({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryFundsTransactionDetails", async function () {
    try {
       const data = await client.QueryFundsTransactionDetails({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyReWithdrawal", async function () {
    try {
       const data = await client.ApplyReWithdrawal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeRemoveReceiver", async function () {
    try {
       const data = await client.DistributeRemoveReceiver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyPayerInfo", async function () {
    try {
       const data = await client.ApplyPayerInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UploadFile", async function () {
    try {
       const data = await client.UploadFile({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyTrade", async function () {
    try {
       const data = await client.ApplyTrade({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UnbindOpenBankExternalSubMerchantBankAccount", async function () {
    try {
       const data = await client.UnbindOpenBankExternalSubMerchantBankAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryBankClear", async function () {
    try {
       const data = await client.QueryBankClear({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateOpenBankMerchant", async function () {
    try {
       const data = await client.CreateOpenBankMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateRedInvoice", async function () {
    try {
       const data = await client.CreateRedInvoice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RevResigterBillSupportWithdraw", async function () {
    try {
       const data = await client.RevResigterBillSupportWithdraw({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryCloudChannelData", async function () {
    try {
       const data = await client.QueryCloudChannelData({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryCityCode", async function () {
    try {
       const data = await client.QueryCityCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryApplicationMaterial", async function () {
    try {
       const data = await client.QueryApplicationMaterial({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.Refund", async function () {
    try {
       const data = await client.Refund({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CloseOpenBankPaymentOrder", async function () {
    try {
       const data = await client.CloseOpenBankPaymentOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RefundCloudOrder", async function () {
    try {
       const data = await client.RefundCloudOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeAccreditTlinx", async function () {
    try {
       const data = await client.DistributeAccreditTlinx({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RechargeByThirdPay", async function () {
    try {
       const data = await client.RechargeByThirdPay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RechargeMemberThirdPay", async function () {
    try {
       const data = await client.RechargeMemberThirdPay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateMerchant", async function () {
    try {
       const data = await client.CreateMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateAcct", async function () {
    try {
       const data = await client.CreateAcct({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ExecuteMemberTransaction", async function () {
    try {
       const data = await client.ExecuteMemberTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeQuery", async function () {
    try {
       const data = await client.DistributeQuery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.AddContract", async function () {
    try {
       const data = await client.AddContract({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateSinglePayment", async function () {
    try {
       const data = await client.CreateSinglePayment({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RegisterBill", async function () {
    try {
       const data = await client.RegisterBill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankDownLoadUrl", async function () {
    try {
       const data = await client.QueryOpenBankDownLoadUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOrderStatus", async function () {
    try {
       const data = await client.QueryOrderStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QuerySinglePay", async function () {
    try {
       const data = await client.QuerySinglePay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryPayerInfo", async function () {
    try {
       const data = await client.QueryPayerInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyWithdrawal", async function () {
    try {
       const data = await client.ApplyWithdrawal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DescribeChargeDetail", async function () {
    try {
       const data = await client.DescribeChargeDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateSinglePay", async function () {
    try {
       const data = await client.CreateSinglePay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateCustAcctId", async function () {
    try {
       const data = await client.CreateCustAcctId({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CloseOrder", async function () {
    try {
       const data = await client.CloseOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMerchantInfoForManagement", async function () {
    try {
       const data = await client.QueryMerchantInfoForManagement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RevokeMemberRechargeThirdPay", async function () {
    try {
       const data = await client.RevokeMemberRechargeThirdPay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankSupportBankList", async function () {
    try {
       const data = await client.QueryOpenBankSupportBankList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeCancel", async function () {
    try {
       const data = await client.DistributeCancel({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DownloadReconciliationUrl", async function () {
    try {
       const data = await client.DownloadReconciliationUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.BindRelateAcctUnionPay", async function () {
    try {
       const data = await client.BindRelateAcctUnionPay({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryMemberTransaction", async function () {
    try {
       const data = await client.QueryMemberTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeQueryReceiver", async function () {
    try {
       const data = await client.DistributeQueryReceiver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryBatchPaymentResult", async function () {
    try {
       const data = await client.QueryBatchPaymentResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryBillDownloadURL", async function () {
    try {
       const data = await client.QueryBillDownloadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateInvoice", async function () {
    try {
       const data = await client.CreateInvoice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankOrderDetailReceiptInfo", async function () {
    try {
       const data = await client.QueryOpenBankOrderDetailReceiptInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryRefund", async function () {
    try {
       const data = await client.QueryRefund({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.DistributeAddReceiver", async function () {
    try {
       const data = await client.DistributeAddReceiver({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RefundMemberTransaction", async function () {
    try {
       const data = await client.RefundMemberTransaction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.AddMerchant", async function () {
    try {
       const data = await client.AddMerchant({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankExternalSubMerchantBankAccount", async function () {
    try {
       const data = await client.QueryOpenBankExternalSubMerchantBankAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.MigrateOrderRefundQuery", async function () {
    try {
       const data = await client.MigrateOrderRefundQuery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ViewShop", async function () {
    try {
       const data = await client.ViewShop({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryContract", async function () {
    try {
       const data = await client.QueryContract({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.ApplyOutwardOrder", async function () {
    try {
       const data = await client.ApplyOutwardOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankExternalSubMerchantRegistration", async function () {
    try {
       const data = await client.QueryOpenBankExternalSubMerchantRegistration({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.UnifiedCloudOrder", async function () {
    try {
       const data = await client.UnifiedCloudOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryContractPayFee", async function () {
    try {
       const data = await client.QueryContractPayFee({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QuerySmallAmountTransfer", async function () {
    try {
       const data = await client.QuerySmallAmountTransfer({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankBindExternalSubMerchantBankAccount", async function () {
    try {
       const data = await client.QueryOpenBankBindExternalSubMerchantBankAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CreateOpenBankExternalSubMerchantAccountBook", async function () {
    try {
       const data = await client.CreateOpenBankExternalSubMerchantAccountBook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QuerySingleTransactionStatus", async function () {
    try {
       const data = await client.QuerySingleTransactionStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryTransferBatch", async function () {
    try {
       const data = await client.QueryTransferBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.TerminateContract", async function () {
    try {
       const data = await client.TerminateContract({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryOpenBankBankAccountBalance", async function () {
    try {
       const data = await client.QueryOpenBankBankAccountBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryAcctInfoList", async function () {
    try {
       const data = await client.QueryAcctInfoList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryAgentStatements", async function () {
    try {
       const data = await client.QueryAgentStatements({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryReconciliationDocument", async function () {
    try {
       const data = await client.QueryReconciliationDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.CloseCloudOrder", async function () {
    try {
       const data = await client.CloseCloudOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.QueryExceedingInfo", async function () {
    try {
       const data = await client.QueryExceedingInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("cpdp.v20190820.RefundOrder", async function () {
    try {
       const data = await client.RefundOrder({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
