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
const AbstractModel = require("../../common/abstract_model");

/**
 * UpdateAlias请求参数结构体
 * @class
 */
class UpdateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新的别名，1-60个字符或数字的组合
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * CMK的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * EnableWhiteBoxKey请求参数结构体
 * @class
 */
class EnableWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * AsymmetricRsaDecrypt请求参数结构体
 * @class
 */
class AsymmetricRsaDecryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 使用PublicKey加密的密文，Base64编码
         * @type {string || null}
         */
        this.Ciphertext = null;

        /**
         * 在使用公钥加密时对应的算法：当前支持RSAES_PKCS1_V1_5、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256
         * @type {string || null}
         */
        this.Algorithm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Ciphertext = 'Ciphertext' in params ? params.Ciphertext : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;

    }
}

/**
 * EnableKeyRotation请求参数结构体
 * @class
 */
class EnableKeyRotationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DescribeWhiteBoxKeyDetails返回参数结构体
 * @class
 */
class DescribeWhiteBoxKeyDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥信息列表
         * @type {Array.<WhiteboxKeyInfo> || null}
         */
        this.KeyInfos = null;

        /**
         * key总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyInfos) {
            this.KeyInfos = new Array();
            for (let z in params.KeyInfos) {
                let obj = new WhiteboxKeyInfo();
                obj.deserialize(params.KeyInfos[z]);
                this.KeyInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateKey请求参数结构体
 * @class
 */
class CreateKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字。以 kms- 作为前缀的用于云产品使用，Alias 不可重复。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * CMK 的描述，最大1024字节
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 指定key的用途，默认为  "ENCRYPT_DECRYPT" 表示创建对称加解密密钥，其它支持用途 “ASYMMETRIC_DECRYPT_RSA_2048” 表示创建用于加解密的RSA2048非对称密钥，“ASYMMETRIC_DECRYPT_SM2” 表示创建用于加解密的SM2非对称密钥，“ASYMMETRIC_SIGN_VERIFY_SM2” 表示创建用于签名验签的SM2非对称密钥，“ASYMMETRIC_SIGN_VERIFY_ECC” 表示创建用于签名验签的ECC非对称密钥，“ASYMMETRIC_SIGN_VERIFY_RSA_2048” 表示创建用于签名验签的RSA_2048非对称密钥，“ASYMMETRIC_SIGN_VERIFY_ECDSA384”表示创建用于签名验签的 ECDSA384 非对称秘钥。完整的秘钥用途与算法支持列表可通过 ListAlgorithms 接口获取。
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * 指定key类型，默认为1，1表示默认类型，由KMS创建CMK密钥，2 表示EXTERNAL 类型，该类型需要用户导入密钥材料，参考 GetParametersForImport 和 ImportKeyMaterial 接口
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。
         * @type {string || null}
         */
        this.HsmClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HsmClusterId = 'HsmClusterId' in params ? params.HsmClusterId : null;

    }
}

/**
 * DisableWhiteBoxKey返回参数结构体
 * @class
 */
class DisableWhiteBoxKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableKey返回参数结构体
 * @class
 */
class DisableKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteBoxServiceStatus请求参数结构体
 * @class
 */
class DescribeWhiteBoxServiceStatusRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * VerifyByAsymmetricKey请求参数结构体
 * @class
 */
class VerifyByAsymmetricKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥的唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 签名值，通过调用KMS签名接口生成
         * @type {string || null}
         */
        this.SignatureValue = null;

        /**
         * 消息原文或消息摘要。如果提供的是消息原文，则消息原文的长度（Base64编码前的长度）不超过4096字节。如果提供的是消息摘要，则消息摘要长度（Base64编码前的长度）必须等于32字节
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 签名算法，支持的算法：SM2DSA，ECC_P256_R1，RSA_PSS_SHA_256，RSA_PKCS1_SHA_256 等。更多支持的算法可通过 ListAlgorithms 接口进行查询。
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * 消息类型：RAW，DIGEST，如果不传，默认为RAW，表示消息原文。
         * @type {string || null}
         */
        this.MessageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.SignatureValue = 'SignatureValue' in params ? params.SignatureValue : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.MessageType = 'MessageType' in params ? params.MessageType : null;

    }
}

/**
 * DescribeKey请求参数结构体
 * @class
 */
class DescribeKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * 白盒密钥信息
 * @class
 */
class WhiteboxKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字. 不可重复
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 创建者
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * 密钥的描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 密钥创建时间，Unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 白盒密钥的状态， 取值为：Enabled | Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建者
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * 密钥所用的算法类型
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * 白盒加密密钥，base64编码
         * @type {string || null}
         */
        this.EncryptKey = null;

        /**
         * 白盒解密密钥，base64编码
         * @type {string || null}
         */
        this.DecryptKey = null;

        /**
         * 资源ID，格式：creatorUin/$creatorUin/$keyId
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 是否有设备指纹与当前密钥绑定
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeviceFingerprintBind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.DecryptKey = 'DecryptKey' in params ? params.DecryptKey : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.DeviceFingerprintBind = 'DeviceFingerprintBind' in params ? params.DeviceFingerprintBind : null;

    }
}

/**
 * ListAlgorithms返回参数结构体
 * @class
 */
class ListAlgorithmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地区支持的对称加密算法
         * @type {Array.<AlgorithmInfo> || null}
         */
        this.SymmetricAlgorithms = null;

        /**
         * 本地区支持的非对称加密算法
         * @type {Array.<AlgorithmInfo> || null}
         */
        this.AsymmetricAlgorithms = null;

        /**
         * 本地区支持的非对称签名验签算法
         * @type {Array.<AlgorithmInfo> || null}
         */
        this.AsymmetricSignVerifyAlgorithms = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SymmetricAlgorithms) {
            this.SymmetricAlgorithms = new Array();
            for (let z in params.SymmetricAlgorithms) {
                let obj = new AlgorithmInfo();
                obj.deserialize(params.SymmetricAlgorithms[z]);
                this.SymmetricAlgorithms.push(obj);
            }
        }

        if (params.AsymmetricAlgorithms) {
            this.AsymmetricAlgorithms = new Array();
            for (let z in params.AsymmetricAlgorithms) {
                let obj = new AlgorithmInfo();
                obj.deserialize(params.AsymmetricAlgorithms[z]);
                this.AsymmetricAlgorithms.push(obj);
            }
        }

        if (params.AsymmetricSignVerifyAlgorithms) {
            this.AsymmetricSignVerifyAlgorithms = new Array();
            for (let z in params.AsymmetricSignVerifyAlgorithms) {
                let obj = new AlgorithmInfo();
                obj.deserialize(params.AsymmetricSignVerifyAlgorithms[z]);
                this.AsymmetricSignVerifyAlgorithms.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableKeys返回参数结构体
 * @class
 */
class DisableKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteBoxKey返回参数结构体
 * @class
 */
class DescribeWhiteBoxKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥信息
         * @type {WhiteboxKeyInfo || null}
         */
        this.KeyInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyInfo) {
            let obj = new WhiteboxKeyInfo();
            obj.deserialize(params.KeyInfo)
            this.KeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateKeyDescription返回参数结构体
 * @class
 */
class UpdateKeyDescriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteBoxServiceStatus返回参数结构体
 * @class
 */
class DescribeWhiteBoxServiceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户的白盒密钥服务是否可用
         * @type {boolean || null}
         */
        this.ServiceEnabled = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceEnabled = 'ServiceEnabled' in params ? params.ServiceEnabled : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportKeyMaterial请求参数结构体
 * @class
 */
class ImportKeyMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用GetParametersForImport 返回的PublicKey加密后的密钥材料base64编码。对于国密版本region的KMS，导入的密钥材料长度要求为 128 bit，FIPS版本region的KMS， 导入的密钥材料长度要求为 256 bit。
         * @type {string || null}
         */
        this.EncryptedKeyMaterial = null;

        /**
         * 通过调用GetParametersForImport获得的导入令牌。
         * @type {string || null}
         */
        this.ImportToken = null;

        /**
         * 指定导入密钥材料的CMK，需要和GetParametersForImport 指定的CMK相同。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 密钥材料过期时间 unix 时间戳，不指定或者 0 表示密钥材料不会过期，若指定过期时间，需要大于当前时间点，最大支持 2147443200。
         * @type {number || null}
         */
        this.ValidTo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptedKeyMaterial = 'EncryptedKeyMaterial' in params ? params.EncryptedKeyMaterial : null;
        this.ImportToken = 'ImportToken' in params ? params.ImportToken : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ValidTo = 'ValidTo' in params ? params.ValidTo : null;

    }
}

/**
 * EnableKey请求参数结构体
 * @class
 */
class EnableKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetKeyRotationStatus请求参数结构体
 * @class
 */
class GetKeyRotationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * ListAlgorithms请求参数结构体
 * @class
 */
class ListAlgorithmsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 标签键和标签值
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * ListKeyDetail返回参数结构体
 * @class
 */
class ListKeyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的属性信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyMetadata> || null}
         */
        this.KeyMetadatas = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.KeyMetadatas) {
            this.KeyMetadatas = new Array();
            for (let z in params.KeyMetadatas) {
                let obj = new KeyMetadata();
                obj.deserialize(params.KeyMetadatas[z]);
                this.KeyMetadatas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateDataKey请求参数结构体
 * @class
 */
class GenerateDataKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 指定生成Datakey的加密算法以及Datakey大小，AES_128或者AES_256。KeySpec 和 NumberOfBytes 必须指定一个
         * @type {string || null}
         */
        this.KeySpec = null;

        /**
         * 生成的DataKey的长度，同时指定NumberOfBytes和KeySpec时，以NumberOfBytes为准。最小值为1， 最大值为1024。KeySpec 和 NumberOfBytes 必须指定一个
         * @type {number || null}
         */
        this.NumberOfBytes = null;

        /**
         * key/value对的json字符串，如果使用该字段，则返回的DataKey在解密时需要填入相同的字符串
         * @type {string || null}
         */
        this.EncryptionContext = null;

        /**
         * PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。
         * @type {string || null}
         */
        this.EncryptionPublicKey = null;

        /**
         * 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。
         * @type {string || null}
         */
        this.EncryptionAlgorithm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeySpec = 'KeySpec' in params ? params.KeySpec : null;
        this.NumberOfBytes = 'NumberOfBytes' in params ? params.NumberOfBytes : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;
        this.EncryptionPublicKey = 'EncryptionPublicKey' in params ? params.EncryptionPublicKey : null;
        this.EncryptionAlgorithm = 'EncryptionAlgorithm' in params ? params.EncryptionAlgorithm : null;

    }
}

/**
 * UpdateAlias返回参数结构体
 * @class
 */
class UpdateAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScheduleKeyDeletion返回参数结构体
 * @class
 */
class ScheduleKeyDeletionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计划删除执行时间
         * @type {number || null}
         */
        this.DeletionDate = null;

        /**
         * 唯一标志被计划删除的CMK
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeletionDate = 'DeletionDate' in params ? params.DeletionDate : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateRandom返回参数结构体
 * @class
 */
class GenerateRandomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的随机数的明文，该明文使用base64编码，用户需要使用base64解码得到明文。
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKeys请求参数结构体
 * @class
 */
class DescribeKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询CMK的ID列表，批量查询一次最多支持100个KeyId
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * GetPublicKey请求参数结构体
 * @class
 */
class GetPublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识。
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetServiceStatus请求参数结构体
 * @class
 */
class GetServiceStatusRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * EnableWhiteBoxKeys返回参数结构体
 * @class
 */
class EnableWhiteBoxKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ArchiveKey返回参数结构体
 * @class
 */
class ArchiveKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyByAsymmetricKey返回参数结构体
 * @class
 */
class VerifyByAsymmetricKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名是否有效。true：签名有效，false：签名无效。
         * @type {boolean || null}
         */
        this.SignatureValid = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignatureValid = 'SignatureValid' in params ? params.SignatureValid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteBoxKey请求参数结构体
 * @class
 */
class DescribeWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetParametersForImport返回参数结构体
 * @class
 */
class GetParametersForImportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识，用于指定目标导入密钥材料的CMK。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 导入密钥材料需要的token，用于作为 ImportKeyMaterial 的参数。
         * @type {string || null}
         */
        this.ImportToken = null;

        /**
         * 用于加密密钥材料的RSA公钥，base64编码。使用PublicKey base64解码后的公钥将导入密钥进行加密后作为 ImportKeyMaterial 的参数。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 该导出token和公钥的有效期，超过该时间后无法导入，需要重新调用GetParametersForImport获取。
         * @type {number || null}
         */
        this.ParametersValidTo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ImportToken = 'ImportToken' in params ? params.ImportToken : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.ParametersValidTo = 'ParametersValidTo' in params ? params.ParametersValidTo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Decrypt返回参数结构体
 * @class
 */
class DecryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的全局唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 若调用时未提供 EncryptionPublicKey，该字段值为 Base64 编码的明文，需进行 Base64 解码以获取明文。
若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取明文。
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWhiteBoxKey返回参数结构体
 * @class
 */
class CreateWhiteBoxKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于加密的密钥，base64编码
         * @type {string || null}
         */
        this.EncryptKey = null;

        /**
         * 用于解密的密钥，base64编码
         * @type {string || null}
         */
        this.DecryptKey = null;

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * 标签操作的返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.DecryptKey = 'DecryptKey' in params ? params.DecryptKey : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返回CMK列表信息
 * @class
 */
class Key extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的全局唯一标识。
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DeleteImportedKeyMaterial返回参数结构体
 * @class
 */
class DeleteImportedKeyMaterialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableKeys请求参数结构体
 * @class
 */
class EnableKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要批量启用的CMK Id 列表， CMK数量最大支持100
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * EnableWhiteBoxKeys请求参数结构体
 * @class
 */
class EnableWhiteBoxKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符列表。注意：要确保所有提供的KeyId是格式有效的，没有重复，个数不超过50个，并且都是有效存在的。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * EncryptByWhiteBox返回参数结构体
 * @class
 */
class EncryptByWhiteBoxResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 初始化向量，加密算法会使用到, base64编码。如果由调用方在入参中传入，则原样返回。如果调用方没有传入，则后端服务随机生成，并返回
         * @type {string || null}
         */
        this.InitializationVector = null;

        /**
         * 加密后的密文，base64编码
         * @type {string || null}
         */
        this.CipherText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitializationVector = 'InitializationVector' in params ? params.InitializationVector : null;
        this.CipherText = 'CipherText' in params ? params.CipherText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKeys返回参数结构体
 * @class
 */
class DescribeKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的属性信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyMetadata> || null}
         */
        this.KeyMetadatas = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyMetadatas) {
            this.KeyMetadatas = new Array();
            for (let z in params.KeyMetadatas) {
                let obj = new KeyMetadata();
                obj.deserialize(params.KeyMetadatas[z]);
                this.KeyMetadatas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableWhiteBoxKey返回参数结构体
 * @class
 */
class EnableWhiteBoxKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReEncrypt请求参数结构体
 * @class
 */
class ReEncryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要重新加密的密文
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 重新加密使用的CMK，如果为空，则使用密文原有的CMK重新加密（若密钥没有轮换则密文不会刷新）
         * @type {string || null}
         */
        this.DestinationKeyId = null;

        /**
         * CiphertextBlob 密文加密时使用的key/value对的json字符串。如果加密时未使用，则为空
         * @type {string || null}
         */
        this.SourceEncryptionContext = null;

        /**
         * 重新加密使用的key/value对的json字符串，如果使用该字段，则返回的新密文在解密时需要填入相同的字符串
         * @type {string || null}
         */
        this.DestinationEncryptionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.DestinationKeyId = 'DestinationKeyId' in params ? params.DestinationKeyId : null;
        this.SourceEncryptionContext = 'SourceEncryptionContext' in params ? params.SourceEncryptionContext : null;
        this.DestinationEncryptionContext = 'DestinationEncryptionContext' in params ? params.DestinationEncryptionContext : null;

    }
}

/**
 * ListKeys返回参数结构体
 * @class
 */
class ListKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK列表数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Key> || null}
         */
        this.Keys = null;

        /**
         * CMK的总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new Key();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AsymmetricSm2Decrypt返回参数结构体
 * @class
 */
class AsymmetricSm2DecryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 解密后的明文，base64编码
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableKeyRotation返回参数结构体
 * @class
 */
class DisableKeyRotationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableWhiteBoxKeys请求参数结构体
 * @class
 */
class DisableWhiteBoxKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符列表。注意：要确保所有提供的KeyId是格式有效的，没有重复，个数不超过50个，并且都是有效存在的。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * ListKeyDetail请求参数结构体
 * @class
 */
class ListKeyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为10，最大值为200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据创建者角色筛选，默认 0 表示用户自己创建的cmk， 1 表示授权其它云产品自动创建的cmk
         * @type {number || null}
         */
        this.Role = null;

        /**
         * 根据CMK创建时间排序， 0 表示按照降序排序，1表示按照升序排序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 根据CMK状态筛选， 0表示全部CMK， 1 表示仅查询Enabled CMK， 2 表示仅查询Disabled CMK，3 表示查询PendingDelete 状态的CMK(处于计划删除状态的Key)，4 表示查询 PendingImport 状态的CMK，5 表示查询 Archived 状态的 CMK
         * @type {number || null}
         */
        this.KeyState = null;

        /**
         * 根据KeyId或者Alias进行模糊匹配查询
         * @type {string || null}
         */
        this.SearchKeyAlias = null;

        /**
         * 根据CMK类型筛选， "TENCENT_KMS" 表示筛选密钥材料由KMS创建的CMK， "EXTERNAL" 表示筛选密钥材料需要用户导入的 EXTERNAL类型CMK，"ALL" 或者不设置表示两种类型都查询，大小写敏感。
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * 根据CMK的KeyUsage筛选，ALL表示筛选全部，可使用的参数为：ALL 或 ENCRYPT_DECRYPT 或 ASYMMETRIC_DECRYPT_RSA_2048 或 ASYMMETRIC_DECRYPT_SM2 或 ASYMMETRIC_SIGN_VERIFY_SM2 或 ASYMMETRIC_SIGN_VERIFY_RSA_2048 或 ASYMMETRIC_SIGN_VERIFY_ECC，为空则默认筛选ENCRYPT_DECRYPT类型
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * 标签过滤条件
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。
         * @type {string || null}
         */
        this.HsmClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.KeyState = 'KeyState' in params ? params.KeyState : null;
        this.SearchKeyAlias = 'SearchKeyAlias' in params ? params.SearchKeyAlias : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.HsmClusterId = 'HsmClusterId' in params ? params.HsmClusterId : null;

    }
}

/**
 * DeleteWhiteBoxKey请求参数结构体
 * @class
 */
class DeleteWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * 算法的名称 和 标识
 * @class
 */
class AlgorithmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 算法的标识
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * 算法的名称
         * @type {string || null}
         */
        this.Algorithm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;

    }
}

/**
 * GetRegions返回参数结构体
 * @class
 */
class GetRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用region列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Regions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regions = 'Regions' in params ? params.Regions : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateDataKey返回参数结构体
 * @class
 */
class GenerateDataKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的全局唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 若调用时未提供 EncryptionPublicKey，该字段值为生成的数据密钥 DataKey 的 Base64 编码的明文，需进行 Base64 解码以获取 DataKey 明文。
若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取 DataKey 明文。
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * 数据密钥DataKey加密后的密文，用户需要自行保存该密文，KMS不托管用户的数据密钥。可以通过Decrypt接口从CiphertextBlob中获取数据密钥DataKey明文
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWhiteBoxKey请求参数结构体
 * @class
 */
class CreateWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字。Alias不可重复。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 创建密钥所有的算法类型，支持的取值：AES_256,SM4
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * 密钥的描述，最大1024字节
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * OverwriteWhiteBoxDeviceFingerprints返回参数结构体
 * @class
 */
class OverwriteWhiteBoxDeviceFingerprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableWhiteBoxKeys返回参数结构体
 * @class
 */
class DisableWhiteBoxKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ArchiveKey请求参数结构体
 * @class
 */
class ArchiveKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetParametersForImport请求参数结构体
 * @class
 */
class GetParametersForImportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识，获取密钥参数的CMK必须是EXTERNAL类型，即在CreateKey时指定Type=2 类型的CMK。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 指定加密密钥材料的算法，目前支持RSAES_PKCS1_V1_5、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256
         * @type {string || null}
         */
        this.WrappingAlgorithm = null;

        /**
         * 指定加密密钥材料的类型，目前只支持RSA_2048
         * @type {string || null}
         */
        this.WrappingKeySpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.WrappingAlgorithm = 'WrappingAlgorithm' in params ? params.WrappingAlgorithm : null;
        this.WrappingKeySpec = 'WrappingKeySpec' in params ? params.WrappingKeySpec : null;

    }
}

/**
 * CreateKey返回参数结构体
 * @class
 */
class CreateKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 作为密钥更容易辨识，更容易被人看懂的别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 密钥创建时间，unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * CMK的描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * CMK的状态
         * @type {string || null}
         */
        this.KeyState = null;

        /**
         * CMK的用途
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * 标签操作的返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagMsg = null;

        /**
         * HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HsmClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyState = 'KeyState' in params ? params.KeyState : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.HsmClusterId = 'HsmClusterId' in params ? params.HsmClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReEncrypt返回参数结构体
 * @class
 */
class ReEncryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重新加密后的密文
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 重新加密使用的CMK
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 重新加密前密文使用的CMK
         * @type {string || null}
         */
        this.SourceKeyId = null;

        /**
         * true表示密文已经重新加密。同一个CMK进行重加密，在密钥没有发生轮换的情况下不会进行实际重新加密操作，返回原密文
         * @type {boolean || null}
         */
        this.ReEncrypted = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.SourceKeyId = 'SourceKeyId' in params ? params.SourceKeyId : null;
        this.ReEncrypted = 'ReEncrypted' in params ? params.ReEncrypted : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Encrypt返回参数结构体
 * @class
 */
class EncryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加密后的密文，base64编码。注意：本字段中打包了密文和密钥的相关信息，不是对明文的直接加密结果，只有将该字段作为Decrypt接口的输入参数，才可以解密出原文。
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 加密使用的CMK的全局唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelKeyDeletion请求参数结构体
 * @class
 */
class CancelKeyDeletionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要被取消删除的CMK的唯一标志
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DeleteImportedKeyMaterial请求参数结构体
 * @class
 */
class DeleteImportedKeyMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要删除密钥材料的EXTERNAL CMK。
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * EnableKey返回参数结构体
 * @class
 */
class EnableKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetServiceStatus返回参数结构体
 * @class
 */
class GetServiceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * KMS服务是否开通， true 表示已开通
         * @type {boolean || null}
         */
        this.ServiceEnabled = null;

        /**
         * 服务不可用类型： 0-未购买，1-正常， 2-欠费停服， 3-资源释放
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InvalidType = null;

        /**
         * 0-普通版，1-旗舰版
         * @type {number || null}
         */
        this.UserLevel = null;

        /**
         * 旗舰版到期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProExpireTime = null;

        /**
         * 旗舰版是否自动续费：0-不自动续费，1-自动续费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProRenewFlag = null;

        /**
         * 旗舰版购买记录的唯一性标识。如果为开通旗舰版，则返回值为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProResourceId = null;

        /**
         * 是否开通 KMS 托管版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ExclusiveVSMEnabled = null;

        /**
         * 是否开通 KMS 独享版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ExclusiveHSMEnabled = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceEnabled = 'ServiceEnabled' in params ? params.ServiceEnabled : null;
        this.InvalidType = 'InvalidType' in params ? params.InvalidType : null;
        this.UserLevel = 'UserLevel' in params ? params.UserLevel : null;
        this.ProExpireTime = 'ProExpireTime' in params ? params.ProExpireTime : null;
        this.ProRenewFlag = 'ProRenewFlag' in params ? params.ProRenewFlag : null;
        this.ProResourceId = 'ProResourceId' in params ? params.ProResourceId : null;
        this.ExclusiveVSMEnabled = 'ExclusiveVSMEnabled' in params ? params.ExclusiveVSMEnabled : null;
        this.ExclusiveHSMEnabled = 'ExclusiveHSMEnabled' in params ? params.ExclusiveHSMEnabled : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备指纹
 * @class
 */
class DeviceFingerprint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指纹信息，由设备指纹采集工具采集获得，格式满足正则表达式：^[0-9a-f]{8}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{16}$
         * @type {string || null}
         */
        this.Identity = null;

        /**
         * 描述信息，如：IP，设备名称等，最大1024字节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identity = 'Identity' in params ? params.Identity : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * GetKeyRotationStatus返回参数结构体
 * @class
 */
class GetKeyRotationStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥轮换是否开启
         * @type {boolean || null}
         */
        this.KeyRotationEnabled = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyRotationEnabled = 'KeyRotationEnabled' in params ? params.KeyRotationEnabled : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Encrypt请求参数结构体
 * @class
 */
class EncryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用CreateKey生成的CMK全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 被加密的明文数据，该字段必须使用base64编码，原文最大长度支持4K
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * key/value对的json字符串，如果指定了该参数，则在调用Decrypt API时需要提供同样的参数，最大支持1024个字符
         * @type {string || null}
         */
        this.EncryptionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;

    }
}

/**
 * AsymmetricSm2Decrypt请求参数结构体
 * @class
 */
class AsymmetricSm2DecryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 使用PublicKey加密的密文，Base64编码。密文长度不能超过256字节。
         * @type {string || null}
         */
        this.Ciphertext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Ciphertext = 'Ciphertext' in params ? params.Ciphertext : null;

    }
}

/**
 * DeleteWhiteBoxKey返回参数结构体
 * @class
 */
class DeleteWhiteBoxKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListKeys请求参数结构体
 * @class
 */
class ListKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 含义跟 SQL 查询的 Limit 一致，表示本次获最多获取 Limit 个元素。缺省值为10，最大值为200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据创建者角色筛选，默认 0 表示用户自己创建的cmk， 1 表示授权其它云产品自动创建的cmk
         * @type {number || null}
         */
        this.Role = null;

        /**
         * KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。
         * @type {string || null}
         */
        this.HsmClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.HsmClusterId = 'HsmClusterId' in params ? params.HsmClusterId : null;

    }
}

/**
 * DescribeWhiteBoxDecryptKey请求参数结构体
 * @class
 */
class DescribeWhiteBoxDecryptKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * CMK属性信息
 * @class
 */
class KeyMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的全局唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 作为密钥更容易辨识，更容易被人看懂的别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 密钥创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * CMK的描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * CMK的状态， 取值为：Enabled | Disabled | PendingDelete | PendingImport | Archived
         * @type {string || null}
         */
        this.KeyState = null;

        /**
         * CMK用途，取值为: ENCRYPT_DECRYPT | ASYMMETRIC_DECRYPT_RSA_2048 | ASYMMETRIC_DECRYPT_SM2 | ASYMMETRIC_SIGN_VERIFY_SM2 | ASYMMETRIC_SIGN_VERIFY_RSA_2048 | ASYMMETRIC_SIGN_VERIFY_ECC
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * CMK类型，2 表示符合FIPS标准，4表示符合国密标准
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 创建者
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * 是否开启了密钥轮换功能
         * @type {boolean || null}
         */
        this.KeyRotationEnabled = null;

        /**
         * CMK的创建者，用户创建的为 user，授权各云产品自动创建的为对应的产品名
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 在密钥轮换开启状态下，下次轮换的时间
         * @type {number || null}
         */
        this.NextRotateTime = null;

        /**
         * 计划删除的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DeletionDate = null;

        /**
         * CMK 密钥材料类型，由KMS创建的为： TENCENT_KMS， 由用户导入的类型为：EXTERNAL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * 在Origin为  EXTERNAL 时有效，表示密钥材料的有效日期， 0 表示不过期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ValidTo = null;

        /**
         * 资源ID，格式：creatorUin/$creatorUin/$keyId
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HsmClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyState = 'KeyState' in params ? params.KeyState : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.KeyRotationEnabled = 'KeyRotationEnabled' in params ? params.KeyRotationEnabled : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.NextRotateTime = 'NextRotateTime' in params ? params.NextRotateTime : null;
        this.DeletionDate = 'DeletionDate' in params ? params.DeletionDate : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.ValidTo = 'ValidTo' in params ? params.ValidTo : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.HsmClusterId = 'HsmClusterId' in params ? params.HsmClusterId : null;

    }
}

/**
 * CancelKeyArchive返回参数结构体
 * @class
 */
class CancelKeyArchiveResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Decrypt请求参数结构体
 * @class
 */
class DecryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解密的密文数据
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * key/value对的json字符串，如果Encrypt指定了该参数，则在调用Decrypt API时需要提供同样的参数，最大支持1024字符
         * @type {string || null}
         */
        this.EncryptionContext = null;

        /**
         * PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。
         * @type {string || null}
         */
        this.EncryptionPublicKey = null;

        /**
         * 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。
         * @type {string || null}
         */
        this.EncryptionAlgorithm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;
        this.EncryptionPublicKey = 'EncryptionPublicKey' in params ? params.EncryptionPublicKey : null;
        this.EncryptionAlgorithm = 'EncryptionAlgorithm' in params ? params.EncryptionAlgorithm : null;

    }
}

/**
 * DescribeWhiteBoxKeyDetails请求参数结构体
 * @class
 */
class DescribeWhiteBoxKeyDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件：密钥的状态，0：disabled，1：enabled
         * @type {number || null}
         */
        this.KeyStatus = null;

        /**
         * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为0, 表示不分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签过滤条件
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyStatus = 'KeyStatus' in params ? params.KeyStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * AsymmetricRsaDecrypt返回参数结构体
 * @class
 */
class AsymmetricRsaDecryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 解密后的明文，base64编码
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelKeyDeletion返回参数结构体
 * @class
 */
class CancelKeyDeletionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一标志被取消删除的CMK。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableKeys请求参数结构体
 * @class
 */
class DisableKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要批量禁用的CMK Id 列表，CMK数量最大支持100
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * DisableWhiteBoxKey请求参数结构体
 * @class
 */
class DisableWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * UnbindCloudResource请求参数结构体
 * @class
 */
class UnbindCloudResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * cmk的ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 云产品的唯一性标识符
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 资源/实例ID，由调用方根据自己的云产品特征来定义，以字符串形式做存储。
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * OverwriteWhiteBoxDeviceFingerprints请求参数结构体
 * @class
 */
class OverwriteWhiteBoxDeviceFingerprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 设备指纹列表，如果列表为空，则表示删除该密钥对应的所有指纹信息。列表最大长度不超过200。
         * @type {Array.<DeviceFingerprint> || null}
         */
        this.DeviceFingerprints = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

        if (params.DeviceFingerprints) {
            this.DeviceFingerprints = new Array();
            for (let z in params.DeviceFingerprints) {
                let obj = new DeviceFingerprint();
                obj.deserialize(params.DeviceFingerprints[z]);
                this.DeviceFingerprints.push(obj);
            }
        }

    }
}

/**
 * EnableKeyRotation返回参数结构体
 * @class
 */
class EnableKeyRotationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindCloudResource返回参数结构体
 * @class
 */
class BindCloudResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableKeys返回参数结构体
 * @class
 */
class EnableKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SignByAsymmetricKey请求参数结构体
 * @class
 */
class SignByAsymmetricKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名算法，支持的算法：SM2DSA，ECC_P256_R1，RSA_PSS_SHA_256，RSA_PKCS1_SHA_256 等。更多支持的算法可通过 ListAlgorithms 接口进行查询。
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * 消息原文或消息摘要。如果提供的是消息原文，则消息原文的长度（Base64编码前的长度）不超过4096字节。如果提供的是消息摘要，消息摘要长度（Base64编码前的长度）必须等于32字节
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 密钥的唯一标识
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 消息类型：RAW，DIGEST，如果不传，默认为RAW，表示消息原文。
         * @type {string || null}
         */
        this.MessageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.MessageType = 'MessageType' in params ? params.MessageType : null;

    }
}

/**
 * DescribeWhiteBoxDeviceFingerprints请求参数结构体
 * @class
 */
class DescribeWhiteBoxDeviceFingerprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetRegions请求参数结构体
 * @class
 */
class GetRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * EncryptByWhiteBox请求参数结构体
 * @class
 */
class EncryptByWhiteBoxRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒密钥的全局唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 待加密的文本， base64编码，文本的原始长度最大不超过4KB
         * @type {string || null}
         */
        this.PlainText = null;

        /**
         * 初始化向量，大小为 16 Bytes，加密算法会使用到, base64编码；如果不传，则由后端服务随机生成。用户需要自行保存该值，作为解密的参数。
         * @type {string || null}
         */
        this.InitializationVector = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.PlainText = 'PlainText' in params ? params.PlainText : null;
        this.InitializationVector = 'InitializationVector' in params ? params.InitializationVector : null;

    }
}

