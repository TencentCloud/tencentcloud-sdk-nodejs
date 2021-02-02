/**
 * 任务结果。
 */
export interface TaskResult {
    /**
      * 命令执行ExitCode。
      */
    ExitCode: number;
    /**
      * Base64编码后的命令输出。最大长度24KB。
      */
    Output: string;
    /**
      * 命令执行开始时间。
      */
    ExecStartTime: string;
    /**
      * 命令执行结束时间。
      */
    ExecEndTime: string;
}
/**
 * CreateCommand返回参数结构体
 */
export interface CreateCommandResponse {
    /**
      * 命令ID。
      */
    CommandId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 自动化助手客户端信息
 */
export interface AutomationAgentInfo {
    /**
      * 实例ID。
      */
    InstanceId: string;
    /**
      * Agent 版本号。
      */
    Version: string;
    /**
      * 上次心跳时间
      */
    LastHeartbeatTime: string;
    /**
      * Agent状态，取值范围：
<li> Online：在线
<li> Offline：离线
      */
    AgentStatus: string;
    /**
      * Agent运行环境
      */
    Environment: string;
}
/**
 * RunCommand请求参数结构体
 */
export interface RunCommandRequest {
    /**
      * Base64编码后的命令内容，长度不可超过64KB。
      */
    Content: string;
    /**
      * 待执行命令的实例ID列表。 支持实例类型：
<li> CVM
<li> LIGHTHOUSE
      */
    InstanceIds: Array<string>;
    /**
      * 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
      */
    CommandName?: string;
    /**
      * 命令描述。不超过120字符。
      */
    Description?: string;
    /**
      * 命令类型，目前仅支持取值：SHELL。默认：SHELL。
      */
    CommandType?: string;
    /**
      * 命令执行路径，默认：/root。
      */
    WorkingDirectory?: string;
    /**
      * 命令超时时间，默认60秒。取值范围[1, 86400]。
      */
    Timeout?: number;
    /**
      * 是否保存命令，取值范围：
<li> True：保存
<li> False：不保存
默认为 False。
      */
    SaveCommand?: boolean;
}
/**
 * DescribeInvocationTasks请求参数结构体
 */
export interface DescribeInvocationTasksRequest {
    /**
      * 执行任务ID列表，每次请求的上限为100。参数不支持同时指定 `InvocationTaskIds` 和 `Filters`。
      */
    InvocationTaskIds?: Array<string>;
    /**
      * 过滤条件。<br> <li> invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。<br> <li> invocation-task-id - String - 是否必填：否 -（过滤条件）按照执行任务ID过滤。<br> <li> instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationTaskIds` 和 `Filters` 。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
    /**
      * 是否隐藏输出，取值范围：<br><li>True：隐藏输出 <br><li>False：不隐藏 <br>默认为 True。
      */
    HideOutput?: boolean;
}
/**
 * 执行活动详情。
 */
export interface Invocation {
    /**
      * 执行活动ID。
      */
    InvocationId: string;
    /**
      * 命令ID。
      */
    CommandId: string;
    /**
      * 执行活动状态。
      */
    InvocationStatus: string;
    /**
      * 执行任务信息列表。
      */
    InvocationTaskBasicInfoSet: Array<InvocationTaskBasicInfo>;
    /**
      * 执行活动描述。
      */
    Description: string;
    /**
      * 执行活动开始时间。
      */
    StartTime: string;
    /**
      * 执行活动结束时间。
      */
    EndTime: string;
    /**
      * 执行活动创建时间。
      */
    CreatedTime: string;
    /**
      * 执行活动更新时间。
      */
    UpdatedTime: string;
}
/**
 * 命令执行详情。
 */
export interface CommandDocument {
    /**
      * Base64 编码后的执行命令。
      */
    Content: string;
    /**
      * 命令类型。
      */
    CommandType: string;
    /**
      * 超时时间。
      */
    Timeout: number;
    /**
      * 执行路径。
      */
    WorkingDirectory: string;
}
/**
 * ModifyCommand返回参数结构体
 */
export interface ModifyCommandResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述单个地域信息
 */
export interface RegionInfo {
    /**
      * 地域名称，例如，ap-guangzhou
      */
    Region: string;
    /**
      * 地域描述，例如: 广州
      */
    RegionName: string;
    /**
      * 地域是否可用状态
      */
    RegionState: string;
}
/**
 * DeleteCommand返回参数结构体
 */
export interface DeleteCommandResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCommands返回参数结构体
 */
export interface DescribeCommandsResponse {
    /**
      * 符合条件的命令总数。
      */
    TotalCount: number;
    /**
      * 命令详情列表。
      */
    CommandSet: Array<Command>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAutomationAgentStatus请求参数结构体
 */
export interface DescribeAutomationAgentStatusRequest {
    /**
      * 待查询的实例ID列表。
      */
    InstanceIds?: Array<string>;
    /**
      * 过滤条件。<br> <li> agent-status - String - 是否必填：否 -（过滤条件）按照agent状态过滤，取值：Online 在线，Offline 离线。<br> <li> environment - String - 是否必填：否 -（过滤条件）按照agent运行环境查询，取值：Linux。<br> <li> instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InstanceIds` 和 `Filters` 。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
}
/**
 * InvokeCommand返回参数结构体
 */
export interface InvokeCommandResponse {
    /**
      * 执行活动ID。
      */
    InvocationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCommand请求参数结构体
 */
export interface ModifyCommandRequest {
    /**
      * 命令ID。
      */
    CommandId: string;
    /**
      * 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
      */
    CommandName?: string;
    /**
      * 命令描述。不超过120字符。
      */
    Description?: string;
    /**
      * Base64编码后的命令内容，长度不可超过64KB。
      */
    Content?: string;
    /**
      * 命令类型，目前仅支持取值：SHELL。
      */
    CommandType?: string;
    /**
      * 命令执行路径，默认：`/root`。
      */
    WorkingDirectory?: string;
    /**
      * 命令超时时间，默认60秒。取值范围[1, 86400]。
      */
    Timeout?: number;
}
/**
 * DescribeCommands请求参数结构体
 */
export interface DescribeCommandsRequest {
    /**
      * 命令ID列表，每次请求的上限为100。参数不支持同时指定 `CommandIds` 和 `Filters` 。
      */
    CommandIds?: Array<string>;
    /**
      * 过滤条件。<br> <li> command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。<br> <li> command-name - String - 是否必填：否 -（过滤条件）按照命令名称过滤。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `CommandIds` 和 `Filters` 。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
}
/**
 * DescribeInvocations请求参数结构体
 */
export interface DescribeInvocationsRequest {
    /**
      * 执行活动ID列表，每次请求的上限为100。参数不支持同时指定 `InvocationIds` 和 `Filters`。
      */
    InvocationIds?: Array<string>;
    /**
      * 过滤条件。<br> <li> invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。<br> <li> command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。 <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationIds` 和 `Filters` 。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
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
 */
export interface Filter {
    /**
      * 需要过滤的字段。
      */
    Name: string;
    /**
      * 字段的过滤值。
      */
    Values: Array<string>;
}
/**
 * DescribeInvocations返回参数结构体
 */
export interface DescribeInvocationsResponse {
    /**
      * 符合条件的执行活动总数。
      */
    TotalCount: number;
    /**
      * 执行活动列表。
      */
    InvocationSet: Array<Invocation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInvocationTasks返回参数结构体
 */
export interface DescribeInvocationTasksResponse {
    /**
      * 符合条件的执行任务总数。
      */
    TotalCount: number;
    /**
      * 执行任务列表。
      */
    InvocationTaskSet: Array<InvocationTask>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 命令详情。
 */
export interface Command {
    /**
      * 命令ID。
      */
    CommandId: string;
    /**
      * 命令名称。
      */
    CommandName: string;
    /**
      * 命令描述。
      */
    Description: string;
    /**
      * Base64编码后的命令内容。
      */
    Content: string;
    /**
      * 命令类型。
      */
    CommandType: string;
    /**
      * 命令执行路径。
      */
    WorkingDirectory: string;
    /**
      * 命令超时时间。
      */
    Timeout: number;
    /**
      * 命令创建时间。
      */
    CreatedTime: string;
    /**
      * 命令更新时间。
      */
    UpdatedTime: string;
}
/**
 * 执行任务。
 */
export interface InvocationTask {
    /**
      * 执行活动ID。
      */
    InvocationId: string;
    /**
      * 执行任务ID。
      */
    InvocationTaskId: string;
    /**
      * 命令ID。
      */
    CommandId: string;
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
      */
    TaskStatus: string;
    /**
      * 实例ID。
      */
    InstanceId: string;
    /**
      * 执行结果。
      */
    TaskResult: TaskResult;
    /**
      * 执行任务开始时间。
      */
    StartTime: string;
    /**
      * 执行任务结束时间。
      */
    EndTime: string;
    /**
      * 创建时间。
      */
    CreatedTime: string;
    /**
      * 更新时间。
      */
    UpdatedTime: string;
    /**
      * 执行任务所执行的命令详情。
      */
    CommandDocument: CommandDocument;
}
/**
 * DescribeAutomationAgentStatus返回参数结构体
 */
export interface DescribeAutomationAgentStatusResponse {
    /**
      * Agent 信息列表。
      */
    AutomationAgentSet: Array<AutomationAgentInfo>;
    /**
      * 符合条件的 Agent 总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 执行活动任务简介。
 */
export interface InvocationTaskBasicInfo {
    /**
      * 执行任务ID。
      */
    InvocationTaskId: string;
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
      */
    TaskStatus: string;
    /**
      * 实例ID。
      */
    InstanceId: string;
}
/**
 * DeleteCommand请求参数结构体
 */
export interface DeleteCommandRequest {
    /**
      * 待删除的命令ID。
      */
    CommandId: string;
}
/**
 * InvokeCommand请求参数结构体
 */
export interface InvokeCommandRequest {
    /**
      * 待触发的命令ID。
      */
    CommandId: string;
    /**
      * 待执行命令的实例ID列表。
      */
    InstanceIds: Array<string>;
}
/**
 * DescribeRegions请求参数结构体
 */
export declare type DescribeRegionsRequest = null;
/**
 * RunCommand返回参数结构体
 */
export interface RunCommandResponse {
    /**
      * 命令ID。
      */
    CommandId: string;
    /**
      * 执行活动ID。
      */
    InvocationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
      * 地域数量
      */
    TotalCount: number;
    /**
      * 地域信息列表
      */
    RegionSet: Array<RegionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCommand请求参数结构体
 */
export interface CreateCommandRequest {
    /**
      * 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
      */
    CommandName: string;
    /**
      * Base64编码后的命令内容，长度不可超过64KB。
      */
    Content: string;
    /**
      * 命令描述。不超过120字符。
      */
    Description?: string;
    /**
      * 命令类型，目前仅支持取值：SHELL。默认：SHELL。
      */
    CommandType?: string;
    /**
      * 命令执行路径，默认：/root。
      */
    WorkingDirectory?: string;
    /**
      * 命令超时时间，默认60秒。取值范围[1, 86400]。
      */
    Timeout?: number;
}
