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
 * DescribeServiceConfigs返回参数结构体
 * @class
 */
class DescribeServiceConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务配置
         * @type {Array.<ServiceConfig> || null}
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
                let obj = new ServiceConfig();
                obj.deserialize(params.ServiceConfigs[z]);
                this.ServiceConfigs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * UpdateService返回参数结构体
 * @class
 */
class UpdateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务
         * @type {Service || null}
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
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
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
         * @type {Array.<Service> || null}
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
                let obj = new Service();
                obj.deserialize(params.Services[z]);
                this.Services.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 模型服务
 * @class
 */
class Service extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 运行集群
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
         * 处理器配置, 单位为1/100 tflops
         * @type {number || null}
         */
        this.TflopUnits = null;

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
         * 服务地址
         * @type {string || null}
         */
        this.ServingIp = null;

        /**
         * 访问密钥
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * 服务配置Id
         * @type {number || null}
         */
        this.ServiceConfigId = null;

        /**
         * 服务配置名
         * @type {string || null}
         */
        this.ServiceConfigName = null;

        /**
         * 服务运行时长
         * @type {number || null}
         */
        this.ServeSeconds = null;

        /**
         * 配置版本
         * @type {string || null}
         */
        this.ServiceConfigVersion = null;

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
        this.TflopUnits = 'TflopUnits' in params ? params.TflopUnits : null;
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
        this.ServingIp = 'ServingIp' in params ? params.ServingIp : null;
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ServiceConfigId = 'ServiceConfigId' in params ? params.ServiceConfigId : null;
        this.ServiceConfigName = 'ServiceConfigName' in params ? params.ServiceConfigName : null;
        this.ServeSeconds = 'ServeSeconds' in params ? params.ServeSeconds : null;
        this.ServiceConfigVersion = 'ServiceConfigVersion' in params ? params.ServiceConfigVersion : null;

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
 * CreateService返回参数结构体
 * @class
 */
class CreateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务
         * @type {Service || null}
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
            let obj = new Service();
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
         * @type {number || null}
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
         * 集群，不填则使用默认集群。
         * @type {string || null}
         */
        this.Cluster = null;

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
        this.Cluster = 'Cluster' in params ? params.Cluster : null;

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
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * 扩缩容配置
         * @type {Scaler || null}
         */
        this.Scaler = null;

        /**
         * 服务配置Id
         * @type {number || null}
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
         * @type {ServiceConfig || null}
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
            let obj = new ServiceConfig();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * @type {number || null}
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
 * 扩缩容配置
 * @class
 */
class Scaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大副本数
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 最小副本数
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
 * 服务配置
 * @class
 */
class ServiceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Id
         * @type {number || null}
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
         * GPU算力，单位为1/100 tflops
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TflopUnits = null;

        /**
         * 显存配置, 单位为1M
注意：此字段可能返回 null，表示取不到有效值。
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
         * 运行环境
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 配置版本
         * @type {string || null}
         */
        this.Version = null;

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
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.TflopUnits = 'TflopUnits' in params ? params.TflopUnits : null;
        this.GpuMemory = 'GpuMemory' in params ? params.GpuMemory : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.Version = 'Version' in params ? params.Version : null;

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
         * GPU算力配置，单位为1/100 tflops，范围 [0, 256000]
         * @type {number || null}
         */
        this.TflopUnits = null;

        /**
         * 显存配置, 单位为1M，范围 [0, 256000]
         * @type {number || null}
         */
        this.GpuMemory = null;

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
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.TflopUnits = 'TflopUnits' in params ? params.TflopUnits : null;
        this.GpuMemory = 'GpuMemory' in params ? params.GpuMemory : null;

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
         * 服务配置Id (deprecated)
         * @type {number || null}
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
         * 筛选选项，支持按照name等字段进行筛选
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
    DeleteServiceConfigResponse: DeleteServiceConfigResponse,
    DescribeServiceConfigsResponse: DescribeServiceConfigsResponse,
    DeleteServiceResponse: DeleteServiceResponse,
    UpdateServiceResponse: UpdateServiceResponse,
    DescribeServicesResponse: DescribeServicesResponse,
    Conditions: Conditions,
    DescribeServiceConfigsRequest: DescribeServiceConfigsRequest,
    Option: Option,
    Service: Service,
    DescribeRuntimesResponse: DescribeRuntimesResponse,
    CreateServiceResponse: CreateServiceResponse,
    CreateServiceRequest: CreateServiceRequest,
    UpdateServiceRequest: UpdateServiceRequest,
    Filter: Filter,
    CreateServiceConfigResponse: CreateServiceConfigResponse,
    DeleteServiceRequest: DeleteServiceRequest,
    Runtime: Runtime,
    Scaler: Scaler,
    ServiceConfig: ServiceConfig,
    DescribeRuntimesRequest: DescribeRuntimesRequest,
    CreateServiceConfigRequest: CreateServiceConfigRequest,
    DeleteServiceConfigRequest: DeleteServiceConfigRequest,
    ServiceStatus: ServiceStatus,
    DescribeServicesRequest: DescribeServicesRequest,

}
