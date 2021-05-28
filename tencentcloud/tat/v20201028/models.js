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
 * PreviewReplacedCommandContent返回参数结构体
 * @class
 */
class PreviewReplacedCommandContentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义参数替换后的，经Base64编码的命令内容。
         * @type {string || null}
         */
        this.ReplacedContent = null;

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
        this.ReplacedContent = 'ReplacedContent' in params ? params.ReplacedContent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCommand返回参数结构体
 * @class
 */
class CreateCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

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
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 自动化助手客户端信息
 * @class
 */
class AutomationAgentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent 版本号。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 上次心跳时间
         * @type {string || null}
         */
        this.LastHeartbeatTime = null;

        /**
         * Agent状态，取值范围：
<li> Online：在线
<li> Offline：离线
         * @type {string || null}
         */
        this.AgentStatus = null;

        /**
         * Agent运行环境
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LastHeartbeatTime = 'LastHeartbeatTime' in params ? params.LastHeartbeatTime : null;
        this.AgentStatus = 'AgentStatus' in params ? params.AgentStatus : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * RunCommand请求参数结构体
 * @class
 */
class RunCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64编码后的命令内容，长度不可超过64KB。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 待执行命令的实例ID列表。 支持实例类型：
<li> CVM
<li> LIGHTHOUSE
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * 命令描述。不超过120字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 命令类型，目前仅支持取值：SHELL。默认：SHELL。
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * 命令执行路径，默认：/root。
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * 命令超时时间，默认60秒。取值范围[1, 86400]。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 是否保存命令，取值范围：
<li> True：保存
<li> False：不保存
默认为 False。
         * @type {boolean || null}
         */
        this.SaveCommand = null;

        /**
         * 是否启用自定义参数功能。
一旦创建，此值不提供修改。
默认值：false。
         * @type {boolean || null}
         */
        this.EnableParameter = null;

        /**
         * 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{\"varA\": \"222\"}。
key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
如果 Parameters 未提供，将使用这里的默认值进行替换。
自定义参数最多20个。
自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
         * @type {string || null}
         */
        this.DefaultParameters = null;

        /**
         * Command 的自定义参数。字段类型为json encoded string。如：{\"varA\": \"222\"}。
key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
如果未提供该参数取值，将使用 DefaultParameters 进行替换。
自定义参数最多20个。
自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
         * @type {string || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.SaveCommand = 'SaveCommand' in params ? params.SaveCommand : null;
        this.EnableParameter = 'EnableParameter' in params ? params.EnableParameter : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;

    }
}

/**
 * DescribeInvocationTasks请求参数结构体
 * @class
 */
class DescribeInvocationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行任务ID列表，每次请求的上限为100。参数不支持同时指定 `InvocationTaskIds` 和 `Filters`。
         * @type {Array.<string> || null}
         */
        this.InvocationTaskIds = null;

        /**
         * 过滤条件。<br> <li> invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。<br> <li> invocation-task-id - String - 是否必填：否 -（过滤条件）按照执行任务ID过滤。<br> <li> instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationTaskIds` 和 `Filters` 。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 是否隐藏输出，取值范围：<br><li>True：隐藏输出 <br><li>False：不隐藏 <br>默认为 True。
         * @type {boolean || null}
         */
        this.HideOutput = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationTaskIds = 'InvocationTaskIds' in params ? params.InvocationTaskIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.HideOutput = 'HideOutput' in params ? params.HideOutput : null;

    }
}

/**
 * 执行活动详情。
 * @class
 */
class Invocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行活动ID。
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * 命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * 执行任务状态。取值范围：
<li> PENDING：等待下发 
<li> RUNNING：命令运行中
<li> SUCCESS：命令成功
<li> FAILED：命令失败
<li> TIMEOUT：命令超时
<li> PARTIAL_FAILED：命令部分失败
         * @type {string || null}
         */
        this.InvocationStatus = null;

        /**
         * 执行任务信息列表。
         * @type {Array.<InvocationTaskBasicInfo> || null}
         */
        this.InvocationTaskBasicInfoSet = null;

        /**
         * 执行活动描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 执行活动开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 执行活动结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 执行活动创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 执行活动更新时间。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 自定义参数取值。
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 自定义参数的默认取值。
         * @type {string || null}
         */
        this.DefaultParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.InvocationStatus = 'InvocationStatus' in params ? params.InvocationStatus : null;

        if (params.InvocationTaskBasicInfoSet) {
            this.InvocationTaskBasicInfoSet = new Array();
            for (let z in params.InvocationTaskBasicInfoSet) {
                let obj = new InvocationTaskBasicInfo();
                obj.deserialize(params.InvocationTaskBasicInfoSet[z]);
                this.InvocationTaskBasicInfoSet.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;

    }
}

