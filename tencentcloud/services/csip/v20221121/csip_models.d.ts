/**
 * DescribeDbAssetInfo返回参数结构体
 */
export interface DescribeDbAssetInfoResponse {
    /**
     * db资产详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DbAssetInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRiskScanTask请求参数结构体
 */
export interface DeleteRiskScanTaskRequest {
    /**
     * 任务id 列表
     */
    TaskIdList: Array<TaskIdListKey>;
}
/**
 * DescribeRiskCenterAssetViewWeakPasswordRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewWeakPasswordRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 风险列表
     */
    Data?: Array<AssetViewWeakPassRisk>;
    /**
     * 状态列表
     */
    StatusLists?: Array<FilterDataObject>;
    /**
     * 危险等级列表
     */
    LevelLists?: Array<FilterDataObject>;
    /**
     * 来源列表
     */
    FromLists?: Array<FilterDataObject>;
    /**
     * 资产类型列表
     */
    InstanceTypeLists?: Array<FilterDataObject>;
    /**
     * 弱口令类型列表
     */
    PasswordTypeLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 弱口令风险高级配置
 */
export interface TaskCenterWeakPwdRiskInputParam {
    /**
     * 检测项ID
     */
    CheckItemId: number;
    /**
     * 是否开启，0-不开启，1-开启
     */
    Enable: number;
}
/**
 * ModifyRiskCenterRiskStatus请求参数结构体
 */
export interface ModifyRiskCenterRiskStatusRequest {
    /**
     * 风险资产相关数据
     */
    RiskStatusKeys: Array<RiskCenterStatusKey>;
    /**
     * 处置状态，1为已处置、2为已忽略，3为取消已处置，4为取消已忽略
     */
    Status: number;
    /**
     * 风险类型，0-端口风险， 1-漏洞风险，2-弱口令风险， 3-网站内容风险，4-配置风险，5-风险服务暴露
     */
    Type: number;
}
/**
 * 报告项key
 */
export interface ReportItemKey {
    /**
     * 日志Id列表
     */
    TaskLogList: Array<string>;
}
/**
 * 主机资产信息
 */
export interface CVMAssetVO {
    /**
     * 资产id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetId?: string;
    /**
     * 资产名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetName?: string;
    /**
     * 资产类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetType?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 防护状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPStatus?: number;
    /**
     * 资产创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetCreateTime?: string;
    /**
     * 公网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIp?: string;
    /**
     * 私网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIp?: string;
    /**
     * vpc id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * vpc 名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcName?: string;
    /**
     * appid信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: number;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName?: string;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvailableArea?: string;
    /**
     * 是否核心
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCore?: number;
    /**
     * 子网id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 子网名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetName?: string;
    /**
     * uuid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceUuid?: string;
    /**
     * qquid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceQUuid?: string;
    /**
     * os名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OsName?: string;
    /**
     * 分区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionCount?: number;
    /**
     * cpu信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CPUInfo?: string;
    /**
     * cpu大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CPUSize?: number;
    /**
     * cpu负载
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CPULoad?: string;
    /**
     * 内存大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemorySize?: string;
    /**
     * 内存负载
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemoryLoad?: string;
    /**
     * 硬盘大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskSize?: string;
    /**
     * 硬盘负载
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskLoad?: string;
    /**
     * 账号数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountCount?: string;
    /**
     * 进程数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessCount?: string;
    /**
     * 软件应用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppCount?: string;
    /**
     * 监听端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PortCount?: number;
    /**
     * 网络攻击
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Attack?: number;
    /**
     * 网络访问
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Access?: number;
    /**
     * 网络拦截
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Intercept?: number;
    /**
     * 入向峰值带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InBandwidth?: string;
    /**
     * 出向峰值带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutBandwidth?: string;
    /**
     * 入向累计流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InFlow?: string;
    /**
     * 出向累计流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutFlow?: string;
    /**
     * 最近扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastScanTime?: string;
    /**
     * 恶意主动外联
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetWorkOut?: number;
    /**
     * 端口风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PortRisk?: number;
    /**
     * 漏洞风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulnerabilityRisk?: number;
    /**
     * 配置风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigurationRisk?: number;
    /**
     * 扫描任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanTask?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * memberId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberId?: string;
    /**
     * os全称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Os?: string;
    /**
     * 风险服务暴露
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskExposure?: number;
    /**
     * 模拟攻击工具状态。0代表未安装，1代表已安装，2代表已离线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BASAgentStatus?: number;
    /**
     * 1新资产；0 非新资产
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAsset?: number;
}
/**
 * 资产视角配置风险
 */
export interface AssetViewCFGRisk {
    /**
     * 唯一id
     */
    Id?: string;
    /**
     * 配置名
     */
    CFGName?: string;
    /**
     * 检查类型
     */
    CheckType?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 实例类型
     */
    InstanceType?: string;
    /**
     * 影响资产
     */
    AffectAsset?: string;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 来源
     */
    From?: string;
    /**
     * 状态
     */
    Status?: number;
    /**
     * -
     */
    CFGSTD?: string;
    /**
     * 配置详情
     */
    CFGDescribe?: string;
    /**
     * 修复建议
     */
    CFGFix?: string;
    /**
     * 帮助文档链接
     */
    CFGHelpURL?: string;
    /**
     * 前端使用索引
     */
    Index?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
}
/**
 * 资产视角的漏洞风险对象
 */
export interface AssetViewVULRisk {
    /**
     * 影响资产
     */
    AffectAsset?: string;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 资产类型
     */
    InstanceType?: string;
    /**
     * 组件
     */
    Component?: string;
    /**
     * 服务
     */
    Service?: string;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 状态，0未处理、1已处置、2已忽略
     */
    Status?: number;
    /**
     * 资产唯一id
     */
    Id?: string;
    /**
     * 前端索引
     */
    Index?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 漏洞类型
     */
    VULType?: string;
    /**
     * 端口
     */
    Port?: string;
    /**
     * 描述
     */
    Describe?: string;
    /**
     * 版本名
     */
    AppName?: string;
    /**
     * 相关信息
     */
    References?: string;
    /**
     * 版本
     */
    AppVersion?: string;
    /**
     * 漏洞url
     */
    VULURL?: string;
    /**
     * 漏洞名称
     */
    VULName?: string;
    /**
     * cve
     */
    CVE?: string;
    /**
     * 修复建议
     */
    Fix?: string;
    /**
     * pocid
     */
    POCId?: string;
    /**
     * 来源
     */
    From?: string;
    /**
     * 主机版本
     */
    CWPVersion?: number;
    /**
     * 是否支持修复
     */
    IsSupportRepair?: boolean;
    /**
     * 是否支持扫描
     */
    IsSupportDetect?: boolean;
    /**
     * 实例uuid
     */
    InstanceUUID?: string;
    /**
     * 负载
     */
    Payload?: string;
    /**
     * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EMGCVulType?: number;
}
/**
 * DescribeScanReportList请求参数结构体
 */
export interface DescribeScanReportListRequest {
    /**
     * 列表过滤条件
     */
    Filter?: Filter;
}
/**
 * DescribeVpcAssets返回参数结构体
 */
export interface DescribeVpcAssetsResponse {
    /**
     * 列表
     */
    Data?: Array<Vpc>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * vpc列表
     */
    VpcList?: Array<FilterDataObject>;
    /**
     * 地域列表
     */
    RegionList?: Array<FilterDataObject>;
    /**
     * appid列表
     */
    AppIdList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * vpc列表数据
 */
export interface Vpc {
    /**
     * 子网(只支持32位)
     */
    Subnet?: number;
    /**
     * 互通vpc(只支持32位)
     */
    ConnectedVpc?: number;
    /**
     * 资产id
     */
    AssetId?: string;
    /**
     * region区域
     */
    Region?: string;
    /**
     * 云服务器(只支持32位)
     */
    CVM?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * dns域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DNS?: Array<string>;
    /**
     * 资产名称
     */
    AssetName?: string;
    /**
     * cidr网段
     */
    CIDR?: string;
    /**
     * 资产创建时间
     */
    CreateTime?: string;
    /**
     * appid
     */
    AppId?: string;
    /**
     * uin
     */
    Uin?: string;
    /**
     * 昵称
     */
    Nick?: string;
    /**
     * 是否新资产 1新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAsset?: number;
    /**
     * 是否核心资产1是 2不是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCore?: number;
}
/**
 * StopRiskCenterTask请求参数结构体
 */
export interface StopRiskCenterTaskRequest {
    /**
     * 任务id 列表
     */
    TaskIdList: Array<TaskIdListKey>;
}
/**
 * 漏洞和资产信息
 */
export interface DataSearchBug {
    /**
     * 返回查询状态
     */
    StateCode?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataBug?: Array<BugInfoDetail>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataAsset?: Array<AssetInfoDetail>;
    /**
     * true支持扫描。false不支持扫描
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VSSScan?: boolean;
    /**
     * 0不支持，1支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPScan?: string;
    /**
     * 1支持虚拟补丁，0或空不支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CFWPatch?: string;
    /**
     * 0不支持，1支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WafPatch?: number;
    /**
     * 0不支持，1支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPFix?: number;
}
/**
 * 风险中心状态处理Key
 */
export interface RiskCenterStatusKey {
    /**
     * 风险ID
     */
    Id: string;
    /**
     * APP ID
     */
    AppId: string;
    /**
     * 公网IP/域名
     */
    PublicIPDomain?: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
}
/**
 * DescribeDomainAssets请求参数结构体
 */
export interface DescribeDomainAssetsRequest {
    /**
     * -
     */
    Filter?: Filter;
}
/**
 * DescribeRiskCenterAssetViewCFGRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewCFGRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * DescribeRiskCenterWebsiteRiskList返回参数结构体
 */
export interface DescribeRiskCenterWebsiteRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 资产视角的端口风险列表
     */
    Data?: Array<WebsiteRisk>;
    /**
     * 状态列表
     */
    StatusLists?: Array<FilterDataObject>;
    /**
     * 危险等级列表
     */
    LevelLists?: Array<FilterDataObject>;
    /**
     * 资产类型列表
     */
    InstanceTypeLists?: Array<FilterDataObject>;
    /**
     * 风险类型列表
     */
    DetectEngineLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签名称
     */
    Name: string;
    /**
     * 标签内容
     */
    Value: string;
}
/**
 * DeleteDomainAndIp请求参数结构体
 */
export interface DeleteDomainAndIpRequest {
    /**
     * -
     */
    Content: Array<PublicIpDomainListKey>;
    /**
     * 是否保留路径配置，1：保留，其他：不保留，默认不传为不保留
     */
    RetainPath?: number;
    /**
     * 以后是否忽略该资产，，1：忽略，其他：不忽略，默认不传为忽略
     */
    IgnoreAsset?: number;
}
/**
 * DescribeScanTaskList请求参数结构体
 */
export interface DescribeScanTaskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * 任务ID列表Key
 */
export interface TaskIdListKey {
    /**
     * 任务ID
     */
    TaskId: string;
}
/**
 * DescribeScanReportList返回参数结构体
 */
export interface DescribeScanReportListResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 任务日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ScanTaskInfo>;
    /**
     * 主账户ID列表
     */
    UINList?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSearchBugInfo请求参数结构体
 */
export interface DescribeSearchBugInfoRequest {
    /**
     * 无
     */
    Id: string;
    /**
     * id=3时传入该参数
     */
    CVEId?: string;
}
/**
 * 报告pdf下载的临时链接
 */
export interface TaskLogURL {
    /**
     * 报告下载临时链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    URL?: string;
    /**
     * 任务报告id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogId?: string;
    /**
     * 任务报告名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLogName?: string;
    /**
     * APP ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
}
/**
 * AddNewBindRoleUser请求参数结构体
 */
export declare type AddNewBindRoleUserRequest = null;
/**
 * DescribeListenerList返回参数结构体
 */
export interface DescribeListenerListResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 监听器列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ClbListenerListInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * db资产输出字段
 */
export interface DBAssetVO {
    /**
     * 资产id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetId?: string;
    /**
     * 资产名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetName?: string;
    /**
     * 资产类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetType?: string;
    /**
     * vpcid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * vpc标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcName?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 资产创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetCreateTime?: string;
    /**
     * 最近扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastScanTime?: string;
    /**
     * 配置风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigurationRisk?: number;
    /**
     * 网络攻击
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Attack?: number;
    /**
     * 网络访问
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Access?: number;
    /**
     * 扫描任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanTask?: number;
    /**
     * 用户appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: number;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 昵称别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName?: string;
    /**
     * 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * 内网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIp?: string;
    /**
     * 公网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIp?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 是否核心
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCore?: number;
    /**
     * 是否新资产: 1新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAsset?: number;
}
/**
 * 资产扫描结构细节
 */
export interface AssetInfoDetail {
    /**
     * 用户appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppID?: string;
    /**
     * CVE编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVEId?: string;
    /**
     * 是扫描，0默认未扫描，1正在扫描，2扫描完成，3扫描出错
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsScan?: number;
    /**
     * 影响资产数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InfluenceAsset?: number;
    /**
     * 未修复资产数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NotRepairAsset?: number;
    /**
     * 未防护资产数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NotProtectAsset?: number;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务百分比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPercent?: number;
    /**
     * 任务时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTime?: number;
    /**
     * 扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanTime?: string;
}
/**
 * 子网资产
 */
export interface SubnetAsset {
    /**
     * appid
     */
    AppId?: string;
    /**
     * uin
     */
    Uin?: string;
    /**
     * 资产ID
     */
    AssetId?: string;
    /**
     * 资产名
     */
    AssetName?: string;
    /**
     * 区域
     */
    Region?: string;
    /**
     * 私有网络id
     */
    VpcId?: string;
    /**
     * 私有网络名
     */
    VpcName?: string;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * 昵称
     */
    Nick?: string;
    /**
     * cidr
     */
    CIDR?: string;
    /**
     * 可用区
     */
    Zone?: string;
    /**
     * cvm数
     */
    CVM?: number;
    /**
     * 可用ip数
     */
    AvailableIp?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 配置风险
     */
    ConfigureRisk?: number;
    /**
     * 任务数
     */
    ScanTask?: number;
    /**
     * 最后扫描时间
     */
    LastScanTime?: string;
    /**
     * 是否核心
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCore?: number;
    /**
     * 是否新资产 1新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAsset?: number;
}
/**
 * CreateRiskCenterScanTask返回参数结构体
 */
export interface CreateRiskCenterScanTaskResponse {
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 0,任务创建成功；小于0失败；-1为存在资产未认证
     */
    Status?: number;
    /**
     * 未认证资产列表
     */
    UnAuthAsset?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSubnetAssets返回参数结构体
 */
export interface DescribeSubnetAssetsResponse {
    /**
     * 列表
     */
    Data?: Array<SubnetAsset>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 地域列表
     */
    RegionList?: Array<FilterDataObject>;
    /**
     * vpc列表
     */
    VpcList?: Array<FilterDataObject>;
    /**
     * appid列表
     */
    AppIdList?: Array<FilterDataObject>;
    /**
     * 可用区列表
     */
    ZoneList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskCenterAssetViewPortRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewPortRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * StopRiskCenterTask返回参数结构体
 */
export interface StopRiskCenterTaskResponse {
    /**
     * Status为0， 停止成功
     */
    Status?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务风险
 */
export interface ServerRisk {
    /**
     * 测绘标签
     */
    ServiceTag?: string;
    /**
     * 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * 影响资产
     */
    AffectAsset?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 资产类型
     */
    InstanceType?: string;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 组件
     */
    Component?: string;
    /**
     * 服务
     */
    Service?: string;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 风险详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskDetails?: string;
    /**
     * 处置建议
     */
    Suggestion?: string;
    /**
     * 状态，0未处理、1已处置、2已忽略
     */
    Status?: number;
    /**
     * 资产唯一id
     */
    Id?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 服务快照
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceSnapshot?: string;
    /**
     * 服务访问的url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url?: string;
    /**
     * 列表索引值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Index?: string;
    /**
     * 风险列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskList?: Array<ServerRiskSuggestion>;
    /**
     * 建议列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuggestionList?: Array<ServerRiskSuggestion>;
    /**
     * HTTP响应状态码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusCode?: string;
}
/**
 * 任务资产项
 */
export interface TaskAssetObject {
    /**
     * 资产名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetName?: string;
    /**
     * 	资产类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 资产分类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetType?: string;
    /**
     * ip/域名/资产id，数据库id等
     */
    Asset?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 多云资产唯一id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Arn?: string;
}
/**
 * ip列表
 */
export interface IpAssetListVO {
    /**
     * 资产id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetId?: string;
    /**
     * 资产name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetName?: string;
    /**
     * 资产类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetType?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 云防状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CFWStatus?: number;
    /**
     * 资产创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetCreateTime?: string;
    /**
     * 公网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIp?: string;
    /**
     * 公网ip类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIpType?: number;
    /**
     * vpc
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * vpc名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcName?: string;
    /**
     * appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: number;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName?: string;
    /**
     * 核心
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCore?: number;
    /**
     * 云上
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCloud?: number;
    /**
     * 网络攻击
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Attack?: number;
    /**
     * 网络访问
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Access?: number;
    /**
     * 网络拦截
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Intercept?: number;
    /**
     * 入向带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InBandwidth?: string;
    /**
     * 出向带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutBandwidth?: string;
    /**
     * 入向流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InFlow?: string;
    /**
     * 出向流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutFlow?: string;
    /**
     * 最近扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastScanTime?: string;
    /**
     * 端口风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PortRisk?: number;
    /**
     * 漏洞风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulnerabilityRisk?: number;
    /**
     * 配置风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigurationRisk?: number;
    /**
     * 扫描任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanTask?: number;
    /**
     * 弱口令
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeakPassword?: number;
    /**
     * 内容风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebContentRisk?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * eip主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddressId?: string;
    /**
     * memberid信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberId?: string;
    /**
     * 风险服务暴露
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskExposure?: number;
    /**
     * 是否新资产 1新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAsset?: number;
    /**
     * 资产认证状态，0-待认证，1-认证成功，2-认证中，3+-认证失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyStatus?: number;
}
/**
 * 过滤数据对象
 */
export interface FilterDataObject {
    /**
     * 英文翻译
     */
    Value?: string;
    /**
     * 中文翻译
     */
    Text?: string;
}
/**
 * DescribeVpcAssets请求参数结构体
 */
export interface DescribeVpcAssetsRequest {
    /**
     * 过滤参数
     */
    Filter?: Filter;
}
/**
 * DescribeRiskCenterAssetViewWeakPasswordRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewWeakPasswordRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * 公网IP和域名资产列表key
 */
export interface PublicIpDomainListKey {
    /**
     * 资产值
     */
    Asset: string;
}
/**
 * DescribeCVMAssets返回参数结构体
 */
export interface DescribeCVMAssetsResponse {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<CVMAssetVO>;
    /**
     * 地域列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionList?: Array<FilterDataObject>;
    /**
     * 防护状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenseStatusList?: Array<FilterDataObject>;
    /**
     * vpc枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcList?: Array<FilterDataObject>;
    /**
     * 资产类型枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetTypeList?: Array<FilterDataObject>;
    /**
     * 操作系统枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SystemTypeList?: Array<FilterDataObject>;
    /**
     * ip列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpTypeList?: Array<FilterDataObject>;
    /**
     * appid列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppIdList?: Array<FilterDataObject>;
    /**
     * 可用区列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneList?: Array<FilterDataObject>;
    /**
     * os列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OsList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * db资产详情
 */
export interface DbAssetInfo {
    /**
     * 云防状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CFWStatus?: number;
    /**
     * 资产id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetId?: string;
    /**
     * vpc信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcName?: string;
    /**
     * 资产类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetType?: string;
    /**
     * 公网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIp?: string;
    /**
     * 私网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIp?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * vpc信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 资产名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetName?: string;
    /**
     * 云防保护版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CFWProtectLevel?: number;
    /**
     * tag信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
}
/**
 * DescribePublicIpAssets请求参数结构体
 */
export interface DescribePublicIpAssetsRequest {
    /**
     * filte过滤条件
     */
    Filter?: Filter;
}
/**
 * 集群pod列表
 */
export interface AssetClusterPod {
    /**
     * 租户id
     */
    AppId?: number;
    /**
     * 租户uin
     */
    Uin?: string;
    /**
     * 租户昵称
     */
    Nick?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * pod id
     */
    AssetId?: string;
    /**
     * pod名称
     */
    AssetName?: string;
    /**
     * pod创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCreateTime?: string;
    /**
     * 命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 集群id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 主机id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MachineId?: string;
    /**
     * 主机名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MachineName?: string;
    /**
     * pod ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodIp?: string;
    /**
     * 关联service数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceCount?: number;
    /**
     * 关联容器数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerCount?: number;
    /**
     * 公网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIp?: string;
    /**
     * 内网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIp?: string;
    /**
     * 是否核心：1:核心，2:非核心
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCore?: number;
    /**
     * 是否新资产 1新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAsset?: number;
}
/**
 * DescribeCVMAssetInfo请求参数结构体
 */
export interface DescribeCVMAssetInfoRequest {
    /**
     * -
     */
    AssetId: string;
}
/**
 * 资产视角的弱口令风险
 */
export interface AssetViewWeakPassRisk {
    /**
     * 影响资产
     */
    AffectAsset?: string;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 资产类型
     */
    InstanceType?: string;
    /**
     * 组件
     */
    Component?: string;
    /**
     * 服务
     */
    Service?: string;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 状态，0未处理、1已处置、2已忽略
     */
    Status?: number;
    /**
     * 资产唯一id
     */
    Id?: string;
    /**
     * 前端索引
     */
    Index?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 弱口令类型
     */
    PasswordType?: string;
    /**
     * 来源
     */
    From?: string;
    /**
     * 漏洞类型
     */
    VULType?: string;
    /**
     * 漏洞url
     */
    VULURL?: string;
    /**
     * 修复建议
     */
    Fix?: string;
    /**
     * 负载
     */
    Payload?: string;
}
/**
 * 网站风险对象
 */
export interface WebsiteRisk {
    /**
     * 影响资产
     */
    AffectAsset?: string;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 状态，0未处理、1已处置、2已忽略
     */
    Status?: number;
    /**
     * 资产唯一id
     */
    Id?: string;
    /**
     * 前端索引
     */
    Index?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 风险链接
     */
    URL?: string;
    /**
     * 风险文件地址
     */
    URLPath?: string;
    /**
     * 实例类型
     */
    InstanceType?: string;
    /**
     * 类型
     */
    DetectEngine?: string;
    /**
     * 结果描述
     */
    ResultDescribe?: string;
    /**
     * 源地址url
     */
    SourceURL?: string;
    /**
     * 源文件地址
     */
    SourceURLPath?: string;
}
/**
 * CreateRiskCenterScanTask请求参数结构体
 */
export interface CreateRiskCenterScanTaskRequest {
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 0-全扫，1-指定资产扫，2-排除资产扫，3-手动填写扫；1和2则Assets字段必填，3则SelfDefiningAssets必填
     */
    ScanAssetType: number;
    /**
     * 扫描项目；port/poc/weakpass/webcontent/configrisk/exposedserver
     */
    ScanItem: Array<string>;
    /**
     * 0-周期任务,1-立即扫描,2-定时扫描,3-自定义；0,2,3则ScanPlanContent必填
     */
    ScanPlanType: number;
    /**
     * 扫描资产信息列表
     */
    Assets?: Array<TaskAssetObject>;
    /**
     * 扫描计划详情
     */
    ScanPlanContent?: string;
    /**
     * ip/域名/url数组
     */
    SelfDefiningAssets?: Array<string>;
    /**
     * 请求发起源，默认为vss表示漏洞扫描服务，云安全中心的用户请填充csip
     */
    ScanFrom?: string;
    /**
     * 高级配置
     */
    TaskAdvanceCFG?: TaskAdvanceCFG;
    /**
     * 体检模式，0-标准模式，1-快速模式，2-高级模式，默认标准模式
     */
    TaskMode?: number;
}
/**
 * DescribeRiskCenterAssetViewCFGRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewCFGRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 资产视角的配置风险列表
     */
    Data?: Array<AssetViewCFGRisk>;
    /**
     * 状态列表
     */
    StatusLists?: Array<FilterDataObject>;
    /**
     * 危险等级列表
     */
    LevelLists?: Array<FilterDataObject>;
    /**
     * 配置名列表
     */
    CFGNameLists?: Array<FilterDataObject>;
    /**
     * 检查类型列表
     */
    CheckTypeLists?: Array<FilterDataObject>;
    /**
     * 资产类型列表
     */
    InstanceTypeLists?: Array<FilterDataObject>;
    /**
     * 来源列表
     */
    FromLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskCenterVULViewVULRiskList返回参数结构体
 */
export interface DescribeRiskCenterVULViewVULRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 漏洞产视角的漏洞风险列表
     */
    Data?: Array<VULViewVULRisk>;
    /**
     * 危险等级列表
     */
    LevelLists?: Array<FilterDataObject>;
    /**
     * 来源列表
     */
    FromLists?: Array<FilterDataObject>;
    /**
     * 漏洞类型列表
     */
    VULTypeLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskCenterVULViewVULRiskList请求参数结构体
 */
export interface DescribeRiskCenterVULViewVULRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * 漏洞风险高级配置
 */
export interface TaskCenterVulRiskInputParam {
    /**
     * 风险ID
     */
    RiskId: string;
    /**
     * 是否开启，0-不开启，1-开启
     */
    Enable: number;
}
/**
 * 任务高级配置
 */
export interface TaskAdvanceCFG {
    /**
     * 漏洞风险高级配置
     */
    VulRisk?: Array<TaskCenterVulRiskInputParam>;
    /**
     * 弱口令风险高级配置
     */
    WeakPwdRisk?: Array<TaskCenterWeakPwdRiskInputParam>;
    /**
     * 配置风险高级配置
     */
    CFGRisk?: Array<TaskCenterCFGRiskInputParam>;
}
/**
 * DescribeScanTaskList返回参数结构体
 */
export interface DescribeScanTaskListResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 任务日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ScanTaskInfoList>;
    /**
     * 主账户ID列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UINList?: Array<string>;
    /**
     * 体检模式过滤列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskModeList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 扫描任务详情
 */
export interface ScanTaskInfo {
    /**
     * 任务日志Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 任务日志名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 任务状态码：1等待开始  2正在扫描  3扫描出错 4扫描完成
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 任务进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Progress: number;
    /**
     * 对应的展示时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTime: string;
    /**
     * 报表id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportId: string;
    /**
     * 报表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportName: string;
    /**
     * 扫描计划，0-周期任务,1-立即扫描,2-定时扫描,3-自定义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanPlan: number;
    /**
     * 关联的资产数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetCount: number;
    /**
     * APP ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 用户主账户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UIN?: string;
    /**
     * 用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
}
/**
 * 漏洞视角的漏洞风险对象
 */
export interface VULViewVULRisk {
    /**
     * 端口
     */
    Port?: string;
    /**
     * 影响资产
     */
    NoHandleCount?: number;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 组件
     */
    Component?: string;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 状态，0未处理、1已处置、2已忽略
     */
    AffectAssetCount?: number;
    /**
     * 资产唯一id
     */
    Id?: string;
    /**
     * 资产子类型
     */
    From?: string;
    /**
     * 前端索引
     */
    Index?: string;
    /**
     * 漏洞类型
     */
    VULType?: string;
    /**
     * 漏洞名
     */
    VULName?: string;
    /**
     * cve
     */
    CVE?: string;
    /**
     * 描述
     */
    Describe?: string;
    /**
     * 负载
     */
    Payload?: string;
    /**
     * 版本名
     */
    AppName?: string;
    /**
     * 相关引用
     */
    References?: string;
    /**
     * 版本
     */
    AppVersion?: string;
    /**
     * 漏洞链接
     */
    VULURL?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 修复建议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Fix?: string;
    /**
     * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EMGCVulType?: number;
}
/**
 * 端口视角的端口风险对象
 */
export interface PortViewPortRisk {
    /**
     * 影响资产
     */
    NoHandleCount?: number;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 组件
     */
    Component?: string;
    /**
     * 端口
     */
    Port?: number;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 处置建议,0保持现状、1限制访问、2封禁端口
     */
    Suggestion?: number;
    /**
     * 状态，0未处理、1已处置、2已忽略
     */
    AffectAssetCount?: string;
    /**
     * 资产唯一id
     */
    Id?: string;
    /**
     * 资产子类型
     */
    From?: string;
    /**
     * 前端索引
     */
    Index?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 服务
     */
    Service?: string;
}
/**
 * DescribeClusterPodAssets请求参数结构体
 */
export interface DescribeClusterPodAssetsRequest {
    /**
     * 过滤
     */
    Filter?: Filter;
}
/**
 * DescribeCVMAssetInfo返回参数结构体
 */
export interface DescribeCVMAssetInfoResponse {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: AssetBaseInfoResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePublicIpAssets返回参数结构体
 */
export interface DescribePublicIpAssetsResponse {
    /**
     * 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<IpAssetListVO>;
    /**
     * 总数
     */
    Total?: number;
    /**
     * 资产归属地
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetLocationList?: Array<FilterDataObject>;
    /**
     * ip列表枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpTypeList?: Array<FilterDataObject>;
    /**
     * 地域列表枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionList?: Array<FilterDataObject>;
    /**
     * 防护枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenseStatusList?: Array<FilterDataObject>;
    /**
     * 资产类型枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetTypeList?: Array<FilterDataObject>;
    /**
     * AppId枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppIdList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskLogURL返回参数结构体
 */
export interface DescribeTaskLogURLResponse {
    /**
     * 返回报告临时下载url
     */
    Data?: Array<TaskLogURL>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDbAssetInfo请求参数结构体
 */
export interface DescribeDbAssetInfoRequest {
    /**
     * 资产id
     */
    AssetId: string;
}
/**
 * 列表查询接口采用新filter 接口，直接传给后台供后台查询过滤
 */
export interface Filter {
    /**
     * 查询数量限制
     */
    Limit?: number;
    /**
     * 查询偏移位置
     */
    Offset?: number;
    /**
     * 排序采用升序还是降序 升:asc 降 desc
     */
    Order?: string;
    /**
     * 需排序的字段
     */
    By?: string;
    /**
     * 过滤的列及内容
     */
    Filters?: Array<WhereFilter>;
    /**
     * 可填无， 日志使用查询时间
     */
    StartTime?: string;
    /**
     * 可填无， 日志使用查询时间
     */
    EndTime?: string;
}
/**
 * DescribeRiskCenterWebsiteRiskList请求参数结构体
 */
export interface DescribeRiskCenterWebsiteRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * 风险详情
 */
export interface ServerRiskSuggestion {
    /**
     * 标题
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Title?: string;
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Body?: string;
}
/**
 * DescribeSubnetAssets请求参数结构体
 */
export interface DescribeSubnetAssetsRequest {
    /**
     * 过滤参数
     */
    Filter?: Filter;
}
/**
 * DescribeClusterPodAssets返回参数结构体
 */
export interface DescribeClusterPodAssetsResponse {
    /**
     * 列表
     */
    Data?: Array<AssetClusterPod>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 集群pod状态枚举
     */
    PodStatusList?: Array<FilterDataObject>;
    /**
     * 命名空间枚举
     */
    NamespaceList?: Array<FilterDataObject>;
    /**
     * 地域枚举
     */
    RegionList?: Array<FilterDataObject>;
    /**
     * 租户枚举
     */
    AppIdList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主机资产详情
 */
export interface AssetBaseInfoResponse {
    /**
     * vpc-id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * vpc-name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcName?: string;
    /**
     * 资产名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetName?: string;
    /**
     * 操作系统
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Os?: string;
    /**
     * 公网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIp?: string;
    /**
     * 内网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIp?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 资产类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetType?: string;
    /**
     * 资产id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetId?: string;
    /**
     * 账号数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountNum?: number;
    /**
     * 端口数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PortNum?: number;
    /**
     * 进程数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessNum?: number;
    /**
     * 软件应用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SoftApplicationNum?: number;
    /**
     * 数据库数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseNum?: number;
    /**
     * Web应用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebApplicationNum?: number;
    /**
     * 服务数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceNum?: number;
    /**
     * web框架数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebFrameworkNum?: number;
    /**
     * Web站点数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebSiteNum?: number;
    /**
     * Jar包数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JarPackageNum?: number;
    /**
     * 启动服务数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartServiceNum?: number;
    /**
     * 计划任务数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduledTaskNum?: number;
    /**
     * 环境变量数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnvironmentVariableNum?: number;
    /**
     * 内核模块数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KernelModuleNum?: number;
    /**
     * 系统安装包数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SystemInstallationPackageNum?: number;
    /**
     * 剩余防护时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SurplusProtectDay?: number;
    /**
     * 客户端是否安装  1 已安装 0 未安装
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPStatus?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * 防护等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProtectLevel?: string;
    /**
     * 防护时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProtectedDay?: number;
}
/**
 * 资产视角的端口风险对象
 */
export interface AssetViewPortRisk {
    /**
     * 端口
     */
    Port?: number;
    /**
     * 影响资产
     */
    AffectAsset?: string;
    /**
     * 风险等级
     */
    Level?: string;
    /**
     * 资产类型
     */
    InstanceType?: string;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 组件
     */
    Component?: string;
    /**
     * 服务
     */
    Service?: string;
    /**
     * 最近识别时间
     */
    RecentTime?: string;
    /**
     * 首次识别时间
     */
    FirstTime?: string;
    /**
     * 处置建议,0保持现状、1限制访问、2封禁端口
     */
    Suggestion?: number;
    /**
     * 状态，0未处理、1已处置、2已忽略
     */
    Status?: number;
    /**
     * 资产唯一id
     */
    Id?: string;
    /**
     * 前端索引
     */
    Index?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 用户appid
     */
    AppId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nick?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 来源
     */
    From?: string;
}
/**
 * DescribeRiskCenterPortViewPortRiskList请求参数结构体
 */
export interface DescribeRiskCenterPortViewPortRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * DescribeRiskCenterPortViewPortRiskList返回参数结构体
 */
export interface DescribeRiskCenterPortViewPortRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 资产视角的端口风险列表
     */
    Data?: Array<PortViewPortRisk>;
    /**
     * 危险等级列表
     */
    LevelLists?: Array<FilterDataObject>;
    /**
     * 处置建议列表
     */
    SuggestionLists?: Array<FilterDataObject>;
    /**
     * 来源列表
     */
    FromLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDomainAndIp返回参数结构体
 */
export interface DeleteDomainAndIpResponse {
    /**
     * 删除的资产数量
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddNewBindRoleUser返回参数结构体
 */
export interface AddNewBindRoleUserResponse {
    /**
     * 0成功，其他失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 过滤条件
 */
export interface WhereFilter {
    /**
     * 过滤的项
     */
    Name: string;
    /**
     * 过滤的值
     */
    Values: Array<string>;
    /**
     * 中台定义：
  1等于 2大于 3小于 4大于等于 5小于等于 6不等于 9模糊匹配 13非模糊匹配 14按位与
  精确匹配填 7 模糊匹配填9 兼容 中台定的结构
  
     */
    OperatorType?: number;
}
/**
 * 扫描任务列表展示信息
 */
export interface ScanTaskInfoList {
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 任务开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 任务结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * cron格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanPlanContent?: string;
    /**
     * 0-周期任务,1-立即扫描,2-定时扫描,3-自定义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InsertTime?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 排除扫描资产信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDefiningAssets?: Array<string>;
    /**
     * 预估时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PredictTime?: number;
    /**
     * 预估完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PredictEndTime?: string;
    /**
     * 报告数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportNumber?: number;
    /**
     * 资产数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetNumber?: number;
    /**
     * 扫描状态, 0-初始值，1-正在扫描，2-扫描完成，3-扫描出错，4-停止扫描
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanStatus?: number;
    /**
     * 任务进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Percent?: number;
    /**
     * port/poc/weakpass/webcontent/configrisk
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanItem?: string;
    /**
     * 0-全扫，1-指定资产扫，2-排除资产扫
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanAssetType?: number;
    /**
     * vss子任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VSSTaskId?: string;
    /**
     * cspm子任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CSPMTaskId?: string;
    /**
     * 主机漏扫子任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPPOCId?: string;
    /**
     * 主机基线子任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPBlId?: string;
    /**
     * vss子任务进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VSSTaskProcess?: number;
    /**
     * cspm子任务进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CSPMTaskProcess?: number;
    /**
     * 主机漏扫子任务进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPPOCProcess?: number;
    /**
     * 主机基线子任务进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CWPBlProcess?: number;
    /**
     * 异常状态码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorCode?: number;
    /**
     * 异常信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorInfo?: string;
    /**
     * 周期任务开始的天数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartDay?: number;
    /**
     * 扫描频率,单位天,1-每天,7-每周,30-月,0-扫描一次
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Frequency?: number;
    /**
     * 完成次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompleteNumber?: number;
    /**
     * 已完成资产个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompleteAssetNumber?: number;
    /**
     * 风险数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskCount?: number;
    /**
     * 资产
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Assets?: Array<TaskAssetObject>;
    /**
     * 用户Appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 用户主账户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UIN?: string;
    /**
     * 用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * 体检模式，0-标准模式，1-快速模式，2-高级模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskMode?: number;
    /**
     * 扫描来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanFrom?: string;
    /**
     * 是否限免体检0不是，1是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsFree?: number;
    /**
     * 是否可以删除，1-可以，0-不可以，对应多账户管理使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDelete?: number;
    /**
     * 任务源类型，0-默认，1-小助手，2-体检项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceType?: number;
}
/**
 * DescribeDbAssets请求参数结构体
 */
export interface DescribeDbAssetsRequest {
    /**
     * -
     */
    Filter?: Filter;
    /**
     * 资产类型:MYSQL/MARIADB/REDIS/MONGODB/POSTGRES/CTS/ES/KAFKA/COS/CBS/CFS
     */
    AssetTypes?: Array<string>;
}
/**
 * 任务报告信息
 */
export interface TaskLogInfo {
    /**
     * 报告名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLogName?: string;
    /**
     * 报告ID
     */
    TaskLogId?: string;
    /**
     * 关联资产个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetsNumber?: number;
    /**
     * 安全风险数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskNumber?: number;
    /**
     * 报告生成时间,任务结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time?: string;
    /**
     * 任务状态码：0 初始值  1正在扫描  2扫描完成  3扫描出错，4停止，5暂停，6该任务已被重启过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 关联任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 扫描开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 任务中心扫描任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskCenterTaskId?: string;
    /**
     * 租户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 主账户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UIN?: string;
    /**
     * 用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
}
/**
 * CreateDomainAndIp返回参数结构体
 */
export interface CreateDomainAndIpResponse {
    /**
     * 返回创建成功的数量
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskCenterAssetViewVULRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewVULRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * 配置风险高级配置
 */
export interface TaskCenterCFGRiskInputParam {
    /**
     * 检测项ID
     */
    ItemId: string;
    /**
     * 是否开启，0-不开启，1-开启
     */
    Enable: number;
    /**
     * 资源类型
     */
    ResourceType: string;
}
/**
 * CreateDomainAndIp请求参数结构体
 */
export interface CreateDomainAndIpRequest {
    /**
     * -
     */
    Content: Array<string>;
}
/**
 * 域名资产
 */
export interface DomainAssetVO {
    /**
     * 资产id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetId?: Array<string>;
    /**
     * 资产名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetName?: Array<string>;
    /**
     * 资产类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetType?: Array<string>;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: Array<string>;
    /**
     * Waf状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WAFStatus?: number;
    /**
     * 资产创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetCreateTime?: string;
    /**
     * Appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: number;
    /**
     * 账号id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 账号名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName?: string;
    /**
     * 是否核心
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCore?: number;
    /**
     * 是否云上资产
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCloud?: number;
    /**
     * 网络攻击
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Attack?: number;
    /**
     * 网络访问
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Access?: number;
    /**
     * 网络拦截
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Intercept?: number;
    /**
     * 入站峰值带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InBandwidth?: string;
    /**
     * 出站峰值带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutBandwidth?: string;
    /**
     * 入站累计流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InFlow?: string;
    /**
     * 出站累计流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutFlow?: string;
    /**
     * 最近扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastScanTime?: string;
    /**
     * 端口风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PortRisk?: number;
    /**
     * 漏洞风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulnerabilityRisk?: number;
    /**
     * 配置风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigurationRisk?: number;
    /**
     * 扫描任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanTask?: number;
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubDomain?: string;
    /**
     * 解析ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SeverIp?: Array<string>;
    /**
     * boi访问数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotCount?: number;
    /**
     * 弱口令风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeakPassword?: number;
    /**
     * 内容风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebContentRisk?: number;
    /**
     * tag标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * 关联实例类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceType?: string;
    /**
     * memberiD
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberId?: string;
    /**
     * cc攻击
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CCAttack?: number;
    /**
     * web攻击
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebAttack?: number;
    /**
     * 风险服务暴露数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceRisk?: number;
    /**
     * 是否新资产 1新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAsset?: number;
    /**
     * 待确认资产的随机三级域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyDomain?: string;
    /**
     * 待确认资产的TXT记录内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyTXTRecord?: string;
    /**
     * 待确认资产的认证状态，0-待认证，1-认证成功，2-认证中，3-txt认证失败，4-人工认证失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyStatus?: number;
    /**
     * bot访问数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotAccessCount?: number;
}
/**
 * DescribeSearchBugInfo返回参数结构体
 */
export interface DescribeSearchBugInfoResponse {
    /**
     * 漏洞信息和资产信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DataSearchBug;
    /**
     * 状态值，0：查询成功，非0：查询失败
     */
    ReturnCode?: number;
    /**
     * 状态信息，success：查询成功，fail：查询失败
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskLogList返回参数结构体
 */
export interface DescribeTaskLogListResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 报告列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskLogInfo>;
    /**
     * 待查看数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NotViewNumber?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞详细信息
 */
export interface BugInfoDetail {
    /**
     * 漏洞编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 漏洞对应pocId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PatchId?: string;
    /**
     * 漏洞名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VULName?: string;
    /**
     * 漏洞严重性：high,middle，low，info
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level?: string;
    /**
     * cvss评分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVSSScore?: string;
    /**
     * cve编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVEId?: string;
    /**
     * 漏洞标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: string;
    /**
     * 漏洞种类，1:web应用，2:系统组件漏洞，3:配置风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VULCategory?: number;
    /**
     * 漏洞影响系统
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImpactOs?: string;
    /**
     * 漏洞影响组件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImpactCOMPENT?: string;
    /**
     * 漏洞影响版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImpactVersion?: string;
    /**
     * 链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reference?: string;
    /**
     * 漏洞描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VULDescribe?: string;
    /**
     * 修复建议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Fix?: string;
    /**
     * 产品支持状态，实时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProSupport?: number;
    /**
     * 是否公开，0为未发布，1为发布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPublish?: number;
    /**
     * 释放时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseTime?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 漏洞子类别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubCategory?: string;
}
/**
 * DescribeDomainAssets返回参数结构体
 */
export interface DescribeDomainAssetsResponse {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<DomainAssetVO>;
    /**
     * 防护状态列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenseStatusList?: Array<FilterDataObject>;
    /**
     * 资产归属地列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetLocationList?: Array<FilterDataObject>;
    /**
     * 资产类型列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceTypeList?: Array<FilterDataObject>;
    /**
     * 地域列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDbAssets返回参数结构体
 */
export interface DescribeDbAssetsResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 资产总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<DBAssetVO>;
    /**
     * 地域枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionList?: Array<FilterDataObject>;
    /**
     * 资产类型枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetTypeList?: Array<FilterDataObject>;
    /**
     * Vpc枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcList?: Array<FilterDataObject>;
    /**
     * Appid枚举
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppIdList?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskCenterAssetViewVULRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewVULRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 资产视角的漏洞风险列表
     */
    Data?: Array<AssetViewVULRisk>;
    /**
     * 状态列表
     */
    StatusLists?: Array<FilterDataObject>;
    /**
     * 危险等级列表
     */
    LevelLists?: Array<FilterDataObject>;
    /**
     * 来源列表
     */
    FromLists?: Array<FilterDataObject>;
    /**
     * 漏洞类型列表
     */
    VULTypeLists?: Array<FilterDataObject>;
    /**
     * 资产类型列表
     */
    InstanceTypeLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCVMAssets请求参数结构体
 */
export interface DescribeCVMAssetsRequest {
    /**
     * -
     */
    Filter?: Filter;
}
/**
 * DescribeRiskCenterServerRiskList请求参数结构体
 */
export interface DescribeRiskCenterServerRiskListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * clb实例和监听器信息
 */
export interface ClbListenerListInfo {
    /**
     * 监听器id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ListenerId?: string;
    /**
     * 监听器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ListenerName?: string;
    /**
     * 负载均衡Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerId?: string;
    /**
     * 负载均衡名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerName?: string;
    /**
     * 协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocol?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 负载均衡ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip?: string;
    /**
     * 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VPort?: number;
    /**
     * 区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 私有网络id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NumericalVpcId?: number;
    /**
     * 负载均衡类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerType?: string;
    /**
     * 监听器域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 负载均衡域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerDomain?: string;
}
/**
 * DescribeRiskCenterServerRiskList返回参数结构体
 */
export interface DescribeRiskCenterServerRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 风险服务列表
     */
    Data?: Array<ServerRisk>;
    /**
     * 资产类型枚举
     */
    InstanceTypeLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeListenerList请求参数结构体
 */
export interface DescribeListenerListRequest {
    /**
     * -
     */
    Filter?: Filter;
}
/**
 * DeleteRiskScanTask返回参数结构体
 */
export interface DeleteRiskScanTaskResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRiskCenterRiskStatus返回参数结构体
 */
export interface ModifyRiskCenterRiskStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskLogList请求参数结构体
 */
export interface DescribeTaskLogListRequest {
    /**
     * 过滤内容
     */
    Filter?: Filter;
}
/**
 * DescribeRiskCenterAssetViewPortRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewPortRiskListResponse {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 资产视角的配置风险列表
     */
    Data?: Array<AssetViewPortRisk>;
    /**
     * 状态列表
     */
    StatusLists?: Array<FilterDataObject>;
    /**
     * 危险等级列表
     */
    LevelLists?: Array<FilterDataObject>;
    /**
     * 建议列表
     */
    SuggestionLists?: Array<FilterDataObject>;
    /**
     * 资产类型列表
     */
    InstanceTypeLists?: Array<FilterDataObject>;
    /**
     * 来源列表
     */
    FromLists?: Array<FilterDataObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskLogURL请求参数结构体
 */
export interface DescribeTaskLogURLRequest {
    /**
     * 任务报告Id 列表
     */
    ReportItemKeyList: Array<ReportItemKey>;
    /**
     * 0: 预览， 1: 下载
     */
    Type: number;
}
