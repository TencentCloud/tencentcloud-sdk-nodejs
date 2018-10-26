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
 * ModifyPsaRegulation返回参数结构体
 * @class
 */
class ModifyPsaRegulationResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeTaskOperationLog请求参数结构体
 * @class
 */
class DescribeTaskOperationLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维修任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 排序字段，目前支持：OperationTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增(默认) 1:递减
         * @type {number || null}
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
        this.TaskId = params.TaskId || null;
        this.OrderField = params.OrderField || null;
        this.Order = params.Order || null;

    }
}

/**
 * 维修任务操作日志
 * @class
 */
class TaskOperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作步骤
         * @type {string || null}
         */
        this.TaskStep = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 操作描述
         * @type {string || null}
         */
        this.OperationDetail = null;

        /**
         * 操作时间
         * @type {string || null}
         */
        this.OperationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskStep = params.TaskStep || null;
        this.Operator = params.Operator || null;
        this.OperationDetail = params.OperationDetail || null;
        this.OperationTime = params.OperationTime || null;

    }
}

/**
 * CreatePsaRegulation请求参数结构体
 * @class
 */
class CreatePsaRegulationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则别名
         * @type {string || null}
         */
        this.PsaName = null;

        /**
         * 关联的故障类型ID列表
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

        /**
         * 维修实例上限，默认为5
         * @type {number || null}
         */
        this.RepairLimit = null;

        /**
         * 规则备注
         * @type {string || null}
         */
        this.PsaDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaName = params.PsaName || null;
        this.TaskTypeIds = params.TaskTypeIds || null;
        this.RepairLimit = params.RepairLimit || null;
        this.PsaDescription = params.PsaDescription || null;

    }
}

/**
 * 一条预授权规则
 * @class
 */
class PsaRegulation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 规则别名
         * @type {string || null}
         */
        this.PsaName = null;

        /**
         * 关联标签数量
         * @type {number || null}
         */
        this.TagCount = null;

        /**
         * 关联实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 故障实例数量
         * @type {number || null}
         */
        this.RepairCount = null;

        /**
         * 故障实例上限
         * @type {number || null}
         */
        this.RepairLimit = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 规则备注
         * @type {string || null}
         */
        this.PsaDescription = null;

        /**
         * 关联标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 关联故障类型id
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaId = params.PsaId || null;
        this.PsaName = params.PsaName || null;
        this.TagCount = params.TagCount || null;
        this.InstanceCount = params.InstanceCount || null;
        this.RepairCount = params.RepairCount || null;
        this.RepairLimit = params.RepairLimit || null;
        this.CreateTime = params.CreateTime || null;
        this.PsaDescription = params.PsaDescription || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TaskTypeIds = params.TaskTypeIds || null;

    }
}

/**
 * DescribeTaskOperationLog返回参数结构体
 * @class
 */
class DescribeTaskOperationLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作日志
         * @type {Array.<TaskOperationLog> || null}
         */
        this.TaskOperationLogSet = null;

        /**
         * 日志条数
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

        if (params.TaskOperationLogSet) {
            this.TaskOperationLogSet = new Array();
            for (let z in params.TaskOperationLogSet) {
                let obj = new TaskOperationLog();
                obj.deserialize(params.TaskOperationLogSet[z]);
                this.TaskOperationLogSet.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * RepairTaskControl返回参数结构体
 * @class
 */
class RepairTaskControlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出参TaskId是黑石异步任务ID，不同于入参TaskId字段。
此字段可作为DescriptionOperationResult查询异步任务状态接口的入参，查询异步任务执行结果。
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * UnbindPsaTag请求参数结构体
 * @class
 */
class UnbindPsaTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 需要解绑的标签key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 需要解绑的标签value
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
        this.PsaId = params.PsaId || null;
        this.TagKey = params.TagKey || null;
        this.TagValue = params.TagValue || null;

    }
}

/**
 * DescribeRepairTaskConstant请求参数结构体
 * @class
 */
class DescribeRepairTaskConstantRequest extends  AbstractModel {
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
 * DeletePsaRegulation请求参数结构体
 * @class
 */
class DeletePsaRegulationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaId = params.PsaId || null;

    }
}

