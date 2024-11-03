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
 * DescribeSecLogDeliveryKafkaSetting请求参数结构体
 */
export declare type DescribeSecLogDeliveryKafkaSettingRequest = null;
/**
 * DescribeSearchTemplates返回参数结构体
 */
export interface DescribeSearchTemplatesResponse {
    /**
     * 总数
     */
    TotalCount: number;
    /**
     * 模板列表
     */
    List: Array<SearchTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 扫描忽略的漏洞
 */
export interface ScanIgnoreVul {
    /**
     * 漏洞名称
     */
    VulName: string;
    /**
     * 漏洞CVEID
     */
    CVEID: string;
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 忽略的仓库镜像数
     */
    RegistryImageCount: number;
    /**
     * 更新时间
     */
    UpdateTime: string;
    /**
     * 是否忽略所有镜像：0：否/1：是
     */
    IsIgnoreAll: number;
    /**
     * 忽略的本地镜像数
     */
    LocalImageCount: number;
}
/**
 * UpdateImageRegistryTimingScanTask返回参数结构体
 */
export interface UpdateImageRegistryTimingScanTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScanIgnoreVulList返回参数结构体
 */
export interface DescribeScanIgnoreVulListResponse {
    /**
     * 总是
     */
    TotalCount?: number;
    /**
     * 漏洞列表
     */
    List?: Array<ScanIgnoreVul>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyVulDefenceEventStatus请求参数结构体
 */
export interface ModifyVulDefenceEventStatusRequest {
    /**
     * 事件IDs数组
     */
    EventIDs: Array<number | bigint>;
    /**
     * 操作状态：
  EVENT_DEALED：已处理，EVENT_IGNORE：忽略，EVENT_ISOLATE_CONTAINER：隔离容器，EVENT_DEL：删除
     */
    Status: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * ModifyVirusAutoIsolateExampleSwitch返回参数结构体
 */
export interface ModifyVirusAutoIsolateExampleSwitchResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventEscapeImageList返回参数结构体
 */
export interface DescribeEventEscapeImageListResponse {
    /**
     * 风险容器镜像列表
     */
    List?: Array<EventEscapeImageInfo>;
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Ckafka topic信息
 */
export interface CKafkaTopicInfo {
    /**
     * 主题ID
     */
    TopicID: string;
    /**
     * 主题名称
     */
    TopicName: string;
}
/**
 * CreateVulExportJob返回参数结构体
 */
export interface CreateVulExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TaskId?: number;
    /**
     * 任务状态，为Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist.Task_New,Task_Running表示有任务存在，不允许新下发
     */
    TaskStatus?: string;
    /**
     * 新任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewTaskID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateComponentExportJob请求参数结构体
 */
export interface CreateComponentExportJobRequest {
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 需要返回的数量，默认为10000，最大值为10000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>ComponentName- String - 是否必填：否 - 镜像组件名称</li><li>ComponentVersion- String - 是否必填：否 - 镜像组件版本</li><li>ComponentType- String - 是否必填：否 - 镜像组件类型</li><li>VulLevel- String - 是否必填：否 - 漏洞威胁等级</li><li>HasVul- String - 是否必填：否 -是否有漏洞；true：是，false，否；不传或ALL ：全部</li>
     */
    Filters?: Array<AssetFilters>;
    /**
     * 排序字段
     */
    By?: string;
    /**
     * 排序方式desc ，asc
     */
    Order?: string;
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
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
 * CreateNetworkFirewallUndoPublish请求参数结构体
 */
export interface CreateNetworkFirewallUndoPublishRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略Id数组
     */
    Id: Array<number | bigint>;
}
/**
 * CreateRefreshTask返回参数结构体
 */
export interface CreateRefreshTaskResponse {
    /**
     * 返回创建的集群检查任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建检查任务的结果，"Succ"为成功，"Failed"为失败
     */
    CreateResult?: string;
    /**
     * 返回创建的新集群检查任务ID
     */
    NewTaskID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateVulDefenceHostExportJob返回参数结构体
 */
export interface CreateVulDefenceHostExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventEscapeImageList请求参数结构体
 */
export interface DescribeEventEscapeImageListRequest {
    /**
     * 需要返回的数量，默认为10，最大值为100
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤参数:
  EventType: 事件类型(MOUNT_SENSITIVE_PTAH:敏感路径挂载 PRIVILEGE_CONTAINER_START:特权容器)
  Status: 事件状态(EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略)
  ImageID: 镜像id
  ImageName:镜像名称
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
 * 容器安全镜像漏洞信息
 */
export interface ImageVul {
    /**
     * 漏洞id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVEID?: string;
    /**
     * 观点验证程序id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    POCID?: string;
    /**
     * 漏洞名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 涉及组件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Components?: Array<ComponentsInfo>;
    /**
     * 分类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Category?: string;
    /**
     * 分类2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CategoryType?: string;
    /**
     * 风险等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Des?: string;
    /**
     * 解决方案
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfficialSolution?: string;
    /**
     * 引用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reference?: string;
    /**
     * 防御方案
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenseSolution?: string;
    /**
     * 提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitTime?: string;
    /**
     * Cvss分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CvssScore?: string;
    /**
     * Cvss信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CvssVector?: string;
    /**
     * 是否建议修复
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsSuggest?: string;
    /**
     * 修复版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FixedVersions?: string;
    /**
     * 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<string>;
    /**
     * 组件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Component?: string;
    /**
     * 组件版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 攻击热度 0-3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttackLevel?: number;
    /**
     * 镜像层信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LayerInfos?: Array<ImageVulLayerInfo>;
}
/**
 * CreateVulImageExportJob返回参数结构体
 */
export interface CreateVulImageExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 运行时容器访问控制事件描述信息
 */
export interface AbnormalProcessEventDescription {
    /**
     * 事件规则
     */
    Description?: string;
    /**
     * 解决方案
     */
    Solution?: string;
    /**
     * 事件备注信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 命中规则详细信息
     */
    MatchRule?: AbnormalProcessChildRuleInfo;
    /**
     * 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则
     */
    RuleName?: string;
    /**
     * 命中规则的id
     */
    RuleId?: string;
    /**
     * 事件最后一次处理的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperationTime?: string;
    /**
     * 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或  用户自定义的策略名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulImageList返回参数结构体
 */
export interface DescribeVulImageListResponse {
    /**
     * 受影响的镜像列表
     */
    List?: Array<VulAffectedImageInfo>;
    /**
     * 镜像总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateVulExportJob请求参数结构体
 */
export interface CreateVulExportJobRequest {
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 导出字段
     */
    ExportField: Array<string>;
    /**
     * 需要返回的数量，默认为10000，最大值为10000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>ComponentName- String - 是否必填：否 - 镜像组件名称</li><li>ComponentVersion- String - 是否必填：否 - 镜像组件版本</li><li>ComponentType- String - 是否必填：否 - 镜像组件类型</li><li>VulLevel- String - 是否必填：否 - 漏洞威胁等级</li><li>HasVul- String - 是否必填：否 -是否有漏洞；true：是，false，否；不传或ALL ：全部</li>
     */
    Filters?: Array<AssetFilters>;
    /**
     * 排序字段
     */
    By?: string;
    /**
     * 排序方式desc ，asc
     */
    Order?: string;
}
/**
 * DescribeNetworkFirewallNamespaceLabelList返回参数结构体
 */
export interface DescribeNetworkFirewallNamespaceLabelListResponse {
    /**
     * 集群总数
     */
    TotalCount: number;
    /**
     * 集群空间标签详细信息
     */
    ClusterNamespaceLabelList: Array<NetworkClusterNamespaceLabelInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulImageList请求参数结构体
 */
export interface DescribeVulImageListRequest {
    /**
     * 漏洞PocID
     */
    PocID: string;
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
  <li>OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>HostIP- string -是否必填: 否 - 内网IP</li>
  <li>PublicIP- string -是否必填: 否 - 外网IP</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>HostName- string -是否必填: 否 - 主机名称</li>
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
 * DescribeAssetImageRegistryVulList返回参数结构体
 */
export interface DescribeAssetImageRegistryVulListResponse {
    /**
     * 镜像漏洞列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ImageVul>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞扫描的镜像信息
 */
export interface VulScanImageInfo {
    /**
     * 镜像ID
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
     * 任务状态:SCANNING:扫描中 FAILED:失败 FINISHED:完成 CANCELED:取消
     */
    ScanStatus: string;
    /**
     * 扫描时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanDuration: number;
    /**
     * 高危漏洞数
     */
    HighLevelVulCount: number;
    /**
     * 中危漏洞数
     */
    MediumLevelVulCount: number;
    /**
     * 低危漏洞数
     */
    LowLevelVulCount: number;
    /**
     * 严重漏洞数
     */
    CriticalLevelVulCount: number;
    /**
     * 本地镜像漏洞扫描任务ID
     */
    TaskID: number;
    /**
     * 漏洞扫描的开始时间
     */
    ScanStartTime: string;
    /**
     * 漏洞扫描的结束时间
     */
    ScanEndTime: string;
    /**
     * 失败原因:TIMEOUT:超时 TOO_MANY:任务过多 OFFLINE:离线
     */
    ErrorStatus: string;
}
/**
 * AddAssetImageRegistryRegistryDetail返回参数结构体
 */
export interface AddAssetImageRegistryRegistryDetailResponse {
    /**
     * 连接错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckErr?: string;
    /**
     * 名称错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameRepeatErr?: string;
    /**
     * 仓库唯一id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    WhitelistIdSet: Array<number | bigint>;
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
 * 漏洞扫描忽略的本地镜像
 */
export interface VulIgnoreLocalImage {
    /**
     * 记录ID
     */
    ID: number;
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 镜像大小
     */
    ImageSize: number;
    /**
     * 漏洞PocID
     */
    PocID: string;
}
/**
 * ModifyK8sApiAbnormalRuleInfo返回参数结构体
 */
export interface ModifyK8sApiAbnormalRuleInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 联通性检测的记录ID
     */
    ConnDetectConfig?: Array<ConnDetectConfig>;
    /**
     * ”授权&扫描"开关
     */
    NeedScan?: boolean;
}
/**
 * AddIgnoreVul返回参数结构体
 */
export interface AddIgnoreVulResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞防御攻击事件趋势
 */
export interface VulDefenceEventTendency {
    /**
     * 日期
     */
    Date: string;
    /**
     * 事件数量
     */
    EventCount: number;
}
/**
 * DescribeNetworkFirewallClusterRefreshStatus请求参数结构体
 */
export interface DescribeNetworkFirewallClusterRefreshStatusRequest {
    /**
     * 任务ID
     */
    TaskId: number;
}
/**
 * DescribeAssetImageRegistryVirusListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryVirusListExportResponse {
    /**
     * excel文件下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    EventTendencySet?: Array<SecTendencyEventInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    DownloadUrl?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集群的pod详细信息
 */
export interface ClusterPodInfo {
    /**
     * Pod名称.
     */
    PodName?: string;
    /**
     * Pod状态
     */
    Status?: string;
    /**
     * Pod IP
     */
    PodIP?: string;
    /**
     * 节点内网Ip
     */
    NodeLanIP?: string;
    /**
     * 所属的工作负载名字
     */
    WorkloadName?: string;
    /**
     * 所属工作负载类型
     */
    WorkloadKind?: string;
    /**
     * 所属集群名字
     */
    ClusterName?: string;
    /**
     * 所属集群ID
     */
    ClusterId?: string;
    /**
     * 所属命名空间
     */
    Namespace?: string;
    /**
     * 所属地域
     */
    Region?: string;
    /**
     * 运行时间
     */
    Age?: string;
    /**
     * 创建时间
     */
    StartTime?: string;
    /**
     * 重启次数
     */
    Restarts?: number;
    /**
     * 关联的service名字
     */
    ServiceName?: string;
    /**
     * 关联的service数量
     */
    ServiceCount?: number;
    /**
     * 关联的容器名字
     */
    ContainerName?: string;
    /**
     * 关联的容器数量
     */
    ContainerCount?: number;
    /**
     * CPU占用率
     */
    CPU?: number;
    /**
     * 内存占用量
     */
    Memory?: number;
    /**
     * Pod标签
     */
    Labels?: string;
    /**
     * 集群状态
     */
    ClusterStatus?: string;
    /**
     * 工作负载标签
     */
    WorkloadLabels?: string;
    /**
     * 容器Id
     */
    ContainerId?: string;
    /**
     * 主机名称
     */
    HostName?: string;
    /**
     * 主机Id
     */
    HostId?: string;
    /**
     * 集群类型
     */
    ClusterType?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * NORMAL：普通节点 SUPER：超级节点
     */
    NodeType?: string;
    /**
     * 计费核数
     */
    ChargeCoresCnt?: number;
}
/**
 * DescribeNetworkFirewallPolicyDetail请求参数结构体
 */
export interface DescribeNetworkFirewallPolicyDetailRequest {
    /**
     * 策略Id
     */
    Id: number;
}
/**
 * CreateAccessControlsRuleExportJob返回参数结构体
 */
export interface CreateAccessControlsRuleExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAssetImageRegistryScanStop返回参数结构体
 */
export interface ModifyAssetImageRegistryScanStopResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * SetCheckMode返回参数结构体
 */
export interface SetCheckModeResponse {
    /**
     * "Succ"表示设置成功，"Failed"表示设置失败
     */
    SetCheckResult: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全日志接入对象详情
 */
export interface SecLogJoinObjectInfo {
    /**
     * 主机ID
     */
    HostID?: string;
    /**
     * 主机名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostName?: string;
    /**
     * 主机IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostIP?: string;
    /**
     * 主机状态
     */
    HostStatus?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterID?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 外网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIP?: string;
    /**
     * 接入状态(true:已接入  false:未接入)
     */
    JoinState?: boolean;
    /**
     * 集群版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterVersion?: string;
    /**
     * 集群主节点地址
     */
    ClusterMainAddress?: string;
    /**
     * 容器数
     */
    ContainerCnt?: number;
    /**
     * 集群类型
     */
    ClusterType?: string;
    /**
     * 集群状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterStatus?: string;
}
/**
 * DescribeVulImageSummary请求参数结构体
 */
export declare type DescribeVulImageSummaryRequest = null;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVirusAutoIsolateSampleDetail返回参数结构体
 */
export interface DescribeVirusAutoIsolateSampleDetailResponse {
    /**
     * 文件Md5值
     */
    MD5?: string;
    /**
     * 文件大小(B)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 病毒名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusName?: string;
    /**
     * 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: string;
    /**
     * 查杀引擎
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KillEngine?: Array<string>;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<string>;
    /**
     * 事件描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HarmDescribe?: string;
    /**
     * 建议方案
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuggestScheme?: string;
    /**
     * 参考链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReferenceLink?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulDefenceEventTendency请求参数结构体
 */
export interface DescribeVulDefenceEventTendencyRequest {
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
    State?: number;
    /**
     * 总资源核数 = 总防护核数 + 未防护核数
     */
    AllCoresCnt?: number;
    /**
     * 总防护核数 =已购核数+ 试用赠送核数 +弹性计费核数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoresCnt?: number;
    /**
     * 未防护核数(未开启防护资源核数)
     */
    UndefendCoresCnt?: number;
    /**
     * 已购买核数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorizedCoresCnt?: number;
    /**
     * 试用赠送专业版核心数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GivenAuthorizedCoresCnt?: number;
    /**
     * 当前弹性计费核数数量
     */
    CurrentFlexibleCoresCnt?: number;
    /**
     * 镜像数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageCnt?: number;
    /**
     * 已授权镜像数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorizedImageCnt?: number;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpirationTime?: string;
    /**
     * 已购买镜像授权数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PurchasedAuthorizedCnt?: number;
    /**
     * 0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutomaticRenewal?: number;
    /**
     * 试用期间赠送镜像授权数，可能会过期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GivenAuthorizedCnt?: number;
    /**
     * 起始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime?: string;
    /**
     * 子状态(具体意义依据State字段而定)
  State为4时，有效值为: ISOLATE(隔离) DESTROED(已销毁)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubState?: string;
    /**
     * 计费key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InquireKey?: string;
    /**
     * 防护策略
     */
    DefendPolicy?: string;
    /**
     * 弹性计费核数上限
     */
    FlexibleCoresLimit?: number;
    /**
     * 已防护集群核数
     */
    DefendClusterCoresCnt?: number;
    /**
     * 已防护主机核数
     */
    DefendHostCoresCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 后付费详情
 */
export interface SoftQuotaDayInfo {
    /**
     * 扣费时间
     */
    PayTime: string;
    /**
     * 计费核数(已废弃)
     */
    CoresCnt: number;
}
/**
 * DescribeVulDefencePlugin返回参数结构体
 */
export interface DescribeVulDefencePluginResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 漏洞防御插件列表
     */
    List?: Array<VulDefencePlugin>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Name?: string;
    /**
     * 用户名
     */
    Username?: string;
    /**
     * 密码
     */
    Password?: string;
    /**
     * 仓库url
     */
    Url?: string;
    /**
     * 仓库类型，列表：harbor
     */
    RegistryType?: string;
    /**
     * 仓库版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryVersion?: string;
    /**
     * 网络类型，列表：public（公网）,private（私网）
     */
    NetType?: string;
    /**
     * 区域，列表:default（默认）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryRegion?: string;
    /**
     * 限速
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpeedLimit?: number;
    /**
     * 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Insecure?: number;
    /**
     * 联通性检测结果详情
     */
    ConnDetectDetail?: Array<RegistryConnDetectResult>;
    /**
     * tcr情况下instance_id
     */
    InstanceID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteEscapeWhiteList请求参数结构体
 */
export interface DeleteEscapeWhiteListRequest {
    /**
     * 白名单记录ID数组
     */
    IDSet: Array<number | bigint>;
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
 * ModifyK8sApiAbnormalRuleInfo请求参数结构体
 */
export interface ModifyK8sApiAbnormalRuleInfoRequest {
    /**
     * 规则详情
     */
    RuleInfo: K8sApiAbnormalRuleInfo;
}
/**
 * UpdateAndPublishNetworkFirewallPolicyDetail返回参数结构体
 */
export interface UpdateAndPublishNetworkFirewallPolicyDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeSecLogDeliveryClsOptions请求参数结构体
 */
export interface DescribeSecLogDeliveryClsOptionsRequest {
    /**
     * 地域
     */
    ClsRegion?: string;
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
 * DescribeVulTendency返回参数结构体
 */
export interface DescribeVulTendencyResponse {
    /**
     * 漏洞趋势列表
     */
    VulTendencySet?: Array<VulTendencyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeAutoAuthorizedRuleHost请求参数结构体
 */
export interface DescribeAutoAuthorizedRuleHostRequest {
    /**
     * 规则id
     */
    RuleId: number;
    /**
     * 需要返回的数量，默认为全部；
     */
    Limit?: number;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 排序字段
     */
    Order?: string;
    /**
     * 排序方式，asc，desc
     */
    By?: string;
}
/**
 * ScanCompliancePolicyItems请求参数结构体
 */
export interface ScanCompliancePolicyItemsRequest {
    /**
     * 要重新扫描的客户检测项的列表。
     */
    CustomerPolicyItemIdSet: Array<number | bigint>;
}
/**
 * DescribeAgentDaemonSetCmd返回参数结构体
 */
export interface DescribeAgentDaemonSetCmdResponse {
    /**
     * 安装命令
     */
    Command?: string;
    /**
     * 文件url
     */
    URL?: string;
    /**
     * 文件内容(base64编码)
     */
    FileContent?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    TaskID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteRiskSyscallEvents返回参数结构体
 */
export interface DeleteRiskSyscallEventsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * OpenTcssTrial返回参数结构体
 */
export interface OpenTcssTrialResponse {
    /**
     * 试用开通结束时间
     */
    EndTime?: string;
    /**
     * 试用开通开始时间
     */
    StartTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSearchExportList返回参数结构体
 */
export interface DescribeSearchExportListResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateVulScanTask请求参数结构体
 */
export interface CreateVulScanTaskRequest {
    /**
     * 本地镜像扫描范围类型。ALL:全部本地镜像，NOT_SCAN：全部已授权未扫描本地镜像，IMAGEIDS:自选本地镜像ID
     */
    LocalImageScanType?: string;
    /**
     * 根据已授权的本地镜像IDs扫描，优先权高于根据满足条件的已授权的本地镜像。
     */
    LocalImageIDs?: Array<string>;
    /**
     * 仓库镜像扫描范围类型。ALL:全部仓库镜像，NOT_SCAN：全部已授权未扫描仓库镜像，IMAGEIDS:自选仓库镜像ID
     */
    RegistryImageScanType?: string;
    /**
     * 根据已授权的仓库镜像IDs扫描，优先权高于根据满足条件的已授权的仓库镜像。
     */
    RegistryImageIDs?: Array<number | bigint>;
    /**
     * 本地镜像重新漏洞扫描时的任务ID
     */
    LocalTaskID?: number;
    /**
     * 仓库镜像重新漏洞扫描时的任务ID
     */
    RegistryTaskID?: number;
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
    Description?: string;
    /**
     * 解决方案
     */
    Solution?: string;
    /**
     * 事件备注信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 命中规则详细信息
     */
    MatchRule?: AccessControlChildRuleInfo;
    /**
     * 命中规则名字
     */
    RuleName?: string;
    /**
     * 命中规则id
     */
    RuleId?: string;
    /**
     * 事件最后一次处理的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperationTime?: string;
}
/**
 * DescribeAccessControlEvents返回参数结构体
 */
export interface DescribeAccessControlEventsResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 访问控制事件数组
     */
    EventSet?: Array<AccessControlEventInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全日志日志投递kafka设置详情
 */
export interface SecLogDeliveryKafkaSettingInfo {
    /**
     * 日志类型
     */
    LogType: string;
    /**
     * 主题ID
     */
    TopicID: string;
    /**
     * 主题名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName: string;
    /**
     * 投递状态(false:关 true:开)
     */
    State: boolean;
}
/**
 * DescribeRiskSyscallWhiteLists返回参数结构体
 */
export interface DescribeRiskSyscallWhiteListsResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 白名单信息列表
     */
    WhiteListSet?: Array<RiskSyscallWhiteListBaseInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNetworkFirewallPolicyDiscover返回参数结构体
 */
export interface CreateNetworkFirewallPolicyDiscoverResponse {
    /**
     * 返回创建的集群检查任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建检查任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表示一项资产的详情。
 */
export interface ComplianceAssetDetailInfo {
    /**
     * 客户资产的ID。
     */
    CustomerAssetId?: number;
    /**
     * 资产类别。
     */
    AssetType?: string;
    /**
     * 资产的名称。
     */
    AssetName?: string;
    /**
     * 资产所属的节点的名称。
     */
    NodeName?: string;
    /**
     * 资产所在的主机的名称。
     */
    HostName?: string;
    /**
     * 资产所在的主机的IP。
     */
    HostIP?: string;
    /**
     * 检测状态
  CHECK_INIT, 待检测
  CHECK_RUNNING, 检测中
  CHECK_FINISHED, 检测完成
  CHECK_FAILED, 检测失败
     */
    CheckStatus?: string;
    /**
     * 此类资产通过的检测项的数目。
     */
    PassedPolicyItemCount?: number;
    /**
     * 此类资产未通过的检测的数目。
     */
    FailedPolicyItemCount?: number;
    /**
     * 上次检测的时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastCheckTime?: string;
    /**
     * 检测结果：
  RESULT_FAILED: 未通过。
  RESULT_PASSED: 通过。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckResult?: string;
    /**
     * 资产的运行状态。
     */
    AssetStatus?: string;
    /**
     * 创建资产的时间。
  ASSET_NORMAL: 正常运行，
  ASSET_PAUSED: 暂停运行，
  ASSET_STOPPED: 停止运行，
  ASSET_ABNORMAL: 异常
     */
    AssetCreateTime?: string;
}
/**
 * 未授权核数趋势
 */
export interface UnauthorizedCoresTendency {
    /**
     * 日期
     */
    DateTime: string;
    /**
     * 未授权的核数
     */
    CoresCount: number;
}
/**
 * DescribeRiskSyscallEvents返回参数结构体
 */
export interface DescribeRiskSyscallEventsResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 高危系统调用数组
     */
    EventSet?: Array<RiskSyscallEventInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集群列表Item
 */
export interface AssetClusterListItem {
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群状态
  CSR_RUNNING: 运行中
  CSR_EXCEPTION:异常
  CSR_DEL:已经删除
     */
    Status?: string;
    /**
     * 绑定规则名称
     */
    BindRuleName?: string;
    /**
     * 集群类型:
  CT_TKE:TKE集群;
  CT_USER_CREATE:用户自建集群;
  CT_TKE_SERVERLESS:TKE Serverless集群;
     */
    ClusterType?: string;
    /**
     * 集群版本
     */
    ClusterVersion?: string;
    /**
     * 内存量
     */
    MemLimit?: number;
    /**
     * cpu
     */
    CpuLimit?: number;
}
/**
 * 网络集群策略返回的结构体
 */
export interface NetworkPolicyInfoItem {
    /**
     * 网络策略名
     */
    Name: string;
    /**
     * 网络策略描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 发布状态：
  
  开启待确认：PublishedNoConfirm
  
  开启已确认：PublishedConfirmed
  
  关闭中：unPublishing
  
  开启中：Publishing
  
  待开启：unPublishEdit
     */
    PublishStatus: string;
    /**
     * 策略类型：
  
  自动发现：System
  
  手动添加：Manual
     */
    PolicySourceType: string;
    /**
     * 策略空间
     */
    Namespace: string;
    /**
     * 策略创建日期
     */
    PolicyCreateTime: string;
    /**
     * 策略类型
  
  kube-router：KubeRouter
  
  cilium：Cilium
     */
    NetworkPolicyPlugin: string;
    /**
     * 策略发布结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublishResult: string;
    /**
     * 入站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    FromPolicyRule: number;
    /**
     * 入站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    ToPolicyRule: number;
    /**
     * 作用对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodSelector: string;
    /**
     * 网络策略Id
     */
    Id: number;
}
/**
 * DescribeAssetImageRiskList返回参数结构体
 */
export interface DescribeAssetImageRiskListResponse {
    /**
     * 镜像病毒列表
     */
    List?: Array<ImageRiskInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEmergencyVulExportJob返回参数结构体
 */
export interface CreateEmergencyVulExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateVulDefenceEventExportJob请求参数结构体
 */
export interface CreateVulDefenceEventExportJobRequest {
    /**
     * 过滤条件。
  <li>Status- String - 是否必填：否 - 插件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_DEFENDED：已防御</li>
  <li>ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED </li>
  <li>ContainerNetStatus- String -是否必填: 否 -  容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATING</li>
  <li>EventType - String -是否必填: 否 -  入侵状态，防御成功：EVENT_DEFENDED，尝试攻击：EVENT_ATTACK </li>
  <li>TimeRange- String -是否必填: 否 -  时间范围，第一个值表示开始时间，第二个值表示结束时间 </li>
  <li>VulName- string - 是否必填：否 - 漏洞名称。</li>
  <li>CVEID- string - 是否必填：否 - CVE编号。</li>
  <li>SourceIP- string - 是否必填：否 - 攻击源IP。</li>
  <li>ContainerName- string - 是否必填：否 - 容器名称。</li>
  <li>ContainerID- string - 是否必填：否 - 容器ID。</li>
  <li>ImageName- string - 是否必填：否 - 镜像名称。</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID。</li>
  <li>HostName- string - 是否必填：否 - 主机名称。</li>
  <li>HostIP- string - 是否必填：否 - 内网IP。</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 需要返回的数量，最大值为100000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：事件数量：EventCount
     */
    By?: string;
}
/**
 * 集群自定义参数
 */
export interface ClusterCustomParameters {
    /**
     * 参数名
     */
    Name: string;
    /**
     * 参数值
     */
    Values: Array<string>;
}
/**
 * DeleteIgnoreVul请求参数结构体
 */
export interface DeleteIgnoreVulRequest {
    /**
     * 漏洞PocID 信息列表
     */
    List: Array<ModifyIgnoreVul>;
}
/**
 * DescribeReverseShellEvents返回参数结构体
 */
export interface DescribeReverseShellEventsResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 反弹shell数组
     */
    EventSet?: Array<ReverseShellEventInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 关联主机数
     */
    HostCnt: number;
}
/**
 * DescribeComplianceAssetDetailInfo请求参数结构体
 */
export interface DescribeComplianceAssetDetailInfoRequest {
    /**
     * 客户资产ID。
     */
    CustomerAssetId: number;
    /**
     * 资产类型 <li>ASSET_CONTAINER Docker容器</li> <li>ASSET_IMAGE Docker镜像</li> <li>ASSET_HOST Docker主机</li> <li>ASSET_K8S Kubernetes</li> <li>ASSET_CONTAINERD Containerd主机</li> <li>ASSET_CONTAINERD_CONTAINER Containerd容器</li>
     */
    AssetType?: string;
}
/**
 * 网络集群策略自定义规则
 */
export interface NetworkPeer {
    /**
     * 对象类型：
  
  命名空间：NamespaceSelector，代表NamespaceSelector有值
  
  pod类型：PodSelector，代表NamespaceSelector和PodSelector都有值
  
  ip类型：IPBlock，代表只有IPBlock有值
     */
    PeerType: string;
    /**
     * 空间选择器
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceSelector?: string;
    /**
     * pod选择器
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodSelector?: string;
    /**
     * Ip选择器
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IPBlock?: string;
}
/**
 * DescribeESAggregations返回参数结构体
 */
export interface DescribeESAggregationsResponse {
    /**
     * ES聚合结果JSON
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateExportComplianceStatusListJob返回参数结构体
 */
export interface CreateExportComplianceStatusListJobResponse {
    /**
     * 返回创建的导出任务的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    List?: Array<ServiceInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetSyncLastTime请求参数结构体
 */
export declare type DescribeAssetSyncLastTimeRequest = null;
/**
 * 容器安全镜像组件信息
 */
export interface ImageComponent {
    /**
     * 组件名称
     */
    Name: string;
    /**
     * 组件版本
     */
    Version: string;
    /**
     * 组件路径
     */
    Path: string;
    /**
     * 组件类型
     */
    Type: string;
    /**
     * 组件漏洞数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulCount: number;
    /**
     * 镜像ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageID: string;
}
/**
 * 表示一个合规标准的信息。
 */
export interface ComplianceBenchmarkStandard {
    /**
     * 合规标准的ID
     */
    StandardId?: number;
    /**
     * 合规标准的名称
     */
    Name?: string;
    /**
     * 合规标准包含的数目
     */
    PolicyItemCount?: number;
    /**
     * 是否启用此标准
     */
    Enabled?: boolean;
    /**
     * 标准的描述
     */
    Description?: string;
}
/**
 * DescribeEscapeRuleInfo返回参数结构体
 */
export interface DescribeEscapeRuleInfoResponse {
    /**
     * 规则信息
     */
    RuleSet?: Array<EscapeRule>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞趋势信息
 */
export interface VulTendencyInfo {
    /**
     * 漏洞趋势列表
     */
    VulSet: Array<RunTimeTendencyInfo>;
    /**
     * 漏洞影响的镜像类型：
  LOCAL：本地镜像
  REGISTRY: 仓库镜像
     */
    ImageType: string;
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
    CustomerPolicyItemIdSet: Array<number | bigint>;
}
/**
 * 表示一类资产的总览信息。
 */
export interface ComplianceAssetSummary {
    /**
     * 资产类别。
     */
    AssetType?: string;
    /**
     * 是否为客户的首次检测。与CheckStatus配合使用。
     */
    IsCustomerFirstCheck?: boolean;
    /**
     * 检测状态
  
  CHECK_UNINIT, 用户未启用此功能
  
  CHECK_INIT, 待检测
  
  CHECK_RUNNING, 检测中
  
  CHECK_FINISHED, 检测完成
  
  CHECK_FAILED, 检测失败
     */
    CheckStatus?: string;
    /**
     * 此类别的检测进度，为 0~100 的数。若未在检测中，无此字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckProgress?: number;
    /**
     * 此类资产通过的检测项的数目。
     */
    PassedPolicyItemCount?: number;
    /**
     * 此类资产未通过的检测的数目。
     */
    FailedPolicyItemCount?: number;
    /**
     * 此类资产下未通过的严重级别的检测项的数目。
     */
    FailedCriticalPolicyItemCount?: number;
    /**
     * 此类资产下未通过的高危检测项的数目。
     */
    FailedHighRiskPolicyItemCount?: number;
    /**
     * 此类资产下未通过的中危检测项的数目。
     */
    FailedMediumRiskPolicyItemCount?: number;
    /**
     * 此类资产下未通过的低危检测项的数目。
     */
    FailedLowRiskPolicyItemCount?: number;
    /**
     * 此类资产下提示级别的检测项的数目。
     */
    NoticePolicyItemCount?: number;
    /**
     * 通过检测的资产的数目。
     */
    PassedAssetCount?: number;
    /**
     * 未通过检测的资产的数目。
     */
    FailedAssetCount?: number;
    /**
     * 此类资产的合规率，0~100的数。
     */
    AssetPassedRate?: number;
    /**
     * 检测失败的资产的数目。
     */
    ScanFailedAssetCount?: number;
    /**
     * 上次检测的耗时，单位为秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckCostTime?: number;
    /**
     * 上次检测的时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastCheckTime?: string;
    /**
     * 定时检测规则。
     */
    PeriodRule?: CompliancePeriodTaskRule;
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
    /**
     * 总检测项数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPolicyItemCount?: number;
    /**
     * 检测主机数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetectHostCount?: number;
    /**
     * 当前任务剩余时间，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftTime?: number;
}
/**
 * 待处理异常进程事件趋势
 */
export interface AbnormalProcessEventTendencyInfo {
    /**
     * 日期
     */
    Date: string;
    /**
     * 待处理代理软件事件数
     */
    ProxyToolEventCount: number;
    /**
     * 待处理横向参透事件数
     */
    TransferControlEventCount: number;
    /**
     * 待处理恶意命令事件数
     */
    AttackCmdEventCount: number;
    /**
     * 待处理反弹shell事件数
     */
    ReverseShellEventCount: number;
    /**
     * 待处理无文件程序执行事件数
     */
    FilelessEventCount: number;
    /**
     * 待处理高危命令事件数
     */
    RiskCmdEventCount: number;
    /**
     * 待处理敏感服务异常子进程启动事件数
     */
    AbnormalChildProcessEventCount: number;
    /**
     * 待处理自定义规则事件数
     */
    UserDefinedRuleEventCount: number;
}
/**
 * DescribeAssetClusterList返回参数结构体
 */
export interface DescribeAssetClusterListResponse {
    /**
     * 集群列表
     */
    List?: Array<AssetClusterListItem>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    PeriodTaskId?: number;
    /**
     * 资产类型。
  ASSET_CONTAINER, 容器
  ASSET_IMAGE, 镜像
  ASSET_HOST, 主机
  ASSET_K8S, K8S资产
     */
    AssetType?: string;
    /**
     * 最近一次触发的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastTriggerTime?: string;
    /**
     * 总的检查项数目
     */
    TotalPolicyItemCount?: number;
    /**
     * 周期设置
     */
    PeriodRule?: CompliancePeriodTaskRule;
    /**
     * 合规标准列表
     */
    BenchmarkStandardSet?: Array<ComplianceBenchmarkStandard>;
}
/**
 * DescribeAssetImageRegistryRiskListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryRiskListExportResponse {
    /**
     * excel文件下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全日志告警信息
 */
export interface SecLogAlertMsgInfo {
    /**
     * 告警类型
     */
    MsgType?: string;
    /**
     * 告警值
     */
    MsgValue?: string;
    /**
     * 状态(0:关闭 1:开启)
     */
    State?: boolean;
}
/**
 * 镜像自动授权结果信息
 */
export interface AutoAuthorizedImageInfo {
    /**
     * 镜像id
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 授权时间
     */
    AuthorizedTime: string;
    /**
     * 授权结果，SUCCESS:成功，REACH_LIMIT:达到授权上限，LICENSE_INSUFFICIENT:授权数不足'
     */
    Status: string;
    /**
     * 是否授权，1：是，0：否
     */
    IsAuthorized: number;
}
/**
 * UpdateAssetImageRegistryRegistryDetail返回参数结构体
 */
export interface UpdateAssetImageRegistryRegistryDetailResponse {
    /**
     * 连接错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckErr?: string;
    /**
     * 名称错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameRepeatErr?: string;
    /**
     * 仓库唯一id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecLogDeliveryKafkaSetting返回参数结构体
 */
export interface ModifySecLogDeliveryKafkaSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAbnormalProcessRules返回参数结构体
 */
export interface DeleteAbnormalProcessRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 容器安全镜像仓库列表
 */
export interface ImageRepoRegistryInfo {
    /**
     * 仓库id
     */
    RegistryId?: number;
    /**
     * 仓库名
     */
    Name?: string;
    /**
     * 仓库类型，列表：harbor、tcr
     */
    RegistryType?: string;
    /**
     * 仓库url
     */
    Url?: string;
    /**
     * 网络类型，列表：public
     */
    NetType?: string;
    /**
     * 区域，列表：default
     */
    RegistryRegion?: string;
    /**
     * 仓库版本
     */
    RegistryVersion?: string;
    /**
     * 仓库连接错误信息，待废弃，请使用ConnDetectException
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConnectMsg?: string;
    /**
     * 联通性检测方式
     */
    ConnDetectType?: string;
    /**
     * 联通性检测主机数
     */
    ConnDetectHostCount?: number;
    /**
     * 联通性检测详情
     */
    ConnDetectDetail?: Array<RegistryConnDetectResult>;
    /**
     * tcr情况下的instance_id
     */
    InstanceID?: string;
    /**
     * 最近同步成功时间
     */
    LatestSyncTime?: string;
    /**
     * 同步状态
     */
    SyncStatus?: string;
    /**
     * 同步失败原因
     */
    SyncFailReason?: string;
    /**
     * 同步失败解决方案
     */
    SyncSolution?: string;
    /**
     * 同步失败信息
     */
    SyncMessage?: string;
}
/**
 * 运行时安全，策略基本信息
 */
export interface RuleBaseInfo {
    /**
     * true: 默认策略，false:自定义策略
     */
    IsDefault?: boolean;
    /**
     * 策略生效镜像数量
     */
    EffectImageCount?: number;
    /**
     * 策略Id
     */
    RuleId?: string;
    /**
     * 策略更新时间, 存在为空的情况
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 策略名字
     */
    RuleName?: string;
    /**
     * 编辑用户名称
     */
    EditUserName?: string;
    /**
     * true: 策略启用，false：策略禁用
     */
    IsEnable?: boolean;
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
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * podip
     */
    PodIP?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * 节点类型
     */
    NodeType?: string;
    /**
     * 超级节点唯一id
     */
    NodeUniqueID?: string;
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
 * DescribePublicKey返回参数结构体
 */
export interface DescribePublicKeyResponse {
    /**
     * 公钥
     */
    PublicKey?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskDnsList请求参数结构体
 */
export interface DescribeRiskDnsListRequest {
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
  <li>EventStatus- String - 是否必填：否 - 事件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_ADD_WHITE：已加白</li>
  <li>ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED </li>
  <li>ContainerNetStatus- String -是否必填: 否 -  容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATING</li>
  <li>EventType - String -是否必填: 否 -  事件类型，恶意域名请求：DOMAIN，恶意IP请求：IP</li>
  <li>TimeRange- String -是否必填: 否 -  时间范围，第一个值表示开始时间，第二个值表示结束时间 </li>
  <li>RiskDns- string - 是否必填：否 - 恶意域名。</li>
  <li>RiskIP- string - 是否必填：否 - 恶意IP。</li>
  <li>ContainerName- string - 是否必填：否 - 容器名称。</li>
  <li>ContainerID- string - 是否必填：否 - 容器ID。</li>
  <li>ImageName- string - 是否必填：否 - 镜像名称。</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID。</li>
  <li>HostName- string - 是否必填：否 - 主机名称。</li>
  <li>HostIP- string - 是否必填：否 - 内网IP。</li>
  <li>PublicIP- string - 是否必填：否 - 外网IP。</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：告警数量：EventCount，最近生成时间：LatestFoundTime
     */
    By?: string;
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
 * DescribeAssetSuperNodeList请求参数结构体
 */
export interface DescribeAssetSuperNodeListRequest {
    /**
     * 过滤条件。
  <li>NodeID- String - 是否必填：否 - ID </li>
  <li>NodeName- String - 是否必填：否 - 超级节点名称 </li>
  <li>SubnetName- String - 是否必填：否 - VPC子网 </li>
  <li>AgentStatus- String - 是否必填：否 - 安装状态UNINSTALL:未安装;INSTALLED:已安装;INSTALLING:安装中; </li>
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
     * 排序字段
     */
    By?: string;
    /**
     * 排序方式 asc,desc
     */
    Order?: string;
}
/**
 * DescribeVulDefenceHost请求参数结构体
 */
export interface DescribeVulDefenceHostRequest {
    /**
     * 过滤条件。
  <li>Status- String - 是否必填：否 - 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENCE:未防御</li>
  <li>HostName- String - 是否必填：否 - 主机名称/超级节点名称</li>
  <li>HostIP- String - 是否必填：否 - 主机IP</li>
  <li>NodeType- String - 是否必填：否 - 节点类型</li>
  <li>HostName- String - 是否必填：否 - 超级节点名称</li>
  <li>NodeSubNetCIDR- String - 是否必填：否 - 超级节点CIDR</li>
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
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：更新时间：ModifyTime/首次开启时间：CreateTime
     */
    By?: string;
}
/**
 * 应急漏洞列表信息
 */
export interface EmergencyVulInfo {
    /**
     * 漏洞名称
     */
    Name: string;
    /**
     * 漏洞标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<string>;
    /**
     * CVSS V3分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVSSV3Score: number;
    /**
     * 风险等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level: string;
    /**
     * CVE编号
     */
    CVEID: string;
    /**
     * 漏洞类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Category: string;
    /**
     * 漏洞披露时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitTime: string;
    /**
     * 最近发现时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestFoundTime: string;
    /**
     * 应急漏洞风险情况：NOT_SCAN：未扫描，SCANNING：扫描中，SCANNED_NOT_RISK：已扫描，暂未风险 ，SCANNED_RISK：已扫描存在风险
     */
    Status: string;
    /**
     * 漏洞ID
     */
    ID: number;
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 防御状态，NO_DEFENDED:未防御，DEFENDED:已防御
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceStatus: string;
    /**
     * 漏洞防御主机范围: MANUAL:自选主机节点，ALL:全部
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceScope: string;
    /**
     * 漏洞防御主机数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceHostCount: number;
    /**
     * 已防御攻击次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefendedCount: number;
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
  <li>IsRealTime- int - 是否必填：否 - 过滤是否实时监控数据</li>
  <li>TaskId- string - 是否必填：否 - 任务ID</li>
  <li>TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]</li>
  <li>ContainerNetStatus - String -是否必填: 否 -  容器网络状态筛选 NORMAL ISOLATED ISOLATING RESTORING RESTORE_FAILED</li>
  <li>ContainerStatus - string -是否必填: 否 - 容器状态 RUNNING PAUSED STOPPED CREATED DESTROYED RESTARTING REMOVING</li>
  <li>AutoIsolateMode - string -是否必填: 否 - 隔离方式 MANUAL AUTO</li>
  <li>MD5 - string -是否必填: 否 - md5 </li>
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
 * CreateWebVulExportJob请求参数结构体
 */
export interface CreateWebVulExportJobRequest {
    /**
     * 需要返回的数量，默认为50000，最大值为50000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,false</li>
  <li>OnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,false</li>
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。</li>
  <li>CanBeFixed- string - 是否必填：否 - 是否可修复true,false。</li>
  <li>CategoryType- string - 是否必填：否 - 漏洞子类型</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ContainerID- string -是否必填: 否 - 容器ID</li>
  <li>ContainerName- string -是否必填: 否 - 容器名称</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
  <li>FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp</li>
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
 * CreateK8sApiAbnormalEventExportJob请求参数结构体
 */
export interface CreateK8sApiAbnormalEventExportJobRequest {
    /**
     * 过滤条件。
  <li>TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]</li>
  <li>MatchRules - string  - 是否必填: 否 -命中规则筛选</li>
  <li>RiskLevel - string  - 是否必填: 否 -威胁等级筛选</li>
  <li>Status - string  - 是否必填: 否 -事件状态筛选</li>
  <li>MatchRuleType - string  - 是否必填: 否 -命中规则类型筛选</li>
  <li>ClusterRunningStatus - string  - 是否必填: 否 -集群运行状态</li>
  <li>ClusterName - string  - 是否必填: 否 -集群名称</li>
  <li>ClusterID - string  - 是否必填: 否 -集群ID</li>
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
 * DescribeK8sApiAbnormalTendency返回参数结构体
 */
export interface DescribeK8sApiAbnormalTendencyResponse {
    /**
     * 趋势列表
     */
    List?: Array<K8sApiAbnormalTendencyItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * k8sapi异常事件列表Item
 */
export interface K8sApiAbnormalEventListItem {
    /**
     * 事件ID
     */
    ID?: number;
    /**
     * 命中规则类型
     */
    MatchRuleType?: string;
    /**
     * 威胁等级
     */
    RiskLevel?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群运行状态
     */
    ClusterRunningStatus?: string;
    /**
     * 初次生成时间
     */
    FirstCreateTime?: string;
    /**
     * 最近一次生成时间
     */
    LastCreateTime?: string;
    /**
     * 告警数量
     */
    AlarmCount?: number;
    /**
     * 状态
     */
    Status?: string;
    /**
     * 规则类型
     */
    RuleType?: string;
    /**
     * 描述信息
     */
    Desc?: string;
    /**
     * 解决方案
     */
    Suggestion?: string;
    /**
     * 规则名称
     */
    RuleName?: string;
    /**
     * 命中规则
     */
    MatchRule?: K8sApiAbnormalRuleScopeInfo;
}
/**
 * 安全日志接入详情
 */
export interface SecLogJoinInfo {
    /**
     * 已接入普通主机数量
     */
    Count?: number;
    /**
     * 已接入超级节点数量
     */
    SuperNodeCount?: number;
    /**
     * 是否已接入(true:已接入 false:未接入)
     */
    IsJoined?: boolean;
    /**
     * 日志类型(
  容器bash:  "container_bash"
  容器启动: "container_launch"
  k8sApi: "k8s_api"
  )
     */
    LogType?: string;
    /**
     * 已接入集群数量
     */
    ClusterCount?: number;
}
/**
 * 促销活动内容
 */
export interface PromotionActivityContent {
    /**
     * 月数
     */
    MonthNum: number;
    /**
     * 核数最低限量
     */
    CoresCountLimit: number;
    /**
     * 专业版折扣
     */
    ProfessionalDiscount: number;
    /**
     * 附赠镜像数
     */
    ImageAuthorizationNum: number;
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
     * 必填参数，镜像唯一ID，可通过DescribeAssetImageRegistryList接口获取
     */
    Id?: number;
}
/**
 * AddEditRiskSyscallWhiteList请求参数结构体
 */
export interface AddEditRiskSyscallWhiteListRequest {
    /**
     * 仅在添加事件白名单时候使用
     */
    EventId?: string;
    /**
     * 增加或编辑白名单信。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空.
     */
    WhiteListInfo?: RiskSyscallWhiteListInfo;
}
/**
 * k8a api 异常请求规则详情
 */
export interface K8sApiAbnormalRuleInfo {
    /**
     * 规则名称
     */
    RuleName: string;
    /**
     * 状态
     */
    Status: boolean;
    /**
     * 规则信息列表
     */
    RuleInfoList: Array<K8sApiAbnormalRuleScopeInfo>;
    /**
     * 生效集群IDSet
     */
    EffectClusterIDSet: Array<string>;
    /**
     * 规则类型
  RT_SYSTEM 系统规则
  RT_USER 用户自定义
     */
    RuleType: string;
    /**
     * 是否所有集群生效
     */
    EffectAllCluster: boolean;
    /**
     * 规则ID
     */
    RuleID?: string;
}
/**
 * 容器安全运行时高危系统调用信息
 */
export interface ReverseShellEventInfo {
    /**
     * 进程名称
     */
    ProcessName?: string;
    /**
     * 进程路径
     */
    ProcessPath?: string;
    /**
     * 镜像id
     */
    ImageId?: string;
    /**
     * 容器id
     */
    ContainerId?: string;
    /**
     * 镜像名
     */
    ImageName?: string;
    /**
     * 容器名
     */
    ContainerName?: string;
    /**
     * 生成时间
     */
    FoundTime?: string;
    /**
     * 事件解决方案
     */
    Solution?: string;
    /**
     * 事件详细描述
     */
    Description?: string;
    /**
     * 状态，EVENT_UNDEAL:事件未处理
      EVENT_DEALED:事件已经处理
      EVENT_INGNORE：事件已经忽略
      EVENT_ADD_WHITE：时间已经加白
     */
    Status?: string;
    /**
     * 事件id
     */
    EventId?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 父进程名
     */
    PProcessName?: string;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 目标地址
     */
    DstAddress?: string;
    /**
     * 网络状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    ContainerNetStatus?: string;
    /**
     * 容器子状态
  "AGENT_OFFLINE"       //Agent离线
      "NODE_DESTROYED"      //节点已销毁
      "CONTAINER_EXITED"    //容器已退出
      "CONTAINER_DESTROYED" //容器已销毁
      "SHARED_HOST"         // 容器与主机共享网络
      "RESOURCE_LIMIT"      //隔离操作资源超限
      "UNKNOW"              // 原因未知
     */
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus?: string;
    /**
     * 集群id
     */
    ClusterID?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * pod name
     */
    PodName?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 节点公网ip
     */
    PublicIP?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * uuid
     */
    HostID?: string;
    /**
     * 节点内网ip
     */
    HostIP?: string;
    /**
     * 节点 id
     */
    NodeID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
}
/**
 * DescribeSecLogJoinObjectList返回参数结构体
 */
export interface DescribeSecLogJoinObjectListResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 接入对象列表
     */
    List?: Array<SecLogJoinObjectInfo>;
    /**
     * 日志节点范围类型,0自选 1全部
     */
    RangeType?: number;
    /**
     * 新增资产是否自动加入，节点范围为全部时生效
     */
    AutoJoin?: boolean;
    /**
     * 剔除节点数
     */
    ExcludedCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSystemVulExportJob请求参数结构体
 */
export interface CreateSystemVulExportJobRequest {
    /**
     * 需要返回的数量，默认为50000，最大值为50000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,false</li>
  <li>OnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,false</li>
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。</li>
  <li>CanBeFixed- string - 是否必填：否 - 是否可修复true,false。</li>
  <li>CategoryType- string - 是否必填：否 - 漏洞子类型</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ContainerID- string -是否必填: 否 - 容器ID</li>
  <li>ContainerName- string -是否必填: 否 - 容器名称</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
  <li>FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp</li>
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
 * DescribeVulScanInfo请求参数结构体
 */
export interface DescribeVulScanInfoRequest {
    /**
     * 本地镜像漏洞扫描任务ID，无则返回最近一次的漏洞任务扫描
     */
    LocalTaskID?: number;
    /**
     * 仓库镜像漏洞扫描任务ID，无则返回最近一次的漏洞任务扫描
     */
    RegistryTaskID?: number;
}
/**
 * DescribeClusterNodes返回参数结构体
 */
export interface DescribeClusterNodesResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 节点列表
     */
    ClusterNodeList?: Array<ClusterNodeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    CustomerAssetIdSet: Array<number | bigint>;
    /**
     * 扫描资产类型 <li>ASSET_CONTAINER Docker容器</li> <li>ASSET_IMAGE Docker镜像</li> <li>ASSET_HOST Docker主机</li> <li>ASSET_K8S Kubernetes</li> <li>ASSET_CONTAINERD Containerd主机</li> <li>ASSET_CONTAINERD_CONTAINER Containerd容器</li>
     */
    AssetType?: string;
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
    List?: Array<ImageRepoInfo>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVirusAutoIsolateSampleDetail请求参数结构体
 */
export interface DescribeVirusAutoIsolateSampleDetailRequest {
    /**
     * 文件MD5值
     */
    MD5: string;
}
/**
 * DescribeAssetImageVirusList返回参数结构体
 */
export interface DescribeAssetImageVirusListResponse {
    /**
     * 镜像病毒列表
     */
    List?: Array<ImageVirusInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 病毒扫描状态
  0:未扫描
  1:扫描中
  2:扫描完成
  3:扫描出错
  4:扫描取消
     */
    VirusScanStatus?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteComplianceAssetPolicySetFromWhitelist返回参数结构体
 */
export interface DeleteComplianceAssetPolicySetFromWhitelistResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeK8sApiAbnormalSummary返回参数结构体
 */
export interface DescribeK8sApiAbnormalSummaryResponse {
    /**
     * 待处理事件个数
     */
    UnhandleEventCount?: number;
    /**
     * 待处理高危事件个数
     */
    UnhandleHighLevelEventCount?: number;
    /**
     * 待处理中危事件个数
     */
    UnhandleMediumLevelEventCount?: number;
    /**
     * 待处理低危事件个数
     */
    UnhandleLowLevelEventCount?: number;
    /**
     * 待处理提示级别事件个数
     */
    UnhandleNoticeLevelEventCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogJoinTypeList返回参数结构体
 */
export interface DescribeSecLogJoinTypeListResponse {
    /**
     * 接入日志列表
     */
    List?: Array<SecLogJoinInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetSyncLastTime返回参数结构体
 */
export interface DescribeAssetSyncLastTimeResponse {
    /**
     * 资产最近同步时间
     */
    AssetSyncLastTime?: string;
    /**
     * 任务状态
  PENDING:待处理
  PROCESSING:处理中
  PROCESSED:已完成
     */
    TaskStatus?: string;
    /**
     * 任务进度(百分比)
     */
    TaskProcess?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 扫描开始时间
  01:00 时分
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
     * @deprecated
     */
    All?: boolean;
    /**
     * 自定义镜像
     */
    Images?: Array<string>;
    /**
     * 镜像是否存在运行中的容器
     */
    ContainerRunning?: boolean;
    /**
     * 扫描范围 0 全部授权镜像，1自选镜像，2 推荐扫描
     */
    ScanScope?: number;
    /**
     * 扫描结束时间
  02:00 时分
     */
    ScanEndTime?: string;
    /**
     * 排除扫描的镜像
     */
    ExcludeImages?: Array<string>;
}
/**
 * 逃逸白名单
 */
export interface EscapeWhiteListInfo {
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 白名单记录ID
     */
    ID: number;
    /**
     * 关联主机数量
     */
    HostCount: number;
    /**
     * 关联容器数量
     */
    ContainerCount: number;
    /**
     * 加白事件类型
     */
    EventType: Array<string>;
    /**
     * 创建时间
     */
    InsertTime: string;
    /**
     * 更新时间
     */
    UpdateTime: string;
    /**
     * 镜像大小
     */
    ImageSize: number;
}
/**
 * CreateNetworkFirewallUndoPublish返回参数结构体
 */
export interface CreateNetworkFirewallUndoPublishResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIndexList返回参数结构体
 */
export interface DescribeIndexListResponse {
    /**
     * ES 索引信息
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyVulDefenceSetting请求参数结构体
 */
export interface ModifyVulDefenceSettingRequest {
    /**
     * 是否开启:0: 关闭 1:开启
     */
    IsEnabled: number;
    /**
     * 漏洞防御主机范围:0：自选 1: 全部主机
     */
    Scope?: number;
    /**
     * 自选漏洞防御主机
     */
    HostIDs?: Array<string>;
    /**
     * 漏洞防御超级节点范围:0：自选 1: 全部
     */
    SuperScope?: number;
    /**
     * 超级节点Id列表
     */
    NodeIds?: Array<string>;
}
/**
 * DescribeAssetSummary返回参数结构体
 */
export interface DescribeAssetSummaryResponse {
    /**
     * 应用个数
     */
    AppCnt?: number;
    /**
     * 容器个数
     */
    ContainerCnt?: number;
    /**
     * 暂停的容器个数
     */
    ContainerPause?: number;
    /**
     * 运行的容器个数
     */
    ContainerRunning?: number;
    /**
     * 停止运行的容器个数
     */
    ContainerStop?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 数据库个数
     */
    DbCnt?: number;
    /**
     * 镜像个数
     */
    ImageCnt?: number;
    /**
     * 主机在线个数
     */
    HostOnline?: number;
    /**
     * 主机个数
     */
    HostCnt?: number;
    /**
     * 有风险的镜像个数
     */
    ImageHasRiskInfoCnt?: number;
    /**
     * 有病毒的镜像个数
     */
    ImageHasVirusCnt?: number;
    /**
     * 有漏洞的镜像个数
     */
    ImageHasVulsCnt?: number;
    /**
     * 不受信任的镜像个数
     */
    ImageUntrustCnt?: number;
    /**
     * 监听的端口个数
     */
    ListenPortCnt?: number;
    /**
     * 进程个数
     */
    ProcessCnt?: number;
    /**
     * web服务个数
     */
    WebServiceCnt?: number;
    /**
     * 最近镜像扫描时间
     */
    LatestImageScanTime?: string;
    /**
     * 风险镜像个数
     */
    ImageUnsafeCnt?: number;
    /**
     * 主机未安装agent数量
     */
    HostUnInstallCnt?: number;
    /**
     * 超级节点个数
     */
    SuperNodeCnt?: number;
    /**
     * 超级节点运行个数
     */
    SuperNodeRunningCnt?: number;
    /**
     * 今日新增镜像个数
     */
    TodayNewImageCnt?: number;
    /**
     * 今日新增风险镜像个数
     */
    TodayUnsafeImageCnt?: number;
    /**
     * 推荐处置镜像个数
     */
    RecommendedFixImageCnt?: number;
    /**
     * 已扫描镜像个数
     */
    ScannedImageCnt?: number;
    /**
     * 待扫描镜像个数
     */
    UnScannedImageCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNetworkFirewallClusterRefresh返回参数结构体
 */
export interface CreateNetworkFirewallClusterRefreshResponse {
    /**
     * 返回创建的集群检查任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建检查任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateComponentExportJob返回参数结构体
 */
export interface CreateComponentExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReverseShellWhiteLists返回参数结构体
 */
export interface DescribeReverseShellWhiteListsResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 白名单信息列表
     */
    WhiteListSet?: Array<ReverseShellWhiteListBaseInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulContainerList请求参数结构体
 */
export interface DescribeVulContainerListRequest {
    /**
     * 漏洞PocID
     */
    PocID: string;
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
  <li>OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞</li>
  <li>ContainerID- string - 是否必填：否 - 容器ID</li>
  <li>ContainerName- String -是否必填: 否 - 容器名称</li>
     */
    Filters?: Array<RunTimeFilters>;
}
/**
 * DeleteReverseShellEvents请求参数结构体
 */
export interface DeleteReverseShellEventsRequest {
    /**
     * 事件ids
     */
    EventIdSet: Array<string>;
}
/**
 * cls日志集信息
 */
export interface ClsLogsetInfo {
    /**
     * 日志集ID
     */
    LogsetID: string;
    /**
     * 日志集名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogsetName?: string;
    /**
     * cls主题列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicList?: Array<ClsTopicInfo>;
}
/**
 * ModifyEscapeEventStatus返回参数结构体
 */
export interface ModifyEscapeEventStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    IsRepeat?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞防御事件详情
 */
export interface VulDefenceEvent {
    /**
     * 漏洞CVEID
     */
    CVEID: string;
    /**
     * 漏洞名称
     */
    VulName: string;
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 入侵状态
     */
    EventType: string;
    /**
     * 攻击源IP
     */
    SourceIP: string;
    /**
     * 攻击源ip地址所在城市
     */
    City: string;
    /**
     * 事件数量
     */
    EventCount: number;
    /**
     * 容器ID
     */
    ContainerID: string;
    /**
     * 容器名称
     */
    ContainerName: string;
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 处理状态
     */
    Status: string;
    /**
     * 事件ID
     */
    EventID: number;
    /**
     * 首次发现时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 隔离状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    ContainerNetStatus: string;
    /**
     * 最近发现时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MergeTime: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerStatus: string;
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
    /**
     * 主机QUUID/超级节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QUUID: string;
    /**
     * 主机内网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostIP: string;
    /**
     * 主机名称/超级节点名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostName: string;
    /**
     * 节点类型[NORMAL:普通节点|SUPER:超级节点]
     */
    NodeType?: string;
    /**
     * 外网IP
     */
    PublicIP?: string;
    /**
     * 超级节点唯一ID
     */
    NodeUniqueID?: string;
    /**
     * 超级节点ID
     */
    NodeID?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * pod ip
     */
    PodIP?: string;
}
/**
 * DescribeAccessControlEventsExport请求参数结构体
 */
export interface DescribeAccessControlEventsExportRequest {
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
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteReverseShellWhiteLists返回参数结构体
 */
export interface DeleteReverseShellWhiteListsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallAuditRecord返回参数结构体
 */
export interface DescribeNetworkFirewallAuditRecordResponse {
    /**
     * 集群审计总数
     */
    TotalCount?: number;
    /**
     * 集群的审计详细信息
     */
    AuditList?: Array<NetworkAuditRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogCleanSettingInfo返回参数结构体
 */
export interface DescribeSecLogCleanSettingInfoResponse {
    /**
     * 触发清理的储量底线
     */
    ReservesLimit: number;
    /**
     * 清理停止时的储量截至线
     */
    ReservesDeadline: number;
    /**
     * 触发清理的存储天数
     */
    DayLimit: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateNetworkFirewallPolicyYamlDetail返回参数结构体
 */
export interface UpdateNetworkFirewallPolicyYamlDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetImageBindRuleInfo返回参数结构体
 */
export interface DescribeAssetImageBindRuleInfoResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 镜像绑定规则列表
     */
    ImageBindRuleSet?: Array<ImagesBindRuleInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeESHits请求参数结构体
 */
export interface DescribeESHitsRequest {
    /**
     * ES查询条件JSON
     */
    Query: string;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，最大值为100。
     */
    Limit?: number;
    /**
     * 日志类型列表
     */
    LogTypes?: Array<string>;
}
/**
 * DescribeTcssSummary返回参数结构体
 */
export interface DescribeTcssSummaryResponse {
    /**
     * 镜像总数
     */
    ImageCnt: number;
    /**
     * 已扫描镜像数
     */
    ScannedImageCnt: number;
    /**
     * 待扫描镜像个数
     */
    UnScannedImageCnt: number;
    /**
     * 本地镜像个数
     */
    LocalImageCnt: number;
    /**
     * 仓库镜像个数
     */
    RepositoryImageCnt: number;
    /**
     * 风险本地镜像个数
     */
    RiskLocalImageCnt: number;
    /**
     * 风险仓库镜像个数
     */
    RiskRepositoryImageCnt: number;
    /**
     * 容器个数
     */
    ContainerCnt: number;
    /**
     * 风险容器个数
     */
    RiskContainerCnt: number;
    /**
     * 集群个数
     */
    ClusterCnt: number;
    /**
     * 风险集群个数
     */
    RiskClusterCnt: number;
    /**
     * 待扫描漏洞个数
     */
    UnScannedVulCnt: number;
    /**
     * 风险漏洞个数
     */
    RiskVulCnt: number;
    /**
     * 安全基线待扫描项个数
     */
    UnScannedBaseLineCnt: number;
    /**
     * 安全基线风险个数
     */
    RiskBaseLineCnt: number;
    /**
     * 运行时(高危)待处理事件个数
     */
    RuntimeUnhandleEventCnt: number;
    /**
     * 待扫描集群个数
     */
    UnScannedClusterCnt: number;
    /**
     * 是否已扫描镜像
     */
    ScanImageStatus: boolean;
    /**
     * 是否已扫描集群
     */
    ScanClusterStatus: boolean;
    /**
     * 是否已扫描基线
     */
    ScanBaseLineStatus: boolean;
    /**
     * 是否已扫描漏洞
     */
    ScanVulStatus: boolean;
    /**
     * 漏洞影响镜像数
     */
    VulRiskImageCnt: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRiskSyscallEvents请求参数结构体
 */
export interface DeleteRiskSyscallEventsRequest {
    /**
     * 事件ids
     */
    EventIdSet: Array<string>;
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
  <li>NetStatus - String -是否必填: 否 -  容器网络状态筛选 normal isolated isolating isolate_failed restoring restore_failed</li>
  <li>PodID - String -是否必填: 否 - PodID筛选</li>
  <li>NodeUniqueID - String -是否必填: 否 - SuperNode筛选</li>
  <li>PodUid - String -是否必填: 否 - Pod筛选</li>
  <li>PodIP - String -是否必填: 否 - PodIP筛选</li>
  <li>NodeType - String -是否必填: 否 - 节点类型筛选:NORMAL:普通节点;SUPER:超级节点</li>
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
    IsSafe?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageRiskSummary请求参数结构体
 */
export declare type DescribeImageRiskSummaryRequest = null;
/**
 * CreateDefenceVulExportJob返回参数结构体
 */
export interface CreateDefenceVulExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
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
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRiskDnsEventExportJob请求参数结构体
 */
export interface CreateRiskDnsEventExportJobRequest {
    /**
     * 过滤条件。
  <li>EventStatus- String - 是否必填：否 - 事件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_ADD_WHITE：已加白</li>
  <li>ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED </li>
  <li>ContainerNetStatus- String -是否必填: 否 -  容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATING</li>
  <li>EventType - String -是否必填: 否 -  事件类型，恶意域名请求：DOMAIN，恶意IP请求：IP</li>
  <li>TimeRange- String -是否必填: 否 -  时间范围，第一个值表示开始时间，第二个值表示结束时间 </li>
  <li>RiskDns- string - 是否必填：否 - 恶意域名。</li>
  <li>RiskIP- string - 是否必填：否 - 恶意IP。</li>
  <li>ContainerName- string - 是否必填：否 - 容器名称。</li>
  <li>ContainerID- string - 是否必填：否 - 容器ID。</li>
  <li>ImageName- string - 是否必填：否 - 镜像名称。</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID。</li>
  <li>HostName- string - 是否必填：否 - 主机名称。</li>
  <li>HostIP- string - 是否必填：否 - 内网IP。</li>
  <li>PublicIP- string - 是否必填：否 - 外网IP。</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 需要返回的数量，最大值为100000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：事件数量：EventCount
     */
    By?: string;
}
/**
 * 表示一条白名单记录。
 */
export interface ComplianceWhitelistItem {
    /**
     * 白名单项的ID。
     */
    WhitelistItemId?: number;
    /**
     * 客户检测项的ID。
     */
    CustomerPolicyItemId?: number;
    /**
     * 检测项的名称。
     */
    Name?: string;
    /**
     * 合规标准的名称。
     */
    StandardName?: string;
    /**
     * 合规标准的ID。
     */
    StandardId?: number;
    /**
     * 检测项影响的资产的数目。
     */
    AffectedAssetCount?: number;
    /**
     * 最后更新的时间
     */
    LastUpdateTime?: string;
    /**
     * 加入到白名单的时间
     */
    InsertTime?: string;
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
    TaskId?: number;
    /**
     * 返回检测项的总数。
     */
    TotalCount?: number;
    /**
     * 返回各检测项对应的汇总信息的列表。
     */
    PolicyItemSummaryList?: Array<CompliancePolicyItemSummary>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ContainerId?: string;
    /**
     * 容器所属的Pod的名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodName?: string;
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
     * 过滤参数
  InnerNetAlarmShow- int - 是否必填：1 - 内网告警展示 0 - 不展示
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
 * AddNetworkFirewallPolicyDetail返回参数结构体
 */
export interface AddNetworkFirewallPolicyDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallPolicyStatus请求参数结构体
 */
export interface DescribeNetworkFirewallPolicyStatusRequest {
    /**
     * 任务ID
     */
    TaskId: number;
}
/**
 * DescribeSecLogKafkaUIN返回参数结构体
 */
export interface DescribeSecLogKafkaUINResponse {
    /**
     * 目标UIN
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DstUIN?: string;
    /**
     * 授权状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeLogStorageStatistic请求参数结构体
 */
export declare type DescribeLogStorageStatisticRequest = null;
/**
 * 运行时木马列表信息
 */
export interface VirusInfo {
    /**
     * 文件名称
     */
    FileName?: string;
    /**
     * 文件路径
     */
    FilePath?: string;
    /**
     * 病毒名称
     */
    VirusName?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    ModifyTime?: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * 容器id
     */
    ContainerId?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 镜像id
     */
    ImageId?: string;
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
    Status?: string;
    /**
     * 事件id
     */
    Id?: string;
    /**
     * 事件描述
     */
    HarmDescribe?: string;
    /**
     * 建议方案
     */
    SuggestScheme?: string;
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
    SubStatus?: string;
    /**
     * 网络状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    ContainerNetStatus?: string;
    /**
     * 容器子状态
  "AGENT_OFFLINE"       //Agent离线
      "NODE_DESTROYED"      //节点已销毁
      "CONTAINER_EXITED"    //容器已退出
      "CONTAINER_DESTROYED" //容器已销毁
      "SHARED_HOST"         // 容器与主机共享网络
      "RESOURCE_LIMIT"      //隔离操作资源超限
      "UNKNOW"              // 原因未知
     */
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * md5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MD5?: string;
    /**
     * 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: string;
    /**
     * 检测平台
  1: 云查杀引擎
  2: tav
  3: binaryAi
  4: 异常行为
  5: 威胁情报
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckPlatform?: Array<string>;
    /**
     * 节点ID
     */
    NodeID?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * pod(实例)的名字
     */
    PodName?: string;
    /**
     * 节点所属集群ID
     */
    ClusterID?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * 节点外网IP
     */
    PublicIP?: string;
    /**
     * 节点内网IP
     */
    InnerIP?: string;
    /**
     * 节点唯一ID
     */
    NodeUniqueID?: string;
    /**
     * 普通节点ID
     */
    HostID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
}
/**
 * DescribeVulIgnoreRegistryImageList请求参数结构体
 */
export interface DescribeVulIgnoreRegistryImageListRequest {
    /**
     * 漏洞PocID
     */
    PocID: string;
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
 * AddEditImageAutoAuthorizedRule返回参数结构体
 */
export interface AddEditImageAutoAuthorizedRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
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
 * DescribeVirusAutoIsolateSampleList请求参数结构体
 */
export interface DescribeVirusAutoIsolateSampleListRequest {
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
  <li>MD5- String - 是否必填：否 - md5 </li>
  <li>AutoIsolateSwitch- String - 是否必填：否 - 自动隔离开关 </li>
  <li>VirusName- String - 是否必填：否 - 病毒名 </li>
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
 * ModifySecLogJoinObjects返回参数结构体
 */
export interface ModifySecLogJoinObjectsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 是否授权后自动扫描
     */
    NeedScan?: boolean;
    /**
     * 扫描类型
     */
    ScanType?: Array<string>;
}
/**
 * DescribeVirusAutoIsolateSetting请求参数结构体
 */
export declare type DescribeVirusAutoIsolateSettingRequest = null;
/**
 * CreateAssetImageRegistryScanTaskOneKey请求参数结构体
 */
export interface CreateAssetImageRegistryScanTaskOneKeyRequest {
    /**
     * 是否扫描全部镜像(废弃)
     * @deprecated
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
    Id?: Array<number | bigint>;
    /**
     * 是否最新镜像
     */
    IsLatest?: boolean;
    /**
     * 扫描范围 0全部镜像，1自选镜像，2推荐扫描镜像
     */
    ScanScope?: number;
    /**
     * 仓库类型
     */
    RegistryType?: Array<string>;
    /**
     * 命名空间
     */
    Namespace?: Array<string>;
    /**
     * 是否存在运行中的容器
     */
    ContainerRunning?: boolean;
    /**
     * 任务超时时长单位s
     */
    Timeout?: number;
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
 * 网络集群策略自定义规则
 */
export interface NetworkCustomPolicy {
    /**
     * 网络策略方向，分为FROM和TO
     */
    Direction: string;
    /**
     * 网络策略策略端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ports?: Array<NetworkPorts>;
    /**
     * 网络策略策略对象
  
  开启待确认：PublishedNoConfirm
  
  开启已确认：PublishedConfirmed
  
  关闭中：unPublishing
  
  开启中：Publishing
  
  待开启：unPublishEdit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Peer?: Array<NetworkPeer>;
}
/**
 * DeleteNetworkFirewallPolicyDetail请求参数结构体
 */
export interface DeleteNetworkFirewallPolicyDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略Id数组
     */
    Id: Array<number | bigint>;
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
     * 标记事件的状态：
  EVENT_UNDEAL:未处理（取消忽略），
  EVENT_DEALED:已处理，
  EVENT_IGNORE:忽略，
  EVENT_DELETE：已删除
  EVENT_ADD_WHITE：加白
     */
    Status: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 加白镜像ID数组
     */
    ImageIDs?: Array<string>;
    /**
     * 加白事件类型
     ESCAPE_CGROUPS：利用cgroup机制逃逸
     ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸
     ESCAPE_DOCKER_API：访问Docker API接口逃逸
     ESCAPE_VUL_OCCURRED：逃逸漏洞利用
     MOUNT_SENSITIVE_PTAH：敏感路径挂载
     PRIVILEGE_CONTAINER_START：特权容器
     PRIVILEGE：程序提权逃逸
     */
    EventType?: Array<string>;
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
 * AddComplianceAssetPolicySetToWhitelist返回参数结构体
 */
export interface AddComplianceAssetPolicySetToWhitelistResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnauthorizedCoresTendency返回参数结构体
 */
export interface DescribeUnauthorizedCoresTendencyResponse {
    /**
     * 未授权核数趋势
     */
    List?: Array<UnauthorizedCoresTendency>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallPolicyStatus返回参数结构体
 */
export interface DescribeNetworkFirewallPolicyStatusResponse {
    /**
     * 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist
     */
    TaskStatus?: string;
    /**
     * NameRepeat,K8sRuleIngressPortError等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskResult?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 联通性检测配置
 */
export interface ConnDetectConfig {
    /**
     * 主机quuid
     */
    Quuid?: string;
    /**
     * 主机uuid
     */
    Uuid?: string;
}
/**
 * DescribeAssetContainerList返回参数结构体
 */
export interface DescribeAssetContainerListResponse {
    /**
     * 容器列表
     */
    List?: Array<ContainerInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyContainerNetStatus请求参数结构体
 */
export interface ModifyContainerNetStatusRequest {
    /**
     * 容器ID
     */
    ContainerID: string;
    /**
     * 状态(
  隔离容器: EVENT_ISOLATE_CONTAINER
  恢复容器: EVENT_RESOTRE_CONTAINER
  )
     */
    Status: string;
}
/**
 * DescribeVulIgnoreLocalImageList请求参数结构体
 */
export interface DescribeVulIgnoreLocalImageListRequest {
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 需要返回的数量，默认为10，最大值为100
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 排序方式:DESC,ACS
     */
    Order?: string;
    /**
     * 排序字段 ImageSize
     */
    By?: string;
}
/**
 * DescribeVirusMonitorSetting返回参数结构体
 */
export interface DescribeVirusMonitorSettingResponse {
    /**
     * 是否开启实时监控
     */
    EnableScan?: boolean;
    /**
     * 扫描全部路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanPathAll?: boolean;
    /**
     * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanPathType?: number;
    /**
     * 自选排除或扫描的地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanPath?: Array<string>;
    /**
     * 扫描路径模式：
  SCAN_PATH_ALL：全部路径
  SCAN_PATH_DEFAULT：默认路径
  SCAN_PATH_USER_DEFINE：用户自定义路径
  
     */
    ScanPathMode?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSystemVulList请求参数结构体
 */
export interface DescribeSystemVulListRequest {
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
  <li>OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,false</li>
  <li>OnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,false</li>
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。</li>
  <li>CanBeFixed- string - 是否必填：否 - 是否可修复true,false。</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ContainerID- string -是否必填: 否 - 容器ID</li>
  <li>ContainerName- string -是否必填: 否 - 容器名称</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
  <li>FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp</li>
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
 * DescribeContainerSecEventSummary请求参数结构体
 */
export declare type DescribeContainerSecEventSummaryRequest = null;
/**
 * DescribeAssetImageRegistrySummary返回参数结构体
 */
export interface DescribeAssetImageRegistrySummaryResponse {
    /**
     * 待扫描镜像个数
     */
    UnScannedImageCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogCleanSettingInfo请求参数结构体
 */
export declare type DescribeSecLogCleanSettingInfoRequest = null;
/**
 * DescribeVulScanAuthorizedImageSummary返回参数结构体
 */
export interface DescribeVulScanAuthorizedImageSummaryResponse {
    /**
     * 全部已授权的本地镜像数
     */
    AllAuthorizedImageCount?: number;
    /**
     * 已授权未扫描的本地镜像数
     */
    UnScanAuthorizedImageCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalAuthorizedCnt?: number;
    /**
     * 已使用镜像授权数
     */
    UsedAuthorizedCnt?: number;
    /**
     * 已开启扫描镜像数
     */
    ScannedImageCnt?: number;
    /**
     * 未开启扫描镜像数
     */
    NotScannedImageCnt?: number;
    /**
     * 本地未开启扫描镜像数
     */
    NotScannedLocalImageCnt?: number;
    /**
     * 试用镜像授权数
     */
    TrialAuthorizedCnt?: number;
    /**
     * 已使用试用镜像授权数
     */
    UsedTrialAuthorizedCnt?: number;
    /**
     * 已购镜像授权数
     */
    PurchasedAuthorizedCnt?: number;
    /**
     * 已使用已购镜像授权数
     */
    UsedPurchasedAuthorizedCnt?: number;
    /**
     * 是否可免费领取镜像授权数
     */
    CanApplyFreeImageAuthorize?: boolean;
    /**
     * 镜像扫描计费信息
     */
    ImageScanInquireInfo?: ImageScanInquireInfo;
    /**
     * 重复镜像数(本地镜像和仓库镜像)
     */
    RepeatImageIdCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  <li>ContainerNetStatus - String -是否必填: 否 -  容器网络状态筛选 NORMAL ISOLATED ISOLATING RESTORING RESTORE_FAILED</li>
  <li>TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]</li>
  <li>ContainerStatus - string -是否必填: 否 - 容器状态 RUNNING PAUSED STOPPED CREATED DESTROYED RESTARTING REMOVING</li>
  <li>AutoIsolateMode - string -是否必填: 否 - 隔离方式 MANUAL AUTO</li>
  <li>MD5 - string -是否必填: 否 - md5 </li>
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
 * ModifyVirusScanSetting返回参数结构体
 */
export interface ModifyVirusScanSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    CVEID?: string;
    /**
     * 漏洞名称
     */
    Name?: string;
    /**
     * 组件
     */
    Component?: string;
    /**
     * 版本
     */
    Version?: string;
    /**
     * 分类
     */
    Category?: string;
    /**
     * 分类2
     */
    CategoryType?: string;
    /**
     * 风险等级
     */
    Level?: number;
    /**
     * 描述
     */
    Des?: string;
    /**
     * 解决方案
     */
    OfficialSolution?: string;
    /**
     * 引用
     */
    Reference?: string;
    /**
     * 防御方案
     */
    DefenseSolution?: string;
    /**
     * 提交时间
     */
    SubmitTime?: string;
    /**
     * CVSS V3分数
     */
    CVSSV3Score?: number;
    /**
     * CVSS V3描述
     */
    CVSSV3Desc?: string;
    /**
     * 是否是重点关注：true：是，false：不是
     */
    IsSuggest?: boolean;
    /**
     * 修复版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FixedVersions?: string;
    /**
     * 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<string>;
    /**
     * 攻击热度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttackLevel?: number;
}
/**
 * DescribePromotionActivity返回参数结构体
 */
export interface DescribePromotionActivityResponse {
    /**
     * 促销活动内容
     */
    List?: Array<PromotionActivityContent>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 扫描路径模式：
  SCAN_PATH_ALL：全部路径
  SCAN_PATH_DEFAULT：默认路径
  SCAN_PATH_USER_DEFINE：用户自定义路径
  
