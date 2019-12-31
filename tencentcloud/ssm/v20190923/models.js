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
 * DeleteSecretVersion返回参数结构体
 * @class
 */
class DeleteSecretVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 凭据版本号。
         * @type {string || null}
         */
        this.VersionId = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreSecret返回参数结构体
 * @class
 */
class RestoreSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDescription返回参数结构体
 * @class
 */
class UpdateDescriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecret返回参数结构体
 * @class
 */
class DescribeSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 凭据描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用于加密的KMS CMK ID。
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * 创建者UIN。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 凭据状态：Enabled、Disabled、PendingDelete
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 删除日期，uinx 时间戳，非计划删除状态的凭据为0。
         * @type {number || null}
         */
        this.DeleteTime = null;

        /**
         * 创建日期。
         * @type {number || null}
         */
        this.CreateTime = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecret请求参数结构体
 * @class
 */
class DeleteSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要删除的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 指定计划删除日期，单位（天），0（默认）表示立即删除， 1-30 表示预留的天数，超出该日期之后彻底删除。
         * @type {number || null}
         */
        this.RecoveryWindowInDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RecoveryWindowInDays = 'RecoveryWindowInDays' in params ? params.RecoveryWindowInDays : null;

    }
}

/**
 * CreateSecret请求参数结构体
 * @class
 */
class CreateSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 凭据版本，查询凭据信息时需要根据SecretName 和 VersionId进行查询，最长64 字节，使用字母、数字或者 - _ . 的组合并且以字母或数字开头。
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 描述信息，用于详细描述用途等，最大支持2048字节。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 指定对凭据进行加密的KMS CMK。如果为空则表示使用Secrets Manager为您默认创建的CMK进行加密。您也可以指定在同region 下自行创建的KMS CMK进行加密。
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * 二进制凭据信息base64编码后的明文。SecretBinary 和 SecretString 必须且只能设置一个，最大支持4096字节。
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * 文本类型凭据信息明文（不需要进行base64编码）。SecretBinary 和 SecretString 必须且只能设置一个，，最大支持4096字节。
         * @type {string || null}
         */
        this.SecretString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;

    }
}

/**
 * GetSecretValue返回参数结构体
 * @class
 */
class GetSecretValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据的名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 该凭据对应的版本号。
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 在创建凭据(CreateSecret)时，如果指定的是二进制数据，则该字段为返回结果，并且使用base64进行编码，应用方需要进行base64解码后获取原始数据。SecretBinary和SecretString只有一个不为空。
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * 在创建凭据(CreateSecret)时，如果指定的是普通文本数据，则该字段为返回结果。SecretBinary和SecretString只有一个不为空。
         * @type {string || null}
         */
        this.SecretString = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * region列表。
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
 * DeleteSecretVersion请求参数结构体
 * @class
 */
class DeleteSecretVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 指定该名称下需要删除的凭据的版本号。
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * 凭据的基础信息
 * @class
 */
class SecretMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 凭据的描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用于加密凭据的KMS KeyId。
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * 创建者UIN。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 凭据状态：Enabled、Disabled、PendingDelete
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 凭据删除日期，对于status为PendingDelete 的有效，unix时间戳。
         * @type {number || null}
         */
        this.DeleteTime = null;

        /**
         * 凭据创建时间，unix时间戳。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 用于加密凭据的KMS CMK类型，DEFAULT 表示SecretsManager 创建的默认密钥， CUSTOMER 表示用户指定的密钥。
         * @type {string || null}
         */
        this.KmsKeyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.KmsKeyType = 'KmsKeyType' in params ? params.KmsKeyType : null;

    }
}

/**
 * ListSecretVersionIds请求参数结构体
 * @class
 */
class ListSecretVersionIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * CreateSecret返回参数结构体
 * @class
 */
class CreateSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 新创建的凭据版本。
         * @type {string || null}
         */
        this.VersionId = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpdateSecret返回参数结构体
 * @class
 */
class UpdateSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 凭据版本号。
         * @type {string || null}
         */
        this.VersionId = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableSecret返回参数结构体
 * @class
 */
class DisableSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 停用的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListSecrets请求参数结构体
 * @class
 */
class ListSecretsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询列表的起始位置，以0开始，不设置默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次查询返回的最大数量，0或不设置则使用默认值 20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据创建时间的排序方式，0或者不设置则使用降序排序， 1 表示升序排序。
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 根据凭据状态进行过滤，默认为0表示查询全部，1 表示查询Enabed 凭据列表，2表示查询Disabled 凭据列表， 3 表示查询PendingDelete 凭据列表。
         * @type {number || null}
         */
        this.State = null;

        /**
         * 根据凭据名称进行过滤，为空表示不过滤。
         * @type {string || null}
         */
        this.SearchSecretName = null;

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
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.State = 'State' in params ? params.State : null;
        this.SearchSecretName = 'SearchSecretName' in params ? params.SearchSecretName : null;

    }
}

/**
 * UpdateDescription请求参数结构体
 * @class
 */
class UpdateDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要更新描述信息的凭据名。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 新的描述信息，最大长度2048个字节。
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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * EnableSecret返回参数结构体
 * @class
 */
class EnableSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateSecret请求参数结构体
 * @class
 */
class UpdateSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要更新凭据内容的名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 指定需要更新凭据内容的版本号。
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 新的凭据内容为二进制的场景使用该字段，并使用base64进行编码。SecretBinary 和 SecretString 只能一个不为空。
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * 新的凭据内容为文本的场景使用该字段，不需要base64编码。SecretBinary 和 SecretString 只能一个不为空。
         * @type {string || null}
         */
        this.SecretString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;

    }
}

/**
 * 凭据版本号列表信息
 * @class
 */
class VersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本号。
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 创建时间，unix时间戳。
         * @type {number || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * PutSecretValue请求参数结构体
 * @class
 */
class PutSecretValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要增加版本的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 指定新增加的版本号，最长64 字节，使用字母、数字或者 - _ . 的组合并且以字母或数字开头。
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 二进制凭据信息，使用base64编码。SecretBinary 和 SecretString 必须且只能设置一个。
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * 文本类型凭据信息明文（不需要进行base64编码），SecretBinary 和 SecretString 必须且只能设置一个。
         * @type {string || null}
         */
        this.SecretString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;

    }
}

/**
 * GetSecretValue请求参数结构体
 * @class
 */
class GetSecretValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定凭据的名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 指定对应凭据的版本号。
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

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
         * true表示服务已开通，false 表示服务尚未开通。
         * @type {boolean || null}
         */
        this.ServiceEnabled = null;

        /**
         * 服务不可用类型： 0-未购买，1-正常， 2-欠费停服， 3-资源释放。
         * @type {number || null}
         */
        this.InvalidType = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreSecret请求参数结构体
 * @class
 */
class RestoreSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要恢复的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * DescribeSecret请求参数结构体
 * @class
 */
class DescribeSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要获取凭据详细信息的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * PutSecretValue返回参数结构体
 * @class
 */
class PutSecretValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 新增加的版本号。
         * @type {string || null}
         */
        this.VersionId = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecret返回参数结构体
 * @class
 */
class DeleteSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定删除的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 凭据删除的日期，unix时间戳。
         * @type {number || null}
         */
        this.DeleteTime = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableSecret请求参数结构体
 * @class
 */
class DisableSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定停用的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * ListSecrets返回参数结构体
 * @class
 */
class ListSecretsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据State和SearchSecretName 筛选的凭据总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回凭据信息列表。
         * @type {Array.<SecretMetadata> || null}
         */
        this.SecretMetadatas = null;

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

        if (params.SecretMetadatas) {
            this.SecretMetadatas = new Array();
            for (let z in params.SecretMetadatas) {
                let obj = new SecretMetadata();
                obj.deserialize(params.SecretMetadatas[z]);
                this.SecretMetadatas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableSecret请求参数结构体
 * @class
 */
class EnableSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定启用凭据的名称。
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

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
 * ListSecretVersionIds返回参数结构体
 * @class
 */
class ListSecretVersionIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * VersionId列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VersionInfo> || null}
         */
        this.Versions = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new VersionInfo();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteSecretVersionResponse: DeleteSecretVersionResponse,
    RestoreSecretResponse: RestoreSecretResponse,
    UpdateDescriptionResponse: UpdateDescriptionResponse,
    DescribeSecretResponse: DescribeSecretResponse,
    DeleteSecretRequest: DeleteSecretRequest,
    CreateSecretRequest: CreateSecretRequest,
    GetSecretValueResponse: GetSecretValueResponse,
    GetRegionsResponse: GetRegionsResponse,
    DeleteSecretVersionRequest: DeleteSecretVersionRequest,
    SecretMetadata: SecretMetadata,
    ListSecretVersionIdsRequest: ListSecretVersionIdsRequest,
    CreateSecretResponse: CreateSecretResponse,
    GetRegionsRequest: GetRegionsRequest,
    UpdateSecretResponse: UpdateSecretResponse,
    DisableSecretResponse: DisableSecretResponse,
    ListSecretsRequest: ListSecretsRequest,
    UpdateDescriptionRequest: UpdateDescriptionRequest,
    EnableSecretResponse: EnableSecretResponse,
    UpdateSecretRequest: UpdateSecretRequest,
    VersionInfo: VersionInfo,
    PutSecretValueRequest: PutSecretValueRequest,
    GetSecretValueRequest: GetSecretValueRequest,
    GetServiceStatusResponse: GetServiceStatusResponse,
    RestoreSecretRequest: RestoreSecretRequest,
    DescribeSecretRequest: DescribeSecretRequest,
    PutSecretValueResponse: PutSecretValueResponse,
    DeleteSecretResponse: DeleteSecretResponse,
    DisableSecretRequest: DisableSecretRequest,
    ListSecretsResponse: ListSecretsResponse,
    EnableSecretRequest: EnableSecretRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    ListSecretVersionIdsResponse: ListSecretVersionIdsResponse,

}
