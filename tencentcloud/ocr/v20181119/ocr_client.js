/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const BusinessCardOCRResponse = models.BusinessCardOCRResponse;
const TextArithmetic = models.TextArithmetic;
const BankCardOCRRequest = models.BankCardOCRRequest;
const CarInvoiceOCRRequest = models.CarInvoiceOCRRequest;
const MixedInvoiceItem = models.MixedInvoiceItem;
const TrainTicketOCRRequest = models.TrainTicketOCRRequest;
const EstateCertOCRResponse = models.EstateCertOCRResponse;
const FlightInvoiceOCRRequest = models.FlightInvoiceOCRRequest;
const MLIDPassportOCRRequest = models.MLIDPassportOCRRequest;
const TextDetectResponse = models.TextDetectResponse;
const FinanBillSliceOCRResponse = models.FinanBillSliceOCRResponse;
const DriverLicenseOCRResponse = models.DriverLicenseOCRResponse;
const Words = models.Words;
const TextDetectionEn = models.TextDetectionEn;
const PermitOCRResponse = models.PermitOCRResponse;
const InvoiceGeneralOCRRequest = models.InvoiceGeneralOCRRequest;
const Rect = models.Rect;
const WaybillOCRResponse = models.WaybillOCRResponse;
const SingleInvoiceInfo = models.SingleInvoiceInfo;
const TextFormula = models.TextFormula;
const MLIDCardOCRRequest = models.MLIDCardOCRRequest;
const VatInvoiceItem = models.VatInvoiceItem;
const VehicleRegCertInfo = models.VehicleRegCertInfo;
const VehicleLicenseOCRRequest = models.VehicleLicenseOCRRequest;
const EnterpriseLicenseOCRResponse = models.EnterpriseLicenseOCRResponse;
const InvoiceGeneralInfo = models.InvoiceGeneralInfo;
const WordCoordPoint = models.WordCoordPoint;
const InstitutionOCRResponse = models.InstitutionOCRResponse;
const DriverLicenseOCRRequest = models.DriverLicenseOCRRequest;
const TextDetection = models.TextDetection;
const TextEduPaper = models.TextEduPaper;
const QrcodeOCRResponse = models.QrcodeOCRResponse;
const WaybillObj = models.WaybillObj;
const InvoiceDetectInfo = models.InvoiceDetectInfo;
const MainlandPermitOCRRequest = models.MainlandPermitOCRRequest;
const EnterpriseLicenseOCRRequest = models.EnterpriseLicenseOCRRequest;
const PropOwnerCertOCRResponse = models.PropOwnerCertOCRResponse;
const FinanBillInfo = models.FinanBillInfo;
const TrainTicketOCRResponse = models.TrainTicketOCRResponse;
const TollInvoiceInfo = models.TollInvoiceInfo;
const ArithmeticOCRResponse = models.ArithmeticOCRResponse;
const FormulaOCRResponse = models.FormulaOCRResponse;
const BusInvoiceInfo = models.BusInvoiceInfo;
const TextVatInvoice = models.TextVatInvoice;
const GeneralHandwritingOCRRequest = models.GeneralHandwritingOCRRequest;
const BizLicenseOCRRequest = models.BizLicenseOCRRequest;
const MixedInvoiceDetectResponse = models.MixedInvoiceDetectResponse;
const InsuranceBillOCRResponse = models.InsuranceBillOCRResponse;
const GeneralEfficientOCRResponse = models.GeneralEfficientOCRResponse;
const HmtResidentPermitOCRRequest = models.HmtResidentPermitOCRRequest;
const QrcodeOCRRequest = models.QrcodeOCRRequest;
const TaxiInvoiceOCRResponse = models.TaxiInvoiceOCRResponse;
const GeneralBasicOCRResponse = models.GeneralBasicOCRResponse;
const VinOCRRequest = models.VinOCRRequest;
const QuotaInvoiceOCRRequest = models.QuotaInvoiceOCRRequest;
const MixedInvoiceOCRResponse = models.MixedInvoiceOCRResponse;
const ClassifyDetectOCRResponse = models.ClassifyDetectOCRResponse;
const VehicleLicenseOCRResponse = models.VehicleLicenseOCRResponse;
const VatInvoiceOCRRequest = models.VatInvoiceOCRRequest;
const IDCardOCRResponse = models.IDCardOCRResponse;
const ClassifyDetectOCRRequest = models.ClassifyDetectOCRRequest;
const DutyPaidProofOCRResponse = models.DutyPaidProofOCRResponse;
const TollInvoiceOCRRequest = models.TollInvoiceOCRRequest;
const LicensePlateOCRResponse = models.LicensePlateOCRResponse;
const PermitOCRRequest = models.PermitOCRRequest;
const InvoiceGeneralOCRResponse = models.InvoiceGeneralOCRResponse;
const TaxiInvoiceOCRRequest = models.TaxiInvoiceOCRRequest;
const PropOwnerCertOCRRequest = models.PropOwnerCertOCRRequest;
const TextDetectRequest = models.TextDetectRequest;
const VatRollInvoiceOCRResponse = models.VatRollInvoiceOCRResponse;
const EduPaperOCRResponse = models.EduPaperOCRResponse;
const BusinessCardInfo = models.BusinessCardInfo;
const TextGeneralHandwriting = models.TextGeneralHandwriting;
const TableOCRRequest = models.TableOCRRequest;
const QrcodeImgSize = models.QrcodeImgSize;
const VehicleRegCertOCRRequest = models.VehicleRegCertOCRRequest;
const ProductDataRecord = models.ProductDataRecord;
const LicensePlateOCRRequest = models.LicensePlateOCRRequest;
const GeneralBasicOCRRequest = models.GeneralBasicOCRRequest;
const TextVehicleBack = models.TextVehicleBack;
const GeneralEfficientOCRRequest = models.GeneralEfficientOCRRequest;
const TollInvoiceOCRResponse = models.TollInvoiceOCRResponse;
const EnglishOCRRequest = models.EnglishOCRRequest;
const PassportOCRResponse = models.PassportOCRResponse;
const GeneralAccurateOCRRequest = models.GeneralAccurateOCRRequest;
const OrgCodeCertOCRRequest = models.OrgCodeCertOCRRequest;
const FlightInvoiceOCRResponse = models.FlightInvoiceOCRResponse;
const InstitutionOCRRequest = models.InstitutionOCRRequest;
const CarInvoiceInfo = models.CarInvoiceInfo;
const FlightInvoiceInfo = models.FlightInvoiceInfo;
const TextVehicleFront = models.TextVehicleFront;
const FinanBillSliceInfo = models.FinanBillSliceInfo;
const QueryBarCodeResponse = models.QueryBarCodeResponse;
const ArithmeticOCRRequest = models.ArithmeticOCRRequest;
const FinanBillSliceOCRRequest = models.FinanBillSliceOCRRequest;
const MLIDPassportOCRResponse = models.MLIDPassportOCRResponse;
const VatRollInvoiceOCRRequest = models.VatRollInvoiceOCRRequest;
const Coord = models.Coord;
const SealOCRResponse = models.SealOCRResponse;
const DutyPaidProofInfo = models.DutyPaidProofInfo;
const FinanBillOCRResponse = models.FinanBillOCRResponse;
const TextWaybill = models.TextWaybill;
const QuestionObj = models.QuestionObj;
const VinOCRResponse = models.VinOCRResponse;
const EduPaperOCRRequest = models.EduPaperOCRRequest;
const FormulaOCRRequest = models.FormulaOCRRequest;
const PassportOCRRequest = models.PassportOCRRequest;
const DutyPaidProofOCRRequest = models.DutyPaidProofOCRRequest;
const QueryBarCodeRequest = models.QueryBarCodeRequest;
const ItemCoord = models.ItemCoord;
const OrgCodeCertOCRResponse = models.OrgCodeCertOCRResponse;
const MixedInvoiceOCRRequest = models.MixedInvoiceOCRRequest;
const ResidenceBookletOCRResponse = models.ResidenceBookletOCRResponse;
const CarInvoiceOCRResponse = models.CarInvoiceOCRResponse;
const GeneralFastOCRRequest = models.GeneralFastOCRRequest;
const ShipInvoiceOCRResponse = models.ShipInvoiceOCRResponse;
const InsuranceBillInfo = models.InsuranceBillInfo;
const VehicleRegCertOCRResponse = models.VehicleRegCertOCRResponse;
const ClassifyDetectInfo = models.ClassifyDetectInfo;
const GeneralAccurateOCRResponse = models.GeneralAccurateOCRResponse;
const SealOCRRequest = models.SealOCRRequest;
const TextTable = models.TextTable;
const ResidenceBookletOCRRequest = models.ResidenceBookletOCRRequest;
const BusInvoiceOCRResponse = models.BusInvoiceOCRResponse;
const QrcodeResultsInfo = models.QrcodeResultsInfo;
const MainlandPermitOCRResponse = models.MainlandPermitOCRResponse;
const HmtResidentPermitOCRResponse = models.HmtResidentPermitOCRResponse;
const EnglishOCRResponse = models.EnglishOCRResponse;
const BusInvoiceOCRRequest = models.BusInvoiceOCRRequest;
const QuotaInvoiceOCRResponse = models.QuotaInvoiceOCRResponse;
const CandWord = models.CandWord;
const EnterpriseLicenseInfo = models.EnterpriseLicenseInfo;
const InsuranceBillOCRRequest = models.InsuranceBillOCRRequest;
const GeneralHandwritingOCRResponse = models.GeneralHandwritingOCRResponse;
const TableOCRResponse = models.TableOCRResponse;
const QuestionBlockObj = models.QuestionBlockObj;
const WaybillOCRRequest = models.WaybillOCRRequest;
const VatRollInvoiceInfo = models.VatRollInvoiceInfo;
const ShipInvoiceInfo = models.ShipInvoiceInfo;
const IDCardOCRRequest = models.IDCardOCRRequest;
const MixedInvoiceDetectRequest = models.MixedInvoiceDetectRequest;
const MLIDCardOCRResponse = models.MLIDCardOCRResponse;
const EstateCertOCRRequest = models.EstateCertOCRRequest;
const BizLicenseOCRResponse = models.BizLicenseOCRResponse;
const VatInvoiceOCRResponse = models.VatInvoiceOCRResponse;
const ShipInvoiceOCRRequest = models.ShipInvoiceOCRRequest;
const BankCardOCRResponse = models.BankCardOCRResponse;
const BusinessCardOCRRequest = models.BusinessCardOCRRequest;
const FinanBillOCRRequest = models.FinanBillOCRRequest;
const GeneralFastOCRResponse = models.GeneralFastOCRResponse;
const QrcodePositionObj = models.QrcodePositionObj;


