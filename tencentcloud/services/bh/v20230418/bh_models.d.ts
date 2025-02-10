/**
 * ResetDeviceAccountPassword返回参数结构体
 */
export interface ResetDeviceAccountPasswordResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLoginEvent请求参数结构体
 */
export interface DescribeLoginEventRequest {
    /**
     * 用户名，如果不包含其他条件时对user_name or real_name两个字段模糊查询
     */
    UserName?: string;
    /**
     * 姓名，模糊查询
     */
    RealName?: string;
    /**
     * 查询时间范围，起始时间
     */
    StartTime?: string;
    /**
     * 查询时间范围，结束时间
     */
    EndTime?: string;
    /**
     * 来源IP，模糊查询
     */
    SourceIp?: string;
    /**
     * 登录入口：1-字符界面,2-图形界面，3-web页面, 4-API
     */
    Entry?: number;
    /**
     * 操作结果，1-成功，2-失败
     */
    Result?: number;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 分页每页记录数，默认20
     */
    Limit?: number;
}
/**
 * ModifyResource返回参数结构体
 */
export interface ModifyResourceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindDeviceAccountPassword请求参数结构体
 */
export interface BindDeviceAccountPasswordRequest {
    /**
     * 主机账号ID
     */
    Id: number;
    /**
     * 主机账号密码
     */
    Password: string;
}
/**
 * DeleteAcls请求参数结构体
 */