     */
    ScanPathMode?: string;
}
/**
 * ModifyEscapeWhiteList请求参数结构体
 */
export interface ModifyEscapeWhiteListRequest {
    /**
     * 加白名单事件类型
     ESCAPE_CGROUPS：利用cgroup机制逃逸
     ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸
     ESCAPE_DOCKER_API：访问Docker API接口逃逸
     ESCAPE_VUL_OCCURRED：逃逸漏洞利用
     MOUNT_SENSITIVE_PTAH：敏感路径挂载
     PRIVILEGE_CONTAINER_START：特权容器
     PRIVILEGE：程序提权逃逸
     */
    EventType: Array<string>;
    /**
     * 白名单记录ID
     */
    IDSet: Array<number | bigint>;
}
/**
 * AddAndPublishNetworkFirewallPolicyDetail返回参数结构体
 */
export interface AddAndPublishNetworkFirewallPolicyDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSearchExportList请求参数结构体
 */
export interface DescribeSearchExportListRequest {
    /**
     * ES查询条件JSON
     */
    Query: string;
    /**
     * 日志类型列表
     */
    LogTypes?: Array<string>;
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
 * AddCompliancePolicyAssetSetToWhitelist返回参数结构体
 */
export interface AddCompliancePolicyAssetSetToWhitelistResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulContainerList返回参数结构体
 */
export interface DescribeVulContainerListResponse {
    /**
     * 容器列表
     */
    List?: Array<VulAffectedContainerInfo>;
    /**
     * 容器总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskSyscallNames请求参数结构体
 */
export declare type DescribeRiskSyscallNamesRequest = null;
/**
 * ModifyVulDefenceEventStatus返回参数结构体
 */
export interface ModifyVulDefenceEventStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEscapeEventInfo返回参数结构体
 */
export interface DescribeEscapeEventInfoResponse {
    /**
     * 逃逸事件数组
     */
    EventSet?: Array<EscapeEventInfo>;
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeK8sApiAbnormalRuleInfo返回参数结构体
 */
export interface DescribeK8sApiAbnormalRuleInfoResponse {
    /**
     * 规则详情
     */
    Info?: K8sApiAbnormalRuleInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeESHits返回参数结构体
 */
export interface DescribeESHitsResponse {
    /**
     * ES查询结果JSON
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Enable?: boolean;
    /**
     * 定时任务扫描时间
     */
    ScanTime?: string;
    /**
     * 定时扫描间隔
     */
    ScanPeriod?: number;
    /**
     * 扫描类型数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanType?: Array<string>;
    /**
     * 扫描全部镜像
     * @deprecated
     */
    All?: boolean;
    /**
     * 自定义扫描镜像
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Images?: Array<ImageInfo>;
    /**
     * 自动以扫描镜像Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: Array<number | bigint>;
    /**
     * 是否扫描最新版本镜像
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Latest?: boolean;
    /**
     * 扫描结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanEndTime?: string;
    /**
     * 仓库类型 tcr,ccr,harbor
     */
    RegistryType?: Array<string>;
    /**
     * 是否存在运行中的容器
     */
    ContainerRunning?: boolean;
    /**
     * 扫描范围 0全部镜像，1自选镜像，2推荐扫描镜像
     */
    ScanScope?: number;
    /**
     * 命名空间
     */
    Namespace?: Array<string>;
    /**
     * 排除的镜像资产id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExcludeImageAssetIds?: Array<number | bigint>;
    /**
     * 最近扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastScanTime?: string;
    /**
     * 扫描结果(Success|InsufficientLicense|ImageNeedIsEmpty|InternalError)
     */
    ScanResult?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ClusterId?: string;
    /**
     * 集群名字
     */
    ClusterName?: string;
    /**
     * 集群版本
     */
    ClusterVersion?: string;
    /**
     * 集群操作系统
     */
    ClusterOs?: string;
    /**
     * 集群类型
     */
    ClusterType?: string;
    /**
     * 集群节点数
     */
    ClusterNodeNum?: number;
    /**
     * 集群区域
     */
    Region?: string;
    /**
     * 防护状态: 已防护: Defended 未防护: UnDefended
     */
    DefenderStatus?: string;
    /**
     * 集群状态
     */
    ClusterStatus?: string;
    /**
     * 集群运行子状态
     */
    ClusterSubStatus?: string;
    /**
     * 集群的检测模式，为Cluster_Normal或者Cluster_Actived.
     */
    ClusterCheckMode?: string;
    /**
     * 是否自动定期检测
     */
    ClusterAutoCheck?: boolean;
    /**
     * 防护容器部署失败原因，为UserDaemonSetNotReady时,和UnreadyNodeNum转成"N个节点防御容器为就绪"，其他错误直接展示
     */
    DefenderErrorReason?: string;
    /**
     * 防御容器没有ready状态的节点数量
     */
    UnreadyNodeNum?: number;
    /**
     * 严重风险检查项的数量
     */
    SeriousRiskCount?: number;
    /**
     * 高风险检查项的数量
     */
    HighRiskCount?: number;
    /**
     * 中风险检查项的数量
     */
    MiddleRiskCount?: number;
    /**
     * 提示风险检查项的数量
     */
    HintRiskCount?: number;
    /**
     * 检查失败原因
     */
    CheckFailReason?: string;
    /**
     * 检查状态,为Task_Running, NoRisk, HasRisk, Uncheck, Task_Error
     */
    CheckStatus?: string;
    /**
     * 任务创建时间,检查时间
     */
    TaskCreateTime?: string;
    /**
     * 接入状态:
  未接入: AccessedNone
  已防护: AccessedDefended
  未防护: AccessedInstalled
  部分防护: AccessedPartialDefence
  接入异常: AccessedException
  卸载异常: AccessedUninstallException
  接入中: AccessedInstalling
  卸载中: AccessedUninstalling
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessedStatus?: string;
    /**
     * 接入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessedSubStatus?: string;
    /**
     * 节点总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeCount?: number;
    /**
     * 离线节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffLineNodeCount?: number;
    /**
     * 未安装agent节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnInstallAgentNodeCount?: number;
    /**
     * 计费核数(弹性计费核数+普通计费核数)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChargeCoresCnt?: number;
    /**
     * master 地址列表
     */
    MasterAddresses?: Array<string>;
    /**
     * 核数
     */
    CoresCnt?: number;
    /**
     * 集群审计开关状态：
  已关闭Closed/关闭中Closing/关闭失败CloseFailed/已开启Opened/开启中Opening/开启失败OpenFailed
     */
    ClusterAuditStatus?: string;
    /**
     * 集群审计开关失败信息
     */
    ClusterAuditFailedInfo?: string;
}
/**
 * DescribeComplianceScanFailedAssetList返回参数结构体
 */
export interface DescribeComplianceScanFailedAssetListResponse {
    /**
     * 返回检测失败的资产的总数。
     */
    TotalCount?: number;
    /**
     * 返回各类检测失败的资产的汇总信息的列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanFailedAssetList?: Array<ComplianceScanFailedAsset>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyReverseShellStatus返回参数结构体
 */
export interface ModifyReverseShellStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteMachine返回参数结构体
 */
export interface DeleteMachineResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddCompliancePolicyAssetSetToWhitelist请求参数结构体
 */
export interface AddCompliancePolicyAssetSetToWhitelistRequest {
    /**
     * 检查项ID
     */
    CustomerPolicyItemId: number;
    /**
     * 需要忽略指定检查项内的资产ID列表
     */
    CustomerAssetItemIdSet?: Array<number | bigint>;
}
/**
 * DescribeEscapeWhiteList返回参数结构体
 */
export interface DescribeEscapeWhiteListResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 逃逸白名单列表
     */
    List?: Array<EscapeWhiteListInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    ProcessPath?: string;
    /**
     * 事件类型，MALICE_PROCESS_START:恶意进程启动
     */
    EventType?: string;
    /**
     * 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则
     */
    MatchRuleName?: string;
    /**
     * 生成时间
     */
    FoundTime?: string;
    /**
     * 容器名
     */
    ContainerName?: string;
    /**
     * 镜像名
     */
    ImageName?: string;
    /**
     * 动作执行结果，    BEHAVIOR_NONE: 无
      BEHAVIOR_ALERT: 告警
      BEHAVIOR_RELEASE：放行
      BEHAVIOR_HOLDUP_FAILED:拦截失败
      BEHAVIOR_HOLDUP_SUCCESSED：拦截失败
     */
    Behavior?: string;
    /**
     * 状态，EVENT_UNDEAL:事件未处理
      EVENT_DEALED:事件已经处理
      EVENT_INGNORE：事件已经忽略
     */
    Status?: string;
    /**
     * 事件记录的唯一id
     */
    Id?: string;
    /**
     * 镜像id，用于跳转
     */
    ImageId?: string;
    /**
     * 容器id，用于跳转
     */
    ContainerId?: string;
    /**
     * 事件解决方案
     */
    Solution?: string;
    /**
     * 事件详细描述
     */
    Description?: string;
    /**
     * 命中策略id
     */
    MatchRuleId?: string;
    /**
     * 命中规则行为：
  RULE_MODE_RELEASE 放行
  RULE_MODE_ALERT  告警
  RULE_MODE_HOLDUP 拦截
     */
    MatchAction?: string;
    /**
     * 命中规则进程信息
     */
    MatchProcessPath?: string;
    /**
     * 规则是否存在
     */
    RuleExist?: boolean;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 规则组Id
     */
    RuleId?: string;
    /**
     * 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或  用户自定义的策略名字
     */
    MatchGroupName?: string;
    /**
     * 命中规则等级，HIGH：高危，MIDDLE：中危，LOW：低危。
     */
    MatchRuleLevel?: string;
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
    ContainerNetStatus?: string;
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
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * pod 名称
     */
    PodName?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * 集群id
     */
    NodeUniqueID?: string;
    /**
     * 节点公网ip
     */
    PublicIP?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * uuid
     */
    HostID?: string;
    /**
     * 节点内网ip
     */
    HostIP?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
}
/**
 * DescribeCompliancePeriodTaskList返回参数结构体
 */
export interface DescribeCompliancePeriodTaskListResponse {
    /**
     * 定时任务的总量。
     */
    TotalCount?: number;
    /**
     * 定时任务信息的列表
     */
    PeriodTaskSet?: Array<CompliancePeriodTask>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeSecLogAlertMsg返回参数结构体
 */
export interface DescribeSecLogAlertMsgResponse {
    /**
     * 告警消息队列
     */
    List?: Array<SecLogAlertMsgInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInspectionReport请求参数结构体
 */
export declare type DescribeInspectionReportRequest = null;
/**
 * DescribeAgentDaemonSetCmd请求参数结构体
 */
export interface DescribeAgentDaemonSetCmdRequest {
    /**
     * 是否是腾讯云
     */
    IsCloud: boolean;
    /**
     * 网络类型：basic-基础网络，private-VPC, public-公网，direct-专线
     */
    NetType: string;
    /**
     * 地域标示, NetType=direct时必填
     */
    RegionCode?: string;
    /**
     * VpcId, NetType=direct时必填
     */
    VpcId?: string;
    /**
     * 命令有效期，非腾讯云时必填
     */
    ExpireDate?: string;
    /**
     * 集群自定义参数
     */
    ClusterCustomParameters?: Array<ClusterCustomParameters>;
}
/**
 * DescribeSecLogAlertMsg请求参数结构体
 */
export interface DescribeSecLogAlertMsgRequest {
    /**
     * 告警类型
  日志储量告警: log_reserve_full
  日志存储时间告警: log_save_day_limit
  kafka实例/公网域名不可用: kafka_instance_domain_unavailable
  kafka 用户名密码错误: kafka_user_passwd_wrong
  kafka后台报错字段: kafka_field_wrong
     */
    Type?: Array<string>;
}
/**
 * AddNetworkFirewallPolicyYamlDetail返回参数结构体
 */
export interface AddNetworkFirewallPolicyYamlDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 容器运行时安全访问控制事件信息
 */
export interface AccessControlEventInfo {
    /**
     * 进程名称
     */
    ProcessName?: string;
    /**
     * 命中规则名称
     */
    MatchRuleName?: string;
    /**
     * 生成时间
     */
    FoundTime?: string;
    /**
     * 容器名
     */
    ContainerName?: string;
    /**
     * 镜像名
     */
    ImageName?: string;
    /**
     * 动作执行结果，   BEHAVIOR_NONE: 无
      BEHAVIOR_ALERT: 告警
      BEHAVIOR_RELEASE：放行
      BEHAVIOR_HOLDUP_FAILED:拦截失败
      BEHAVIOR_HOLDUP_SUCCESSED：拦截失败
     */
    Behavior?: string;
    /**
     * 状态0:未处理  “EVENT_UNDEAL”:事件未处理
      "EVENT_DEALED":事件已经处理
      "EVENT_INGNORE"：事件已经忽略
     */
    Status?: string;
    /**
     * 事件记录的唯一id
     */
    Id?: string;
    /**
     * 文件名称
     */
    FileName?: string;
    /**
     * 事件类型， FILE_ABNORMAL_READ:文件异常读取
     */
    EventType?: string;
    /**
     * 镜像id, 用于跳转
     */
    ImageId?: string;
    /**
     * 容器id, 用于跳转
     */
    ContainerId?: string;
    /**
     * 事件解决方案
     */
    Solution?: string;
    /**
     * 事件详细描述
     */
    Description?: string;
    /**
     * 命中策略id
     */
    MatchRuleId?: string;
    /**
     * 命中规则行为：
  RULE_MODE_RELEASE 放行
  RULE_MODE_ALERT  告警
  RULE_MODE_HOLDUP 拦截
     */
    MatchAction?: string;
    /**
     * 命中规则进程信息
     */
    MatchProcessPath?: string;
    /**
     * 命中规则文件信息
     */
    MatchFilePath?: string;
    /**
     * 文件路径，包含名字
     */
    FilePath?: string;
    /**
     * 规则是否存在
     */
    RuleExist?: boolean;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 规则组id
     */
    RuleId?: string;
    /**
     * 网络状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    ContainerNetStatus?: string;
    /**
     * 容器子状态
  "AGENT_OFFLINE"       //Agent离线
  "NODE_DESTROYED"      //节点已销毁
  "CONTAINER_EXITED"    //容器已退出
  "CONTAINER_DESTROYED" //容器已销毁
  "SHARED_HOST"         // 容器与主机共享网络
  "RESOURCE_LIMIT"      //隔离操作资源超限
  "UNKNOW"              // 原因未知
     */
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus?: string;
    /**
     * 节点名称：如果是超级节点，展示的实质上是它的node_id
     */
    NodeName?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * 集群id
     */
    ClusterID?: string;
    /**
     * 节点的唯一id，主要是超级节点使用
     */
    NodeUniqueID?: string;
    /**
     * 节点公网IP
     */
    PublicIP?: string;
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * uuid
     */
    HostID?: string;
    /**
     * 节点内网ip
     */
    HostIP?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
}
/**
 * DescribeClusterSummary返回参数结构体
 */
export interface DescribeClusterSummaryResponse {
    /**
     * 集群总数
     */
    TotalCount?: number;
    /**
     * 有风险的集群数量
     */
    RiskClusterCount?: number;
    /**
     * 未检查的集群数量
     */
    UncheckClusterCount?: number;
    /**
     * 托管集群数量
     */
    ManagedClusterCount?: number;
    /**
     * 独立集群数量
     */
    IndependentClusterCount?: number;
    /**
     * 无风险的集群数量
     */
    NoRiskClusterCount?: number;
    /**
     * 已经检查集群数
     */
    CheckedClusterCount?: number;
    /**
     * 自动检查集群数
     */
    AutoCheckClusterCount?: number;
    /**
     * 手动检查集群数
     */
    ManualCheckClusterCount?: number;
    /**
     * 检查失败集群数
     */
    FailedClusterCount?: number;
    /**
     * 未导入的集群数量
     */
    NotImportedClusterCount?: number;
    /**
     * eks集群数量
     */
    ServerlessClusterCount?: number;
    /**
     * TKE集群数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TkeClusterCount?: number;
    /**
     * 用户自建腾讯云集群数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserCreateTencentClusterCount?: number;
    /**
     * 用户自建集群混合云数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserCreateHybridClusterCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogDeliveryClsOptions返回参数结构体
 */
export interface DescribeSecLogDeliveryClsOptionsResponse {
    /**
     * cls可选日志集合列表(仅当入参ClsRegion不为空时返回)
     */
    LogSetList?: Array<ClsLogsetInfo>;
    /**
     * 可选地域列表(仅当入参ClsRegion为空时返回)
     */
    RegionList?: Array<RegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞列表中的层信息
 */
export interface ImageVulLayerInfo {
    /**
     * 层id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LayerId?: string;
    /**
     * 层cmd
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LayerCmd?: string;
}
/**
 * DeleteMachine请求参数结构体
 */
export interface DeleteMachineRequest {
    /**
     * 客户端Uuid
     */
    Uuid: string;
}
/**
 * CreateVulImageExportJob请求参数结构体
 */
export interface CreateVulImageExportJobRequest {
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 需要返回的数量，默认为50000，最大值为50000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ClientIP- string -是否必填: 否 - 内网IP</li>
  <li>PublicIP- string -是否必填: 否 - 外网IP</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>HostName- string -是否必填: 否 - 主机名称</li>
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
    PolicyItemSummary?: CompliancePolicyItemSummary;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRiskSyscallStatus返回参数结构体
 */
export interface ModifyRiskSyscallStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulSummary请求参数结构体
 */
export interface DescribeVulSummaryRequest {
    /**
     * 过滤条件。
  <li>OnlyAffectedNewestImage- string- 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,false</li>
  <li>OnlyAffectedContainer-string- 是否必填：否 - 仅展示影响容器的漏洞,true,false</li>
  <li>CategoryType- string - 是否必填：否 - 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 ALL:全部漏洞</li>
     */
    Filters?: Array<RunTimeFilters>;
}
/**
 * DescribeAutoAuthorizedRuleHost返回参数结构体
 */
export interface DescribeAutoAuthorizedRuleHostResponse {
    /**
     * 镜像自动授权规则授权范围主机列表
     */
    List?: Array<AutoAuthorizedRuleHostInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteIgnoreVul返回参数结构体
 */
export interface DeleteIgnoreVulResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Id?: Array<number | bigint>;
    /**
     * 停止的任务ID
     */
    TaskID?: number;
}
/**
 * DeleteSearchTemplate请求参数结构体
 */
export interface DeleteSearchTemplateRequest {
    /**
     * 模板ID
     */
    Id: number;
}
/**
 * SwitchImageAutoAuthorizedRule返回参数结构体
 */
export interface SwitchImageAutoAuthorizedRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeNetworkFirewallNamespaceLabelList请求参数结构体
 */
export interface DescribeNetworkFirewallNamespaceLabelListRequest {
    /**
     * 集群id
     */
    ClusterId: string;
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
 * DescribeK8sApiAbnormalEventList请求参数结构体
 */
export interface DescribeK8sApiAbnormalEventListRequest {
    /**
     * 过滤条件。
  <li>TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]</li>
  <li>MatchRules - string  - 是否必填: 否 -命中规则筛选</li>
  <li>RiskLevel - string  - 是否必填: 否 -威胁等级筛选</li>
  <li>Status - string  - 是否必填: 否 -事件状态筛选</li>
  <li>MatchRuleType - string  - 是否必填: 否 -命中规则类型筛选</li>
  <li>ClusterRunningStatus - string  - 是否必填: 否 -集群运行状态</li>
  <li>ClusterName - string  - 是否必填: 否 -集群名称</li>
  <li>ClusterID - string  - 是否必填: 否 -集群ID</li>
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
  LatestFoundTime: 最近生成时间
  AlarmCount: 告警数量
     */
    By?: string;
}
/**
 * DescribeAffectedWorkloadList返回参数结构体
 */
export interface DescribeAffectedWorkloadListResponse {
    /**
     * 受影响的workload列表数量
     */
    TotalCount?: number;
    /**
     * 受影响的workload列表
     */
    AffectedWorkloadList?: Array<AffectedWorkloadItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 是否仅展示运行中容器镜像
     */
    IsRunning?: boolean;
}
/**
 * 漏洞防护的插件信息
 */
export interface VulDefencePlugin {
    /**
     * java进程pid
     */
    PID: number;
    /**
     * 进程主类名
     */
    MainClass: string;
    /**
     * 插件运行状态：注入中:INJECTING，注入成功：SUCCESS，注入失败：FAIL，插件超时：TIMEOUT，插件退出：QUIT
     */
    Status: string;
    /**
     * 错误日志
     */
    ErrorLog: string;
}
/**
 * DescribeAbnormalProcessEventTendency返回参数结构体
 */
export interface DescribeAbnormalProcessEventTendencyResponse {
    /**
     * 待处理异常进程事件趋势
     */
    List?: Array<AbnormalProcessEventTendencyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScanIgnoreVulList请求参数结构体
 */
export interface DescribeScanIgnoreVulListRequest {
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
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>VulName- string - 是否必填：否 - 漏洞名称</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 排序方式:DESC,ACS
     */
    Order?: string;
    /**
     * 排序字段 UpdateTime
     */
    By?: string;
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
 * CheckNetworkFirewallPolicyYaml请求参数结构体
 */
export interface CheckNetworkFirewallPolicyYamlRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略名
     */
    PolicyName: string;
    /**
     * base64编码的networkpolicy yaml字符串
     */
    Yaml?: string;
    /**
     * 策略描述
     */
    Description?: string;
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
 * 漏洞防御的主机信息
 */
export interface VulDefenceHost {
    /**
     * 主机名称/超级节点名称
     */
    HostName: string;
    /**
     * 主机ip即内网ip
     */
    HostIP: string;
    /**
     * 主机QUUID/超级节点ID
     */
    HostID: string;
    /**
     * 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENDED:未防御
     */
    Status: string;
    /**
     * 外网ip
     */
    PublicIP: string;
    /**
     * 首次开启时间
     */
    CreateTime: string;
    /**
     * 更新时间
     */
    ModifyTime: string;
    /**
     * 节点类型[NORMAL:普通节点|SUPER:超级节点]
     */
    NodeType?: string;
    /**
     * 超级节点子网名称
     */
    NodeSubNetName?: string;
    /**
     * 超级节点子网网段
     */
    NodeSubNetCIDR?: string;
    /**
     * 超级节点子网ID
     */
    NodeSubNetID?: string;
    /**
     * 超级节点唯一ID
     */
    NodeUniqueID?: string;
    /**
     * 超级节点ID
     */
    NodeID?: string;
    /**
     * Pod Ip
     */
    PodIP?: string;
    /**
     * Pod 名称
     */
    PodName?: string;
}
/**
 * ModifyAccessControlStatus返回参数结构体
 */
export interface ModifyAccessControlStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeEmergencyVulList返回参数结构体
 */
export interface DescribeEmergencyVulListResponse {
    /**
     * 漏洞总数
     */
    TotalCount?: number;
    /**
     * 漏洞列表
     */
    List?: Array<EmergencyVulInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ModifyImageAuthorized返回参数结构体
 */
export interface ModifyImageAuthorizedResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网络集群资产返回的结构体
 */
export interface NetworkClusterInfoItem {
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
     * 集群区域
     */
    Region: string;
    /**
     * 集群网络插件
     */
    NetworkPolicyPlugin: string;
    /**
     * 集群状态
     */
    ClusterStatus: string;
    /**
     * 总策略数量
     */
    TotalRuleCount: number;
    /**
     * 已开启策略数量
     */
    EnableRuleCount: number;
    /**
     * 集群网络插件状态，正常：Running 不正常：Error
     */
    NetworkPolicyPluginStatus: string;
    /**
     * 集群网络插件错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetworkPolicyPluginError: string;
    /**
     * 容器网络插件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterNetworkSettings?: string;
}
/**
 * AddEscapeWhiteList返回参数结构体
 */
export interface AddEscapeWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecLogCleanSettingInfo返回参数结构体
 */
export interface ModifySecLogCleanSettingInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWebVulList请求参数结构体
 */
export interface DescribeWebVulListRequest {
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
  <li>OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,false</li>
  <li>OnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,false</li>
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。</li>
  <li>CanBeFixed- string - 是否必填：否 - 是否可修复true,false。</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ContainerID- string -是否必填: 否 - 容器ID</li>
  <li>ContainerName- string -是否必填: 否 - 容器名称</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
  <li>FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp</li>
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
    /**
     * 扫描路径模式：
  SCAN_PATH_ALL：全部路径
  SCAN_PATH_DEFAULT：默认路径
  SCAN_PATH_USER_DEFINE：用户自定义路径
  
     */
    ScanPathMode?: string;
}
/**
 * DescribeVulDefenceEvent请求参数结构体
 */
export interface DescribeVulDefenceEventRequest {
    /**
     * 过滤条件。
  <li>Status- String - 是否必填：否 - 插件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_DEFENDED：已防御</li>
  <li>ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED </li>
  <li>ContainerNetStatus- String -是否必填: 否 -  容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATING</li>
  <li>EventType - String -是否必填: 否 -  入侵状态，防御成功：EVENT_DEFENDED，尝试攻击：EVENT_ATTACK </li>
  <li>TimeRange- String -是否必填: 否 -  时间范围，第一个值表示开始时间，第二个值表示结束时间 </li>
  <li>VulName- string - 是否必填：否 - 漏洞名称。</li>
  <li>CVEID- string - 是否必填：否 - CVE编号。</li>
  <li>SourceIP- string - 是否必填：否 - 攻击源IP。</li>
  <li>ContainerName- string - 是否必填：否 - 容器名称。</li>
  <li>ContainerID- string - 是否必填：否 - 容器ID。</li>
  <li>ImageName- string - 是否必填：否 - 镜像名称。</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID。</li>
  <li>HostName- string - 是否必填：否 - 主机名称。</li>
  <li>HostIP- string - 是否必填：否 - 内网IP。</li>
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
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：事件数量：EventCount
     */
    By?: string;
}
/**
 * DescribeVirusSummary返回参数结构体
 */
export interface DescribeVirusSummaryResponse {
    /**
     * 最近的一次扫描任务id
     */
    TaskId?: string;
    /**
     * 木马影响容器个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskContainerCnt?: number;
    /**
     * 待处理风险个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskCnt?: number;
    /**
     * 病毒库更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusDataBaseModifyTime?: string;
    /**
     * 木马影响容器个数较昨日增长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskContainerIncrease?: number;
    /**
     * 待处理风险个数较昨日增长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskIncrease?: number;
    /**
     * 隔离事件个数较昨日新增
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateIncrease?: number;
    /**
     * 隔离事件总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * UpdateAndPublishNetworkFirewallPolicyYamlDetail请求参数结构体
 */
export interface UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略id
     */
    Id: number;
    /**
     * base64编码的networkpolicy yaml字符串
     */
    Yaml?: string;
    /**
     * 策略描述
     */
    Description?: string;
}
/**
 * DescribeProVersionInfo返回参数结构体
 */
export interface DescribeProVersionInfoResponse {
    /**
     * 专业版开始时间，补充购买时才不为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 专业版结束时间，补充购买时才不为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 需购买的机器核数
     */
    CoresCnt?: number;
    /**
     * 弹性计费上限
     */
    MaxPostPayCoresCnt?: number;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 购买状态
  待购: Pending
  已购: Normal
  隔离: Isolate
     */
    BuyStatus?: string;
    /**
     * 是否曾经购买过(false:未曾 true:曾经购买过)
     */
    IsPurchased?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddEditAbnormalProcessRule返回参数结构体
 */
export interface AddEditAbnormalProcessRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ScanComplianceScanFailedAssets请求参数结构体
 */
export interface ScanComplianceScanFailedAssetsRequest {
    /**
     * 要重新扫描的客户资产项ID的列表。
     */
    CustomerAssetIdSet: Array<number | bigint>;
    /**
     * 扫描资产类型 <li>ASSET_CONTAINER Docker容器</li> <li>ASSET_IMAGE Docker镜像</li> <li>ASSET_HOST Docker主机</li> <li>ASSET_K8S Kubernetes</li> <li>ASSET_CONTAINERD Containerd主机</li> <li>ASSET_CONTAINERD_CONTAINER Containerd容器</li>
     */
    AssetType?: string;
}
/**
 * ModifySecLogDeliveryClsSetting返回参数结构体
 */
export interface ModifySecLogDeliveryClsSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * CreateCheckComponent返回参数结构体
 */
export interface CreateCheckComponentResponse {
    /**
     * "InstallSucc"表示安装成功，"InstallFailed"表示安装失败
     */
    InstallResult: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    WhiteListDetailInfo?: RiskSyscallWhiteListInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddNetworkFirewallPolicyYamlDetail请求参数结构体
 */
export interface AddNetworkFirewallPolicyYamlDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略名
     */
    PolicyName: string;
    /**
     * base64编码的networkpolicy yaml字符串
     */
    Yaml?: string;
    /**
     * 策略描述
     */
    Description?: string;
}
/**
 * DescribeVulLevelImageSummary返回参数结构体
 */
export interface DescribeVulLevelImageSummaryResponse {
    /**
     * 高危漏洞最新本地镜像占比
     */
    HighLevelVulLocalImagePercent?: number;
    /**
     * 中危漏洞最新本地镜像占比
     */
    MediumLevelVulLocalImagePercent?: number;
    /**
     * 低危漏洞最新本地镜像占比
     */
    LowLevelVulLocalImagePercent?: number;
    /**
     * 严重漏洞最新本地镜像占比
     */
    CriticalLevelVulLocalImagePercent?: number;
    /**
     * 影响的最新版本本地镜像数
     */
    LocalNewestImageCount?: number;
    /**
     * 影响的最新版本仓库镜像数
     */
    RegistryNewestImageCount?: number;
    /**
     * 高危漏洞最新仓库镜像占比
     */
    HighLevelVulRegistryImagePercent?: number;
    /**
     * 中危漏洞最新仓库镜像占比
     */
    MediumLevelVulRegistryImagePercent?: number;
    /**
     * 低危漏洞最新仓库镜像占比
     */
    LowLevelVulRegistryImagePercent?: number;
    /**
     * 严重漏洞最新仓库镜像占比
     */
    CriticalLevelVulRegistryImagePercent?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ScanComplianceAssets返回参数结构体
 */
export interface ScanComplianceAssetsResponse {
    /**
     * 返回重新检测任务的ID。
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterNodes请求参数结构体
 */
export interface DescribeClusterNodesRequest {
    /**
     * 集群Id,不输入表示查询所有
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
     * Name 可取值：
  DefendStatus（防护状态）:
      Defended 已防护
      UnDefended 未防护
  AgentStatus (容器agent状态):
      OFFLINE 离线
      ONLINE 在线
      UNINSTALL 未安装
  InstanceState (节点状态):
      Running 运行中
      Ready 准备
      Notready 未准备好
      Initializing 初始化
      Failed 失败
      Error 错误
  InstanceRole (节点角色)
      WORKER 工作节点
      MASTER_ETCD 主节点
      SUPER 超级节点
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
 * CreateAssetImageVirusExportJob返回参数结构体
 */
export interface CreateAssetImageVirusExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIndexList请求参数结构体
 */
export declare type DescribeIndexListRequest = null;
/**
 * CreateWebVulExportJob返回参数结构体
 */
export interface CreateWebVulExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReverseShellWhiteListDetail返回参数结构体
 */
export interface DescribeReverseShellWhiteListDetailResponse {
    /**
     * 事件基本信息
     */
    WhiteListDetailInfo?: ReverseShellWhiteListInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnauthorizedCoresTendency请求参数结构体
 */
export declare type DescribeUnauthorizedCoresTendencyRequest = null;
/**
 * DescribeAssetImageVulListExport返回参数结构体
 */
export interface DescribeAssetImageVulListExportResponse {
    /**
     * excel文件下载地址
     */
    DownloadUrl: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞Top排名信息
 */
export interface VulTopRankingInfo {
    /**
     * 漏洞名称
     */
    VulName: string;
    /**
     * 威胁等级,CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低
     */
    Level: string;
    /**
     * 影响的镜像数
     */
    AffectedImageCount: number;
    /**
     * 影响的容器数
     */
    AffectedContainerCount: number;
    /**
     * 漏洞ID
     */
    ID: number;
    /**
     * 漏洞PocID
     */
    PocID: string;
}
/**
 * DescribeProVersionInfo请求参数结构体
 */
export declare type DescribeProVersionInfoRequest = null;
/**
 * DescribeVulLevelSummary请求参数结构体
 */
export interface DescribeVulLevelSummaryRequest {
    /**
     * 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 EMERGENCY:应急漏洞
     */
    CategoryType: string;
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
    ImageID?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 镜像摘要
     */
    ImageDigest?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 镜像大小
     */
    Size?: number;
    /**
     * 关联主机个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostCnt?: number;
    /**
     * 关联容器个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerCnt?: number;
    /**
     * 最近扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanTime?: string;
    /**
     * 漏洞个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulCnt?: number;
    /**
     * 风险行为数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskCnt?: number;
    /**
     * 敏感信息数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SensitiveInfoCnt?: number;
    /**
     * 是否信任镜像
     */
    IsTrustImage?: boolean;
    /**
     * 镜像系统
     */
    OsName?: string;
    /**
     * agent镜像扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentError?: string;
    /**
     * 后端镜像扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanError?: string;
    /**
     * 系统架构
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Architecture?: string;
    /**
     * 作者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Author?: string;
    /**
     * 构建历史
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BuildHistory?: string;
    /**
     * 木马扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVirusProgress?: number;
    /**
     * 漏洞扫进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVulProgress?: number;
    /**
     * 敏感信息扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRiskProgress?: number;
    /**
     * 木马扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVirusError?: string;
    /**
     * 漏洞扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVulError?: string;
    /**
     * 敏感信息错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRiskError?: string;
    /**
     * 镜像扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanStatus?: string;
    /**
     * 木马病毒数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusCnt?: number;
    /**
     * 镜像扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 剩余扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemainScanTime?: number;
    /**
     * 授权为：1，未授权为：0
     */
    IsAuthorized?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAssetImageRegistryScanTaskOneKey返回参数结构体
 */
export interface CreateAssetImageRegistryScanTaskOneKeyResponse {
    /**
     * 扫描任务id
     */
    TaskID?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ExportStatus?: string;
    /**
     * 返回下载URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadURL?: string;
    /**
     * 当ExportStatus为RUNNING时，返回导出进度。0~100范围的浮点数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExportProgress?: number;
    /**
     * 失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailureMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Id?: string;
    /**
     * 镜像数量
     */
    ImageCount?: number;
    /**
     * 连接进程名字
     */
    ProcessName?: string;
    /**
     * 目标地址ip
     */
    DstIp?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 目标端口
     */
    DstPort?: string;
    /**
     * 是否是全局白名单，true全局
     */
    IsGlobal?: boolean;
    /**
     * 镜像id数组，为空代表全部
     */
    ImageIds?: Array<string>;
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
     * 生效镜像id，空数组代表全部镜像
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
    List?: Array<HostInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeABTestConfig请求参数结构体
 */
export interface DescribeABTestConfigRequest {
    /**
     * 灰度项目名称
     */
    ProjectName?: string;
}
/**
 * k8s api 异常事件规则配置范围
 */
export interface K8sApiAbnormalRuleScopeInfo {
    /**
     * 范围
  系统事件:
  ANONYMOUS_ACCESS: 匿名访问
  ABNORMAL_UA_REQ: 异常UA请求
  ANONYMOUS_ABNORMAL_PERMISSION: 匿名用户权限异动
  GET_CREDENTIALS: 凭据信息获取
  MOUNT_SENSITIVE_PATH: 敏感路径挂载
  COMMAND_RUN: 命令执行
  PRIVILEGE_CONTAINER: 特权容器
  EXCEPTION_CRONTAB_TASK: 异常定时任务
  STATICS_POD: 静态pod创建
  ABNORMAL_CREATE_POD: 异常pod创建
  USER_DEFINED: 用户自定义
     */
    Scope: string;
    /**
     * 动作(RULE_MODE_ALERT: 告警 RULE_MODE_RELEASE:放行)
     */
    Action: string;
    /**
     * 威胁等级 HIGH:高级 MIDDLE: 中级 LOW:低级 NOTICE:提示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: string;
    /**
     * 开关状态(true:开 false:关) 适用于系统规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: boolean;
    /**
     * 是否被删除 适用于自定义规则入参
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDelete?: boolean;
}
/**
 * 集群的节点信息
 */
export interface ClusterNodeInfo {
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 内网ip地址
     */
    PrivateIpAddresses?: string;
    /**
     * 节点的角色，Master、Work等
     */
    InstanceRole?: string;
    /**
     * 实例的状态（running 运行中，initializing 初始化中，failed 异常）
     */
    InstanceState?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * agent安装状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentStatus?: string;
    /**
     * 公网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIP?: string;
    /**
     * 节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostID?: string;
    /**
     * 主机类型(普通节点情况)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MachineType?: string;
    /**
     * 节点类型(
  NORMAL: 普通节点
  SUPER:超级节点
  )
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeType?: string;
    /**
     * uuid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UUID?: string;
    /**
     * 计费核数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChargeCoresCnt?: number;
    /**
     * 防护状态:
  已防护: Defended
  未防护: UnDefended
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefendStatus?: string;
}
/**
 * StopVulScanTask请求参数结构体
 */
export interface StopVulScanTaskRequest {
    /**
     * 本地镜像漏洞扫描任务ID
     */
    LocalTaskID?: number;
    /**
     * 本地镜像ID，无则全部
     */
    LocalImageIDs?: Array<string>;
    /**
     * 仓库镜像ID，无则全部
     */
    RegistryImageIDs?: Array<number | bigint>;
    /**
     * 仓库镜像漏洞扫描任务ID
     */
    RegistryTaskID?: number;
}
/**
 * DescribeNetworkFirewallNamespaceList返回参数结构体
 */
export interface DescribeNetworkFirewallNamespaceListResponse {
    /**
     * 集群总数
     */
    TotalCount: number;
    /**
     * 集群的详细信息
     */
    ClusterNamespaceList: Array<NetworkClusterNamespaceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ImageDigest?: string;
    /**
     * 镜像仓库地址
     */
    ImageRepoAddress?: string;
    /**
     * 仓库类型
     */
    RegistryType?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 镜像版本
     */
    ImageTag?: string;
    /**
     * 镜像大小
     */
    ImageSize?: number;
    /**
     * 最近扫描时间
     */
    ScanTime?: string;
    /**
     * 扫描状态
     */
    ScanStatus?: string;
    /**
     * 安全漏洞数
     */
    VulCnt?: number;
    /**
     * 木马病毒数
     */
    VirusCnt?: number;
    /**
     * 风险行为数
     */
    RiskCnt?: number;
    /**
     * 敏感信息数
     * @deprecated
     */
    SentiveInfoCnt?: number;
    /**
     * 是否可信镜像
     */
    IsTrustImage?: boolean;
    /**
     * 镜像系统
     */
    OsName?: string;
    /**
     * 木马扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVirusError?: string;
    /**
     * 漏洞扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVulError?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 命名空间
     */
    Namespace?: string;
    /**
     * 高危扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRiskError?: string;
    /**
     * 敏感信息扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVirusProgress?: number;
    /**
     * 木马扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVulProgress?: number;
    /**
     * 漏洞扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRiskProgress?: number;
    /**
     * 剩余扫描时间秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRemainTime?: number;
    /**
     * cve扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CveStatus?: string;
    /**
     * 高危扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskStatus?: string;
    /**
     * 木马扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusStatus?: string;
    /**
     * 总进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Progress?: number;
    /**
     * 授权状态
     */
    IsAuthorized?: number;
    /**
     * 仓库区域
     */
    RegistryRegion?: string;
    /**
     * 列表id
     */
    Id?: number;
    /**
     * 镜像Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageId?: string;
    /**
     * 镜像创建的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageCreateTime?: string;
    /**
     * 是否为镜像的最新版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsLatestImage?: boolean;
    /**
     * low级别漏洞个数
     */
    LowLevelVulCnt?: number;
    /**
     * medium级别漏洞个数
     */
    MediumLevelVulCnt?: number;
    /**
     * high级别漏洞个数
     */
    HighLevelVulCnt?: number;
    /**
     * critical级别漏洞个数
     */
    CriticalLevelVulCnt?: number;
    /**
     * 关联容器数
     */
    ContainerCnt?: number;
    /**
     * 组件数
     */
    ComponentCnt?: number;
    /**
     * 是否运行中
     */
    IsRunning?: boolean;
    /**
     * 是否存在必修漏洞
     */
    HasNeedFixVul?: boolean;
    /**
     * 敏感信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SensitiveInfoCnt?: number;
    /**
     * 是否推荐处置
     */
    RecommendedFix?: boolean;
}
/**
 * CreateAssetImageRegistryScanTask返回参数结构体
 */
export interface CreateAssetImageRegistryScanTaskResponse {
    /**
     * 返回的任务ID
     */
    TaskID?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePublicKey请求参数结构体
 */
export declare type DescribePublicKeyRequest = null;
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
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * podip
     */
    PodIP?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * 节点类型
     */
    NodeType?: string;
    /**
     * 超级节点唯一id
     */
    NodeUniqueID?: string;
}
/**
 * DescribeAssetImageRegistrySummary请求参数结构体
 */
export interface DescribeAssetImageRegistrySummaryRequest {
    /**
     * 过滤字段
     */
    Filters?: Array<AssetFilters>;
}
/**
 * DescribeVirusManualScanEstimateTimeout返回参数结构体
 */
export interface DescribeVirusManualScanEstimateTimeoutResponse {
    /**
     * 预估超时时间(h)
     */
    Timeout?: number;
    /**
     * 单台主机并行扫描容器数
     */
    ContainerScanConcurrencyCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskResultSummary返回参数结构体
 */
export interface DescribeTaskResultSummaryResponse {
    /**
     * 严重风险影响的节点数量,返回7天数据
     */
    SeriousRiskNodeCount?: Array<number | bigint>;
    /**
     * 高风险影响的节点的数量,返回7天数据
     */
    HighRiskNodeCount?: Array<number | bigint>;
    /**
     * 中风险检查项的节点数量,返回7天数据
     */
    MiddleRiskNodeCount?: Array<number | bigint>;
    /**
     * 提示风险检查项的节点数量,返回7天数据
     */
    HintRiskNodeCount?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    HostID?: string;
    /**
     * 主机ip即内网ip
     */
    HostIP?: string;
    /**
     * 主机名称
     */
    HostName?: string;
    /**
     * 业务组
     */
    Group?: string;
    /**
     * docker 版本
     */
    DockerVersion?: string;
    /**
     * docker 文件系统类型
     */
    DockerFileSystemDriver?: string;
    /**
     * 镜像个数
     */
    ImageCnt?: number;
    /**
     * 容器个数
     */
    ContainerCnt?: number;
    /**
     * agent运行状态
     */
    Status?: string;
    /**
     * 是否是Containerd
     */
    IsContainerd?: boolean;
    /**
     * 主机来源：["CVM", "ECM", "LH", "BM"]  中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；
     */
    MachineType?: string;
    /**
     * 外网ip
     */
    PublicIp?: string;
    /**
     * 主机uuid
     */
    Uuid?: string;
    /**
     * 主机实例ID
     */
    InstanceID?: string;
    /**
     * 地域ID
     */
    RegionID?: number;
    /**
     * 所属项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Project?: ProjectInfo;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<TagInfo>;
    /**
     * 集群id
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群接入状态
     */
    ClusterAccessedStatus?: string;
    /**
     * 计费核数
     */
    ChargeCoresCnt?: number;
    /**
     * 防护状态:
  已防护: Defended
  未防护: UnDefended
     */
    DefendStatus?: string;
    /**
     * 核数
     */
    CoresCnt?: number;
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
 * ModifySecLogJoinState返回参数结构体
 */
export interface ModifySecLogJoinStateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAccessControlRuleStatus返回参数结构体
 */
export interface ModifyAccessControlRuleStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
export interface CreateRefreshTaskRequest {
    /**
     * 指定集群列表,若为空则标识同步所有集群
     */
    ClusterIDs?: Array<string>;
    /**
     * 是否只同步列表
     */
    IsSyncListOnly?: boolean;
}
/**
 * DescribeK8sApiAbnormalEventList返回参数结构体
 */
export interface DescribeK8sApiAbnormalEventListResponse {
    /**
     * 事件列表
     */
    List?: Array<K8sApiAbnormalEventListItem>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNewestVul请求参数结构体
 */
export declare type DescribeNewestVulRequest = null;
/**
 * DescribeAbnormalProcessLevelSummary返回参数结构体
 */
export interface DescribeAbnormalProcessLevelSummaryResponse {
    /**
     * 异常进程高危待处理事件数
     */
    HighLevelEventCount?: number;
    /**
     * 异常进程中危待处理事件数
     */
    MediumLevelEventCount?: number;
    /**
     * 异常进程低危待处理事件数
     */
    LowLevelEventCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddEscapeWhiteList请求参数结构体
 */
export interface AddEscapeWhiteListRequest {
    /**
     * 加白名单事件类型
     ESCAPE_CGROUPS：利用cgroup机制逃逸
     ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸
     ESCAPE_DOCKER_API：访问Docker API接口逃逸
     ESCAPE_VUL_OCCURRED：逃逸漏洞利用
     MOUNT_SENSITIVE_PTAH：敏感路径挂载
     PRIVILEGE_CONTAINER_START：特权容器
     PRIVILEGE：程序提权逃逸
     */
    EventType: Array<string>;
    /**
     * 加白名单镜像ID数组
     */
    ImageIDs: Array<string>;
}
/**
 * DescribeESAggregations请求参数结构体
 */
export interface DescribeESAggregationsRequest {
    /**
     * ES聚合条件JSON
     */
    Query: string;
    /**
     * 日志类型列表
     */
    LogTypes?: Array<string>;
}
/**
 * 网络集群pod返回的结构体
 */
export interface NetworkClusterPodInfo {
    /**
     * pod名字
     */
    PodName: string;
    /**
     * pod空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace: string;
    /**
     * pod标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels: string;
    /**
     * pod类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkloadKind: string;
}
/**
 * DescribeAssetImageRiskListExport返回参数结构体
 */
export interface DescribeAssetImageRiskListExportResponse {
    /**
     * excel文件下载地址
     */
    DownloadUrl: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecLogCleanSettingInfo请求参数结构体
 */
export interface ModifySecLogCleanSettingInfoRequest {
    /**
     * 触发清理的储量底线(50-99)
     */
    ReservesLimit: number;
    /**
     * 清理停止时的储量截至线(>0,小于ReservesLimit)
     */
    ReservesDeadline: number;
    /**
     * 触发清理的存储天数(>=1)
     */
    DayLimit: number;
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
 * CreateProcessEventsExportJob返回参数结构体
 */
export interface CreateProcessEventsExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeRiskSyscallDetail返回参数结构体
 */
export interface DescribeRiskSyscallDetailResponse {
    /**
     * 事件基本信息
     */
    EventBaseInfo?: RunTimeEventBaseInfo;
    /**
     * 进程信息
     */
    ProcessInfo?: ProcessDetailInfo;
    /**
     * 父进程信息
     */
    ParentProcessInfo?: ProcessDetailBaseInfo;
    /**
     * 事件描述
     */
    EventDetail?: RiskSyscallEventDescription;
    /**
     * 祖先进程信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessInfo?: ProcessBaseInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteK8sApiAbnormalRule返回参数结构体
 */
export interface DeleteK8sApiAbnormalRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 主机上Containerd版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerdVersion?: string;
}
/**
 * 受漏洞影响的组件信息
 */
export interface VulAffectedImageComponentInfo {
    /**
     * 组件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 组件版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version: string;
    /**
     * 组件修复版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FixedVersion: string;
    /**
     * 组件路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path: string;
}
/**
 * DescribePromotionActivity请求参数结构体
 */
export interface DescribePromotionActivityRequest {
    /**
     * 活动ID
     */
    ActiveID: number;
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
 * DescribeSecLogKafkaUIN请求参数结构体
 */
export declare type DescribeSecLogKafkaUINRequest = null;
/**
 * CreateSystemVulExportJob返回参数结构体
 */
export interface CreateSystemVulExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskSyscallNames返回参数结构体
 */
export interface DescribeRiskSyscallNamesResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 系统调用名称列表
     */
    SyscallNames?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddEditReverseShellWhiteList返回参数结构体
 */
export interface AddEditReverseShellWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 异常进程数组
     */
    EventSet?: Array<AbnormalProcessEventInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InitializeUserComplianceEnvironment返回参数结构体
 */
export interface InitializeUserComplianceEnvironmentResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeImageRegistryNamespaceList返回参数结构体
 */
export interface DescribeImageRegistryNamespaceListResponse {
    /**
     * 可返回的命令空间的总量。
     */
    TotalCount?: number;
    /**
     * 返回的命令空间列表
     */
    NamespaceList?: Array<string>;
    /**
     * 返回的命令空间详细信息列表
     */
    NamespaceDetail?: Array<NamespaceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 受漏洞影响的镜像信息
 */
export interface VulAffectedImageInfo {
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 关联的主机数
     */
    HostCount: number;
    /**
     * 关联的容器数
     */
    ContainerCount: number;
    /**
     * 组件列表
     */
    ComponentList: Array<VulAffectedImageComponentInfo>;
}
/**
 * 主机标签信息
 */
export interface TagInfo {
    /**
     * 标签键
     */
    TagKey: string;
    /**
     * 标签值
     */
    TagValue: string;
}
/**
 * DescribeK8sApiAbnormalRuleList返回参数结构体
 */
export interface DescribeK8sApiAbnormalRuleListResponse {
    /**
     * 规则列表
     */
    List?: Array<K8sApiAbnormalRuleListItem>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCompliancePolicyAssetSetFromWhitelist返回参数结构体
 */
export interface DeleteCompliancePolicyAssetSetFromWhitelistResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVirusTaskList返回参数结构体
 */
export interface DescribeVirusTaskListResponse {
    /**
     * 文件查杀列表
     */
    List?: Array<VirusTaskInfo>;
    /**
     * 总数量(容器任务数量)
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetHostDetail返回参数结构体
 */
export interface DescribeAssetHostDetailResponse {
    /**
     * 容器安全uuid
     */
    UUID?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 主机名
     */
    HostName?: string;
    /**
     * 主机分组
     */
    Group?: string;
    /**
     * 主机IP
     */
    HostIP?: string;
    /**
     * 操作系统
     */
    OsName?: string;
    /**
     * agent版本
     */
    AgentVersion?: string;
    /**
     * 内核版本
     */
    KernelVersion?: string;
    /**
     * docker版本
     */
    DockerVersion?: string;
    /**
     * docker api版本
     */
    DockerAPIVersion?: string;
    /**
     * docker go 版本
     */
    DockerGoVersion?: string;
    /**
     * docker 文件系统类型
     */
    DockerFileSystemDriver?: string;
    /**
     * docker root 目录
     */
    DockerRootDir?: string;
    /**
     * 镜像数
     */
    ImageCnt?: number;
    /**
     * 容器数
     */
    ContainerCnt?: number;
    /**
     * k8s IP
     */
    K8sMasterIP?: string;
    /**
     * k8s version
     */
    K8sVersion?: string;
    /**
     * kube proxy
     */
    KubeProxyVersion?: string;
    /**
     * "UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中
     */
    Status?: string;
    /**
     * 是否Containerd
     */
    IsContainerd?: boolean;
    /**
     * 主机来源;"TENCENTCLOUD":"腾讯云服务器","OTHERCLOUD":"非腾讯云服务器"
     */
    MachineType?: string;
    /**
     * 外网ip
     */
    PublicIp?: string;
    /**
     * 主机实例ID
     */
    InstanceID?: string;
    /**
     * 地域ID
     */
    RegionID?: number;
    /**
     * 所属项目
     */
    Project?: ProjectInfo;
    /**
     * 标签
     */
    Tags?: Array<TagInfo>;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群接入状态
     */
    ClusterAccessedStatus?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全日志kafka可选信息
 */
export interface CKafkaInstanceInfo {
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceID?: string;
    /**
     * 实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 主题列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicList?: Array<CKafkaTopicInfo>;
    /**
     * 路由列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RouteList?: Array<CkafkaRouteInfo>;
    /**
     * kafka版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaVersion?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteK8sApiAbnormalRule请求参数结构体
 */
export interface DeleteK8sApiAbnormalRuleRequest {
    /**
     * 规则ID集合
     */
    RuleIDSet: Array<string>;
}
/**
 * ModifyVirusFileStatus返回参数结构体
 */
export interface ModifyVirusFileStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSuperNodePodList请求参数结构体
 */
export interface DescribeSuperNodePodListRequest {
    /**
     * 过滤条件。
  <li>NodeUniqueID- String - 是否必填：否 - 节点唯一id </li>
  <li>PodName- String - 是否必填：否 - Pod示例名称 </li>
  <li>PodIP- String - 是否必填：否 - POD IP </li>
  <li>Namespace- String - 是否必填：否 - 命名空间 </li>
  <li>Deployment- String - 是否必填：否 - 所属工作负载 </li>
  <li>Status- String - 是否必填：否 - 状态 </li>
  
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
     * 排序字段
     */
    By?: string;
    /**
     * 排序方式 asc,desc
     */
    Order?: string;
}
/**
 * DescribeAbnormalProcessEventTendency请求参数结构体
 */
export interface DescribeAbnormalProcessEventTendencyRequest {
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
 * DescribeEscapeEventDetail返回参数结构体
 */
export interface DescribeEscapeEventDetailResponse {
    /**
     * 事件基本信息
     */
    EventBaseInfo?: RunTimeEventBaseInfo;
    /**
     * 进程信息
     */
    ProcessInfo?: ProcessDetailInfo;
    /**
     * 事件描述
     */
    EventDetail?: EscapeEventDescription;
    /**
     * 父进程信息
     */
    ParentProcessInfo?: ProcessBaseInfo;
    /**
     * 祖先进程信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessInfo?: ProcessBaseInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAccessControlRules返回参数结构体
 */
export interface DeleteAccessControlRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulImageSummary返回参数结构体
 */
export interface DescribeVulImageSummaryResponse {
    /**
     * 受严重或高危漏洞影响的镜像数
     */
    SeriousVulImageCount?: number;
    /**
     * 已扫描的镜像数
     */
    ScannedImageCount?: number;
    /**
     * 漏洞总数量
     */
    VulTotalCount?: number;
    /**
     * 系统漏洞数
     */
    SysTemVulCount?: number;
    /**
     * web应用漏洞数
     */
    WebVulCount?: number;
    /**
     * 已授权镜像数
     */
    AllAuthorizedImageCount?: number;
    /**
     * 应急漏洞数
     */
    EmergencyVulCount?: number;
    /**
     * 支持扫描的漏洞总数量
     */
    SupportVulTotalCount?: number;
    /**
     * 漏洞库更新时间
     */
    VulLibraryUpdateTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEscapeRuleInfo请求参数结构体
 */
export declare type DescribeEscapeRuleInfoRequest = null;
/**
 * 木马趋势详情
 */
export interface VirusTendencyInfo {
    /**
     * 日期
     */
    Date: string;
    /**
     * 待处理事件总数
     */
    PendingEventCount: number;
    /**
     * 风险容器总数
     */
    RiskContainerCount: number;
    /**
     * 事件总数
     */
    EventCount: number;
    /**
     * 隔离事件总数
     */
    IsolateEventCount: number;
}
/**
 * DescribeComplianceWhitelistItemList返回参数结构体
 */
export interface DescribeComplianceWhitelistItemListResponse {
    /**
     * 白名单项的列表。
     */
    WhitelistItemSet?: Array<ComplianceWhitelistItem>;
    /**
     * 白名单项的总数。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * @deprecated
     */
    All?: boolean;
    /**
     * 扫描镜像Id
     */
    Id?: Array<number | bigint>;
    /**
     * 是否扫描最新版本
     */
    Latest?: boolean;
    /**
     * 是否存在运行中的容器
     */
    ContainerRunning?: boolean;
    /**
     * 扫描结束时间
     */
    ScanEndTime?: string;
    /**
     * 扫描范围 0全部镜像，1自选镜像，2推荐扫描镜像
     */
    ScanScope?: number;
    /**
     * 仓库类型 tcr,ccr,harbor
     */
    RegistryType?: Array<string>;
    /**
     * 命名空间
     */
    Namespace?: Array<string>;
    /**
     * 排除的镜像资产id
     */
    ExcludeImageAssetIds?: Array<number | bigint>;
}
/**
 * DescribeEscapeEventTendency请求参数结构体
 */
export interface DescribeEscapeEventTendencyRequest {
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 开始时间
     */
    StartTime: string;
}
/**
 * DescribeInspectionReport返回参数结构体
 */
export interface DescribeInspectionReportResponse {
    /**
     * 报告名称
     */
    ReportName?: string;
    /**
     * 下载链接
     */
    ReportUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全日志-日志投递cls设置信息
 */
export interface SecLogDeliveryClsSettingInfo {
    /**
     * 日志类型
     */
    LogType: string;
    /**
     * 投递状态(true:开启 false:关闭)
     */
    State: boolean;
    /**
     * 区域
     */
    Region: string;
    /**
     * 日志集
     */
    LogSet: string;
    /**
     * 主题ID
     */
    TopicID: string;
    /**
     * 日志集名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogSetName?: string;
    /**
     * 主题名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
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
 * CreateAssetImageScanSetting返回参数结构体
 */
export interface CreateAssetImageScanSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulDefenceEventDetail请求参数结构体
 */
export interface DescribeVulDefenceEventDetailRequest {
    /**
     * 事件ID
     */
    EventID: number;
}
/**
 * DescribeVirusAutoIsolateSampleList返回参数结构体
 */
export interface DescribeVirusAutoIsolateSampleListResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 木马自动隔离样本列表
     */
    List?: Array<VirusAutoIsolateSampleInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVirusEventTendency请求参数结构体
 */
export interface DescribeVirusEventTendencyRequest {
    /**
     * 趋势周期(默认为7天)
     */
    TendencyPeriod: number;
}
/**
 * DescribeAssetImageRegistryVulListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryVulListExportResponse {
    /**
     * excel文件下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网络集群策略自定义规则端口
 */
export interface NetworkPorts {
    /**
     * 网络策略协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocol?: string;
    /**
     * 网络策略策略端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: string;
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
 * CreateProcessEventsExportJob请求参数结构体
 */
export interface CreateProcessEventsExportJobRequest {
    /**
     * 需要返回的数量，最大值为10000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
     */
    Filters?: Array<AssetFilters>;
    /**
     * 升序降序,asc desc
     */
    Order?: string;
    /**
     * 排序字段：latest_found_time
     */
    By?: string;
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
}
/**
 * DescribeVulDetail返回参数结构体
 */
export interface DescribeVulDetailResponse {
    /**
     * 漏洞详情信息
     */
    VulInfo?: VulDetailInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 镜像仓库联通性检测结果
 */
export interface RegistryConnDetectResult {
    /**
     * 联通性检测的主机quuid 或者 backend
     */
    Quuid?: string;
    /**
     * 联通性检测的主机uuid 或者 backend
     */
    Uuid?: string;
    /**
     * 检测结果状态
     */
    ConnDetectStatus?: string;
    /**
     * 检测结果信息
     */
    ConnDetectMessage?: string;
    /**
     * 失败的解决方案
     */
    Solution?: string;
    /**
     * 失败原因
     */
    FailReason?: string;
}
/**
 * ModifyCompliancePeriodTask返回参数结构体
 */
export interface ModifyCompliancePeriodTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ProcessName?: string;
    /**
     * 进程路径
     */
    ProcessPath?: string;
    /**
     * 镜像id
     */
    ImageId?: string;
    /**
     * 容器id
     */
    ContainerId?: string;
    /**
     * 镜像名
     */
    ImageName?: string;
    /**
     * 容器名
     */
    ContainerName?: string;
    /**
     * 生成时间
     */
    FoundTime?: string;
    /**
     * 事件解决方案
     */
    Solution?: string;
    /**
     * 事件详细描述
     */
    Description?: string;
    /**
     * 系统调用名称
     */
    SyscallName?: string;
    /**
     * 状态，EVENT_UNDEAL:事件未处理
      EVENT_DEALED:事件已经处理
      EVENT_INGNORE：事件已经忽略
      EVENT_ADD_WHITE：时间已经加白
     */
    Status?: string;
    /**
     * 事件id
     */
    EventId?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * pod(实例)的名字
     */
    PodName?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 系统监控名称是否存在
     */
    RuleExist?: boolean;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 网络状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    ContainerNetStatus?: string;
    /**
     * 容器子状态
  "AGENT_OFFLINE"       //Agent离线
  "NODE_DESTROYED"      //节点已销毁
  "CONTAINER_EXITED"    //容器已退出
  "CONTAINER_DESTROYED" //容器已销毁
  "SHARED_HOST"         // 容器与主机共享网络
  "RESOURCE_LIMIT"      //隔离操作资源超限
  "UNKNOW"              // 原因未知
     */
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * 集群I'D
     */
    ClusterID?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 节点公网ip
     */
    PublicIP?: string;
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * uuid
     */
    HostID?: string;
    /**
     * 节点内网ip
     */
    HostIP?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
}
/**
 * DescribeEscapeEventTendency返回参数结构体
 */
export interface DescribeEscapeEventTendencyResponse {
    /**
     * 待处理逃逸事件趋势
     */
    List?: Array<EscapeEventTendencyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表示一条集群安全检测项的详细信息
 */
export interface ClusterCheckItem {
    /**
     * 唯一的检测项的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckItemId?: number;
    /**
     * 风险项的名称
     */
    Name?: string;
    /**
     * 检测项详细描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemDetail?: string;
    /**
     * 威胁等级。严重Serious,高危High,中危Middle,提示Hint
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: string;
    /**
     * 检查对象、风险对象.Runc,Kubelet,Containerd,Pods
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskTarget?: string;
    /**
     * 风险类别,漏洞风险CVERisk,配置风险ConfigRisk
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskType?: string;
    /**
     * 检测项所属的风险类型,权限提升:PrivilegePromotion,拒绝服务:RefuseService,目录穿越:DirectoryEscape,未授权访问:UnauthorizedAccess,权限许可和访问控制问题:PrivilegeAndAccessControl,敏感信息泄露:SensitiveInfoLeak
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskAttribute?: string;
    /**
     * 风险特征,Tag.存在EXP:ExistEXP,存在POD:ExistPOC,无需重启:NoNeedReboot, 服务重启:ServerRestart,远程信息泄露:RemoteInfoLeak,远程拒绝服务:RemoteRefuseService,远程利用:RemoteExploit,远程执行:RemoteExecute
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskProperty?: string;
    /**
     * CVE编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVENumber?: string;
    /**
     * 披露时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscoverTime?: string;
    /**
     * 解决方案
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Solution?: string;
    /**
     * CVSS信息,用于画图
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVSS?: string;
    /**
     * CVSS分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVSSScore?: string;
    /**
     * 参考连接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelateLink?: string;
    /**
     * 影响类型，为Node或者Workload
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AffectedType?: string;
    /**
     * 受影响的版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AffectedVersion?: string;
    /**
     * 忽略的资产数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IgnoredAssetNum?: number;
    /**
     * 是否忽略该检测项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsIgnored?: boolean;
    /**
     * 受影响评估
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskAssessment?: string;
}
/**
 * DescribeAssetImageVulList返回参数结构体
 */
export interface DescribeAssetImageVulListResponse {
    /**
     * 镜像漏洞列表
     */
    List?: Array<ImagesVul>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeK8sApiAbnormalSummary请求参数结构体
 */
export declare type DescribeK8sApiAbnormalSummaryRequest = null;
/**
 * DescribeAbnormalProcessLevelSummary请求参数结构体
 */
export declare type DescribeAbnormalProcessLevelSummaryRequest = null;
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
 * ModifyK8sApiAbnormalRuleStatus请求参数结构体
 */
export interface ModifyK8sApiAbnormalRuleStatusRequest {
    /**
     * 规则ID
     */
    RuleID: string;
    /**
     * 状态(true:开 false:关)
     */
    Status: boolean;
}
/**
 * DescribeNetworkFirewallPolicyDetail返回参数结构体
 */
export interface DescribeNetworkFirewallPolicyDetailResponse {
    /**
     * 集群Id
     */
    ClusterId?: string;
    /**
     * 策略名
     */
    PolicyName?: string;
    /**
     * 命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace?: string;
    /**
     * 入站类型
     */
    FromPolicyRule?: number;
    /**
     * 出站类型
     */
    ToPolicyRule?: number;
    /**
     * 自定义规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomPolicy?: Array<NetworkCustomPolicy>;
    /**
     * pod选择器
     */
    PodSelector?: string;
    /**
     * 策略描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 策略创建时间
     */
    PolicyCreateTime?: string;
    /**
     * 策略源类型，分为System和Manual，分别代表手动和系统添加
     */
    PolicySourceType?: string;
    /**
     * 网络策略对应的网络插件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetworkPolicyPlugin?: string;
    /**
     * 网络策略状态
     */
    PublishStatus?: string;
    /**
     * 网络发布结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublishResult?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePostPayDetail返回参数结构体
 */
export interface DescribePostPayDetailResponse {
    /**
     * 弹性计费扣费详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SoftQuotaDayDetail?: Array<SoftQuotaDayInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeK8sApiAbnormalEventInfo返回参数结构体
 */
export interface DescribeK8sApiAbnormalEventInfoResponse {
    /**
     * 事件详情
     */
    Info?: K8sApiAbnormalEventInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallPodLabelsList返回参数结构体
 */
export interface DescribeNetworkFirewallPodLabelsListResponse {
    /**
     * 集群pod总数
     */
    TotalCount: number;
    /**
     * 集群pod详细信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodList: Array<NetworkClusterPodInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 受漏洞影响的组件信息
 */
export interface VulAffectedComponentInfo {
    /**
     * 组件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 组件版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version: Array<string>;
    /**
     * 组件修复版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FixedVersion: Array<string>;
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
    ClusterCheckItems?: Array<ClusterCheckItem>;
    /**
     * 检查项总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    CustomerAssetId?: number;
    /**
     * 资产类别。
     */
    AssetType?: string;
    /**
     * 检测状态
  CHECK_INIT, 待检测
  CHECK_RUNNING, 检测中
  CHECK_FINISHED, 检测完成
  CHECK_FAILED, 检测失败
     */
    CheckStatus?: string;
    /**
     * 资产的名称。
     */
    AssetName?: string;
    /**
     * 资产检测失败的原因。
     */
    FailureReason?: string;
    /**
     * 检测失败的处理建议。
     */
    Suggestion?: string;
    /**
     * 检测的时间。
     */
    CheckTime?: string;
}
/**
 * ScanComplianceAssets请求参数结构体
 */
export interface ScanComplianceAssetsRequest {
    /**
     * 要重新扫描的客户资产项ID的列表。
     */
    CustomerAssetIdSet: Array<number | bigint>;
    /**
     * 扫描资产类型 <li>ASSET_CONTAINER Docker容器</li> <li>ASSET_IMAGE Docker镜像</li> <li>ASSET_HOST Docker主机</li> <li>ASSET_K8S Kubernetes</li> <li>ASSET_CONTAINERD Containerd主机</li> <li>ASSET_CONTAINERD_CONTAINER Containerd容器</li>
     */
    AssetType?: string;
}
/**
 * DescribeAbnormalProcessRuleDetail返回参数结构体
 */
export interface DescribeAbnormalProcessRuleDetailResponse {
    /**
     * 异常进程策略详细信息
     */
    RuleDetail?: AbnormalProcessRuleInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
      EVENT_ISOLATE_CONTAINER: 隔离容器
      EVENT_RESOTRE_CONTAINER: 恢复容器
     */
    Status: string;
    /**
     * 事件备注
     */
    Remark?: string;
    /**
     * 是否后续自动隔离相同MD5文件
     */
    AutoIsolate?: boolean;
}
/**
 * 漏洞影响的仓库镜像列表
 */
export interface VulAffectedRegistryImageInfo {
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 镜像版本
     */
    ImageTag: string;
    /**
     * 镜像命名空间
     */
    Namespace: string;
    /**
     * 镜像地址
     */
    ImageRepoAddress: string;
    /**
     * 组件列表
     */
    ComponentList: Array<VulAffectedImageComponentInfo>;
    /**
     * 是否为镜像的最新版本
     */
    IsLatestImage: boolean;
    /**
     * 内部镜像资产ID
     */
    ImageAssetId: number;
}
/**
 * CreateVulContainerExportJob返回参数结构体
 */
export interface CreateVulContainerExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SyncAssetImageRegistryAsset返回参数结构体
 */
export interface SyncAssetImageRegistryAssetResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * CreateK8sApiAbnormalRuleInfo返回参数结构体
 */
export interface CreateK8sApiAbnormalRuleInfoResponse {
    /**
     * 规则ID
     */
    RuleID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyEscapeRule请求参数结构体
 */
export interface ModifyEscapeRuleRequest {
    /**
     * 需要修改的数组
     */
    RuleSet: Array<EscapeRuleEnabled>;
}
/**
 * k8sapi异常请求趋势Item
 */
export interface K8sApiAbnormalTendencyItem {
    /**
     * 日期
     */
    Date: string;
    /**
     * 异常UA请求事件数
     */
    ExceptionUARequestCount: number;
    /**
     * 匿名用户权限事件数
     */
    AnonymousUserRightCount: number;
    /**
     * 凭据信息获取事件数
     */
    CredentialInformationObtainCount: number;
    /**
     * 敏感数据挂载事件数
     */
    SensitiveDataMountCount: number;
    /**
     * 命令执行事件数
     */
    CmdExecCount: number;
    /**
     * 异常定时任务事件数
     */
    AbnormalScheduledTaskCount: number;
    /**
     * 静态Pod创建数
     */
    StaticsPodCreateCount: number;
    /**
     * 可疑容器创建数
     */
    DoubtfulContainerCreateCount: number;
    /**
     * 自定义规则事件数
     */
    UserDefinedRuleCount: number;
    /**
     * 匿名访问事件数
     */
    AnonymousAccessCount: number;
    /**
     * 特权容器事件数
     */
    PrivilegeContainerCount: number;
}
/**
 * DescribeAbnormalProcessRules返回参数结构体
 */
export interface DescribeAbnormalProcessRulesResponse {
    /**
     * 事件总数量
     */
    TotalCount?: number;
    /**
     * 异常进程策略信息列表
     */
    RuleSet?: Array<RuleBaseInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyVulDefenceSetting返回参数结构体
 */
export interface ModifyVulDefenceSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 支持防御的漏洞
 */
export interface SupportDefenceVul {
    /**
     * 漏洞PocID
     */
    PocID?: string;
    /**
     * 漏洞名称
     */
    Name?: string;
    /**
     * 漏洞标签
     */
    Tags?: Array<string>;
    /**
     * 漏洞CVSS
     */
    CVSSV3Score?: number;
    /**
     * 漏洞威胁等级
     */
    Level?: string;
    /**
     * 漏洞CVEID
     */
    CVEID?: string;
    /**
     * 漏洞披露时间
     */
    SubmitTime?: string;
    /**
     * 漏洞id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulId?: number;
    /**
     * 状态，0:防御中，1：已加白，指的是在白名单列表中有这个漏洞的，不一定是全局型白名单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
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
     * Name 可取值：
  Name: 检查项名称
  RiskType: 风险类别
  RiskLevel: 风险等级
  RiskTarget: 检查对象
  RiskAttribute: 检测项所属分型线类型
  Enable: 检查项是否开启(0:关闭 1:开启)
     */
    Filters?: Array<ComplianceFilters>;
}
/**
 * DescribeImageComponentList返回参数结构体
 */
export interface DescribeImageComponentListResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 镜像组件列表
     */
    List?: Array<ImageComponent>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAbnormalProcessRulesExportJob返回参数结构体
 */
export interface CreateAbnormalProcessRulesExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogDeliveryKafkaOptions请求参数结构体
 */
export interface DescribeSecLogDeliveryKafkaOptionsRequest {
    /**
     * 地域，若为空则返回所有可选地域
     */
    RegionID?: string;
}
/**
 * DescribeVirusScanSetting返回参数结构体
 */
export interface DescribeVirusScanSettingResponse {
    /**
     * 是否开启定期扫描
     */
    EnableScan?: boolean;
    /**
     * 检测周期每隔多少天
     */
    Cycle?: number;
    /**
     * 扫描开始时间
     */
    BeginScanAt?: string;
    /**
     * 扫描全部路径
     */
    ScanPathAll?: boolean;
    /**
     * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
     */
    ScanPathType?: number;
    /**
     * 超时时长，单位小时
     */
    Timeout?: number;
    /**
     * 扫描范围0容器1主机节点
     */
    ScanRangeType?: number;
    /**
     * true 全选，false 自选
     */
    ScanRangeAll?: boolean;
    /**
     * 自选扫描范围的容器id或者主机id 根据ScanRangeType决定
     */
    ScanIds?: Array<string>;
    /**
     * 自选排除或扫描的地址
     */
    ScanPath?: Array<string>;
    /**
     * 一键检测的超时设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClickTimeout?: number;
    /**
     * 扫描路径模式：
  SCAN_PATH_ALL：全部路径
  SCAN_PATH_DEFAULT：默认路径
  SCAN_PATH_USER_DEFINE：用户自定义路径
  
     */
    ScanPathMode?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    RuleDetail?: AccessControlRuleInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNetworkFirewallPublish请求参数结构体
 */
export interface CreateNetworkFirewallPublishRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略Id数组
     */
    Id: Array<number | bigint>;
}
/**
 * CreateHostExportJob返回参数结构体
 */
export interface CreateHostExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskDnsList返回参数结构体
 */
export interface DescribeRiskDnsListResponse {
    /**
     * 恶意请求事件列表
     */
    List?: Array<RiskDnsEventInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallPolicyDiscover请求参数结构体
 */
export interface DescribeNetworkFirewallPolicyDiscoverRequest {
    /**
     * 任务ID
     */
    TaskId: number;
}
/**
 * 恶意请求事件信息
 */
export interface RiskDnsEventInfo {
    /**
     * 事件ID
     */
    EventID: number;
    /**
     * 事件类型，恶意域名请求：DOMAIN，恶意IP请求：IP
     */
    EventType: string;
    /**
     * 恶意请求域名/IP
     */
    Address: string;
    /**
     * 容器ID
     */
    ContainerID: string;
    /**
     * 容器名称
     */
    ContainerName: string;
    /**
     * 隔离状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    ContainerNetStatus: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus: string;
    /**
     * 容器子状态
  "AGENT_OFFLINE"       //Agent离线
  "NODE_DESTROYED"      //节点已销毁
  "CONTAINER_EXITED"    //容器已退出
  "CONTAINER_DESTROYED" //容器已销毁
  "SHARED_HOST"         // 容器与主机共享网络
  "RESOURCE_LIMIT"      //隔离操作资源超限
  "UNKNOW"              // 原因未知
     */
    ContainerNetSubStatus: string;
    /**
     * 容器隔离操作来源
     */
    ContainerIsolateOperationSrc: string;
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 首次发现时间
     */
    FoundTime: string;
    /**
     * 最近生成时间
     */
    LatestFoundTime: string;
    /**
     * 事件状态
  EVENT_UNDEAL： 待处理
  EVENT_DEALED：已处理
  EVENT_IGNORE： 已忽略
  EVENT_ADD_WHITE：已加白
     */
    EventStatus: string;
    /**
     * 恶意请求次数
     */
    EventCount: number;
    /**
     * 事件描述
     */
    Description: string;
    /**
     * 解决方案
     */
    Solution: string;
    /**
     * 恶意IP所属城市
     */
    City: string;
    /**
     * 主机名称
     */
    HostName: string;
    /**
     * 主机ID
     */
    HostID: string;
    /**
     * 内网IP
     */
    HostIP: string;
    /**
     * 外网IP
     */
    PublicIP: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * pod 名称
     */
    PodName?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
}
/**
 * DescribeK8sApiAbnormalRuleScopeList返回参数结构体
 */
export interface DescribeK8sApiAbnormalRuleScopeListResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 列表
     */
    List?: Array<K8sApiAbnormalRuleScopeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyImageAuthorized请求参数结构体
 */
export interface ModifyImageAuthorizedRequest {
    /**
     * 本地镜像是否全部授权的标识，优先权高于根据本地镜像ids授权。等于true时需UpdatedLocalImageCnt大于0。
     */
    AllLocalImages: boolean;
    /**
     * 仓库镜像是否全部授权的标识，优先权高于根据镜像ids授权。等于true时需UpdatedRegistryImageCnt大于0。
     */
    AllRegistryImages: boolean;
    /**
     * 指定操作授权的本地镜像数量，判断优先权最高，实际多出的镜像随机忽略，实际不足的部分也忽略。
     */
    UpdatedLocalImageCnt: number;
    /**
     * 指定操作授权的仓库镜像数量，判断优先权最高，实际多出的镜像随机忽略，实际不足的部分也忽略；
     */
    UpdatedRegistryImageCnt: number;
    /**
     * 根据满足条件的本地镜像授权,本地镜像来源；ASSETIMAGE:本地镜像列表；IMAGEALL:同步本地镜像；AllLocalImages为false且LocalImageIds为空和UpdatedLocalImageCnt大于0时，需要
     */
    ImageSourceType: string;
    /**
     * 根据满足条件的本地镜像授权，AllLocalImages为false且LocalImageIds为空和UpdatedLocalImageCnt大于0时，需要。
     */
    LocalImageFilter?: Array<AssetFilters>;
    /**
     * 根据满足条件的仓库镜像授权，AllRegistryImages为false且RegistryImageIds为空和UpdatedRegistryImageCnt大于0时，需要。
     */
    RegistryImageFilter?: Array<AssetFilters>;
    /**
     * 根据满足条件的镜像授权,同时排除的本地镜像。
     */
    ExcludeLocalImageIds?: Array<string>;
    /**
     * 根据满足条件的镜像授权,同时排除的仓库镜像。
     */
    ExcludeRegistryImageIds?: Array<string>;
    /**
     * 根据本地镜像ids授权，优先权高于根据满足条件的镜像授权。AllLocalImages为false且LocalImageFilter为空和UpdatedLocalImageCnt大于0时，需要。
     */
    LocalImageIds?: Array<string>;
    /**
     * 根据仓库镜像Ids授权，优先权高于根据满足条件的镜像授。AllRegistryImages为false且RegistryImageFilter为空和UpdatedRegistryImageCnt大于0时，需要。
     */
    RegistryImageIds?: Array<string>;
    /**
     * 是否仅最新的镜像；RegistryImageFilter不为空且UpdatedRegistryImageCnt大于0时仓库镜像需要。
     */
    OnlyShowLatest?: boolean;
}
/**
 * DescribeAssetImageScanTask请求参数结构体
 */
export declare type DescribeAssetImageScanTaskRequest = null;
/**
 * DescribeSecLogDeliveryClsSetting请求参数结构体
 */
export declare type DescribeSecLogDeliveryClsSettingRequest = null;
/**
 * UpdateNetworkFirewallPolicyDetail返回参数结构体
 */
export interface UpdateNetworkFirewallPolicyDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecLogKafkaUIN返回参数结构体
 */
export interface ModifySecLogKafkaUINResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallPodLabelsList请求参数结构体
 */
export interface DescribeNetworkFirewallPodLabelsListRequest {
    /**
     * 集群id
     */
    ClusterId: string;
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
 * CreateVirusScanTask返回参数结构体
 */
export interface CreateVirusScanTaskResponse {
    /**
     * 任务id
     */
    TaskID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallAuditRecord请求参数结构体
 */
export interface DescribeNetworkFirewallAuditRecordRequest {
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 每次查询的最大记录数量
     */
    Limit?: number;
    /**
     * Name - Action
  Name 可取值：publish，unpublish，confirm，add，update，delete
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
    List?: Array<ProcessInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    EventSet?: Array<RunTimeTendencyInfo>;
    /**
     * 事件类型：
  ET_ESCAPE : 容器逃逸
  ET_REVERSE_SHELL: 反弹shell
  ET_RISK_SYSCALL:高危系统调用
  ET_ABNORMAL_PROCESS: 异常进程
  ET_ACCESS_CONTROL 文件篡改
  ET_VIRUS 木马事件
  ET_MALICIOUS_CONNECTION 恶意外连事件
     */
    EventType?: string;
}
/**
 * 容器逃逸事件列表
 */
export interface EscapeEventInfo {
    /**
     * 事件类型
     ESCAPE_CGROUPS：利用cgroup机制逃逸
     ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸
     ESCAPE_DOCKER_API：访问Docker API接口逃逸
     ESCAPE_VUL_OCCURRED：逃逸漏洞利用
     MOUNT_SENSITIVE_PTAH：敏感路径挂载
     PRIVILEGE_CONTAINER_START：特权容器
     PRIVILEGE：程序提权逃逸
     */
    EventType?: string;
    /**
     * 容器名
     */
    ContainerName?: string;
    /**
     * 镜像名
     */
    ImageName?: string;
    /**
     * 状态，EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
     */
    Status?: string;
    /**
     * 事件记录的唯一id
     */
    EventId?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * pod(实例)的名字
     */
    PodName?: string;
    /**
     * 生成时间
     */
    FoundTime?: string;
    /**
     * 事件名字，
  宿主机文件访问逃逸、
  Syscall逃逸、
  MountNamespace逃逸、
  程序提权逃逸、
  特权容器启动逃逸、
  敏感路径挂载
     */
    EventName?: string;
    /**
     * 镜像id，用于跳转
     */
    ImageId?: string;
    /**
     * 容器id，用于跳转
     */
    ContainerId?: string;
    /**
     * 事件解决方案
     */
    Solution?: string;
    /**
     * 事件描述
     */
    Description?: string;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 节点IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeIP?: string;
    /**
     * 主机IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostID?: string;
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
    ContainerNetStatus?: string;
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
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus?: string;
    /**
     * 节点所属集群ID
     */
    ClusterID?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 节点公网ip
     */
    PublicIP?: string;
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * 节点内网ip
     */
    HostIP?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
}
/**
 * ModifyVirusScanTimeoutSetting返回参数结构体
 */
export interface ModifyVirusScanTimeoutSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAssetImageVirusExportJob请求参数结构体
 */
export interface CreateAssetImageVirusExportJobRequest {
    /**
     * 导出字段
     */
    ExportField: Array<string>;
    /**
     * 镜像id
     */
    ImageID: string;
    /**
     * 需要返回的数量，默认为10，最大值为10000
     */
    Filters?: Array<AssetFilters>;
    /**
     * 偏移量，默认为0。
     */
    Limit?: number;
    /**
     * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
     */
    Offset?: number;
    /**
     * 排序字段
     */
    By?: string;
    /**
     * 升序降序,asc desc
     */
    Order?: string;
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
    Id?: Array<number | bigint>;
    /**
     * 过滤条件
     */
    Filters?: Array<AssetFilters>;
    /**
     * 不需要扫描的镜像列表, 与Filters配合使用
     */
    ExcludeImageList?: Array<number | bigint>;
    /**
     * 是否仅扫描各repository最新版的镜像, 与Filters配合使用
     */
    OnlyScanLatest?: boolean;
}
/**
 * DescribeAssetClusterList请求参数结构体
 */
export interface DescribeAssetClusterListRequest {
    /**
     * 过滤条件。
  <li>ClusterID - string  - 是否必填: 否 -集群ID</li>
  <li>ClusterName - string  - 是否必填: 否 -集群名称</li>
  <li>Status - string  - 是否必填: 否 -集群状态</li>
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
     * 排序字段。
     */
    By?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 受漏洞影响的容器信息
 */
export interface VulAffectedContainerInfo {
    /**
     * 内网IP
     */
    HostIP?: string;
    /**
     * 容器ID
     */
    ContainerID?: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * Pod名称
     */
    PodName?: string;
    /**
     * PodIP值
     */
    PodIP?: string;
    /**
     * 主机名称
     */
    HostName?: string;
    /**
     * 主机ID
     */
    HostID?: string;
    /**
     * 外网IP
     */
    PublicIP?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 节点类型[NORMAL:普通节点|SUPER:超级节点]
     */
    NodeType?: string;
    /**
     * 超级节点唯一ID
     */
    NodeUniqueID?: string;
    /**
     * 超级节点ID
     */
    NodeID?: string;
    /**
     * 超级节点名称
     */
    NodeName?: string;
    /**
     * 容器状态 "RUNNING":运行,"PAUSED":暂停,"STOPPED":停止,"CREATED":已经创建,"DESTROYED":已销毁,"RESTARTING":重启中,"REMOVING":迁移中,"DEAD":DEAD,"UNKNOWN":未知
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerStatus?: string;
}
/**
 * DescribeLogStorageStatistic返回参数结构体
 */
export interface DescribeLogStorageStatisticResponse {
    /**
     * 总容量（单位：B）
     */
    TotalSize: number;
    /**
     * 已使用容量（单位：B）
     */
    UsedSize: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSearchTemplate返回参数结构体
 */
export interface CreateSearchTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    HostID?: string;
    /**
     * 主机ip
     */
    HostIP?: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * 运行状态
     */
    Status?: string;
    /**
     * 运行账户
     */
    RunAs?: string;
    /**
     * 命令行
     */
    Cmd?: string;
    /**
     * CPU使用率 * 1000
     */
    CPUUsage?: number;
    /**
     * 内存使用 KB
     */
    RamUsage?: number;
    /**
     * 镜像名
     */
    ImageName?: string;
    /**
     * 镜像ID
     */
    ImageID?: string;
    /**
     * 归属POD
     */
    POD?: string;
    /**
     * k8s 主节点
     */
    K8sMaster?: string;
    /**
     * 容器内进程数
     */
    ProcessCnt?: number;
    /**
     * 容器内端口数
     */
    PortCnt?: number;
    /**
     * 组件数
     */
    ComponentCnt?: number;
    /**
     * app数
     */
    AppCnt?: number;
    /**
     * websvc数
     */
    WebServiceCnt?: number;
    /**
     * 挂载
     */
    Mounts?: Array<ContainerMount>;
    /**
     * 容器网络信息
     */
    Network?: ContainerNetwork;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 镜像创建时间
     */
    ImageCreateTime?: string;
    /**
     * 镜像大小
     */
    ImageSize?: number;
    /**
     * 主机状态 offline,online,pause
     */
    HostStatus?: string;
    /**
     * 网络状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    NetStatus?: string;
    /**
     * 网络子状态
     */
    NetSubStatus?: string;
    /**
     * 隔离来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateSource?: string;
    /**
     * 隔离时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateTime?: string;
    /**
     * 节点ID
     */
    NodeID?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * 节点子网ID
     */
    NodeSubNetID?: string;
    /**
     * 节点子网名称
     */
    NodeSubNetName?: string;
    /**
     * 节点子网网段
     */
    NodeSubNetCIDR?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * pod状态
     */
    PodStatus?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 节点类型:NORMAL: 普通节点(默认值) SUPER: 超级节点
     */
    NodeType?: string;
    /**
     * 超级节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 外网ip
     */
    PublicIP?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulDefenceSetting返回参数结构体
 */
export interface DescribeVulDefenceSettingResponse {
    /**
     * 是否开启:0: 关闭 1:开启
     */
    IsEnabled?: number;
    /**
     * 漏洞防御主机范围: 0:自选主机节点，1:全部
     */
    Scope?: number;
    /**
     * 漏洞防御主机数量
     */
    HostCount?: number;
    /**
     * 开启漏洞防御异常主机数量
     */
    ExceptionHostCount?: number;
    /**
     * 自选漏洞防御主机
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostIDs?: Array<string>;
    /**
     * 开通容器安全的主机总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostTotalCount?: number;
    /**
     * 支持防御的漏洞数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SupportDefenseVulCount?: number;
    /**
     * 普通节点个数
     */
    HostNodeCount?: number;
    /**
     * 超级节点范围
     */
    SuperScope?: number;
    /**
     * 超级节点个数
     */
    SuperNodeCount?: number;
    /**
     * 超级节点Id列表
     */
    SuperNodeIds?: Array<string>;
    /**
     * 开通容器安全的超级结点总数
     */
    NodeTotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkFirewallPolicyYamlDetail返回参数结构体
 */
export interface DescribeNetworkFirewallPolicyYamlDetailResponse {
    /**
     * 集群Id
     */
    ClusterId?: string;
    /**
     * 策略名
     */
    PolicyName?: string;
    /**
     * base64编码的yaml字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Yaml?: string;
    /**
     * 策略描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 策略创建时间
     */
    PolicyCreateTime?: string;
    /**
     * 策略源类型，分为System和Manual，分别代表手动和系统添加
     */
    PolicySourceType?: string;
    /**
     * 网络策略对应的网络插件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetworkPolicyPlugin?: string;
    /**
     * 网络策略状态
     */
    PublishStatus?: string;
    /**
     * 网络发布结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublishResult?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageComponentList请求参数结构体
 */
export interface DescribeImageComponentListRequest {
    /**
     * 镜像ID
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
  <li>ComponentName- String - 是否必填：否 - 镜像组件名称</li><li>ComponentVersion- String - 是否必填：否 - 镜像组件版本</li><li>ComponentType- String - 是否必填：否 - 镜像组件类型</li><li>VulLevel- String - 是否必填：否 - 漏洞威胁等级</li><li>HasVul- String - 是否必填：否 -是否有漏洞；true：是，false，否；不传或ALL ：全部</li>
     */
    Filters?: Array<AssetFilters>;
    /**
     * 排序字段
     */
    By?: string;
    /**
     * 排序方式desc ，asc
     */
    Order?: string;
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
 * DescribeNetworkFirewallPolicyList返回参数结构体
 */
export interface DescribeNetworkFirewallPolicyListResponse {
    /**
     * 集群总数
     */
    TotalCount?: number;
    /**
     * 集群的详细信息
     */
    NetPolicy?: Array<NetworkPolicyInfoItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAgentInstallCommand请求参数结构体
 */
export interface DescribeAgentInstallCommandRequest {
    /**
     * 是否是腾讯云
     */
    IsCloud: boolean;
    /**
     * 网络类型：basic-基础网络，private-VPC, public-公网，direct-专线
     */
    NetType: string;
    /**
     * 地域标示, NetType=direct时必填
     */
    RegionCode?: string;
    /**
     * VpcId, NetType=direct时必填
     */
    VpcId?: string;
    /**
     * 命令有效期，非腾讯云时必填
     */
    ExpireDate?: string;
    /**
     * 标签ID列表，IsCloud=false时才会生效
     */
    TagIds?: Array<number | bigint>;
    /**
     * 虚拟ip
     */
    Vip?: string;
}
/**
 * ResetSecLogTopicConfig请求参数结构体
 */
export interface ResetSecLogTopicConfigRequest {
    /**
     * 配置类型(ckafka/cls)
     */
    ConfigType: string;
    /**
     * 日志类型
     */
    LogType: string;
}
/**
 * DescribeAssetImageVirusListExport返回参数结构体
 */
export interface DescribeAssetImageVirusListExportResponse {
    /**
     * excel文件下载地址
     */
    DownloadUrl?: string;
    /**
     * 任务ID
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVirusScanSetting请求参数结构体
 */
export declare type DescribeVirusScanSettingRequest = null;
/**
 * DescribeRiskDnsEventDetail请求参数结构体
 */
export interface DescribeRiskDnsEventDetailRequest {
    /**
     * 事件ID
     */
    EventID: number;
}
/**
 * CreateAccessControlsRuleExportJob请求参数结构体
 */
export interface CreateAccessControlsRuleExportJobRequest {
    /**
     * 过滤条件。
  <li>RuleType - string  - 是否必填: 否 -规则类型</li>
  <li>Status - string  - 是否必填: 否 -状态</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 排序方式
     */
    Order?: string;
    /**
     * 排序字段
     */
    By?: Array<string>;
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
}
/**
 * 木马自动隔离样本信息
 */
export interface VirusAutoIsolateSampleInfo {
    /**
     * 文件MD5值
     */
    MD5?: string;
    /**
     * 病毒名
     */
    VirusName?: string;
    /**
     * 最近编辑时间
     */
    ModifyTime?: string;
    /**
     * 自动隔离开关(true:开 false:关)
     */
    AutoIsolateSwitch?: boolean;
}
/**
 * DescribeExportJobDownloadURL请求参数结构体
 */
export interface DescribeExportJobDownloadURLRequest {
    /**
     * 任务ID
     */
    JobID: string;
}
/**
 * DescribeImageAutoAuthorizedRule请求参数结构体
 */
export declare type DescribeImageAutoAuthorizedRuleRequest = null;
/**
 * DescribeVulIgnoreRegistryImageList返回参数结构体
 */
export interface DescribeVulIgnoreRegistryImageListResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 镜像列表
     */
    List?: Array<VulIgnoreRegistryImage>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateAndPublishNetworkFirewallPolicyDetail请求参数结构体
 */
export interface UpdateAndPublishNetworkFirewallPolicyDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略Id
     */
    Id: number;
    /**
     * 入站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    FromPolicyRule: number;
    /**
     * 出站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    ToPolicyRule: number;
    /**
     * pod选择器
     */
    PodSelector: string;
    /**
     * 命名空间
     */
    Namespace?: string;
    /**
     * 策略描述
     */
    Description?: string;
    /**
     * 自定义规则
     */
    CustomPolicy?: Array<NetworkCustomPolicy>;
}
/**
 * DescribeAssetPortList返回参数结构体
 */
export interface DescribeAssetPortListResponse {
    /**
     * 端口列表
     */
    List?: Array<PortInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 新任务ID
     */
    NewTaskID?: string;
}
/**
 * CreateClusterCheckTask返回参数结构体
 */
export interface CreateClusterCheckTaskResponse {
    /**
     * 返回创建的集群检查任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建检查任务的结果，"Succ"为成功，其他的为失败原因
     */
    CreateResult?: string;
    /**
     * 返回创建的集群新任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewTaskID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * cls主题信息
 */
export interface ClsTopicInfo {
    /**
     * 主题ID
     */
    TopicID?: string;
    /**
     * 主题名称
     */
    TopicName?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    CustomerAssetId?: number;
    /**
     * 资产项的名称。
     */
    AssetName?: string;
    /**
     * 资产项的类型
     */
    AssetType?: string;
    /**
     * 检测状态
  
  CHECK_INIT, 待检测
  
  CHECK_RUNNING, 检测中
  
  CHECK_FINISHED, 检测完成
  
  CHECK_FAILED, 检测失败
     */
    CheckStatus?: string;
    /**
     * 节点名称。
     */
    NodeName?: string;
    /**
     * 上次检测的时间，格式为”YYYY-MM-DD HH:m::SS“。
  
  如果没有检测过，此处为”0000-00-00 00:00:00“。
     */
    LastCheckTime?: string;
    /**
     * 检测结果。取值为：
  
  RESULT_FAILED: 未通过
  
  RESULT_PASSED: 通过
     */
    CheckResult?: string;
    /**
     * 主机IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostIP?: string;
    /**
     * 镜像的tag
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageTag?: string;
    /**
     * 检查项验证信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyInfo?: string;
    /**
     * 主机实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 镜像仓库信息
     */
    ImageRegistryInfo?: ImageRegistryInfo;
    /**
     * 集群id
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecLogKafkaUIN请求参数结构体
 */
export interface ModifySecLogKafkaUINRequest {
    /**
     * 目标UIN
     */
    DstUIN?: string;
}
/**
 * ModifyVirusAutoIsolateSetting请求参数结构体
 */
export interface ModifyVirusAutoIsolateSettingRequest {
    /**
     * 自动隔离开关(true:开 false:关)
     */
    AutoIsolateSwitch: boolean;
    /**
     * 是否中断隔离文件关联的进程(true:是 false:否)
     */
    IsKillProgress: boolean;
}
/**
 * DescribeNetworkFirewallClusterList返回参数结构体
 */
export interface DescribeNetworkFirewallClusterListResponse {
    /**
     * 集群总数
     */
    TotalCount?: number;
    /**
     * 集群的详细信息
     */
    ClusterInfoList?: Array<NetworkClusterInfoItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 待处理逃逸事件趋势
 */
export interface EscapeEventTendencyInfo {
    /**
     * 待处理风险容器事件总数
     */
    RiskContainerEventCount?: number;
    /**
     * 待处理程序特权事件总数
     */
    ProcessPrivilegeEventCount?: number;
    /**
     * 待处理容器逃逸事件总数
     */
    ContainerEscapeEventCount?: number;
    /**
     * 日期
     */
    Date?: string;
}
/**
 * DescribeImageRiskTendency返回参数结构体
 */
export interface DescribeImageRiskTendencyResponse {
    /**
     * 本地镜像新增风险趋势信息列表
     */
    ImageRiskTendencySet?: Array<ImageRiskTendencyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 检查项+资产ids 的集合单元
 */
export interface CompliancePolicyAssetSetItem {
    /**
     * 检查项ID
     */
    CustomerPolicyItemId: number;
    /**
     * 需要忽略指定检查项内的资产ID列表，为空表示所有
     */
    CustomerAssetItemIdSet?: Array<number | bigint>;
}
/**
 * 网络集群网络空间标签返回的结构体
 */
export interface NetworkClusterNamespaceLabelInfo {
    /**
     * 网络空间标签
     */
    Labels: string;
    /**
     * 网络空间名字
     */
    Name: string;
}
/**
 * SyncAssetImageRegistryAsset请求参数结构体
 */
export interface SyncAssetImageRegistryAssetRequest {
    /**
     * 是否同步所有镜像仓库
     */
    All?: boolean;
    /**
     * 需要同步的部分镜像仓库
     */
    RegistryIds?: Array<number | bigint>;
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
 * DescribeSearchLogs请求参数结构体
 */
export declare type DescribeSearchLogsRequest = null;
/**
 * DescribeEscapeEventTypeSummary返回参数结构体
 */
export interface DescribeEscapeEventTypeSummaryResponse {
    /**
     * 容器逃逸事件数
     */
    ContainerEscapeEventCount?: number;
    /**
     * 程序提权事件数
     */
    ProcessPrivilegeEventCount?: number;
    /**
     * 风险容器事件数
     */
    RiskContainerEventCount?: number;
    /**
     * 逃逸事件待处理数
     */
    PendingEscapeEventCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 必填参数，镜像唯一ID，可通过DescribeAssetImageRegistryList接口获取
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
    ImageList?: Array<ImageSimpleInfo>;
    /**
     * 镜像数
     */
    ImageCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAbnormalProcessRulesExportJob请求参数结构体
 */
export interface CreateAbnormalProcessRulesExportJobRequest {
    /**
     * 过滤条件。
  <li>RuleType - string  - 是否必填: 否 -规则类型</li>
  <li>Status - string  - 是否必填: 否 -状态</li>
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
 * CreateK8sApiAbnormalEventExportJob返回参数结构体
 */
export interface CreateK8sApiAbnormalEventExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserCluster返回参数结构体
 */
export interface DescribeUserClusterResponse {
    /**
     * 集群总数
     */
    TotalCount?: number;
    /**
     * 集群的详细信息
     */
    ClusterInfoList?: Array<ClusterInfoItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryRegistryList请求参数结构体
 */
export interface DescribeAssetImageRegistryRegistryListRequest {
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
}
/**
 * DescribeVulDefenceHost返回参数结构体
 */
export interface DescribeVulDefenceHostResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 漏洞防御的主机列表
     */
    List?: Array<VulDefenceHost>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImageExportJob请求参数结构体
 */
export interface CreateImageExportJobRequest {
    /**
     * 过滤条件。
  <li>ImageName- String - 是否必填：否 - 镜像名称筛选，</li>
  <li>ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErr</li>
  <li>ImageID- String - 是否必填：否 - 镜像ID筛选，</li>
  <li>SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 需要返回的数量，默认为10，最大值为100
     */
    Limit?: number;
    /**
     * 排序字段
     */
    By?: string;
    /**
     * 排序方式 asc,desc
     */
    Order?: string;
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
}
/**
 * CreateEmergencyVulExportJob请求参数结构体
 */
export interface CreateEmergencyVulExportJobRequest {
    /**
     * 需要返回的数量，默认为50000，最大值为50000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。</li>
  <li>CanBeFixed- string - 是否必填：否 - 是否可修复true,false。</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ContainerID- string -是否必填: 否 - 容器ID</li>
  <li>ContainerName- string -是否必填: 否 - 容器名称</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
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
 * k8s api 异常请求规则列表Item
 */
export interface K8sApiAbnormalRuleListItem {
    /**
     * 规则ID
     */
    RuleID?: string;
    /**
     * 规则名称
     */
    RuleName?: string;
    /**
     * 规则类型
  RT_SYSTEM 系统规则
  RT_USER 用户自定义
     */
    RuleType?: string;
    /**
     * 受影响集群总数
     */
    EffectClusterCount?: number;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 编辑账号
     */
    OprUin?: string;
    /**
     * 状态
     */
    Status?: boolean;
}
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ImageId?: string;
    /**
     * 镜像的名称。
     */
    ImageName?: string;
    /**
     * 镜像的Tag。
     */
    ImageTag?: string;
    /**
     * 镜像所在远程仓库的路径。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Repository?: string;
}
/**
 * DescribeVulScanLocalImageList返回参数结构体
 */
export interface DescribeVulScanLocalImageListResponse {
    /**
     * 镜像总数
     */
    TotalCount?: number;
    /**
     * 镜像列表
     */
    List?: Array<VulScanImageInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    List?: Array<VirusInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeVulSummary返回参数结构体
 */
export interface DescribeVulSummaryResponse {
    /**
     * 漏洞总数量
     */
    VulTotalCount?: number;
    /**
     * 严重及高危漏洞数量
     */
    SeriousVulCount?: number;
    /**
     * 重点关注漏洞数量
     */
    SuggestVulCount?: number;
    /**
     * 有Poc或者Exp的漏洞数量
     */
    PocExpLevelVulCount?: number;
    /**
     * 有远程Exp的漏洞数量
     */
    RemoteExpLevelVulCount?: number;
    /**
     * 受严重或高危漏洞影响的最新版本镜像数
     */
    SeriousVulNewestImageCount?: number;
    /**
     * 系统漏洞重点关注数
     */
    SystemVulnerabilityFocusCount?: number;
    /**
     * web漏洞重点关注数
     */
    WebVulnerabilityFocusCount?: number;
    /**
     * 受影响本地镜像数
     */
    SeriousVulnerabilityLocalImageCount?: number;
    /**
     * 受影响仓库镜像数
     */
    SeriousVulnerabilityRegistryImageCount?: number;
    /**
     * 应急漏洞数量
     */
    EmergencyVulnerabilityCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeEmergencyVulList请求参数结构体
 */
export interface DescribeEmergencyVulListRequest {
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
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。</li>
  <li>CanBeFixed- string - 是否必填：否 - 是否可修复true,false。</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ContainerID- string -是否必填: 否 - 容器ID</li>
  <li>ContainerName- string -是否必填: 否 - 容器名称</li>
  <li>ComponentName- string -是否必填: 否 - 组件名称</li>
  <li>ComponentVersion- string -是否必填: 否 - 组件版本</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
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
 * DeleteReverseShellEvents返回参数结构体
 */
export interface DeleteReverseShellEventsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAbnormalProcessDetail返回参数结构体
 */
export interface DescribeAbnormalProcessDetailResponse {
    /**
     * 事件基本信息
     */
    EventBaseInfo?: RunTimeEventBaseInfo;
    /**
     * 进程信息
     */
    ProcessInfo?: ProcessDetailInfo;
    /**
     * 父进程信息
     */
    ParentProcessInfo?: ProcessDetailBaseInfo;
    /**
     * 事件描述
     */
    EventDetail?: AbnormalProcessEventDescription;
    /**
     * 祖先进程信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessInfo?: ProcessBaseInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageRiskSummary返回参数结构体
 */
export interface DescribeImageRiskSummaryResponse {
    /**
     * 安全漏洞
     */
    VulnerabilityCnt?: Array<RunTimeRiskInfo>;
    /**
     * 木马病毒
     */
    MalwareVirusCnt?: Array<RunTimeRiskInfo>;
    /**
     * 敏感信息
     */
    RiskCnt?: Array<RunTimeRiskInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞防御事件详情
 */
export interface VulDefenceEventDetail {
    /**
     * 漏洞CVEID
     */
    CVEID?: string;
    /**
     * 漏洞名称
     */
    VulName?: string;
    /**
     * 漏洞PocID
     */
    PocID?: string;
    /**
     * 入侵状态
     */
    EventType?: string;
    /**
     * 攻击源IP
     */
    SourceIP?: string;
    /**
     * 攻击源ip地址所在城市
     */
    City?: string;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 容器ID
     */
    ContainerID?: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * 镜像ID
     */
    ImageID?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 处理状态
     */
    Status?: string;
    /**
     * 攻击源端口
     */
    SourcePort?: Array<string>;
    /**
     * 事件ID
     */
    EventID?: number;
    /**
     * 主机名称/超级节点名称
     */
    HostName?: string;
    /**
     * 主机内网IP
     */
    HostIP?: string;
    /**
     * 主机外网IP
     */
    PublicIP?: string;
    /**
     * Pod名称
     */
    PodName?: string;
    /**
     * 危害描述
     */
    Description?: string;
    /**
     * 修复建议
     */
    OfficialSolution?: string;
    /**
     * 攻击包
     */
    NetworkPayload?: string;
    /**
     * 进程PID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PID?: number;
    /**
     * 进程主类名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MainClass?: string;
    /**
     * 堆栈信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StackTrace?: string;
    /**
     * 监听账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServerAccount?: string;
    /**
     * 监听端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServerPort?: string;
    /**
     * 进程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServerExe?: string;
    /**
     * 进程命令行参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServerArg?: string;
    /**
     * 主机QUUID/超级节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QUUID?: string;
    /**
     * 隔离状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerNetStatus?: string;
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
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerStatus?: string;
    /**
     * 接口Url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JNDIUrl?: string;
    /**
     * rasp detail
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RaspDetail?: Array<RaspInfo>;
    /**
     * 超级节点子网名称
     */
    NodeSubNetName?: string;
    /**
     * 超级节点子网网段
     */
    NodeSubNetCIDR?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * 节点类型[NORMAL:普通节点|SUPER:超级节点]
     */
    NodeType?: string;
    /**
     * 超级节点ID
     */
    NodeID?: string;
    /**
     * 超级节点唯一ID
     */
    NodeUniqueID?: string;
    /**
     * 超级节点子网ID
     */
    NodeSubNetID?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * Namespace
     */
    Namespace?: string;
    /**
     * 工作负载
     */
    WorkloadType?: string;
}
/**
 * UpdateNetworkFirewallPolicyYamlDetail请求参数结构体
 */
export interface UpdateNetworkFirewallPolicyYamlDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略id
     */
    Id: number;
    /**
     * base64编码的networkpolicy yaml字符串
     */
    Yaml?: string;
    /**
     * 策略描述
     */
    Description?: string;
}
/**
 * DescribeK8sApiAbnormalRuleInfo请求参数结构体
 */
export interface DescribeK8sApiAbnormalRuleInfoRequest {
    /**
     * 规则ID
     */
    RuleID: string;
}
/**
 * DescribeVulRegistryImageList请求参数结构体
 */
export interface DescribeVulRegistryImageListRequest {
    /**
     * 漏洞ID
     */
    PocID: string;
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
  OnlyAffectedNewestImage bool 是否影响最新镜像
  ImageDigest 镜像Digest，支持模糊查询
  ImageId 镜像ID，支持模糊查询
  Namespace 命名空间，支持模糊查询
  ImageTag 镜像版本，支持模糊查询
  InstanceName 实例名称，支持模糊查询
  ImageName 镜像名，支持模糊查询
  ImageRepoAddress 镜像地址，支持模糊查询
     */
    Filters?: Array<AssetFilters>;
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
 * 运行时安全事件基本信息
 */
export interface RunTimeEventBaseInfo {
    /**
     * 事件唯一ID
     */
    EventId?: string;
    /**
     * 事件发现时间
     */
    FoundTime?: string;
    /**
     * 容器id
     */
    ContainerId?: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * 镜像id
     */
    ImageId?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * 状态， “EVENT_UNDEAL”:事件未处理
      "EVENT_DEALED":事件已经处理
      "EVENT_INGNORE"：事件已经忽略
     */
    Status?: string;
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
    EventName?: string;
    /**
     * 事件类型
     ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
     ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
     ESCAPE_PRIVILEDGE:程序提权逃逸
     ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
     ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
     ESCAPE_SYSCALL:Syscall逃逸
     */
    EventType?: string;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 内网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostIP?: string;
    /**
     * 外网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientIP?: string;
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
    ContainerNetStatus?: string;
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
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 节点ID
     */
    NodeID?: string;
    /**
     * 节点类型:NORMAL:普通节点;SUPER:超级节点
     */
    NodeType?: string;
    /**
     * 节点子网ID
     */
    NodeSubNetID?: string;
    /**
     * 节点子网名称
     */
    NodeSubNetName?: string;
    /**
     * 节点子网网段
     */
    NodeSubNetCIDR?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * podIP
     */
    PodIP?: string;
    /**
     * pod状态
     */
    PodStatus?: string;
    /**
     * 集群id
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * uuid
     */
    HostID?: string;
    /**
     * Namespace
     */
    Namespace?: string;
    /**
     * WorkloadType
     */
    WorkloadType?: string;
}
/**
 * DescribeSystemVulList返回参数结构体
 */
export interface DescribeSystemVulListResponse {
    /**
     * 漏洞总数
     */
    TotalCount?: number;
    /**
     * 漏洞列表
     */
    List?: Array<VulInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞扫描新增和取消忽略漏洞入参
 */
export interface ModifyIgnoreVul {
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 忽略的镜像ID，空表示全部
     */
    ImageIDs?: Array<string>;
    /**
     * 当有镜像时
  镜像类型: LOCAL 本地镜像 REGISTRY 仓库镜像
     */
    ImageType?: string;
}
/**
 * DescribeAssetImageRegistryVirusList返回参数结构体
 */
export interface DescribeAssetImageRegistryVirusListResponse {
    /**
     * 镜像漏洞列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ImageVirus>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    List?: Array<ServiceInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogJoinTypeList请求参数结构体
 */
export declare type DescribeSecLogJoinTypeListRequest = null;
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
 * CreateNetworkFirewallPolicyDiscover请求参数结构体
 */
export interface CreateNetworkFirewallPolicyDiscoverRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
}
/**
 * 运行时安全事件趋势信息
 */
export interface ImageRiskTendencyInfo {
    /**
     * 趋势列表
     */
    ImageRiskSet?: Array<RunTimeTendencyInfo>;
    /**
     * 风险类型：
  IRT_VULNERABILITY : 安全漏洞
  IRT_MALWARE_VIRUS: 木马病毒
  IRT_RISK:敏感信息
     */
    ImageRiskType?: string;
}
/**
 * DescribeVulTopRanking返回参数结构体
 */
export interface DescribeVulTopRankingResponse {
    /**
     * 漏洞Top排名信息列表
     */
    List?: Array<VulTopRankingInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetWebServiceList返回参数结构体
 */
export interface DescribeAssetWebServiceListResponse {
    /**
     * 主机列表
     */
    List?: Array<ServiceInfo>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞详情信息
 */
export interface VulDetailInfo {
    /**
     * CVE编号
     */
    CVEID: string;
    /**
     * 漏洞名称
     */
    Name: string;
    /**
     * 漏洞标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<string>;
    /**
     * 漏洞类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CategoryType: string;
    /**
     * 漏洞威胁等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level: string;
    /**
     * 漏洞披露时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitTime: string;
    /**
     * 漏洞描述
     */
    Description: string;
    /**
     * CVSS V3描述
     */
    CVSSV3Desc: string;
    /**
     * 漏洞修复建议
     */
    OfficialSolution: string;
    /**
     * 缓解措施
     */
    DefenseSolution: string;
    /**
     * 参考链接
     */
    Reference: Array<string>;
    /**
     * CVSS V3分数
     */
    CVSSV3Score: number;
    /**
     * 受漏洞影响的组件列表
     */
    ComponentList: Array<VulAffectedComponentInfo>;
    /**
     * 影响本地镜像数
     */
    LocalImageCount: number;
    /**
     * 影响容器数
     */
    ContainerCount: number;
    /**
     * 影响仓库镜像数
     */
    RegistryImageCount: number;
    /**
     * 漏洞子类型
     */
    Category: string;
    /**
     * 影响最新本地镜像数
     */
    LocalNewestImageCount: number;
    /**
     * 影响最新仓库镜像数
     */
    RegistryNewestImageCount: number;
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 防御状态，NO_DEFENDED:未防御，DEFENDED:已防御
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceStatus: string;
    /**
     * 漏洞防御主机范围: MANUAL:自选主机节点，ALL:全部
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceScope: string;
    /**
     * 漏洞防御主机数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceHostCount: number;
    /**
     * 已防御攻击次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefendedCount: number;
    /**
     * 是否已扫描，NOT_SCAN:未扫描,SCANNED:已扫描
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanStatus: string;
}
/**
 * DescribeVulLevelSummary返回参数结构体
 */
export interface DescribeVulLevelSummaryResponse {
    /**
     * 高危漏洞数
     */
    HighLevelVulCount?: number;
    /**
     * 中危漏洞数
     */
    MediumLevelVulCount?: number;
    /**
     * 低危漏洞数
     */
    LowLevelVulCount?: number;
    /**
     * 严重漏洞数
     */
    CriticalLevelVulCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddNetworkFirewallPolicyDetail请求参数结构体
 */
export interface AddNetworkFirewallPolicyDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略名
     */
    PolicyName: string;
    /**
     * 入站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    FromPolicyRule: number;
    /**
     * 出站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    ToPolicyRule: number;
    /**
     * pod选择器
     */
    PodSelector: string;
    /**
     * 命名空间
     */
    Namespace?: string;
    /**
     * 策略描述
     */
    Description?: string;
    /**
     * 自定义规则
     */
    CustomPolicy?: Array<NetworkCustomPolicy>;
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
     * 过滤条件 <li>Name      string 检测项名字</li> <li>ItemType  string 检测项类型</li> <li>RiskLevel string 威胁等级</li> <li>IsOpen    int    是否开启</li>
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
    CustomerPolicyItemId?: number;
    /**
     * 检测项的原始ID。
     */
    BasePolicyItemId?: number;
    /**
     * 检测项的名称。
     */
    Name?: string;
    /**
     * 检测项所属的类型，枚举字符串。
     */
    Category?: string;
    /**
     * 所属的合规标准
     */
    BenchmarkStandardName?: string;
    /**
     * 威胁等级。RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
     */
    RiskLevel?: string;
    /**
     * 检测项所属的资产类型
     */
    AssetType?: string;
    /**
     * 最近检测的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastCheckTime?: string;
    /**
     * 检测状态
  
  CHECK_INIT, 待检测
  
  CHECK_RUNNING, 检测中
  
  CHECK_FINISHED, 检测完成
  
  CHECK_FAILED, 检测失败
     */
    CheckStatus?: string;
    /**
     * 检测结果。RESULT_PASSED: 通过
  
  RESULT_FAILED: 未通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckResult?: string;
    /**
     * 通过检测的资产的数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PassedAssetCount?: number;
    /**
     * 未通过检测的资产的数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedAssetCount?: number;
    /**
     * 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WhitelistId?: number;
    /**
     * 处理建议。
     */
    FixSuggestion?: string;
    /**
     * 所属的合规标准的ID
     */
    BenchmarkStandardId?: number;
    /**
     * 检测项适用的版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicableVersion?: string;
    /**
     * 检查项描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 检查项审计方法
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuditProcedure?: string;
    /**
     * 是否开启
  <li>0 关闭</li>
  <li>1 开启</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsEnable?: number;
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
 * DescribeVulDefenceEvent返回参数结构体
 */
export interface DescribeVulDefenceEventResponse {
    /**
     * 漏洞防御事件列表
     */
    List?: Array<VulDefenceEvent>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVirusEventTendency返回参数结构体
 */
export interface DescribeVirusEventTendencyResponse {
    /**
     * 趋势列表
     */
    List?: Array<VirusTendencyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddEditImageAutoAuthorizedRule请求参数结构体
 */
export interface AddEditImageAutoAuthorizedRuleRequest {
    /**
     * 授权范围类别，MANUAL:自选主机节点，ALL:全部镜像
     */
    RangeType: string;
    /**
     * 每天最大的镜像授权数限制, 0表示无限制
     */
    MaxDailyCount: number;
    /**
     * 规则是否生效，0:不生效，1:已生效
     */
    IsEnabled: number;
    /**
     * 自选主机id，当授权范围为MANUAL:自选主机时且HostIdFilters为空时，必填
     */
    HostIdSet?: Array<string>;
    /**
     * 规则id，在编辑时，必填
     */
    RuleId?: number;
    /**
     * 根据条件过滤，当授权范围为MANUAL:自选主机时且HostIdSet为空时，必填
     */
    HostIdFilters?: Array<AssetFilters>;
    /**
     * 根据条件过滤而且排除指定主机id
     */
    ExcludeHostIdSet?: Array<string>;
    /**
     * 自动扫描开关
     */
    AutoScanEnabled?: number;
    /**
     * 自动扫描范围
     */
    ScanType?: Array<string>;
}
/**
 * SwitchImageAutoAuthorizedRule请求参数结构体
 */
export interface SwitchImageAutoAuthorizedRuleRequest {
    /**
     * 规则是否生效，0:不生效，1:已生效
     */
    IsEnabled: number;
    /**
     * 规则id
     */
    RuleId: number;
}
/**
 * DescribeVirusSampleDownloadUrl返回参数结构体
 */
export interface DescribeVirusSampleDownloadUrlResponse {
    /**
     * 样本下载地址
     */
    FileUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeValueAddedSrvInfo返回参数结构体
 */
export interface DescribeValueAddedSrvInfoResponse {
    /**
     * 仓库镜像未授权数量
     */
    RegistryImageCnt?: number;
    /**
     * 本地镜像未授权数量
     */
    LocalImageCnt?: number;
    /**
     * 未使用的镜像安全扫描授权数
     */
    UnusedAuthorizedCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 运行时风险信息
 */
export interface RunTimeRiskInfo {
    /**
     * 数量
     */
    Cnt?: number;
    /**
     * 风险等级：
  CRITICAL: 严重
  HIGH: 高
  MEDIUM：中
  LOW: 低
     */
    Level?: string;
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
    /**
     * 扫描路径模式：
  SCAN_PATH_ALL：全部路径
  SCAN_PATH_DEFAULT：默认路径
  SCAN_PATH_USER_DEFINE：用户自定义路径
  
     */
    ScanPathMode?: string;
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
 * DescribeAssetImageScanTask返回参数结构体
 */
export interface DescribeAssetImageScanTaskResponse {
    /**
     * 任务id
     */
    TaskID?: string;
    /**
     * 最近扫描时间
     */
    LastScanTime?: string;
    /**
     * 扫描状态(READY:准备 SCANNING:扫描中 END:完成)
     */
    Status?: string;
    /**
     * 扫描子状态(Success:成功 Timeout:超时 Cancel:取消 Error:错误)
     */
    SubStatus?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeVulTopRanking请求参数结构体
 */
export interface DescribeVulTopRankingRequest {
    /**
     * 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 EMERGENCY:应急漏洞
     */
    CategoryType: string;
}
/**
 * ConfirmNetworkFirewallPolicy请求参数结构体
 */
export interface ConfirmNetworkFirewallPolicyRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略Id数组
     */
    Id: Array<number | bigint>;
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
 * DeleteSearchTemplate返回参数结构体
 */
export interface DeleteSearchTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 超级节点Pod列表Item信息
 */
export interface SuperNodePodListItem {
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * podIP
     */
    PodIP?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 运行状态
     */
    Status?: string;
    /**
     * cpu需求核数
     */
    CpuRequest?: number;
    /**
     * cpu限制核数
     */
    CpuLimit?: number;
    /**
     * 内存需求大小
     */
    MemRequest?: number;
    /**
     * 内存限制大小
     */
    MemLimit?: number;
    /**
     * 命名空间
     */
    Namespace?: string;
    /**
     * 工作负载名称
     */
    DeploymentName?: string;
    /**
     * 工作负载id
     */
    DeploymentID?: string;
    /**
     * 启动时间
     */
    StartTime?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 关联容器个数
     */
    RelateContainerCount?: number;
    /**
     * 运行时间
     */
    RunningTime?: string;
    /**
     * PodUid
     */
    PodUid?: string;
    /**
     * 计费核数
     */
    ChargeCoresCnt?: number;
    /**
     * 防护状态
     */
    DefendStatus?: string;
}
/**
 * AddComplianceAssetPolicySetToWhitelist请求参数结构体
 */
export interface AddComplianceAssetPolicySetToWhitelistRequest {
    /**
     * 资产ID+检查项IDs. 列表
     */
    AssetPolicySetList: Array<ComplianceAssetPolicySetItem>;
    /**
     * 扫描资产类型 <li>ASSET_CONTAINER Docker容器</li> <li>ASSET_IMAGE Docker镜像</li> <li>ASSET_HOST Docker主机</li> <li>ASSET_K8S Kubernetes</li> <li>ASSET_CONTAINERD Containerd主机</li> <li>ASSET_CONTAINERD_CONTAINER Containerd容器</li>
     */
    AssetType?: string;
}
/**
 * DescribeVirusAutoIsolateSampleDownloadURL返回参数结构体
 */
export interface DescribeVirusAutoIsolateSampleDownloadURLResponse {
    /**
     * 样本下载链接
     */
    FileUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogVasInfo请求参数结构体
 */
export declare type DescribeSecLogVasInfoRequest = null;
/**
 * DescribeNetworkFirewallPolicyDiscover返回参数结构体
 */
export interface DescribeNetworkFirewallPolicyDiscoverResponse {
    /**
     * 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist
     */
    TaskStatus?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 返回某个资产下的检测项的列表。
     */
    AssetPolicyItemList?: Array<ComplianceAssetPolicyItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 检测平台
  1: 云查杀引擎
  2: tav
  3: binaryAi
  4: 异常行为
  5: 威胁情报
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckPlatform: Array<string>;
}
/**
 * StopVulScanTask返回参数结构体
 */
export interface StopVulScanTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEscapeWhiteList返回参数结构体
 */
export interface ModifyEscapeWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserPodList返回参数结构体
 */
export interface DescribeUserPodListResponse {
    /**
     * Pod列表详细信息
     */
    PodList?: Array<ClusterPodInfo>;
    /**
     * Pod列表总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 容器安全镜像列表
 */
export interface ImagesInfo {
    /**
     * 镜像id
     */
    ImageID?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 镜像大小
     */
    Size?: number;
    /**
     * 主机个数
     */
    HostCnt?: number;
    /**
     * 容器个数
     */
    ContainerCnt?: number;
    /**
     * 扫描时间
     */
    ScanTime?: string;
    /**
     * 漏洞个数
     */
    VulCnt?: number;
    /**
     * 病毒个数
     */
    VirusCnt?: number;
    /**
     * 敏感信息个数
     */
    RiskCnt?: number;
    /**
     * 是否信任镜像
     */
    IsTrustImage?: boolean;
    /**
     * 镜像系统
     */
    OsName?: string;
    /**
     * agent镜像扫描错误
     */
    AgentError?: string;
    /**
     * 后端镜像扫描错误
     */
    ScanError?: string;
    /**
     * 扫描状态
     */
    ScanStatus?: string;
    /**
     * 木马扫描错误信息
     */
    ScanVirusError?: string;
    /**
     * 漏洞扫描错误信息
     */
    ScanVulError?: string;
    /**
     * 风险扫描错误信息
     */
    ScanRiskError?: string;
    /**
     * 是否是重点关注镜像，为0不是，非0是
     */
    IsSuggest?: number;
    /**
     * 是否授权，1是0否
     */
    IsAuthorized?: number;
    /**
     * 组件个数
     */
    ComponentCnt?: number;
    /**
     * 严重漏洞数
     */
    CriticalLevelVulCnt?: number;
    /**
     * 高危漏洞数
     */
    HighLevelVulCnt?: number;
    /**
     * 中危漏洞数
     */
    MediumLevelVulCnt?: number;
    /**
     * 低危漏洞数
     */
    LowLevelVulCnt?: number;
    /**
     * 是否最新版本镜像
     */
    IsLatestImage?: boolean;
    /**
     * 是否推荐处置
     */
    RecommendedFix?: boolean;
}
/**
 * ModifyVirusAutoIsolateExampleSwitch请求参数结构体
 */
export interface ModifyVirusAutoIsolateExampleSwitchRequest {
    /**
     * 文件MD5值
     */
    MD5: string;
    /**
     * 开关(开:true 关: false)
     */
    Status: boolean;
}
/**
 * 容器安全镜像病毒信息
 */
export interface ImageVirus {
    /**
     * 路径
     */
    Path?: string;
    /**
     * 风险等级
     */
    RiskLevel?: string;
    /**
     * 分类
     */
    Category?: string;
    /**
     * 病毒名称
     */
    VirusName?: string;
    /**
     * 标签
     */
    Tags?: Array<string>;
    /**
     * 描述
     */
    Desc?: string;
    /**
     * 解决方案
     */
    Solution?: string;
    /**
     * 文件类型
     */
    FileType?: string;
    /**
     * 文件路径
     */
    FileName?: string;
    /**
     * 文件md5
     */
    FileMd5?: string;
    /**
     * 大小
     */
    FileSize?: number;
    /**
     * 首次发现时间
     */
    FirstScanTime?: string;
    /**
     * 最近扫描时间
     */
    LatestScanTime?: string;
}
/**
 * ModifySecLogDeliveryKafkaSetting请求参数结构体
 */
export interface ModifySecLogDeliveryKafkaSettingRequest {
    /**
     * 实例ID
     */
    InstanceID?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 用户名
     */
    User?: string;
    /**
     * 密码
     */
    Password?: string;
    /**
     * 日志类型队列
     */
    LogTypeList?: Array<SecLogDeliveryKafkaSettingInfo>;
    /**
     * 接入类型
     */
    AccessType?: number;
    /**
     * kafka版本号
     */
    KafkaVersion?: string;
    /**
     * 地域ID
     */
    RegionID?: string;
}
/**
 * DescribeReverseShellEventsExport请求参数结构体
 */
export interface DescribeReverseShellEventsExportRequest {
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
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
}
/**
 * ModifyK8sApiAbnormalEventStatus请求参数结构体
 */
export interface ModifyK8sApiAbnormalEventStatusRequest {
    /**
     * 事件ID集合
     */
    EventIDSet: Array<number | bigint>;
    /**
     * 状态
     */
    Status: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * ModifySecLogJoinObjects请求参数结构体
 */
export interface ModifySecLogJoinObjectsRequest {
    /**
     * 日志类型
  bash日志: container_bash
  容器启动: container_launch
  k8sApi: k8s_api
     */
    LogType: string;
    /**
     * 绑定列表
     */
    BindList?: Array<string>;
    /**
     * 待解绑列表，节点范围为全部时，含义为需剔除资产列表
     */
    UnBindList?: Array<string>;
    /**
     * 节点类型:
  NORMAL: 普通节点(默认值)
  SUPER: 超级节点
  
     */
    NodeType?: string;
    /**
     * 日志节点范围类型,0自选 1全部
     */
    RangeType?: number;
    /**
     * 新增资产是否自动加入，节点范围为全部时生效
     */
    AutoJoin?: boolean;
}
/**
 * DescribeK8sApiAbnormalRuleList请求参数结构体
 */
export interface DescribeK8sApiAbnormalRuleListRequest {
    /**
     * 过滤条件。
  <li>RuleType - string  - 是否必填: 否 -规则类型</li>
  <li>Status - string  - 是否必填: 否 -状态</li>
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
     * 排序字段。
  <li>UpdateTime - string  - 是否必填: 否 -最后更新时间</li>
  <li>EffectClusterCount - string  - 是否必填: 否 -影响集群数</li>
     */
    By?: string;
}
/**
 * DescribeAccessControlDetail返回参数结构体
 */
export interface DescribeAccessControlDetailResponse {
    /**
     * 事件基本信息
     */
    EventBaseInfo?: RunTimeEventBaseInfo;
    /**
     * 进程信息
     */
    ProcessInfo?: ProcessDetailInfo;
    /**
     * 被篡改信息
     */
    TamperedFileInfo?: FileAttributeInfo;
    /**
     * 事件描述
     */
    EventDetail?: AccessControlEventDescription;
    /**
     * 父进程信息
     */
    ParentProcessInfo?: ProcessBaseInfo;
    /**
     * 祖先进程信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessInfo?: ProcessBaseInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImageExportJob返回参数结构体
 */
export interface CreateImageExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * excel文件下载地址
     */
    DownloadUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主机所属项目
 */
export interface ProjectInfo {
    /**
     * 项目名称
     */
    ProjectName: string;
    /**
     * 项目ID
     */
    ProjectID: number;
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
    Status?: string;
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Err?: string;
    /**
     * 最后一次同步成功时间
     */
    LatestSyncSuccessTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 返回的命名空间列表信息
 */
export interface NamespaceInfo {
    /**
     * 命名空间名称
     */
    Namespace?: string;
    /**
     * 包含仓库数
     */
    RegistryCnt?: number;
    /**
     * 包含镜像数
     */
    ImageCnt?: number;
    /**
     * 包含风险镜像数
     */
    RiskImageCnt?: number;
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
 * DescribeSecLogDeliveryKafkaSetting返回参数结构体
 */
export interface DescribeSecLogDeliveryKafkaSettingResponse {
    /**
     * 消息队列实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceID?: string;
    /**
     * 消息队列实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 日志类型队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogTypeList?: Array<SecLogDeliveryKafkaSettingInfo>;
    /**
     * 用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    User?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateHostExportJob请求参数结构体
 */
export interface CreateHostExportJobRequest {
    /**
     * 过滤条件。<li>Status-String-是否必填：否-agent状态筛选，"ALL": "全部"(或不传该字段), "UNINSTALL"："未安装", "OFFLINE"："离线", "ONLINE"："防护中"</li><li>HostName-String-是否必填：否-主机名筛选</li><li>Group-String-是否必填：否-主机群组搜索</li><li>HostIP-string-是否必填：否-主机ip搜索</li><li>HostID-string-是否必填：否-主机id搜索</li><li>DockerVersion-string-是否必填：否-docker版本搜索</li><li>MachineType-string-是否必填：否-主机来源MachineType搜索，"ALL": "全部"(或不传该字段), 主机来源：[     "CVM",     "ECM",     "LH",     "BM" ]中的之一为腾讯云服务器；[     "Other" ]之一非腾讯云服务器；</li><li>DockerStatus-string-是否必填：否-docker安装状态，"ALL": "全部"(或不传该字段), "INSTALL": "已安装", "UNINSTALL": "未安装"</li><li>ProjectID-string-是否必填：否-所属项目id搜索</li><li>Tag:(tag: key)-string-是否必填：否-标签键值搜索示例Filters":[{"Name":"tag: tke-kind","Values":["service"]}]</li>
     */
    Filters?: Array<AssetFilters>;
    /**
     * 偏移量，默认为0。
     */
    Limit?: number;
    /**
     * 需要返回的数量，默认为10，最大值为10000
     */
    Offset?: number;
    /**
     * 排序字段
     */
    By?: string;
    /**
     * 升序降序,asc desc
     */
    Order?: string;
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
}
/**
 * AddEditRiskSyscallWhiteList返回参数结构体
 */
export interface AddEditRiskSyscallWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVirusAutoIsolateSampleDownloadURL请求参数结构体
 */
export interface DescribeVirusAutoIsolateSampleDownloadURLRequest {
    /**
     * 样本Md5值
     */
    MD5: string;
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
 * DescribeVulDetail请求参数结构体
 */
export interface DescribeVulDetailRequest {
    /**
     * 漏洞PocID
     */
    PocID: string;
}
/**
 * CreateEscapeWhiteListExportJob请求参数结构体
 */
export interface CreateEscapeWhiteListExportJobRequest {
    /**
     * 过滤条件。
  <li>EventType- String - 是否必填：否 - 加白事件类型，ESCAPE_CGROUPS：利用cgroup机制逃逸，ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸， ESCAPE_DOCKER_API：访问Docker API接口逃逸，ESCAPE_VUL_OCCURRED：逃逸漏洞利用，MOUNT_SENSITIVE_PTAH：敏感路径挂载，PRIVILEGE_CONTAINER_START：特权容器， PRIVILEGE：程序提权逃逸</li>
  <li>ImageName- string - 是否必填：否 - 镜像名称。</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID。</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 需要返回的数量，默认为10000，最大值为10000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：主机数量：HostCount，容器数量：ContainerCount，更新时间：UpdateTime
     */
    By?: string;
}
/**
 * DescribeSecLogJoinObjectList请求参数结构体
 */
export interface DescribeSecLogJoinObjectListRequest {
    /**
     * 日志类型
  bash: "container_bash",
  启动: "container_launch",
  "k8s": "k8s_api"
     */
    LogType: string;
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
  <li>Status- String - 是否必填：否 - 主机状态 </li>
  <li>HostIP- String - 是否必填：否 - 主机内网IP </li>
  <li>PublicIP- String - 是否必填：否 - 主机外网IP </li>
  <li>HostName- String - 是否必填：否 - 主机名称 </li>
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
    ClusterId?: string;
    /**
     * 集群名字
     */
    ClusterName?: string;
    /**
     * 当前集群扫描任务的进度，100表示扫描完成.
     */
    ScanTaskProgress?: number;
    /**
     * 集群版本
     */
    ClusterVersion?: string;
    /**
     * 运行时组件
     */
    ContainerRuntime?: string;
    /**
     * 集群节点数
     */
    ClusterNodeNum?: number;
    /**
     * 集群状态 (Running 运行中 Creating 创建中 Abnormal 异常 )
     */
    ClusterStatus?: string;
    /**
     * 集群运行子状态
     */
    ClusterSubStatus?: string;
    /**
     * 集群类型：为托管集群MANAGED_CLUSTER、独立集群INDEPENDENT_CLUSTER
     */
    ClusterType?: string;
    /**
     * 集群区域
     */
    Region?: string;
    /**
     * 严重风险检查项的数量
     */
    SeriousRiskCount?: number;
    /**
     * 高风险检查项的数量
     */
    HighRiskCount?: number;
    /**
     * 中风险检查项的数量
     */
    MiddleRiskCount?: number;
    /**
     * 提示风险检查项的数量
     */
    HintRiskCount?: number;
    /**
     * 检查任务的状态
     */
    CheckStatus?: string;
    /**
     * 防御容器状态
     */
    DefenderStatus?: string;
    /**
     * 扫描任务创建时间
     */
    TaskCreateTime?: string;
    /**
     * 网络类型.PublicNetwork为公网类型,VPCNetwork为VPC网络
     */
    NetworkType?: string;
    /**
     * API Server地址
     */
    ApiServerAddress?: string;
    /**
     * 节点数
     */
    NodeCount?: number;
    /**
     * 命名空间数
     */
    NamespaceCount?: number;
    /**
     * 工作负载数
     */
    WorkloadCount?: number;
    /**
     * Pod数量
     */
    PodCount?: number;
    /**
     * Service数量
     */
    ServiceCount?: number;
    /**
     * Ingress数量
     */
    IngressCount?: number;
    /**
     * 主节点的ip列表
     */
    MasterIps?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    CustomerPolicyItemId?: number;
    /**
     * 检测项的原始ID
     */
    BasePolicyItemId?: number;
    /**
     * 检测项的名称。
     */
    Name?: string;
    /**
     * 检测项所属的类型的名称
     */
    Category?: string;
    /**
     * 所属的合规标准的ID
     */
    BenchmarkStandardId?: number;
    /**
     * 所属的合规标准的名称
     */
    BenchmarkStandardName?: string;
    /**
     * 威胁等级
     */
    RiskLevel?: string;
    /**
     * 检测状态
  CHECK_INIT, 待检测
  CHECK_RUNNING, 检测中
  CHECK_FINISHED, 检测完成
  CHECK_FAILED, 检测失败
     */
    CheckStatus?: string;
    /**
     * 检测结果
  RESULT_PASSED: 通过
  RESULT_FAILED: 未通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckResult?: string;
    /**
     * 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WhitelistId?: number;
    /**
     * 处理建议。
     */
    FixSuggestion?: string;
    /**
     * 最近检测的时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastCheckTime?: string;
    /**
     * 验证信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyInfo?: string;
}
/**
 * InitializeUserComplianceEnvironment请求参数结构体
 */
export declare type InitializeUserComplianceEnvironmentRequest = null;
/**
 * DescribeSupportDefenceVul返回参数结构体
 */
export interface DescribeSupportDefenceVulResponse {
    /**
     * 支持防御的漏洞列表
     */
    List?: Array<SupportDefenceVul>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
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
 * DescribeVirusManualScanEstimateTimeout请求参数结构体
 */
export interface DescribeVirusManualScanEstimateTimeoutRequest {
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
}
/**
 * CreateVulScanTask返回参数结构体
 */
export interface CreateVulScanTaskResponse {
    /**
     * 本地镜像重新漏洞扫描时的任务ID
     */
    LocalTaskID?: number;
    /**
     * 仓库镜像重新漏洞扫描时的任务ID
     */
    RegistryTaskID?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTcssSummary请求参数结构体
 */
export declare type DescribeTcssSummaryRequest = null;
/**
 * ModifyContainerNetStatus返回参数结构体
 */
export interface ModifyContainerNetStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEscapeEventDetail请求参数结构体
 */
export interface DescribeEscapeEventDetailRequest {
    /**
     * 事件唯一id
     */
    EventId: string;
    /**
     * 事件类型
     */
    EventType?: string;
}
/**
 * DescribeSupportDefenceVul请求参数结构体
 */
export interface DescribeSupportDefenceVulRequest {
    /**
     * 过滤条件。
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
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
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：披露时间：SubmitTime
     */
    By?: string;
}
/**
 * DeleteCompliancePolicyAssetSetFromWhitelist请求参数结构体
 */
export interface DeleteCompliancePolicyAssetSetFromWhitelistRequest {
    /**
     * （检查项ID+资产ID列表）的列表
     */
    PolicyAssetSetList: Array<CompliancePolicyAssetSetItem>;
}
/**
 * DescribeExportJobManageList请求参数结构体
 */
export interface DescribeExportJobManageListRequest {
    /**
     * 过滤条件。
  <li>ExportStatus- string -是否必填: 否 - 导出状态 RUNNING: 导出中 SUCCESS:导出完成 FAILURE:失败
  </li>
  <li>ExportSource- string -是否必填: 否 - 导出来源 LocalImage: 本地镜像 RegistryImage: 仓库镜像
  </li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 需要返回的数量，默认为10，最大值为100
     */
    Limit?: number;
    /**
     * 排序方式
     */
    Order?: string;
    /**
     * 排序字段
  InsertTime: 创建时间
     */
    By?: string;
}
/**
 * DescribeVirusSummary请求参数结构体
 */
export declare type DescribeVirusSummaryRequest = null;
/**
 * DescribeNetworkFirewallPolicyYamlDetail请求参数结构体
 */
export interface DescribeNetworkFirewallPolicyYamlDetailRequest {
    /**
     * 策略Id
     */
    Id: number;
}
/**
 * ModifySecLogJoinState请求参数结构体
 */
export interface ModifySecLogJoinStateRequest {
    /**
     * 日志类型
  bash日志: container_bash
  容器启动: container_launch
  k8sApi: k8s_api
     */
    LogType: string;
    /**
     * 状态(true:开 false:关)
     */
    State: boolean;
}
/**
 * 灰度项目配置
 */
export interface ABTestConfig {
    /**
     * 灰度项目名称
     */
    ProjectName: string;
    /**
     * true：正在灰度，false：不在灰度
     */
    Status: boolean;
}
/**
 * 高危系统调用白名单信息
 */
export interface RiskSyscallWhiteListBaseInfo {
    /**
     * 白名单id
     */
    Id?: string;
    /**
     * 镜像数量
     */
    ImageCount?: number;
    /**
     * 连接进程路径
     */
    ProcessPath?: string;
    /**
     * 系统调用名称列表
     */
    SyscallNames?: Array<string>;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 是否是全局白名单，true全局
     */
    IsGlobal?: boolean;
    /**
     * 镜像id数组
     */
    ImageIds?: Array<string>;
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
 * CreateNetworkFirewallClusterRefresh请求参数结构体
 */
export declare type CreateNetworkFirewallClusterRefreshRequest = null;
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
 * DescribeNetworkFirewallNamespaceList请求参数结构体
 */
export interface DescribeNetworkFirewallNamespaceListRequest {
    /**
     * 集群id
     */
    ClusterId: string;
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
    ClusterRiskItems?: Array<ClusterRiskItem>;
    /**
     * 风险项的总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAsset请求参数结构体
 */
export interface ModifyAssetRequest {
    /**
     * 全部同步，俩参数必选一个 All优先
     */
    All?: boolean;
    /**
     * 要同步的主机列表uuid ，俩参数必选一个 All优先
     */
    Hosts?: Array<string>;
}
/**
 * 地域信息
 */
export interface RegionInfo {
    /**
     * 地域标识
     */
    Region: string;
    /**
     * 地域名称
     */
    RegionName: string;
}
/**
 * DescribeEscapeWhiteList请求参数结构体
 */
export interface DescribeEscapeWhiteListRequest {
    /**
     * 过滤条件。
  <li>EventType- String - 是否必填：否 - 加白事件类型，ESCAPE_CGROUPS：利用cgroup机制逃逸，ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸， ESCAPE_DOCKER_API：访问Docker API接口逃逸，ESCAPE_VUL_OCCURRED：逃逸漏洞利用，MOUNT_SENSITIVE_PTAH：敏感路径挂载，PRIVILEGE_CONTAINER_START：特权容器， PRIVILEGE：程序提权逃逸</li>
  <li>ImageName- string - 是否必填：否 - 镜像名称。</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID。</li>
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
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：主机数量：HostCount，容器数量：ContainerCount，更新时间：UpdateTime
     */
    By?: string;
}
/**
 * DescribeNetworkFirewallPolicyList请求参数结构体
 */
export interface DescribeNetworkFirewallPolicyListRequest {
    /**
     * 集群id
     */
    ClusterId: string;
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
 * ConfirmNetworkFirewallPolicy返回参数结构体
 */
export interface ConfirmNetworkFirewallPolicyResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建确认任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNetworkFirewallPublish返回参数结构体
 */
export interface CreateNetworkFirewallPublishResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 漏洞防御插件 rasp信息
 */
export interface RaspInfo {
    /**
     * rasp名称
     */
    Name: string;
    /**
     * rasp  描述
     */
    Value: string;
}
/**
 * DescribeNetworkFirewallClusterList请求参数结构体
 */
export interface DescribeNetworkFirewallClusterListRequest {
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
 * DescribeVulRegistryImageList返回参数结构体
 */
export interface DescribeVulRegistryImageListResponse {
    /**
     * 镜像总数
     */
    TotalCount?: number;
    /**
     * 仓库镜像列表
     */
    List?: Array<VulAffectedRegistryImageInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateVulDefenceEventExportJob返回参数结构体
 */
export interface CreateVulDefenceEventExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自动授权镜像规则授权范围主机列表
 */
export interface AutoAuthorizedRuleHostInfo {
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
     * 镜像个数
     */
    ImageCnt: number;
    /**
     * 容器个数
     */
    ContainerCnt: number;
    /**
     * 外网ip
     */
    PublicIp: string;
    /**
     * 主机实例ID
     */
    InstanceID: string;
    /**
     * 主机来源：["CVM", "ECM", "LH", "BM"]  中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；
     */
    MachineType: string;
    /**
     * docker 版本
     */
    DockerVersion: string;
    /**
     * agent运行状态
     */
    Status: string;
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
    IdList?: Array<number | bigint>;
}
/**
 * DescribeImageAutoAuthorizedTaskList请求参数结构体
 */
export interface DescribeImageAutoAuthorizedTaskListRequest {
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 过滤字段
  Status授权结果，全部授权成功：ALLSUCCSESS，部分授权失败：PARTIALFAIL,全部授权失败：ALLFAIL
  Type授权方式，AUTO:自动授权，MANUAL:手动授权
  Source 镜像来源，LOCAL:本地镜像，REGISTRY:仓库镜像
     */
    Filters?: Array<AssetFilters>;
    /**
     * 需要返回的数量，默认为10，最大值为100
     */
    Limit?: number;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
}
/**
 * DescribeVirusSampleDownloadUrl请求参数结构体
 */
export interface DescribeVirusSampleDownloadUrlRequest {
    /**
     * 木马id
     */
    ID: string;
}
/**
 * AddAndPublishNetworkFirewallPolicyYamlDetail返回参数结构体
 */
export interface AddAndPublishNetworkFirewallPolicyYamlDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 风险容器信息
 */
export interface EventEscapeImageInfo {
    /**
     * 镜像id，用于跳转
     */
    ImageId?: string;
    /**
     * 唯一值
     */
    UniqueKey?: string;
    /**
     * 事件类型
     ESCAPE_CGROUPS：利用cgroup机制逃逸
     ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸
     ESCAPE_DOCKER_API：访问Docker API接口逃逸
     ESCAPE_VUL_OCCURRED：逃逸漏洞利用
     MOUNT_SENSITIVE_PTAH：敏感路径挂载
     PRIVILEGE_CONTAINER_START：特权容器
     PRIVILEGE：程序提权逃逸
     */
    EventType?: string;
    /**
     * 原始事件类型
     */
    OriginEventType?: string;
    /**
     * 镜像名
     */
    ImageName?: string;
    /**
     * 容器数量
     */
    ContainerCount?: number;
    /**
     * 生成时间
     */
    FoundTime?: string;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 事件数量
     */
    EventCount?: number;
    /**
     * 状态，EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
     */
    Status?: string;
    /**
     * 风险描述
     */
    Description?: string;
    /**
     * 解决方案
     */
    Solution?: string;
}
/**
 * DescribeRiskDnsEventDetail返回参数结构体
 */
export interface DescribeRiskDnsEventDetailResponse {
    /**
     * 事件ID
     */
    EventID?: number;
    /**
     * 事件类型，恶意域名请求：DOMAIN，恶意IP请求：IP
     */
    EventType?: string;
    /**
     * 恶意请求次数
     */
    EventCount?: number;
    /**
     * 首次发现时间
     */
    FoundTime?: string;
    /**
     * 最近生成时间
     */
    LatestFoundTime?: string;
    /**
     * 容器ID
     */
    ContainerID?: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * 隔离状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    ContainerNetStatus?: string;
    /**
     * 容器状态
  正在运行: RUNNING
  暂停: PAUSED
  停止: STOPPED
  已经创建: CREATED
  已经销毁: DESTROYED
  正在重启中: RESTARTING
  迁移中: REMOVING
     */
    ContainerStatus?: string;
    /**
     * 容器子状态
  "AGENT_OFFLINE"       //Agent离线
  "NODE_DESTROYED"      //节点已销毁
  "CONTAINER_EXITED"    //容器已退出
  "CONTAINER_DESTROYED" //容器已销毁
  "SHARED_HOST"         // 容器与主机共享网络
  "RESOURCE_LIMIT"      //隔离操作资源超限
  "UNKNOW"              // 原因未知
     */
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 镜像ID
     */
    ImageID?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 主机名称
     */
    HostName?: string;
    /**
     * 内网IP
     */
    HostIP?: string;
    /**
     * 外网IP
     */
    PublicIP?: string;
    /**
     * 节点名称
     */
    PodName?: string;
    /**
     * 事件描述
     */
    Description?: string;
    /**
     * 解决方案
     */
    Solution?: string;
    /**
     * 参考链接
     */
    Reference?: Array<string>;
    /**
     * 恶意域名或IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Address?: string;
    /**
     * 恶意IP所属城市
  注意：此字段可能返回 null，表示取不到有效值。
     */
    City?: string;
    /**
     * 命中规则类型
  SYSTEM：系统规则
   USER：用户自定义
     */
    MatchRuleType?: string;
    /**
     * 标签特征
     */
    FeatureLabel?: string;
    /**
     * 进程权限
     */
    ProcessAuthority?: string;
    /**
     * 进程md5
     */
    ProcessMd5?: string;
    /**
     * 进程启动用户
     */
    ProcessStartUser?: string;
    /**
     * 进程用户组
     */
    ProcessUserGroup?: string;
    /**
     * 进程路径
     */
    ProcessPath?: string;
    /**
     * 进程树
     */
    ProcessTree?: string;
    /**
     * 进程命令行参数
     */
    ProcessParam?: string;
    /**
     * 父进程启动用户
     */
    ParentProcessStartUser?: string;
    /**
     * 父进程用户组
     */
    ParentProcessUserGroup?: string;
    /**
     * 父进程路径
     */
    ParentProcessPath?: string;
    /**
     * 父进程命令行参数
     */
    ParentProcessParam?: string;
    /**
     * 祖先进程启动用户
     */
    AncestorProcessStartUser?: string;
    /**
     * 祖先进程用户组
     */
    AncestorProcessUserGroup?: string;
    /**
     * 祖先进程路径
     */
    AncestorProcessPath?: string;
    /**
     * 祖先进程命令行参数
     */
    AncestorProcessParam?: string;
    /**
     * 主机ID
     */
    HostID?: string;
    /**
     * 事件状态
  EVENT_UNDEAL： 待处理
  EVENT_DEALED：已处理
  EVENT_IGNORE： 已忽略
  EVENT_ADD_WHITE：已加白
     */
    EventStatus?: string;
    /**
     * 操作时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperationTime?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 节点类型
     */
    NodeType?: string;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * 节点子网ID
     */
    NodeSubNetID?: string;
    /**
     * 节点子网名称
     */
    NodeSubNetName?: string;
    /**
     * 节点子网网段
     */
    NodeSubNetCIDR?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * podip
     */
    PodIP?: string;
    /**
     * pod状态
     */
    PodStatus?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 节点ID名称
     */
    NodeID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * Namespace
     */
    Namespace?: string;
    /**
     * 工作负载类型
     */
    WorkloadType?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddAndPublishNetworkFirewallPolicyDetail请求参数结构体
 */
export interface AddAndPublishNetworkFirewallPolicyDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略名
     */
    PolicyName: string;
    /**
     * 入站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    FromPolicyRule: number;
    /**
     * 出站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    ToPolicyRule: number;
    /**
     * pod选择器
     */
    PodSelector: string;
    /**
     * 命名空间
     */
    Namespace?: string;
    /**
     * 策略描述
     */
    Description?: string;
    /**
     * 自定义规则
     */
    CustomPolicy?: Array<NetworkCustomPolicy>;
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
     * 过滤参数,
  Status：状态(EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略)
  EventType: 事件类型(MOUNT_SENSITIVE_PTAH:敏感路径挂载 PRIVILEGE_CONTAINER_START:特权容器 PRIVILEGE:提权事件
      ESCAPE_VUL_OCCURRED:逃逸漏洞利用 ESCAPE_DOCKER_API:访问Docker API接口逃逸 ESCAPE_TAMPER_SENSITIVE_FILE:篡改敏感文件逃逸 ESCAPE_CGROUPS:利用cgroup机制逃逸)
  ContainerNetStatus: 容器隔离状态 (NORMAL:正常 ISOLATED:已隔离 ISOLATE_FAILED:隔离失败 ISOLATE_FAILED:解除隔离失败 RESTORING:解除隔离中 ISOLATING:隔离中)
  ContainerStatus: 容器状态(CREATED:已创建 RUNNING:正常运行 PAUSED:暂停运行 STOPPED:停止运行 RESTARTING:重启中 REMOVING:迁移中 DEAD:DEAD UNKNOWN：未知 DESTROYED:已销毁)
  ForeignUniqueKey:镜像ID及事件类型唯一值
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
 * UpdateAndPublishNetworkFirewallPolicyYamlDetail返回参数结构体
 */
export interface UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeExportJobManageList返回参数结构体
 */
export interface DescribeExportJobManageListResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 任务列表
     */
    List?: Array<ExportJobInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRiskSyscallEventsExport返回参数结构体
 */
export interface DescribeRiskSyscallEventsExportResponse {
    /**
     * Excel下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadUrl?: string;
    /**
     * 任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnfinishRefreshTask请求参数结构体
 */
export declare type DescribeUnfinishRefreshTaskRequest = null;
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
 * DescribeImageRegistryNamespaceList请求参数结构体
 */
export interface DescribeImageRegistryNamespaceListRequest {
    /**
     * 本次查询的起始偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 本次查询的数据量，默认为10，最大值为100。
     */
    Limit?: number;
    /**
     * 查询的过滤条件。Name字段可取值"Namespace"。
     */
    Filters?: Array<AssetFilters>;
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
    Id?: Array<number | bigint>;
    /**
     * 获取进度的任务ID
     */
    TaskID?: number;
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
 * DescribeVulScanAuthorizedImageSummary请求参数结构体
 */
export declare type DescribeVulScanAuthorizedImageSummaryRequest = null;
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
 * ckafkal路由详情
 */
export interface CkafkaRouteInfo {
    /**
     * 路由ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RouteID?: number;
    /**
     * 域名名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 域名端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomainPort?: number;
    /**
     * 虚拟ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip?: string;
    /**
     * 虚拟ip类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VipType?: number;
    /**
     * 接入类型
  // 0：PLAINTEXT (明文方式，没有带用户信息老版本及社区版本都支持)
      // 1：SASL_PLAINTEXT（明文方式，不过在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
      // 2：SSL（SSL加密通信，没有带用户信息，老版本及社区版本都支持）
      // 3：SASL_SSL（SSL加密通信，在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessType?: number;
}
/**
 * 组件信息
 */
export interface ComponentsInfo {
    /**
     * 组件名称
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    Component?: string;
    /**
     * 组件版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version: string;
    /**
     * 可修复版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FixedVersion?: string;
    /**
     * 路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 组件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
}
/**
 * DescribeImageAutoAuthorizedLogList返回参数结构体
 */
export interface DescribeImageAutoAuthorizedLogListResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 自动授权结果镜像列表
     */
    List?: Array<AutoAuthorizedImageInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserPodList请求参数结构体
 */
export interface DescribeUserPodListRequest {
    /**
     * 集群Id,不填表示获取用户所有pod
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
     * Name 可取值：ClusterId集群id,Namespace命名空间等
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
    /**
     * Service名称
     */
    ServiceName?: string;
    /**
     * 命名空间
     */
    Namespace?: string;
}
/**
 * DeleteComplianceAssetPolicySetFromWhitelist请求参数结构体
 */
export interface DeleteComplianceAssetPolicySetFromWhitelistRequest {
    /**
     * 资产ID
     */
    AssetItemId: number;
    /**
     * 需要忽略指定资产内的检查项ID列表
     */
    CustomerPolicyItemIdSet?: Array<number | bigint>;
    /**
     * 扫描资产类型 <li>ASSET_CONTAINER Docker容器</li> <li>ASSET_IMAGE Docker镜像</li> <li>ASSET_HOST Docker主机</li> <li>ASSET_K8S Kubernetes</li> <li>ASSET_CONTAINERD Containerd主机</li> <li>ASSET_CONTAINERD_CONTAINER Containerd容器</li>
     */
    AssetType?: string;
}
/**
 * DeleteRiskSyscallWhiteLists返回参数结构体
 */
export interface DeleteRiskSyscallWhiteListsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Enable?: boolean;
    /**
     * 扫描时刻(完整时间;后端按0时区解析时分秒)
     */
    ScanTime?: string;
    /**
     * 扫描间隔
     */
    ScanPeriod?: number;
    /**
     * 扫描木马
     */
    ScanVirus?: boolean;
    /**
     * 扫描敏感信息
     */
    ScanRisk?: boolean;
    /**
     * 扫描漏洞
     */
    ScanVul?: boolean;
    /**
     * 扫描全部镜像
     * @deprecated
     */
    All?: boolean;
    /**
     * 自定义扫描镜像
     */
    Images?: Array<string>;
    /**
     * 镜像是否存在运行中的容器
     */
    ContainerRunning?: boolean;
    /**
     * 扫描范围 0 全部授权镜像，1自选镜像，2 推荐扫描
     */
    ScanScope?: number;
    /**
     * 扫描结束时间 02:00 时分
     */
    ScanEndTime?: string;
    /**
     * 排除的扫描镜像
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExcludeImages?: Array<string>;
    /**
     * 最后一次扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastScanTime?: string;
    /**
     * 扫描结果(Success|InsufficientLicense|ImageNeedIsEmpty|InternalError)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanResult?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    EventBaseInfo?: RunTimeEventBaseInfo;
    /**
     * 进程信息
     */
    ProcessInfo?: ProcessDetailInfo;
    /**
     * 父进程信息
     */
    ParentProcessInfo?: ProcessDetailBaseInfo;
    /**
     * 事件描述
     */
    EventDetail?: ReverseShellEventDescription;
    /**
     * 祖先进程信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessInfo?: ProcessBaseInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterSummary请求参数结构体
 */
export declare type DescribeClusterSummaryRequest = null;
/**
 * AddIgnoreVul请求参数结构体
 */
export interface AddIgnoreVulRequest {
    /**
     * 漏洞PocID信息列表
     */
    List: Array<ModifyIgnoreVul>;
}
/**
 * CreateEscapeWhiteListExportJob返回参数结构体
 */
export interface CreateEscapeWhiteListExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAbnormalProcessStatus返回参数结构体
 */
export interface ModifyAbnormalProcessStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 导出任务详情
 */
export interface ExportJobInfo {
    /**
     * 任务ID
     */
    JobID?: string;
    /**
     * 任务名称
     */
    JobName?: string;
    /**
     * 来源
     */
    Source?: string;
    /**
     * 导出状态
     */
    ExportStatus?: string;
    /**
     * 导出进度
     */
    ExportProgress?: number;
    /**
     * 失败原因
     */
    FailureMsg?: string;
    /**
     * 超时时间
     */
    Timeout?: string;
    /**
     * 插入时间
     */
    InsertTime?: string;
}
/**
 * DescribeContainerAssetSummary返回参数结构体
 */
export interface DescribeContainerAssetSummaryResponse {
    /**
     * 容器总数
     */
    ContainerTotalCnt?: number;
    /**
     * 正在运行容器数量
     */
    ContainerRunningCnt?: number;
    /**
     * 暂停运行容器数量
     */
    ContainerPauseCnt?: number;
    /**
     * 停止运行容器数量
     */
    ContainerStopped?: number;
    /**
     * 本地镜像数量
     */
    ImageCnt?: number;
    /**
     * 主机节点数量
     */
    HostCnt?: number;
    /**
     * 主机正在运行节点数量
     */
    HostRunningCnt?: number;
    /**
     * 主机离线节点数量
     */
    HostOfflineCnt?: number;
    /**
     * 镜像仓库数量
     */
    ImageRegistryCnt?: number;
    /**
     * 镜像总数
     */
    ImageTotalCnt?: number;
    /**
     * 主机未安装agent数量
     */
    HostUnInstallCnt?: number;
    /**
     * 超级节点个数
     */
    HostSuperNodeCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAssetImageScanTask请求参数结构体
 */
export interface CreateAssetImageScanTaskRequest {
    /**
     * 是否扫描全部镜像；全部镜像，镜像列表和根据过滤条件筛选三选一。
     * @deprecated
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
    /**
     * 镜像是否存在运行中的容器
     */
    ContainerRunning?: boolean;
    /**
     * 扫描范围 0 全部授权镜像，1自选镜像，2 推荐扫描
     */
    ScanScope?: number;
    /**
     * 任务超时时长单位秒，默认1小时
     */
    Timeout?: number;
}
/**
 * CreateSearchTemplate请求参数结构体
 */
export interface CreateSearchTemplateRequest {
    /**
     * 搜索模板
     */
    SearchTemplate: SearchTemplate;
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
    /**
     * 节点名称
     */
    NodeName: string;
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
 * DescribeAgentInstallCommand返回参数结构体
 */
export interface DescribeAgentInstallCommandResponse {
    /**
     * linux系统安装命令
     */
    LinuxCommand?: string;
    /**
     * windows系统安装命令（windows2008及以上）
     */
    WindowsCommand?: string;
    /**
     * windows系统安装命令第一步（windows2003）
     */
    WindowsStepOne?: string;
    /**
     * windows系统安装命令第二步（windows2003）
     */
    WindowsStepTwo?: string;
    /**
     * windows版agent下载链接
     */
    WindowsDownloadUrl?: string;
    /**
     * arm架构系统安装命令
     */
    ARMCommand?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ModifyK8sApiAbnormalRuleStatus返回参数结构体
 */
export interface ModifyK8sApiAbnormalRuleStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageAuthorizedInfo请求参数结构体
 */
export declare type DescribeImageAuthorizedInfoRequest = null;
/**
 * DescribeExportJobDownloadURL返回参数结构体
 */
export interface DescribeExportJobDownloadURLResponse {
    /**
     * 下载链接
     */
    DownloadURL?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryRiskInfoList返回参数结构体
 */
export interface DescribeAssetImageRegistryRiskInfoListResponse {
    /**
     * 镜像漏洞列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ImageRisk>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulIgnoreLocalImageList返回参数结构体
 */
export interface DescribeVulIgnoreLocalImageListResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 镜像列表
     */
    List?: Array<VulIgnoreLocalImage>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetSuperNodeList返回参数结构体
 */
export interface DescribeAssetSuperNodeListResponse {
    /**
     * 超级节点列表
     */
    List?: Array<SuperNodeListItem>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ImageDigest?: string;
    /**
     * 镜像地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageRepoAddress?: string;
    /**
     * 镜像类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryType?: string;
    /**
     * 仓库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageName?: string;
    /**
     * 镜像版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageTag?: string;
    /**
     * 扫描时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanTime?: string;
    /**
     * 扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanStatus?: string;
    /**
     * 安全漏洞数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulCnt?: number;
    /**
     * 木马病毒数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusCnt?: number;
    /**
     * 风险行为数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskCnt?: number;
    /**
     * 敏感信息数
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SentiveInfoCnt?: number;
    /**
     * 镜像系统
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OsName?: string;
    /**
     * 木马扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVirusError?: string;
    /**
     * 漏洞扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVulError?: string;
    /**
     * 层文件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LayerInfo?: string;
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
     * 高危扫描错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRiskError?: string;
    /**
     * 木马信息扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVirusProgress?: number;
    /**
     * 漏洞扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanVulProgress?: number;
    /**
     * 敏感扫描进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRiskProgress?: number;
    /**
     * 剩余扫描时间秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRemainTime?: number;
    /**
     * cve扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CveStatus?: string;
    /**
     * 高危扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskStatus?: string;
    /**
     * 木马扫描状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusStatus?: string;
    /**
     * 总进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Progress?: number;
    /**
     * 授权状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAuthorized?: number;
    /**
     * 镜像大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageSize?: number;
    /**
     * 镜像Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageId?: string;
    /**
     * 镜像区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryRegion?: string;
    /**
     * 镜像创建的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageCreateTime?: string;
    /**
     * 敏感信息数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SensitiveInfoCnt?: number;
    /**
     * Id
     */
    Id?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddCompliancePolicyItemToWhitelist返回参数结构体
 */
export interface AddCompliancePolicyItemToWhitelistResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资产+检查项ids 集合单元
 */
export interface ComplianceAssetPolicySetItem {
    /**
     * 资产ID
     */
    CustomerAssetItemId: number;
    /**
     * 需要忽略指定资产内的检查项ID列表，为空表示所有
     */
    CustomerPolicyItemIdSet?: Array<number | bigint>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * k8sApi异常事件详情
 */
export interface K8sApiAbnormalEventInfo {
    /**
     * 命中规则名称
     */
    MatchRuleName?: string;
    /**
     * 命中规则类型
     */
    MatchRuleType?: string;
    /**
     * 告警等级
     */
    RiskLevel?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群运行状态，CSR_RUNNING-运行中，CSR_EXCEPTION-异常，CSR_CREATING-创建中
     */
    ClusterRunningStatus?: string;
    /**
     * 初次生成时间
     */
    FirstCreateTime?: string;
    /**
     * 最近一次生成时间
     */
    LastCreateTime?: string;
    /**
     * 告警数量
     */
    AlarmCount?: number;
    /**
     * 状态
  "EVENT_UNDEAL":未处理
  "EVENT_DEALED": 已处理
  "EVENT_IGNORE": 忽略
  "EVENT_DEL": 删除
  "EVENT_ADD_WHITE": 加白
     */
    Status?: string;
    /**
     * 集群masterIP
     */
    ClusterMasterIP?: string;
    /**
     * k8s版本
     */
    K8sVersion?: string;
    /**
     * 运行时组件
     */
    RunningComponent?: Array<string>;
    /**
     * 描述
     */
    Desc?: string;
    /**
     * 建议
     */
    Suggestion?: string;
    /**
     * 请求信息
     */
    Info?: string;
    /**
     * 规则ID
     */
    MatchRuleID?: string;
    /**
     * 高亮字段数组
     */
    HighLightFields?: Array<string>;
    /**
     * 命中规则
     */
    MatchRule?: K8sApiAbnormalRuleScopeInfo;
}
/**
 * DescribeVulDefenceEventTendency返回参数结构体
 */
export interface DescribeVulDefenceEventTendencyResponse {
    /**
     * 漏洞防御事件趋势
     */
    DefendedList?: Array<VulDefenceEventTendency>;
    /**
     * 漏洞攻击事件趋势
     */
    AttackList?: Array<VulDefenceEventTendency>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateK8sApiAbnormalRuleInfo请求参数结构体
 */
export interface CreateK8sApiAbnormalRuleInfoRequest {
    /**
     * 规则详情
     */
    RuleInfo: K8sApiAbnormalRuleInfo;
    /**
     * 拷贝规则ID(适用于复制规则场景)
     */
    CopySrcRuleID?: string;
    /**
     * 事件ID(适用于事件加白场景)
     */
    EventID?: number;
}
/**
 * CreateK8sApiAbnormalRuleExportJob返回参数结构体
 */
export interface CreateK8sApiAbnormalRuleExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenewImageAuthorizeState返回参数结构体
 */
export interface RenewImageAuthorizeStateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 镜像自动授权任务信息
 */
export interface ImageAutoAuthorizedTask {
    /**
     * 任务id
     */
    TaskId: number;
    /**
     * 授权方式，AUTO:自动授权，MANUAL:手动授权
     */
    Type: string;
    /**
     * 任务日期
     */
    AuthorizedDate: string;
    /**
     * 镜像来源，LOCAL:本地镜像，REGISTRY:仓库镜像
     */
    Source: string;
    /**
     * 最近授权时间
     */
    LastAuthorizedTime: string;
    /**
     * 自动授权成功数
     */
    SuccessCount: number;
    /**
     * 自动授权失败数
     */
    FailCount: number;
    /**
     * 最近任务失败码，REACH_LIMIT:达到授权上限，LICENSE_INSUFFICIENT:授权数不足
     */
    LatestFailCode: string;
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
 * DescribeSearchLogs返回参数结构体
 */
export interface DescribeSearchLogsResponse {
    /**
     * 历史搜索记录 保留最新的10条
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网络集群网络空间返回的结构体
 */
export interface NetworkClusterNamespaceInfo {
    /**
     * 网络空间标签
     */
    Labels: string;
    /**
     * 网络空间名字
     */
    Name: string;
}
/**
 * DescribeReverseShellEventsExport返回参数结构体
 */
export interface DescribeReverseShellEventsExportResponse {
    /**
     * execle下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadUrl?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulDefenceEventDetail返回参数结构体
 */
export interface DescribeVulDefenceEventDetailResponse {
    /**
     * 漏洞防御事件详细
     */
    EventDetail?: VulDefenceEventDetail;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    CustomerAssetId?: number;
    /**
     * 资产类别。
     */
    AssetType?: string;
    /**
     * 资产的名称。
     */
    AssetName?: string;
    /**
     * 当资产为镜像时，这个字段为镜像Tag。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageTag?: string;
    /**
     * 资产所在的主机IP。
     */
    HostIP?: string;
    /**
     * 资产所属的节点的名称
     */
    NodeName?: string;
    /**
     * 检测状态
  
  CHECK_INIT, 待检测
  
  CHECK_RUNNING, 检测中
  
  CHECK_FINISHED, 检测完成
  
  CHECK_FAILED, 检测失败
     */
    CheckStatus?: string;
    /**
     * 此类资产通过的检测项的数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PassedPolicyItemCount?: number;
    /**
     * 此类资产未通过的检测的数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedPolicyItemCount?: number;
    /**
     * 上次检测的时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastCheckTime?: string;
    /**
     * 检测结果：
  RESULT_FAILED: 未通过。
  RESULT_PASSED: 通过。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckResult?: string;
    /**
     * 主机节点的实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 镜像仓库信息
     */
    ImageRegistryInfo?: ImageRegistryInfo;
    /**
     * 集群id
     */
    ClusterID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
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
 * CreateEscapeEventsExportJob请求参数结构体
 */
export interface CreateEscapeEventsExportJobRequest {
    /**
     * 需要返回的数量，最大值为10000
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
     * 排序字段：latest_found_time
     */
    By?: string;
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
}
/**
 * ModifyVirusMonitorSetting返回参数结构体
 */
export interface ModifyVirusMonitorSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckNetworkFirewallPolicyYaml返回参数结构体
 */
export interface CheckNetworkFirewallPolicyYamlResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Status?: string;
    /**
     * 返回各类资产的汇总信息的列表。
     */
    AssetSummaryList?: Array<ComplianceAssetSummary>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeNetworkFirewallClusterRefreshStatus返回参数结构体
 */
export interface DescribeNetworkFirewallClusterRefreshStatusResponse {
    /**
     * 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist
     */
    TaskStatus?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ContainerName?: string;
    /**
     * 容器id
     */
    ContainerId?: string;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 镜像Id
     */
    ImageId?: string;
    /**
     * 节点名
     */
    HostName?: string;
    /**
     * 节点内网ip
     */
    HostIp?: string;
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
    Status?: string;
    /**
     * 检测开始时间
     */
    StartTime?: string;
    /**
     * 检测结束时间
     */
    EndTime?: string;
    /**
     * 风险个数
     */
    RiskCnt?: number;
    /**
     * 事件id
     */
    Id?: string;
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
    ErrorMsg?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * 节点外网IP
     */
    PublicIP?: string;
    /**
     * 节点ID
     */
    NodeID?: string;
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
 * AddAndPublishNetworkFirewallPolicyYamlDetail请求参数结构体
 */
export interface AddAndPublishNetworkFirewallPolicyYamlDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略名
     */
    PolicyName: string;
    /**
     * base64编码的networkpolicy yaml字符串
     */
    Yaml?: string;
    /**
     * 策略描述
     */
    Description?: string;
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
 * 镜像仓库详情
 */
export interface ImageRegistryInfo {
    /**
     * 仓库名称
     */
    Name?: string;
    /**
     * 仓库类型
  aws
  ccr
  harbor
  jfrog
  other-tcr
  quay
  tcr
     */
    Type?: string;
    /**
     * 仓库地址
     */
    Address?: string;
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
 * OpenTcssTrial请求参数结构体
 */
export declare type OpenTcssTrialRequest = null;
/**
 * CreateEscapeEventsExportJob返回参数结构体
 */
export interface CreateEscapeEventsExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeImageAutoAuthorizedRule返回参数结构体
 */
export interface DescribeImageAutoAuthorizedRuleResponse {
    /**
     * 规则是否生效，0:不生效，1:已生效
     */
    IsEnabled?: number;
    /**
     * 授权范围类别，MANUAL:自选主机节点，ALL:全部镜像
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RangeType?: string;
    /**
     * 授权范围是自选主机时的主机数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostCount?: number;
    /**
     * 每天最大的镜像授权数限制, 0表示无限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDailyCount?: number;
    /**
     * 规则id，用未设置时为0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 自动扫描开关，0：关闭，1：开启
     */
    AutoScanEnabled?: number;
    /**
     * 自动扫描范围
     */
    ScanType?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddEditWarningRules返回参数结构体
 */
export interface AddEditWarningRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulDefenceSetting请求参数结构体
 */
export declare type DescribeVulDefenceSettingRequest = null;
/**
 * DescribeVirusAutoIsolateSetting返回参数结构体
 */
export interface DescribeVirusAutoIsolateSettingResponse {
    /**
     * 自动隔离开关(true:开 false:关)
     */
    AutoIsolateSwitch: boolean;
    /**
     * 是否中断隔离文件关联的进程(true:是 false:否)
     */
    IsKillProgress: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 漏洞列表信息
 */
export interface VulInfo {
    /**
     * 漏洞名称
     */
    Name: string;
    /**
     * 漏洞标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<string>;
    /**
     * CVSS V3分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVSSV3Score: number;
    /**
     * 风险等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level: string;
    /**
     * CVE编号
     */
    CVEID: string;
    /**
     * 漏洞子类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Category: string;
    /**
     * 首次发现时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FoundTime: string;
    /**
     * 最近发现时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestFoundTime: string;
    /**
     * 漏洞ID
     */
    ID: number;
    /**
     * 影响本地镜像数
     */
    LocalImageCount: number;
    /**
     * 影响容器数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerCount: number;
    /**
     * 影响仓库镜像数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryImageCount: number;
    /**
     * 漏洞PocID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PocID: string;
    /**
     * 防御状态，NO_DEFENDED:未防御，DEFENDED:已防御
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceStatus: string;
    /**
     * 漏洞防御主机范围: MANUAL:自选主机节点，ALL:全部
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceScope: string;
    /**
     * 漏洞防御主机数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefenceHostCount: number;
    /**
     * 已防御攻击次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefendedCount: number;
}
/**
 * DescribeAssetImageRegistryRegistryList返回参数结构体
 */
export interface DescribeAssetImageRegistryRegistryListResponse {
    /**
     * 镜像仓库列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ImageRepoRegistryInfo>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryAssetStatus请求参数结构体
 */
export declare type DescribeAssetImageRegistryAssetStatusRequest = null;
/**
 * DescribeVulScanLocalImageList请求参数结构体
 */
export interface DescribeVulScanLocalImageListRequest {
    /**
     * 漏洞扫描任务ID
     */
    TaskID: number;
    /**
     * 过滤条件。
  <li>OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞</li>
  <li>ImageID- string - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String -是否必填: 否 - 镜像名称</li>
  <li>ScanStatus- string -是否必填: 否 - 检测状态。WAIT_SCAN：待检测，SCANNING：检查中，SCANNED：检查完成，SCAN_ERR：检查失败，CANCELED：检测停止</li>
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
 * CreateK8sApiAbnormalRuleExportJob请求参数结构体
 */
export interface CreateK8sApiAbnormalRuleExportJobRequest {
    /**
     * 过滤条件。
  <li>RuleType - string  - 是否必填: 否 -规则类型</li>
  <li>Status - string  - 是否必填: 否 -状态</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 排序方式
     */
    Order?: string;
    /**
     * 排序字段
     */
    By?: Array<string>;
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
}
/**
 * CreateVirusScanAgain返回参数结构体
 */
export interface CreateVirusScanAgainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDefenceVulExportJob请求参数结构体
 */
export interface CreateDefenceVulExportJobRequest {
    /**
     * 需要返回的数量，默认为10000，最大值为10000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低</li>
  <li>CVEID- string - 是否必填：否 - CVE编号</li>
  <li>Name- string -是否必填: 否 - 漏洞名称</li>
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
 * ModifySecLogDeliveryClsSetting请求参数结构体
 */
export interface ModifySecLogDeliveryClsSettingRequest {
    /**
     * 日志信息
     */
    List: Array<SecLogDeliveryClsSettingInfo>;
}
/**
 * AddEditAccessControlRule返回参数结构体
 */
export interface AddEditAccessControlRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEscapeEventTypeSummary请求参数结构体
 */
export declare type DescribeEscapeEventTypeSummaryRequest = null;
/**
 * DescribeVulLevelImageSummary请求参数结构体
 */
export declare type DescribeVulLevelImageSummaryRequest = null;
/**
 * DeleteCompliancePolicyItemFromWhitelist返回参数结构体
 */
export interface DeleteCompliancePolicyItemFromWhitelistResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ResetSecLogTopicConfig返回参数结构体
 */
export interface ResetSecLogTopicConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 访问控制策略信息列表
     */
    RuleSet?: Array<RuleBaseInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEscapeRule返回参数结构体
 */
export interface ModifyEscapeRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogVasInfo返回参数结构体
 */
export interface DescribeSecLogVasInfoResponse {
    /**
     * 购买状态
  待购: Pending
  已购: Normal
  隔离: Isolate
     */
    BuyStatus?: string;
    /**
     * 存储时长(月)
     */
    LogSaveMonth?: number;
    /**
     * 起始时间
     */
    StartTime?: string;
    /**
     * 截止时间
     */
    EndTime?: string;
    /**
     * 存储容量(GB)
     */
    LogCapacity?: number;
    /**
     * 资源ID
     */
    ResourceID?: string;
    /**
     * 是否曾经购买过(false:未曾 true:曾经购买过)
     */
    IsPurchased?: boolean;
    /**
     * 试用存储容量(GB)
     */
    TrialCapacity?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyVirusAutoIsolateSetting返回参数结构体
 */
export interface ModifyVirusAutoIsolateSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ImageId?: string;
    /**
     * 镜像名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 木马文件大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 木马文件路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FilePath?: string;
    /**
     * 最近生成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 病毒名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusName?: string;
    /**
     * 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: string;
    /**
     * 容器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerName?: string;
    /**
     * 容器id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerId?: string;
    /**
     * 主机名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostName?: string;
    /**
     * 主机id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostId?: string;
    /**
     * 进程名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessName?: string;
    /**
     * 进程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessPath?: string;
    /**
     * 进程md5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessMd5?: string;
    /**
     * 进程id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessId?: number;
    /**
     * 进程参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessArgv?: string;
    /**
     * 进程链
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessChan?: string;
    /**
     * 进程组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessAccountGroup?: string;
    /**
     * 进程启动用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessStartAccount?: string;
    /**
     * 进程文件权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessFileAuthority?: string;
    /**
     * 来源：0：一键扫描， 1：定时扫描 2：实时监控
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceType?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<string>;
    /**
     * 事件描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HarmDescribe?: string;
    /**
     * 建议方案
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuggestScheme?: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mark?: string;
    /**
     * 风险文件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 文件MD5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileMd5?: string;
    /**
     * 事件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventType?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodName?: string;
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
    Status?: string;
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
    SubStatus?: string;
    /**
     * 内网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostIP?: string;
    /**
     * 外网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientIP?: string;
    /**
     * 父进程启动用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PProcessStartUser?: string;
    /**
     * 父进程用户组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PProcessUserGroup?: string;
    /**
     * 父进程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PProcessPath?: string;
    /**
     * 父进程命令行参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PProcessParam?: string;
    /**
     * 祖先进程启动用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessStartUser?: string;
    /**
     * 祖先进程用户组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessUserGroup?: string;
    /**
     * 祖先进程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessPath?: string;
    /**
     * 祖先进程命令行参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AncestorProcessParam?: string;
    /**
     * 事件最后一次处理的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperationTime?: string;
    /**
     * 容器隔离状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerNetStatus?: string;
    /**
     * 容器隔离子状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerNetSubStatus?: string;
    /**
     * 容器隔离操作来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerIsolateOperationSrc?: string;
    /**
     * 检测平台
  1: 云查杀引擎
  2: tav
  3: binaryAi
  4: 异常行为
  5: 威胁情报
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckPlatform?: Array<string>;
    /**
     * 文件访问时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileAccessTime?: string;
    /**
     * 文件修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileModifyTime?: string;
    /**
     * 节点子网ID
     */
    NodeSubNetID?: string;
    /**
     * 节点子网名称
     */
    NodeSubNetName?: string;
    /**
     * 节点子网网段
     */
    NodeSubNetCIDR?: string;
    /**
     * 集群id
     */
    ClusterID?: string;
    /**
     * pod ip
     */
    PodIP?: string;
    /**
     * pod状态
     */
    PodStatus?: string;
    /**
     * 节点唯一ID
     */
    NodeUniqueID?: string;
    /**
     * 节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * 节点ID
     */
    NodeID?: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * Namespace
     */
    Namespace?: string;
    /**
     * 工作负载类型
     */
    WorkloadType?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageAutoAuthorizedTaskList返回参数结构体
 */
export interface DescribeImageAutoAuthorizedTaskListResponse {
    /**
     * 自动授权任务列表
     */
    List?: Array<ImageAutoAuthorizedTask>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 返回各类资产的列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetInfoList?: Array<ComplianceAssetInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSuperNodePodList返回参数结构体
 */
export interface DescribeSuperNodePodListResponse {
    /**
     * 列表
     */
    List?: Array<SuperNodePodListItem>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateVulContainerExportJob请求参数结构体
 */
export interface CreateVulContainerExportJobRequest {
    /**
     * 漏洞PocID
     */
    PocID: string;
    /**
     * 需要返回的数量，默认为50000，最大值为50000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤条件。
  <li>OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞</li>
  <li>ContainerID- string - 是否必填：否 - 容器ID</li>
  <li>ContainerName- String -是否必填: 否 - 容器名称</li>
     */
    Filters?: Array<RunTimeFilters>;
}
/**
 * DescribeSecLogDeliveryClsSetting返回参数结构体
 */
export interface DescribeSecLogDeliveryClsSettingResponse {
    /**
     * 日志类型列表
     */
    LogTypeList?: Array<SecLogDeliveryClsSettingInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    AssetDetailInfo?: ComplianceAssetDetailInfo;
    /**
     * 当资产为容器时，返回此字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerDetailInfo?: ComplianceContainerDetailInfo;
    /**
     * 当资产为镜像时，返回此字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageDetailInfo?: ComplianceImageDetailInfo;
    /**
     * 当资产为主机时，返回此字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostDetailInfo?: ComplianceHostDetailInfo;
    /**
     * 当资产为K8S时，返回此字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    K8SDetailInfo?: ComplianceK8SDetailInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteEscapeWhiteList返回参数结构体
 */
export interface DeleteEscapeWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RemoveAssetImageRegistryRegistryDetail返回参数结构体
 */
export interface RemoveAssetImageRegistryRegistryDetailResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ScanComplianceScanFailedAssets返回参数结构体
 */
export interface ScanComplianceScanFailedAssetsResponse {
    /**
     * 返回重新检测任务的ID。
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Id?: Array<number | bigint>;
    /**
     * 过滤条件
     */
    Filters?: Array<AssetFilters>;
    /**
     * 不要扫描的镜像列表，与Filters配合使用
     */
    ExcludeImageList?: Array<number | bigint>;
    /**
     * 是否仅扫描各repository最新版本的镜像
     */
    OnlyScanLatest?: boolean;
    /**
     * 停止的任务ID
     */
    TaskID?: number;
}
/**
 * DeleteNetworkFirewallPolicyDetail返回参数结构体
 */
export interface DeleteNetworkFirewallPolicyDetailResponse {
    /**
     * 返回创建的任务的ID，为0表示创建失败。
     */
    TaskId?: number;
    /**
     * 创建删除任务的结果，"Succ"为成功，"Failed"为失败
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeK8sApiAbnormalTendency请求参数结构体
 */
export interface DescribeK8sApiAbnormalTendencyRequest {
    /**
     * 趋势周期(默认为7天)
     */
    TendencyPeriod: number;
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
 * DescribeNewestVul返回参数结构体
 */
export interface DescribeNewestVulResponse {
    /**
     * 漏洞PocID
     */
    PocID?: string;
    /**
     * 漏洞名称
     */
    VulName?: string;
    /**
     * 披露时间
     */
    SubmitTime?: string;
    /**
     * 应急漏洞风险情况：NOT_SCAN：未扫描，SCANNING：扫描中，SCANNED：已扫描
     */
    Status?: string;
    /**
     * 漏洞CVEID
     */
    CVEID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCompliancePolicyItemAffectedAssetList返回参数结构体
 */
export interface DescribeCompliancePolicyItemAffectedAssetListResponse {
    /**
     * 返回各检测项所影响的资产的列表。
     */
    AffectedAssetList?: Array<ComplianceAffectedAsset>;
    /**
     * 检测项影响的资产的总数。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  RiskLevel， AppId
     */
    Filters?: Array<ComplianceFilters>;
    /**
     * 资产类型 <li>ASSET_CONTAINER Docker容器</li> <li>ASSET_IMAGE Docker镜像</li> <li>ASSET_HOST Docker主机</li> <li>ASSET_K8S Kubernetes</li> <li>ASSET_CONTAINERD Containerd主机</li> <li>ASSET_CONTAINERD_CONTAINER Containerd容器</li>
     */
    AssetType?: string;
}
/**
 * DescribeABTestConfig返回参数结构体
 */
export interface DescribeABTestConfigResponse {
    /**
     * 灰度项目配置
     */
    Config?: Array<ABTestConfig>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 镜像扫描计费信息
 */
export interface ImageScanInquireInfo {
    /**
     * 计费项
     */
    InquireKey?: string;
    /**
     * 容量
     */
    Capcity?: number;
    /**
     * 已使用量
     */
    Useage?: number;
    /**
     * 起始时间
     */
    StartTime?: string;
    /**
     * 截止时间
     */
    EndTime?: string;
    /**
     * 计费状态
  (Pending:待购)
  (Normal:正常)
  (Isolate:隔离)
     */
    PurchaseStatus?: string;
    /**
     * 资源ID
     */
    ResourceID?: string;
}
/**
 * 快速搜索模板
 */
export interface SearchTemplate {
    /**
     * 检索名称
     */
    Name: string;
    /**
     * 检索索引类型
     */
    LogType: string;
    /**
     * 检索语句
     */
    Condition: string;
    /**
     * 时间范围
     */
    TimeRange: string;
    /**
     * 转换的检索语句内容
     */
    Query: string;
    /**
     * 检索方式。输入框检索：standard,过滤，检索：simple
     */
    Flag: string;
    /**
     * 展示数据
     */
    DisplayData: string;
    /**
     * 规则ID
     */
    Id?: number;
}
/**
 * DescribeContainerSecEventSummary返回参数结构体
 */
export interface DescribeContainerSecEventSummaryResponse {
    /**
     * 未处理逃逸事件
     */
    UnhandledEscapeCnt?: number;
    /**
     * 未处理反弹shell事件
     */
    UnhandledReverseShellCnt?: number;
    /**
     * 未处理高危系统调用
     */
    UnhandledRiskSyscallCnt?: number;
    /**
     * 未处理异常进程
     */
    UnhandledAbnormalProcessCnt?: number;
    /**
     * 未处理文件篡改
     */
    UnhandledFileCnt?: number;
    /**
     * 未处理木马事件
     */
    UnhandledVirusEventCnt?: number;
    /**
     * 未处理恶意外连事件
     */
    UnhandledMaliciousConnectionEventCnt?: number;
    /**
     * 未处理k8sApi事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnhandledK8sApiEventCnt?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 过滤条件。<li>Status-String-是否必填：否-agent状态筛选，"ALL": "全部"(或不传该字段), "UNINSTALL"："未安装", "OFFLINE"："离线", "ONLINE"："防护中"</li><li>HostName-String-是否必填：否-主机名筛选</li><li>Group-String-是否必填：否-主机群组搜索</li><li>HostIP-string-是否必填：否-主机ip搜索</li><li>HostID-string-是否必填：否-主机id搜索</li><li>DockerVersion-string-是否必填：否-docker版本搜索</li><li>MachineType-string-是否必填：否-主机来源MachineType搜索，"ALL": "全部"(或不传该字段), 主机来源：[     "CVM",     "ECM",     "LH",     "BM" ]中的之一为腾讯云服务器；[     "Other" ]之一非腾讯云服务器；</li><li>DockerStatus-string-是否必填：否-docker安装状态，"ALL": "全部"(或不传该字段), "INSTALL": "已安装", "UNINSTALL": "未安装"</li><li>ProjectID-string-是否必填：否-所属项目id搜索</li><li>Tag:(tag: key)-string-是否必填：否-标签键值搜索示例Filters":[{"Name":"tag: tke-kind","Values":["service"]}]</li> <li>NonClusterNode: 是否查询非集群节点(true: 是,false: 否)</li>
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
 * CreateVulDefenceHostExportJob请求参数结构体
 */
export interface CreateVulDefenceHostExportJobRequest {
    /**
     * 过滤条件。
  <li>Status- String - 是否必填：否 - 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENCE:未防御</li>
  <li>KeyWords- string - 是否必填：否 - 主机名称/IP。</li>
     */
    Filters?: Array<RunTimeFilters>;
    /**
     * 需要返回的数量，最大值为100000
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 排序方式：asc/desc
     */
    Order?: string;
    /**
     * 排序字段：更新时间：ModifyTime/首次开启时间：CreateTime
     */
    By?: string;
}
/**
 * DescribeImageAutoAuthorizedLogList请求参数结构体
 */
export interface DescribeImageAutoAuthorizedLogListRequest {
    /**
     * 自动授权任务Id
     */
    TaskId: number;
    /**
     * Status授权结果，SUCCESS:成功，REACH_LIMIT:达到授权上限，LICENSE_INSUFFICIENT:授权数不足
     */
    Filters?: Array<AssetFilters>;
    /**
     * 需要返回的数量，默认为10，最大值为100
     */
    Limit?: number;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 排序字段：AuthorizedTime
     */
    By?: string;
    /**
     * 排序方式，asc，desc
     */
    Order?: string;
}
/**
 * DescribeRiskSyscallEventsExport请求参数结构体
 */
export interface DescribeRiskSyscallEventsExportRequest {
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
    /**
     * 导出字段
     */
    ExportField?: Array<string>;
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
 * DescribeVulDefencePlugin请求参数结构体
 */
export interface DescribeVulDefencePluginRequest {
    /**
     * 主机HostID或超级节点UniqueId
     */
    HostID?: string;
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
  <li>
  Status- String - 是否必填：否 -插件运行状态：注入中:INJECTING，注入成功：SUCCESS，注入失败：FAIL，插件超时：TIMEOUT，插件退出：QUIT
  </li>
     */
    Filters?: Array<RunTimeFilters>;
}
/**
 * 容器列表集合
 */
export interface ContainerInfo {
    /**
     * 容器id
     */
    ContainerID?: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * 容器运行状态
     */
    Status?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 运行用户
     */
    RunAs?: string;
    /**
     * 命令行
     */
    Cmd?: string;
    /**
     * CPU使用率 *1000
     */
    CPUUsage?: number;
    /**
     * 内存使用 kb
     */
    RamUsage?: number;
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 镜像id
     */
    ImageID?: string;
    /**
     * 镜像id
     */
    POD?: string;
    /**
     * 主机id
     */
    HostID?: string;
    /**
     * 主机ip
     */
    HostIP?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 主机名称
     */
    HostName?: string;
    /**
     * 外网ip
     */
    PublicIp?: string;
    /**
     * 网络状态
  未隔离  	NORMAL
  已隔离		ISOLATED
  隔离中		ISOLATING
  隔离失败	ISOLATE_FAILED
  解除隔离中  RESTORING
  解除隔离失败 RESTORE_FAILED
     */
    NetStatus?: string;
    /**
     * 网络子状态
     */
    NetSubStatus?: string;
    /**
     * 隔离来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateSource?: string;
    /**
     * 隔离时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateTime?: string;
    /**
     * 超级节点id
     */
    NodeID?: string;
    /**
     * podip
     */
    PodIP?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * 节点类型:节点类型：NORMAL普通节点、SUPER超级节点
     */
    NodeType?: string;
    /**
     * 超级节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 所属Pod的CPU
     */
    PodCpu?: number;
    /**
     * 所属Pod的内存
     */
    PodMem?: number;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群ID
     */
    ClusterID?: string;
    /**
     * pod uid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodUid?: string;
}
/**
 * DescribeAssetImageRegistryScanStatusOneKey返回参数结构体
 */
export interface DescribeAssetImageRegistryScanStatusOneKeyResponse {
    /**
     * 镜像个数
     */
    ImageTotal?: number;
    /**
     * 扫描镜像个数
     */
    ImageScanCnt?: number;
    /**
     * 扫描进度列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageStatus?: Array<ImageProgress>;
    /**
     * 安全个数
     */
    SuccessCount?: number;
    /**
     * 风险个数
     */
    RiskCount?: number;
    /**
     * 总的扫描进度
     */
    Schedule?: number;
    /**
     * 总的扫描状态
     */
    Status?: string;
    /**
     * 扫描剩余时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScanRemainTime?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 网络集群资产审计返回结构体
 */
export interface NetworkAuditRecord {
    /**
     * 集群id
     */
    ClusterId: string;
    /**
     * 集群名字
     */
    ClusterName: string;
    /**
     * 集群区域
     */
    Region: string;
    /**
     * 动作
     */
    Action: string;
    /**
     * 操作人
     */
    Operation: string;
    /**
     * 策略名
     */
    NetworkPolicyName: string;
    /**
     * 操作时间
     */
    OperationTime: string;
    /**
     * 操作人appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId: number;
    /**
     * 操作人uin
     */
    Uin: string;
    /**
     * 策略id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId?: number;
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
    /**
     * 联通性检测的配置
     */
    ConnDetectConfig?: Array<ConnDetectConfig>;
    /**
     * 仓库唯一id
     */
    RegistryId?: number;
}
/**
 * DescribeK8sApiAbnormalRuleScopeList请求参数结构体
 */
export interface DescribeK8sApiAbnormalRuleScopeListRequest {
    /**
     * 规则ID
     */
    RuleID: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 需要返回的数量，默认为10，最大值为100
     */
    Limit?: number;
    /**
     * 过滤条件。
  <li>Action - string -是否必填: 否 - 执行动作</li>
  <li>RiskLevel - string  - 是否必填: 否 -威胁等级筛选</li>
     */
    Filters?: Array<RunTimeFilters>;
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
    Pids: Array<number | bigint>;
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
    /**
     * 节点id
     */
    NodeID?: string;
    /**
     * podip
     */
    PodIP?: string;
    /**
     * pod名称
     */
    PodName?: string;
    /**
     * 节点类型
     */
    NodeType?: string;
    /**
     * 超级节点唯一id
     */
    NodeUniqueID?: string;
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
 * 漏洞扫描忽略的仓库镜像
 */
export interface VulIgnoreRegistryImage {
    /**
     * 记录ID
     */
    ID: number;
    /**
     * 仓库名称
     */
    RegistryName: string;
    /**
     * 镜像版本
     */
    ImageVersion: string;
    /**
     * 仓库地址
     */
    RegistryPath: string;
    /**
     * 镜像ID
     */
    ImageID: string;
    /**
     * 漏洞PocID
     */
    PocID: string;
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
  <li>HostIp- String - 是否必填：否 - 主机IP</li>
  <li>ImageId- String - 是否必填：否 - 镜像ID</li>
  <li>ImageName- String - 是否必填：否 - 镜像名称</li>
  <li>Status- String - 是否必填：否 - 状态</li>
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
 * CreateRiskDnsEventExportJob返回参数结构体
 */
export interface CreateRiskDnsEventExportJobResponse {
    /**
     * 导出任务ID，前端拿着任务ID查询任务进度
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeWebVulList返回参数结构体
 */
export interface DescribeWebVulListResponse {
    /**
     * 漏洞总数
     */
    TotalCount?: number;
    /**
     * 漏洞列表
     */
    List?: Array<VulInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVulScanInfo返回参数结构体
 */
export interface DescribeVulScanInfoResponse {
    /**
     * 本次扫描的本地镜像总数
     */
    LocalImageScanCount?: number;
    /**
     * 忽略的漏洞数量
     */
    IgnoreVulCount?: number;
    /**
     * 漏洞扫描的开始时间
     */
    ScanStartTime?: string;
    /**
     * 漏洞扫描的结束时间
     */
    ScanEndTime?: string;
    /**
     * 发现风险镜像数量
     */
    FoundRiskImageCount?: number;
    /**
     * 本地发现漏洞数量
     */
    FoundVulCount?: number;
    /**
     * 扫描进度
     */
    ScanProgress?: number;
    /**
     * 本次扫描的仓库镜像总数
     */
    RegistryImageScanCount?: number;
    /**
     * 本地镜像最近一次的漏洞任务扫描ID
     */
    LocalTaskID?: number;
    /**
     * 扫描状态:NOT_SCAN:未扫描，SCANNING:扫描中,SCANNED:完成，CANCELED：扫描停止
     */
    Status?: string;
    /**
     * 剩余时间，秒
     */
    RemainingTime?: number;
    /**
     * 仓库镜像最近一次的漏洞任务扫描ID
     */
    RegistryTaskID?: number;
    /**
     * 仓库发现漏洞数量
     */
    RegistryFoundVulCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetImageRegistryListExport返回参数结构体
 */
export interface DescribeAssetImageRegistryListExportResponse {
    /**
     * excel文件下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 新文件内容
     */
    NewFile: string;
    /**
     * 新旧文件的差异
     */
    FileDiff: string;
}
/**
 * DescribeVulTendency请求参数结构体
 */
export interface DescribeVulTendencyRequest {
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 枚举类型：
  LATEST：最新版本
  CONTAINER: 运行容器
     */
    SphereOfInfluence: string;
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
 * ModifyK8sApiAbnormalEventStatus返回参数结构体
 */
export interface ModifyK8sApiAbnormalEventStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecLogDeliveryKafkaOptions返回参数结构体
 */
export interface DescribeSecLogDeliveryKafkaOptionsResponse {
    /**
     * 实例列表
     */
    InstanceList?: Array<CKafkaInstanceInfo>;
    /**
     * 地域列表
     */
    RegionList?: Array<RegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    TaskStatus?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * UpdateNetworkFirewallPolicyDetail请求参数结构体
 */
export interface UpdateNetworkFirewallPolicyDetailRequest {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 策略Id
     */
    Id: number;
    /**
     * 入站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    FromPolicyRule: number;
    /**
     * 出站规则
  
  全部允许：1
  
  全部拒绝 ：2
  
  自定义：3
     */
    ToPolicyRule: number;
    /**
     * pod选择器
     */
    PodSelector: string;
    /**
     * 命名空间
     */
    Namespace?: string;
    /**
     * 策略描述
     */
    Description?: string;
    /**
     * 自定义规则
     */
    CustomPolicy?: Array<NetworkCustomPolicy>;
}
/**
 * 超级节点信息
 */
export interface SuperNodeListItem {
    /**
     * 超级节点ID
     */
    NodeID?: string;
    /**
     * 超级节点名称
     */
    NodeName?: string;
    /**
     * 所属集群名
     */
    ClusterName?: string;
    /**
     * 所属集群ID
     */
    ClusterID?: string;
    /**
     * 节点状态:Running,Ready,Notready,Initializing,Failed,Error
     */
    Status?: string;
    /**
     * 子网ID
     */
    SubNetID?: string;
    /**
     * 子网名称
     */
    SubNetName?: string;
    /**
     * 子网网段
     */
    SubNetCidr?: string;
    /**
     * 可用区ID
     */
    ZoneID?: string;
    /**
     * 可用区
     */
    Zone?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 关联pod数
     */
    RelatePodCount?: number;
    /**
     * 关联容器数
     */
    RelateContainerCount?: number;
    /**
     * agent安装状态UNINSTALL:未安装;INSTALLED:已安装;INSTALLING:安装中;
     */
    AgentStatus?: string;
    /**
     * 节点唯一id
     */
    NodeUniqueID?: string;
    /**
     * 集群接入状态
     */
    ClusterAccessedStatus?: string;
    /**
     * 计费核数
     */
    ChargeCoresCnt?: number;
    /**
     * 防护状态:
  已防护: Defended
  未防护: UnDefended
     */
    DefendStatus?: string;
}
/**
 * 修改容器逃逸扫描策略开关信息
 */
export interface EscapeRuleEnabled {
    /**
     * 规则类型
     ESCAPE_CGROUPS：利用cgroup机制逃逸
     ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸
     ESCAPE_DOCKER_API：访问Docker API接口逃逸
     ESCAPE_VUL_OCCURRED：逃逸漏洞利用
     MOUNT_SENSITIVE_PTAH：敏感路径挂载
     PRIVILEGE_CONTAINER_START：特权容器
     PRIVILEGE：程序提权逃逸
     */
    Type: string;
    /**
     * 是否打开：false否 ，true是
     */
    IsEnable: boolean;
}
/**
 * DescribeK8sApiAbnormalEventInfo请求参数结构体
 */
export interface DescribeK8sApiAbnormalEventInfoRequest {
    /**
     * 事件ID
     */
    ID: number;
}
/**
 * DescribeSearchTemplates请求参数结构体
 */
export interface DescribeSearchTemplatesRequest {
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为10，最大值为100。
     */
    Limit?: number;
}
