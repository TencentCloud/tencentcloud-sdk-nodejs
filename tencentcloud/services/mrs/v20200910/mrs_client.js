"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * mrs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mrs.tencentcloudapi.com", "2020-09-10", clientConfig);
    }
    /**
     * 图片分类
     */
    async ImageToClass(req, cb) {
        return this.request("ImageToClass", req, cb);
    }
    /**
     * 药品说明书PDF文件结构化
     */
    async DrugInstructionObject(req, cb) {
        return this.request("DrugInstructionObject", req, cb);
    }
    /**
     * 体检报告PDF文件结构化异步获取结果接口
     */
    async TurnPDFToObjectAsyncGetResult(req, cb) {
        return this.request("TurnPDFToObjectAsyncGetResult", req, cb);
    }
    /**
     * 文本转结构化对象。

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。
     */
    async TextToObject(req, cb) {
        return this.request("TextToObject", req, cb);
    }
    /**
     * 医疗报告图片脱敏接口
     */
    async ImageMask(req, cb) {
        return this.request("ImageMask", req, cb);
    }
    /**
     * 图片转结构化对象
     */
    async ImageToObject(req, cb) {
        return this.request("ImageToObject", req, cb);
    }
    /**
     * 体检报告PDF文件结构化-异步接口
     */
    async TurnPDFToObjectAsync(req, cb) {
        return this.request("TurnPDFToObjectAsync", req, cb);
    }
    /**
     * 图片脱敏-异步接口
     */
    async ImageMaskAsync(req, cb) {
        return this.request("ImageMaskAsync", req, cb);
    }
    /**
     * 图片脱敏-异步获取结果接口
     */
    async ImageMaskAsyncGetResult(req, cb) {
        return this.request("ImageMaskAsyncGetResult", req, cb);
    }
    /**
     * 将PDF格式的体检报告文件结构化，解析关键信息。
注意：该接口是按照体检报告 PDF 页面数量统计次数，不是按照 PDF 文件数量统计次数。通过该接口传入的报告必须是体检报告，非体检报告可能无法正确解析。
     */
    async TurnPDFToObject(req, cb) {
        return this.request("TurnPDFToObject", req, cb);
    }
    /**
     * 文本分类

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，并且需要加上每个字符的坐标信息，才可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。如有需要调用此接口，建议先咨询产品团队。
     */
    async TextToClass(req, cb) {
        return this.request("TextToClass", req, cb);
    }
}
exports.Client = Client;
