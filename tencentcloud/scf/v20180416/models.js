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
 * HTTP域名相关信息
 * @class
 */
class AccessInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Host = null;

        /**
         * VIP
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

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
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 别名的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 别名指向的主版本
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 函数所在的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 别名的路由信息，需要为别名指定附加版本时，必须提供此参数
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * 别名的描述
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
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 触发器类型
 * @class
 */
class Trigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器最后修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 触发器类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 触发器详细配置
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发器创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 使能开关
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 客户自定义参数
         * @type {string || null}
         */
        this.CustomArgument = null;

        /**
         * 触发器状态
         * @type {string || null}
         */
        this.AvailableStatus = null;

        /**
         * 触发器最小资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 触发器和云函数绑定状态
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * 触发器类型，双向表示两侧控制台均可操作，单向表示SCF控制台单向创建
         * @type {string || null}
         */
        this.TriggerAttribute = null;

        /**
         * 触发器绑定的别名或版本
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;
        this.AvailableStatus = 'AvailableStatus' in params ? params.AvailableStatus : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.TriggerAttribute = 'TriggerAttribute' in params ? params.TriggerAttribute : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * GetProvisionedConcurrencyConfig请求参数结构体
 * @class
 */
class GetProvisionedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取预置并发详情的函数名称。
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所在的命名空间，默认为default。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数版本号，不传则返回函数所有版本的预置并发信息。
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * ListAliases返回参数结构体
 * @class
 */
class ListAliasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名列表
         * @type {Array.<Alias> || null}
         */
        this.Aliases = null;

        /**
         * 别名总数
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

        if (params.Aliases) {
            this.Aliases = new Array();
            for (let z in params.Aliases) {
                let obj = new Alias();
                obj.deserialize(params.Aliases[z]);
                this.Aliases.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLayerVersion返回参数结构体
 * @class
 */
class DeleteLayerVersionResponse extends  AbstractModel {
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
 * GetReservedConcurrencyConfig返回参数结构体
 * @class
 */
class GetReservedConcurrencyConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该函数的保留并发内存。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedMem = null;

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
        this.ReservedMem = 'ReservedMem' in params ? params.ReservedMem : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 别名的版本路由配置
 * @class
 */
class RoutingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 随机权重路由附加版本
         * @type {Array.<VersionWeight> || null}
         */
        this.AdditionalVersionWeights = null;

        /**
         * 规则路由附加版本
         * @type {Array.<VersionMatch> || null}
         */
        this.AddtionVersionMatchs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AdditionalVersionWeights) {
            this.AdditionalVersionWeights = new Array();
            for (let z in params.AdditionalVersionWeights) {
                let obj = new VersionWeight();
                obj.deserialize(params.AdditionalVersionWeights[z]);
                this.AdditionalVersionWeights.push(obj);
            }
        }

        if (params.AddtionVersionMatchs) {
            this.AddtionVersionMatchs = new Array();
            for (let z in params.AddtionVersionMatchs) {
                let obj = new VersionMatch();
                obj.deserialize(params.AddtionVersionMatchs[z]);
                this.AddtionVersionMatchs.push(obj);
            }
        }

    }
}

/**
 * DeleteProvisionedConcurrencyConfig返回参数结构体
 * @class
 */
class DeleteProvisionedConcurrencyConfigResponse extends  AbstractModel {
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
 * 带有权重的函数版本
 * @class
 */
class VersionWeight extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数版本名称
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 该版本的权重
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * 左闭右开时间区间，包括起始时间和结束时间，格式为"%Y-%m-%d %H:%M:%S"
 * @class
 */
class TimeInterval extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间（包括在内），格式"%Y-%m-%d %H:%M:%S"
         * @type {string || null}
         */
        this.Start = null;

        /**
         * 结束时间（不包括在内），格式"%Y-%m-%d %H:%M:%S"
         * @type {string || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * 层版本信息
 * @class
 */
class LayerVersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本适用的运行时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntimes = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 版本描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 许可证信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LicenseInfo = null;

        /**
         * 版本号
         * @type {number || null}
         */
        this.LayerVersion = null;

        /**
         * 层名称
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * 层的具体版本当前状态，状态值[参考此处](https://cloud.tencent.com/document/product/583/47175#.E5.B1.82.EF.BC.88layer.EF.BC.89.E7.8A.B6.E6.80.81)
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompatibleRuntimes = 'CompatibleRuntimes' in params ? params.CompatibleRuntimes : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.LicenseInfo = 'LicenseInfo' in params ? params.LicenseInfo : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * PutProvisionedConcurrencyConfig返回参数结构体
 * @class
 */
class PutProvisionedConcurrencyConfigResponse extends  AbstractModel {
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
 * UpdateFunctionConfiguration返回参数结构体
 * @class
 */
class UpdateFunctionConfigurationResponse extends  AbstractModel {
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
 * PublishLayerVersion返回参数结构体
 * @class
 */
class PublishLayerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次创建的层的版本号
         * @type {number || null}
         */
        this.LayerVersion = null;

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
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 已使用的信息
 * @class
 */
class UsageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间个数
         * @type {number || null}
         */
        this.NamespacesCount = null;

        /**
         * 命名空间详情
         * @type {Array.<NamespaceUsage> || null}
         */
        this.Namespace = null;

        /**
         * 当前地域用户并发内存配额上限
         * @type {number || null}
         */
        this.TotalConcurrencyMem = null;

        /**
         * 当前地域用户已配置并发内存额度
         * @type {number || null}
         */
        this.TotalAllocatedConcurrencyMem = null;

        /**
         * 用户实际配置的账号并发配额
         * @type {number || null}
         */
        this.UserConcurrencyMemLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespacesCount = 'NamespacesCount' in params ? params.NamespacesCount : null;

        if (params.Namespace) {
            this.Namespace = new Array();
            for (let z in params.Namespace) {
                let obj = new NamespaceUsage();
                obj.deserialize(params.Namespace[z]);
                this.Namespace.push(obj);
            }
        }
        this.TotalConcurrencyMem = 'TotalConcurrencyMem' in params ? params.TotalConcurrencyMem : null;
        this.TotalAllocatedConcurrencyMem = 'TotalAllocatedConcurrencyMem' in params ? params.TotalAllocatedConcurrencyMem : null;
        this.UserConcurrencyMemLimit = 'UserConcurrencyMemLimit' in params ? params.UserConcurrencyMemLimit : null;

    }
}

/**
 * 公网访问配置
 * @class
 */
class PublicNetConfigIn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启公网访问能力取值['DISABLE','ENABLE']
         * @type {string || null}
         */
        this.PublicNetStatus = null;

        /**
         * Eip配置
         * @type {EipConfigIn || null}
         */
        this.EipConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicNetStatus = 'PublicNetStatus' in params ? params.PublicNetStatus : null;

        if (params.EipConfig) {
            let obj = new EipConfigIn();
            obj.deserialize(params.EipConfig)
            this.EipConfig = obj;
        }

    }
}

/**
 * DeleteProvisionedConcurrencyConfig请求参数结构体
 * @class
 */
class DeleteProvisionedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除预置并发的函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的版本号
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 函数所属命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteReservedConcurrencyConfig返回参数结构体
 * @class
 */
class DeleteReservedConcurrencyConfigResponse extends  AbstractModel {
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
 * GetAlias返回参数结构体
 * @class
 */
class GetAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名指向的主版本
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 别名的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 别名的路由信息
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * 别名的描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModTime = null;

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
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
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
 * 函数版本的预置并发信息，包括设置预置并发数、已完成预置的并发数和预置任务状态。
 * @class
 */
class VersionProvisionedConcurrencyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置的预置并发数。
         * @type {number || null}
         */
        this.AllocatedProvisionedConcurrencyNum = null;

        /**
         * 当前已完成预置的并发数。
         * @type {number || null}
         */
        this.AvailableProvisionedConcurrencyNum = null;

        /**
         * 预置任务状态，Done表示已完成，InProgress表示进行中，Failed表示部分或全部失败。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 对预置任务状态Status的说明。
         * @type {string || null}
         */
        this.StatusReason = null;

