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
 * 自定义脚本任务信息
 * @class
 */
class UserCmdTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态ID，取值: -1(进行中) 0(结束)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 脚本名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 运行实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 运行成功数量
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 运行失败数量
         * @type {number || null}
         */
        this.FailureCount = null;

        /**
         * 执行开始时间
         * @type {string || null}
         */
        this.RunBeginTime = null;

        /**
         * 执行结束时间
         * @type {string || null}
         */
        this.RunEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = params.TaskId || null;
        this.Status = params.Status || null;
        this.Alias = params.Alias || null;
        this.CmdId = params.CmdId || null;
        this.InstanceCount = params.InstanceCount || null;
        this.SuccessCount = params.SuccessCount || null;
        this.FailureCount = params.FailureCount || null;
        this.RunBeginTime = params.RunBeginTime || null;
        this.RunEndTime = params.RunEndTime || null;

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
 * DescribeUserCmdTasks返回参数结构体
 * @class
 */
class DescribeUserCmdTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本任务信息数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 脚本任务信息列表
         * @type {Array.<UserCmdTask> || null}
         */
        this.UserCmdTasks = null;

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

        if (params.UserCmdTasks) {
            this.UserCmdTasks = new Array();
            for (let z in params.UserCmdTasks) {
                let obj = new UserCmdTask();
                obj.deserialize(params.UserCmdTasks[z]);
                this.UserCmdTasks.push(obj);
            }
        }
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
 * 运行失败的自定义脚本信息
 * @class
 */
class FailedTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行脚本的设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.ErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.ErrorMsg = params.ErrorMsg || null;

    }
}

/**
 * DescribeUserCmds请求参数结构体
 * @class
 */
class DescribeUserCmdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持： OsType,CreateTime,ModifyTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值: 1倒序，0顺序；默认倒序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 关键字搜索，可搜索ID或别名，支持模糊搜索
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 查询的脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

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
        this.OrderField = params.OrderField || null;
        this.Order = params.Order || null;
        this.SearchKey = params.SearchKey || null;
        this.CmdId = params.CmdId || null;

    }
}

/**
 * DeleteUserCmds返回参数结构体
 * @class
 */
class DeleteUserCmdsResponse extends  AbstractModel {
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
 * RebootDevices返回参数结构体
 * @class
 */
class RebootDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
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
 * ResetDevicePassword请求参数结构体
 * @class
 */
class ResetDevicePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要重置密码的服务器ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 新密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = params.InstanceIds || null;
        this.Password = params.Password || null;

    }
}

/**
 * ModifyDeviceAliases请求参数结构体
 * @class
 */
class ModifyDeviceAliasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要改名的设备与别名列表
         * @type {Array.<DeviceAlias> || null}
         */
        this.DeviceAliases = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceAliases) {
            this.DeviceAliases = new Array();
            for (let z in params.DeviceAliases) {
                let obj = new DeviceAlias();
                obj.deserialize(params.DeviceAliases[z]);
                this.DeviceAliases.push(obj);
            }
        }

    }
}

/**
 * ModifyPayModePre2Post返回参数结构体
 * @class
 */
class ModifyPayModePre2PostResponse extends  AbstractModel {
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
 * 成功运行的自定义脚本信息
 * @class
 */
class SuccessTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行脚本的设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.TaskId = params.TaskId || null;

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
 * ModifyDeviceAliases返回参数结构体
 * @class
 */
class ModifyDeviceAliasesResponse extends  AbstractModel {
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
 * 设备ID与别名
 * @class
 */
class DeviceAlias extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 设备别名
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.Alias = params.Alias || null;

    }
}

/**
 * DescribeUserCmdTaskInfo返回参数结构体
 * @class
 */
class DescribeUserCmdTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 自定义脚本任务详细信息列表
         * @type {Array.<UserCmdTaskInfo> || null}
         */
        this.UserCmdTaskInfoSet = null;

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

        if (params.UserCmdTaskInfoSet) {
            this.UserCmdTaskInfoSet = new Array();
            for (let z in params.UserCmdTaskInfoSet) {
                let obj = new UserCmdTaskInfo();
                obj.deserialize(params.UserCmdTaskInfoSet[z]);
                this.UserCmdTaskInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * RunUserCmd请求参数结构体
 * @class
 */
class RunUserCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 执行脚本机器的用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 执行脚本机器的用户名的密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 执行脚本的服务器实例
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 执行脚本的参数，必须经过base64编码
         * @type {string || null}
         */
        this.CmdParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmdId = params.CmdId || null;
        this.UserName = params.UserName || null;
        this.Password = params.Password || null;
        this.InstanceIds = params.InstanceIds || null;
        this.CmdParam = params.CmdParam || null;

    }
}

/**
 * DescribeDevices返回参数结构体
 * @class
 */
class DescribeDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 物理机信息列表
         * @type {Array.<DeviceInfo> || null}
         */
        this.DeviceInfoSet = null;

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

        if (params.DeviceInfoSet) {
            this.DeviceInfoSet = new Array();
            for (let z in params.DeviceInfoSet) {
                let obj = new DeviceInfo();
                obj.deserialize(params.DeviceInfoSet[z]);
                this.DeviceInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 自定义脚本任务详细信息
 * @class
 */
class UserCmdTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动编号，可忽略
         * @type {number || null}
         */
        this.AutoId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.RunBeginTime = null;

        /**
         * 任务结束时间
         * @type {string || null}
         */
        this.RunEndTime = null;

        /**
         * 任务状态ID，取值为 -1：进行中；0：成功；>0：失败错误码
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 设备别名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 私有网络名
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 私有网络整型ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络Cidr
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 子网名
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网Cidr
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 脚本内容，base64编码后的值
         * @type {string || null}
         */
        this.CmdContent = null;

        /**
         * 脚本参数，base64编码后的值
         * @type {string || null}
         */
        this.CmdParam = null;

        /**
         * 脚本执行结果，base64编码后的值
         * @type {string || null}
         */
        this.CmdResult = null;

        /**
         * 用户AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户执行脚本结束退出的返回值，没有返回值为-1
         * @type {number || null}
         */
        this.LastShellExit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoId = params.AutoId || null;
        this.TaskId = params.TaskId || null;
        this.RunBeginTime = params.RunBeginTime || null;
        this.RunEndTime = params.RunEndTime || null;
        this.Status = params.Status || null;
        this.InstanceName = params.InstanceName || null;
        this.InstanceId = params.InstanceId || null;
        this.VpcName = params.VpcName || null;
        this.VpcId = params.VpcId || null;
        this.VpcCidrBlock = params.VpcCidrBlock || null;
        this.SubnetName = params.SubnetName || null;
        this.SubnetId = params.SubnetId || null;
        this.SubnetCidrBlock = params.SubnetCidrBlock || null;
        this.LanIp = params.LanIp || null;
        this.CmdContent = params.CmdContent || null;
        this.CmdParam = params.CmdParam || null;
        this.CmdResult = params.CmdResult || null;
        this.AppId = params.AppId || null;
        this.LastShellExit = params.LastShellExit || null;

    }
}

/**
 * 脚本信息
 * @class
 */
class UserCmd extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义脚本名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 脚本自增ID
         * @type {number || null}
         */
        this.AutoId = null;

        /**
         * 脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 脚本内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 命令适用的操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = params.Alias || null;
        this.AppId = params.AppId || null;
        this.AutoId = params.AutoId || null;
        this.CmdId = params.CmdId || null;
        this.Content = params.Content || null;
        this.CreateTime = params.CreateTime || null;
        this.ModifyTime = params.ModifyTime || null;
        this.OsType = params.OsType || null;

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
 * CreateSpotDevice请求参数结构体
 * @class
 */
class CreateSpotDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称。如ap-guangzhou-bls-1, 通过DescribeRegions获取
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 计算单元类型
         * @type {string || null}
         */
        this.ComputeType = null;

        /**
         * 操作系统类型ID
         * @type {number || null}
         */
        this.OsTypeId = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 购买的计算单元个数
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 出价策略。可取值为SpotWithPriceLimit和SpotAsPriceGo。SpotWithPriceLimit，用户设置价格上限，需要传SpotPriceLimit参数， 如果市场价高于用户的指定价格，则购买不成功;  SpotAsPriceGo 是随市场价的策略。
         * @type {string || null}
         */
        this.SpotStrategy = null;

        /**
         * 用户设置的价格。当为SpotWithPriceLimit竞价策略时有效
         * @type {number || null}
         */
        this.SpotPriceLimit = null;

        /**
         * 设置竞价实例密码。可选参数，没有指定会生成随机密码
         * @type {string || null}
         */
        this.Passwd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = params.Zone || null;
        this.ComputeType = params.ComputeType || null;
        this.OsTypeId = params.OsTypeId || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.GoodsNum = params.GoodsNum || null;
        this.SpotStrategy = params.SpotStrategy || null;
        this.SpotPriceLimit = params.SpotPriceLimit || null;
        this.Passwd = params.Passwd || null;

    }
}

/**
 * DeleteUserCmds请求参数结构体
 * @class
 */
class DeleteUserCmdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的脚本ID
         * @type {Array.<string> || null}
         */
        this.CmdIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmdIds = params.CmdIds || null;

    }
}

/**
 * ModifyUserCmd返回参数结构体
 * @class
 */
class ModifyUserCmdResponse extends  AbstractModel {
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
 * CreateUserCmd请求参数结构体
 * @class
 */
class CreateUserCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义脚本的名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 命令适用的操作系统类型，取值linux或xserver
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 脚本内容，必须经过base64编码
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = params.Alias || null;
        this.OsType = params.OsType || null;
        this.Content = params.Content || null;

    }
}

/**
 * ModifyPayModePre2Post请求参数结构体
 * @class
 */
class ModifyPayModePre2PostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改的设备ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = params.InstanceIds || null;

    }
}

/**
 * DescribeDevicePriceInfo返回参数结构体
 * @class
 */
class DescribeDevicePriceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器价格信息列表
         * @type {Array.<DevicePriceInfo> || null}
         */
        this.DevicePriceInfoSet = null;

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

        if (params.DevicePriceInfoSet) {
            this.DevicePriceInfoSet = new Array();
            for (let z in params.DevicePriceInfoSet) {
                let obj = new DevicePriceInfo();
                obj.deserialize(params.DevicePriceInfoSet[z]);
                this.DevicePriceInfoSet.push(obj);
            }
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
 * 服务器价格信息
 * @class
 */
class DevicePriceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 设备型号
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 是否是弹性机型，1：是，0：否
         * @type {number || null}
         */
        this.IsElastic = null;

        /**
         * 付费模式ID, 1:预付费; 2:后付费; 3:预付费转后付费中
         * @type {number || null}
         */
        this.CpmPayMode = null;

        /**
         * Cpu信息描述
         * @type {string || null}
         */
        this.CpuDescription = null;

        /**
         * 内存信息描述
         * @type {string || null}
         */
        this.MemDescription = null;

        /**
         * 硬盘信息描述
         * @type {string || null}
         */
        this.DiskDescription = null;

        /**
         * 网卡信息描述
         * @type {string || null}
         */
        this.NicDescription = null;

        /**
         * Gpu信息描述
         * @type {string || null}
         */
        this.GpuDescription = null;

        /**
         * Raid信息描述
         * @type {string || null}
         */
        this.RaidDescription = null;

        /**
         * 客户的单价
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 刊例单价
         * @type {number || null}
         */
        this.NormalPrice = null;

        /**
         * 原价
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 折扣价
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * 计费时长
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 计费时长单位, m:按月计费; d:按天计费
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 商品数量
         * @type {number || null}
         */
        this.GoodsCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.DeviceClassCode = params.DeviceClassCode || null;
        this.IsElastic = params.IsElastic || null;
        this.CpmPayMode = params.CpmPayMode || null;
        this.CpuDescription = params.CpuDescription || null;
        this.MemDescription = params.MemDescription || null;
        this.DiskDescription = params.DiskDescription || null;
        this.NicDescription = params.NicDescription || null;
        this.GpuDescription = params.GpuDescription || null;
        this.RaidDescription = params.RaidDescription || null;
        this.Price = params.Price || null;
        this.NormalPrice = params.NormalPrice || null;
        this.TotalCost = params.TotalCost || null;
        this.RealTotalCost = params.RealTotalCost || null;
        this.TimeSpan = params.TimeSpan || null;
        this.TimeUnit = params.TimeUnit || null;
        this.GoodsCount = params.GoodsCount || null;

    }
}

