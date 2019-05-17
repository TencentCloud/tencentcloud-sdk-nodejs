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
const ArithmeticOCRResponse = models.ArithmeticOCRResponse;
const EnglishOCRRequest = models.EnglishOCRRequest;
const GeneralAccurateOCRResponse = models.GeneralAccurateOCRResponse;
const GeneralFastOCRRequest = models.GeneralFastOCRRequest;
const TextTable = models.TextTable;
const GeneralAccurateOCRRequest = models.GeneralAccurateOCRRequest;
const GeneralBasicOCRResponse = models.GeneralBasicOCRResponse;
const VinOCRRequest = models.VinOCRRequest;
const EnglishOCRResponse = models.EnglishOCRResponse;
const WaybillOCRResponse = models.WaybillOCRResponse;
const IDCardOCRResponse = models.IDCardOCRResponse;
const TextDetectionEn = models.TextDetectionEn;
const ArithmeticOCRRequest = models.ArithmeticOCRRequest;
const TableOCRResponse = models.TableOCRResponse;
const Coord = models.Coord;
const WaybillOCRRequest = models.WaybillOCRRequest;
const TextWaybill = models.TextWaybill;
const TextArithmetic = models.TextArithmetic;
const IDCardOCRRequest = models.IDCardOCRRequest;
const TextDetection = models.TextDetection;
const VinOCRResponse = models.VinOCRResponse;
const WaybillObj = models.WaybillObj;
const TableOCRRequest = models.TableOCRRequest;
const GeneralFastOCRResponse = models.GeneralFastOCRResponse;
const GeneralBasicOCRRequest = models.GeneralBasicOCRRequest;


/**
 * ocr client
 * @class
 */
class OcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ocr.tencentcloudapi.com", "2018-11-19", credential, region, profile);
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
     * 本接口支持二代身份证正反面所有字段的识别，包括姓名、性别、民族、出生日期、住址、公民身份证号、签发机关、有效期限；具备身份证照片、人像照片的裁剪功能和翻拍件、复印件的识别告警功能。
     * @param {IDCardOCRRequest} req
     * @param {function(string, IDCardOCRResponse):void} cb
     * @public
     */
    IDCardOCR(req, cb) {
        let resp = new IDCardOCRResponse();
        this.request("IDCardOCR", req, resp, cb);
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
     * 本接口支持图像整体文字的检测和识别，返回文字框位置与文字内容。相比通用印刷体识别接口，准确率和召回率更高。
     * @param {GeneralAccurateOCRRequest} req
     * @param {function(string, GeneralAccurateOCRResponse):void} cb
     * @public
     */
    GeneralAccurateOCR(req, cb) {
        let resp = new GeneralAccurateOCRResponse();
        this.request("GeneralAccurateOCR", req, resp, cb);
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
     * 本接口支持多场景、任意版面下整图文字的识别，包括中英文、字母、数字和日文、韩文的识别。应用场景包括：印刷文档识别、网络图片识别、广告图文字识别、街景店招识别、菜单识别、视频标题识别、头像文字识别等。
     * @param {GeneralBasicOCRRequest} req
     * @param {function(string, GeneralBasicOCRResponse):void} cb
     * @public
     */
    GeneralBasicOCR(req, cb) {
        let resp = new GeneralBasicOCRResponse();
        this.request("GeneralBasicOCR", req, resp, cb);
    }


}
module.exports = OcrClient;
