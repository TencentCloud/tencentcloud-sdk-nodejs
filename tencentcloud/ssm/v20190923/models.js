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
         * 凭据状态：Enabled、Disabled、PendingDelete, Creating, Failed。
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
         * 0 --  用户自定义凭据类型；1 -- 数据库凭据类型；2 -- SSH密钥对凭据类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SecretType = null;

        /**
         * 云产品名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 云产品实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceID = null;

        /**
         * 是否开启轮转：True -- 开启轮转；False -- 关闭轮转。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RotationStatus = null;

        /**
         * 轮转周期，默认以天为单位。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RotationFrequency = null;

        /**
         * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对凭据的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所属的项目ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所关联的CVM实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIDs = null;

        /**
         * 当凭据类型为云API密钥对凭据时，此字段有效，用于表示此云API密钥对所属的用户UIN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetUin = null;

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
        this.SecretType = 'SecretType' in params ? params.SecretType : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceID = 'ResourceID' in params ? params.ResourceID : null;
        this.RotationStatus = 'RotationStatus' in params ? params.RotationStatus : null;
        this.RotationFrequency = 'RotationFrequency' in params ? params.RotationFrequency : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.AssociatedInstanceIDs = 'AssociatedInstanceIDs' in params ? params.AssociatedInstanceIDs : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSupportedProducts请求参数结构体
 * @class
 */
class DescribeSupportedProductsRequest extends  AbstractModel {
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
对于云产品凭据如Mysql凭据，通过指定凭据名称和历史版本号来获取历史轮转凭据的明文信息，如果要获取当前正在使用的凭据版本的明文，需要将版本号指定为：SSM_Current。
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
当凭据类型为SSH密钥对凭据时，此字段只能取值只能为0。
         * @type {number || null}
         */
        this.RecoveryWindowInDays = null;

        /**
         * 当凭据类型为SSH密钥对凭据时，此字段有效，取值：
True -- 表示不仅仅清理此凭据中存储的SSH密钥信息，还会将SSH密钥对从CVM侧进行清理。注意，如果SSH密钥此时绑定了CVM实例，那么会清理失败。
False --  表示仅仅清理此凭据中存储的SSH密钥信息，不在CVM进侧进行清理。
         * @type {boolean || null}
         */
        this.CleanSSHKey = null;

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
        this.CleanSSHKey = 'CleanSSHKey' in params ? params.CleanSSHKey : null;

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
         * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。一旦创建不可修改。
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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;

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
 * RotateProductSecret请求参数结构体
 * @class
 */
class RotateProductSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要轮转的凭据名。
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
 * CreateProductSecret请求参数结构体
 * @class
 */
class CreateProductSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 用户账号名前缀，由用户自行指定，长度限定在8个字符以内，
可选字符集包括：
数字字符：[0, 9]，
小写字符：[a, z]，
大写字符：[A, Z]，
特殊字符(全英文符号)：下划线(_)，
前缀必须以大写或小写字母开头。
         * @type {string || null}
         */
        this.UserNamePrefix = null;

        /**
         * 凭据所绑定的云产品名称，如Mysql，可以通过DescribeSupportedProducts接口获取所支持的云产品名称。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 云产品实例ID。
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 账号的域名，IP形式，支持填入%。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 将凭据与云产品实例绑定时，需要授予的权限列表。
         * @type {Array.<ProductPrivilegeUnit> || null}
         */
        this.PrivilegesList = null;

        /**
         * 描述信息，用于详细描述用途等，最大支持2048字节。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 指定对凭据进行加密的KMS CMK。
如果为空则表示使用Secrets Manager为您默认创建的CMK进行加密。
您也可以指定在同region 下自行创建的KMS CMK进行加密。
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * 标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 用户自定义的开始轮转时间，格式：2006-01-02 15:04:05。
当EnableRotation为True时，此参数必填。
         * @type {string || null}
         */
        this.RotationBeginTime = null;

        /**
         * 是否开启轮转
True -- 开启
False -- 不开启
如果不指定，默认为False。
         * @type {boolean || null}
         */
        this.EnableRotation = null;

