
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.ocr.v20181119.Client({
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
describe("ocr.v20181119.test.js", function () {

it("ocr.v20181119.QuestionOCR", async function () {
    try {
       const data = await client.QuestionOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.TextDetect", async function () {
    try {
       const data = await client.TextDetect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.QrcodeOCR", async function () {
    try {
       const data = await client.QrcodeOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.GeneralAccurateOCR", async function () {
    try {
       const data = await client.GeneralAccurateOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeContainerOCR", async function () {
    try {
       const data = await client.RecognizeContainerOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeEncryptedIDCardOCR", async function () {
    try {
       const data = await client.RecognizeEncryptedIDCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeStoreName", async function () {
    try {
       const data = await client.RecognizeStoreName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.MLIDPassportOCR", async function () {
    try {
       const data = await client.MLIDPassportOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.TrainTicketOCR", async function () {
    try {
       const data = await client.TrainTicketOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.PropOwnerCertOCR", async function () {
    try {
       const data = await client.PropOwnerCertOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.InvoiceGeneralOCR", async function () {
    try {
       const data = await client.InvoiceGeneralOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.HKIDCardOCR", async function () {
    try {
       const data = await client.HKIDCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.PermitOCR", async function () {
    try {
       const data = await client.PermitOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.BusInvoiceOCR", async function () {
    try {
       const data = await client.BusInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.EnglishOCR", async function () {
    try {
       const data = await client.EnglishOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.SmartStructuralOCR", async function () {
    try {
       const data = await client.SmartStructuralOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ClassifyStoreName", async function () {
    try {
       const data = await client.ClassifyStoreName({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.TaxiInvoiceOCR", async function () {
    try {
       const data = await client.TaxiInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RideHailingDriverLicenseOCR", async function () {
    try {
       const data = await client.RideHailingDriverLicenseOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeForeignPermanentResidentIdCard", async function () {
    try {
       const data = await client.RecognizeForeignPermanentResidentIdCard({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.MainlandPermitOCR", async function () {
    try {
       const data = await client.MainlandPermitOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.FlightInvoiceOCR", async function () {
    try {
       const data = await client.FlightInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeGeneralInvoice", async function () {
    try {
       const data = await client.RecognizeGeneralInvoice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.InsuranceBillOCR", async function () {
    try {
       const data = await client.InsuranceBillOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.VatInvoiceVerifyNew", async function () {
    try {
       const data = await client.VatInvoiceVerifyNew({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.VinOCR", async function () {
    try {
       const data = await client.VinOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.VehicleLicenseOCR", async function () {
    try {
       const data = await client.VehicleLicenseOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.BizLicenseOCR", async function () {
    try {
       const data = await client.BizLicenseOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeGeneralCardWarn", async function () {
    try {
       const data = await client.RecognizeGeneralCardWarn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.GeneralBasicOCR", async function () {
    try {
       const data = await client.GeneralBasicOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeThaiIDCardOCR", async function () {
    try {
       const data = await client.RecognizeThaiIDCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ExtractDocMultiPro", async function () {
    try {
       const data = await client.ExtractDocMultiPro({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.TableOCR", async function () {
    try {
       const data = await client.TableOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ArithmeticOCR", async function () {
    try {
       const data = await client.ArithmeticOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.EstateCertOCR", async function () {
    try {
       const data = await client.EstateCertOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeValidIDCardOCR", async function () {
    try {
       const data = await client.RecognizeValidIDCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.BankCardOCR", async function () {
    try {
       const data = await client.BankCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.GetOCRToken", async function () {
    try {
       const data = await client.GetOCRToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.EduPaperOCR", async function () {
    try {
       const data = await client.EduPaperOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.EnterpriseLicenseOCR", async function () {
    try {
       const data = await client.EnterpriseLicenseOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.BusinessCardOCR", async function () {
    try {
       const data = await client.BusinessCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.IDCardOCR", async function () {
    try {
       const data = await client.IDCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeGeneralTextImageWarn", async function () {
    try {
       const data = await client.RecognizeGeneralTextImageWarn({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.InstitutionOCR", async function () {
    try {
       const data = await client.InstitutionOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeTableAccurateOCR", async function () {
    try {
       const data = await client.RecognizeTableAccurateOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.MixedInvoiceDetect", async function () {
    try {
       const data = await client.MixedInvoiceDetect({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.VatRollInvoiceOCR", async function () {
    try {
       const data = await client.VatRollInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.QuotaInvoiceOCR", async function () {
    try {
       const data = await client.QuotaInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.GeneralHandwritingOCR", async function () {
    try {
       const data = await client.GeneralHandwritingOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ExtractDocBasic", async function () {
    try {
       const data = await client.ExtractDocBasic({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeOnlineTaxiItineraryOCR", async function () {
    try {
       const data = await client.RecognizeOnlineTaxiItineraryOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeTableOCR", async function () {
    try {
       const data = await client.RecognizeTableOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.WaybillOCR", async function () {
    try {
       const data = await client.WaybillOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.HandwritingEssayOCR", async function () {
    try {
       const data = await client.HandwritingEssayOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.HmtResidentPermitOCR", async function () {
    try {
       const data = await client.HmtResidentPermitOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.TollInvoiceOCR", async function () {
    try {
       const data = await client.TollInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ClassifyDetectOCR", async function () {
    try {
       const data = await client.ClassifyDetectOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeFormulaOCR", async function () {
    try {
       const data = await client.RecognizeFormulaOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.SealOCR", async function () {
    try {
       const data = await client.SealOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.BankSlipOCR", async function () {
    try {
       const data = await client.BankSlipOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ResidenceBookletOCR", async function () {
    try {
       const data = await client.ResidenceBookletOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeTravelCardOCR", async function () {
    try {
       const data = await client.RecognizeTravelCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.VerifyOfdVatInvoiceOCR", async function () {
    try {
       const data = await client.VerifyOfdVatInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.DriverLicenseOCR", async function () {
    try {
       const data = await client.DriverLicenseOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.FinanBillOCR", async function () {
    try {
       const data = await client.FinanBillOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.MixedInvoiceOCR", async function () {
    try {
       const data = await client.MixedInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeHealthCodeOCR", async function () {
    try {
       const data = await client.RecognizeHealthCodeOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ImageEnhancement", async function () {
    try {
       const data = await client.ImageEnhancement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.QuestionSplitOCR", async function () {
    try {
       const data = await client.QuestionSplitOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.MLIDCardOCR", async function () {
    try {
       const data = await client.MLIDCardOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RecognizeMedicalInvoiceOCR", async function () {
    try {
       const data = await client.RecognizeMedicalInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.GeneralFastOCR", async function () {
    try {
       const data = await client.GeneralFastOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.VatInvoiceOCR", async function () {
    try {
       const data = await client.VatInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.DutyPaidProofOCR", async function () {
    try {
       const data = await client.DutyPaidProofOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.OrgCodeCertOCR", async function () {
    try {
       const data = await client.OrgCodeCertOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.FinanBillSliceOCR", async function () {
    try {
       const data = await client.FinanBillSliceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.LicensePlateOCR", async function () {
    try {
       const data = await client.LicensePlateOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ExtractDocMulti", async function () {
    try {
       const data = await client.ExtractDocMulti({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.GeneralEfficientOCR", async function () {
    try {
       const data = await client.GeneralEfficientOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.AdvertiseOCR", async function () {
    try {
       const data = await client.AdvertiseOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.VehicleRegCertOCR", async function () {
    try {
       const data = await client.VehicleRegCertOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.CarInvoiceOCR", async function () {
    try {
       const data = await client.CarInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.GetOCRResult", async function () {
    try {
       const data = await client.GetOCRResult({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.FormulaOCR", async function () {
    try {
       const data = await client.FormulaOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.PassportOCR", async function () {
    try {
       const data = await client.PassportOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.ShipInvoiceOCR", async function () {
    try {
       const data = await client.ShipInvoiceOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("ocr.v20181119.RideHailingTransportLicenseOCR", async function () {
    try {
       const data = await client.RideHailingTransportLicenseOCR({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
