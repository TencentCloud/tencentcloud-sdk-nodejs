/**
 * 周期执行器设置。
 */
export interface ScheduleSettings {
    /**
     * 执行策略：
  <br><li>ONCE：单次执行
  <br><li>RECURRENCE：周期执行
     */
    Policy: string;
    /**
     * 触发 Crontab 表达式。Policy 为 RECURRENCE 时，需要指定此字段。Crontab 按北京时间解析。
     */
    Recurrence?: string;
    /**
     * 执行器下次执行时间。Policy 为 ONCE 时，需要指定此字段。
     */
    InvokeTime?: string;
}
/**
 * CreateRegisterCode返回参数结构体
 */
export interface CreateRegisterCodeResponse {
    /**
     * 注册码ID。
     */
    RegisterCodeId?: string;
    /**
     * 注册码值。
     */
    RegisterCodeValue?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PreviewReplacedCommandContent返回参数结构体
 */
export interface PreviewReplacedCommandContentResponse {
    /**
     * 自定义参数替换后的，经Base64编码的命令内容。
     */
    ReplacedContent?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCommand返回参数结构体
 */
export interface CreateCommandResponse {
    /**
     * 命令ID。
     */
    CommandId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisableInvoker请求参数结构体
 */
export interface DisableInvokerRequest {
    /**
     * 待停止的执行器ID。
     */
    InvokerId: string;
}
/**
 * 注册实例信息。
 */
export interface RegisterInstanceInfo {
    /**
     * 注册码ID。
     */
    RegisterCodeId?: string;
    /**
     * 实例ID。
     */
    InstanceId?: string;
    /**
     * 实例名。
     */
    InstanceName?: string;
    /**
     * 机器ID。
     */
    MachineId?: string;
    /**
     * 系统名。
     */
    SystemName?: string;
    /**
     * 主机名。
     */
    HostName?: string;
    /**
     * 内网IP。
     */
    LocalIp?: string;
    /**
     * 公钥。
     */
    PublicKey?: string;
    /**
     * 托管状态。
  返回Online表示实例正在托管，返回Offline表示实例未托管。
     */
    Status?: string;
    /**
     * 创建时间。
     */
    CreatedTime?: string;
    /**
     * 上次更新时间。
     */
    UpdatedTime?: string;
}
/**
 * 自动化助手客户端信息
 */
export interface AutomationAgentInfo {
    /**
     * 实例ID。
     */
    InstanceId?: string;
    /**
     * Agent 版本号。
     */
    Version?: string;
    /**
     * 上次心跳时间
     */
    LastHeartbeatTime?: string;
    /**
     * Agent状态，取值范围：
  Online：在线，Offline：离线
  
     */
    AgentStatus?: string;
    /**
     * Agent运行环境，取值范围：Linux：Linux实例Windows：Windows实例
     */
    Environment?: string;
    /**
     * Agent 支持的功能列表。
     */
    SupportFeatures?: Array<string>;
}
/**
 * DisableRegisterCodes请求参数结构体
 */
export interface DisableRegisterCodesRequest {
    /**
     * 注册码ID。
     */
    RegisterCodeIds: Array<string>;
}
/**
 * DescribeRegisterInstances请求参数结构体
 */
export interface DescribeRegisterInstancesRequest {
    /**
     * 实例id。
     */
    InstanceIds?: Array<string>;
    /**
     * 过滤器列表。
  
  - instance-name
  
  按照【实例名称】进行过滤。
  类型：String
  必选：否
  
  - instance-id
  
  按照【实例ID】进行过滤。
  类型：String
  必选：否
  
  - register-code-id
  
  按照【注册码ID】进行过滤。
  类型：String
  必选：否
  
  - sys-name
  
  按照【操作系统类型】进行过滤，取值：Linux | Windows。
  类型：String
  必选：否
  
  
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为 0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为 20，最大值为 100。
     */
    Limit?: number;
}
/**
 * DeleteRegisterCodes请求参数结构体
 */
export interface DeleteRegisterCodesRequest {
    /**
     * 注册码ID列表。限制输入的注册码ID数量大于0小于100。
     */
    RegisterCodeIds: Array<string>;
}
/**
 * 执行活动详情。
 */
export interface Invocation {
    /**
     * 执行活动ID。
     */
    InvocationId?: string;
    /**
     * 命令ID。
     */
    CommandId?: string;
    /**
     * 执行任务状态。取值范围：
  
  <ul> <li>PENDING：等待下发</li> <li>RUNNING：命令运行中</li> <li>SUCCESS：命令成功</li> <li>FAILED：命令失败</li> <li>TIMEOUT：命令超时</li> <li>PARTIAL_FAILED：命令部分失败</li> <li>PARTIAL_CANCELLED：任务部分取消</li> <li>CANCELLED：任务全部取消</li> <li>CANCELLING：任务取消中</li> </ul>
  
     */
    InvocationStatus?: string;
    /**
     * 执行任务信息列表。
     */
    InvocationTaskBasicInfoSet?: Array<InvocationTaskBasicInfo>;
    /**
     * 执行活动描述。
     */
    Description?: string;
    /**
     * 执行活动开始时间。
     */
    StartTime?: string;
    /**
     * 执行活动结束时间。
     */
    EndTime?: string;
    /**
     * 执行活动创建时间。
     */
    CreatedTime?: string;
    /**
     * 执行活动更新时间。
     */
    UpdatedTime?: string;
    /**
     * 自定义参数取值。
     */
    Parameters?: string;
    /**
     * 自定义参数的默认取值。
     */
    DefaultParameters?: string;
    /**
     * 执行命令的实例类型，取值范围：CVM、LIGHTHOUSE。
     */
    InstanceKind?: string;
    /**
     * 在实例上执行命令时使用的用户名。
     */
    Username?: string;
    /**
     * 调用来源。
     */
    InvocationSource?: string;
    /**
     * base64编码的命令内容
     */
    CommandContent?: string;
    /**
     * 命令类型
     */
    CommandType?: string;
    /**
     * 执行命令过期时间， 单位秒
     */
    Timeout?: number;
    /**
     * 执行命令的工作路径
     */
    WorkingDirectory?: string;
    /**
     * 日志上传的cos bucket 地址。
     */
    OutputCOSBucketUrl?: string;
    /**
     * 日志在cos bucket中的目录。
     */
    OutputCOSKeyPrefix?: string;
}
/**
 * 用户配额信息。
 */
export interface GeneralResourceQuotaSet {
    /**
     * 资源名称
     */
    ResourceName?: string;
    /**
     * 已使用额度
     */
    ResourceQuotaUsed?: number;
    /**
     * 总额度
     */
    ResourceQuotaTotal?: number;
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
     * 待执行命令的实例ID列表，上限200。支持实例类型：
  <li> CVM </li>
  <li> LIGHTHOUSE </li>
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
     * 命令类型，目前支持取值：SHELL、POWERSHELL。默认：SHELL。
     */
    CommandType?: string;
    /**
     * 命令执行路径，对于 SHELL 命令默认为 /root，对于 POWERSHELL 命令默认为 C:\Program Files\qcloud\tat_agent\workdir。
     */
    WorkingDirectory?: string;
    /**
     * 命令超时时间，默认60秒。取值范围[1, 86400]。
     */
    Timeout?: number;
    /**
     * 是否保存命令，取值范围：
  <li> true：保存</li>
  <li> false：不保存</li>
  默认为 false。
     */
    SaveCommand?: boolean;
    /**
     * 是否启用自定义参数功能。
  一旦创建，此值不提供修改。
  取值范围：
  <li> true：启用 </li>
  <li> false：不启用 </li>
  默认值：false。
     */
    EnableParameter?: boolean;
    /**
     * 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{"varA": "222"}。
  key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
  如果 Parameters 未提供，将使用这里的默认值进行替换。
  自定义参数最多20个。
  自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
     */
    DefaultParameters?: string;
    /**
     * 自定义参数数组。 如果 Parameters 未提供，将使用这里的默认值进行替换。 自定义参数最多20个。
     */
    DefaultParameterConfs?: Array<DefaultParameterConf>;
    /**
     * Command 的自定义参数。字段类型为json encoded string。如：{"varA": "222"}。
  key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
  如果未提供该参数取值，将使用 DefaultParameters 进行替换。
  自定义参数最多20个。
  自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
     */
    Parameters?: string;
    /**
     * 如果保存命令，可为命令设置标签。列表长度不超过10。
     */
    Tags?: Array<Tag>;
    /**
     * 在 CVM 或 Lighthouse 实例中执行命令的用户名称。
  使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。默认情况下，在 Linux 实例中以 root 用户执行命令；在Windows 实例中以 System 用户执行命令。
     */
    Username?: string;
    /**
     * 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。
     */
    OutputCOSBucketUrl?: string;
    /**
     * 指定日志在cos bucket中的目录，目录命名有如下规则：
  1. 可用数字、中英文和可见字符的组合，长度最多为60。
  2. 用 / 分割路径，可快速创建子目录。
  3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称。
     */
    OutputCOSKeyPrefix?: string;
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
     * 待执行命令的实例ID列表，上限200。
     */
    InstanceIds: Array<string>;
    /**
     * Command 的自定义参数。字段类型为json encoded string。如：{"varA": "222"}。
  key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
  如果未提供该参数取值，将使用 Command 的 DefaultParameters 进行替换。
  自定义参数最多20个。
  自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
     */
    Parameters?: string;
    /**
     * 在 CVM 或 Lighthouse 实例中执行命令的用户名称。
  使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。若不填，默认以 Command 配置的 Username 执行。
     */
    Username?: string;
    /**
     * 命令执行路径, 默认以Command配置的WorkingDirectory执行。
     */
    WorkingDirectory?: string;
    /**
     * 命令超时时间，取值范围[1, 86400]。默认以Command配置的Timeout执行。
     */
    Timeout?: number;
    /**
     * 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。
     */
    OutputCOSBucketUrl?: string;
    /**
     * 指定日志在cos bucket中的目录，目录命名有如下规则：
  1. 可用数字、中英文和可见字符的组合，长度最多为60。
  2. 用 / 分割路径，可快速创建子目录。
  3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称。
     */
    OutputCOSKeyPrefix?: string;
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
     * 过滤条件。<br>
  
