/**
 * GetReturnCodeInfo返回参数结构体
 */
export interface GetReturnCodeInfoResponse {
    /**
      * 拨测失败详情列表
      */
    Details?: Array<CatReturnDetail>;
    /**
      * 拨测失败汇总列表
      */
    Summary?: Array<CatReturnSummary>;
    /**
      * 开始时间
      */
    BeginTime?: string;
    /**
      * 截至时间
      */
    EndTime?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAgentGroup请求参数结构体
 */
export interface ModifyAgentGroupRequest {
    /**
      * 拨测分组ID
      */
    GroupId: number;
    /**
      * 拨测分组名称
      */
    GroupName: string;
    /**
      * 是否为默认分组。取值可为0，1。取 1 时表示设置为默认分组
      */
    IsDefault: number;
    /**
      * Province, Isp 需要成对地进行选择。参数对的取值范围。参见：DescribeAgents 的返回结果。
      */
    Agents: Array<CatAgent>;
}
/**
 * BindAlarmPolicy返回参数结构体
 */
export interface BindAlarmPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 拨测告警信息
 */
export interface AlarmInfo {
    /**
      * 告警对象的名称
      */
    ObjName: string;
    /**
      * 告警发生的时间
      */
    FirstOccurTime: string;
    /**
      * 告警结束的时间
      */
    LastOccurTime: string;
    /**
      * 告警状态。1 表示已恢复，0 表示未恢复，2表示数据不足
      */
    Status: number;
    /**
      * 告警的内容
      */
    Content: string;
    /**
      * 拨测任务ID
      */
    TaskId?: number;
    /**
      * 特征项名字
      */
    MetricName?: string;
    /**
      * 特征项数值
      */
    MetricValue?: string;
    /**
      * 告警对象的ID
      */
    ObjId?: string;
}
/**
 * GetDailyAvailRatio请求参数结构体
 */
export interface GetDailyAvailRatioRequest {
    /**
      * 拨测任务Id
      */
    TaskId: number;
}
/**
 * ModifyTaskEx返回参数结构体
 */
export interface ModifyTaskExResponse {
    /**
      * 拨测任务ID。验证通过后，创建任务时使用，传递给CreateTask 接口。
      */
    TaskId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAgents请求参数结构体
 */
export declare type DescribeAgentsRequest = null;
/**
 * 拨测失败返回情况汇总
 */
export interface CatReturnSummary {
    /**
      * 拨测失败个数
      */
    ResultCount: number;
    /**
      * 拨测失败返回码
      */
    ResultCode: number;
    /**
      * 拨测失败原因描述
      */
    ErrorReason: string;
}
/**
 * 拨测失败详情
 */
export interface CatReturnDetail {
    /**
      * 运营商名称
      */
    IspName: string;
    /**
      * 省份全拼
      */
    Province: string;
    /**
      * 省份中文名称
      */
    ProvinceName: string;
    /**
      * Map键值
      */
    MapKey: string;
    /**
      * 拨测目标的IP
      */
    ServerIp: string;
    /**
      * 拨测失败个数
      */
    ResultCount: number;
    /**
      * 拨测失败返回码
      */
    ResultCode: number;
    /**
      * 拨测失败原因描述
      */
    ErrorReason: string;
}
/**
 * RunTask请求参数结构体
 */
export interface RunTaskRequest {
    /**
      * 任务Id
      */
    TaskId: number;
}
/**
 * 拨测点维度信息
 */
export interface DimensionsDetail {
    /**
      * 运营商列表
      */
    Isp?: Array<string>;
    /**
      * 省份列表
      */
    Province?: Array<string>;
}
/**
 * GetRespTimeTrendEx返回参数结构体
 */
export interface GetRespTimeTrendExResponse {
    /**
      * 数据点集合，时延等走势数据
      */
    DataPoints?: Array<DataPointMetric>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAgentGroup返回参数结构体
 */
export interface ModifyAgentGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
      * 拨测任务列表
      */
    Tasks?: Array<CatTaskDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运营商可用率
 */
export interface IspDetail {
    /**
      * 运营商名称
      */
    IspName: string;
    /**
      * 可用率
      */
    AvailRatio: number;
    /**
      * 平均耗时
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvgTime: number;
}
/**
 * 包含MetricName的DataPoint数据
 */
export interface DataPointMetric {
    /**
      * 数据项
      */
    MetricName: string;
    /**
      * 数据点的时间和值
      */
    Points: Array<DataPoint>;
}
/**
 * GetReturnCodeInfo请求参数结构体
 */
export interface GetReturnCodeInfoRequest {
    /**
      * 正整数。验证成功的拨测任务id
      */
    TaskId: number;
    /**
      * 开始时间点。格式如：2017-05-09 10:20:00，最多拉群两天的数据
      */
    BeginTime: string;
    /**
      * 结束时间点。格式如：2017-05-09 10:25:00，最多拉群两天的数据
      */
    EndTime: string;
    /**
      * 省份名称的全拼
      */
    Province?: string;
}
/**
 * DescribeCatLogs请求参数结构体
 */
export interface DescribeCatLogsRequest {
    /**
      * 拨测任务Id
      */
    TaskId: number;
    /**
      * 从第Offset 条开始查询。缺省值为0
      */
    Offset?: number;
    /**
      * 本批次查询Limit 条记录。缺省值为20
      */
    Limit?: number;
    /**
      * 格式如：2017-05-09 00:00:00  缺省为当天0点，最多拉取1天的数据
      */
    BeginTime?: string;
    /**
      * 格式如：2017-05-10 00:00:00  缺省为当前时间
      */
    EndTime?: string;
    /**
      * 按时间升序或降序。默认降序。可选值： Desc, Asc
      */
    SortType?: string;
}
/**
 * DescribeAgents返回参数结构体
 */
export interface DescribeAgentsResponse {
    /**
      * 本用户可选的拨测点列表
      */
    Agents?: Array<CatAgent>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetAvailRatioHistory返回参数结构体
 */
export interface GetAvailRatioHistoryResponse {
    /**
      * 整体平均可用率
      */
    AvgAvailRatio?: number;
    /**
      * 各省份最低可用率
      */
    LowestAvailRatio?: number;
    /**
      * 可用率最低的省份
      */
    LowestProvince?: string;
    /**
      * 可用率最低的运营商
      */
    LowestIsp?: string;
    /**
      * 分省份的可用率数据
      */
    ProvinceData?: Array<ProvinceDetail>;
    /**
      * 国内平均耗时，单位毫秒
      */
    AvgTime?: number;
    /**
      * 国外平均可用率
      */
    AvgAvailRatio2?: number;
    /**
      * 国外平均耗时，单位毫秒
      */
    AvgTime2?: number;
    /**
      * 国外最低可用率
      */
    LowestAvailRatio2?: number;
    /**
      * 国外可用率最低的区域
      */
    LowestProvince2?: string;
    /**
      * 国外可用率最低的运营商
      */
    LowestIsp2?: string;
    /**
      * 国外分区域的可用率数据
      */
    ProvinceData2?: Array<ProvinceDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAgentGroup返回参数结构体
 */
export interface CreateAgentGroupResponse {
    /**
      * 拨测分组Id
      */
    GroupId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTasks返回参数结构体
 */
export interface DeleteTasksResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAlarms返回参数结构体
 */
export interface DescribeAlarmsResponse {
    /**
      * 告警总条数
      */
    TotalCount?: number;
    /**
      * 本批告警信息列表
      */
    AlarmInfos?: Array<AlarmInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetRealAvailRatio请求参数结构体
 */
export interface GetRealAvailRatioRequest {
    /**
      * 拨测任务Id
      */
    TaskId: number;
}
/**
 * DeleteAgentGroup返回参数结构体
 */
export interface DeleteAgentGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 拨测分组
 */
export interface AgentGroup {
    /**
      * 拨测分组ID
      */
    GroupId: number;
    /**
      * 拨测分组名称
      */
    GroupName: string;
    /**
      * 是否默认拨测分组。1表示是，0表示否
      */
    IsDefault?: number;
    /**
      * 使用本拨测分组的任务数
      */
    TaskNum?: number;
    /**
      * 拨测结点列表
      */
    GroupDetail?: Array<CatAgent>;
    /**
      * 最大拨测分组数
      */
    MaxGroupNum?: number;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
      * 拨测任务id 数组
      */
    TaskIds: Array<number>;
}
/**
 * DescribeTasksByType返回参数结构体
 */
export interface DescribeTasksByTypeResponse {
    /**
      * 符合条件的总任务数
      */
    TotalCount?: number;
    /**
      * 任务列表
      */
    Tasks?: Array<TaskAlarm>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetResultSummary返回参数结构体
 */
export interface GetResultSummaryResponse {
    /**
      * 实时统计数据
      */
    RealData?: Array<ResultSummary>;
    /**
      * 按天的统计数据
      */
    DayData?: Array<ResultSummary>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetReturnCodeHistory请求参数结构体
 */
export interface GetReturnCodeHistoryRequest {
    /**
      * 正整数。验证成功的拨测任务id
      */
    TaskId: number;
    /**
      * 开始时间点。格式如：2017-05-09 10:20:00。注意，BeginTime 和 EndTime 需要在同一天
      */
    BeginTime: string;
    /**
      * 结束时间点。格式如：2017-05-09 10:25:00。注意，BeginTime 和 EndTime 需要在同一天
      */
    EndTime: string;
    /**
      * 省份名称的全拼
      */
    Province: string;
}
/**
 * BindAlarmPolicy请求参数结构体
 */
export interface BindAlarmPolicyRequest {
    /**
      * 拨测任务Id
      */
    TaskId: number;
    /**
      * 告警策略组Id
      */
    PolicyGroupId: number;
    /**
      * 是否绑定操作。非0 为绑定， 0 为 解绑。缺省表示 绑定。
      */
    IfBind?: number;
    /**
      * 告警主题Id
      */
    TopicId?: string;
}
/**
 * DescribeAgentGroups返回参数结构体
 */
export interface DescribeAgentGroupsResponse {
    /**
      * 用户所属的系统默认拨测分组
      */
    SysDefaultGroup?: AgentGroup;
    /**
      * 用户创建的拨测分组列表
      */
    CustomGroups?: Array<AgentGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 省份可用率
 */
export interface ProvinceDetail {
    /**
      * 可用率
      */
    AvgAvailRatio: number;
    /**
      * 省份名称
      */
    ProvinceName: string;
    /**
      * 省份英文名称
      */
    Mapkey: string;
    /**
      * 统计时间点
      */
    TimeStamp: string;
    /**
      * 分运营商可用率
      */
    IspDetail: Array<IspDetail>;
    /**
      * 平均耗时，单位毫秒
      */
    AvgTime: number;
    /**
      * 省份
      */
    Province: string;
}
/**
 * 告警主题
 */
export interface AlarmTopic {
    /**
      * 主题的ID
      */
    TopicId: string;
    /**
      * 主题的名称
      */
    TopicName: string;
}
/**
 * 实时统计数据
 */
export interface ResultSummary {
    /**
      * 统计时间
      */
    LogTime: string;
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 实时可用率
      */
    AvailRatio: number;
    /**
      * 实时响应时间
      */
    ReponseTime: number;
}
/**
 * PauseTask请求参数结构体
 */
export interface PauseTaskRequest {
    /**
      * 拨测任务id
      */
    TaskId: number;
}
/**
 * GetResultSummary请求参数结构体
 */
export interface GetResultSummaryRequest {
    /**
      * 任务Id列表
      */
    TaskIds: Array<number>;
}
/**
 * DescribeAlarms请求参数结构体
 */
export interface DescribeAlarmsRequest {
    /**
      * 从第Offset 条开始查询。缺省值为0
      */
    Offset?: number;
    /**
      * 本批次查询Limit 条记录。缺省值为20
      */
    Limit?: number;
    /**
      * 0 全部, 1 已恢复, 2 未恢复  默认为0。其他值，视为0 查全部状态。
      */
    Status?: number;
    /**
      * 格式如：2017-05-09 00:00:00  缺省为7天前0点
      */
    BeginTime?: string;
    /**
      * 格式如：2017-05-10 00:00:00  缺省为明天0点
      */
    EndTime?: string;
    /**
      * 告警任务名
      */
    ObjName?: string;
    /**
      * 排序字段，可为Time, ObjName, Duration, Status, Content 之一。缺省为Time。
      */
    SortBy?: string;
    /**
      * 升序或降序。可为Desc, Asc之一。缺省为Desc。
      */
    SortType?: string;
}
/**
 * DescribeUserLimit返回参数结构体
 */
export interface DescribeUserLimitResponse {
    /**
      * 用户可建立的最大任务数
      */
    MaxTaskNum?: number;
    /**
      * 用户可用的最大拨测结点数
      */
    MaxAgentNum?: number;
    /**
      * 用户可建立的最大拨测分组数
      */
    MaxGroupNum?: number;
    /**
      * 用户可用的最小拨测间隔
      */
    MinPeriod?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetRespTimeTrendEx请求参数结构体
 */
export interface GetRespTimeTrendExRequest {
    /**
      * 验证成功的拨测任务id
      */
    TaskId: number;
    /**
      * 统计数据的发生日期。格式如：2017-05-09
      */
    Date: string;
    /**
      * 数据的采集周期，单位分钟。取值可为 1, 5, 15, 30
      */
    Period: number;
    /**
      * 可为 Isp, Province
      */
    Dimensions?: DimensionsDetail;
    /**
      * 可为  totalTime, parseTime, connectTime, sendTime, waitTime, receiveTime, availRatio。缺省值为 totalTime
      */
    MetricName?: string;
}
/**
 * DeleteTasks请求参数结构体
 */
export interface DeleteTasksRequest {
    /**
      * 拨测任务id
      */
    TaskIds: Array<number>;
}
/**
 * DescribeAlarmsByTask请求参数结构体
 */
export interface DescribeAlarmsByTaskRequest {
    /**
      * 拨测任务Id
      */
    TaskId: number;
    /**
      * 从第Offset 条开始查询。缺省值为0
      */
    Offset?: number;
    /**
      * 本批次查询Limit 条记录。缺省值为20
      */
    Limit?: number;
    /**
      * 0 全部, 1 已恢复, 2 未恢复  默认为0。其他值，视为0 查全部状态
      */
    Status?: number;
    /**
      * 格式如：2017-05-09 00:00:00  缺省为7天前0点
      */
    BeginTime?: string;
    /**
      * 格式如：2017-05-10 00:00:00  缺省为明天0点
      */
    EndTime?: string;
    /**
      * 排序字段，可为Time, ObjName, Duration, Status, Content 之一。缺省为Time
      */
    SortBy?: string;
    /**
      * 升序或降序。可为Desc, Asc之一。缺省为Desc
      */
    SortType?: string;
    /**
      * 告警对象的名称
      */
    ObjName?: string;
}
/**
 * PauseTask返回参数结构体
 */
export interface PauseTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAgentGroup请求参数结构体
 */
export interface CreateAgentGroupRequest {
    /**
      * 拨测分组名称，不超过32个字符
      */
    GroupName: string;
    /**
      * 是否为默认分组，取值可为 0 或 1。取 1 时表示设置为默认分组
      */
    IsDefault: number;
    /**
      * Province, Isp 需要成对地进行选择。参数对的取值范围。参见：DescribeAgents 的返回结果。
      */
    Agents: Array<CatAgent>;
}
/**
 * 拨测记录
 */
export interface CatLog {
    /**
      * 拨测时间点
      */
    Time: string;
    /**
      * 拨测类型
      */
    CatTypeName: string;
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 拨测点所在城市
      */
    City: string;
    /**
      * 拨测点所在运营商
      */
    Isp: string;
    /**
      * 被拨测Server的IP
      */
    ServerIp: string;
    /**
      * 被拨测Server的域名
      */
    DomainName: string;
    /**
      * 执行耗时，单位毫秒
      */
    TotalTime: number;
    /**
      * 成功失败(1 失败，0 成功）
      */
    ResultType: number;
    /**
      * 失败错误码
      */
    ResultCode: number;
    /**
      * 请求包大小
      */
    ReqPkgSize: number;
    /**
      * 回应包大小
      */
    RspPkgSize: number;
    /**
      * 拨测请求
      */
    ReqMsg: string;
    /**
      * 拨测回应
      */
    RespMsg: string;
    /**
      * 客户端IP
      */
    ClientIp: string;
    /**
      * 拨测点所在城市名称
      */
    CityName: string;
    /**
      * 拨测点所在运营商名称
      */
    IspName: string;
    /**
      * 解析耗时，单位毫秒
      */
    ParseTime: number;
    /**
      * 连接耗时，单位毫秒
      */
    ConnectTime: number;
    /**
      * 数据发送耗时，单位毫秒
      */
    SendTime: number;
    /**
      * 等待耗时，单位毫秒
      */
    WaitTime: number;
    /**
      * 接收耗时，单位毫秒
      */
    ReceiveTime: number;
}
/**
 * GetDailyAvailRatio返回参数结构体
 */
export interface GetDailyAvailRatioResponse {
    /**
      * 整体平均可用率
      */
    AvgAvailRatio?: number;
    /**
      * 各省份最低可用率
      */
    LowestAvailRatio?: number;
    /**
      * 可用率最低的省份
      */
    LowestProvince?: string;
    /**
      * 分省份的可用率数据
      */
    ProvinceData?: Array<ProvinceDetail>;
    /**
      * 国内平均耗时，单位毫秒
      */
    AvgTime?: number;
    /**
      * 国外平均可用率
      */
    AvgAvailRatio2?: number;
    /**
      * 国外平均耗时，单位毫秒
      */
    AvgTime2?: number;
    /**
      * 国外最低可用率
      */
    LowestAvailRatio2?: number;
    /**
      * 国外可用率最低的区域
      */
    LowestProvince2?: string;
    /**
      * 国外分区域的可用率数据
      */
    ProvinceData2?: Array<ProvinceDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAgentGroup请求参数结构体
 */
export interface DeleteAgentGroupRequest {
    /**
      * 拨测分组id
      */
    GroupId: number;
}
/**
 * GetAvailRatioHistory请求参数结构体
 */
export interface GetAvailRatioHistoryRequest {
    /**
      * 拨测任务Id
      */
    TaskId: number;
    /**
      * 具体时间点
      */
    TimeStamp: string;
}
/**
 * DescribeAgentGroups请求参数结构体
 */
export declare type DescribeAgentGroupsRequest = null;
/**
 * DescribeAlarmsByTask返回参数结构体
 */
export interface DescribeAlarmsByTaskResponse {
    /**
      * 告警信息列表
      */
    AlarmInfos?: Array<AlarmInfo>;
    /**
      * 故障率
      */
    FaultRatio?: number;
    /**
      * 故障总时长
      */
    FaultTimeSpec?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTaskEx请求参数结构体
 */
export interface ModifyTaskExRequest {
    /**
      * http, https, ping, tcp, ftp, smtp, udp, dns 之一
      */
    CatTypeName: string;
    /**
      * 拨测的URL，例如：www.qq.com (URL域名解析需要能解析出具体的IP)
      */
    Url: string;
    /**
      * 拨测周期。取值可为1,5,15,30之一, 单位：分钟。精度不能低于用户等级规定的最小精度
      */
    Period: number;
    /**
      * 拨测任务名称不能超过32个字符。同一个用户创建的任务名不可重复
      */
    TaskName: string;
    /**
      * 验证成功的拨测任务ID
      */
    TaskId: number;
    /**
      * 拨测分组ID，体现本拨测任务要采用哪些运营商作为拨测源。一般可直接填写本用户的默认拨测分组。参见：DescribeAgentGroupList 接口，本参数使用返回结果里的GroupId的值。注意，Type为0时，AgentGroupId为必填
      */
    AgentGroupId?: number;
    /**
      * 指定域名(如需要)
      */
    Host?: string;
    /**
      * 拨测目标的端口号
      */
    Port?: number;
    /**
      * 是否为Header请求（非0 发起Header 请求。为0，且PostData非空，发起POST请求。为0，PostData为空，发起GET请求）
      */
    IsHeader?: number;
    /**
      * URL中含有"https"时有用。缺省为SSLv23。需要为 TLSv1_2, TLSv1_1, TLSv1, SSLv2, SSLv23, SSLv3 之一
      */
    SslVer?: string;
    /**
      * POST 请求数据，空字符串表示非POST请求
      */
    PostData?: string;
    /**
      * 用户Agent信息
      */
    UserAgent?: string;
    /**
      * 要在结果中进行匹配的字符串
      */
    CheckStr?: string;
    /**
      * 1 表示通过检查结果是否包含CheckStr 进行校验
      */
    CheckType?: number;
    /**
      * 需要设置的Cookie信息
      */
    Cookie?: string;
    /**
      * 登录服务器的账号。如果为空字符串，表示不用校验用户密码。只做简单连接服务器的拨测
      */
    UserName?: string;
    /**
      * 登录服务器的密码
      */
    PassWord?: string;
    /**
      * 缺省为0，0 表示请求为字符串类型, 1表示为二进制类型
      */
    ReqDataType?: number;
    /**
      * 发起TCP, UDP请求的协议请求数据
      */
    ReqData?: string;
    /**
      * 缺省为0。0 表示请求为字符串类型。1表示为二进制类型
      */
    RespDataType?: string;
    /**
      * 预期的UDP请求的回应数据。字符串型，只需要返回的结果里包含本字符串算校验通过。二进制型，则需要严格等于才算通过
      */
    RespData?: string;
    /**
      * 目的DNS服务器，可以为空字符串
      */
    DnsSvr?: string;
    /**
      * 需要检验是否在DNS IP列表的IP。可以为空字符串，表示不校验
      */
    DnsCheckIp?: string;
    /**
      * 需要为下列值之一。缺省为A。A, MX, NS, CNAME, TXT, ANY
      */
    DnsQueryType?: string;
    /**
      * 是否使用安全链接SSL， 0 不使用，1 使用
      */
    UseSecConn?: number;
    /**
      * FTP登录验证方式，  0 不验证  1 匿名登录  2 需要身份验证
      */
    NeedAuth?: number;
    /**
      * Type=0 默认 （站点监控） Type=2 可用率监控
      */
    Type?: number;
    /**
      * 跟随跳转次数，取值范围0-5，不传则表示不跟随
      */
    RedirectFollowNum?: number;
}
/**
 * DescribeAlarmTopic请求参数结构体
 */
export interface DescribeAlarmTopicRequest {
    /**
      * 如果不存在拨测相关的主题，是否自动创建一个。取值可为0, 1，默认为0
      */
    NeedAdd?: number;
}
/**
 * CreateTaskEx请求参数结构体
 */
export interface CreateTaskExRequest {
    /**
      * http, https, ping, tcp, ftp, smtp, udp, dns 之一
      */
    CatTypeName: string;
    /**
      * 拨测的URL， 例如：www.qq.com (URL域名解析需要能解析出具体的IP)
      */
    Url: string;
    /**
      * 拨测周期。取值可为1,5,15,30之一, 单位：分钟。精度不能低于用户等级规定的最小精度
      */
    Period: number;
    /**
      * 拨测任务名称不能超过32个字符。同一个用户创建的任务名不可重复
      */
    TaskName: string;
    /**
      * 拨测分组ID，体现本拨测任务要采用哪些运营商作为拨测源。一般可直接填写本用户的默认拨测分组。参见：DescribeAgentGroups 接口，本参数使用返回结果里的GroupId的值。注意： Type为0时，AgentGroupId为必填
      */
    AgentGroupId?: number;
    /**
      * 指定域名(如需要)
      */
    Host?: string;
    /**
      * 是否为Header请求（非0 发起Header 请求。为0，且PostData 非空，发起POST请求。为0，PostData 为空，发起GET请求）
      */
    IsHeader?: number;
    /**
      * URL中含有"https"时有用。缺省为SSLv23。需要为 TLSv1_2, TLSv1_1, TLSv1, SSLv2, SSLv23, SSLv3 之一
      */
    SslVer?: string;
    /**
      * POST请求数据。空字符串表示非POST请求
      */
    PostData?: string;
    /**
      * 用户Agent信息
      */
    UserAgent?: string;
    /**
      * 要在结果中进行匹配的字符串
      */
    CheckStr?: string;
    /**
      * 1 表示通过检查结果是否包含CheckStr 进行校验
      */
    CheckType?: number;
    /**
      * 需要设置的Cookie信息
      */
    Cookie?: string;
    /**
      * 任务ID，用于验证且修改任务时传入原任务ID
      */
    TaskId?: number;
    /**
      * 登录服务器的账号。如果为空字符串，表示不用校验用户密码。只做简单连接服务器的拨测
      */
    UserName?: string;
    /**
      * 登录服务器的密码
      */
    PassWord?: string;
    /**
      * 缺省为0。0 表示请求为字符串类型。1表示为二进制类型
      */
    ReqDataType?: number;
    /**
      * 发起TCP, UDP请求的协议请求数据
      */
    ReqData?: string;
    /**
      * 缺省为0。0 表示响应为字符串类型。1表示为二进制类型
      */
    RespDataType?: number;
    /**
      * 预期的UDP请求的回应数据。字符串型，只需要返回的结果里包含本字符串算校验通过。二进制型，则需要严格等于才算通过
      */
    RespData?: string;
    /**
      * 目的DNS服务器  可以为空字符串
      */
    DnsSvr?: string;
    /**
      * 需要检验是否在DNS IP列表的IP。可以为空字符串，表示不校验
      */
    DnsCheckIp?: string;
    /**
      * 需要为下列值之一。缺省为A。A, MX, NS, CNAME, TXT, ANY
      */
    DnsQueryType?: string;
    /**
      * 是否使用安全链接SSL， 0 不使用，1 使用
      */
    UseSecConn?: number;
    /**
      * FTP登录验证方式， 0 不验证 ， 1 匿名登录， 2 需要身份验证
      */
    NeedAuth?: number;
    /**
      * 拨测目标的端口号
      */
    Port?: number;
    /**
      * Type=0 默认 （站点监控）Type=2 可用率监控
      */
    Type?: number;
    /**
      * IsVerify=0 非验证任务 IsVerify=1 验证任务，不传则默认为0
      */
    IsVerify?: number;
    /**
      * 跟随跳转次数，取值范围0-5，不传则表示不跟随
      */
    RedirectFollowNum?: number;
}
/**
 * GetTaskTotalNumber请求参数结构体
 */
export declare type GetTaskTotalNumberRequest = null;
/**
 * 可用性监控任务状态及告警信息
 */
export interface TaskAlarm {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 任务周期，单位为分钟。目前支持1，5，15，30几种取值
      */
    Period: number;
    /**
      * 拨测类型。http, https, ping, tcp, udp, smtp, pop3, dns 之一
      */
    CatTypeName: string;
    /**
      * 任务状态。1表示暂停，2表示运行中，0为初始态
      */
    Status: number;
    /**
      * 拨测任务的URL
      */
    CgiUrl: string;
    /**
      * 任务创建时间
      */
    AddTime: string;
    /**
      * 告警状态。1 故障，0 正常
      */
    AlarmStatus: number;
    /**
      * 告警状态描述，统计信息
      */
    StatusInfo: string;
    /**
      * 任务更新时间
      */
    UpdateTime: string;
}
/**
 * DescribeTasksByType请求参数结构体
 */
export interface DescribeTasksByTypeRequest {
    /**
      * 从第Offset 条开始查询。缺省值为0
      */
    Offset?: number;
    /**
      * 本批次查询Limit 条记录。缺省值为20
      */
    Limit?: number;
    /**
      * 拨测任务类型。0 站点监控，2 可用性监控。缺省值为2
      */
    Type?: number;
}
/**
 * VerifyResult请求参数结构体
 */
export interface VerifyResultRequest {
    /**
      * 要查询的拨测任务的结果id
      */
    ResultId: number;
}
/**
 * VerifyResult返回参数结构体
 */
export interface VerifyResultResponse {
    /**
      * 错误的原因
      */
    ErrorReason?: string;
    /**
      * 错误号
      */
    ResultCode?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务信息和告警策略组
 */
export interface CatTaskDetail {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 任务周期，单位为分钟。目前支持1，5，15，30几种取值
      */
    Period: number;
    /**
      * 拨测类型。http, https, ping, tcp 之一
      */
    CatTypeName: string;
    /**
      * 拨测任务的URL
      */
    CgiUrl: string;
    /**
      * 拨测分组ID
      */
    AgentGroupId: number;
    /**
      * 告警策略组ID
      */
    PolicyGroupId: number;
    /**
      * 任务状态。1表示暂停，2表示运行中，0为初始态
      */
    Status?: number;
    /**
      * 任务创建时间
      */
    AddTime?: string;
    /**
      * 任务类型。0 站点监控，2 可用性监控
      */
    Type?: number;
    /**
      * 绑定的统一告警主题ID
      */
    TopicId?: string;
    /**
      * 告警状态。0 未启用，1, 启用
      */
    AlarmStatus?: number;
    /**
      * 指定的域名
      */
    Host?: string;
    /**
      * 拨测目标的端口号
      */
    Port?: number;
    /**
      * 要在结果中进行匹配的字符串
      */
    CheckStr?: string;
    /**
      * 1 表示通过检查结果是否包含CheckStr 进行校验
      */
    CheckType?: number;
    /**
      * 用户Agent信息
      */
    UserAgent?: string;
    /**
      * 设置的Cookie信息
      */
    Cookie?: string;
    /**
      * POST 请求数据。空字符串表示非POST请求
      */
    PostData?: string;
    /**
      * SSL协议版本
      */
    SslVer?: string;
    /**
      * 是否为Header请求。非0 Header 请求
      */
    IsHeader?: number;
    /**
      * 目的DNS服务器
      */
    DnsSvr?: string;
    /**
      * 需要检验是否在DNS IP列表的IP
      */
    DnsCheckIp?: string;
    /**
      * DNS查询类型
      */
    DnsQueryType?: string;
    /**
      * 登录服务器的账号
      */
    UserName?: string;
    /**
      * 登录服务器的密码
      */
    PassWord?: string;
    /**
      * 是否使用安全链接SSL， 0 不使用，1 使用
      */
    UseSecConn?: number;
    /**
      * FTP登录验证方式  0 不验证  1 匿名登录  2 需要身份验证
      */
    NeedAuth?: number;
    /**
      * 请求数据类型。0 表示请求为字符串类型。1表示为二进制类型
      */
    ReqDataType?: number;
    /**
      * 发起TCP, UDP请求的协议请求数据
      */
    ReqData?: string;
    /**
      * 响应数据类型。0 表示响应为字符串类型。1表示为二进制类型
      */
    RespDataType?: number;
    /**
      * 预期的UDP请求的回应数据
      */
    RespData?: string;
    /**
      * 跟随跳转次数
      */
    RedirectFollowNum?: number;
}
/**
 * GetReturnCodeHistory返回参数结构体
 */
export interface GetReturnCodeHistoryResponse {
    /**
      * 拨测失败详情列表
      */
    Details?: Array<CatReturnDetail>;
    /**
      * 拨测失败汇总列表
      */
    Summary?: Array<CatReturnSummary>;
    /**
      * 开始时间
      */
    BeginTime?: string;
    /**
      * 截至时间
      */
    EndTime?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 时延等数据，数据点
 */
export interface DataPoint {
    /**
      * 数据点的时间
      */
    LogTime: string;
    /**
      * 数据值
      */
    MetricValue: number;
}
/**
 * DescribeAlarmTopic返回参数结构体
 */
export interface DescribeAlarmTopicResponse {
    /**
      * 主题个数
      */
    TotalCount?: number;
    /**
      * 主题列表
      */
    Topics?: Array<AlarmTopic>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetRealAvailRatio返回参数结构体
 */
export interface GetRealAvailRatioResponse {
    /**
      * 国内平均可用率
      */
    AvgAvailRatio?: number;
    /**
      * 各省份最低可用率
      */
    LowestAvailRatio?: number;
    /**
      * 可用率最低的省份
      */
    LowestProvince?: string;
    /**
      * 可用率最低的运营商
      */
    LowestIsp?: string;
    /**
      * 分省份的可用率数据
      */
    ProvinceData?: Array<ProvinceDetail>;
    /**
      * 国内平均耗时，单位毫秒
      */
    AvgTime?: number;
    /**
      * 国外平均可用率
      */
    AvgAvailRatio2?: number;
    /**
      * 国外平均耗时，单位毫秒
      */
    AvgTime2?: number;
    /**
      * 国外最低可用率
      */
    LowestAvailRatio2?: number;
    /**
      * 国外可用率最低的区域
      */
    LowestProvince2?: string;
    /**
      * 国外可用率最低的运营商
      */
    LowestIsp2?: string;
    /**
      * 国外分区域的可用率数据
      */
    ProvinceData2?: Array<ProvinceDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RunTask返回参数结构体
 */
export interface RunTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 拨测Agent 所在省份、运营商
 */
export interface CatAgent {
    /**
      * 拨测结点所在的省份（拼音缩写）
      */
    Province: string;
    /**
      * 拨测结点所在的运营商（英文缩写）
      */
    Isp: string;
    /**
      * 拨测结点所在的省份（中文名称）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProvinceName?: string;
    /**
      * 拨测结点所在的运营商（中文名称）
注意：此字段可能返回 null，表示取不到有效值。
      */
    IspName?: string;
}
/**
 * DescribeCatLogs返回参数结构体
 */
export interface DescribeCatLogsResponse {
    /**
      * 符合条件的总记录数
      */
    TotalCount?: number;
    /**
      * 拨测记录列表
      */
    CatLogs?: Array<CatLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTaskTotalNumber返回参数结构体
 */
export interface GetTaskTotalNumberResponse {
    /**
      * 拨测任务总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTaskEx返回参数结构体
 */
export interface CreateTaskExResponse {
    /**
      * 拨测结果查询ID。接下来可以使用查询拨测是否能够成功，验证能否通过。
      */
    ResultId?: number;
    /**
      * 拨测任务ID。验证通过后，创建任务时使用，传递给CreateTask 接口。
      */
    TaskId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserLimit请求参数结构体
 */
export declare type DescribeUserLimitRequest = null;
