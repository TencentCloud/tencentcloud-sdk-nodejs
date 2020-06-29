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
const UpdateAliasRequest = models.UpdateAliasRequest;
const EnableWhiteBoxKeyRequest = models.EnableWhiteBoxKeyRequest;
const AsymmetricRsaDecryptRequest = models.AsymmetricRsaDecryptRequest;
const EnableKeyRotationRequest = models.EnableKeyRotationRequest;
const DescribeWhiteBoxKeyDetailsResponse = models.DescribeWhiteBoxKeyDetailsResponse;
const CreateKeyRequest = models.CreateKeyRequest;
const DisableWhiteBoxKeyResponse = models.DisableWhiteBoxKeyResponse;
const DisableKeyResponse = models.DisableKeyResponse;
const DescribeWhiteBoxServiceStatusRequest = models.DescribeWhiteBoxServiceStatusRequest;
const DescribeKeyRequest = models.DescribeKeyRequest;
const WhiteboxKeyInfo = models.WhiteboxKeyInfo;
const ListAlgorithmsResponse = models.ListAlgorithmsResponse;
const DescribeWhiteBoxKeyResponse = models.DescribeWhiteBoxKeyResponse;
const UpdateKeyDescriptionResponse = models.UpdateKeyDescriptionResponse;
const DescribeWhiteBoxServiceStatusResponse = models.DescribeWhiteBoxServiceStatusResponse;
const ImportKeyMaterialRequest = models.ImportKeyMaterialRequest;
const EnableKeyRequest = models.EnableKeyRequest;
const ImportKeyMaterialResponse = models.ImportKeyMaterialResponse;
const ListAlgorithmsRequest = models.ListAlgorithmsRequest;
const Tag = models.Tag;
const ListKeyDetailResponse = models.ListKeyDetailResponse;
const GenerateDataKeyRequest = models.GenerateDataKeyRequest;
const UpdateAliasResponse = models.UpdateAliasResponse;
const ScheduleKeyDeletionResponse = models.ScheduleKeyDeletionResponse;
const GenerateRandomResponse = models.GenerateRandomResponse;
const DescribeKeysRequest = models.DescribeKeysRequest;
const GetPublicKeyRequest = models.GetPublicKeyRequest;
const GetServiceStatusRequest = models.GetServiceStatusRequest;
const EnableWhiteBoxKeysResponse = models.EnableWhiteBoxKeysResponse;
const DescribeWhiteBoxKeyRequest = models.DescribeWhiteBoxKeyRequest;
const GetParametersForImportResponse = models.GetParametersForImportResponse;
const DecryptResponse = models.DecryptResponse;
const CreateWhiteBoxKeyResponse = models.CreateWhiteBoxKeyResponse;
const Key = models.Key;
const DeleteImportedKeyMaterialResponse = models.DeleteImportedKeyMaterialResponse;
const EnableKeysRequest = models.EnableKeysRequest;
const EnableWhiteBoxKeysRequest = models.EnableWhiteBoxKeysRequest;
const EncryptByWhiteBoxResponse = models.EncryptByWhiteBoxResponse;
const DescribeKeysResponse = models.DescribeKeysResponse;
const EnableWhiteBoxKeyResponse = models.EnableWhiteBoxKeyResponse;
const ReEncryptRequest = models.ReEncryptRequest;
const ListKeysResponse = models.ListKeysResponse;
const GetServiceStatusResponse = models.GetServiceStatusResponse;
const DisableKeyRotationResponse = models.DisableKeyRotationResponse;
const DisableWhiteBoxKeysRequest = models.DisableWhiteBoxKeysRequest;
const OverwriteWhiteBoxDeviceFingerprintsRequest = models.OverwriteWhiteBoxDeviceFingerprintsRequest;
const DeleteWhiteBoxKeyRequest = models.DeleteWhiteBoxKeyRequest;
const AlgorithmInfo = models.AlgorithmInfo;
const GenerateDataKeyResponse = models.GenerateDataKeyResponse;
const CreateWhiteBoxKeyRequest = models.CreateWhiteBoxKeyRequest;
const OverwriteWhiteBoxDeviceFingerprintsResponse = models.OverwriteWhiteBoxDeviceFingerprintsResponse;
const DisableWhiteBoxKeysResponse = models.DisableWhiteBoxKeysResponse;
const GetParametersForImportRequest = models.GetParametersForImportRequest;
const CreateKeyResponse = models.CreateKeyResponse;
const ReEncryptResponse = models.ReEncryptResponse;
const EncryptResponse = models.EncryptResponse;
const CancelKeyDeletionRequest = models.CancelKeyDeletionRequest;
const DeleteImportedKeyMaterialRequest = models.DeleteImportedKeyMaterialRequest;
const EnableKeyResponse = models.EnableKeyResponse;
const AsymmetricSm2DecryptResponse = models.AsymmetricSm2DecryptResponse;
const DeviceFingerprint = models.DeviceFingerprint;
const GetKeyRotationStatusResponse = models.GetKeyRotationStatusResponse;
const EncryptRequest = models.EncryptRequest;
const AsymmetricSm2DecryptRequest = models.AsymmetricSm2DecryptRequest;
const DeleteWhiteBoxKeyResponse = models.DeleteWhiteBoxKeyResponse;
const ListKeysRequest = models.ListKeysRequest;
const DescribeWhiteBoxDecryptKeyRequest = models.DescribeWhiteBoxDecryptKeyRequest;
const KeyMetadata = models.KeyMetadata;
const DisableKeysResponse = models.DisableKeysResponse;
const DecryptRequest = models.DecryptRequest;
const DescribeWhiteBoxKeyDetailsRequest = models.DescribeWhiteBoxKeyDetailsRequest;
const AsymmetricRsaDecryptResponse = models.AsymmetricRsaDecryptResponse;
const CancelKeyDeletionResponse = models.CancelKeyDeletionResponse;
const DisableKeysRequest = models.DisableKeysRequest;
const DisableWhiteBoxKeyRequest = models.DisableWhiteBoxKeyRequest;
const ListKeyDetailRequest = models.ListKeyDetailRequest;
const EnableKeyRotationResponse = models.EnableKeyRotationResponse;
const EnableKeysResponse = models.EnableKeysResponse;
const DescribeWhiteBoxDeviceFingerprintsRequest = models.DescribeWhiteBoxDeviceFingerprintsRequest;
const EncryptByWhiteBoxRequest = models.EncryptByWhiteBoxRequest;
const GenerateRandomRequest = models.GenerateRandomRequest;
const ScheduleKeyDeletionRequest = models.ScheduleKeyDeletionRequest;
const DisableKeyRequest = models.DisableKeyRequest;
const GetKeyRotationStatusRequest = models.GetKeyRotationStatusRequest;
const GetPublicKeyResponse = models.GetPublicKeyResponse;
const DescribeWhiteBoxDecryptKeyResponse = models.DescribeWhiteBoxDecryptKeyResponse;
const DescribeWhiteBoxDeviceFingerprintsResponse = models.DescribeWhiteBoxDeviceFingerprintsResponse;
const UpdateKeyDescriptionRequest = models.UpdateKeyDescriptionRequest;
const DescribeKeyResponse = models.DescribeKeyResponse;
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
     * 用于修改CMK的别名。对于处于PendingDelete状态的CMK禁止修改。
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * 删除白盒密钥, 注意：必须先禁用后，才可以删除。
     * @param {DeleteWhiteBoxKeyRequest} req
     * @param {function(string, DeleteWhiteBoxKeyResponse):void} cb
     * @public
     */
    DeleteWhiteBoxKey(req, cb) {
        let resp = new DeleteWhiteBoxKeyResponse();
        this.request("DeleteWhiteBoxKey", req, resp, cb);
    }

    /**
     * 用于导入密钥材料。只有类型为EXTERNAL 的CMK 才可以导入，导入的密钥材料使用 GetParametersForImport 获取的密钥进行加密。可以为指定的 CMK 重新导入密钥材料，并重新指定过期时间，但必须导入相同的密钥材料。CMK 密钥材料导入后不可以更换密钥材料。导入的密钥材料过期或者被删除后，指定的CMK将无法使用，需要再次导入相同的密钥材料才能正常使用。CMK是独立的，同样的密钥材料可导入不同的 CMK 中，但使用其中一个 CMK 加密的数据无法使用另一个 CMK解密。
只有Enabled 和 PendingImport状态的CMK可以导入密钥材料。
     * @param {ImportKeyMaterialRequest} req
     * @param {function(string, ImportKeyMaterialResponse):void} cb
     * @public
     */
    ImportKeyMaterial(req, cb) {
        let resp = new ImportKeyMaterialResponse();
        this.request("ImportKeyMaterial", req, resp, cb);
    }

    /**
     * 该接口用户获取 KeyUsage为ASYMMETRIC_DECRYPT_RSA_2048 和 ASYMMETRIC_DECRYPT_SM2 的非对称密钥的公钥信息，使用该公钥用户可在本地进行数据加密，使用该公钥加密的数据只能通过KMS使用对应的私钥进行解密。只有处于Enabled状态的非对称密钥才可能获取公钥。
     * @param {GetPublicKeyRequest} req
     * @param {function(string, GetPublicKeyResponse):void} cb
     * @public
     */
    GetPublicKey(req, cb) {
        let resp = new GetPublicKeyResponse();
        this.request("GetPublicKey", req, resp, cb);
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
     * 使用指定的SM2非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。传入的密文的长度不能超过256字节。
     * @param {AsymmetricSm2DecryptRequest} req
     * @param {function(string, AsymmetricSm2DecryptResponse):void} cb
     * @public
     */
    AsymmetricSm2Decrypt(req, cb) {
        let resp = new AsymmetricSm2DecryptResponse();
        this.request("AsymmetricSm2Decrypt", req, resp, cb);
    }

    /**
     * 取消CMK的计划删除操作
     * @param {CancelKeyDeletionRequest} req
     * @param {function(string, CancelKeyDeletionResponse):void} cb
     * @public
     */
    CancelKeyDeletion(req, cb) {
        let resp = new CancelKeyDeletionResponse();
        this.request("CancelKeyDeletion", req, resp, cb);
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
     * 获取白盒密钥列表
     * @param {DescribeWhiteBoxKeyDetailsRequest} req
     * @param {function(string, DescribeWhiteBoxKeyDetailsResponse):void} cb
     * @public
     */
    DescribeWhiteBoxKeyDetails(req, cb) {
        let resp = new DescribeWhiteBoxKeyDetailsResponse();
        this.request("DescribeWhiteBoxKeyDetails", req, resp, cb);
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
     * 批量启用白盒密钥
     * @param {EnableWhiteBoxKeysRequest} req
     * @param {function(string, EnableWhiteBoxKeysResponse):void} cb
     * @public
     */
    EnableWhiteBoxKeys(req, cb) {
        let resp = new EnableWhiteBoxKeysResponse();
        this.request("EnableWhiteBoxKeys", req, resp, cb);
    }

    /**
     * 列出当前Region支持的加密方式
     * @param {ListAlgorithmsRequest} req
     * @param {function(string, ListAlgorithmsResponse):void} cb
     * @public
     */
    ListAlgorithms(req, cb) {
        let resp = new ListAlgorithmsResponse();
        this.request("ListAlgorithms", req, resp, cb);
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
     * 列出账号下面状态为Enabled， Disabled 和 PendingImport 的CMK KeyId 列表
     * @param {ListKeysRequest} req
     * @param {function(string, ListKeysResponse):void} cb
     * @public
     */
    ListKeys(req, cb) {
        let resp = new ListKeysResponse();
        this.request("ListKeys", req, resp, cb);
    }

    /**
     * 随机数生成接口。
     * @param {GenerateRandomRequest} req
     * @param {function(string, GenerateRandomResponse):void} cb
     * @public
     */
    GenerateRandom(req, cb) {
        let resp = new GenerateRandomResponse();
        this.request("GenerateRandom", req, resp, cb);
    }

    /**
     * 覆盖指定密钥的设备指纹信息
     * @param {OverwriteWhiteBoxDeviceFingerprintsRequest} req
     * @param {function(string, OverwriteWhiteBoxDeviceFingerprintsResponse):void} cb
     * @public
     */
    OverwriteWhiteBoxDeviceFingerprints(req, cb) {
        let resp = new OverwriteWhiteBoxDeviceFingerprintsResponse();
        this.request("OverwriteWhiteBoxDeviceFingerprints", req, resp, cb);
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
     * 展示白盒密钥的信息
     * @param {DescribeWhiteBoxKeyRequest} req
     * @param {function(string, DescribeWhiteBoxKeyResponse):void} cb
     * @public
     */
    DescribeWhiteBoxKey(req, cb) {
        let resp = new DescribeWhiteBoxKeyResponse();
        this.request("DescribeWhiteBoxKey", req, resp, cb);
    }

    /**
     * 使用白盒密钥进行加密
     * @param {EncryptByWhiteBoxRequest} req
     * @param {function(string, EncryptByWhiteBoxResponse):void} cb
     * @public
     */
    EncryptByWhiteBox(req, cb) {
        let resp = new EncryptByWhiteBoxResponse();
        this.request("EncryptByWhiteBox", req, resp, cb);
    }

    /**
     * 获取导入主密钥（CMK）材料的参数，返回的Token作为执行ImportKeyMaterial的参数之一，返回的PublicKey用于对自主导入密钥材料进行加密。返回的Token和PublicKey 24小时后失效，失效后如需重新导入，需要再次调用该接口获取新的Token和PublicKey。
     * @param {GetParametersForImportRequest} req
     * @param {function(string, GetParametersForImportResponse):void} cb
     * @public
     */
    GetParametersForImport(req, cb) {
        let resp = new GetParametersForImportResponse();
        this.request("GetParametersForImport", req, resp, cb);
    }

    /**
     * 批量禁用白盒密钥
     * @param {DisableWhiteBoxKeysRequest} req
     * @param {function(string, DisableWhiteBoxKeysResponse):void} cb
     * @public
     */
    DisableWhiteBoxKeys(req, cb) {
        let resp = new DisableWhiteBoxKeysResponse();
        this.request("DisableWhiteBoxKeys", req, resp, cb);
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
     * 禁用白盒密钥
     * @param {DisableWhiteBoxKeyRequest} req
     * @param {function(string, DisableWhiteBoxKeyResponse):void} cb
     * @public
     */
    DisableWhiteBoxKey(req, cb) {
        let resp = new DisableWhiteBoxKeyResponse();
        this.request("DisableWhiteBoxKey", req, resp, cb);
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

    /**
     * CMK计划删除接口，用于指定CMK删除的时间，可选时间区间为[7,30]天
     * @param {ScheduleKeyDeletionRequest} req
     * @param {function(string, ScheduleKeyDeletionResponse):void} cb
     * @public
     */
    ScheduleKeyDeletion(req, cb) {
        let resp = new ScheduleKeyDeletionResponse();
        this.request("ScheduleKeyDeletion", req, resp, cb);
    }

    /**
     * 获取指定密钥的设备指纹列表
     * @param {DescribeWhiteBoxDeviceFingerprintsRequest} req
     * @param {function(string, DescribeWhiteBoxDeviceFingerprintsResponse):void} cb
     * @public
     */
    DescribeWhiteBoxDeviceFingerprints(req, cb) {
        let resp = new DescribeWhiteBoxDeviceFingerprintsResponse();
        this.request("DescribeWhiteBoxDeviceFingerprints", req, resp, cb);
    }

    /**
     * 使用指定的RSA非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。
     * @param {AsymmetricRsaDecryptRequest} req
     * @param {function(string, AsymmetricRsaDecryptResponse):void} cb
     * @public
     */
    AsymmetricRsaDecrypt(req, cb) {
        let resp = new AsymmetricRsaDecryptResponse();
        this.request("AsymmetricRsaDecrypt", req, resp, cb);
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
     * 创建白盒密钥。 密钥个数的上限为 50。
     * @param {CreateWhiteBoxKeyRequest} req
     * @param {function(string, CreateWhiteBoxKeyResponse):void} cb
     * @public
     */
    CreateWhiteBoxKey(req, cb) {
        let resp = new CreateWhiteBoxKeyResponse();
        this.request("CreateWhiteBoxKey", req, resp, cb);
    }

    /**
     * 启用白盒密钥
     * @param {EnableWhiteBoxKeyRequest} req
     * @param {function(string, EnableWhiteBoxKeyResponse):void} cb
     * @public
     */
    EnableWhiteBoxKey(req, cb) {
        let resp = new EnableWhiteBoxKeyResponse();
        this.request("EnableWhiteBoxKey", req, resp, cb);
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
     * 用于删除导入的密钥材料，仅对EXTERNAL类型的CMK有效，该接口将CMK设置为PendingImport 状态，并不会删除CMK，在重新进行密钥导入后可继续使用。彻底删除CMK请使用 ScheduleKeyDeletion 接口。
     * @param {DeleteImportedKeyMaterialRequest} req
     * @param {function(string, DeleteImportedKeyMaterialResponse):void} cb
     * @public
     */
    DeleteImportedKeyMaterial(req, cb) {
        let resp = new DeleteImportedKeyMaterialResponse();
        this.request("DeleteImportedKeyMaterial", req, resp, cb);
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
     * 获取白盒密钥服务状态
     * @param {DescribeWhiteBoxServiceStatusRequest} req
     * @param {function(string, DescribeWhiteBoxServiceStatusResponse):void} cb
     * @public
     */
    DescribeWhiteBoxServiceStatus(req, cb) {
        let resp = new DescribeWhiteBoxServiceStatusResponse();
        this.request("DescribeWhiteBoxServiceStatus", req, resp, cb);
    }

    /**
     * 该接口用于对指定的cmk修改描述信息。对于处于PendingDelete状态的CMK禁止修改。
     * @param {UpdateKeyDescriptionRequest} req
     * @param {function(string, UpdateKeyDescriptionResponse):void} cb
     * @public
     */
    UpdateKeyDescription(req, cb) {
        let resp = new UpdateKeyDescriptionResponse();
        this.request("UpdateKeyDescription", req, resp, cb);
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
     * 获取白盒解密密钥
     * @param {DescribeWhiteBoxDecryptKeyRequest} req
     * @param {function(string, DescribeWhiteBoxDecryptKeyResponse):void} cb
     * @public
     */
    DescribeWhiteBoxDecryptKey(req, cb) {
        let resp = new DescribeWhiteBoxDecryptKeyResponse();
        this.request("DescribeWhiteBoxDecryptKey", req, resp, cb);
    }


}
module.exports = KmsClient;