        /**
         * 轮转周期，以天为单位，默认为1天。
         * @type {number || null}
         */
        this.RotationFrequency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.UserNamePrefix = 'UserNamePrefix' in params ? params.UserNamePrefix : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.PrivilegesList) {
            this.PrivilegesList = new Array();
            for (let z in params.PrivilegesList) {
                let obj = new ProductPrivilegeUnit();
                obj.deserialize(params.PrivilegesList[z]);
                this.PrivilegesList.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RotationBeginTime = 'RotationBeginTime' in params ? params.RotationBeginTime : null;
        this.EnableRotation = 'EnableRotation' in params ? params.EnableRotation : null;
        this.RotationFrequency = 'RotationFrequency' in params ? params.RotationFrequency : null;

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
         * 在创建凭据(CreateSecret)时，如果指定的是二进制数据，则该字段为返回结果，并且使用base64进行编码，应用方需要进行base64解码后获取原始数据。
SecretBinary和SecretString只有一个不为空。
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * 在创建凭据(CreateSecret)时，如果指定的是普通文本数据，则该字段为返回结果。
SecretBinary和SecretString只有一个不为空。
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
 * DescribeSupportedProducts返回参数结构体
 * @class
 */
class DescribeSupportedProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的产品列表。
         * @type {Array.<string> || null}
         */
        this.Products = null;

        /**
         * 支持的产品个数
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
        this.Products = 'Products' in params ? params.Products : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * 凭据名称
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 凭据的描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用于加密凭据的KMS KeyId
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * 创建者UIN
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 凭据状态：Enabled、Disabled、PendingDelete、Creating、Failed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 凭据删除日期，对于status为PendingDelete 的有效，unix时间戳
         * @type {number || null}
         */
        this.DeleteTime = null;

        /**
         * 凭据创建时间，unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 用于加密凭据的KMS CMK类型，DEFAULT 表示SecretsManager 创建的默认密钥， CUSTOMER 表示用户指定的密钥
         * @type {string || null}
         */
        this.KmsKeyType = null;

        /**
         * 1:--开启轮转；0--禁止轮转
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RotationStatus = null;

        /**
         * 下一次轮转开始时间，uinx 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NextRotationTime = null;

        /**
         * 0 -- 用户自定义凭据；
1 -- 云产品凭据；
2 -- SSH密钥对凭据；
3 -- 云API密钥对凭据；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SecretType = null;

        /**
         * 云产品名称，仅在SecretType为1，即凭据类型为云产品凭据时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对凭据的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所属的项目ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所关联的CVM实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIDs = null;

        /**
         * 当凭据类型为云API密钥对凭据时，此字段有效，用于表示云API密钥对所属的用户UIN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetUin = null;

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
        this.RotationStatus = 'RotationStatus' in params ? params.RotationStatus : null;
        this.NextRotationTime = 'NextRotationTime' in params ? params.NextRotationTime : null;
        this.SecretType = 'SecretType' in params ? params.SecretType : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.AssociatedInstanceIDs = 'AssociatedInstanceIDs' in params ? params.AssociatedInstanceIDs : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

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
 * DescribeRotationDetail请求参数结构体
 * @class
 */
class DescribeRotationDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要获取凭据轮转详细信息的凭据名称。
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
 * CreateSSHKeyPairSecret返回参数结构体
 * @class
 */
class CreateSSHKeyPairSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 创建的SSH密钥ID。
         * @type {string || null}
         */
        this.SSHKeyID = null;

        /**
         * 创建的SSH密钥名称。
         * @type {string || null}
         */
        this.SSHKeyName = null;

        /**
         * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * 标签操作的返回信息。
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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.SSHKeyID = 'SSHKeyID' in params ? params.SSHKeyID : null;
        this.SSHKeyName = 'SSHKeyName' in params ? params.SSHKeyName : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRotationStatus返回参数结构体
 * @class
 */
class UpdateRotationStatusResponse extends  AbstractModel {
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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
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
         * 根据凭据状态进行过滤。
默认为0表示查询全部。
1 --  表示查询Enabled 凭据列表。
2 --  表示查询Disabled 凭据列表。
3 --  表示查询PendingDelete 凭据列表。
4 --  表示PendingCreate。
5 --  表示CreateFailed。
其中状态PendingCreate和CreateFailed只有在SecretType为云产品凭据时生效
         * @type {number || null}
         */
        this.State = null;

        /**
         * 根据凭据名称进行过滤，为空表示不过滤。
         * @type {string || null}
         */
        this.SearchSecretName = null;

        /**
         * 标签过滤条件。
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 0  -- 表示用户自定义凭据，默认为0。
1  -- 表示用户云产品凭据。
2 -- 表示SSH密钥对凭据。
3 -- 表示云API密钥对凭据。
         * @type {number || null}
         */
        this.SecretType = null;

        /**
         * 此参数仅在SecretType参数值为1时生效，
当SecretType值为1时：
如果ProductName值为空，则表示查询所有类型的云产品凭据
如果ProductName值为Mysql，则表示查询Mysql数据库凭据
如果ProductName值为Tdsql-mysql，则表示查询Tdsql（Mysql版本）的凭据
         * @type {string || null}
         */
        this.ProductName = null;

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

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.SecretType = 'SecretType' in params ? params.SecretType : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

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
 * CreateSSHKeyPairSecret请求参数结构体
 * @class
 */
class CreateSSHKeyPairSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 密钥对创建后所属的项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 描述信息，用于详细描述用途等，最大支持2048字节。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 指定对凭据进行加密的KMS CMK。
如果为空则表示使用Secrets Manager为您默认创建的CMK进行加密。
您也可以指定在同region 下自行创建的KMS CMK进行加密。
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * 标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 用户自定义输入的SSH密钥对的名称，可由数字，字母和下划线组成，只能以数字和字母开头，长度不超过25个字符。
         * @type {string || null}
         */
        this.SSHKeyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SSHKeyName = 'SSHKeyName' in params ? params.SSHKeyName : null;

    }
}

/**
 * UpdateRotationStatus请求参数结构体
 * @class
 */
class UpdateRotationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云产品凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 是否开启轮转。
true -- 开启轮转；
false -- 禁止轮转。
         * @type {boolean || null}
         */
        this.EnableRotation = null;

        /**
         * 轮转周期，以天为单位，最小为30天，最大为365天。
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * 用户设置的期望开始轮转时间，格式为：2006-01-02 15:04:05。
当EnableRotation为true时，如果不填RotationBeginTime，则默认填充为当前时间。
         * @type {string || null}
         */
        this.RotationBeginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.EnableRotation = 'EnableRotation' in params ? params.EnableRotation : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.RotationBeginTime = 'RotationBeginTime' in params ? params.RotationBeginTime : null;

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
         * 新的凭据内容为二进制的场景使用该字段，并使用base64进行编码。
SecretBinary 和 SecretString 只能一个不为空。
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * 新的凭据内容为文本的场景使用该字段，不需要base64编码SecretBinary 和 SecretString 只能一个不为空。
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
 * DescribeAsyncRequestInfo返回参数结构体
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0:处理中，1:处理成功，2:处理失败
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 任务描述信息。
         * @type {string || null}
         */
        this.Description = null;

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
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Description = 'Description' in params ? params.Description : null;
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
 * RotateProductSecret返回参数结构体
 * @class
 */
class RotateProductSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当凭据类型为云产品凭据时（即SecretType为1，如MySQL、Tdsql等托管凭据）此字段有效，返回轮转异步任务ID号。
         * @type {number || null}
         */
        this.FlowID = null;

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
        this.FlowID = 'FlowID' in params ? params.FlowID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 二进制凭据信息，使用base64编码。
SecretBinary 和 SecretString 必须且只能设置一个。
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
 * DescribeRotationHistory返回参数结构体
 * @class
 */
class DescribeRotationHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本号列表。
         * @type {Array.<string> || null}
         */
        this.VersionIDs = null;

        /**
         * 版本号个数，可以给用户展示的版本号个数上限为10个。
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
        this.VersionIDs = 'VersionIDs' in params ? params.VersionIDs : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSSHKeyPairValue请求参数结构体
 * @class
 */
class GetSSHKeyPairValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭据名称，此凭据只能为SSH密钥对凭据类型。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 密钥对ID，是云服务器中密钥对的唯一标识。
         * @type {string || null}
         */
        this.SSHKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.SSHKeyId = 'SSHKeyId' in params ? params.SSHKeyId : null;

    }
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID号。
         * @type {number || null}
         */
        this.FlowID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowID = 'FlowID' in params ? params.FlowID : null;

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
         * true表示用户已经可以使用密钥安全托管功能，
