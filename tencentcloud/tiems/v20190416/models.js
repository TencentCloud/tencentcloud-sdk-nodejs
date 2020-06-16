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
 * DisableRsgAsGroup请求参数结构体
 * @class
 */
class DisableRsgAsGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组 ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ExposeService返回参数结构体
 * @class
 */
class ExposeServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 暴露方式
         * @type {ExposeInfo || null}
         */
        this.Expose = null;

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

        if (params.Expose) {
            let obj = new ExposeInfo();
            obj.deserialize(params.Expose)
            this.Expose = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 伸缩组活动关联的节点
 * @class
 */
class RsgAsActivityRelatedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点状态
         * @type {string || null}
         */
        this.InstanceStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

    }
}

/**
 * DeleteJob返回参数结构体
 * @class
 */
class DeleteJobResponse extends  AbstractModel {
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
 * DeleteRuntime返回参数结构体
 * @class
 */
class DeleteRuntimeResponse extends  AbstractModel {
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
 * CreateJob请求参数结构体
 * @class
 */
class CreateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 使用的资源组 Id，默认使用共享资源组
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 处理器配置, 单位为1/1000核；范围[100, 256000]
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存配置, 单位为1M；范围[100, 256000]
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 运行集群
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 预测输入
         * @type {PredictInput || null}
         */
        this.PredictInput = null;

        /**
         * 任务描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 同时处理任务的 Worker 个数
         * @type {number || null}
         */
        this.WorkerCount = null;

        /**
         * 使用的配置 Id
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * GPU算力配置，单位为1/1000 卡，范围 [0, 256000]
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 显存配置, 单位为1M，范围 [0, 256000]
         * @type {number || null}
         */
        this.GpuMemory = null;

        /**
         * GPU类型
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * 量化输入
         * @type {QuantizationInput || null}
         */
        this.QuantizationInput = null;

        /**
         * Cls日志主题ID
         * @type {string || null}
         */
        this.LogTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;

        if (params.PredictInput) {
            let obj = new PredictInput();
            obj.deserialize(params.PredictInput)
            this.PredictInput = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.WorkerCount = 'WorkerCount' in params ? params.WorkerCount : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.GpuMemory = 'GpuMemory' in params ? params.GpuMemory : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;

        if (params.QuantizationInput) {
            let obj = new QuantizationInput();
            obj.deserialize(params.QuantizationInput)
            this.QuantizationInput = obj;
        }
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;

    }
}

/**
 * ExposeService请求参数结构体
 * @class
 */
class ExposeServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务Id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 暴露方式，支持 EXTERNAL（外网暴露），VPC （VPC内网打通）
         * @type {string || null}
         */
        this.ExposeType = null;

        /**
         * 暴露方式为 VPC 时，填写需要打通的私有网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 暴露方式为 VPC 时，填写需要打通的子网Id
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ExposeType = 'ExposeType' in params ? params.ExposeType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeServiceConfigs返回参数结构体
 * @class
 */
class DescribeServiceConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务配置
         * @type {Array.<Config> || null}
         */
        this.ServiceConfigs = null;

        /**
         * 服务配置总数
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

        if (params.ServiceConfigs) {
            this.ServiceConfigs = new Array();
            for (let z in params.ServiceConfigs) {
                let obj = new Config();
                obj.deserialize(params.ServiceConfigs[z]);
                this.ServiceConfigs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 扩缩容配置
 * @class
 */
class Scaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大副本数，ScaleMode 为 MANUAL 时辞会此值会被置为 StartReplicas 取值
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 最小副本数，ScaleMode 为 MANUAL 时辞会此值会被置为 StartReplicas 取值
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * 起始副本数
         * @type {number || null}
         */
        this.StartReplicas = null;

        /**
         * 扩缩容指标，选择自动扩缩容时至少需要选择一个指标，支持CPU-UTIL、MEMORY-UTIL
         * @type {Array.<Option> || null}
         */
        this.HpaMetrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.StartReplicas = 'StartReplicas' in params ? params.StartReplicas : null;

        if (params.HpaMetrics) {
            this.HpaMetrics = new Array();
            for (let z in params.HpaMetrics) {
                let obj = new Option();
                obj.deserialize(params.HpaMetrics[z]);
                this.HpaMetrics.push(obj);
            }
        }

    }
}

/**
 * CreateJob返回参数结构体
 * @class
 */
class CreateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务
         * @type {Job || null}
         */
        this.Job = null;

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

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteService返回参数结构体
 * @class
 */