  <li> invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。</li> <li> invocation-task-id - String - 是否必填：否 -（过滤条件）按照执行任务ID过滤。</li> <li> instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。</li> <li> command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。</li> <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationTaskIds` 和 `Filters` 。
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
     * 是否隐藏输出，取值范围：
  
  <ul> <li>true：隐藏输出</li> <li>false：不隐藏</li> </ul> 默认为 true。
     */
    HideOutput?: boolean;
}
/**
 * DeleteRegisterInstance返回参数结构体
 */
export interface DeleteRegisterInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRegions请求参数结构体
 */
export declare type DescribeRegionsRequest = null;
/**
 * 命令执行详情。
 */
export interface CommandDocument {
    /**
     * Base64 编码后的执行命令。
     */
    Content?: string;
    /**
     * 命令类型。
     */
    CommandType?: string;
    /**
     * 超时时间。
     */
    Timeout?: number;
    /**
     * 执行路径。
     */
    WorkingDirectory?: string;
    /**
     * 执行用户。
     */
    Username?: string;
    /**
     * 保存输出的 COS Bucket 链接。
     */
    OutputCOSBucketUrl?: string;
    /**
     * 保存输出的文件名称前缀。
     */
    OutputCOSKeyPrefix?: string;
}
/**
 * DescribeInvokerRecords返回参数结构体
 */
export interface DescribeInvokerRecordsResponse {
    /**
     * 符合条件的历史记录数量。
     */
    TotalCount?: number;
    /**
     * 执行器执行历史记录。
     */
    InvokerRecordSet?: Array<InvokerRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务结果。
 */
export interface TaskResult {
    /**
     * 命令执行ExitCode。
     */
    ExitCode?: number;
    /**
     * Base64编码后的命令输出。最大长度24KB。
     */
    Output?: string;
    /**
     * 命令执行开始时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecStartTime?: string;
    /**
     * 命令执行结束时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecEndTime?: string;
    /**
     * 命令最终输出被截断的字节数。
     */
    Dropped?: number;
    /**
     * 日志在cos中的地址
     */
    OutputUrl?: string;
    /**
     * 日志上传cos的错误信息。
     */
    OutputUploadCOSErrorInfo?: string;
}
/**
 * ModifyInvoker请求参数结构体
 */
export interface ModifyInvokerRequest {
    /**
     * 待修改的执行器ID。
     */
    InvokerId: string;
    /**
     * 待修改的执行器名称。
     */
    Name?: string;
    /**
     * 执行器类型，当前仅支持周期类型执行器，取值：`SCHEDULE` 。
     */
    Type?: string;
    /**
     * 待修改的命令ID。
     */
    CommandId?: string;
    /**
     * 待修改的用户名。
     */
    Username?: string;
    /**
     * 待修改的自定义参数。
     */
    Parameters?: string;
    /**
     * 待修改的实例ID列表。列表长度上限100。
     */
    InstanceIds?: Array<string>;
    /**
     * 待修改的周期执行器设置。
     */
    ScheduleSettings?: ScheduleSettings;
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
  <li> START_FAILED：命令启动失败
  <li> RUNNING：命令运行中
  <li> SUCCESS：命令成功
  <li> FAILED：命令执行失败，执行完退出码不为 0
  <li> TIMEOUT：命令超时
  <li> TASK_TIMEOUT：执行任务超时
  <li> CANCELLING：取消中
  <li> CANCELLED：已取消（命令启动前就被取消）
  <li> TERMINATED：已中止（命令执行期间被取消）
     */
    TaskStatus: string;
    /**
     * 实例ID。
     */
    InstanceId: string;
}
/**
 * DeleteCommands请求参数结构体
 */
export interface DeleteCommandsRequest {
    /**
     * 待删除命令id
     */
    CommandIds: Array<string>;
}
/**
 * EnableInvoker返回参数结构体
 */
export interface EnableInvokerResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQuotas请求参数结构体
 */
export interface DescribeQuotasRequest {
    /**
     * 资源名称，目前有"COMMAND","REGISTER_CODE" 这两个指标
     */
    ResourceNames: Array<string>;
}
/**
 * EnableInvoker请求参数结构体
 */
export interface EnableInvokerRequest {
    /**
     * 待启用的执行器ID。
     */
    InvokerId: string;
}
/**
 * 自定义参数。
 */
export interface DefaultParameterConf {
    /**
     * 参数名。
     */
    ParameterName: string;
    /**
     * 参数默认值。
     */
    ParameterValue: string;
    /**
     * 参数描述。
     */
    ParameterDescription?: string;
}
/**
 * DescribeScenes返回参数结构体
 */
export interface DescribeScenesResponse {
    /**
     * 符合条件的场景总数。
     */
    TotalCount?: number;
    /**
     * 场景详情列表。
     */
    SceneSet?: Array<Scene>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRegisterInstances返回参数结构体
 */
export interface DescribeRegisterInstancesResponse {
    /**
     * 该实例注册过的注册码总数。
     */
    TotalCount?: number;
    /**
     * 被托管的实例信息的列表。
     */
    RegisterInstanceSet?: Array<RegisterInstanceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCommand返回参数结构体
 */
export interface ModifyCommandResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 地域是否可用状态，AVAILABLE 代表可用
     */
    RegionState: string;
}
/**
 * DescribeInvokers返回参数结构体
 */
export interface DescribeInvokersResponse {
    /**
     * 满足条件的执行器数量。
     */
    TotalCount?: number;
    /**
     * 执行器信息。
     */
    InvokerSet?: Array<Invoker>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelInvocation返回参数结构体
 */
export interface CancelInvocationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRegisterInstance请求参数结构体
 */
export interface DeleteRegisterInstanceRequest {
    /**
     * 实例ID。
     */
    InstanceId: string;
}
/**
 * DeleteCommand返回参数结构体
 */
export interface DeleteCommandResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisableInvoker返回参数结构体
 */
export interface DisableInvokerResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 命令详情列表。
     */
    CommandSet?: Array<Command>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRegisterCode请求参数结构体
 */
export interface CreateRegisterCodeRequest {
    /**
     * 注册码描述。最大长度为 128 字符。
     */
    Description?: string;
    /**
     * 注册实例名称前缀。最大长度为 32 字符。
     */
    InstanceNamePrefix?: string;
    /**
     * 该注册码允许注册的实例数目。默认值为 10，最小值为 1，最大值为 10000。
     */
    RegisterLimit?: number;
    /**
     * 该注册码的有效时间，单位为小时。默认值为 4。
  
  - 若传入值小于等于 99999，则以小时为单位设置有效时间。
  - 若传入值大于 99999，则设置为长期有效。
     */
    EffectiveTime?: number;
    /**
     * 该注册码限制tat_agent只能从IpAddressRange所描述公网出口进行注册。默认不做限制。
     */
    IpAddressRange?: string;
}
/**
 * CreateInvoker请求参数结构体
 */
export interface CreateInvokerRequest {
    /**
     * 执行器名称。
     */
    Name: string;
    /**
     * 执行器类型，当前仅支持周期类型执行器，取值：`SCHEDULE` 。
     */
    Type: string;
    /**
     * 远程命令ID。
     */
    CommandId: string;
    /**
     * 触发器关联的实例ID。列表上限 100。
     */
    InstanceIds: Array<string>;
    /**
     * 命令执行用户。
     */
    Username?: string;
    /**
     * 命令自定义参数。
     */
    Parameters?: string;
    /**
     * 周期执行器设置，当创建周期执行器时，必须指定此参数。
     */
    ScheduleSettings?: ScheduleSettings;
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
     * <li>agent-status - String - 是否必填：否 -（过滤条件）按照agent状态过滤，取值：Online 在线，Offline 离线。</li><br><li>environment - String - 是否必填：否 -（过滤条件）按照agent运行环境查询，取值：Linux, Windows。</li><br><li>instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。</li>
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
    InvocationId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 命令类型，目前支持取值：SHELL、POWERSHELL。
     */
    CommandType?: string;
    /**
     * 命令执行路径。
     */
    WorkingDirectory?: string;
    /**
     * 命令超时时间。取值范围[1, 86400]。
     */
    Timeout?: number;
    /**
     * 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{"varA": "222"}。
  采取整体全覆盖式修改，即修改时必须提供所有新默认值。
  必须 Command 的 EnableParameter 为 true 时，才允许修改这个值。
  key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
  自定义参数最多20个。
  自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
     */
    DefaultParameters?: string;
    /**
     * 自定义参数数组。
  如果InvokeCommand时未提供参数取值，将使用这里的默认值进行替换。
  自定义参数最多20个。
     */
    DefaultParameterConfs?: Array<DefaultParameterConf>;
    /**
     * 在 CVM 或 Lighthouse 实例中执行命令的用户名称。
  使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。
     */
    Username?: string;
    /**
     * 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。
     */
    OutputCOSBucketUrl?: string;
    /**
     * 指定日志在cos bucket中的目录，目录命名有如下规则：
  1. 可用数字、中英文和可见字符的组合，长度最多为60。
  2. 用 / 分割路径，可快速创建子目录。
  3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称。
     */
    OutputCOSKeyPrefix?: string;
}
/**
 * DescribeInvokers请求参数结构体
 */
export interface DescribeInvokersRequest {
    /**
     * 执行器ID列表。
     */
    InvokerIds?: Array<string>;
    /**
     * 过滤条件：<li> invoker-id - String - 是否必填：否 - （过滤条件）按执行器ID过滤。</li> <li> command-id - String - 是否必填：否 - （过滤条件）按命令ID过滤。</li> <li> type - String - 是否必填：否 - （过滤条件）按执行器类型过滤。</li>
     */
    Filters?: Array<Filter>;
    /**
     * 返回数量，默认为20，最大值为100。
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
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
     * 过滤条件。
  <li> command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。</li>
  <li> command-name - String - 是否必填：否 -（过滤条件）按照命令名称过滤。</li>
  <li> command-type - String - 是否必填：否 -（过滤条件）按照命令类型过滤，取值为 SHELL 或 POWERSHELL。</li>
  <li> scene-id - String - 是否必填：否 -（过滤条件）按照场景ID过滤。</li>
  <li> created-by - String - 是否必填：否 -（过滤条件）按照命令创建者过滤，取值为 TAT 或 USER，TAT 代表公共命令，USER 代表由用户创建的命令。</li>
  <li> tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。</li>
  <li> tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。</li>
  <li> tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例4</li>
  
  每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `CommandIds` 和 `Filters` 。
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
 * DeleteInvoker返回参数结构体
 */
export interface DeleteInvokerResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 过滤条件。<br>
  
  <li> invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。</li>
   <li> command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。</li>
  <li> command-created-by - String - 是否必填：否 -（过滤条件）按照执行的命令类型过滤，取值为 TAT 或 USER，TAT 代表公共命令，USER 代表由用户创建的命令。</li>
   <li> instance-kind - String - 是否必填：否 -（过滤条件）按照运行实例类型过滤，取值为 CVM 或 LIGHTHOUSE，CVM 代表实例为云服务器， LIGHTHOUSE 代表实例为轻量应用服务器。</li>
   <br>每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationIds` 和 `Filters` 。
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
 * > 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> - 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> - 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeCommands](https://cloud.tencent.com/document/api/1340/52681)接口的`Filters`为例。若我们需要查询命令名称（`command-name`）为 “打印工作目录” ***并且*** 命令类型（`command-type`）为 “POWERSHELL” ***或者*** “BAT” 时，可如下实现：
```
Filters.0.Name=command-name
&Filters.0.Values.0=打印工作目录

&Filters.1.Name=command-type
&Filters.1.Values.0=POWERSHELL
&Filters.1.Values.1=BAT
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
    TotalCount?: number;
    /**
     * 执行活动列表。
     */
    InvocationSet?: Array<Invocation>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 执行任务列表。
     */
    InvocationTaskSet?: Array<InvocationTask>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    CommandId?: string;
    /**
     * 命令名称。
     */
    CommandName?: string;
    /**
     * 命令描述。
     */
    Description?: string;
    /**
     * Base64编码后的命令内容。
     */
    Content?: string;
    /**
     * 命令类型。
     */
    CommandType?: string;
    /**
     * 命令执行路径。
     */
    WorkingDirectory?: string;
    /**
     * 命令超时时间。
     */
    Timeout?: number;
    /**
     * 命令创建时间。
     */
    CreatedTime?: string;
    /**
     * 命令更新时间。
     */
    UpdatedTime?: string;
    /**
     * 是否启用自定义参数功能。
     */
    EnableParameter?: boolean;
    /**
     * 自定义参数的默认取值。
     */
    DefaultParameters?: string;
    /**
     * 自定义参数的默认取值。
     */
    DefaultParameterConfs?: Array<DefaultParameterConf>;
    /**
     * 命令关联的场景
     */
    Scenes?: Array<string>;
    /**
     * 命令的结构化描述。公共命令有值，用户命令为空字符串。
     */
    FormattedDescription?: string;
    /**
     * 命令创建者。TAT 代表公共命令，USER 代表个人命令。
     */
    CreatedBy?: string;
    /**
     * 命令关联的标签列表。
     */
    Tags?: Array<Tag>;
    /**
     * 在实例上执行命令的用户名。
     */
    Username?: string;
    /**
     * 日志上传的cos bucket 地址。
     */
    OutputCOSBucketUrl?: string;
    /**
     * 日志在cos bucket中的目录。
     */
    OutputCOSKeyPrefix?: string;
}
/**
 * PreviewReplacedCommandContent请求参数结构体
 */
export interface PreviewReplacedCommandContentRequest {
    /**
     * 本次预览采用的自定义参数。字段类型为 json encoded string，如：{\"varA\": \"222\"}。
  key 为自定义参数名称，value 为该参数的取值。kv 均为字符串型。
  自定义参数最多 20 个。
  自定义参数名称需符合以下规范：字符数目上限 64，可选范围【a-zA-Z0-9-_】。
  如果将预览的 CommandId 设置过 DefaultParameters，本参数可以为空。
     */
    Parameters?: string;
    /**
     * 要进行替换预览的命令，如果有设置过 DefaultParameters，会与 Parameters 进行叠加，后者覆盖前者。
  CommandId 与 Content，必须且只能提供一个。
     */
    CommandId?: string;
    /**
     * 要预览的命令内容，经 Base64 编码，长度不可超过 64KB。
  CommandId 与 Content，必须且只能提供一个。
     */
    Content?: string;
}
/**
 * 执行任务。
 */
export interface InvocationTask {
    /**
     * 执行活动ID。
     */
    InvocationId?: string;
    /**
     * 执行任务ID。
     */
    InvocationTaskId?: string;
    /**
     * 命令ID。
     */
    CommandId?: string;
    /**
     * 执行任务状态。取值范围：
  
  <ul> <li>PENDING：等待下发</li> <li>DELIVERING：下发中</li> <li>DELIVER_DELAYED：延时下发</li> <li>DELIVER_FAILED：下发失败</li> <li>START_FAILED：命令启动失败</li> <li>RUNNING：命令运行中</li> <li>SUCCESS：命令成功</li> <li>FAILED：命令执行失败，执行完退出码不为 0</li> <li>TIMEOUT：命令超时</li> <li>TASK_TIMEOUT：执行任务超时</li> <li>CANCELLING：取消中</li> <li>CANCELLED：已取消（命令启动前就被取消）</li> <li>TERMINATED：已中止（命令执行期间被取消）</li> </ul>
     */
    TaskStatus?: string;
    /**
     * 实例ID。
     */
    InstanceId?: string;
    /**
     * 执行结果。
     */
    TaskResult?: TaskResult;
    /**
     * 执行任务开始时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 执行任务结束时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 创建时间。
     */
    CreatedTime?: string;
    /**
     * 更新时间。
     */
    UpdatedTime?: string;
    /**
     * 执行任务所执行的命令详情。
     */
    CommandDocument?: CommandDocument;
    /**
     * 执行任务失败时的错误信息。
     */
    ErrorInfo?: string;
    /**
     * 调用来源。
     */
    InvocationSource?: string;
}
/**
 * ModifyInvoker返回参数结构体
 */
export interface ModifyInvokerResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRegisterInstance返回参数结构体
 */
export interface ModifyRegisterInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 执行器执行记录。
 */
export interface InvokerRecord {
    /**
     * 执行器ID。
     */
    InvokerId: string;
    /**
     * 执行时间。
     */
    InvokeTime: string;
    /**
     * 执行原因。
     */
    Reason: string;
    /**
     * 命令执行ID。
     */
    InvocationId: string;
    /**
     * 触发结果。
     */
    Result: string;
}
/**
 * DescribeRegisterCodes返回参数结构体
 */
export interface DescribeRegisterCodesResponse {
    /**
     * 查询到的注册码总数。
     */
    TotalCount?: number;
    /**
     * 注册码信息列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegisterCodeSet?: Array<RegisterCodeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAutomationAgentStatus返回参数结构体
 */
export interface DescribeAutomationAgentStatusResponse {
    /**
     * Agent 信息列表。
     */
    AutomationAgentSet?: Array<AutomationAgentInfo>;
    /**
     * 符合条件的 Agent 总数。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateInvoker返回参数结构体
 */
export interface CreateInvokerResponse {
    /**
     * 执行器ID。
     */
    InvokerId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelInvocation请求参数结构体
 */
export interface CancelInvocationRequest {
    /**
     * 执行活动ID
     */
    InvocationId: string;
    /**
     * 实例ID列表，上限100。支持实例类型：
  <li> CVM </li>
  <li> LIGHTHOUSE </li>
     */
    InstanceIds?: Array<string>;
}
/**
 * DescribeRegisterCodes请求参数结构体
 */
export interface DescribeRegisterCodesRequest {
    /**
     * 注册码ID。
     */
    RegisterCodeIds?: Array<string>;
    /**
     * 偏移量，默认为 0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为 20，最大值为 100。
     */
    Limit?: number;
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
 * DeleteCommands返回参数结构体
 */
export interface DeleteCommandsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 场景详情。
 */
export interface Scene {
    /**
     * 场景 ID 。
     */
    SceneId?: string;
    /**
     * 场景名称。
     */
    SceneName?: string;
    /**
     * 场景创建者。
     */
    CreatedBy?: string;
    /**
     * 创建时间。
     */
    CreatedTime?: string;
    /**
     * 更新时间。
     */
    UpdatedTime?: string;
}
/**
 * DescribeScenes请求参数结构体
 */
export interface DescribeScenesRequest {
    /**
     * 场景 ID 数组
     */
    SceneIds?: Array<string>;
    /**
     * 过滤条件。
  <li> scene-id - String - 是否必填：否 -（过滤条件）按照场景 ID 过滤。</li>
  <li> scene-name - String - 是否必填：否 -（过滤条件）按照场景名称过滤。</li>
  <li> created-by - String - 是否必填：否 -（过滤条件）按照场景创建者过滤，取值为 TAT 或 USER。TAT 代表公共命令，USER 代表由用户创建的命令。</li>
  
  每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `SceneIds` 和 `Filters` 。
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
 * DeleteRegisterCodes返回参数结构体
 */
export interface DeleteRegisterCodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInvokerRecords请求参数结构体
 */
export interface DescribeInvokerRecordsRequest {
    /**
     * 执行器ID列表。列表上限 100。
     */
    InvokerIds?: Array<string>;
    /**
     * 返回数量，默认为20，最大值为100。
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
}
/**
 * DeleteInvoker请求参数结构体
 */
export interface DeleteInvokerRequest {
    /**
     * 待删除的执行器ID。
     */
    InvokerId: string;
}
/**
 * ModifyRegisterInstance请求参数结构体
 */
export interface ModifyRegisterInstanceRequest {
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
     * 实例名称。有效长度为 1～60 字符。
     */
    InstanceName: string;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签键。
     */
    Key: string;
    /**
     * 标签值。
     */
    Value: string;
}
/**
 * RunCommand返回参数结构体
 */
export interface RunCommandResponse {
    /**
     * 命令ID。
     */
    CommandId?: string;
    /**
     * 执行活动ID。
     */
    InvocationId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisableRegisterCodes返回参数结构体
 */
export interface DisableRegisterCodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQuotas返回参数结构体
 */
export interface DescribeQuotasResponse {
    /**
     * 资源额度列表
     */
    GeneralResourceQuotaSet?: Array<GeneralResourceQuotaSet>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 注册码信息。
 */
export interface RegisterCodeInfo {
    /**
     * 注册码ID。
     */
    RegisterCodeId?: string;
    /**
     * 注册码描述。
     */
    Description?: string;
    /**
     * 注册实例名称前缀。
     */
    InstanceNamePrefix?: string;
    /**
     * 该注册码允许注册的实例数目。
     */
    RegisterLimit?: number;
    /**
     * 该注册码的过期时间，按照 ISO8601 标准表示，并且使用 UTC 时间。
  格式为： YYYY-MM-DDThh:mm:ssZ。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredTime?: string;
    /**
     * 该注册码限制tat_agent只能从IpAddressRange所描述公网出口进行注册。
     */
    IpAddressRange?: string;
    /**
     * 该注册码是否可用。
     */
    Enabled?: boolean;
    /**
     * 该注册码已注册数目。
     */
    RegisteredCount?: number;
    /**
     * 注册码创建时间，按照 ISO8601 标准表示，并且使用 UTC 时间。
  格式为： YYYY-MM-DDThh:mm:ssZ。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 注册码最近一次更新时间，按照 ISO8601 标准表示，并且使用 UTC 时间。
  格式为： YYYY-MM-DDThh:mm:ssZ。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
}
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
     * 地域数量
     */
    TotalCount?: number;
    /**
     * 地域信息列表
     */
    RegionSet?: Array<RegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 命令类型，目前支持取值：SHELL、POWERSHELL。默认：SHELL。
     */
    CommandType?: string;
    /**
     * 命令执行路径，对于 SHELL 命令默认为 /root，对于 POWERSHELL 命令默认为 C:\Program Files\qcloud\tat_agent\workdir。
     */
    WorkingDirectory?: string;
    /**
     * 命令超时时间，默认60秒。取值范围[1, 86400]。
     */
    Timeout?: number;
    /**
     * 是否启用自定义参数功能。
  一旦创建，此值不提供修改。
  默认值：false。
     */
    EnableParameter?: boolean;
    /**
     * 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{"varA": "222"}。
  key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。
  如果InvokeCommand时未提供参数取值，将使用这里的默认值进行替换。
  自定义参数最多20个。
  自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。
     */
    DefaultParameters?: string;
    /**
     * 自定义参数数组。
  如果InvokeCommand时未提供参数取值，将使用这里的默认值进行替换。
  自定义参数最多20个。
     */
    DefaultParameterConfs?: Array<DefaultParameterConf>;
    /**
     * 为命令关联的标签，列表长度不超过10。
     */
    Tags?: Array<Tag>;
    /**
     * 在 CVM 或 Lighthouse 实例中执行命令的用户名称。
  使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。默认情况下，在 Linux 实例中以 root 用户执行命令；在Windows 实例中以 System 用户执行命令。
     */
    Username?: string;
    /**
     * 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。
     */
    OutputCOSBucketUrl?: string;
    /**
     * 指定日志在cos bucket中的目录，目录命名有如下规则：
  1. 可用数字、中英文和可见字符的组合，长度最多为60。
  2. 用 / 分割路径，可快速创建子目录。
  3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称
     */
    OutputCOSKeyPrefix?: string;
}
/**
 * 执行器信息。
 */
export interface Invoker {
    /**
     * 执行器ID。
     */
    InvokerId?: string;
    /**
     * 执行器名称。
     */
    Name?: string;
    /**
     * 执行器类型。
     */
    Type?: string;
    /**
     * 命令ID。
     */
    CommandId?: string;
    /**
     * 用户名。
     */
    Username?: string;
    /**
     * 自定义参数。
     */
    Parameters?: string;
    /**
     * 实例ID列表。
     */
    InstanceIds?: Array<string>;
    /**
     * 执行器是否启用。
     */
    Enable?: boolean;
    /**
     * 执行器周期计划。周期执行器会返回此字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduleSettings?: ScheduleSettings;
    /**
     * 创建时间。
     */
    CreatedTime?: string;
    /**
     * 修改时间。
     */
    UpdatedTime?: string;
}