false表示用户暂时不能使用密钥安全托管功能。
         * @type {boolean || null}
         */
        this.AccessKeyEscrowEnabled = null;

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
        this.AccessKeyEscrowEnabled = 'AccessKeyEscrowEnabled' in params ? params.AccessKeyEscrowEnabled : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRotationDetail返回参数结构体
 * @class
 */
class DescribeRotationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 否允许轮转，true表示开启轮转，false表示禁止轮转。
         * @type {boolean || null}
         */
        this.EnableRotation = null;

        /**
         * 轮转的频率，以天为单位，默认为1天。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * 最近一次轮转的时间，显式可见的时间字符串，格式 2006-01-02 15:04:05。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestRotateTime = null;

        /**
         * 下一次开始轮转的时间，显式可见的时间字符串，格式 2006-01-02 15:04:05。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextRotateBeginTime = null;

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
        this.EnableRotation = 'EnableRotation' in params ? params.EnableRotation : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.LatestRotateTime = 'LatestRotateTime' in params ? params.LatestRotateTime : null;
        this.NextRotateBeginTime = 'NextRotateBeginTime' in params ? params.NextRotateBeginTime : null;
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
 * 凭据关联产品时被赋予的权限
 * @class
 */
class ProductPrivilegeUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限名称，当前可选：
GlobalPrivileges
DatabasePrivileges
TablePrivileges
ColumnPrivileges