class DeleteServiceResponse extends  AbstractModel {
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
 * DescribeRsgAsGroups返回参数结构体
 * @class
 */
class DescribeRsgAsGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所查询的伸缩组数组
         * @type {Array.<RsgAsGroup> || null}
         */
        this.RsgAsGroupSet = null;

        /**
         * 伸缩组数组总数目
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

        if (params.RsgAsGroupSet) {
            this.RsgAsGroupSet = new Array();
            for (let z in params.RsgAsGroupSet) {
                let obj = new RsgAsGroup();
                obj.deserialize(params.RsgAsGroupSet[z]);
                this.RsgAsGroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateService返回参数结构体
 * @class
 */
class UpdateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务
         * @type {ModelService || null}
         */
        this.Service = null;

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

        if (params.Service) {
            let obj = new ModelService();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节点
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 节点所在地区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 节点类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 节点充值类型
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Cpu 核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Gpu 核数
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 节点状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 节点故障信息
         * @type {string || null}
         */
        this.AbnormalReason = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.Created = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.Updated = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * 所属资源组 ID
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 自动续费标签
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 节点所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 当前 Cpu 申请使用量
         * @type {number || null}
         */
        this.CpuRequested = null;

        /**
         * 当前 Memory 申请使用量
         * @type {number || null}
         */
        this.MemoryRequested = null;

        /**
         * 当前 Gpu 申请使用量
         * @type {number || null}
         */
        this.GpuRequested = null;

        /**
         * 节点所在伸缩组 ID
         * @type {string || null}
         */
        this.RsgAsGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.State = 'State' in params ? params.State : null;
        this.AbnormalReason = 'AbnormalReason' in params ? params.AbnormalReason : null;
        this.Created = 'Created' in params ? params.Created : null;
        this.Updated = 'Updated' in params ? params.Updated : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.CpuRequested = 'CpuRequested' in params ? params.CpuRequested : null;
        this.MemoryRequested = 'MemoryRequested' in params ? params.MemoryRequested : null;
        this.GpuRequested = 'GpuRequested' in params ? params.GpuRequested : null;
        this.RsgAsGroupId = 'RsgAsGroupId' in params ? params.RsgAsGroupId : null;

    }
}

/**
 * UpdateRsgAsGroup返回参数结构体
 * @class
 */
class UpdateRsgAsGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组的伸缩组
         * @type {RsgAsGroup || null}
         */
        this.RsgAsGroup = null;

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

        if (params.RsgAsGroup) {
            let obj = new RsgAsGroup();
            obj.deserialize(params.RsgAsGroup)
            this.RsgAsGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServices返回参数结构体
 * @class
 */
class DescribeServicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务列表
         * @type {Array.<ModelService> || null}
         */
        this.Services = null;

        /**
         * 服务总数
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

        if (params.Services) {
            this.Services = new Array();
            for (let z in params.Services) {
                let obj = new ModelService();
                obj.deserialize(params.Services[z]);
                this.Services.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceGroups返回参数结构体
 * @class
 */
class DescribeResourceGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资源组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceGroup> || null}
         */
        this.ResourceGroups = null;

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

        if (params.ResourceGroups) {
            this.ResourceGroups = new Array();
            for (let z in params.ResourceGroups) {
                let obj = new ResourceGroup();
                obj.deserialize(params.ResourceGroups[z]);
                this.ResourceGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRsgAsGroups请求参数结构体
 * @class
 */
class DescribeRsgAsGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选选项
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围："ASC", "DESC"
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * DeleteResourceGroup请求参数结构体
 * @class
 */
class DeleteResourceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的资源组 ID
         * @type {string || null}
         */
        this.ResourceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

    }
}

/**
 * 状态
 * @class
 */
class Conditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 具有相同原因的副本个数
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeServiceConfigs请求参数结构体
 * @class
 */
class DescribeServiceConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选选项，支持按照name等进行筛选
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 是否按照配置名分页
         * @type {boolean || null}
         */
        this.PageByName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.PageByName = 'PageByName' in params ? params.PageByName : null;

    }
}

/**
 * DeleteRsgAsGroup请求参数结构体
 * @class
 */
class DeleteRsgAsGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组 ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 实例信息
 * @class
 */
class ReplicaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 弹性网卡模式时，弹性网卡Ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * Normal: 正常运行中; Abnormal: 异常；Waiting：等待中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 当 status为 Abnormal 的时候，一些额外的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 重启次数
         * @type {number || null}
         */
        this.Restarted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Restarted = 'Restarted' in params ? params.Restarted : null;

    }
}

