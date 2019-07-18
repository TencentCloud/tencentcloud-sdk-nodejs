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
const CreateLicenseResponse = models.CreateLicenseResponse;
const PlaybackPolicy = models.PlaybackPolicy;
const StartEncryptionRequest = models.StartEncryptionRequest;
const AddFairPlayPemResponse = models.AddFairPlayPemResponse;
const ModifyFairPlayPemRequest = models.ModifyFairPlayPemRequest;
const AddFairPlayPemRequest = models.AddFairPlayPemRequest;
const DeleteFairPlayPemResponse = models.DeleteFairPlayPemResponse;
const DescribeFairPlayPemRequest = models.DescribeFairPlayPemRequest;
const DescribeKeysResponse = models.DescribeKeysResponse;
const DrmOutputPara = models.DrmOutputPara;
const CreateLicenseRequest = models.CreateLicenseRequest;
const DescribeFairPlayPemResponse = models.DescribeFairPlayPemResponse;
const Key = models.Key;
const ModifyFairPlayPemResponse = models.ModifyFairPlayPemResponse;
const DeleteFairPlayPemRequest = models.DeleteFairPlayPemRequest;
const DescribeKeysRequest = models.DescribeKeysRequest;
const DrmSourceObject = models.DrmSourceObject;
const FairPlayPemDigestInfo = models.FairPlayPemDigestInfo;
const DrmOutputObject = models.DrmOutputObject;
const StartEncryptionResponse = models.StartEncryptionResponse;


/**
 * drm client
 * @class
 */
class DrmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("drm.tencentcloudapi.com", "2018-11-15", credential, region, profile);
    }
    
    /**
     * 开发者调用该接口，启动一次内容文件的DRM加密工作流
     * @param {StartEncryptionRequest} req
     * @param {function(string, StartEncryptionResponse):void} cb
     * @public
     */
    StartEncryption(req, cb) {
        let resp = new StartEncryptionResponse();
        this.request("StartEncryption", req, resp, cb);
    }

    /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     * @param {AddFairPlayPemRequest} req
     * @param {function(string, AddFairPlayPemResponse):void} cb
     * @public
     */
    AddFairPlayPem(req, cb) {
        let resp = new AddFairPlayPemResponse();
        this.request("AddFairPlayPem", req, resp, cb);
    }

    /**
     * 本接口用来生成DRM方案对应的播放许可证，开发者需提供DRM方案类型、内容类型参数，后台将生成许可证后返回许可证数据
开发者需要转发终端设备发出的许可证请求信息。
     * @param {CreateLicenseRequest} req
     * @param {function(string, CreateLicenseResponse):void} cb
     * @public
     */
    CreateLicense(req, cb) {
        let resp = new CreateLicenseResponse();
        this.request("CreateLicense", req, resp, cb);
    }

    /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     * @param {ModifyFairPlayPemRequest} req
     * @param {function(string, ModifyFairPlayPemResponse):void} cb
     * @public
     */
    ModifyFairPlayPem(req, cb) {
        let resp = new ModifyFairPlayPemResponse();
        this.request("ModifyFairPlayPem", req, resp, cb);
    }

    /**
     * 开发者需要指定使用的DRM类型、和需要加密的Track类型，后台返回加密使用的密钥
如果加密使用的ContentID没有关联的密钥信息，后台会自动生成新的密钥返回

     * @param {DescribeKeysRequest} req
     * @param {function(string, DescribeKeysResponse):void} cb
     * @public
     */
    DescribeKeys(req, cb) {
        let resp = new DescribeKeysResponse();
        this.request("DescribeKeys", req, resp, cb);
    }

    /**
     * 本接口用来删除fairplay方案的私钥、ask等信息
注：高风险操作，删除后，您将无法使用腾讯云DRM提供的fairplay服务。
由于缓存，删除操作需要约半小时生效
     * @param {DeleteFairPlayPemRequest} req
     * @param {function(string, DeleteFairPlayPemResponse):void} cb
     * @public
     */
    DeleteFairPlayPem(req, cb) {
        let resp = new DeleteFairPlayPemResponse();
        this.request("DeleteFairPlayPem", req, resp, cb);
    }

    /**
     * 该接口用来查询设置的FairPlay私钥校验信息。可用该接口校验设置的私钥与本身的私钥是否一致。
     * @param {DescribeFairPlayPemRequest} req
     * @param {function(string, DescribeFairPlayPemResponse):void} cb
     * @public
     */
    DescribeFairPlayPem(req, cb) {
        let resp = new DescribeFairPlayPemResponse();
        this.request("DescribeFairPlayPem", req, resp, cb);
    }


}
module.exports = DrmClient;
