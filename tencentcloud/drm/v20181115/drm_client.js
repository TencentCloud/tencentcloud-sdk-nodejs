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
const DescribeKeysResponse = models.DescribeKeysResponse;
const DrmOutputPara = models.DrmOutputPara;
const CreateLicenseRequest = models.CreateLicenseRequest;
const StartEncryptionResponse = models.StartEncryptionResponse;
const Key = models.Key;
const DescribeKeysRequest = models.DescribeKeysRequest;
const DrmSourceObject = models.DrmSourceObject;
const DrmOutputObject = models.DrmOutputObject;


/**
 * drm client
 * @class
 */
class DrmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("drm.tencentcloudapi.com", "2018-11-15", credential, region, profile);
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


}
module.exports = DrmClient;
