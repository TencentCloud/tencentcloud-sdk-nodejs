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
const DisableKeysRequest = models.DisableKeysRequest;
const UpdateAliasRequest = models.UpdateAliasRequest;
const ReEncryptRequest = models.ReEncryptRequest;
const UpdateKeyDescriptionResponse = models.UpdateKeyDescriptionResponse;
const GenerateDataKeyResponse = models.GenerateDataKeyResponse;
const EnableKeyRotationRequest = models.EnableKeyRotationRequest;
const EnableKeyRotationResponse = models.EnableKeyRotationResponse;
const CreateKeyRequest = models.CreateKeyRequest;
const EnableKeysResponse = models.EnableKeysResponse;
const DisableKeyResponse = models.DisableKeyResponse;
const CreateKeyResponse = models.CreateKeyResponse;
const ReEncryptResponse = models.ReEncryptResponse;
const EncryptResponse = models.EncryptResponse;
const EnableKeyResponse = models.EnableKeyResponse;
const GetServiceStatusResponse = models.GetServiceStatusResponse;
const Key = models.Key;
const GetKeyRotationStatusResponse = models.GetKeyRotationStatusResponse;
const EnableKeysRequest = models.EnableKeysRequest;
const EncryptRequest = models.EncryptRequest;
const DecryptResponse = models.DecryptResponse;
const EnableKeyRequest = models.EnableKeyRequest;
const GetKeyRotationStatusRequest = models.GetKeyRotationStatusRequest;
const DescribeKeysResponse = models.DescribeKeysResponse;
const ListKeyDetailResponse = models.ListKeyDetailResponse;
const GenerateDataKeyRequest = models.GenerateDataKeyRequest;
const ListKeysRequest = models.ListKeysRequest;
const ListKeysResponse = models.ListKeysResponse;
const KeyMetadata = models.KeyMetadata;
const DisableKeysResponse = models.DisableKeysResponse;
const DisableKeyRotationResponse = models.DisableKeyRotationResponse;
const UpdateAliasResponse = models.UpdateAliasResponse;
const DecryptRequest = models.DecryptRequest;
const ListKeyDetailRequest = models.ListKeyDetailRequest;
const UpdateKeyDescriptionRequest = models.UpdateKeyDescriptionRequest;
const DisableKeyRequest = models.DisableKeyRequest;
const DescribeKeyResponse = models.DescribeKeyResponse;
const DescribeKeyRequest = models.DescribeKeyRequest;
const DescribeKeysRequest = models.DescribeKeysRequest;
const GetServiceStatusRequest = models.GetServiceStatusRequest;
const DisableKeyRotationRequest = models.DisableKeyRotationRequest;


/**
 * kms client
 * @class
 */
class KmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("kms.tencentcloudapi.com", "2019-01-18", credential, region, profile);
    }
    
    /**
     * 查询指定的CMK是否开启了密钥轮换功能。
     * @param {GetKeyRotationStatusRequest} req
     * @param {function(string, GetKeyRotationStatusResponse):void} cb
     * @public
     */
    GetKeyRotationStatus(req, cb) {
        let resp = new GetKeyRotationStatusResponse();
        this.request("GetKeyRotationStatus", req, resp, cb);
    }

    /**
     * 用于启用一个指定的CMK。
     * @param {EnableKeyRequest} req
     * @param {function(string, EnableKeyResponse):void} cb
     * @public
     */
    EnableKey(req, cb) {
        let resp = new EnableKeyResponse();
        this.request("EnableKey", req, resp, cb);
    }

    /**
     * 本接口用于加密最多为4KB任意数据，可用于加密数据库密码，RSA Key，或其它较小的敏感信息。对于应用的数据加密，使用GenerateDataKey生成的DataKey进行本地数据的加解密操作
     * @param {EncryptRequest} req
     * @param {function(string, EncryptResponse):void} cb
     * @public
     */
    Encrypt(req, cb) {
        let resp = new EncryptResponse();
        this.request("Encrypt", req, resp, cb);
    }

    /**
     * 对指定的CMK开启密钥轮换功能。
     * @param {EnableKeyRotationRequest} req
     * @param {function(string, EnableKeyRotationResponse):void} cb
     * @public
     */
    EnableKeyRotation(req, cb) {
        let resp = new EnableKeyRotationResponse();
        this.request("EnableKeyRotation", req, resp, cb);
    }

    /**
     * 创建用户管理数据密钥的主密钥CMK（Custom Master Key）。
     * @param {CreateKeyRequest} req
     * @param {function(string, CreateKeyResponse):void} cb
     * @public
     */
    CreateKey(req, cb) {
        let resp = new CreateKeyResponse();
        this.request("CreateKey", req, resp, cb);
    }

    /**
     * 使用指定CMK对密文重新加密。
     * @param {ReEncryptRequest} req
     * @param {function(string, ReEncryptResponse):void} cb
     * @public
     */
    ReEncrypt(req, cb) {
        let resp = new ReEncryptResponse();
        this.request("ReEncrypt", req, resp, cb);
    }

    /**
     * 用于修改CMK的别名。
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * 该接口用于批量禁止CMK的使用。
     * @param {DisableKeysRequest} req
     * @param {function(string, DisableKeysResponse):void} cb
     * @public
     */
    DisableKeys(req, cb) {
        let resp = new DisableKeysResponse();
        this.request("DisableKeys", req, resp, cb);
    }

    /**
     * 本接口用于解密密文，得到明文数据。
     * @param {DecryptRequest} req
     * @param {function(string, DecryptResponse):void} cb
     * @public
     */
    Decrypt(req, cb) {
        let resp = new DecryptResponse();
        this.request("Decrypt", req, resp, cb);
    }

    /**
     * 该接口用于批量获取主密钥属性信息。
     * @param {DescribeKeysRequest} req
     * @param {function(string, DescribeKeysResponse):void} cb
     * @public
     */
    DescribeKeys(req, cb) {
        let resp = new DescribeKeysResponse();
        this.request("DescribeKeys", req, resp, cb);
    }

    /**
     * 该接口用于对指定的cmk修改描述信息。
     * @param {UpdateKeyDescriptionRequest} req
     * @param {function(string, UpdateKeyDescriptionResponse):void} cb
     * @public
     */
    UpdateKeyDescription(req, cb) {
        let resp = new UpdateKeyDescriptionResponse();
        this.request("UpdateKeyDescription", req, resp, cb);
    }

    /**
     * 本接口用于禁用一个主密钥，处于禁用状态的Key无法用于加密、解密操作。
     * @param {DisableKeyRequest} req
     * @param {function(string, DisableKeyResponse):void} cb
     * @public
     */
    DisableKey(req, cb) {
        let resp = new DisableKeyResponse();
        this.request("DisableKey", req, resp, cb);
    }

    /**
     * 对指定的CMK禁止密钥轮换功能。
     * @param {DisableKeyRotationRequest} req
     * @param {function(string, DisableKeyRotationResponse):void} cb
     * @public
     */
    DisableKeyRotation(req, cb) {
        let resp = new DisableKeyRotationResponse();
        this.request("DisableKeyRotation", req, resp, cb);
    }

    /**
     * 用于查询该用户是否已开通KMS服务
     * @param {GetServiceStatusRequest} req
     * @param {function(string, GetServiceStatusResponse):void} cb
     * @public
     */
    GetServiceStatus(req, cb) {
        let resp = new GetServiceStatusResponse();
        this.request("GetServiceStatus", req, resp, cb);
    }

    /**
     * 本接口生成一个数据密钥，您可以用这个密钥进行本地数据的加密。
     * @param {GenerateDataKeyRequest} req
     * @param {function(string, GenerateDataKeyResponse):void} cb
     * @public
     */
    GenerateDataKey(req, cb) {
        let resp = new GenerateDataKeyResponse();
        this.request("GenerateDataKey", req, resp, cb);
    }

    /**
     * 用于获取指定KeyId的主密钥属性详情信息。
     * @param {DescribeKeyRequest} req
     * @param {function(string, DescribeKeyResponse):void} cb
     * @public
     */
    DescribeKey(req, cb) {
        let resp = new DescribeKeyResponse();
        this.request("DescribeKey", req, resp, cb);
    }

    /**
     * 列出账号下面的密钥列表（KeyId信息）。
     * @param {ListKeysRequest} req
     * @param {function(string, ListKeysResponse):void} cb
     * @public
     */
    ListKeys(req, cb) {
        let resp = new ListKeysResponse();
        this.request("ListKeys", req, resp, cb);
    }

    /**
     * 根据指定Offset和Limit获取主密钥列表详情。
     * @param {ListKeyDetailRequest} req
     * @param {function(string, ListKeyDetailResponse):void} cb
     * @public
     */
    ListKeyDetail(req, cb) {
        let resp = new ListKeyDetailResponse();
        this.request("ListKeyDetail", req, resp, cb);
    }

    /**
     * 该接口用于批量启用CMK。
     * @param {EnableKeysRequest} req
     * @param {function(string, EnableKeysResponse):void} cb
     * @public
     */
    EnableKeys(req, cb) {
        let resp = new EnableKeysResponse();
        this.request("EnableKeys", req, resp, cb);
    }


}
module.exports = KmsClient;