export interface DeleteAclsRequest {
    /**
     * 待删除的权限ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * DeleteDeviceGroups返回参数结构体
 */
export interface DeleteDeviceGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceGroups返回参数结构体
 */
export interface DescribeDeviceGroupsResponse {
    /**
     * 资产组总数
     */
    TotalCount?: number;
    /**
     * 资产组列表
     */
    GroupSet?: Array<Group>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCmdTemplates返回参数结构体
 */
export interface DeleteCmdTemplatesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDevices返回参数结构体
 */
export interface DeleteDevicesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 修改密码任务信息
 */
export interface ChangePwdTaskInfo {
    /**
     * id
     */
    Id?: number;
    /**
     * 任务id
     */
    OperationId?: string;
    /**
     * 任务名
     */
    TaskName?: string;
    /**
     * 所属部门信息
     */
    Department?: Department;
    /**
     * 改密方式。1：使用执行账号。2：修改自身密码
     */
    ChangeMethod?: number;
    /**
     * 执行账号
     */
    RunAccount?: string;
    /**
     * 密码生成策略
     */
    AuthGenerationStrategy?: number;
    /**
     * 密码长度
     */
    PasswordLength?: number;
    /**
     * 包含小写字母
     */
    SmallLetter?: number;
    /**
     * 包含大写字母
     */
    BigLetter?: number;
    /**
     * 包含数字
     */
    Digit?: number;
    /**
     * 包含的特殊字符，入参base64
     */
    Symbol?: string;
    /**
     * 改密完成通知。0-通知，1-不通知
     */
    CompleteNotify?: number;
    /**
     * 通知人邮箱
     */
    NotifyEmails?: Array<string>;
    /**
     * 加密附件密码
     */
    FilePassword?: string;
    /**
     * 需要改密的账户
     */
    AccountSet?: Array<string>;
    /**
     * 需要改密的主机
     */
    DeviceSet?: Array<Device>;
    /**
     * 任务类型：4手动，5自动
     */
    Type?: number;
    /**
     * 周期
     */
    Period?: number;
    /**
     * 首次执行时间
     */
    FirstTime?: string;
    /**
     * 下次执行时间
     */
    NextTime?: string;
}
/**
 * CreateChangePwdTask返回参数结构体
 */
export interface CreateChangePwdTaskResponse {
    /**
     * 任务id
     */
    OperationId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserGroup返回参数结构体
 */
export interface ModifyUserGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindDeviceAccountPassword返回参数结构体
 */
export interface BindDeviceAccountPasswordResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChangePwdTaskDetail请求参数结构体
 */
export interface DescribeChangePwdTaskDetailRequest {
    /**
     * 改密任务Id
     */
    OperationId: string;
    /**
     * 所属部门ID，如：“1.2.3”
     */
    DepartmentId?: string;
    /**
     * 过滤数组，支持：InstanceId 资产ID，DeviceName 资产名称，Ip 内外IP，Account 资产账号，LastChangeStatus 上次改密状态。
     */
    Filters?: Array<Filter>;
    /**
     * 分页偏移位置，默认0
     */
    Offset?: number;
    /**
     * 每页条目。默认20
     */
    Limit?: number;
}
/**
 * ResetDeviceAccountPassword请求参数结构体
 */
export interface ResetDeviceAccountPasswordRequest {
    /**
     * ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * AddUserGroupMembers请求参数结构体
 */
export interface AddUserGroupMembersRequest {
    /**
     * 用户组ID
     */
    Id: number;
    /**
     * 成员用户ID集合
     */
    MemberIdSet: Array<number | bigint>;
}
/**
 * CreateResource请求参数结构体
 */
export interface CreateResourceRequest {
    /**
     * 部署region
     */
    DeployRegion: string;
    /**
     * 部署堡垒机的VpcId
     */
    VpcId: string;
    /**
     * 部署堡垒机的SubnetId
     */
    SubnetId: string;
    /**
     * 资源类型。取值:standard/pro
     */
    ResourceEdition: string;
    /**
     * 资源节点数
     */
    ResourceNode: number;
    /**
     * 计费周期
     */
    TimeUnit: string;
    /**
     * 计费时长
     */
    TimeSpan: number;
    /**
     * 计费模式 1预付费
     */
    PayMode: number;
    /**
     * 自动续费
     */
    AutoRenewFlag: number;
    /**
     * 部署zone
     */
    DeployZone?: string;
    /**
     * 0非试用版，1试用版
     */
    Trial?: number;
}
/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
    /**
     * 资产总数
     */
    TotalCount?: number;
    /**
     * 资产信息列表
     */
    DeviceSet?: Array<Device>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResetUser返回参数结构体
 */
export interface ResetUserResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUserGroupMembers请求参数结构体
 */
export interface DeleteUserGroupMembersRequest {
    /**
     * 用户组ID
     */
    Id: number;
    /**
     * 需删除的成员用户ID集合
     */
    MemberIdSet: Array<number | bigint>;
}
/**
 * RunChangePwdTask请求参数结构体
 */
export interface RunChangePwdTaskRequest {
    /**
     * 任务Id
     */
    OperationId: string;
    /**
     * 部门id
     */
    DepartmentId?: string;
    /**
     * 改密任务详情
     */
    Details?: Array<RunChangePwdTaskDetail>;
}
/**
 * DescribeChangePwdTaskDetail返回参数结构体
 */
export interface DescribeChangePwdTaskDetailResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 任务详情
     */
    Details?: Array<ChangePwdTaskDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUserGroups返回参数结构体
 */
export interface DeleteUserGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDevice请求参数结构体
 */
export interface ModifyDeviceRequest {
    /**
     * 资产记录ID
     */
    Id: number;
    /**
     * 管理端口
     */
    Port?: number;
    /**
     * 资产所属组ID集合
     */
    GroupIdSet?: Array<number | bigint>;
    /**
     * 资产所属部门ID
     */
    DepartmentId?: string;
    /**
     * 网络域Id
     */
    DomainId?: string;
}
/**
 * SearchFile请求参数结构体
 */
export interface SearchFileRequest {
    /**
     * 查询开始时间
     */
    StartTime: string;
    /**
     * 查询结束时间
     */
    EndTime?: string;
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 姓名
     */
    RealName?: string;
    /**
     * 资产ID
     */
    InstanceId?: string;
    /**
     * 资产名称
     */
    DeviceName?: string;
    /**
     * 资产公网IP
     */
    PublicIp?: string;
    /**
     * 资产内网IP
     */
    PrivateIp?: string;
    /**
     * 操作类型：1 - 文件上传，2 - 文件下载，3 - 文件删除，4 - 文件(夹)移动，5 - 文件(夹)重命名，6 - 新建文件夹，9 - 删除文件夹
     */
    Method?: Array<number | bigint>;
    /**
     * 可填写路径名或文件（夹）名
     */
    FileName?: string;
    /**
     * 1-已执行，  2-被阻断
     */
    AuditAction?: Array<number | bigint>;
    /**
     * 分页的页内记录数，默认为20，最大200
     */
    Limit?: number;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
}
/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
    /**
     * 网络域总数
     */
    TotalCount?: number;
    /**
     * 网络域列表
     */
    DomainSet?: Array<Domain>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件操作搜索结果
 */
export interface SearchFileBySidResult {
    /**
     * 会话Id
     */
    Sid?: string;
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 实例Id
     */
    InstanceId?: string;
    /**
     * 资产账号
     */
    Account?: string;
    /**
     * 来源Ip
     */
    FromIp?: string;
    /**
     * 文件操作时间
     */
    Time?: string;
    /**
     * 1-上传文件 2-下载文件 3-删除文件 4-移动文件 5-重命名文件 6-新建文件夹 7-移动文件夹 8-重命名文件夹 9-删除文件夹
     */
    Method?: number;
    /**
     * 文件传输协议
     */
    Protocol?: string;
    /**
     * method为上传、下载、删除时文件在服务器上的位置, 或重命名、移动文件前文件的位置
     */
    FileCurr?: string;
    /**
     * method为重命名、移动文件时代表移动后的新位置.其他情况为null
     */
    FileNew?: string;
    /**
     * method为上传文件、下载文件、删除文件时显示文件大小。其他情况为null
     */
    Size?: number;
    /**
     * 堡垒机拦截情况, 1-已执行，  2-被阻断
     */
    Action?: number;
    /**
     * 复核时间，当Action是3时，需有复核时间
     */
    ConfirmTime?: string;
    /**
     * 用户部门Id
     */
    UserDepartmentId?: string;
    /**
     * 用户部门name
     */
    UserDepartmentName?: string;
    /**
     * 设备部门id
     */
    DeviceDepartmentId?: string;
    /**
     * 设备部门name
     */
    DeviceDepartmentName?: string;
    /**
     * 签名值
     */
    SignValue?: string;
}
/**
 * SearchCommand请求参数结构体
 */
export interface SearchCommandRequest {
    /**
     * 搜索区间的开始时间
     */
    StartTime: string;
    /**
     * 搜索区间的结束时间，不填默认为开始时间到现在为止
     */
    EndTime?: string;
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 姓名
     */
    RealName?: string;
    /**
     * 资产实例ID
     */
    InstanceId?: string;
    /**
     * 资产名称
     */
    DeviceName?: string;
    /**
     * 资产的公网IP
     */
    PublicIp?: string;
    /**
     * 资产的内网IP
     */
    PrivateIp?: string;
    /**
     * 执行的命令
     */
    Cmd?: string;
    /**
     * Cmd字段是前端传值是否进行base64.
  0:否，1：是
     */
    Encoding?: number;
    /**
     * 根据拦截状态进行过滤：1 - 已执行，2 - 被阻断
     */
    AuditAction?: Array<number | bigint>;
    /**
     * 每页容量，默认20，最大200
     */
    Limit?: number;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
}
/**
 * ImportExternalDevice请求参数结构体
 */
export interface ImportExternalDeviceRequest {
    /**
     * 资产参数列表
     */
    DeviceSet: Array<ExternalDevice>;
}
/**
 * SearchSession请求参数结构体
 */
export interface SearchSessionRequest {
    /**
     * 内部Ip
     */
    PrivateIp?: string;
    /**
     * 外部Ip
     */
    PublicIp?: string;
    /**
     * 用户名，长度不超过20
     */
    UserName?: string;
    /**
     * 账号，长度不超过64
     */
    Account?: string;
    /**
     * 来源Ip
     */
    FromIp?: string;
    /**
     * 搜索区间的开始时间。若入参是Id，则非必传，否则为必传。
     */
    StartTime?: string;
    /**
     * 搜索区间的结束时间
     */
    EndTime?: string;
    /**
     * 会话协议类型，只能是1、2、3或4 对应关系为1-tui 2-gui 3-file 4-数据库。若入参是Id，则非必传，否则为必传。
     */
    Kind?: number;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 分页的页内记录数，默认为20，最大200
     */
    Limit?: number;
    /**
     * 姓名，长度不超过20
     */
    RealName?: string;
    /**
     * 主机名，长度不超过64
     */
    DeviceName?: string;
    /**
     * 状态，1为活跃，2为结束，3为强制离线，4为其他错误
     */
    Status?: number;
    /**
     * 若入参为Id，则其他入参字段不作为搜索依据，仅按照Id来搜索会话
     */
    Id?: string;
    /**
     * 应用资产类型, 1-web
     */
    AppAssetKindSet?: Array<number | bigint>;
    /**
     * 应用资产Url
     */
    AppAssetUrl?: string;
}
/**
 * BindDeviceResource返回参数结构体
 */
export interface BindDeviceResourceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResetDeviceAccountPrivateKey返回参数结构体
 */
export interface ResetDeviceAccountPrivateKeyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUserGroupMembers返回参数结构体
 */
export interface DeleteUserGroupMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 高危命令模板
 */
export interface CmdTemplate {
    /**
     * 高危命令模板ID
     */
    Id?: number;
    /**
     * 高危命令模板名称
     */
    Name?: string;
    /**
     * 命令列表，命令之间用换行符（"\n"）分隔
     */
    CmdList?: string;
    /**
     * 命令模板类型 1-内置 2-自定义
     */
    Type?: number;
}
/**
 * 命令执行检索结果
 */
export interface SearchCommandResult {
    /**
     * 命令输入的时间
     */
    Time?: string;
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 姓名
     */
    RealName?: string;
    /**
     * 资产ID
     */
    InstanceId?: string;
    /**
     * 资产名称
     */
    DeviceName?: string;
    /**
     * 资产公网IP
     */
    PublicIp?: string;
    /**
     * 资产内网IP
     */
    PrivateIp?: string;
    /**
     * 命令
     */
    Cmd?: string;
    /**
     * 命令执行情况，1--允许，2--拒绝
     */
    Action?: number;
    /**
     * 命令所属的会话ID
     */
    Sid?: string;
    /**
     * 命令执行时间相对于所属会话开始时间的偏移量，单位ms
     */
    TimeOffset?: number;
    /**
     * 账号
     */
    Account?: string;
    /**
     * source ip
     */
    FromIp?: string;
    /**
     * 该命令所属会话的会话开始时间
     */
    SessionTime?: string;
    /**
     * 该命令所属会话的会话开始时间（废弃，使用SessionTime）
     */
    SessTime?: string;
    /**
     * 复核时间
     */
    ConfirmTime?: string;
    /**
     * 部门id
     */
    UserDepartmentId?: string;
    /**
     * 用户部门名称
     */
    UserDepartmentName?: string;
    /**
     * 设备部门id
     */
    DeviceDepartmentId?: string;
    /**
     * 设备部门名称
     */
    DeviceDepartmentName?: string;
    /**
     * 会话大小
     */
    Size?: number;
    /**
     * 签名值
     */
    SignValue?: string;
}
/**
 * ModifyOAuthSetting请求参数结构体
 */
export interface ModifyOAuthSettingRequest {
    /**
     * 是否开启OAuth认证，false-不开启，true-开启。
     */
    Enable: boolean;
    /**
     * OAuth认证方式。
     */
    AuthMethod?: string;
    /**
     * OAuth认证客户端Id
     */
    ClientId?: string;
    /**
     * OAuth认证客户端密钥
     */
    ClientSecret?: string;
    /**
     * 获取OAuth认证授权码URL
     */
    CodeUrl?: string;
    /**
     * 获取OAuth令牌URL
     */
    TokenUrl?: string;
    /**
     * 获取OAuth用户信息URL
     */
    UserInfoUrl?: string;
    /**
     * 使用Okta认证时指定范围。为空时默认使用 openid、profile、email。
     */
    Scopes?: Array<string>;
}
/**
 * CreateUserGroup请求参数结构体
 */
export interface CreateUserGroupRequest {
    /**
     * 用户组名，最大长度32字符
     */
    Name: string;
    /**
     * 用户组所属部门的ID，如：1.2.3
     */
    DepartmentId?: string;
}
/**
 * 用于搜索文件传输记录等日志时按照protocol和method进行过滤
 */
export interface SearchFileTypeFilter {
    /**
     * 需要查询的文件传输类型，如SFTP/CLIP/RDP/RZSZ
     */
    Protocol: string;
    /**
     * 在当前指定的protocol下进一步过滤具体操作类型,如剪贴板文件上传，剪贴板文件下载等
     */
    Method?: Array<number | bigint>;
}
/**
 * BindDeviceAccountPrivateKey返回参数结构体
 */
export interface BindDeviceAccountPrivateKeyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchCommandBySid请求参数结构体
 */
export interface SearchCommandBySidRequest {
    /**
     * 会话Id
     */
    Sid: string;
    /**
     * 命令，可模糊搜索
     */
    Cmd?: string;
    /**
     * Cmd字段是前端传值是否进行base64.
  0:否，1：是
     */
    Encoding?: number;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 每页容量，默认20，最大200
     */
    Limit?: number;
    /**
     * 根据拦截状态进行过滤
     */
    AuditAction?: Array<number | bigint>;
}
/**
 * CreateDeviceGroup返回参数结构体
 */
export interface CreateDeviceGroupResponse {
    /**
     * 新建成功的资产组ID
     */
    Id?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserGroupMembers请求参数结构体
 */
export interface DescribeUserGroupMembersRequest {
    /**
     * 用户组ID
     */
    Id: number;
    /**
     * true - 查询已添加到该用户组的用户，false - 查询未添加到该用户组的用户
     */
    Bound: boolean;
    /**
     * 用户名或用户姓名，最长64个字符，模糊查询
     */
    Name?: string;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，默认20, 最大500
     */
    Limit?: number;
    /**
     * 所属部门ID
     */
    DepartmentId?: string;
}
/**
 * 操作日志
 */
export interface OperationEvent {
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 姓名
     */
    RealName?: string;
    /**
     * 操作时间
     */
    Time?: string;
    /**
     * 来源IP
     */
    SourceIp?: string;
    /**
     * 操作类型
     */
    Kind?: number;
    /**
     * 具体操作内容
     */
    Operation?: string;
    /**
     * 操作结果，1-成功，2-失败
     */
    Result?: number;
    /**
     * 签名值
     */
    SignValue?: string;
}
/**
 * 部门信息
 */
export interface Department {
    /**
     * 部门ID
     */
    Id?: string;
    /**
     * 部门名称，1 - 256个字符
     */
    Name?: string;
    /**
     * 部门管理员账号ID
     */
    Managers?: Array<string>;
    /**
     * 管理员用户
     */
    ManagerUsers?: Array<DepartmentManagerUser>;
}
/**
 * ModifyCmdTemplate请求参数结构体
 */
export interface ModifyCmdTemplateRequest {
    /**
     * 模板名，最长32字符，不能包含空白字符
     */
    Name: string;
    /**
     * 命令列表，\n分隔，最长32768字节
     */
    CmdList: string;
    /**
     * 命令模板ID
     */
    Id: number;
    /**
     * CmdList字段前端是否base64传值。
  0：否，1：是
     */
    Encoding?: number;
    /**
     * 命令模板类型 1-内置模板 2-自定义模板
     */
    Type?: number;
}
/**
 * 搜索字符或图形会话时返回的SessionResul结构体
 */
export interface SessionResult {
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 姓名
     */
    RealName?: string;
    /**
     * 主机账号
     */
    Account?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 会话大小
     */
    Size?: number;
    /**
     * 设备ID
     */
    InstanceId?: string;
    /**
     * 设备名
     */
    DeviceName?: string;
    /**
     * 内部Ip
     */
    PrivateIp?: string;
    /**
     * 外部Ip
     */
    PublicIp?: string;
    /**
     * 来源Ip
     */
    FromIp?: string;
    /**
     * 会话持续时长
     */
    Duration?: number;
    /**
     * 该会话内命令数量 ，搜索图形会话时该字段无意义
     */
    Count?: number;
    /**
     * 该会话内高危命令数，搜索图形时该字段无意义
     */
    DangerCount?: number;
    /**
     * 会话状态，如1会话活跃  2会话结束  3强制离线  4其他错误
     */
    Status?: number;
    /**
     * 会话Id
     */
    Id?: string;
    /**
     * 设备所属的地域
     */
    ApCode?: string;
    /**
     * 会话协议
     */
    Protocol?: string;
    /**
     * 应用资产类型：1-web
     */
    AppAssetKind?: number;
    /**
     * 应用资产url
     */
    AppAssetUrl?: string;
}
/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
    /**
     * 新建用户的ID
     */
    Id?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 应用资产信息
 */
export interface AppAsset {
    /**
     * 应用资产id
     */
    Id?: number;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 资产名称
     */
    Name?: string;
    /**
     * 应用服务器id
     */
    DeviceId?: number;
    /**
     * 应用服务器账号id
     */
    DeviceAccountId?: number;
    /**
     * 应用资产类型。1-web应用
     */
    Kind?: number;
    /**
     * 客户端工具路径
     */
    ClientAppPath?: string;
    /**
     * 客户端工具类型
     */
    ClientAppKind?: string;
    /**
     * 应用资产url
     */
    Url?: string;
    /**
     * 托管状态。0-未托管，1-已托管
     */
    BindStatus?: number;
    /**
     * 应用服务器实例id
     */
    DeviceInstanceId?: string;
    /**
     * 应用服务器名称
     */
    DeviceName?: string;
    /**
     * 应用服务器账号名称
     */
    DeviceAccountName?: string;
    /**
     * 堡垒机实例id
     */
    ResourceId?: string;
    /**
     * 堡垒机实例信息
     */
    Resource?: Resource;
    /**
     * 网络域id
     */
    DomainId?: string;
    /**
     * 网络域名称
     */
    DomainName?: string;
    /**
     * 资产组信息
     */
    GroupSet?: Array<Group>;
    /**
     * 资产所属部门
     */
    Department?: Department;
}
/**
 * DescribeAssetSyncStatus返回参数结构体
 */
export interface DescribeAssetSyncStatusResponse {
    /**
     * 资产同步结果
     */
    Status?: AssetSyncStatus;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyChangePwdTask返回参数结构体
 */
export interface ModifyChangePwdTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserGroups请求参数结构体
 */
export interface DescribeUserGroupsRequest {
    /**
     * 用户组ID集合
     */
    IdSet?: Array<number | bigint>;
    /**
     * 用户组名，模糊查询,长度：0-64字符
     */
    Name?: string;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，缺省20，最大500
     */
    Limit?: number;
    /**
     * 部门ID，用于过滤属于某个部门的用户组
     */
    DepartmentId?: string;
}
/**
 * CreateAcl请求参数结构体
 */
export interface CreateAclRequest {
    /**
     * 权限名称，最大32字符，不能包含空白字符
     */
    Name: string;
    /**
     * 是否开启磁盘映射
     */
    AllowDiskRedirect: boolean;
    /**
     * 是否允许任意账号登录
     */
    AllowAnyAccount: boolean;
    /**
     * 是否开启剪贴板文件上行
     */
    AllowClipFileUp?: boolean;
    /**
     * 是否开启剪贴板文件下行
     */
    AllowClipFileDown?: boolean;
    /**
     * 是否开启剪贴板文本（含图片）上行
     */
    AllowClipTextUp?: boolean;
    /**
     * 是否开启剪贴板文本（含图片）下行
     */
    AllowClipTextDown?: boolean;
    /**
     * 是否开启 SFTP 文件上传
     */
    AllowFileUp?: boolean;
    /**
     * 文件传输上传大小限制（预留参数，目前暂未使用）
     */
    MaxFileUpSize?: number;
    /**
     * 是否开启 SFTP 文件下载
     */
    AllowFileDown?: boolean;
    /**
     * 文件传输下载大小限制（预留参数，目前暂未使用）
     */
    MaxFileDownSize?: number;
    /**
     * 关联的用户ID集合
     */
    UserIdSet?: Array<number | bigint>;
    /**
     * 关联的用户组ID
     */
    UserGroupIdSet?: Array<number | bigint>;
    /**
     * 关联的资产ID集合
     */
    DeviceIdSet?: Array<number | bigint>;
    /**
     * 关联的应用资产ID集合
     */
    AppAssetIdSet?: Array<number | bigint>;
    /**
     * 关联的资产组ID
     */
    DeviceGroupIdSet?: Array<number | bigint>;
    /**
     * 关联的账号
     */
    AccountSet?: Array<string>;
    /**
     * 关联的高危命令模板ID
     */
    CmdTemplateIdSet?: Array<number | bigint>;
    /**
     * 关联高危DB模板ID
     */
    ACTemplateIdSet?: Array<string>;
    /**
     * 是否开启rdp磁盘映射文件上传
     */
    AllowDiskFileUp?: boolean;
    /**
     * 是否开启rdp磁盘映射文件下载
     */
    AllowDiskFileDown?: boolean;
    /**
     * 是否开启rz sz文件上传
     */
    AllowShellFileUp?: boolean;
    /**
     * 是否开启rz sz文件下载
     */
    AllowShellFileDown?: boolean;
    /**
     * 是否开启 SFTP 文件删除
     */
    AllowFileDel?: boolean;
    /**
     * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
  生效、失效时间不填则访问权限长期有效
     */
    ValidateFrom?: string;
    /**
     * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
  生效、失效时间不填则访问权限长期有效
     */
    ValidateTo?: string;
    /**
     * 访问权限所属部门的ID
     */
    DepartmentId?: string;
    /**
     * 是否允许使用访问串，默认允许
     */
    AllowAccessCredential?: boolean;
    /**
     * 是否允许键盘记录
     */
    AllowKeyboardLogger?: boolean;
}
/**
 * DescribeLoginEvent返回参数结构体
 */
export interface DescribeLoginEventResponse {
    /**
     * 登录日志列表
     */
    LoginEventSet?: Array<LoginEvent>;
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 立即执行改密任务的入参
 */
export interface RunChangePwdTaskDetail {
    /**
     * 资产id
     */
    DeviceId: number;
    /**
     * 资产账号
     */
    Account: string;
}
/**
 * DeleteDeviceGroupMembers请求参数结构体
 */
export interface DeleteDeviceGroupMembersRequest {
    /**
     * 资产组ID
     */
    Id: number;
    /**
     * 需要删除的资产ID集合
     */
    MemberIdSet: Array<number | bigint>;
}
/**
 * SearchCommand返回参数结构体
 */
export interface SearchCommandResponse {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 命令列表
     */
    Commands?: Array<SearchCommandResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChangePwdTask返回参数结构体
 */
export interface DescribeChangePwdTaskResponse {
    /**
     * 任务详情
     */
    Tasks?: Array<ChangePwdTaskInfo>;
    /**
     * 任务总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDeviceGroup请求参数结构体
 */
export interface CreateDeviceGroupRequest {
    /**
     * 资产组名，最大长度32字符
     */
    Name: string;
    /**
     * 资产组所属部门ID，如：1.2.3
     */
    DepartmentId?: string;
}
/**
 * CreateAcl返回参数结构体
 */
export interface CreateAclResponse {
    /**
     * 新建成功的访问权限ID
     */
    Id?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAcls返回参数结构体
 */
export interface DescribeAclsResponse {
    /**
     * 访问权限总数
     */
    TotalCount?: number;
    /**
     * 访问权限列表
     */
    AclSet?: Array<Acl>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCmdTemplate返回参数结构体
 */
export interface CreateCmdTemplateResponse {
    /**
     * 新建成功后返回的记录ID
     */
    Id?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAcl请求参数结构体
 */
export interface ModifyAclRequest {
    /**
     * 访问权限名称，最大32字符，不能包含空白字符
     */
    Name: string;
    /**
     * 是否开启磁盘映射
     */
    AllowDiskRedirect: boolean;
    /**
     * 是否允许任意账号登录
     */
    AllowAnyAccount: boolean;
    /**
     * 访问权限ID
     */
    Id: number;
    /**
     * 是否开启剪贴板文件上行
     */
    AllowClipFileUp?: boolean;
    /**
     * 是否开启剪贴板文件下行
     */
    AllowClipFileDown?: boolean;
    /**
     * 是否开启剪贴板文本（含图片）上行
     */
    AllowClipTextUp?: boolean;
    /**
     * 是否开启剪贴板文本（含图片）下行
     */
    AllowClipTextDown?: boolean;
    /**
     * 是否开启文件传输上传
     */
    AllowFileUp?: boolean;
    /**
     * 文件传输上传大小限制（预留参数，目前暂未使用）
     */
    MaxFileUpSize?: number;
    /**
     * 是否开启文件传输下载
     */
    AllowFileDown?: boolean;
    /**
     * 文件传输下载大小限制（预留参数，目前暂未使用）
     */
    MaxFileDownSize?: number;
    /**
     * 关联的用户ID
     */
    UserIdSet?: Array<number | bigint>;
    /**
     * 关联的用户组ID
     */
    UserGroupIdSet?: Array<number | bigint>;
    /**
     * 关联的资产ID
     */
    DeviceIdSet?: Array<number | bigint>;
    /**
     * 关联的应用资产ID集合
     */
    AppAssetIdSet?: Array<number | bigint>;
    /**
     * 关联的资产组ID
     */
    DeviceGroupIdSet?: Array<number | bigint>;
    /**
     * 关联的账号
     */
    AccountSet?: Array<string>;
    /**
     * 关联的高危命令模板ID
     */
    CmdTemplateIdSet?: Array<number | bigint>;
    /**
     * 关联高危DB模板ID
     */
    ACTemplateIdSet?: Array<string>;
    /**
     * 是否开启 RDP 磁盘映射文件上传
     */
    AllowDiskFileUp?: boolean;
    /**
     * 是否开启 RDP 磁盘映射文件下载
     */
    AllowDiskFileDown?: boolean;
    /**
     * 是否开启rz sz文件上传
     */
    AllowShellFileUp?: boolean;
    /**
     * 是否开启rz sz文件下载
     */
    AllowShellFileDown?: boolean;
    /**
     * 是否开启 SFTP 文件删除
     */
    AllowFileDel?: boolean;
    /**
     * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
  生效、失效时间不填则访问权限长期有效
     */
    ValidateFrom?: string;
    /**
     * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
  生效、失效时间不填则访问权限长期有效
     */
    ValidateTo?: string;
    /**
     * 权限所属部门的ID，如：1.2.3
     */
    DepartmentId?: string;
    /**
     * 是否允许使用访问串
     */
    AllowAccessCredential?: boolean;
    /**
     * 是否允许键盘记录
     */
    AllowKeyboardLogger?: boolean;
}
/**
 * SearchAuditLog请求参数结构体
 */
export interface SearchAuditLogRequest {
    /**
     * 开始时间，不得早于当前时间的180天前
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 每页容量，默认为20，最大200
     */
    Limit?: number;
}
/**
 * CreateResource返回参数结构体
 */
export interface CreateResourceResponse {
    /**
     * 实例Id
     */
    ResourceId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyResource请求参数结构体
 */
export interface ModifyResourceRequest {
    /**
     * 需要开通服务的资源ID
     */
    ResourceId: string;
    /**
     * 已废弃
     */
    Status?: string;
    /**
     * 实例版本
     */
    ResourceEdition?: string;
    /**
     * 资源节点数
     */
    ResourceNode?: number;
    /**
     * 自动续费
     */
    AutoRenewFlag?: number;
    /**
     * 带宽扩展包个数(4M)
     */
    PackageBandwidth?: number;
    /**
     * 授权点数扩展包个数(50点)
     */
    PackageNode?: number;
    /**
     * 日志投递
     */
    LogDelivery?: number;
}
/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchCommandBySid返回参数结构体
 */
export interface SearchCommandBySidResponse {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资产同步状态
 */
export interface AssetSyncStatus {
    /**
     * 上一次同步完成的时间
     */
    LastTime?: string;
    /**
     * 上一次同步的结果。 0 - 从未进行, 1 - 成功， 2 - 失败
     */
    LastStatus?: number;
    /**
     * 同步任务是否正在进行中
     */
    InProcess?: boolean;
}
/**
 * DescribeResources返回参数结构体
 */
export interface DescribeResourcesResponse {
    /**
     * 堡垒机资源列表
     */
    ResourceSet?: Array<Resource>;
    /**
     * 堡垒机资源数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUsers请求参数结构体
 */
export interface DescribeUsersRequest {
    /**
     * 如果IdSet不为空，则忽略其他参数
     */
    IdSet?: Array<number | bigint>;
    /**
     * 模糊查询，IdSet、UserName、Phone为空时才生效，对用户名和姓名进行模糊查询
     */
    Name?: string;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，默认20, 最大500
     */
    Limit?: number;
    /**
     * 精确查询，IdSet为空时才生效
     */
    UserName?: string;
    /**
     * 精确查询，IdSet、UserName为空时才生效。
  大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
     */
    Phone?: string;
    /**
     * 邮箱，精确查询
     */
    Email?: string;
    /**
     * 查询具有指定资产ID访问权限的用户
     */
    AuthorizedDeviceIdSet?: Array<number | bigint>;
    /**
     * 查询具有指定应用资产ID访问权限的用户
     */
    AuthorizedAppAssetIdSet?: Array<number | bigint>;
    /**
     * 认证方式，0 - 本地, 1 - LDAP, 2 - OAuth, 不传为全部
     */
    AuthTypeSet?: Array<number | bigint>;
    /**
     * 部门ID，用于过滤属于某个部门的用户
     */
    DepartmentId?: string;
    /**
     * 参数过滤数组
  
     */
    Filters?: Array<Filter>;
}
/**
 * DeployResource请求参数结构体
 */
export interface DeployResourceRequest {
    /**
     * 需要开通服务的资源ID
     */
    ResourceId: string;
    /**
     * 需要开通服务的地域
     */
    ApCode: string;
    /**
     * 子网所在可用区
     */
    Zone: string;
    /**
     * 需要开通服务的VPC
     */
    VpcId: string;
    /**
     * 需要开通服务的子网ID
     */
    SubnetId: string;
    /**
     * 需要开通服务的子网网段
     */
    CidrBlock: string;
    /**
     * 需要开通服务的VPC名称
     */
    VpcName?: string;
    /**
     * 需要开通服务的VPC对应的网段
     */
    VpcCidrBlock?: string;
    /**
     * 需要开通服务的子网名称
     */
    SubnetName?: string;
    /**
     * 需要开通实例所属的CDC集群ID
     */
    CdcClusterId?: string;
}
/**
 * SearchSession返回参数结构体
 */
export interface SearchSessionResponse {
    /**
     * 记录数
     */
    TotalCount?: number;
    /**
     * 会话信息列表
     */
    SessionSet?: Array<SessionResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCmdTemplate请求参数结构体
 */
export interface CreateCmdTemplateRequest {
    /**
     * 模板名，最大长度32字符，不能包含空白字符
     */
    Name: string;
    /**
     * 命令列表，\n分隔，最大长度32768字节
     */
    CmdList: string;
    /**
     * 标识cmdlist字段前端是否为base64加密传值.
  0:表示非base64加密
  1:表示是base64加密
     */
    Encoding?: number;
}
/**
 * ModifyCmdTemplate返回参数结构体
 */
export interface ModifyCmdTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResetDeviceAccountPrivateKey请求参数结构体
 */
export interface ResetDeviceAccountPrivateKeyRequest {
    /**
     * ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * 部门管理员信息
 */
export interface DepartmentManagerUser {
    /**
     * 管理员Id
     */
    ManagerId?: string;
    /**
     * 管理员姓名
     */
    ManagerName?: string;
}
/**
 * CreateAssetSyncJob返回参数结构体
 */
export interface CreateAssetSyncJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindDeviceAccountPrivateKey请求参数结构体
 */
export interface BindDeviceAccountPrivateKeyRequest {
    /**
     * 主机账号ID
     */
    Id: number;
    /**
     * 主机账号私钥，最小长度128字节，最大长度8192字节
     */
    PrivateKey: string;
    /**
     * 主机账号私钥口令，最大长度256字节
     */
    PrivateKeyPassword?: string;
}
/**
 * ModifyChangePwdTask请求参数结构体
 */
export interface ModifyChangePwdTaskRequest {
    /**
     * 改密任务id
     */
    OperationId: string;
    /**
     * 改密资产id列表
     */
    DeviceIdSet: Array<number | bigint>;
    /**
     * 改密资产的账号列表
     */
    AccountSet: Array<string>;
    /**
     * 修改类型：1：修改任务信息  2：关联任务资产账号
     */
    ModifyType: number;
    /**
     * 改密方式。1：使用执行账号修改密码；2：修改自身密码
     */
    ChangeMethod: number;
    /**
     * 密码生成方式。 1:自动生成相同密码 2:自动生成不同密码 3:手动指定相同密码
     */
    AuthGenerationStrategy: number;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 所属部门ID，"1,2,3"
     */
    DepartmentId?: string;
    /**
     * 任务的执行账号
     */
    RunAccount?: string;
    /**
     * 密码，手动指定密码时必传。
     */
    Password?: string;
    /**
     * 密码限制长度，自动生成密码必传。
     */
    PasswordLength?: number;
    /**
     * 密码包含小写字母，0：否，1：是。
     */
    SmallLetter?: number;
    /**
     * 密码包含大写字母，0：否，1：是。
     */
    BigLetter?: number;
    /**
     * 密码包含数字，0：否，1：是。
     */
    Digit?: number;
    /**
     * 密码包含的特殊字符（base64编码），包含：^[-_#();%~!+=]*$
     */
    Symbol?: string;
    /**
     * 改密完成通知。0：不通知 1：通知
     */
    CompleteNotify?: number;
    /**
     * 通知邮箱
     */
    NotifyEmails?: Array<string>;
    /**
     * 加密压缩文件密码
     */
    FilePassword?: string;
    /**
     * 任务类型， 4：手工执行  5：周期自动执行
     */
    Type?: number;
    /**
     * 周期任务周期，单位天（大于等于 1，小于等于 365）
     */
    Period?: number;
    /**
     * 周期任务首次执行时间
     */
    FirstTime?: string;
}
/**
 * CreateAssetSyncJob请求参数结构体
 */
export interface CreateAssetSyncJobRequest {
    /**
     * 同步资产类别，1 - 主机资产, 2 - 数据库资产
     */
    Category: number;
}
/**
 * 组信息，用于用户组、主机组
 */
export interface Group {
    /**
     * 组ID
     */
    Id?: number;
    /**
     * 组名称
     */
    Name?: string;
    /**
     * 所属部门信息
     */
    Department?: Department;
    /**
     * 个数
     */
    Count?: number;
}
/**
 * DescribeAssetSyncStatus请求参数结构体
 */
export interface DescribeAssetSyncStatusRequest {
    /**
     * 查询的资产同步类型。1 -主机资产， 2 - 数据库资产
     */
    Category: number;
}
/**
 * 负载均衡
 */
export interface Clb {
    /**
     * 负载均衡IP
     */
    ClbIp?: string;
}
/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
    /**
     * 用户ID
     */
    Id: number;
    /**
     * 用户姓名，最大长度20个字符，不能包含空格
     */
    RealName: string;
    /**
     * 按照"国家地区代码|手机号"的格式输入。如: "+86|xxxxxxxx"
     */
    Phone?: string;
    /**
     * 电子邮件
     */
    Email?: string;
    /**
     * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
  生效、失效时间不填则用户长期有效
     */
    ValidateFrom?: string;
    /**
     * 用户失效时间，如:"2021-09-23T00:00:00+00:00"
  生效、失效时间不填则用户长期有效
     */
    ValidateTo?: string;
    /**
     * 所属用户组ID集合
     */
    GroupIdSet?: Array<number | bigint>;
    /**
     * 认证方式，0 - 本地，1 - LDAP，2 - OAuth 不传则默认为0
     */
    AuthType?: number;
    /**
     * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
     */
    ValidateTime?: string;
    /**
     * 用户所属部门的ID，如1.2.3
     */
    DepartmentId?: string;
}
/**
 * DeleteUsers请求参数结构体
 */
export interface DeleteUsersRequest {
    /**
     * 待删除的用户ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * DeleteDeviceAccounts请求参数结构体
 */
export interface DeleteDeviceAccountsRequest {
    /**
     * 待删除的ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * DeleteDeviceGroupMembers返回参数结构体
 */
export interface DeleteDeviceGroupMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDeviceGroup返回参数结构体
 */
export interface ModifyDeviceGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyOAuthSetting返回参数结构体
 */
export interface ModifyOAuthSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserGroupMembers返回参数结构体
 */
export interface DescribeUserGroupMembersResponse {
    /**
     * 用户组成员总数
     */
    TotalCount?: number;
    /**
     * 用户组成员列表
     */
    UserSet?: Array<User>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportExternalDevice返回参数结构体
 */
export interface ImportExternalDeviceResponse {
    /**
     * 资产ID列表
     */
    DeviceIdSet?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchSessionCommand返回参数结构体
 */
export interface SearchSessionCommandResponse {
    /**
     * 记录总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUserGroups请求参数结构体
 */
export interface DeleteUserGroupsRequest {
    /**
     * 待删除的用户组ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * 用户信息
 */
export interface User {
    /**
     * 用户名, 3-20个字符 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符
     */
    UserName: string;
    /**
     * 用户姓名， 最大20个字符，不能包含空白字符
     */
    RealName: string;
    /**
     * 用户ID
     */
    Id?: number;
    /**
     * 手机号码， 大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
     */
    Phone?: string;
    /**
     * 电子邮件
     */
    Email?: string;
    /**
     * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
  生效、失效时间不填则用户长期有效
     */
    ValidateFrom?: string;
    /**
     * 用户失效时间，如:"2021-09-22T00:00:00+00:00"
  生效、失效时间不填则用户长期有效
     */
    ValidateTo?: string;
    /**
     * 所属用户组列表
     */
    GroupSet?: Array<Group>;
    /**
     * 认证方式，0 - 本地，1 - LDAP，2 - OAuth
     */
    AuthType?: number;
    /**
     * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
     */
    ValidateTime?: string;
    /**
     * 用户所属部门（用于出参）
     */
    Department?: Department;
    /**
     * 用户所属部门（用于入参）
     */
    DepartmentId?: string;
    /**
     * 激活状态 0 - 未激活 1 - 激活
     */
    ActiveStatus?: number;
    /**
     * 锁定状态 0 - 未锁定 1 - 锁定
     */
    LockStatus?: number;
    /**
     * ukey绑定状态 0 - 未绑定 1 - 已绑定
     */
    UKeyStatus?: number;
    /**
     * 状态 与Filter中一致
     */
    Status?: string;
    /**
     * 权限版本
     */
    AclVersion?: number;
}
/**
 * ResetUser请求参数结构体
 */
export interface ResetUserRequest {
    /**
     * 用户ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * 资产信息
 */
export interface Device {
    /**
     * 资产ID
     */
    Id?: number;
    /**
     * 实例ID，对应CVM、CDB等实例ID
     */
    InstanceId?: string;
    /**
     * 资产名
     */
    Name?: string;
    /**
     * 公网IP
     */
    PublicIp?: string;
    /**
     * 内网IP
     */
    PrivateIp?: string;
    /**
     * 地域编码
     */
    ApCode?: string;
    /**
     * 操作系统名称
     */
    OsName?: string;
    /**
     * 资产类型 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
     */
    Kind?: number;
    /**
     * 管理端口
     */
    Port?: number;
    /**
     * 所属资产组列表
     */
    GroupSet?: Array<Group>;
    /**
     * 资产绑定的账号数
     */
    AccountCount?: number;
    /**
     * VPC ID
     */
    VpcId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 堡垒机服务信息，注意没有绑定服务时为null
     */
    Resource?: Resource;
    /**
     * 资产所属部门
     */
    Department?: Department;
    /**
     * 数据库资产的多节点
     */
    IpPortSet?: Array<string>;
    /**
     * 网络域Id
     */
    DomainId?: string;
    /**
     * 网络域名称
     */
    DomainName?: string;
    /**
     * 是否启用SSL，仅支持Redis资产。0：禁用 1：启用
     */
    EnableSSL?: number;
    /**
     * 已上传的SSL证书名称
     */
    SSLCertName?: string;
}
/**
 * CreateDeviceAccount返回参数结构体
 */
export interface CreateDeviceAccountResponse {
    /**
     * 新建成功后返回的记录ID
     */
    Id?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDeviceGroup请求参数结构体
 */
export interface ModifyDeviceGroupRequest {
    /**
     * 资产组名，最大长度32字符，不能为空
     */
    Name: string;
    /**
     * 资产组ID
     */
    Id: number;
    /**
     * 资产组所属部门ID，如：1.2.3
     */
    DepartmentId?: string;
}
/**
 * 网络域
 */
export interface Domain {
    /**
     * 自增id
     */
    Id?: number;
    /**
     * 网络域id
     */
    DomainId?: string;
    /**
     * 网络域名称
     */
    DomainName?: string;
    /**
     * 堡垒机id
     */
    ResourceId?: string;
    /**
     * ip，网段
     */
    WhiteIpSet?: Array<string>;
    /**
     * 是否启用  默认 1启用 0禁用
     */
    Enabled?: number;
    /**
     * 状态 0-已断开  1-已连接
     */
    Status?: number;
    /**
     * 网络域创建时间
     */
    CreateTime?: string;
    /**
     * 是否资源默认网络域 1-资源默认网络域 0-用户添加网络域
     */
    Default?: number;
}
/**
 * 描述键值对过滤器，用于条件过滤查询
 */
export interface Filter {
    /**
     * 需要过滤的字段。
     */
    Name: string;
    /**
     * 字段的过滤值。
  若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
  若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
     */
    Values: Array<string>;
}
/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
    /**
     * 用户总数
     */
    TotalCount?: number;
    /**
     * 用户列表
     */
    UserSet?: Array<User>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeployResource返回参数结构体
 */
export interface DeployResourceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
    /**
     * 用户名, 3-20个字符, 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符
     */
    UserName: string;
    /**
     * 用户姓名，最大长度20个字符，不能包含空白字符
     */
    RealName: string;
    /**
     * 按照"国家地区代码|手机号"的格式输入，如: "+86|xxxxxxxx"。手机号和邮箱参数至少传一项
     */
    Phone?: string;
    /**
     * 电子邮件。手机号和邮箱参数至少传一项
     */
    Email?: string;
    /**
     * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
  生效、失效时间不填则用户长期有效
     */
    ValidateFrom?: string;
    /**
     * 用户失效时间，如:"2021-09-23T00:00:00+00:00"
  生效、失效时间不填则用户长期有效
     */
    ValidateTo?: string;
    /**
     * 所属用户组ID集合
     */
    GroupIdSet?: Array<number | bigint>;
    /**
     * 认证方式，0 - 本地， 1 - LDAP， 2 - OAuth 不传则默认为0
     */
    AuthType?: number;
    /**
     * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
     */
    ValidateTime?: string;
    /**
     * 所属部门ID，如：“1.2.3”
     */
    DepartmentId?: string;
}
/**
 * DescribeChangePwdTask请求参数结构体
 */
export interface DescribeChangePwdTaskRequest {
    /**
     * 过滤数组。过滤数组。Name支持以下值: OperationId 任务ID TaskName 任务名
     */
    Filters?: Array<Filter>;
    /**
     * 所属部门ID
     */
    DepartmentId?: string;
    /**
     * 分页偏移量，默认0
     */
    Offset?: number;
    /**
     * 每页条目数量，默认20
     */
    Limit?: number;
}
/**
 * SearchFileBySid返回参数结构体
 */
export interface SearchFileBySidResponse {
    /**
     * 记录数
     */
    TotalCount?: number;
    /**
     * 某会话的文件操作列表
     */
    SearchFileBySidResult?: Array<SearchFileBySidResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOperationEvent请求参数结构体
 */
export interface DescribeOperationEventRequest {
    /**
     * 用户名，如果不包含其他条件时对user_name or real_name两个字段模糊查询
     */
    UserName?: string;
    /**
     * 姓名，模糊查询
     */
    RealName?: string;
    /**
     * 查询时间范围，起始时间
     */
    StartTime?: string;
    /**
     * 查询时间范围，结束时间
     */
    EndTime?: string;
    /**
     * 来源IP，模糊查询
     */
    SourceIp?: string;
    /**
     * 操作类型，参考DescribeOperationType返回结果
     */
    Kind?: number;
    /**
     * 操作结果，1-成功，2-失败
     */
    Result?: number;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 分页每页记录数，默认20
     */
    Limit?: number;
}
/**
 * ModifyDevice返回参数结构体
 */
export interface ModifyDeviceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询改密计划详情
 */
export interface ChangePwdTaskDetail {
    /**
     * 资产信息
     */
    Device?: Device;
    /**
     * 资产账号
     */
    Account?: string;
    /**
     * 上次改密结果。0-未改密  1-改密成功 2-改密失败
     */
    LastChangeStatus?: number;
}
/**
 * DescribeCmdTemplates返回参数结构体
 */
export interface DescribeCmdTemplatesResponse {
    /**
     * 命令模板列表
     */
    CmdTemplateSet?: Array<CmdTemplate>;
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDeviceAccount请求参数结构体
 */
export interface CreateDeviceAccountRequest {
    /**
     * 主机记录ID
     */
    DeviceId: number;
    /**
     * 账号名
     */
    Account: string;
}
/**
 * AddDeviceGroupMembers返回参数结构体
 */
export interface AddDeviceGroupMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCmdTemplates请求参数结构体
 */
export interface DeleteCmdTemplatesRequest {
    /**
     * 待删除的ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * DescribeUserGroups返回参数结构体
 */
export interface DescribeUserGroupsResponse {
    /**
     * 用户组总数
     */
    TotalCount?: number;
    /**
     * 用户组列表
     */
    GroupSet?: Array<Group>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddUserGroupMembers返回参数结构体
 */
export interface AddUserGroupMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceAccounts请求参数结构体
 */
export interface DescribeDeviceAccountsRequest {
    /**
     * 主机账号ID集合，非必需，如果使用IdSet则忽略其他过滤参数
     */
    IdSet?: Array<number | bigint>;
    /**
     * 主机账号名，模糊查询，不能单独出现，必须于DeviceId一起提交
     */
    Account?: string;
    /**
     * 主机ID，未使用IdSet时必须携带
     */
    DeviceId?: number;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，默认20
     */
    Limit?: number;
}
/**
 * DeleteChangePwdTask请求参数结构体
 */
export interface DeleteChangePwdTaskRequest {
    /**
     * 改密任务id列表
     */
    IdSet: Array<number | bigint>;
}
/**
 * ModifyUserGroup请求参数结构体
 */
export interface ModifyUserGroupRequest {
    /**
     * 用户组ID
     */
    Id: number;
    /**
     * 用户组名
     */
    Name: string;
    /**
     * 用户组所属的部门ID，如：1.2.3
     */
    DepartmentId?: string;
}
/**
 * CreateChangePwdTask请求参数结构体
 */
export interface CreateChangePwdTaskRequest {
    /**
     * 任务名
     */
    TaskName: string;
    /**
     * 资产id数组
     */
    DeviceIdSet: Array<number | bigint>;
    /**
     * 修改的账户数组
     */
    AccountSet: Array<string>;
    /**
     * 改密方式。1：使用执行账号修改密码；2：修改自身密码
     */
    ChangeMethod: number;
    /**
     * 认证生成方式。 1:自动生成相同密码 2:自动生成不同密码 3:手动指定相同密码
     */
    AuthGenerationStrategy: number;
    /**
     * 执行账号
     */
    RunAccount?: string;
    /**
     * 手动指定密码时必传
     */
    Password?: string;
    /**
     * 密码限制长度，长度大于 12 位
     */
    PasswordLength?: number;
    /**
     * 密码包含小写字母。0：否，1：是
     */
    SmallLetter?: number;
    /**
     * 密码包含大写字母。0：否，1：是
     */
    BigLetter?: number;
    /**
     * 密码包含数字。0：否，1：是
     */
    Digit?: number;
    /**
     * 密码包含的特殊字符（base64编码），包含：^[-_#();%~!+=]*$
     */
    Symbol?: string;
    /**
     * 改密完成通知。0：不通知
    1：通知
     */
    CompleteNotify?: number;
    /**
     * 通知邮箱
     */
    NotifyEmails?: Array<string>;
    /**
     * 加密压缩文件密码
     */
    FilePassword?: string;
    /**
     * 所属部门id。“1.2.3”
     */
    DepartmentId?: string;
    /**
     * 任务类型  4-手工执行  5-周期自动执行
     */
    Type?: number;
    /**
     * 执行周期，单位天（大于等于 1，小于等于 365）
     */
    Period?: number;
    /**
     * 周期任务首次执行时间
     */
    FirstTime?: string;
}
/**
 * 登录日志
 */
export interface LoginEvent {
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 姓名
     */
    RealName?: string;
    /**
     * 操作时间
     */
    Time?: string;
    /**
     * 来源IP
     */
    SourceIp?: string;
    /**
     * 登录入口：1-字符界面,2-图形界面，3-web页面, 4-API
     */
    Entry?: number;
    /**
     * 操作结果，1-成功，2-失败
     */
    Result?: number;
}
/**
 * DeleteChangePwdTask返回参数结构体
 */
export interface DeleteChangePwdTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUserGroup返回参数结构体
 */
export interface CreateUserGroupResponse {
    /**
     * 新建成功的用户组ID
     */
    Id?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDevices请求参数结构体
 */
export interface DeleteDevicesRequest {
    /**
     * 待删除的ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * DescribeDeviceAccounts返回参数结构体
 */
export interface DescribeDeviceAccountsResponse {
    /**
     * 记录总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
    /**
     * 每页条目数量，默认20，最大500
     */
    Limit?: number;
    /**
     * 过滤数组
     */
    Filters?: Array<Filter>;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
}
/**
 * DescribeCmdTemplates请求参数结构体
 */
export interface DescribeCmdTemplatesRequest {
    /**
     * 命令模板ID集合，非必需
     */
    IdSet?: Array<number | bigint>;
    /**
     * 命令模板名，模糊查询，最大长度64字符
     */
    Name?: string;
    /**
     * 命令模板类型 1-内置模板 2-自定义模板
     */
    Type?: number;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，默认20
     */
    Limit?: number;
}
/**
 * ModifyAcl返回参数结构体
 */
export interface ModifyAclResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeResources请求参数结构体
 */
export interface DescribeResourcesRequest {
    /**
     * 地域码, 如: ap-guangzhou
     */
    ApCode?: string;
    /**
     * 按照堡垒机开通的 VPC 实例ID查询
     */
    VpcId?: string;
    /**
     * 资源ID集合，当传入ID集合时忽略 ApCode 和 VpcId
     */
    ResourceIds?: Array<string>;
    /**
     * 每页条目数量
     */
    Limit?: number;
    /**
     * 分页偏移位置
     */
    Offset?: number;
}
/**
 * DeleteDeviceGroups请求参数结构体
 */
export interface DeleteDeviceGroupsRequest {
    /**
     * 待删除的资产组ID集合
     */
    IdSet: Array<number | bigint>;
}
/**
 * DescribeDeviceGroupMembers返回参数结构体
 */
export interface DescribeDeviceGroupMembersResponse {
    /**
     * 资产组成员总数
     */
    TotalCount?: number;
    /**
     * 资产组成员列表
     */
    DeviceSet?: Array<Device>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchAuditLog返回参数结构体
 */
export interface SearchAuditLogResponse {
    /**
     * 日志总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 堡垒机服务信息
 */
export interface Resource {
    /**
     * 服务实例ID，如bh-saas-s3ed4r5e
     */
    ResourceId?: string;
    /**
     * 地域编码
     */
    ApCode?: string;
    /**
     * 服务实例规格信息
     */
    SvArgs?: string;
    /**
     * VPC ID
     */
    VpcId?: string;
    /**
     * 服务规格对应的资产数
     */
    Nodes?: number;
    /**
     * 自动续费标记，0 - 表示默认状态，1 - 表示自动续费，2 - 表示明确不自动续费
     */
    RenewFlag?: number;
    /**
     * 过期时间
     */
    ExpireTime?: string;
    /**
     * 资源状态，0 - 未初始化，1 - 正常，2 - 隔离，3 - 销毁，4 - 初始化失败，5 - 初始化中
     */
    Status?: number;
    /**
     * 服务实例名，如T-Sec-堡垒机（SaaS型）
     */
    ResourceName?: string;
    /**
     * 定价模型ID
     */
    Pid?: number;
    /**
     * 资源创建时间
     */
    CreateTime?: string;
    /**
     * 商品码, p_cds_dasb
     */
    ProductCode?: string;
    /**
     * 子商品码, sp_cds_dasb_bh_saas
     */
    SubProductCode?: string;
    /**
     * 可用区
     */
    Zone?: string;
    /**
     * 是否过期，true-过期，false-未过期
     */
    Expired?: boolean;
    /**
     * 是否开通，true-开通，false-未开通
     */
    Deployed?: boolean;
    /**
     * 开通服务的 VPC 名称
     */
    VpcName?: string;
    /**
     * 开通服务的 VPC 对应的网段
     */
    VpcCidrBlock?: string;
    /**
     * 开通服务的子网ID
     */
    SubnetId?: string;
    /**
     * 开通服务的子网名称
     */
    SubnetName?: string;
    /**
     * 开通服务的子网网段
     */
    CidrBlock?: string;
    /**
     * 外部IP
     */
    PublicIpSet?: Array<string>;
    /**
     * 内部IP
     */
    PrivateIpSet?: Array<string>;
    /**
     * 服务开通的高级功能列表，如:[DB]
     */
    ModuleSet?: Array<string>;
    /**
     * 已使用的授权点数
     */
    UsedNodes?: number;
    /**
     * 扩展点数
     */
    ExtendPoints?: number;
    /**
     * 带宽扩展包个数(4M)
     */
    PackageBandwidth?: number;
    /**
     * 授权点数扩展包个数(50点)
     */
    PackageNode?: number;
    /**
     * 日志投递规格信息
     */
    LogDeliveryArgs?: string;
    /**
     * 堡垒机资源LB
     */
    ClbSet?: Array<Clb>;
    /**
     * 网络域个数
     */
    DomainCount?: number;
    /**
     * 已经使用的网络域个数
     */
    UsedDomainCount?: number;
    /**
     * 0 非试用版，1 试用版
     */
    Trial?: number;
    /**
     * 日志投递规格信息
     */
    LogDelivery?: string;
    /**
     * cdc集群id
     */
    CdcClusterId?: string;
    /**
     * 部署模式 默认0 0-cvm 1-tke
     */
    DeployModel?: number;
    /**
     * 0 默认值，非内网访问，1 内网访问，2 内网访问开通中，3 内网访问关闭中
     */
    IntranetAccess?: number;
    /**
     * 内网访问的ip
     */
    IntranetPrivateIpSet?: Array<string>;
    /**
     * 开通内网访问的vpc
     */
    IntranetVpcId?: string;
    /**
     * 开通内网访问vpc的网段
     */
    IntranetVpcCidr?: string;
}
/**
 * RunChangePwdTask返回参数结构体
 */
export interface RunChangePwdTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindDeviceResource请求参数结构体
 */
export interface BindDeviceResourceRequest {
    /**
     * 资产ID集合
     */
    DeviceIdSet: Array<number | bigint>;
    /**
     * 堡垒机服务ID
     */
    ResourceId?: string;
    /**
     * 网络域ID
     */
    DomainId?: string;
}
/**
 * 访问权限
 */
export interface Acl {
    /**
     * 访问权限ID
     */
    Id?: number;
    /**
     * 访问权限名称
     */
    Name?: string;
    /**
     * 是否开启磁盘映射
     */
    AllowDiskRedirect?: boolean;
    /**
     * 是否开启剪贴板文件上行
     */
    AllowClipFileUp?: boolean;
    /**
     * 是否开启剪贴板文件下行
     */
    AllowClipFileDown?: boolean;
    /**
     * 是否开启剪贴板文本（目前含图片）上行
     */
    AllowClipTextUp?: boolean;
    /**
     * 是否开启剪贴板文本（目前含图片）下行
     */
    AllowClipTextDown?: boolean;
    /**
     * 是否开启文件传输上传
     */
    AllowFileUp?: boolean;
    /**
     * 文件传输上传大小限制（预留参数，暂未启用）
     */
    MaxFileUpSize?: number;
    /**
     * 是否开启文件传输下载
     */
    AllowFileDown?: boolean;
    /**
     * 文件传输下载大小限制（预留参数，暂未启用）
     */
    MaxFileDownSize?: number;
    /**
     * 是否允许任意账号登录
     */
    AllowAnyAccount?: boolean;
    /**
     * 关联的用户列表
     */
    UserSet?: Array<User>;
    /**
     * 关联的用户组列表
     */
    UserGroupSet?: Array<Group>;
    /**
     * 关联的资产列表
     */
    DeviceSet?: Array<Device>;
    /**
     * 关联的资产组列表
     */
    DeviceGroupSet?: Array<Group>;
    /**
     * 关联的账号列表
     */
    AccountSet?: Array<string>;
    /**
     * 关联的高危命令模板列表
     */
    CmdTemplateSet?: Array<CmdTemplate>;
    /**
     * 是否开启 RDP 磁盘映射文件上传
     */
    AllowDiskFileUp?: boolean;
    /**
     * 是否开启 RDP 磁盘映射文件下载
     */
    AllowDiskFileDown?: boolean;
    /**
     * 是否开启 rz sz 文件上传
     */
    AllowShellFileUp?: boolean;
    /**
     * 是否开启 rz sz 文件下载
     */
    AllowShellFileDown?: boolean;
    /**
     * 是否开启 SFTP 文件删除
     */
    AllowFileDel?: boolean;
    /**
     * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
  生效、失效时间不填则访问权限长期有效
     */
    ValidateFrom?: string;
    /**
     * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
  生效、失效时间不填则访问权限长期有效
     */
    ValidateTo?: string;
    /**
     * 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期
     */
    Status?: number;
    /**
     * 所属部门的信息
     */
    Department?: Department;
    /**
     * 是否允许使用访问串，默认允许
     */
    AllowAccessCredential?: boolean;
    /**
     * 关联的数据库高危命令列表
     */
    ACTemplateSet?: Array<ACTemplate>;
    /**
     * 关联的白命令命令
     */
    WhiteCmds?: Array<string>;
    /**
     * 是否允许记录键盘
     */
    AllowKeyboardLogger?: boolean;
    /**
     * 关联的应用资产列表
     */
    AppAssetSet?: Array<AppAsset>;
}
/**
 * 资产标签
 */
export interface TagFilter {
    /**
     * 标签键
     */
    TagKey: string;
    /**
     * 标签值
     */
    TagValue?: Array<string>;
}
/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
    /**
     * 资产ID集合
     */
    IdSet?: Array<number | bigint>;
    /**
     * 资产名或资产IP，模糊查询
     */
    Name?: string;
    /**
     * 暂未使用
     */
    Ip?: string;
    /**
     * 地域码集合
     */
    ApCodeSet?: Array<string>;
    /**
     * 操作系统类型, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
     */
    Kind?: number;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，默认20
     */
    Limit?: number;
    /**
     * 有该资产访问权限的用户ID集合
     */
    AuthorizedUserIdSet?: Array<number | bigint>;
    /**
     * 过滤条件，资产绑定的堡垒机服务ID集合
     */
    ResourceIdSet?: Array<string>;
    /**
     * 可提供按照多种类型过滤, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
     */
    KindSet?: Array<number | bigint>;
    /**
     * 资产是否包含托管账号。1，包含；0，不包含
     */
    ManagedAccount?: string;
    /**
     * 过滤条件，可按照部门ID进行过滤
     */
    DepartmentId?: string;
    /**
     * 过滤条件，可按照标签键、标签进行过滤。如果同时指定标签键和标签过滤条件，它们之间为“AND”的关系
     */
    TagFilters?: Array<TagFilter>;
    /**
     * 过滤数组。支持的Name：
  BindingStatus 绑定状态
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeDeviceGroups请求参数结构体
 */
export interface DescribeDeviceGroupsRequest {
    /**
     * 资产组ID集合
     */
    IdSet?: Array<number | bigint>;
    /**
     * 资产组名，最长64个字符，模糊查询
     */
    Name?: string;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，缺省20，最大500
     */
    Limit?: number;
    /**
     * 部门ID，用于过滤属于某个部门的资产组
     */
    DepartmentId?: string;
}
/**
 * 权限控制模板对象
 */
export interface ACTemplate {
    /**
     * 模板id
     */
    TemplateId?: string;
    /**
     * 模板名称
     */
    TemplateName?: string;
    /**
     * 模板描述
     */
    Description?: string;
}
/**
 * SearchSessionCommand请求参数结构体
 */
export interface SearchSessionCommandRequest {
    /**
     * 检索的目标命令，为模糊搜索
     */
    Cmd: string;
    /**
     * 开始时间，不得早于当前时间的180天前
     */
    StartTime: string;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 默认值为20，最大200
     */
    Limit?: number;
    /**
     * Cmd字段前端是否做base64加密
  0：否，1：是
     */
    Encoding?: number;
    /**
     * 结束时间
     */
    EndTime?: string;
}
/**
 * SearchFileBySid请求参数结构体
 */
export interface SearchFileBySidRequest {
    /**
     * 若入参为Id，则其他入参字段不作为搜索依据，仅按照Id来搜索会话
     */
    Sid: string;
    /**
     * 是否创建审计日志,通过查看按钮调用时为true,其他为false
     */
    AuditLog: boolean;
    /**
     * 分页的页内记录数，默认为20，最大200
     */
    Limit?: number;
    /**
     * 可填写路径名或文件名
     */
    FileName?: string;
    /**
     * 分页用偏移量
     */
    Offset?: number;
    /**
     * 1-已执行，  2-被阻断
     */
    AuditAction?: number;
    /**
     * 以Protocol和Method为条件查询
     */
    TypeFilters?: Array<SearchFileTypeFilter>;
}
/**
 * DescribeOperationEvent返回参数结构体
 */
export interface DescribeOperationEventResponse {
    /**
     * 操作日志列表
     */
    OperationEventSet?: Array<OperationEvent>;
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主机参数，导入外部主机时使用
 */
export interface ExternalDevice {
    /**
     * 操作系统名称，只能是Linux、Windows或MySQL
     */
    OsName: string;
    /**
     * IP地址
     */
    Ip: string;
    /**
     * 管理端口
     */
    Port: number;
    /**
     * 主机名，可为空
     */
    Name?: string;
    /**
     * 资产所属的部门ID
     */
    DepartmentId?: string;
    /**
     * 资产多节点：字段ip和端口
     */
    IpPortSet?: Array<string>;
    /**
     * 是否启用SSL,1:启用 0：禁用，仅支持Redis资产
     */
    EnableSSL?: number;
    /**
     * SSL证书，EnableSSL时必填
     */
    SSLCert?: string;
    /**
     * SSL证书名称，EnableSSL时必填
     */
    SSLCertName?: string;
}
/**
 * 文件传输检索结果
 */
export interface SearchFileResult {
    /**
     * 文件传输的时间
     */
    Time?: string;
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 姓名
     */
    RealName?: string;
    /**
     * 资产ID
     */
    InstanceId?: string;
    /**
     * 资产名称
     */
    DeviceName?: string;
    /**
     * 资产公网IP
     */
    PublicIp?: string;
    /**
     * 资产内网IP
     */
    PrivateIp?: string;
    /**
     * 操作结果：1 - 已执行，2 - 已阻断
     */
    Action?: number;
    /**
     * 操作类型：1 - 文件上传，2 - 文件下载，3 - 文件删除，4 - 文件(夹)移动，5 - 文件(夹)重命名，6 - 新建文件夹，9 - 删除文件夹
     */
    Method?: number;
    /**
     * 下载的文件（夹）路径及名称
     */
    FileCurr?: string;
    /**
     * 上传或新建文件（夹）路径及名称
     */
    FileNew?: string;
    /**
     * 会话id
     */
    Sid?: string;
    /**
     * 账号
     */
    Account?: string;
    /**
     * 来源id
     */
    FromIp?: string;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 文件大小
     */
    Size?: number;
    /**
     * 复核时间
     */
    ConfirmTime?: string;
    /**
     * 用户部门id
     */
    UserDepartmentId?: string;
    /**
     * 用户部门name
     */
    UserDepartmentName?: string;
    /**
     * 设备部门id
     */
    DeviceDepartmentId?: string;
    /**
     * 设备部门name
     */
    DeviceDepartmentName?: string;
    /**
     * 签名值
     */
    SignValue?: string;
}
/**
 * DeleteAcls返回参数结构体
 */
export interface DeleteAclsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceGroupMembers请求参数结构体
 */
export interface DescribeDeviceGroupMembersRequest {
    /**
     * true - 查询已在该资产组的资产，false - 查询未在该资产组的资产
     */
    Bound: boolean;
    /**
     * 资产组ID，Id和IdSet二选一
     */
    Id?: number;
    /**
     * 资产组ID集合，传Id，IdSet不生效。
     */
    IdSet?: Array<number | bigint>;
    /**
     * 资产名或资产IP，模糊查询
     */
    Name?: string;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数，默认20, 最大500
     */
    Limit?: number;
    /**
     * 资产类型，1 - Linux，2 - Windows，3 - MySQL，4 - SQLServer
     */
    Kind?: number;
    /**
     * 资产类型集合，1 - Linux，2 - Windows，3 - MySQL，4 - SQLServer
     */
    KindSet?: Array<number | bigint>;
    /**
     * 所属部门ID
     */
    DepartmentId?: string;
    /**
     * 过滤条件，可按照标签键、标签进行过滤。如果同时指定标签键和标签过滤条件，它们之间为“AND”的关系
     */
    TagFilters?: Array<TagFilter>;
}
/**
 * DescribeAcls请求参数结构体
 */
export interface DescribeAclsRequest {
    /**
     * 访问权限ID集合
     */
    IdSet?: Array<number | bigint>;
    /**
     * 访问权限名称，模糊查询，最长64字符
     */
    Name?: string;
    /**
     * 分页偏移位置，默认值为0
     */
    Offset?: number;
    /**
     * 每页条目数量，默认20，最大500
     */
    Limit?: number;
    /**
     * 是否根据Name进行精确查询，默认值false
     */
    Exact?: boolean;
    /**
     * 有访问权限的用户ID集合
     */
    AuthorizedUserIdSet?: Array<number | bigint>;
    /**
     * 有访问权限的资产ID集合
     */
    AuthorizedDeviceIdSet?: Array<number | bigint>;
    /**
     * 有访问权限的应用资产ID集合
     */
    AuthorizedAppAssetIdSet?: Array<number | bigint>;
    /**
     * 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期
     */
    Status?: number;
    /**
     * 部门ID，用于过滤属于某个部门的访问权限
     */
    DepartmentId?: string;
    /**
     * 是否根据AuthorizedDeviceIdSet,对资产账号进行精确匹配，默认false, 设置true时，确保AuthorizedDeviceIdSet只有一个元素
     */
    ExactAccount?: boolean;
    /**
     * 过滤数组
     */
    Filters?: Array<Filter>;
}
/**
 * AddDeviceGroupMembers请求参数结构体
 */
export interface AddDeviceGroupMembersRequest {
    /**
     * 资产组ID
     */
    Id: number;
    /**
     * 需要添加到资产组的资产ID集合
     */
    MemberIdSet: Array<number | bigint>;
}
/**
 * DeleteDeviceAccounts返回参数结构体
 */
export interface DeleteDeviceAccountsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchFile返回参数结构体
 */
export interface SearchFileResponse {
    /**
     * 记录数
     */
    TotalCount?: number;
    /**
     * 文件操作列表
     */
    Files?: Array<SearchFileResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
