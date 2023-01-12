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
 * btoe client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("btoe.tencentcloudapi.com", "2021-05-14", clientConfig);
    }
    /**
     * 用户通过存证编码向BTOE查询存证电子凭证信息。
     */
    async GetDepositCert(req, cb) {
        return this.request("GetDepositCert", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。
     */
    async CreateHashDeposit(req, cb) {
        return this.request("CreateHashDeposit", req, cb);
    }
    /**
     * 用户通过存证编码向BTOE获取存证文件的下载URL。
-注：Hash类存证、业务数据明文存证不产生存证文件。
     */
    async GetDepositFile(req, cb) {
        return this.request("GetDepositFile", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的视频的原文件或下载URL，BTOE对视频原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。视频文件支持格式：mp4、avi、mkv、mov、flv,wmv,rmvb,3gp；文件大小限制：直接上传原文件不大于5MB。
     */
    async CreateVideoDeposit(req, cb) {
        return this.request("CreateVideoDeposit", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的文档原文件或下载URL，BTOE对文档原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。文档类型支持格式：doc、docx、xls、xlsx、ppt、pptx、 pdf、html、txt、md、csv；原文件上传大小不超过5 MB，下载URL文件大小不超过10 MB。
     */
    async CreateDocDeposit(req, cb) {
        return this.request("CreateDocDeposit", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，本接口不生成区块链存证电子凭证。
     */
    async CreateHashDepositNoCert(req, cb) {
        return this.request("CreateHashDepositNoCert", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的图片原文件或下载URL，BTOE对图片原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。图片类型支持格式：png、jpg、jpeg、bmp、gif、svg；原文件上传大小不超过5 MB，下载URL文件大小不超过10 MB。
     */
    async CreateImageDeposit(req, cb) {
        return this.request("CreateImageDeposit", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的音频原文件或下载URL，BTOE对音频原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。音频类型支持格式：mp3、wav、wma、midi、flac；原文件上传大小不超过5 MB，下载URL文件大小不超过25 MB。
     */
    async CreateAudioDeposit(req, cb) {
        return this.request("CreateAudioDeposit", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，并生成无电子签章的区块链存证电子凭证。
     */
    async CreateHashDepositNoSeal(req, cb) {
        return this.request("CreateHashDepositNoSeal", req, cb);
    }
    /**
     * 用户向BTOE核验存证结果中的区块链交易hash的真实性
     */
    async VerifyEvidenceBlockChainTxHash(req, cb) {
        return this.request("VerifyEvidenceBlockChainTxHash", req, cb);
    }
    /**
     * 用户存证内容hash向BTOE核验存证记录的真实性。
     */
    async VerifyEvidenceHash(req, cb) {
        return this.request("VerifyEvidenceHash", req, cb);
    }
    /**
     * 用户通过存证编码向BTOE查询存证基本信息。
     */
    async GetDepositInfo(req, cb) {
        return this.request("GetDepositInfo", req, cb);
    }
    /**
     * 用户通过本接口向BTOE写入待存证的业务数据明文，业务数据明文存证写入后不可修改，BTOE对业务数据明文存证生成含有电子签章的区块链存证电子凭证。
     */
    async CreateDataDeposit(req, cb) {
        return this.request("CreateDataDeposit", req, cb);
    }
}
exports.Client = Client;