        /**
         * 函数版本号
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllocatedProvisionedConcurrencyNum = 'AllocatedProvisionedConcurrencyNum' in params ? params.AllocatedProvisionedConcurrencyNum : null;
        this.AvailableProvisionedConcurrencyNum = 'AvailableProvisionedConcurrencyNum' in params ? params.AvailableProvisionedConcurrencyNum : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * GetFunctionLogs请求参数结构体
 * @class
 */
class GetFunctionLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的名称。
- 为保证[获取函数运行日志](https://cloud.tencent.com/document/product/583/18583)接口`GetFunctionLogs`兼容性，输入参数`FunctionName`仍为非必填项，但建议填写该参数，否则可能导致日志获取失败。
- 函数关联日志服务后，建议使用[日志服务](https://cloud.tencent.com/document/product/614/16875)相关接口以获得最佳日志检索体验。
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 数据的偏移量，Offset+Limit不能大于10000
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据的长度，Offset+Limit不能大于10000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 以升序还是降序的方式对日志进行排序，可选值 desc和 asc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 根据某个字段排序日志,支持以下字段：function_name, duration, mem_usage, start_time
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 日志过滤条件。可用来区分正确和错误日志，filter.RetCode=not0 表示只返回错误日志，filter.RetCode=is0 表示只返回正确日志，不传，则返回所有日志
         * @type {LogFilter || null}
         */
        this.Filter = null;

        /**
         * 函数的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 执行该函数对应的requestId
         * @type {string || null}
         */
        this.FunctionRequestId = null;

        /**
         * 查询的具体日期，例如：2017-05-16 20:00:00，只能与endtime相差一天之内
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询的具体日期，例如：2017-05-16 20:59:59，只能与startTime相差一天之内
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 该字段已下线
         * @type {LogSearchContext || null}
         */
        this.SearchContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

        if (params.Filter) {
            let obj = new LogFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.FunctionRequestId = 'FunctionRequestId' in params ? params.FunctionRequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.SearchContext) {
            let obj = new LogSearchContext();
            obj.deserialize(params.SearchContext)
            this.SearchContext = obj;
        }

    }
}

/**
 * 状态原因描述
 * @class
 */
class StatusReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误描述
         * @type {string || null}
         */
        this.ErrorMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

    }
}

/**
 * 函数标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签的value
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 日志过滤条件，用于区分正确与错误日志
 * @class
 */
class LogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * filter.RetCode的取值有：
not0 表示只返回错误日志，
is0 表示只返回正确日志，
TimeLimitExceeded 返回函数调用发生超时的日志，
ResourceLimitExceeded 返回函数调用发生资源超限的日志，
UserCodeException 返回函数调用发生用户代码错误的日志，
无输入则返回所有日志。
         * @type {string || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

/**
 * 公网访问固定ip配置
 * @class
 */
class EipConfigIn extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip开启状态，取值['ENABLE','DISABLE']
         * @type {string || null}
         */
        this.EipStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipStatus = 'EipStatus' in params ? params.EipStatus : null;

    }
}

/**
 * ListLayerVersions返回参数结构体
 * @class
 */
class ListLayerVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 层版本列表
         * @type {Array.<LayerVersionInfo> || null}
         */
        this.LayerVersions = null;

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

        if (params.LayerVersions) {
            this.LayerVersions = new Array();
            for (let z in params.LayerVersions) {
                let obj = new LayerVersionInfo();
                obj.deserialize(params.LayerVersions[z]);
                this.LayerVersions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFunction请求参数结构体
 * @class
 */
class DeleteFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所属命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数版本
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * CopyFunction返回参数结构体
 * @class
 */
class CopyFunctionResponse extends  AbstractModel {
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
 * 命名空间
 * @class
 */
class Namespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间创建时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 命名空间修改时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 命名空间描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 默认default，TCB表示是小程序云开发创建的
         * @type {string || null}
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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetFunction请求参数结构体
 * @class
 */
class GetFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取详情的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的版本号
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 函数所属命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 是否显示代码, TRUE表示显示代码，FALSE表示不显示代码,大于1M的入口文件不会显示
         * @type {string || null}
         */
        this.ShowCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ShowCode = 'ShowCode' in params ? params.ShowCode : null;

    }
}

/**
 * ListNamespaces请求参数结构体
 * @class
 */
class ListNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据长度，默认值为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 数据的偏移量，默认值为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：Name,Updatetime
         * @type {string || null}
         */
        this.Orderby = null;

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * PublishVersion请求参数结构体
 * @class
 */
class PublishVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteAlias请求参数结构体
 * @class
 */
class DeleteAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 别名的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 函数所在的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * ListVersionByFunction返回参数结构体
 * @class
 */
class ListVersionByFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数版本。
         * @type {Array.<string> || null}
         */
        this.FunctionVersion = null;

        /**
         * 函数版本列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FunctionVersion> || null}
         */
        this.Versions = null;

        /**
         * 函数版本总数。
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
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;

        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new FunctionVersion();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAlias请求参数结构体
 * @class
 */
class GetAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 别名的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 函数所在的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * CreateNamespace返回参数结构体
 * @class
 */
class CreateNamespaceResponse extends  AbstractModel {
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
 * 公网访问配置
 * @class
 */
class PublicNetConfigOut extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启公网访问能力取值['DISABLE','ENABLE']
         * @type {string || null}
         */
        this.PublicNetStatus = null;

        /**
         * Eip配置
         * @type {EipConfigOut || null}
         */
        this.EipConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicNetStatus = 'PublicNetStatus' in params ? params.PublicNetStatus : null;

        if (params.EipConfig) {
            let obj = new EipConfigOut();
            obj.deserialize(params.EipConfig)
            this.EipConfig = obj;
        }

    }
}

/**
 * UpdateFunctionCode请求参数结构体
 * @class
 */
class UpdateFunctionCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数处理方法名称。名称格式支持“文件名称.函数名称”形式（java 名称格式 包名.类名::方法名），文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求 2-60 个字符
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * 要修改的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 对象存储桶名称
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 对象存储对象路径
         * @type {string || null}
         */
        this.CosObjectName = null;

        /**
         * 包含函数代码文件及其依赖项的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M
         * @type {string || null}
         */
        this.ZipFile = null;

        /**
         * 函数所属命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 对象存储的地域，注：北京分为ap-beijing和ap-beijing-1
         * @type {string || null}
         */
        this.CosBucketRegion = null;

        /**
         * 函数所属环境
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 在更新时是否同步发布新版本，默认为：FALSE，不发布
         * @type {string || null}
         */
        this.Publish = null;

        /**
         * 函数代码
         * @type {Code || null}
         */
        this.Code = null;

        /**
         * 代码来源方式，支持 ZipFile, Cos, Inline 之一
         * @type {string || null}
         */
        this.CodeSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosObjectName = 'CosObjectName' in params ? params.CosObjectName : null;
        this.ZipFile = 'ZipFile' in params ? params.ZipFile : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CosBucketRegion = 'CosBucketRegion' in params ? params.CosBucketRegion : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Publish = 'Publish' in params ? params.Publish : null;

        if (params.Code) {
            let obj = new Code();
            obj.deserialize(params.Code)
            this.Code = obj;
        }
        this.CodeSource = 'CodeSource' in params ? params.CodeSource : null;

    }
}

/**
 * UpdateFunctionConfiguration请求参数结构体
 * @class
 */
class UpdateFunctionConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要修改的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数描述。最大支持 1000 个英文字母、数字、空格、逗号和英文句号，支持中文
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数运行时内存大小，默认为 128 M，可选范64M、128 M-3072 M，以 128MB 为阶梯。
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * 函数最长执行时间，单位为秒，可选值范 1-900 秒，默认为 3 秒
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10，Nodejs8.9，Nodejs10.15，Nodejs12.16， PHP5， PHP7，Go1 ， Java8和CustomRuntime
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数的环境变量
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * 函数所属命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数的私有网络配置
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * 函数绑定的角色
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 日志投递到的cls日志集ID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * 日志投递到的cls Topic ID
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 在更新时是否同步发布新版本，默认为：FALSE，不发布新版本
         * @type {string || null}
         */
        this.Publish = null;

        /**
         * 是否开启L5访问能力，TRUE 为开启，FALSE为关闭
         * @type {string || null}
         */
        this.L5Enable = null;

        /**
         * 函数要关联的层版本列表，层的版本会按照在列表中顺序依次覆盖。
         * @type {Array.<LayerVersionSimple> || null}
         */
        this.Layers = null;

        /**
         * 函数关联的死信队列信息
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

        /**
         * 公网访问配置
         * @type {PublicNetConfigIn || null}
         */
        this.PublicNetConfig = null;

        /**
         * 文件系统配置入参，用于云函数绑定CFS文件系统
         * @type {CfsConfig || null}
         */
        this.CfsConfig = null;

        /**
         * 函数初始化执行超时时间，默认15秒
         * @type {number || null}
         */
        this.InitTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.Publish = 'Publish' in params ? params.Publish : null;
        this.L5Enable = 'L5Enable' in params ? params.L5Enable : null;

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionSimple();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }

        if (params.PublicNetConfig) {
            let obj = new PublicNetConfigIn();
            obj.deserialize(params.PublicNetConfig)
            this.PublicNetConfig = obj;
        }

        if (params.CfsConfig) {
            let obj = new CfsConfig();
            obj.deserialize(params.CfsConfig)
            this.CfsConfig = obj;
        }
        this.InitTimeout = 'InitTimeout' in params ? params.InitTimeout : null;

    }
}