/**
 * RebootDevices请求参数结构体
 * @class
 */
class RebootDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要重启的设备ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = params.InstanceIds || null;

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
 * DescribeDevices请求参数结构体
 * @class
 */
class DescribeDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 机型ID，通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/17602)查询
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 设备ID数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 外网IP数组
         * @type {Array.<string> || null}
         */
        this.WanIps = null;

        /**
         * 内网IP数组
         * @type {Array.<string> || null}
         */
        this.LanIps = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 模糊IP查询
         * @type {string || null}
         */
        this.VagueIp = null;

        /**
         * 设备到期时间查询的起始时间
         * @type {string || null}
         */
        this.DeadlineStartTime = null;

        /**
         * 设备到期时间查询的结束时间
         * @type {string || null}
         */
        this.DeadlineEndTime = null;

        /**
         * 自动续费标志 0:不自动续费，1:自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 私有网络唯一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网唯一ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 设备类型，取值有: compute(计算型), standard(标准型), storage(存储型) 等
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 竞价实例机器的过滤。如果未指定此参数，则不做过滤。0: 查询非竞价实例的机器; 1: 查询竞价实例的机器。
         * @type {number || null}
         */
        this.IsLuckyDevice = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值：0:增序(默认)，1:降序
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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.DeviceClassCode = params.DeviceClassCode || null;
        this.InstanceIds = params.InstanceIds || null;
        this.WanIps = params.WanIps || null;
        this.LanIps = params.LanIps || null;
        this.Alias = params.Alias || null;
        this.VagueIp = params.VagueIp || null;
        this.DeadlineStartTime = params.DeadlineStartTime || null;
        this.DeadlineEndTime = params.DeadlineEndTime || null;
        this.AutoRenewFlag = params.AutoRenewFlag || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = params.DeviceType || null;
        this.IsLuckyDevice = params.IsLuckyDevice || null;
        this.OrderField = params.OrderField || null;
        this.Order = params.Order || null;

    }
}

/**
 * ModifyUserCmd请求参数结构体
 * @class
 */
class ModifyUserCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 待修改的脚本名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 脚本适用的操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 待修改的脚本内容，必须经过base64编码
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmdId = params.CmdId || null;
        this.Alias = params.Alias || null;
        this.OsType = params.OsType || null;
        this.Content = params.Content || null;

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
 * DescribeUserCmds返回参数结构体
 * @class
 */
class DescribeUserCmdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 脚本信息列表
         * @type {Array.<UserCmd> || null}
         */
        this.UserCmds = null;

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

        if (params.UserCmds) {
            this.UserCmds = new Array();
            for (let z in params.UserCmds) {
                let obj = new UserCmd();
                obj.deserialize(params.UserCmds[z]);
                this.UserCmds.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * RunUserCmd返回参数结构体
 * @class
 */
class RunUserCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行成功的任务信息列表
         * @type {Array.<SuccessTaskInfo> || null}
         */
        this.SuccessTaskInfoSet = null;

        /**
         * 运行失败的任务信息列表
         * @type {Array.<FailedTaskInfo> || null}
         */
        this.FailedTaskInfoSet = null;

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

        if (params.SuccessTaskInfoSet) {
            this.SuccessTaskInfoSet = new Array();
            for (let z in params.SuccessTaskInfoSet) {
                let obj = new SuccessTaskInfo();
                obj.deserialize(params.SuccessTaskInfoSet[z]);
                this.SuccessTaskInfoSet.push(obj);
            }
        }

        if (params.FailedTaskInfoSet) {
            this.FailedTaskInfoSet = new Array();
            for (let z in params.FailedTaskInfoSet) {
                let obj = new FailedTaskInfo();
                obj.deserialize(params.FailedTaskInfoSet[z]);
                this.FailedTaskInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeUserCmdTaskInfo请求参数结构体
 * @class
 */
class DescribeUserCmdTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持： RunBeginTime,RunEndTime,Status
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值: 1倒序，0顺序；默认倒序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 关键字搜索，可搜索ID或别名，支持模糊搜索
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
        this.TaskId = params.TaskId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.OrderField = params.OrderField || null;
        this.Order = params.Order || null;
        this.SearchKey = params.SearchKey || null;

    }
}

/**
 * ResetDevicePassword返回参数结构体
 * @class
 */
class ResetDevicePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
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
 * CreateSpotDevice返回参数结构体
 * @class
 */
class CreateSpotDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的服务器ID
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 任务ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.ResourceIds = params.ResourceIds || null;
        this.FlowId = params.FlowId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 物理机信息
 * @class
 */
class DeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 设备状态ID
         * @type {number || null}
         */
        this.DeviceStatus = null;

        /**
         * 设备操作状态
         * @type {number || null}
         */
        this.OperateStatus = null;

        /**
         * 操作系统ID
         * @type {number || null}
         */
        this.OsTypeId = null;

        /**
         * RAID类型ID
         * @type {number || null}
         */
        this.RaidId = null;

        /**
         * 设备别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 外网IP
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 设备交付时间
         * @type {string || null}
         */
        this.DeliverTime = null;

        /**
         * 设备到期时间
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 自动续费标识。0: 不自动续费; 1:自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 设备类型
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 计费模式。1: 预付费; 2: 后付费; 3:预付费转后付费中
         * @type {number || null}
         */
        this.CpmPayMode = null;

        /**
         * 带外IP
         * @type {string || null}
         */
        this.DhcpIp = null;

        /**
         * 所在私有网络别名
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 所在子网别名
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 所在私有网络CIDR
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 所在子网CIDR
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 标识是否是竞价实例。0: 普通设备; 1: 竞价实例设备
         * @type {number || null}
         */
        this.IsLuckyDevice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.DeviceStatus = params.DeviceStatus || null;
        this.OperateStatus = params.OperateStatus || null;
        this.OsTypeId = params.OsTypeId || null;
        this.RaidId = params.RaidId || null;
        this.Alias = params.Alias || null;
        this.AppId = params.AppId || null;
        this.Zone = params.Zone || null;
        this.WanIp = params.WanIp || null;
        this.LanIp = params.LanIp || null;
        this.DeliverTime = params.DeliverTime || null;
        this.Deadline = params.Deadline || null;
        this.AutoRenewFlag = params.AutoRenewFlag || null;
        this.DeviceClassCode = params.DeviceClassCode || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.CpmPayMode = params.CpmPayMode || null;
        this.DhcpIp = params.DhcpIp || null;
        this.VpcName = params.VpcName || null;
        this.SubnetName = params.SubnetName || null;
        this.VpcCidrBlock = params.VpcCidrBlock || null;
        this.SubnetCidrBlock = params.SubnetCidrBlock || null;
        this.IsLuckyDevice = params.IsLuckyDevice || null;

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
 * DescribeUserCmdTasks请求参数结构体
 * @class
 */
class DescribeUserCmdTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持： RunBeginTime,RunEndTime,InstanceCount,SuccessCount,FailureCount
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值: 1倒序，0顺序；默认倒序
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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.OrderField = params.OrderField || null;
        this.Order = params.Order || null;

    }
}

/**
 * DescribeDevicePriceInfo请求参数结构体
 * @class
 */
class DescribeDevicePriceInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的实例列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 购买时长单位，当前只支持取值为m
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买时长
         * @type {number || null}
         */
        this.TimeSpan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = params.InstanceIds || null;
        this.TimeUnit = params.TimeUnit || null;
        this.TimeSpan = params.TimeSpan || null;

    }
}