/**
 * DeleteServiceConfig返回参数结构体
 * @class
 */
class DeleteServiceConfigResponse extends  AbstractModel {
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
 * UpdateRsgAsGroup请求参数结构体
 * @class
 */
class UpdateRsgAsGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 重命名名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 伸缩组最大节点数
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 伸缩组最小节点数
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 伸缩组期望的节点数
         * @type {number || null}
         */
        this.DesiredSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.DesiredSize = 'DesiredSize' in params ? params.DesiredSize : null;

    }
}

/**
 * DeleteRsgAsGroup返回参数结构体
 * @class
 */
class DeleteRsgAsGroupResponse extends  AbstractModel {
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
 * 配置
 * @class
 */
class Config extends  AbstractModel {
    constructor(){
        super();

        /**
         * Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 配置名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模型地址
         * @type {string || null}
         */
        this.ModelUri = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 运行环境
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 配置版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 配置描述
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ModelUri = 'ModelUri' in params ? params.ModelUri : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 配置项
 * @class
 */
class Option extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 取值
         * @type {number || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 预测输入
 * @class
 */
class PredictInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入路径，支持 cos 格式路径文件夹或文件
         * @type {string || null}
         */
        this.InputPath = null;

        /**
         * 输出路径，支持 cos 格式路径
         * @type {string || null}
         */
        this.OutputPath = null;

        /**
         * 输入数据格式，目前支持：JSON
         * @type {string || null}
         */
        this.InputDataFormat = null;

        /**
         * 输出数据格式，目前支持：JSON
         * @type {string || null}
         */
        this.OutputDataFormat = null;

        /**
         * 预测批大小，默认为 64
         * @type {number || null}
         */
        this.BatchSize = null;

        /**
         * 模型签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignatureName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputPath = 'InputPath' in params ? params.InputPath : null;
        this.OutputPath = 'OutputPath' in params ? params.OutputPath : null;
        this.InputDataFormat = 'InputDataFormat' in params ? params.InputDataFormat : null;
        this.OutputDataFormat = 'OutputDataFormat' in params ? params.OutputDataFormat : null;
        this.BatchSize = 'BatchSize' in params ? params.BatchSize : null;
        this.SignatureName = 'SignatureName' in params ? params.SignatureName : null;

    }
}

/**
 * CreateRuntime返回参数结构体
 * @class
 */
class CreateRuntimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行环境
         * @type {Runtime || null}
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
            let obj = new Runtime();
            obj.deserialize(params.Runtime)
            this.Runtime = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 集群名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * Region 名
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Worker 使用的运行环境
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 任务描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 配置 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 预测输入
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PredictInput || null}
         */
        this.PredictInput = null;

        /**
         * 任务状态
         * @type {JobStatus || null}
         */
        this.Status = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务取消时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CancelTime = null;

        /**
         * 任务使用资源组 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 处理器配置, 单位为1/1000核；范围[100, 256000]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存配置, 单位为1M；范围[100, 256000]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * GPU算力配置，单位为1/1000 卡，范围 [0, 256000]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 显存配置, 单位为1M，范围 [0, 256000]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GpuMemory = null;

        /**
         * 任务使用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * 配置名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigVersion = null;

        /**
         * Job类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobType = null;

        /**
         * 量化输入
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QuantizationInput || null}
         */
        this.QuantizationInput = null;

        /**
         * Cls日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

        if (params.PredictInput) {
            let obj = new PredictInput();
            obj.deserialize(params.PredictInput)
            this.PredictInput = obj;
        }

        if (params.Status) {
            let obj = new JobStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CancelTime = 'CancelTime' in params ? params.CancelTime : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.GpuMemory = 'GpuMemory' in params ? params.GpuMemory : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;
        this.JobType = 'JobType' in params ? params.JobType : null;

        if (params.QuantizationInput) {
            let obj = new QuantizationInput();
            obj.deserialize(params.QuantizationInput)
            this.QuantizationInput = obj;
        }
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;

    }
}

/**
 * UpdateJob请求参数结构体
 * @class
 */
class UpdateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 任务更新动作，支持：Cancel
         * @type {string || null}
         */
        this.JobAction = null;

        /**
         * 备注
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobAction = 'JobAction' in params ? params.JobAction : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeResourceGroups请求参数结构体
 * @class
 */
class DescribeResourceGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选选项
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * DescribeRuntimes返回参数结构体
 * @class
 */
class DescribeRuntimesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TIEMS支持的运行环境列表
         * @type {Array.<Runtime> || null}
         */
        this.Runtimes = null;

        /**
         * 用户对runtime对权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserAccess = null;

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
                let obj = new Runtime();
                obj.deserialize(params.Runtimes[z]);
                this.Runtimes.push(obj);
            }
        }
        this.UserAccess = 'UserAccess' in params ? params.UserAccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstance返回参数结构体
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
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
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组下节点总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资源组下节点列表
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteResourceGroup返回参数结构体
 * @class
 */
class DeleteResourceGroupResponse extends  AbstractModel {
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
 * DisableRsgAsGroup返回参数结构体
 * @class
 */
class DisableRsgAsGroupResponse extends  AbstractModel {
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
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选选项
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 要查询的资源组 ID
         * @type {string || null}
         */
        this.ResourceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

    }
}

/**
 * CreateService返回参数结构体
 * @class
 */
class CreateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务
         * @type {ModelService || null}
         */
        this.Service = null;

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

        if (params.Service) {
            let obj = new ModelService();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateService请求参数结构体
 * @class
 */
class CreateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩缩容配置
         * @type {Scaler || null}
         */
        this.Scaler = null;

        /**
         * 服务配置Id
         * @type {string || null}
         */
        this.ServiceConfigId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 扩缩容方式，支持AUTO, MANUAL，分别表示自动扩缩容和手动扩缩容
         * @type {string || null}
         */
        this.ScaleMode = null;

        /**
         * 部署要使用的资源组Id，默认为共享资源组
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 处理器配置, 单位为1/1000核；范围[100, 256000]
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存配置, 单位为1M；范围[100, 256000]
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 集群，不填则使用默认集群
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 默认为空，表示不需要鉴权，TOKEN 表示选择 Token 鉴权方式
         * @type {string || null}
         */
        this.Authentication = null;

        /**
         * GPU算力配置，单位为1/1000 卡，范围 [0, 256000]
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 显存配置, 单位为1M，范围 [0, 256000]
         * @type {number || null}
         */
        this.GpuMemory = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

        /**
         * GPU类型
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * Cls日志主题ID
         * @type {string || null}
         */
        this.LogTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Scaler) {
            let obj = new Scaler();
            obj.deserialize(params.Scaler)
            this.Scaler = obj;
        }
        this.ServiceConfigId = 'ServiceConfigId' in params ? params.ServiceConfigId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ScaleMode = 'ScaleMode' in params ? params.ScaleMode : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Authentication = 'Authentication' in params ? params.Authentication : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.GpuMemory = 'GpuMemory' in params ? params.GpuMemory : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;

    }
}

/**
 * EnableRsgAsGroup返回参数结构体
 * @class
 */
class EnableRsgAsGroupResponse extends  AbstractModel {
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
 * 任务状态
 * @class
 */
class JobStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误时为错误描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 预期Worker数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DesiredWorkers = null;

