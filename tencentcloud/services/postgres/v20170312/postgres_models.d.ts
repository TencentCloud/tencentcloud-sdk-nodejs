/**
 * CreateDBInstances请求参数结构体
 */
export interface CreateDBInstancesRequest {
    /**
      * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 一次性购买的实例数量。取值1-100
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * PostgreSQL版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBMajorVersion、DBKernelVersion至少需要传递一个。
      */
    DBVersion?: string;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
      */
    InstanceChargeType?: string;
    /**
      * 是否自动使用代金券。1（是），0（否），默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券。
      */
    VoucherIds?: Array<string>;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 私有网络子网ID。
      */
    SubnetId?: string;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费；
      */
    AutoRenewFlag?: number;
    /**
      * 活动ID
      */
    ActivityId?: number;
    /**
      * 实例名(后续支持)
      */
    Name?: string;
    /**
      * 是否需要支持Ipv6，1：是，0：否
      */
    NeedSupportIpv6?: number;
    /**
      * 实例需要绑定的Tag信息，默认为空
      */
    TagList?: Array<Tag>;
    /**
      * 安全组id
      */
    SecurityGroupIds?: Array<string>;
    /**
      * PostgreSQL主要版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBVersion、DBKernelVersion至少需要传递一个。
      */
    DBMajorVersion?: string;
    /**
      * PostgreSQL内核版本。当输入该参数时，会创建该内核版本号实例。该参数和DBVersion、DBMajorVersion至少需要传递一个。
      */
    DBKernelVersion?: string;
}
/**
 * SetAutoRenewFlag请求参数结构体
 */
export interface SetAutoRenewFlagRequest {
    /**
      * 实例ID集合。注意：当前已不支持同时操作多个实例，这里只能传入单个实例ID。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 续费标记。0-正常续费；1-自动续费；2-到期不续费
      */
    AutoRenewFlag: number;
}
/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
}
/**
 * DescribeDBXlogs请求参数结构体
 */
export interface DescribeDBXlogsRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv。
      */
    DBInstanceId: string;
    /**
      * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-06-10 17:06:38
      */
    EndTime: string;
    /**
      * 分页返回，表示返回第几页的条目。从第0页开始计数。
      */
    Offset?: number;
    /**
      * 分页返回，表示每页有多少条目。取值为1-100。
      */
    Limit?: number;
}
/**
 * CreateReadOnlyGroupNetworkAccess请求参数结构体
 */
export interface CreateReadOnlyGroupNetworkAccessRequest {
    /**
      * RO组ID，形如：pgro-4t9c6g7k。
      */
    ReadOnlyGroupId: string;
    /**
      * 私有网络统一 ID。
      */
    VpcId: string;
    /**
      * 子网ID。
      */
    SubnetId: string;
    /**
      * 是否指定分配vip true-指定分配  false-自动分配。
      */
    IsAssignVip: boolean;
    /**
      * 目标VIP地址。
      */
    Vip?: string;
}
/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
    /**
      * 实例ID，形如postgres-6fego161
      */
    DBInstanceId: string;
    /**
      * 分页返回，每页最大返回数目，默认10，取值范围为1-100
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 返回数据按照创建时间或者用户名排序。取值只能为createTime或者name。createTime-按照创建时间排序；name-按照用户名排序
      */
    OrderBy?: string;
    /**
      * 返回结果是升序还是降序。取值只能为desc或者asc。desc-降序；asc-升序
      */
    OrderByType?: string;
}
/**
 * DeleteReadOnlyGroup返回参数结构体
 */
export interface DeleteReadOnlyGroupResponse {
    /**
      * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenDBExtranetAccess请求参数结构体
 */
export interface OpenDBExtranetAccessRequest {
    /**
      * 实例ID，形如postgres-hez4fh0v
      */
    DBInstanceId: string;
    /**
      * 是否开通Ipv6外网，1：是，0：否
      */
    IsIpv6?: number;
}
/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
    /**
      * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 一次性购买的实例数量。取值1-10。
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 实例字符集，目前只支持：UTF8、LATIN1。
      */
    Charset: string;
    /**
      * 实例根账号用户名。
      */
    AdminName: string;
    /**
      * 实例根账号用户名对应的密码。
      */
    AdminPassword: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * PostgreSQL版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBMajorVersion、DBKernelVersion至少需要传递一个。
      */
    DBVersion?: string;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
      */
    InstanceChargeType?: string;
    /**
      * 是否自动使用代金券。1（是），0（否），默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券。
      */
    VoucherIds?: Array<string>;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 已配置的私有网络中的子网ID。
      */
    SubnetId?: string;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费。
      */
    AutoRenewFlag?: number;
    /**
      * 活动ID。
      */
    ActivityId?: number;
    /**
      * 实例名。
      */
    Name?: string;
    /**
      * 是否需要支持Ipv6，1：是，0：否（默认）。
      */
    NeedSupportIpv6?: number;
    /**
      * 实例需要绑定的Tag信息，默认为空。
      */
    TagList?: Array<Tag>;
    /**
      * 安全组ID。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * PostgreSQL主要版本。目前支持10，11，12，13这几个版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBVersion、DBKernelVersion至少需要传递一个。
      */
    DBMajorVersion?: string;
    /**
      * PostgreSQL内核版本。当输入该参数时，会创建该内核版本号实例。该参数和DBVersion、DBMajorVersion至少需要传递一个。
      */
    DBKernelVersion?: string;
    /**
      * 实例节点信息，购买跨可用区实例时填写。
      */
    DBNodeSet?: Array<DBNode>;
    /**
      * 是否需要支持数据透明加密，1：是，0：否（默认）。
      */
    NeedSupportTDE?: number;
    /**
      * 自定义密钥的KeyId，若选择自定义密匙加密，则需要传入自定义密匙的KeyId，KeyId是CMK的唯一标识。
      */
    KMSKeyId?: string;
    /**
      * 使用KMS服务的地域，KMSRegion为空默认使用本地域的KMS，本地域不支持的情况下需自选其他KMS支持的地域。
      */
    KMSRegion?: string;
    /**
      * 数据库引擎，支持：
1、postgresql（云数据库PostgreSQL）；
2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；
如不指定默认使用postgresql。
      */
    DBEngine?: string;
    /**
      * 数据库引擎的配置信息，配置格式如下：
{"$key1":"$value1", "$key2":"$value2"}

各引擎支持如下：
1、mssql_compatible引擎：
migrationMode：数据库模式，可选参数，可取值：single-db（单数据库模式），multi-db（多数据库模式）。默认为single-db。
defaultLocale：排序区域规则，可选参数，在初始化后不可修改，默认为en_US，可选值如下：
"af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN"。
serverCollationName：排序规则名称，可选参数，在初始化后不可修改，默认为sql_latin1_general_cp1_ci_as，可选值如下：
"bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as"。
      */
    DBEngineConfig?: string;
}
/**
 * 描述一种规格的信息
 */
export interface SpecItemInfo {
    /**
      * 规格ID
      */
    SpecCode: string;
    /**
      * PostgreSQL的版本编号
      */
    Version: string;
    /**
      * 内核编号对应的完整版本名称
      */
    VersionName: string;
    /**
      * CPU核数
      */
    Cpu: number;
    /**
      * 内存大小，单位：MB
      */
    Memory: number;
    /**
      * 该规格所支持最大存储容量，单位：GB
      */
    MaxStorage: number;
    /**
      * 该规格所支持最小存储容量，单位：GB
      */
    MinStorage: number;
    /**
      * 该规格的预估QPS
      */
    Qps: number;
    /**
      * 【该字段废弃】
      */
    Pid: number;
    /**
      * 机器类型
      */
    Type: string;
    /**
      * PostgreSQL的主要版本编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    MajorVersion: string;
    /**
      * PostgreSQL的内核版本编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    KernelVersion: string;
    /**
      * 是否支持TDE数据加密功能，0-不支持，1-支持
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsSupportTDE: number;
}
/**
 * 参数模板的基本信息
 */
export interface ParameterTemplate {
    /**
      * 参数模板ID
      */
    TemplateId: string;
    /**
      * 参数模板名称
      */
    TemplateName: string;
    /**
      * 参数模板适用的数据库版本
      */
    DBMajorVersion: string;
    /**
      * 参数模板适用的数据库引擎
      */
    DBEngine: string;
    /**
      * 参数模板描述
      */
    TemplateDescription: string;
}
/**
 * CreateDBInstanceNetworkAccess返回参数结构体
 */
export interface CreateDBInstanceNetworkAccessResponse {
    /**
      * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAvailableRecoveryTime返回参数结构体
 */
export interface DescribeAvailableRecoveryTimeResponse {
    /**
      * 可恢复的最早时间，时区为东八区（UTC+8）。
      */
    RecoveryBeginTime: string;
    /**
      * 可恢复的最晚时间，时区为东八区（UTC+8）。
      */
    RecoveryEndTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBaseBackup请求参数结构体
 */
export interface CreateBaseBackupRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
}
/**
 * ModifyDBInstanceReadOnlyGroup返回参数结构体
 */
export interface ModifyDBInstanceReadOnlyGroupResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库实例规格
 */
export interface ClassInfo {
    /**
      * 规格ID
      */
    SpecCode: string;
    /**
      * CPU核数
      */
    CPU: number;
    /**
      * 内存大小，单位：MB
      */
    Memory: number;
    /**
      * 该规格所支持最大存储容量，单位：GB
      */
    MaxStorage: number;
    /**
      * 该规格所支持最小存储容量，单位：GB
      */
    MinStorage: number;
    /**
      * 该规格的预估QPS
      */
    QPS: number;
}
/**
 * DescribeCloneDBInstanceSpec请求参数结构体
 */
export interface DescribeCloneDBInstanceSpecRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 基础备份集ID，此入参和RecoveryTargetTime必须选择一个传入。如与RecoveryTargetTime参数同时设置，则以此参数为准。
      */
    BackupSetId?: string;
    /**
      * 恢复目标时间，此入参和BackupSetId必须选择一个传入。时区以东八区（UTC+8）为准。
      */
    RecoveryTargetTime?: string;
}
/**
 * 备份计划
 */
export interface BackupPlan {
    /**
      * 备份周期
      */
    BackupPeriod: string;
    /**
      * 基础备份保留时长
      */
    BaseBackupRetentionPeriod: number;
    /**
      * 开始备份的最早时间
      */
    MinBackupStartTime: string;
    /**
      * 开始备份的最晚时间
      */
    MaxBackupStartTime: string;
}
/**
 * OpenServerlessDBExtranetAccess请求参数结构体
 */
export interface OpenServerlessDBExtranetAccessRequest {
    /**
      * 实例的唯一标识符
      */
    DBInstanceId?: string;
    /**
      * 实例名称
      */
    DBInstanceName?: string;
}
/**
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
    /**
      * 订单名
      */
    DealName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteServerlessDBInstance返回参数结构体
 */
export interface DeleteServerlessDBInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteLogBackup返回参数结构体
 */
export interface DeleteLogBackupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyReadOnlyGroupConfig请求参数结构体
 */
export interface ModifyReadOnlyGroupConfigRequest {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 只读组名称
      */
    ReadOnlyGroupName?: string;
    /**
      * 延迟时间配置开关：0关、1开
      */
    ReplayLagEliminate?: number;
    /**
      * 延迟日志大小配置开关：0关、1开
      */
    ReplayLatencyEliminate?: number;
    /**
      * 延迟日志大小阈值，单位MB
      */
    MaxReplayLatency?: number;
    /**
      * 延迟时间大小阈值，单位ms
      */
    MaxReplayLag?: number;
    /**
      * 自动负载均衡开关：0关、1开
      */
    Rebalance?: number;
    /**
      * 延迟剔除最小保留实例数
      */
    MinDelayEliminateReserve?: number;
}
/**
 * 实例备份统计项
 */
export interface BackupSummary {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 实例日志备份数量。
      */
    LogBackupCount: number;
    /**
      * 实例日志备份大小。
      */
    LogBackupSize: number;
    /**
      * 手动创建的实例基础备份数量。
      */
    ManualBaseBackupCount: number;
    /**
      * 手动创建的实例基础备份大小。
      */
    ManualBaseBackupSize: number;
    /**
      * 自动创建的实例基础备份数量。
      */
    AutoBaseBackupCount: number;
    /**
      * 自动创建的实例基础备份大小。
      */
    AutoBaseBackupSize: number;
    /**
      * 总备份数量
      */
    TotalBackupCount: number;
    /**
      * 总备份大小
      */
    TotalBackupSize: number;
}
/**
 * AddDBInstanceToReadOnlyGroup请求参数结构体
 */
export interface AddDBInstanceToReadOnlyGroupRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
}
/**
 * DescribeProductConfig请求参数结构体
 */
