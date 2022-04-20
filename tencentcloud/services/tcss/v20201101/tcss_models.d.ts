/**
 * CreateVirusScanAgain请求参数结构体
 */
export interface CreateVirusScanAgainRequest {
    /**
      * 任务id
      */
    TaskId: string;
    /**
      * 需要扫描的容器id集合
      */
    ContainerIds?: Array<string>;
    /**
      * 是否是扫描全部超时的
      */
    TimeoutAll?: boolean;
    /**
      * 重新设置的超时时长
      */
    Timeout?: number;
}
/**
 * UpdateImageRegistryTimingScanTask返回参数结构体
 */
export interface UpdateImageRegistryTimingScanTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUnfinishRefreshTask返回参数结构体
 */
export interface DescribeUnfinishRefreshTaskResponse {
    /**
      * 返回最近的一次任务ID
      */
    TaskId: number;
    /**
      * 任务状态，为Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist.Task_New,Task_Running表示有任务存在，不允许新下发
      */
    TaskStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示是否启用合规标准。
 */
export interface ComplianceBenchmarkStandardEnable {
    /**
      * 合规标准的ID。
      */
    StandardId: number;
    /**
      * 是否启用合规标准
      */
    Enable: boolean;
}
/**
 * DescribeRiskSyscallWhiteLists返回参数结构体
 */
export interface DescribeRiskSyscallWhiteListsResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 白名单信息列表
      */
    WhiteListSet: Array<RiskSyscallWhiteListBaseInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRefreshTask返回参数结构体
 */
export interface CreateRefreshTaskResponse {
    /**
      * 返回创建的集群检查任务的ID，为0表示创建失败。
      */
    TaskId: number;
    /**
      * 创建检查任务的结果，"Succ"为成功，"Failed"为失败
      */
    CreateResult: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全镜像病毒信息
 */
export interface ImageVirusInfo {
    /**
      * 路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskLevel: number;
    /**
      * 病毒名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusName: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: string;
    /**
      * 修护建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Solution: string;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size: number;
    /**
      * 首次发现时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstScanTime: string;
    /**
      * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestScanTime: string;
    /**
      * 文件md5
注意：此字段可能返回 null，表示取不到有效值。
      */
    Md5: string;
    /**
      * 文件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileName: string;
}
/**
 * 运行时容器访问控制事件描述信息
 */
export interface AbnormalProcessEventDescription {
    /**
      * 事件规则
      */
    Description: string;
    /**
      * 解决方案
      */
    Solution: string;
    /**
      * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 命中规则详细信息
      */
    MatchRule: AbnormalProcessChildRuleInfo;
    /**
      * 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则
      */
    RuleName: string;
    /**
      * 命中规则的id
      */
    RuleId: string;
    /**
      * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationTime: string;
    /**
      * 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或  用户自定义的策略名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
}
/**
 * 表示一个定时任务的周期设置
 */
export interface CompliancePeriodTaskRule {
    /**
      * 执行的频率（几天一次），取值为：1,3,7。
      */
    Frequency: number;
    /**
      * 在这天的什么时间执行，格式为：HH:mm:SS。
      */
    ExecutionTime: string;
    /**
      * 是否开启
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable?: boolean;
}
/**
 * DescribeVirusScanTimeoutSetting返回参数结构体
 */
export interface DescribeVirusScanTimeoutSettingResponse {
    /**
      * 超时时长单位小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timeout: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCheckComponent的入口参数,用于批量安装防御容器
 */
export interface ClusterCreateComponentItem {
    /**
      * 要安装组件的集群ID。
      */
    ClusterId: string;
    /**
      * 该集群对应的地域
      */
    ClusterRegion: string;
}
/**
 * DescribeAssetComponentList返回参数结构体
 */
export interface DescribeAssetComponentListResponse {
    /**
      * 组件列表
      */
    List: Array<ComponentInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryVulList返回参数结构体
 */
export interface DescribeAssetImageRegistryVulListResponse {
    /**
      * 镜像漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    List: Array<ImageVul>;
    /**
      * 总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddAssetImageRegistryRegistryDetail返回参数结构体
 */
export interface AddAssetImageRegistryRegistryDetailResponse {
    /**
      * 连接错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheckErr: string;
    /**
      * 名称错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    NameRepeatErr: string;
    /**
      * 仓库唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCompliancePolicyItemFromWhitelist请求参数结构体
 */
export interface DeleteCompliancePolicyItemFromWhitelistRequest {
    /**
      * 指定的白名单项的ID的列表
      */
    WhitelistIdSet: Array<number>;
}
/**
 * DescribeAssetImageDetail请求参数结构体
 */
export interface DescribeAssetImageDetailRequest {
    /**
      * 镜像id
      */
    ImageID: string;
}
/**
 * ModifyAssetImageScanStop返回参数结构体
 */
export interface ModifyAssetImageScanStopResponse {
    /**
      * 停止状态
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceScanFailedAssetList返回参数结构体
 */
export interface DescribeComplianceScanFailedAssetListResponse {
    /**
      * 返回检测失败的资产的总数。
      */
    TotalCount: number;
    /**
      * 返回各类检测失败的资产的汇总信息的列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanFailedAssetList: Array<ComplianceScanFailedAsset>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SyncAssetImageRegistryAsset返回参数结构体
 */
export interface SyncAssetImageRegistryAssetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryVirusListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryVirusListExportResponse {
    /**
      * excel文件下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecEventsTendency返回参数结构体
 */
export interface DescribeSecEventsTendencyResponse {
    /**
      * 运行时安全事件趋势信息列表
      */
    EventTendencySet: Array<SecTendencyEventInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessControlEventsExport返回参数结构体
 */
export interface DescribeAccessControlEventsExportResponse {
    /**
      * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddEditAbnormalProcessRule请求参数结构体
 */
export interface AddEditAbnormalProcessRuleRequest {
    /**
      * 增加策略信息，策略id为空，编辑策略是id不能为空
      */
    RuleInfo: AbnormalProcessRuleInfo;
    /**
      * 仅在加白的时候带上
      */
    EventId?: string;
}
/**
 * DescribeComplianceTaskAssetSummary请求参数结构体
 */
export interface DescribeComplianceTaskAssetSummaryRequest {
    /**
      * 资产类型列表。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
      */
    AssetTypeSet: Array<string>;
}
/**
 * ModifyAssetImageRegistryScanStop返回参数结构体
 */
export interface ModifyAssetImageRegistryScanStopResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProVersionInfo请求参数结构体
 */
export declare type DescribeProVersionInfoRequest = null;
/**
 * SetCheckMode返回参数结构体
 */
export interface SetCheckModeResponse {
    /**
      * "Succ"表示设置成功，"Failed"表示设置失败
      */
    SetCheckResult: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageScanStatus返回参数结构体
 */
export interface DescribeAssetImageScanStatusResponse {
    /**
      * 镜像个数
      */
    ImageTotal: number;
    /**
      * 扫描镜像个数
      */
    ImageScanCnt: number;
    /**
      * 扫描状态
      */
    Status: string;
    /**
      * 扫描进度 ImageScanCnt/ImageTotal *100
      */
    Schedule: number;
    /**
      * 安全个数
      */
    SuccessCount: number;
    /**
      * 风险个数
      */
    RiskCount: number;
    /**
      * 剩余扫描时间
      */
    LeftSeconds: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAbnormalProcessRulesExport请求参数结构体
 */
export interface DescribeAbnormalProcessRulesExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribePurchaseStateInfo返回参数结构体
 */
export interface DescribePurchaseStateInfoResponse {
    /**
      * 0：可申请试用可购买；1：只可购买(含试用审核不通过和试用过期)；2：试用生效中；3：专业版生效中；4：专业版过期
      */
    State: number;
    /**
      * 总核数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CoresCnt: number;
    /**
      * 已购买核数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizedCoresCnt: number;
    /**
      * 镜像数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageCnt: number;
    /**
      * 已授权镜像数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizedImageCnt: number;
    /**
      * 已购买镜像授权数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PurchasedAuthorizedCnt: number;
    /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpirationTime: string;
    /**
      * 0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutomaticRenewal: number;
    /**
      * 试用期间赠送镜像授权数，可能会过期
注意：此字段可能返回 null，表示取不到有效值。
      */
    GivenAuthorizedCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyVirusFileStatus返回参数结构体
 */
export interface ModifyVirusFileStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryRegistryDetail返回参数结构体
 */
export interface DescribeAssetImageRegistryRegistryDetailResponse {
    /**
      * 仓库名
      */
    Name: string;
    /**
      * 用户名
      */
    Username: string;
    /**
      * 密码
      */
    Password: string;
    /**
      * 仓库url
      */
    Url: string;
    /**
      * 仓库类型，列表：harbor
      */
    RegistryType: string;
    /**
      * 仓库版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryVersion: string;
    /**
      * 网络类型，列表：public（公网）
      */
    NetType: string;
    /**
      * 区域，列表:default（默认）
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryRegion: string;
    /**
      * 限速
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpeedLimit: number;
    /**
      * 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1
注意：此字段可能返回 null，表示取不到有效值。
      */
    Insecure: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全
描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface RunTimeFilters {
    /**
      * 过滤键的名称
      */
    Name: string;
    /**
      * 一个或者多个过滤值。
      */
    Values: Array<string>;
    /**
      * 是否模糊查询
      */
    ExactMatch?: boolean;
}
/**
 * DescribeVirusDetail请求参数结构体
 */
export interface DescribeVirusDetailRequest {
    /**
      * 木马文件id
      */
    Id: string;
}
/**
 * DescribeClusterDetail请求参数结构体
 */
export interface DescribeClusterDetailRequest {
    /**
      * 集群id
      */
    ClusterId: string;
}
/**
 * DescribeAssetImageList请求参数结构体
 */
export interface DescribeAssetImageListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>ImageName- String - 是否必填：否 - 镜像名称筛选，</li>
<li>ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErr</li>
<li>ImageID- String - 是否必填：否 - 镜像ID筛选，</li>
<li>SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * DescribeRiskSyscallWhiteListDetail请求参数结构体
 */
export interface DescribeRiskSyscallWhiteListDetailRequest {
    /**
      * 白名单id
      */
    WhiteListId: string;
}
/**
 * ModifyAbnormalProcessRuleStatus请求参数结构体
 */
export interface ModifyAbnormalProcessRuleStatusRequest {
    /**
      * 策略的ids
      */
    RuleIdSet: Array<string>;
    /**
      * 策略开关，true开启，false关闭
      */
    IsEnable: boolean;
}
/**
 * 运行是安全详情，进程信息
 */
export interface ProcessDetailInfo {
    /**
      * 进程名称
      */
    ProcessName: string;
    /**
      * 进程权限
      */
    ProcessAuthority: string;
    /**
      * 进程pid
      */
    ProcessId: number;
    /**
      * 进程启动用户
      */
    ProcessStartUser: string;
    /**
      * 进程用户组
      */
    ProcessUserGroup: string;
    /**
      * 进程路径
      */
    ProcessPath: string;
    /**
      * 进程树
      */
    ProcessTree: string;
    /**
      * 进程md5
      */
    ProcessMd5: string;
    /**
      * 进程命令行参数
      */
    ProcessParam: string;
}
/**
 * ScanCompliancePolicyItems请求参数结构体
 */
export interface ScanCompliancePolicyItemsRequest {
    /**
      * 要重新扫描的客户检测项的列表。
      */
    CustomerPolicyItemIdSet: Array<number>;
}
/**
 * DescribeAssetImageVirusListExport请求参数结构体
 */
export interface DescribeAssetImageVirusListExportRequest {
    /**
      * 列表支持字段
      */
    ExportField: Array<string>;
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 过滤条件。
<li>Name- String - 是否必填：否 - 镜像名称筛选，</li>
<li>RiskLevel - String - 是否必填：否 - 风险等级  1,2,3,4</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * CreateAssetImageScanTask返回参数结构体
 */
export interface CreateAssetImageScanTaskResponse {
    /**
      * 任务id
      */
    TaskID: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTaskResultSummary请求参数结构体
 */
export declare type DescribeTaskResultSummaryRequest = null;
/**
 * DeleteAccessControlRules请求参数结构体
 */
export interface DeleteAccessControlRulesRequest {
    /**
      * 策略的ids
      */
    RuleIdSet: Array<string>;
}
/**
 * 表示K8S资产专属的详情。
 */
export interface ComplianceK8SDetailInfo {
    /**
      * K8S集群的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * K8S集群的版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterVersion: string;
}
/**
 * 运行时容器访问控制事件描述信息
 */
export interface AccessControlEventDescription {
    /**
      * 事件规则
      */
    Description: string;
    /**
      * 解决方案
      */
    Solution: string;
    /**
      * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 命中规则详细信息
      */
    MatchRule: AccessControlChildRuleInfo;
    /**
      * 命中规则名字
      */
    RuleName: string;
    /**
      * 命中规则id
      */
    RuleId: string;
    /**
      * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationTime: string;
}
/**
 * DescribeAccessControlEvents返回参数结构体
 */
export interface DescribeAccessControlEventsResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 访问控制事件数组
      */
    EventSet: Array<AccessControlEventInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时安全，进程基础信息
 */
export interface ProcessBaseInfo {
    /**
      * 进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessStartUser: string;
    /**
      * 进程用户组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessUserGroup: string;
    /**
      * 进程路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessPath: string;
    /**
      * 进程命令行参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessParam: string;
}
/**
 * 表示一项资产的详情。
 */
export interface ComplianceAssetDetailInfo {
    /**
      * 客户资产的ID。
      */
    CustomerAssetId: number;
    /**
      * 资产类别。
      */
    AssetType: string;
    /**
      * 资产的名称。
      */
    AssetName: string;
    /**
      * 资产所属的节点的名称。
      */
    NodeName: string;
    /**
      * 资产所在的主机的名称。
      */
    HostName: string;
    /**
      * 资产所在的主机的IP。
      */
    HostIP: string;
    /**
      * 检测状态
CHECK_INIT, 待检测
CHECK_RUNNING, 检测中
CHECK_FINISHED, 检测完成
CHECK_FAILED, 检测失败
      */
    CheckStatus: string;
    /**
      * 此类资产通过的检测项的数目。
      */
    PassedPolicyItemCount: number;
    /**
      * 此类资产未通过的检测的数目。
      */
    FailedPolicyItemCount: number;
    /**
      * 上次检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastCheckTime: string;
    /**
      * 检测结果：
RESULT_FAILED: 未通过。
RESULT_PASSED: 通过。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckResult: string;
    /**
      * 资产的运行状态。
      */
    AssetStatus: string;
    /**
      * 创建资产的时间。
ASSET_NORMAL: 正常运行，
ASSET_PAUSED: 暂停运行，
ASSET_STOPPED: 停止运行，
ASSET_ABNORMAL: 异常
      */
    AssetCreateTime: string;
}
/**
 * DescribeRiskSyscallEvents返回参数结构体
 */
export interface DescribeRiskSyscallEventsResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 高危系统调用数组
      */
    EventSet: Array<RiskSyscallEventInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRiskList返回参数结构体
 */
export interface DescribeAssetImageRiskListResponse {
    /**
      * 镜像病毒列表
      */
    List: Array<ImageRiskInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReverseShellEvents返回参数结构体
 */
export interface DescribeReverseShellEventsResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 反弹shell数组
      */
    EventSet: Array<ReverseShellEventInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 镜像列表
 */
export interface ImageSimpleInfo {
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 镜像大小
      */
    Size: number;
    /**
      * 类型
      */
    ImageType: string;
    /**
      * 关联容器数
      */
    ContainerCnt: number;
}
/**
 * DescribeComplianceAssetDetailInfo请求参数结构体
 */
export interface DescribeComplianceAssetDetailInfoRequest {
    /**
      * 客户资产ID。
      */
    CustomerAssetId: number;
}
/**
 * CreateExportComplianceStatusListJob返回参数结构体
 */
export interface CreateExportComplianceStatusListJobResponse {
    /**
      * 返回创建的导出任务的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetAppServiceList返回参数结构体
 */
export interface DescribeAssetAppServiceListResponse {
    /**
      * db服务列表
      */
    List: Array<ServiceInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示一个合规标准的信息。
 */
export interface ComplianceBenchmarkStandard {
    /**
      * 合规标准的ID
      */
    StandardId: number;
    /**
      * 合规标准的名称
      */
    Name: string;
    /**
      * 合规标准包含的数目
      */
    PolicyItemCount: number;
    /**
      * 是否启用此标准
      */
    Enabled: boolean;
    /**
      * 标准的描述
      */
    Description: string;
}
/**
 * DescribeEscapeRuleInfo返回参数结构体
 */
export interface DescribeEscapeRuleInfoResponse {
    /**
      * 规则信息
      */
    RuleSet: Array<EscapeRule>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePurchaseStateInfo请求参数结构体
 */
export declare type DescribePurchaseStateInfoRequest = null;
/**
 * AddCompliancePolicyItemToWhitelist请求参数结构体
 */
export interface AddCompliancePolicyItemToWhitelistRequest {
    /**
      * 要忽略的检测项的ID的列表
      */
    CustomerPolicyItemIdSet: Array<number>;
}
/**
 * 表示一类资产的总览信息。
 */
export interface ComplianceAssetSummary {
    /**
      * 资产类别。
      */
    AssetType: string;
    /**
      * 是否为客户的首次检测。与CheckStatus配合使用。
      */
    IsCustomerFirstCheck: boolean;
    /**
      * 检测状态

CHECK_UNINIT, 用户未启用此功能

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
      */
    CheckStatus: string;
    /**
      * 此类别的检测进度，为 0~100 的数。若未在检测中，无此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckProgress: number;
    /**
      * 此类资产通过的检测项的数目。
      */
    PassedPolicyItemCount: number;
    /**
      * 此类资产未通过的检测的数目。
      */
    FailedPolicyItemCount: number;
    /**
      * 此类资产下未通过的严重级别的检测项的数目。
      */
    FailedCriticalPolicyItemCount: number;
    /**
      * 此类资产下未通过的高危检测项的数目。
      */
    FailedHighRiskPolicyItemCount: number;
    /**
      * 此类资产下未通过的中危检测项的数目。
      */
    FailedMediumRiskPolicyItemCount: number;
    /**
      * 此类资产下未通过的低危检测项的数目。
      */
    FailedLowRiskPolicyItemCount: number;
    /**
      * 此类资产下提示级别的检测项的数目。
      */
    NoticePolicyItemCount: number;
    /**
      * 通过检测的资产的数目。
      */
    PassedAssetCount: number;
    /**
      * 未通过检测的资产的数目。
      */
    FailedAssetCount: number;
    /**
      * 此类资产的合规率，0~100的数。
      */
    AssetPassedRate: number;
    /**
      * 检测失败的资产的数目。
      */
    ScanFailedAssetCount: number;
    /**
      * 上次检测的耗时，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckCostTime: number;
    /**
      * 上次检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastCheckTime: string;
    /**
      * 定时检测规则。
      */
    PeriodRule: CompliancePeriodTaskRule;
    /**
      * 已开启的检查项总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenPolicyItemCount?: number;
    /**
      * 已忽略的检查项总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    IgnoredPolicyItemCount?: number;
}
/**
 * 容器逃逸扫描策略开关信息
 */
export interface EscapeRule {
    /**
      * 规则类型
ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
ESCAPE_SYSCALL:Syscall逃逸
      */
    Type: string;
    /**
      * 规则名称
宿主机文件访问逃逸、
Syscall逃逸、
MountNamespace逃逸、
程序提权逃逸、
特权容器启动逃逸、
敏感路径挂载
      */
    Name: string;
    /**
      * 是否打开：false否 ，true是
      */
    IsEnable: boolean;
    /**
      * 规则组别。RISK_CONTAINER：风险容器，PROCESS_PRIVILEGE：程序特权，CONTAINER_ESCAPE：容器逃逸
      */
    Group: string;
}
/**
 * 表示一个合规基线检测定时任务的信息。
 */
export interface CompliancePeriodTask {
    /**
      * 周期任务的ID
      */
    PeriodTaskId: number;
    /**
      * 资产类型。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
      */
    AssetType: string;
    /**
      * 最近一次触发的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastTriggerTime: string;
    /**
      * 总的检查项数目
      */
    TotalPolicyItemCount: number;
    /**
      * 周期设置
      */
    PeriodRule: CompliancePeriodTaskRule;
    /**
      * 合规标准列表
      */
    BenchmarkStandardSet: Array<ComplianceBenchmarkStandard>;
}
/**
 * RemoveAssetImageRegistryRegistryDetail返回参数结构体
 */
export interface RemoveAssetImageRegistryRegistryDetailResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateAssetImageRegistryRegistryDetail返回参数结构体
 */
export interface UpdateAssetImageRegistryRegistryDetailResponse {
    /**
      * 连接错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheckErr: string;
    /**
      * 名称错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    NameRepeatErr: string;
    /**
      * 仓库唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAbnormalProcessRules返回参数结构体
 */
export interface DeleteAbnormalProcessRulesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时安全，策略基本信息
 */
export interface RuleBaseInfo {
    /**
      * true: 默认策略，false:自定义策略
      */
    IsDefault: boolean;
    /**
      * 策略生效镜像数量
      */
    EffectImageCount: number;
    /**
      * 策略Id
      */
    RuleId: string;
    /**
      * 策略更新时间, 存在为空的情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 策略名字
      */
    RuleName: string;
    /**
      * 编辑用户名称
      */
    EditUserName: string;
    /**
      * true: 策略启用，false：策略禁用
      */
    IsEnable: boolean;
}
/**
 * 容器安全进程列表
 */
export interface ProcessInfo {
    /**
      * 进程启动时间
      */
    StartTime: string;
    /**
      * 运行用户
      */
    RunAs: string;
    /**
      * 命令行参数
      */
    CmdLine: string;
    /**
      * Exe路径
      */
    Exe: string;
    /**
      * 主机PID
      */
    PID: number;
    /**
      * 容器内pid
      */
    ContainerPID: number;
    /**
      * 容器名称
      */
    ContainerName: string;
    /**
      * 主机id
      */
    HostID: string;
    /**
      * 主机ip
      */
    HostIP: string;
    /**
      * 进程名称
      */
    ProcessName: string;
    /**
      * 主机名称
      */
    HostName: string;
    /**
      * 外网ip
      */
    PublicIp: string;
}
/**
 * DescribeReverseShellDetail请求参数结构体
 */
export interface DescribeReverseShellDetailRequest {
    /**
      * 事件唯一id
      */
    EventId: string;
}
/**
 * ModifyReverseShellStatus请求参数结构体
 */
export interface ModifyReverseShellStatusRequest {
    /**
      * 处理事件ids
      */
    EventIdSet: Array<string>;
    /**
      * 标记事件的状态，
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
      */
    Status: string;
    /**
      * 事件备注
      */
    Remark?: string;
}
/**
 * DescribeAssetImageRiskListExport请求参数结构体
 */
export interface DescribeAssetImageRiskListExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 风险级别 1,2,3,4，</li>
<li>Behavior - String - 是否必填：否 - 风险行为 1,2,3,4</li>
<li>Type - String - 是否必填：否 - 风险类型  1,2,</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * DescribeAffectedWorkloadList请求参数结构体
 */
export interface DescribeAffectedWorkloadListRequest {
    /**
      * 唯一的检测项的ID
      */
    CheckItemId: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 每次查询的最大记录数量
      */
    Limit?: number;
    /**
      * Name - String
Name 可取值：WorkloadType,ClusterId
      */
    Filters?: Array<ComplianceFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * DescribeAffectedClusterCount请求参数结构体
 */
export declare type DescribeAffectedClusterCountRequest = null;
/**
 * DescribeAssetImageRegistryVulListExport请求参数结构体
 */
export interface DescribeAssetImageRegistryVulListExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 镜像信息
      */
    ImageInfo?: ImageInfo;
    /**
      * 镜像标识Id
      */
    Id?: number;
}
/**
 * AddEditRiskSyscallWhiteList请求参数结构体
 */
export interface AddEditRiskSyscallWhiteListRequest {
    /**
      * 仅在添加白名单时候使用
      */
    EventId?: string;
    /**
      * 增加白名单信息，白名单id为空，编辑白名单id不能为空
      */
    WhiteListInfo?: RiskSyscallWhiteListInfo;
}
/**
 * 容器安全运行时高危系统调用信息
 */
export interface ReverseShellEventInfo {
    /**
      * 进程名称
      */
    ProcessName: string;
    /**
      * 进程路径
      */
    ProcessPath: string;
    /**
      * 镜像id
      */
    ImageId: string;
    /**
      * 容器id
      */
    ContainerId: string;
    /**
      * 镜像名
      */
    ImageName: string;
    /**
      * 容器名
      */
    ContainerName: string;
    /**
      * 生成时间
      */
    FoundTime: string;
    /**
      * 事件解决方案
      */
    Solution: string;
    /**
      * 事件详细描述
      */
    Description: string;
    /**
      * 状态，EVENT_UNDEAL:事件未处理
    EVENT_DEALED:事件已经处理
    EVENT_INGNORE：事件已经忽略
    EVENT_ADD_WHITE：时间已经加白
      */
    Status: string;
    /**
      * 事件id
      */
    EventId: string;
    /**
      * 备注
      */
    Remark: string;
    /**
      * 父进程名
      */
    PProcessName: string;
    /**
      * 事件数量
      */
    EventCount: number;
    /**
      * 最近生成时间
      */
    LatestFoundTime: string;
    /**
      * 目标地址
      */
    DstAddress: string;
}
/**
 * DescribeRiskSyscallDetail请求参数结构体
 */
export interface DescribeRiskSyscallDetailRequest {
    /**
      * 事件唯一id
      */
    EventId: string;
}
/**
 * DescribeAbnormalProcessRules请求参数结构体
 */
export interface DescribeAbnormalProcessRulesRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeAssetImageRegistryList返回参数结构体
 */
export interface DescribeAssetImageRegistryListResponse {
    /**
      * 镜像仓库列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    List: Array<ImageRepoInfo>;
    /**
      * 总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ExportVirusList返回参数结构体
 */
export interface ExportVirusListResponse {
    /**
      * 导出任务ID，前端拿着任务ID查询任务进度
      */
    JobId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageVirusList返回参数结构体
 */
export interface DescribeAssetImageVirusListResponse {
    /**
      * 镜像病毒列表
      */
    List: Array<ImageVirusInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 病毒扫描状态
0:未扫描
1:扫描中
2:扫描完成
3:扫描出错
4:扫描取消
      */
    VirusScanStatus: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageRiskSummary请求参数结构体
 */
export declare type DescribeImageRiskSummaryRequest = null;
/**
 * ModifyReverseShellStatus返回参数结构体
 */
export interface ModifyReverseShellStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAssetImageScanSetting请求参数结构体
 */
export interface CreateAssetImageScanSettingRequest {
    /**
      * 开关
      */
    Enable: boolean;
    /**
      * 扫描时间
      */
    ScanTime: string;
    /**
      * 扫描周期
      */
    ScanPeriod: number;
    /**
      * 扫描木马
      */
    ScanVirus: boolean;
    /**
      * 扫描敏感信息
      */
    ScanRisk: boolean;
    /**
      * 扫描漏洞
      */
    ScanVul: boolean;
    /**
      * 全部镜像
      */
    All: boolean;
    /**
      * 自定义镜像
      */
    Images?: Array<string>;
}
/**
 * DescribeAssetSummary返回参数结构体
 */
export interface DescribeAssetSummaryResponse {
    /**
      * 应用个数
      */
    AppCnt: number;
    /**
      * 容器个数
      */
    ContainerCnt: number;
    /**
      * 暂停的容器个数
      */
    ContainerPause: number;
    /**
      * 运行的容器个数
      */
    ContainerRunning: number;
    /**
      * 停止运行的容器个数
      */
    ContainerStop: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 数据库个数
      */
    DbCnt: number;
    /**
      * 镜像个数
      */
    ImageCnt: number;
    /**
      * 主机在线个数
      */
    HostOnline: number;
    /**
      * 主机个数
      */
    HostCnt: number;
    /**
      * 有风险的镜像个数
      */
    ImageHasRiskInfoCnt: number;
    /**
      * 有病毒的镜像个数
      */
    ImageHasVirusCnt: number;
    /**
      * 有漏洞的镜像个数
      */
    ImageHasVulsCnt: number;
    /**
      * 不受信任的镜像个数
      */
    ImageUntrustCnt: number;
    /**
      * 监听的端口个数
      */
    ListenPortCnt: number;
    /**
      * 进程个数
      */
    ProcessCnt: number;
    /**
      * web服务个数
      */
    WebServiceCnt: number;
    /**
      * 最近镜像扫描时间
      */
    LatestImageScanTime: string;
    /**
      * 风险镜像个数
      */
    ImageUnsafeCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageRegistryTimingScanTask返回参数结构体
 */
export interface DescribeImageRegistryTimingScanTaskResponse {
    /**
      * 定时扫描开关
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable: boolean;
    /**
      * 定时任务扫描时间
      */
    ScanTime: string;
    /**
      * 定时扫描间隔
      */
    ScanPeriod: number;
    /**
      * 扫描类型数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanType: Array<string>;
    /**
      * 扫描全部镜像
      */
    All: boolean;
    /**
      * 自定义扫描镜像
注意：此字段可能返回 null，表示取不到有效值。
      */
    Images: Array<ImageInfo>;
    /**
      * 自动以扫描镜像Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetWebServiceList请求参数结构体
 */
export interface DescribeAssetWebServiceListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Keywords- String - 是否必填：否 - 模糊查询可选字段</li>
<li>Type- String - 是否必填：否 - 主机运行状态筛选，"Apache"
"Jboss"
"lighttpd"
"Nginx"
"Tomcat"</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * ModifyEscapeEventStatus返回参数结构体
 */
export interface ModifyEscapeEventStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckRepeatAssetImageRegistry返回参数结构体
 */
export interface CheckRepeatAssetImageRegistryResponse {
    /**
      * 是否重复
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsRepeat: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessControlEventsExport请求参数结构体
 */
export interface DescribeAccessControlEventsExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeRiskSyscallDetail返回参数结构体
 */
export interface DescribeRiskSyscallDetailResponse {
    /**
      * 事件基本信息
      */
    EventBaseInfo: RunTimeEventBaseInfo;
    /**
      * 进程信息
      */
    ProcessInfo: ProcessDetailInfo;
    /**
      * 父进程信息
      */
    ParentProcessInfo: ProcessDetailBaseInfo;
    /**
      * 事件描述
      */
    EventDetail: RiskSyscallEventDescription;
    /**
      * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessInfo: ProcessBaseInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时容器反弹shell事件描述信息
 */
export interface ReverseShellEventDescription {
    /**
      * 描述信息
      */
    Description: string;
    /**
      * 解决方案
      */
    Solution: string;
    /**
      * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 目标地址
      */
    DstAddress: string;
    /**
      * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationTime: string;
}
/**
 * DescribeAssetImageBindRuleInfo返回参数结构体
 */
export interface DescribeAssetImageBindRuleInfoResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 镜像绑定规则列表
      */
    ImageBindRuleSet: Array<ImagesBindRuleInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ScanCompliancePolicyItems返回参数结构体
 */
export interface ScanCompliancePolicyItemsResponse {
    /**
      * 返回重新检测任务的ID。
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetContainerList请求参数结构体
 */
export interface DescribeAssetContainerListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>ContainerName - String - 是否必填：否 - 容器名称模糊搜索</li>
<li>Status - String - 是否必填：否 - 容器运行状态筛选，0："created",1："running", 2："paused", 3："restarting", 4："removing", 5："exited", 6："dead" </li>
<li>Runas - String - 是否必填：否 - 运行用户筛选</li>
<li>ImageName- String - 是否必填：否 - 镜像名称搜索</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>OrderBy - String 是否必填：否 -排序字段，支持：cpu_usage, mem_usage的动态排序 ["cpu_usage","+"]  '+'升序、'-'降序</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * DescribeEscapeSafeState返回参数结构体
 */
export interface DescribeEscapeSafeStateResponse {
    /**
      * Unsafe：存在风险，Safe：暂无风险,UnKnown:未知风险
      */
    IsSafe: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时安全，异常进程检测策略
 */
export interface AbnormalProcessRuleInfo {
    /**
      * true:策略启用，false:策略禁用
      */
    IsEnable: boolean;
    /**
      * 生效镜像id，空数组代表全部镜像
      */
    ImageIds: Array<string>;
    /**
      * 用户策略的子策略数组
      */
    ChildRules: Array<AbnormalProcessChildRuleInfo>;
    /**
      * 策略名字
      */
    RuleName: string;
    /**
      * 策略id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId?: string;
    /**
      * 系统策略的子策略数组
      */
    SystemChildRules?: Array<AbnormalProcessSystemChildRuleInfo>;
    /**
      * 是否是系统默认策略
      */
    IsDefault?: boolean;
}
/**
 * ScanComplianceAssetsByPolicyItem返回参数结构体
 */
export interface ScanComplianceAssetsByPolicyItemResponse {
    /**
      * 返回重新检测任务的ID。
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示一条白名单记录。
 */
export interface ComplianceWhitelistItem {
    /**
      * 白名单项的ID。
      */
    WhitelistItemId: number;
    /**
      * 客户检测项的ID。
      */
    CustomerPolicyItemId: number;
    /**
      * 检测项的名称。
      */
    Name: string;
    /**
      * 合规标准的名称。
      */
    StandardName: string;
    /**
      * 合规标准的ID。
      */
    StandardId: number;
    /**
      * 检测项影响的资产的数目。
      */
    AffectedAssetCount: number;
    /**
      * 最后更新的时间
      */
    LastUpdateTime: string;
    /**
      * 加入到白名单的时间
      */
    InsertTime: string;
}
/**
 * DescribeAssetPortList请求参数结构体
 */
export interface DescribeAssetPortListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>All - String - 是否必填：否 - 模糊查询可选字段</li>
<li>RunAs - String - 是否必填：否 - 运行用户筛选，</li>
<li>ContainerID - String - 是否必填：否 - 容器id</li>
<li>HostID- String - 是否必填：是 - 主机id</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>ProcessName- string - 是否必填：否 - 进程名搜索</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * DescribeComplianceTaskPolicyItemSummaryList返回参数结构体
 */
export interface DescribeComplianceTaskPolicyItemSummaryListResponse {
    /**
      * 返回最近一次合规检查任务的ID。这个任务为本次所展示数据的来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: number;
    /**
      * 返回检测项的总数。
      */
    TotalCount: number;
    /**
      * 返回各检测项对应的汇总信息的列表。
      */
    PolicyItemSummaryList: Array<CompliancePolicyItemSummary>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示容器资产专属的详情。
 */
export interface ComplianceContainerDetailInfo {
    /**
      * 容器在主机上的ID。
      */
    ContainerId: string;
    /**
      * 容器所属的Pod的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodName: string;
}
/**
 * DescribeReverseShellEvents请求参数结构体
 */
export interface DescribeReverseShellEventsRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeAbnormalProcessRuleDetail请求参数结构体
 */
export interface DescribeAbnormalProcessRuleDetailRequest {
    /**
      * 策略唯一id
      */
    RuleId?: string;
    /**
      * 镜像id, 在添加白名单的时候使用
      */
    ImageId?: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * SyncAssetImageRegistryAsset请求参数结构体
 */
export declare type SyncAssetImageRegistryAssetRequest = null;
/**
 * 集群检查任务入参
 */
export interface ClusterCheckTaskItem {
    /**
      * 指定要扫描的集群ID
      */
    ClusterId: string;
    /**
      * 集群所属地域
      */
    ClusterRegion: string;
    /**
      * 指定要扫描的节点IP
      */
    NodeIp?: string;
    /**
      * 按照要扫描的workload名字
      */
    WorkloadName?: string;
}
/**
 * DescribeAffectedClusterCount返回参数结构体
 */
export interface DescribeAffectedClusterCountResponse {
    /**
      * 严重风险的集群数量
      */
    SeriousRiskClusterCount: number;
    /**
      * 高危风险的集群数量
      */
    HighRiskClusterCount: number;
    /**
      * 中危风险的集群数量
      */
    MiddleRiskClusterCount: number;
    /**
      * 低危风险的集群数量
      */
    HintRiskClusterCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RenewImageAuthorizeState请求参数结构体
 */
export interface RenewImageAuthorizeStateRequest {
    /**
      * 是否全部未授权镜像
      */
    AllImages: boolean;
    /**
      * 镜像ids
      */
    ImageIds?: Array<string>;
}
/**
 * CreateAssetImageRegistryScanTaskOneKey请求参数结构体
 */
export interface CreateAssetImageRegistryScanTaskOneKeyRequest {
    /**
      * 是否扫描全部镜像
      */
    All?: boolean;
    /**
      * 扫描的镜像列表
      */
    Images?: Array<ImageInfo>;
    /**
      * 扫描类型数组
      */
    ScanType?: Array<string>;
    /**
      * 扫描的镜像列表Id
      */
    Id?: Array<number>;
}
/**
 * ModifyEscapeEventStatus请求参数结构体
 */
export interface ModifyEscapeEventStatusRequest {
    /**
      * 处理事件ids
      */
    EventIdSet: Array<string>;
    /**
      * 标记事件的状态：EVENT_UNDEAL:未处理（取消忽略），EVENT_DEALED:已处理，EVENT_IGNORE:忽略，EVENT_DELETE：已删除
      */
    Status: string;
    /**
      * 备注
      */
    Remark?: string;
}
/**
 * DescribeAssetImageBindRuleInfo请求参数结构体
 */
export interface DescribeAssetImageBindRuleInfoRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"EventType","Values":[""]}]
EventType取值：
"FILE_ABNORMAL_READ" 访问控制
"MALICE_PROCESS_START" 恶意进程启动
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * 容器安全 主机镜像关联列表
 */
export interface ImageHost {
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 主机id
      */
    HostID: string;
}
/**
 * DescribeAssetContainerList返回参数结构体
 */
export interface DescribeAssetContainerListResponse {
    /**
      * 容器列表
      */
    List: Array<ContainerInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeVirusMonitorSetting返回参数结构体
 */
export interface DescribeVirusMonitorSettingResponse {
    /**
      * 是否开启实时监控
      */
    EnableScan: boolean;
    /**
      * 扫描全部路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanPathAll: boolean;
    /**
      * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanPathType: number;
    /**
      * 自选排除或扫描的地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanPath: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeContainerSecEventSummary请求参数结构体
 */
export declare type DescribeContainerSecEventSummaryRequest = null;
/**
 * DescribeAssetImageRegistrySummary返回参数结构体
 */
export interface DescribeAssetImageRegistrySummaryResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageAuthorizedInfo返回参数结构体
 */
export interface DescribeImageAuthorizedInfoResponse {
    /**
      * 总共有效的镜像授权数
      */
    TotalAuthorizedCnt: number;
    /**
      * 已使用镜像授权数
      */
    UsedAuthorizedCnt: number;
    /**
      * 已开启扫描镜像数
      */
    ScannedImageCnt: number;
    /**
      * 未开启扫描镜像数
      */
    NotScannedImageCnt: number;
    /**
      * 本地未开启扫描镜像数
      */
    NotScannedLocalImageCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAbnormalProcessEvents请求参数结构体
 */
export interface DescribeAbnormalProcessEventsRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * ModifyAbnormalProcessRuleStatus返回参数结构体
 */
export interface ModifyAbnormalProcessRuleStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeVirusList请求参数结构体
 */
export interface DescribeVirusListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>FileName - String - 是否必填：否 - 文件名称</li>
<li>FilePath - String - 是否必填：否 - 文件路径</li>
<li>VirusName - String - 是否必填：否 - 病毒名称</li>
<li>ContainerName- String - 是否必填：是 - 容器名称</li>
<li>ContainerId- string - 是否必填：否 - 容器id</li>
<li>ImageName- string - 是否必填：否 - 镜像名称</li>
<li>ImageId- string - 是否必填：否 - 镜像id</li>
<li>IsRealTime- int - 是否必填：否 - 过滤是否实时监控数据</li>
<li>TaskId- string - 是否必填：否 - 任务ID</li>
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 排序方式
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeComplianceAssetList请求参数结构体
 */
export interface DescribeComplianceAssetListRequest {
    /**
      * 资产类型列表。
      */
    AssetTypeSet?: Array<string>;
    /**
      * 起始偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回的数据量，默认为10，最大为100。
      */
    Limit?: number;
    /**
      * 查询过滤器
      */
    Filters?: Array<ComplianceFilters>;
}
/**
 * ModifyVirusScanSetting返回参数结构体
 */
export interface ModifyVirusScanSettingResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全镜像漏洞
 */
export interface ImagesVul {
    /**
      * 漏洞id
      */
    CVEID: string;
    /**
      * 漏洞名称
      */
    Name: string;
    /**
      * 组件
      */
    Component: string;
    /**
      * 版本
      */
    Version: string;
    /**
      * 分类
      */
    Category: string;
    /**
      * 分类2
      */
    CategoryType: string;
    /**
      * 风险等级
      */
    Level: number;
    /**
      * 描述
      */
    Des: string;
    /**
      * 解决方案
      */
    OfficialSolution: string;
    /**
      * 引用
      */
    Reference: string;
    /**
      * 防御方案
      */
    DefenseSolution: string;
    /**
      * 提交时间
      */
    SubmitTime: string;
    /**
      * CVSS V3分数
      */
    CVSSV3Score: number;
    /**
      * CVSS V3描述
      */
    CVSSV3Desc: string;
    /**
      * 是否是重点关注：true：是，false：不是
      */
    IsSuggest: boolean;
    /**
      * 修复版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    FixedVersions: string;
    /**
      * 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp"
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tag: Array<string>;
}
/**
 * ModifyVirusMonitorSetting请求参数结构体
 */
export interface ModifyVirusMonitorSettingRequest {
    /**
      * 是否开启定期扫描
      */
    EnableScan: boolean;
    /**
      * 扫描全部路径
      */
    ScanPathAll: boolean;
    /**
      * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径(扫描范围只能小于等于1)
      */
    ScanPathType: number;
    /**
      * 自选排除或扫描的地址
      */
    ScanPath?: Array<string>;
}
/**
 * ScanComplianceAssetsByPolicyItem请求参数结构体
 */
export interface ScanComplianceAssetsByPolicyItemRequest {
    /**
      * 指定的检测项的ID
      */
    CustomerPolicyItemId: number;
    /**
      * 要重新扫描的客户资产项ID的列表。
      */
    CustomerAssetIdSet: Array<number>;
}
/**
 * DescribeEscapeEventInfo返回参数结构体
 */
export interface DescribeEscapeEventInfoResponse {
    /**
      * 逃逸事件数组
      */
    EventSet: Array<EscapeEventInfo>;
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群资产返回的结构体
 */
export interface ClusterInfoItem {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 集群名字
      */
    ClusterName: string;
    /**
      * 集群版本
      */
    ClusterVersion: string;
    /**
      * 集群操作系统
      */
    ClusterOs: string;
    /**
      * 集群类型
      */
    ClusterType: string;
    /**
      * 集群节点数
      */
    ClusterNodeNum: number;
    /**
      * 集群区域
      */
    Region: string;
    /**
      * 监控组件的状态，为Defender_Uninstall、Defender_Normal、Defender_Error、Defender_Installing
      */
    DefenderStatus: string;
    /**
      * 集群状态
      */
    ClusterStatus: string;
    /**
      * 集群的检测模式，为Cluster_Normal或者Cluster_Actived.
      */
    ClusterCheckMode: string;
    /**
      * 是否自动定期检测
      */
    ClusterAutoCheck: boolean;
    /**
      * 防护容器部署失败原因，为UserDaemonSetNotReady时,和UnreadyNodeNum转成"N个节点防御容器为就绪"，其他错误直接展示
      */
    DefenderErrorReason: string;
    /**
      * 防御容器没有ready状态的节点数量
      */
    UnreadyNodeNum: number;
    /**
      * 严重风险检查项的数量
      */
    SeriousRiskCount: number;
    /**
      * 高风险检查项的数量
      */
    HighRiskCount: number;
    /**
      * 中风险检查项的数量
      */
    MiddleRiskCount: number;
    /**
      * 提示风险检查项的数量
      */
    HintRiskCount: number;
    /**
      * 检查失败原因
      */
    CheckFailReason: string;
    /**
      * 检查状态,为Task_Running, NoRisk, HasRisk, Uncheck, Task_Error
      */
    CheckStatus: string;
    /**
      * 任务创建时间,检查时间
      */
    TaskCreateTime: string;
}
/**
 * AddAssetImageRegistryRegistryDetail请求参数结构体
 */
export interface AddAssetImageRegistryRegistryDetailRequest {
    /**
      * 仓库名
      */
    Name: string;
    /**
      * 用户名
      */
    Username: string;
    /**
      * 密码
      */
    Password: string;
    /**
      * 仓库url
      */
    Url: string;
    /**
      * 仓库类型，列表：harbor
      */
    RegistryType: string;
    /**
      * 网络类型，列表：public（公网）
      */
    NetType: string;
    /**
      * 仓库版本
      */
    RegistryVersion?: string;
    /**
      * 区域，列表：default（默认）
      */
    RegistryRegion?: string;
    /**
      * 限速
      */
    SpeedLimit?: number;
    /**
      * 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1
      */
    Insecure?: number;
}
/**
 * DescribeAssetImageHostList请求参数结构体
 */
export interface DescribeAssetImageHostListRequest {
    /**
      * 过滤条件 支持ImageID,HostID
      */
    Filters?: Array<AssetFilters>;
}
/**
 * 容器运行时安全异常进程信息
 */
export interface AbnormalProcessEventInfo {
    /**
      * 进程目录
      */
    ProcessPath: string;
    /**
      * 事件类型，MALICE_PROCESS_START:恶意进程启动
      */
    EventType: string;
    /**
      * 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则
      */
    MatchRuleName: string;
    /**
      * 生成时间
      */
    FoundTime: string;
    /**
      * 容器名
      */
    ContainerName: string;
    /**
      * 镜像名
      */
    ImageName: string;
    /**
      * 动作执行结果，    BEHAVIOR_NONE: 无
    BEHAVIOR_ALERT: 告警
    BEHAVIOR_RELEASE：放行
    BEHAVIOR_HOLDUP_FAILED:拦截失败
    BEHAVIOR_HOLDUP_SUCCESSED：拦截失败
      */
    Behavior: string;
    /**
      * 状态，EVENT_UNDEAL:事件未处理
    EVENT_DEALED:事件已经处理
    EVENT_INGNORE：事件已经忽略
      */
    Status: string;
    /**
      * 事件记录的唯一id
      */
    Id: string;
    /**
      * 镜像id，用于跳转
      */
    ImageId: string;
    /**
      * 容器id，用于跳转
      */
    ContainerId: string;
    /**
      * 事件解决方案
      */
    Solution: string;
    /**
      * 事件详细描述
      */
    Description: string;
    /**
      * 命中策略id
      */
    MatchRuleId: string;
    /**
      * 命中规则行为：
RULE_MODE_RELEASE 放行
RULE_MODE_ALERT  告警
RULE_MODE_HOLDUP 拦截
      */
    MatchAction: string;
    /**
      * 命中规则进程信息
      */
    MatchProcessPath: string;
    /**
      * 规则是否存在
      */
    RuleExist: boolean;
    /**
      * 事件数量
      */
    EventCount: number;
    /**
      * 最近生成时间
      */
    LatestFoundTime: string;
    /**
      * 规则组Id
      */
    RuleId: string;
    /**
      * 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或  用户自定义的策略名字
      */
    MatchGroupName: string;
    /**
      * 命中规则等级，HIGH：高危，MIDDLE：中危，LOW：低危。
      */
    MatchRuleLevel: string;
}
/**
 * DescribeCompliancePeriodTaskList返回参数结构体
 */
export interface DescribeCompliancePeriodTaskListResponse {
    /**
      * 定时任务的总量。
      */
    TotalCount: number;
    /**
      * 定时任务信息的列表
      */
    PeriodTaskSet: Array<CompliancePeriodTask>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageScanSetting请求参数结构体
 */
export declare type DescribeAssetImageScanSettingRequest = null;
/**
 * 容器运行时安全，访问控制系统策略的子策略信息
 */
export interface AccessControlSystemChildRuleInfo {
    /**
      * 子策略Id
      */
    RuleId: string;
    /**
      * 策略模式,  RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
      */
    RuleMode: string;
    /**
      * 子策略状态，true为开启，false为关闭
      */
    IsEnable: boolean;
    /**
      * 子策略检测的入侵行为类型
CHANGE_CRONTAB：篡改计划任务
CHANGE_SYS_BIN：篡改系统程序
CHANGE_USRCFG：篡改用户配置
      */
    RuleType: string;
}
/**
 * 容器运行时安全访问控制事件信息
 */
export interface AccessControlEventInfo {
    /**
      * 进程名称
      */
    ProcessName: string;
    /**
      * 命中规则名称
      */
    MatchRuleName: string;
    /**
      * 生成时间
      */
    FoundTime: string;
    /**
      * 容器名
      */
    ContainerName: string;
    /**
      * 镜像名
      */
    ImageName: string;
    /**
      * 动作执行结果，   BEHAVIOR_NONE: 无
    BEHAVIOR_ALERT: 告警
    BEHAVIOR_RELEASE：放行
    BEHAVIOR_HOLDUP_FAILED:拦截失败
    BEHAVIOR_HOLDUP_SUCCESSED：拦截失败
      */
    Behavior: string;
    /**
      * 状态0:未处理  “EVENT_UNDEAL”:事件未处理
    "EVENT_DEALED":事件已经处理
    "EVENT_INGNORE"：事件已经忽略
      */
    Status: string;
    /**
      * 事件记录的唯一id
      */
    Id: string;
    /**
      * 文件名称
      */
    FileName: string;
    /**
      * 事件类型， FILE_ABNORMAL_READ:文件异常读取
      */
    EventType: string;
    /**
      * 镜像id, 用于跳转
      */
    ImageId: string;
    /**
      * 容器id, 用于跳转
      */
    ContainerId: string;
    /**
      * 事件解决方案
      */
    Solution: string;
    /**
      * 事件详细描述
      */
    Description: string;
    /**
      * 命中策略id
      */
    MatchRuleId: string;
    /**
      * 命中规则行为：
RULE_MODE_RELEASE 放行
RULE_MODE_ALERT  告警
RULE_MODE_HOLDUP 拦截
      */
    MatchAction: string;
    /**
      * 命中规则进程信息
      */
    MatchProcessPath: string;
    /**
      * 命中规则文件信息
      */
    MatchFilePath: string;
    /**
      * 文件路径，包含名字
      */
    FilePath: string;
    /**
      * 规则是否存在
      */
    RuleExist: boolean;
    /**
      * 事件数量
      */
    EventCount: number;
    /**
      * 最近生成时间
      */
    LatestFoundTime: string;
    /**
      * 规则组id
      */
    RuleId: string;
}
/**
 * DescribeClusterSummary返回参数结构体
 */
export interface DescribeClusterSummaryResponse {
    /**
      * 集群总数
      */
    TotalCount: number;
    /**
      * 有风险的集群数量
      */
    RiskClusterCount: number;
    /**
      * 未检查的集群数量
      */
    UncheckClusterCount: number;
    /**
      * 托管集群数量
      */
    ManagedClusterCount: number;
    /**
      * 独立集群数量
      */
    IndependentClusterCount: number;
    /**
      * 无风险的集群数量
      */
    NoRiskClusterCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeValueAddedSrvInfo请求参数结构体
 */
export declare type DescribeValueAddedSrvInfoRequest = null;
/**
 * DescribeCompliancePolicyItemAffectedSummary返回参数结构体
 */
export interface DescribeCompliancePolicyItemAffectedSummaryResponse {
    /**
      * 返回各检测项影响的资产的汇总信息。
      */
    PolicyItemSummary: CompliancePolicyItemSummary;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRiskSyscallStatus返回参数结构体
 */
export interface ModifyRiskSyscallStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时安全事件基本信息
 */
export interface RunTimeEventBaseInfo {
    /**
      * 事件唯一ID
      */
    EventId: string;
    /**
      * 事件发现时间
      */
    FoundTime: string;
    /**
      * 容器id
      */
    ContainerId: string;
    /**
      * 容器名称
      */
    ContainerName: string;
    /**
      * 镜像id
      */
    ImageId: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 节点名称
      */
    NodeName: string;
    /**
      * Pod名称
      */
    PodName: string;
    /**
      * 状态， “EVENT_UNDEAL”:事件未处理
    "EVENT_DEALED":事件已经处理
    "EVENT_INGNORE"：事件已经忽略
      */
    Status: string;
    /**
      * 事件名称：
宿主机文件访问逃逸、
Syscall逃逸、
MountNamespace逃逸、
程序提权逃逸、
特权容器启动逃逸、
敏感路径挂载
恶意进程启动
文件篡改
      */
    EventName: string;
    /**
      * 事件类型
   ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
   ESCAPE_SYSCALL:Syscall逃逸
      */
    EventType: string;
    /**
      * 事件数量
      */
    EventCount: number;
    /**
      * 最近生成时间
      */
    LatestFoundTime: string;
    /**
      * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostIP: string;
    /**
      * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientIP: string;
    /**
      * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerNetStatus: string;
    /**
      * 容器子状态
"AGENT_OFFLINE"       //Agent离线
"NODE_DESTROYED"      //节点已销毁
"CONTAINER_EXITED"    //容器已退出
"CONTAINER_DESTROYED" //容器已销毁
"SHARED_HOST"         // 容器与主机共享网络
"RESOURCE_LIMIT"      //隔离操作资源超限
"UNKNOW"              // 原因未知
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerNetSubStatus: string;
    /**
      * 容器隔离操作来源
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerIsolateOperationSrc: string;
}
/**
 * DescribeReverseShellWhiteLists返回参数结构体
 */
export interface DescribeReverseShellWhiteListsResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 白名单信息列表
      */
    WhiteListSet: Array<ReverseShellWhiteListBaseInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAssetImageRegistryScanStopOneKey请求参数结构体
 */
export interface ModifyAssetImageRegistryScanStopOneKeyRequest {
    /**
      * 是否扫描全部镜像
      */
    All?: boolean;
    /**
      * 扫描的镜像列表
      */
    Images?: Array<ImageInfo>;
    /**
      * 扫描的镜像列表Id
      */
    Id?: Array<number>;
}
/**
 * DescribeExportJobResult请求参数结构体
 */
export interface DescribeExportJobResultRequest {
    /**
      * CreateExportComplianceStatusListJob返回的JobId字段的值
      */
    JobId: string;
}
/**
 * 基本镜像信息
 */
export interface ImageInfo {
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 镜像tag
      */
    ImageTag: string;
    /**
      * 强制扫描
      */
    Force: string;
    /**
      * 镜像id
      */
    ImageDigest?: string;
    /**
      * 仓库类型
      */
    RegistryType?: string;
    /**
      * 镜像仓库地址
      */
    ImageRepoAddress?: string;
    /**
      * 实例id
      */
    InstanceId?: string;
}
/**
 * DescribeAffectedWorkloadList返回参数结构体
 */
export interface DescribeAffectedWorkloadListResponse {
    /**
      * 受影响的workload列表数量
      */
    TotalCount: number;
    /**
      * 受影响的workload列表
      */
    AffectedWorkloadList: Array<AffectedWorkloadItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateComplianceTask返回参数结构体
 */
export interface CreateComplianceTaskResponse {
    /**
      * 返回创建的合规检查任务的ID。
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时安全事件趋势信息
 */
export interface ImageRiskTendencyInfo {
    /**
      * 趋势列表
      */
    ImageRiskSet: Array<RunTimeTendencyInfo>;
    /**
      * 风险类型：
IRT_VULNERABILITY : 安全漏洞
IRT_MALWARE_VIRUS: 木马病毒
IRT_RISK:敏感信息
      */
    ImageRiskType: string;
}
/**
 * ModifyAsset请求参数结构体
 */
export interface ModifyAssetRequest {
    /**
      * 全部同步
      */
    All?: boolean;
    /**
      * 要同步的主机列表 两个参数必选一个 All优先
      */
    Hosts?: Array<string>;
}
/**
 * DescribeRiskList请求参数结构体
 */
export interface DescribeRiskListRequest {
    /**
      * 要查询的集群ID，如果不指定，则查询用户所有的风险项
      */
    ClusterId?: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 每次查询的最大记录数量
      */
    Limit?: number;
    /**
      * Name - String
Name 可取值：RiskLevel风险等级, RiskTarget检查对象，风险对象,RiskType风险类别,RiskAttribute检测项所属的风险类型,Name
      */
    Filters?: Array<ComplianceFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * ModifyAccessControlStatus返回参数结构体
 */
export interface ModifyAccessControlStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器网络信息
 */
export interface ContainerNetwork {
    /**
      * endpoint id
      */
    EndpointID: string;
    /**
      * 模式:bridge
      */
    Mode: string;
    /**
      * 网络名称
      */
    Name: string;
    /**
      * 网络ID
      */
    NetworkID: string;
    /**
      * 网关
      */
    Gateway: string;
    /**
      * IPV4地址
      */
    Ipv4: string;
    /**
      * IPV6地址
      */
    Ipv6: string;
    /**
      * MAC 地址
      */
    MAC: string;
}
/**
 * DescribeAssetAppServiceList请求参数结构体
 */
export interface DescribeAssetAppServiceListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Keywords- String - 是否必填：否 - 模糊查询可选字段</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * RemoveAssetImageRegistryRegistryDetail请求参数结构体
 */
export interface RemoveAssetImageRegistryRegistryDetailRequest {
    /**
      * 仓库唯一id
      */
    RegistryId: number;
}
/**
 * ModifyVirusScanSetting请求参数结构体
 */
export interface ModifyVirusScanSettingRequest {
    /**
      * 是否开启定期扫描
      */
    EnableScan: boolean;
    /**
      * 检测周期每隔多少天(1|3|7)
      */
    Cycle: number;
    /**
      * 扫描开始时间
      */
    BeginScanAt: string;
    /**
      * 扫描全部路径(true:全选,false:自选)
      */
    ScanPathAll: boolean;
    /**
      * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
      */
    ScanPathType: number;
    /**
      * 超时时长(5~24h)
      */
    Timeout: number;
    /**
      * 扫描范围0容器1主机节点
      */
    ScanRangeType: number;
    /**
      * true 全选，false 自选
      */
    ScanRangeAll: boolean;
    /**
      * 自选扫描范围的容器id或者主机id 根据ScanRangeType决定
      */
    ScanIds?: Array<string>;
    /**
      * 扫描路径
      */
    ScanPath?: Array<string>;
}
/**
 * DescribeAssetDBServiceList请求参数结构体
 */
export interface DescribeAssetDBServiceListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Keywords- String - 是否必填：否 - 模糊查询可选字段</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * DescribeProVersionInfo返回参数结构体
 */
export interface DescribeProVersionInfoResponse {
    /**
      * 专业版开始时间，补充购买时才不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 专业版结束时间，补充购买时才不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 需购买的机器核数
      */
    CoresCnt: number;
    /**
      * 弹性计费上限
      */
    MaxPostPayCoresCnt: number;
    /**
      * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceId: string;
    /**
      * 购买状态
待购: Pending
已购: Normal
隔离: Isolate
      */
    BuyStatus: string;
    /**
      * 是否曾经购买过(false:未曾 true:曾经购买过)
      */
    IsPurchased: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddEditAbnormalProcessRule返回参数结构体
 */
export interface AddEditAbnormalProcessRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryList请求参数结构体
 */
export interface DescribeAssetImageRegistryListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 过滤字段
IsAuthorized是否授权，取值全部all，未授权0，已授权1
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式，asc，desc
      */
    Order?: string;
    /**
      * 是否仅展示各repository最新的镜像, 默认为false
      */
    OnlyShowLatest?: boolean;
}
/**
 * CreateCheckComponent返回参数结构体
 */
export interface CreateCheckComponentResponse {
    /**
      * "InstallSucc"表示安装成功，"InstallFailed"表示安装失败
      */
    InstallResult: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageRegistryTimingScanTask请求参数结构体
 */
export declare type DescribeImageRegistryTimingScanTaskRequest = null;
/**
 * DescribeRiskSyscallWhiteListDetail返回参数结构体
 */
export interface DescribeRiskSyscallWhiteListDetailResponse {
    /**
      * 白名单基本信息
      */
    WhiteListDetailInfo: RiskSyscallWhiteListInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReverseShellWhiteLists请求参数结构体
 */
export interface DescribeReverseShellWhiteListsRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * ScanComplianceAssets返回参数结构体
 */
export interface ScanComplianceAssetsResponse {
    /**
      * 返回重新检测任务的ID。
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateComplianceTask请求参数结构体
 */
export interface CreateComplianceTaskRequest {
    /**
      * 指定要扫描的资产类型列表。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
AssetTypeSet, PolicySetId, PeriodTaskId三个参数，必须要给其中一个参数填写有效的值。
      */
    AssetTypeSet?: Array<string>;
    /**
      * 按照策略集ID指定的策略执行合规检查。
      */
    PolicySetId?: number;
    /**
      * 按照定时任务ID指定的策略执行合规检查。
      */
    PeriodTaskId?: number;
}
/**
 * DescribeReverseShellWhiteListDetail返回参数结构体
 */
export interface DescribeReverseShellWhiteListDetailResponse {
    /**
      * 事件基本信息
      */
    WhiteListDetailInfo: ReverseShellWhiteListInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageVulListExport返回参数结构体
 */
export interface DescribeAssetImageVulListExportResponse {
    /**
      * excel文件下载地址
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryRiskListExport请求参数结构体
 */
export interface DescribeAssetImageRegistryRiskListExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 镜像信息
      */
    ImageInfo?: ImageInfo;
    /**
      * 镜像标识Id
      */
    Id?: number;
}
/**
 * 运行时容器逃逸事件描述信息
 */
export interface EscapeEventDescription {
    /**
      * 事件规则
      */
    Description: string;
    /**
      * 解决方案
      */
    Solution: string;
    /**
      * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationTime: string;
}
/**
 * DescribeAssetImageDetail返回参数结构体
 */
export interface DescribeAssetImageDetailResponse {
    /**
      * 镜像ID
      */
    ImageID: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 镜像大小
      */
    Size: number;
    /**
      * 关联主机个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostCnt: number;
    /**
      * 关联容器个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerCnt: number;
    /**
      * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanTime: string;
    /**
      * 漏洞个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulCnt: number;
    /**
      * 风险行为数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskCnt: number;
    /**
      * 敏感信息数
注意：此字段可能返回 null，表示取不到有效值。
      */
    SensitiveInfoCnt: number;
    /**
      * 是否信任镜像
      */
    IsTrustImage: boolean;
    /**
      * 镜像系统
      */
    OsName: string;
    /**
      * agent镜像扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    AgentError: string;
    /**
      * 后端镜像扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanError: string;
    /**
      * 系统架构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Architecture: string;
    /**
      * 作者
注意：此字段可能返回 null，表示取不到有效值。
      */
    Author: string;
    /**
      * 构建历史
注意：此字段可能返回 null，表示取不到有效值。
      */
    BuildHistory: string;
    /**
      * 木马扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVirusProgress: number;
    /**
      * 漏洞扫进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVulProgress: number;
    /**
      * 敏感信息扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRiskProgress: number;
    /**
      * 木马扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVirusError: string;
    /**
      * 漏洞扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVulError: string;
    /**
      * 敏感信息错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRiskError: string;
    /**
      * 镜像扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanStatus: string;
    /**
      * 木马病毒数
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusCnt: number;
    /**
      * 镜像扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 剩余扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    RemainScanTime: number;
    /**
      * 授权为：1，未授权为：0
      */
    IsAuthorized: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAssetImageRegistryScanTaskOneKey返回参数结构体
 */
export interface CreateAssetImageRegistryScanTaskOneKeyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 异常进程系统策略的子策略信息
 */
export interface AbnormalProcessSystemChildRuleInfo {
    /**
      * 子策略Id
      */
    RuleId: string;
    /**
      * 子策略状态，true为开启，false为关闭
      */
    IsEnable: boolean;
    /**
      * 策略模式,  RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
      */
    RuleMode: string;
    /**
      * 子策略检测的行为类型
PROXY_TOOL： 代理软件
TRANSFER_CONTROL：横向渗透
ATTACK_CMD： 恶意命令
REVERSE_SHELL：反弹shell
FILELESS：无文件程序执行
RISK_CMD：高危命令
ABNORMAL_CHILD_PROC: 敏感服务异常子进程启动
      */
    RuleType: string;
    /**
      * 威胁等级，HIGH:高，MIDDLE:中，LOW:低
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleLevel?: string;
}
/**
 * DescribeAssetImageVulListExport请求参数结构体
 */
export interface DescribeAssetImageVulListExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Name- String - 是否必填：否 - 漏洞名称名称筛选，</li>
<li>Level - String - 是否必填：否 - 风险等级  1,2,3,4</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * DescribeExportJobResult返回参数结构体
 */
export interface DescribeExportJobResultResponse {
    /**
      * 导出的状态。取值为, SUCCESS:成功、FAILURE:失败，RUNNING: 进行中。
      */
    ExportStatus: string;
    /**
      * 返回下载URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadURL: string;
    /**
      * 当ExportStatus为RUNNING时，返回导出进度。0~100范围的浮点数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExportProgress: number;
    /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailureMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 反弹shell白名单信息
 */
export interface ReverseShellWhiteListBaseInfo {
    /**
      * 白名单id
      */
    Id: string;
    /**
      * 镜像数量
      */
    ImageCount: number;
    /**
      * 连接进程名字
      */
    ProcessName: string;
    /**
      * 目标地址ip
      */
    DstIp: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 目标端口
      */
    DstPort: string;
    /**
      * 是否是全局白名单，true全局
      */
    IsGlobal: boolean;
    /**
      * 镜像id数组，为空代表全部
      */
    ImageIds: Array<string>;
}
/**
 * 容器运行时，访问控制策略信息
 */
export interface AccessControlRuleInfo {
    /**
      * 开关,true:开启，false:禁用
      */
    IsEnable: boolean;
    /**
      * 生效惊现id，空数组代表全部镜像
      */
    ImageIds: Array<string>;
    /**
      * 用户策略的子策略数组
      */
    ChildRules: Array<AccessControlChildRuleInfo>;
    /**
      * 策略名字
      */
    RuleName: string;
    /**
      * 策略id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId?: string;
    /**
      * 系统策略的子策略数组
      */
    SystemChildRules?: Array<AccessControlSystemChildRuleInfo>;
    /**
      * 是否是系统默认策略
      */
    IsDefault?: boolean;
}
/**
 * DescribeAssetHostList返回参数结构体
 */
export interface DescribeAssetHostListResponse {
    /**
      * 主机列表
      */
    List: Array<HostInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全镜像仓库列表
 */
export interface ImageRepoInfo {
    /**
      * 镜像Digest
      */
    ImageDigest: string;
    /**
      * 镜像仓库地址
      */
    ImageRepoAddress: string;
    /**
      * 仓库类型
      */
    RegistryType: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 镜像版本
      */
    ImageTag: string;
    /**
      * 镜像大小
      */
    ImageSize: number;
    /**
      * 最近扫描时间
      */
    ScanTime: string;
    /**
      * 扫描状态
      */
    ScanStatus: string;
    /**
      * 安全漏洞数
      */
    VulCnt: number;
    /**
      * 木马病毒数
      */
    VirusCnt: number;
    /**
      * 风险行为数
      */
    RiskCnt: number;
    /**
      * 敏感信息数
      */
    SentiveInfoCnt: number;
    /**
      * 是否可信镜像
      */
    IsTrustImage: boolean;
    /**
      * 镜像系统
      */
    OsName: string;
    /**
      * 木马扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVirusError: string;
    /**
      * 漏洞扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVulError: string;
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 高危扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRiskError: string;
    /**
      * 敏感信息扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVirusProgress: number;
    /**
      * 木马扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVulProgress: number;
    /**
      * 漏洞扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRiskProgress: number;
    /**
      * 剩余扫描时间秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRemainTime: number;
    /**
      * cve扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    CveStatus: string;
    /**
      * 高危扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskStatus: string;
    /**
      * 木马扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusStatus: string;
    /**
      * 总进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Progress: number;
    /**
      * 授权状态
      */
    IsAuthorized: number;
    /**
      * 仓库区域
      */
    RegistryRegion: string;
    /**
      * 列表id
      */
    Id: number;
    /**
      * 镜像Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId: string;
    /**
      * 镜像创建的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageCreateTime: string;
    /**
      * 是否为镜像的最新版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsLatestImage: boolean;
}
/**
 * CreateAssetImageRegistryScanTask返回参数结构体
 */
export interface CreateAssetImageRegistryScanTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全端口信息列表
 */
export interface PortInfo {
    /**
      * 类型
      */
    Type: string;
    /**
      * 对外ip
      */
    PublicIP: string;
    /**
      * 主机端口
      */
    PublicPort: number;
    /**
      * 容器端口
      */
    ContainerPort: number;
    /**
      * 容器Pid
      */
    ContainerPID: number;
    /**
      * 容器名
      */
    ContainerName: string;
    /**
      * 主机id
      */
    HostID: string;
    /**
      * 主机ip
      */
    HostIP: string;
    /**
      * 进程名称
      */
    ProcessName: string;
    /**
      * 容器内监听地址
      */
    ListenContainer: string;
    /**
      * 容器外监听地址
      */
    ListenHost: string;
    /**
      * 运行账号
      */
    RunAs: string;
    /**
      * 主机名称
      */
    HostName: string;
    /**
      * 外网ip
      */
    PublicIp: string;
}
/**
 * DescribeAssetImageRegistrySummary请求参数结构体
 */
export declare type DescribeAssetImageRegistrySummaryRequest = null;
/**
 * DescribeTaskResultSummary返回参数结构体
 */
export interface DescribeTaskResultSummaryResponse {
    /**
      * 严重风险影响的节点数量,返回7天数据
      */
    SeriousRiskNodeCount: Array<number>;
    /**
      * 高风险影响的节点的数量,返回7天数据
      */
    HighRiskNodeCount: Array<number>;
    /**
      * 中风险检查项的节点数量,返回7天数据
      */
    MiddleRiskNodeCount: Array<number>;
    /**
      * 提示风险检查项的节点数量,返回7天数据
      */
    HintRiskNodeCount: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全主机列表
 */
export interface HostInfo {
    /**
      * 主机id
      */
    HostID: string;
    /**
      * 主机ip即内网ip
      */
    HostIP: string;
    /**
      * 主机名称
      */
    HostName: string;
    /**
      * 业务组
      */
    Group: string;
    /**
      * docker 版本
      */
    DockerVersion: string;
    /**
      * docker 文件系统类型
      */
    DockerFileSystemDriver: string;
    /**
      * 镜像个数
      */
    ImageCnt: number;
    /**
      * 容器个数
      */
    ContainerCnt: number;
    /**
      * agent运行状态
      */
    Status: string;
    /**
      * 是否是Containerd
      */
    IsContainerd: boolean;
    /**
      * 主机来源：["CVM", "ECM", "LH", "BM"]  中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；
      */
    MachineType: string;
    /**
      * 外网ip
      */
    PublicIp: string;
    /**
      * 主机uuid
      */
    Uuid: string;
    /**
      * 主机实例ID
      */
    InstanceID: string;
    /**
      * 地域ID
      */
    RegionID: number;
}
/**
 * DescribeVirusScanTimeoutSetting请求参数结构体
 */
export interface DescribeVirusScanTimeoutSettingRequest {
    /**
      * 设置类型0一键检测，1定时检测
      */
    ScanType: number;
}
/**
 * ModifyAssetImageScanStop请求参数结构体
 */
export interface ModifyAssetImageScanStopRequest {
    /**
      * 任务id；任务id，镜像id和根据过滤条件筛选三选一。
      */
    TaskID?: string;
    /**
      * 镜像id；任务id，镜像id和根据过滤条件筛选三选一。
      */
    Images?: Array<string>;
    /**
      * 根据过滤条件筛选出镜像；任务id，镜像id和根据过滤条件筛选三选一。
      */
    Filters?: Array<AssetFilters>;
    /**
      * 根据过滤条件筛选出镜像，再排除个别镜像
      */
    ExcludeImageIds?: string;
}
/**
 * CreateRefreshTask请求参数结构体
 */
export declare type CreateRefreshTaskRequest = null;
/**
 * DescribeAssetImageRiskListExport返回参数结构体
 */
export interface DescribeAssetImageRiskListExportResponse {
    /**
      * excel文件下载地址
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessControlEvents请求参数结构体
 */
export interface DescribeAccessControlEventsRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeAccessControlRuleDetail请求参数结构体
 */
export interface DescribeAccessControlRuleDetailRequest {
    /**
      * 策略唯一id
      */
    RuleId?: string;
    /**
      * 镜像id, 仅仅在事件加白的时候使用
      */
    ImageId?: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * ExportVirusList请求参数结构体
 */
export interface ExportVirusListRequest {
    /**
      * 过滤条件。
<li>FileName - String - 是否必填：否 - 文件名称</li>
<li>FilePath - String - 是否必填：否 - 文件路径</li>
<li>VirusName - String - 是否必填：否 - 病毒名称</li>
<li>ContainerName- String - 是否必填：是 - 容器名称</li>
<li>ContainerId- string - 是否必填：否 - 容器id</li>
<li>ImageName- string - 是否必填：否 - 镜像名称</li>
<li>ImageId- string - 是否必填：否 - 镜像id</li>
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 排序方式
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 导出字段
      */
    ExportField?: Array<string>;
}
/**
 * 镜像风险详情
 */
export interface ImageRiskInfo {
    /**
      * 行为
      */
    Behavior: number;
    /**
      * 类型
      */
    Type: number;
    /**
      * 级别
      */
    Level: number;
    /**
      * 详情
      */
    Desc: string;
    /**
      * 解决方案
      */
    InstructionContent: string;
}
/**
 * DeleteReverseShellWhiteLists返回参数结构体
 */
export interface DeleteReverseShellWhiteListsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示主机资产专属的详情。
 */
export interface ComplianceHostDetailInfo {
    /**
      * 主机上的Docker版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DockerVersion: string;
    /**
      * 主机上的K8S的版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    K8SVersion: string;
}
/**
 * 容器运行时安全，访问控制子策略信息
 */
export interface AccessControlChildRuleInfo {
    /**
      * 策略模式,  RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
      */
    RuleMode: string;
    /**
      * 进程路径
      */
    ProcessPath: string;
    /**
      * 被访问文件路径，仅仅在访问控制生效
      */
    TargetFilePath: string;
    /**
      * 子策略id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId?: string;
}
/**
 * DescribeRiskSyscallNames返回参数结构体
 */
export interface DescribeRiskSyscallNamesResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 系统调用名称列表
      */
    SyscallNames: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddEditReverseShellWhiteList返回参数结构体
 */
export interface AddEditReverseShellWhiteListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAbnormalProcessEvents返回参数结构体
 */
export interface DescribeAbnormalProcessEventsResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 异常进程数组
      */
    EventSet: Array<AbnormalProcessEventInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InitializeUserComplianceEnvironment返回参数结构体
 */
export interface InitializeUserComplianceEnvironmentResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetCheckMode请求参数结构体
 */
export interface SetCheckModeRequest {
    /**
      * 要设置的集群ID列表
      */
    ClusterIds: Array<string>;
    /**
      * 集群检查模式(正常模式"Cluster_Normal"、主动模式"Cluster_Actived"、不设置"Cluster_Unset")
      */
    ClusterCheckMode?: string;
    /**
      * 0不设置 1打开 2关闭
      */
    ClusterAutoCheck?: number;
}
/**
 * DescribeVirusTaskList返回参数结构体
 */
export interface DescribeVirusTaskListResponse {
    /**
      * 文件查杀列表
      */
    List: Array<VirusTaskInfo>;
    /**
      * 总数量(容器任务数量)
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetHostDetail返回参数结构体
 */
export interface DescribeAssetHostDetailResponse {
    /**
      * 云镜uuid
      */
    UUID: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 主机名
      */
    HostName: string;
    /**
      * 主机分组
      */
    Group: string;
    /**
      * 主机IP
      */
    HostIP: string;
    /**
      * 操作系统
      */
    OsName: string;
    /**
      * agent版本
      */
    AgentVersion: string;
    /**
      * 内核版本
      */
    KernelVersion: string;
    /**
      * docker版本
      */
    DockerVersion: string;
    /**
      * docker api版本
      */
    DockerAPIVersion: string;
    /**
      * docker go 版本
      */
    DockerGoVersion: string;
    /**
      * docker 文件系统类型
      */
    DockerFileSystemDriver: string;
    /**
      * docker root 目录
      */
    DockerRootDir: string;
    /**
      * 镜像数
      */
    ImageCnt: number;
    /**
      * 容器数
      */
    ContainerCnt: number;
    /**
      * k8s IP
      */
    K8sMasterIP: string;
    /**
      * k8s version
      */
    K8sVersion: string;
    /**
      * kube proxy
      */
    KubeProxyVersion: string;
    /**
      * "UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中
      */
    Status: string;
    /**
      * 是否Containerd
      */
    IsContainerd: boolean;
    /**
      * 主机来源;"TENCENTCLOUD":"腾讯云服务器","OTHERCLOUD":"非腾讯云服务器"
      */
    MachineType: string;
    /**
      * 外网ip
      */
    PublicIp: string;
    /**
      * 主机实例ID
      */
    InstanceID: string;
    /**
      * 地域ID
      */
    RegionID: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAffectedNodeList返回参数结构体
 */
export interface DescribeAffectedNodeListResponse {
    /**
      * 受影响的节点总数
      */
    TotalCount: number;
    /**
      * 受影响的节点列表
      */
    AffectedNodeList: Array<AffectedNodeItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterSummary请求参数结构体
 */
export declare type DescribeClusterSummaryRequest = null;
/**
 * DescribeAbnormalProcessRulesExport返回参数结构体
 */
export interface DescribeAbnormalProcessRulesExportResponse {
    /**
      * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEscapeEventDetail返回参数结构体
 */
export interface DescribeEscapeEventDetailResponse {
    /**
      * 事件基本信息
      */
    EventBaseInfo: RunTimeEventBaseInfo;
    /**
      * 进程信息
      */
    ProcessInfo: ProcessDetailInfo;
    /**
      * 事件描述
      */
    EventDetail: EscapeEventDescription;
    /**
      * 父进程信息
      */
    ParentProcessInfo: ProcessBaseInfo;
    /**
      * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessInfo: ProcessBaseInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAccessControlRules返回参数结构体
 */
export interface DeleteAccessControlRulesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RenewImageAuthorizeState返回参数结构体
 */
export interface RenewImageAuthorizeStateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEscapeRuleInfo请求参数结构体
 */
export declare type DescribeEscapeRuleInfoRequest = null;
/**
 * DescribeComplianceWhitelistItemList返回参数结构体
 */
export interface DescribeComplianceWhitelistItemListResponse {
    /**
      * 白名单项的列表。
      */
    WhitelistItemSet: Array<ComplianceWhitelistItem>;
    /**
      * 白名单项的总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeVirusSummary返回参数结构体
 */
export interface DescribeVirusSummaryResponse {
    /**
      * 最近的一次扫描任务id
      */
    TaskId: string;
    /**
      * 木马影响容器个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskContainerCnt: number;
    /**
      * 待处理风险个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskCnt: number;
    /**
      * 病毒库更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusDataBaseModifyTime: string;
    /**
      * 木马影响容器个数较昨日增长
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskContainerIncrease: number;
    /**
      * 待处理风险个数较昨日增长
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskIncrease: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateImageRegistryTimingScanTask请求参数结构体
 */
export interface UpdateImageRegistryTimingScanTaskRequest {
    /**
      * 定时扫描周期
      */
    ScanPeriod: number;
    /**
      * 定时扫描开关
      */
    Enable: boolean;
    /**
      * 定时扫描的时间
      */
    ScanTime: string;
    /**
      * 扫描木马类型数组
      */
    ScanType?: Array<string>;
    /**
      * 扫描镜像
      */
    Images?: Array<ImageInfo>;
    /**
      * 是否扫描所有
      */
    All?: boolean;
    /**
      * 扫描镜像Id
      */
    Id?: Array<number>;
}
/**
 * DescribeSecEventsTendency请求参数结构体
 */
export interface DescribeSecEventsTendencyRequest {
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
}
/**
 * DescribeContainerSecEventSummary返回参数结构体
 */
export interface DescribeContainerSecEventSummaryResponse {
    /**
      * 未处理逃逸事件
      */
    UnhandledEscapeCnt: number;
    /**
      * 未处理反弹shell事件
      */
    UnhandledReverseShellCnt: number;
    /**
      * 未处理高危系统调用
      */
    UnhandledRiskSyscallCnt: number;
    /**
      * 未处理异常进程
      */
    UnhandledAbnormalProcessCnt: number;
    /**
      * 未处理文件篡改
      */
    UnhandledFileCnt: number;
    /**
      * 未处理木马事件
      */
    UnhandledVirusEventCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetContainerDetail请求参数结构体
 */
export interface DescribeAssetContainerDetailRequest {
    /**
      * 容器id
      */
    ContainerId: string;
}
/**
 * ModifyAccessControlStatus请求参数结构体
 */
export interface ModifyAccessControlStatusRequest {
    /**
      * 处理事件ids
      */
    EventIdSet: Array<string>;
    /**
      * 标记事件的状态，
EVENT_DEALED:事件已经处理
     EVENT_INGNORE：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
      */
    Status: string;
    /**
      * 备注事件信息
      */
    Remark?: string;
}
/**
 * ScanComplianceScanFailedAssets请求参数结构体
 */
export interface ScanComplianceScanFailedAssetsRequest {
    /**
      * 要重新扫描的客户资产项ID的列表。
      */
    CustomerAssetIdSet: Array<number>;
}
/**
 * ModifyCompliancePeriodTask返回参数结构体
 */
export interface ModifyCompliancePeriodTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全运行时高危系统调用信息
 */
export interface RiskSyscallEventInfo {
    /**
      * 进程名称
      */
    ProcessName: string;
    /**
      * 进程路径
      */
    ProcessPath: string;
    /**
      * 镜像id
      */
    ImageId: string;
    /**
      * 容器id
      */
    ContainerId: string;
    /**
      * 镜像名
      */
    ImageName: string;
    /**
      * 容器名
      */
    ContainerName: string;
    /**
      * 生成时间
      */
    FoundTime: string;
    /**
      * 事件解决方案
      */
    Solution: string;
    /**
      * 事件详细描述
      */
    Description: string;
    /**
      * 系统调用名称
      */
    SyscallName: string;
    /**
      * 状态，EVENT_UNDEAL:事件未处理
    EVENT_DEALED:事件已经处理
    EVENT_INGNORE：事件已经忽略
    EVENT_ADD_WHITE：时间已经加白
      */
    Status: string;
    /**
      * 事件id
      */
    EventId: string;
    /**
      * 节点名称
      */
    NodeName: string;
    /**
      * pod(实例)的名字
      */
    PodName: string;
    /**
      * 备注
      */
    Remark: string;
    /**
      * 系统监控名称是否存在
      */
    RuleExist: boolean;
    /**
      * 事件数量
      */
    EventCount: number;
    /**
      * 最近生成时间
      */
    LatestFoundTime: string;
}
/**
 * 表示一条集群安全检测项的详细信息
 */
export interface ClusterCheckItem {
    /**
      * 唯一的检测项的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckItemId: number;
    /**
      * 风险项的名称
      */
    Name: string;
    /**
      * 检测项详细描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ItemDetail: string;
    /**
      * 威胁等级。严重Serious,高危High,中危Middle,提示Hint
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskLevel: string;
    /**
      * 检查对象、风险对象.Runc,Kubelet,Containerd,Pods
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskTarget: string;
    /**
      * 风险类别,漏洞风险CVERisk,配置风险ConfigRisk
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskType: string;
    /**
      * 检测项所属的风险类型,权限提升:PrivilegePromotion,拒绝服务:RefuseService,目录穿越:DirectoryEscape,未授权访问:UnauthorizedAccess,权限许可和访问控制问题:PrivilegeAndAccessControl,敏感信息泄露:SensitiveInfoLeak
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskAttribute: string;
    /**
      * 风险特征,Tag.存在EXP:ExistEXP,存在POD:ExistPOC,无需重启:NoNeedReboot, 服务重启:ServerRestart,远程信息泄露:RemoteInfoLeak,远程拒绝服务:RemoteRefuseService,远程利用:RemoteExploit,远程执行:RemoteExecute
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskProperty: string;
    /**
      * CVE编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    CVENumber: string;
    /**
      * 披露时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscoverTime: string;
    /**
      * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    Solution: string;
    /**
      * CVSS信息,用于画图
注意：此字段可能返回 null，表示取不到有效值。
      */
    CVSS: string;
    /**
      * CVSS分数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CVSSScore: string;
    /**
      * 参考连接
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelateLink: string;
    /**
      * 影响类型，为Node或者Workload
注意：此字段可能返回 null，表示取不到有效值。
      */
    AffectedType: string;
    /**
      * 受影响的版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AffectedVersion: string;
}
/**
 * DescribeAssetImageVulList返回参数结构体
 */
export interface DescribeAssetImageVulListResponse {
    /**
      * 镜像漏洞列表
      */
    List: Array<ImagesVul>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全镜像漏洞信息
 */
export interface ImageVul {
    /**
      * 漏洞id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CVEID: string;
    /**
      * 观点验证程序id
注意：此字段可能返回 null，表示取不到有效值。
      */
    POCID: string;
    /**
      * 漏洞名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 涉及组件信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Components: Array<ComponentsInfo>;
    /**
      * 分类
注意：此字段可能返回 null，表示取不到有效值。
      */
    Category: string;
    /**
      * 分类2
注意：此字段可能返回 null，表示取不到有效值。
      */
    CategoryType: string;
    /**
      * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Level: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Des: string;
    /**
      * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    OfficialSolution: string;
    /**
      * 引用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reference: string;
    /**
      * 防御方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    DefenseSolution: string;
    /**
      * 提交时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubmitTime: string;
    /**
      * Cvss分数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CvssScore: string;
    /**
      * Cvss信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CvssVector: string;
    /**
      * 是否建议修复
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsSuggest: string;
    /**
      * 修复版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    FixedVersions: string;
    /**
      * 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp"
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tag: Array<string>;
    /**
      * 组件名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Component: string;
    /**
      * 组件版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
}
/**
 * 容器安全
描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface AssetFilters {
    /**
      * 过滤键的名称
      */
    Name: string;
    /**
      * 一个或者多个过滤值。
      */
    Values: Array<string>;
    /**
      * 是否模糊查询
      */
    ExactMatch?: boolean;
}
/**
 * DescribePostPayDetail返回参数结构体
 */
export interface DescribePostPayDetailResponse {
    /**
      * 弹性计费扣费详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    SoftQuotaDayDetail: Array<SoftQuotaDayInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageScanStatus请求参数结构体
 */
export interface DescribeAssetImageScanStatusRequest {
    /**
      * 任务id
      */
    TaskID?: string;
}
/**
 * DescribeCheckItemList返回参数结构体
 */
export interface DescribeCheckItemListResponse {
    /**
      * 检查项详情数组
      */
    ClusterCheckItems: Array<ClusterCheckItem>;
    /**
      * 检查项总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示检测失败的资产的信息。
 */
export interface ComplianceScanFailedAsset {
    /**
      * 客户资产的ID。
      */
    CustomerAssetId: number;
    /**
      * 资产类别。
      */
    AssetType: string;
    /**
      * 检测状态
CHECK_INIT, 待检测
CHECK_RUNNING, 检测中
CHECK_FINISHED, 检测完成
CHECK_FAILED, 检测失败
      */
    CheckStatus: string;
    /**
      * 资产的名称。
      */
    AssetName: string;
    /**
      * 资产检测失败的原因。
      */
    FailureReason: string;
    /**
      * 检测失败的处理建议。
      */
    Suggestion: string;
    /**
      * 检测的时间。
      */
    CheckTime: string;
}
/**
 * ScanComplianceAssets请求参数结构体
 */
export interface ScanComplianceAssetsRequest {
    /**
      * 要重新扫描的客户资产项ID的列表。
      */
    CustomerAssetIdSet: Array<number>;
}
/**
 * DescribeAbnormalProcessRuleDetail返回参数结构体
 */
export interface DescribeAbnormalProcessRuleDetailResponse {
    /**
      * 异常进程策略详细信息
      */
    RuleDetail: AbnormalProcessRuleInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyVirusFileStatus请求参数结构体
 */
export interface ModifyVirusFileStatusRequest {
    /**
      * 处理事件id
      */
    EventIdSet: Array<string>;
    /**
      * 标记事件的状态，
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
     EVENT_PENDING: 事件待处理
      */
    Status: string;
    /**
      * 事件备注
      */
    Remark?: string;
}
/**
 * DescribeAssetImageRegistryListExport请求参数结构体
 */
export interface DescribeAssetImageRegistryListExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 排序字段
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式，asc，desc
      */
    Order?: string;
    /**
      * 是否仅展示repository版本最新的镜像，默认为false
      */
    OnlyShowLatest?: boolean;
}
/**
 * DescribeAssetImageRegistryRiskListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryRiskListExportResponse {
    /**
      * excel文件下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEscapeRule请求参数结构体
 */
export interface ModifyEscapeRuleRequest {
    /**
      * 需要修改的数组
      */
    RuleSet: Array<EscapeRuleEnabled>;
}
/**
 * DescribeAbnormalProcessRules返回参数结构体
 */
export interface DescribeAbnormalProcessRulesResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 异常进程策略信息列表
      */
    RuleSet: Array<RuleBaseInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCheckItemList请求参数结构体
 */
export interface DescribeCheckItemListRequest {
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 每次查询的最大记录数量
      */
    Limit?: number;
    /**
      * Name 可取值：risk_level风险等级, risk_target检查对象，风险对象,risk_type风险类别,risk_attri检测项所属的风险类型
      */
    Filters?: Array<ComplianceFilters>;
}
/**
 * DescribeVirusScanSetting返回参数结构体
 */
export interface DescribeVirusScanSettingResponse {
    /**
      * 是否开启定期扫描
      */
    EnableScan: boolean;
    /**
      * 检测周期每隔多少天
      */
    Cycle: number;
    /**
      * 扫描开始时间
      */
    BeginScanAt: string;
    /**
      * 扫描全部路径
      */
    ScanPathAll: boolean;
    /**
      * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
      */
    ScanPathType: number;
    /**
      * 超时时长，单位小时
      */
    Timeout: number;
    /**
      * 扫描范围0容器1主机节点
      */
    ScanRangeType: number;
    /**
      * true 全选，false 自选
      */
    ScanRangeAll: boolean;
    /**
      * 自选扫描范围的容器id或者主机id 根据ScanRangeType决定
      */
    ScanIds: Array<string>;
    /**
      * 自选排除或扫描的地址
      */
    ScanPath: Array<string>;
    /**
      * 一键检测的超时设置
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClickTimeout: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessControlRuleDetail返回参数结构体
 */
export interface DescribeAccessControlRuleDetailResponse {
    /**
      * 运行时策略详细信息
      */
    RuleDetail: AccessControlRuleInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateOrModifyPostPayCores请求参数结构体
 */
export interface CreateOrModifyPostPayCoresRequest {
    /**
      * 弹性计费上限，最小值500
      */
    CoresCnt: number;
}
/**
 * DescribeAssetImageScanTask请求参数结构体
 */
export declare type DescribeAssetImageScanTaskRequest = null;
/**
 * DescribeValueAddedSrvInfo返回参数结构体
 */
export interface DescribeValueAddedSrvInfoResponse {
    /**
      * 仓库镜像未授权数量
      */
    RegistryImageCnt: number;
    /**
      * 本地镜像未授权数量
      */
    LocalImageCnt: number;
    /**
      * 未使用的镜像安全扫描授权数
      */
    UnusedAuthorizedCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateVirusScanTask返回参数结构体
 */
export interface CreateVirusScanTaskResponse {
    /**
      * 任务id
      */
    TaskID: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetProcessList请求参数结构体
 */
export interface DescribeAssetProcessListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>RunAs - String - 是否必填：否 - 运行用户筛选，</li>
<li>ContainerID - String - 是否必填：否 - 容器id</li>
<li>HostID- String - 是否必填：是 - 主机id</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>ProcessName- string - 是否必填：否 - 进程名搜索</li>
<li>Pid- string - 是否必填：否 - 进程id搜索(关联进程)</li>
      */
    Filters?: Array<AssetFilters>;
}
/**
 * DescribeAssetProcessList返回参数结构体
 */
export interface DescribeAssetProcessListResponse {
    /**
      * 端口列表
      */
    List: Array<ProcessInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器逃逸事件列表
 */
export interface EscapeEventInfo {
    /**
      * 事件类型
   ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
   ESCAPE_SYSCALL:Syscall逃逸
      */
    EventType: string;
    /**
      * 容器名
      */
    ContainerName: string;
    /**
      * 镜像名
      */
    ImageName: string;
    /**
      * 状态，EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
      */
    Status: string;
    /**
      * 事件记录的唯一id
      */
    EventId: string;
    /**
      * 节点名称
      */
    NodeName: string;
    /**
      * pod(实例)的名字
      */
    PodName: string;
    /**
      * 生成时间
      */
    FoundTime: string;
    /**
      * 事件名字，
宿主机文件访问逃逸、
Syscall逃逸、
MountNamespace逃逸、
程序提权逃逸、
特权容器启动逃逸、
敏感路径挂载
      */
    EventName: string;
    /**
      * 镜像id，用于跳转
      */
    ImageId: string;
    /**
      * 容器id，用于跳转
      */
    ContainerId: string;
    /**
      * 事件解决方案
      */
    Solution: string;
    /**
      * 事件描述
      */
    Description: string;
    /**
      * 事件数量
      */
    EventCount: number;
    /**
      * 最近生成时间
      */
    LatestFoundTime: string;
    /**
      * 节点IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeIP: string;
    /**
      * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostID: string;
}
/**
 * ModifyVirusScanTimeoutSetting返回参数结构体
 */
export interface ModifyVirusScanTimeoutSettingResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryDetail请求参数结构体
 */
export interface DescribeAssetImageRegistryDetailRequest {
    /**
      * 仓库列表id
      */
    Id?: number;
    /**
      * 镜像ID
      */
    ImageId?: string;
}
/**
 * CreateAssetImageRegistryScanTask请求参数结构体
 */
export interface CreateAssetImageRegistryScanTaskRequest {
    /**
      * 是否扫描全部镜像
      */
    All?: boolean;
    /**
      * 扫描的镜像列表
      */
    Images?: Array<ImageInfo>;
    /**
      * 扫描类型数组
      */
    ScanType?: Array<string>;
    /**
      * 扫描的镜像列表
      */
    Id?: Array<number>;
    /**
      * 过滤条件
      */
    Filters?: Array<AssetFilters>;
    /**
      * 不需要扫描的镜像列表, 与Filters配合使用
      */
    ExcludeImageList?: Array<number>;
    /**
      * 是否仅扫描各repository最新版的镜像, 与Filters配合使用
      */
    OnlyScanLatest?: boolean;
}
/**
 * DescribeAssetImageListExport返回参数结构体
 */
export interface DescribeAssetImageListExportResponse {
    /**
      * excel文件下载地址
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetContainerDetail返回参数结构体
 */
export interface DescribeAssetContainerDetailResponse {
    /**
      * 主机id
      */
    HostID: string;
    /**
      * 主机ip
      */
    HostIP: string;
    /**
      * 容器名称
      */
    ContainerName: string;
    /**
      * 运行状态
      */
    Status: string;
    /**
      * 运行账户
      */
    RunAs: string;
    /**
      * 命令行
      */
    Cmd: string;
    /**
      * CPU使用率 * 1000
      */
    CPUUsage: number;
    /**
      * 内存使用 KB
      */
    RamUsage: number;
    /**
      * 镜像名
      */
    ImageName: string;
    /**
      * 镜像ID
      */
    ImageID: string;
    /**
      * 归属POD
      */
    POD: string;
    /**
      * k8s 主节点
      */
    K8sMaster: string;
    /**
      * 容器内进程数
      */
    ProcessCnt: number;
    /**
      * 容器内端口数
      */
    PortCnt: number;
    /**
      * 组件数
      */
    ComponentCnt: number;
    /**
      * app数
      */
    AppCnt: number;
    /**
      * websvc数
      */
    WebServiceCnt: number;
    /**
      * 挂载
      */
    Mounts: Array<ContainerMount>;
    /**
      * 容器网络信息
      */
    Network: ContainerNetwork;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 镜像创建时间
      */
    ImageCreateTime: string;
    /**
      * 镜像大小
      */
    ImageSize: number;
    /**
      * 主机状态 offline,online,pause
      */
    HostStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器运行时安全，子策略信息
 */
export interface AbnormalProcessChildRuleInfo {
    /**
      * 策略模式，   RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
      */
    RuleMode: string;
    /**
      * 进程路径
      */
    ProcessPath: string;
    /**
      * 子策略id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId?: string;
    /**
      * 威胁等级，HIGH:高，MIDDLE:中，LOW:低
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleLevel?: string;
}
/**
 * ScanComplianceScanFailedAssets返回参数结构体
 */
export interface ScanComplianceScanFailedAssetsResponse {
    /**
      * 返回重新检测任务的ID。
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageVirusListExport返回参数结构体
 */
export interface DescribeAssetImageVirusListExportResponse {
    /**
      * excel文件下载地址
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时安全事件趋势信息
 */
export interface SecTendencyEventInfo {
    /**
      * 趋势列表
      */
    EventSet: Array<RunTimeTendencyInfo>;
    /**
      * 事件类型：
ET_ESCAPE : 容器逃逸
ET_REVERSE_SHELL: 反弹shell
ET_RISK_SYSCALL:高危系统调用
ET_ABNORMAL_PROCESS: 异常进程
ET_ACCESS_CONTROL 文件篡改
      */
    EventType: string;
}
/**
 * DescribeAssetPortList返回参数结构体
 */
export interface DescribeAssetPortListResponse {
    /**
      * 端口列表
      */
    List: Array<PortInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRefreshTask请求参数结构体
 */
export interface DescribeRefreshTaskRequest {
    /**
      * 任务ID
      */
    TaskId: number;
}
/**
 * CreateClusterCheckTask返回参数结构体
 */
export interface CreateClusterCheckTaskResponse {
    /**
      * 返回创建的集群检查任务的ID，为0表示创建失败。
      */
    TaskId: number;
    /**
      * 创建检查任务的结果，"Succ"为成功，其他的为失败原因
      */
    CreateResult: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCompliancePolicyItemAffectedAssetList请求参数结构体
 */
export interface DescribeCompliancePolicyItemAffectedAssetListRequest {
    /**
      * DescribeComplianceTaskPolicyItemSummaryList返回的CustomerPolicyItemId，表示检测项的ID。
      */
    CustomerPolicyItemId: number;
    /**
      * 起始偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 需要返回的数量，默认为10，最大值为100。
      */
    Limit?: number;
    /**
      * 过滤条件。
Name - String
Name 可取值：NodeName, CheckResult
      */
    Filters?: Array<ComplianceFilters>;
}
/**
 * DescribeImageRiskTendency请求参数结构体
 */
export interface DescribeImageRiskTendencyRequest {
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
}
/**
 * CreateOrModifyPostPayCores返回参数结构体
 */
export interface CreateOrModifyPostPayCoresResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示检测项所影响的资产的信息。
 */
export interface ComplianceAffectedAsset {
    /**
      * 为客户分配的唯一的资产项的ID。
      */
    CustomerAssetId: number;
    /**
      * 资产项的名称。
      */
    AssetName: string;
    /**
      * 资产项的类型
      */
    AssetType: string;
    /**
      * 检测状态

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
      */
    CheckStatus: string;
    /**
      * 节点名称。
      */
    NodeName: string;
    /**
      * 上次检测的时间，格式为”YYYY-MM-DD HH:m::SS“。

如果没有检测过，此处为”0000-00-00 00:00:00“。
      */
    LastCheckTime: string;
    /**
      * 检测结果。取值为：

RESULT_FAILED: 未通过

RESULT_PASSED: 通过
      */
    CheckResult: string;
    /**
      * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostIP: string;
    /**
      * 镜像的tag
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageTag: string;
}
/**
 * DescribeVirusMonitorSetting请求参数结构体
 */
export declare type DescribeVirusMonitorSettingRequest = null;
/**
 * DescribeAssetImageHostList返回参数结构体
 */
export interface DescribeAssetImageHostListResponse {
    /**
      * 镜像列表
      */
    List: Array<ImageHost>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageRiskTendency返回参数结构体
 */
export interface DescribeImageRiskTendencyResponse {
    /**
      * 本地镜像新增风险趋势信息列表
      */
    ImageRiskTendencySet: Array<ImageRiskTendencyInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceScanFailedAssetList请求参数结构体
 */
export interface DescribeComplianceScanFailedAssetListRequest {
    /**
      * 资产类型列表。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
      */
    AssetTypeSet?: Array<string>;
    /**
      * 起始偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回的数据量，默认为10，最大为100。
      */
    Limit?: number;
    /**
      * 查询过滤器
      */
    Filters?: Array<ComplianceFilters>;
}
/**
 * DescribeAssetImageRegistryVulList请求参数结构体
 */
export interface DescribeAssetImageRegistryVulListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 镜像信息
      */
    ImageInfo?: ImageInfo;
    /**
      * 镜像标识Id
      */
    Id?: number;
}
/**
 * DescribeImageSimpleList返回参数结构体
 */
export interface DescribeImageSimpleListResponse {
    /**
      * 镜像列表
      */
    ImageList: Array<ImageSimpleInfo>;
    /**
      * 镜像数
      */
    ImageCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeVirusScanSetting请求参数结构体
 */
export declare type DescribeVirusScanSettingRequest = null;
/**
 * DescribeUserCluster返回参数结构体
 */
export interface DescribeUserClusterResponse {
    /**
      * 集群总数
      */
    TotalCount: number;
    /**
      * 集群的详细信息
      */
    ClusterInfoList: Array<ClusterInfoItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryRegistryList请求参数结构体
 */
export declare type DescribeAssetImageRegistryRegistryListRequest = null;
/**
 * DescribeVirusScanTaskStatus返回参数结构体
 */
export interface DescribeVirusScanTaskStatusResponse {
    /**
      * 查杀容器个数
      */
    ContainerTotal: number;
    /**
      * 风险容器个数
      */
    RiskContainerCnt: number;
    /**
      * 扫描状态 任务状态:
SCAN_NONE:无，
SCAN_SCANNING:正在扫描中，
SCAN_FINISH：扫描完成，
SCAN_TIMEOUT：扫描超时
SCAN_CANCELING: 取消中
SCAN_CANCELED:已取消
      */
    Status: string;
    /**
      * 扫描进度 I
      */
    Schedule: number;
    /**
      * 已经扫描了的容器个数
      */
    ContainerScanCnt: number;
    /**
      * 风险个数
      */
    RiskCnt: number;
    /**
      * 剩余扫描时间
      */
    LeftSeconds: number;
    /**
      * 扫描开始时间
      */
    StartTime: string;
    /**
      * 扫描结束时间
      */
    EndTime: string;
    /**
      * 扫描类型，"CYCLE"：周期扫描， "MANUAL"：手动扫描
      */
    ScanType: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEscapeEventsExport返回参数结构体
 */
export interface DescribeEscapeEventsExportResponse {
    /**
      * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示镜像资产专属的详情。
 */
export interface ComplianceImageDetailInfo {
    /**
      * 镜像在主机上的ID。
      */
    ImageId: string;
    /**
      * 镜像的名称。
      */
    ImageName: string;
    /**
      * 镜像的Tag。
      */
    ImageTag: string;
    /**
      * 镜像所在远程仓库的路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repository: string;
}
/**
 * DescribeComplianceWhitelistItemList请求参数结构体
 */
export interface DescribeComplianceWhitelistItemListRequest {
    /**
      * 起始偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 要获取的数量，默认为10，最大为100。
      */
    Limit?: number;
    /**
      * 资产类型列表。
      */
    AssetTypeSet?: Array<string>;
    /**
      * 查询过滤器
      */
    Filters?: Array<ComplianceFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 desc asc
      */
    Order?: string;
}
/**
 * DescribeAccessControlDetail请求参数结构体
 */
export interface DescribeAccessControlDetailRequest {
    /**
      * 事件唯一id
      */
    EventId: string;
}
/**
 * 风险项是检查完之后，有问题的检测项，并且加了一些检查结果信息。
 */
export interface ClusterRiskItem {
    /**
      * 检测项相关信息
      */
    CheckItem: ClusterCheckItem;
    /**
      * 验证信息
      */
    VerifyInfo: string;
    /**
      * 事件描述,检查的错误信息
      */
    ErrorMessage: string;
    /**
      * 受影响的集群数量
      */
    AffectedClusterCount: number;
    /**
      * 受影响的节点数量
      */
    AffectedNodeCount: number;
}
/**
 * DescribeVirusList返回参数结构体
 */
export interface DescribeVirusListResponse {
    /**
      * 木马列表
      */
    List: Array<VirusInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAbnormalProcessEventsExport请求参数结构体
 */
export interface DescribeAbnormalProcessEventsExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeAssetComponentList请求参数结构体
 */
export interface DescribeAssetComponentListRequest {
    /**
      * 容器id
      */
    ContainerID: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件
      */
    Filters?: Array<AssetFilters>;
}
/**
 * DescribeUserCluster请求参数结构体
 */
export interface DescribeUserClusterRequest {
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 每次查询的最大记录数量
      */
    Limit?: number;
    /**
      * Name - String
Name 可取值：ClusterName,ClusterId,ClusterType,Region,ClusterCheckMode,ClusterAutoCheck
      */
    Filters?: Array<ComplianceFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * DescribeAbnormalProcessDetail返回参数结构体
 */
export interface DescribeAbnormalProcessDetailResponse {
    /**
      * 事件基本信息
      */
    EventBaseInfo: RunTimeEventBaseInfo;
    /**
      * 进程信息
      */
    ProcessInfo: ProcessDetailInfo;
    /**
      * 父进程信息
      */
    ParentProcessInfo: ProcessDetailBaseInfo;
    /**
      * 事件描述
      */
    EventDetail: AbnormalProcessEventDescription;
    /**
      * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessInfo: ProcessBaseInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageListExport请求参数结构体
 */
export interface DescribeAssetImageListExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>ImageName- String - 是否必填：否 - 镜像名称筛选，</li>
<li>ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErr</li>
<li>ImageID- String - 是否必填：否 - 镜像ID筛选，</li>
<li>SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * ModifyAssetImageRegistryScanStopOneKey返回参数结构体
 */
export interface ModifyAssetImageRegistryScanStopOneKeyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRiskSyscallNames请求参数结构体
 */
export declare type DescribeRiskSyscallNamesRequest = null;
/**
 * 后付费详情
 */
export interface SoftQuotaDayInfo {
    /**
      * 扣费时间
      */
    PayTime: string;
    /**
      * 计费核数
      */
    CoresCnt: number;
}
/**
 * DescribeAssetImageRegistryVirusList返回参数结构体
 */
export interface DescribeAssetImageRegistryVirusListResponse {
    /**
      * 镜像漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    List: Array<ImageVirus>;
    /**
      * 总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageSimpleList请求参数结构体
 */
export interface DescribeAssetImageSimpleListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Keywords- String - 是否必填：否 - 镜像名、镜像id 称筛选，</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * DescribeAssetDBServiceList返回参数结构体
 */
export interface DescribeAssetDBServiceListResponse {
    /**
      * db服务列表
      */
    List: Array<ServiceInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageSimpleList请求参数结构体
 */
export interface DescribeImageSimpleListRequest {
    /**
      * IsAuthorized 是否已经授权, 0:否 1:是 无:全部
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 排序方式
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeAssetWebServiceList返回参数结构体
 */
export interface DescribeAssetWebServiceListResponse {
    /**
      * 主机列表
      */
    List: Array<ServiceInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceTaskPolicyItemSummaryList请求参数结构体
 */
export interface DescribeComplianceTaskPolicyItemSummaryListRequest {
    /**
      * 资产类型。仅查询与指定资产类型相关的检测项。

ASSET_CONTAINER, 容器

ASSET_IMAGE, 镜像

ASSET_HOST, 主机

ASSET_K8S, K8S资产
      */
    AssetType?: string;
    /**
      * 起始偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 需要返回的数量，默认为10，最大值为100。
      */
    Limit?: number;
    /**
      * 过滤条件。
Name - String
Name 可取值：ItemType, StandardId,  RiskLevel。
当为K8S资产时，还可取ClusterName。
      */
    Filters?: Array<ComplianceFilters>;
}
/**
 * 表示一条检测项对应的汇总信息。
 */
export interface CompliancePolicyItemSummary {
    /**
      * 为客户分配的唯一的检测项的ID。
      */
    CustomerPolicyItemId: number;
    /**
      * 检测项的原始ID。
      */
    BasePolicyItemId: number;
    /**
      * 检测项的名称。
      */
    Name: string;
    /**
      * 检测项所属的类型，枚举字符串。
      */
    Category: string;
    /**
      * 所属的合规标准
      */
    BenchmarkStandardName: string;
    /**
      * 威胁等级。RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
      */
    RiskLevel: string;
    /**
      * 检测项所属的资产类型
      */
    AssetType: string;
    /**
      * 最近检测的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastCheckTime: string;
    /**
      * 检测状态

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
      */
    CheckStatus: string;
    /**
      * 检测结果。RESULT_PASSED: 通过

RESULT_FAILED: 未通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckResult: string;
    /**
      * 通过检测的资产的数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    PassedAssetCount: number;
    /**
      * 未通过检测的资产的数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedAssetCount: number;
    /**
      * 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WhitelistId: number;
    /**
      * 处理建议。
      */
    FixSuggestion: string;
    /**
      * 所属的合规标准的ID
      */
    BenchmarkStandardId: number;
}
/**
 * DescribeAssetImageVulList请求参数结构体
 */
export interface DescribeAssetImageVulListRequest {
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Name- String - 是否必填：否 - 漏洞名称名称筛选，</li>
<li>Level - String - 是否必填：否 - 风险等级  1,2,3,4</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段（Level）
      */
    By?: string;
    /**
      * 排序方式 + -
      */
    Order?: string;
}
/**
 * ModifyRiskSyscallStatus请求参数结构体
 */
export interface ModifyRiskSyscallStatusRequest {
    /**
      * 处理事件ids
      */
    EventIdSet: Array<string>;
    /**
      * 标记事件的状态，
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
      */
    Status: string;
    /**
      * 事件备注
      */
    Remark?: string;
}
/**
 * 运行时风险信息
 */
export interface RunTimeRiskInfo {
    /**
      * 数量
      */
    Cnt: number;
    /**
      * 风险等级：
CRITICAL: 严重
HIGH: 高
MEDIUM：中
LOW: 低
      */
    Level: string;
}
/**
 * CreateVirusScanTask请求参数结构体
 */
export interface CreateVirusScanTaskRequest {
    /**
      * 是否扫描所有路径
      */
    ScanPathAll: boolean;
    /**
      * 扫描范围0容器1主机节点
      */
    ScanRangeType: number;
    /**
      * true 全选，false 自选
      */
    ScanRangeAll: boolean;
    /**
      * 超时时长，单位小时
      */
    Timeout: number;
    /**
      * 当ScanPathAll为false生效 0扫描以下路径 1、扫描除以下路径
      */
    ScanPathType?: number;
    /**
      * 自选扫描范围的容器id或者主机id 根据ScanRangeType决定
      */
    ScanIds?: Array<string>;
    /**
      * 自选排除或扫描的地址
      */
    ScanPath?: Array<string>;
}
/**
 * DescribeAssetImageScanTask返回参数结构体
 */
export interface DescribeAssetImageScanTaskResponse {
    /**
      * 任务id
      */
    TaskID: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddEditAccessControlRule请求参数结构体
 */
export interface AddEditAccessControlRuleRequest {
    /**
      * 增加策略信息，策略id为空，编辑策略是id不能为空
      */
    RuleInfo: AccessControlRuleInfo;
    /**
      * 仅在白名单时候使用
      */
    EventId?: string;
}
/**
 * 容器挂载信息
 */
export interface ContainerMount {
    /**
      * 挂载类型 bind
      */
    Type: string;
    /**
      * 宿主机路径
      */
    Source: string;
    /**
      * 容器内路径
      */
    Destination: string;
    /**
      * 模式
      */
    Mode: string;
    /**
      * 读写权限
      */
    RW: boolean;
    /**
      * 传播类型
      */
    Propagation: string;
    /**
      * 名称
      */
    Name: string;
    /**
      * 驱动
      */
    Driver: string;
}
/**
 * DescribeAssetImageSimpleList返回参数结构体
 */
export interface DescribeAssetImageSimpleListResponse {
    /**
      * 镜像列表
      */
    List: Array<AssetSimpleImageInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceAssetPolicyItemList返回参数结构体
 */
export interface DescribeComplianceAssetPolicyItemListResponse {
    /**
      * 返回检测项的总数。如果用户未启用基线检查，此处返回0。
      */
    TotalCount: number;
    /**
      * 返回某个资产下的检测项的列表。
      */
    AssetPolicyItemList: Array<ComplianceAssetPolicyItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface ComplianceFilters {
    /**
      * 过滤键的名称
      */
    Name: string;
    /**
      * 一个或者多个过滤值。
      */
    Values: Array<string>;
    /**
      * 是否模糊查询。默认为是。
      */
    ExactMatch?: boolean;
}
/**
 * 容器安全镜像列表
 */
export interface ImagesInfo {
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 镜像大小
      */
    Size: number;
    /**
      * 主机个数
      */
    HostCnt: number;
    /**
      * 容器个数
      */
    ContainerCnt: number;
    /**
      * 扫描时间
      */
    ScanTime: string;
    /**
      * 漏洞个数
      */
    VulCnt: number;
    /**
      * 病毒个数
      */
    VirusCnt: number;
    /**
      * 敏感信息个数
      */
    RiskCnt: number;
    /**
      * 是否信任镜像
      */
    IsTrustImage: boolean;
    /**
      * 镜像系统
      */
    OsName: string;
    /**
      * agent镜像扫描错误
      */
    AgentError: string;
    /**
      * 后端镜像扫描错误
      */
    ScanError: string;
    /**
      * 扫描状态
      */
    ScanStatus: string;
    /**
      * 木马扫描错误信息
      */
    ScanVirusError: string;
    /**
      * 漏洞扫描错误信息
      */
    ScanVulError: string;
    /**
      * 风险扫描错误信息
      */
    ScanRiskError: string;
    /**
      * 是否是重点关注镜像，为0不是，非0是
      */
    IsSuggest: number;
    /**
      * 是否授权，1是0否
      */
    IsAuthorized: number;
    /**
      * 组件个数
      */
    ComponentCnt: number;
}
/**
 * DescribeReverseShellEventsExport请求参数结构体
 */
export interface DescribeReverseShellEventsExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * 告警配置策略
 */
export interface WarningRule {
    /**
      * 告警事件类型：
镜像仓库安全-木马：IMG_REG_VIRUS
镜像仓库安全-漏洞：IMG_REG_VUL
镜像仓库安全-敏感信息：IMG_REG_RISK
镜像安全-木马：IMG_VIRUS
镜像安全-漏洞：IMG_VUL
镜像安全-敏感信息：IMG_RISK
镜像安全-镜像拦截：IMG_INTERCEPT
运行时安全-容器逃逸：RUNTIME_ESCAPE
运行时安全-异常进程：RUNTIME_FILE
运行时安全-异常文件访问：RUNTIME_PROCESS
运行时安全-高危系统调用：RUNTIME_SYSCALL
运行时安全-反弹Shell：RUNTIME_REVERSE_SHELL
运行时安全-木马：RUNTIME_VIRUS
      */
    Type: string;
    /**
      * 开关状态：
打开：ON
关闭：OFF
      */
    Switch: string;
    /**
      * 告警开始时间，格式: HH:mm
      */
    BeginTime: string;
    /**
      * 告警结束时间，格式: HH:mm
      */
    EndTime: string;
    /**
      * 告警等级策略控制，二进制位每位代表一个含义，值以字符串类型传递
控制开关分为高、中、低，则二进制位分别为：第1位:低，第2位:中，第3位:高，0表示关闭、1表示打开。
如：高危和中危打开告警，低危关闭告警，则二进制值为：110
告警类型不区分等级控制，则传1。
      */
    ControlBits: string;
}
/**
 * DescribeAccessControlDetail返回参数结构体
 */
export interface DescribeAccessControlDetailResponse {
    /**
      * 事件基本信息
      */
    EventBaseInfo: RunTimeEventBaseInfo;
    /**
      * 进程信息
      */
    ProcessInfo: ProcessDetailInfo;
    /**
      * 被篡改信息
      */
    TamperedFileInfo: FileAttributeInfo;
    /**
      * 事件描述
      */
    EventDetail: AccessControlEventDescription;
    /**
      * 父进程信息
      */
    ParentProcessInfo: ProcessBaseInfo;
    /**
      * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessInfo: ProcessBaseInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAffectedNodeList请求参数结构体
 */
export interface DescribeAffectedNodeListRequest {
    /**
      * 唯一的检测项的ID
      */
    CheckItemId: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 每次查询的最大记录数量
      */
    Limit?: number;
    /**
      * Name - String
Name 可取值：ClusterName, ClusterId,InstanceId,PrivateIpAddresses
      */
    Filters?: Array<ComplianceFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * DescribeAssetImageRegistryAssetStatus返回参数结构体
 */
export interface DescribeAssetImageRegistryAssetStatusResponse {
    /**
      * 更新进度状态,doing更新中，success更新成功，failed失败
      */
    Status: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Err: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteReverseShellWhiteLists请求参数结构体
 */
export interface DeleteReverseShellWhiteListsRequest {
    /**
      * 白名单ids
      */
    WhiteListIdSet: Array<string>;
}
/**
 * AddEditRiskSyscallWhiteList返回参数结构体
 */
export interface AddEditRiskSyscallWhiteListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAbnormalProcessStatus请求参数结构体
 */
export interface ModifyAbnormalProcessStatusRequest {
    /**
      * 处理事件ids
      */
    EventIdSet: Array<string>;
    /**
      * 标记事件的状态，
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
      */
    Status: string;
    /**
      * 事件备注
      */
    Remark?: string;
}
/**
 * ModifyAccessControlRuleStatus返回参数结构体
 */
export interface ModifyAccessControlRuleStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全镜像高危行为信息
 */
export interface ImageRisk {
    /**
      * 高危行为
注意：此字段可能返回 null，表示取不到有效值。
      */
    Behavior: number;
    /**
      * 种类
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Level: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: string;
    /**
      * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstructionContent: string;
}
/**
 * DescribeClusterDetail返回参数结构体
 */
export interface DescribeClusterDetailResponse {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 集群名字
      */
    ClusterName: string;
    /**
      * 当前集群扫描任务的进度，100表示扫描完成.
      */
    ScanTaskProgress: number;
    /**
      * 集群版本
      */
    ClusterVersion: string;
    /**
      * 运行时组件
      */
    ContainerRuntime: string;
    /**
      * 集群节点数
      */
    ClusterNodeNum: number;
    /**
      * 集群状态 (Running 运行中 Creating 创建中 Abnormal 异常 )
      */
    ClusterStatus: string;
    /**
      * 集群类型：为托管集群MANAGED_CLUSTER、独立集群INDEPENDENT_CLUSTER
      */
    ClusterType: string;
    /**
      * 集群区域
      */
    Region: string;
    /**
      * 严重风险检查项的数量
      */
    SeriousRiskCount: number;
    /**
      * 高风险检查项的数量
      */
    HighRiskCount: number;
    /**
      * 中风险检查项的数量
      */
    MiddleRiskCount: number;
    /**
      * 提示风险检查项的数量
      */
    HintRiskCount: number;
    /**
      * 检查任务的状态
      */
    CheckStatus: string;
    /**
      * 防御容器状态
      */
    DefenderStatus: string;
    /**
      * 扫描任务创建时间
      */
    TaskCreateTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示一条检测项的信息。
 */
export interface ComplianceAssetPolicyItem {
    /**
      * 为客户分配的唯一的检测项的ID。
      */
    CustomerPolicyItemId: number;
    /**
      * 检测项的原始ID
      */
    BasePolicyItemId: number;
    /**
      * 检测项的名称。
      */
    Name: string;
    /**
      * 检测项所属的类型的名称
      */
    Category: string;
    /**
      * 所属的合规标准的ID
      */
    BenchmarkStandardId: number;
    /**
      * 所属的合规标准的名称
      */
    BenchmarkStandardName: string;
    /**
      * 威胁等级
      */
    RiskLevel: string;
    /**
      * 检测状态
CHECK_INIT, 待检测
CHECK_RUNNING, 检测中
CHECK_FINISHED, 检测完成
CHECK_FAILED, 检测失败
      */
    CheckStatus: string;
    /**
      * 检测结果
RESULT_PASSED: 通过
RESULT_FAILED: 未通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckResult: string;
    /**
      * 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WhitelistId: number;
    /**
      * 处理建议。
      */
    FixSuggestion: string;
    /**
      * 最近检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastCheckTime: string;
}
/**
 * InitializeUserComplianceEnvironment请求参数结构体
 */
export declare type InitializeUserComplianceEnvironmentRequest = null;
/**
 * DescribeAssetImageRiskList请求参数结构体
 */
export interface DescribeAssetImageRiskListRequest {
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 风险级别 1,2,3,4，</li>
<li>Behavior - String - 是否必填：否 - 风险行为 1,2,3,4</li>
<li>Type - String - 是否必填：否 - 风险类型  1,2,</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式
      */
    Order?: string;
}
/**
 * DescribeEscapeSafeState请求参数结构体
 */
export declare type DescribeEscapeSafeStateRequest = null;
/**
 * StopVirusScanTask请求参数结构体
 */
export interface StopVirusScanTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
    /**
      * 需要停止的容器id 为空默认停止整个任务
      */
    ContainerIds?: Array<string>;
}
/**
 * DescribeEscapeEventDetail请求参数结构体
 */
export interface DescribeEscapeEventDetailRequest {
    /**
      * 事件唯一id
      */
    EventId: string;
}
/**
 * DescribeVirusSummary请求参数结构体
 */
export declare type DescribeVirusSummaryRequest = null;
/**
 * 高危系统调用白名单信息
 */
export interface RiskSyscallWhiteListBaseInfo {
    /**
      * 白名单id
      */
    Id: string;
    /**
      * 镜像数量
      */
    ImageCount: number;
    /**
      * 连接进程路径
      */
    ProcessPath: string;
    /**
      * 系统调用名称列表
      */
    SyscallNames: Array<string>;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 是否是全局白名单，true全局
      */
    IsGlobal: boolean;
    /**
      * 镜像id数组
      */
    ImageIds: Array<string>;
}
/**
 * DeleteAbnormalProcessRules请求参数结构体
 */
export interface DeleteAbnormalProcessRulesRequest {
    /**
      * 策略的ids
      */
    RuleIdSet: Array<string>;
}
/**
 * ModifyCompliancePeriodTask请求参数结构体
 */
export interface ModifyCompliancePeriodTaskRequest {
    /**
      * 要修改的定时任务的ID，由DescribeCompliancePeriodTaskList接口返回。
      */
    PeriodTaskId: number;
    /**
      * 定时任务的周期规则。不填时，不修改。
      */
    PeriodRule?: CompliancePeriodTaskRule;
    /**
      * 设置合规标准。不填时，不修改。
      */
    StandardSettings?: Array<ComplianceBenchmarkStandardEnable>;
}
/**
 * DescribeRiskSyscallEvents请求参数结构体
 */
export interface DescribeRiskSyscallEventsRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeRiskList返回参数结构体
 */
export interface DescribeRiskListResponse {
    /**
      * 风险详情数组
      */
    ClusterRiskItems: Array<ClusterRiskItem>;
    /**
      * 风险项的总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器组件信息
 */
export interface ComponentInfo {
    /**
      * 名称
      */
    Name: string;
    /**
      * 版本
      */
    Version: string;
}
/**
 * DescribeAssetSummary请求参数结构体
 */
export declare type DescribeAssetSummaryRequest = null;
/**
 * CreateClusterCheckTask请求参数结构体
 */
export interface CreateClusterCheckTaskRequest {
    /**
      * 指定要扫描的集群信息
      */
    ClusterCheckTaskList: Array<ClusterCheckTaskItem>;
}
/**
 * DescribeAbnormalProcessDetail请求参数结构体
 */
export interface DescribeAbnormalProcessDetailRequest {
    /**
      * 事件唯一id
      */
    EventId: string;
}
/**
 * CreateExportComplianceStatusListJob请求参数结构体
 */
export interface CreateExportComplianceStatusListJobRequest {
    /**
      * 要导出信息的资产类型
      */
    AssetType: string;
    /**
      * 按照检测项导出，还是按照资产导出。true: 按照资产导出；false: 按照检测项导出。
      */
    ExportByAsset: boolean;
    /**
      * true, 全部导出；false, 根据IdList来导出数据。
      */
    ExportAll: boolean;
    /**
      * 要导出的资产ID列表或检测项ID列表，由ExportByAsset的取值决定。
      */
    IdList?: Array<number>;
}
/**
 * 容器安全镜像病毒信息
 */
export interface ImageVirus {
    /**
      * 路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskLevel: string;
    /**
      * 分类
注意：此字段可能返回 null，表示取不到有效值。
      */
    Category: string;
    /**
      * 病毒名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusName: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: string;
    /**
      * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    Solution: string;
    /**
      * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileType: string;
    /**
      * 文件路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileName: string;
    /**
      * 文件md5
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileMd5: string;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileSize: number;
    /**
      * 首次发现时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstScanTime: string;
    /**
      * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestScanTime: string;
}
/**
 * DescribeEscapeEventInfo请求参数结构体
 */
export interface DescribeEscapeEventInfoRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeRiskSyscallEventsExport返回参数结构体
 */
export interface DescribeRiskSyscallEventsExportResponse {
    /**
      * Excel下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器列表集合
 */
export interface ContainerInfo {
    /**
      * 容器id
      */
    ContainerID: string;
    /**
      * 容器名称
      */
    ContainerName: string;
    /**
      * 容器运行状态
      */
    Status: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 运行用户
      */
    RunAs: string;
    /**
      * 命令行
      */
    Cmd: string;
    /**
      * CPU使用率 *1000
      */
    CPUUsage: number;
    /**
      * 内存使用 kb
      */
    RamUsage: number;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 镜像id
      */
    POD: string;
    /**
      * 主机id
      */
    HostID: string;
    /**
      * 主机ip
      */
    HostIP: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 主机名称
      */
    HostName: string;
    /**
      * 外网ip
      */
    PublicIp: string;
}
/**
 * DescribeAssetImageRegistryRiskInfoList请求参数结构体
 */
export interface DescribeAssetImageRegistryRiskInfoListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 镜像id
      */
    ImageInfo?: ImageInfo;
    /**
      * 排序字段（Level）
      */
    By?: string;
    /**
      * 排序方式 + -
      */
    Order?: string;
    /**
      * 镜像标识Id
      */
    Id?: number;
}
/**
 * DescribeAssetImageRegistryScanStatusOneKey请求参数结构体
 */
export interface DescribeAssetImageRegistryScanStatusOneKeyRequest {
    /**
      * 需要获取进度的镜像列表
      */
    Images?: Array<ImageInfo>;
    /**
      * 是否获取全部镜像
      */
    All?: boolean;
    /**
      * 需要获取进度的镜像列表Id
      */
    Id?: Array<number>;
}
/**
 * ModifyAccessControlRuleStatus请求参数结构体
 */
export interface ModifyAccessControlRuleStatusRequest {
    /**
      * 策略的ids
      */
    RuleIdSet: Array<string>;
    /**
      * 策略开关，true:代表开启， false代表关闭
      */
    IsEnable: boolean;
}
/**
 * DescribeWarningRules请求参数结构体
 */
export declare type DescribeWarningRulesRequest = null;
/**
 * 运行时趋势信息
 */
export interface RunTimeTendencyInfo {
    /**
      * 当天时间
      */
    CurTime: string;
    /**
      * 当前数量
      */
    Cnt: number;
}
/**
 * DescribeContainerAssetSummary请求参数结构体
 */
export declare type DescribeContainerAssetSummaryRequest = null;
/**
 * 组件信息
 */
export interface ComponentsInfo {
    /**
      * 组件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Component: string;
    /**
      * 组件版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
}
/**
 * DeleteRiskSyscallWhiteLists返回参数结构体
 */
export interface DeleteRiskSyscallWhiteListsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageVirusList请求参数结构体
 */
export interface DescribeAssetImageVirusListRequest {
    /**
      * 镜像id
      */
    ImageID: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Name- String - 是否必填：否 - 镜像名称筛选，</li>
<li>RiskLevel - String - 是否必填：否 - 风险等级  1,2,3,4</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序 asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeAssetImageScanSetting返回参数结构体
 */
export interface DescribeAssetImageScanSettingResponse {
    /**
      * 开关
      */
    Enable: boolean;
    /**
      * 扫描时刻(完整时间;后端按0时区解析时分秒)
      */
    ScanTime: string;
    /**
      * 扫描间隔
      */
    ScanPeriod: number;
    /**
      * 扫描木马
      */
    ScanVirus: boolean;
    /**
      * 扫描敏感信息
      */
    ScanRisk: boolean;
    /**
      * 扫描漏洞
      */
    ScanVul: boolean;
    /**
      * 扫描全部镜像
      */
    All: boolean;
    /**
      * 自定义扫描镜像
      */
    Images: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReverseShellDetail返回参数结构体
 */
export interface DescribeReverseShellDetailResponse {
    /**
      * 事件基本信息
      */
    EventBaseInfo: RunTimeEventBaseInfo;
    /**
      * 进程信息
      */
    ProcessInfo: ProcessDetailInfo;
    /**
      * 父进程信息
      */
    ParentProcessInfo: ProcessDetailBaseInfo;
    /**
      * 事件描述
      */
    EventDetail: ReverseShellEventDescription;
    /**
      * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessInfo: ProcessBaseInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessControlRulesExport返回参数结构体
 */
export interface DescribeAccessControlRulesExportResponse {
    /**
      * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAbnormalProcessStatus返回参数结构体
 */
export interface ModifyAbnormalProcessStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAbnormalProcessEventsExport返回参数结构体
 */
export interface DescribeAbnormalProcessEventsExportResponse {
    /**
      * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeContainerAssetSummary返回参数结构体
 */
export interface DescribeContainerAssetSummaryResponse {
    /**
      * 容器总数
      */
    ContainerTotalCnt: number;
    /**
      * 正在运行容器数量
      */
    ContainerRunningCnt: number;
    /**
      * 暂停运行容器数量
      */
    ContainerPauseCnt: number;
    /**
      * 停止运行容器数量
      */
    ContainerStopped: number;
    /**
      * 本地镜像数量
      */
    ImageCnt: number;
    /**
      * 主机节点数量
      */
    HostCnt: number;
    /**
      * 主机正在运行节点数量
      */
    HostRunningCnt: number;
    /**
      * 主机离线节点数量
      */
    HostOfflineCnt: number;
    /**
      * 镜像仓库数量
      */
    ImageRegistryCnt: number;
    /**
      * 镜像总数
      */
    ImageTotalCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAssetImageScanTask请求参数结构体
 */
export interface CreateAssetImageScanTaskRequest {
    /**
      * 是否扫描全部镜像；全部镜像，镜像列表和根据过滤条件筛选三选一。
      */
    All?: boolean;
    /**
      * 需要扫描的镜像列表；全部镜像，镜像列表和根据过滤条件筛选三选一。
      */
    Images?: Array<string>;
    /**
      * 扫描漏洞；漏洞，木马和风险需选其一
      */
    ScanVul?: boolean;
    /**
      * 扫描木马；漏洞，木马和风险需选其一
      */
    ScanVirus?: boolean;
    /**
      * 扫描风险；漏洞，木马和风险需选其一
      */
    ScanRisk?: boolean;
    /**
      * 根据过滤条件筛选出镜像；全部镜像，镜像列表和根据过滤条件筛选三选一。
      */
    Filters?: Array<AssetFilters>;
    /**
      * 根据过滤条件筛选出镜像，再排除个别镜像
      */
    ExcludeImageIds?: Array<string>;
}
/**
 * DescribeEscapeEventsExport请求参数结构体
 */
export interface DescribeEscapeEventsExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeImageRiskSummary返回参数结构体
 */
export interface DescribeImageRiskSummaryResponse {
    /**
      * 安全漏洞
      */
    VulnerabilityCnt: Array<RunTimeRiskInfo>;
    /**
      * 木马病毒
      */
    MalwareVirusCnt: Array<RunTimeRiskInfo>;
    /**
      * 敏感信息
      */
    RiskCnt: Array<RunTimeRiskInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckRepeatAssetImageRegistry请求参数结构体
 */
export interface CheckRepeatAssetImageRegistryRequest {
    /**
      * 仓库名
      */
    Name: string;
}
/**
 * 受影响的节点类型结构体
 */
export interface AffectedNodeItem {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群名字
      */
    ClusterName: string;
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 内网ip地址
      */
    PrivateIpAddresses: string;
    /**
      * 节点的角色，Master、Work等
      */
    InstanceRole: string;
    /**
      * k8s版本
      */
    ClusterVersion: string;
    /**
      * 运行时组件,docker或者containerd
      */
    ContainerRuntime: string;
    /**
      * 区域
      */
    Region: string;
    /**
      * 检查结果的验证信息
      */
    VerifyInfo: string;
}
/**
 * CreateCheckComponent请求参数结构体
 */
export interface CreateCheckComponentRequest {
    /**
      * 要安装的集群列表信息
      */
    ClusterInfoList: Array<ClusterCreateComponentItem>;
}
/**
 * DeleteRiskSyscallWhiteLists请求参数结构体
 */
export interface DeleteRiskSyscallWhiteListsRequest {
    /**
      * 白名单ids
      */
    WhiteListIdSet: Array<string>;
}
/**
 * DescribeImageAuthorizedInfo请求参数结构体
 */
export declare type DescribeImageAuthorizedInfoRequest = null;
/**
 * DescribeAssetImageRegistryRiskInfoList返回参数结构体
 */
export interface DescribeAssetImageRegistryRiskInfoListResponse {
    /**
      * 镜像漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    List: Array<ImageRisk>;
    /**
      * 总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryDetail返回参数结构体
 */
export interface DescribeAssetImageRegistryDetailResponse {
    /**
      * 镜像Digest
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageDigest: string;
    /**
      * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageRepoAddress: string;
    /**
      * 镜像类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryType: string;
    /**
      * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageName: string;
    /**
      * 镜像版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageTag: string;
    /**
      * 扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanTime: string;
    /**
      * 扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanStatus: string;
    /**
      * 安全漏洞数
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulCnt: number;
    /**
      * 木马病毒数
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusCnt: number;
    /**
      * 风险行为数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskCnt: number;
    /**
      * 敏感信息数
注意：此字段可能返回 null，表示取不到有效值。
      */
    SentiveInfoCnt: number;
    /**
      * 镜像系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    OsName: string;
    /**
      * 木马扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVirusError: string;
    /**
      * 漏洞扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVulError: string;
    /**
      * 层文件信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    LayerInfo: string;
    /**
      * 实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 高危扫描错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRiskError: string;
    /**
      * 木马信息扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVirusProgress: number;
    /**
      * 漏洞扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanVulProgress: number;
    /**
      * 敏感扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRiskProgress: number;
    /**
      * 剩余扫描时间秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRemainTime: number;
    /**
      * cve扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    CveStatus: string;
    /**
      * 高危扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskStatus: string;
    /**
      * 木马扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusStatus: string;
    /**
      * 总进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Progress: number;
    /**
      * 授权状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsAuthorized: number;
    /**
      * 镜像大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageSize: number;
    /**
      * 镜像Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId: string;
    /**
      * 镜像区域
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryRegion: string;
    /**
      * 镜像创建的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageCreateTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddCompliancePolicyItemToWhitelist返回参数结构体
 */
export interface AddCompliancePolicyItemToWhitelistResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessControlRules请求参数结构体
 */
export interface DescribeAccessControlRulesRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * StopVirusScanTask返回参数结构体
 */
export interface StopVirusScanTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddEditWarningRules请求参数结构体
 */
export interface AddEditWarningRulesRequest {
    /**
      * 告警开关策略
      */
    WarningRules: Array<WarningRule>;
}
/**
 * ModifyAsset返回参数结构体
 */
export interface ModifyAssetResponse {
    /**
      * 同步任务发送结果
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReverseShellEventsExport返回参数结构体
 */
export interface DescribeReverseShellEventsExportResponse {
    /**
      * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询镜像绑定的运行时规则信息
 */
export interface ImagesBindRuleInfo {
    /**
      * 镜像id
      */
    ImageId: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 关联容器数量
      */
    ContainerCnt: number;
    /**
      * 绑定规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId: string;
    /**
      * 规则名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleName: string;
    /**
      * 镜像大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageSize: number;
    /**
      * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanTime: string;
}
/**
 * DescribeAssetImageList返回参数结构体
 */
export interface DescribeAssetImageListResponse {
    /**
      * 镜像列表
      */
    List: Array<ImagesInfo>;
    /**
      * 总数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表示一项资产的信息。
 */
export interface ComplianceAssetInfo {
    /**
      * 客户资产的ID。
      */
    CustomerAssetId: number;
    /**
      * 资产类别。
      */
    AssetType: string;
    /**
      * 资产的名称。
      */
    AssetName: string;
    /**
      * 当资产为镜像时，这个字段为镜像Tag。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageTag: string;
    /**
      * 资产所在的主机IP。
      */
    HostIP: string;
    /**
      * 资产所属的节点的名称
      */
    NodeName: string;
    /**
      * 检测状态

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
      */
    CheckStatus: string;
    /**
      * 此类资产通过的检测项的数目。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PassedPolicyItemCount: number;
    /**
      * 此类资产未通过的检测的数目。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedPolicyItemCount: number;
    /**
      * 上次检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastCheckTime: string;
    /**
      * 检测结果：
RESULT_FAILED: 未通过。
RESULT_PASSED: 通过。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckResult: string;
}
/**
 * DescribeAssetImageRegistryVirusList请求参数结构体
 */
export interface DescribeAssetImageRegistryVirusListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 镜像信息
      */
    ImageInfo?: ImageInfo;
    /**
      * 镜像标识Id
      */
    Id?: number;
}
/**
 * DescribeReverseShellWhiteListDetail请求参数结构体
 */
export interface DescribeReverseShellWhiteListDetailRequest {
    /**
      * 白名单id
      */
    WhiteListId: string;
}
/**
 * ModifyVirusMonitorSetting返回参数结构体
 */
export interface ModifyVirusMonitorSettingResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceTaskAssetSummary返回参数结构体
 */
export interface DescribeComplianceTaskAssetSummaryResponse {
    /**
      * 返回用户的状态，

USER_UNINIT: 用户未初始化。
USER_INITIALIZING，表示用户正在初始化环境。
USER_NORMAL: 正常状态。
      */
    Status: string;
    /**
      * 返回各类资产的汇总信息的列表。
      */
    AssetSummaryList: Array<ComplianceAssetSummary>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWarningRules返回参数结构体
 */
export interface DescribeWarningRulesResponse {
    /**
      * 告警策略列表
      */
    WarningRules: Array<WarningRule>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行时文件查杀任务容器列表信息
 */
export interface VirusTaskInfo {
    /**
      * 容器名称
      */
    ContainerName: string;
    /**
      * 容器id
      */
    ContainerId: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 镜像Id
      */
    ImageId: string;
    /**
      * 主机名称
      */
    HostName: string;
    /**
      * 主机ip
      */
    HostIp: string;
    /**
      * 扫描状态：
WAIT: 等待扫描
FAILED: 失败
SCANNING: 扫描中
FINISHED: 结束
CANCELING: 取消中
CANCELED: 已取消
CANCEL_FAILED： 取消失败
      */
    Status: string;
    /**
      * 检测开始时间
      */
    StartTime: string;
    /**
      * 检测结束时间
      */
    EndTime: string;
    /**
      * 风险个数
      */
    RiskCnt: number;
    /**
      * 事件id
      */
    Id: string;
    /**
      * 错误原因:
SEND_SUCCESSED: 下发成功
SCAN_WAIT: agent排队扫描等待中
OFFLINE: 离线
SEND_FAILED:下发失败
TIMEOUT: 超时
LOW_AGENT_VERSION: 客户端版本过低
AGENT_NOT_FOUND: 镜像所属客户端版不存在
TOO_MANY: 任务过多
VALIDATION: 参数非法
INTERNAL: 服务内部错误
MISC: 其他错误
UNAUTH: 所在镜像未授权
SEND_CANCEL_SUCCESSED:下发成功
      */
    ErrorMsg: string;
}
/**
 * 集群安全检查受影响的工作负载Item
 */
export interface AffectedWorkloadItem {
    /**
      * 集群Id
      */
    ClusterId: string;
    /**
      * 集群名字
      */
    ClusterName: string;
    /**
      * 工作负载名称
      */
    WorkloadName: string;
    /**
      * 工作负载类型
      */
    WorkloadType: string;
    /**
      * 区域
      */
    Region: string;
    /**
      * 检测结果的验证信息
      */
    VerifyInfo: string;
}
/**
 * DescribeCompliancePeriodTaskList请求参数结构体
 */
export interface DescribeCompliancePeriodTaskListRequest {
    /**
      * 资产的类型，取值为：
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
      */
    AssetType?: string;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 需要返回的数量，默认为10，最大值为100。
      */
    Limit?: number;
}
/**
 * DescribeAccessControlRulesExport请求参数结构体
 */
export interface DescribeAccessControlRulesExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * 运行时容器高危系统调用事件描述信息
 */
export interface RiskSyscallEventDescription {
    /**
      * 描述信息
      */
    Description: string;
    /**
      * 解决方案
      */
    Solution: string;
    /**
      * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 系统调用名称
      */
    SyscallName: string;
    /**
      * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationTime: string;
}
/**
 * AddEditWarningRules返回参数结构体
 */
export interface AddEditWarningRulesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryRegistryList返回参数结构体
 */
export interface DescribeAssetImageRegistryRegistryListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryAssetStatus请求参数结构体
 */
export declare type DescribeAssetImageRegistryAssetStatusRequest = null;
/**
 * 基本镜像信息
 */
export interface ImageProgress {
    /**
      * 镜像id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId?: string;
    /**
      * 仓库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryType?: string;
    /**
      * 镜像仓库地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageRepoAddress?: string;
    /**
      * 实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName?: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace?: string;
    /**
      * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageName?: string;
    /**
      * 镜像tag
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageTag?: string;
    /**
      * 镜像扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanStatus?: string;
    /**
      * 镜像cve扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    CveProgress?: number;
    /**
      * 镜像敏感扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskProgress: number;
    /**
      * 镜像木马扫描进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusProgress: number;
}
/**
 * ModifyVirusScanTimeoutSetting请求参数结构体
 */
export interface ModifyVirusScanTimeoutSettingRequest {
    /**
      * 超时时长单位小时(5~24h)
      */
    Timeout: number;
    /**
      * 设置类型0一键检测，1定时检测
      */
    ScanType: number;
}
/**
 * CreateVirusScanAgain返回参数结构体
 */
export interface CreateVirusScanAgainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddEditAccessControlRule返回参数结构体
 */
export interface AddEditAccessControlRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCompliancePolicyItemFromWhitelist返回参数结构体
 */
export interface DeleteCompliancePolicyItemFromWhitelistResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAssetImageScanSetting返回参数结构体
 */
export interface CreateAssetImageScanSettingResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessControlRules返回参数结构体
 */
export interface DescribeAccessControlRulesResponse {
    /**
      * 事件总数量
      */
    TotalCount: number;
    /**
      * 访问控制策略信息列表
      */
    RuleSet: Array<RuleBaseInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEscapeRule返回参数结构体
 */
export interface ModifyEscapeRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全资产镜像简略信息
 */
export interface AssetSimpleImageInfo {
    /**
      * 镜像ID
      */
    ImageID: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 关联容器个数
      */
    ContainerCnt: number;
    /**
      * 最后扫描时间
      */
    ScanTime: string;
    /**
      * 镜像大小
      */
    Size: number;
}
/**
 * DescribeCompliancePolicyItemAffectedSummary请求参数结构体
 */
export interface DescribeCompliancePolicyItemAffectedSummaryRequest {
    /**
      * DescribeComplianceTaskPolicyItemSummaryList返回的CustomerPolicyItemId，表示检测项的ID。
      */
    CustomerPolicyItemId: number;
}
/**
 * DescribeVirusDetail返回参数结构体
 */
export interface DescribeVirusDetailResponse {
    /**
      * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId: string;
    /**
      * 镜像名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageName: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 木马文件大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size: number;
    /**
      * 木马文件路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilePath: string;
    /**
      * 最近生成时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifyTime: string;
    /**
      * 病毒名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirusName: string;
    /**
      * 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskLevel: string;
    /**
      * 容器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerName: string;
    /**
      * 容器id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerId: string;
    /**
      * 主机名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostName: string;
    /**
      * 主机id
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostId: string;
    /**
      * 进程名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessName: string;
    /**
      * 进程路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessPath: string;
    /**
      * 进程md5
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessMd5: string;
    /**
      * 进程id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessId: number;
    /**
      * 进程参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessArgv: string;
    /**
      * 进程链
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessChan: string;
    /**
      * 进程组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessAccountGroup: string;
    /**
      * 进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessStartAccount: string;
    /**
      * 进程文件权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcessFileAuthority: string;
    /**
      * 来源：0：一键扫描， 1：定时扫描 2：实时监控
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceType: number;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodName: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 事件描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    HarmDescribe: string;
    /**
      * 建议方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuggestScheme: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mark: string;
    /**
      * 风险文件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileName: string;
    /**
      * 文件MD5
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileMd5: string;
    /**
      * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventType: string;
    /**
      * DEAL_NONE:文件待处理
DEAL_IGNORE:已经忽略
DEAL_ADD_WHITELIST:加白
DEAL_DEL:文件已经删除
DEAL_ISOLATE:已经隔离
DEAL_ISOLATING:隔离中
DEAL_ISOLATE_FAILED:隔离失败
DEAL_RECOVERING:恢复中
DEAL_RECOVER_FAILED: 恢复失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 失败子状态:
FILE_NOT_FOUND:文件不存在
FILE_ABNORMAL:文件异常
FILE_ABNORMAL_DEAL_RECOVER:恢复文件时，文件异常
BACKUP_FILE_NOT_FOUND:备份文件不存在
CONTAINER_NOT_FOUND_DEAL_ISOLATE:隔离时，容器不存在
CONTAINER_NOT_FOUND_DEAL_RECOVER:恢复时，容器不存在
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubStatus: string;
    /**
      * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostIP: string;
    /**
      * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientIP: string;
    /**
      * 父进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
      */
    PProcessStartUser: string;
    /**
      * 父进程用户组
注意：此字段可能返回 null，表示取不到有效值。
      */
    PProcessUserGroup: string;
    /**
      * 父进程路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    PProcessPath: string;
    /**
      * 父进程命令行参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PProcessParam: string;
    /**
      * 祖先进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessStartUser: string;
    /**
      * 祖先进程用户组
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessUserGroup: string;
    /**
      * 祖先进程路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessPath: string;
    /**
      * 祖先进程命令行参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AncestorProcessParam: string;
    /**
      * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceAssetList返回参数结构体
 */
export interface DescribeComplianceAssetListResponse {
    /**
      * 返回资产的总数。
      */
    TotalCount: number;
    /**
      * 返回各类资产的列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AssetInfoList: Array<ComplianceAssetInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceAssetDetailInfo返回参数结构体
 */
export interface DescribeComplianceAssetDetailInfoResponse {
    /**
      * 某资产的详情。
      */
    AssetDetailInfo: ComplianceAssetDetailInfo;
    /**
      * 当资产为容器时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerDetailInfo: ComplianceContainerDetailInfo;
    /**
      * 当资产为镜像时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageDetailInfo: ComplianceImageDetailInfo;
    /**
      * 当资产为主机时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostDetailInfo: ComplianceHostDetailInfo;
    /**
      * 当资产为K8S时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    K8SDetailInfo: ComplianceK8SDetailInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAssetImageRegistryScanStop请求参数结构体
 */
export interface ModifyAssetImageRegistryScanStopRequest {
    /**
      * 是否扫描全部镜像
      */
    All?: boolean;
    /**
      * 扫描的镜像列表
      */
    Images?: Array<ImageInfo>;
    /**
      * 扫描的镜像列表
      */
    Id?: Array<number>;
    /**
      * 过滤条件
      */
    Filters?: Array<AssetFilters>;
    /**
      * 不要扫描的镜像列表，与Filters配合使用
      */
    ExcludeImageList?: Array<number>;
    /**
      * 是否仅扫描各repository最新版本的镜像
      */
    OnlyScanLatest?: boolean;
}
/**
 * DescribeVirusScanTaskStatus请求参数结构体
 */
export interface DescribeVirusScanTaskStatusRequest {
    /**
      * 任务id
      */
    TaskID?: string;
}
/**
 * 高危系统调用白名单信息
 */
export interface RiskSyscallWhiteListInfo {
    /**
      * 镜像id数组，为空代表全部
      */
    ImageIds: Array<string>;
    /**
      * 系统调用名称，通过DescribeRiskSyscallNames接口获取枚举列表
      */
    SyscallNames?: Array<string>;
    /**
      * 目标进程
      */
    ProcessPath?: string;
    /**
      * 白名单id，如果新建则id为空
      */
    Id?: string;
}
/**
 * DescribeCompliancePolicyItemAffectedAssetList返回参数结构体
 */
export interface DescribeCompliancePolicyItemAffectedAssetListResponse {
    /**
      * 返回各检测项所影响的资产的列表。
      */
    AffectedAssetList: Array<ComplianceAffectedAsset>;
    /**
      * 检测项影响的资产的总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComplianceAssetPolicyItemList请求参数结构体
 */
export interface DescribeComplianceAssetPolicyItemListRequest {
    /**
      * 客户资产的ID。
      */
    CustomerAssetId: number;
    /**
      * 起始偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 要获取的数据量，默认为10，最大为100。
      */
    Limit?: number;
    /**
      * 过滤器列表。Name字段支持
RiskLevel
      */
    Filters?: Array<ComplianceFilters>;
}
/**
 * DescribeAssetImageRegistryVulListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryVulListExportResponse {
    /**
      * excel文件下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行是安全详情，进程基础信息
 */
export interface ProcessDetailBaseInfo {
    /**
      * 进程名称
      */
    ProcessName: string;
    /**
      * 进程pid
      */
    ProcessId: number;
    /**
      * 进程启动用户
      */
    ProcessStartUser: string;
    /**
      * 进程用户组
      */
    ProcessUserGroup: string;
    /**
      * 进程路径
      */
    ProcessPath: string;
    /**
      * 进程命令行参数
      */
    ProcessParam: string;
}
/**
 * DescribeAssetHostList请求参数结构体
 */
export interface DescribeAssetHostListRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Status - String - 是否必填：否 - agent状态筛选，"ALL":"全部"(或不传该字段),"UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中"</li>
<li>HostName - String - 是否必填：否 - 主机名筛选</li>
<li>Group- String - 是否必填：否 - 主机群组搜索</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>HostID- string - 是否必填：否 - 主机id搜索</li>
<li>DockerVersion- string - 是否必填：否 - docker版本搜索</li>
<li>MachineType- string - 是否必填：否 - 主机来源MachineType搜索，"ALL":"全部"(或不传该字段),主机来源：["CVM", "ECM", "LH", "BM"]  中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；</li>
<li>DockerStatus- string - 是否必填：否 - docker安装状态，"ALL":"全部"(或不传该字段),"INSTALL":"已安装","UNINSTALL":"未安装"</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式 asc,desc
      */
    Order?: string;
}
/**
 * DescribeRiskSyscallEventsExport请求参数结构体
 */
export interface DescribeRiskSyscallEventsExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeRiskSyscallWhiteLists请求参数结构体
 */
export interface DescribeRiskSyscallWhiteListsRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 升序降序,asc desc
      */
    Order?: string;
    /**
      * 排序字段
      */
    By?: string;
}
/**
 * DescribeUnfinishRefreshTask请求参数结构体
 */
export declare type DescribeUnfinishRefreshTaskRequest = null;
/**
 * DescribeAssetImageRegistryScanStatusOneKey返回参数结构体
 */
export interface DescribeAssetImageRegistryScanStatusOneKeyResponse {
    /**
      * 镜像个数
      */
    ImageTotal: number;
    /**
      * 扫描镜像个数
      */
    ImageScanCnt: number;
    /**
      * 扫描进度列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageStatus: Array<ImageProgress>;
    /**
      * 安全个数
      */
    SuccessCount: number;
    /**
      * 风险个数
      */
    RiskCount: number;
    /**
      * 总的扫描进度
      */
    Schedule: number;
    /**
      * 总的扫描状态
      */
    Status: string;
    /**
      * 扫描剩余时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanRemainTime: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryRegistryDetail请求参数结构体
 */
export interface DescribeAssetImageRegistryRegistryDetailRequest {
    /**
      * 仓库唯一id
      */
    RegistryId: number;
}
/**
 * UpdateAssetImageRegistryRegistryDetail请求参数结构体
 */
export interface UpdateAssetImageRegistryRegistryDetailRequest {
    /**
      * 仓库名
      */
    Name: string;
    /**
      * 用户名
      */
    Username: string;
    /**
      * 密码
      */
    Password: string;
    /**
      * 仓库url
      */
    Url: string;
    /**
      * 仓库类型，列表：harbor
      */
    RegistryType: string;
    /**
      * 网络类型，列表：public（公网）
      */
    NetType: string;
    /**
      * 仓库版本
      */
    RegistryVersion?: string;
    /**
      * 区域，列表：default（默认）
      */
    RegistryRegion?: string;
    /**
      * 限速
      */
    SpeedLimit?: number;
    /**
      * 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1
      */
    Insecure?: number;
}
/**
 * 容器安全服务信息列表
 */
export interface ServiceInfo {
    /**
      * 服务id
      */
    ServiceID: string;
    /**
      * 主机id
      */
    HostID: string;
    /**
      * 主机ip
      */
    HostIP: string;
    /**
      * 容器名
      */
    ContainerName: string;
    /**
      * 服务名 例如nginx/redis
      */
    Type: string;
    /**
      * 版本
      */
    Version: string;
    /**
      * 账号
      */
    RunAs: string;
    /**
      * 监听端口
      */
    Listen: Array<string>;
    /**
      * 配置
      */
    Config: string;
    /**
      * 关联进程数
      */
    ProcessCnt: number;
    /**
      * 访问日志
      */
    AccessLog: string;
    /**
      * 错误日志
      */
    ErrorLog: string;
    /**
      * 数据目录
      */
    DataPath: string;
    /**
      * web目录
      */
    WebRoot: string;
    /**
      * 关联的进程id
      */
    Pids: Array<number>;
    /**
      * 服务类型 app,web,db
      */
    MainType: string;
    /**
      * 执行文件
      */
    Exe: string;
    /**
      * 服务命令行参数
      */
    Parameter: string;
    /**
      * 容器id
      */
    ContainerId: string;
    /**
      * 主机名称
      */
    HostName: string;
    /**
      * 外网ip
      */
    PublicIp: string;
}
/**
 * AddEditReverseShellWhiteList请求参数结构体
 */
export interface AddEditReverseShellWhiteListRequest {
    /**
      * 增加或编辑白名单信息。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空。
      */
    WhiteListInfo: ReverseShellWhiteListInfo;
    /**
      * 仅在添加事件白名单时候使用
      */
    EventId?: string;
}
/**
 * DescribeVirusTaskList请求参数结构体
 */
export interface DescribeVirusTaskListRequest {
    /**
      * 任务id
      */
    TaskId: string;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>ContainerName - String - 是否必填：否 - 容器名称</li>
<li>ContainerId - String - 是否必填：否 - 容器id</li>
<li>Hostname - String - 是否必填：否 - 主机名称</li>
<li>HostIp- String - 是否必填：是 - 容器名称</li>
      */
    Filters?: Array<RunTimeFilters>;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式
      */
    Order?: string;
}
/**
 * DescribeAssetImageRegistryVirusListExport请求参数结构体
 */
export interface DescribeAssetImageRegistryVirusListExportRequest {
    /**
      * 导出字段
      */
    ExportField: Array<string>;
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
      */
    Filters?: Array<AssetFilters>;
    /**
      * 镜像信息
      */
    ImageInfo?: ImageInfo;
    /**
      * 镜像标识Id
      */
    Id?: number;
}
/**
 * DescribeAssetImageRegistryListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryListExportResponse {
    /**
      * excel文件下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器安全运行时，文件属性信息
 */
export interface FileAttributeInfo {
    /**
      * 文件名
      */
    FileName: string;
    /**
      * 文件类型
      */
    FileType: string;
    /**
      * 文件大小(字节)
      */
    FileSize: number;
    /**
      * 文件路径
      */
    FilePath: string;
    /**
      * 文件创建时间
      */
    FileCreateTime: string;
    /**
      * 最近被篡改文件创建时间
      */
    LatestTamperedFileMTime: string;
}
/**
 * DescribePostPayDetail请求参数结构体
 */
export interface DescribePostPayDetailRequest {
    /**
      * 需要返回的数量，默认为10，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * DescribeAssetHostDetail请求参数结构体
 */
export interface DescribeAssetHostDetailRequest {
    /**
      * 主机id
      */
    HostId: string;
}
/**
 * DescribeRefreshTask返回参数结构体
 */
export interface DescribeRefreshTaskResponse {
    /**
      * 刷新任务状态，可能为：Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist
      */
    TaskStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 反弹shell白名单信息
 */
export interface ReverseShellWhiteListInfo {
    /**
      * 目标IP
      */
    DstIp: string;
    /**
      * 目标端口
      */
    DstPort: string;
    /**
      * 目标进程
      */
    ProcessName: string;
    /**
      * 镜像id数组，为空代表全部
      */
    ImageIds: Array<string>;
    /**
      * 白名单id，如果新建则id为空
      */
    Id?: string;
}
/**
 * 运行时木马列表信息
 */
export interface VirusInfo {
    /**
      * 文件名称
      */
    FileName: string;
    /**
      * 文件路径
      */
    FilePath: string;
    /**
      * 病毒名称
      */
    VirusName: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    ModifyTime: string;
    /**
      * 容器名称
      */
    ContainerName: string;
    /**
      * 容器id
      */
    ContainerId: string;
    /**
      * 容器状态，CS_RUNING:运行， CS_PAUSE:暂停，CS_STOP:停止，
                                                       CS_CREATE:已经创建， CS_DESTORY:销毁
      */
    ContainerStatus: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 镜像id
      */
    ImageId: string;
    /**
      * DEAL_NONE:文件待处理
DEAL_IGNORE:已经忽略
DEAL_ADD_WHITELIST:加白
DEAL_DEL:文件已经删除
DEAL_ISOLATE:已经隔离
DEAL_ISOLATING:隔离中
DEAL_ISOLATE_FAILED:隔离失败
DEAL_RECOVERING:恢复中
DEAL_RECOVER_FAILED: 恢复失败
      */
    Status: string;
    /**
      * 事件id
      */
    Id: string;
    /**
      * 事件描述
      */
    HarmDescribe: string;
    /**
      * 建议方案
      */
    SuggestScheme: string;
    /**
      * 失败子状态:
FILE_NOT_FOUND:文件不存在
FILE_ABNORMAL:文件异常
FILE_ABNORMAL_DEAL_RECOVER:恢复文件时，文件异常
BACKUP_FILE_NOT_FOUND:备份文件不存在
CONTAINER_NOT_FOUND_DEAL_ISOLATE:隔离时，容器不存在
CONTAINER_NOT_FOUND_DEAL_RECOVER:恢复时，容器不存在
TIMEOUT: 超时
TOO_MANY: 任务过多
OFFLINE: 离线
INTERNAL: 服务内部错误
VALIDATION: 参数非法
      */
    SubStatus: string;
}
/**
 * 修改容器逃逸扫描策略开关信息
 */
export interface EscapeRuleEnabled {
    /**
      * 规则类型
   ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
   ESCAPE_SYSCALL:Syscall逃逸
      */
    Type: string;
    /**
      * 是否打开：false否 ，true是
      */
    IsEnable: boolean;
}