        /**
         * 当前Worker数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentWorkers = null;

        /**
         * 副本名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Replicas = null;

        /**
         * 副本实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ReplicaInfo> || null}
         */
        this.ReplicaInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.DesiredWorkers = 'DesiredWorkers' in params ? params.DesiredWorkers : null;
        this.CurrentWorkers = 'CurrentWorkers' in params ? params.CurrentWorkers : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.ReplicaInfos) {
            this.ReplicaInfos = new Array();
            for (let z in params.ReplicaInfos) {
                let obj = new ReplicaInfo();
                obj.deserialize(params.ReplicaInfos[z]);
                this.ReplicaInfos.push(obj);
            }
        }

    }
}

/**
 * UpdateService请求参数结构体
 * @class
 */
class UpdateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务Id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 扩缩容配置
         * @type {Scaler || null}
         */
        this.Scaler = null;

        /**
         * 服务配置Id
         * @type {string || null}
         */
        this.ServiceConfigId = null;

        /**
         * 支持AUTO, MANUAL，分别表示自动扩缩容，手动扩缩容
         * @type {string || null}
         */
        this.ScaleMode = null;

        /**
         * 支持STOP(停止) RESUME(重启)
         * @type {string || null}
         */
        this.ServiceAction = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

        /**
         * GPU卡类型
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * 处理器配置，单位为 1/1000 核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存配置，单位为1M
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 显卡配置，单位为 1/1000 卡
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * Cls日志主题ID
         * @type {string || null}
         */
        this.LogTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

        if (params.Scaler) {
            let obj = new Scaler();
            obj.deserialize(params.Scaler)
            this.Scaler = obj;
        }
        this.ServiceConfigId = 'ServiceConfigId' in params ? params.ServiceConfigId : null;
        this.ScaleMode = 'ScaleMode' in params ? params.ScaleMode : null;
        this.ServiceAction = 'ServiceAction' in params ? params.ServiceAction : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;

    }
}