export interface DescribeProductConfigRequest {
    /**
      * 可用区名称
      */
    Zone?: string;
    /**
      * 数据库引擎，支持：
1、postgresql（云数据库PostgreSQL）；
2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；
如不指定默认使用postgresql。
      */
    DBEngine?: string;
}
/**
 * RemoveDBInstanceFromReadOnlyGroup请求参数结构体
 */
export interface RemoveDBInstanceFromReadOnlyGroupRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
}
/**
 * InitDBInstances返回参数结构体
 */
export interface InitDBInstancesResponse {
    /**
      * 实例ID集合。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDefaultParameters请求参数结构体
 */
export interface DescribeDefaultParametersRequest {
    /**
      * 数据库版本，大版本号，例如11，12，13
      */
    DBMajorVersion: string;
    /**
      * 数据库引擎，例如：postgresql,mssql_compatible
      */
    DBEngine: string;
}
/**
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
    /**
      * 实例ID，形如postgres-6fego161
      */
    DBInstanceId: string;
    /**
      * 续费多少个月
      */
    Period: number;
    /**
      * 是否自动使用代金券,1是,0否，默认不使用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券
      */
    VoucherIds?: Array<string>;
}
/**
 * DescribeBackupOverview请求参数结构体
 */
export declare type DescribeBackupOverviewRequest = null;
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
      * 返回的结果数量。
      */
    TotalCount: number;
    /**
      * 地域信息集合。
      */
    RegionSet: Array<RegionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBaseBackupExpireTime返回参数结构体
 */
export interface ModifyBaseBackupExpireTimeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBackupDownloadRestriction请求参数结构体
 */
export interface ModifyBackupDownloadRestrictionRequest {
    /**
      * 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。
      */
    RestrictionType: string;
    /**
      * vpc限制效力，ALLOW 允许；DENY 拒绝。
      */
    VpcRestrictionEffect?: string;
    /**
      * 允许或拒绝下载备份文件的vpcId列表。
      */
    VpcIdSet?: Array<string>;
    /**
      * ip限制效力，ALLOW 允许；DENY 拒绝。
      */
    IpRestrictionEffect?: string;
    /**
      * 允许或拒绝下载备份文件的ip列表。
      */
    IpSet?: Array<string>;
}
/**
 * 描述实例的网络连接信息。
 */
export interface DBInstanceNetInfo {
    /**
      * DNS域名
      */
    Address: string;
    /**
      * IP地址
      */
    Ip: string;
    /**
      * 连接Port地址
      */
    Port: number;
    /**
      * 网络类型，1、inner（基础网络内网地址）；2、private（私有网络内网地址）；3、public（基础网络或私有网络的外网地址）；
      */
    NetType: string;
    /**
      * 网络连接状态，1、initing（未开通）；2、opened（已开通）；3、closed（已关闭）；4、opening（开通中）；5、closing（关闭中）；
      */
    Status: string;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 连接数据库的协议类型，当前支持：postgresql、mssql（MSSQL兼容语法）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProtocolType: string;
}
/**
 * 备份下载限制信息
 */
export interface BackupDownloadRestriction {
    /**
      * 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。
      */
    RestrictionType?: string;
    /**
      * vpc限制效力，ALLOW 允许；DENY 拒绝。
      */
    VpcRestrictionEffect?: string;
    /**
      * 允许或拒绝下载备份文件的vpcId列表。
      */
    VpcIdSet?: Array<string>;
    /**
      * ip限制效力，ALLOW 允许；DENY 拒绝。
      */
    IpRestrictionEffect?: string;
    /**
      * 允许或拒绝下载备份文件的ip列表。
      */
    IpSet?: Array<string>;
}
/**
 * ModifyDBInstanceDeployment请求参数结构体
 */
export interface ModifyDBInstanceDeploymentRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 实例节点信息。
      */
    DBNodeSet: Array<DBNode>;
    /**
      * 切换时间。默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。2：维护时间窗口内切换
      */
    SwitchTag: number;
    /**
      * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
      */
    SwitchStartTime?: string;
    /**
      * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。
      */
    SwitchEndTime?: string;
}
/**
 * DeleteReadOnlyGroupNetworkAccess请求参数结构体
 */
export interface DeleteReadOnlyGroupNetworkAccessRequest {
    /**
      * RO组ID，形如：pgro-4t9c6g7k。
      */
    ReadOnlyGroupId: string;
    /**
      * 私有网络统一 ID，若是基础网络则传"0"。
      */
    VpcId: string;
    /**
      * 子网ID，若是基础网络则传"0"。
      */
    SubnetId: string;
    /**
      * 目标VIP地址。
      */
    Vip: string;
}
/**
 * DescribeBackupDownloadRestriction请求参数结构体
 */
export declare type DescribeBackupDownloadRestrictionRequest = null;
/**
 * 描述可用区的编码和状态信息
 */