/**
 * 命令执行详情。
 * @class
 */
class CommandDocument extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64 编码后的执行命令。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 命令类型。
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * 超时时间。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 执行路径。
         * @type {string || null}
         */
        this.WorkingDirectory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;

    }
}

/**
 * 任务结果。
 * @class
 */
class TaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令执行ExitCode。
         * @type {number || null}
         */
        this.ExitCode = null;

        /**
         * Base64编码后的命令输出。最大长度24KB。
         * @type {string || null}
         */
        this.Output = null;

        /**
         * 命令执行开始时间。
         * @type {string || null}
         */
        this.ExecStartTime = null;

        /**
         * 命令执行结束时间。
         * @type {string || null}
         */
        this.ExecEndTime = null;

        /**
         * 命令最终输出被截断的字节数。
         * @type {number || null}
         */
        this.Dropped = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExitCode = 'ExitCode' in params ? params.ExitCode : null;
        this.Output = 'Output' in params ? params.Output : null;
        this.ExecStartTime = 'ExecStartTime' in params ? params.ExecStartTime : null;
        this.ExecEndTime = 'ExecEndTime' in params ? params.ExecEndTime : null;
        this.Dropped = 'Dropped' in params ? params.Dropped : null;

    }
}

/**
 * ModifyCommand返回参数结构体
 * @class
 */
class ModifyCommandResponse extends  AbstractModel {
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
 * 描述单个地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称，例如，ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域描述，例如: 广州
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域是否可用状态
         * @type {string || null}
         */
        this.RegionState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * DeleteCommand返回参数结构体
 * @class
 */
class DeleteCommandResponse extends  AbstractModel {
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
 * DescribeCommands返回参数结构体
 * @class
 */
class DescribeCommandsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的命令总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 命令详情列表。
         * @type {Array.<Command> || null}
         */
        this.CommandSet = null;

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

