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
 * 容器实例中容器结构体
 * @class
 */
class Container extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器启动命令
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 容器启动参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * 容器环境变量
         * @type {Array.<EnvironmentVar> || null}
         */
        this.EnvironmentVars = null;

        /**
         * 镜像
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 容器名，由小写字母、数字和 - 组成，由小写字母开头，小写字母或数字结尾，且长度不超过 63个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CPU，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，单位：Gi
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 重启次数
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * 当前状态
         * @type {ContainerState || null}
         */
        this.CurrentState = null;

        /**
         * 上一次状态
         * @type {ContainerState || null}
         */
        this.PreviousState = null;

        /**
         * 容器工作目录
         * @type {string || null}
         */
        this.WorkingDir = null;

        /**
         * 容器ID
         * @type {string || null}
         */
        this.ContainerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Command = 'Command' in params ? params.Command : null;
        this.Args = 'Args' in params ? params.Args : null;

        if (params.EnvironmentVars) {
            this.EnvironmentVars = new Array();
            for (let z in params.EnvironmentVars) {
                let obj = new EnvironmentVar();
                obj.deserialize(params.EnvironmentVars[z]);
                this.EnvironmentVars.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;

        if (params.CurrentState) {
            let obj = new ContainerState();
            obj.deserialize(params.CurrentState)
            this.CurrentState = obj;
        }

        if (params.PreviousState) {
            let obj = new ContainerState();
            obj.deserialize(params.PreviousState)
            this.PreviousState = obj;
        }
        this.WorkingDir = 'WorkingDir' in params ? params.WorkingDir : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;

    }
}

/**
 * InquiryPriceCreateCis返回参数结构体
 * @class
 */
class InquiryPriceCreateCisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 价格
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerLog请求参数结构体
 * @class
 */
class DescribeContainerLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 日志显示尾部行数
         * @type {number || null}
         */
        this.Tail = null;

        /**
         * 日志起始时间
         * @type {string || null}
         */
        this.SinceTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.Tail = 'Tail' in params ? params.Tail : null;
        this.SinceTime = 'SinceTime' in params ? params.SinceTime : null;

    }
}

/**
 * CreateContainerInstance请求参数结构体
 * @class
 */
class CreateContainerInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * vpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * subnetId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 容器实例名称，由小写字母、数字和 - 组成，由小写字母开头，小写字母或数字结尾，且长度不超过 40个字符
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 重启策略（Always,OnFailure,Never）
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 容器列表
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

    }
}

/**
 * 容器状态
 * @class
 */
class ContainerState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器运行开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 容器状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 状态详情
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 容器运行结束时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 容器运行退出码
         * @type {number || null}
         */
        this.ExitCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.State = 'State' in params ? params.State : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.ExitCode = 'ExitCode' in params ? params.ExitCode : null;

    }
}

/**
 * InquiryPriceCreateCis请求参数结构体
 * @class
 */
class InquiryPriceCreateCisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * CPU，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，单位：Gi
         * @type {number || null}
         */
        this.Memory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;

    }
}

/**
 * 容器环境变量
 * @class
 */
class EnvironmentVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境变量名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 环境变量值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 价格
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：元
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * 折扣价，单位：元
         * @type {number || null}
         */
        this.OriginalPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;

    }
}

/**
 * DescribeContainerInstances返回参数结构体
 * @class
 */
class DescribeContainerInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例列表
         * @type {Array.<ContainerInstance> || null}
         */
        this.ContainerInstanceList = null;

        /**
         * 容器实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.ContainerInstanceList) {
            this.ContainerInstanceList = new Array();
            for (let z in params.ContainerInstanceList) {
                let obj = new ContainerInstance();
                obj.deserialize(params.ContainerInstanceList[z]);
                this.ContainerInstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteContainerInstance返回参数结构体
 * @class
 */
class DeleteContainerInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerInstances请求参数结构体
 * @class
 */
class DescribeContainerInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
- Zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。
- VpcId - String - 是否必填：否 -（过滤条件）按照VpcId过滤。
- InstanceName - String - 是否必填：否 -（过滤条件）按照容器实例名称做模糊查询。
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 过滤条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段，可选值 - Zone，VpcId，InstanceName
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤值列表
         * @type {Array.<string> || null}
         */
        this.ValueList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ValueList = 'ValueList' in params ? params.ValueList : null;

    }
}

