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
 * ListRuntimesMC返回参数结构体
 * @class
 */
class ListRuntimesMCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时列表
         * @type {Array.<RuntimeMC> || null}
         */
        this.Runtimes = null;

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

        if (params.Runtimes) {
            this.Runtimes = new Array();
            for (let z in params.Runtimes) {
                let obj = new RuntimeMC();
                obj.deserialize(params.Runtimes[z]);
                this.Runtimes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时详细信息
 * @class
 */
class RuntimeMC extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时id
         * @type {number || null}
         */
        this.RuntimeId = null;

        /**
         * 主账号uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 运行时名称，用户输入，同一uin内唯一
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 运行时所在地域，tianjin，beijiing，guangzhou等
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 运行时类型：0: sandbox, 1:shared, 2:private
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 运行时状态：1:running, 2:deleting, 3:creating, 4:scaling, 5:unavailable, 6:deleted, 7:errored
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 运行时创建时间
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * 运行时更新时间
         * @type {number || null}
         */
        this.UpdatedAt = null;

        /**
         * 运行时资源配置，worker总配额，0:0vCore0G, 1:1vCore2G, 2:2vCore4G, 4:4vCore8G, 8:8vCore16G, 12:12vCore24G, 16:16vCore32G, 100:unlimited
         * @type {number || null}
         */
        this.WorkerSize = null;

        /**
         * 运行时资源配置，worker副本数
         * @type {number || null}
         */
        this.WorkerReplica = null;

        /**
         * 正在运行的应用实例数量
         * @type {number || null}
         */
        this.RunningInstanceCount = null;

        /**
         * 已使用cpu核数
         * @type {number || null}
         */
        this.CpuUsed = null;

        /**
         * cpu核数上限
         * @type {number || null}
         */
        this.CpuLimit = null;

        /**
         * 已使用内存 MB
         * @type {number || null}
         */
        this.MemoryUsed = null;

        /**
         * 内存上限 MB
         * @type {number || null}
         */
        this.MemoryLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuntimeId = 'RuntimeId' in params ? params.RuntimeId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.WorkerSize = 'WorkerSize' in params ? params.WorkerSize : null;
        this.WorkerReplica = 'WorkerReplica' in params ? params.WorkerReplica : null;
        this.RunningInstanceCount = 'RunningInstanceCount' in params ? params.RunningInstanceCount : null;
        this.CpuUsed = 'CpuUsed' in params ? params.CpuUsed : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemoryUsed = 'MemoryUsed' in params ? params.MemoryUsed : null;
        this.MemoryLimit = 'MemoryLimit' in params ? params.MemoryLimit : null;

    }
}

/**
 * GetRuntimeResourceMonitorMetricMC返回参数结构体
 * @class
 */
class GetRuntimeResourceMonitorMetricMCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称，K8sWorkloadCpuCoreUsed，K8sWorkloadMemUsageBytes，K8sWorkloadNetworkReceiveBytesBw，K8sWorkloadNetworkTransmitBytesBw
         * @type {string || null}
         */
        this.MetricType = null;

        /**
         * metric数值列表
         * @type {Array.<MetricValueMC> || null}
         */
        this.Values = null;

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
        this.MetricType = 'MetricType' in params ? params.MetricType : null;

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new MetricValueMC();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListRuntimeDeployedInstancesMC请求参数结构体
 * @class
 */
class ListRuntimeDeployedInstancesMCRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时id
         * @type {number || null}
         */
        this.RuntimeId = null;

        /**
         * 最大请求数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 请求偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序类型：1:创建时间排序, 2:更新时间排序（默认）
         * @type {number || null}
         */
        this.SortType = null;

        /**
         * 排序方式：asc，desc（默认）
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 运行时地域
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuntimeId = 'RuntimeId' in params ? params.RuntimeId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ListDeployableRuntimesMC返回参数结构体
 * @class
 */
class ListDeployableRuntimesMCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时列表
         * @type {Array.<AbstractRuntimeMC> || null}
         */
        this.Runtimes = null;

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

        if (params.Runtimes) {
            this.Runtimes = new Array();
            for (let z in params.Runtimes) {
                let obj = new AbstractRuntimeMC();
                obj.deserialize(params.Runtimes[z]);
                this.Runtimes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRuntimeMC返回参数结构体
 * @class
 */
class GetRuntimeMCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时详情
         * @type {RuntimeMC || null}
         */
        this.Runtime = null;

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

        if (params.Runtime) {
            let obj = new RuntimeMC();
            obj.deserialize(params.Runtime)
            this.Runtime = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListDeployableRuntimesMC请求参数结构体
 * @class
 */
class ListDeployableRuntimesMCRequest extends  AbstractModel {
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
 * ListRuntimesMC请求参数结构体
 * @class
 */
class ListRuntimesMCRequest extends  AbstractModel {
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
 * GetRuntimeMC请求参数结构体
 * @class
 */
class GetRuntimeMCRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时id
         * @type {number || null}
         */
        this.RuntimeId = null;

        /**
         * 运行时地域
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuntimeId = 'RuntimeId' in params ? params.RuntimeId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * GetMonitorMetricResponse
 * @class
 */
class MetricValueMC extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 对应的value值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Val = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Val = 'Val' in params ? params.Val : null;

    }
}

/**
 * GetRuntimeResourceMonitorMetricMC请求参数结构体
 * @class
 */
class GetRuntimeResourceMonitorMetricMCRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时id
         * @type {number || null}
         */
        this.RuntimeId = null;

        /**
         * 起始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 指标类型：0:CPU, 1:MemUsageBytes, 2:K8sWorkloadNetworkReceiveBytesBw, 3:K8sWorkloadNetworkTransmitBytesBw
         * @type {number || null}
         */
        this.MetricType = null;

        /**
         * 是否返回百分比数值，仅支持CPU，Memory
         * @type {boolean || null}
         */
        this.RateType = null;

        /**
         * 采样粒度：60(s), 300(s), 3600(s), 86400(s)
         * @type {number || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuntimeId = 'RuntimeId' in params ? params.RuntimeId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricType = 'MetricType' in params ? params.MetricType : null;
        this.RateType = 'RateType' in params ? params.RateType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * 运行时精简信息
 * @class
 */
class AbstractRuntimeMC extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时id
         * @type {number || null}
         */
        this.RuntimeId = null;

        /**
         * 运行时名称，用户输入，同一uin内唯一
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 运行时类型：0: sandbox, 1:shared, 2:private
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 运行时所在地域，tianjin，beijiing，guangzhou等
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 运行时所在地域，tianjin，beijiing，guangzhou等（同Zone）
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 运行时应用listener地址后缀
         * @type {string || null}
         */
        this.Addr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuntimeId = 'RuntimeId' in params ? params.RuntimeId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Addr = 'Addr' in params ? params.Addr : null;

    }
}

/**
 * ListRuntimeDeployedInstancesMC返回参数结构体
 * @class
 */
class ListRuntimeDeployedInstancesMCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时所部属的应用实例列表
         * @type {Array.<RuntimeDeployedInstanceMC> || null}
         */
        this.Instances = null;

        /**
         * 满足条件的记录总数，用于分页器
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new RuntimeDeployedInstanceMC();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时部署的应用实例详情
 * @class
 */
class RuntimeDeployedInstanceMC extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 应用id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 应用实例id
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 应用实例版本
         * @type {number || null}
         */
        this.InstanceVersion = null;

        /**
         * 应用实例创建时间
         * @type {number || null}
         */
        this.InstanceCreatedAt = null;

        /**
         * 应用实例部署状态. 0:running, 1:deleting
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 应用实例部署创建时间
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * 应用实例部署更新时间
         * @type {number || null}
         */
        this.UpdatedAt = null;

        /**
         * 应用类型：0:NormalApp普通应用 1:TemplateApp模板应用 2:LightApp轻应用 3:MicroConnTemplate微连接模板 4:MicroConnApp微连接应用
         * @type {number || null}
         */
        this.ProjectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceVersion = 'InstanceVersion' in params ? params.InstanceVersion : null;
        this.InstanceCreatedAt = 'InstanceCreatedAt' in params ? params.InstanceCreatedAt : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;

    }
}

module.exports = {
    ListRuntimesMCResponse: ListRuntimesMCResponse,
    RuntimeMC: RuntimeMC,
    GetRuntimeResourceMonitorMetricMCResponse: GetRuntimeResourceMonitorMetricMCResponse,
    ListRuntimeDeployedInstancesMCRequest: ListRuntimeDeployedInstancesMCRequest,
    ListDeployableRuntimesMCResponse: ListDeployableRuntimesMCResponse,
    GetRuntimeMCResponse: GetRuntimeMCResponse,
    ListDeployableRuntimesMCRequest: ListDeployableRuntimesMCRequest,
    ListRuntimesMCRequest: ListRuntimesMCRequest,
    GetRuntimeMCRequest: GetRuntimeMCRequest,
    MetricValueMC: MetricValueMC,
    GetRuntimeResourceMonitorMetricMCRequest: GetRuntimeResourceMonitorMetricMCRequest,
    AbstractRuntimeMC: AbstractRuntimeMC,
    ListRuntimeDeployedInstancesMCResponse: ListRuntimeDeployedInstancesMCResponse,
    RuntimeDeployedInstanceMC: RuntimeDeployedInstanceMC,

}