        if (params.CommandSet) {
            this.CommandSet = new Array();
            for (let z in params.CommandSet) {
                let obj = new Command();
                obj.deserialize(params.CommandSet[z]);
                this.CommandSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutomationAgentStatus请求参数结构体
 * @class
 */
class DescribeAutomationAgentStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤条件。<br> <li> agent-status - String - 是否必填：否 -（过滤条件）按照agent状态过滤，取值：Online 在线，Offline 离线。<br> <li> environment - String - 是否必填：否 -（过滤条件）按照agent运行环境查询，取值：Linux。<br> <li> instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InstanceIds` 和 `Filters` 。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * InvokeCommand返回参数结构体
 * @class
 */
class InvokeCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行活动ID。
         * @type {string || null}
         */
        this.InvocationId = null;

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
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCommand请求参数结构体
 * @class
 */
class ModifyCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * 命令描述。不超过120字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Base64编码后的命令内容，长度不可超过64KB。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 命令类型，目前仅支持取值：SHELL。
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * 命令执行路径，默认：`/root`。
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * 命令超时时间，默认60秒。取值范围[1, 86400]。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{\"varA\": \"222\"}。
采取整体全覆盖式修改，即修改时必须提供所有新默认值。
必须 Command 的 EnableParameter 为 true 时，才允许修改这个值。
key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
自定义参数最多20个。
自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
         * @type {string || null}
         */
        this.DefaultParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;

    }
}

/**
 * DescribeCommands请求参数结构体
 * @class
 */
class DescribeCommandsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令ID列表，每次请求的上限为100。参数不支持同时指定 `CommandIds` 和 `Filters` 。
         * @type {Array.<string> || null}
         */
        this.CommandIds = null;

        /**
         * 过滤条件。<br> <li> command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。<br> <li> command-name - String - 是否必填：否 -（过滤条件）按照命令名称过滤。<br> <li> created-by - String - 是否必填：否 -（过滤条件）按照命令创建者过滤，取值为 TAT 或 USER，TAT 代表公共命令，USER 代表由用户创建的命令。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `CommandIds` 和 `Filters` 。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.CommandIds = 'CommandIds' in params ? params.CommandIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeInvocations请求参数结构体
 * @class
 */
class DescribeInvocationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行活动ID列表，每次请求的上限为100。参数不支持同时指定 `InvocationIds` 和 `Filters`。
         * @type {Array.<string> || null}
         */
        this.InvocationIds = null;

        /**
         * 过滤条件。<br> <li> invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。<br> <li> command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationIds` 和 `Filters` 。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.InvocationIds = 'InvocationIds' in params ? params.InvocationIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * PreviewReplacedCommandContent请求参数结构体
 * @class
 */
class PreviewReplacedCommandContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次预览采用的自定义参数。字段类型为 json encoded string，如：{\"varA\": \"222\"}。
key 为自定义参数名称，value 为该参数的取值。kv 均为字符串型。
自定义参数最多 20 个。
自定义参数名称需符合以下规范：字符数目上限 64，可选范围【a-zA-Z0-9-_】。
如果将预览的 CommandId 设置过 DefaultParameters，本参数可以为空。
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 要进行替换预览的命令，如果有设置过 DefaultParameters，会与 Parameters 进行叠加，后者覆盖前者。
CommandId 与 Content，必须且只能提供一个。
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * 要预览的命令内容，经 Base64 编码，长度不可超过 64KB。
CommandId 与 Content，必须且只能提供一个。
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
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
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
 * DescribeInvocations返回参数结构体
 * @class
 */
class DescribeInvocationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的执行活动总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 执行活动列表。
         * @type {Array.<Invocation> || null}
         */
        this.InvocationSet = null;

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

        if (params.InvocationSet) {
            this.InvocationSet = new Array();
            for (let z in params.InvocationSet) {
                let obj = new Invocation();
                obj.deserialize(params.InvocationSet[z]);
                this.InvocationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInvocationTasks返回参数结构体
 * @class
 */
class DescribeInvocationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的执行任务总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 执行任务列表。
         * @type {Array.<InvocationTask> || null}
         */
        this.InvocationTaskSet = null;

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

        if (params.InvocationTaskSet) {
            this.InvocationTaskSet = new Array();
            for (let z in params.InvocationTaskSet) {
                let obj = new InvocationTask();
                obj.deserialize(params.InvocationTaskSet[z]);
                this.InvocationTaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命令详情。
 * @class
 */
class Command extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * 命令名称。
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * 命令描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Base64编码后的命令内容。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 命令类型。
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * 命令执行路径。
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * 命令超时时间。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 命令创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 命令更新时间。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 是否启用自定义参数功能。
         * @type {boolean || null}
         */
        this.EnableParameter = null;

        /**
         * 自定义参数的默认取值。
         * @type {string || null}
         */
        this.DefaultParameters = null;

        /**
         * 命令的结构化描述。公共命令有值，用户命令为空字符串。
         * @type {string || null}
         */
        this.FormattedDescription = null;

        /**
         * 命令创建者。TAT 代表公共命令，USER 代表个人命令。
         * @type {string || null}
         */
        this.CreatedBy = null;

        /**
         * 命令关联的标签列表。
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
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.EnableParameter = 'EnableParameter' in params ? params.EnableParameter : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;
        this.FormattedDescription = 'FormattedDescription' in params ? params.FormattedDescription : null;
        this.CreatedBy = 'CreatedBy' in params ? params.CreatedBy : null;

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
 * 执行任务。
 * @class
 */
class InvocationTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行活动ID。
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * 执行任务ID。
         * @type {string || null}
         */
        this.InvocationTaskId = null;

        /**
         * 命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * 执行任务状态。取值范围：
<li> PENDING：等待下发 
<li> DELIVERING：下发中
<li> DELIVER_DELAYED：延时下发 
<li> DELIVER_FAILED：下发失败
<li> RUNNING：命令运行中
<li> SUCCESS：命令成功
<li> FAILED：命令失败
<li> TIMEOUT：命令超时
<li> TASK_TIMEOUT：执行任务超时
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 执行结果。
         * @type {TaskResult || null}
         */
        this.TaskResult = null;

        /**
         * 执行任务开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 执行任务结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 更新时间。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 执行任务所执行的命令详情。
         * @type {CommandDocument || null}
         */
        this.CommandDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.InvocationTaskId = 'InvocationTaskId' in params ? params.InvocationTaskId : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.TaskResult) {
            let obj = new TaskResult();
            obj.deserialize(params.TaskResult)
            this.TaskResult = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

        if (params.CommandDocument) {
            let obj = new CommandDocument();
            obj.deserialize(params.CommandDocument)
            this.CommandDocument = obj;
        }

    }
}

/**
 * DescribeAutomationAgentStatus返回参数结构体
 * @class
 */
class DescribeAutomationAgentStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent 信息列表。
         * @type {Array.<AutomationAgentInfo> || null}
         */
        this.AutomationAgentSet = null;

        /**
         * 符合条件的 Agent 总数。
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

        if (params.AutomationAgentSet) {
            this.AutomationAgentSet = new Array();
            for (let z in params.AutomationAgentSet) {
                let obj = new AutomationAgentInfo();
                obj.deserialize(params.AutomationAgentSet[z]);
                this.AutomationAgentSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 执行活动任务简介。
 * @class
 */
class InvocationTaskBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行任务ID。
         * @type {string || null}
         */
        this.InvocationTaskId = null;

        /**
         * 执行任务状态。取值范围：
<li> PENDING：等待下发 
<li> DELIVERING：下发中
<li> DELIVER_DELAYED：延时下发 
<li> DELIVER_FAILED：下发失败
<li> RUNNING：命令运行中
<li> SUCCESS：命令成功
<li> FAILED：命令失败
<li> TIMEOUT：命令超时
<li> TASK_TIMEOUT：执行任务超时
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 实例ID。
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
        this.InvocationTaskId = 'InvocationTaskId' in params ? params.InvocationTaskId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeleteCommand请求参数结构体
 * @class
 */
class DeleteCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;

    }
}

/**
 * InvokeCommand请求参数结构体
 * @class
 */
class InvokeCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待触发的命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * 待执行命令的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Command 的自定义参数。字段类型为json encoded string。如：{\"varA\": \"222\"}。
key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
如果未提供该参数取值，将使用 Command 的 DefaultParameters 进行替换。
自定义参数最多20个。
自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
         * @type {string || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;

    }
}

/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * 标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值。
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
 * RunCommand返回参数结构体
 * @class
 */
class RunCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令ID。
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * 执行活动ID。
         * @type {string || null}
         */
        this.InvocationId = null;

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
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 地域信息列表
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCommand请求参数结构体
 * @class
 */
class CreateCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * Base64编码后的命令内容，长度不可超过64KB。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 命令描述。不超过120字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 命令类型，目前仅支持取值：SHELL。默认：SHELL。
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * 命令执行路径，默认：/root。
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * 命令超时时间，默认60秒。取值范围[1, 86400]。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 是否启用自定义参数功能。
一旦创建，此值不提供修改。
默认值：false。
         * @type {boolean || null}
         */
        this.EnableParameter = null;

        /**
         * 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{\"varA\": \"222\"}。
key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
如果InvokeCommand时未提供参数取值，将使用这里的默认值进行替换。
自定义参数最多20个。
自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
         * @type {string || null}
         */
        this.DefaultParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.EnableParameter = 'EnableParameter' in params ? params.EnableParameter : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;

    }
}

module.exports = {
    PreviewReplacedCommandContentResponse: PreviewReplacedCommandContentResponse,
    CreateCommandResponse: CreateCommandResponse,
    AutomationAgentInfo: AutomationAgentInfo,
    RunCommandRequest: RunCommandRequest,
    DescribeInvocationTasksRequest: DescribeInvocationTasksRequest,
    Invocation: Invocation,
    CommandDocument: CommandDocument,
    TaskResult: TaskResult,
    ModifyCommandResponse: ModifyCommandResponse,
    RegionInfo: RegionInfo,
    DeleteCommandResponse: DeleteCommandResponse,
    DescribeCommandsResponse: DescribeCommandsResponse,
    DescribeAutomationAgentStatusRequest: DescribeAutomationAgentStatusRequest,
    InvokeCommandResponse: InvokeCommandResponse,
    ModifyCommandRequest: ModifyCommandRequest,
    DescribeCommandsRequest: DescribeCommandsRequest,
    DescribeInvocationsRequest: DescribeInvocationsRequest,
    PreviewReplacedCommandContentRequest: PreviewReplacedCommandContentRequest,
    Filter: Filter,
    DescribeInvocationsResponse: DescribeInvocationsResponse,
    DescribeInvocationTasksResponse: DescribeInvocationTasksResponse,
    Command: Command,
    InvocationTask: InvocationTask,
    DescribeAutomationAgentStatusResponse: DescribeAutomationAgentStatusResponse,
    InvocationTaskBasicInfo: InvocationTaskBasicInfo,
    DeleteCommandRequest: DeleteCommandRequest,
    InvokeCommandRequest: InvokeCommandRequest,
    DescribeRegionsRequest: DescribeRegionsRequest,
    Tag: Tag,
    RunCommandResponse: RunCommandResponse,
    DescribeRegionsResponse: DescribeRegionsResponse,
    CreateCommandRequest: CreateCommandRequest,

}
