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

/**
 * CreateDBInstances请求参数结构体
 */
export interface CreateDBInstancesRequest {
  /**
   * 售卖规格ID。该参数可以通过调用DescribeClasses的返回值中的SpecCode字段来获取。
   */
  SpecCode: string
  /**
   * 实例容量大小，单位：GB。
   */
  Storage: number
  /**
   * 一次性购买的实例数量。取值1-100
   */
  InstanceCount: number
  /**
   * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
   */
  Period: number
  /**
   * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
   */
  Zone: string
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * PostgreSQL社区大版本+小版本号。
一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新小版本号。
   */
  DBVersion?: string
  /**
   * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。默认值：PREPAID。
   */
  InstanceChargeType?: string
  /**
   * 是否自动使用代金券。1（是），0（否），默认不使用。
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表，目前仅支持指定一张代金券。
   */
  VoucherIds?: Array<string>
  /**
   * 私有网络ID。
   */
  VpcId?: string
  /**
   * 私有网络子网ID。
   */
  SubnetId?: string
  /**
   * 续费标记：0-正常续费（默认）；1-自动续费；
   */
  AutoRenewFlag?: number
  /**
   * 活动ID
   */
  ActivityId?: number
  /**
   * 实例名(后续支持)
   */
  Name?: string
  /**
   * 是否需要支持Ipv6，1：是，0：否
   */
  NeedSupportIpv6?: number
  /**
   * 实例需要绑定的Tag信息，默认为空
   */
  TagList?: Array<Tag>
  /**
   * 安全组id
   */
  SecurityGroupIds?: Array<string>
  /**
   * PostgreSQL大版本号（该参数当前必传），版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。目前支持10，11，12，13，14，15这几个大版本，详情见[内核版本概述](https://cloud.tencent.com/document/product/409/67018)。
输入该参数时，会基于此大版本号创建对应的最新小版本的最新内核版本号实例。
   */
  DBMajorVersion?: string
  /**
   * PostgreSQL内核版本号。
一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新内核版本号。
   */
  DBKernelVersion?: string
}

/**
 * 任务的详情信息
 */
export interface TaskDetail {
  /**
   * 当前执行的子任务步骤名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentStep?: string
  /**
   * 当前任务所拥有的子步骤描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllSteps?: string
  /**
   * 任务的输入参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Input?: string
  /**
   * 任务的输出参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: string
  /**
   * 指定实例配置完成变更后的切换时间，默认值：0
0:   此任务不需要切换
1：立即切换
2：指定时间切换
3：维护时间窗口内切换。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchTag?: number
  /**
   * 指定的切换时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchTime?: string
  /**
   * 任务的提示信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * SetAutoRenewFlag请求参数结构体
 */
export interface SetAutoRenewFlagRequest {
  /**
   * 实例ID集合。注意：当前已不支持同时操作多个实例，这里只能传入单个实例ID。
   */
  DBInstanceIdSet: Array<string>
  /**
   * 续费标记。0-正常续费；1-自动续费；2-到期不续费
   */
  AutoRenewFlag: number
}

/**
 * DeleteBackupPlan返回参数结构体
 */
export interface DeleteBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountPrivileges返回参数结构体
 */
export interface DescribeAccountPrivilegesResponse {
  /**
   * 用户拥有数据库user_database的CREATE、CONNECT、TEMPORARY权限
   */
  PrivilegeSet?: Array<DatabasePrivilege>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：database-name：按照数据库名称过滤，类型为string。此处使用模糊匹配搜索符合条件的数据库。
   */
  Filters?: Array<Filter>
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 单次显示数量
   */
  Limit?: number
}

/**
 * DescribeDBXlogs请求参数结构体
 */
export interface DescribeDBXlogsRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv。
   */
  DBInstanceId: string
  /**
   * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
   */
  StartTime: string
  /**
   * 查询结束时间，形如2018-06-10 17:06:38
   */
  EndTime: string
  /**
   * 分页返回，表示返回第几页的条目。从第0页开始计数。
   */
  Offset?: number
  /**
   * 分页返回，表示每页有多少条目。取值为1-100。
   */
  Limit?: number
}

/**
 * CreateReadOnlyGroupNetworkAccess请求参数结构体
 */
export interface CreateReadOnlyGroupNetworkAccessRequest {
  /**
   * RO组ID，形如：pgro-4t9c6g7k。
   */
  ReadOnlyGroupId: string
  /**
   * 私有网络统一 ID。
   */
  VpcId: string
  /**
   * 子网ID。
   */
  SubnetId: string
  /**
   * 是否指定分配vip true-指定分配  false-自动分配。
   */
  IsAssignVip: boolean
  /**
   * 目标VIP地址。
   */
  Vip?: string
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 实例ID，形如postgres-6fego161
   */
  DBInstanceId: string
  /**
   * 分页返回，每页最大返回数目，默认20，取值范围为1-100
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 返回数据按照创建时间或者用户名排序。取值支持createTime、name、updateTime。createTime-按照创建时间排序；name-按照用户名排序; updateTime-按照更新时间排序。
   */
  OrderBy?: string
  /**
   * 返回结果是升序还是降序。取值只能为desc或者asc。desc-降序；asc-升序
   */
  OrderByType?: string
}

/**
 * DeleteReadOnlyGroup返回参数结构体
 */