/**
 * DeleteReservedConcurrencyConfig请求参数结构体
 * @class
 */
class DeleteReservedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除预置并发的函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所属命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * GetFunctionEventInvokeConfig返回参数结构体
 * @class
 */
class GetFunctionEventInvokeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步重试配置信息
         * @type {AsyncTriggerConfig || null}
         */
        this.AsyncTriggerConfig = null;

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

        if (params.AsyncTriggerConfig) {
            let obj = new AsyncTriggerConfig();
            obj.deserialize(params.AsyncTriggerConfig)
            this.AsyncTriggerConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListTriggers返回参数结构体
 * @class
 */
class ListTriggersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 触发器列表
         * @type {Array.<TriggerInfo> || null}
         */
        this.Triggers = null;

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

        if (params.Triggers) {
            this.Triggers = new Array();
            for (let z in params.Triggers) {
                let obj = new TriggerInfo();
                obj.deserialize(params.Triggers[z]);
                this.Triggers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateAsyncEvent请求参数结构体
 * @class
 */
class TerminateAsyncEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 终止的调用请求id
         * @type {string || null}
         */
        this.InvokeRequestId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * ListLayers请求参数结构体
 * @class
 */
class ListLayersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 适配的运行时
         * @type {string || null}
         */
        this.CompatibleRuntime = null;

        /**
         * 偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询数目限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询key，模糊匹配名称
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompatibleRuntime = 'CompatibleRuntime' in params ? params.CompatibleRuntime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * CopyFunction请求参数结构体
 * @class
 */
class CopyFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要复制的函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 新函数的名称
         * @type {string || null}
         */
        this.NewFunctionName = null;

        /**
         * 要复制的函数所在的命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 将函数复制到的命名空间，默认为default
         * @type {string || null}
         */
        this.TargetNamespace = null;

        /**
         * 新函数的描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 要将函数复制到的地域，不填则默认为当前地域
         * @type {string || null}
         */
        this.TargetRegion = null;

        /**
         * 如果目标Namespace下已有同名函数，是否覆盖，默认为否
（注意：如果选择覆盖，会导致同名函数被删除，请慎重操作）
TRUE：覆盖同名函数
FALSE：不覆盖同名函数
         * @type {boolean || null}
         */
        this.Override = null;

        /**
         * 是否复制函数的属性，包括环境变量、内存、超时、函数描述、标签、VPC等，默认为是。
TRUE：复制函数配置
FALSE：不复制函数配置
         * @type {boolean || null}
         */
        this.CopyConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.NewFunctionName = 'NewFunctionName' in params ? params.NewFunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.TargetNamespace = 'TargetNamespace' in params ? params.TargetNamespace : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.TargetRegion = 'TargetRegion' in params ? params.TargetRegion : null;
        this.Override = 'Override' in params ? params.Override : null;
        this.CopyConfiguration = 'CopyConfiguration' in params ? params.CopyConfiguration : null;

    }
}

/**
 * DeleteNamespace返回参数结构体
 * @class
 */
class DeleteNamespaceResponse extends  AbstractModel {
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
 * 指定某个Layer版本
 * @class
 */
class LayerVersionSimple extends  AbstractModel {
    constructor(){
        super();

        /**
         * layer名称
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * 版本号
         * @type {number || null}
         */
        this.LayerVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;

    }
}

/**
 * TriggerCount描述不同类型触发器的数量
 * @class
 */
class TriggerCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cos触发器数量
         * @type {number || null}
         */
        this.Cos = null;

        /**
         * Timer触发器数量
         * @type {number || null}
         */
        this.Timer = null;

        /**
         * Cmq触发器数量
         * @type {number || null}
         */
        this.Cmq = null;

        /**
         * 触发器总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Ckafka触发器数量
         * @type {number || null}
         */
        this.Ckafka = null;

        /**
         * Apigw触发器数量
         * @type {number || null}
         */
        this.Apigw = null;

        /**
         * Cls触发器数量
         * @type {number || null}
         */
        this.Cls = null;

        /**
         * Clb触发器数量
         * @type {number || null}
         */
        this.Clb = null;

        /**
         * Mps触发器数量
         * @type {number || null}
         */
        this.Mps = null;

        /**
         * Cm触发器数量
         * @type {number || null}
         */
        this.Cm = null;

        /**
         * Vod触发器数量
         * @type {number || null}
         */
        this.Vod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cos = 'Cos' in params ? params.Cos : null;
        this.Timer = 'Timer' in params ? params.Timer : null;
        this.Cmq = 'Cmq' in params ? params.Cmq : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Ckafka = 'Ckafka' in params ? params.Ckafka : null;
        this.Apigw = 'Apigw' in params ? params.Apigw : null;
        this.Cls = 'Cls' in params ? params.Cls : null;
        this.Clb = 'Clb' in params ? params.Clb : null;
        this.Mps = 'Mps' in params ? params.Mps : null;
        this.Cm = 'Cm' in params ? params.Cm : null;
        this.Vod = 'Vod' in params ? params.Vod : null;

    }
}

/**
 * 命名空间限制
 * @class
 */
class NamespaceLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数总数
         * @type {number || null}
         */
        this.FunctionsCount = null;

        /**
         * Trigger信息
         * @type {TriggerCount || null}
         */
        this.Trigger = null;

        /**
         * Namespace名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 并发量
         * @type {number || null}
         */
        this.ConcurrentExecutions = null;

        /**
         * Timeout限制
         * @type {number || null}
         */
        this.TimeoutLimit = null;

        /**
         * 测试事件限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TestModelLimit = null;

        /**
         * 初始化超时限制
         * @type {number || null}
         */
        this.InitTimeoutLimit = null;

        /**
         * 异步重试次数限制
         * @type {number || null}
         */
        this.RetryNumLimit = null;

        /**
         * 异步重试消息保留时间下限
         * @type {number || null}
         */
        this.MinMsgTTL = null;

        /**
         * 异步重试消息保留时间上限
         * @type {number || null}
         */
        this.MaxMsgTTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionsCount = 'FunctionsCount' in params ? params.FunctionsCount : null;

        if (params.Trigger) {
            let obj = new TriggerCount();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ConcurrentExecutions = 'ConcurrentExecutions' in params ? params.ConcurrentExecutions : null;
        this.TimeoutLimit = 'TimeoutLimit' in params ? params.TimeoutLimit : null;
        this.TestModelLimit = 'TestModelLimit' in params ? params.TestModelLimit : null;
        this.InitTimeoutLimit = 'InitTimeoutLimit' in params ? params.InitTimeoutLimit : null;
        this.RetryNumLimit = 'RetryNumLimit' in params ? params.RetryNumLimit : null;
        this.MinMsgTTL = 'MinMsgTTL' in params ? params.MinMsgTTL : null;
        this.MaxMsgTTL = 'MaxMsgTTL' in params ? params.MaxMsgTTL : null;

    }
}

/**
 * 文件系统(cfs)配置描述
 * @class
 */
class CfsConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统信息列表
         * @type {Array.<CfsInsInfo> || null}
         */
        this.CfsInsList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CfsInsList) {
            this.CfsInsList = new Array();
            for (let z in params.CfsInsList) {
                let obj = new CfsInsInfo();
                obj.deserialize(params.CfsInsList[z]);
                this.CfsInsList.push(obj);
            }
        }

    }
}

/**
 * DeleteNamespace请求参数结构体
 * @class
 */
class DeleteNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * ListFunctions请求参数结构体
 * @class
 */
class ListFunctionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime, FunctionName
         * @type {string || null}
         */
        this.Orderby = null;

        /**
         * 数据偏移量，默认值为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据长度，默认值为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 支持FunctionName模糊匹配
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数描述，支持模糊搜索
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 过滤条件。
- tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。

每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * CreateTrigger请求参数结构体
 * @class
 */
class CreateTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建触发器绑定的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 新建触发器名称。如果是定时触发器，名称支持英文字母、数字、连接符和下划线，最长100个字符；如果是cos触发器，需要是对应cos存储桶适用于XML API的访问域名(例如:5401-5ff414-12345.cos.ap-shanghai.myqcloud.com);如果是其他触发器，见具体触发器绑定参数的说明
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发器类型，目前支持 cos 、cmq、 timer、 ckafka、apigw类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 触发器对应的参数，可见具体[触发器描述说明](https://cloud.tencent.com/document/product/583/39901)
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * 函数的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 触发器的初始是能状态 OPEN表示开启 CLOSE表示关闭
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * 用户自定义参数，仅支持timer触发器
         * @type {string || null}
         */
        this.CustomArgument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;

    }
}