/**
 * CreateUserCmd返回参数结构体
 * @class
 */
class CreateUserCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

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
        this.CmdId = params.CmdId || null;
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
    UserCmdTask: UserCmdTask,
    TaskOperationLog: TaskOperationLog,
    CreatePsaRegulationRequest: CreatePsaRegulationRequest,
    DescribeUserCmdTasksResponse: DescribeUserCmdTasksResponse,
    UnbindPsaTagRequest: UnbindPsaTagRequest,
    PsaRegulation: PsaRegulation,
    FailedTaskInfo: FailedTaskInfo,
    DescribeUserCmdsRequest: DescribeUserCmdsRequest,
    DeleteUserCmdsResponse: DeleteUserCmdsResponse,
    RebootDevicesResponse: RebootDevicesResponse,
    ResetDevicePasswordRequest: ResetDevicePasswordRequest,
    ModifyDeviceAliasesRequest: ModifyDeviceAliasesRequest,
    ModifyPayModePre2PostResponse: ModifyPayModePre2PostResponse,
    SuccessTaskInfo: SuccessTaskInfo,
    DescribeTaskOperationLogResponse: DescribeTaskOperationLogResponse,
    BindPsaTagResponse: BindPsaTagResponse,
    ModifyDeviceAliasesResponse: ModifyDeviceAliasesResponse,
    RepairTaskControlResponse: RepairTaskControlResponse,
    UnbindPsaTagResponse: UnbindPsaTagResponse,
    DeviceAlias: DeviceAlias,
    DescribeUserCmdTaskInfoResponse: DescribeUserCmdTaskInfoResponse,
    RunUserCmdRequest: RunUserCmdRequest,
    DescribeDevicesResponse: DescribeDevicesResponse,
    UserCmdTaskInfo: UserCmdTaskInfo,
    UserCmd: UserCmd,
    DescribeRepairTaskConstantRequest: DescribeRepairTaskConstantRequest,
    DeletePsaRegulationRequest: DeletePsaRegulationRequest,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    CreateSpotDeviceRequest: CreateSpotDeviceRequest,
    DeleteUserCmdsRequest: DeleteUserCmdsRequest,
    ModifyUserCmdResponse: ModifyUserCmdResponse,
    CreateUserCmdRequest: CreateUserCmdRequest,
    ModifyPayModePre2PostRequest: ModifyPayModePre2PostRequest,
    DescribeDevicePriceInfoResponse: DescribeDevicePriceInfoResponse,
    DescribeRepairTaskConstantResponse: DescribeRepairTaskConstantResponse,
    DevicePriceInfo: DevicePriceInfo,
    RebootDevicesRequest: RebootDevicesRequest,
    DescribePsaRegulationsResponse: DescribePsaRegulationsResponse,
    DescribeDevicesRequest: DescribeDevicesRequest,
    ModifyUserCmdRequest: ModifyUserCmdRequest,
    CreatePsaRegulationResponse: CreatePsaRegulationResponse,
    ModifyPsaRegulationRequest: ModifyPsaRegulationRequest,
    DescribeUserCmdsResponse: DescribeUserCmdsResponse,
    RunUserCmdResponse: RunUserCmdResponse,
    DescribeUserCmdTaskInfoRequest: DescribeUserCmdTaskInfoRequest,
    ResetDevicePasswordResponse: ResetDevicePasswordResponse,
    BindPsaTagRequest: BindPsaTagRequest,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    RepairTaskControlRequest: RepairTaskControlRequest,
    CreateSpotDeviceResponse: CreateSpotDeviceResponse,
    DeviceInfo: DeviceInfo,
    DescribePsaRegulationsRequest: DescribePsaRegulationsRequest,
    Tag: Tag,
    DeletePsaRegulationResponse: DeletePsaRegulationResponse,
    DescribeUserCmdTasksRequest: DescribeUserCmdTasksRequest,
    DescribeDevicePriceInfoRequest: DescribeDevicePriceInfoRequest,
    CreateUserCmdResponse: CreateUserCmdResponse,
    TaskType: TaskType,
    TaskInfo: TaskInfo,

}
