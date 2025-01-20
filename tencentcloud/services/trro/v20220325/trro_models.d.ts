/**
 * DescribeDeviceSessionDetails返回参数结构体
 */
export interface DescribeDeviceSessionDetailsResponse {
    /**
     * 按设备区分的会话详细数据
     */
    Details?: Array<SessionDeviceDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * 按授权查看的license列表
 */
export interface License {
    /**
     * 该类型的license个数
     */
    Count?: number;
    /**
     * license状态：0:未绑定；1:已绑定；2:已停服；3:已退费
     */
    Status?: number;
    /**
     * 到期时间戳：s
     */
    ExpireTime?: string;
    /**
     * 服务时长：s
     */
    Duration?: string;
    /**
     * 剩余天数：天
     */
    RemainDay?: number;
    /**
     * 该类型的licenseId列表
     */
    LicenseIds?: Array<string>;
}
/**
 * 权限信息
 */
export interface PolicyInfo {
    /**
     * 远端设备ID
     */
    RemoteDeviceId: string;
    /**
     * 关联的现场设备ID
     */
    FieldDeviceIds: Array<string>;
    /**
     * 最近添加时间
     */
    ModifyTime: string;
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
 * GetLicenses请求参数结构体
 */
export interface GetLicensesRequest {
    /**
     * 页码
     */
    PageNum: number;
    /**
     * 页面数量
     */
    PageSize: number;
    /**
     * projectId
     */
    ProjectId?: string;
    /**
     * DeviceId
     */
    DeviceId?: string;
    /**
     * license状态：0:未绑定；1:已绑定；2:已停服；3:已退费
     */
    Status?: number;
}
/**
 * DescribePolicy返回参数结构体
 */
export interface DescribePolicyResponse {
    /**
     * 权限模式
     */
    PolicyMode?: string;
    /**
     * 返回的权限模式是否为当前生效的权限模式
     */
    PolicyEnabled?: boolean;
    /**
     * 权限信息列表
     */
    PolicyInfo?: Array<PolicyInfo>;
    /**
     * 本次返回的权限信息数量
     */
    Num?: number;
    /**
     * 权限信息总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchDeleteDevices请求参数结构体
 */
export interface BatchDeleteDevicesRequest {
    /**
     * 目标删除设备所属项目ID
     */
    ProjectId: string;
    /**
     * 目标删除设备的设备ID数组
     */
    DeviceIds: Array<string>;
}
/**
 * 会话信息
 */
export interface SessionInfo {
    /**
     * 会话ID
     */
    SessionId?: string;
    /**
     * 远端设备ID
     */
    RemoteDeviceId?: string;
    /**
     * 现场设备ID
     */
    FieldDeviceId?: string;
    /**
     * 分辨率
     */
    Resolution?: string;
    /**
     * 会话开始时间
     */
    StartTime?: number;
    /**
     * 会话结束时间
     */
    EndTime?: number;
    /**
     * 通话质量：good|normal|bad，对应优良差
     */
    Quality?: string;
}
/**
 * DescribeDeviceInfo请求参数结构体
 */
export interface DescribeDeviceInfoRequest {
    /**
     * 目标设备所属项目ID
     */
    ProjectId: string;
    /**
     * 目标设备ID
     */
    DeviceId: string;
}
/**
 * DescribeSessionStatisticsByInterval返回参数结构体
 */
export interface DescribeSessionStatisticsByIntervalResponse {
    /**
     * 各时间段的会话统计数据
     */
    SessionStatistics?: Array<SessionIntervalStatistic>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecentSessionList请求参数结构体
 */
export interface DescribeRecentSessionListRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 页码，从1开始
     */
    PageNumber: number;
    /**
     * 每页个数
     */
    PageSize: number;
    /**
     * 设备ID，支持过滤远端设备或现场设备
     */
    DeviceId?: string;
    /**
     * 时间范围的起始时间。时间范围最大为最近两小时，若不传或超出范围，则起始时间按两小时前计算
     */
    StartTime?: number;
    /**
     * 时间范围的结束时间。时间范围最大为最近两小时，若不传或超出范围，则结束时间按当前时间计算
     */
    EndTime?: number;
}
/**
 * 最新会话信息
 */
export interface RecentSessionInfo {
    /**
     * 会话ID
     */
    SessionId?: string;
    /**
     * 远端设备ID
     */
    RemoteDeviceId?: string;
    /**
     * 现场设备ID
     */
    FieldDeviceId?: string;
    /**
     * 分辨率
     */
    Resolution?: string;
    /**
     * 会话开始时间
     */
    StartTime?: number;
    /**
     * 最后更新时间
     */
    LatestUpdateTime?: number;
}
/**
 * DescribeProjectInfo请求参数结构体
 */
export interface DescribeProjectInfoRequest {
    /**
     * 目标项目ID，必填参数
     */
    ProjectId: string;
}
/**
 * ModifyPolicy请求参数结构体
 */
export interface ModifyPolicyRequest {
    /**
     * 修改权限配置的项目ID
     */
    ProjectId: string;
    /**
     * 修改权限配置的远端设备ID
     */
    RemoteDeviceId: string;
    /**
     * 权限修改涉及的现场设备ID数组
     */
    FieldDeviceIds: Array<string>;
    /**
     * 修改的目标权限模式，black为黑名单，white为白名单
     */
    PolicyMode: string;
    /**
     * 修改模式，add为新增（添加现场设备I关联），remove为删除（解除现场设备关联），set为设置（更新现场设备关联）
     */
    ModifyMode: string;
}
/**
 * DescribeDeviceInfo返回参数结构体
 */
export interface DescribeDeviceInfoResponse {
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 设备类型，field为现场设备（被控方），remote为远端设备（操控方）
     */
    DeviceType: string;
    /**
     * 设备状态，offline为离线，ready为在线准备，connected为会话中
     */
    DeviceStatus: string;
    /**
     * 设备状态最后更新时间
     */
    LastReportTime: string;
    /**
     * 设备信息最后修改时间
     */
    ModifyTime: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetLicenseStat请求参数结构体
 */
export declare type GetLicenseStatRequest = null;
/**
 * DescribeProjectList返回参数结构体
 */
export interface DescribeProjectListResponse {
    /**
     * 项目信息数组
     */
    Projects: Array<ProjectInfo>;
    /**
     * 项目总数
     */
    Total: number;
    /**
     * 本次返回的项目数
     */
    Num: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchDeletePolicy返回参数结构体
 */
export interface BatchDeletePolicyResponse {
    /**
     * 删除权限配置失败的远端设备ID列表
     */
    FailedRemoteDeviceIds: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetLicenseStat返回参数结构体
 */
export interface GetLicenseStatResponse {
    /**
     * 有效授权
     */
    Valid?: number;
    /**
     * 已绑定授权
     */
    Bound?: number;
    /**
     * 未绑定授权
     */
    UnBound?: number;
    /**
     * 过期授权
     */
    Expire?: number;
    /**
     * 当月用量超时授权个数
     */
    MonthlyExpire?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePolicy请求参数结构体
 */
export interface DescribePolicyRequest {
    /**
     * 查看权限的项目ID
     */
    ProjectId: string;
    /**
     * 查看的权限模式，black为黑名单，white为白名单，不填默认为当前项目生效的权限模式
     */
    PolicyMode?: string;
    /**
     * 模糊匹配模式，remoteMatch为远端设备ID匹配，fieldMatch为现场ID匹配，不填默认为remoteMatch
     */
    SearchMode?: string;
    /**
     * 模糊匹配关键字，不填默认不进行模糊匹配
     */
    SearchWords?: string;
    /**
     * 每页返回的最大数量，不填默认为10
     */
    PageSize?: number;
    /**
     * 当前页码，不填默认为1（首页）
     */
    PageNumber?: number;
}
/**
 * ModifyPolicy返回参数结构体
 */
export interface ModifyPolicyResponse {
    /**
     * 添加关联失败的现场设备ID列表
     */
    FailedInsertIds?: Array<string>;
    /**
     * 解除关联失败的现场设备ID列表
     */
    FailedDeleteIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询用户设备的授权绑定情况
 */
export interface Device {
    /**
     * 设备ID
     */
    DeviceId?: string;
    /**
     * 设备名称
     */
    DeviceName?: string;
    /**
     * 已经绑定license数量
     */
    LicenseCount?: number;
    /**
     * 剩余天数：天
     */
    RemainDay?: number;
    /**
     * 过期时间：s
     */
    ExpireTime?: string;
    /**
     * 服务时长：s
     */
    Duration?: string;
    /**
     * 已经绑定licenseId列表
     */
    LicenseIds?: Array<string>;
    /**
     * 每月license的限定时长
     */
    MonthlyRemainTime?: number;
    /**
     * 月封顶时长（分钟)
     */
    LimitedTime?: number;
}
/**
 * DescribeSessionStatistics请求参数结构体
 */
export interface DescribeSessionStatisticsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 设备ID
     */
    DeviceId?: string;
    /**
     * 起始时间，单位：秒
     */
    StartTime?: number;
    /**
     * 结束时间，单位：秒
     */
    EndTime?: number;
}
/**
 * BatchDeleteDevices返回参数结构体
 */
export interface BatchDeleteDevicesResponse {
    /**
     * 删除失败的设备ID列表
     */
    FailedDeviceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
    /**
     * 目标修改项目的项目ID
     */
    ProjectId: string;
    /**
     * 修改后的项目名称，不填则不修改
     */
    ProjectName?: string;
    /**
     * 修改后的项目描述，不填则不修改
     */
    ProjectDescription?: string;
    /**
     * 修改后的权限模式，black为黑名单，white为白名单,不填则不修改
     */
    PolicyMode?: string;
}
/**
 * DescribeRecentSessionList返回参数结构体
 */
export interface DescribeRecentSessionListResponse {
    /**
     * 总个数
     */
    Total?: number;
    /**
     * 会话列表
     */
    RecentSessionList?: Array<RecentSessionInfo>;
    /**
     * 本页数量
     */
    Num?: number;
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
     * 要修改设备归属项目的项目ID
     */
    ProjectId: string;
    /**
     * 要修改设备的设备ID
     */
    DeviceId: string;
    /**
     * 修改后的设备名称，不填则不修改
     */
    DeviceName?: string;
    /**
     * 修改后的设备认证口令，不填则不修改
     */
    DeviceToken?: string;
}
/**
 * DescribeProjectList请求参数结构体
 */
export interface DescribeProjectListRequest {
    /**
     * 每页返回的最大项目数量，不填默认为10
     */
    PageSize?: number;
    /**
     * 当前页码，不填默认为1（首页）
     */
    PageNumber?: number;
}
/**
 * 项目信息
 */
export interface ProjectInfo {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 项目描述
     */
    ProjectDescription?: string;
    /**
     * 项目权限模式，black为黑名单，white为白名单
     */
    PolicyMode?: string;
    /**
     * 项目信息修改时间
     */
    ModifyTime?: string;
}
/**
 * BatchDeletePolicy请求参数结构体
 */
export interface BatchDeletePolicyRequest {
    /**
     * 删除权限配置的项目ID
     */
    ProjectId: string;
    /**
     * 删除权限配置的远端设备ID列表
     */
    RemoteDeviceIds: Array<string>;
    /**
     * 删除权限配置的权限模式, black为黑名单，white为白名单
     */
    PolicyMode: string;
}
/**
 * DescribeDeviceSessionList返回参数结构体
 */
export interface DescribeDeviceSessionListResponse {
    /**
     * 总个数
     */
    Total?: number;
    /**
     * 会话列表
     */
    DeviceSessionList?: Array<SessionInfo>;
    /**
     * 本页数量
     */
    Num?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjectInfo返回参数结构体
 */
export interface DescribeProjectInfoResponse {
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 项目描述
     */
    ProjectDescription?: string;
    /**
     * 项目权限模式，black为黑名单，white为白名单
     */
    PolicyMode?: string;
    /**
     * 项目信息修改时间
     */
    ModifyTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceList返回参数结构体
 */
export interface DescribeDeviceListResponse {
    /**
     * 设备信息列表
     */
    Devices?: Array<DeviceInfo>;
    /**
     * 设备总数
     */
    Total?: number;
    /**
     * 本次返回的设备数
     */
    Num?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BoundLicenses请求参数结构体
 */
export interface BoundLicensesRequest {
    /**
     * license数量
     */
    Count: number;
    /**
     * 设备id
     */
    DeviceId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceList请求参数结构体
 */
export interface DescribeDeviceListRequest {
    /**
     * 设备所属项目ID
     */
    ProjectId: string;
    /**
     * 设备类型筛选，不填默认为全部设备类型
     */
    DeviceType?: string;
    /**
     * 对设备ID或Name按关键字进行模糊匹配，不填则不进行模糊匹配
     */
    SearchWords?: string;
    /**
     * 每页返回的最大设备数，不填默认为10
     */
    PageSize?: number;
    /**
     * 当前页码，不填默认为1（首页）
     */
    PageNumber?: number;
    /**
     * 设备状态筛选，不填默认为不过滤。取值：["ready","connected","online"]，online代表ready或connected
     */
    DeviceStatus?: string;
}
/**
 * 会话数据详单（按设备区分）
 */
export interface SessionDeviceDetail {
    /**
     * 设备类型：field或remote
     */
    DeviceType?: string;
    /**
     * 起始点位时间，单位：秒
     */
    StartTime?: number;
    /**
     * 结束点位时间，单位：秒
     */
    EndTime?: number;
    /**
     * 会话ID
     */
    SessionId?: string;
    /**
     * 码率，单位：kbps
     */
    Rate?: Array<number | bigint>;
    /**
     * 帧率
     */
    Fps?: Array<number | bigint>;
    /**
     * 丢包率，单位：%
     */
    Lost?: Array<number>;
    /**
     * 网络时延，单位：ms
     */
    NetworkLatency?: Array<number | bigint>;
    /**
     * 视频时延，单位：ms
     */
    VideoLatency?: Array<number | bigint>;
    /**
     * CPU使用率，单位：%
     */
    CpuUsed?: Array<number>;
    /**
     * 内存使用率，单位：%
     */
    MemUsed?: Array<number>;
    /**
     * 时间偏移量，单位：秒
     */
    TimeOffset?: Array<number | bigint>;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 设备ID
     */
    DeviceId?: string;
    /**
     * sdk版本
     */
    Ver?: string;
    /**
     * 模式(p2p/server)
     */
    SdkMode?: string;
    /**
     * 解码耗时，单位：ms
     */
    DecodeCost?: Array<number | bigint>;
    /**
     * 【已废弃，使用RenderCost】
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    RenderConst?: Array<number | bigint>;
    /**
     * 卡顿k100
     */
    K100?: Array<number>;
    /**
     * 卡顿k150
     */
    K150?: Array<number>;
    /**
     * nack请求数
     */
    NACK?: Array<number | bigint>;
    /**
     * 服务端调控码率,单位：kbps
     */
    BitRateEstimate?: Array<number | bigint>;
    /**
     * 宽度
     */
    Width?: number;
    /**
     * 高度
     */
    Height?: number;
    /**
     * 编码耗时，单位：ms
     */
    EncodeCost?: Array<number | bigint>;
    /**
     * 采集耗时，单位：ms
     */
    CaptureCost?: Array<number | bigint>;
    /**
     * 渲染耗时，单位：ms
     */
    RenderCost?: Array<number | bigint>;
    /**
     * 配置宽度
     */
    ConfigWidth?: number;
    /**
     * 配置高度
     */
    ConfigHeight?: number;
    /**
     * 平均帧间隔
     */
    FrameDelta?: Array<number | bigint>;
    /**
     * 最大帧间隔
     */
    MaxFrameDelta?: Array<number | bigint>;
    /**
     * 总码率评估,单位：kbps
     */
    TotalBitrateEstimate?: Array<number | bigint>;
    /**
     * 帧间隔大于100ms的卡顿时长
     */
    Lag100Duration?: Array<number | bigint>;
    /**
     * 帧间隔大于150ms的卡顿时长
     */
    Lag150Duration?: Array<number | bigint>;
    /**
     * 是否开启多网：0 单网，1 多网
     */
    MultiMode?: number;
    /**
     * 多网卡信息
     */
    MultiNet?: Array<MultiNet>;
}
/**
 * GetDeviceLicense返回参数结构体
 */
export interface GetDeviceLicenseResponse {
    /**
     * 指定设备已经绑定的可用license数量
     */
    AvailableCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDevice返回参数结构体
 */
export interface CreateDeviceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 多网的网卡状态信息
 */
export interface MultiNet {
    /**
     * 网卡序号
     */
    NetId?: number;
    /**
     * 网卡IP
     */
    NetIp?: string;
    /**
     * 时延，单位ms
     */
    Rtt?: Array<number | bigint>;
    /**
     * 丢包率，单位%
     */
    Lost?: Array<number | bigint>;
    /**
     * 发送bps，单位kbps
     */
    SendBps?: Array<number | bigint>;
    /**
     * 接收bps，单位kbps
     */
    RecvBps?: Array<number | bigint>;
}
/**
 * DescribeSessionStatisticsByInterval请求参数结构体
 */
export interface DescribeSessionStatisticsByIntervalRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 统计时间间隔：hour|day|month
     */
    StatisticInterval: string;
    /**
     * 设备ID
     */
    DeviceId?: string;
    /**
     * 起始时间，单位：秒
     */
    StartTime?: number;
    /**
     * 结束时间，单位：秒
     */
    EndTime?: number;
}
/**
 * CreateDevice请求参数结构体
 */
export interface CreateDeviceRequest {
    /**
     * 创建设备所归属的项目ID
     */
    ProjectId: string;
    /**
     * 创建设备ID，项目内需要唯一，由小写英文字母、数字和下划线构成，长度不超过18
     */
    DeviceId: string;
    /**
     * 创建设备名称，长度小于24, 可包含中文、数字、英文字母和下划线
     */
    DeviceName: string;
    /**
     * 设备类型，field为现场设备（受控设备），remote为远端设备（操控设备），不填默认为field
     */
    DeviceType: string;
    /**
     * 设备认证口令，由大小写英文字母和数字构成，须为16位
     */
    DeviceToken: string;
}
/**
 * DescribeSessionStatistics返回参数结构体
 */
export interface DescribeSessionStatisticsResponse {
    /**
     * 会话数量
     */
    SessionNum?: number;
    /**
     * 通话时长，单位：分钟
     */
    TotalDuration?: number;
    /**
     * 活跃现场设备数
     */
    ActiveFieldDeviceNum?: number;
    /**
     * 活跃远端设备数
     */
    ActiveRemoteDeviceNum?: number;
    /**
     * 优良会话占比，单位：%
     */
    NotBadSessionRatio?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDevices返回参数结构体
 */
export interface GetDevicesResponse {
    /**
     * 设备授权列表
     */
    Devices?: Array<Device>;
    /**
     * 列表数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BoundLicenses返回参数结构体
 */
export interface BoundLicensesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceSessionDetails请求参数结构体
 */
export interface DescribeDeviceSessionDetailsRequest {
    /**
     * 会话ID
     */
    SessionId: string;
}
/**
 * GetLicenses返回参数结构体
 */
export interface GetLicensesResponse {
    /**
     * license列表
     */
    Licenses?: Array<License>;
    /**
     * license列表项数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备信息
 */
export interface DeviceInfo {
    /**
     * 设备ID
     */
    DeviceId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 设备状态，offline为离线，ready为在线准备，connected为会话中
     */
    DeviceStatus: string;
    /**
     * 设备类型，field为现场设备（受控方），remote为远端设备（操控方）
     */
    DeviceType: string;
    /**
     * 设备信息最近修改时间
     */
    ModifyTime: string;
    /**
     * 设备状态最近更新时间
     */
    LastReportTime: string;
    /**
     * 设备所属项目Id
     */
    ProjectId: string;
}
/**
 * DescribeDeviceSessionList请求参数结构体
 */
export interface DescribeDeviceSessionListRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 页码，从1开始
     */
    PageNumber: number;
    /**
     * 每页个数
     */
    PageSize: number;
    /**
     * 设备ID
     */
    DeviceId?: string;
    /**
     * 开始时间
     */
    StartTime?: number;
    /**
     * 结束时间
     */
    EndTime?: number;
}
/**
 * GetDevices请求参数结构体
 */
export interface GetDevicesRequest {
    /**
     * 页码
     */
    PageNum: number;
    /**
     * 页面数量
     */
    PageSize: number;
    /**
     * 项目 ID
     */
    ProjectId?: string;
    /**
     * 设备ID
     */
    DeviceId?: string;
}
/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
    /**
     * 项目ID，长度为16位
     */
    ProjectId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 单位时间间隔的会话统计数据
 */
export interface SessionIntervalStatistic {
    /**
     * 活跃现场设备数
     */
    ActiveFieldDeviceNum: number;
    /**
     * 活跃远端设备数
     */
    ActiveRemoteDeviceNum: number;
    /**
     * 会话数量
     */
    SessionNum: number;
    /**
     * 会话时长，单位：分钟
     */
    TotalDuration: number;
    /**
     * 时间戳，单位：秒
     */
    StartTime: number;
    /**
     * 时间戳，单位：秒
     */
    EndTime: number;
    /**
     * 优良会话占比，单位：%
     */
    NotBadSessionRatio: number;
}
/**
 * GetDeviceLicense请求参数结构体
 */
export interface GetDeviceLicenseRequest {
    /**
     * 目标设备所属项目ID
     */
    ProjectId: string;
    /**
     * 目标设备ID
     */
    DeviceId: string;
}
/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
    /**
     * 项目名称，长度不超过24个字符
     */
    ProjectName: string;
    /**
     * 项目描述，长度不超过120个字符，不填默认为空
     */
    ProjectDescription?: string;
    /**
     * 权限模式，black为黑名单，white为白名单，不填默认为black
     */
    PolicyMode?: string;
}
