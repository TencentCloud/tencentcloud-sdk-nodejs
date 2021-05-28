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
 * InquireAuditCredit返回参数结构体
 * @class
 */
class InquireAuditCreditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可创建跟踪集的数量
         * @type {number || null}
         */
        this.AuditAmount = null;

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
        this.AuditAmount = 'AuditAmount' in params ? params.AuditAmount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopLogging请求参数结构体
 * @class
 */
class StopLoggingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跟踪集名称
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * cmq地域信息
 * @class
 */
class CmqRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域描述
         * @type {string || null}
         */
        this.CmqRegionName = null;

        /**
         * cmq地域
         * @type {string || null}
         */
        this.CmqRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmqRegionName = 'CmqRegionName' in params ? params.CmqRegionName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;

    }
}

/**
 * GetAttributeKey请求参数结构体
 * @class
 */
class GetAttributeKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网站类型，取值范围是zh和en。如果不传值默认zh
         * @type {string || null}
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * DeleteAudit返回参数结构体
 * @class
 */
class DeleteAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否删除成功
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAudit请求参数结构体
 * @class
 */
class UpdateAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跟踪集名称
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * 管理事件的读写属性。1：只读，2：只写，3：全部。
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * 是否创建新的cos存储桶。1：是，0：否。
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;

    }
}

/**
 * InquireAuditCredit请求参数结构体
 * @class
 */
class InquireAuditCreditRequest extends  AbstractModel {
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
 * DescribeEvents返回参数结构体
 * @class
 */
class DescribeEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集合是否结束
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * 查看更多日志的凭证
         * @type {number || null}
         */
        this.NextToken = null;

        /**
         * 日志集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Event> || null}
         */
        this.Events = null;

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
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListCosEnableRegion返回参数结构体
 * @class
 */
class ListCosEnableRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云审计支持的cos可用区
         * @type {Array.<CosRegionInfo> || null}
         */
        this.EnableRegions = null;

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

        if (params.EnableRegions) {
            this.EnableRegions = new Array();
            for (let z in params.EnableRegions) {
                let obj = new CosRegionInfo();
                obj.deserialize(params.EnableRegions[z]);
                this.EnableRegions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LookUpEvents请求参数结构体
 * @class
 */
class LookUpEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 检索条件
         * @type {Array.<LookupAttribute> || null}
         */
        this.LookupAttributes = null;

        /**
         * 查看更多日志的凭证
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 返回日志的最大条数
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * 云审计模式，有效值：standard | quick，其中standard是标准模式，quick是极速模式。默认为标准模式
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.LookupAttributes) {
            this.LookupAttributes = new Array();
            for (let z in params.LookupAttributes) {
                let obj = new LookupAttribute();
                obj.deserialize(params.LookupAttributes[z]);
                this.LookupAttributes.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * StartLogging请求参数结构体
 * @class
 */
class StartLoggingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跟踪集名称
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * CreateAudit返回参数结构体
 * @class
 */
class CreateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否创建成功。
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartLogging返回参数结构体
 * @class
 */
class StartLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启成功
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttributeKey值详情
 * @class
 */
class AttributeKeyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入框类型
         * @type {string || null}
         */
        this.LabelType = null;

        /**
         * 初始化展示
         * @type {string || null}
         */
        this.Starter = null;

        /**
         * 展示排序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * AttributeKey值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 中文标签
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelType = 'LabelType' in params ? params.LabelType : null;
        this.Starter = 'Starter' in params ? params.Starter : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * ListCosEnableRegion请求参数结构体
 * @class
 */
class ListCosEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点类型。zh表示中国区，en表示国际区。默认中国区。
         * @type {string || null}
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * ListKeyAliasByRegion返回参数结构体
 * @class
 */
class ListKeyAliasByRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK的总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 密钥别名
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
 * 资源类型
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;

    }
}

/**
 * ListAudits请求参数结构体
 * @class
 */
class ListAuditsRequest extends  AbstractModel {
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
 * StopLogging返回参数结构体
 * @class
 */
class StopLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否关闭成功
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 检索条件
 * @class
 */
class LookupAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * AttributeKey的有效取值范围是:RequestId、EventName、ReadOnly、Username、ResourceType、ResourceName和AccessKeyId，EventId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttributeKey = null;

        /**
         * AttributeValue的值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttributeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttributeKey = 'AttributeKey' in params ? params.AttributeKey : null;
        this.AttributeValue = 'AttributeValue' in params ? params.AttributeValue : null;

    }
}

/**
 * ListAudits返回参数结构体
 * @class
 */
class ListAuditsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询跟踪集概要集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuditSummary> || null}
         */
        this.AuditSummarys = null;

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

