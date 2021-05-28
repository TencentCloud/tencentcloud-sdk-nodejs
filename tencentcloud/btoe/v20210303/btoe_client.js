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
const GetDepositFileResponse = models.GetDepositFileResponse;
const CreateImageDepositRequest = models.CreateImageDepositRequest;
const CreateVideoDepositRequest = models.CreateVideoDepositRequest;
const CreateDocDepositRequest = models.CreateDocDepositRequest;
const CreateHashDepositNoSealRequest = models.CreateHashDepositNoSealRequest;
const CreateHashDepositRequest = models.CreateHashDepositRequest;
const CreateDataDepositResponse = models.CreateDataDepositResponse;
const GetDepositCertRequest = models.GetDepositCertRequest;
const CreateWebpageDepositResponse = models.CreateWebpageDepositResponse;
const GetDepositFileRequest = models.GetDepositFileRequest;
const CreateWebpageDepositRequest = models.CreateWebpageDepositRequest;
const CreateHashDepositNoCertResponse = models.CreateHashDepositNoCertResponse;
const CreateAudioDepositResponse = models.CreateAudioDepositResponse;
const GetDepositInfoResponse = models.GetDepositInfoResponse;
const CreateHashDepositNoCertRequest = models.CreateHashDepositNoCertRequest;
const CreateHashDepositNoSealResponse = models.CreateHashDepositNoSealResponse;
const CreateDocDepositResponse = models.CreateDocDepositResponse;
const GetDepositInfoRequest = models.GetDepositInfoRequest;
const CreateVideoDepositResponse = models.CreateVideoDepositResponse;
const CreateDataDepositRequest = models.CreateDataDepositRequest;
const GetDepositCertResponse = models.GetDepositCertResponse;
const CreateAudioDepositRequest = models.CreateAudioDepositRequest;
const CreateImageDepositResponse = models.CreateImageDepositResponse;
const CreateHashDepositResponse = models.CreateHashDepositResponse;


/**
 * btoe client
 * @class
 */
class BtoeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("btoe.tencentcloudapi.com", "2021-03-03", credential, region, profile);
    }
    
    /**
     * 用户通过存证编码向BTOE查询存证电子凭证信息。
     * @param {GetDepositCertRequest} req
     * @param {function(string, GetDepositCertResponse):void} cb
     * @public
     */
    GetDepositCert(req, cb) {
        let resp = new GetDepositCertResponse();
        this.request("GetDepositCert", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。
     * @param {CreateHashDepositRequest} req
     * @param {function(string, CreateHashDepositResponse):void} cb
     * @public
     */
    CreateHashDeposit(req, cb) {
        let resp = new CreateHashDepositResponse();
        this.request("CreateHashDeposit", req, resp, cb);
    }

    /**
     * 用户通过存证编码向BTOE获取存证文件的下载URL。
-注：Hash类存证、业务数据明文存证不产生存证文件。
     * @param {GetDepositFileRequest} req
     * @param {function(string, GetDepositFileResponse):void} cb
     * @public
     */
    GetDepositFile(req, cb) {
        let resp = new GetDepositFileResponse();
        this.request("GetDepositFile", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的视频的原文件或下载URL，BTOE对视频原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。视频文件支持格式：mp4、avi、mkv、mov、flv,wmv,rmvb,3gp；文件大小限制：直接上传原文件不大于5MB，下载URL文件大小不大于200 MB。
     * @param {CreateVideoDepositRequest} req
     * @param {function(string, CreateVideoDepositResponse):void} cb
     * @public
     */
    CreateVideoDeposit(req, cb) {
        let resp = new CreateVideoDepositResponse();
        this.request("CreateVideoDeposit", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的文档原文件或下载URL，BTOE对文档原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。文档类型支持格式：doc、docx、xls、xlsx、ppt、pptx、 pdf、html、txt、md、csv；原文件上传大小不超过5 MB，下载URL文件大小不超过10 MB。
     * @param {CreateDocDepositRequest} req
     * @param {function(string, CreateDocDepositResponse):void} cb
     * @public
     */
    CreateDocDeposit(req, cb) {
        let resp = new CreateDocDepositResponse();
        this.request("CreateDocDeposit", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，本接口不生成区块链存证电子凭证。
     * @param {CreateHashDepositNoCertRequest} req
     * @param {function(string, CreateHashDepositNoCertResponse):void} cb
     * @public
     */
    CreateHashDepositNoCert(req, cb) {
        let resp = new CreateHashDepositNoCertResponse();
        this.request("CreateHashDepositNoCert", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的图片原文件或下载URL，BTOE对图片原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。图片类型支持格式：png、jpg、jpeg、bmp、gif、svg；原文件上传大小不超过5 MB，下载URL文件大小不超过10 MB。
     * @param {CreateImageDepositRequest} req
     * @param {function(string, CreateImageDepositResponse):void} cb
     * @public
     */
    CreateImageDeposit(req, cb) {
        let resp = new CreateImageDepositResponse();
        this.request("CreateImageDeposit", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的音频原文件或下载URL，BTOE对音频原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。音频类型支持格式：mp3、wav、wma、midi、flac；原文件上传大小不超过5 MB，下载URL文件大小不超过25 MB。
     * @param {CreateAudioDepositRequest} req
     * @param {function(string, CreateAudioDepositResponse):void} cb
     * @public
     */
    CreateAudioDeposit(req, cb) {
        let resp = new CreateAudioDepositResponse();
        this.request("CreateAudioDeposit", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，并生成无电子签章的区块链存证电子凭证。
     * @param {CreateHashDepositNoSealRequest} req
     * @param {function(string, CreateHashDepositNoSealResponse):void} cb
     * @public
     */
    CreateHashDepositNoSeal(req, cb) {
        let resp = new CreateHashDepositNoSealResponse();
        this.request("CreateHashDepositNoSeal", req, resp, cb);
    }

    /**
     * 用户通过存证编码向BTOE查询存证基本信息。
     * @param {GetDepositInfoRequest} req
     * @param {function(string, GetDepositInfoResponse):void} cb
     * @public
     */
    GetDepositInfo(req, cb) {
        let resp = new GetDepositInfoResponse();
        this.request("GetDepositInfo", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE提交待存证网页的URL，BTOE对URL进行网页快照，并将快照图片存储，将网页快照Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。URL格式必须以http、https开头。
     * @param {CreateWebpageDepositRequest} req
     * @param {function(string, CreateWebpageDepositResponse):void} cb
     * @public
     */
    CreateWebpageDeposit(req, cb) {
        let resp = new CreateWebpageDepositResponse();
        this.request("CreateWebpageDeposit", req, resp, cb);
    }

    /**
     * 用户通过本接口向BTOE写入待存证的业务数据明文，业务数据明文存证写入后不可修改，BTOE对业务数据明文存证生成含有电子签章的区块链存证电子凭证。
     * @param {CreateDataDepositRequest} req
     * @param {function(string, CreateDataDepositResponse):void} cb
     * @public
     */
    CreateDataDeposit(req, cb) {
        let resp = new CreateDataDepositResponse();
        this.request("CreateDataDeposit", req, resp, cb);
    }


}
module.exports = BtoeClient;