/**
 * 筛选项
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 取值
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
 * CreateServiceConfig返回参数结构体
 * @class
 */
class CreateServiceConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务配置
         * @type {Config || null}
         */
        this.ServiceConfig = null;

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

        if (params.ServiceConfig) {
            let obj = new Config();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 暴露信息
 * @class
 */
class ExposeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 暴露方式，支持 EXTERNAL（外网暴露），VPC （VPC内网打通）
         * @type {string || null}
         */
        this.ExposeType = null;

        /**
         * 暴露Ip。暴露方式为 EXTERNAL 为外网 Ip，暴露方式为 VPC 时为指定 Vpc 下的Vip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 暴露方式为 VPC 时，打通的私有网络Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 暴露方式为 VPC 时，打通的子网Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * GATEWAY 服务id，ExposeType = GATEWAY 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GateWayServiceId = null;

        /**
         * GATEWAY api id，ExposeType = GATEWAY 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GateWayAPIId = null;

        /**
         * GATEWAY domain，ExposeType = GATEWAY 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GateWayDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExposeType = 'ExposeType' in params ? params.ExposeType : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.GateWayServiceId = 'GateWayServiceId' in params ? params.GateWayServiceId : null;
        this.GateWayAPIId = 'GateWayAPIId' in params ? params.GateWayAPIId : null;
        this.GateWayDomain = 'GateWayDomain' in params ? params.GateWayDomain : null;

    }
}

/**
 * 资源组的伸缩组
 * @class
 */
class RsgAsGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 伸缩组所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 伸缩组所在可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 伸缩组所在集群
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 伸缩组所在资源组 ID
         * @type {string || null}
         */
        this.RsgId = null;

        /**
         * 伸缩组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 伸缩组允许的最大节点个数
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 伸缩组允许的最小节点个数
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 伸缩组创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 伸缩组更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 伸缩组状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 伸缩组节点类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 伸缩组内节点个数
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 伸缩组起始节点数
         * @type {number || null}
         */
        this.DesiredSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.RsgId = 'RsgId' in params ? params.RsgId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.DesiredSize = 'DesiredSize' in params ? params.DesiredSize : null;

    }
}

/**
 * DeleteService请求参数结构体
 * @class
 */
class DeleteServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务Id
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * 运行环境
 * @class
 */
class Runtime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行环境名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 运行环境框架
         * @type {string || null}
         */
        this.Framework = null;

        /**
         * 运行环境描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否为公开运行环境
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Public = null;

        /**
         * 是否打开健康检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HealthCheckOn = null;

        /**
         * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Framework = 'Framework' in params ? params.Framework : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.HealthCheckOn = 'HealthCheckOn' in params ? params.HealthCheckOn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateRsgAsGroup返回参数结构体
 * @class
 */
class CreateRsgAsGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所创建的资源组的伸缩组
         * @type {RsgAsGroup || null}
         */
        this.RsgAsGroup = null;

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

        if (params.RsgAsGroup) {
            let obj = new RsgAsGroup();
            obj.deserialize(params.RsgAsGroup)
            this.RsgAsGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务状态
 * @class
 */
class ServiceStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预期副本数
         * @type {number || null}
         */
        this.DesiredReplicas = null;

        /**
         * 当前副本数
         * @type {number || null}
         */
        this.CurrentReplicas = null;

        /**
         * Normal：正常运行中；Abnormal：服务异常，例如容器启动失败等；Waiting：服务等待中，例如容器下载镜像过程等；Stopped：已停止 Stopping 停止中；Resuming：重启中；Updating：服务更新中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 服务处于当前状态的原因集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Conditions> || null}
         */
        this.Conditions = null;

        /**
         * 副本名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Replicas = null;

        /**
         * 运行状态对额外信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 副本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ReplicaInfo> || null}
         */
        this.ReplicaInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DesiredReplicas = 'DesiredReplicas' in params ? params.DesiredReplicas : null;
        this.CurrentReplicas = 'CurrentReplicas' in params ? params.CurrentReplicas : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new Conditions();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.ReplicaInfos) {
            this.ReplicaInfos = new Array();
            for (let z in params.ReplicaInfos) {
                let obj = new ReplicaInfo();
                obj.deserialize(params.ReplicaInfos[z]);
                this.ReplicaInfos.push(obj);
            }
        }

    }
}