        if (params.AuditSummarys) {
            this.AuditSummarys = new Array();
            for (let z in params.AuditSummarys) {
                let obj = new AuditSummary();
                obj.deserialize(params.AuditSummarys[z]);
                this.AuditSummarys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CMK属性
 * @class
 */
class KeyMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作为密钥更容易辨识，更容易被人看懂的别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * CMK的全局唯一标识
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
 * DescribeEvents请求参数结构体
 * @class
 */
class DescribeEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间戳（单位秒，不超过当前时间 90 天）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳（单位秒，查询时间跨度小于 30 天）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 查看更多日志的凭证
         * @type {number || null}
         */
        this.NextToken = null;

        /**
         * 返回日志的最大条数（最大 50 条）
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * 检索条件（目前支持 RequestId：请求 ID、EventName：事件名称、ActionType：操作类型（Write：写；Read：读）、PrincipalId：子账号、ResourceType：资源类型、ResourceName：资源名称、AccessKeyId：密钥 ID、SensitiveAction：是否敏感操作、ApiErrorCode：API 错误码、CamErrorCode：CAM 错误码）
         * @type {Array.<LookupAttribute> || null}
         */
        this.LookupAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

        if (params.LookupAttributes) {
            this.LookupAttributes = new Array();
            for (let z in params.LookupAttributes) {
                let obj = new LookupAttribute();
                obj.deserialize(params.LookupAttributes[z]);
                this.LookupAttributes.push(obj);
            }
        }

    }
}

/**
 * UpdateAudit返回参数结构体
 * @class
 */
class UpdateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否更新成功
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAudit请求参数结构体
 * @class
 */
class DescribeAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跟踪集名称
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * ListKeyAliasByRegion请求参数结构体
 * @class
 */
class ListKeyAliasByRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kms地域
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * 含义跟 SQL 查询的 Limit 一致，表示本次获最多获取 Limit 个元素。缺省值为10，最大值为200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateAudit请求参数结构体
 * @class
 */
class CreateAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * 管理事件的读写属性。1：只读，2：只写，3：全部。
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * 跟踪集名称。3-128字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9，下划线 _。
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 是否创建新的cos存储桶。1：是，0：否。
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。可以不填，默认以账号ID作为日志前缀。
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;

    }
}

/**
 * DeleteAudit请求参数结构体
 * @class
 */
class DeleteAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跟踪集名称
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * ListCmqEnableRegion请求参数结构体
 * @class
 */
class ListCmqEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点类型。zh表示中国区，en表示国际区。默认中国区。
         * @type {string || null}
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * GetAttributeKey返回参数结构体
 * @class
 */
class GetAttributeKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AttributeKey的有效取值范围
         * @type {Array.<AttributeKeyDetail> || null}
         */
        this.AttributeKeyDetails = null;

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

        if (params.AttributeKeyDetails) {
            this.AttributeKeyDetails = new Array();
            for (let z in params.AttributeKeyDetails) {
                let obj = new AttributeKeyDetail();
                obj.deserialize(params.AttributeKeyDetails[z]);
                this.AttributeKeyDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListCmqEnableRegion返回参数结构体
 * @class
 */
class ListCmqEnableRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云审计支持的cmq的可用区
         * @type {Array.<CmqRegionInfo> || null}
         */
        this.EnableRegions = null;

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

        if (params.EnableRegions) {
            this.EnableRegions = new Array();
            for (let z in params.EnableRegions) {
                let obj = new CmqRegionInfo();
                obj.deserialize(params.EnableRegions[z]);
                this.EnableRegions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LookUpEvents返回参数结构体
 * @class
 */
class LookUpEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查看更多日志的凭证
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 日志集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Event> || null}
         */
        this.Events = null;

        /**
         * 日志集合是否结束
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ListOver = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cos地域信息
 * @class
 */
class CosRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos地域
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 地域描述
         * @type {string || null}
         */
        this.CosRegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CosRegionName = 'CosRegionName' in params ? params.CosRegionName : null;

    }
}

/**
 * DescribeAudit返回参数结构体
 * @class
 */
class DescribeAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启cmq消息通知。1：是，0：否。
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * 管理事件读写属性，1：只读，2：只写，3：全部
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * CMK的全局唯一标识符。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 跟踪集状态，1：开启，0：停止。
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * 跟踪集名称。
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * cos存储桶所在地域。
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 队列名称。
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * CMK别名。
         * @type {string || null}
         */
        this.KmsAlias = null;

        /**
         * kms地域。
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * cos存储桶名称。
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 队列所在地域。
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * 日志前缀。
         * @type {string || null}
         */
        this.LogFilePrefix = null;

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
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.KmsAlias = 'KmsAlias' in params ? params.KmsAlias : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 日志详情
 * @class
 */
class Event extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 事件时间
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * 日志详情
         * @type {string || null}
         */
        this.CloudAuditEvent = null;

        /**
         * 资源类型中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
         * @type {string || null}
         */
        this.ResourceTypeCn = null;

        /**
         * 鉴权错误码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 事件名称
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 证书ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * 请求来源
         * @type {string || null}
         */
        this.EventSource = null;

        /**
         * 请求ID
         * @type {string || null}
         */
        this.RequestID = null;

        /**
         * 资源地域
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 主账号ID
         * @type {number || null}
         */
        this.AccountID = null;

        /**
         * 源IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceIPAddress = null;

        /**
         * 事件名称中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
         * @type {string || null}
         */
        this.EventNameCn = null;

        /**
         * 资源对
         * @type {Resource || null}
         */
        this.Resources = null;

        /**
         * 事件地域
         * @type {string || null}
         */
        this.EventRegion = null;

        /**
         * IP 归属地
         * @type {string || null}
         */
        this.Location = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.CloudAuditEvent = 'CloudAuditEvent' in params ? params.CloudAuditEvent : null;
        this.ResourceTypeCn = 'ResourceTypeCn' in params ? params.ResourceTypeCn : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.EventSource = 'EventSource' in params ? params.EventSource : null;
        this.RequestID = 'RequestID' in params ? params.RequestID : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.AccountID = 'AccountID' in params ? params.AccountID : null;
        this.SourceIPAddress = 'SourceIPAddress' in params ? params.SourceIPAddress : null;
        this.EventNameCn = 'EventNameCn' in params ? params.EventNameCn : null;

        if (params.Resources) {
            let obj = new Resource();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.EventRegion = 'EventRegion' in params ? params.EventRegion : null;
        this.Location = 'Location' in params ? params.Location : null;

    }
}

/**
 * 跟踪集概览
 * @class
 */
class AuditSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跟踪集状态，1：开启，0：关闭
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * COS存储桶名称
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 跟踪集名称
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * 日志前缀
         * @type {string || null}
         */
        this.LogFilePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;

    }
}

module.exports = {
    InquireAuditCreditResponse: InquireAuditCreditResponse,
    StopLoggingRequest: StopLoggingRequest,
    CmqRegionInfo: CmqRegionInfo,
    GetAttributeKeyRequest: GetAttributeKeyRequest,
    DeleteAuditResponse: DeleteAuditResponse,
    UpdateAuditRequest: UpdateAuditRequest,
    InquireAuditCreditRequest: InquireAuditCreditRequest,
    DescribeEventsResponse: DescribeEventsResponse,
    ListCosEnableRegionResponse: ListCosEnableRegionResponse,
    LookUpEventsRequest: LookUpEventsRequest,
    StartLoggingRequest: StartLoggingRequest,
    CreateAuditResponse: CreateAuditResponse,
    StartLoggingResponse: StartLoggingResponse,
    AttributeKeyDetail: AttributeKeyDetail,
    ListCosEnableRegionRequest: ListCosEnableRegionRequest,
    ListKeyAliasByRegionResponse: ListKeyAliasByRegionResponse,
    Resource: Resource,
    ListAuditsRequest: ListAuditsRequest,
    StopLoggingResponse: StopLoggingResponse,
    LookupAttribute: LookupAttribute,
    ListAuditsResponse: ListAuditsResponse,
    KeyMetadata: KeyMetadata,
    DescribeEventsRequest: DescribeEventsRequest,
    UpdateAuditResponse: UpdateAuditResponse,
    DescribeAuditRequest: DescribeAuditRequest,
    ListKeyAliasByRegionRequest: ListKeyAliasByRegionRequest,
    CreateAuditRequest: CreateAuditRequest,
    DeleteAuditRequest: DeleteAuditRequest,
    ListCmqEnableRegionRequest: ListCmqEnableRegionRequest,
    GetAttributeKeyResponse: GetAttributeKeyResponse,
    ListCmqEnableRegionResponse: ListCmqEnableRegionResponse,
    LookUpEventsResponse: LookUpEventsResponse,
    CosRegionInfo: CosRegionInfo,
    DescribeAuditResponse: DescribeAuditResponse,
    Event: Event,
    AuditSummary: AuditSummary,

}