/**
 * UpdateNamespace返回参数结构体
 * @class
 */
class UpdateNamespaceResponse extends  AbstractModel {
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
 * GetAccount返回参数结构体
 * @class
 */
class GetAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间已使用的信息
         * @type {UsageInfo || null}
         */
        this.AccountUsage = null;

        /**
         * 命名空间限制的信息
         * @type {LimitsInfo || null}
         */
        this.AccountLimit = null;

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

        if (params.AccountUsage) {
            let obj = new UsageInfo();
            obj.deserialize(params.AccountUsage)
            this.AccountUsage = obj;
        }

        if (params.AccountLimit) {
            let obj = new LimitsInfo();
            obj.deserialize(params.AccountLimit)
            this.AccountLimit = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFunction返回参数结构体
 * @class
 */
class DeleteFunctionResponse extends  AbstractModel {
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
 * ListAsyncEvents请求参数结构体
 * @class
 */
class ListAsyncEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 过滤条件，函数版本
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 过滤条件，调用类型列表
         * @type {Array.<string> || null}
         */
        this.InvokeType = null;

        /**
         * 过滤条件，事件状态列表
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * 过滤条件，开始执行时间左闭右开区间
         * @type {TimeInterval || null}
         */
        this.StartTimeInterval = null;

        /**
         * 过滤条件，结束执行时间左闭右开区间
         * @type {TimeInterval || null}
         */
        this.EndTimeInterval = null;

        /**
         * 可选值 ASC 和 DESC，默认 DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选值 StartTime 和 EndTime，默认值 StartTime
         * @type {string || null}
         */
        this.Orderby = null;

        /**
         * 数据偏移量，默认值为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据长度，默认值为 20，最大值 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，事件调用请求id
         * @type {string || null}
         */
        this.InvokeRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.InvokeType = 'InvokeType' in params ? params.InvokeType : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StartTimeInterval) {
            let obj = new TimeInterval();
            obj.deserialize(params.StartTimeInterval)
            this.StartTimeInterval = obj;
        }

        if (params.EndTimeInterval) {
            let obj = new TimeInterval();
            obj.deserialize(params.EndTimeInterval)
            this.EndTimeInterval = obj;
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;

    }
}

/**
 * 运行函数的返回
 * @class
 */
class Result extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示执行过程中的日志输出，异步调用返回为空
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 表示执行函数的返回，异步调用返回为空
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * 表示执行函数的错误返回信息，异步调用返回为空
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 执行函数时的内存大小，单位为Byte，异步调用返回为空
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * 表示执行函数的耗时，单位是毫秒，异步调用返回为空
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 表示函数的计费耗时，单位是毫秒，异步调用返回为空
         * @type {number || null}
         */
        this.BillDuration = null;

        /**
         * 此次函数执行的Id
         * @type {string || null}
         */
        this.FunctionRequestId = null;

        /**
         * 0为正确，异步调用返回为空
         * @type {number || null}
         */
        this.InvokeResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Log = 'Log' in params ? params.Log : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.BillDuration = 'BillDuration' in params ? params.BillDuration : null;
        this.FunctionRequestId = 'FunctionRequestId' in params ? params.FunctionRequestId : null;
        this.InvokeResult = 'InvokeResult' in params ? params.InvokeResult : null;

    }
}

/**
 * CreateAlias返回参数结构体
 * @class
 */
class CreateAliasResponse extends  AbstractModel {
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
 * 日志搜索上下文
 * @class
 */
class LogSearchContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 日志条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 日志关键词
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 日志类型，支持Application和Platform，默认为Application
         * @type {string || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 触发器信息
 * @class
 */
class TriggerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使能开关
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 函数版本或别名
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发器类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 触发器详细配置
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * 触发器是否可用
         * @type {string || null}
         */
        this.AvailableStatus = null;

        /**
         * 客户自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomArgument = null;

        /**
         * 触发器创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 触发器最后修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 触发器最小资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 触发器和云函数绑定状态
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * 触发器类型，双向表示两侧控制台均可操作，单向表示SCF控制台单向创建
         * @type {string || null}
         */
        this.TriggerAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.AvailableStatus = 'AvailableStatus' in params ? params.AvailableStatus : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.TriggerAttribute = 'TriggerAttribute' in params ? params.TriggerAttribute : null;

    }
}

/**
 * CreateFunction请求参数结构体
 * @class
 */
class CreateFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的函数名称，函数名称支持26个英文字母大小写、数字、连接符和下划线，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度2-60
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数代码. 注意：不能同时指定Cos、ZipFile或 DemoId。
         * @type {Code || null}
         */
        this.Code = null;

        /**
         * 函数处理方法名称，名称格式支持 "文件名称.方法名称" 形式（java 名称格式 包名.类名::方法名），文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求是 2-60 个字符
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * 函数描述,最大支持 1000 个英文字母、数字、空格、逗号、换行符和英文句号，支持中文
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数运行时内存大小，默认为 128M，可选范围 64、128MB-3072MB，并且以 128MB 为阶梯
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * 函数最长执行时间，单位为秒，可选值范围 1-900 秒，默认为 3 秒
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 函数的环境变量
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * 函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10，Nodejs8.9，Nodejs10.15，Nodejs12.16， Php5， Php7，Go1，Java8 和 CustomRuntime，默认Python2.7
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数的私有网络配置
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * 函数所属命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数绑定的角色
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 函数日志投递到的CLS LogsetID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * 函数日志投递到的CLS TopicID
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 函数类型，默认值为Event，创建触发器函数请填写Event，创建HTTP函数级服务请填写HTTP
         * @type {string || null}
         */
        this.Type = null;

        /**
         * CodeSource 代码来源，支持ZipFile, Cos, Demo 其中之一
         * @type {string || null}
         */
        this.CodeSource = null;

        /**
         * 函数要关联的Layer版本列表，Layer会按照在列表中顺序依次覆盖。
         * @type {Array.<LayerVersionSimple> || null}
         */
        this.Layers = null;

        /**
         * 死信队列参数
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

        /**
         * 公网访问配置
         * @type {PublicNetConfigIn || null}
         */
        this.PublicNetConfig = null;

        /**
         * 文件系统配置参数，用于云函数挂载文件系统
         * @type {CfsConfig || null}
         */
        this.CfsConfig = null;

        /**
         * 函数初始化超时时间
         * @type {number || null}
         */
        this.InitTimeout = null;

        /**
         * 函数 Tag 参数，以键值对数组形式传入
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否开启异步属性，TRUE 为开启，FALSE为关闭
         * @type {string || null}
         */
        this.AsyncRunEnable = null;

        /**
         * 是否开启事件追踪，TRUE 为开启，FALSE为关闭
         * @type {string || null}
         */
        this.TraceEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;

        if (params.Code) {
            let obj = new Code();
            obj.deserialize(params.Code)
            this.Code = obj;
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CodeSource = 'CodeSource' in params ? params.CodeSource : null;

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionSimple();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }

        if (params.PublicNetConfig) {
            let obj = new PublicNetConfigIn();
            obj.deserialize(params.PublicNetConfig)
            this.PublicNetConfig = obj;
        }

        if (params.CfsConfig) {
            let obj = new CfsConfig();
            obj.deserialize(params.CfsConfig)
            this.CfsConfig = obj;
        }
        this.InitTimeout = 'InitTimeout' in params ? params.InitTimeout : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AsyncRunEnable = 'AsyncRunEnable' in params ? params.AsyncRunEnable : null;
        this.TraceEnable = 'TraceEnable' in params ? params.TraceEnable : null;

    }
}

/**
 * GetAccount请求参数结构体
 * @class
 */
class GetAccountRequest extends  AbstractModel {
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
 * PutTotalConcurrencyConfig返回参数结构体
 * @class
 */
class PutTotalConcurrencyConfigResponse extends  AbstractModel {
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
 * DeleteAlias返回参数结构体
 * @class
 */
class DeleteAliasResponse extends  AbstractModel {
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
 * PublishVersion返回参数结构体
 * @class
 */
class PublishVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 代码大小
         * @type {number || null}
         */
        this.CodeSize = null;

        /**
         * 最大可用内存
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * 函数的描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数的入口
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * 函数的超时时间
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 函数的运行环境
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

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
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.CodeSize = 'CodeSize' in params ? params.CodeSize : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 异步事件
 * @class
 */
class AsyncEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用请求id
         * @type {string || null}
         */
        this.InvokeRequestId = null;