/**
 * 伸缩组活动信息
 * @class
 */
class RsgAsGroupActivity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组活动 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 关联的伸缩组 ID
         * @type {string || null}
         */
        this.RsgAsGroupId = null;

        /**
         * 活动类型
         * @type {string || null}
         */
        this.ActivityType = null;

        /**
         * 状态的编码
         * @type {string || null}
         */
        this.StatusCode = null;

        /**
         * 状态的消息
         * @type {string || null}
         */
        this.StatusMessage = null;

        /**
         * 活动原因
         * @type {string || null}
         */
        this.Cause = null;

        /**
         * 活动描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 活动开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 活动结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 活动创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 活动相关联的节点
         * @type {Array.<RsgAsActivityRelatedInstance> || null}
         */
        this.RsgAsActivityRelatedInstance = null;

        /**
         * 简略的状态消息
         * @type {string || null}
         */
        this.StatusMessageSimplified = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RsgAsGroupId = 'RsgAsGroupId' in params ? params.RsgAsGroupId : null;
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.StatusMessage = 'StatusMessage' in params ? params.StatusMessage : null;
        this.Cause = 'Cause' in params ? params.Cause : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.RsgAsActivityRelatedInstance) {
            this.RsgAsActivityRelatedInstance = new Array();
            for (let z in params.RsgAsActivityRelatedInstance) {
                let obj = new RsgAsActivityRelatedInstance();
                obj.deserialize(params.RsgAsActivityRelatedInstance[z]);
                this.RsgAsActivityRelatedInstance.push(obj);
            }
        }
        this.StatusMessageSimplified = 'StatusMessageSimplified' in params ? params.StatusMessageSimplified : null;

    }
}

/**
 * DescribeRsgAsGroupActivities请求参数结构体
 * @class
 */
class DescribeRsgAsGroupActivitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 查询活动的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询互动的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 筛选选项
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围："ASC", "DESC"
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * 资源组
 * @class
 */
class ResourceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组 Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 资源组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源组描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.Created = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.Updated = null;

        /**
         * 资源组主机数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 使用资源组的服务数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * 使用资源组的任务数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JobCount = null;

        /**
         * 资源组是否为公共资源组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Public = null;

        /**
         * 机器类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 资源组状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 显卡总张数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 处理器总核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存总量，单位为G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Gpu类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.GpuType = null;

        /**
         * 该资源组下是否有预付费资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HasPrepaid = null;

        /**
         * 资源组是否允许预付费或后付费模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Created = 'Created' in params ? params.Created : null;
        this.Updated = 'Updated' in params ? params.Updated : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.JobCount = 'JobCount' in params ? params.JobCount : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.HasPrepaid = 'HasPrepaid' in params ? params.HasPrepaid : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * DeleteJob请求参数结构体
 * @class
 */
class DeleteJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * DeleteInstance请求参数结构体
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的节点 ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateRsgAsGroup请求参数结构体
 * @class
 */
class CreateRsgAsGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组 ID
         * @type {string || null}
         */
        this.RsgId = null;

        /**
         * 伸缩组允许的最大节点数
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 伸缩组允许的最小节点数
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 伸缩组的节点规格
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 资源组所在的集群名
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 伸缩组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 伸缩组期望的节点数
         * @type {number || null}
         */
        this.DesiredSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RsgId = 'RsgId' in params ? params.RsgId : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DesiredSize = 'DesiredSize' in params ? params.DesiredSize : null;

    }
}

/**
 * DescribeRuntimes请求参数结构体
 * @class
 */
class DescribeRuntimesRequest extends  AbstractModel {
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
 * EnableRsgAsGroup请求参数结构体
 * @class
 */
class EnableRsgAsGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组 ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CreateServiceConfig请求参数结构体
 * @class
 */
class CreateServiceConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 运行环境
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 模型地址，支持cos路径，格式为 cos://bucket名-appid.cos.region名.myqcloud.com/模型文件夹路径。为模型文件的上一层文件夹地址。
         * @type {string || null}
         */
        this.ModelUri = null;

        /**
         * 配置描述
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
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.ModelUri = 'ModelUri' in params ? params.ModelUri : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 量化输入
 * @class
 */
class QuantizationInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 量化输入路径
         * @type {string || null}
         */
        this.InputPath = null;