当权限为DatabasePrivileges时，必须通过参数Database指定数据库名；

当权限为TablePrivileges时，必须通过参数Database和TableName指定数据库名以及数据库中的表名；

当权限为ColumnPrivileges时，必须通过参数Database、TableName和CoulmnName指定数据库、数据库中的表名以及表中的列名。
         * @type {string || null}
         */
        this.PrivilegeName = null;

        /**
         * 权限列表。
对于Mysql产品来说，可选权限值为：

1. GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
注意，不传该参数表示清除该权限。

2. DatabasePrivileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
注意，不传该参数表示清除该权限。

3. TablePrivileges 权限的可选值为：权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
注意，不传该参数表示清除该权限。

4. ColumnPrivileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。
注意，不传该参数表示清除该权限。
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 仅当PrivilegeName为DatabasePrivileges时这个值才有效。
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 仅当PrivilegeName为TablePrivileges时这个值才有效，并且此时需要填充Database显式指明所在的数据库实例。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 仅当PrivilegeName为ColumnPrivileges时这个值才生效，并且此时必须填充：
Database - 显式指明所在的数据库实例。
TableName - 显式指明所在表
         * @type {string || null}
         */
        this.ColumnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivilegeName = 'PrivilegeName' in params ? params.PrivilegeName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.ColumnName = 'ColumnName' in params ? params.ColumnName : null;

    }
}

/**
 * DescribeRotationHistory请求参数结构体
 * @class
 */
class DescribeRotationHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定需要获取凭据轮转历史的凭据名称。
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
 * GetSSHKeyPairValue返回参数结构体
 * @class
 */
class GetSSHKeyPairValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSH密钥对ID。
         * @type {string || null}
         */
        this.SSHKeyID = null;

        /**
         * 公钥明文，使用base64编码。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 私钥明文，使用base64编码
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * 此密钥对所属的项目ID。
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * SSH密钥对的描述信息。
用户可以在CVM侧控制台对密钥对的描述信息进行修改。
         * @type {string || null}
         */
        this.SSHKeyDescription = null;

        /**
         * SSH密钥对的名称。
用户可以在CVM侧控制台对密钥对的名称进行修改。
         * @type {string || null}
         */
        this.SSHKeyName = null;

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
        this.SSHKeyID = 'SSHKeyID' in params ? params.SSHKeyID : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.SSHKeyDescription = 'SSHKeyDescription' in params ? params.SSHKeyDescription : null;
        this.SSHKeyName = 'SSHKeyName' in params ? params.SSHKeyName : null;
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
 * CreateProductSecret返回参数结构体
 * @class
 */
class CreateProductSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的凭据名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * 标签操作的返回信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagMsg = null;

        /**
         * 创建云产品凭据异步任务ID号。
         * @type {number || null}
         */
        this.FlowID = null;

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
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.FlowID = 'FlowID' in params ? params.FlowID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    DescribeSupportedProductsRequest: DescribeSupportedProductsRequest,
    GetSecretValueRequest: GetSecretValueRequest,
    DeleteSecretRequest: DeleteSecretRequest,
    CreateSecretRequest: CreateSecretRequest,
    RotateProductSecretRequest: RotateProductSecretRequest,
    CreateProductSecretRequest: CreateProductSecretRequest,
    GetSecretValueResponse: GetSecretValueResponse,
    GetRegionsResponse: GetRegionsResponse,
    DescribeSupportedProductsResponse: DescribeSupportedProductsResponse,
    DeleteSecretVersionRequest: DeleteSecretVersionRequest,
    SecretMetadata: SecretMetadata,
    ListSecretVersionIdsRequest: ListSecretVersionIdsRequest,
    DescribeRotationDetailRequest: DescribeRotationDetailRequest,
    CreateSSHKeyPairSecretResponse: CreateSSHKeyPairSecretResponse,
    UpdateRotationStatusResponse: UpdateRotationStatusResponse,
    CreateSecretResponse: CreateSecretResponse,
    GetRegionsRequest: GetRegionsRequest,
    UpdateSecretResponse: UpdateSecretResponse,
    DisableSecretResponse: DisableSecretResponse,
    Tag: Tag,
    ListSecretsRequest: ListSecretsRequest,
    UpdateDescriptionRequest: UpdateDescriptionRequest,
    EnableSecretResponse: EnableSecretResponse,
    CreateSSHKeyPairSecretRequest: CreateSSHKeyPairSecretRequest,
    UpdateRotationStatusRequest: UpdateRotationStatusRequest,
    UpdateSecretRequest: UpdateSecretRequest,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    RestoreSecretRequest: RestoreSecretRequest,
    RotateProductSecretResponse: RotateProductSecretResponse,
    VersionInfo: VersionInfo,
    TagFilter: TagFilter,
    PutSecretValueRequest: PutSecretValueRequest,
    PutSecretValueResponse: PutSecretValueResponse,
    DescribeRotationHistoryResponse: DescribeRotationHistoryResponse,
    GetSSHKeyPairValueRequest: GetSSHKeyPairValueRequest,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    GetServiceStatusResponse: GetServiceStatusResponse,
    DescribeRotationDetailResponse: DescribeRotationDetailResponse,
    EnableSecretRequest: EnableSecretRequest,
    ProductPrivilegeUnit: ProductPrivilegeUnit,
    DescribeRotationHistoryRequest: DescribeRotationHistoryRequest,
    GetSSHKeyPairValueResponse: GetSSHKeyPairValueResponse,
    DeleteSecretResponse: DeleteSecretResponse,
    DisableSecretRequest: DisableSecretRequest,
    CreateProductSecretResponse: CreateProductSecretResponse,
    ListSecretsResponse: ListSecretsResponse,
    DescribeSecretRequest: DescribeSecretRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    ListSecretVersionIdsResponse: ListSecretVersionIdsResponse,

}
