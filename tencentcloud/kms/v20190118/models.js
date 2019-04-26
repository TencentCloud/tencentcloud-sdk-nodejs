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
 * UpdateAlias请求参数结构体
 * @class
 */
class UpdateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新的别名，1-64个字符或数字的组合
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
         * 生成的DataKey的明文，该明文使用base64编码，用户需要使用base64解码得到明文
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * DataKey加密后的密文，用户需要自行保存密文
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
 * CreateKey请求参数结构体
 * @class
 */
class CreateKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字符或数字的组合
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * CMK 的描述，最大1024字节
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 指定key的用途。目前，仅支持"ENCRYPT_DECRYPT"，默认为  "ENCRYPT_DECRYPT"，即key用于加密和解密
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * 指定key类型，1为当前地域默认类型，默认为1，且当前只支持该类型
         * @type {number || null}
         */
        this.Type = null;

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
         * 加密后的密文
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
         * 解密后的明文。该字段是base64编码的，为了得到原始明文，调用方需要进行base64解码
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
         * 返回的属性信息列表，此字段可能返回 null，表示取不到有效值。
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
         * 指定生成Datakey的加密算法以及Datakey大小，AES_128或者AES_256。默认为AES_256
         * @type {string || null}
         */
        this.KeySpec = null;

        /**
         * 生成的DataKey的长度，同时指定NumberOfBytes和KeySpec时，以NumberOfBytes为准。最小值为1， 最大值为1024
         * @type {number || null}
         */
        this.NumberOfBytes = null;

        /**
         * key/value对的json字符串，如果使用该字段，则返回的DataKey在解密时需要填入相同的字符串
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
        this.KeySpec = 'KeySpec' in params ? params.KeySpec : null;
        this.NumberOfBytes = 'NumberOfBytes' in params ? params.NumberOfBytes : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;

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
         * CMK的状态， Enabled 或者 Disabled 或者 Deleted
         * @type {string || null}
         */
        this.KeyState = null;

        /**
         * CMK用途，当前是 ENCRYPT_DECRYPT
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * CMK类型，当前为 1 普通类型
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
 * Decrypt请求参数结构体
 * @class
 */
class DecryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被加密的密文数据
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * key/value对的json字符串，如果Encrypt指定了该参数，则在调用Decrypt API时需要提供同样的参数，最大支持1024字符
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
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;

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
         * 根据CMK创建时间排序， 0 表示按照降序排序，1表示按照升序排序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 根据CMK状态筛选， 0表示全部CMK， 1 表示仅查询Enabled CMK， 2 表示仅查询Disabled CMK
         * @type {number || null}
         */
        this.KeyState = null;

        /**
         * 根据KeyId或者Alias进行模糊匹配查询
         * @type {string || null}
         */
        this.SearchKeyAlias = null;

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
         * 需要修改描述信息的的CMK ID
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
    DisableKeysRequest: DisableKeysRequest,
    UpdateAliasRequest: UpdateAliasRequest,
    ReEncryptRequest: ReEncryptRequest,
    UpdateKeyDescriptionResponse: UpdateKeyDescriptionResponse,
    GenerateDataKeyResponse: GenerateDataKeyResponse,
    EnableKeyRotationRequest: EnableKeyRotationRequest,
    EnableKeyRotationResponse: EnableKeyRotationResponse,
    CreateKeyRequest: CreateKeyRequest,
    EnableKeysResponse: EnableKeysResponse,
    DisableKeyResponse: DisableKeyResponse,
    CreateKeyResponse: CreateKeyResponse,
    ReEncryptResponse: ReEncryptResponse,
    EncryptResponse: EncryptResponse,
    EnableKeyResponse: EnableKeyResponse,
    GetServiceStatusResponse: GetServiceStatusResponse,
    Key: Key,
    GetKeyRotationStatusResponse: GetKeyRotationStatusResponse,
    EnableKeysRequest: EnableKeysRequest,
    EncryptRequest: EncryptRequest,
    DecryptResponse: DecryptResponse,
    EnableKeyRequest: EnableKeyRequest,
    GetKeyRotationStatusRequest: GetKeyRotationStatusRequest,
    DescribeKeysResponse: DescribeKeysResponse,
    ListKeyDetailResponse: ListKeyDetailResponse,
    GenerateDataKeyRequest: GenerateDataKeyRequest,
    ListKeysRequest: ListKeysRequest,
    ListKeysResponse: ListKeysResponse,
    KeyMetadata: KeyMetadata,
    DisableKeysResponse: DisableKeysResponse,
    DisableKeyRotationResponse: DisableKeyRotationResponse,
    UpdateAliasResponse: UpdateAliasResponse,
    DecryptRequest: DecryptRequest,
    ListKeyDetailRequest: ListKeyDetailRequest,
    UpdateKeyDescriptionRequest: UpdateKeyDescriptionRequest,
    DisableKeyRequest: DisableKeyRequest,
    DescribeKeyResponse: DescribeKeyResponse,
    DescribeKeyRequest: DescribeKeyRequest,
    DescribeKeysRequest: DescribeKeysRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    DisableKeyRotationRequest: DisableKeyRotationRequest,

}