        /**
         * 量化输出路径
         * @type {string || null}
         */
        this.OutputPath = null;

        /**
         * 量化批大小
         * @type {number || null}
         */
        this.BatchSize = null;

        /**
         * 量化精度，支持：FP32，FP16，INT8
         * @type {string || null}
         */
        this.Precision = null;

        /**
         * 转换类型
         * @type {string || null}
         */
        this.ConvertType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputPath = 'InputPath' in params ? params.InputPath : null;
        this.OutputPath = 'OutputPath' in params ? params.OutputPath : null;
        this.BatchSize = 'BatchSize' in params ? params.BatchSize : null;
        this.Precision = 'Precision' in params ? params.Precision : null;
        this.ConvertType = 'ConvertType' in params ? params.ConvertType : null;

    }
}

/**
 * UpdateJob返回参数结构体
 * @class
 */
class UpdateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Job || null}
         */
        this.Job = null;

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

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRuntime请求参数结构体
 * @class
 */
class CreateRuntimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局唯一的运行环境名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 运行环境镜像地址
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 运行环境框架
         * @type {string || null}
         */
        this.Framework = null;

        /**
         * 运行环境描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否支持健康检查，默认为False
         * @type {boolean || null}
         */
        this.HealthCheckOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Framework = 'Framework' in params ? params.Framework : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.HealthCheckOn = 'HealthCheckOn' in params ? params.HealthCheckOn : null;

    }
}

/**
 * 模型服务
 * @class
 */
class ModelService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 运行集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 运行环境
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 模型地址
         * @type {string || null}
         */
        this.ModelUri = null;

        /**
         * 处理器配置, 单位为1/1000核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存配置, 单位为1M
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * GPU 配置, 单位为1/1000 卡
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 显存配置, 单位为1M
         * @type {number || null}
         */
        this.GpuMemory = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 支持AUTO, MANUAL
         * @type {string || null}
         */
        this.ScaleMode = null;

        /**
         * 弹性伸缩配置
         * @type {Scaler || null}
         */
        this.Scaler = null;

        /**
         * 服务状态
         * @type {ServiceStatus || null}
         */
        this.Status = null;

        /**
         * 访问密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * 服务配置Id
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 服务配置名
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 服务运行时长
         * @type {number || null}
         */
        this.ServeSeconds = null;

        /**
         * 配置版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigVersion = null;

        /**
         * 服务使用资源组 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 暴露方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExposeInfo> || null}
         */
        this.Exposes = null;

        /**
         * Region 名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 服务使用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * Cls日志主题Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.ModelUri = 'ModelUri' in params ? params.ModelUri : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.GpuMemory = 'GpuMemory' in params ? params.GpuMemory : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ScaleMode = 'ScaleMode' in params ? params.ScaleMode : null;

        if (params.Scaler) {
            let obj = new Scaler();
            obj.deserialize(params.Scaler)
            this.Scaler = obj;
        }

        if (params.Status) {
            let obj = new ServiceStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ServeSeconds = 'ServeSeconds' in params ? params.ServeSeconds : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.Exposes) {
            this.Exposes = new Array();
            for (let z in params.Exposes) {
                let obj = new ExposeInfo();
                obj.deserialize(params.Exposes[z]);
                this.Exposes.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;

    }
}

/**
 * DeleteServiceConfig请求参数结构体
 * @class
 */
class DeleteServiceConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务配置Id
         * @type {string || null}
         */
        this.ServiceConfigId = null;

        /**
         * 服务配置名称
         * @type {string || null}
         */
        this.ServiceConfigName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceConfigId = 'ServiceConfigId' in params ? params.ServiceConfigId : null;
        this.ServiceConfigName = 'ServiceConfigName' in params ? params.ServiceConfigName : null;

    }
}

/**
 * DeleteRuntime请求参数结构体
 * @class
 */
class DeleteRuntimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的Runtime名
         * @type {string || null}
         */
        this.Runtime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

    }
}

/**
 * DescribeRsgAsGroupActivities返回参数结构体
 * @class
 */
class DescribeRsgAsGroupActivitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组活动数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RsgAsGroupActivity> || null}
         */
        this.RsgAsGroupActivitySet = null;

        /**
         * 所查询的伸缩组活动总数目
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

        if (params.RsgAsGroupActivitySet) {
            this.RsgAsGroupActivitySet = new Array();
            for (let z in params.RsgAsGroupActivitySet) {
                let obj = new RsgAsGroupActivity();
                obj.deserialize(params.RsgAsGroupActivitySet[z]);
                this.RsgAsGroupActivitySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServices请求参数结构体
 * @class
 */
class DescribeServicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选选项，支持筛选的字段：id, region, zone, cluster, status, runtime, rsg_id
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CREATE_TIME" "UPDATE_TIME"
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

module.exports = {
    DisableRsgAsGroupRequest: DisableRsgAsGroupRequest,
    ExposeServiceResponse: ExposeServiceResponse,
    RsgAsActivityRelatedInstance: RsgAsActivityRelatedInstance,
    DeleteJobResponse: DeleteJobResponse,
    DeleteRuntimeResponse: DeleteRuntimeResponse,
    CreateJobRequest: CreateJobRequest,
    ExposeServiceRequest: ExposeServiceRequest,
    DescribeServiceConfigsResponse: DescribeServiceConfigsResponse,
    Scaler: Scaler,
    CreateJobResponse: CreateJobResponse,
    DeleteServiceResponse: DeleteServiceResponse,
    DescribeRsgAsGroupsResponse: DescribeRsgAsGroupsResponse,
    UpdateServiceResponse: UpdateServiceResponse,
    Instance: Instance,
    UpdateRsgAsGroupResponse: UpdateRsgAsGroupResponse,
    DescribeServicesResponse: DescribeServicesResponse,
    DescribeResourceGroupsResponse: DescribeResourceGroupsResponse,
    DescribeRsgAsGroupsRequest: DescribeRsgAsGroupsRequest,
    DeleteResourceGroupRequest: DeleteResourceGroupRequest,
    Conditions: Conditions,
    DescribeServiceConfigsRequest: DescribeServiceConfigsRequest,
    DeleteRsgAsGroupRequest: DeleteRsgAsGroupRequest,
    ReplicaInfo: ReplicaInfo,
    DeleteServiceConfigResponse: DeleteServiceConfigResponse,
    UpdateRsgAsGroupRequest: UpdateRsgAsGroupRequest,
    DeleteRsgAsGroupResponse: DeleteRsgAsGroupResponse,
    Config: Config,
    Option: Option,
    PredictInput: PredictInput,
    CreateRuntimeResponse: CreateRuntimeResponse,
    Job: Job,
    UpdateJobRequest: UpdateJobRequest,
    DescribeResourceGroupsRequest: DescribeResourceGroupsRequest,
    DescribeRuntimesResponse: DescribeRuntimesResponse,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DeleteResourceGroupResponse: DeleteResourceGroupResponse,
    DisableRsgAsGroupResponse: DisableRsgAsGroupResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CreateServiceResponse: CreateServiceResponse,
    CreateServiceRequest: CreateServiceRequest,
    EnableRsgAsGroupResponse: EnableRsgAsGroupResponse,
    JobStatus: JobStatus,
    UpdateServiceRequest: UpdateServiceRequest,
    Filter: Filter,
    CreateServiceConfigResponse: CreateServiceConfigResponse,
    ExposeInfo: ExposeInfo,
    RsgAsGroup: RsgAsGroup,
    DeleteServiceRequest: DeleteServiceRequest,
    Runtime: Runtime,
    CreateRsgAsGroupResponse: CreateRsgAsGroupResponse,
    ServiceStatus: ServiceStatus,
    RsgAsGroupActivity: RsgAsGroupActivity,
    DescribeRsgAsGroupActivitiesRequest: DescribeRsgAsGroupActivitiesRequest,
    ResourceGroup: ResourceGroup,
    DeleteJobRequest: DeleteJobRequest,
    DeleteInstanceRequest: DeleteInstanceRequest,
    CreateRsgAsGroupRequest: CreateRsgAsGroupRequest,
    DescribeRuntimesRequest: DescribeRuntimesRequest,
    EnableRsgAsGroupRequest: EnableRsgAsGroupRequest,
    CreateServiceConfigRequest: CreateServiceConfigRequest,
    QuantizationInput: QuantizationInput,
    UpdateJobResponse: UpdateJobResponse,
    CreateRuntimeRequest: CreateRuntimeRequest,
    ModelService: ModelService,
    DeleteServiceConfigRequest: DeleteServiceConfigRequest,
    DeleteRuntimeRequest: DeleteRuntimeRequest,
    DescribeRsgAsGroupActivitiesResponse: DescribeRsgAsGroupActivitiesResponse,
    DescribeServicesRequest: DescribeServicesRequest,

}