        /**
         * 调用类型
         * @type {string || null}
         */
        this.InvokeType = null;

        /**
         * 函数版本
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 事件状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调用开始时间，格式: "%Y-%m-%d %H:%M:%S.%f"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 调用结束时间，格式: "%Y-%m-%d %H:%M:%S.%f"
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;
        this.InvokeType = 'InvokeType' in params ? params.InvokeType : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 函数的环境变量参数
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境变量数组
         * @type {Array.<Variable> || null}
         */
        this.Variables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Variables) {
            this.Variables = new Array();
            for (let z in params.Variables) {
                let obj = new Variable();
                obj.deserialize(params.Variables[z]);
                this.Variables.push(obj);
            }
        }

    }
}

/**
 * TerminateAsyncEvent返回参数结构体
 * @class
 */
class TerminateAsyncEventResponse extends  AbstractModel {
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
 * GetFunctionAddress请求参数结构体
 * @class
 */
class GetFunctionAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 函数的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * Invoke返回参数结构体
 * @class
 */
class InvokeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数执行结果
         * @type {Result || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new Result();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Invoke请求参数结构体
 * @class
 */
class InvokeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * RequestResponse(同步) 和 Event(异步)，默认为同步
         * @type {string || null}
         */
        this.InvocationType = null;

        /**
         * 触发函数的版本号或别名
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 运行函数时的参数，以json格式传入，最大支持的参数长度是 1M
         * @type {string || null}
         */
        this.ClientContext = null;

        /**
         * 同步调用时指定该字段，返回值会包含4K的日志，可选值为None和Tail，默认值为None。当该值为Tail时，返回参数中的Log字段会包含对应的函数执行日志
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数灰度流量控制调用，以json格式传入，例如{"k":"v"}，注意kv都需要是字符串类型，最大支持的参数长度是1024字节
         * @type {string || null}
         */
        this.RoutingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.InvocationType = 'InvocationType' in params ? params.InvocationType : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.ClientContext = 'ClientContext' in params ? params.ClientContext : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.RoutingKey = 'RoutingKey' in params ? params.RoutingKey : null;

    }
}

/**
 * CreateAlias请求参数结构体
 * @class
 */
class CreateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名的名称，在函数级别中唯一，只能包含字母、数字、'_'和‘-’，且必须以字母开头，长度限制为1-64
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 别名指向的主版本
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 函数所在的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 别名的请求路由配置
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * 别名的描述信息
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
        this.Name = 'Name' in params ? params.Name : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 带有匹配规则的函数版本
 * @class
 */
class VersionMatch extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数版本名称
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 匹配规则的key，调用时通过传key来匹配规则路由到指定版本
header方式：
key填写"invoke.headers.User"，并在 invoke 调用函数时传参 RoutingKey：{"User":"value"}规则匹配调用
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 匹配方式。取值范围：
range：范围匹配
exact：字符串精确匹配
         * @type {string || null}
         */
        this.Method = null;

        /**
         * range 匹配规则要求：
需要为开区间或闭区间描述 (a,b) [a,b]，其中 a、b 均为整数
exact 匹配规则要求：
字符串精确匹配
         * @type {string || null}
         */
        this.Expression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Expression = 'Expression' in params ? params.Expression : null;

    }
}

/**
 * UpdateFunctionEventInvokeConfig返回参数结构体
 * @class
 */
class UpdateFunctionEventInvokeConfigResponse extends  AbstractModel {
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
 * PutReservedConcurrencyConfig请求参数结构体
 * @class
 */
class PutReservedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要设置预置并发的函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数保留并发内存，注：函数的保留并发内存总和上限：用户总并发内存配额 - 12800
         * @type {number || null}
         */
        this.ReservedConcurrencyMem = null;

        /**
         * 函数所属命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.ReservedConcurrencyMem = 'ReservedConcurrencyMem' in params ? params.ReservedConcurrencyMem : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * ListLayerVersions请求参数结构体
 * @class
 */
class ListLayerVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 层名称
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * 适配的运行时
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.CompatibleRuntime = 'CompatibleRuntime' in params ? params.CompatibleRuntime : null;

    }
}

/**
 * CreateTrigger返回参数结构体
 * @class
 */
class CreateTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器信息
         * @type {Trigger || null}
         */
        this.TriggerInfo = null;

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

        if (params.TriggerInfo) {
            let obj = new Trigger();
            obj.deserialize(params.TriggerInfo)
            this.TriggerInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishLayerVersion请求参数结构体
 * @class
 */
class PublishLayerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 层名称，支持26个英文字母大小写、数字、连接符和下划线，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度1-64
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * 层适用的运行时，可多选，可选的值对应函数的 Runtime 可选值。
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntimes = null;

        /**
         * 层的文件来源或文件内容
         * @type {Code || null}
         */
        this.Content = null;

        /**
         * 层的版本的描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 层的软件许可证
         * @type {string || null}
         */
        this.LicenseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.CompatibleRuntimes = 'CompatibleRuntimes' in params ? params.CompatibleRuntimes : null;

        if (params.Content) {
            let obj = new Code();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.LicenseInfo = 'LicenseInfo' in params ? params.LicenseInfo : null;

    }
}

/**
 * CreateNamespace请求参数结构体
 * @class
 */
class CreateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 命名空间描述
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * UpdateFunctionEventInvokeConfig请求参数结构体
 * @class
 */
class UpdateFunctionEventInvokeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步重试配置信息
         * @type {AsyncTriggerConfig || null}
         */
        this.AsyncTriggerConfig = null;

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所属命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AsyncTriggerConfig) {
            let obj = new AsyncTriggerConfig();
            obj.deserialize(params.AsyncTriggerConfig)
            this.AsyncTriggerConfig = obj;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteLayerVersion请求参数结构体
 * @class
 */
class DeleteLayerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 层名称
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * 版本号
         * @type {number || null}
         */
        this.LayerVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 变量参数
 * @class
 */
class Variable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 变量的名称
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 变量的值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * GetFunction返回参数结构体
 * @class
 */
class GetFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的最后修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 函数的代码
         * @type {string || null}
         */
        this.CodeInfo = null;

        /**
         * 函数的描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数的触发器列表
         * @type {Array.<Trigger> || null}
         */
        this.Triggers = null;

        /**
         * 函数的入口
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * 函数代码大小
         * @type {number || null}
         */
        this.CodeSize = null;

        /**
         * 函数的超时时间
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 函数的最大可用内存
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * 函数的运行环境
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的私有网络
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * 是否使用GPU
         * @type {string || null}
         */
        this.UseGpu = null;

        /**
         * 函数的环境变量
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * 代码是否正确
         * @type {string || null}
         */
        this.CodeResult = null;

        /**
         * 代码错误信息
         * @type {string || null}
         */
        this.CodeError = null;

        /**
         * 代码错误码
         * @type {number || null}
         */
        this.ErrNo = null;

        /**
         * 函数的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数绑定的角色
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 是否自动安装依赖
         * @type {string || null}
         */
        this.InstallDependency = null;

        /**
         * 函数状态，状态值及流转[参考说明](https://cloud.tencent.com/document/product/583/47175)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 日志投递到的Cls日志集
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * 日志投递到的Cls Topic
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 函数ID
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 函数的标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * EipConfig配置
         * @type {EipOutConfig || null}
         */
        this.EipConfig = null;

        /**
         * 域名信息
         * @type {AccessInfo || null}
         */
        this.AccessInfo = null;

        /**
         * 函数类型，取值为HTTP或者Event
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否启用L5
         * @type {string || null}
         */
        this.L5Enable = null;

        /**
         * 函数关联的Layer版本信息
         * @type {Array.<LayerVersionInfo> || null}
         */
        this.Layers = null;

        /**
         * 函数关联的死信队列信息
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

        /**
         * 函数创建回见
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 公网访问配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PublicNetConfigOut || null}
         */
        this.PublicNetConfig = null;

        /**
         * 是否启用Ons
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OnsEnable = null;

        /**
         * 文件系统配置参数，用于云函数挂载文件系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CfsConfig || null}
         */
        this.CfsConfig = null;

        /**
         * 函数的计费状态，状态值[参考此处](https://cloud.tencent.com/document/product/583/47175#.E5.87.BD.E6.95.B0.E8.AE.A1.E8.B4.B9.E7.8A.B6.E6.80.81)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AvailableStatus = null;

        /**
         * 函数版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 函数初始化超时时间
         * @type {number || null}
         */
        this.InitTimeout = null;

        /**
         * 函数状态失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StatusReason> || null}
         */
        this.StatusReasons = null;

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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.CodeInfo = 'CodeInfo' in params ? params.CodeInfo : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Triggers) {
            this.Triggers = new Array();
            for (let z in params.Triggers) {
                let obj = new Trigger();
                obj.deserialize(params.Triggers[z]);
                this.Triggers.push(obj);
            }
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.CodeSize = 'CodeSize' in params ? params.CodeSize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.UseGpu = 'UseGpu' in params ? params.UseGpu : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.CodeResult = 'CodeResult' in params ? params.CodeResult : null;
        this.CodeError = 'CodeError' in params ? params.CodeError : null;
        this.ErrNo = 'ErrNo' in params ? params.ErrNo : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.InstallDependency = 'InstallDependency' in params ? params.InstallDependency : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.EipConfig) {
            let obj = new EipOutConfig();
            obj.deserialize(params.EipConfig)
            this.EipConfig = obj;
        }

        if (params.AccessInfo) {
            let obj = new AccessInfo();
            obj.deserialize(params.AccessInfo)
            this.AccessInfo = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.L5Enable = 'L5Enable' in params ? params.L5Enable : null;

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionInfo();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }
        this.AddTime = 'AddTime' in params ? params.AddTime : null;

        if (params.PublicNetConfig) {
            let obj = new PublicNetConfigOut();
            obj.deserialize(params.PublicNetConfig)
            this.PublicNetConfig = obj;
        }
        this.OnsEnable = 'OnsEnable' in params ? params.OnsEnable : null;

        if (params.CfsConfig) {
            let obj = new CfsConfig();
            obj.deserialize(params.CfsConfig)
            this.CfsConfig = obj;
        }
        this.AvailableStatus = 'AvailableStatus' in params ? params.AvailableStatus : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.InitTimeout = 'InitTimeout' in params ? params.InitTimeout : null;

        if (params.StatusReasons) {
            this.StatusReasons = new Array();
            for (let z in params.StatusReasons) {
                let obj = new StatusReason();
                obj.deserialize(params.StatusReasons[z]);
                this.StatusReasons.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFunctionEventInvokeConfig请求参数结构体
 * @class
 */
class GetFunctionEventInvokeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所属命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数版本，默认为$LATEST
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * 函数代码
 * @class
 */
class Code extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象存储桶名称（填写存储桶名称自定义部分，不包含-appid）
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 对象存储对象路径
         * @type {string || null}
         */
        this.CosObjectName = null;

        /**
         * 包含函数代码文件及其依赖项的 zip 格式文件，zip包大小上限为 50MB，使用该接口时要求将 zip 文件的内容转成 base64 编码
         * @type {string || null}
         */
        this.ZipFile = null;

        /**
         * 对象存储的地域，地域为北京时需要传入ap-beijing,北京一区时需要传递ap-beijing-1，其他的地域不需要传递。
         * @type {string || null}
         */
        this.CosBucketRegion = null;

        /**
         * 如果是通过Demo创建的话，需要传入DemoId
         * @type {string || null}
         */
        this.DemoId = null;

        /**
         * 如果是从TempCos创建的话，需要传入TempCosObjectName
         * @type {string || null}
         */
        this.TempCosObjectName = null;

        /**
         * Git地址
         * @type {string || null}
         */
        this.GitUrl = null;

        /**
         * Git用户名
         * @type {string || null}
         */
        this.GitUserName = null;

        /**
         * Git密码
         * @type {string || null}
         */
        this.GitPassword = null;

        /**
         * 加密后的Git密码，一般无需指定
         * @type {string || null}
         */
        this.GitPasswordSecret = null;

        /**
         * Git分支
         * @type {string || null}
         */
        this.GitBranch = null;

        /**
         * 代码在Git仓库中的路径
         * @type {string || null}
         */
        this.GitDirectory = null;

        /**
         * 指定要拉取的版本
         * @type {string || null}
         */
        this.GitCommitId = null;

        /**
         * 加密后的Git用户名，一般无需指定
         * @type {string || null}
         */
        this.GitUserNameSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosObjectName = 'CosObjectName' in params ? params.CosObjectName : null;
        this.ZipFile = 'ZipFile' in params ? params.ZipFile : null;
        this.CosBucketRegion = 'CosBucketRegion' in params ? params.CosBucketRegion : null;
        this.DemoId = 'DemoId' in params ? params.DemoId : null;
        this.TempCosObjectName = 'TempCosObjectName' in params ? params.TempCosObjectName : null;
        this.GitUrl = 'GitUrl' in params ? params.GitUrl : null;
        this.GitUserName = 'GitUserName' in params ? params.GitUserName : null;
        this.GitPassword = 'GitPassword' in params ? params.GitPassword : null;
        this.GitPasswordSecret = 'GitPasswordSecret' in params ? params.GitPasswordSecret : null;
        this.GitBranch = 'GitBranch' in params ? params.GitBranch : null;
        this.GitDirectory = 'GitDirectory' in params ? params.GitDirectory : null;
        this.GitCommitId = 'GitCommitId' in params ? params.GitCommitId : null;
        this.GitUserNameSecret = 'GitUserNameSecret' in params ? params.GitUserNameSecret : null;

    }
}

/**
 * PutTotalConcurrencyConfig请求参数结构体
 * @class
 */
class PutTotalConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号并发内存配额，注：账号并发内存配额下限：用户已用并发内存总额 + 12800
         * @type {number || null}
         */
        this.TotalConcurrencyMem = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalConcurrencyMem = 'TotalConcurrencyMem' in params ? params.TotalConcurrencyMem : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * UpdateNamespace请求参数结构体
 * @class
 */
class UpdateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 命名空间描述
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * GetLayerVersion返回参数结构体
 * @class
 */
class GetLayerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 适配的运行时
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntimes = null;

        /**
         * 层中版本文件的SHA256编码
         * @type {string || null}
         */
        this.CodeSha256 = null;

        /**
         * 层中版本文件的下载地址
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 版本的创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 版本的描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 许可证信息
         * @type {string || null}
         */
        this.LicenseInfo = null;

        /**
         * 版本号
         * @type {number || null}
         */
        this.LayerVersion = null;

        /**
         * 层名称
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * 层的具体版本当前状态，可能取值：
Active 正常
Publishing  发布中
PublishFailed  发布失败
Deleted 已删除
         * @type {string || null}
         */
        this.Status = null;

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
        this.CompatibleRuntimes = 'CompatibleRuntimes' in params ? params.CompatibleRuntimes : null;
        this.CodeSha256 = 'CodeSha256' in params ? params.CodeSha256 : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.LicenseInfo = 'LicenseInfo' in params ? params.LicenseInfo : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PutReservedConcurrencyConfig返回参数结构体
 * @class
 */
class PutReservedConcurrencyConfigResponse extends  AbstractModel {
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
 * 日志信息
 * @class
 */
class FunctionLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数执行完成后的返回值
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * 执行该函数对应的requestId
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * 函数开始执行时的时间点
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 函数执行结果，如果是 0 表示执行成功，其他值表示失败
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * 函数调用是否结束，如果是 1 表示执行结束，其他值表示调用异常
         * @type {number || null}
         */
        this.InvokeFinished = null;

        /**
         * 函数执行耗时，单位为 ms
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 函数计费时间，根据 duration 向上取最近的 100ms，单位为ms
         * @type {number || null}
         */
        this.BillDuration = null;

        /**
         * 函数执行时消耗实际内存大小，单位为 Byte
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * 函数执行过程中的日志输出
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 日志来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 重试次数
         * @type {number || null}
         */
        this.RetryNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.InvokeFinished = 'InvokeFinished' in params ? params.InvokeFinished : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.BillDuration = 'BillDuration' in params ? params.BillDuration : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.RetryNum = 'RetryNum' in params ? params.RetryNum : null;

    }
}

/**
 * 异步重试配置
 * @class
 */
class RetryConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重试次数
         * @type {number || null}
         */
        this.RetryNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetryNum = 'RetryNum' in params ? params.RetryNum : null;

    }
}

/**
 * GetFunctionAddress返回参数结构体
 * @class
 */
class GetFunctionAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的Cos地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 函数的SHA256编码
         * @type {string || null}
         */
        this.CodeSha256 = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.CodeSha256 = 'CodeSha256' in params ? params.CodeSha256 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云函数关联的cfs配置信息
 * @class
 */
class CfsInsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户组id
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 文件系统实例id
         * @type {string || null}
         */
        this.CfsId = null;

        /**
         * 文件系统挂载点id
         * @type {string || null}
         */
        this.MountInsId = null;

        /**
         * 本地挂载点
         * @type {string || null}
         */
        this.LocalMountDir = null;

        /**
         * 远程挂载点
         * @type {string || null}
         */
        this.RemoteMountDir = null;

        /**
         * 文件系统ip，配置 cfs 时无需填写。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 文件系统所在的私有网络id，配置 cfs 时无需填写。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MountVpcId = null;

        /**
         * 文件系统所在私有网络的子网id，配置 cfs 时无需填写。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MountSubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.CfsId = 'CfsId' in params ? params.CfsId : null;
        this.MountInsId = 'MountInsId' in params ? params.MountInsId : null;
        this.LocalMountDir = 'LocalMountDir' in params ? params.LocalMountDir : null;
        this.RemoteMountDir = 'RemoteMountDir' in params ? params.RemoteMountDir : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.MountVpcId = 'MountVpcId' in params ? params.MountVpcId : null;
        this.MountSubnetId = 'MountSubnetId' in params ? params.MountSubnetId : null;

    }
}

/**
 * 限制信息
 * @class
 */
class LimitsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间个数限制
         * @type {number || null}
         */
        this.NamespacesCount = null;

        /**
         * 命名空间限制信息
         * @type {Array.<NamespaceLimit> || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespacesCount = 'NamespacesCount' in params ? params.NamespacesCount : null;

        if (params.Namespace) {
            this.Namespace = new Array();
            for (let z in params.Namespace) {
                let obj = new NamespaceLimit();
                obj.deserialize(params.Namespace[z]);
                this.Namespace.push(obj);
            }
        }

    }
}

/**
 * ListLayers返回参数结构体
 * @class
 */
class ListLayersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 层列表
         * @type {Array.<LayerVersionInfo> || null}
         */
        this.Layers = null;

        /**
         * 层总数
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

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionInfo();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 函数版本信息
 * @class
 */
class FunctionVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数版本名称
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 版本描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;

    }
}

/**
 * 函数的异步重试配置详情
 * @class
 */
class AsyncTriggerConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户错误的异步重试重试配置
         * @type {Array.<RetryConfig> || null}
         */
        this.RetryConfig = null;

        /**
         * 消息保留时间
         * @type {number || null}
         */
        this.MsgTTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RetryConfig) {
            this.RetryConfig = new Array();
            for (let z in params.RetryConfig) {
                let obj = new RetryConfig();
                obj.deserialize(params.RetryConfig[z]);
                this.RetryConfig.push(obj);
            }
        }
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;

    }
}

/**
 * 死信队列参数
 * @class
 */
class DeadLetterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信队列模式
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 死信队列主题模式的标签形式
         * @type {string || null}
         */
        this.FilterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;

    }
}

/**
 * ListVersionByFunction请求参数结构体
 * @class
 */
class ListVersionByFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所在命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 数据偏移量，默认值为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据长度，默认值为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime
         * @type {string || null}
         */
        this.OrderBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

    }
}

/**
 * ListFunctions返回参数结构体
 * @class
 */
class ListFunctionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数列表
         * @type {Array.<Function> || null}
         */
        this.Functions = null;

        /**
         * 总数
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

        if (params.Functions) {
            this.Functions = new Array();
            for (let z in params.Functions) {
                let obj = new Function();
                obj.deserialize(params.Functions[z]);
                this.Functions.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListTriggers请求参数结构体
 * @class
 */
class ListTriggersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 命名空间，默认是default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 数据偏移量，默认值为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据长度，默认值为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：add_time，mod_time，默认mod_time
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC，默认DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * * Qualifier:
函数版本，别名
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * CreateFunction返回参数结构体
 * @class
 */
class CreateFunctionResponse extends  AbstractModel {
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
 * GetReservedConcurrencyConfig请求参数结构体
 * @class
 */
class GetReservedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取预置并发详情的函数名称。
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所在的命名空间，默认为default。
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * PutProvisionedConcurrencyConfig请求参数结构体
 * @class
 */
class PutProvisionedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要设置预置并发的函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的版本号，注：$LATEST版本不支持预置并发
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 预置并发数量，注：所有版本的预置并发数总和存在上限限制，当前的上限是：函数最大并发配额 - 100
         * @type {number || null}
         */
        this.VersionProvisionedConcurrencyNum = null;

        /**
         * 函数所属命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.VersionProvisionedConcurrencyNum = 'VersionProvisionedConcurrencyNum' in params ? params.VersionProvisionedConcurrencyNum : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * 函数列表
 * @class
 */
class Function extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 运行时
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数ID
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数状态，状态值及流转[参考此处](https://cloud.tencent.com/document/product/583/47175)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 函数状态详情
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 函数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 函数类型，取值为 HTTP 或者 Event
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 函数状态失败原因
         * @type {Array.<StatusReason> || null}
         */
        this.StatusReasons = null;

        /**
         * 函数所有版本预置并发内存总和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalProvisionedConcurrencyMem = null;

        /**
         * 函数并发保留内存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedConcurrencyMem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.StatusReasons) {
            this.StatusReasons = new Array();
            for (let z in params.StatusReasons) {
                let obj = new StatusReason();
                obj.deserialize(params.StatusReasons[z]);
                this.StatusReasons.push(obj);
            }
        }
        this.TotalProvisionedConcurrencyMem = 'TotalProvisionedConcurrencyMem' in params ? params.TotalProvisionedConcurrencyMem : null;
        this.ReservedConcurrencyMem = 'ReservedConcurrencyMem' in params ? params.ReservedConcurrencyMem : null;

    }
}

/**
 * 名称空间已使用信息
 * @class
 */
class NamespaceUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数数组
         * @type {Array.<string> || null}
         */
        this.Functions = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 命名空间函数个数
         * @type {number || null}
         */
        this.FunctionsCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Functions = 'Functions' in params ? params.Functions : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.FunctionsCount = 'FunctionsCount' in params ? params.FunctionsCount : null;

    }
}

/**
 * ListAliases请求参数结构体
 * @class
 */
class ListAliasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数所在的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 如果提供此参数，则只返回与该函数版本有关联的别名
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 数据偏移量，默认值为 0
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数据长度，默认值为 20
         * @type {string || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * EipOutConfig
 * @class
 */
class EipOutConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否是固定IP，["TRUE","FALSE"]
         * @type {string || null}
         */
        this.EipFixed = null;

        /**
         * IP列表
         * @type {Array.<string> || null}
         */
        this.Eips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipFixed = 'EipFixed' in params ? params.EipFixed : null;
        this.Eips = 'Eips' in params ? params.Eips : null;

    }
}

/**
 * 函数的版本别名
 * @class
 */
class Alias extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名指向的主版本
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 别名的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 别名的路由信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;

    }
}

/**
 * GetLayerVersion请求参数结构体
 * @class
 */
class GetLayerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 层名称
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * 版本号
         * @type {number || null}
         */
        this.LayerVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;

    }
}

/**
 * GetFunctionLogs返回参数结构体
 * @class
 */
class GetFunctionLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数日志的总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 函数日志信息
         * @type {Array.<FunctionLog> || null}
         */
        this.Data = null;

        /**
         * 该字段已下线
         * @type {LogSearchContext || null}
         */
        this.SearchContext = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new FunctionLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.SearchContext) {
            let obj = new LogSearchContext();
            obj.deserialize(params.SearchContext)
            this.SearchContext = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTrigger返回参数结构体
 * @class
 */
class DeleteTriggerResponse extends  AbstractModel {
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
 * DeleteTrigger请求参数结构体
 * @class
 */
class DeleteTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 要删除的触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 要删除的触发器类型，目前支持 cos 、cmq、 timer、ckafka 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 函数所属命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 如果删除的触发器类型为 COS 触发器，该字段为必填值，存放 JSON 格式的数据 {"event":"cos:ObjectCreated:*"}，数据内容和 SetTrigger 接口中该字段的格式相同；如果删除的触发器类型为定时触发器或 CMQ 触发器，可以不指定该字段
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * 函数的版本信息
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * 私有网络参数配置
 * @class
 */
class VpcConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络 的 Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网的 Id
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * GetProvisionedConcurrencyConfig返回参数结构体
 * @class
 */
class GetProvisionedConcurrencyConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该函数剩余可配置的预置并发数。
         * @type {number || null}
         */
        this.UnallocatedConcurrencyNum = null;

        /**
         * 函数已预置的并发配置详情。
         * @type {Array.<VersionProvisionedConcurrencyInfo> || null}
         */
        this.Allocated = null;

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
        this.UnallocatedConcurrencyNum = 'UnallocatedConcurrencyNum' in params ? params.UnallocatedConcurrencyNum : null;

        if (params.Allocated) {
            this.Allocated = new Array();
            for (let z in params.Allocated) {
                let obj = new VersionProvisionedConcurrencyInfo();
                obj.deserialize(params.Allocated[z]);
                this.Allocated.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAsyncEvents返回参数结构体
 * @class
 */
class ListAsyncEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足过滤条件的事件总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 异步事件列表
         * @type {Array.<AsyncEvent> || null}
         */
        this.EventList = null;

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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new AsyncEvent();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListNamespaces返回参数结构体
 * @class
 */
class ListNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * namespace详情
         * @type {Array.<Namespace> || null}
         */
        this.Namespaces = null;

        /**
         * 返回的namespace数量
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

        if (params.Namespaces) {
            this.Namespaces = new Array();
            for (let z in params.Namespaces) {
                let obj = new Namespace();
                obj.deserialize(params.Namespaces[z]);
                this.Namespaces.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 公网访问固定ip配置
 * @class
 */
class EipConfigOut extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否是固定IP，["ENABLE","DISABLE"]
         * @type {string || null}
         */
        this.EipStatus = null;

        /**
         * IP列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EipAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipStatus = 'EipStatus' in params ? params.EipStatus : null;
        this.EipAddress = 'EipAddress' in params ? params.EipAddress : null;

    }
}

/**
 * UpdateFunctionCode返回参数结构体
 * @class
 */
class UpdateFunctionCodeResponse extends  AbstractModel {
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

module.exports = {
    AccessInfo: AccessInfo,
    UpdateAliasRequest: UpdateAliasRequest,
    Trigger: Trigger,
    GetProvisionedConcurrencyConfigRequest: GetProvisionedConcurrencyConfigRequest,
    ListAliasesResponse: ListAliasesResponse,
    DeleteLayerVersionResponse: DeleteLayerVersionResponse,
    GetReservedConcurrencyConfigResponse: GetReservedConcurrencyConfigResponse,
    RoutingConfig: RoutingConfig,
    DeleteProvisionedConcurrencyConfigResponse: DeleteProvisionedConcurrencyConfigResponse,
    VersionWeight: VersionWeight,
    TimeInterval: TimeInterval,
    LayerVersionInfo: LayerVersionInfo,
    PutProvisionedConcurrencyConfigResponse: PutProvisionedConcurrencyConfigResponse,
    UpdateFunctionConfigurationResponse: UpdateFunctionConfigurationResponse,
    PublishLayerVersionResponse: PublishLayerVersionResponse,
    UsageInfo: UsageInfo,
    PublicNetConfigIn: PublicNetConfigIn,
    DeleteProvisionedConcurrencyConfigRequest: DeleteProvisionedConcurrencyConfigRequest,
    DeleteReservedConcurrencyConfigResponse: DeleteReservedConcurrencyConfigResponse,
    GetAliasResponse: GetAliasResponse,
    UpdateAliasResponse: UpdateAliasResponse,
    VersionProvisionedConcurrencyInfo: VersionProvisionedConcurrencyInfo,
    GetFunctionLogsRequest: GetFunctionLogsRequest,
    StatusReason: StatusReason,
    Tag: Tag,
    LogFilter: LogFilter,
    EipConfigIn: EipConfigIn,
    ListLayerVersionsResponse: ListLayerVersionsResponse,
    DeleteFunctionRequest: DeleteFunctionRequest,
    CopyFunctionResponse: CopyFunctionResponse,
    Namespace: Namespace,
    GetFunctionRequest: GetFunctionRequest,
    ListNamespacesRequest: ListNamespacesRequest,
    PublishVersionRequest: PublishVersionRequest,
    DeleteAliasRequest: DeleteAliasRequest,
    ListVersionByFunctionResponse: ListVersionByFunctionResponse,
    GetAliasRequest: GetAliasRequest,
    CreateNamespaceResponse: CreateNamespaceResponse,
    PublicNetConfigOut: PublicNetConfigOut,
    UpdateFunctionCodeRequest: UpdateFunctionCodeRequest,
    UpdateFunctionConfigurationRequest: UpdateFunctionConfigurationRequest,
    DeleteReservedConcurrencyConfigRequest: DeleteReservedConcurrencyConfigRequest,
    GetFunctionEventInvokeConfigResponse: GetFunctionEventInvokeConfigResponse,
    ListTriggersResponse: ListTriggersResponse,
    TerminateAsyncEventRequest: TerminateAsyncEventRequest,
    ListLayersRequest: ListLayersRequest,
    CopyFunctionRequest: CopyFunctionRequest,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    LayerVersionSimple: LayerVersionSimple,
    TriggerCount: TriggerCount,
    NamespaceLimit: NamespaceLimit,
    CfsConfig: CfsConfig,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    ListFunctionsRequest: ListFunctionsRequest,
    CreateTriggerRequest: CreateTriggerRequest,
    UpdateNamespaceResponse: UpdateNamespaceResponse,
    GetAccountResponse: GetAccountResponse,
    DeleteFunctionResponse: DeleteFunctionResponse,
    ListAsyncEventsRequest: ListAsyncEventsRequest,
    Result: Result,
    CreateAliasResponse: CreateAliasResponse,
    LogSearchContext: LogSearchContext,
    TriggerInfo: TriggerInfo,
    CreateFunctionRequest: CreateFunctionRequest,
    GetAccountRequest: GetAccountRequest,
    PutTotalConcurrencyConfigResponse: PutTotalConcurrencyConfigResponse,
    DeleteAliasResponse: DeleteAliasResponse,
    PublishVersionResponse: PublishVersionResponse,
    AsyncEvent: AsyncEvent,
    Environment: Environment,
    TerminateAsyncEventResponse: TerminateAsyncEventResponse,
    GetFunctionAddressRequest: GetFunctionAddressRequest,
    InvokeResponse: InvokeResponse,
    InvokeRequest: InvokeRequest,
    CreateAliasRequest: CreateAliasRequest,
    VersionMatch: VersionMatch,
    UpdateFunctionEventInvokeConfigResponse: UpdateFunctionEventInvokeConfigResponse,
    PutReservedConcurrencyConfigRequest: PutReservedConcurrencyConfigRequest,
    ListLayerVersionsRequest: ListLayerVersionsRequest,
    CreateTriggerResponse: CreateTriggerResponse,
    PublishLayerVersionRequest: PublishLayerVersionRequest,
    CreateNamespaceRequest: CreateNamespaceRequest,
    UpdateFunctionEventInvokeConfigRequest: UpdateFunctionEventInvokeConfigRequest,
    DeleteLayerVersionRequest: DeleteLayerVersionRequest,
    Filter: Filter,
    Variable: Variable,
    GetFunctionResponse: GetFunctionResponse,
    GetFunctionEventInvokeConfigRequest: GetFunctionEventInvokeConfigRequest,
    Code: Code,
    PutTotalConcurrencyConfigRequest: PutTotalConcurrencyConfigRequest,
    UpdateNamespaceRequest: UpdateNamespaceRequest,
    GetLayerVersionResponse: GetLayerVersionResponse,
    PutReservedConcurrencyConfigResponse: PutReservedConcurrencyConfigResponse,
    FunctionLog: FunctionLog,
    RetryConfig: RetryConfig,
    GetFunctionAddressResponse: GetFunctionAddressResponse,
    CfsInsInfo: CfsInsInfo,
    LimitsInfo: LimitsInfo,
    ListLayersResponse: ListLayersResponse,
    FunctionVersion: FunctionVersion,
    AsyncTriggerConfig: AsyncTriggerConfig,
    DeadLetterConfig: DeadLetterConfig,
    ListVersionByFunctionRequest: ListVersionByFunctionRequest,
    ListFunctionsResponse: ListFunctionsResponse,
    ListTriggersRequest: ListTriggersRequest,
    CreateFunctionResponse: CreateFunctionResponse,
    GetReservedConcurrencyConfigRequest: GetReservedConcurrencyConfigRequest,
    PutProvisionedConcurrencyConfigRequest: PutProvisionedConcurrencyConfigRequest,
    Function: Function,
    NamespaceUsage: NamespaceUsage,
    ListAliasesRequest: ListAliasesRequest,
    EipOutConfig: EipOutConfig,
    Alias: Alias,
    GetLayerVersionRequest: GetLayerVersionRequest,
    GetFunctionLogsResponse: GetFunctionLogsResponse,
    DeleteTriggerResponse: DeleteTriggerResponse,
    DeleteTriggerRequest: DeleteTriggerRequest,
    VpcConfig: VpcConfig,
    GetProvisionedConcurrencyConfigResponse: GetProvisionedConcurrencyConfigResponse,
    ListAsyncEventsResponse: ListAsyncEventsResponse,
    ListNamespacesResponse: ListNamespacesResponse,
    EipConfigOut: EipConfigOut,
    UpdateFunctionCodeResponse: UpdateFunctionCodeResponse,

}
