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

/**
 * UpdateAlias请求参数结构体
 */
export interface UpdateAliasRequest {
  /**
   * 新的别名，1-60个字符或数字的组合
   */
  Alias: string
  /**
   * CMK的全局唯一标识符
   */
  KeyId: string
}

/**
 * EnableWhiteBoxKey请求参数结构体
 */
export interface EnableWhiteBoxKeyRequest {
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId: string
}

/**
 * AsymmetricRsaDecrypt请求参数结构体
 */
export interface AsymmetricRsaDecryptRequest {
  /**
   * CMK的唯一标识
   */
  KeyId: string
  /**
   * 使用PublicKey加密的密文，Base64编码
   */
  Ciphertext: string
  /**
   * 在使用公钥加密时对应的算法：当前支持RSAES_PKCS1_V1_5、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256
   */
  Algorithm: string
}

/**
 * EnableKeyRotation请求参数结构体
 */
export interface EnableKeyRotationRequest {
  /**
   * CMK唯一标识符
   */
  KeyId: string
  /**
   * 密钥轮转周期，单位天，允许范围 7 ~ 365，默认值 365。
   */
  RotateDays?: number
}

/**
 * DescribeWhiteBoxKeyDetails返回参数结构体
 */
export interface DescribeWhiteBoxKeyDetailsResponse {
  /**
   * 白盒密钥信息列表。
   */
  KeyInfos?: Array<WhiteboxKeyInfo>
  /**
   * 白盒密钥总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateKey请求参数结构体
 */
export interface CreateKeyRequest {
  /**
   * 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字。以 kms- 作为前缀的用于云产品使用，Alias 不可重复。
   */
  Alias: string
  /**
   * CMK 的描述，最大1024字节
   */
  Description?: string
  /**
   * 指定key的用途，默认为  "ENCRYPT_DECRYPT" 表示创建对称加解密密钥，其它支持用途 “ASYMMETRIC_DECRYPT_RSA_2048” 表示创建用于加解密的RSA2048非对称密钥，“ASYMMETRIC_DECRYPT_SM2” 表示创建用于加解密的SM2非对称密钥，“ASYMMETRIC_SIGN_VERIFY_SM2” 表示创建用于签名验签的SM2非对称密钥，“ASYMMETRIC_SIGN_VERIFY_ECC” 表示创建用于签名验签的ECC非对称密钥，“ASYMMETRIC_SIGN_VERIFY_RSA_2048” 表示创建用于签名验签的RSA_2048非对称密钥，“ASYMMETRIC_SIGN_VERIFY_ECDSA384”表示创建用于签名验签的 ECDSA384 非对称秘钥。完整的秘钥用途与算法支持列表可通过 ListAlgorithms 接口获取。
   */
  KeyUsage?: string
  /**
   * 指定key类型，默认为1，1表示默认类型，由KMS创建CMK密钥，2 表示EXTERNAL 类型，该类型需要用户导入密钥材料，参考 GetParametersForImport 和 ImportKeyMaterial 接口
   */
  Type?: number
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
  /**
   * KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。
   */
  HsmClusterId?: string
}

/**
 * DisableWhiteBoxKey返回参数结构体
 */
export interface DisableWhiteBoxKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableKey返回参数结构体
 */
export interface DisableKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteBoxServiceStatus请求参数结构体
 */
export type DescribeWhiteBoxServiceStatusRequest = null

/**
 * VerifyByAsymmetricKey请求参数结构体
 */
export interface VerifyByAsymmetricKeyRequest {
  /**
   * 密钥的唯一标识
   */
  KeyId: string
  /**
   * 签名值，通过调用KMS签名接口生成
   */
  SignatureValue: string
  /**
   * 消息原文或消息摘要。如果提供的是消息原文，则消息原文的长度（Base64编码前的长度）不超过4096字节。如果提供的是消息摘要，则消息摘要长度（Base64编码前的长度）必须等于32字节
   */
  Message: string
  /**
   * 签名算法，支持的算法：SM2DSA，ECC_P256_R1，RSA_PSS_SHA_256，RSA_PKCS1_SHA_256 等。更多支持的算法可通过 ListAlgorithms 接口进行查询。
   */
  Algorithm: string
  /**
   * 消息类型：RAW，DIGEST，如果不传，默认为RAW，表示消息原文。
   */
  MessageType?: string
}

/**
 * DescribeKey请求参数结构体
 */
export interface DescribeKeyRequest {
  /**
   * CMK全局唯一标识符
   */
  KeyId: string
}

/**
 * 白盒密钥信息
 */
export interface WhiteboxKeyInfo {
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId?: string
  /**
   * 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字. 不可重复
   */
  Alias?: string
  /**
   * 创建者
   */
  CreatorUin?: number
  /**
   * 密钥的描述信息
   */
  Description?: string
  /**
   * 密钥创建时间，Unix时间戳
   */
  CreateTime?: number
  /**
   * 白盒密钥的状态， 取值为：Enabled | Disabled
   */
  Status?: string
  /**
   * 创建者
   */
  OwnerUin?: number
  /**
   * 密钥所用的算法类型
   */
  Algorithm?: string
  /**
   * 白盒加密密钥，base64编码
   */
  EncryptKey?: string
  /**
   * 白盒解密密钥，base64编码
   */
  DecryptKey?: string
  /**
   * 资源ID，格式：creatorUin/$creatorUin/$keyId
   */
  ResourceId?: string
  /**
   * 是否有设备指纹与当前密钥绑定
   */
  DeviceFingerprintBind?: boolean
}

/**
 * ListAlgorithms返回参数结构体
 */
export interface ListAlgorithmsResponse {
  /**
   * 本地区支持的对称加密算法
   */
  SymmetricAlgorithms?: Array<AlgorithmInfo>
  /**
   * 本地区支持的非对称加密算法
   */
  AsymmetricAlgorithms?: Array<AlgorithmInfo>
  /**
   * 本地区支持的非对称签名验签算法
   */
  AsymmetricSignVerifyAlgorithms?: Array<AlgorithmInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableKeys返回参数结构体
 */
export interface DisableKeysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteBoxKey返回参数结构体
 */
export interface DescribeWhiteBoxKeyResponse {
  /**
   * 白盒密钥信息
   */
  KeyInfo?: WhiteboxKeyInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateKeyDescription返回参数结构体
 */
export interface UpdateKeyDescriptionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteBoxServiceStatus返回参数结构体
 */
export interface DescribeWhiteBoxServiceStatusResponse {
  /**
   * 用户的白盒密钥服务是否可用
   */
  ServiceEnabled?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportKeyMaterial请求参数结构体
 */
export interface ImportKeyMaterialRequest {
  /**
   * 使用GetParametersForImport 返回的PublicKey加密后的密钥材料base64编码。对于国密版本region的KMS，导入的密钥材料长度要求为 128 bit，FIPS版本region的KMS， 导入的密钥材料长度要求为 256 bit。
   */
  EncryptedKeyMaterial: string
  /**
   * 通过调用GetParametersForImport获得的导入令牌。
   */
  ImportToken: string
  /**
   * 指定导入密钥材料的CMK，需要和GetParametersForImport 指定的CMK相同。
   */
  KeyId: string
  /**
   * 密钥材料过期时间 unix 时间戳，不指定或者 0 表示密钥材料不会过期，若指定过期时间，需要大于当前时间点，最大支持 2147443200。
   */
  ValidTo?: number
}

/**
 * EnableKey请求参数结构体
 */
export interface EnableKeyRequest {
  /**
   * CMK唯一标识符
   */
  KeyId: string
}

/**
 * GetKeyRotationStatus请求参数结构体
 */
export interface GetKeyRotationStatusRequest {
  /**
   * CMK唯一标识符
   */
  KeyId: string
}

/**
 * ListAlgorithms请求参数结构体
 */
export type ListAlgorithmsRequest = null

/**
 * 标签键和标签值
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * ListKeyDetail返回参数结构体
 */
export interface ListKeyDetailResponse {
  /**
   * CMK的总数量
   */
  TotalCount?: number
  /**
   * 返回的属性信息列表。
   */
  KeyMetadatas?: Array<KeyMetadata>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateDataKey请求参数结构体
 */
export interface GenerateDataKeyRequest {
  /**
   * CMK全局唯一标识符
   */
  KeyId: string
  /**
   * 指定生成Datakey的加密算法以及Datakey大小，AES_128或者AES_256。KeySpec 和 NumberOfBytes 必须指定一个
   */
  KeySpec?: string
  /**
   * 生成的DataKey的长度，同时指定NumberOfBytes和KeySpec时，以NumberOfBytes为准。最小值为1， 最大值为1024。KeySpec 和 NumberOfBytes 必须指定一个
   */
  NumberOfBytes?: number
  /**
   * key/value对的json字符串，如果使用该字段，则返回的DataKey在解密时需要填入相同的字符串
   */
  EncryptionContext?: string
  /**
   * PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。
   */
  EncryptionPublicKey?: string
  /**
   * 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。
   */
  EncryptionAlgorithm?: string
}

/**
 * UpdateAlias返回参数结构体
 */
export interface UpdateAliasResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScheduleKeyDeletion返回参数结构体
 */
export interface ScheduleKeyDeletionResponse {
  /**
   * 计划删除执行时间
   */
  DeletionDate?: number
  /**
   * 唯一标志被计划删除的CMK
   */
  KeyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PostQuantumCryptoVerify请求参数结构体
 */
export interface PostQuantumCryptoVerifyRequest {
  /**
   * 密钥的唯一标识
   */
  KeyId: string
  /**
   * 签名值，通过调用KMS PostQuantumCryptoSign签名接口生成
   */
  SignatureValue: string
  /**
   * Base64 编码的消息原文，消息原文的长度（Base64编码前的长度）不超过4096字节。
   */
  Message: string
}

/**
 * GenerateRandom返回参数结构体
 */
export interface GenerateRandomResponse {
  /**
   * 生成的随机数的明文，该明文使用base64编码，用户需要使用base64解码得到明文。
   */
  Plaintext: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKeys请求参数结构体
 */
export interface DescribeKeysRequest {
  /**
   * 查询CMK的ID列表，批量查询一次最多支持100个KeyId
   */
  KeyIds: Array<string>
}

/**
 * GetPublicKey请求参数结构体
 */
export interface GetPublicKeyRequest {
  /**
   * CMK的唯一标识。
   */
  KeyId: string
}

/**
 * GetServiceStatus请求参数结构体
 */
export type GetServiceStatusRequest = null

/**
 * EnableWhiteBoxKeys返回参数结构体
 */
export interface EnableWhiteBoxKeysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ArchiveKey返回参数结构体
 */
export interface ArchiveKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyByAsymmetricKey返回参数结构体
 */
export interface VerifyByAsymmetricKeyResponse {
  /**
   * 签名是否有效。true：签名有效，false：签名无效。
   */
  SignatureValid?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteBoxKey请求参数结构体
 */
export interface DescribeWhiteBoxKeyRequest {
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId: string
}

/**
 * GetParametersForImport返回参数结构体
 */
export interface GetParametersForImportResponse {
  /**
   * CMK的唯一标识，用于指定目标导入密钥材料的CMK。
   */
  KeyId: string
  /**
   * 导入密钥材料需要的token，用于作为 ImportKeyMaterial 的参数。
   */
  ImportToken: string
  /**
   * 用于加密密钥材料的RSA公钥，base64编码。使用PublicKey base64解码后的公钥将导入密钥进行加密后作为 ImportKeyMaterial 的参数。
   */
  PublicKey: string
  /**
   * 该导出token和公钥的有效期，超过该时间后无法导入，需要重新调用GetParametersForImport获取。
   */
  ParametersValidTo: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Decrypt返回参数结构体
 */
export interface DecryptResponse {
  /**
   * CMK的全局唯一标识
   */
  KeyId?: string
  /**
   * 若调用时未提供 EncryptionPublicKey，该字段值为 Base64 编码的明文，需进行 Base64 解码以获取明文。
若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取明文。
   */
  Plaintext?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWhiteBoxKey返回参数结构体
 */
export interface CreateWhiteBoxKeyResponse {
  /**
   * 用于加密的密钥，base64编码
   */
  EncryptKey?: string
  /**
   * 用于解密的密钥，base64编码
   */
  DecryptKey?: string
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId?: string
  /**
   * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误
   */
  TagCode?: number
  /**
   * 标签操作的返回信息
   */
  TagMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回CMK列表信息
 */
export interface Key {
  /**
   * CMK的全局唯一标识。
   */
  KeyId?: string
}

/**
 * DeleteImportedKeyMaterial返回参数结构体
 */
export interface DeleteImportedKeyMaterialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableKeys请求参数结构体
 */
export interface EnableKeysRequest {
  /**
   * 需要批量启用的CMK Id 列表， CMK数量最大支持100
   */
  KeyIds: Array<string>
}

/**
 * EnableWhiteBoxKeys请求参数结构体
 */
export interface EnableWhiteBoxKeysRequest {
  /**
   * 白盒密钥的全局唯一标识符列表。注意：要确保所有提供的KeyId是格式有效的，没有重复，个数不超过50个，并且都是有效存在的。
   */
  KeyIds: Array<string>
}

/**
 * EncryptByWhiteBox返回参数结构体
 */
export interface EncryptByWhiteBoxResponse {
  /**
   * 初始化向量，加密算法会使用到, base64编码。如果由调用方在入参中传入，则原样返回。如果调用方没有传入，则后端服务随机生成，并返回
   */
  InitializationVector?: string
  /**
   * 加密后的密文，base64编码
   */
  CipherText?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKeys返回参数结构体
 */
export interface DescribeKeysResponse {
  /**
   * 返回的属性信息列表
   */
  KeyMetadatas?: Array<KeyMetadata>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableWhiteBoxKey返回参数结构体
 */
export interface EnableWhiteBoxKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReEncrypt请求参数结构体
 */
export interface ReEncryptRequest {
  /**
   * 需要重新加密的密文
   */
  CiphertextBlob: string
  /**
   * 重新加密使用的CMK，如果为空，则使用密文原有的CMK重新加密（若密钥没有轮换则密文不会刷新）
   */
  DestinationKeyId?: string
  /**
   * CiphertextBlob 密文加密时使用的key/value对的json字符串。如果加密时未使用，则为空
   */
  SourceEncryptionContext?: string
  /**
   * 重新加密使用的key/value对的json字符串，如果使用该字段，则返回的新密文在解密时需要填入相同的字符串
   */
  DestinationEncryptionContext?: string
}

/**
 * ListKeys返回参数结构体
 */
export interface ListKeysResponse {
  /**
   * CMK列表数组
   */
  Keys?: Array<Key>
  /**
   * CMK的总数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AsymmetricSm2Decrypt返回参数结构体
 */
export interface AsymmetricSm2DecryptResponse {
  /**
   * CMK的唯一标识
   */
  KeyId?: string
  /**
   * 解密后的明文，base64编码
   */
  Plaintext?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableKeyRotation返回参数结构体
 */
export interface DisableKeyRotationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableWhiteBoxKeys请求参数结构体
 */
export interface DisableWhiteBoxKeysRequest {
  /**
   * 白盒密钥的全局唯一标识符列表。注意：要确保所有提供的KeyId是格式有效的，没有重复，个数不超过50个，并且都是有效存在的。
   */
  KeyIds: Array<string>
}

/**
 * ListKeyDetail请求参数结构体
 */
export interface ListKeyDetailRequest {
  /**
   * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
   */
  Offset?: number
  /**
   * 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为10，最大值为200
   */
  Limit?: number
  /**
   * 根据创建者角色筛选，默认 0 表示用户自己创建的cmk， 1 表示授权其它云产品自动创建的cmk
   */
  Role?: number
  /**
   * 根据CMK创建时间排序， 0 表示按照降序排序，1表示按照升序排序
   */
  OrderType?: number
  /**
   * 根据CMK状态筛选， 0表示全部CMK， 1 表示仅查询Enabled CMK， 2 表示仅查询Disabled CMK，3 表示查询PendingDelete 状态的CMK(处于计划删除状态的Key)，4 表示查询 PendingImport 状态的CMK，5 表示查询 Archived 状态的 CMK
   */
  KeyState?: number
  /**
   * 根据KeyId或者Alias进行模糊匹配查询
   */
  SearchKeyAlias?: string
  /**
   * 根据CMK类型筛选， "TENCENT_KMS" 表示筛选密钥材料由KMS创建的CMK， "EXTERNAL" 表示筛选密钥材料需要用户导入的 EXTERNAL类型CMK，"ALL" 或者不设置表示两种类型都查询，大小写敏感。
   */
  Origin?: string
  /**
   * 根据CMK的KeyUsage筛选，ALL表示筛选全部，可使用的参数为：ALL 或 ENCRYPT_DECRYPT 或 ASYMMETRIC_DECRYPT_RSA_2048 或 ASYMMETRIC_DECRYPT_SM2 或 ASYMMETRIC_SIGN_VERIFY_SM2 或 ASYMMETRIC_SIGN_VERIFY_RSA_2048 或 ASYMMETRIC_SIGN_VERIFY_ECC，为空则默认筛选ENCRYPT_DECRYPT类型
   */
  KeyUsage?: string
  /**
   * 标签过滤条件
   */
  TagFilters?: Array<TagFilter>
  /**
   * KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。
   */
  HsmClusterId?: string
}

/**
 * DeleteWhiteBoxKey请求参数结构体
 */
export interface DeleteWhiteBoxKeyRequest {
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId: string
}

/**
 * 算法的名称 和 标识
 */
export interface AlgorithmInfo {
  /**
   * 算法的标识
   */
  KeyUsage?: string
  /**
   * 算法的名称
   */
  Algorithm?: string
}

/**
 * GetRegions返回参数结构体
 */
export interface GetRegionsResponse {
  /**
   * 可用region列表
   */
  Regions?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateDataKey返回参数结构体
 */
export interface GenerateDataKeyResponse {
  /**
   * CMK的全局唯一标识
   */
  KeyId?: string
  /**
   * 若调用时未提供 EncryptionPublicKey，该字段值为生成的数据密钥 DataKey 的 Base64 编码的明文，需进行 Base64 解码以获取 DataKey 明文。
若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取 DataKey 明文。
   */
  Plaintext?: string
  /**
   * 数据密钥DataKey加密后的密文，用户需要自行保存该密文，KMS不托管用户的数据密钥。可以通过Decrypt接口从CiphertextBlob中获取数据密钥DataKey明文
   */
  CiphertextBlob?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWhiteBoxKey请求参数结构体
 */
export interface CreateWhiteBoxKeyRequest {
  /**
   * 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字。Alias不可重复。
   */
  Alias: string
  /**
   * 创建密钥所有的算法类型，支持的取值：AES_256,SM4
   */
  Algorithm: string
  /**
   * 密钥的描述，最大1024字节
   */
  Description?: string
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
}

/**
 * OverwriteWhiteBoxDeviceFingerprints返回参数结构体
 */
export interface OverwriteWhiteBoxDeviceFingerprintsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableWhiteBoxKeys返回参数结构体
 */
export interface DisableWhiteBoxKeysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ArchiveKey请求参数结构体
 */
export interface ArchiveKeyRequest {
  /**
   * CMK唯一标识符
   */
  KeyId: string
}

/**
 * GetParametersForImport请求参数结构体
 */
export interface GetParametersForImportRequest {
  /**
   * CMK的唯一标识，获取密钥参数的CMK必须是EXTERNAL类型，即在CreateKey时指定Type=2 类型的CMK。
   */
  KeyId: string
  /**
   * 指定加密密钥材料的算法，目前支持RSAES_PKCS1_V1_5、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256
   */
  WrappingAlgorithm: string
  /**
   * 指定加密密钥材料的类型，目前只支持RSA_2048
   */
  WrappingKeySpec: string
}

/**
 * CreateKey返回参数结构体
 */
export interface CreateKeyResponse {
  /**
   * CMK的全局唯一标识符
   */
  KeyId?: string
  /**
   * 作为密钥更容易辨识，更容易被人看懂的别名
   */
  Alias?: string
  /**
   * 密钥创建时间，unix时间戳
   */
  CreateTime?: number
  /**
   * CMK的描述
   */
  Description?: string
  /**
   * CMK的状态
   */
  KeyState?: string
  /**
   * CMK的用途
   */
  KeyUsage?: string
  /**
   * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误
   */
  TagCode?: number
  /**
   * 标签操作的返回信息
   */
  TagMsg?: string
  /**
   * HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）
   */
  HsmClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReEncrypt返回参数结构体
 */
export interface ReEncryptResponse {
  /**
   * 重新加密后的密文
   */
  CiphertextBlob?: string
  /**
   * 重新加密使用的CMK
   */
  KeyId?: string
  /**
   * 重新加密前密文使用的CMK
   */
  SourceKeyId?: string
  /**
   * true表示密文已经重新加密。同一个CMK进行重加密，在密钥没有发生轮换的情况下不会进行实际重新加密操作，返回原密文
   */
  ReEncrypted?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Encrypt返回参数结构体
 */
export interface EncryptResponse {
  /**
   * 加密后的密文，base64编码。注意：本字段中打包了密文和密钥的相关信息，不是对明文的直接加密结果，只有将该字段作为Decrypt接口的输入参数，才可以解密出原文。
   */
  CiphertextBlob?: string
  /**
   * 加密使用的CMK的全局唯一标识
   */
  KeyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelKeyDeletion请求参数结构体
 */
export interface CancelKeyDeletionRequest {
  /**
   * 需要被取消删除的CMK的唯一标志
   */
  KeyId: string
}

/**
 * DeleteImportedKeyMaterial请求参数结构体
 */
export interface DeleteImportedKeyMaterialRequest {
  /**
   * 指定需要删除密钥材料的EXTERNAL CMK。
   */
  KeyId: string
}

/**
 * EnableKey返回参数结构体
 */
export interface EnableKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetServiceStatus返回参数结构体
 */
export interface GetServiceStatusResponse {
  /**
   * KMS服务是否开通， true 表示已开通
   */
  ServiceEnabled?: boolean
  /**
   * 服务不可用类型： 0-未购买，1-正常， 2-欠费停服， 3-资源释放
   */
  InvalidType?: number
  /**
   * 0-普通版，1-旗舰版
   */
  UserLevel?: number
  /**
   * 旗舰版到期时间（Epoch Unix Timestamp）。
   */
  ProExpireTime?: number
  /**
   * 旗舰版是否自动续费：0-不自动续费，1-自动续费
   */
  ProRenewFlag?: number
  /**
   * 旗舰版购买记录的唯一性标识。如果为开通旗舰版，则返回值为空
   */
  ProResourceId?: string
  /**
   * 是否开通 KMS 托管版
   */
  ExclusiveVSMEnabled?: boolean
  /**
   * 是否开通 KMS 独享版
   */
  ExclusiveHSMEnabled?: boolean
  /**
   * KMS 订阅信息。
   */
  SubscriptionInfo?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备指纹
 */
export interface DeviceFingerprint {
  /**
   * 指纹信息，由设备指纹采集工具采集获得，格式满足正则表达式：^[0-9a-f]{8}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{16}$
   */
  Identity: string
  /**
   * 描述信息，如：IP，设备名称等，最大1024字节
   */
  Description?: string
}

/**
 * GetKeyRotationStatus返回参数结构体
 */
export interface GetKeyRotationStatusResponse {
  /**
   * 密钥轮换是否开启
   */
  KeyRotationEnabled?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Encrypt请求参数结构体
 */
export interface EncryptRequest {
  /**
   * 调用CreateKey生成的CMK全局唯一标识符
   */
  KeyId: string
  /**
   * 被加密的明文数据，该字段必须使用base64编码，原文最大长度支持4K
   */
  Plaintext: string
  /**
   * key/value对的json字符串，如果指定了该参数，则在调用Decrypt API时需要提供同样的参数，最大支持1024个字符
   */
  EncryptionContext?: string
}

/**
 * AsymmetricSm2Decrypt请求参数结构体
 */
export interface AsymmetricSm2DecryptRequest {
  /**
   * CMK的唯一标识
   */
  KeyId: string
  /**
   * 使用PublicKey加密的密文，Base64编码，原始密文格式需要为C1C3C2_ASN1。原始密文长度不能超过256字节。
   */
  Ciphertext: string
}

/**
 * DeleteWhiteBoxKey返回参数结构体
 */
export interface DeleteWhiteBoxKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListKeys请求参数结构体
 */
export interface ListKeysRequest {
  /**
   * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
   */
  Offset?: number
  /**
   * 含义跟 SQL 查询的 Limit 一致，表示本次获最多获取 Limit 个元素。缺省值为10，最大值为200
   */
  Limit?: number
  /**
   * 根据创建者角色筛选，默认 0 表示用户自己创建的cmk， 1 表示授权其它云产品自动创建的cmk
   */
  Role?: number
  /**
   * KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。
   */
  HsmClusterId?: string
}

/**
 * DescribeWhiteBoxDecryptKey请求参数结构体
 */
export interface DescribeWhiteBoxDecryptKeyRequest {
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId: string
}

/**
 * CMK属性信息
 */
export interface KeyMetadata {
  /**
   * CMK的全局唯一标识
   */
  KeyId?: string
  /**
   * 作为密钥更容易辨识，更容易被人看懂的别名
   */
  Alias?: string
  /**
   * 密钥创建时间
   */
  CreateTime?: number
  /**
   * CMK的描述
   */
  Description?: string
  /**
   * CMK的状态， 取值为：Enabled | Disabled | PendingDelete | PendingImport | Archived
   */
  KeyState?: string
  /**
   * CMK用途，取值为: ENCRYPT_DECRYPT | ASYMMETRIC_DECRYPT_RSA_2048 | ASYMMETRIC_DECRYPT_SM2 | ASYMMETRIC_SIGN_VERIFY_SM2 | ASYMMETRIC_SIGN_VERIFY_RSA_2048 | ASYMMETRIC_SIGN_VERIFY_ECC
   */
  KeyUsage?: string
  /**
   * CMK类型，2 表示符合FIPS标准，4表示符合国密标准
   */
  Type?: number
  /**
   * 创建者
   */
  CreatorUin?: number
  /**
   * 是否开启了密钥轮换功能
   */
  KeyRotationEnabled?: boolean
  /**
   * CMK的创建者，用户创建的为 user，授权各云产品自动创建的为对应的产品名
   */
  Owner?: string
  /**
   * 在密钥轮换开启状态下，下次轮换的时间
   */
  NextRotateTime?: number
  /**
   * 计划删除的时间
   */
  DeletionDate?: number
  /**
   * CMK 密钥材料类型，由KMS创建的为： TENCENT_KMS， 由用户导入的类型为：EXTERNAL
   */
  Origin?: string
  /**
   * 在Origin为  EXTERNAL 时有效，表示密钥材料的有效日期， 0 表示不过期
   */
  ValidTo?: number
  /**
   * 资源ID，格式：creatorUin/$creatorUin/$keyId
   */
  ResourceId?: string
  /**
   * HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）
   */
  HsmClusterId?: string
  /**
   * 密钥轮转周期（天）
   */
  RotateDays?: number
  /**
   * 上次乱转时间（Unix timestamp）
   */
  LastRotateTime?: number
}

/**
 * CancelKeyArchive返回参数结构体
 */
export interface CancelKeyArchiveResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Decrypt请求参数结构体
 */
export interface DecryptRequest {
  /**
   * 待解密的密文数据
   */
  CiphertextBlob: string
  /**
   * key/value对的json字符串，如果Encrypt指定了该参数，则在调用Decrypt API时需要提供同样的参数，最大支持1024字符
   */
  EncryptionContext?: string
  /**
   * PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。
   */
  EncryptionPublicKey?: string
  /**
   * 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。
   */
  EncryptionAlgorithm?: string
}

/**
 * DescribeWhiteBoxKeyDetails请求参数结构体
 */
export interface DescribeWhiteBoxKeyDetailsRequest {
  /**
   * 过滤条件：密钥的状态，0：disabled，1：enabled
   */
  KeyStatus?: number
  /**
   * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
   */
  Offset?: number
  /**
   * 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为0, 表示不分页
   */
  Limit?: number
  /**
   * 标签过滤条件
   */
  TagFilters?: Array<TagFilter>
}

/**
 * PostQuantumCryptoSign请求参数结构体
 */
export interface PostQuantumCryptoSignRequest {
  /**
   * Base64 编码的消息原文。消息原文的长度（Base64编码前的长度）不超过4096字节。
   */
  Message: string
  /**
   * 密钥的唯一标识
   */
  KeyId: string
}

/**
 * PostQuantumCryptoDecrypt请求参数结构体
 */
export interface PostQuantumCryptoDecryptRequest {
  /**
   * 待解密的密文数据
   */
  CiphertextBlob: string
  /**
   * PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。
   */
  EncryptionPublicKey?: string
  /**
   * 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。
   */
  EncryptionAlgorithm?: string
}

/**
 * AsymmetricRsaDecrypt返回参数结构体
 */
export interface AsymmetricRsaDecryptResponse {
  /**
   * CMK的唯一标识
   */
  KeyId?: string
  /**
   * 解密后的明文，base64编码
   */
  Plaintext?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelKeyDeletion返回参数结构体
 */
export interface CancelKeyDeletionResponse {
  /**
   * 唯一标志被取消删除的CMK。
   */
  KeyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableKeys请求参数结构体
 */
export interface DisableKeysRequest {
  /**
   * 需要批量禁用的CMK Id 列表，CMK数量最大支持100
   */
  KeyIds: Array<string>
}

/**
 * DisableWhiteBoxKey请求参数结构体
 */
export interface DisableWhiteBoxKeyRequest {
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId: string
}

/**
 * UnbindCloudResource请求参数结构体
 */
export interface UnbindCloudResourceRequest {
  /**
   * cmk的ID
   */
  KeyId: string
  /**
   * 云产品的唯一性标识符
   */
  ProductId: string
  /**
   * 资源/实例ID，由调用方根据自己的云产品特征来定义，以字符串形式做存储。
   */
  ResourceId: string
}

/**
 * OverwriteWhiteBoxDeviceFingerprints请求参数结构体
 */
export interface OverwriteWhiteBoxDeviceFingerprintsRequest {
  /**
   * 白盒密钥ID
   */
  KeyId: string
  /**
   * 设备指纹列表，如果列表为空，则表示删除该密钥对应的所有指纹信息。列表最大长度不超过200。
   */
  DeviceFingerprints?: Array<DeviceFingerprint>
}

/**
 * EnableKeyRotation返回参数结构体
 */
export interface EnableKeyRotationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindCloudResource返回参数结构体
 */
export interface BindCloudResourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableKeys返回参数结构体
 */
export interface EnableKeysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SignByAsymmetricKey请求参数结构体
 */
export interface SignByAsymmetricKeyRequest {
  /**
   * 签名算法，支持的算法：SM2DSA，ECC_P256_R1，RSA_PSS_SHA_256，RSA_PKCS1_SHA_256 等。更多支持的算法可通过 ListAlgorithms 接口进行查询。
   */
  Algorithm: string
  /**
   * 消息原文或消息摘要。如果提供的是消息原文，则消息原文的长度（Base64编码前的长度）不超过4096字节。如果提供的是消息摘要，消息摘要长度（Base64编码前的长度）必须等于32字节
   */
  Message: string
  /**
   * 密钥的唯一标识
   */
  KeyId: string
  /**
   * 消息类型：RAW，DIGEST，如果不传，默认为RAW，表示消息原文。
   */
  MessageType?: string
}

/**
 * DescribeWhiteBoxDeviceFingerprints请求参数结构体
 */
export interface DescribeWhiteBoxDeviceFingerprintsRequest {
  /**
   * 白盒密钥ID
   */
  KeyId: string
}

/**
 * GetRegions请求参数结构体
 */
export type GetRegionsRequest = null

/**
 * PostQuantumCryptoEncrypt返回参数结构体
 */
export interface PostQuantumCryptoEncryptResponse {
  /**
   * 加密后的密文，base64编码。注意：本字段中打包了密文和密钥的相关信息，不是对明文的直接加密结果，只有将该字段作为PostQuantumCryptoDecrypt接口的输入参数，才可以解密出原文。
   */
  CiphertextBlob?: string
  /**
   * 加密使用的CMK的全局唯一标识
   */
  KeyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EncryptByWhiteBox请求参数结构体
 */
export interface EncryptByWhiteBoxRequest {
  /**
   * 白盒密钥的全局唯一标识符
   */
  KeyId: string
  /**
   * 待加密的文本， base64编码，文本的原始长度最大不超过4KB
   */
  PlainText: string
  /**
   * 初始化向量，大小为 16 Bytes，加密算法会使用到, base64编码；如果不传，则由后端服务随机生成。用户需要自行保存该值，作为解密的参数。
   */
  InitializationVector?: string
}

/**
 * GenerateRandom请求参数结构体
 */
export interface GenerateRandomRequest {
  /**
   * 生成的随机数的长度。最小值为1， 最大值为1024。
   */
  NumberOfBytes: number
}

/**
 * ScheduleKeyDeletion请求参数结构体
 */
export interface ScheduleKeyDeletionRequest {
  /**
   * CMK的唯一标志
   */
  KeyId: string
  /**
   * 计划删除时间区间[7,30]
   */
  PendingWindowInDays: number
}

/**
 * PostQuantumCryptoEncrypt请求参数结构体
 */
export interface PostQuantumCryptoEncryptRequest {
  /**
   * 调用CreateKey生成的CMK全局唯一标识符
   */
  KeyId: string
  /**
   * 被加密的明文数据，该字段必须使用base64编码，原文最大长度支持4K
   */
  PlainText: string
}

/**
 * DisableKey请求参数结构体
 */
export interface DisableKeyRequest {
  /**
   * CMK唯一标识符
   */
  KeyId: string
}

/**
 * ImportKeyMaterial返回参数结构体
 */
export interface ImportKeyMaterialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetPublicKey返回参数结构体
 */
export interface GetPublicKeyResponse {
  /**
   * CMK的唯一标识。
   */
  KeyId: string
  /**
   * 经过base64编码的公钥内容。
   */
  PublicKey: string
  /**
   * PEM格式的公钥内容。
   */
  PublicKeyPem: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindCloudResource请求参数结构体
 */
export interface BindCloudResourceRequest {
  /**
   * cmk的ID
   */
  KeyId: string
  /**
   * 云产品的唯一性标识符
   */
  ProductId: string
  /**
   * 资源/实例ID，由调用方根据自己的云产品特征来定义，以字符串形式做存储。
   */
  ResourceId: string
}

/**
 * 标签过滤器
 */
export interface TagFilter {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue?: Array<string>
}

/**
 * PostQuantumCryptoSign返回参数结构体
 */
export interface PostQuantumCryptoSignResponse {
  /**
   * 签名值，Base64编码。可使用 PostQuantumCryptoVerify接口对签名值进行验证。
   */
  Signature?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SignByAsymmetricKey返回参数结构体
 */
export interface SignByAsymmetricKeyResponse {
  /**
   * 签名，Base64编码
   */
  Signature?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PostQuantumCryptoVerify返回参数结构体
 */
export interface PostQuantumCryptoVerifyResponse {
  /**
   * 签名是否有效。true：签名有效，false：签名无效。
   */
  SignatureValid?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteBoxDecryptKey返回参数结构体
 */
export interface DescribeWhiteBoxDecryptKeyResponse {
  /**
   * 白盒解密密钥，base64编码
   */
  DecryptKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteBoxDeviceFingerprints返回参数结构体
 */
export interface DescribeWhiteBoxDeviceFingerprintsResponse {
  /**
   * 设备指纹列表
   */
  DeviceFingerprints?: Array<DeviceFingerprint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PostQuantumCryptoDecrypt返回参数结构体
 */
export interface PostQuantumCryptoDecryptResponse {
  /**
   * CMK的全局唯一标识
   */
  KeyId?: string
  /**
   * 若调用时未提供 EncryptionPublicKey，该字段值为 Base64 编码的明文，需进行 Base64 解码以获取明文。
若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取明文。
   */
  PlainText?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateKeyDescription请求参数结构体
 */
export interface UpdateKeyDescriptionRequest {
  /**
   * 新的描述信息，最大支持1024字节
   */
  Description: string
  /**
   * 需要修改描述信息的CMK ID
   */
  KeyId: string
}

/**
 * UnbindCloudResource返回参数结构体
 */
export interface UnbindCloudResourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKey返回参数结构体
 */
export interface DescribeKeyResponse {
  /**
   * 密钥属性信息
   */
  KeyMetadata?: KeyMetadata
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelKeyArchive请求参数结构体
 */
export interface CancelKeyArchiveRequest {
  /**
   * CMK唯一标识符
   */
  KeyId: string
}

/**
 * DisableKeyRotation请求参数结构体
 */
export interface DisableKeyRotationRequest {
  /**
   * CMK唯一标识符
   */
  KeyId: string
}