/**
 * ocr client
 * @class
 */
class OcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ocr.tencentcloudapi.com", "2018-11-19", credential, region, profile);
    }
    
    /**
     * 本接口支持病案首页、费用清单、结算单、医疗发票四种保险理赔单据的文本识别和结构化输出。
     * @param {InsuranceBillOCRRequest} req
     * @param {function(string, InsuranceBillOCRResponse):void} cb
     * @public
     */
    InsuranceBillOCR(req, cb) {
        let resp = new InsuranceBillOCRResponse();
        this.request("InsuranceBillOCR", req, resp, cb);
    }

    /**
     * 本接口支持条形码备案信息查询，返回条形码查询结果的相关信息，包括产品名称、产品英文名称、品牌名称、规格型号、宽度、高度、深度、关键字、产品描述、厂家名称、厂家地址、企业社会信用代码13个字段信息。

产品优势：直联中国物品编码中心，查询结果更加准确、可靠。

本接口目前为内测阶段，如需使用服务，请<a href="https://cloud.tencent.com/act/event/connect-service" target="_blank">联系商务</a>开通。
     * @param {QueryBarCodeRequest} req
     * @param {function(string, QueryBarCodeResponse):void} cb
     * @public
     */
    QueryBarCode(req, cb) {
        let resp = new QueryBarCodeResponse();
        this.request("QueryBarCode", req, resp, cb);
    }

    /**
     * 本接口支持智能化识别各类企业登记证书、许可证书、企业执照、三证合一类证书，结构化输出统一社会信用代码、公司名称、法定代表人、公司地址、注册资金、企业类型、经营范围等关键字段。
     * @param {EnterpriseLicenseOCRRequest} req
     * @param {function(string, EnterpriseLicenseOCRResponse):void} cb
     * @public
     */
    EnterpriseLicenseOCR(req, cb) {
        let resp = new EnterpriseLicenseOCRResponse();
        this.request("EnterpriseLicenseOCR", req, resp, cb);
    }

    /**
     * 本接口支持名片各字段的自动定位与识别，包含姓名、电话、手机号、邮箱、公司、部门、职位、网址、地址、QQ、微信、MSN等。
     * @param {BusinessCardOCRRequest} req
     * @param {function(string, BusinessCardOCRResponse):void} cb
     * @public
     */
    BusinessCardOCR(req, cb) {
        let resp = new BusinessCardOCRResponse();
        this.request("BusinessCardOCR", req, resp, cb);
    }

    /**
     * 本接口支持中国大陆居民二代身份证正反面所有字段的识别，包括姓名、性别、民族、出生日期、住址、公民身份证号、签发机关、有效期限，识别准确度达到99%以上。

另外，本接口还支持多种增值能力，满足不同场景的需求。如身份证照片、人像照片的裁剪功能，同时具备9种告警功能，如下表所示。

<table style="width:650px">
      <thead>
        <tr>
       <th width="150">增值能力</th>
          <th width="500">能力项</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">裁剪功能</td>
          <td>身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）</td>
        </tr>
        <tr>
          <td>人像照片裁剪（自动抠取身份证头像区域）</td>
        </tr>
        <tr>
          <td rowspan="9">告警功能</td>
          <td>身份证有效日期不合法告警</td>
        </tr>
        <tr>
          <td>身份证边框不完整告警</td>
        </tr>
        <tr>
          <td>身份证复印件告警</td>
        </tr>
        <tr>
          <td>身份证翻拍告警</td>
        </tr>
          <tr>
          <td>身份证框内遮挡告警</td>
        </tr>
         <tr>
          <td>临时身份证告警</td>
        </tr>
          <tr>
          <td>身份证 PS 告警</td>
        </tr>
          <tr>
          <td>图片模糊告警</td>
        </tr>
      </tbody>
    </table>
     * @param {IDCardOCRRequest} req
     * @param {function(string, IDCardOCRResponse):void} cb
     * @public
     */
    IDCardOCR(req, cb) {
        let resp = new IDCardOCRResponse();
        this.request("IDCardOCR", req, resp, cb);
    }

    /**
     * 本接口支持对过路过桥费发票的发票代码、发票号码、日期、小写金额等关键字段的识别。
     * @param {TollInvoiceOCRRequest} req
     * @param {function(string, TollInvoiceOCRResponse):void} cb
     * @public
     */
    TollInvoiceOCR(req, cb) {
        let resp = new TollInvoiceOCRResponse();
        this.request("TollInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持马来西亚身份证识别，识别字段包括身份证号、姓名、性别、地址；具备身份证人像照片的裁剪功能和翻拍、复印件告警功能。
本接口暂未完全对外开放，如需咨询，请[联系商务](https://cloud.tencent.com/about/connect)

     * @param {MLIDCardOCRRequest} req
     * @param {function(string, MLIDCardOCRResponse):void} cb
     * @public
     */
    MLIDCardOCR(req, cb) {
        let resp = new MLIDCardOCRResponse();
        this.request("MLIDCardOCR", req, resp, cb);
    }

    /**
     * 本接口支持条形码和二维码的识别（包括 DataMatrix 和 PDF417）。
     * @param {QrcodeOCRRequest} req
     * @param {function(string, QrcodeOCRResponse):void} cb
     * @public
     */
    QrcodeOCR(req, cb) {
        let resp = new QrcodeOCRResponse();
        this.request("QrcodeOCR", req, resp, cb);
    }

    /**
     * 本接口支持图像整体文字的检测和识别。支持中文、英文、中英文、数字和特殊字符号的识别，并返回文字框位置和文字内容。

适用于文字较多、版式复杂、对识别准召率要求较高的场景，如试卷试题、网络图片、街景店招牌、法律卷宗等场景。

产品优势：与通用印刷体识别的基础上，提供更高精度的文字识别服务，在文字较多、长串数字、小字、模糊字、倾斜文本等困难场景下，高精度版的准确率和召回率更高。

通用印刷体识别不同版本的差异如下：
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:150px"></th>
          <th >【荐】通用印刷体识别（高精度版）</th>
          <th style="width:200px"><a href="https://cloud.tencent.com/document/product/866/33526">【荐】通用印刷体识别</a></th>
          <th><a href="https://cloud.tencent.com/document/product/866/37831">通用印刷体识别（精简版）</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 适用场景</td>
          <td>适用于文字较多、长串数字、小字、模糊字、倾斜文本等困难场景</td>
          <td>适用于所有通用场景的印刷体识别</td>
          <td>适用于快速文本识别场景，准召率有一定损失，价格更优惠</td>
        </tr>
        <tr>
          <td>识别准确率</td>
          <td>99%</td>
          <td>96%</td>
          <td>91%</td>
        </tr>
        <tr>
          <td>价格</td>
          <td>高</td>
          <td>中</td>
          <td>低</td>
        </tr>
        <tr>
          <td>支持的语言</td>
          <td>中文、英文、中英文</td>
          <td>中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语</td>  
          <td>中文、英文、中英文</td>
        </tr>
        <tr>
          <td>自动语言检测</td>
          <td>支持</td>
          <td>支持</td>  
          <td>支持</td>
        </tr>
        <tr>
          <td>返回文本行坐标</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>自动旋转纠正</td>
          <td>支持旋转识别，不支持角度返回</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，返回角度信息</td>
        </tr>
      </tbody>
    </table>
     * @param {GeneralAccurateOCRRequest} req
     * @param {function(string, GeneralAccurateOCRResponse):void} cb
     * @public
     */
    GeneralAccurateOCR(req, cb) {
        let resp = new GeneralAccurateOCRResponse();
        this.request("GeneralAccurateOCR", req, resp, cb);
    }

    /**
     * 本接口支持机票行程单关键字段的识别，包括姓名、身份证件号码、航班号、票价 、合计、电子客票号码、填开日期等。
     * @param {FlightInvoiceOCRRequest} req
     * @param {function(string, FlightInvoiceOCRResponse):void} cb
     * @public
     */
    FlightInvoiceOCR(req, cb) {
        let resp = new FlightInvoiceOCRResponse();
        this.request("FlightInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持多张、多类型票据的混合检测和自动分类，返回对应票据类型。目前已支持增值税发票、增值税发票（卷票）、定额发票、通用机打发票、购车发票、火车票、出租车发票、机票行程单、汽车票、轮船票、过路过桥费发票、酒店账单、客运限额发票、购物小票、完税证明共15种票据。
     * @param {MixedInvoiceDetectRequest} req
     * @param {function(string, MixedInvoiceDetectResponse):void} cb
     * @public
     */
    MixedInvoiceDetect(req, cb) {
        let resp = new MixedInvoiceDetectResponse();
        this.request("MixedInvoiceDetect", req, resp, cb);
    }

    /**
     * 本接口支持识别轮船票的发票代码、发票号码、日期、姓名、票价等字段。
     * @param {ShipInvoiceOCRRequest} req
     * @param {function(string, ShipInvoiceOCRResponse):void} cb
     * @public
     */
    ShipInvoiceOCR(req, cb) {
        let resp = new ShipInvoiceOCRResponse();
        this.request("ShipInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持中国港澳台地区以及其他国家、地区的护照。识别字段包括护照ID、姓名、出生日期、性别、有效期、发行国、国籍；具备护照人像照片的裁剪功能和翻拍、复印件告警功能。
本接口暂未完全对外开放，如需咨询，请[联系商务](https://cloud.tencent.com/about/connect)
     * @param {MLIDPassportOCRRequest} req
     * @param {function(string, MLIDPassportOCRResponse):void} cb
     * @public
     */
    MLIDPassportOCR(req, cb) {
        let resp = new MLIDPassportOCRResponse();
        this.request("MLIDPassportOCR", req, resp, cb);
    }

    /**
     * 本接口支持对增值税发票（卷票）的发票代码、发票号码、日期、校验码、合计金额（小写）等关键字段的识别。
     * @param {VatRollInvoiceOCRRequest} req
     * @param {function(string, VatRollInvoiceOCRResponse):void} cb
     * @public
     */
    VatRollInvoiceOCR(req, cb) {
        let resp = new VatRollInvoiceOCRResponse();
        this.request("VatRollInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持定额发票的发票号码、发票代码、金额(大小写)、发票消费类型、地区及是否有公司印章等关键字段的识别。
     * @param {QuotaInvoiceOCRRequest} req
     * @param {function(string, QuotaInvoiceOCRResponse):void} cb
     * @public
     */
    QuotaInvoiceOCR(req, cb) {
        let resp = new QuotaInvoiceOCRResponse();
        this.request("QuotaInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持图片内车辆识别代号（VIN）的检测和识别。
     * @param {VinOCRRequest} req
     * @param {function(string, VinOCRResponse):void} cb
     * @public
     */
    VinOCR(req, cb) {
        let resp = new VinOCRResponse();
        this.request("VinOCR", req, resp, cb);
    }

    /**
     * 本接口支持图片中整体文字的检测和识别，返回文字框位置与文字内容。相比通用印刷体识别接口，识别速度更快、支持的 QPS 更高。
     * @param {GeneralFastOCRRequest} req
     * @param {function(string, GeneralFastOCRResponse):void} cb
     * @public
     */
    GeneralFastOCR(req, cb) {
        let resp = new GeneralFastOCRResponse();
        this.request("GeneralFastOCR", req, resp, cb);
    }

    /**
     * 本接口支持房产证关键字段的识别，包括房地产权利人、共有情况、登记时间、规划用途、房屋性质、房屋坐落等。
     * @param {PropOwnerCertOCRRequest} req
     * @param {function(string, PropOwnerCertOCRResponse):void} cb
     * @public
     */
    PropOwnerCertOCR(req, cb) {
        let resp = new PropOwnerCertOCRResponse();
        this.request("PropOwnerCertOCR", req, resp, cb);
    }

    /**
     * 本接口支持快速精准识别营业执照上的字段，包括统一社会信用代码、公司名称、经营场所、主体类型、法定代表人、注册资金、组成形式、成立日期、营业期限和经营范围等字段。
     * @param {BizLicenseOCRRequest} req
     * @param {function(string, BizLicenseOCRResponse):void} cb
     * @public
     */
    BizLicenseOCR(req, cb) {
        let resp = new BizLicenseOCRResponse();
        this.request("BizLicenseOCR", req, resp, cb);
    }

    /**
     * 本接口支持图片内手写体文字的检测和识别，针对手写字体无规则、字迹潦草、模糊等特点进行了识别能力的增强。
     * @param {GeneralHandwritingOCRRequest} req
     * @param {function(string, GeneralHandwritingOCRResponse):void} cb
     * @public
     */
    GeneralHandwritingOCR(req, cb) {
        let resp = new GeneralHandwritingOCRResponse();
        this.request("GeneralHandwritingOCR", req, resp, cb);
    }

    /**
     * 本接口支持市面上主流版式电子运单的识别，包括收件人和寄件人的姓名、电话、地址以及运单号等字段。
     * @param {WaybillOCRRequest} req
     * @param {function(string, WaybillOCRResponse):void} cb
     * @public
     */
    WaybillOCR(req, cb) {
        let resp = new WaybillOCRResponse();
        this.request("WaybillOCR", req, resp, cb);
    }

    /**
     * 本接口支持对通用机打发票的发票代码、发票号码、日期、购买方识别号、销售方识别号、校验码、小写金额等关键字段的识别。
     * @param {InvoiceGeneralOCRRequest} req
     * @param {function(string, InvoiceGeneralOCRResponse):void} cb
     * @public
     */
    InvoiceGeneralOCR(req, cb) {
        let resp = new InvoiceGeneralOCRResponse();
        this.request("InvoiceGeneralOCR", req, resp, cb);
    }

    /**
     * 本接口支持增值税专用发票、增值税普通发票、增值税电子发票全字段的内容检测和识别，包括发票代码、发票号码、开票日期、合计金额、校验码、税率、合计税额、价税合计、购买方识别号、复核、销售方识别号、开票人、密码区1、密码区2、密码区3、密码区4、发票名称、购买方名称、销售方名称、服务名称、备注、规格型号、数量、单价、金额、税额、收款人等字段。
     * @param {VatInvoiceOCRRequest} req
     * @param {function(string, VatInvoiceOCRResponse):void} cb
     * @public
     */
    VatInvoiceOCR(req, cb) {
        let resp = new VatInvoiceOCRResponse();
        this.request("VatInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持对完税证明的税号、纳税人识别号、纳税人名称、金额合计大写、金额合计小写、填发日期、税务机关、填票人等关键字段的识别。
     * @param {DutyPaidProofOCRRequest} req
     * @param {function(string, DutyPaidProofOCRResponse):void} cb
     * @public
     */
    DutyPaidProofOCR(req, cb) {
        let resp = new DutyPaidProofOCRResponse();
        this.request("DutyPaidProofOCR", req, resp, cb);
    }

    /**
     * 本接口支持图像整体文字的检测和识别。可以识别中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语19种语言，且各种语言均支持与英文混合的文字识别。

适用于印刷文档识别、网络图片识别、广告图文字识别、街景店招牌识别、菜单识别、视频标题识别、头像文字识别等场景。

产品优势：支持自动识别语言类型，可返回文本框坐标信息，对于倾斜文本支持自动旋转纠正。

通用印刷体识别不同版本的差异如下：
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:150px"></th>
          <th style="width:200px">【荐】通用印刷体识别</th>
          <th ><a href="https://cloud.tencent.com/document/product/866/34937">【荐】通用印刷体识别（高精度版）</a></th>
          <th><a href="https://cloud.tencent.com/document/product/866/37831">通用印刷体识别（精简版）</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 适用场景</td>
          <td>适用于所有通用场景的印刷体识别</td>
          <td>适用于文字较多、长串数字、小字、模糊字、倾斜文本等困难场景</td>
          <td>适用于快速文本识别场景，准召率有一定损失，价格更优惠</td>
        </tr>
        <tr>
          <td>识别准确率</td>
          <td>96%</td>
          <td>99%</td>
          <td>91%</td>
        </tr>
        <tr>
          <td>价格</td>
          <td>中</td>
          <td>高</td>
          <td>低</td>
        </tr>
        <tr>
          <td>支持的语言</td>
          <td>中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语</td>
          <td>中文、英文、中英文</td>
          <td>中文、英文、中英文</td>
        </tr>
        <tr>
          <td>自动语言检测</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>返回文本行坐标</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>自动旋转纠正</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，不支持角度返回</td>
          <td>支持旋转识别，返回角度信息</td>
        </tr>
      </tbody>
    </table>
     * @param {GeneralBasicOCRRequest} req
     * @param {function(string, GeneralBasicOCRResponse):void} cb
     * @public
     */
    GeneralBasicOCR(req, cb) {
        let resp = new GeneralBasicOCRResponse();
        this.request("GeneralBasicOCR", req, resp, cb);
    }

    /**
     * 本接口支持对卡式港澳台通行证的识别，包括签发地点、签发机关、有效期限、性别、出生日期、英文姓名、姓名、证件号等字段。
     * @param {PermitOCRRequest} req
     * @param {function(string, PermitOCRResponse):void} cb
     * @public
     */
    PermitOCR(req, cb) {
        let resp = new PermitOCRResponse();
        this.request("PermitOCR", req, resp, cb);
    }

    /**
     * 本接口支持组织机构代码证关键字段的识别，包括代码、有效期、地址、机构名称等。
     * @param {OrgCodeCertOCRRequest} req
     * @param {function(string, OrgCodeCertOCRResponse):void} cb
     * @public
     */
    OrgCodeCertOCR(req, cb) {
        let resp = new OrgCodeCertOCRResponse();
        this.request("OrgCodeCertOCR", req, resp, cb);
    }

    /**
     * 本接口支持常见银行票据的自动分类和识别。切片识别包括金融行业常见票据的重要切片字段识别，包括金额、账号、日期、凭证号码等。（金融票据切片：金融票据中待识别字段及其周围局部区域的裁剪图像。）
     * @param {FinanBillSliceOCRRequest} req
     * @param {function(string, FinanBillSliceOCRResponse):void} cb
     * @public
     */
    FinanBillSliceOCR(req, cb) {
        let resp = new FinanBillSliceOCRResponse();
        this.request("FinanBillSliceOCR", req, resp, cb);
    }

    /**
     * 本接口支持识别公路汽车客票的发票代码、发票号码、日期、姓名、票价等字段。
     * @param {BusInvoiceOCRRequest} req
     * @param {function(string, BusInvoiceOCRResponse):void} cb
     * @public
     */
    BusInvoiceOCR(req, cb) {
        let resp = new BusInvoiceOCRResponse();
        this.request("BusInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持图片内表格文档的检测和识别，返回每个单元格的文字内容，支持将识别结果保存为 Excel 格式。
     * @param {TableOCRRequest} req
     * @param {function(string, TableOCRResponse):void} cb
     * @public
     */
    TableOCR(req, cb) {
        let resp = new TableOCRResponse();
        this.request("TableOCR", req, resp, cb);
    }

    /**
     * 港澳台居住证OCR支持港澳台居住证正反面全字段内容检测识别功能，包括姓名、性别、出生日期、地址、身份证ID、签发机关、有效期限、签发次数、通行证号码关键字段识别。可以应用于港澳台居住证信息有效性校验场景，例如银行开户、用户注册等场景。
     * @param {HmtResidentPermitOCRRequest} req
     * @param {function(string, HmtResidentPermitOCRResponse):void} cb
     * @public
     */
    HmtResidentPermitOCR(req, cb) {
        let resp = new HmtResidentPermitOCRResponse();
        this.request("HmtResidentPermitOCR", req, resp, cb);
    }

    /**
     * 本接口支持作业算式题目的自动识别，目前覆盖 K12 学力范围内的 14 种题型，包括加减乘除四则运算、分数四则运算、竖式四则运算、脱式计算等。
     * @param {ArithmeticOCRRequest} req
     * @param {function(string, ArithmeticOCRResponse):void} cb
     * @public
     */
    ArithmeticOCR(req, cb) {
        let resp = new ArithmeticOCRResponse();
        this.request("ArithmeticOCR", req, resp, cb);
    }

    /**
     * 本接口支持对中国大陆机动车车牌的自动定位和识别，返回地域编号和车牌号信息。
     * @param {LicensePlateOCRRequest} req
     * @param {function(string, LicensePlateOCRResponse):void} cb
     * @public
     */
    LicensePlateOCR(req, cb) {
        let resp = new LicensePlateOCRResponse();
        this.request("LicensePlateOCR", req, resp, cb);
    }

    /**
     * 本接口支持不动产权证关键字段的识别，包括使用期限、面积、用途、权利性质、权利类型、坐落、共有情况、权利人、权利其他状况等。



     * @param {EstateCertOCRRequest} req
     * @param {function(string, EstateCertOCRResponse):void} cb
     * @public
     */
    EstateCertOCR(req, cb) {
        let resp = new EstateCertOCRResponse();
        this.request("EstateCertOCR", req, resp, cb);
    }

    /**
     * 支持身份证、护照、名片、银行卡、行驶证、驾驶证、港澳台通行证、户口本、港澳台来往内地通行证、港澳台居住证、不动产证、营业执照的智能分类。

     * @param {ClassifyDetectOCRRequest} req
     * @param {function(string, ClassifyDetectOCRResponse):void} cb
     * @public
     */
    ClassifyDetectOCR(req, cb) {
        let resp = new ClassifyDetectOCRResponse();
        this.request("ClassifyDetectOCR", req, resp, cb);
    }

    /**
     * 印章识别已支持各类印章，包括发票章，财务章等，适用于公文，票据等场景。
     * @param {SealOCRRequest} req
     * @param {function(string, SealOCRResponse):void} cb
     * @public
     */
    SealOCR(req, cb) {
        let resp = new SealOCRResponse();
        this.request("SealOCR", req, resp, cb);
    }

    /**
     * 本接口支持火车票全字段的识别，包括编号、票价、姓名、座位号、出发时间、出发站、到达站、车次、席别、发票类型及序列号等。

     * @param {TrainTicketOCRRequest} req
     * @param {function(string, TrainTicketOCRResponse):void} cb
     * @public
     */
    TrainTicketOCR(req, cb) {
        let resp = new TrainTicketOCRResponse();
        this.request("TrainTicketOCR", req, resp, cb);
    }

    /**
     * 本接口通过检测图片中的文字信息特征，快速判断图片中有无文字并返回判断结果，帮助用户过滤无文字的图片。
     * @param {TextDetectRequest} req
     * @param {function(string, TextDetectResponse):void} cb
     * @public
     */
    TextDetect(req, cb) {
        let resp = new TextDetectResponse();
        this.request("TextDetect", req, resp, cb);
    }

    /**
     * 本接口支持图像整体文字的检测和识别。支持中文、英文、中英文、数字和特殊字符号的识别，并返回文字框位置和文字内容。

适用于快速文本识别场景。

产品优势：与通用印刷体识别接口相比，精简版虽然在准确率和召回率上有一定损失，但价格更加优惠。

通用印刷体识别不同版本的差异如下：
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:150px"></th>
          <th >通用印刷体识别（精简版）</th>
          <th style="width:200px"><a href="https://cloud.tencent.com/document/product/866/33526">【荐】通用印刷体识别</a></th>
          <th><a href="https://cloud.tencent.com/document/product/866/34937">【荐】通用印刷体识别（高精度版）</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 适用场景</td>
          <td>适用于快速文本识别场景，准召率有一定损失，价格更优惠</td>
          <td>适用于所有通用场景的印刷体识别</td>
          <td>适用于文字较多、长串数字、小字、模糊字、倾斜文本等困难场景</td>
          
          
        </tr>
        <tr>
          <td>识别准确率</td>
          <td>91%</td>
          <td>96%</td>
          <td>99%</td>
          
          
        </tr>
        <tr>
          <td>价格</td>
          <td>低</td>
          <td>中</td>
          <td>高</td>
          
          
        </tr>
        <tr>
          <td>支持的语言</td>
          <td>中文、英文、中英文</td>
          <td>中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语</td>  
          <td>中文、英文、中英文</td>
          
          
        </tr>
        <tr>
          <td>自动语言检测</td>
          <td>支持</td>
          <td>支持</td>  
          <td>支持</td>
          
          
        </tr>
        <tr>
          <td>返回文本行坐标</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          
          
        </tr>
        <tr>
          <td>自动旋转纠正</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，不支持角度返回</td>
          
         
        </tr>
      </tbody>
    </table>
     * @param {GeneralEfficientOCRRequest} req
     * @param {function(string, GeneralEfficientOCRResponse):void} cb
     * @public
     */
    GeneralEfficientOCR(req, cb) {
        let resp = new GeneralEfficientOCRResponse();
        this.request("GeneralEfficientOCR", req, resp, cb);
    }

    /**
     * 本接口支持出租车发票关键字段的识别，包括发票号码、发票代码、金额、日期、上下车时间、里程、车牌号、发票类型及所属地区等字段。
     * @param {TaxiInvoiceOCRRequest} req
     * @param {function(string, TaxiInvoiceOCRResponse):void} cb
     * @public
     */
    TaxiInvoiceOCR(req, cb) {
        let resp = new TaxiInvoiceOCRResponse();
        this.request("TaxiInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持国内机动车登记证书主要字段的结构化识别，包括机动车所有人、身份证明名称、号码、车辆型号、车辆识别代号、发动机号、制造厂名称等。
     * @param {VehicleRegCertOCRRequest} req
     * @param {function(string, VehicleRegCertOCRResponse):void} cb
     * @public
     */
    VehicleRegCertOCR(req, cb) {
        let resp = new VehicleRegCertOCRResponse();
        this.request("VehicleRegCertOCR", req, resp, cb);
    }

    /**
     * 本接口支持事业单位法人证书关键字段识别，包括注册号、有效期、住所、名称、法定代表人等。
     * @param {InstitutionOCRRequest} req
     * @param {function(string, InstitutionOCRResponse):void} cb
     * @public
     */
    InstitutionOCR(req, cb) {
        let resp = new InstitutionOCRResponse();
        this.request("InstitutionOCR", req, resp, cb);
    }

    /**
     * 本接口支持图像英文文字的检测和识别，返回文字框位置与文字内容。支持多场景、任意版面下的英文、字母、数字和常见字符的识别，同时覆盖英文印刷体和英文手写体识别。
     * @param {EnglishOCRRequest} req
     * @param {function(string, EnglishOCRResponse):void} cb
     * @public
     */
    EnglishOCR(req, cb) {
        let resp = new EnglishOCRResponse();
        this.request("EnglishOCR", req, resp, cb);
    }

    /**
     * 本接口支持居民户口簿户主页及成员页关键字段的识别，包括姓名、户别、地址、籍贯、身份证号码等。
     * @param {ResidenceBookletOCRRequest} req
     * @param {function(string, ResidenceBookletOCRResponse):void} cb
     * @public
     */
    ResidenceBookletOCR(req, cb) {
        let resp = new ResidenceBookletOCRResponse();
        this.request("ResidenceBookletOCR", req, resp, cb);
    }

    /**
     * 本接口支持对中国大陆主流银行卡的卡号、银行信息、有效期等关键字段的检测与识别。
     * @param {BankCardOCRRequest} req
     * @param {function(string, BankCardOCRResponse):void} cb
     * @public
     */
    BankCardOCR(req, cb) {
        let resp = new BankCardOCRResponse();
        this.request("BankCardOCR", req, resp, cb);
    }

    /**
     * 本接口支持机动车销售统一发票和二手车销售统一发票的识别，包括发票号码、发票代码、合计金额、合计税额等二十多个字段。
     * @param {CarInvoiceOCRRequest} req
     * @param {function(string, CarInvoiceOCRResponse):void} cb
     * @public
     */
    CarInvoiceOCR(req, cb) {
        let resp = new CarInvoiceOCRResponse();
        this.request("CarInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持驾驶证主页和副页所有字段的自动定位与识别，重点字段的识别准确度达到99%以上。

驾驶证主页：包括证号、姓名、性别、国籍、住址、出生日期、初次领证日期、准驾车型、有效期限。

驾驶证副页：包括证号、姓名、档案编号、记录。

另外，本接口还支持复印件、翻拍和PS告警功能。
     * @param {DriverLicenseOCRRequest} req
     * @param {function(string, DriverLicenseOCRResponse):void} cb
     * @public
     */
    DriverLicenseOCR(req, cb) {
        let resp = new DriverLicenseOCRResponse();
        this.request("DriverLicenseOCR", req, resp, cb);
    }

    /**
     * 智能识别并结构化港澳台居民来往内地通行证正面全部字段，包含中文姓名、英文姓名、性别、出生日期、签发机关、有效期限、证件号、签发地点、签发次数、证件类别。
     * @param {MainlandPermitOCRRequest} req
     * @param {function(string, MainlandPermitOCRResponse):void} cb
     * @public
     */
    MainlandPermitOCR(req, cb) {
        let resp = new MainlandPermitOCRResponse();
        this.request("MainlandPermitOCR", req, resp, cb);
    }

    /**
     * 本接口支持识别主流初高中数学符号和公式，返回公式的 Latex 格式文本。
     * @param {FormulaOCRRequest} req
     * @param {function(string, FormulaOCRResponse):void} cb
     * @public
     */
    FormulaOCR(req, cb) {
        let resp = new FormulaOCRResponse();
        this.request("FormulaOCR", req, resp, cb);
    }

    /**
     * 本接口支持中国大陆地区护照个人资料页多个字段的检测与识别。已支持字段包括英文姓名、中文姓名、国家码、护照号、出生地、出生日期、国籍英文、性别英文、有效期、签发地点英文、签发日期、持证人签名、护照机读码（MRZ码）等。
     * @param {PassportOCRRequest} req
     * @param {function(string, PassportOCRResponse):void} cb
     * @public
     */
    PassportOCR(req, cb) {
        let resp = new PassportOCRResponse();
        this.request("PassportOCR", req, resp, cb);
    }

    /**
     * 本接口支持常见银行票据的自动分类和识别。整单识别包括支票（含现金支票、普通支票、转账支票），承兑汇票（含银行承兑汇票、商业承兑汇票）以及进账单等，适用于中国人民银行印发的 2010 版银行票据凭证版式（银发[2010]299 号）。
     * @param {FinanBillOCRRequest} req
     * @param {function(string, FinanBillOCRResponse):void} cb
     * @public
     */
    FinanBillOCR(req, cb) {
        let resp = new FinanBillOCRResponse();
        this.request("FinanBillOCR", req, resp, cb);
    }

    /**
     * 本接口支持多张、多类型票据的混合识别，系统自动实现分割、分类和识别，同时支持自选需要识别的票据类型。目前已支持增值税发票、增值税发票（卷票）、定额发票、通用机打发票、购车发票、火车票、出租车发票、机票行程单、汽车票、轮船票、过路过桥费发票共11种票据。
     * @param {MixedInvoiceOCRRequest} req
     * @param {function(string, MixedInvoiceOCRResponse):void} cb
     * @public
     */
    MixedInvoiceOCR(req, cb) {
        let resp = new MixedInvoiceOCRResponse();
        this.request("MixedInvoiceOCR", req, resp, cb);
    }

    /**
     * 本接口支持数学试题内容的识别和结构化输出，包括通用文本解析和小学/初中/高中数学公式解析能力（包括91种题型，180种符号）。
     * @param {EduPaperOCRRequest} req
     * @param {function(string, EduPaperOCRResponse):void} cb
     * @public
     */
    EduPaperOCR(req, cb) {
        let resp = new EduPaperOCRResponse();
        this.request("EduPaperOCR", req, resp, cb);
    }

    /**
     * 本接口支持行驶证主页和副页所有字段的自动定位与识别。

行驶证主页：车牌号码、车辆类型、所有人、住址、使用性质、品牌型号、识别代码、发动机号、注册日期、发证日期、发证单位。

行驶证副页：号牌号码、档案编号、核定载人数、总质量、整备质量、核定载质量、外廓尺寸、准牵引总质量、备注、检验记录。

另外，本接口还支持复印件、翻拍和PS告警功能。
     * @param {VehicleLicenseOCRRequest} req
     * @param {function(string, VehicleLicenseOCRResponse):void} cb
     * @public
     */
    VehicleLicenseOCR(req, cb) {
        let resp = new VehicleLicenseOCRResponse();
        this.request("VehicleLicenseOCR", req, resp, cb);
    }


}
module.exports = OcrClient;