/**
 * DescribeTaskInfo返回参数结构体
 * @class
 */
class DescribeTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回任务总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务信息列表
         * @type {Array.<TaskInfo> || null}
         */
        this.TaskInfoSet = null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.TaskInfoSet) {
            this.TaskInfoSet = new Array();
            for (let z in params.TaskInfoSet) {
                let obj = new TaskInfo();
                obj.deserialize(params.TaskInfoSet[z]);
                this.TaskInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * UnbindPsaTag返回参数结构体
 * @class
 */
class UnbindPsaTagResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * BindPsaTag返回参数结构体
 * @class
 */
class BindPsaTagResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeRepairTaskConstant返回参数结构体
 * @class
 */
class DescribeRepairTaskConstantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 故障类型ID与对应中文名列表
         * @type {Array.<TaskType> || null}
         */
        this.TaskTypeSet = null;

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

        if (params.TaskTypeSet) {
            this.TaskTypeSet = new Array();
            for (let z in params.TaskTypeSet) {
                let obj = new TaskType();
                obj.deserialize(params.TaskTypeSet[z]);
                this.TaskTypeSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 故障id对应故障名列表
 * @class
 */
class TaskType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 故障类ID
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 故障类中文名
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 故障类型父类
         * @type {string || null}
         */
        this.TaskSubType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = params.TypeId || null;
        this.TypeName = params.TypeName || null;
        this.TaskSubType = params.TaskSubType || null;

    }
}

/**
 * DescribePsaRegulations返回参数结构体
 * @class
 */
class DescribePsaRegulationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回规则数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回规则列表
         * @type {Array.<PsaRegulation> || null}
         */
        this.PsaRegulations = null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.PsaRegulations) {
            this.PsaRegulations = new Array();
            for (let z in params.PsaRegulations) {
                let obj = new PsaRegulation();
                obj.deserialize(params.PsaRegulations[z]);
                this.PsaRegulations.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * BindPsaTag请求参数结构体
 * @class
 */
class BindPsaTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 需要绑定的标签key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 需要绑定的标签value
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
        this.PsaId = params.PsaId || null;
        this.TagKey = params.TagKey || null;
        this.TagValue = params.TagValue || null;

    }
}

/**
 * CreatePsaRegulation返回参数结构体
 * @class
 */
class CreatePsaRegulationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

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
        this.PsaId = params.PsaId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyPsaRegulation请求参数结构体
 * @class
 */
class ModifyPsaRegulationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 预授权规则别名
         * @type {string || null}
         */
        this.PsaName = null;

        /**
         * 维修中的实例上限
         * @type {number || null}
         */
        this.RepairLimit = null;

        /**
         * 预授权规则备注
         * @type {string || null}
         */
        this.PsaDescription = null;

        /**
         * 预授权规则关联故障类型ID列表
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaId = params.PsaId || null;
        this.PsaName = params.PsaName || null;
        this.RepairLimit = params.RepairLimit || null;
        this.PsaDescription = params.PsaDescription || null;
        this.TaskTypeIds = params.TaskTypeIds || null;

    }
}

/**
 * DescribeTaskInfo请求参数结构体
 * @class
 */
class DescribeTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 时间过滤下限
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 时间过滤上限
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 任务状态ID过滤
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 排序字段，目前支持：CreateTime，AuthTime，EndTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增(默认) 1:递减
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 任务ID过滤
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 实例ID过滤
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例别名过滤
         * @type {Array.<string> || null}
         */
        this.Aliases = null;

        /**
         * 故障类型ID过滤
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.TaskStatus = params.TaskStatus || null;
        this.OrderField = params.OrderField || null;
        this.Order = params.Order || null;
        this.TaskIds = params.TaskIds || null;
        this.InstanceIds = params.InstanceIds || null;
        this.Aliases = params.Aliases || null;
        this.TaskTypeIds = params.TaskTypeIds || null;

    }
}

/**
 * RepairTaskControl请求参数结构体
 * @class
 */
class RepairTaskControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维修任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 操作
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = params.TaskId || null;
        this.Operate = params.Operate || null;

    }
}

/**
 * DescribePsaRegulations请求参数结构体
 * @class
 */
class DescribePsaRegulationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 规则ID过滤，支持模糊查询
         * @type {Array.<string> || null}
         */
        this.PsaIds = null;

        /**
         * 规则别名过滤，支持模糊查询
         * @type {Array.<string> || null}
         */
        this.PsaNames = null;

        /**
         * 标签过滤
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 排序字段，取值支持：CreateTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增(默认) 1:递减
         * @type {number || null}
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
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;
        this.PsaIds = params.PsaIds || null;
        this.PsaNames = params.PsaNames || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.OrderField = params.OrderField || null;
        this.Order = params.Order || null;

    }
}

/**
 * 标签键与值
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
         * 标签键对应的值
         * @type {Array.<string> || null}
         */
        this.TagValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = params.TagKey || null;
        this.TagValues = params.TagValues || null;

    }
}

/**
 * DeletePsaRegulation返回参数结构体
 * @class
 */
class DeletePsaRegulationResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 维护平台维修任务信息
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 主机id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主机别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 故障类型id
         * @type {number || null}
         */
        this.TaskTypeId = null;

        /**
         * 任务状态id
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 授权时间
         * @type {string || null}
         */
        this.AuthTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务详情
         * @type {string || null}
         */
        this.TaskDetail = null;

        /**
         * 设备状态
         * @type {number || null}
         */
        this.DeviceStatus = null;

        /**
         * 设备操作状态
         * @type {number || null}
         */
        this.OperateStatus = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 所属网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 所在子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * VPC名
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VpcCidrBlock
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * SubnetCidrBlock
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 公网ip
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 管理IP
         * @type {string || null}
         */
        this.MgtIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = params.TaskId || null;
        this.InstanceId = params.InstanceId || null;
        this.Alias = params.Alias || null;
        this.TaskTypeId = params.TaskTypeId || null;
        this.TaskStatus = params.TaskStatus || null;
        this.CreateTime = params.CreateTime || null;
        this.AuthTime = params.AuthTime || null;
        this.EndTime = params.EndTime || null;
        this.TaskDetail = params.TaskDetail || null;
        this.DeviceStatus = params.DeviceStatus || null;
        this.OperateStatus = params.OperateStatus || null;
        this.Zone = params.Zone || null;
        this.Region = params.Region || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.SubnetName = params.SubnetName || null;
        this.VpcName = params.VpcName || null;
        this.VpcCidrBlock = params.VpcCidrBlock || null;
        this.SubnetCidrBlock = params.SubnetCidrBlock || null;
        this.WanIp = params.WanIp || null;
        this.LanIp = params.LanIp || null;
        this.MgtIp = params.MgtIp || null;

    }
}

module.exports = {
    ModifyPsaRegulationResponse: ModifyPsaRegulationResponse,
    DescribeTaskOperationLogRequest: DescribeTaskOperationLogRequest,
    TaskOperationLog: TaskOperationLog,
    CreatePsaRegulationRequest: CreatePsaRegulationRequest,
    PsaRegulation: PsaRegulation,
    DescribeTaskOperationLogResponse: DescribeTaskOperationLogResponse,
    RepairTaskControlResponse: RepairTaskControlResponse,
    UnbindPsaTagRequest: UnbindPsaTagRequest,
    DescribeRepairTaskConstantRequest: DescribeRepairTaskConstantRequest,
    DeletePsaRegulationRequest: DeletePsaRegulationRequest,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    UnbindPsaTagResponse: UnbindPsaTagResponse,
    BindPsaTagResponse: BindPsaTagResponse,
    DescribeRepairTaskConstantResponse: DescribeRepairTaskConstantResponse,
    TaskType: TaskType,
    DescribePsaRegulationsResponse: DescribePsaRegulationsResponse,
    BindPsaTagRequest: BindPsaTagRequest,
    CreatePsaRegulationResponse: CreatePsaRegulationResponse,
    ModifyPsaRegulationRequest: ModifyPsaRegulationRequest,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    RepairTaskControlRequest: RepairTaskControlRequest,
    DescribePsaRegulationsRequest: DescribePsaRegulationsRequest,
    Tag: Tag,
    DeletePsaRegulationResponse: DeletePsaRegulationResponse,
    TaskInfo: TaskInfo,

}
