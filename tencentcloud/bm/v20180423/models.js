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
        this.TaskId = params.TaskId || null;
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
        this.TaskTypeList = null;

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

        if (params.TaskTypeList) {
            this.TaskTypeList = new Array();
            for (let z in params.TaskTypeList) {
                let obj = new TaskType();
                obj.deserialize(params.TaskTypeList[z]);
                this.TaskTypeList.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
    DescribeTaskOperationLogRequest: DescribeTaskOperationLogRequest,
    DescribeTaskOperationLogResponse: DescribeTaskOperationLogResponse,
    TaskOperationLog: TaskOperationLog,
    RepairTaskControlResponse: RepairTaskControlResponse,
    DescribeRepairTaskConstantResponse: DescribeRepairTaskConstantResponse,
    RepairTaskControlRequest: RepairTaskControlRequest,
    TaskType: TaskType,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    DescribeRepairTaskConstantRequest: DescribeRepairTaskConstantRequest,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    TaskInfo: TaskInfo,

}