export interface DeleteReadOnlyGroupResponse {
  /**
   * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenDBExtranetAccess请求参数结构体
 */
export interface OpenDBExtranetAccessRequest {
  /**
   * 实例ID，形如postgres-hez4fh0v
   */
  DBInstanceId: string
  /**
   * 是否开通Ipv6外网，1：是，0：否
   */
  IsIpv6?: number
}

/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
  /**
   * 实例所属主可用区， 如：ap-guangzhou-3；若需要支持多可用区，在DBNodeSet.N字段中进行添加主可用区和备可用区信息；
可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。
   */
  Zone: string
  /**
   * 售卖规格码。该参数可以通过调用[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)的返回值中的SpecCode字段来获取。
   */
  SpecCode: string
  /**
   * 实例容量大小，单位：GB。
   */
  Storage: number
  /**
   * 购买实例数量，取值范围：[1-10]。一次性购买支持最大数量10个，若超过该数量，可进行多次调用进行购买。
   */
  InstanceCount: number
  /**
   * 购买时长，单位：月。
<li>预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36</li>
<li>后付费：只支持1</li>
   */
  Period: number
  /**
   * 实例字符集，目前只支持：
<li> UTF8</li>
<li> LATIN1</li>
   */
  Charset: string
  /**
   * 实例根账号用户名，具体规范如下：
<li>用户名需要1-16个字符，只能由字母、数字或下划线组成</li>
<li>不能为postgres</li>
<li>不能由数字和pg_开头</li>
<li>所有规则均不区分大小写</li>
   */
  AdminName: string
  /**
   * 实例根账号用户名对应的密码，长度8 ~ 32位，推荐使用12位以上的密码;不能以" / "开头;
必须包含以下四项，字符种类:
<li>小写字母： [a ~ z]</li>
<li>大写字母：[A ～ Z]</li>
<li>数字：0 - 9</li>
<li>特殊字符：()`~!@#$%^&*-+=_|{}[]:;'<>,.?/</li>
   */
  AdminPassword: string
  /**
   * PostgreSQL大版本号（该参数当前必传），版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。目前支持10，11，12，13，14，15这几个大版本，详情见[内核版本概述](https://cloud.tencent.com/document/product/409/67018)。
输入该参数时，会基于此大版本号创建对应的最新小版本的最新内核版本号实例。
   */
  DBMajorVersion?: string
  /**
   * PostgreSQL社区大版本+小版本号。
一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新小版本号。
   */
  DBVersion?: string
  /**
   * PostgreSQL内核版本号。
一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新内核版本号。
   */
  DBKernelVersion?: string
  /**
   * 实例计费类型，目前支持：
<li>PREPAID：预付费，即包年包月</li>
<li>POSTPAID_BY_HOUR：后付费，即按量计费</li>
默认值：PREPAID
   */
  InstanceChargeType?: string
  /**
   * 私有网络ID，形如vpc-xxxxxxxx（该参数当前必传）。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcEx](https://cloud.tencent.com/document/api/215/1372) ，从接口返回中的unVpcId字段获取。
   */
  VpcId?: string
  /**
   * 私有网络子网ID，形如subnet-xxxxxxxx（该参数当前必传）。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。
   */
  SubnetId?: string
  /**
   * 实例节点部署信息，支持多可用区部署时需要指定每个节点的部署可用区信息。
可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。
   */
  DBNodeSet?: Array<DBNode>
  /**
   * 续费标记：
<li>0：手动续费</li>
<li>1：自动续费</li>
默认值：0
   */
  AutoRenewFlag?: number
  /**
   * 是否自动使用代金券：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表，目前仅支持指定一张代金券。
   */
  VoucherIds?: Array<string>
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * 活动ID。
   */
  ActivityId?: number
  /**
   * 实例名称，仅支持长度小于60的中文/英文/数字/"_"/"-"，不指定实例名称则默认显示"未命名"。

   */
  Name?: string
  /**
   * 实例需要绑定的Tag信息，默认为空；可以通过调用 [DescribeTags](https://cloud.tencent.com/document/api/651/35316) 返回值中的 Tags 字段来获取。
   */
  TagList?: Array<Tag>
  /**
   * 实例所属安全组，该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。

   */
  SecurityGroupIds?: Array<string>
  /**
   * 是否需要支持数据透明加密：
<li>0：否</li>
<li>1：是</li>
默认值：0
参考[数据透明加密概述](https://cloud.tencent.com/document/product/409/71748)
   */
  NeedSupportTDE?: number
  /**
   * 自定义密钥的KeyId，若选择自定义密匙加密，则需要传入自定义密匙的KeyId，KeyId是CMK的唯一标识。
KeyId创建获取相关参考[开启透明数据加密](https://cloud.tencent.com/document/product/409/71749)
   */
  KMSKeyId?: string
  /**
   * 使用KMS服务的地域，KMSRegion为空默认使用本地域的KMS，本地域不支持的情况下需自选其他KMS支持的地域。
KMSRegion相关介绍参考[开启透明数据加密](https://cloud.tencent.com/document/product/409/71749)
   */
  KMSRegion?: string
  /**
   * 数据库引擎，支持：
<li>postgresql：云数据库PostgreSQL</li>
<li>mssql_compatible：MSSQL兼容-云数据库PostgreSQL</li>
默认值：postgresql
   */
  DBEngine?: string
  /**
   * 数据库引擎的配置信息，配置格式如下：
{"$key1":"$value1", "$key2":"$value2"}
各引擎支持如下：
mssql_compatible引擎：
<li>migrationMode：数据库模式，可选参数，可取值：single-db（单数据库模式），multi-db（多数据库模式）。默认为single-db。</li>
<li>defaultLocale：排序区域规则，可选参数，在初始化后不可修改，默认为en_US，可选值如下：
"af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN"。</li>
<li>serverCollationName：排序规则名称，可选参数，在初始化后不可修改，默认为sql_latin1_general_cp1_ci_as，可选值如下："bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as"。</li>
   */
  DBEngineConfig?: string
  /**
   * 主从同步方式，支持： 
<li>Semi-sync：半同步</li>
<li>Async：异步</li>
主实例默认值：Semi-sync
只读实例默认值：Async
   */
  SyncMode?: string
  /**
   * 是否需要支持Ipv6：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  NeedSupportIpv6?: number
}

/**
 * 描述一种规格的信息
 */
export interface SpecItemInfo {
  /**
   * 规格ID
   */
  SpecCode: string
  /**
   * PostgreSQL的版本编号
   */
  Version: string
  /**
   * 内核编号对应的完整版本名称
   */
  VersionName: string
  /**
   * CPU核数
   */
  Cpu: number
  /**
   * 内存大小，单位：MB
   */
  Memory: number
  /**
   * 该规格所支持最大存储容量，单位：GB
   */
  MaxStorage: number
  /**
   * 该规格所支持最小存储容量，单位：GB
   */
  MinStorage: number
  /**
   * 该规格的预估QPS
   */
  Qps: number
  /**
   * 【该字段废弃】
   */
  Pid: number
  /**
   * 机器类型
   */
  Type: string
  /**
   * PostgreSQL的主要版本编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  MajorVersion: string
  /**
   * PostgreSQL的内核版本编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  KernelVersion: string
  /**
   * 是否支持TDE数据加密功能，0-不支持，1-支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportTDE: number
}

/**
 * 参数模板的基本信息
 */
export interface ParameterTemplate {
  /**
   * 参数模板ID
   */
  TemplateId?: string
  /**
   * 参数模板名称
   */
  TemplateName?: string
  /**
   * 参数模板适用的数据库版本
   */
  DBMajorVersion?: string
  /**
   * 参数模板适用的数据库引擎
   */
  DBEngine?: string
  /**
   * 参数模板描述
   */
  TemplateDescription?: string
}

/**
 * CreateDBInstanceNetworkAccess返回参数结构体
 */
export interface CreateDBInstanceNetworkAccessResponse {
  /**
   * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAvailableRecoveryTime返回参数结构体
 */
export interface DescribeAvailableRecoveryTimeResponse {
  /**
   * 可恢复的最早时间，时区为东八区（UTC+8）。
   */
  RecoveryBeginTime?: string
  /**
   * 可恢复的最晚时间，时区为东八区（UTC+8）。
   */
  RecoveryEndTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBaseBackup请求参数结构体
 */
export interface CreateBaseBackupRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
}

/**
 * ModifyDBInstanceReadOnlyGroup返回参数结构体
 */
export interface ModifyDBInstanceReadOnlyGroupResponse {
  /**
   * 流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库实例规格
 */
export interface ClassInfo {
  /**
   * 规格ID
   */
  SpecCode?: string
  /**
   * CPU核数
   */
  CPU?: number
  /**
   * 内存大小，单位：MB
   */
  Memory?: number
  /**
   * 该规格所支持最大存储容量，单位：GB
   */
  MaxStorage?: number
  /**
   * 该规格所支持最小存储容量，单位：GB
   */
  MinStorage?: number
  /**
   * 该规格的预估QPS
   */
  QPS?: number
}

/**
 * DescribeDBInstanceParameters返回参数结构体
 */
export interface DescribeDBInstanceParametersResponse {
  /**
   * 参数列表总数
   */
  TotalCount?: number
  /**
   * 参数列表返回详情
   */
  Detail?: Array<ParamInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceSecurityGroups返回参数结构体
 */
export interface DescribeDBInstanceSecurityGroupsResponse {
  /**
   * 安全组信息数组
   */
  SecurityGroupSet?: Array<SecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份计划
 */
export interface BackupPlan {
  /**
   * 备份周期
   */
  BackupPeriod?: string
  /**
   * 数据备份保留时长
   */
  BaseBackupRetentionPeriod?: number
  /**
   * 开始备份的最早时间
   */
  MinBackupStartTime?: string
  /**
   * 开始备份的最晚时间
   */
  MaxBackupStartTime?: string
  /**
   * 备份计划ID
   */
  PlanId?: string
  /**
   * 备份计划自定义名称。
   */
  PlanName?: string
  /**
   * 日志备份保留时长。
   */
  LogBackupRetentionPeriod?: number
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 最近一次的修改时间。
   */
  UpdatedTime?: string
  /**
   * 备份计划类型。系统默认创建的为default，自定义的为custom。
   */
  PlanType?: string
  /**
   * 备份周期类型。当前支持week、month。
   */
  BackupPeriodType?: string
}

/**
 * RestoreDBInstanceObjects返回参数结构体
 */
export interface RestoreDBInstanceObjectsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 慢查询详情
 */
export interface SlowlogDetail {
  /**
   * 花费总时间
   */
  TotalTime?: number
  /**
   * 调用总次数
   */
  TotalCalls?: number
  /**
   * 脱敏后的慢SQL列表
   */
  NormalQueries?: Array<NormalQueryItem>
}

/**
 * SwitchDBInstancePrimary请求参数结构体
 */
export interface SwitchDBInstancePrimaryRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 是否强制切换。强制切换时只要备节点可访问，无论主备延迟多大都会发起切换。只有SwitchTag为0时，才可使用立即切换。
<li>默认：false
   */
  Force?: boolean
  /**
   * 指定实例配置完成变更后的切换时间。
<li>0：立即切换 
<li>1：指定时间切换
<li>2：维护时间窗口内切换
<li>默认值：0 
   */
  SwitchTag?: number
  /**
   * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
   */
  SwitchStartTime?: string
  /**
   * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。SwitchStartTime和SwitchEndTime时间窗口不能小于30分钟。
   */
  SwitchEndTime?: string
}

/**
 * OpenServerlessDBExtranetAccess请求参数结构体
 */
export interface OpenServerlessDBExtranetAccessRequest {
  /**
   * 实例的唯一标识符
   */
  DBInstanceId?: string
  /**
   * 实例名称
   */
  DBInstanceName?: string
}

/**
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
  /**
   * 订单名
   */
  DealName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteServerlessDBInstance返回参数结构体
 */
export interface DeleteServerlessDBInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogBackup返回参数结构体
 */
export interface DeleteLogBackupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyReadOnlyGroupConfig请求参数结构体
 */
export interface ModifyReadOnlyGroupConfigRequest {
  /**
   * 只读组ID
   */
  ReadOnlyGroupId: string
  /**
   * 只读组名称
   */
  ReadOnlyGroupName?: string
  /**
   * 延迟时间配置开关：0关、1开
   */
  ReplayLagEliminate?: number
  /**
   * 延迟日志大小配置开关：0关、1开
   */
  ReplayLatencyEliminate?: number
  /**
   * 延迟日志大小阈值，单位MB
   */
  MaxReplayLatency?: number
  /**
   * 延迟时间大小阈值，单位ms
   */
  MaxReplayLag?: number
  /**
   * 自动负载均衡开关：0关、1开
   */
  Rebalance?: number
  /**
   * 延迟剔除最小保留实例数
   */
  MinDelayEliminateReserve?: number
}

/**
 * 实例备份统计项
 */
export interface BackupSummary {
  /**
   * 实例ID。
   */
  DBInstanceId?: string
  /**
   * 实例日志备份数量。
   */
  LogBackupCount?: number
  /**
   * 实例日志备份大小。
   */
  LogBackupSize?: number
  /**
   * 手动创建的实例数据备份数量。
   */
  ManualBaseBackupCount?: number
  /**
   * 手动创建的实例数据备份大小。
   */
  ManualBaseBackupSize?: number
  /**
   * 自动创建的实例数据备份数量。
   */
  AutoBaseBackupCount?: number
  /**
   * 自动创建的实例数据备份大小。
   */
  AutoBaseBackupSize?: number
  /**
   * 总备份数量
   */
  TotalBackupCount?: number
  /**
   * 总备份大小
   */
  TotalBackupSize?: number
}

/**
 * AddDBInstanceToReadOnlyGroup请求参数结构体
 */
export interface AddDBInstanceToReadOnlyGroupRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 只读组ID
   */
  ReadOnlyGroupId: string
}

/**
 * DescribeProductConfig请求参数结构体
 */
export interface DescribeProductConfigRequest {
  /**
   * 可用区名称
   */
  Zone?: string
  /**
   * 数据库引擎，支持：
1、postgresql（云数据库PostgreSQL）；
2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；
如不指定默认使用postgresql。
   */
  DBEngine?: string
}

/**
 * RemoveDBInstanceFromReadOnlyGroup请求参数结构体
 */
export interface RemoveDBInstanceFromReadOnlyGroupRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 只读组ID
   */
  ReadOnlyGroupId: string
}

/**
 * CreateAccount请求参数结构体
 */
export interface CreateAccountRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 创建的账号名称。
   */
  UserName: string
  /**
   * 账号对应的密码。
   */
  Password: string
  /**
   * 账号类型。当前支持normal、tencentDBSuper两个输入。normal指代普通用户，tencentDBSuper为拥有pg_tencentdb_superuser角色的账号。
   */
  Type: string
  /**
   * 账号备注。
   */
  Remark?: string
}

/**
 * InitDBInstances返回参数结构体
 */
export interface InitDBInstancesResponse {
  /**
   * 实例ID集合。
   */
  DBInstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 查询到的任务数量
   */
  TotalCount?: number
  /**
   * 任务信息列表
   */
  TaskSet?: Array<TaskSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMaintainTimeWindow返回参数结构体
 */
export interface DescribeMaintainTimeWindowResponse {
  /**
   * 实例ID
   */
  DBInstanceId?: string
  /**
   * 维护开始时间。时区为东八区（UTC+8）
   */
  MaintainStartTime?: string
  /**
   * 维护持续时间。单位：小时
   */
  MaintainDuration?: number
  /**
   * 维护周期
   */
  MaintainWeekDays?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDefaultParameters请求参数结构体
 */
export interface DescribeDefaultParametersRequest {
  /**
   * 数据库版本，大版本号，例如11，12，13
   */
  DBMajorVersion: string
  /**
   * 数据库引擎，例如：postgresql,mssql_compatible
   */
  DBEngine: string
}

/**
 * DescribeDedicatedClusters返回参数结构体
 */
export interface DescribeDedicatedClustersResponse {
  /**
   * 专属集群信息
   */
  DedicatedClusterSet?: Array<DedicatedCluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
  /**
   * 实例ID，形如postgres-6fego161
   */
  DBInstanceId: string
  /**
   * 购买时长，单位：月。
<li>预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36</li>
<li>后付费：只支持1</li>
   */
  Period: number
  /**
   * 是否自动使用代金券：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表，目前仅支持指定一张代金券
   */
  VoucherIds?: Array<string>
}

/**
 * DescribeBackupOverview请求参数结构体
 */
export type DescribeBackupOverviewRequest = null

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 返回的结果数量。
   */
  TotalCount?: number
  /**
   * 地域信息集合。
   */
  RegionSet?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBaseBackupExpireTime返回参数结构体
 */
export interface ModifyBaseBackupExpireTimeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeDBInstanceMajorVersion返回参数结构体
 */
export interface UpgradeDBInstanceMajorVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupDownloadRestriction请求参数结构体
 */
export interface ModifyBackupDownloadRestrictionRequest {
  /**
   * 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。
   */
  RestrictionType: string
  /**
   * vpc限制效力，ALLOW 允许；DENY 拒绝。
   */
  VpcRestrictionEffect?: string
  /**
   * 允许或拒绝下载备份文件的vpcId列表。
   */
  VpcIdSet?: Array<string>
  /**
   * ip限制效力，ALLOW 允许；DENY 拒绝。
   */
  IpRestrictionEffect?: string
  /**
   * 允许或拒绝下载备份文件的ip列表。
   */
  IpSet?: Array<string>
}

/**
 * 描述实例的网络连接信息。
 */
export interface DBInstanceNetInfo {
  /**
   * DNS域名
   */
  Address: string
  /**
   * IP地址
   */
  Ip: string
  /**
   * 连接Port地址
   */
  Port: number
  /**
   * 网络类型，1、inner（基础网络内网地址）；2、private（私有网络内网地址）；3、public（基础网络或私有网络的外网地址）；
   */
  NetType: string
  /**
   * 网络连接状态，1、initing（未开通）；2、opened（已开通）；3、closed（已关闭）；4、opening（开通中）；5、closing（关闭中）；
   */
  Status: string
  /**
   * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId: string
  /**
   * 连接数据库的协议类型，当前支持：postgresql、mssql（MSSQL兼容语法）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtocolType: string
}

/**
 * 备份下载限制信息
 */
export interface BackupDownloadRestriction {
  /**
   * 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。
   */
  RestrictionType?: string
  /**
   * vpc限制效力，ALLOW 允许；DENY 拒绝。
   */
  VpcRestrictionEffect?: string
  /**
   * 允许或拒绝下载备份文件的vpcId列表。
   */
  VpcIdSet?: Array<string>
  /**
   * ip限制效力，ALLOW 允许；DENY 拒绝。
   */
  IpRestrictionEffect?: string
  /**
   * 允许或拒绝下载备份文件的ip列表。
   */
  IpSet?: Array<string>
}

/**
 * ModifyDBInstanceDeployment请求参数结构体
 */
export interface ModifyDBInstanceDeploymentRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 实例节点部署信息，支持多可用区部署时需要指定每个节点的部署可用区信息。
可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。
   */
  DBNodeSet: Array<DBNode>
  /**
   * 指定实例配置完成变更后的切换时间。
<li>0：立即切换 </li>
<li>1：指定时间切换</li>
<li>2：维护时间窗口内切换</li>
默认值：0 
   */
  SwitchTag: number
  /**
   * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
   */
  SwitchStartTime?: string
  /**
   * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。
   */
  SwitchEndTime?: string
}

/**
 * DeleteReadOnlyGroupNetworkAccess请求参数结构体
 */
export interface DeleteReadOnlyGroupNetworkAccessRequest {
  /**
   * RO组ID，形如：pgro-4t9c6g7k。
   */
  ReadOnlyGroupId: string
  /**
   * 私有网络统一 ID，若是基础网络则传"0"。
   */
  VpcId: string
  /**
   * 子网ID，若是基础网络则传"0"。
   */
  SubnetId: string
  /**
   * 目标VIP地址。
   */
  Vip: string
}

/**
 * DescribeBackupDownloadRestriction请求参数结构体
 */
export type DescribeBackupDownloadRestrictionRequest = null

/**
 * 描述可用区的编码和状态信息
 */
export interface ZoneInfo {
  /**
   * 该可用区的英文名称
   */
  Zone: string
  /**
   * 该可用区的中文名称
   */
  ZoneName: string
  /**
   * 该可用区对应的数字编号
   */
  ZoneId: number
  /**
   * 可用状态包含，
UNAVAILABLE：不可用。
AVAILABLE：可用。
SELLOUT：售罄。
SUPPORTMODIFYONLY：支持变配。
   */
  ZoneState: string
  /**
   * 该可用区是否支持Ipv6
   */
  ZoneSupportIpv6: number
  /**
   * 该可用区对应的备可用区集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandbyZoneSet: Array<string>
}

/**
 * CreateDatabase请求参数结构体
 */
export interface CreateDatabaseRequest {
  /**
   * 实例ID，形如postgres-6fego161
   */
  DBInstanceId: string
  /**
   * 创建的数据库名
   */
  DatabaseName: string
  /**
   * 数据库的所有者
   */
  DatabaseOwner: string
  /**
   * 数据库的字符编码
   */
  Encoding?: string
  /**
   * 数据库的排序规则
   */
  Collate?: string
  /**
   * 数据库的字符分类
   */
  Ctype?: string
}

/**
 * 单条SlowQuery信息
 */
export interface NormalQueryItem {
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 调用次数
   */
  Calls?: number
  /**
   * 粒度点
   */
  CallsGrids?: Array<number | bigint>
  /**
   * 花费总时间
   */
  CostTime?: number
  /**
   * 影响的行数
   */
  Rows?: number
  /**
   * 花费最小时间
   */
  MinCostTime?: number
  /**
   * 花费最大时间
   */
  MaxCostTime?: number
  /**
   * 最早一条慢SQL时间
   */
  FirstTime?: string
  /**
   * 最晚一条慢SQL时间
   */
  LastTime?: string
  /**
   * 读共享内存块数
   */
  SharedReadBlks?: number
  /**
   * 写共享内存块数
   */
  SharedWriteBlks?: number
  /**
   * 读io总耗时
   */
  ReadCostTime?: number
  /**
   * 写io总耗时
   */
  WriteCostTime?: number
  /**
   * 数据库名字
   */
  DatabaseName?: string
  /**
   * 脱敏后的慢SQL
   */
  NormalQuery?: string
}

/**
 * 实例绑定的标签信息，包含标签键TagKey和标签值TagValue
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeBackupSummaries请求参数结构体
 */
export interface DescribeBackupSummariesRequest {
  /**
   * 每页显示数量，取值范围为1-100，默认为返回10条。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string。
db-instance-name：按照实例名过滤，类型为string。
db-instance-ip：按照实例私有网络IP地址过滤，类型为string。
   */
  Filters?: Array<Filter>
  /**
   * 排序字段，支持TotalBackupSize,LogBackupSize,ManualBaseBackupSize,AutoBaseBackupSize。
   */
  OrderBy?: string
  /**
   * 排序方式，包括升序：asc，降序：desc。
   */
  OrderByType?: string
}

/**
 * CreateBackupPlan请求参数结构体
 */
export interface CreateBackupPlanRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 备份计划名称。
   */
  PlanName: string
  /**
   * 创建的备份计划类型，当前仅支持month创建。
   */
  BackupPeriodType: string
  /**
   * 备份的日期，示例是每个月的2号开启备份。
   */
  BackupPeriod: Array<string>
  /**
   * 备份开始时间，不传跟随默认备份计划。
   */
  MinBackupStartTime?: string
  /**
   * 备份结束时间，不传跟随默认计划。
   */
  MaxBackupStartTime?: string
  /**
   * 数据备份保留时长，week默认是7,month为30。
   */
  BaseBackupRetentionPeriod?: number
}

/**
 * CloseServerlessDBExtranetAccess请求参数结构体
 */
export interface CloseServerlessDBExtranetAccessRequest {
  /**
   * 实例唯一标识符
   */
  DBInstanceId?: string
  /**
   * 实例名称
   */
  DBInstanceName?: string
}

/**
 * CreateBaseBackup返回参数结构体
 */
export interface CreateBaseBackupResponse {
  /**
   * 数据备份集ID
   */
  BaseBackupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LockAccount返回参数结构体
 */
export interface LockAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloneDBInstance返回参数结构体
 */
export interface CloneDBInstanceResponse {
  /**
   * 订单号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealName?: string
  /**
   * 订单流水号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillId?: string
  /**
   * 克隆出的新实例ID，当前只支持后付费返回该值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBInstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceReadOnlyGroup请求参数结构体
 */
export interface ModifyDBInstanceReadOnlyGroupRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 当前实例所在只读组ID
   */
  ReadOnlyGroupId: string
  /**
   * 实例修改的目标只读组ID
   */
  NewReadOnlyGroupId: string
}

/**
 * AddDBInstanceToReadOnlyGroup返回参数结构体
 */
export interface AddDBInstanceToReadOnlyGroupResponse {
  /**
   * 流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KMS密钥信息
 */
export interface EncryptionKey {
  /**
   * KMS实例加密的KeyId。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyId?: string
  /**
   * KMS实例加密Key的别名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyAlias?: string
  /**
   * 实例加密密钥DEK的密文。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DEKCipherTextBlob?: string
  /**
   * 密钥是否启用，1-启用， 0-未启用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEnabled?: number
  /**
   * KMS密钥所在地域。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyRegion?: string
  /**
   * DEK密钥创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
}

/**
 * 数据库数据备份信息
 */
export interface BaseBackup {
  /**
   * 实例ID。
   */
  DBInstanceId?: string
  /**
   * 备份文件唯一标识。
   */
  Id?: string
  /**
   * 备份文件名称。
   */
  Name?: string
  /**
   * 备份方式：物理备份、逻辑备份。
   */
  BackupMethod?: string
  /**
   * 备份模式：自动备份、手动备份。
   */
  BackupMode?: string
  /**
   * 备份任务状态。
   */
  State?: string
  /**
   * 备份集大小，单位bytes。
   */
  Size?: number
  /**
   * 备份的开始时间。
   */
  StartTime?: string
  /**
   * 备份的结束时间。
   */
  FinishTime?: string
  /**
   * 备份的过期时间。
   */
  ExpireTime?: string
}

/**
 * CreateReadOnlyDBInstance返回参数结构体
 */
export interface CreateReadOnlyDBInstanceResponse {
  /**
   * 订单号列表。每个实例对应一个订单号
   */
  DealNames?: Array<string>
  /**
   * 冻结流水号
   */
  BillId?: string
  /**
   * 创建成功的实例ID集合，只在后付费情景下有返回值
   */
  DBInstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAvailableRecoveryTime请求参数结构体
 */
export interface DescribeAvailableRecoveryTimeRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 按照任务ID进行查询。其余云API中返回的FlowId和TaskId等价。
   */
  TaskId?: number
  /**
   * 按照数据库实例ID进行查询。
   */
  DBInstanceId?: string
  /**
   * 任务的最早开始时间，形如2024-08-23 00:00:00,默认只展示180天内的数据。
   */
  MinStartTime?: string
  /**
   * 任务的最晚开始时间，形如2024-08-23 00:00:00，默认为当前时间。
   */
  MaxStartTime?: string
  /**
   * 每页显示数量，取值范围为1-100，默认为返回20条。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 排序字段，支持StartTime,EndTime，默认为StartTime。
   */
  OrderBy?: string
  /**
   * 排序方式，包括升序：asc，降序：desc，默认为desc。
   */
  OrderByType?: string
}

/**
 * DescribeDBInstanceParameters请求参数结构体
 */
export interface DescribeDBInstanceParametersRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 查询指定参数详情。ParamName为空或不传，默认返回全部参数列表
   */
  ParamName?: string
}

/**
 * DescribeOrders返回参数结构体
 */
export interface DescribeOrdersResponse {
  /**
   * 订单数量
   */
  TotalCount?: number
  /**
   * 订单数组
   */
  Deals?: Array<PgDeal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDownloadURL返回参数结构体
 */
export interface DescribeBackupDownloadURLResponse {
  /**
   * 备份的下载地址。
   */
  BackupDownloadURL?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenServerlessDBExtranetAccess返回参数结构体
 */
export interface OpenServerlessDBExtranetAccessResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMaintainTimeWindow返回参数结构体
 */
export interface ModifyMaintainTimeWindowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceCreateDBInstances返回参数结构体
 */
export interface InquiryPriceCreateDBInstancesResponse {
  /**
   * 刊例价，单位：分
   */
  OriginalPrice?: number
  /**
   * 折后实际付款金额，单位：分
   */
  Price?: number
  /**
   * 币种。例如，CNY：人民币。
   */
  Currency?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  DBEngine?: string
  /**
   * 数据库版本，例如：12.4
   */
  DBVersion?: string
  /**
   * 数据库主要版本，例如：12
   */
  DBMajorVersion?: string
  /**
   * 数据库内核版本，例如：v12.4_r1.3
   */
  DBKernelVersion?: string
  /**
   * 数据库内核支持的特性列表。例如，
TDE：支持数据加密。
   */
  SupportedFeatureNames?: Array<string>
  /**
   * 数据库版本状态，包括：
AVAILABLE：可用；
UPGRADE_ONLY：不可创建，此版本仅可升级至高版本；
DEPRECATED：已弃用。
   */
  Status?: string
  /**
   * 该数据库版本（DBKernelVersion）可以升级到的版本号列表。其中包含可升级的小版本号和可升级的大版本号（完整内核版本格式示例：v15.1_v1.6）。
   */
  AvailableUpgradeTarget?: Array<string>
}

/**
 * CreateDBInstanceNetworkAccess请求参数结构体
 */
export interface CreateDBInstanceNetworkAccessRequest {
  /**
   * 实例ID，形如：postgres-6bwgamo3。
   */
  DBInstanceId: string
  /**
   * 私有网络统一 ID。
   */
  VpcId: string
  /**
   * 子网ID。
   */
  SubnetId: string
  /**
   * 是否指定分配vip true-指定分配  false-自动分配。
   */
  IsAssignVip: boolean
  /**
   * 目标VIP地址。
   */
  Vip?: string
}

/**
 * ModifySwitchTimePeriod返回参数结构体
 */
export interface ModifySwitchTimePeriodResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务列表信息
 */
export interface TaskSet {
  /**
   * 任务ID。
   */
  TaskId?: number
  /**
   * 任务的类型。
   */
  TaskType?: string
  /**
   * 任务实例的实例ID。
   */
  DBInstanceId?: string
  /**
   * 任务的开始时间。
   */
  StartTime?: string
  /**
   * 任务的结束时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 任务的运行状态，包括Running,Success,WaitSwitch,Fail,Pause。
   */
  Status?: string
  /**
   * 任务的执行进度，取值范围0-100。
   */
  Progress?: number
  /**
   * 任务的详情信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskDetail?: TaskDetail
}

/**
 * InquiryPriceCreateDBInstances请求参数结构体
 */
export interface InquiryPriceCreateDBInstancesRequest {
  /**
   * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
   */
  Zone: string
  /**
   * 规格ID。该参数可以通过调用DescribeClasses接口的返回值中的SpecCode字段来获取。
   */
  SpecCode: string
  /**
   * 存储容量大小，单位：GB。
   */
  Storage: number
  /**
   * 实例数量。目前最大数量不超过100，如需一次性创建更多实例，请联系客服支持。
   */
  InstanceCount: number
  /**
   * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。
   */
  Period: number
  /**
   * 【弃字段，不再生效】，计费ID。该参数可以通过调用DescribeProductConfig接口的返回值中的Pid字段来获取。
   */
  Pid?: number
  /**
   * 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。
   */
  InstanceChargeType?: string
  /**
   * 实例类型，默认primary，支持如下：
primary（双机高可用（一主一从））
readonly（只读实例）
   */
  InstanceType?: string
  /**
   * DB引擎，默认postgresql，支持如下：
postgresql（云数据库PostgreSQL）
mssql_compatible（MSSQL兼容-云数据库PostgreSQL）
   */
  DBEngine?: string
}

/**
 * DescribeDefaultParameters返回参数结构体
 */
export interface DescribeDefaultParametersResponse {
  /**
   * 参数个数
   */
  TotalCount?: number
  /**
   * 参数信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamInfoSet?: Array<ParamInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * serverless实例网络信息描述
 */
export interface ServerlessDBInstanceNetInfo {
  /**
   * 地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
  /**
   * ip地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 端口号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetType?: string
}

/**
 * DescribeBackupPlans返回参数结构体
 */
export interface DescribeBackupPlansResponse {
  /**
   * 实例的备份计划集
   */
  Plans?: Array<BackupPlan>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
db-pay-mode：按照实例付费模式过滤，类型为string
db-tag-key：按照标签键过滤，类型为string
db-private-ip： 按照实例私有网络IP过滤，类型为string
db-public-address： 按照实例外网地址过滤，类型为string
db-dedicated-cluster-id: 按照私有集群Id过滤，类型为string
   */
  Filters?: Array<Filter>
  /**
   * 每页显示数量，取值范围为1-100，默认为返回10条。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 排序指标，如实例名、创建时间等，支持DBInstanceId,CreateTime,Name,EndTime
   */
  OrderBy?: string
  /**
   * 排序方式，包括升序：asc、降序：desc。
   */
  OrderByType?: string
}

/**
 * 只读组信息
 */
export interface ReadOnlyGroup {
  /**
   * 只读组标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadOnlyGroupId?: string
  /**
   * 只读组名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadOnlyGroupName?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 主实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterDBInstanceId?: string
  /**
   * 最小保留实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinDelayEliminateReserve?: number
  /**
   * 延迟空间大小阈值
   */
  MaxReplayLatency?: number
  /**
   * 延迟大小开关
   */
  ReplayLatencyEliminate?: number
  /**
   * 延迟时间大小阈值
   */
  MaxReplayLag?: number
  /**
   * 延迟时间开关
   */
  ReplayLagEliminate?: number
  /**
   * 虚拟网络id
   */
  VpcId?: string
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 地域id
   */
  Region?: string
  /**
   * 地区id
   */
  Zone?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 实例详细信息
   */
  ReadOnlyDBInstanceList?: Array<DBInstance>
  /**
   * 自动负载均衡开关
   */
  Rebalance?: number
  /**
   * 网络信息
   */
  DBInstanceNetInfo?: Array<DBInstanceNetInfo>
  /**
   * 只读组网络信息列表（此字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkAccessList?: Array<NetworkAccess>
}

/**
 * ModifyDBInstanceSpec请求参数结构体
 */
export interface ModifyDBInstanceSpecRequest {
  /**
   * 实例ID，形如：postgres-6bwgamo3。
   */
  DBInstanceId: string
  /**
   * 修改后的实例内存大小，单位GiB。
   */
  Memory: number
  /**
   * 修改后的实例磁盘大小，单位GiB。
   */
  Storage: number
  /**
   * 是否自动使用代金券：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表，目前仅支持指定一张代金券。
   */
  VoucherIds?: Array<string>
  /**
   * 活动ID。
   */
  ActivityId?: number
  /**
   * 指定实例配置完成变更后的切换时间。
<li>0：立即切换 </li>
<li>1：指定时间切换</li>
<li>2：维护时间窗口内</li>切换
默认值：0 
   */
  SwitchTag?: number
  /**
   * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
   */
  SwitchStartTime?: string
  /**
   * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。
   */
  SwitchEndTime?: string
  /**
   * 修改后的实例CPU大小，单位Core。
   */
  Cpu?: number
}

/**
 * ModifyAccountRemark返回参数结构体
 */
export interface ModifyAccountRemarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeDBInstance请求参数结构体
 */
export interface UpgradeDBInstanceRequest {
  /**
   * 升级后的实例内存大小，单位GB
   */
  Memory: number
  /**
   * 升级后的实例磁盘大小，单位GB
   */
  Storage: number
  /**
   * 实例ID，形如postgres-lnp6j617
   */
  DBInstanceId: string
  /**
   * 是否自动使用代金券,1是,0否，默认不使用
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表，目前仅支持指定一张代金券
   */
  VoucherIds?: Array<string>
  /**
   * 活动ID
   */
  ActivityId?: number
  /**
   * 指定实例配置完成变更后的切换时间，默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。
   */
  SwitchTag?: number
  /**
   * 切换开始时间
   */
  SwitchStartTime?: string
  /**
   * 切换截止时间
   */
  SwitchEndTime?: string
}

/**
 * DescribeZones请求参数结构体
 */
export type DescribeZonesRequest = null

/**
 * 描述某个地域下某个可用区的可售卖规格详细信息。
 */
export interface SpecInfo {
  /**
   * 地域英文编码，对应RegionSet的Region字段
   */
  Region: string
  /**
   * 区域英文编码，对应ZoneSet的Zone字段
   */
  Zone: string
  /**
   * 规格详细信息列表
   */
  SpecItemInfoList: Array<SpecItemInfo>
  /**
   * 支持KMS的地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportKMSRegions: Array<string>
}

/**
 * ModifyMaintainTimeWindow请求参数结构体
 */
export interface ModifyMaintainTimeWindowRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 维护开始时间。时区为东八区（UTC+8）
   */
  MaintainStartTime?: string
  /**
   * 维护持续时间。单位：小时
   */
  MaintainDuration?: number
  /**
   * 维护周期
   */
  MaintainWeekDays?: Array<string>
}

/**
 * ModifyBackupDownloadRestriction返回参数结构体
 */
export interface ModifyBackupDownloadRestrictionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 各版本下的参数信息
 */
export interface ParamVersionRelation {
  /**
   * 参数名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 参数信息所属内核版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBKernelVersion?: string
  /**
   * 参数在该版本该规格下的默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 参数值单位。参数没有单位时，该字段返回空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit?: string
  /**
   * 数值类型（integer、real）参数，取值上界
注意：此字段可能返回 null，表示取不到有效值。
   */
  Max?: number
  /**
   * 数值类型（integer、real）参数，取值下界
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min?: number
  /**
   * 枚举类型参数，取值范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnumValue?: Array<string>
}

/**
 * DescribeLogBackups请求参数结构体
 */
export interface DescribeLogBackupsRequest {
  /**
   * 备份的最小结束时间，形如2018-01-01 00:00:00。默认为7天前。
   */
  MinFinishTime?: string
  /**
   * 备份的最大结束时间，形如2018-01-01 00:00:00。默认为当前时间。
   */
  MaxFinishTime?: string
  /**
   * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string。
db-instance-name：按照实例名过滤，类型为string。
db-instance-ip：按照实例私有网络IP地址过滤，类型为string。
   */
  Filters?: Array<Filter>
  /**
   * 每页显示数量，取值范围为1-100，默认为返回10条。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 排序字段，支持StartTime,FinishTime,Size。
   */
  OrderBy?: string
  /**
   * 排序方式，包括升序：asc，降序：desc。
   */
  OrderByType?: string
}

/**
 * SetAutoRenewFlag返回参数结构体
 */
export interface SetAutoRenewFlagResponse {
  /**
   * 设置成功的实例个数
   */
  Count: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于修改数据库对象的权限，其中包含了数据库对象描述的数据结构、需要修改的权限列表以及修改的类型等。
 */
export interface ModifyPrivilege {
  /**
   * 要修改的数据库对象及权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabasePrivilege?: DatabasePrivilege
  /**
   * 修改的方式，当前仅支持grantObject、revokeObject、alterRole。grantObject代表授权、revokeObject代表收回权、alterRole代表修改账号类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyType?: string
  /**
   * 当ModifyType为revokeObject才需要此参数，参数为true时，撤销权限会级联撤销。默认为false。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCascade?: boolean
}

/**
 * 网络相关信息。（该数据结构已废弃，网络相关信息使用DBInstanceNetInfo）
 */
export interface NetworkAccess {
  /**
   * 网络资源id，实例id或RO组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId: string
  /**
   * 资源类型，1-实例 2-RO组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: number
  /**
   * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId: string
  /**
   * IPV4地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip: string
  /**
   * IPV6地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip6: string
  /**
   * 访问端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vport: number
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId: string
  /**
   * 网络状态，1-申请中，2-使用中，3-删除中，4-已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcStatus: number
}

/**
 * DescribeDBInstanceAttribute请求参数结构体
 */
export interface DescribeDBInstanceAttributeRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
}

/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveDBInstanceFromReadOnlyGroup返回参数结构体
 */
export interface RemoveDBInstanceFromReadOnlyGroupResponse {
  /**
   * 流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 慢SQL查询接口返回 慢SQL列表详情
 */
export interface RawSlowQuery {
  /**
   * 慢SQL 语句
   */
  RawQuery: string
  /**
   * 慢SQL 查询的数据库
   */
  DatabaseName: string
  /**
   * 慢SQL执行 耗时
   */
  Duration: number
  /**
   * 执行慢SQL的客户端
   */
  ClientAddr: string
  /**
   * 执行慢SQL的用户名
   */
  UserName: string
  /**
   * 慢SQL执行的开始时间
   */
  SessionStartTime: string
}

/**
 * DescribeDatabaseObjects请求参数结构体
 */
export interface DescribeDatabaseObjectsRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 查询的对象类型。支持查询的数据对象有：database,schema,sequence,procedure,type,function,table,view,matview,column。
   */
  ObjectType: string
  /**
   * 单次显示数量，默认20。可选范围为[0,100]。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 查询对象所属的数据库。当查询对象类型不为database时，此参数必填。
   */
  DatabaseName?: string
  /**
   * 查询对象所属的模式。当查询对象类型不为database、schema时，此参数必填。
   */
  SchemaName?: string
  /**
   * 查询对象所属的表。当查询对象类型为column时，此参数必填。
   */
  TableName?: string
}

/**
 * DescribeParameterTemplates返回参数结构体
 */
export interface DescribeParameterTemplatesResponse {
  /**
   * 符合查询条件的参数模板总数
   */
  TotalCount?: number
  /**
   * 参数模板列表
   */
  ParameterTemplateSet?: Array<ParameterTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 各规格下的参数信息
 */
export interface ParamSpecRelation {
  /**
   * 参数名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 参数信息所属规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: string
  /**
   * 参数在该规格下的默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 参数值单位。参数没有单位时，该字段返回空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit?: string
  /**
   * 数值类型（integer、real）参数，取值上界
注意：此字段可能返回 null，表示取不到有效值。
   */
  Max?: number
  /**
   * 数值类型（integer、real）参数，取值下界
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min?: number
  /**
   * 枚举类型参数，取值范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnumValue?: Array<string>
}

/**
 * 描述数据库中某个对象所属的类型、是在哪个数据库、模式、表中的对象。
 */
export interface DatabaseObject {
  /**
   * 支持使用的数据库对象类型有：account,database,schema,sequence,procedure,type,function,table,view,matview,column。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectType: string
  /**
   * 所描述的数据库对象名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectName: string
  /**
   * 所要描述的数据库对象，所属的数据库名称。当描述对象类型不为database时，此参数必选。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 所要描述的数据库对象，所属的模式名称。当描述对象不为database、schema时，此参数必选。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 所要描述的数据库对象，所属的表名称。当描述的对象类型为column时，此参数必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
}

/**
 * UpgradeDBInstanceKernelVersion请求参数结构体
 */
export interface UpgradeDBInstanceKernelVersionRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 升级的目标内核版本号。可以通过接口[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)的返回字段AvailableUpgradeTarget获取。