/**
 * CreateContainerInstance返回参数结构体
 * @class
 */
class CreateContainerInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerInstance请求参数结构体
 * @class
 */
class DescribeContainerInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeContainerInstance返回参数结构体
 * @class
 */
class DescribeContainerInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例详细信息
         * @type {ContainerInstance || null}
         */
        this.ContainerInstance = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.ContainerInstance) {
            let obj = new ContainerInstance();
            obj.deserialize(params.ContainerInstance)
            this.ContainerInstance = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器日志
 * @class
 */
class ContainerLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 日志
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 日志记录时间
         * @type {string || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * DescribeContainerInstanceEvents返回参数结构体
 * @class
 */
class DescribeContainerInstanceEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例事件列表
         * @type {Array.<Event> || null}
         */
        this.EventList = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new Event();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器实例事件
 * @class
 */
class Event extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件首次出现时间
         * @type {string || null}
         */
        this.FirstSeen = null;

        /**
         * 事件上次出现时间
         * @type {string || null}
         */
        this.LastSeen = null;

        /**
         * 事件等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 事件出现次数
         * @type {string || null}
         */
        this.Count = null;

        /**
         * 事件出现原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 事件消息
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstSeen = 'FirstSeen' in params ? params.FirstSeen : null;
        this.LastSeen = 'LastSeen' in params ? params.LastSeen : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeContainerInstanceEvents请求参数结构体
 * @class
 */
class DescribeContainerInstanceEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeContainerLog返回参数结构体
 * @class
 */
class DescribeContainerLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器日志数组
         * @type {Array.<ContainerLog> || null}
         */
        this.ContainerLogList = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.ContainerLogList) {
            this.ContainerLogList = new Array();
            for (let z in params.ContainerLogList) {
                let obj = new ContainerLog();
                obj.deserialize(params.ContainerLogList[z]);
                this.ContainerLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteContainerInstance请求参数结构体
 * @class
 */
class DeleteContainerInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * 容器实例的具体信息
 * @class
 */
class ContainerInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 容器实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 容器实例所属VpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 容器实例所属SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 容器实例状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 容器列表
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * 重启策略
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Vpc名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VpcCidr
         * @type {string || null}
         */
        this.VpcCidr = null;

        /**
         * SubnetName
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网Cidr
         * @type {string || null}
         */
        this.SubnetCidr = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.LanIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.State = 'State' in params ? params.State : null;

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidr = 'VpcCidr' in params ? params.VpcCidr : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetCidr = 'SubnetCidr' in params ? params.SubnetCidr : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;

    }
}

module.exports = {
    Container: Container,
    InquiryPriceCreateCisResponse: InquiryPriceCreateCisResponse,
    DescribeContainerLogRequest: DescribeContainerLogRequest,
    CreateContainerInstanceRequest: CreateContainerInstanceRequest,
    ContainerState: ContainerState,
    InquiryPriceCreateCisRequest: InquiryPriceCreateCisRequest,
    EnvironmentVar: EnvironmentVar,
    Price: Price,
    DescribeContainerInstancesResponse: DescribeContainerInstancesResponse,
    DeleteContainerInstanceResponse: DeleteContainerInstanceResponse,
    DescribeContainerInstancesRequest: DescribeContainerInstancesRequest,
    Filter: Filter,
    CreateContainerInstanceResponse: CreateContainerInstanceResponse,
    DescribeContainerInstanceRequest: DescribeContainerInstanceRequest,
    DescribeContainerInstanceResponse: DescribeContainerInstanceResponse,
    ContainerLog: ContainerLog,
    DescribeContainerInstanceEventsResponse: DescribeContainerInstanceEventsResponse,
    Event: Event,
    DescribeContainerInstanceEventsRequest: DescribeContainerInstanceEventsRequest,
    DescribeContainerLogResponse: DescribeContainerLogResponse,
    DeleteContainerInstanceRequest: DeleteContainerInstanceRequest,
    ContainerInstance: ContainerInstance,

}
