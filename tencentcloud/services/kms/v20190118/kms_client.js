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
 * kms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("kms.tencentcloudapi.com", "2019-01-18", clientConfig);
    }
    /**
     * 使用后量子密码算法密钥对签名进行验证。
     */
    async PostQuantumCryptoVerify(req, cb) {
        return this.request("PostQuantumCryptoVerify", req, cb);
    }
    /**
     * 本接口用于加密最多为4KB任意数据，可用于加密数据库密码，RSA Key，或其它较小的敏感信息。对于应用的数据加密，使用GenerateDataKey生成的DataKey进行本地数据的加解密操作
     */
    async Encrypt(req, cb) {
        return this.request("Encrypt", req, cb);
    }
    /**
     * 本接口用于解密密文，得到明文数据。
     */
    async Decrypt(req, cb) {
        return this.request("Decrypt", req, cb);
    }
    /**
     * 用于修改CMK的别名。对于处于PendingDelete状态的CMK禁止修改。
     */
    async UpdateAlias(req, cb) {
        return this.request("UpdateAlias", req, cb);
    }
    /**
     * 删除白盒密钥, 注意：必须先禁用后，才可以删除。
     */
    async DeleteWhiteBoxKey(req, cb) {
        return this.request("DeleteWhiteBoxKey", req, cb);
    }
    /**
     * 用于导入密钥材料。只有类型为EXTERNAL 的CMK 才可以导入，导入的密钥材料使用 GetParametersForImport 获取的密钥进行加密。可以为指定的 CMK 重新导入密钥材料，并重新指定过期时间，但必须导入相同的密钥材料。CMK 密钥材料导入后不可以更换密钥材料。导入的密钥材料过期或者被删除后，指定的CMK将无法使用，需要再次导入相同的密钥材料才能正常使用。CMK是独立的，同样的密钥材料可导入不同的 CMK 中，但使用其中一个 CMK 加密的数据无法使用另一个 CMK解密。
只有Enabled 和 PendingImport状态的CMK可以导入密钥材料。
     */
    async ImportKeyMaterial(req, cb) {
        return this.request("ImportKeyMaterial", req, cb);
    }
    /**
     * 该接口用于获取非对称密钥的公钥信息，可用于本地数据加密或验签。只有处于Enabled状态的非对称密钥才可能获取公钥。
     */
    async GetPublicKey(req, cb) {
        return this.request("GetPublicKey", req, cb);
    }
    /**
     * 本接口用于禁用一个主密钥，处于禁用状态的Key无法用于加密、解密操作。
     */
    async DisableKey(req, cb) {
        return this.request("DisableKey", req, cb);
    }
    /**
     * 本接口生成一个数据密钥，您可以用这个密钥进行本地数据的加密。
     */
    async GenerateDataKey(req, cb) {
        return this.request("GenerateDataKey", req, cb);
    }
    /**
     * 用于查询该用户是否已开通KMS服务
     */
    async GetServiceStatus(req, cb) {
        return this.request("GetServiceStatus", req, cb);
    }
    /**
     * 使用指定的SM2非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。传入的密文的长度不能超过256字节。
     */
    async AsymmetricSm2Decrypt(req, cb) {
        return this.request("AsymmetricSm2Decrypt", req, cb);
    }
    /**
     * 非对称密钥签名。
注意：只有 KeyUsage 为 ASYMMETRIC_SIGN_VERIFY_SM2、ASYMMETRIC_SIGN_VERIFY_ECC 或其他支持的 ASYMMETRIC_SIGN_VERIFY_${ALGORITHM} 的密钥才可以使用签名功能。
     */
    async SignByAsymmetricKey(req, cb) {
        return this.request("SignByAsymmetricKey", req, cb);
    }
    /**
     * 取消CMK的计划删除操作
     */
    async CancelKeyDeletion(req, cb) {
        return this.request("CancelKeyDeletion", req, cb);
    }
    /**
     * 查询指定的CMK是否开启了密钥轮换功能。
     */
    async GetKeyRotationStatus(req, cb) {
        return this.request("GetKeyRotationStatus", req, cb);
    }
    /**
     * 获取白盒密钥列表
     */
    async DescribeWhiteBoxKeyDetails(req, cb) {
        return this.request("DescribeWhiteBoxKeyDetails", req, cb);
    }
    /**
     * 记录当前key被哪个云产品的那个资源所使用。如果当前key设置了自动过期，则取消该设置，确保当前key不会自动失效。如果当前关联关系已经创建，也返回成功。
     */
    async BindCloudResource(req, cb) {
        return this.request("BindCloudResource", req, cb);
    }
    /**
     * 对密钥进行归档，被归档的密钥只能用于解密，不能加密
     */
    async ArchiveKey(req, cb) {
        return this.request("ArchiveKey", req, cb);
    }
    /**
     * 取消密钥归档，取消后密钥的状态变为Enabled。
     */
    async CancelKeyArchive(req, cb) {
        return this.request("CancelKeyArchive", req, cb);
    }
    /**
     * 使用指定CMK对密文重新加密。
     */
    async ReEncrypt(req, cb) {
        return this.request("ReEncrypt", req, cb);
    }
    /**
     * 批量启用白盒密钥
     */
    async EnableWhiteBoxKeys(req, cb) {
        return this.request("EnableWhiteBoxKeys", req, cb);
    }
    /**
     * 列出当前Region支持的加密方式
     */
    async ListAlgorithms(req, cb) {
        return this.request("ListAlgorithms", req, cb);
    }
    /**
     * 用于获取指定KeyId的主密钥属性详情信息。
     */
    async DescribeKey(req, cb) {
        return this.request("DescribeKey", req, cb);
    }
    /**
     * 列出账号下面状态为Enabled， Disabled 和 PendingImport 的CMK KeyId 列表
     */
    async ListKeys(req, cb) {
        return this.request("ListKeys", req, cb);
    }
    /**
     * 随机数生成接口。
     */
    async GenerateRandom(req, cb) {
        return this.request("GenerateRandom", req, cb);
    }
    /**
     * 本接口使用后量子密码算法密钥，解密密文，并得到明文数据。
     */
    async PostQuantumCryptoDecrypt(req, cb) {
        return this.request("PostQuantumCryptoDecrypt", req, cb);
    }
    /**
     * 覆盖指定密钥的设备指纹信息
     */
    async OverwriteWhiteBoxDeviceFingerprints(req, cb) {
        return this.request("OverwriteWhiteBoxDeviceFingerprints", req, cb);
    }
    /**
     * 创建用户管理数据密钥的主密钥CMK（Custom Master Key）。
     */
    async CreateKey(req, cb) {
        return this.request("CreateKey", req, cb);
    }
    /**
     * 展示白盒密钥的信息
     */
    async DescribeWhiteBoxKey(req, cb) {
        return this.request("DescribeWhiteBoxKey", req, cb);
    }
    /**
     * 使用白盒密钥进行加密
     */
    async EncryptByWhiteBox(req, cb) {
        return this.request("EncryptByWhiteBox", req, cb);
    }
    /**
     * 获取导入主密钥（CMK）材料的参数，返回的Token作为执行ImportKeyMaterial的参数之一，返回的PublicKey用于对自主导入密钥材料进行加密。返回的Token和PublicKey 24小时后失效，失效后如需重新导入，需要再次调用该接口获取新的Token和PublicKey。
     */
    async GetParametersForImport(req, cb) {
        return this.request("GetParametersForImport", req, cb);
    }
    /**
     * 批量禁用白盒密钥
     */
    async DisableWhiteBoxKeys(req, cb) {
        return this.request("DisableWhiteBoxKeys", req, cb);
    }
    /**
     * 根据指定Offset和Limit获取主密钥列表详情。
     */
    async ListKeyDetail(req, cb) {
        return this.request("ListKeyDetail", req, cb);
    }
    /**
     * 对指定的CMK禁止密钥轮换功能。
     */
    async DisableKeyRotation(req, cb) {
        return this.request("DisableKeyRotation", req, cb);
    }
    /**
     * 禁用白盒密钥
     */
    async DisableWhiteBoxKey(req, cb) {
        return this.request("DisableWhiteBoxKey", req, cb);
    }
    /**
     * 该接口用于批量启用CMK。
     */
    async EnableKeys(req, cb) {
        return this.request("EnableKeys", req, cb);
    }
    /**
     * CMK计划删除接口，用于指定CMK删除的时间，可选时间区间为[7,30]天
     */
    async ScheduleKeyDeletion(req, cb) {
        return this.request("ScheduleKeyDeletion", req, cb);
    }
    /**
     * 获取指定密钥的设备指纹列表
     */
    async DescribeWhiteBoxDeviceFingerprints(req, cb) {
        return this.request("DescribeWhiteBoxDeviceFingerprints", req, cb);
    }
    /**
     * 使用指定的RSA非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。
     */
    async AsymmetricRsaDecrypt(req, cb) {
        return this.request("AsymmetricRsaDecrypt", req, cb);
    }
    /**
     * 删除指定（key, 资源，云产品）的记录，以表明：指定的云产品的资源已不再使用当前的key。
     */
    async UnbindCloudResource(req, cb) {
        return this.request("UnbindCloudResource", req, cb);
    }
    /**
     * 对指定的CMK开启密钥轮换功能。
     */
    async EnableKeyRotation(req, cb) {
        return this.request("EnableKeyRotation", req, cb);
    }
    /**
     * 创建白盒密钥。 密钥个数的上限为 50。
     */
    async CreateWhiteBoxKey(req, cb) {
        return this.request("CreateWhiteBoxKey", req, cb);
    }
    /**
     * 本接口使用后量子密码算法密钥，可加密最多为4KB任意数据，可用于加密数据库密码，RSA Key，或其它较小的敏感信息。对于应用的数据加密，使用GenerateDataKey生成的DataKey进行本地数据的加解密操作。
     */
    async PostQuantumCryptoEncrypt(req, cb) {
        return this.request("PostQuantumCryptoEncrypt", req, cb);
    }
    /**
     * 启用白盒密钥
     */
    async EnableWhiteBoxKey(req, cb) {
        return this.request("EnableWhiteBoxKey", req, cb);
    }
    /**
     * 用于启用一个指定的CMK。
     */
    async EnableKey(req, cb) {
        return this.request("EnableKey", req, cb);
    }
    /**
     * 用于删除导入的密钥材料，仅对EXTERNAL类型的CMK有效，该接口将CMK设置为PendingImport 状态，并不会删除CMK，在重新进行密钥导入后可继续使用。彻底删除CMK请使用 ScheduleKeyDeletion 接口。
     */
    async DeleteImportedKeyMaterial(req, cb) {
        return this.request("DeleteImportedKeyMaterial", req, cb);
    }
    /**
     * 该接口用于批量获取主密钥属性信息。
     */
    async DescribeKeys(req, cb) {
        return this.request("DescribeKeys", req, cb);
    }
    /**
     * 获取白盒密钥服务状态
     */
    async DescribeWhiteBoxServiceStatus(req, cb) {
        return this.request("DescribeWhiteBoxServiceStatus", req, cb);
    }
    /**
     * 该接口用于对指定的cmk修改描述信息。对于处于PendingDelete状态的CMK禁止修改。
     */
    async UpdateKeyDescription(req, cb) {
        return this.request("UpdateKeyDescription", req, cb);
    }
    /**
     * 该接口用于批量禁止CMK的使用。
     */
    async DisableKeys(req, cb) {
        return this.request("DisableKeys", req, cb);
    }
    /**
     * 获取白盒解密密钥
     */
    async DescribeWhiteBoxDecryptKey(req, cb) {
        return this.request("DescribeWhiteBoxDecryptKey", req, cb);
    }
    /**
     * 使用后量子密码算法签名验签密钥进行签名。
     */
    async PostQuantumCryptoSign(req, cb) {
        return this.request("PostQuantumCryptoSign", req, cb);
    }
    /**
     * 获取可以提供KMS服务的地域列表
     */
    async GetRegions(req, cb) {
        return this.request("GetRegions", req, cb);
    }
    /**
     * 使用非对称密钥验签
     */
    async VerifyByAsymmetricKey(req, cb) {
        return this.request("VerifyByAsymmetricKey", req, cb);
    }
}
exports.Client = Client;