   */
  TargetDBKernelVersion: string
  /**
   * 指定实例升级内核版本号完成后的切换时间。可选值:
<li>0：立即切换
<li>1：指定时间切换
<li>2：维护时间窗口内切换
默认值：0 
   */
  SwitchTag?: number
  /**
   * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
   */
  SwitchStartTime?: string
  /**
   * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。SwitchStartTime和SwitchEndTime时间窗口不能小于30分钟。
   */
  SwitchEndTime?: string
  /**
   * 是否对本次升级实例内核版本号操作执行预检查。
<li>true：执行预检查操作，不升级内核版本号。检查项目包含请求参数、内核版本号兼容性、实例参数等。
<li>false：发送正常请求（默认值），通过检查后直接升级内核版本号。
默认值：false
   */
  DryRun?: boolean
}

/**
 * SwitchDBInstancePrimary返回参数结构体
 */
export interface SwitchDBInstancePrimaryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyReadOnlyDBInstanceWeight返回参数结构体
 */
export interface ModifyReadOnlyDBInstanceWeightResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceHAConfig请求参数结构体
 */
export interface ModifyDBInstanceHAConfigRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 主从同步方式：
<li>Semi-sync：半同步
<li>Async：异步

   */
  SyncMode: string
  /**
   * 高可用备机最大延迟数据量。备节点延迟数据量小于等于该值，且备节点延迟时间小于等于MaxStandbyLag时，可以切换为主节点。
<li>单位：byte
<li>参数范围：[1073741824, 322122547200]
   */
  MaxStandbyLatency: number
  /**
   * 高可用备机最大延迟时间。备节点延迟时间小于等于该值，且备节点延迟数据量小于等于MaxStandbyLatency时，可以切换为主节点。
<li>单位：s
<li>参数范围：[5, 10]
   */
  MaxStandbyLag: number
  /**
   * 同步备机最大延迟数据量。备机延迟数据量小于等于该值，且该备机延迟时间小于等于MaxSyncStandbyLag时，则该备机采用同步复制；否则，采用异步复制。
该参数值针对SyncMode设置为Semi-sync的实例有效。
半同步实例禁止退化为异步复制时，不设置MaxSyncStandbyLatency、MaxSyncStandbyLag。
半同步实例允许退化异步复制时，PostgreSQL 9版本的实例须设置MaxSyncStandbyLatency且不设置MaxSyncStandbyLag，PostgreSQL 10及以上版本的实例须设置MaxSyncStandbyLatency、MaxSyncStandbyLag。
   */
  MaxSyncStandbyLatency?: number
  /**
   * 同步备机最大延迟时间。备机延迟时间小于等于该值，且该备机延迟数据量小于等于MaxSyncStandbyLatency时，则该备机采用同步复制；否则，采用异步复制。
该参数值针对SyncMode设置为Semi-sync的实例有效。
半同步实例禁止退化为异步复制时，不设置MaxSyncStandbyLatency、MaxSyncStandbyLag。
半同步实例允许退化异步复制时，PostgreSQL 9版本的实例须设置MaxSyncStandbyLatency且不设置MaxSyncStandbyLag，PostgreSQL 10及以上版本的实例须设置MaxSyncStandbyLatency、MaxSyncStandbyLag，
   */
  MaxSyncStandbyLag?: number
}

/**
 * 订单详情
 */
export interface PgDeal {
  /**
   * 订单名
   */
  DealName?: string
  /**
   * 所属用户
   */
  OwnerUin?: string
  /**
   * 订单涉及多少个实例
   */
  Count?: number
  /**
   * 付费模式。1-预付费；0-后付费
   */
  PayMode?: number
  /**
   * 异步任务流程ID
   */
  FlowId?: number
  /**
   * 实例ID数组
   */
  DBInstanceIdSet?: Array<string>
}

/**
 * DeleteReadOnlyGroupNetworkAccess返回参数结构体
 */
export interface DeleteReadOnlyGroupNetworkAccessResponse {
  /**
   * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMaintainTimeWindow请求参数结构体
 */
export interface DescribeMaintainTimeWindowRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
}

/**
 * DescribeBackupSummaries返回参数结构体
 */
export interface DescribeBackupSummariesResponse {
  /**
   * 备份统计信息列表。
   */
  BackupSummarySet?: Array<BackupSummary>
  /**
   * 查询到的所有备份信息数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBErrlogs请求参数结构体
 */
export interface DescribeDBErrlogsRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 查询起始时间，形如2018-01-01 00:00:00。日志保留时间默认为7天，起始时间不能超出保留时间范围。
   */
  StartTime: string
  /**
   * 查询结束时间，形如2018-01-01 00:00:00。
   */
  EndTime: string
  /**
   * 数据库名字。
   */
  DatabaseName?: string
  /**
   * 搜索关键字。
   */
  SearchKeys?: Array<string>
  /**
   * 每页显示数量，取值范围为1-100。默认值为50。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。默认值为0。
   */
  Offset?: number
}

/**
 * 数据库备份信息
 */
export interface DBBackup {
  /**
   * 备份文件唯一标识
   */
  Id?: number
  /**
   * 文件生成的开始时间
   */
  StartTime?: string
  /**
   * 文件生成的结束时间
   */
  EndTime?: string
  /**
   * 文件大小(K)
   */
  Size?: number
  /**
   * 策略（0-实例备份；1-多库备份）
   */
  Strategy?: number
  /**
   * 类型（0-定时）
   */
  Way?: number
  /**
   * 备份方式（1-完整）
   */
  Type?: number
  /**
   * 状态（1-创建中；2-成功；3-失败）
   */
  Status?: number
  /**
   * DB列表
   */
  DbList?: Array<string>
  /**
   * 内网下载地址
   */
  InternalAddr?: string
  /**
   * 外网下载地址
   */
  ExternalAddr?: string
  /**
   * 备份集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetId?: string
}

/**
 * ModifyDBInstancesProject返回参数结构体
 */
export interface ModifyDBInstancesProjectResponse {
  /**
   * 转移项目成功的实例个数
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBackupPlan请求参数结构体
 */
export interface DeleteBackupPlanRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 备份计划的ID。
   */
  PlanId: string
}

/**
 * CloneDBInstance请求参数结构体
 */
export interface CloneDBInstanceRequest {
  /**
   * 克隆的源实例ID。
   */
  DBInstanceId: string
  /**
   * 售卖规格码。该参数可以通过调用[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)的返回值中的SpecCode字段来获取。
   */
  SpecCode: string
  /**
   * 实例容量大小，单位：GB。
   */
  Storage: number
  /**
   * 购买时长，单位：月。

- 预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36
- 后付费：只支持1

   */
  Period: number
  /**
   * 续费标记：

- 0：手动续费
- 1：自动续费

默认值：0
   */
  AutoRenewFlag: number
  /**
   * 私有网络ID，形如vpc-xxxxxxxx。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcEx](https://cloud.tencent.com/document/api/215/1372) ，从接口返回中的unVpcId字段获取。
   */
  VpcId: string
  /**
   * 私有网络子网ID，形如subnet-xxxxxxxx。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。
   */
  SubnetId: string
  /**
   * 新购的实例名称，仅支持长度小于60的中文/英文/数字/"_"/"-"，不指定实例名称则默认显示"未命名"。
   */
  Name?: string
  /**
   * 实例计费类型，目前支持：

- PREPAID：预付费，即包年包月
- POSTPAID_BY_HOUR：后付费，即按量计费

默认值：PREPAID
   */
  InstanceChargeType?: string
  /**
   * 实例所属安全组，该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。

   */
  SecurityGroupIds?: Array<string>
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * 实例需要绑定的Tag信息，默认为空；可以通过调用 [DescribeTags](https://cloud.tencent.com/document/api/651/35316) 返回值中的 Tags 字段来获取。
   */
  TagList?: Array<Tag>
  /**
   * 实例节点部署信息，支持多可用区部署时需要指定每个节点的部署可用区信息。
可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。
   */
  DBNodeSet?: Array<DBNode>
  /**
   * 是否自动使用代金券：

- 0：否
- 1：是

默认值：0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表。
   */
  VoucherIds?: string
  /**
   * 活动ID。
   */
  ActivityId?: number
  /**
   * 基础备份集ID。
   */
  BackupSetId?: string
  /**
   * 恢复时间点。
   */
  RecoveryTargetTime?: string
  /**
   * 主从同步方式，支持： 
<li>Semi-sync：半同步</li>
<li>Async：异步</li>
主实例默认值：Semi-sync
只读实例默认值：Async
   */
  SyncMode?: string
}

/**
 * DeleteParameterTemplate请求参数结构体
 */
export interface DeleteParameterTemplateRequest {
  /**
   * 参数模板ID，用于唯一确认待操作的参数模板
   */
  TemplateId: string
}

/**
 * DescribeClasses请求参数结构体
 */
export interface DescribeClassesRequest {
  /**
   * 可用区ID。可以通过接口DescribeZones获取。
   */
  Zone: string
  /**
   * 数据库引擎，支持：
1、postgresql（云数据库PostgreSQL）；
2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；
   */
  DBEngine: string
  /**
   * 数据库主版本号。例如12，13，可以通过接口DescribeDBVersions获取。
   */
  DBMajorVersion: string
}

/**
 * DescribeParamsEvent请求参数结构体
 */
export interface DescribeParamsEventRequest {
  /**
   * 实例DB ID
   */
  DBInstanceId: string
}

/**
 * 参数修改事件信息
 */
export interface EventInfo {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamName?: string
  /**
   * 原参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldValue?: string
  /**
   * 本次修改期望参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewValue?: string
  /**
   * 后台参数修改开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 后台参数生效开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EffectiveTime?: string
  /**
   * 修改状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 操作者（一般为用户sub UIN）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 时间日志。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventLog?: string
}

/**
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
  /**
   * 订单号列表。每个实例对应一个订单号。
   */
  DealNames?: Array<string>
  /**
   * 冻结流水号。
   */
  BillId?: string
  /**
   * 创建成功的实例ID集合，只在后付费情景下有返回值。
   */
  DBInstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 慢查询分析接口返回的分析详情，按照参数抽象之后进行分类
 */
export interface AnalysisItems {
  /**
   * 慢SQL查询的数据库名
   */
  DatabaseName: string
  /**
   * 慢SQL执行的用户名
   */
  UserName: string
  /**
   * 抽象参数之后的慢SQL
   */
  NormalQuery: string
  /**
   * 慢SQL执行的客户端地址
   */
  ClientAddr: string
  /**
   * 在选定时间范围内慢SQL语句执行的次数
   */
  CallNum: number
  /**
   * 在选定时间范围内，慢SQL语句执行的次数占所有慢SQL的比例（小数返回）
   */
  CallPercent: number
  /**
   * 在选定时间范围内，慢SQL执行的总时间
   */
  CostTime: number
  /**
   * 在选定时间范围内，慢SQL语句执行的总时间占所有慢SQL的比例（小数返回）
   */
  CostPercent: number
  /**
   * 在选定时间范围内，慢SQL语句执行的耗时最短的时间（单位：ms）
   */
  MinCostTime: number
  /**
   * 在选定时间范围内，慢SQL语句执行的耗时最长的时间（单位：ms）
   */
  MaxCostTime: number
  /**
   * 在选定时间范围内，慢SQL语句执行的耗时平均时间（单位：ms）
   */
  AvgCostTime: number
  /**
   * 在选定时间范围内，慢SQL第一条开始执行的时间戳
   */
  FirstTime: string
  /**
   * 在选定时间范围内，慢SQL最后一条开始执行的时间戳
   */
  LastTime: string
}

/**
 * 数据库Xlog信息
 */
export interface Xlog {
  /**
   * 备份文件唯一标识
   */
  Id?: number
  /**
   * 文件生成的开始时间
   */
  StartTime?: string
  /**
   * 文件生成的结束时间
   */
  EndTime?: string
  /**
   * 内网下载地址
   */
  InternalAddr?: string
  /**
   * 外网下载地址
   */
  ExternalAddr?: string
  /**
   * 备份文件大小
   */
  Size?: number
}

/**
 * DescribeServerlessDBInstances请求参数结构体
 */
export interface DescribeServerlessDBInstancesRequest {
  /**
   * 查询条件。按照一个或者多个过滤条件进行查询，目前支持的过滤条件类型（name字段指定）有： 

- db-instance-id：按照实例ID过滤，类型为string
- db-instance-name：按照实例名过滤，类型为string
- db-tag-key：按照实例的tag过滤，类型为string

value字段指定该类型过滤条件下具体要过滤的实例ID/实例名/实例tag-key。
   */
  Filter?: Array<Filter>
  /**
   * 查询个数
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序指标，目前支持实例创建时间CreateTime
   */
  OrderBy?: string
  /**
   * 排序方式，包括升序、降序
   */
  OrderByType?: string
}

/**
 * DescribeDBBackups返回参数结构体
 */
export interface DescribeDBBackupsResponse {
  /**
   * 返回备份列表中备份文件的个数
   */
  TotalCount?: number
  /**
   * 备份列表
   */
  BackupList?: Array<DBBackup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

/**
 * DescribeSlowQueryList返回参数结构体
 */
export interface DescribeSlowQueryListResponse {
  /**
   * 查询到的慢日志数量，最大值为10000条。
   */
  TotalCount?: number
  /**
   * 查询到的慢日志耗时分段分析结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DurationAnalysis?: Array<DurationAnalysis>
  /**
   * 查询到的慢日志详细信息集合。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawSlowQueryList?: Array<RawSlowQuery>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * serverless实例描述
 */
export interface ServerlessDBInstance {
  /**
   * 实例id，唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBInstanceId?: string
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBInstanceName?: string
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBInstanceStatus?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 私有网络Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 字符集
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBCharset?: string
  /**
   * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBVersion?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 实例网络信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBInstanceNetInfo?: Array<ServerlessDBInstanceNetInfo>
  /**
   * 实例账户信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBAccountSet?: Array<ServerlessDBAccount>
  /**
   * 实例下的db信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBDatabaseList?: Array<string>
  /**
   * 实例绑定的标签数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<Tag>
  /**
   * 数据库内核版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBKernelVersion?: string
  /**
   * 数据库主要版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBMajorVersion?: string
}

/**
 * CreateReadOnlyGroup请求参数结构体
 */
export interface CreateReadOnlyGroupRequest {
  /**
   * 主实例ID
   */
  MasterDBInstanceId: string
  /**
   * 只读组名称
   */
  Name: string
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 私有网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 延迟时间大小开关：0关、1开
   */
  ReplayLagEliminate?: number
  /**
   * 延迟空间大小开关： 0关、1开
   */
  ReplayLatencyEliminate?: number
  /**
   * 延迟时间大小阈值，单位ms
   */
  MaxReplayLag?: number
  /**
   * 延迟空间大小阈值，单位MB
   */
  MaxReplayLatency?: number
  /**
   * 延迟剔除最小保留实例数
   */
  MinDelayEliminateReserve?: number
  /**
   * 安全组id
   */
  SecurityGroupIds?: Array<string>
}

/**
 * ModifyDBInstanceSSLConfig返回参数结构体
 */
export interface ModifyDBInstanceSSLConfigResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeParamsEvent返回参数结构体
 */
export interface DescribeParamsEventResponse {
  /**
   * 参数修改事件总数，以参数为统计粒度
   */
  TotalCount?: number
  /**
   * 实例参数修改事件详情
   */
  EventItems?: Array<EventItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
  /**
   * 实例或只读组要绑定的安全组列表。
安全组信息可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来查询。

   */
  SecurityGroupIdSet: Array<string>
  /**
   * 实例ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果都传，忽略ReadOnlyGroupId
   */
  DBInstanceId?: string
  /**
   * 只读组ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果要修改只读组关联的安全组，只传ReadOnlyGroupId
   */
  ReadOnlyGroupId?: string
}

/**
 * DescribeDedicatedClusters请求参数结构体
 */
export interface DescribeDedicatedClustersRequest {
  /**
   * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
dedicated-cluster-id: 按照专属集群ID筛选，类型为string
   */
  Filters?: Array<Filter>
}

/**
 * CloseServerlessDBExtranetAccess返回参数结构体
 */
export interface CloseServerlessDBExtranetAccessResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改参数条目，以参数为维度
 */
export interface EventItem {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamName: string
  /**
   * 修改事件数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventCount: number
  /**
   * 修改时间详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventDetail: Array<EventInfo>
}

/**
 * RestartDBInstance请求参数结构体
 */
export interface RestartDBInstanceRequest {
  /**
   * 实例ID，形如postgres-6r233v55
   */
  DBInstanceId: string
}

/**
 * DescribeDBInstanceHAConfig请求参数结构体
 */
export interface DescribeDBInstanceHAConfigRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
}

/**
 * CreateParameterTemplate返回参数结构体
 */
export interface CreateParameterTemplateResponse {
  /**
   * 参数模板ID，用于唯一确认参数模板
   */
  TemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数详情
 */
export interface ParamInfo {
  /**
   * 参数ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: number
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 参数值类型：integer（整型）、real（浮点型）、bool（布尔型）、enum（枚举类型）、mutil_enum（枚举类型、支持多选）。
当参数类型为integer（整型）、real（浮点型）时，参数的取值范围根据返回值的Max、Min确定； 
当参数类型为bool（布尔型）时，参数设置值取值范围是true | false； 
当参数类型为enum（枚举类型）、mutil_enum（多枚举类型）时，参数的取值范围由返回值中的EnumValue确定。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValueType?: string
  /**
   * 参数值 单位。参数没有单位时，该字段返回空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit?: string
  /**
   * 参数默认值。以字符串形式返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultValue?: string
  /**
   * 参数当前运行值。以字符串形式返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentValue?: string
  /**
   * 数值类型（integer、real）参数，取值下界
注意：此字段可能返回 null，表示取不到有效值。
   */
  Max?: number
  /**
   * 枚举类型参数，取值范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnumValue?: Array<string>
  /**
   * 数值类型（integer、real）参数，取值上界
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min?: number
  /**
   * 参数中文描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamDescriptionCH?: string
  /**
   * 参数英文描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamDescriptionEN?: string
  /**
   * 参数修改，是否重启生效。（true为需要，false为不需要）
注意：此字段可能返回 null，表示取不到有效值。
   */
  NeedReboot?: boolean
  /**
   * 参数中文分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassificationCN?: string
  /**
   * 参数英文分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassificationEN?: string
  /**
   * 是否和规格相关。（true为相关，false为不想关）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecRelated?: boolean
  /**
   * 是否为重点参数。（true为重点参数，修改是需要重点关注，可能会影响实例性能）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Advanced?: boolean
  /**
   * 参数最后一次修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifyTime?: string
  /**
   * 参数主备制约，0：无主备制约关系，1:备机参数值需比主机大，2:主机参数值需比备机大
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandbyRelated?: number
  /**
   * 参数版本关联信息，内容为相应内核版本下的参数详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionRelationSet?: Array<ParamVersionRelation>
  /**
   * 参数规格关联信息，内容为相应规格下的参数详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecRelationSet?: Array<ParamSpecRelation>
}

/**
 * DescribeLogBackups返回参数结构体
 */
export interface DescribeLogBackupsResponse {
  /**
   * 查询到的日志备份数量。
   */
  TotalCount?: number
  /**
   * 日志备份详细信息列表。
   */
  LogBackupSet?: Array<LogBackup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 慢SQL 统计分析接口返回详情
 */
export interface Detail {
  /**
   * 输入时间范围内所有慢sql执行的总时间，单位毫秒（ms）
   */
  TotalTime?: number
  /**
   * 输入时间范围内所有慢sql总条数
   */
  TotalCallNum?: number
  /**
   * 慢SQL统计分析列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisItems?: Array<AnalysisItems>
}

/**
 * 安全组信息
 */
export interface SecurityGroup {
  /**
   * 项目Id
   */
  ProjectId?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 入站规则
   */
  Inbound?: Array<PolicyRule>
  /**
   * 出站规则
   */
  Outbound?: Array<PolicyRule>
  /**
   * 安全组ID
   */
  SecurityGroupId?: string
  /**
   * 安全组名称
   */
  SecurityGroupName?: string
  /**
   * 安全组备注
   */
  SecurityGroupDescription?: string
}

/**
 * IsolateDBInstances返回参数结构体
 */
export interface IsolateDBInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenDBExtranetAccess返回参数结构体
 */
export interface OpenDBExtranetAccessResponse {
  /**
   * 异步任务流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceRequest {
  /**
   * 实例的磁盘大小，单位GB
   */
  Storage: number
  /**
   * 实例的内存大小，单位GB
   */
  Memory: number
  /**
   * 实例ID，形如postgres-hez4fh0v
   */
  DBInstanceId: string
  /**
   * 【废弃参数，不再生效】，实例计费类型。
   */
  InstanceChargeType?: string
  /**
   * 实例的Cpu大小，单位Core
   */
  Cpu?: number
}

/**
 * DescribeDBInstanceHAConfig返回参数结构体
 */
export interface DescribeDBInstanceHAConfigResponse {
  /**
   * 主从同步方式：
<li>Semi-sync：半同步
<li>Async：异步
   */
  SyncMode?: string
  /**
   * 高可用备机最大延迟数据量。备节点延迟数据量小于等于该值，且备节点延迟时间小于等于MaxStandbyLag时，可以切换为主节点。
<li>单位：byte
<li>参数范围：[1073741824, 322122547200]
   */
  MaxStandbyLatency?: number
  /**
   * 高可用备机最大延迟时间。备节点延迟时间小于等于该值，且备节点延迟数据量小于等于MaxStandbyLatency时，可以切换为主节点。
<li>单位：s
<li>参数范围：[5, 10]
   */
  MaxStandbyLag?: number
  /**
   * 同步备机最大延迟数据量。备机延迟数据量小于等于该值，且该备机延迟时间小于等于MaxSyncStandbyLag时，则该备机采用同步复制；否则，采用异步复制。
该参数值针对SyncMode设置为Semi-sync的实例有效。
异步实例该字段返回null。
半同步实例禁止退化为异步复制时，该字段返回null。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxSyncStandbyLatency?: number
  /**
   * 同步备机最大延迟时间。备机延迟时间小于等于该值，且该备机延迟数据量小于等于MaxSyncStandbyLatency时，则该备机采用同步复制；否则，采用异步复制。
该参数值针对SyncMode设置为Semi-sync的实例有效。
异步实例不返回该字段。
半同步实例禁止退化为异步复制时，不返回该字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxSyncStandbyLag?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseObjects返回参数结构体
 */
export interface DescribeDatabaseObjectsResponse {
  /**
   * 查询对象列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectSet?: Array<string>
  /**
   * 查询对象总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstances请求参数结构体
 */
export interface IsolateDBInstancesRequest {
  /**
   * 实例ID集合。注意：当前已不支持同时隔离多个实例，这里只能传入单个实例ID。
   */
  DBInstanceIdSet: Array<string>
}

/**
 * ModifyDBInstanceName请求参数结构体
 */
export interface ModifyDBInstanceNameRequest {
  /**
   * 数据库实例ID，形如postgres-6fego161
   */
  DBInstanceId: string
  /**
   * 实例名称，仅支持长度小于60的中文/英文/数字/"_"/"-"，不指定实例名称则默认显示"未命名"。

   */
  InstanceName: string
}

/**
 * DescribeDBInstanceSSLConfig返回参数结构体
 */
export interface DescribeDBInstanceSSLConfigResponse {
  /**
   * true 代表开通 ，false 代表未开通
   */
  SSLEnabled?: boolean
  /**
   * 云端根证书下载链接
   */
  CAUrl?: string
  /**
   * 服务器证书中配置的内网或外网连接地址
   */
  ConnectAddress?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyParameterTemplate请求参数结构体
 */
export interface ModifyParameterTemplateRequest {
  /**
   * 参数模板ID，用于唯一确认参数模板，不可修改
   */
  TemplateId: string
  /**
   * 参数模板名称，长度为1～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@  注：若该字段为空    ，则保持原参数模板名称
   */
  TemplateName?: string
  /**
   * 参数模板描述，长度为0～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@  注：若不传入该参数，则保持原参数模板描述
   */
  TemplateDescription?: string
  /**
   * 需要修改或添加的参数集合，注：同一参数不能同时出现在修改添加集合和删除集合中
   */
  ModifyParamEntrySet?: Array<ParamEntry>
  /**
   * 需要从模板中删除的参数集合，注：同一参数不能同时出现在修改添加集合和删除集合中
   */
  DeleteParamSet?: Array<string>
}

/**
 * DeleteAccount请求参数结构体
 */
export interface DeleteAccountRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 删除的账号名称。
   */
  UserName: string
}

/**
 * UpgradeDBInstanceKernelVersion返回参数结构体
 */
export interface UpgradeDBInstanceKernelVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceRenewDBInstance返回参数结构体
 */
export interface InquiryPriceRenewDBInstanceResponse {
  /**
   * 刊例价，单位为分。如24650表示246.5元
   */
  OriginalPrice: number
  /**
   * 折后实际付款金额，单位为分。如24650表示246.5元
   */
  Price: number
  /**
   * 币种。例如，CNY：人民币。
   */
  Currency: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowQueryAnalysis请求参数结构体
 */
export interface DescribeSlowQueryAnalysisRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 查询起始时间，形如2018-01-01 00:00:00。日志保留时间默认为7天，起始时间不能超出保留时间范围。
   */
  StartTime: string
  /**
   * 查询结束时间，形如2018-01-01 00:00:00。
   */
  EndTime: string
  /**
   * 数据库名字。
   */
  DatabaseName?: string
  /**
   * 排序字段，取值范围[CallNum,CostTime,AvgCostTime]。默认值为CallNum。
   */
  OrderBy?: string
  /**
   * 排序方式，包括升序：asc 降序：desc。默认值为desc。
   */
  OrderByType?: string
  /**
   * 每页显示数量，取值范围为1-100。默认值为50。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。默认值为0。
   */
  Offset?: number
}

/**
 * 错误日志详情
 */
export interface ErrLogDetail {
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 数据库名字
   */
  Database?: string
  /**
   * 错误发生时间
   */
  ErrTime?: string
  /**
   * 错误消息
   */
  ErrMsg?: string
}

/**
 * DescribeServerlessDBInstances返回参数结构体
 */
export interface DescribeServerlessDBInstancesResponse {
  /**
   * 查询结果数
   */
  TotalCount?: number
  /**
   * 查询结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBInstanceSet?: Array<ServerlessDBInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupOverview返回参数结构体
 */
export interface DescribeBackupOverviewResponse {
  /**
   * 总免费空间大小，单位byte。
   */
  TotalFreeSize: number
  /**
   * 已使用免费空间大小，单位byte。
   */
  UsedFreeSize: number
  /**
   * 已使用收费空间大小，单位byte。
   */
  UsedBillingSize: number
  /**
   * 日志备份数量。
   */
  LogBackupCount: number
  /**
   * 日志备份大小，单位byte。
   */
  LogBackupSize: number
  /**
   * 手动创建的基础备份数量。
   */
  ManualBaseBackupCount: number
  /**
   * 手动创建的基础备份大小，单位byte。
   */
  ManualBaseBackupSize: number
  /**
   * 自动创建的基础备份数量。
   */
  AutoBaseBackupCount: number
  /**
   * 自动创建的基础备份大小，单位byte。
   */
  AutoBaseBackupSize: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeParameterTemplates请求参数结构体
 */
export interface DescribeParameterTemplatesRequest {
  /**
   * 过滤条件，目前支持的过滤条件有：TemplateName, TemplateId，DBMajorVersion，DBEngine
   */
  Filters?: Array<Filter>
  /**
   * 每页显示数量，[0，100]，默认 20
   */
  Limit?: number
  /**
   * 数据偏移量
   */
  Offset?: number
  /**
   * 排序指标，枚举值，支持：CreateTime，TemplateName，DBMajorVersion
   */
  OrderBy?: string
  /**
   * 排序方式，枚举值，支持：asc（升序） ，desc（降序）
   */
  OrderByType?: string
}

/**
 * InitDBInstances请求参数结构体
 */
export interface InitDBInstancesRequest {
  /**
   * 实例ID集合。
   */
  DBInstanceIdSet: Array<string>
  /**
   * 实例根账号用户名。
   */
  AdminName: string
  /**
   * 实例根账号用户名对应的密码。
   */
  AdminPassword: string
  /**
   * 实例字符集，目前只支持：UTF8、LATIN1。
   */
  Charset: string
}

/**
 * DescribeClasses返回参数结构体
 */
export interface DescribeClassesResponse {
  /**
   * 数据库规格列表
   */
  ClassInfoSet?: Array<ClassInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDBInstanceNetworkAccess请求参数结构体
 */
export interface DeleteDBInstanceNetworkAccessRequest {
  /**
   * 实例ID，形如：postgres-6bwgamo3。
   */
  DBInstanceId: string
  /**
   * 私有网络统一 ID，若是基础网络则传"0"。
   */
  VpcId: string
  /**
   * 子网ID，若是基础网络则传"0"。
   */
  SubnetId: string
  /**
   * 目标VIP地址。
   */
  Vip: string
}

/**
 * ModifyDBInstanceDeployment返回参数结构体
 */
export interface ModifyDBInstanceDeploymentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnlockAccount请求参数结构体
 */
export interface UnlockAccountRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 账号名称。
   */
  UserName: string
}

/**
 * 描述实例的详细信息
 */
export interface DBInstance {
  /**
   * 实例所属地域，如: ap-guangzhou，对应RegionSet的Region字段。
   */
  Region?: string
  /**
   * 实例所属可用区， 如：ap-guangzhou-3，对应ZoneSet的Zone字段。
   */
  Zone?: string
  /**
   * 私有网络ID，形如vpc-e6w23k31。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcs](https://cloud.tencent.com/document/api/215/15778) ，从接口返回中的unVpcId字段获取。
   */
  VpcId?: string
  /**
   * 私有网络子网ID，形如subnet-51lcif9y。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。
   */
  SubnetId?: string
  /**
   * 实例ID。
   */
  DBInstanceId?: string
  /**
   * 实例名称。
   */
  DBInstanceName?: string
  /**
   * 实例状态，分别为：applying（申请中）、init(待初始化)、initing(初始化中)、running(运行中)、limited run（受限运行）、isolating（隔离中）、isolated（已隔离）、disisolating（解隔离中）、recycling（回收中）、recycled（已回收）、job running（任务执行中）、offline（下线）、migrating（迁移中）、expanding（扩容中）、waitSwitch（等待切换）、switching（切换中）、readonly（只读）、restarting（重启中）、network changing（网络变更中）、upgrading（内核版本升级中）、audit-switching（审计状态变更中）、primary-switching（主备切换中）
   */
  DBInstanceStatus?: string
  /**
   * 实例分配的内存大小，单位：GB
   */
  DBInstanceMemory?: number
  /**
   * 实例分配的存储空间大小，单位：GB
   */
  DBInstanceStorage?: number
  /**
   * 实例分配的CPU数量，单位：个
   */
  DBInstanceCpu?: number
  /**
   * 售卖规格ID
   */
  DBInstanceClass?: string
  /**
   * PostgreSQL大版本号，版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取，目前支持10，11，12，13，14，15这几个大版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBMajorVersion?: string
  /**
   * PostgreSQL社区大版本+小版本号，如12.4，版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。
   */
  DBVersion?: string
  /**
   * PostgreSQL内核版本号，如v12.7_r1.8，版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBKernelVersion?: string
  /**
   * 实例类型，类型有：
<li>primary：主实例</li>
<li>readonly：只读实例</li>
<li>guard：灾备实例</li>
<li>temp：临时实例</li>
   */
  DBInstanceType?: string
  /**
   * 实例版本，目前只支持standard（双机高可用版, 一主一从）。
   */
  DBInstanceVersion?: string
  /**
   * 实例字符集，目前只支持：
<li> UTF8</li>
<li> LATIN1</li>
   */
  DBCharset?: string
  /**
   * 实例创建时间。
   */
  CreateTime?: string
  /**
   * 实例执行最后一次更新的时间。
   */
  UpdateTime?: string
  /**
   * 实例到期时间。
   */
  ExpireTime?: string
  /**
   * 实例隔离时间。
   */
  IsolatedTime?: string
  /**
   * 计费模式：
<li>prepaid：包年包月,预付费</li>
<li>postpaid：按量计费，后付费</li>
   */
  PayType?: string
  /**
   * 是否自动续费：
<li>0：手动续费</li>
<li>1：自动续费</li>
默认值：0
   */
  AutoRenew?: number
  /**
   * 实例网络连接信息。
   */
  DBInstanceNetInfo?: Array<DBInstanceNetInfo>
  /**
   * 机器类型。
   */
  Type?: string
  /**
   * 用户的AppId。
   */
  AppId?: number
  /**
   * 实例的Uid。
   */
  Uid?: number
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * 实例绑定的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<Tag>
  /**
   * 主实例信息，仅在实例为只读实例时返回。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterDBInstanceId?: string
  /**
   * 只读实例数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadOnlyInstanceNum?: number
  /**
   * 只读实例在只读组中的状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusInReadonlyGroup?: string
  /**
   * 下线时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineTime?: string
  /**
   * 实例的节点信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBNodeSet?: Array<DBNode>
  /**
   * 实例是否支持TDE数据加密：
<li>0：不支持</li>
<li>1：支持</li>
默认值：0
TDE数据加密可参考[数据透明加密概述](https://cloud.tencent.com/document/product/409/71748)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportTDE?: number
  /**
   * 数据库引擎，支持：
<li>postgresql：云数据库PostgreSQL</li>
<li>mssql_compatible：MSSQL兼容-云数据库PostgreSQL</li>
默认值：postgresql
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBEngine?: string
  /**
   * 数据库引擎的配置信息，配置格式如下：
{"$key1":"$value1", "$key2":"$value2"}
各引擎支持如下：
mssql_compatible引擎：
<li>migrationMode：数据库模式，可选参数，可取值：single-db（单数据库模式），multi-db（多数据库模式）。默认为single-db。</li>
<li>defaultLocale：排序区域规则，可选参数，在初始化后不可修改，默认为en_US，可选值如下：
"af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN"。</li>
<li>serverCollationName：排序规则名称，可选参数，在初始化后不可修改，默认为sql_latin1_general_cp1_ci_as，可选值如下："bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as"。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBEngineConfig?: string
  /**
   * 实例网络信息列表（此字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkAccessList?: Array<NetworkAccess>
  /**
   * 实例是否支持Ipv6：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  SupportIpv6?: number
}

/**
 * DeleteParameterTemplate返回参数结构体
 */
export interface DeleteParameterTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyReadOnlyDBInstanceWeight请求参数结构体
 */
export interface ModifyReadOnlyDBInstanceWeightRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 只读组ID
   */
  ReadOnlyGroupId: string
  /**
   * 只读实例在只读组中的流量权重(1-50)
   */
  Weight: number
}

/**
 * ModifyAccountPrivileges返回参数结构体
 */
export interface ModifyAccountPrivilegesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述数据库详细信息，包括所有者、字符编码等
 */
export interface Database {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 数据库所有者
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseOwner?: string
  /**
   * 数据库字符编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Encoding?: string
  /**
   * 数据库排序规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  Collate?: string
  /**
   * 数据库字符分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ctype?: string
  /**
   * 数据库是否允许连接
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowConn?: boolean
  /**
   * 数据库最大连接数，-1表示无限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnLimit?: number
  /**
   * 数据库权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Privileges?: string
}

/**
 * DeleteReadOnlyGroup请求参数结构体
 */
export interface DeleteReadOnlyGroupRequest {
  /**
   * 待删除只读组ID
   */
  ReadOnlyGroupId: string
}

/**
 * DescribeDBBackups请求参数结构体
 */
export interface DescribeDBBackupsRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv。
   */
  DBInstanceId: string
  /**
   * 备份方式（1-全量）。目前只支持全量，取值为1。
   */
  Type: number
  /**
   * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
   */
  StartTime: string
  /**
   * 查询结束时间，形如2018-06-10 17:06:38
   */
  EndTime: string
  /**
   * 备份列表分页返回，每页返回数量，默认为 20，最小为1，最大值为 100。（当该参数不传或者传0时按默认值处理）
   */
  Limit?: number
  /**
   * 返回结果中的第几页，从第0页开始。默认为0。
   */
  Offset?: number
}

/**
 * RestartDBInstance返回参数结构体
 */
export interface RestartDBInstanceResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  Name?: string
  /**
   * 一个或者多个过滤值。
   */
  Values?: Array<string>
}

/**
 * DescribeReadOnlyGroups请求参数结构体
 */
export interface DescribeReadOnlyGroupsRequest {
  /**
   * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-master-instance-id：按照主实例过滤，类型为string。
read-only-group-id：按照只读组ID过滤，类型为string。
   */
  Filters?: Array<Filter>
  /**
   * 查询每一页的条数，默认为10
   */
  PageSize?: number
  /**
   * 查询的页码，默认为1
   */
  PageNumber?: number
  /**
   * 查询排序依据，目前支持:ROGroupId,CreateTime,Name
   */
  OrderBy?: string
  /**
   * 查询排序依据类型，目前支持:desc,asc
   */
  OrderByType?: string
}

/**
 * DescribeBaseBackups返回参数结构体
 */
export interface DescribeBaseBackupsResponse {
  /**
   * 查询到的数据备份数量。
   */
  TotalCount?: number
  /**
   * 数据备份详细信息列表。
   */
  BaseBackupSet?: Array<BaseBackup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceParameters返回参数结构体
 */
export interface ModifyDBInstanceParametersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBVersions返回参数结构体
 */
export interface DescribeDBVersionsResponse {
  /**
   * 数据库版本号信息列表
   */
  VersionSet?: Array<Version>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSSLConfig请求参数结构体
 */
export interface ModifyDBInstanceSSLConfigRequest {
  /**
   * 实例 ID
   */
  DBInstanceId: string
  /**
   * 开启或关闭SSL
   */
  SSLEnabled: boolean
  /**
   * SSL证书保护的唯一连接地址，若为主实例，可设置为内外网IP地址；若为只读实例，可设置为实例IP或只读组IP。在开启SSL或修改SSL保护的连接地址时，该参数为必传项；在关闭SSL时，该参数将被忽略。
   */
  ConnectAddress?: string
}

/**
 * 指定账号对数据库对象拥有的权限列表
 */
export interface DatabasePrivilege {
  /**
   * 数据库对象，当ObjectType为database时，DataseName/SchemaName/TableName可为空；当ObjectType为schema时，SchemaName/TableName可为空；当ObjectType为column时，TableName不可为空，其余情况均可为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Object?: DatabaseObject
  /**
   * 指定账号对数据库对象拥有的权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivilegeSet?: Array<string>
}

/**
 * UnlockAccount返回参数结构体
 */
export interface UnlockAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述实例节点信息，包括节点类型、节点所在可用区、节点所在专属集群。
 */
export interface DBNode {
  /**
   * 节点类型，值可以为：
Primary，代表主节点；
Standby，代表备节点。
   */
  Role: string
  /**
   * 节点所在可用区，例如 ap-guangzhou-1。
   */
  Zone: string
  /**
   * 专属集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DedicatedClusterId?: string
}

/**
 * ModifyDBInstanceName返回参数结构体
 */
export interface ModifyDBInstanceNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeDBInstanceMajorVersion请求参数结构体
 */
export interface UpgradeDBInstanceMajorVersionRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 目标内核版本号，可以通过API DescribeDBVersions获取可以升级的目标内核版本号。
   */
  TargetDBKernelVersion: string
  /**
   * 是否为校验模式，若UpgradeCheck为True，表示仅进行内核版本兼容性检查，不会进行实质性的升级操作，对原实例无影响。检查结果可以通过升级日志查看。
   */
  UpgradeCheck?: boolean
  /**
   * 升级前备份选项。True，表示升级前需要创建全量备份，False，表示升级前不需要创建全量备份。当实例已有备份集可以恢复到升级前的状态时，可选择False，否则需要指定为True。UpgradeCheck为True时，此参数无效。
   */
  BackupBeforeUpgrade?: boolean
  /**
   * 统计信息收集选项，对主例运行 ANALYZE 以在升级后更新系统统计信息。可选值包括，
0：不需要收集统计信息；
1：实例恢复写之前收集统计信息；
3：实例恢复写之后收集统计信息。
UpgradeCheck为True时，此参数无效。
   */
  StatisticsRefreshOption?: number
  /**
   * 插件升级选项，pg_upgrade不会升级任何插件，需要在升级完成后在创建过插件的库上执行"ALTER EXTENSION UPDATE"。发起升级实例大版本时可以指定在实例恢复写前/后是否需要升级任务自动升级插件版本。可选值包括：
0：不需要自动升级插件；
1：恢复写之前升级插件；
2：恢复写之后升级插件。
UpgradeCheck为True时，此参数无效。
   */
  ExtensionUpgradeOption?: number
  /**
   * 升级时间选项，升级过程中会有一段时间实例只读，并会有一次秒级闪断，发起升级时需要选择这段影响的时间窗。可选值包括：
0：自动执行，不需要指定时间窗；
1：指定本次升级任务的时间窗，通过参数UpgradeTimeBegin和UpgradeTimeEnd设置；
2：在实例运维时间窗内执行。
UpgradeCheck为True时，此参数无效。
   */
  UpgradeTimeOption?: number
  /**
   * 升级时间窗开始时间，时间格式：HH:MM:SS，例如：01:00:00。当UpgradeTimeOption为1时，该参数有效。
UpgradeCheck为True时，此参数无效。
   */
  UpgradeTimeBegin?: string
  /**
   * 升级时间窗截止时间，时间格式：HH:MM:SS，例如：02:00:00。当UpgradeTimeOption为1时，该参数有效。
UpgradeCheck为True时，此参数无效。
   */
  UpgradeTimeEnd?: string
}

/**
 * CloseDBExtranetAccess返回参数结构体
 */
export interface CloseDBExtranetAccessResponse {
  /**
   * 异步任务流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDownloadRestriction返回参数结构体
 */
export interface DescribeBackupDownloadRestrictionResponse {
  /**
   * 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。
   */
  RestrictionType?: string
  /**
   * vpc限制效力，ALLOW 允许；DENY 拒绝。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcRestrictionEffect?: string
  /**
   * 允许或拒绝下载备份文件的vpcId列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcIdSet?: Array<string>
  /**
   * ip限制效力，ALLOW 允许；DENY 拒绝。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpRestrictionEffect?: string
  /**
   * 允许或拒绝下载备份文件的ip列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReadOnlyDBInstance请求参数结构体
 */
export interface CreateReadOnlyDBInstanceRequest {
  /**
   * 实例所属主可用区， 如：ap-guangzhou-3；
可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。
   */
  Zone: string
  /**
   * 只读实例的主实例ID。
   */
  MasterDBInstanceId: string
  /**
   * 售卖规格码。该参数可以通过调用[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)的返回值中的SpecCode字段来获取。
   */
  SpecCode: string
  /**
   * 实例容量大小，单位：GB。
   */
  Storage: number
  /**
   * 购买实例数量，取值范围：[1-10]。一次性购买支持最大数量10个，若超过该数量，可进行多次调用进行购买。
   */
  InstanceCount: number
  /**
   * 购买时长，单位：月。
<li>预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36</li>
<li>后付费：只支持1</li>
   */
  Period: number
  /**
   * 私有网络ID，形如vpc-xxxxxxxx（该参数当前必传）。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcEx](https://cloud.tencent.com/document/api/215/1372) ，从接口返回中的unVpcId字段获取。
   */
  VpcId?: string
  /**
   * 私有网络子网ID，形如subnet-xxxxxxxx（该参数当前必传）。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。
   */
  SubnetId?: string
  /**
   * 实例计费类型，目前支持：
<li>PREPAID：预付费，即包年包月。</li>
<li>POSTPAID_BY_HOUR：后付费，即按量计费。</li>
默认值：PREPAID。如果主实例为后付费，只读实例必须也为后付费。
   */
  InstanceChargeType?: string
  /**
   * 是否自动使用代金券：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表，目前仅支持指定一张代金券。
   */
  VoucherIds?: Array<string>
  /**
   * 续费标记：
<li>0：手动续费</li>
<li>1：自动续费</li>
默认值：0
   */
  AutoRenewFlag?: number
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * 优惠活动ID
   */
  ActivityId?: number
  /**
   * 只读组ID。
   */
  ReadOnlyGroupId?: string
  /**
   * 实例需要绑定的Tag信息，默认为空；可以通过调用 [DescribeTags](https://cloud.tencent.com/document/api/651/35316) 返回值中的 Tags 字段来获取。
   */
  TagList?: Tag
  /**
   * 实例所属安全组，该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。

   */
  SecurityGroupIds?: Array<string>
  /**
   * 是否需要支持Ipv6：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  NeedSupportIpv6?: number
  /**
   * 实例名(后续支持)
   */
  Name?: string
  /**
   * 【废弃】不再需要指定，内核版本号与主实例保持一致
   */
  DBVersion?: string
  /**
   * 专属集群ID
   */
  DedicatedClusterId?: string
}

/**
 * DescribeCloneDBInstanceSpec返回参数结构体
 */
export interface DescribeCloneDBInstanceSpecResponse {
  /**
   * 可购买的最小规格码。
   */
  MinSpecCode?: string
  /**
   * 可购买的最小磁盘容量，单位GB。
   */
  MinStorage?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * 返回的结果数量。
   */
  TotalCount?: number
  /**
   * 可用区信息集合。
   */
  ZoneSet?: Array<ZoneInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateServerlessDBInstance返回参数结构体
 */
export interface CreateServerlessDBInstanceResponse {
  /**
   * 实例ID，该ID全局唯一，如：postgres-xxxxx
   */
  DBInstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * 数据库信息
   */
  Items?: Array<string>
  /**
   * 数据库总数
   */
  TotalCount?: number
  /**
   * 数据库详情列表
   */
  Databases?: Array<Database>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductConfig返回参数结构体
 */
export interface DescribeProductConfigResponse {
  /**
   * 售卖规格列表。
   */
  SpecInfoList?: Array<SpecInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrders请求参数结构体
 */
export interface DescribeOrdersRequest {
  /**
   * 订单名集合
   */
  DealNames: Array<string>
}

/**
 * CloseDBExtranetAccess请求参数结构体
 */
export interface CloseDBExtranetAccessRequest {
  /**
   * 实例ID，形如postgres-6r233v55
   */
  DBInstanceId: string
  /**
   * 是否关闭Ipv6外网，1：是，0：否
   */
  IsIpv6?: number
}

/**
 * ModifyParameterTemplate返回参数结构体
 */
export interface ModifyParameterTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEncryptionKeys请求参数结构体
 */
export interface DescribeEncryptionKeysRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
}

/**
 * 数据库日志备份信息
 */
export interface LogBackup {
  /**
   * 实例ID。
   */
  DBInstanceId?: string
  /**
   * 备份文件唯一标识。
   */
  Id?: string
  /**
   * 备份文件名称。
   */
  Name?: string
  /**
   * 备份方式：物理备份、逻辑备份。
   */
  BackupMethod?: string
  /**
   * 备份模式：自动备份、手动备份。
   */
  BackupMode?: string
  /**
   * 备份任务状态。
   */
  State?: string
  /**
   * 备份集大小，单位bytes。
   */
  Size?: number
  /**
   * 备份的开始时间。
   */
  StartTime?: string
  /**
   * 备份的结束时间。
   */
  FinishTime?: string
  /**
   * 备份的过期时间。
   */
  ExpireTime?: string
}

/**
 * RebalanceReadOnlyGroup请求参数结构体
 */
export interface RebalanceReadOnlyGroupRequest {
  /**
   * 只读组ID
   */
  ReadOnlyGroupId: string
}

/**
 * ModifyBackupPlan返回参数结构体
 */
export interface ModifyBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyDBInstance请求参数结构体
 */
export interface DestroyDBInstanceRequest {
  /**
   * 待下线实例ID
   */
  DBInstanceId: string
}

/**
 * CreateServerlessDBInstance请求参数结构体
 */
export interface CreateServerlessDBInstanceRequest {
  /**
   * 可用区ID。公测阶段仅支持ap-shanghai-2、ap-beijing-1,ap-guangzhou-2.
   */
  Zone: string
  /**
   * DB实例名称，同一个账号下该值必须唯一。
   */
  DBInstanceName: string
  /**
   * PostgreSQL内核版本，目前只支持：10.4。
   */
  DBVersion: string
  /**
   * PostgreSQL数据库字符集，目前支持UTF8。
   */
  DBCharset: string
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * 私有网络ID。
   */
  VpcId?: string
  /**
   * 私有网络子网ID。
   */
  SubnetId?: string
  /**
   * 实例需要绑定的标签数组信息
   */
  TagList?: Array<Tag>
}

/**
 * InquiryPriceRenewDBInstance请求参数结构体
 */
export interface InquiryPriceRenewDBInstanceRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 续费周期，按月计算，最大不超过48
   */
  Period: number
}

/**
 * CreateReadOnlyGroup返回参数结构体
 */
export interface CreateReadOnlyGroupResponse {
  /**
   * 只读组ID
   */
  ReadOnlyGroupId: string
  /**
   * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDBInstanceNetworkAccess返回参数结构体
 */
export interface DeleteDBInstanceNetworkAccessResponse {
  /**
   * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountPrivileges请求参数结构体
 */
export interface ModifyAccountPrivilegesRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 修改此账号对某数据库对象的权限。
   */
  UserName: string
  /**
   * 修改的权限信息，支持批量修改，一次最高修改50条。
   */
  ModifyPrivilegeSet: Array<ModifyPrivilege>
}

/**
 * DeleteServerlessDBInstance请求参数结构体
 */
export interface DeleteServerlessDBInstanceRequest {
  /**
   * DB实例名称，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
   */
  DBInstanceName?: string
  /**
   * DB实例ID，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
   */
  DBInstanceId?: string
}

/**
 * ModifyReadOnlyGroupConfig返回参数结构体
 */
export interface ModifyReadOnlyGroupConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账户信息
 */
export interface AccountInfo {
  /**
   * 实例ID，形如postgres-lnp6j617
   */
  DBInstanceId?: string
  /**
   * 账号
   */
  UserName?: string
  /**
   * 账号备注
   */
  Remark?: string
  /**
   * 账号状态。 1-创建中，2-正常，3-修改中，4-密码重置中，5-锁定中，-1-删除中
   */
  Status?: number
  /**
   * 账号创建时间
   */
  CreateTime?: string
  /**
   * 账号最后一次更新时间
   */
  UpdateTime?: string
  /**
   * 账号类型
   */
  UserType?: string
}

/**
 * ModifyAccountRemark请求参数结构体
 */
export interface ModifyAccountRemarkRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv
   */
  DBInstanceId: string
  /**
   * 实例用户名
   */
  UserName: string
  /**
   * 用户UserName对应的新备注
   */
  Remark: string
}

/**
 * DescribeParameterTemplateAttributes请求参数结构体
 */
export interface DescribeParameterTemplateAttributesRequest {
  /**
   * 参数模板ID
   */
  TemplateId: string
}

/**
 * DescribeDBErrlogs返回参数结构体
 */
export interface DescribeDBErrlogsResponse {
  /**
   * 查询到的日志数量，最大值为10000条。
   */
  TotalCount?: number
  /**
   * 错误日志详细信息集合。
   */
  Details?: Array<ErrLogDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupPlan请求参数结构体
 */
export interface ModifyBackupPlanRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 实例最早开始备份时间
   */
  MinBackupStartTime?: string
  /**
   * 实例最晚开始备份时间
   */
  MaxBackupStartTime?: string
  /**
   * 实例备份保留时长，取值范围为7-1830，单位是天
   */
  BaseBackupRetentionPeriod?: number
  /**
   * 实例备份周期，若是星期维度，格式为小写星期英文单词；若是按月维度，格式为数字字符，如["1","2"]。
   */
  BackupPeriod?: Array<string>
  /**
   * 实例日志备份保留时长，取值范围为7-1830，单位是天
   */
  LogBackupRetentionPeriod?: number
  /**
   * 备份计划ID，用于指明要修改哪个备份计划，不传则是修改默认备份计划。
   */
  PlanId?: string
  /**
   * 要修改的备份计划名称。
   */
  PlanName?: string
}

/**
 * DeleteBaseBackup请求参数结构体
 */
export interface DeleteBaseBackupRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 数据备份ID。
   */
  BaseBackupId: string
}

/**
 * 批量修改参数
 */
export interface ParamEntry {
  /**
   * 参数名
   */
  Name: string
  /**
   * 修改参数值。入参均以字符串形式传递，例如：小数”0.1“、整数”1000“、枚举”replica“
   */
  ExpectedValue: string
}

/**
 * InquiryPriceUpgradeDBInstance返回参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceResponse {
  /**
   * 刊例价费用
   */
  OriginalPrice?: number
  /**
   * 折后实际付款金额
   */
  Price?: number
  /**
   * 币种。例如，CNY：人民币。
   */
  Currency?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisIsolateDBInstances返回参数结构体
 */
export interface DisIsolateDBInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateParameterTemplate请求参数结构体
 */
export interface CreateParameterTemplateRequest {
  /**
   * 模板名称，长度为1～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@
   */
  TemplateName: string
  /**
   * 数据库大版本号，例如：11，12，13
   */
  DBMajorVersion: string
  /**
   * 数据库引擎，例如：postgresql，mssql_compatible
   */
  DBEngine: string
  /**
   * 参数模板描述，长度为0～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@
   */
  TemplateDescription?: string
}

/**
 * DescribeDBInstanceSSLConfig请求参数结构体
 */
export interface DescribeDBInstanceSSLConfigRequest {
  /**
   * 实例ID，形如postgres-6bwgamo3
   */
  DBInstanceId: string
}

/**
 * ModifyDatabaseOwner返回参数结构体
 */
export interface ModifyDatabaseOwnerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySwitchTimePeriod请求参数结构体
 */
export interface ModifySwitchTimePeriodRequest {
  /**
   * 处于等待切换状态中的实例ID
   */
  DBInstanceId: string
  /**
   * 入参取值为 0 ，代表立即切换。
   */
  SwitchTag: number
}

/**
 * CreateAccount返回参数结构体
 */
export interface CreateAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowQueryList请求参数结构体
 */
export interface DescribeSlowQueryListRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 查询起始时间，形如2018-01-01 00:00:00。日志保留时间默认为7天，起始时间不能超出保留时间范围。
   */
  StartTime: string
  /**
   * 查询结束时间，形如2018-01-01 00:00:00。
   */
  EndTime: string
  /**
   * 数据库名字。
   */
  DatabaseName?: string
  /**
   * 排序方式，包括升序：asc 降序：desc。默认值为desc。
   */
  OrderByType?: string
  /**
   * 排序字段，取值范围[SessionStartTime,Duration]。默认值为SessionStartTime。
   */
  OrderBy?: string
  /**
   * 每页显示数量，取值范围为1-100。默认值为50。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。默认值为0。
   */
  Offset?: number
}

/**
 * DescribeCloneDBInstanceSpec请求参数结构体
 */
export interface DescribeCloneDBInstanceSpecRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 基础备份集ID，此入参和RecoveryTargetTime必须选择一个传入。如与RecoveryTargetTime参数同时设置，则以此参数为准。
   */
  BackupSetId?: string
  /**
   * 恢复目标时间，此入参和BackupSetId必须选择一个传入。时区以东八区（UTC+8）为准。
   */
  RecoveryTargetTime?: string
}

/**
 * 描述地域的编码和状态等信息
 */
export interface RegionInfo {
  /**
   * 该地域对应的英文名称
   */
  Region: string
  /**
   * 该地域对应的中文名称
   */
  RegionName: string
  /**
   * 该地域对应的数字编号
   */
  RegionId: number
  /**
   * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
   */
  RegionState: string
  /**
   * 该地域是否支持国际站售卖，0：不支持，1：支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportInternational: number
}

/**
 * ModifyDatabaseOwner请求参数结构体
 */
export interface ModifyDatabaseOwnerRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
  /**
   * 数据库名称
   */
  DatabaseName: string
  /**
   * 数据库新所有者
   */
  DatabaseOwner: string
}

/**
 * DisIsolateDBInstances请求参数结构体
 */
export interface DisIsolateDBInstancesRequest {
  /**
   * 实例ID列表。注意：当前已不支持同时解隔离多个实例，这里只能传入单个实例ID。
   */
  DBInstanceIdSet: Array<string>
  /**
   * 购买时长，单位：月。
<li>预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36</li>
<li>后付费：只支持1</li>
   */
  Period?: number
  /**
   * 是否使用代金券：
<li>true：使用</li>
<li>false：不使用</li>
默认值：false
   */
  AutoVoucher?: boolean
  /**
   * 代金券id列表。
   */
  VoucherIds?: Array<string>
}

/**
 * CreateBackupPlan返回参数结构体
 */
export interface CreateBackupPlanResponse {
  /**
   * 备份策略的ID.
   */
  PlanId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LockAccount请求参数结构体
 */
export interface LockAccountRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 账号名称。
   */
  UserName: string
}

/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 查询到的实例数量。
   */
  TotalCount?: number
  /**
   * 实例详细信息集合。
   */
  DBInstanceSet?: Array<DBInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceSecurityGroups请求参数结构体
 */
export interface DescribeDBInstanceSecurityGroupsRequest {
  /**
   * 实例ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果都传，忽略ReadOnlyGroupId
   */
  DBInstanceId?: string
  /**
   * 只读组ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果要查询只读组关联的安全组，只传ReadOnlyGroupId
   */
  ReadOnlyGroupId?: string
}

/**
 * DescribeBackupPlans请求参数结构体
 */
export interface DescribeBackupPlansRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
}

/**
 * ModifyBaseBackupExpireTime请求参数结构体
 */
export interface ModifyBaseBackupExpireTimeRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 数据备份ID。
   */
  BaseBackupId: string
  /**
   * 新过期时间。
   */
  NewExpireTime: string
}

/**
 * ModifyDBInstanceHAConfig返回参数结构体
 */
export interface ModifyDBInstanceHAConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDatabase返回参数结构体
 */
export interface CreateDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RebalanceReadOnlyGroup返回参数结构体
 */
export interface RebalanceReadOnlyGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv
   */
  DBInstanceId: string
  /**
   * 实例账户名
   */
  UserName: string
  /**
   * UserName账户对应的新密码
   */
  Password: string
}

/**
 * DescribeSlowQueryAnalysis返回参数结构体
 */
export interface DescribeSlowQueryAnalysisResponse {
  /**
   * 查询到的总条数，最大值为10000条。
   */
  TotalCount?: number
  /**
   * 查询到的慢SQL统计分析详细信息集合。
   */
  Detail?: Detail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceParameters请求参数结构体
 */
export interface ModifyDBInstanceParametersRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 待修改参数及期望值。
   */
  ParamList: Array<ParamEntry>
}

/**
 * 专属集群相关信息，用于查询用户的专属集群列表
 */
export interface DedicatedCluster {
  /**
   * 专属集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DedicatedClusterId?: string
  /**
   * 专属集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 专属集群所在可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 灾备集群
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandbyDedicatedClusterSet?: Array<string>
  /**
   * 实例数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceCount?: number
  /**
   * Cpu总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuTotal?: number
  /**
   * Cpu可用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuAvailable?: number
  /**
   * 内存总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemTotal?: number
  /**
   * 内存可用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemAvailable?: number
  /**
   * 磁盘总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskTotal?: number
  /**
   * 磁盘可用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskAvailable?: number
}

/**
 * serverless账号描述
 */
export interface ServerlessDBAccount {
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBUser?: string
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBPassword?: string
  /**
   * 连接数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBConnLimit?: number
}

/**
 * 慢SQL耗时分段分析
 */
export interface DurationAnalysis {
  /**
   * 慢SQL耗时，时段
   */
  TimeSegment: string
  /**
   * 对应时段区间慢SQL 条数
   */
  Count: number
}

/**
 * DescribeDBSlowlogs返回参数结构体
 */
export interface DescribeDBSlowlogsResponse {
  /**
   * 本次返回多少条数据
   */
  TotalCount?: number
  /**
   * 慢查询日志详情
   */
  Detail?: SlowlogDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountPrivileges请求参数结构体
 */
export interface DescribeAccountPrivilegesRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 查询此账号对某数据库对象所拥有的权限信息。
   */
  UserName: string
  /**
   * 要查询的数据库对象信息
   */
  DatabaseObjectSet: Array<DatabaseObject>
}

/**
 * DescribeReadOnlyGroups返回参数结构体
 */
export interface DescribeReadOnlyGroupsResponse {
  /**
   * 只读组列表
   */
  ReadOnlyGroupList?: Array<ReadOnlyGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestoreDBInstanceObjects请求参数结构体
 */
export interface RestoreDBInstanceObjectsRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 需要恢复的对象列表。假设需要恢复的对象名为user，则恢复后的名称为user_bak_${LinuxTime}。${LinuxTime}无法指定，由系统根据任务发起的linux时间设定。
   */
  RestoreObjects: Array<string>
  /**
   * 恢复所用备份集。BackupSetId与RestoreTargetTime有且只能传一个。
   */
  BackupSetId?: string
  /**
   * 恢复目标时间，北京时间。BackupSetId与RestoreTargetTime有且只能传一个。
   */
  RestoreTargetTime?: string
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 本次调用接口共返回了多少条数据。
   */
  TotalCount?: number
  /**
   * 账号列表详细信息。当CreateTime项为0000-00-00 00:00:00时，意味着对应账号是直连数据库创建的，并非通过CreateAccount接口创建。
   */
  Details?: Array<AccountInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceChargeType请求参数结构体
 */
export interface ModifyDBInstanceChargeTypeRequest {
  /**
   * 实例ID，形如postgres-6fego161
   */
  DBInstanceId: string
  /**
   * 实例计费类型，目前支持：
<li>PREPAID：预付费，即包年包月</li>
<li>POSTPAID_BY_HOUR：后付费，即按量计费</li>
默认值：PREPAID
   */
  InstanceChargeType: string
  /**
   * 购买时长，单位：月。
<li>预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36</li>
<li>后付费：只支持1</li>
   */
  Period: number
  /**
   * 续费标记：
<li>0：手动续费</li>
<li>1：自动续费</li>
默认值：0
   */
  AutoRenewFlag?: number
  /**
   * 是否自动使用代金券：
<li>0：否</li>
<li>1：是</li>
默认值：0
   */
  AutoVoucher?: number
}

/**
 * DescribeParameterTemplateAttributes返回参数结构体
 */
export interface DescribeParameterTemplateAttributesResponse {
  /**
   * 参数模板ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 参数模板包含的参数个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 参数模板包含的参数信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamInfoSet?: Array<ParamInfo>
  /**
   * 参数模板名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateName?: string
  /**
   * 参数模板适用的数据库版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBMajorVersion?: string
  /**
   * 参数模板适用的数据库引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBEngine?: string
  /**
   * 参数模板描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateDescription?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeDBInstance返回参数结构体
 */
export interface UpgradeDBInstanceResponse {
  /**
   * 交易名字。
   */
  DealName?: string
  /**
   * 冻结流水号
   */
  BillId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBVersions请求参数结构体
 */
export type DescribeDBVersionsRequest = null

/**
 * ModifyDBInstancesProject请求参数结构体
 */
export interface ModifyDBInstancesProjectRequest {
  /**
   * 实例ID集合。注意：当前已不支持同时操作多个实例，这里只能传入单个实例ID。
   */
  DBInstanceIdSet: Array<string>
  /**
   * 所属新项目的ID
   */
  ProjectId: string
}

/**
 * DescribeDBSlowlogs请求参数结构体
 */
export interface DescribeDBSlowlogsRequest {
  /**
   * 实例ID，形如postgres-lnp6j617
   */
  DBInstanceId: string
  /**
   * 查询起始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
   */
  StartTime: string
  /**
   * 查询结束时间，形如2018-06-10 17:06:38
   */
  EndTime: string
  /**
   * 数据库名字
   */
  DatabaseName?: string
  /**
   * 按照何种指标排序，取值为sum_calls或者sum_cost_time。sum_calls-总调用次数；sum_cost_time-总的花费时间
   */
  OrderBy?: string
  /**
   * 排序规则。desc-降序；asc-升序
   */
  OrderByType?: string
  /**
   * 分页返回结果，每页最大返回数量，取值为1-100，默认20
   */
  Limit?: number
  /**
   * 分页返回结果，返回结果的第几页，从0开始计数
   */
  Offset?: number
}

/**
 * DestroyDBInstance返回参数结构体
 */
export interface DestroyDBInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceAttribute返回参数结构体
 */
export interface DescribeDBInstanceAttributeResponse {
  /**
   * 实例详细信息。
   */
  DBInstance?: DBInstance
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogBackup请求参数结构体
 */
export interface DeleteLogBackupRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 日志备份ID。
   */
  LogBackupId: string
}

/**
 * DeleteBaseBackup返回参数结构体
 */
export interface DeleteBaseBackupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则信息
 */
export interface PolicyRule {
  /**
   * 策略，ACCEPT 或者 DROP
   */
  Action?: string
  /**
   * 来源或目的 IP 或 IP 段，例如172.16.0.0/12
   */
  CidrIp?: string
  /**
   * 端口
   */
  PortRange?: string
  /**
   * 网络协议，支持 UDP、TCP 等
   */
  IpProtocol?: string
  /**
   * 规则描述
   */
  Description?: string
}

/**
 * ModifyDBInstanceSpec返回参数结构体
 */
export interface ModifyDBInstanceSpecResponse {
  /**
   * 订单号。
   */
  DealName?: string
  /**
   * 冻结流水号。
   */
  BillId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDownloadURL请求参数结构体
 */
export interface DescribeBackupDownloadURLRequest {
  /**
   * 实例ID。
   */
  DBInstanceId: string
  /**
   * 备份类型，目前支持：LogBackup，BaseBackup。
   */
  BackupType: string
  /**
   * 备份的唯一ID。
   */
  BackupId: string
  /**
   * 链接的有效时间，默认为12小时。
   */
  URLExpireTime?: number
  /**
   * 备份下载限制
   */
  BackupDownloadRestriction?: BackupDownloadRestriction
}

/**
 * DescribeDBXlogs返回参数结构体
 */
export interface DescribeDBXlogsResponse {
  /**
   * 表示此次返回结果有多少条数据。
   */
  TotalCount?: number
  /**
   * Xlog列表
   */
  XlogList?: Array<Xlog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceChargeType返回参数结构体
 */
export interface ModifyDBInstanceChargeTypeResponse {
  /**
   * 订单名
   */
  DealName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaseBackups请求参数结构体
 */
export interface DescribeBaseBackupsRequest {
  /**
   * 备份的最小结束时间，形如2018-01-01 00:00:00。默认为7天前。
   */
  MinFinishTime?: string
  /**
   * 备份的最大结束时间，形如2018-01-01 00:00:00。默认为当前时间。
   */
  MaxFinishTime?: string
  /**
   * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string。
db-instance-name：按照实例名过滤，类型为string。
db-instance-ip：按照实例私有网络IP地址过滤，类型为string。
base-backup-id：按照备份集ID过滤，类型为string。
   */
  Filters?: Array<Filter>
  /**
   * 每页显示数量，取值范围为1-100，默认为返回10条。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始。
   */
  Offset?: number
  /**
   * 排序字段，支持StartTime,FinishTime,Size。
   */
  OrderBy?: string
  /**
   * 排序方式，包括升序：asc，降序：desc。
   */
  OrderByType?: string
}

/**
 * DescribeEncryptionKeys返回参数结构体
 */
export interface DescribeEncryptionKeysResponse {
  /**
   * 实例密钥信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptionKeys?: Array<EncryptionKey>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReadOnlyGroupNetworkAccess返回参数结构体
 */
export interface CreateReadOnlyGroupNetworkAccessResponse {
  /**
   * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBInstances返回参数结构体
 */
export interface CreateDBInstancesResponse {
  /**
   * 订单号列表。每个实例对应一个订单号。
   */
  DealNames?: Array<string>
  /**
   * 冻结流水号
   */
  BillId?: string
  /**
   * 创建成功的实例ID集合，只在后付费情景下有返回值
   */
  DBInstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAccount返回参数结构体
 */
export interface DeleteAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