/**
 * GenerateRandom请求参数结构体
 * @class
 */
class GenerateRandomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的随机数的长度。最小值为1， 最大值为1024。
         * @type {number || null}
         */
        this.NumberOfBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NumberOfBytes = 'NumberOfBytes' in params ? params.NumberOfBytes : null;

    }
}

/**
 * ScheduleKeyDeletion请求参数结构体
 * @class
 */
class ScheduleKeyDeletionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标志
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 计划删除时间区间[7,30]
         * @type {number || null}
         */
        this.PendingWindowInDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.PendingWindowInDays = 'PendingWindowInDays' in params ? params.PendingWindowInDays : null;

    }
}

/**
 * DisableKey请求参数结构体
 * @class
 */
class DisableKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * ImportKeyMaterial返回参数结构体
 * @class
 */
class ImportKeyMaterialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPublicKey返回参数结构体
 * @class
 */
class GetPublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的唯一标识。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 经过base64编码的公钥内容。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * PEM格式的公钥内容。
         * @type {string || null}
         */
        this.PublicKeyPem = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PublicKeyPem = 'PublicKeyPem' in params ? params.PublicKeyPem : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindCloudResource请求参数结构体
 * @class
 */
class BindCloudResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * cmk的ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 云产品的唯一性标识符
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 资源/实例ID，由调用方根据自己的云产品特征来定义，以字符串形式做存储。
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * 标签过滤器
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {Array.<string> || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * SignByAsymmetricKey返回参数结构体
 * @class
 */
class SignByAsymmetricKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名，Base64编码
         * @type {string || null}
         */
        this.Signature = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Signature = 'Signature' in params ? params.Signature : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteBoxDecryptKey返回参数结构体
 * @class
 */
class DescribeWhiteBoxDecryptKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白盒解密密钥，base64编码
         * @type {string || null}
         */
        this.DecryptKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DecryptKey = 'DecryptKey' in params ? params.DecryptKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteBoxDeviceFingerprints返回参数结构体
 * @class
 */
class DescribeWhiteBoxDeviceFingerprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备指纹列表
         * @type {Array.<DeviceFingerprint> || null}
         */
        this.DeviceFingerprints = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceFingerprints) {
            this.DeviceFingerprints = new Array();
            for (let z in params.DeviceFingerprints) {
                let obj = new DeviceFingerprint();
                obj.deserialize(params.DeviceFingerprints[z]);
                this.DeviceFingerprints.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateKeyDescription请求参数结构体
 * @class
 */
class UpdateKeyDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新的描述信息，最大支持1024字节
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 需要修改描述信息的CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * UnbindCloudResource返回参数结构体
 * @class
 */
class UnbindCloudResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKey返回参数结构体
 * @class
 */
class DescribeKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥属性信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KeyMetadata || null}
         */
        this.KeyMetadata = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyMetadata) {
            let obj = new KeyMetadata();
            obj.deserialize(params.KeyMetadata)
            this.KeyMetadata = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelKeyArchive请求参数结构体
 * @class
 */
class CancelKeyArchiveRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DisableKeyRotation请求参数结构体
 * @class
 */
class DisableKeyRotationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK唯一标识符
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

module.exports = {
    UpdateAliasRequest: UpdateAliasRequest,
    EnableWhiteBoxKeyRequest: EnableWhiteBoxKeyRequest,
    AsymmetricRsaDecryptRequest: AsymmetricRsaDecryptRequest,
    EnableKeyRotationRequest: EnableKeyRotationRequest,
    DescribeWhiteBoxKeyDetailsResponse: DescribeWhiteBoxKeyDetailsResponse,
    CreateKeyRequest: CreateKeyRequest,
    DisableWhiteBoxKeyResponse: DisableWhiteBoxKeyResponse,
    DisableKeyResponse: DisableKeyResponse,
    DescribeWhiteBoxServiceStatusRequest: DescribeWhiteBoxServiceStatusRequest,
    VerifyByAsymmetricKeyRequest: VerifyByAsymmetricKeyRequest,
    DescribeKeyRequest: DescribeKeyRequest,
    WhiteboxKeyInfo: WhiteboxKeyInfo,
    ListAlgorithmsResponse: ListAlgorithmsResponse,
    DisableKeysResponse: DisableKeysResponse,
    DescribeWhiteBoxKeyResponse: DescribeWhiteBoxKeyResponse,
    UpdateKeyDescriptionResponse: UpdateKeyDescriptionResponse,
    DescribeWhiteBoxServiceStatusResponse: DescribeWhiteBoxServiceStatusResponse,
    ImportKeyMaterialRequest: ImportKeyMaterialRequest,
    EnableKeyRequest: EnableKeyRequest,
    GetKeyRotationStatusRequest: GetKeyRotationStatusRequest,
    ListAlgorithmsRequest: ListAlgorithmsRequest,
    Tag: Tag,
    ListKeyDetailResponse: ListKeyDetailResponse,
    GenerateDataKeyRequest: GenerateDataKeyRequest,
    UpdateAliasResponse: UpdateAliasResponse,
    ScheduleKeyDeletionResponse: ScheduleKeyDeletionResponse,
    GenerateRandomResponse: GenerateRandomResponse,
    DescribeKeysRequest: DescribeKeysRequest,
    GetPublicKeyRequest: GetPublicKeyRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    EnableWhiteBoxKeysResponse: EnableWhiteBoxKeysResponse,
    ArchiveKeyResponse: ArchiveKeyResponse,
    VerifyByAsymmetricKeyResponse: VerifyByAsymmetricKeyResponse,
    DescribeWhiteBoxKeyRequest: DescribeWhiteBoxKeyRequest,
    GetParametersForImportResponse: GetParametersForImportResponse,
    DecryptResponse: DecryptResponse,
    CreateWhiteBoxKeyResponse: CreateWhiteBoxKeyResponse,
    Key: Key,
    DeleteImportedKeyMaterialResponse: DeleteImportedKeyMaterialResponse,
    EnableKeysRequest: EnableKeysRequest,
    EnableWhiteBoxKeysRequest: EnableWhiteBoxKeysRequest,
    EncryptByWhiteBoxResponse: EncryptByWhiteBoxResponse,
    DescribeKeysResponse: DescribeKeysResponse,
    EnableWhiteBoxKeyResponse: EnableWhiteBoxKeyResponse,
    ReEncryptRequest: ReEncryptRequest,
    ListKeysResponse: ListKeysResponse,
    AsymmetricSm2DecryptResponse: AsymmetricSm2DecryptResponse,
    DisableKeyRotationResponse: DisableKeyRotationResponse,
    DisableWhiteBoxKeysRequest: DisableWhiteBoxKeysRequest,
    ListKeyDetailRequest: ListKeyDetailRequest,
    DeleteWhiteBoxKeyRequest: DeleteWhiteBoxKeyRequest,
    AlgorithmInfo: AlgorithmInfo,
    GetRegionsResponse: GetRegionsResponse,
    GenerateDataKeyResponse: GenerateDataKeyResponse,
    CreateWhiteBoxKeyRequest: CreateWhiteBoxKeyRequest,
    OverwriteWhiteBoxDeviceFingerprintsResponse: OverwriteWhiteBoxDeviceFingerprintsResponse,
    DisableWhiteBoxKeysResponse: DisableWhiteBoxKeysResponse,
    ArchiveKeyRequest: ArchiveKeyRequest,
    GetParametersForImportRequest: GetParametersForImportRequest,
    CreateKeyResponse: CreateKeyResponse,
    ReEncryptResponse: ReEncryptResponse,
    EncryptResponse: EncryptResponse,
    CancelKeyDeletionRequest: CancelKeyDeletionRequest,
    DeleteImportedKeyMaterialRequest: DeleteImportedKeyMaterialRequest,
    EnableKeyResponse: EnableKeyResponse,
    GetServiceStatusResponse: GetServiceStatusResponse,
    DeviceFingerprint: DeviceFingerprint,
    GetKeyRotationStatusResponse: GetKeyRotationStatusResponse,
    EncryptRequest: EncryptRequest,
    AsymmetricSm2DecryptRequest: AsymmetricSm2DecryptRequest,
    DeleteWhiteBoxKeyResponse: DeleteWhiteBoxKeyResponse,
    ListKeysRequest: ListKeysRequest,
    DescribeWhiteBoxDecryptKeyRequest: DescribeWhiteBoxDecryptKeyRequest,
    KeyMetadata: KeyMetadata,
    CancelKeyArchiveResponse: CancelKeyArchiveResponse,
    DecryptRequest: DecryptRequest,
    DescribeWhiteBoxKeyDetailsRequest: DescribeWhiteBoxKeyDetailsRequest,
    AsymmetricRsaDecryptResponse: AsymmetricRsaDecryptResponse,
    CancelKeyDeletionResponse: CancelKeyDeletionResponse,
    DisableKeysRequest: DisableKeysRequest,
    DisableWhiteBoxKeyRequest: DisableWhiteBoxKeyRequest,
    UnbindCloudResourceRequest: UnbindCloudResourceRequest,
    OverwriteWhiteBoxDeviceFingerprintsRequest: OverwriteWhiteBoxDeviceFingerprintsRequest,
    EnableKeyRotationResponse: EnableKeyRotationResponse,
    BindCloudResourceResponse: BindCloudResourceResponse,
    EnableKeysResponse: EnableKeysResponse,
    SignByAsymmetricKeyRequest: SignByAsymmetricKeyRequest,
    DescribeWhiteBoxDeviceFingerprintsRequest: DescribeWhiteBoxDeviceFingerprintsRequest,
    GetRegionsRequest: GetRegionsRequest,
    EncryptByWhiteBoxRequest: EncryptByWhiteBoxRequest,
    GenerateRandomRequest: GenerateRandomRequest,
    ScheduleKeyDeletionRequest: ScheduleKeyDeletionRequest,
    DisableKeyRequest: DisableKeyRequest,
    ImportKeyMaterialResponse: ImportKeyMaterialResponse,
    GetPublicKeyResponse: GetPublicKeyResponse,
    BindCloudResourceRequest: BindCloudResourceRequest,
    TagFilter: TagFilter,
    SignByAsymmetricKeyResponse: SignByAsymmetricKeyResponse,
    DescribeWhiteBoxDecryptKeyResponse: DescribeWhiteBoxDecryptKeyResponse,
    DescribeWhiteBoxDeviceFingerprintsResponse: DescribeWhiteBoxDeviceFingerprintsResponse,
    UpdateKeyDescriptionRequest: UpdateKeyDescriptionRequest,
    UnbindCloudResourceResponse: UnbindCloudResourceResponse,
    DescribeKeyResponse: DescribeKeyResponse,
    CancelKeyArchiveRequest: CancelKeyArchiveRequest,
    DisableKeyRotationRequest: DisableKeyRotationRequest,

}