export interface ZoneInfo {
    /**
      * 该可用区的英文名称
      */
    Zone: string;
    /**
      * 该可用区的中文名称
      */
    ZoneName: string;
    /**
      * 该可用区对应的数字编号
      */
    ZoneId: number;
    /**
      * 可用状态包含，
UNAVAILABLE：不可用。
AVAILABLE：可用。
SELLOUT：售罄。
SUPPORTMODIFYONLY：支持变配。
      */
    ZoneState: string;
    /**
      * 该可用区是否支持Ipv6
      */
    ZoneSupportIpv6: number;
    /**
      * 该可用区对应的备可用区集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    StandbyZoneSet: Array<string>;
}
/**
 * DescribeReadOnlyGroups返回参数结构体
 */
export interface DescribeReadOnlyGroupsResponse {
    /**
      * 只读组列表
      */
    ReadOnlyGroupList: Array<ReadOnlyGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 单条SlowQuery信息
 */
export interface NormalQueryItem {
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 调用次数
      */
    Calls: number;
    /**
      * 粒度点
      */
    CallsGrids: Array<number>;
    /**
      * 花费总时间
      */
    CostTime: number;
    /**
      * 影响的行数
      */
    Rows: number;
    /**
      * 花费最小时间
      */
    MinCostTime: number;
    /**
      * 花费最大时间
      */
    MaxCostTime: number;
    /**
      * 最早一条慢SQL时间
      */
    FirstTime: string;
    /**
      * 最晚一条慢SQL时间
      */
    LastTime: string;
    /**
      * 读共享内存块数
      */
    SharedReadBlks: number;
    /**
      * 写共享内存块数
      */
    SharedWriteBlks: number;
    /**
      * 读io总耗时
      */
    ReadCostTime: number;
    /**
      * 写io总耗时
      */
    WriteCostTime: number;
    /**
      * 数据库名字
      */
    DatabaseName: string;
    /**
      * 脱敏后的慢SQL
      */
    NormalQuery: string;
}
/**
 * 实例绑定的标签信息，包含标签键TagKey和标签值TagValue
 */
export interface Tag {
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
 * DescribeBackupSummaries请求参数结构体
 */
export interface DescribeBackupSummariesRequest {
    /**
      * 每页显示数量，取值范围为1-100，默认为返回10条。
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string。
db-instance-name：按照实例名过滤，类型为string。
db-instance-ip：按照实例私有网络IP地址过滤，类型为string。
      */
    Filters?: Array<Filter>;
    /**
      * 排序字段，支持TotalBackupSize,LogBackupSize,ManualBaseBackupSize,AutoBaseBackupSize。
      */
    OrderBy?: string;
    /**
      * 排序方式，包括升序：asc，降序：desc。
      */
    OrderByType?: string;
}
/**
 * DescribeDBInstanceAttribute请求参数结构体
 */
export interface DescribeDBInstanceAttributeRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
}
/**
 * CloseServerlessDBExtranetAccess请求参数结构体
 */
export interface CloseServerlessDBExtranetAccessRequest {
    /**
      * 实例唯一标识符
      */
    DBInstanceId?: string;
    /**
      * 实例名称
      */
    DBInstanceName?: string;
}
/**
 * CreateBaseBackup返回参数结构体
 */
export interface CreateBaseBackupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloneDBInstance返回参数结构体
 */
export interface CloneDBInstanceResponse {
    /**
      * 订单号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealName: string;
    /**
      * 订单流水号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BillId: string;
    /**
      * 克隆出的新实例ID，当前只支持后付费返回该值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceReadOnlyGroup请求参数结构体
 */
export interface ModifyDBInstanceReadOnlyGroupRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 当前实例所在只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 实例修改的目标只读组ID
      */
    NewReadOnlyGroupId: string;
}
/**
 * AddDBInstanceToReadOnlyGroup返回参数结构体
 */
export interface AddDBInstanceToReadOnlyGroupResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库基础备份信息
 */
export interface BaseBackup {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 备份文件唯一标识。
      */
    Id: string;
    /**
      * 备份文件名称。
      */
    Name: string;
    /**
      * 备份方式：物理备份、逻辑备份。
      */
    BackupMethod: string;
    /**
      * 备份模式：自动备份、手动备份。
      */
    BackupMode: string;
    /**
      * 备份任务状态。
      */
    State: string;
    /**
      * 备份集大小，单位bytes。
      */
    Size: number;
    /**
      * 备份的开始时间。
      */
    StartTime: string;
    /**
      * 备份的结束时间。
      */
    FinishTime: string;
    /**
      * 备份的过期时间。
      */
    ExpireTime: string;
}
/**
 * CreateReadOnlyDBInstance返回参数结构体
 */
export interface CreateReadOnlyDBInstanceResponse {
    /**
      * 订单号列表。每个实例对应一个订单号
      */
    DealNames: Array<string>;
    /**
      * 冻结流水号
      */
    BillId: string;
    /**
      * 创建成功的实例ID集合，只在后付费情景下有返回值
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAvailableRecoveryTime请求参数结构体
 */
export interface DescribeAvailableRecoveryTimeRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
}
/**
 * 慢SQL耗时分段分析
 */
export interface DurationAnalysis {
    /**
      * 慢SQL耗时，时段
      */
    TimeSegment: string;
    /**
      * 对应时段区间慢SQL 条数
      */
    Count: number;
}
/**
 * DescribeDBInstanceParameters请求参数结构体
 */
export interface DescribeDBInstanceParametersRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 查询指定参数详情。ParamName为空或不传，默认返回全部参数列表
      */
    ParamName?: string;
}
/**
 * DescribeOrders返回参数结构体
 */
export interface DescribeOrdersResponse {
    /**
      * 订单数量
      */
    TotalCount: number;
    /**
      * 订单数组
      */
    Deals: Array<PgDeal>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupDownloadURL返回参数结构体
 */
export interface DescribeBackupDownloadURLResponse {
    /**
      * 备份的下载地址。
      */
    BackupDownloadURL?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenServerlessDBExtranetAccess返回参数结构体
 */
export interface OpenServerlessDBExtranetAccessResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyParameterTemplate请求参数结构体
 */
export interface ModifyParameterTemplateRequest {
    /**
      * 参数模板ID，用于唯一确认参数模板，不可修改
      */
    TemplateId: string;
    /**
      * 参数模板名称，长度为1～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@  注：若该字段为空    ，则保持原参数模板名称
      */
    TemplateName?: string;
    /**
      * 参数模板描述，长度为0～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@  注：若不传入该参数，则保持原参数模板描述
      */
    TemplateDescription?: string;
    /**
      * 需要修改或添加的参数集合，注：同一参数不能同时出现在修改添加集合和删除集合中
      */
    ModifyParamEntrySet?: Array<ParamEntry>;
    /**
      * 需要从模板中删除的参数集合，注：同一参数不能同时出现在修改添加集合和删除集合中
      */
    DeleteParamSet?: Array<string>;
}
/**
 * InquiryPriceCreateDBInstances返回参数结构体
 */
export interface InquiryPriceCreateDBInstancesResponse {
    /**
      * 刊例价，单位：分
      */
    OriginalPrice: number;
    /**
      * 折后实际付款金额，单位：分
      */
    Price: number;
    /**
      * 币种。例如，CNY：人民币。
      */
    Currency: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库版本号信息
 */
export interface Version {
    /**
      * 数据库引擎，支持：
1、postgresql（云数据库PostgreSQL）；
2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；
      */
    DBEngine: string;
    /**
      * 数据库版本，例如：12.4
      */
    DBVersion: string;
    /**
      * 数据库主要版本，例如：12
      */
    DBMajorVersion: string;
    /**
      * 数据库内核版本，例如：v12.4_r1.3
      */
    DBKernelVersion: string;
    /**
      * 数据库内核支持的特性列表。例如，
TDE：支持数据加密。
      */
    SupportedFeatureNames: Array<string>;
    /**
      * 数据库版本状态，包括：
AVAILABLE：可用；
DEPRECATED：已弃用。
      */
    Status: string;
    /**
      * 该数据库版本（DBKernelVersion）可以升级到的版本号列表。
      */
    AvailableUpgradeTarget: Array<string>;
}
/**
 * CreateDBInstanceNetworkAccess请求参数结构体
 */
export interface CreateDBInstanceNetworkAccessRequest {
    /**
      * 实例ID，形如：postgres-6bwgamo3。
      */
    DBInstanceId: string;
    /**
      * 私有网络统一 ID。
      */
    VpcId: string;
    /**
      * 子网ID。
      */
    SubnetId: string;
    /**
      * 是否指定分配vip true-指定分配  false-自动分配。
      */
    IsAssignVip: boolean;
    /**
      * 目标VIP地址。
      */
    Vip?: string;
}
/**
 * ModifySwitchTimePeriod返回参数结构体
 */
export interface ModifySwitchTimePeriodResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceCreateDBInstances请求参数结构体
 */
export interface InquiryPriceCreateDBInstancesRequest {
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 规格ID。该参数可以通过调用DescribeProductConfig接口的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * 存储容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 实例数量。目前最大数量不超过100，如需一次性创建更多实例，请联系客服支持。
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。
      */
    Period: number;
    /**
      * 【弃字段，不再生效】，计费ID。该参数可以通过调用DescribeProductConfig接口的返回值中的Pid字段来获取。
      */
    Pid?: number;
    /**
      * 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。
      */
    InstanceChargeType?: string;
    /**
      * 实例类型，默认primary，支持如下：
primary（双机高可用（一主一从））
readonly（只读实例）
      */
    InstanceType?: string;
    /**
      * DB引擎，默认postgresql，支持如下：
postgresql（云数据库PostgreSQL）
mssql_compatible（MSSQL兼容-云数据库PostgreSQL）
      */
    DBEngine?: string;
}
/**
 * DescribeDefaultParameters返回参数结构体
 */
export interface DescribeDefaultParametersResponse {
    /**
      * 参数个数
      */
    TotalCount: number;
    /**
      * 参数信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParamInfoSet: Array<ParamInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * serverless实例网络信息描述
 */
export interface ServerlessDBInstanceNetInfo {
    /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
    /**
      * ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * 端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetType: string;
}
/**
 * DescribeBackupPlans返回参数结构体
 */
export interface DescribeBackupPlansResponse {
    /**
      * 实例的备份计划集
      */
    Plans: Array<BackupPlan>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
    /**
      * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string
db-instance-name：按照实例名过滤，类型为string
db-project-id：按照项目ID过滤，类型为integer
db-pay-mode：按照付费模式过滤，类型为string
db-tag-key：按照标签键过滤，类型为string
      */
    Filters?: Array<Filter>;
    /**
      * 每页显示数量，取值范围为1-100，默认为返回10条。
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 排序指标，如实例名、创建时间等，支持DBInstanceId,CreateTime,Name,EndTime
      */
    OrderBy?: string;
    /**
      * 排序方式，包括升序：asc、降序：desc。
      */
    OrderByType?: string;
}
/**
 * 只读组信息
 */
export interface ReadOnlyGroup {
    /**
      * 只读组标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnlyGroupId: string;
    /**
      * 只读组名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnlyGroupName: string;
    /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 主实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterDBInstanceId: string;
    /**
      * 最小保留实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinDelayEliminateReserve: number;
    /**
      * 延迟空间大小阈值
      */
    MaxReplayLatency: number;
    /**
      * 延迟大小开关
      */
    ReplayLatencyEliminate: number;
    /**
      * 延迟时间大小阈值
      */
    MaxReplayLag: number;
    /**
      * 延迟时间开关
      */
    ReplayLagEliminate: number;
    /**
      * 虚拟网络id
      */
    VpcId: string;
    /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 地域id
      */
    Region: string;
    /**
      * 地区id
      */
    Zone: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 实例详细信息
      */
    ReadOnlyDBInstanceList: Array<DBInstance>;
    /**
      * 自动负载均衡开关
      */
    Rebalance: number;
    /**
      * 网络信息
      */
    DBInstanceNetInfo: Array<DBInstanceNetInfo>;
    /**
      * 只读组网络信息列表（此字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkAccessList: Array<NetworkAccess>;
}
/**
 * ModifyDBInstanceSpec请求参数结构体
 */
export interface ModifyDBInstanceSpecRequest {
    /**
      * 实例ID，形如：postgres-6bwgamo3。
      */
    DBInstanceId: string;
    /**
      * 修改后的实例内存大小，单位GiB。
      */
    Memory: number;
    /**
      * 修改后的实例磁盘大小，单位GiB。
      */
    Storage: number;
    /**
      * 是否自动使用代金券,1是,0否，默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券。
      */
    VoucherIds?: Array<string>;
    /**
      * 活动ID。
      */
    ActivityId?: number;
    /**
      * 指定实例配置完成变更后的切换时间，默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。2：维护时间窗口内切换。
      */
    SwitchTag?: number;
    /**
      * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
      */
    SwitchStartTime?: string;
    /**
      * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。
      */
    SwitchEndTime?: string;
}
/**
 * ModifyAccountRemark返回参数结构体
 */
export interface ModifyAccountRemarkResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpgradeDBInstance请求参数结构体
 */
export interface UpgradeDBInstanceRequest {
    /**
      * 升级后的实例内存大小，单位GB
      */
    Memory: number;
    /**
      * 升级后的实例磁盘大小，单位GB
      */
    Storage: number;
    /**
      * 实例ID，形如postgres-lnp6j617
      */
    DBInstanceId: string;
    /**
      * 是否自动使用代金券,1是,0否，默认不使用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券
      */
    VoucherIds?: Array<string>;
    /**
      * 活动ID
      */
    ActivityId?: number;
    /**
      * 指定实例配置完成变更后的切换时间，默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。
      */
    SwitchTag?: number;
    /**
      * 切换开始时间
      */
    SwitchStartTime?: string;
    /**
      * 切换截止时间
      */
    SwitchEndTime?: string;
}
/**
 * DescribeZones请求参数结构体
 */
export declare type DescribeZonesRequest = null;
/**
 * 描述某个地域下某个可用区的可售卖规格详细信息。
 */
export interface SpecInfo {
    /**
      * 地域英文编码，对应RegionSet的Region字段
      */
    Region: string;
    /**
      * 区域英文编码，对应ZoneSet的Zone字段
      */
    Zone: string;
    /**
      * 规格详细信息列表
      */
    SpecItemInfoList: Array<SpecItemInfo>;
    /**
      * 支持KMS的地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    SupportKMSRegions: Array<string>;
}
/**
 * ModifyBackupDownloadRestriction返回参数结构体
 */
export interface ModifyBackupDownloadRestrictionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述各版本下的参数信息
 */
export interface ParamVersionRelation {
    /**
      * 参数名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 参数信息所属内核版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBKernelVersion: string;
    /**
      * 参数在该版本该规格下的默认值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 参数值单位。参数没有单位时，该字段返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
    /**
      * 数值类型（integer、real）参数，取值上界
注意：此字段可能返回 null，表示取不到有效值。
      */
    Max: number;
    /**
      * 数值类型（integer、real）参数，取值下界
注意：此字段可能返回 null，表示取不到有效值。
      */
    Min: number;
    /**
      * 枚举类型参数，取值范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnumValue: Array<string>;
}
/**
 * DescribeLogBackups请求参数结构体
 */
export interface DescribeLogBackupsRequest {
    /**
      * 备份的最小结束时间，形如2018-01-01 00:00:00。默认为7天前。
      */
    MinFinishTime?: string;
    /**
      * 备份的最大结束时间，形如2018-01-01 00:00:00。默认为当前时间。
      */
    MaxFinishTime?: string;
    /**
      * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string。
db-instance-name：按照实例名过滤，类型为string。
db-instance-ip：按照实例私有网络IP地址过滤，类型为string。
      */
    Filters?: Array<Filter>;
    /**
      * 每页显示数量，取值范围为1-100，默认为返回10条。
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 排序字段，支持StartTime,FinishTime,Size。
      */
    OrderBy?: string;
    /**
      * 排序方式，包括升序：asc，降序：desc。
      */
    OrderByType?: string;
}
/**
 * SetAutoRenewFlag返回参数结构体
 */
export interface SetAutoRenewFlagResponse {
    /**
      * 设置成功的实例个数
      */
    Count: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 网络相关信息。（该数据结构已废弃，网络相关信息使用DBInstanceNetInfo）
 */
export interface NetworkAccess {
    /**
      * 网络资源id，实例id或RO组id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceId: string;
    /**
      * 资源类型，1-实例 2-RO组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType: number;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * IPV4地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip: string;
    /**
      * IPV6地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip6: string;
    /**
      * 访问端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vport: number;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 网络状态，1-申请中，2-使用中，3-删除中，4-已删除
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcStatus: number;
}
/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveDBInstanceFromReadOnlyGroup返回参数结构体
 */
export interface RemoveDBInstanceFromReadOnlyGroupResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstancesProject返回参数结构体
 */
export interface ModifyDBInstancesProjectResponse {
    /**
      * 转移项目成功的实例个数
      */
    Count: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeParameterTemplates返回参数结构体
 */
export interface DescribeParameterTemplatesResponse {
    /**
      * 符合查询条件的参数模板总数
      */
    TotalCount: number;
    /**
      * 参数模板列表
      */
    ParameterTemplateSet: Array<ParameterTemplate>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述各规格下的参数信息
 */
export interface ParamSpecRelation {
    /**
      * 参数名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 参数信息所属规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Memory: string;
    /**
      * 参数在该规格下的默认值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 参数值单位。参数没有单位时，该字段返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
    /**
      * 数值类型（integer、real）参数，取值上界
注意：此字段可能返回 null，表示取不到有效值。
      */
    Max: number;
    /**
      * 数值类型（integer、real）参数，取值下界
注意：此字段可能返回 null，表示取不到有效值。
      */
    Min: number;
    /**
      * 枚举类型参数，取值范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnumValue: Array<string>;
}
/**
 * 订单详情
 */
export interface PgDeal {
    /**
      * 订单名
      */
    DealName: string;
    /**
      * 所属用户
      */
    OwnerUin: string;
    /**
      * 订单涉及多少个实例
      */
    Count: number;
    /**
      * 付费模式。1-预付费；0-后付费
      */
    PayMode: number;
    /**
      * 异步任务流程ID
      */
    FlowId: number;
    /**
      * 实例ID数组
      */
    DBInstanceIdSet: Array<string>;
}
/**
 * DeleteReadOnlyGroupNetworkAccess返回参数结构体
 */
export interface DeleteReadOnlyGroupNetworkAccessResponse {
    /**
      * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupSummaries返回参数结构体
 */
export interface DescribeBackupSummariesResponse {
    /**
      * 备份统计信息列表。
      */
    BackupSummarySet: Array<BackupSummary>;
    /**
      * 查询到的所有备份信息数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBErrlogs请求参数结构体
 */
export interface DescribeDBErrlogsRequest {
    /**
      * 实例ID，形如postgres-5bq3wfjd
      */
    DBInstanceId: string;
    /**
      * 查询起始时间，形如2018-01-01 00:00:00，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-01-01 00:00:00
      */
    EndTime: string;
    /**
      * 数据库名字
      */
    DatabaseName?: string;
    /**
      * 搜索关键字
      */
    SearchKeys?: Array<string>;
    /**
      * 分页返回，每页返回的最大数量。取值为1-100
      */
    Limit?: number;
    /**
      * 分页返回，返回第几页的数据，从第0页开始计数
      */
    Offset?: number;
}
/**
 * 数据库备份信息
 */
export interface DBBackup {
    /**
      * 备份文件唯一标识
      */
    Id: number;
    /**
      * 文件生成的开始时间
      */
    StartTime: string;
    /**
      * 文件生成的结束时间
      */
    EndTime: string;
    /**
      * 文件大小(K)
      */
    Size: number;
    /**
      * 策略（0-实例备份；1-多库备份）
      */
    Strategy: number;
    /**
      * 类型（0-定时）
      */
    Way: number;
    /**
      * 备份方式（1-完整）
      */
    Type: number;
    /**
      * 状态（1-创建中；2-成功；3-失败）
      */
    Status: number;
    /**
      * DB列表
      */
    DbList: Array<string>;
    /**
      * 内网下载地址
      */
    InternalAddr: string;
    /**
      * 外网下载地址
      */
    ExternalAddr: string;
    /**
      * 备份集ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SetId: string;
}
/**
 * serverless账号描述
 */
export interface ServerlessDBAccount {
    /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBUser: string;
    /**
      * 密码
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBPassword: string;
    /**
      * 连接数限制
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBConnLimit: number;
}
/**
 * CloneDBInstance请求参数结构体
 */
export interface CloneDBInstanceRequest {
    /**
      * 克隆的源实例ID。
      */
    DBInstanceId: string;
    /**
      * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费。
      */
    AutoRenewFlag: number;
    /**
      * 私有网络ID。
      */
    VpcId: string;
    /**
      * 已配置的私有网络中的子网ID。
      */
    SubnetId: string;
    /**
      * 新购实例的实例名称。
      */
    Name?: string;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
      */
    InstanceChargeType?: string;
    /**
      * 安全组ID。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * 实例需要绑定的Tag信息，默认为空。
      */
    TagList?: Array<Tag>;
    /**
      * 购买多可用区实例时填写。
      */
    DBNodeSet?: Array<DBNode>;
    /**
      * 是否自动使用代金券。1（是），0（否），默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表。
      */
    VoucherIds?: string;
    /**
      * 活动ID。
      */
    ActivityId?: number;
    /**
      * 基础备份集ID。
      */
    BackupSetId?: string;
    /**
      * 恢复时间点。
      */
    RecoveryTargetTime?: string;
}
/**
 * DeleteParameterTemplate请求参数结构体
 */
export interface DeleteParameterTemplateRequest {
    /**
      * 参数模板ID，用于唯一确认待操作的参数模板
      */
    TemplateId: string;
}
/**
 * DescribeClasses请求参数结构体
 */
export interface DescribeClassesRequest {
    /**
      * 可用区ID。可以通过接口DescribeZones获取。
      */
    Zone: string;
    /**
      * 数据库引擎，支持：
1、postgresql（云数据库PostgreSQL）；
2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；
      */
    DBEngine: string;
    /**
      * 数据库主版本号。例如12，13，可以通过接口DescribeDBVersions获取。
      */
    DBMajorVersion: string;
}
/**
 * DescribeParamsEvent请求参数结构体
 */
export interface DescribeParamsEventRequest {
    /**
      * 实例DB ID
      */
    DBInstanceId: string;
}
/**
 * 参数修改事件信息
 */
export interface EventInfo {
    /**
      * 参数名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParamName: string;
    /**
      * 原参数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    OldValue: string;
    /**
      * 本次修改期望参数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewValue: string;
    /**
      * 后台参数修改开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifyTime: string;
    /**
      * 后台参数生效开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EffectiveTime: string;
    /**
      * 修改状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    State: string;
    /**
      * 操作者（一般为用户sub UIN）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operator: string;
    /**
      * 时间日志。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventLog: string;
}
/**
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
    /**
      * 订单号列表。每个实例对应一个订单号。
      */
    DealNames: Array<string>;
    /**
      * 冻结流水号。
      */
    BillId: string;
    /**
      * 创建成功的实例ID集合，只在后付费情景下有返回值。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢查询分析接口返回的分析详情，按照参数抽象之后进行分类
 */
export interface AnalysisItems {
    /**
      * 慢SQL查询的数据库名
      */
    DatabaseName: string;
    /**
      * 慢SQL执行的用户名
      */
    UserName: string;
    /**
      * 抽象参数之后的慢SQL
      */
    NormalQuery: string;
    /**
      * 慢SQL执行的客户端地址
      */
    ClientAddr: string;
    /**
      * 在选定时间范围内慢SQL语句执行的次数
      */
    CallNum: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的次数占所有慢SQL的比例（小数返回）
      */
    CallPercent: number;
    /**
      * 在选定时间范围内，慢SQL执行的总时间
      */
    CostTime: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的总时间占所有慢SQL的比例（小数返回）
      */
    CostPercent: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的耗时最短的时间（单位：ms）
      */
    MinCostTime: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的耗时最长的时间（单位：ms）
      */
    MaxCostTime: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的耗时平均时间（单位：ms）
      */
    AvgCostTime: number;
    /**
      * 在选定时间范围内，慢SQL第一条开始执行的时间戳
      */
    FirstTime: string;
    /**
      * 在选定时间范围内，慢SQL最后一条开始执行的时间戳
      */
    LastTime: string;
}
/**
 * 数据库Xlog信息
 */
export interface Xlog {
    /**
      * 备份文件唯一标识
      */
    Id: number;
    /**
      * 文件生成的开始时间
      */
    StartTime: string;
    /**
      * 文件生成的结束时间
      */
    EndTime: string;
    /**
      * 内网下载地址
      */
    InternalAddr: string;
    /**
      * 外网下载地址
      */
    ExternalAddr: string;
    /**
      * 备份文件大小
      */
    Size: number;
}
/**
 * DescribeServerlessDBInstances请求参数结构体
 */
export interface DescribeServerlessDBInstancesRequest {
    /**
      * 查询条件
      */
    Filter?: Array<Filter>;
    /**
      * 查询个数
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 排序指标，目前支持实例创建时间CreateTime
      */
    OrderBy?: string;
    /**
      * 排序方式，包括升序、降序
      */
    OrderByType?: string;
}
/**
 * DescribeDBBackups返回参数结构体
 */
export interface DescribeDBBackupsResponse {
    /**
      * 返回备份列表中备份文件的个数
      */
    TotalCount: number;
    /**
      * 备份列表
      */
    BackupList: Array<DBBackup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRegions请求参数结构体
 */
export declare type DescribeRegionsRequest = null;
/**
 * DescribeSlowQueryList返回参数结构体
 */
export interface DescribeSlowQueryListResponse {
    /**
      * 选定时间范围内慢SQL总条数。
      */
    TotalCount: number;
    /**
      * 指定时间范围内，慢SQL耗时分段分析。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DurationAnalysis: Array<DurationAnalysis>;
    /**
      * 指定时间范围内 慢SQL流水。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RawSlowQueryList: Array<RawSlowQuery>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * serverless实例描述
 */
export interface ServerlessDBInstance {
    /**
      * 实例id，唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceId?: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceName?: string;
    /**
      * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceStatus?: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region?: string;
    /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone?: string;
    /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId?: number;
    /**
      * 私有网络Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 字符集
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBCharset?: string;
    /**
      * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBVersion?: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 实例网络信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceNetInfo?: Array<ServerlessDBInstanceNetInfo>;
    /**
      * 实例账户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBAccountSet?: Array<ServerlessDBAccount>;
    /**
      * 实例下的db信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBDatabaseList?: Array<string>;
    /**
      * 实例绑定的标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagList?: Array<Tag>;
    /**
      * 数据库内核版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBKernelVersion?: string;
    /**
      * 数据库主要版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBMajorVersion?: string;
}
/**
 * CreateReadOnlyGroup请求参数结构体
 */
export interface CreateReadOnlyGroupRequest {
    /**
      * 主实例ID
      */
    MasterDBInstanceId: string;
    /**
      * 只读组名称
      */
    Name: string;
    /**
      * 项目ID
      */
    ProjectId?: number;
    /**
      * 私有网络ID
      */
    VpcId?: string;
    /**
      * 子网ID
      */
    SubnetId?: string;
    /**
      * 延迟时间大小开关：0关、1开
      */
    ReplayLagEliminate?: number;
    /**
      * 延迟空间大小开关： 0关、1开
      */
    ReplayLatencyEliminate?: number;
    /**
      * 延迟时间大小阈值，单位ms
      */
    MaxReplayLag?: number;
    /**
      * 延迟空间大小阈值，单位MB
      */
    MaxReplayLatency?: number;
    /**
      * 延迟剔除最小保留实例数
      */
    MinDelayEliminateReserve?: number;
    /**
      * 安全组id
      */
    SecurityGroupIds?: Array<string>;
}
/**
 * DescribeParamsEvent返回参数结构体
 */
export interface DescribeParamsEventResponse {
    /**
      * 参数修改事件总数，以参数为统计粒度
      */
    TotalCount: number;
    /**
      * 实例参数修改事件详情
      */
    EventItems: Array<EventItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
    /**
      * 实例或只读组要绑定的安全组列表
      */
    SecurityGroupIdSet: Array<string>;
    /**
      * 实例ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果都传，忽略ReadOnlyGroupId
      */
    DBInstanceId?: string;
    /**
      * 只读组ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果要修改只读组关联的安全组，只传ReadOnlyGroupId
      */
    ReadOnlyGroupId?: string;
}
/**
 * CloseServerlessDBExtranetAccess返回参数结构体
 */
export interface CloseServerlessDBExtranetAccessResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 修改参数条目，以参数为维度
 */
export interface EventItem {
    /**
      * 参数名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParamName: string;
    /**
      * 修改事件数
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventCount: number;
    /**
      * 修改时间详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventDetail: Array<EventInfo>;
}
/**
 * RestartDBInstance请求参数结构体
 */
export interface RestartDBInstanceRequest {
    /**
      * 实例ID，形如postgres-6r233v55
      */
    DBInstanceId: string;
}
/**
 * DescribeDBInstanceSecurityGroups返回参数结构体
 */
export interface DescribeDBInstanceSecurityGroupsResponse {
    /**
      * 安全组信息数组
      */
    SecurityGroupSet: Array<SecurityGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateParameterTemplate返回参数结构体
 */
export interface CreateParameterTemplateResponse {
    /**
      * 参数模板ID，用于唯一确认参数模板
      */
    TemplateId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 参数详情
 */
export interface ParamInfo {
    /**
      * 参数ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ID: number;
    /**
      * 参数名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 参数值类型：integer（整型）、real（浮点型）、bool（布尔型）、enum（枚举类型）、mutil_enum（枚举类型、支持多选）。
当参数类型为integer（整型）、real（浮点型）时，参数的取值范围根据返回值的Max、Min确定；
当参数类型为bool（布尔型）时，参数设置值取值范围是true | false；
当参数类型为enum（枚举类型）、mutil_enum（多枚举类型）时，参数的取值范围由返回值中的EnumValue确定。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParamValueType: string;
    /**
      * 参数值 单位。参数没有单位时，该字段返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
    /**
      * 参数默认值。以字符串形式返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    DefaultValue: string;
    /**
      * 参数当前运行值。以字符串形式返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentValue: string;
    /**
      * 数值类型（integer、real）参数，取值下界
注意：此字段可能返回 null，表示取不到有效值。
      */
    Max: number;
    /**
      * 枚举类型参数，取值范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnumValue: Array<string>;
    /**
      * 数值类型（integer、real）参数，取值上界
注意：此字段可能返回 null，表示取不到有效值。
      */
    Min: number;
    /**
      * 参数中文描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParamDescriptionCH: string;
    /**
      * 参数英文描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParamDescriptionEN: string;
    /**
      * 参数修改，是否重启生效。（true为需要，false为不需要）
注意：此字段可能返回 null，表示取不到有效值。
      */
    NeedReboot: boolean;
    /**
      * 参数中文分类
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClassificationCN: string;
    /**
      * 参数英文分类
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClassificationEN: string;
    /**
      * 是否和规格相关。（true为相关，false为不想关）
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecRelated: boolean;
    /**
      * 是否为重点参数。（true为重点参数，修改是需要重点关注，可能会影响实例性能）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Advanced: boolean;
    /**
      * 参数最后一次修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTime: string;
    /**
      * 参数存在主备制约，0：无主备制约关系，1:备机参数值需比主机大，2:主机参数值需比备机大
注意：此字段可能返回 null，表示取不到有效值。
      */
    StandbyRelated: number;
    /**
      * 参数版本关联信息，存储具体内核版本下的具体参数信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionRelationSet: Array<ParamVersionRelation>;
    /**
      * 参数规格关联信息，存储具体规格下具体的参数信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecRelationSet: Array<ParamSpecRelation>;
}
/**
 * DescribeLogBackups返回参数结构体
 */
export interface DescribeLogBackupsResponse {
    /**
      * 查询到的日志备份数量。
      */
    TotalCount: number;
    /**
      * 日志备份详细信息列表。
      */
    LogBackupSet: Array<LogBackup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢SQL 统计分析接口返回详情
 */
export interface Detail {
    /**
      * 输入时间范围内所有慢sql执行的总时间，单位毫秒（ms）
      */
    TotalTime: number;
    /**
      * 输入时间范围内所有慢sql总条数
      */
    TotalCallNum: number;
    /**
      * 慢SQL统计分析列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisItems: Array<AnalysisItems>;
}
/**
 * 安全组信息
 */
export interface SecurityGroup {
    /**
      * 项目Id
      */
    ProjectId: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 入站规则
      */
    Inbound: Array<PolicyRule>;
    /**
      * 出站规则
      */
    Outbound: Array<PolicyRule>;
    /**
      * 安全组ID
      */
    SecurityGroupId: string;
    /**
      * 安全组名称
      */
    SecurityGroupName: string;
    /**
      * 安全组备注
      */
    SecurityGroupDescription: string;
}
/**
 * IsolateDBInstances返回参数结构体
 */
export interface IsolateDBInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenDBExtranetAccess返回参数结构体
 */
export interface OpenDBExtranetAccessResponse {
    /**
      * 异步任务流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceRequest {
    /**
      * 实例的磁盘大小，单位GB
      */
    Storage: number;
    /**
      * 实例的内存大小，单位GB
      */
    Memory: number;
    /**
      * 实例ID，形如postgres-hez4fh0v
      */
    DBInstanceId: string;
    /**
      * 【废弃参数，不再生效】，实例计费类型。
      */
    InstanceChargeType?: string;
}
/**
 * IsolateDBInstances请求参数结构体
 */
export interface IsolateDBInstancesRequest {
    /**
      * 实例ID集合。注意：当前已不支持同时隔离多个实例，这里只能传入单个实例ID。
      */
    DBInstanceIdSet: Array<string>;
}
/**
 * ModifyDBInstanceName请求参数结构体
 */
export interface ModifyDBInstanceNameRequest {
    /**
      * 数据库实例ID，形如postgres-6fego161
      */
    DBInstanceId: string;
    /**
      * 新的数据库实例名字
      */
    InstanceName: string;
}
/**
 * KMS密钥信息
 */
export interface EncryptionKey {
    /**
      * KMS实例加密的KeyId。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyId: string;
    /**
      * KMS实例加密Key的别名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyAlias: string;
    /**
      * 实例加密密钥DEK的密文。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DEKCipherTextBlob: string;
    /**
      * 密钥是否启用，1-启用， 0-未启用。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsEnabled: number;
    /**
      * KMS密钥所在地域。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyRegion: string;
    /**
      * DEK密钥创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
}
/**
 * UpgradeDBInstanceKernelVersion返回参数结构体
 */
export interface UpgradeDBInstanceKernelVersionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceRenewDBInstance返回参数结构体
 */
export interface InquiryPriceRenewDBInstanceResponse {
    /**
      * 刊例价，单位为分。如24650表示246.5元
      */
    OriginalPrice: number;
    /**
      * 折后实际付款金额，单位为分。如24650表示246.5元
      */
    Price: number;
    /**
      * 币种。例如，CNY：人民币。
      */
    Currency: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSlowQueryAnalysis请求参数结构体
 */
export interface DescribeSlowQueryAnalysisRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。
      */
    StartTime: string;
    /**
      * 查询结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。
      */
    EndTime: string;
    /**
      * 根据数据库名进行筛选，可以为空。
      */
    DatabaseName?: string;
    /**
      * 排序维度。 可选参数，取值范围[CallNum,CostTime,AvgCostTime]。默认CallNum。
      */
    OrderBy?: string;
    /**
      * 排序类型。升序asc、降序desc。默认desc。
      */
    OrderByType?: string;
    /**
      * 分页大小。取值范围[1,100]。默认50。
      */
    Limit?: number;
    /**
      * 分页偏移。取值范围[0,INF)。默认0。
      */
    Offset?: number;
}
/**
 * 错误日志详情
 */
export interface ErrLogDetail {
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 数据库名字
      */
    Database: string;
    /**
      * 错误发生时间
      */
    ErrTime: string;
    /**
      * 错误消息
      */
    ErrMsg: string;
}
/**
 * DescribeServerlessDBInstances返回参数结构体
 */
export interface DescribeServerlessDBInstancesResponse {
    /**
      * 查询结果数
      */
    TotalCount: number;
    /**
      * 查询结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceSet: Array<ServerlessDBInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupOverview返回参数结构体
 */
export interface DescribeBackupOverviewResponse {
    /**
      * 总免费空间大小，单位byte。
      */
    TotalFreeSize: number;
    /**
      * 已使用免费空间大小，单位byte。
      */
    UsedFreeSize: number;
    /**
      * 已使用收费空间大小，单位byte。
      */
    UsedBillingSize: number;
    /**
      * 日志备份数量。
      */
    LogBackupCount: number;
    /**
      * 日志备份大小，单位byte。
      */
    LogBackupSize: number;
    /**
      * 手动创建的基础备份数量。
      */
    ManualBaseBackupCount: number;
    /**
      * 手动创建的基础备份大小，单位byte。
      */
    ManualBaseBackupSize: number;
    /**
      * 自动创建的基础备份数量。
      */
    AutoBaseBackupCount: number;
    /**
      * 自动创建的基础备份大小，单位byte。
      */
    AutoBaseBackupSize: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeParameterTemplates请求参数结构体
 */
export interface DescribeParameterTemplatesRequest {
    /**
      * 过滤条件，目前支持的过滤条件有：TemplateName, TemplateId，DBMajorVersion，DBEngine
      */
    Filters?: Array<Filter>;
    /**
      * 每页显示数量，[0，100]，默认 20
      */
    Limit?: number;
    /**
      * 数据偏移量
      */
    Offset?: number;
    /**
      * 排序指标，枚举值，支持：CreateTime，TemplateName，DBMajorVersion
      */
    OrderBy?: string;
    /**
      * 排序方式，枚举值，支持：asc（升序） ，desc（降序）
      */
    OrderByType?: string;
}
/**
 * InitDBInstances请求参数结构体
 */
export interface InitDBInstancesRequest {
    /**
      * 实例ID集合。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 实例根账号用户名。
      */
    AdminName: string;
    /**
      * 实例根账号用户名对应的密码。
      */
    AdminPassword: string;
    /**
      * 实例字符集，目前只支持：UTF8、LATIN1。
      */
    Charset: string;
}
/**
 * DescribeClasses返回参数结构体
 */
export interface DescribeClassesResponse {
    /**
      * 数据库规格列表
      */
    ClassInfoSet?: Array<ClassInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDBInstanceNetworkAccess请求参数结构体
 */
export interface DeleteDBInstanceNetworkAccessRequest {
    /**
      * 实例ID，形如：postgres-6bwgamo3。
      */
    DBInstanceId: string;
    /**
      * 私有网络统一 ID，若是基础网络则传"0"。
      */
    VpcId: string;
    /**
      * 子网ID，若是基础网络则传"0"。
      */
    SubnetId: string;
    /**
      * 目标VIP地址。
      */
    Vip: string;
}
/**
 * ModifyDBInstanceDeployment返回参数结构体
 */
export interface ModifyDBInstanceDeploymentResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述实例的详细信息
 */
export interface DBInstance {
    /**
      * 实例所属地域，如: ap-guangzhou，对应RegionSet的Region字段
      */
    Region: string;
    /**
      * 实例所属可用区， 如：ap-guangzhou-3，对应ZoneSet的Zone字段
      */
    Zone: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 子网ID
      */
    SubnetId: string;
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 实例名称
      */
    DBInstanceName: string;
    /**
      * 实例状态，分别为：applying（申请中）、init(待初始化)、initing(初始化中)、running(运行中)、limited run（受限运行）、isolated（已隔离）、recycling（回收中）、recycled（已回收）、job running（任务执行中）、offline（下线）、migrating（迁移中）、expanding（扩容中）、waitSwitch（等待切换）、switching（切换中）、readonly（只读）、restarting（重启中）、network changing（网络变更中）、upgrading（内核版本升级中）
      */
    DBInstanceStatus: string;
    /**
      * 实例分配的内存大小，单位：GB
      */
    DBInstanceMemory: number;
    /**
      * 实例分配的存储空间大小，单位：GB
      */
    DBInstanceStorage: number;
    /**
      * 实例分配的CPU数量，单位：个
      */
    DBInstanceCpu: number;
    /**
      * 售卖规格ID
      */
    DBInstanceClass: string;
    /**
      * 实例类型，类型有：1、primary（主实例）；2、readonly（只读实例）；3、guard（灾备实例）；4、temp（临时实例）
      */
    DBInstanceType: string;
    /**
      * 实例版本，目前只支持standard（双机高可用版, 一主一从）
      */
    DBInstanceVersion: string;
    /**
      * 实例DB字符集
      */
    DBCharset: string;
    /**
      * PostgreSQL版本
      */
    DBVersion: string;
    /**
      * 实例创建时间
      */
    CreateTime: string;
    /**
      * 实例执行最后一次更新的时间
      */
    UpdateTime: string;
    /**
      * 实例到期时间
      */
    ExpireTime: string;
    /**
      * 实例隔离时间
      */
    IsolatedTime: string;
    /**
      * 计费模式，1、prepaid（包年包月,预付费）；2、postpaid（按量计费，后付费）
      */
    PayType: string;
    /**
      * 是否自动续费，1：自动续费，0：不自动续费
      */
    AutoRenew: number;
    /**
      * 实例网络连接信息
      */
    DBInstanceNetInfo: Array<DBInstanceNetInfo>;
    /**
      * 机器类型
      */
    Type: string;
    /**
      * 用户的AppId
      */
    AppId: number;
    /**
      * 实例的Uid
      */
    Uid: number;
    /**
      * 实例是否支持Ipv6，1：支持，0：不支持
      */
    SupportIpv6: number;
    /**
      * 实例绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagList: Array<Tag>;
    /**
      * 主实例信息，仅在实例为只读实例时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterDBInstanceId: string;
    /**
      * 只读实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnlyInstanceNum: number;
    /**
      * 只读实例在只读组中的状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusInReadonlyGroup: string;
    /**
      * 下线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OfflineTime: string;
    /**
      * 数据库内核版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBKernelVersion: string;
    /**
      * 实例网络信息列表（此字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkAccessList: Array<NetworkAccess>;
    /**
      * PostgreSQL主要版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBMajorVersion: string;
    /**
      * 实例的节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBNodeSet: Array<DBNode>;
    /**
      * 实例是否支持TDE数据加密  0：不支持，1：支持
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsSupportTDE: number;
    /**
      * 数据库引擎，支持：
1、postgresql（云数据库PostgreSQL）；
2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBEngine: string;
    /**
      * 数据库引擎的配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBEngineConfig: string;
}
/**
 * DeleteParameterTemplate返回参数结构体
 */
export interface DeleteParameterTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteReadOnlyGroup请求参数结构体
 */
export interface DeleteReadOnlyGroupRequest {
    /**
      * 待删除只读组ID
      */
    ReadOnlyGroupId: string;
}
/**
 * DescribeDBBackups请求参数结构体
 */
export interface DescribeDBBackupsRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv。
      */
    DBInstanceId: string;
    /**
      * 备份方式（1-全量）。目前只支持全量，取值为1。
      */
    Type: number;
    /**
      * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-06-10 17:06:38
      */
    EndTime: string;
    /**
      * 备份列表分页返回，每页返回数量，默认为 20，最小为1，最大值为 100。（当该参数不传或者传0时按默认值处理）
      */
    Limit?: number;
    /**
      * 返回结果中的第几页，从第0页开始。默认为0。
      */
    Offset?: number;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称等
* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
    /**
      * 过滤键的名称。
      */
    Name?: string;
    /**
      * 一个或者多个过滤值。
      */
    Values?: Array<string>;
}
/**
 * DescribeReadOnlyGroups请求参数结构体
 */
export interface DescribeReadOnlyGroupsRequest {
    /**
      * 过滤条件，必须传入主实例ID进行过滤，否则返回值将为空，过滤参数为：db-master-instance-id
      */
    Filters?: Array<Filter>;
    /**
      * 查询每一页的条数，默认为10
      */
    PageSize?: number;
    /**
      * 查询的页码，默认为1
      */
    PageNumber?: number;
    /**
      * 查询排序依据，目前支持:ROGroupId,CreateTime,Name
      */
    OrderBy?: string;
    /**
      * 查询排序依据类型，目前支持:desc,asc
      */
    OrderByType?: string;
}
/**
 * DescribeBackupDownloadURL请求参数结构体
 */
export interface DescribeBackupDownloadURLRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 备份类型，目前支持：LogBackup，BaseBackup。
      */
    BackupType: string;
    /**
      * 备份的唯一ID。
      */
    BackupId: string;
    /**
      * 链接的有效时间，默认为12小时。
      */
    URLExpireTime?: number;
    /**
      * 备份下载限制
      */
    BackupDownloadRestriction?: BackupDownloadRestriction;
}
/**
 * ModifyDBInstanceParameters返回参数结构体
 */
export interface ModifyDBInstanceParametersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBVersions返回参数结构体
 */
export interface DescribeDBVersionsResponse {
    /**
      * 数据库版本号信息列表
      */
    VersionSet?: Array<Version>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢查询详情
 */
export interface SlowlogDetail {
    /**
      * 花费总时间
      */
    TotalTime: number;
    /**
      * 调用总次数
      */
    TotalCalls: number;
    /**
      * 脱敏后的慢SQL列表
      */
    NormalQueries: Array<NormalQueryItem>;
}
/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述实例节点信息，包括节点类型、节点所在可用区。
 */
export interface DBNode {
    /**
      * 节点类型，值可以为：
Primary，代表主节点；
Standby，代表备节点。
      */
    Role: string;
    /**
      * 节点所在可用区，例如 ap-guangzhou-1。
      */
    Zone: string;
}
/**
 * ModifyDBInstanceName返回参数结构体
 */
export interface ModifyDBInstanceNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloseDBExtranetAccess返回参数结构体
 */
export interface CloseDBExtranetAccessResponse {
    /**
      * 异步任务流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupDownloadRestriction返回参数结构体
 */
export interface DescribeBackupDownloadRestrictionResponse {
    /**
      * 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。
      */
    RestrictionType?: string;
    /**
      * vpc限制效力，ALLOW 允许；DENY 拒绝。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcRestrictionEffect?: string;
    /**
      * 允许或拒绝下载备份文件的vpcId列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcIdSet?: Array<string>;
    /**
      * ip限制效力，ALLOW 允许；DENY 拒绝。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpRestrictionEffect?: string;
    /**
      * 允许或拒绝下载备份文件的ip列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateReadOnlyDBInstance请求参数结构体
 */
export interface CreateReadOnlyDBInstanceRequest {
    /**
      * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 一次性购买的实例数量。取值1-100
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 只读实例的主实例ID
      */
    MasterDBInstanceId: string;
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * 【废弃】不再需要指定，内核版本号与主实例保持一致
      */
    DBVersion?: string;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。如果主实例为后付费，只读实例必须也为后付费。
      */
    InstanceChargeType?: string;
    /**
      * 是否自动使用代金券。1（是），0（否），默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券。
      */
    VoucherIds?: Array<string>;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费；
      */
    AutoRenewFlag?: number;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 私有网络子网ID。
      */
    SubnetId?: string;
    /**
      * 优惠活动ID
      */
    ActivityId?: number;
    /**
      * 实例名(后续支持)
      */
    Name?: string;
    /**
      * 是否需要支持Ipv6，1：是，0：否
      */
    NeedSupportIpv6?: number;
    /**
      * 只读组ID。
      */
    ReadOnlyGroupId?: string;
    /**
      * 实例需要绑定的Tag信息，默认为空（该类型为Tag数组类型）
      */
    TagList?: Tag;
    /**
      * 安全组id
      */
    SecurityGroupIds?: Array<string>;
}
/**
 * DescribeCloneDBInstanceSpec返回参数结构体
 */
export interface DescribeCloneDBInstanceSpecResponse {
    /**
      * 可购买的最小规格码。
      */
    MinSpecCode: string;
    /**
      * 可购买的最小磁盘容量，单位GB。
      */
    MinStorage: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
    /**
      * 返回的结果数量。
      */
    TotalCount: number;
    /**
      * 可用区信息集合。
      */
    ZoneSet: Array<ZoneInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateServerlessDBInstance返回参数结构体
 */
export interface CreateServerlessDBInstanceResponse {
    /**
      * 实例ID，该ID全局唯一，如：postgres-xxxxx
      */
    DBInstanceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
    /**
      * 数据库信息
      */
    Items: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProductConfig返回参数结构体
 */
export interface DescribeProductConfigResponse {
    /**
      * 售卖规格列表。
      */
    SpecInfoList: Array<SpecInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeOrders请求参数结构体
 */
export interface DescribeOrdersRequest {
    /**
      * 订单名集合
      */
    DealNames: Array<string>;
}
/**
 * CloseDBExtranetAccess请求参数结构体
 */
export interface CloseDBExtranetAccessRequest {
    /**
      * 实例ID，形如postgres-6r233v55
      */
    DBInstanceId: string;
    /**
      * 是否关闭Ipv6外网，1：是，0：否
      */
    IsIpv6?: number;
}
/**
 * ModifyParameterTemplate返回参数结构体
 */
export interface ModifyParameterTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEncryptionKeys请求参数结构体
 */
export interface DescribeEncryptionKeysRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
}
/**
 * 数据库日志备份信息
 */
export interface LogBackup {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 备份文件唯一标识。
      */
    Id: string;
    /**
      * 备份文件名称。
      */
    Name: string;
    /**
      * 备份方式：物理备份、逻辑备份。
      */
    BackupMethod: string;
    /**
      * 备份模式：自动备份、手动备份。
      */
    BackupMode: string;
    /**
      * 备份任务状态。
      */
    State: string;
    /**
      * 备份集大小，单位bytes。
      */
    Size: number;
    /**
      * 备份的开始时间。
      */
    StartTime: string;
    /**
      * 备份的结束时间。
      */
    FinishTime: string;
    /**
      * 备份的过期时间。
      */
    ExpireTime: string;
}
/**
 * RebalanceReadOnlyGroup请求参数结构体
 */
export interface RebalanceReadOnlyGroupRequest {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
}
/**
 * ModifyBackupPlan返回参数结构体
 */
export interface ModifyBackupPlanResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyDBInstance请求参数结构体
 */
export interface DestroyDBInstanceRequest {
    /**
      * 待下线实例ID
      */
    DBInstanceId: string;
}
/**
 * CreateServerlessDBInstance请求参数结构体
 */
export interface CreateServerlessDBInstanceRequest {
    /**
      * 可用区ID。公测阶段仅支持ap-shanghai-2、ap-beijing-1,ap-guangzhou-2.
      */
    Zone: string;
    /**
      * DB实例名称，同一个账号下该值必须唯一。
      */
    DBInstanceName: string;
    /**
      * PostgreSQL内核版本，目前只支持：10.4。
      */
    DBVersion: string;
    /**
      * PostgreSQL数据库字符集，目前支持UTF8。
      */
    DBCharset: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 私有网络子网ID。
      */
    SubnetId?: string;
    /**
      * 实例需要绑定的标签数组信息
      */
    TagList?: Array<Tag>;
}
/**
 * InquiryPriceRenewDBInstance请求参数结构体
 */
export interface InquiryPriceRenewDBInstanceRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 续费周期，按月计算，最大不超过48
      */
    Period: number;
}
/**
 * CreateReadOnlyGroup返回参数结构体
 */
export interface CreateReadOnlyGroupResponse {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDBInstanceNetworkAccess返回参数结构体
 */
export interface DeleteDBInstanceNetworkAccessResponse {
    /**
      * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteServerlessDBInstance请求参数结构体
 */
export interface DeleteServerlessDBInstanceRequest {
    /**
      * DB实例名称，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
      */
    DBInstanceName?: string;
    /**
      * DB实例ID，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
      */
    DBInstanceId?: string;
}
/**
 * ModifyReadOnlyGroupConfig返回参数结构体
 */
export interface ModifyReadOnlyGroupConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 账户信息
 */
export interface AccountInfo {
    /**
      * 实例ID，形如postgres-lnp6j617
      */
    DBInstanceId: string;
    /**
      * 帐号
      */
    UserName: string;
    /**
      * 帐号备注
      */
    Remark: string;
    /**
      * 帐号状态。 1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中
      */
    Status: number;
    /**
      * 帐号创建时间
      */
    CreateTime: string;
    /**
      * 帐号最后一次更新时间
      */
    UpdateTime: string;
}
/**
 * ModifyAccountRemark请求参数结构体
 */
export interface ModifyAccountRemarkRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv
      */
    DBInstanceId: string;
    /**
      * 实例用户名
      */
    UserName: string;
    /**
      * 用户UserName对应的新备注
      */
    Remark: string;
}
/**
 * DescribeParameterTemplateAttributes请求参数结构体
 */
export interface DescribeParameterTemplateAttributesRequest {
    /**
      * 参数模板ID
      */
    TemplateId: string;
}
/**
 * DescribeDBErrlogs返回参数结构体
 */
export interface DescribeDBErrlogsResponse {
    /**
      * 本次调用返回了多少条数据
      */
    TotalCount: number;
    /**
      * 错误日志列表
      */
    Details: Array<ErrLogDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBackupPlan请求参数结构体
 */
export interface ModifyBackupPlanRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 实例最早开始备份时间
      */
    MinBackupStartTime?: string;
    /**
      * 实例最晚开始备份时间
      */
    MaxBackupStartTime?: string;
    /**
      * 实例备份保留时长，取值范围为3-7，单位是天
      */
    BaseBackupRetentionPeriod?: number;
    /**
      * 实例备份周期，按照星期维度，格式为小写星期英文单词
      */
    BackupPeriod?: Array<string>;
}
/**
 * DeleteBaseBackup请求参数结构体
 */
export interface DeleteBaseBackupRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 基础备份ID。
      */
    BaseBackupId: string;
}
/**
 * 批量修改参数
 */
export interface ParamEntry {
    /**
      * 参数名
      */
    Name: string;
    /**
      * 修改参数值。入参均以字符串形式传递，例如：小数”0.1“、整数”1000“、枚举”replica“
      */
    ExpectedValue: string;
}
/**
 * InquiryPriceUpgradeDBInstance返回参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceResponse {
    /**
      * 刊例价费用
      */
    OriginalPrice: number;
    /**
      * 折后实际付款金额
      */
    Price: number;
    /**
      * 币种。例如，CNY：人民币。
      */
    Currency: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisIsolateDBInstances返回参数结构体
 */
export interface DisIsolateDBInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateParameterTemplate请求参数结构体
 */
export interface CreateParameterTemplateRequest {
    /**
      * 模板名称，长度为1～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@
      */
    TemplateName: string;
    /**
      * 数据库大版本号，例如：11，12，13
      */
    DBMajorVersion: string;
    /**
      * 数据库引擎，例如：postgresql，mssql_compatible
      */
    DBEngine: string;
    /**
      * 参数模板描述，长度为0～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@
      */
    TemplateDescription?: string;
}
/**
 * ModifySwitchTimePeriod请求参数结构体
 */
export interface ModifySwitchTimePeriodRequest {
    /**
      * 处于等待切换状态中的实例ID
      */
    DBInstanceId: string;
    /**
      * 入参取值为 0 ，代表立即切换。
      */
    SwitchTag: number;
}
/**
 * DescribeSlowQueryList请求参数结构体
 */
export interface DescribeSlowQueryListRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。
      */
    StartTime: string;
    /**
      * 查询结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。
      */
    EndTime: string;
    /**
      * 根据数据库名进行筛选，可以为空。
      */
    DatabaseName?: string;
    /**
      * 排序类型。升序asc、降序desc。默认为desc。
      */
    OrderByType?: string;
    /**
      * 排序维度。 可选参数，取值范围[SessionStartTime,Duration]，默认为SessionStartTime。
      */
    OrderBy?: string;
    /**
      * 分页大小。取值范围[1,100],默认为20。
      */
    Limit?: number;
    /**
      * 分页偏移。取值范围[0,INF)，默认为0。
      */
    Offset?: number;
}
/**
 * DescribeDBInstanceParameters返回参数结构体
 */
export interface DescribeDBInstanceParametersResponse {
    /**
      * 参数列表总数
      */
    TotalCount: number;
    /**
      * 参数列表返回详情
      */
    Detail: Array<ParamInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述地域的编码和状态等信息
 */
export interface RegionInfo {
    /**
      * 该地域对应的英文名称
      */
    Region: string;
    /**
      * 该地域对应的中文名称
      */
    RegionName: string;
    /**
      * 该地域对应的数字编号
      */
    RegionId: number;
    /**
      * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
      */
    RegionState: string;
    /**
      * 该地域是否支持国际站售卖，0：不支持，1：支持
注意：此字段可能返回 null，表示取不到有效值。
      */
    SupportInternational: number;
}
/**
 * DisIsolateDBInstances请求参数结构体
 */
export interface DisIsolateDBInstancesRequest {
    /**
      * 资源ID列表。注意：当前已不支持同时解隔离多个实例，这里只能传入单个实例ID。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 包年包月实例解隔离时购买时常 以月为单位
      */
    Period?: number;
    /**
      * 是否使用代金券：true-使用,false-不使用，默认不使用
      */
    AutoVoucher?: boolean;
    /**
      * 代金券id列表
      */
    VoucherIds?: Array<string>;
}
/**
 * RestartDBInstance返回参数结构体
 */
export interface RestartDBInstanceResponse {
    /**
      * 异步流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBaseBackupExpireTime请求参数结构体
 */
export interface ModifyBaseBackupExpireTimeRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 基础备份ID。
      */
    BaseBackupId: string;
    /**
      * 新过期时间。
      */
    NewExpireTime: string;
}
/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
    /**
      * 查询到的实例数量。
      */
    TotalCount: number;
    /**
      * 实例详细信息集合。
      */
    DBInstanceSet: Array<DBInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBInstanceSecurityGroups请求参数结构体
 */
export interface DescribeDBInstanceSecurityGroupsRequest {
    /**
      * 实例ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果都传，忽略ReadOnlyGroupId
      */
    DBInstanceId?: string;
    /**
      * 只读组ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果要查询只读组关联的安全组，只传ReadOnlyGroupId
      */
    ReadOnlyGroupId?: string;
}
/**
 * DescribeBackupPlans请求参数结构体
 */
export interface DescribeBackupPlansRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
}
/**
 * RebalanceReadOnlyGroup返回参数结构体
 */
export interface RebalanceReadOnlyGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv
      */
    DBInstanceId: string;
    /**
      * 实例账户名
      */
    UserName: string;
    /**
      * UserName账户对应的新密码
      */
    Password: string;
}
/**
 * DescribeSlowQueryAnalysis返回参数结构体
 */
export interface DescribeSlowQueryAnalysisResponse {
    /**
      * 查询总条数。
      */
    TotalCount: number;
    /**
      * 慢SQL统计分析接口返回详情。
      */
    Detail: Detail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceParameters请求参数结构体
 */
export interface ModifyDBInstanceParametersRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 待修改参数及期望值
      */
    ParamList: Array<ParamEntry>;
}
/**
 * 慢SQL查询接口返回 慢SQL列表详情
 */
export interface RawSlowQuery {
    /**
      * 慢SQL 语句
      */
    RawQuery: string;
    /**
      * 慢SQL 查询的数据库
      */
    DatabaseName: string;
    /**
      * 慢SQL执行 耗时
      */
    Duration: number;
    /**
      * 执行慢SQL的客户端
      */
    ClientAddr: string;
    /**
      * 执行慢SQL的用户名
      */
    UserName: string;
    /**
      * 慢SQL执行的开始时间
      */
    SessionStartTime: string;
}
/**
 * CreateReadOnlyGroupNetworkAccess返回参数结构体
 */
export interface CreateReadOnlyGroupNetworkAccessResponse {
    /**
      * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
    /**
      * 本次调用接口共返回了多少条数据。
      */
    TotalCount: number;
    /**
      * 帐号列表详细信息。
      */
    Details: Array<AccountInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceChargeType请求参数结构体
 */
export interface ModifyDBInstanceChargeTypeRequest {
    /**
      * 实例ID，形如postgres-6fego161
      */
    DBInstanceId: string;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。默认值：PREPAID。
      */
    InstanceChargeType: string;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费。
      */
    AutoRenewFlag?: number;
    /**
      * 是否自动使用代金券,1是,0否，默认不使用
      */
    AutoVoucher?: number;
}
/**
 * DescribeParameterTemplateAttributes返回参数结构体
 */
export interface DescribeParameterTemplateAttributesResponse {
    /**
      * 参数模板ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId: string;
    /**
      * 参数模板包含的参数个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 参数模板包含的参数信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParamInfoSet: Array<ParamInfo>;
    /**
      * 参数模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateName: string;
    /**
      * 参数模板适用的数据库版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBMajorVersion: string;
    /**
      * 参数模板适用的数据库引擎
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBEngine: string;
    /**
      * 参数模板描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateDescription: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpgradeDBInstance返回参数结构体
 */
export interface UpgradeDBInstanceResponse {
    /**
      * 交易名字。
      */
    DealName: string;
    /**
      * 冻结流水号
      */
    BillId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBVersions请求参数结构体
 */
export declare type DescribeDBVersionsRequest = null;
/**
 * ModifyDBInstancesProject请求参数结构体
 */
export interface ModifyDBInstancesProjectRequest {
    /**
      * 实例ID集合。注意：当前已不支持同时操作多个实例，这里只能传入单个实例ID。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 所属新项目的ID
      */
    ProjectId: string;
}
/**
 * DescribeDBSlowlogs请求参数结构体
 */
export interface DescribeDBSlowlogsRequest {
    /**
      * 实例ID，形如postgres-lnp6j617
      */
    DBInstanceId: string;
    /**
      * 查询起始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-06-10 17:06:38
      */
    EndTime: string;
    /**
      * 数据库名字
      */
    DatabaseName?: string;
    /**
      * 按照何种指标排序，取值为sum_calls或者sum_cost_time。sum_calls-总调用次数；sum_cost_time-总的花费时间
      */
    OrderBy?: string;
    /**
      * 排序规则。desc-降序；asc-升序
      */
    OrderByType?: string;
    /**
      * 分页返回结果，每页最大返回数量，取值为1-100，默认20
      */
    Limit?: number;
    /**
      * 分页返回结果，返回结果的第几页，从0开始计数
      */
    Offset?: number;
}
/**
 * DestroyDBInstance返回参数结构体
 */
export interface DestroyDBInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBInstanceAttribute返回参数结构体
 */
export interface DescribeDBInstanceAttributeResponse {
    /**
      * 实例详细信息。
      */
    DBInstance: DBInstance;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteLogBackup请求参数结构体
 */
export interface DeleteLogBackupRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 日志备份ID。
      */
    LogBackupId: string;
}
/**
 * DeleteBaseBackup返回参数结构体
 */
export interface DeleteBaseBackupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组规则信息
 */
export interface PolicyRule {
    /**
      * 策略，ACCEPT 或者 DROP
      */
    Action: string;
    /**
      * 来源或目的 IP 或 IP 段，例如172.16.0.0/12
      */
    CidrIp: string;
    /**
      * 端口
      */
    PortRange: string;
    /**
      * 网络协议，支持 UDP、TCP 等
      */
    IpProtocol: string;
    /**
      * 规则描述
      */
    Description: string;
}
/**
 * ModifyDBInstanceSpec返回参数结构体
 */
export interface ModifyDBInstanceSpecResponse {
    /**
      * 订单号。
      */
    DealName: string;
    /**
      * 冻结流水号。
      */
    BillId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBaseBackups返回参数结构体
 */
export interface DescribeBaseBackupsResponse {
    /**
      * 查询到的基础备份数量。
      */
    TotalCount: number;
    /**
      * 基础备份详细信息列表。
      */
    BaseBackupSet: Array<BaseBackup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBXlogs返回参数结构体
 */
export interface DescribeDBXlogsResponse {
    /**
      * 表示此次返回结果有多少条数据。
      */
    TotalCount: number;
    /**
      * Xlog列表
      */
    XlogList: Array<Xlog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpgradeDBInstanceKernelVersion请求参数结构体
 */
export interface UpgradeDBInstanceKernelVersionRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 升级的目标内核版本号。可以通过接口DescribeDBVersions的返回字段AvailableUpgradeTarget获取。
      */
    TargetDBKernelVersion: string;
    /**
      * 指定实例升级内核版本号完成后的切换时间。可选值，
0：立即切换（默认值）。
1：指定时间切换。
2：维护时间窗口内切换。
      */
    SwitchTag?: number;
    /**
      * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
      */
    SwitchStartTime?: string;
    /**
      * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。SwitchStartTime和SwitchEndTime时间窗口不能小于30分钟。
      */
    SwitchEndTime?: string;
    /**
      * 是否对本次升级实例内核版本号操作执行预检查。可选值，
true：执行预检查操作，不升级内核版本号。检查项目包含请求参数、内核版本号兼容性、实例参数等。
false：发送正常请求（默认值），通过检查后直接升级内核版本号。
      */
    DryRun?: boolean;
}
/**
 * DescribeBaseBackups请求参数结构体
 */
export interface DescribeBaseBackupsRequest {
    /**
      * 备份的最小结束时间，形如2018-01-01 00:00:00。默认为7天前。
      */
    MinFinishTime?: string;
    /**
      * 备份的最大结束时间，形如2018-01-01 00:00:00。默认为当前时间。
      */
    MaxFinishTime?: string;
    /**
      * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string。
db-instance-name：按照实例名过滤，类型为string。
db-instance-ip：按照实例私有网络IP地址过滤，类型为string。
      */
    Filters?: Array<Filter>;
    /**
      * 每页显示数量，取值范围为1-100，默认为返回10条。
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 排序字段，支持StartTime,FinishTime,Size。
      */
    OrderBy?: string;
    /**
      * 排序方式，包括升序：asc，降序：desc。
      */
    OrderByType?: string;
}
/**
 * DescribeEncryptionKeys返回参数结构体
 */
export interface DescribeEncryptionKeysResponse {
    /**
      * 实例密钥信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EncryptionKeys: Array<EncryptionKey>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBSlowlogs返回参数结构体
 */
export interface DescribeDBSlowlogsResponse {
    /**
      * 本次返回多少条数据
      */
    TotalCount: number;
    /**
      * 慢查询日志详情
      */
    Detail: SlowlogDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDBInstances返回参数结构体
 */
export interface CreateDBInstancesResponse {
    /**
      * 订单号列表。每个实例对应一个订单号。
      */
    DealNames: Array<string>;
    /**
      * 冻结流水号
      */
    BillId: string;
    /**
      * 创建成功的实例ID集合，只在后付费情景下有返回值
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceChargeType返回参数结构体
 */
export interface ModifyDBInstanceChargeTypeResponse {
    /**
      * 订单名
      */
    DealName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
