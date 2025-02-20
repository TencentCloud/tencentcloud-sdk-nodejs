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
 * DescribeAlarmNotices请求参数结构体
 */
export interface DescribeAlarmNoticesRequest {
  /**
   * <li> name
按照【通知渠道组名称】进行过滤。
类型：String
必选：否</li>
<li> alarmNoticeId
按照【通知渠道组ID】进行过滤。
类型：String
必选：否</li>
<li> uid
按照【接收用户ID】进行过滤。
类型：String
必选：否</li>
<li> groupId
按照【接收用户组ID】进行过滤。
类型：String
必选：否</li>

<li> deliverFlag
按照【投递状态】进行过滤。
类型：String
必选：否
可选值： "1":未启用,  "2": 已启用, "3":投递异常</li>

每次请求的Filters的上限为10，Filter.Values的上限为5。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
}

/**
 * CreateAlarm返回参数结构体
 */
export interface CreateAlarmResponse {
  /**
   * 告警策略ID。
   */
  AlarmId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警策略描述
 */
export interface AlarmInfo {
  /**
   * 告警策略名称。
   */
  Name?: string
  /**
   * 监控对象列表。
   */
  AlarmTargets?: Array<AlarmTargetInfo>
  /**
   * 监控任务运行时间点。
   */
  MonitorTime?: MonitorTime
  /**
   * 单触发条件。与MultiConditions参数互斥。
   */
  Condition?: string
  /**
   * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。
   */
  TriggerCount?: number
  /**
   * 告警重复的周期。单位是min。取值范围是0~1440。
   */
  AlarmPeriod?: number
  /**
   * 关联的告警通知模板列表。
   */
  AlarmNoticeIds?: Array<string>
  /**
   * 开启状态。
   */
  Status?: boolean
  /**
   * 告警策略ID。
   */
  AlarmId?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 最近更新时间。
   */
  UpdateTime?: string
  /**
   * 自定义通知模板
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageTemplate?: string
  /**
   * 自定义回调模板
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallBack?: CallBackInfo
  /**
   * 多维分析设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Analysis?: Array<AnalysisDimensional>
  /**
   * 分组触发状态。1：开启，0：关闭（默认）
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupTriggerStatus?: boolean
  /**
   * 分组触发条件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupTriggerCondition?: Array<string>
  /**
   * 监控对象类型。0:执行语句共用监控对象;1:每个执行语句单独选择监控对象。 
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorObjectType?: number
  /**
   * 告警级别。0:警告(Warn);1:提醒(Info);2:紧急 (Critical)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: number
  /**
   * 告警附加分类字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Classifications?: Array<AlarmClassification>
  /**
   * 多触发条件。与
Condition互斥。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MultiConditions?: Array<MultiCondition>
}

/**
 * 日志结果信息
 */
export interface LogInfo {
  /**
   * 日志时间，单位ms
   */
  Time?: number
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志主题名称
   */
  TopicName?: string
  /**
   * 日志来源IP
   */
  Source?: string
  /**
   * 日志文件名称
   */
  FileName?: string
  /**
   * 日志上报请求包的ID
   */
  PkgId?: string
  /**
   * 请求包内日志的ID
   */
  PkgLogId?: string
  /**
   * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogJson?: string
  /**
   * 日志来源主机名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * 原始日志(仅在日志创建索引异常时有值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawLog?: string
  /**
   * 日志创建索引异常原因(仅在日志创建索引异常时有值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStatus?: string
}

/**
 * DeleteAlarmNotice返回参数结构体
 */
export interface DeleteAlarmNoticeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogHistogram请求参数结构体
 */
export interface DescribeLogHistogramRequest {
  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number
  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number
  /**
   * 查询语句
   */
  Query: string
  /**
   * 要查询的日志主题ID
   */
  TopicId?: string
  /**
   * 时间间隔: 单位ms  限制性条件：(To-From) / interval <= 200
   */
  Interval?: number
  /**
   * 检索语法规则，默认值为0。
0：Lucene语法，1：CQL语法。
详细说明参见<a href="https://cloud.tencent.com/document/product/614/47044#RetrievesConditionalRules" target="_blank">检索条件语法规则</a>
   */
  SyntaxRule?: number
}

/**
 * DeleteAlarmShield请求参数结构体
 */
export interface DeleteAlarmShieldRequest {
  /**
   * 屏蔽规则id。
   */
  TaskId: string
  /**
   * 通知渠道组id。
   */
  AlarmNoticeId: string
}

/**
 * DescribeLogContext请求参数结构体
 */
export interface DescribeLogContextRequest {
  /**
   * 要查询的日志主题ID
   */
  TopicId: string
  /**
   * 日志时间,  即SearchLog接口返回信息中Results结构体中的Time，需按照 UTC+8 时区将该毫秒级Unix时间戳转换为 YYYY-mm-dd HH:MM:SS.FFF 格式的字符串。
   */
  BTime: string
  /**
   * 日志包序号，即SearchLog接口返回信息中Results结构体中的PkgId。
   */
  PkgId: string
  /**
   * 日志包内一条日志的序号，即SearchLog接口返回信息中Results结构中的PkgLogId。
   */
  PkgLogId: number
  /**
   * 前${PrevLogs}条日志，默认值10。
   */
  PrevLogs?: number
  /**
   * 后${NextLogs}条日志，默认值10。
   */
  NextLogs?: number
  /**
   * 检索语句，对日志上下文进行过滤，最大长度为12KB
语句由 <a href="https://cloud.tencent.com/document/product/614/47044" target="_blank">[检索条件]</a>构成，不支持SQL语句
   */
  Query?: string
  /**
   * 上下文检索的开始时间，单位：毫秒级时间戳
注意：
- From为空时，表示上下文检索的开始时间不做限制
- From和To非空时，From < To
- 暂时仅支持上海 / 弗吉尼亚/ 新加坡地域
   */
  From?: number
  /**
   * 上下文检索的结束时间，单位：毫秒级时间戳。
注意：
- To为空时，表示上下文检索的结束时间不做限制
- From和To非空时，From < To
- 暂时仅支持上海 / 弗吉尼亚/ 新加坡地域
   */
  To?: number
}

/**
 * DeleteShipper请求参数结构体
 */
export interface DeleteShipperRequest {
  /**
   * 投递规则ID
   */
  ShipperId: string
}

/**
 * DeleteScheduledSql请求参数结构体
 */
export interface DeleteScheduledSqlRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 源日志主题ID
   */
  SrcTopicId: string
}

/**
 * 键值索引自动配置，启用后自动将日志内的字段添加到键值索引中，包括日志中后续新增的字段。
 */
export interface DynamicIndex {
  /**
   * 键值索引自动配置开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * DeleteLogset返回参数结构体
 */
export interface DeleteLogsetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadLog返回参数结构体
 */
export interface UploadLogResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Parquet内容描述
 */
export interface ParquetKeyInfo {
  /**
   * 键值名称
   */
  KeyName: string
  /**
   * 数据类型，目前支持6种类型：string、boolean、int32、int64、float、double
   */
  KeyType: string
  /**
   * 解析失败赋值信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyNonExistingField: string
}

/**
 * DescribeCosRecharges返回参数结构体
 */
export interface DescribeCosRechargesResponse {
  /**
   * 见: CosRechargeInfo 结构描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<CosRechargeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudProductLogTask请求参数结构体
 */
export interface CreateCloudProductLogTaskRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 云产品标识，支持枚举：CDS、CWP、CDB、TDSQL-C、MongoDB、TDStore、DCDB、MariaDB、PostgreSQL、BH、APIS
   */
  AssumerName: string
  /**
   * 日志类型，支持枚举：CDS-AUDIT、CDS-RISK、CDB-AUDIT、TDSQL-C-AUDIT、MongoDB-AUDIT、MongoDB-SlowLog、MongoDB-ErrorLog、TDMYSQL-SLOW、DCDB-AUDIT、DCDB-SLOW、DCDB-ERROR、MariaDB-AUDIT、MariaDB-SLOW、MariaDB-ERROR、PostgreSQL-SLOW、PostgreSQL-ERROR、PostgreSQL-AUDIT、BH-FILELOG、BH-COMMANDLOG、APIS-ACCESS
   */
  LogType: string
  /**
   * 云产品地域。 不同日志类型(LogType)地域入參格式存在差异， 请参考如下示例：
- CDS所有日志类型：ap-guangzhou
- CDB-AUDIT: gz
- TDSQL-C-AUDIT:  gz
- MongoDB-AUDIT:  gz
- MongoDB-SlowLog：ap-guangzhou
- MongoDB-ErrorLog：ap-guangzhou
- TDMYSQL-SLOW：gz
- DCDB所有日志类型：gz
- MariaDB所有日志类型：gz
- PostgreSQL所有日志类型：gz
- BH所有日志类型：overseas-polaris(国内站海外)/fsi-polaris(国内站金融)/general-polaris(国内站普通)/intl-sg-prod(国际站)
- APIS所有日志类型：gz
   */
  CloudProductRegion: string
  /**
   * CLS目标地域
   */
  ClsRegion: string
  /**
   * 日志集名称，未填LogsetId时必填。若日志集不存在, 将自动创建
   */
  LogsetName?: string
  /**
   * 日志集ID，若指定则代表选择已有日志集。选择已有日志集时，LogsetName可以不填
   */
  LogsetId?: string
  /**
   * 日志主题名称，在未填TopicId时必填。 若日志主题不存在，将自动创建
   */
  TopicName?: string
  /**
   * 日志主题ID，若指定则代表选择已有日志主题，选择已有日志主题时，TopicName可以不填
   */
  TopicId?: string
  /**
   * 日志配置拓展信息， 一般用于存储额外的日志投递配置
   */
  Extend?: string
}

/**
 * DescribeShipperTasks返回参数结构体
 */
export interface DescribeShipperTasksResponse {
  /**
   * 投递任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<ShipperTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckFunction请求参数结构体
 */
export interface CheckFunctionRequest {
  /**
   * 用户输入的加工语句
   */
  EtlContent: string
  /**
   * 加工任务目的topic_id以及别名
   */
  DstResources?: Array<DataTransformResouceInfo>
  /**
   * 数据加工目标主题的类型. 1 固定主题 2动态创建
   */
  FuncType?: number
}

/**
 * 过滤器
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Key: string
  /**
   * 需要过滤的值。
   */
  Values: Array<string>
}

/**
 * DescribeAlarmShields返回参数结构体
 */
export interface DescribeAlarmShieldsResponse {
  /**
   * 符合条件的规则总数目
   */
  TotalCount?: number
  /**
   * 告警屏蔽规则详情
   */
  AlarmShields?: Array<AlarmShieldInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyConfigExtra返回参数结构体
 */
export interface ModifyConfigExtraResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchCosRechargeInfo请求参数结构体
 */
export interface SearchCosRechargeInfoRequest {
  /**
   * 日志主题 ID
   */
  TopicId: string
  /**
   * 日志集ID
   */
  LogsetId: string
  /**
   * 投递任务名称
   */
  Name: string
  /**
   * COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。
   */
  Bucket: string
  /**
   * COS存储桶所在地域，详见产品支持的[地域列表](https://cloud.tencent.com/document/product/436/6224)。
   */
  BucketRegion: string
  /**
   * COS文件所在文件夹的前缀。默认为空，投递存储桶下所有的文件。
   */
  Prefix?: string
  /**
   * 压缩模式:   "", "gzip", "lzop", "snappy";   默认""
   */
  Compress?: string
}

/**
 * DeleteScheduledSql返回参数结构体
 */
export interface DeleteScheduledSqlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNoticeContents请求参数结构体
 */
export interface DescribeNoticeContentsRequest {
  /**
   * <li> name
按照【通知内容模板名称】进行过滤。
类型：String
必选：否
</li>
<li> noticeContentId
按照【通知内容模板ID】进行过滤。
类型：String
必选：否
</li>
每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
}

/**
 * 控制台分享配置
 */
export interface ConsoleSharingConfig {
  /**
   * 分享链接名称
   */
  Name: string
  /**
   * 仪表盘: 1; 检索页:2
   */
  Type: number
  /**
   * 分享链接有效期，单位：毫秒，最长支持30天
   */
  DurationMilliseconds: number
  /**
   * 允许访问的资源列表，目前仅支持一个Resource
   */
  Resources: Array<string>
  /**
   * 分享链接域名，可选范围
- 公网匿名分享：填写clsshare.com
- datasight内网匿名分享(若开启)：datasight内网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 分享链接加密访问验证码。支持0-9和a-z(不区分大小写)在内的6个字符，可为空，代表免验证码访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyCode?: string
  /**
   * 默认查询范围的开始时间点，支持绝对时间(13位Unix时间戳)或相对时间表达式
   */
  StartTime?: string
  /**
   * 默认查询范围的结束时间点，支持绝对时间(13位Unix时间戳)或相对时间表达式。注意，结束时间点要大于开始时间点
   */
  EndTime?: string
  /**
   * 仅当StartTime/EndTime为相对时间时使用，基于NowTime计算绝对时间，默认为创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NowTime?: number
  /**
   * 默认的检索分析语句，仅当Type为2时使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: Array<ConsoleSharingParam>
  /**
   * 是否允许访问者自行修改检索分析时间范围。默认不锁定（false）
   */
  IsLockTimeRange?: boolean
  /**
   * 是否允许访问者自行修改日志检索语句。在检索页分享中表示检索语句锁定状态；在仪表盘中表示过滤变量锁定状态。默认不锁定（false）
   */
  IsLockQuery?: boolean
  /**
   * 检索页分享是否允许访问者下载日志，默认不允许（false）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportLogExport?: boolean
}

/**
 * DeleteConsoleSharing请求参数结构体
 */
export interface DeleteConsoleSharingRequest {
  /**
   * 免密分享Id
   */
  SharingId: string
}

/**
 * 升级通知
 */
export interface EscalateNoticeInfo {
  /**
   * 告警通知模板接收者信息。
   */
  NoticeReceivers: Array<NoticeReceiver>
  /**
   * 告警通知模板回调信息。
   */
  WebCallbacks: Array<WebCallback>
  /**
   * 告警升级开关。`true`：开启告警升级、`false`：关闭告警升级，默认：false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Escalate?: boolean
  /**
   * 告警升级间隔。单位：分钟，范围`[1，14400]`
注意：此字段可能返回 null，表示取不到有效值。
   */
  Interval?: number
  /**
   * 升级条件。`1`：无人认领且未恢复、`2`：未恢复，默认为1
- 无人认领且未恢复：告警没有恢复并且没有人认领则升级
- 未恢复：当前告警持续未恢复则升级

注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 告警升级后下一个环节的通知渠道配置，最多可配置5个环节。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EscalateNotice?: EscalateNoticeInfo
}

/**
 * DescribeWebCallbacks返回参数结构体
 */
export interface DescribeWebCallbacksResponse {
  /**
   * 告警渠道回调配置列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebCallbacks?: Array<WebCallbackInfo>
  /**
   * 符合条件的通知内容配置总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLogset请求参数结构体
 */
export interface CreateLogsetRequest {
  /**
   * 日志集名字，不能重名
   */
  LogsetName: string
  /**
   * 标签描述列表。最大支持10个标签键值对，并且不能有重复的键值对
   */
  Tags?: Array<Tag>
}

/**
 * DescribeShippers请求参数结构体
 */
export interface DescribeShippersRequest {
  /**
   * - shipperName：按照【投递规则名称】进行过滤。
    类型：String。
    必选：否
- shipperId：按照【投递规则ID】进行过滤。
    类型：String。
    必选：否
- topicId：按照【日志主题】进行过滤。
    类型：String。
    必选：否
- taskStatus
按照【任务运行状态】进行过滤。 支持`0`：停止，`1`：运行中，`2`：异常
类型：String
必选：否

每次请求的Filters的上限为10，Filter.Values的上限为10。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
  /**
   * 分页单页的限制数目，默认值为20，最大值100
   */
  Limit?: number
  /**
   * 控制Filters相关字段是否为精确匹配。  0: 默认值，shipperName模糊匹配 1: shipperName 精确匹配
   */
  PreciseSearch?: number
}

/**
 * CreateScheduledSql返回参数结构体
 */
export interface CreateScheduledSqlResponse {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDashboards请求参数结构体
 */
export interface DescribeDashboardsRequest {
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
  /**
   * - dashboardId 按照【仪表盘id】进行过滤，类型：String， 必选：否。
- dashboardName 按照【仪表盘名字】进行模糊搜索过滤，类型：String，必选：否。
- dashboardRegion 按照【仪表盘地域】进行过滤，为了兼容老的仪表盘，通过云API创建的仪表盘没有地域属性，类型：String，必选：否。
- tagKey 按照【标签键】进行过滤，类型：String，必选：否。
- tag:tagKey 按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换，类型：String，必选：否，使用请参考[示例2](https://cloud.tencent.com/document/api/614/95636#4.-.E7.A4.BA.E4.BE.8B)。

每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 按照topicId和regionId过滤。
   */
  TopicIdRegionFilter?: Array<TopicIdAndRegion>
}

/**
 * CreateConsoleSharing请求参数结构体
 */
export interface CreateConsoleSharingRequest {
  /**
   * 免密分享配置
   */
  SharingConfig: ConsoleSharingConfig
}

/**
 * CreateCloudProductLogTask返回参数结构体
 */
export interface CreateCloudProductLogTaskResponse {
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志主题名称
   */
  TopicName?: string
  /**
   * 日志集ID
   */
  LogsetId?: string
  /**
   * 日志集名称
   */
  LogsetName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNoticeContent返回参数结构体
 */
export interface DeleteNoticeContentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
}

/**
 * DescribePartitions请求参数结构体
 */
export interface DescribePartitionsRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
}

/**
 * 自建k8s-容器标准输出信息
 */
export interface ContainerStdoutInfo {
  /**
   * 是否所有容器
   */
  AllContainers: boolean
  /**
   * container为空表所有的，不为空采集指定的容器
注意：此字段可能返回 null，表示取不到有效值。
   */
  Container?: string
  /**
   * namespace可以多个，用分隔号分割,例如A,B；为空或者没有这个字段，表示所有namespace
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeLabels?: Array<string>
  /**
   * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkLoads?: Array<ContainerWorkLoadInfo>
  /**
   * 需要排除的namespace可以多个，用分隔号分割,例如A,B
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludeNamespace?: string
  /**
   * 需要排除的pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludeLabels?: Array<string>
  /**
   * metadata信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomLabels?: Array<string>
}

/**
 * 采集规则配置信息
 */
export interface ConfigInfo {
  /**
   * 采集规则配置ID
   */
  ConfigId?: string
  /**
   * 采集规则配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 日志格式化方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogFormat?: string
  /**
   * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 采集的日志类型。
- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；
- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；
- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；
- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；
- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；
- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；
- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）；
- service_syslog代表：syslog 采集（详见[采集 Syslog](https://cloud.tencent.com/document/product/614/81454)）；
- windows_event_log代表：Windows事件日志（详见[采集 Windows 事件日志](https://cloud.tencent.com/document/product/614/96678)）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogType?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtractRule?: ExtractRuleInfo
  /**
   * 采集黑名单路径列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludePaths?: Array<ExcludePathInfo>
  /**
   * 采集配置所属日志主题ID即TopicId
   */
  Output?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 用户自定义解析字符串，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDefineRule?: string
  /**
   * 高级采集配置。 Json字符串， Key/Value定义为如下：
- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时
- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数
- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false
样例：
`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`

控制台默认占位值：`{\"ClsAgentDefault\":0}`
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedConfig?: string
}

/**
 * QueryRangeMetric请求参数结构体
 */
export interface QueryRangeMetricRequest {
  /**
   * 指标主题ID
   */
  TopicId: string
  /**
   * 查询语句，使用PromQL语法
   */
  Query: string
  /**
   * 查询起始时间，秒级Unix时间戳
   */
  Start: number
  /**
   * 查询结束时间，秒级Unix时间戳
   */
  End: number
  /**
   * 查询时间间隔，单位秒
   */
  Step: number
}

/**
 * ModifyAlarm返回参数结构体
 */
export interface ModifyAlarmResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShipperTasks请求参数结构体
 */
export interface DescribeShipperTasksRequest {
  /**
   * 投递规则ID
   */
  ShipperId: string
  /**
   * 查询的开始时间戳，支持最近3天的查询， 毫秒。
StartTime必须小于EndTime
   */
  StartTime: number
  /**
   * 查询的结束时间戳， 毫秒。
StartTime必须小于EndTime
   */
  EndTime: number
}

/**
 * 采集配置信息
 */
export interface CollectInfo {
  /**
   * 采集类型，必填字段。
<li>0：元数据配置。</li>
<li>1：指定Pod Label。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: number
  /**
   * 指定采集类型的采集配置信息。
<li>当Type为0时，CollectConfigs不允许为空。</li>
<li>当Type为1时，CollectConfigs为空时，表示选择所有Pod Label；否则CollectConfigs为指定Pod Label。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectConfigs?: Array<CollectConfig>
}

/**
 * MergePartition请求参数结构体
 */
export interface MergePartitionRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 合并的PartitionId（找到下一个分区InclusiveBeginKey与入参PartitionId对应的ExclusiveEndKey相等，且找到的分区必须是读写分区（Staus:readwrite），入参PartitionId与找到的PartitionId设置为只读分区（Status:readonly）,再新建一个新的读写分区） 。[获取分区列表](https://cloud.tencent.com/document/product/614/56469)

1. 入参PartitionId只能是读写分区（Status的值有readonly，readwrite），且能找到入参PartitionId的下一个可读写分区（找到下一个分区InclusiveBeginKey与入参PartitionId对应的ExclusiveEndKey相等）；
2. 入参PartitionId不能是最后一个分区（PartitionId的ExclusiveEndKey不能是ffffffffffffffffffffffffffffffff）；
3. topic的分区数量是有限制的（默认50个），合并之后不能超过最大分区，否则不能合并。
   */
  PartitionId: number
}

/**
 * DescribeShippers返回参数结构体
 */
export interface DescribeShippersResponse {
  /**
   * 投递规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Shippers?: Array<ShipperInfo>
  /**
   * 本次查询获取到的总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 仪表盘 topic与地域信息
 */
export interface TopicIdAndRegion {
  /**
   * 日志主题id
   */
  TopicId: string
  /**
   * 日志主题id所在的地域id。

id,地域,简称信息如下：
- 1,   广州,ap-guangzhou
- 4,   上海,ap-shanghai
- 5,   中国香港,ap-hongkong
- 7,   上海金融,ap-shanghai-fsi
- 8,   北京,ap-beijing
- 9,   新加坡,ap-singapore
- 11,  深圳金融,ap-shenzhen-fsi
- 15,  硅谷,na-siliconvalley
- 16,  成都,ap-chengdu
- 17,  法兰克福,eu-frankfurt
- 18,  首尔,ap-seoul
- 19,  重庆,ap-chongqing
- 21,  孟买,ap-mumbai
- 22,  弗吉尼亚,na-ashburn
- 23,  曼谷,ap-bangkok
- 25,  东京,ap-tokyo
- 33,  南京,ap-nanjing
- 46,  北京金融,ap-beijing-fsi
- 72,  雅加达,ap-jakarta
- 74,  圣保罗,sa-saopaulo
   */
  RegionId: number
}

/**
 * DescribeKafkaConsumer返回参数结构体
 */
export interface DescribeKafkaConsumerResponse {
  /**
   * Kafka协议消费是否打开
   */
  Status?: boolean
  /**
   * KafkaConsumer 消费时使用的Topic参数
   */
  TopicID?: string
  /**
   * 压缩方式[0:NONE；2:SNAPPY；3:LZ4]
   */
  Compression?: number
  /**
   * kafka协议消费数据格式
   */
  ConsumerContent?: KafkaConsumerContent
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConfigExtra返回参数结构体
 */
export interface CreateConfigExtraResponse {
  /**
   * 采集配置扩展信息ID
   */
  ConfigExtraId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Kafka导入配置信息
 */
export interface KafkaRechargeInfo {
  /**
   * Kafka数据订阅配置的ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * Kafka导入任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 导入Kafka类型，0: 腾讯云CKafka，1: 用户自建Kafka
注意：此字段可能返回 null，表示取不到有效值。
   */
  KafkaType?: number
  /**
   * 腾讯云CKafka实例ID，KafkaType为0时必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  KafkaInstance?: string
  /**
   * 服务地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerAddr?: string
  /**
   * ServerAddr是否为加密连接	
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEncryptionAddr?: boolean
  /**
   * 加密访问协议，IsEncryptionAddr参数为true时必填
   */
  Protocol?: KafkaProtocolInfo
  /**
   * 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserKafkaTopics?: string
  /**
   * 用户Kafka消费组名称	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerGroupName?: string
  /**
   * 状态 ，1：运行中；2：暂停。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 导入数据位置，-2:最早（默认），-1：最晚
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 日志导入规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogRechargeRule?: LogRechargeRuleInfo
}

/**
 * DeleteKafkaRecharge返回参数结构体
 */
export interface DeleteKafkaRechargeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建资源实例时同时绑定的标签对说明
 */
export interface Tag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * 自建k8s-工作负载信息
 */
export interface ContainerWorkLoadInfo {
  /**
   * 工作负载的类型
   */
  Kind: string
  /**
   * 工作负载的名称
   */
  Name: string
  /**
   * 容器名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Container?: string
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
}

/**
 * 云产品日志投递任务信息
 */
export interface CloudProductLogTaskInfo {
  /**
   * 日志服务地域
   */
  ClsRegion?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 日志集ID
   */
  LogsetId?: string
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志配置拓展信息， 一般用于存储额外的日志投递配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extend?: string
  /**
   * 日志类型，支持枚举：CDS-AUDIT、CDS-RISK、CDB-AUDIT、TDSQL-C-AUDIT、MongoDB-AUDIT、MongoDB-SlowLog、MongoDB-ErrorLog、TDMYSQL-SLOW、DCDB-AUDIT、DCDB-SLOW、DCDB-ERROR、MariaDB-AUDIT、MariaDB-SLOW、MariaDB-ERROR、PostgreSQL-SLOW、PostgreSQL-ERROR、PostgreSQL-AUDIT、BH-FILELOG、BH-COMMANDLOG、APIS-ACCESS
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogType?: string
}

/**
 * ModifyDataTransform请求参数结构体
 */
export interface ModifyDataTransformRequest {
  /**
   * 加工任务id
   */
  TaskId: string
  /**
   * 加工任务名称
   */
  Name?: string
  /**
   * 加工语句。 当FuncType为2时，EtlContent必须使用[log_auto_output](https://cloud.tencent.com/document/product/614/70733#b3c58797-4825-4807-bef4-68106e25024f) 

其他参考文档：

- [创建加工任务](https://cloud.tencent.com/document/product/614/63940) 
-  [函数总览](https://cloud.tencent.com/document/product/614/70395)
   */
  EtlContent?: string
  /**
   * 任务启动状态. 默认为1，开启,  2关闭
   */
  EnableFlag?: number
  /**
   * 加工任务目的topic_id以及别名
   */
  DstResources?: Array<DataTransformResouceInfo>
  /**
   * 是否开启投递服务日志。1关闭，2开启
   */
  HasServicesLog?: number
}

/**
 * DescribeScheduledSqlInfo返回参数结构体
 */
export interface DescribeScheduledSqlInfoResponse {
  /**
   * ScheduledSQL任务列表信息
   */
  ScheduledSqlTaskInfos?: Array<ScheduledSqlTaskInfo>
  /**
   * 任务总次数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 回调配置
 */
export interface CallBackInfo {
  /**
   * 回调时的Body。
可将各类告警变量放在请求内容中，详见[帮助文档](https://cloud.tencent.com/document/product/614/74718)。
如下示例：

```
{
"TopicId": "{{ .QueryLog[0][0].topicId }}",
"key": "{{.Alarm}}",
"time": "{{ .QueryLog[0][0].time }}",
"log": "{{ .QueryLog[0][0].content.__CONTENT__ }}",
"namespace": "{{ .QueryLog[0][0].content.__TAG__.namespace }}"
}
```
   */
  Body: string
  /**
   * 回调时的HTTP请求头部字段。
例如：下面请求头部字段来告知服务器请求主体的内容类型为JSON。
```
"Content-Type: application/json"
```
注意：此字段可能返回 null，表示取不到有效值。
   */
  Headers?: Array<string>
}

/**
 * OpenKafkaConsumer返回参数结构体
 */
export interface OpenKafkaConsumerResponse {
  /**
   * KafkaConsumer 消费时使用的Topic参数
   */
  TopicID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警对象
 */
export interface AlarmTargetInfo {
  /**
   * 日志集ID。
   */
  LogsetId?: string
  /**
   * 日志集名称。
   */
  LogsetName?: string
  /**
   * 日志主题ID。
   */
  TopicId?: string
  /**
   * 日志主题名称。
   */
  TopicName?: string
  /**
   * 查询语句。
   */
  Query?: string
  /**
   * 告警对象序号。
   */
  Number?: number
  /**
   * 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。
   */
  StartTimeOffset?: number
  /**
   * 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
   */
  EndTimeOffset?: number
  /**
   * 检索语法规则，默认值为0。
0：Lucene语法，1：CQL语法。
详细说明参见<a href="https://cloud.tencent.com/document/product/614/47044#RetrievesConditionalRules" target="_blank">检索条件语法规则</a>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyntaxRule?: number
  /**
   * 主题类型。
0: 日志主题，1: 指标主题
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizType?: number
}

/**
 * 键值索引配置
 */
export interface RuleKeyValueInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive: boolean
  /**
   * 需要建立索引的键值对信息
   */
  KeyValues?: Array<KeyValueInfo>
}

/**
 * 告警分类信息
 */
export interface AlarmClassification {
  /**
   * 分类键
   */
  Key: string
  /**
   * 分类值
   */
  Value: string
}

/**
 * ScheduledSql的资源信息
 */
export interface ScheduledSqlResouceInfo {
  /**
   * 目标主题id
   */
  TopicId: string
  /**
   * 主题的地域信息
   */
  Region?: string
  /**
   * 主题类型：0为日志主题，1为指标主题
   */
  BizType?: number
  /**
   * 指标名称。当BizType为1时，MetricName需要填写
   */
  MetricName?: string
  /**
   * 指标名称
BizType为1时，优先使用MetricNames字段多指标只能填充到MetricNames字段，单指标建议填充到MetricName字段
   */
  MetricNames?: Array<string>
  /**
   * 指标维度，不接受时间类型。
   */
  MetricLabels?: Array<string>
  /**
   * 指标时间戳，默认值为SQL查询时间范围的左侧时间点，您也可以指定其他字段（类型为uinx时间、TimeStamp，精度毫秒）为指标时间戳。
   */
  CustomTime?: string
  /**
   * 除了MetricLabels，您还可以使用该参数，为指标补充静态的维度。
维度名以字母或下划线开头，后面可以跟字母、数字或下划线，长度小于等于1024 字节
   */
  CustomMetricLabels?: Array<MetricLabel>
}

/**
 * 文件路径信息
 */
export interface FilePathInfo {
  /**
   * 文件路径
   */
  Path?: string
  /**
   * 文件名称
   */
  File?: string
}

/**
 * DescribeIndex请求参数结构体
 */
export interface DescribeIndexRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
}

/**
 * ModifyScheduledSql返回参数结构体
 */
export interface ModifyScheduledSqlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 投递日志的过滤规则
 */
export interface FilterRuleInfo {
  /**
   * 过滤规则Key
   */
  Key: string
  /**
   * 过滤规则
   */
  Regex: string
  /**
   * 过滤规则Value
   */
  Value: string
}

/**
 * DeleteCloudProductLogTask请求参数结构体
 */
export interface DeleteCloudProductLogTaskRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 云产品标识，支持枚举：CDS、CWP、CDB、TDSQL-C、MongoDB、TDStore、DCDB、MariaDB、PostgreSQL、BH、APIS
   */
  AssumerName: string
  /**
   * 日志类型，支持枚举：CDS-AUDIT、CDS-RISK、CDB-AUDIT、TDSQL-C-AUDIT、MongoDB-AUDIT、MongoDB-SlowLog、MongoDB-ErrorLog、TDMYSQL-SLOW、DCDB-AUDIT、DCDB-SLOW、DCDB-ERROR、MariaDB-AUDIT、MariaDB-SLOW、MariaDB-ERROR、PostgreSQL-SLOW、PostgreSQL-ERROR、PostgreSQL-AUDIT、BH-FILELOG、BH-COMMANDLOG、APIS-ACCESS
   */
  LogType: string
  /**
   * 云产品地域。 不同日志类型(LogType)地域入參格式存在差异， 请参考如下示例：
- CDS所有日志类型：ap-guangzhou
- CDB-AUDIT: gz
- TDSQL-C-AUDIT: gz
- MongoDB-AUDIT: gz
- MongoDB-SlowLog：ap-guangzhou
- MongoDB-ErrorLog：ap-guangzhou
- TDMYSQL-SLOW：gz
- DCDB所有日志类型：gz
- MariaDB所有日志类型：gz
- PostgreSQL所有日志类型：gz
- BH所有日志类型：overseas-polaris(国内站海外)/fsi-polaris(国内站金融)/general-polaris(国内站普通)/intl-sg-prod(国际站)
- APIS所有日志类型：gz
   */
  CloudProductRegion: string
}

/**
 * 免鉴权条件信息
 */
export interface ConditionInfo {
  /**
   * 条件属性，目前只支持VpcID
   */
  Attributes?: string
  /**
   * 条件规则，1:等于，2:不等于
   */
  Rule?: number
  /**
   * 对应条件属性的值
   */
  ConditionValue?: string
}

/**
 * 机器组信息
 */
export interface MachineGroupInfo {
  /**
   * 机器组ID
   */
  GroupId?: string
  /**
   * 机器组名称
   */
  GroupName?: string
  /**
   * 机器组类型
   */
  MachineGroupType?: MachineGroupTypeInfo
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 机器组绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 是否开启机器组自动更新
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoUpdate?: string
  /**
   * 升级开始时间，建议业务低峰期升级LogListener
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateStartTime?: string
  /**
   * 升级结束时间，建议业务低峰期升级LogListener
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateEndTime?: string
  /**
   * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceLogging?: boolean
  /**
   * 机器组中机器离线定期清理时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayCleanupTime?: number
  /**
   * 机器组元数据信息列表
   */
  MetaTags?: Array<MetaTagInfo>
  /**
   * 操作系统类型，0: Linux，1: windows
   */
  OSType?: number
}

/**
 * DeleteMachineGroupInfo请求参数结构体
 */
export interface DeleteMachineGroupInfoRequest {
  /**
   * 机器组ID
   */
  GroupId: string
  /**
   * 机器组类型
目前type支持 ip 和 label
   */
  MachineGroupType: MachineGroupTypeInfo
}

/**
 * CreateLogset返回参数结构体
 */
export interface CreateLogsetResponse {
  /**
   * 日志集ID
   */
  LogsetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通知规则
 */
export interface NoticeRule {
  /**
   * 匹配规则 JSON串。
**rule规则树格式为嵌套结构体JSON字符串**
`{"Value":"AND","Type":"Operation","Children":[{"Value":"OR","Type":"Operation","Children":[{"Type":"Condition","Value":"Level","Children":[{"Value":"In","Type":"Compare"},{"Value":"[1,0]","Type":"Value"}]},{"Type":"Condition","Value":"Level","Children":[{"Value":"NotIn","Type":"Compare"},{"Value":"[2]","Type":"Value"}]}]}]}`

**rule规则树限制规则如下**：
- 顶层rule中Type可取值：`Condition`，`Operation`
- Type为`Operation`的子节点支持的Type可取值：`Condition`，`Operation`
- Type为`Condition`的子节点支持的Type可取值：`String`，`Compare`，`Array`，`TimeRange`，`Value`，`Key`
- 其他Type无子节点
- 当rule Type为`Operation`时，value可取值：`AND`，`OR`
- 当rule Type为`Condition`时，value不可为空，子节点个数不能小于2
    - 当子节点Type为  `Compare` 时，value可取值：`>`，`<`，`>=`，`<=`，`=`，`!=`，`Between`，`NotBetween`，`=~`，`!=~`，`In`，`NotIn`
    - value为`Between`，`NotBetween`时，下一个子节点value必须是长度为2的数组
    - value为`=~`，`!=~`时，下一个子节点value必须是一个正则表达式
    - value为`In`，`NotIn`时， 下一个子节点value必须是一个数组

**业务参数含义**：
- Type：Condition 表示是规则条件，Value：Level 表示告警等级
    - 子节点Type支持`Compare`，Value支持`In`，`NotIn`
    - 下一个子节点value支持的值：0（警告），1（提醒），2 （紧急）
以下示例表示：告警等级属于提醒
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Level\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[1]\",\"Type\":\"Value\"}]}]}`

- Type：Condition 表示是规则条件，Value：NotifyType 表示通知类型
    - 子节点Type支持`Compare`，Value支持`In`，`NotIn`
    - 下一个子节点value支持的值：1（告警通知），2 （恢复通知）
以下示例表示：通知类型属于告警通知或通知类型不属于恢复通知
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"NotifyType\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[1]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"NotifyType\",\"Children\":[{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[2]\",\"Type\":\"Value\"}]}]}]}`

- Type：Condition 表示是规则条件，Value：AlarmID 表示告警策略
    - 子节点Type支持`Compare`，Value支持`In`，`NotIn`
    - 下一个子节点value支持的值：告警策略id数组
以下示例表示：告警策略属于alarm-53af048c-254b-4c73-bb48-xxx,alarm-6dfa8bc5-08da-4d64-b6cb-xxx或告警策略不属于alarm-1036314c-1e49-4cee-a8fb-xxx
`"{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"AlarmID\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"alarm-53af048c-254b-4c73-bb48-xxx\\\",\\\"alarm-6dfa8bc5-08da-4d64-b6cb-xxx\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"AlarmID\",\"Children\":[{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"alarm-1036314c-1e49-4cee-a8fb-xxx\\\"]\",\"Type\":\"Value\"}]}]}]}"`

- Type：Condition 表示是规则条件，Value：AlarmName 表示告警策略名称
    - 子节点Type支持`Compare`，Value支持`=~`，`!=~`
    - 下一个子节点value支持的值：必须是正则表达式
以下示例表示：告警策略名称正则匹配^test$或告警策略名称正则不匹配^hahaha$
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"AlarmName\",\"Children\":[{\"Value\":\"=~\",\"Type\":\"Compare\"},{\"Value\":\"^test$\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"AlarmName\",\"Children\":[{\"Value\":\"!=~\",\"Type\":\"Compare\"},{\"Value\":\"^hahaha$\",\"Type\":\"Value\"}]}]}]}`

- Type：Condition 表示是规则条件，Value：Label 表示告警分类字段
    - 子节点Type支持`Compare`，Value支持`In`，`NotIn`，`=~`，`!=~`
    - 下一个子节点value支持的值：`In`，`NotIn` 时value是数组，`=~`，`!=~`时value是正则表达式
以下示例表示：告警分类字段key1属于v1或告警分类字段key2不属于v2或告警分类字段key3正则匹配^test$或告警分类字段key4正则不匹配^hahaha$
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key1\",\"Type\":\"Key\"},{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"v1\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key2\",\"Type\":\"Key\"},{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"v2\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key3\",\"Type\":\"Key\"},{\"Value\":\"=~\",\"Type\":\"Compare\"},{\"Value\":\"^test$\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key4\",\"Type\":\"Key\"},{\"Value\":\"!=~\",\"Type\":\"Compare\"},{\"Value\":\"^hahaha$\",\"Type\":\"Value\"}]}]}]}`

- Type：Condition 表示是规则条件，Value：NotifyTime 表示通知时间
    - 子节点Type支持`Compare`，Value支持`Between `，`NotBetween `
    - 下一个子节点value支持的值：长度为2，格式为`14:20:36`的字符串数组
以下示例表示：通知时间在指定范围内14:18:36至14:33:36或通知时间不在指定范围内14:20:36至14:30:36
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"NotifyTime\",\"Children\":[{\"Value\":\"Between\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"14:18:36\\\",\\\"14:33:36\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"NotifyTime\",\"Children\":[{\"Value\":\"NotBetween\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"14:20:36\\\",\\\"14:30:36\\\"]\",\"Type\":\"Value\"}]}]}]}`

- Type：Condition 表示是规则条件，Value：Duration 表示告警持续时间
    - 子节点Type支持`Compare`，Value支持`>`，`<`，`>=`，`<=`
    - 下一个子节点value支持的值：整型值单位分钟
以下示例表示：告警持续时间大于1分钟或告警持续时间大于等于2分钟或告警持续时间小于3分钟或告警持续时间小于等于4分钟
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\">\",\"Type\":\"Compare\"},{\"Value\":1,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\">=\",\"Type\":\"Compare\"},{\"Value\":2,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\"<\",\"Type\":\"Compare\"},{\"Value\":3,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\"<=\",\"Type\":\"Compare\"},{\"Value\":4,\"Type\":\"Value\"}]}]}]}`
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rule?: string
  /**
   * 告警通知接收者信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeReceivers?: Array<NoticeReceiver>
  /**
   * 告警通知模板回调信息，包括企业微信、钉钉、飞书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebCallbacks?: Array<WebCallback>
  /**
   * 告警升级开关。`true`：开启告警升级、`false`：关闭告警升级，默认：false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Escalate?: boolean
  /**
   * 告警升级条件。`1`：无人认领且未恢复、`2`：未恢复，默认为1
- 无人认领且未恢复：告警没有恢复并且没有人认领则升级
- 未恢复：当前告警持续未恢复则升级

注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 告警升级间隔。单位：分钟，范围`[1，14400]`
注意：此字段可能返回 null，表示取不到有效值。
   */
  Interval?: number
  /**
   * 告警升级后下一个环节的通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  EscalateNotice?: EscalateNoticeInfo
}

/**
 * 仪表盘订阅通知方式
 */
export interface DashboardNoticeMode {
  /**
   * 仪表盘通知方式。<br>
<li/>Uin：腾讯云用户<br>
<li/>Group：腾讯云用户组<br>
<li/>Email：自定义Email<br>
<li/>WeCom: 企业微信回调
   */
  ReceiverType: string
  /**
   * 知方式对应的值。
<br> <li/> 当ReceiverType不是 Wecom 时，Values必填。
   */
  Values?: Array<string>
  /**
   * 仪表盘通知渠道。
<br><li/> 支持：["Email","Sms","WeChat","Phone"]。
<br><li/> 当ReceiverType是 Email 或 Wecom 时，ReceiverChannels不能赋值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverChannels?: Array<string>
  /**
   * 回调Url。
<br><li/> 当ReceiverType是 Wecom 时，Url必填。
<br><li/> 当ReceiverType不是 Wecom 时，Url不能填写。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * Kafka访问协议
 */
export interface KafkaProtocolInfo {
  /**
   * 协议类型，支持的协议类型包括 plaintext、sasl_plaintext 或 sasl_ssl。建议使用 sasl_ssl，此协议会进行连接加密同时需要用户认证。
入参必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 加密类型，支持 PLAIN、SCRAM-SHA-256 或 SCRAM-SHA-512。
当Protocol为sasl_plaintext或sasl_ssl时必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mechanism?: string
  /**
   * 用户名。
当Protocol为sasl_plaintext或sasl_ssl时必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 用户密码。
当Protocol为sasl_plaintext或sasl_ssl时必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
}

/**
 * ScheduledSql任务详情
 */
export interface ScheduledSqlTaskInfo {
  /**
   * ScheduledSql任务id
   */
  TaskId?: string
  /**
   * ScheduledSql任务名称
   */
  Name?: string
  /**
   * 源日志主题id
   */
  SrcTopicId?: string
  /**
   * 源日志主题名称
   */
  SrcTopicName?: string
  /**
   * 定时SQL分析目标主题
   */
  DstResource?: ScheduledSqlResouceInfo
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 任务更新时间
   */
  UpdateTime?: string
  /**
   * 任务状态，1:运行 2:停止 3:异常-找不到源日志主题 4:异常-找不到目标主题

5: 访问权限问题 6:内部故障 7:其他故障
   */
  Status?: number
  /**
   * 任务启用状态，1开启,  2关闭
   */
  EnableFlag?: number
  /**
   * 查询语句
   */
  ScheduledSqlContent?: string
  /**
   * 调度开始时间
   */
  ProcessStartTime?: string
  /**
   * 调度类型，1:持续运行 2:指定时间范围
   */
  ProcessType?: number
  /**
   * 调度结束时间，当process_type=2时为必传字段
   */
  ProcessEndTime?: string
  /**
   * 调度周期(分钟)
   */
  ProcessPeriod?: number
  /**
   * 查询的时间窗口. @m-15m, @m，意为近15分钟
   */
  ProcessTimeWindow?: string
  /**
   * 执行延迟(秒)
   */
  ProcessDelay?: number
  /**
   * 源topicId的地域信息
   */
  SrcTopicRegion?: string
  /**
   * 语法规则，0：Lucene语法，1：CQL语法
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyntaxRule?: number
  /**
   * 是否开启投递服务日志。1：关闭，2：开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasServicesLog?: number
}

/**
 * DescribeConfigMachineGroups请求参数结构体
 */
export interface DescribeConfigMachineGroupsRequest {
  /**
   * 采集配置ID
   */
  ConfigId: string
}

/**
 * 元数据信息
 */
export interface MetaTagInfo {
  /**
   * 元数据key
   */
  Key?: string
  /**
   * 元数据value
   */
  Value?: string
}

/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 日志主题名称
   */
  TopicName?: string
  /**
   * 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，并且不能有重复的键值对。
   */
  Tags?: Array<Tag>
  /**
   * 主题是否开启采集，true：开启采集；false：关闭采集。
控制台目前不支持修改此参数。
   */
  Status?: boolean
  /**
   * 是否开启自动分裂
   */
  AutoSplit?: boolean
  /**
   * 若开启最大分裂，该主题能够能够允许的最大分区数
   */
  MaxSplitPartitions?: number
  /**
   * 生命周期，单位天，标准存储取值范围1\~3600，低频存储取值范围7\~3600。取值为3640时代表永久保存
   */
  Period?: number
  /**
   * 日志主题描述
   */
  Describes?: string
  /**
   * 0：关闭日志沉降。
非0：开启日志沉降后标准存储的天数。HotPeriod需要大于等于7，且小于Period。仅在StorageType为 hot 时生效
   */
  HotPeriod?: number
  /**
   * 免鉴权开关。 false：关闭； true：开启。
开启后将支持指定操作匿名访问该日志主题。详情请参见[日志主题](https://cloud.tencent.com/document/product/614/41035)。
   */
  IsWebTracking?: boolean
  /**
   * 日志主题扩展信息
   */
  Extends?: TopicExtendInfo
  /**
   * 日志主题分区数量
   */
  PartitionCount?: number
  /**
   * 取消切换存储任务的id
   */
  CancelTopicAsyncTaskID?: string
}

/**
 * CreateCosRecharge请求参数结构体
 */
export interface CreateCosRechargeRequest {
  /**
   * 日志主题 ID
   */
  TopicId: string
  /**
   * 日志集ID
   */
  LogsetId: string
  /**
   * 投递任务名称
   */
  Name: string
  /**
   * COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。
   */
  Bucket: string
  /**
   * COS存储桶所在地域，详见产品支持的[地域列表](https://cloud.tencent.com/document/product/436/6224)。
   */
  BucketRegion: string
  /**
   * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表单行全文；
默认为minimalist_log
   */
  LogType: string
  /**
   * COS文件所在文件夹的前缀。默认为空，投递存储桶下所有的文件。
   */
  Prefix?: string
  /**
   * supported: "", "gzip", "lzop", "snappy"; 默认空
   */
  Compress?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
   */
  ExtractRuleInfo?: ExtractRuleInfo
  /**
   * COS导入任务类型。1：一次性导入任务；2：持续性导入任务。默认为1：一次性导入任务
   */
  TaskType?: number
  /**
   * 元数据。
   */
  Metadata?: Array<string>
}

/**
 * DescribeConfigs返回参数结构体
 */
export interface DescribeConfigsResponse {
  /**
   * 采集配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Configs?: Array<ConfigInfo>
  /**
   * 过滤到的总数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNoticeContents返回参数结构体
 */
export interface DescribeNoticeContentsResponse {
  /**
   * 通知内容模板列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeContents?: Array<NoticeContentTemplate>
  /**
   * 符合条件的通知内容模板总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlarmShield返回参数结构体
 */
export interface CreateAlarmShieldResponse {
  /**
   * 屏蔽规则ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDataTransform返回参数结构体
 */
export interface DeleteDataTransformResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConfigExtra返回参数结构体
 */
export interface DeleteConfigExtraResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyConsumer请求参数结构体
 */
export interface ModifyConsumerRequest {
  /**
   * 投递任务绑定的日志主题 ID
   */
  TopicId: string
  /**
   * 投递任务是否生效，默认不生效
   */
  Effective?: boolean
  /**
   * 是否投递日志的元数据信息，默认为 true。
当NeedContent为true时：字段Content有效。
当NeedContent为false时：字段Content无效。
   */
  NeedContent?: boolean
  /**
   * 如果需要投递元数据信息，元数据信息的描述
   */
  Content?: ConsumerContent
  /**
   * CKafka的描述
   */
  Ckafka?: Ckafka
  /**
   * 投递时压缩方式，取值0，2，3。[0：NONE；2：SNAPPY；3：LZ4]
   */
  Compression?: number
}

/**
 * CreateIndex返回参数结构体
 */
export interface CreateIndexResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConfigFromMachineGroup返回参数结构体
 */
export interface DeleteConfigFromMachineGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDashboardSubscribe返回参数结构体
 */
export interface ModifyDashboardSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDashboardSubscribe请求参数结构体
 */
export interface ModifyDashboardSubscribeRequest {
  /**
   * 仪表盘订阅id。
   */
  Id: number
  /**
   * 仪表盘id。
   */
  DashboardId?: string
  /**
   * 仪表盘订阅名称。
   */
  Name?: string
  /**
   * 订阅时间cron表达式，格式为：{秒数} {分钟} {小时} {日期} {月份} {星期}；（有效数据为：{分钟} {小时} {日期} {月份} {星期}）。
   */
  Cron?: string
  /**
   * 仪表盘订阅数据。
   */
  SubscribeData?: DashboardSubscribeData
}

/**
 * CreateConsumer返回参数结构体
 */
export interface CreateConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsoleSharingList返回参数结构体
 */
export interface DescribeConsoleSharingListResponse {
  /**
   * 分页的总数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWebCallback返回参数结构体
 */
export interface DeleteWebCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMachineGroup返回参数结构体
 */
export interface ModifyMachineGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据加工的资源信息
 */
export interface DataTransformResouceInfo {
  /**
   * 目标主题id
   */
  TopicId: string
  /**
   * 别名
   */
  Alias: string
}

/**
 * CreateDashboardSubscribe请求参数结构体
 */
export interface CreateDashboardSubscribeRequest {
  /**
   * 仪表盘订阅名称。
   */
  Name: string
  /**
   * 仪表盘id。
   */
  DashboardId: string
  /**
   * 订阅时间cron表达式，格式为：{秒数} {分钟} {小时} {日期} {月份} {星期}；（有效数据为：{分钟} {小时} {日期} {月份} {星期}）。<br><li/>{秒数} 取值范围： 0 ~ 59 <br><li/>{分钟} 取值范围： 0 ~ 59  <br><li/>{小时} 取值范围： 0 ~ 23  <br><li/>{日期} 取值范围： 1 ~ 31 AND (dayOfMonth最后一天： L) <br><li/>{月份} 取值范围： 1 ~ 12 <br><li/>{星期} 取值范围： 0 ~ 6 【0:星期日， 6星期六】
   */
  Cron: string
  /**
   * 仪表盘订阅数据。
   */
  SubscribeData: DashboardSubscribeData
}

/**
 * DeleteMachineGroup请求参数结构体
 */
export interface DeleteMachineGroupRequest {
  /**
   * 机器组ID
   */
  GroupId: string
}

/**
 * 全文索引配置
 */
export interface FullTextInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive: boolean
  /**
   * 全文索引的分词符，其中的每个字符代表一个分词符；
仅支持英文符号、\n\t\r及转义符\；
注意：\n\t\r本身已被转义，直接使用双引号包裹即可作为入参，无需再次转义。使用API Explorer进行调试时请使用JSON参数输入方式，以避免\n\t\r被重复转义
   */
  Tokenizer: string
  /**
   * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainZH?: boolean
}

/**
 * QueryMetric返回参数结构体
 */
export interface QueryMetricResponse {
  /**
   * 指标查询结果类型
   */
  ResultType?: string
  /**
   * 指标查询结果
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmShields请求参数结构体
 */
export interface DescribeAlarmShieldsRequest {
  /**
   * 通知渠道组id。
   */
  AlarmNoticeId: string
  /**
   * - taskId:按照【规则id】进行过滤。类型：String  必选：否
- status:按照【规则状态】进行过滤。类型：String。 支持 0:暂未生效，1:生效中，2:已失效。 必选：否
每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
}

/**
 * ModifyLogset请求参数结构体
 */
export interface ModifyLogsetRequest {
  /**
   * 日志集ID
   */
  LogsetId: string
  /**
   * 日志集名称
   */
  LogsetName?: string
  /**
   * 日志集的绑定的标签键值对。最大支持10个标签键值对，同一个资源只能同时绑定一个标签键。
   */
  Tags?: Array<Tag>
}

/**
 * 告警渠道回调配置信息
 */
export interface WebCallbackInfo {
  /**
   * 告警渠道回调配置id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebCallbackId?: string
  /**
   * 告警渠道回调配置名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 渠道类型

WeCom:企业微信;DingTalk:钉钉;Lark:飞书;Http:自定义回调;
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 回调地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Webhook?: string
  /**
   * 请求方式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: string
  /**
   * 秘钥信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 主账号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: number
  /**
   * 子账号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUin?: number
  /**
   * 创建时间。秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 更新时间。秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
}

/**
 * ModifyNoticeContent返回参数结构体
 */
export interface ModifyNoticeContentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchDashboardSubscribe请求参数结构体
 */
export interface SearchDashboardSubscribeRequest {
  /**
   * 仪表盘id。
   */
  DashboardId: string
  /**
   * 仪表盘订阅数据。
   */
  SubscribeData: DashboardSubscribeData
  /**
   * 仪表盘订阅Id。
   */
  Id?: number
  /**
   * 仪表盘订阅名称。
   */
  Name?: string
}

/**
 * DescribePartitions返回参数结构体
 */
export interface DescribePartitionsResponse {
  /**
   * 分区列表
   */
  Partitions?: Array<PartitionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigMachineGroups返回参数结构体
 */
export interface DescribeConfigMachineGroupsResponse {
  /**
   * 采集规则配置绑定的机器组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MachineGroups?: Array<MachineGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarm请求参数结构体
 */
export interface ModifyAlarmRequest {
  /**
   * 告警策略ID。
   */
  AlarmId: string
  /**
   * 告警策略名称
   */
  Name?: string
  /**
   * 监控任务运行时间点。
   */
  MonitorTime?: MonitorTime
  /**
   * 触发条件。

注意:  
- Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。
   */
  Condition?: string
  /**
   * 告警级别。

0:警告(Warn);1:提醒(Info);2:紧急 (Critical)

注意:  
- Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。
   */
  AlarmLevel?: number
  /**
   * 多触发条件。 

注意:  
- Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。
   */
  MultiConditions?: Array<MultiCondition>
  /**
   * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为2000。
   */
  TriggerCount?: number
  /**
   * 告警重复的周期。单位是分钟。取值范围是0~1440。
   */
  AlarmPeriod?: number
  /**
   * 关联的告警通知模板列表。
   */
  AlarmNoticeIds?: Array<string>
  /**
   * 监控对象列表。
   */
  AlarmTargets?: Array<AlarmTarget>
  /**
   * 是否开启告警策略。
   */
  Status?: boolean
  /**
   * 该参数已废弃，请使用Status参数控制是否开启告警策略。
   */
  Enable?: boolean
  /**
   * 用户自定义告警内容
   */
  MessageTemplate?: string
  /**
   * 用户自定义回调
   */
  CallBack?: CallBackInfo
  /**
   * 多维分析
   */
  Analysis?: Array<AnalysisDimensional>
  /**
   * 分组触发状态。true：开启，false：关闭（默认）
   */
  GroupTriggerStatus?: boolean
  /**
   * 分组触发条件。
   */
  GroupTriggerCondition?: Array<string>
  /**
   * 标签描述列表，通过指定该参数可以同时绑定标签到相应的告警策略。最大支持10个标签键值对，并且不能有重复的键值对。
   */
  Tags?: Array<Tag>
  /**
   * 监控对象类型。0:执行语句共用监控对象; 1:每个执行语句单独选择监控对象。 
当值为1时，AlarmTargets元素个数不能超过10个，AlarmTargets中的Number必须是从1开始的连续正整数，不能重复。

   */
  MonitorObjectType?: number
  /**
   * 告警附加分类信息列表。
Classifications元素个数不能超过20个。
Classifications元素的Key不能为空，不能重复，长度不能超过50个字符，符合正则 `^[a-z]([a-z0-9_]{0,49})$`。
Classifications元素的Value长度不能超过200个字符。
   */
  Classifications?: Array<AlarmClassification>
}

/**
 * DescribeTopics返回参数结构体
 */
export interface DescribeTopicsResponse {
  /**
   * 日志主题列表
   */
  Topics?: Array<TopicInfo>
  /**
   * 总数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LogItem的数组
 */
export interface LogItems {
  /**
   * 分析结果返回的KV数据对
   */
  Data: Array<LogItem>
}

/**
 * ModifyAlarmNotice请求参数结构体
 */
export interface ModifyAlarmNoticeRequest {
  /**
   * 通知渠道组ID。
   */
  AlarmNoticeId: string
  /**
   * 标签描述列表，通过指定该参数可以同时绑定标签到相应的通知渠道组。最大支持10个标签键值对，并且不能有重复的键值对。
   */
  Tags?: Array<Tag>
  /**
   * 通知渠道组名称。
   */
  Name?: string
  /**
   * 通知类型。可选值：
<li> Trigger - 告警触发</li>
<li> Recovery - 告警恢复</li>
<li> All - 告警触发和告警恢复</li>
   */
  Type?: string
  /**
   * 通知接收对象。
   */
  NoticeReceivers?: Array<NoticeReceiver>
  /**
   * 接口回调信息（包括企业微信等）。
   */
  WebCallbacks?: Array<WebCallback>
  /**
   * 通知规则。

注意: 

- Type、NoticeReceivers和WebCallbacks是一组配置，NoticeRules是另一组配置，2组配置互斥。
- 传其中一组数据，则另一组数据置空。
   */
  NoticeRules?: Array<NoticeRule>
  /**
   * 调用链接域名。http:// 或者 https:// 开头，不能/结尾
   */
  JumpDomain?: string
  /**
   * 投递日志开关。

参数值：
1：关闭；

2：开启 

   */
  DeliverStatus?: number
  /**
   * 投递日志配置。
   */
  DeliverConfig?: DeliverConfig
  /**
   * 免登录操作告警开关。

参数值： 
        1：关闭
        2：开启（默认开启）
   */
  AlarmShieldStatus?: number
}

/**
 * 日志主题扩展信息
 */
export interface TopicExtendInfo {
  /**
   * 日志主题免鉴权配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnonymousAccess?: AnonymousInfo
}

/**
 * Windows事件日志采集配置
 */
export interface EventLog {
  /**
   * 事件通道，支持Application，Security，Setup，System，ALL

   */
  EventChannel: string
  /**
   * 时间类型，1:用户自定义，2:当前时间
   */
  TimeType: number
  /**
   * 时间，用户选择自定义时间类型时，需要指定时间
   */
  Timestamp?: number
  /**
   * 事件ID过滤列表
	
选填，为空表示不做过滤
支持正向过滤单个值（例：20）或范围（例：0-20），也支持反向过滤单个值(例：-20)
多个过滤项之间可由逗号隔开，例：1-200,-100表示采集1-200范围内除了100以外的事件日志
   */
  EventIDs?: Array<string>
}

/**
 * CreateAlarm请求参数结构体
 */
export interface CreateAlarmRequest {
  /**
   * 告警策略名称
   */
  Name: string
  /**
   * 监控对象列表。
   */
  AlarmTargets: Array<AlarmTarget>
  /**
   * 监控任务运行时间点。
   */
  MonitorTime: MonitorTime
  /**
   * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为2000。
   */
  TriggerCount: number
  /**
   * 告警重复的周期，单位是分钟。取值范围是0~1440。
   */
  AlarmPeriod: number
  /**
   * 关联的告警通知模板列表。
   */
  AlarmNoticeIds: Array<string>
  /**
   * 触发条件
 注意:  
- Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。

   */
  Condition?: string
  /**
   * 告警级别
0:警告(Warn); 1:提醒(Info); 2:紧急 (Critical)。
注意:  
- 不填则默认为0。
- Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。
   */
  AlarmLevel?: number
  /**
   * 多触发条件
 注意:  
- Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。



   */
  MultiConditions?: Array<MultiCondition>
  /**
   * 是否开启告警策略。
默认值为true
   */
  Status?: boolean
  /**
   * 该参数已废弃，请使用Status参数控制是否开启告警策略。
   */
  Enable?: boolean
  /**
   * 用户自定义告警内容
   */
  MessageTemplate?: string
  /**
   * 用户自定义回调
   */
  CallBack?: CallBackInfo
  /**
   * 多维分析
   */
  Analysis?: Array<AnalysisDimensional>
  /**
   * 分组触发状态。
默认值false
   */
  GroupTriggerStatus?: boolean
  /**
   * 分组触发条件。
   */
  GroupTriggerCondition?: Array<string>
  /**
   * 标签描述列表，通过指定该参数可以同时绑定标签到相应的告警策略。

最大支持10个标签键值对，并且不能有重复的键值对。
   */
  Tags?: Array<Tag>
  /**
   * 监控对象类型。0:执行语句共用监控对象; 1:每个执行语句单独选择监控对象。 
不填则默认为0。
当值为1时，AlarmTargets元素个数不能超过10个，AlarmTargets中的Number必须是从1开始的连续正整数，不能重复。

   */
  MonitorObjectType?: number
  /**
   * 告警附加分类信息列表。
Classifications元素个数不能超过20个。
Classifications元素的Key不能为空，不能重复，长度不能超过50个字符，符合正则 `^[a-z]([a-z0-9_]{0,49})$`。
Classifications元素的Value长度不能超过200个字符。
   */
  Classifications?: Array<AlarmClassification>
}

/**
 * DeleteDataTransform请求参数结构体
 */
export interface DeleteDataTransformRequest {
  /**
   * 数据加工任务id
   */
  TaskId: string
}

/**
 * DeleteExport返回参数结构体
 */
export interface DeleteExportResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDashboardSubscribes请求参数结构体
 */
export interface DescribeDashboardSubscribesRequest {
  /**
   * <br><li/> dashboardId：按照【仪表盘id】进行过滤。类型：String必选：否<br><br><li/> 每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
}

/**
 * 多日志主题检索topic信息
 */
export interface SearchLogInfos {
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志存储生命周期
   */
  Period?: number
  /**
   * 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  Context?: string
}

/**
 * DeleteMachineGroup返回参数结构体
 */
export interface DeleteMachineGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志主题分区信息
 */
export interface PartitionInfo {
  /**
   * 分区ID
   */
  PartitionId?: number
  /**
   * 分区的状态（readwrite或者是readonly）
   */
  Status?: string
  /**
   * 分区哈希键起始key
   */
  InclusiveBeginKey?: string
  /**
   * 分区哈希键结束key
   */
  ExclusiveEndKey?: string
  /**
   * 分区创建时间
   */
  CreateTime?: string
  /**
   * 只读分区数据停止写入时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastWriteTime?: string
}

/**
 * 通知内容模板信息
 */
export interface NoticeContentTemplate {
  /**
   * 通知内容模板ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeContentId?: string
  /**
   * 通知内容模板名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 语言类型。

0： 中文
1： 英文
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 通知内容模板信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeContents?: Array<NoticeContent>
  /**
   * 通知内容模板标记。

0： 用户自定义
1： 系统内置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Flag?: number
  /**
   * 创建者主账号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: number
  /**
   * 创建/修改者子账号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUin?: number
  /**
   * 创建时间 秒级时间戳。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 更新时间 秒级时间戳。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
}

/**
 * CreateNoticeContent返回参数结构体
 */
export interface CreateNoticeContentResponse {
  /**
   * 通知内容配置ID
   */
  NoticeContentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCloudProductLogTask返回参数结构体
 */
export interface DeleteCloudProductLogTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConfigExtra请求参数结构体
 */
export interface CreateConfigExtraRequest {
  /**
   * 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾
   */
  Name: string
  /**
   * 日志主题id
   */
  TopicId: string
  /**
   * 日志源类型。支持 container_stdout：容器标准输出；container_file：容器文件路径；host_file：节点文件路径。
   */
  Type: string
  /**
   * 采集的日志类型，默认为minimalist_log。支持以下类型：
- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；
- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；
- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；
- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；
- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；
- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；
- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）。
   */
  LogType: string
  /**
   * 采集配置标记。
- 目前只支持label_k8s，用于标记自建k8s集群使用的采集配置

   */
  ConfigFlag: string
  /**
   * 日志集id
   */
  LogsetId: string
  /**
   * 日志集name
   */
  LogsetName: string
  /**
   * 日志主题名称
   */
  TopicName: string
  /**
   * 节点文件路径类型配置。
   */
  HostFile?: HostFileInfo
  /**
   * 容器文件路径类型配置。
   */
  ContainerFile?: ContainerFileInfo
  /**
   * 容器标准输出类型配置。
   */
  ContainerStdout?: ContainerStdoutInfo
  /**
   * 日志格式化方式，用于容器采集场景。 - 已废弃
- stdout-docker-json：用于docker容器采集场景
- stdout-containerd：用于containerd容器采集场景
   */
  LogFormat?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
   */
  ExtractRule?: ExtractRuleInfo
  /**
   * 采集黑名单路径列表
   */
  ExcludePaths?: Array<ExcludePathInfo>
  /**
   * 组合解析采集规则，用于复杂场景下的日志采集。
- 取值参考：[使用组合解析提取模式采集日志
](https://cloud.tencent.com/document/product/614/61310)
   */
  UserDefineRule?: string
  /**
   * 绑定的机器组id
   */
  GroupId?: string
  /**
   * 绑定的机器组id列表
   */
  GroupIds?: Array<string>
  /**
   * 采集相关配置信息。详情见CollectInfo复杂类型配置。
   */
  CollectInfos?: Array<CollectInfo>
  /**
   * 高级采集配置。 Json字符串， Key/Value定义为如下：
- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时
- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数
- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false
- ClsAgentDefault(自定义默认值，无特殊含义，用于清空其他选项)，建议取值0

   */
  AdvancedConfig?: string
}

/**
 * 黑名单path信息
 */
export interface ExcludePathInfo {
  /**
   * 类型，选填File或Path
   */
  Type: string
  /**
   * Type对应的具体内容
   */
  Value: string
}

/**
 * DescribeCloudProductLogTasks返回参数结构体
 */
export interface DescribeCloudProductLogTasksResponse {
  /**
   * 日志配置详情列表
   */
  Tasks?: Array<CloudProductLogTaskInfo>
  /**
   * 日志配置总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 特殊采集规则配置信息
 */
export interface ConfigExtraInfo {
  /**
   * 采集规则扩展配置ID
   */
  ConfigExtraId?: string
  /**
   * 采集规则名称
   */
  Name?: string
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 类型：container_stdout、container_file、host_file
   */
  Type?: string
  /**
   * 节点文件配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostFile?: HostFileInfo
  /**
   * 容器文件路径信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerFile?: ContainerFileInfo
  /**
   * 容器标准输出信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerStdout?: ContainerStdoutInfo
  /**
   * 日志格式化方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogFormat?: string
  /**
   * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogType?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtractRule?: ExtractRuleInfo
  /**
   * 采集黑名单路径列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludePaths?: Array<ExcludePathInfo>
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 用户自定义解析字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDefineRule?: string
  /**
   * 机器组ID
   */
  GroupId?: string
  /**
   * 自建采集配置标
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigFlag?: string
  /**
   * 日志集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetId?: string
  /**
   * 日志集name
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetName?: string
  /**
   * 日志主题name
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 采集相关配置信息。详情见 CollectInfo复杂类型配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectInfos?: Array<CollectInfo>
  /**
   * 高级采集配置。 Json字符串， Key/Value定义为如下：
- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时
- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数
- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false
样例：{"ClsAgentFileTimeout":0,"ClsAgentMaxDepth":10,"ClsAgentParseFailMerge":true}
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedConfig?: string
}

/**
 * 高级过滤规则
 */
export interface AdvanceFilterRuleInfo {
  /**
   * 过滤字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 过滤规则，0:等于，1:字段存在，2:字段不存在
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rule: number
  /**
   * 过滤值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * SplitPartition请求参数结构体
 */
export interface SplitPartitionRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 待分裂分区ID
   */
  PartitionId: number
  /**
   * 分区切分的哈希key的位置，只在Number=2时有意义
   */
  SplitKey?: string
  /**
   * 分区分裂个数(可选)，默认等于2
   */
  Number?: number
}

/**
 * DescribeMachineGroupConfigs返回参数结构体
 */
export interface DescribeMachineGroupConfigsResponse {
  /**
   * 采集规则配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Configs?: Array<ConfigInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckRechargeKafkaServer请求参数结构体
 */
export interface CheckRechargeKafkaServerRequest {
  /**
   * 导入Kafka类型，0: 腾讯云CKafka；1: 用户自建Kafka。
   */
  KafkaType: number
  /**
   * 腾讯云CKafka实例ID。
KafkaType为0时，KafkaInstance必填
   */
  KafkaInstance?: string
  /**
   * 服务地址。
KafkaType为1时，ServerAddr必填
   */
  ServerAddr?: string
  /**
   * ServerAddr是否为加密连接，默认值false。当KafkaType为1用户自建kafka时生效。
   */
  IsEncryptionAddr?: boolean
  /**
   * 加密访问协议。KafkaType参数为1并且IsEncryptionAddr参数为true时必填。
   */
  Protocol?: KafkaProtocolInfo
}

/**
 * CreateAlarmShield请求参数结构体
 */
export interface CreateAlarmShieldRequest {
  /**
   * 通知渠道组id。
   */
  AlarmNoticeId: string
  /**
   * 屏蔽开始时间（秒级时间戳）。
   */
  StartTime: number
  /**
   * 屏蔽结束时间（秒级时间戳）。
   */
  EndTime: number
  /**
   * 屏蔽类型。1：屏蔽所有通知，2：按照Rule参数屏蔽匹配规则的通知。
   */
  Type: number
  /**
   * 屏蔽原因。
   */
  Reason: string
  /**
   * 屏蔽规则，当Type为2时必填。规则填写方式详见[产品文档](https://cloud.tencent.com/document/product/614/103178#rule)。
   */
  Rule?: string
}

/**
 * DeleteDashboardSubscribe返回参数结构体
 */
export interface DeleteDashboardSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogHistogram返回参数结构体
 */
export interface DescribeLogHistogramResponse {
  /**
   * 统计周期： 单位ms
   */
  Interval?: number
  /**
   * 命中关键字的日志总条数
   */
  TotalCount?: number
  /**
   * 周期内统计结果详情
   */
  HistogramInfos?: Array<HistogramInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseKafkaConsumer返回参数结构体
 */
export interface CloseKafkaConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAlarmShield返回参数结构体
 */
export interface DeleteAlarmShieldResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumer请求参数结构体
 */
export interface DescribeConsumerRequest {
  /**
   * 投递任务绑定的日志主题 ID
   */
  TopicId: string
}

/**
 * CreateIndex请求参数结构体
 */
export interface CreateIndexRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 索引规则
   */
  Rule: RuleInfo
  /**
   * 是否生效，默认为true
   */
  Status?: boolean
  /**
   * 内置保留字段（`__FILENAME__`，`__HOSTNAME__`及`__SOURCE__`）是否包含至全文索引，默认为false，推荐设置为true
   * false:不包含
   * true:包含
   */
  IncludeInternalFields?: boolean
  /**
   * 元数据字段（前缀为`__TAG__`的字段）是否包含至全文索引，默认为0，推荐设置为1
   * 0:仅包含开启键值索引的元数据字段
   * 1:包含所有元数据字段
   * 2:不包含任何元数据字段
   */
  MetadataFlag?: number
}

/**
 * DescribeLogsets返回参数结构体
 */
export interface DescribeLogsetsResponse {
  /**
   * 分页的总数目
   */
  TotalCount?: number
  /**
   * 日志集列表
   */
  Logsets?: Array<LogsetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
  /**
   * 日志集ID
   */
  LogsetId: string
  /**
   * 日志主题名称
   */
  TopicName: string
  /**
   * 日志主题分区个数。默认创建1个，最大支持创建10个分区。
   */
  PartitionCount?: number
  /**
   * 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。
   */
  Tags?: Array<Tag>
  /**
   * 是否开启自动分裂，默认值为true
   */
  AutoSplit?: boolean
  /**
   * 开启自动分裂后，每个主题能够允许的最大分区数，默认值为50
   */
  MaxSplitPartitions?: number
  /**
   * 日志主题的存储类型，可选值 hot（标准存储），cold（低频存储）；默认为hot。
   */
  StorageType?: string
  /**
   * 存储时间，单位天。
- 日志接入标准存储时，支持1至3600天，值为3640时代表永久保存。
- 日志接入低频存储时，支持7至3600天，值为3640时代表永久保存。
   */
  Period?: number
  /**
   * 日志主题描述
   */
  Describes?: string
  /**
   * 0：关闭日志沉降。
非0：开启日志沉降后标准存储的天数，HotPeriod需要大于等于7，且小于Period。
仅在StorageType为 hot 时生效。
   */
  HotPeriod?: number
  /**
   * 主题自定义ID，格式为：用户自定义部分-APPID。未填写该参数时将自动生成ID。
- 用户自定义部分仅支持小写字母、数字和-，且不能以-开头和结尾，长度为3至40字符
- APPID可在https://console.cloud.tencent.com/developer页面查询
   */
  TopicId?: string
  /**
   * 免鉴权开关。 false：关闭； true：开启。默认为false。
开启后将支持指定操作匿名访问该日志主题。详情请参见[日志主题](https://cloud.tencent.com/document/product/614/41035)。
   */
  IsWebTracking?: boolean
  /**
   * 日志主题扩展信息
   */
  Extends?: TopicExtendInfo
}

/**
 * DescribeTopics请求参数结构体
 */
export interface DescribeTopicsRequest {
  /**
   * <ul><li>topicName 按照【日志主题名称】进行过滤，默认为模糊匹配，可使用 PreciseSearch 参数设置为精确匹配。类型：String。必选：否</li>
<li>logsetName 按照【日志集名称】进行过滤，默认为模糊匹配，可使用 PreciseSearch 参数设置为精确匹配。类型：String。必选：否</li>
<li>topicId 按照【日志主题ID】进行过滤。类型：String。必选：否</li>
<li>logsetId 按照【日志集ID】进行过滤，可通过调用 DescribeLogsets 查询已创建的日志集列表或登录控制台进行查看；也可以调用 CreateLogset 创建新的日志集。类型：String。必选：否</li>
<li>tagKey 按照【标签键】进行过滤。类型：String。必选：否</li>
<li>tag:tagKey 按照【标签键值对】进行过滤。tagKey 使用具体的标签键进行替换，例如 tag:exampleKey。类型：String。必选：否</li>
<li>storageType 按照【日志主题的存储类型】进行过滤。可选值 hot（标准存储），cold（低频存储）类型：String。必选：否</li></ul>
注意：每次请求的 Filters 的上限为10，Filter.Values 的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
  /**
   * 控制Filters相关字段是否为精确匹配。
<ul><li>0: 默认值，topicName 和 logsetName 模糊匹配</li>
<li>1: topicName   精确匹配</li>
<li>2: logsetName精确匹配</li>
<li>3: topicName 和logsetName 都精确匹配</li></ul>
   */
  PreciseSearch?: number
  /**
   * 主题类型
- 0:日志主题，默认值
- 1:指标主题
   */
  BizType?: number
}

/**
 * DeleteConsumer返回参数结构体
 */
export interface DeleteConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAlarmLog返回参数结构体
 */
export interface GetAlarmLogResponse {
  /**
   * 加载后续详情的Context
   */
  Context?: string
  /**
   * 指定时间范围内的告警执行详情是否完整返回
   */
  ListOver?: boolean
  /**
   * 返回的结果是否为SQL分析结果
   */
  Analysis?: boolean
  /**
   * 分析结果的列名，如果Query语句有SQL查询，则返回查询字段的列名；
否则为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColNames?: Array<string>
  /**
   * 执行详情查询结果。
当Query字段无SQL语句时，返回查询结果。
当Query字段有SQL语句时，可能返回null。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<LogInfo>
  /**
   * 执行详情统计分析结果。当Query字段有SQL语句时，返回SQL统计结果，否则可能返回null。

注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisResults?: Array<LogItems>
  /**
   * 执行详情统计分析结果；UseNewAnalysis为true有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisRecords?: Array<string>
  /**
   * 分析结果的列名， UseNewAnalysis为true有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<Column>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWebCallback返回参数结构体
 */
export interface CreateWebCallbackResponse {
  /**
   * 回调配置ID。
   */
  WebCallbackId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDashboardSubscribe返回参数结构体
 */
export interface CreateDashboardSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExports请求参数结构体
 */
export interface DescribeExportsRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * CreateMachineGroup返回参数结构体
 */
export interface CreateMachineGroupResponse {
  /**
   * 机器组ID
   */
  GroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosRecharges请求参数结构体
 */
export interface DescribeCosRechargesRequest {
  /**
   * 日志主题 ID
   */
  TopicId: string
  /**
   * 状态   status 0: 已创建, 1: 运行中, 2: 已停止, 3: 已完成, 4: 运行失败。
   */
  Status?: number
  /**
   * 是否启用:   0： 未启用  ， 1：启用
   */
  Enable?: number
}

/**
 * 告警对象
 */
export interface AlarmTarget {
  /**
   * 日志主题ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId: string
  /**
   * 查询语句。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Query: string
  /**
   * 告警对象序号；从1开始递增。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Number: number
  /**
   * 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTimeOffset: number
  /**
   * 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTimeOffset: number
  /**
   * 日志集ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetId: string
  /**
   * 检索语法规则，默认值为0。
0：Lucene语法，1：CQL语法。
详细说明参见<a href="https://cloud.tencent.com/document/product/614/47044#RetrievesConditionalRules" target="_blank">检索条件语法规则</a>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyntaxRule?: number
}

/**
 * CreateKafkaRecharge返回参数结构体
 */
export interface CreateKafkaRechargeResponse {
  /**
   * Kafka导入配置ID
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyScheduledSql请求参数结构体
 */
export interface ModifyScheduledSqlRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 源日志主题
   */
  SrcTopicId?: string
  /**
   * 任务启动状态.   1开启,  2关闭
   */
  EnableFlag?: number
  /**
   * 定时SQL分析的目标日志主题
   */
  DstResource?: ScheduledSqlResouceInfo
  /**
   * 查询语句
   */
  ScheduledSqlContent?: string
  /**
   * 调度周期(分钟)
   */
  ProcessPeriod?: number
  /**
   * 单次查询的时间窗口. 例子中为近15分钟
   */
  ProcessTimeWindow?: string
  /**
   * 执行延迟(秒)
   */
  ProcessDelay?: number
  /**
   * 源topicId的地域信息
   */
  SrcTopicRegion?: string
  /**
   * 任务名称
   */
  Name?: string
  /**
   * 语法规则。 默认值为0。 0：Lucene语法，1：CQL语法
   */
  SyntaxRule?: number
}

/**
 * 仪表盘订阅相关数据
 */
export interface DashboardSubscribeData {
  /**
   * 仪表盘订阅通知方式。
   */
  NoticeModes: Array<DashboardNoticeMode>
  /**
   * 仪表盘订阅时间，为空标识取仪表盘默认的时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DashboardTime?: Array<string>
  /**
   * 仪表盘订阅模板变量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateVariables?: Array<DashboardTemplateVariable>
  /**
   * 时区。参考：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#SHANGHAI
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timezone?: string
  /**
   * 语言。 zh 中文、en`英文。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscribeLanguage?: string
  /**
   * 调用链接域名。http:// 或者 https:// 开头，不能/结尾
注意：此字段可能返回 null，表示取不到有效值。
   */
  JumpDomain?: string
  /**
   * 自定义跳转链接。
注意：此字段可能返回 null，表示取不到有效值。
   */
  JumpUrl?: string
}

/**
 * ModifyAlarmShield返回参数结构体
 */
export interface ModifyAlarmShieldResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDeliverCloudFunction请求参数结构体
 */
export interface CreateDeliverCloudFunctionRequest {
  /**
   * 投递规则属于的 topic id
   */
  TopicId: string
  /**
   * 投递的云函数名字。仅支持[事件函数](https://cloud.tencent.com/document/product/583/9694#scf-.E4.BA.8B.E4.BB.B6.E5.87.BD.E6.95.B0) （[函数类型选型](https://cloud.tencent.com/document/product/583/73483)）
   */
  FunctionName: string
  /**
   * 命名空间
   */
  Namespace: string
  /**
   * 函数版本
   */
  Qualifier: string
  /**
   * 投递最长等待时间，单位：秒
   */
  Timeout?: number
  /**
   * 投递最大消息数
   */
  MaxMsgNum?: number
}

/**
 * DeleteConsumer请求参数结构体
 */
export interface DeleteConsumerRequest {
  /**
   * 投递任务绑定的日志主题 ID
   */
  TopicId: string
}

/**
 * 通知模板内容
 */
export interface NoticeContentInfo {
  /**
   * 通知内容模板标题信息。
部分通知渠道类型不支持“标题”，请参照腾讯云控制台页面。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 通知内容模板正文信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 请求头（Request Headers）：在HTTP请求中，请求头包含了客户端向服务器发送的附加信息，如用户代理、授权凭证、期望的响应格式等。
仅“自定义回调”支持该配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Headers?: Array<string>
}

/**
 * CreateWebCallback请求参数结构体
 */
export interface CreateWebCallbackRequest {
  /**
   * 通知内容名称。
   */
  Name: string
  /**
   * 渠道类型。

WeCom:企业微信;DingTalk:钉钉;Lark:飞书;Http:自定义回调。
   */
  Type: string
  /**
   * Webhook地址。
   */
  Webhook: string
  /**
   * 请求方式。 支持POST、PUT。

当Type为Http时，必填。
   */
  Method?: string
  /**
   * 秘钥。
   */
  Key?: string
}

/**
 * DescribeMachineGroups请求参数结构体
 */
export interface DescribeMachineGroupsRequest {
  /**
   * machineGroupName
- 按照【机器组名称】进行过滤。
- 类型：String
- 必选：否

machineGroupId
- 按照【机器组ID】进行过滤。
- 类型：String
- 必选：否

osType
- 按照【操作系统类型】进行过滤。
- 类型：Int
- 必选：否

tagKey
- 按照【标签键】进行过滤。
- 类型：String
- 必选：否

tag:tagKey
- 按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。
- 类型：String
- 必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
  /**
   * 分页单页的限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * DeleteIndex请求参数结构体
 */
export interface DeleteIndexRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
}

/**
 * 免鉴权信息
 */
export interface AnonymousInfo {
  /**
   * 操作列表，支持trackLog(JS/HTTP上传日志  )和realtimeProducer(kafka协议上传日志)
   */
  Operations?: Array<string>
  /**
   * 条件列表
   */
  Conditions?: Array<ConditionInfo>
}

/**
 * 日志提取规则
 */
export interface ExtractRuleInfo {
  /**
   * 时间字段的key名字，TikeKey和TimeFormat必须成对出现
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeKey?: string
  /**
   * 时间字段的格式，参考c语言的strftime函数对于时间的格式说明输出参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeFormat?: string
  /**
   * 分隔符类型日志的分隔符，只有LogType为delimiter_log时有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Delimiter?: string
  /**
   * 整条日志匹配规则，只有LogType为fullregex_log时有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogRegex?: string
  /**
   * 行首匹配规则，只有LogType为multiline_log或fullregex_log时有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginRegex?: string
  /**
   * 取的每个字段的key名字，为空的key代表丢弃这个字段，只有LogType为delimiter_log时有效，json_log的日志使用json本身的key。限制100个。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: Array<string>
  /**
   * 日志过滤规则列表（旧版），需要过滤日志的key，及其对应的regex。
 注意：2.9.3及以上版本LogListener ，建议使用AdvanceFilterRules配置日志过滤规则。

注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterKeyRegex?: Array<KeyRegexInfo>
  /**
   * 解析失败日志是否上传，true表示上传，false表示不上传
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnMatchUpLoadSwitch?: boolean
  /**
   * 失败日志的key，当UnMatchUpLoadSwitch为true时必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnMatchLogKey?: string
  /**
   * 增量采集模式下的回溯数据量，默认：-1（全量采集）；其他非负数表示增量采集（从最新的位置，往前采集${Backtracking}字节（Byte）的日志）最大支持1073741824（1G）。
注意：
- COS导入不支持此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Backtracking?: number
  /**
   * 是否为Gbk编码。 0：否；1：是。
注意
- 目前取0值时，表示UTF-8编码
- COS导入不支持此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsGBK?: number
  /**
   * 是否为标准json。  0：否； 1：是。
- 标准json指采集器使用业界标准开源解析器进行json解析，非标json指采集器使用CLS自研json解析器进行解析，两种解析器没有本质区别，建议客户使用标准json进行解析。
注意：此字段可能返回 null，表示取不到有效值。
   */
  JsonStandard?: number
  /**
   * syslog传输协议，取值为tcp或者udp，只有在LogType为service_syslog时生效，其余类型无需填写。
注意：
- 该字段适用于：创建采集规则配置、修改采集规则配置。
- COS导入不支持此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * syslog系统日志采集指定采集器监听的地址和端口 ，形式：[ip]:[port]，只有在LogType为service_syslog时生效，其余类型无需填写。
注意：
- 该字段适用于：创建采集规则配置、修改采集规则配置。
- COS导入不支持此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
  /**
   * rfc3164：指定系统日志采集使用RFC3164协议解析日志。
rfc5424：指定系统日志采集使用RFC5424协议解析日志。
auto：自动匹配rfc3164或者rfc5424其中一种协议。
只有在LogType为service_syslog时生效，其余类型无需填写。
注意：
- 该字段适用于：创建采集规则配置、修改采集规则配置
- COS导入不支持此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParseProtocol?: string
  /**
   * 元数据类型。0: 不使用元数据信息；1:使用机器组元数据；2:使用用户自定义元数据；3:使用采集配置路径。
注意：
- COS导入不支持此字段。
   */
  MetadataType?: number
  /**
   * 采集配置路径正则表达式。

```
请用"()"标识路径中目标字段对应的正则表达式，解析时将"()"视为捕获组，并以__TAG__.{i}:{目标字段}的形式与日志一起上报，其中i为捕获组的序号。
若不希望以序号为键名，可以通过命名捕获组"(?<{键名}>{正则})"自定义键名，并以__TAG__.{键名}:{目标字段}的形式与日志一起上报。最多支持5个捕获组
```

注意：
- MetadataType为3时必填。
- COS导入不支持此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PathRegex?: string
  /**
   * 用户自定义元数据信息。
注意：
- MetadataType为2时必填。
- COS导入不支持此字段。
   */
  MetaTags?: Array<MetaTagInfo>
  /**
   * Windows事件日志采集规则，只有在LogType为windows_event_log时生效，其余类型无需填写。
   */
  EventLogRules?: Array<EventLog>
  /**
   * 日志过滤规则列表（新版）。
注意：
- 2.9.3以下版本LogListener不支持， 请使用FilterKeyRegex配置日志过滤规则。
- 自建k8s采集配置（CreateConfigExtra、ModifyConfigExtra）不支持此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvanceFilterRules?: Array<AdvanceFilterRuleInfo>
}

/**
 * ModifyConsumer返回参数结构体
 */
export interface ModifyConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlertRecordHistory请求参数结构体
 */
export interface DescribeAlertRecordHistoryRequest {
  /**
   * 查询时间范围启始时间，毫秒级unix时间戳
   */
  From: number
  /**
   * 查询时间范围结束时间，毫秒级unix时间戳
   */
  To: number
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset: number
  /**
   * 分页单页限制数目，最大值100。
   */
  Limit: number
  /**
   * - alertId：按照告警策略ID进行过滤。类型：String 必选：否
- topicId：按照监控对象ID进行过滤。类型：String 必选：否
- status：按照告警状态进行过滤。类型：String 必选：否，0代表未恢复，1代表已恢复，2代表已失效
- alarmLevel：按照告警等级进行过滤。类型：String 必选：否，0代表警告，1代表提醒，2代表紧急

每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
}

/**
 * DescribeConfigs请求参数结构体
 */
export interface DescribeConfigsRequest {
  /**
   * configName
- 按照【采集配置名称】进行模糊匹配过滤。
- 类型：String
- 必选：否

configId
- 按照【采集配置ID】进行过滤。
- 类型：String
- 必选：否

topicId
- 按照【日志主题】进行过滤。
- 类型：String
- 必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
  /**
   * 分页单页的限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * kafka协议消费内容
 */
export interface KafkaConsumerContent {
  /**
   * 消费数据格式。 0：原始内容；1：JSON。
   */
  Format: number
  /**
   * 是否投递 TAG 信息
Format为0时，此字段不需要赋值
   */
  EnableTag: boolean
  /**
   * 元数据信息列表, 可选值为：\_\_SOURCE\_\_、\_\_FILENAME\_\_
、\_\_TIMESTAMP\_\_、\_\_HOSTNAME\_\_、\_\_PKGID\_\_
Format为0时，此字段不需要赋值
   */
  MetaFields: Array<string>
  /**
   * tag数据处理方式：1:不平铺（默认值）；2:平铺。

不平铺示例：
TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`
不平铺：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`

平铺示例：
TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`
平铺：`{"__TAG__.fieldA":200,"__TAG__.fieldB":"text"}`
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagTransaction?: number
  /**
   * 消费数据Json格式：
1：不转义（默认格式）
2：转义

投递Json格式。
JsonType为1：和原始日志一致，不转义。示例：
日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`
投递到Ckafka：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`

JsonType为2：转义。示例：
日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`
投递到Ckafka：`{"a":"aa","b":"{\"b1\":\"b1b1\", \"c1\":\"c1c1\"}"}`
   */
  JsonType?: number
}

/**
 * 日志集相关信息
 */
export interface LogsetInfo {
  /**
   * 日志集ID
   */
  LogsetId?: string
  /**
   * 日志集名称
   */
  LogsetName?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 云产品标识，日志集由其它云产品创建时，该字段会显示云产品名称，例如CDN、TKE
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssumerName?: string
  /**
   * 日志集绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 日志集下日志主题的数目
   */
  TopicCount?: number
  /**
   * 若AssumerName非空，则表示创建该日志集的服务方角色
   */
  RoleName?: string
}

/**
 * 仪表盘关联的topic信息
 */
export interface DashboardTopicInfo {
  /**
   * 主题id
   */
  TopicId: string
  /**
   * topic所在的地域
   */
  Region: string
}

/**
 * DeleteConfig请求参数结构体
 */
export interface DeleteConfigRequest {
  /**
   * 采集规则配置ID
   */
  ConfigId: string
}

/**
 * 多维分析的分析维度
 */
export interface AnalysisDimensional {
  /**
   * 分析名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 分析类型：query，field ，original
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 分析内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content: string
  /**
   * 多维分析配置。

当Analysis的Type字段为query（自定义）时，支持
{
"Key": "SyntaxRule",  // 语法规则
"Value": "1"  //0：Lucene语法 ，1： CQL语法
}

当Analysis的Type字段为field（top5）时,  支持
 {
    "Key": "QueryIndex",
    "Value": "-1" //  -1：自定义， 1：执行语句1， 2：执行语句2
},{
    "Key": "CustomQuery", //检索语句。 QueryIndex为-1时有效且必填
    "Value": "* | select count(*) as count"
},{
    "Key": "SyntaxRule", // 查不到这个字段也是老语法（Lucene）
    "Value": "0"//0:Lucene, 1:CQL
}       

当Analysis的Type字段为original（原始日志）时,  支持
{
    "Key": "Fields",
    "Value": "__SOURCE__,__HOSTNAME__,__TIMESTAMP__,__PKG_LOGID__,__TAG__.pod_ip"
}, {
    "Key": "QueryIndex",
    "Value": "-1" //  -1：自定义， 1：执行语句1， 2：执行语句2
},{
    "Key": "CustomQuery", //  //检索语句。 QueryIndex为-1时有效且必填
    "Value": "* | select count(*) as count"
},{
    "Key": "Format", //显示形式。1：每条日志一行，2：每条日志每个字段一行
    "Value": "2"
},
{
    "Key": "Limit", //最大日志条数
    "Value": "5"
},{
    "Key": "SyntaxRule", // 查不到这个字段也是老语法
    "Value": "0"//0:Lucene, 1:CQL
}
   */
  ConfigInfo?: Array<AlarmAnalysisConfig>
}

/**
 * DeleteWebCallback请求参数结构体
 */
export interface DeleteWebCallbackRequest {
  /**
   * 告警渠道回调配置ID。
   */
  WebCallbackId: string
}

/**
 * 日志导入规则
 */
export interface LogRechargeRuleInfo {
  /**
   * 导入类型，支持json_log：json格式日志，minimalist_log: 单行全文，fullregex_log: 单行完全正则
   */
  RechargeType: string
  /**
   * 解析编码格式，0: UTF-8（默认值），1: GBK
   */
  EncodingFormat: number
  /**
   * 使用默认时间，true：开启（默认值）， flase：关闭
   */
  DefaultTimeSwitch: boolean
  /**
   * 整条日志匹配规则，只有RechargeType为fullregex_log时有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogRegex?: string
  /**
   * 解析失败日志是否上传，true表示上传，false表示不上传
   */
  UnMatchLogSwitch?: boolean
  /**
   * 解析失败日志的键名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnMatchLogKey?: string
  /**
   * 解析失败日志时间来源，0: 系统当前时间，1: Kafka消息时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnMatchLogTimeSrc?: number
  /**
   * 默认时间来源，0: 系统当前时间，1: Kafka消息时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultTimeSrc?: number
  /**
   * 时间字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeKey?: string
  /**
   * 时间提取正则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeRegex?: string
  /**
   * 时间字段格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeFormat?: string
  /**
   * 时间字段时区
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeZone?: string
  /**
   * 元数据信息，Kafka导入支持kafka_topic,kafka_partition,kafka_offset,kafka_timestamp
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metadata?: Array<string>
  /**
   * 日志Key列表，RechargeType为full_regex_log时必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: Array<string>
  /**
   * json解析模式，开启首层数据解析
   */
  ParseArray?: boolean
}

/**
 * ModifyCloudProductLogTask返回参数结构体
 */
export interface ModifyCloudProductLogTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseKafkaConsumer请求参数结构体
 */
export interface CloseKafkaConsumerRequest {
  /**
   * 日志主题ID
   */
  FromTopicId: string
}

/**
 * ModifyCloudProductLogTask请求参数结构体
 */
export interface ModifyCloudProductLogTaskRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 云产品标识，支持枚举：CDS、CWP、CDB、TDSQL-C、MongoDB、TDStore、DCDB、MariaDB、PostgreSQL、BH、APIS
   */
  AssumerName: string
  /**
   * 日志类型，支持枚举：CDS-AUDIT、CDS-RISK、CDB-AUDIT、TDSQL-C-AUDIT、MongoDB-AUDIT、MongoDB-SlowLog、MongoDB-ErrorLog、TDMYSQL-SLOW、DCDB-AUDIT、DCDB-SLOW、DCDB-ERROR、MariaDB-AUDIT、MariaDB-SLOW、MariaDB-ERROR、PostgreSQL-SLOW、PostgreSQL-ERROR、PostgreSQL-AUDIT、BH-FILELOG、BH-COMMANDLOG、APIS-ACCESS
   */
  LogType: string
  /**
   * 云产品地域。 不同日志类型(LogType)地域入參格式存在差异， 请参考如下示例：
- CDS所有日志类型：ap-guangzhou
- CDB-AUDIT: gz
- TDSQL-C-AUDIT: gz
- MongoDB-AUDIT: gz
- MongoDB-SlowLog：ap-guangzhou
- MongoDB-ErrorLog：ap-guangzhou
- TDMYSQL-SLOW：gz
- DCDB所有日志类型：gz
- MariaDB所有日志类型：gz
- PostgreSQL所有日志类型：gz
- BH所有日志类型：overseas-polaris(国内站海外)/fsi-polaris(国内站金融)/general-polaris(国内站普通)/intl-sg-prod(国际站)
- APIS所有日志类型：gz
   */
  CloudProductRegion: string
  /**
   * 日志配置拓展信息， 一般用于存储额外的日志投递配置
   */
  Extend?: string
}

/**
 * CreateExport请求参数结构体
 */
export interface CreateExportRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 日志导出数量,  最大值5000万
   */
  Count: number
  /**
   * 日志导出检索语句，不支持<a href="https://cloud.tencent.com/document/product/614/44061" target="_blank">[SQL语句]</a>
   */
  Query: string
  /**
   * 日志导出起始时间，毫秒时间戳
   */
  From: number
  /**
   * 日志导出结束时间，毫秒时间戳
   */
  To: number
  /**
   * 日志导出时间排序。desc，asc，默认为desc
   */
  Order?: string
  /**
   * 日志导出数据格式。json，csv，默认为json
   */
  Format?: string
  /**
   * 语法规则,  默认值为0。
0：Lucene语法，1：CQL语法。
   */
  SyntaxRule?: number
  /**
   * 导出字段
   */
  DerivedFields?: Array<string>
}

/**
 * 仪表盘订阅模板变量
 */
export interface DashboardTemplateVariable {
  /**
   * key的值
   */
  Key: string
  /**
   * key对应的values取值values
   */
  Values: Array<string>
}

/**
 * DescribeAlarmNotices返回参数结构体
 */
export interface DescribeAlarmNoticesResponse {
  /**
   * 告警通知模板列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmNotices?: Array<AlarmNotice>
  /**
   * 符合条件的告警通知模板总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmShield请求参数结构体
 */
export interface ModifyAlarmShieldRequest {
  /**
   * 屏蔽规则ID。
   */
  TaskId: string
  /**
   * 通知渠道组id。
   */
  AlarmNoticeId: string
  /**
   * 屏蔽开始时间（秒级时间戳）。
   */
  StartTime?: number
  /**
   * 屏蔽结束时间（秒级时间戳）。
   */
  EndTime?: number
  /**
   * 屏蔽类型。1：屏蔽所有通知，2：按照Rule参数屏蔽匹配规则的通知。
   */
  Type?: number
  /**
   * 屏蔽规则，当Type为2时必填。规则填写方式详见[产品文档](https://cloud.tencent.com/document/product/614/103178#rule)。
   */
  Rule?: string
  /**
   * 屏蔽原因。
   */
  Reason?: string
  /**
   * 规则状态。只有规则状态为生效中（status:1）时，才能将其修改为已失效（status:2）。
   */
  Status?: number
}

/**
 * 通知渠道投递日志配置信息
 */
export interface AlarmNoticeDeliverConfig {
  /**
   * 通知渠道投递日志配置信息。
   */
  DeliverConfig?: DeliverConfig
  /**
   * 投递失败原因。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg?: string
}

/**
 * DescribeMachineGroups返回参数结构体
 */
export interface DescribeMachineGroupsResponse {
  /**
   * 机器组信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MachineGroups?: Array<MachineGroupInfo>
  /**
   * 分页的总数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConfigExtra请求参数结构体
 */
export interface DeleteConfigExtraRequest {
  /**
   * 特殊采集规则扩展配置ID
   */
  ConfigExtraId: string
}

/**
 * 仪表盘信息
 */
export interface DashboardInfo {
  /**
   * 仪表盘id
   */
  DashboardId?: string
  /**
   * 仪表盘名字
   */
  DashboardName?: string
  /**
   * 仪表盘数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 创建仪表盘的时间
   */
  CreateTime?: string
  /**
   * AssumerUin非空则表示创建该日志主题的服务方Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssumerUin?: number
  /**
   * RoleName非空则表示创建该日志主题的服务方使用的角色
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName?: string
  /**
   * AssumerName非空则表示创建该日志主题的服务方名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssumerName?: string
  /**
   * 日志主题绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 仪表盘所在地域： 为了兼容老的地域。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DashboardRegion?: string
  /**
   * 修改仪表盘的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 仪表盘对应的topic相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DashboardTopicInfos?: Array<DashboardTopicInfo>
}

/**
 * ModifyConfig请求参数结构体
 */
export interface ModifyConfigRequest {
  /**
   * 采集规则配置ID，通过[获取采集规则配置](https://cloud.tencent.com/document/product/614/58616)返回信息获取。
   */
  ConfigId: string
  /**
   * 采集规则配置名称
   */
  Name?: string
  /**
   * 日志采集路径，包含文件名
   */
  Path?: string
  /**
   * 采集的日志类型。支持以下类型：
- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；
- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；
- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；
- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；
- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；
- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；
- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）；
- service_syslog代表：syslog 采集（详见[采集 Syslog](https://cloud.tencent.com/document/product/614/81454)）；
- windows_event_log代表：Windows事件日志（详见[采集 Windows 事件日志](https://cloud.tencent.com/document/product/614/96678)）。


   */
  LogType?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
   */
  ExtractRule?: ExtractRuleInfo
  /**
   * 采集黑名单路径列表
   */
  ExcludePaths?: Array<ExcludePathInfo>
  /**
   * 采集配置关联的日志主题（TopicId）
   */
  Output?: string
  /**
   * 用户自定义解析字符串，Json格式序列化的字符串。
   */
  UserDefineRule?: string
  /**
   * 高级采集配置。 Json字符串， Key/Value定义为如下：
- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时
- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数
- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false
样例：
`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`
   */
  AdvancedConfig?: string
}

/**
 * AddMachineGroupInfo请求参数结构体
 */
export interface AddMachineGroupInfoRequest {
  /**
   * 机器组ID
   */
  GroupId: string
  /**
   * 机器组类型
目前type支持 ip 和 label
   */
  MachineGroupType: MachineGroupTypeInfo
}

/**
 * DescribeKafkaRecharges请求参数结构体
 */
export interface DescribeKafkaRechargesRequest {
  /**
   * 日志主题 ID
   */
  TopicId: string
  /**
   * 导入配置ID
   */
  Id?: string
  /**
   * 状态   status 1: 运行中, 2: 暂停...
   */
  Status?: number
}

/**
 * JSON类型描述
 */
export interface JsonInfo {
  /**
   * 启用标志
   */
  EnableTag: boolean
  /**
   * 元数据信息列表, 可选值为 __SOURCE__、__FILENAME__、__TIMESTAMP__、__HOSTNAME__。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaFields: Array<string>
  /**
   * 投递Json格式，0：字符串方式投递；1:以结构化方式投递
注意：此字段可能返回 null，表示取不到有效值。
   */
  JsonType?: number
}

/**
 * ModifyConsoleSharing请求参数结构体
 */
export interface ModifyConsoleSharingRequest {
  /**
   * 免密分享链接Id
   */
  SharingId: string
  /**
   * 指定分享链接有效期，单位：毫秒，最长可设定有效期为30天
   */
  DurationMilliseconds: number
}

/**
 * PreviewKafkaRecharge返回参数结构体
 */
export interface PreviewKafkaRechargeResponse {
  /**
   * 日志样例，PreviewType为2时返回
   */
  LogSample?: string
  /**
   * 日志预览结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebCallback请求参数结构体
 */
export interface ModifyWebCallbackRequest {
  /**
   * 告警渠道回调配置ID。
   */
  WebCallbackId: string
  /**
   * 告警渠道回调配置名称。
   */
  Name?: string
  /**
   * 渠道类型

WeCom:企业微信;DingTalk:钉钉;Lark:飞书;Http:自定义回调;
   */
  Type?: string
  /**
   * 回调地址。
   */
  Webhook?: string
  /**
   * 请求方式。

支持POST、PUT。

注意：当Type为Http时，必填。
   */
  Method?: string
  /**
   * 秘钥信息。
   */
  Key?: string
}

/**
 * CreateShipper请求参数结构体
 */
export interface CreateShipperRequest {
  /**
   * 创建的投递规则所属的日志主题ID
   */
  TopicId: string
  /**
   * COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。
   */
  Bucket: string
  /**
   * 投递规则投递的新的目录前缀。
- 仅支持0-9A-Za-z-_/
- 最大支持256个字符
   */
  Prefix: string
  /**
   * 投递规则的名字
   */
  ShipperName: string
  /**
   * 投递的时间间隔，单位 秒，默认300，范围 300-900
   */
  Interval?: number
  /**
   * 投递的文件的最大值，单位 MB，默认256，范围 5-256
   */
  MaxSize?: number
  /**
   * 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递
   */
  FilterRules?: Array<FilterRuleInfo>
  /**
   * 投递日志的分区规则，支持strftime的时间格式表示
   */
  Partition?: string
  /**
   * 投递日志的压缩配置
   */
  Compress?: CompressInfo
  /**
   * 投递日志的内容格式配置
   */
  Content?: ContentInfo
  /**
   * 投递文件命名配置，0：随机数命名，1：投递时间命名，默认0（随机数命名）
   */
  FilenameMode?: number
  /**
   * 投递数据范围的开始时间点（秒级时间戳），不能超出日志主题的生命周期起点。
如果用户不填写，默认为用户新建投递任务的时间。
   */
  StartTime?: number
  /**
   * 投递数据范围的结束时间点（秒级时间戳），不能填写未来时间。
如果用户不填写，默认为持续投递，即无限。
   */
  EndTime?: number
  /**
   * cos桶存储类型。支持：STANDARD_IA、ARCHIVE、DEEP_ARCHIVE、STANDARD、MAZ_STANDARD、MAZ_STANDARD_IA、INTELLIGENT_TIERING。

1. STANDARD_IA：低频存储；
2. ARCHIVE：归档存储；
3. DEEP_ARCHIVE：深度归档存储；
4. STANDARD：标准存储；
5. MAZ_STANDARD：标准存储（多 AZ）；
6. MAZ_STANDARD_IA：低频存储（多 AZ）；
7. INTELLIGENT_TIERING：智能分层存储。
   */
  StorageType?: string
}

/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAlarm返回参数结构体
 */
export interface DeleteAlarmResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 回调地址
 */
export interface WebCallback {
  /**
   * 回调的类型。可选值：
- Http
- WeCom
- DingTalk
- Lark
   */
  CallbackType: string
  /**
   * 回调地址，最大支持1024个字节。
也可使用WebCallbackId引用集成配置中的URL，此时该字段请填写为空字符串。
   */
  Url: string
  /**
   * 集成配置ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebCallbackId?: string
  /**
   * 回调方法。可选值：
- POST（默认值）
- PUT

注意：
- 参数CallbackType为Http时为必选，其它回调方式无需填写。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: string
  /**
   * 通知内容模板ID，使用Default-zh引用默认模板（中文），使用Default-en引用DefaultTemplate(English)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeContentId?: string
  /**
   * 提醒类型。

0：不提醒；1：指定人；2：所有人
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemindType?: number
  /**
   * 电话列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mobiles?: Array<string>
  /**
   * 用户ID列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserIds?: Array<string>
  /**
   * 该参数已废弃，请使用NoticeContentId。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Headers?: Array<string>
  /**
   * 该参数已废弃，请使用NoticeContentId。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Body?: string
  /**
   * 序号。
- 入参无效。
- 出参有效。
   */
  Index?: number
}

/**
 * DescribeAlarms返回参数结构体
 */
export interface DescribeAlarmsResponse {
  /**
   * 告警策略列表。
   */
  Alarms?: Array<AlarmInfo>
  /**
   * 符合查询条件的告警策略数目。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlarmNotice返回参数结构体
 */
export interface CreateAlarmNoticeResponse {
  /**
   * 告警模板ID
   */
  AlarmNoticeId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConsoleSharing返回参数结构体
 */
export interface DeleteConsoleSharingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConfig请求参数结构体
 */
export interface CreateConfigRequest {
  /**
   * 采集配置名称
   */
  Name: string
  /**
   * 采集配置所属日志主题ID即TopicId
   */
  Output: string
  /**
   * 日志采集路径，包含文件名，支持多个路径，多个路径之间英文逗号分隔，文件采集情况下必填
   */
  Path?: string
  /**
   * 采集的日志类型，默认为minimalist_log。支持以下类型：
- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；
- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；
- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；
- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；
- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；
- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；
- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）；
- service_syslog代表：syslog 采集（详见[采集 Syslog](https://cloud.tencent.com/document/product/614/81454)）；
- windows_event_log代表：Windows事件日志（详见[采集 Windows 事件日志](https://cloud.tencent.com/document/product/614/96678)）。
   */
  LogType?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
   */
  ExtractRule?: ExtractRuleInfo
  /**
   * 采集黑名单路径列表
   */
  ExcludePaths?: Array<ExcludePathInfo>
  /**
   * 用户自定义采集规则，Json格式序列化的字符串。当LogType为user_define_log时，必填。
   */
  UserDefineRule?: string
  /**
   * 高级采集配置。 Json字符串， Key/Value定义为如下：
- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时
- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数
- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false
样例：
`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`

控制台默认占位值：`{\"ClsAgentDefault\":0}`
   */
  AdvancedConfig?: string
}

/**
 * CreateShipper返回参数结构体
 */
export interface CreateShipperResponse {
  /**
   * 投递任务ID
   */
  ShipperId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警历史详情
 */
export interface AlertHistoryRecord {
  /**
   * 告警历史ID
   */
  RecordId: string
  /**
   * 告警策略ID
   */
  AlarmId: string
  /**
   * 告警策略名称
   */
  AlarmName: string
  /**
   * 监控对象ID
   */
  TopicId: string
  /**
   * 监控对象名称
   */
  TopicName: string
  /**
   * 监控对象所属地域
   */
  Region: string
  /**
   * 触发条件
   */
  Trigger: string
  /**
   * 持续周期，持续满足触发条件TriggerCount个周期后，再进行告警
   */
  TriggerCount: number
  /**
   * 告警通知发送频率，单位为分钟
   */
  AlarmPeriod: number
  /**
   * 通知渠道组
   */
  Notices: Array<AlertHistoryNotice>
  /**
   * 告警持续时间，单位为分钟
   */
  Duration: number
  /**
   * 告警状态，0代表未恢复，1代表已恢复，2代表已失效
   */
  Status: number
  /**
   * 告警发生时间，毫秒级Unix时间戳
   */
  CreateTime: number
  /**
   * 告警分组触发时对应的分组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupTriggerCondition?: Array<GroupTriggerConditionInfo>
  /**
   * 告警级别，0代表警告(Warn)，1代表提醒(Info)，2代表紧急 (Critical)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: number
  /**
   * 监控对象类型。
0:执行语句共用监控对象; 1:每个执行语句单独选择监控对象。 
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorObjectType?: number
}

/**
 * DescribeKafkaRecharges返回参数结构体
 */
export interface DescribeKafkaRechargesResponse {
  /**
   * KafkaRechargeInfo 信息列表
   */
  Infos?: Array<KafkaRechargeInfo>
  /**
   * Kafka导入信息总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIndex返回参数结构体
 */
export interface DeleteIndexResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警多维分析一些配置信息
 */
export interface AlarmAnalysisConfig {
  /**
   * 键。支持以下key：
SyntaxRule：语法规则，value支持 0：Lucene语法；1： CQL语法。
QueryIndex：执行语句序号。value支持  -1：自定义； 1：执行语句1； 2：执行语句2。
CustomQuery：检索语句。 QueryIndex为-1时有效且必填，value示例： "* | select count(*) as count"。
Fields：字段。value支持 __SOURCE__；__FILENAME__；__HOSTNAME__；__TIMESTAMP__；__INDEX_STATUS__；__PKG_LOGID__；__TOPIC__。
Format：显示形式。value支持 1：每条日志一行；2：每条日志每个字段一行。
Limit：最大日志条数。 value示例： 5。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 值。
键对应值如下：
SyntaxRule：语法规则，value支持 0：Lucene语法；1： CQL语法。
QueryIndex：执行语句序号。value支持  -1：自定义； 1：执行语句1； 2：执行语句2。
CustomQuery：检索语句。 QueryIndex为-1时有效且必填，value示例： "* | select count(*) as count"。
Fields：字段。value支持 __SOURCE__；__FILENAME__；__HOSTNAME__；__TIMESTAMP__；__INDEX_STATUS__；__PKG_LOGID__；__TOPIC__。
Format：显示形式。value支持 1：每条日志一行；2：每条日志每个字段一行。
Limit：最大日志条数。 value示例： 5。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * 预览数据详情
 */
export interface PreviewLogStatistic {
  /**
   * 日志内容
   */
  LogContent: string
  /**
   * 行号。从0开始
   */
  LineNum: number
  /**
   * 目标日志主题
   */
  DstTopicId?: string
  /**
   * 失败错误信息， 空字符串""表示正常
   */
  FailReason?: string
  /**
   * 日志时间，格式：`2024-05-07 17:13:17.105`

- 入参时无效
- 出参时有效，为日志中的时间格式
   */
  Time?: string
  /**
   * 目标topic-name
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  DstTopicName?: string
}

/**
 * 多日志主题检索错误信息
 */
export interface SearchLogErrors {
  /**
   * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeStr?: string
}

/**
 * ModifyIndex请求参数结构体
 */
export interface ModifyIndexRequest {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 默认不生效
   */
  Status?: boolean
  /**
   * 索引规则
   */
  Rule?: RuleInfo
  /**
   * 内置保留字段（`__FILENAME__`，`__HOSTNAME__`及`__SOURCE__`）是否包含至全文索引，默认为false，推荐设置为true
   * false:不包含
   * true:包含
   */
  IncludeInternalFields?: boolean
  /**
   * 元数据字段（前缀为`__TAG__`的字段）是否包含至全文索引，默认为0，推荐设置为1
   * 0:仅包含开启键值索引的元数据字段
   * 1:包含所有元数据字段
   * 2:不包含任何元数据字段
   */
  MetadataFlag?: number
}

/**
 * 日志分析的列属性
 */
export interface Column {
  /**
   * 列的名字
   */
  Name?: string
  /**
   * 列的属性
   */
  Type?: string
}

/**
 * 投递日志的内容格式配置
 */
export interface ContentInfo {
  /**
   * 内容格式，支持json、csv
   */
  Format: string
  /**
   * csv格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Csv?: CsvInfo
  /**
   * json格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Json?: JsonInfo
  /**
   * parquet格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Parquet?: ParquetInfo
}

/**
 * 需要开启键值索引的字段的索引描述信息
 */
export interface ValueInfo {
  /**
   * 字段类型，目前支持的类型有：long、text、double
   */
  Type: string
  /**
   * 字段的分词符，其中的每个字符代表一个分词符；
仅支持英文符号、\n\t\r及转义符\；
long及double类型字段需为空；
注意：\n\t\r本身已被转义，直接使用双引号包裹即可作为入参，无需再次转义。使用API Explorer进行调试时请使用JSON参数输入方式，以避免\n\t\r被重复转义
   */
  Tokenizer?: string
  /**
   * 字段是否开启分析功能
   */
  SqlFlag?: boolean
  /**
   * 是否包含中文，long及double类型字段需为false
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainZH?: boolean
}

/**
 * DescribeDataTransformInfo请求参数结构体
 */
export interface DescribeDataTransformInfoRequest {
  /**
   * - taskName
按照【加工任务名称】进行过滤。
类型：String
必选：否

- taskId
按照【加工任务id】进行过滤。
类型：String
必选：否

- topicId
按照【源topicId】进行过滤。
类型：String
必选：否
- status
按照【 任务运行状态】进行过滤。 1：准备中，2：运行中，3：停止中，4：已停止
类型：String
必选：否
- hasServiceLog
按照【是否开启服务日志】进行过滤。 1：未开启，2：已开启
类型：String
必选：否
- dstTopicType
按照【目标topic类型】进行过滤。  1：固定，2：动态
类型：String
必选：否

每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
  /**
   * 默认值为2.   1: 获取单个任务的详细信息 2：获取任务列表
   */
  Type?: number
  /**
   * Type为1， 此参数必填
   */
  TaskId?: string
}

/**
 * DeleteConfig返回参数结构体
 */
export interface DeleteConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteShipper返回参数结构体
 */
export interface DeleteShipperResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyKafkaConsumer请求参数结构体
 */
export interface ModifyKafkaConsumerRequest {
  /**
   * 日志主题ID
   */
  FromTopicId: string
  /**
   * 压缩方式[0:NONE；2:SNAPPY；3:LZ4]
   */
  Compression?: number
  /**
   * kafka协议消费数据格式
   */
  ConsumerContent?: KafkaConsumerContent
}

/**
 * 元字段索引配置
 */
export interface RuleTagInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive: boolean
  /**
   * 元字段索引配置中的字段信息
   */
  KeyValues: Array<KeyValueInfo>
}

/**
 * 日志导出信息
 */
export interface ExportInfo {
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志导出任务ID
   */
  ExportId?: string
  /**
   * 日志导出查询语句
   */
  Query?: string
  /**
   * 日志导出文件名
   */
  FileName?: string
  /**
   * 日志文件大小
   */
  FileSize?: number
  /**
   * 日志导出时间排序
   */
  Order?: string
  /**
   * 日志导出格式
   */
  Format?: string
  /**
   * 日志导出数量
   */
  Count?: number
  /**
   * 日志下载状态。Processing:导出正在进行中，Completed:导出完成，Failed:导出失败，Expired:日志导出已过期(三天有效期), Queuing 排队中
   */
  Status?: string
  /**
   * 日志导出起始时间
   */
  From?: number
  /**
   * 日志导出结束时间
   */
  To?: number
  /**
   * 日志导出路径,有效期一个小时，请尽快使用该路径下载。
   */
  CosPath?: string
  /**
   * 日志导出创建时间
   */
  CreateTime?: string
  /**
   * 语法规则。 默认值为0。
0：Lucene语法，1：CQL语法。
   */
  SyntaxRule?: number
  /**
   * 导出字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  DerivedFields?: Array<string>
}

/**
 * ModifyIndex返回参数结构体
 */
export interface ModifyIndexResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主题基本信息
 */
export interface TopicInfo {
  /**
   * 日志集ID
   */
  LogsetId?: string
  /**
   * 主题ID
   */
  TopicId?: string
  /**
   * 主题名称
   */
  TopicName?: string
  /**
   * 主题分区个数
   */
  PartitionCount?: number
  /**
   * 主题是否开启索引（主题类型需为日志主题）
   */
  Index?: boolean
  /**
   * 云产品标识，主题由其它云产品创建时，该字段会显示云产品名称，例如CDN、TKE
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssumerName?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 主题是否开启采集，true：开启采集；false：关闭采集。
创建日志主题时默认开启，可通过SDK调用ModifyTopic修改此字段。
控制台目前不支持修改此参数。
   */
  Status?: boolean
  /**
   * 主题绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 该主题是否开启自动分裂
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSplit?: boolean
  /**
   * 若开启自动分裂的话，该主题能够允许的最大分区数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxSplitPartitions?: number
  /**
   * 主题的存储类型

- hot: 标准存储
- cold: 低频存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存
注意：此字段可能返回 null，表示取不到有效值。
   */
  Period?: number
  /**
   * 云产品二级标识，日志主题由其它云产品创建时，该字段会显示云产品名称及其日志类型的二级分类，例如TKE-Audit、TKE-Event。部分云产品仅有云产品标识(AssumerName)，无该字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAssumerName?: string
  /**
   * 主题描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describes?: string
  /**
   * 开启日志沉降，标准存储的生命周期， hotPeriod < Period。
标准存储为 hotPeriod, 低频存储则为 Period-hotPeriod。（主题类型需为日志主题）
HotPeriod=0为没有开启日志沉降。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HotPeriod?: number
  /**
   * 主题类型。
- 0: 日志主题 
- 1: 指标主题
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizType?: number
  /**
   * 免鉴权开关。 false：关闭； true：开启。
开启后将支持指定操作匿名访问该日志主题。详情请参见[日志主题](https://cloud.tencent.com/document/product/614/41035)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWebTracking?: boolean
  /**
   * 日志主题扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extends?: TopicExtendInfo
  /**
   * 异步迁移任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicAsyncTaskID?: string
  /**
   * 异步迁移状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  MigrationStatus?: number
  /**
   * 异步迁移完成后，预计生效日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  EffectiveDate?: string
}

/**
 * 分组触发条件
 */
export interface GroupTriggerConditionInfo {
  /**
   * 分组触发字段名称
   */
  Key: string
  /**
   * 分组触发字段值
   */
  Value: string
}

/**
 * DescribeLogContext返回参数结构体
 */
export interface DescribeLogContextResponse {
  /**
   * 日志上下文信息集合
   */
  LogContextInfos?: Array<LogContextInfo>
  /**
   * 上文日志是否已经返回完成（当PrevOver为false，表示有上文日志还未全部返回）。
   */
  PrevOver?: boolean
  /**
   * 下文日志是否已经返回完成（当NextOver为false，表示有下文日志还未全部返回）。
   */
  NextOver?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchLog返回参数结构体
 */
export interface SearchLogResponse {
  /**
   * 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时。
注意：
* 仅适用于单日志主题检索，检索多个日志主题时，请使用Topics中的Context
   */
  Context?: string
  /**
   * 符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志
注意：仅当检索分析语句(Query)不包含SQL时有效
   */
  ListOver?: boolean
  /**
   * 返回的是否为统计分析（即SQL）结果
   */
  Analysis?: boolean
  /**
   * 匹配检索条件的原始日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<LogInfo>
  /**
   * 日志统计分析结果的列名
当UseNewAnalysis为false时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColNames?: Array<string>
  /**
   * 日志统计分析结果
当UseNewAnalysis为false时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisResults?: Array<LogItems>
  /**
   * 日志统计分析结果
当UseNewAnalysis为true时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisRecords?: Array<string>
  /**
   * 日志统计分析结果的列属性
当UseNewAnalysis为true时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<Column>
  /**
   * 本次统计分析使用的采样率
注意：此字段可能返回 null，表示取不到有效值。
   */
  SamplingRate?: number
  /**
   * 使用多日志主题检索时，各个日志主题的基本信息，例如报错信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topics?: SearchLogTopics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通知内容模板详细配置
 */
export interface NoticeContent {
  /**
   * 渠道类型

Email:邮件;Sms:短信;WeChat:微信;Phone:电话;WeCom:企业微信;DingTalk:钉钉;Lark:飞书;Http:自定义回调;
   */
  Type: string
  /**
   * 告警触发通知内容模板。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerContent?: NoticeContentInfo
  /**
   * 告警恢复通知内容模板。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecoveryContent?: NoticeContentInfo
}

/**
 * 投递任务信息
 */
export interface ShipperTaskInfo {
  /**
   * 投递任务ID
   */
  TaskId: string
  /**
   * 投递信息ID
   */
  ShipperId: string
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 本批投递的日志的开始时间戳，毫秒
   */
  RangeStart: number
  /**
   * 本批投递的日志的结束时间戳， 毫秒
   */
  RangeEnd: number
  /**
   * 本次投递任务的开始时间戳， 毫秒
   */
  StartTime: number
  /**
   * 本次投递任务的结束时间戳， 毫秒
   */
  EndTime: number
  /**
   * 本次投递的结果，"success","running","failed"
   */
  Status: string
  /**
   * 结果的详细信息
   */
  Message: string
}

/**
 * CheckFunction返回参数结构体
 */
export interface CheckFunctionResponse {
  /**
   * 失败错误码
   */
  ErrorCode?: number
  /**
   * 失败错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteExport请求参数结构体
 */
export interface DeleteExportRequest {
  /**
   * 日志导出ID
   */
  ExportId: string
}

/**
 * PreviewKafkaRecharge请求参数结构体
 */
export interface PreviewKafkaRechargeRequest {
  /**
   * 预览类型，1：源数据预览；2：导出结果预览。
   */
  PreviewType: number
  /**
   * 导入Kafka类型，0：腾讯云CKafka；1：用户自建Kafka。
   */
  KafkaType: number
  /**
   * 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开。
最多支持100个。
   */
  UserKafkaTopics: string
  /**
   * 导入数据位置，-2：最早；-1：最晚。
   */
  Offset: number
  /**
   * 腾讯云CKafka实例ID，当KafkaType为0时参数KafkaInstance有效且必填。
   */
  KafkaInstance?: string
  /**
   * 服务地址。
KafkaType为1时ServerAddr必填。
   */
  ServerAddr?: string
  /**
   * ServerAddr是否为加密连接。
KafkaType为1时有效。
   */
  IsEncryptionAddr?: boolean
  /**
   * 加密访问协议。
KafkaType为1并且IsEncryptionAddr为true时Protocol必填。
   */
  Protocol?: KafkaProtocolInfo
  /**
   * 用户Kafka消费组
   */
  ConsumerGroupName?: string
  /**
   * 日志导入规则
   */
  LogRechargeRule?: LogRechargeRuleInfo
}

/**
 * SplitPartition返回参数结构体
 */
export interface SplitPartitionResponse {
  /**
   * 分裂结果集
   */
  Partitions?: Array<PartitionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataTransform返回参数结构体
 */
export interface CreateDataTransformResponse {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志上下文信息
 */
export interface LogContextInfo {
  /**
   * 日志来源设备
   */
  Source?: string
  /**
   * 采集路径
   */
  Filename?: string
  /**
   * 日志内容
   */
  Content?: string
  /**
   * 日志包序号
   */
  PkgId?: string
  /**
   * 日志包内一条日志的序号
   */
  PkgLogId?: number
  /**
   * 日志时间戳
   */
  BTime?: number
  /**
   * 日志来源主机名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * 原始日志(仅在日志创建索引异常时有值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawLog?: string
  /**
   * 日志创建索引异常原因(仅在日志创建索引异常时有值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStatus?: string
  /**
   * 日志内容的高亮描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighLights?: Array<HighLightItem>
}

/**
 * ModifyShipper请求参数结构体
 */
export interface ModifyShipperRequest {
  /**
   * 投递规则ID
   */
  ShipperId: string
  /**
   * COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。
   */
  Bucket?: string
  /**
   * 投递规则投递的新的目录前缀。
- 仅支持0-9A-Za-z-_/
- 最大支持256个字符
   */
  Prefix?: string
  /**
   * 投递规则的开关状态。true：开启投递任务；false：关闭投递任务。
   */
  Status?: boolean
  /**
   * 投递规则的名字
   */
  ShipperName?: string
  /**
   * 投递的时间间隔，单位 秒，默认300，范围 300-900
   */
  Interval?: number
  /**
   * 投递的文件的最大值，单位 MB，默认256，范围 5-256
   */
  MaxSize?: number
  /**
   * 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递
   */
  FilterRules?: Array<FilterRuleInfo>
  /**
   * 投递日志的分区规则，支持strftime的时间格式表示
   */
  Partition?: string
  /**
   * 投递日志的压缩配置
   */
  Compress?: CompressInfo
  /**
   * 投递日志的内容格式配置
   */
  Content?: ContentInfo
  /**
   * 投递文件命名配置，0：随机数命名，1：投递时间命名。
   */
  FilenameMode?: number
  /**
   * cos桶存储类型。支持：STANDARD_IA、ARCHIVE、DEEP_ARCHIVE、STANDARD、MAZ_STANDARD、MAZ_STANDARD_IA、INTELLIGENT_TIERING。

1. STANDARD_IA：低频存储；
2. ARCHIVE：归档存储；
3. DEEP_ARCHIVE：深度归档存储；
4. STANDARD：标准存储；
5. MAZ_STANDARD：标准存储（多 AZ）；
6. MAZ_STANDARD_IA：低频存储（多 AZ）；
7. INTELLIGENT_TIERING：智能分层存储。
   */
  StorageType?: string
}

/**
 * 告警通知接收者信息
 */
export interface NoticeReceiver {
  /**
   * 接受者类型。可选值：
-  Uin - 用户ID
- Group - 用户组ID
暂不支持其余接收者类型。
   */
  ReceiverType: string
  /**
   * 接收者。
当ReceiverType为Uin时，ReceiverIds的值为用户uid。[子用户信息查询](https://cloud.tencent.com/document/api/598/53486)
当ReceiverType为Group时，ReceiverIds的值为用户组id。[CAM用户组](https://cloud.tencent.com/document/product/598/34589)
   */
  ReceiverIds: Array<number | bigint>
  /**
   * 通知接收渠道。
- Email - 邮件
- Sms - 短信
- WeChat - 微信
- Phone - 电话
   */
  ReceiverChannels: Array<string>
  /**
   * 通知内容模板ID，使用Default-zh引用默认模板（中文），使用Default-en引用DefaultTemplate(English)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeContentId?: string
  /**
   * 允许接收信息的开始时间。格式：`15:04:05`。必填
   */
  StartTime?: string
  /**
   * 允许接收信息的结束时间。格式：`15:04:05`。必填
   */
  EndTime?: string
  /**
   * 位序。

- 入参时无效。
- 出参时有效。
   */
  Index?: number
}

/**
 * CreateKafkaRecharge请求参数结构体
 */
export interface CreateKafkaRechargeRequest {
  /**
   * 导入CLS目标topic ID
   */
  TopicId: string
  /**
   * Kafka导入配置名称
   */
  Name: string
  /**
   * 导入Kafka类型，0: 腾讯云CKafka，1: 用户自建Kafka
   */
  KafkaType: number
  /**
   * 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开
   */
  UserKafkaTopics: string
  /**
   * 导入数据位置，-2:最早（默认），-1：最晚
   */
  Offset: number
  /**
   * 日志导入规则。
   */
  LogRechargeRule: LogRechargeRuleInfo
  /**
   * 腾讯云CKafka实例ID，KafkaType为0时必填。
   */
  KafkaInstance?: string
  /**
   * 服务地址，KafkaType为1时必填。
   */
  ServerAddr?: string
  /**
   * ServerAddr是否为加密连接，KafkaType为1时必填。
   */
  IsEncryptionAddr?: boolean
  /**
   * 加密访问协议。
KafkaType为1并且IsEncryptionAddr为true时Protocol必填。
   */
  Protocol?: KafkaProtocolInfo
  /**
   * 用户Kafka消费组名称
   */
  ConsumerGroupName?: string
}

/**
 * DeleteKafkaRecharge请求参数结构体
 */
export interface DeleteKafkaRechargeRequest {
  /**
   * Kafka导入配置ID
   */
  Id: string
  /**
   * 导入CLS目标topic ID
   */
  TopicId: string
}

/**
 * 索引规则，FullText、KeyValue、Tag参数必须输入一个有效参数
 */
export interface RuleInfo {
  /**
   * 全文索引配置, 为空时代表未开启全文索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullText?: FullTextInfo
  /**
   * 键值索引配置，为空时代表未开启键值索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyValue?: RuleKeyValueInfo
  /**
   * 元字段索引配置，为空时代表未开启元字段索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: RuleTagInfo
  /**
   * 键值索引自动配置，为空时代表未开启该功能。
启用后自动将日志内的字段添加到键值索引中，包括日志中后续新增的字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DynamicIndex?: DynamicIndex
}

/**
 * CreateConfig返回参数结构体
 */
export interface CreateConfigResponse {
  /**
   * 采集配置ID
   */
  ConfigId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConsumer请求参数结构体
 */
export interface CreateConsumerRequest {
  /**
   * 投递任务绑定的日志主题 ID
   */
  TopicId: string
  /**
   * 是否投递日志的元数据信息，默认为 true。
当NeedContent为true时：字段Content有效。
当NeedContent为false时：字段Content无效。
   */
  NeedContent?: boolean
  /**
   * 如果需要投递元数据信息，元数据信息的描述
   */
  Content?: ConsumerContent
  /**
   * CKafka的描述
   */
  Ckafka?: Ckafka
  /**
   * 投递时压缩方式，取值0，2，3。[0：NONE；2：SNAPPY；3：LZ4]
   */
  Compression?: number
}

/**
 * ModifyWebCallback返回参数结构体
 */
export interface ModifyWebCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知渠道组详细配置
 */
export interface AlarmNotice {
  /**
   * 告警通知渠道组名称。
   */
  Name?: string
  /**
   * 告警通知渠道组绑定的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 告警模板的类型。可选值：
<br><li> Trigger - 告警触发</li>
<br><li> Recovery - 告警恢复</li>
<br><li> All - 告警触发和告警恢复</li>
   */
  Type?: string
  /**
   * 告警通知模板接收者信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeReceivers?: Array<NoticeReceiver>
  /**
   * 告警通知模板回调信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebCallbacks?: Array<WebCallback>
  /**
   * 告警通知模板ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmNoticeId?: string
  /**
   * 通知规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeRules?: Array<NoticeRule>
  /**
   * 免登录操作告警开关。
参数值： 1：关闭 2：开启（默认开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmShieldStatus?: number
  /**
   * 调用链接域名。http:// 或者 https:// 开头，不能/结尾
注意：此字段可能返回 null，表示取不到有效值。
   */
  JumpDomain?: string
  /**
   * 投递相关信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmNoticeDeliverConfig?: AlarmNoticeDeliverConfig
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最近更新时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
}

/**
 * ModifyConfig返回参数结构体
 */
export interface ModifyConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNoticeContent请求参数结构体
 */
export interface ModifyNoticeContentRequest {
  /**
   * 通知内容模板ID。
   */
  NoticeContentId: string
  /**
   * 通知内容模板名称。
   */
  Name?: string
  /**
   * 通知内容语言。

0：中文 1：英文
   */
  Type?: number
  /**
   * 通知内容模板详细信息。
   */
  NoticeContents?: Array<NoticeContent>
}

/**
 * OpenKafkaConsumer请求参数结构体
 */
export interface OpenKafkaConsumerRequest {
  /**
   * 日志主题ID
   */
  FromTopicId: string
  /**
   * 压缩方式[0:NONE；2:SNAPPY；3:LZ4]，默认：0
   */
  Compression?: number
  /**
   * kafka协议消费数据格式
   */
  ConsumerContent?: KafkaConsumerContent
}

/**
 * QueryRangeMetric返回参数结构体
 */
export interface QueryRangeMetricResponse {
  /**
   * 指标查询结果类型
   */
  ResultType?: string
  /**
   * 指标查询结果
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyKafkaRecharge返回参数结构体
 */
export interface ModifyKafkaRechargeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmNotice返回参数结构体
 */
export interface ModifyAlarmNoticeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDeliverCloudFunction返回参数结构体
 */
export interface CreateDeliverCloudFunctionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据加工任务基本详情
 */
export interface DataTransformTaskInfo {
  /**
   * 数据加工任务名称
   */
  Name?: string
  /**
   * 数据加工任务id
   */
  TaskId?: string
  /**
   * 任务启用状态，默认为1，正常开启,  2关闭
   */
  EnableFlag?: number
  /**
   * 加工任务类型，1： DSL， 2：SQL
   */
  Type?: number
  /**
   * 源日志主题
   */
  SrcTopicId?: string
  /**
   * 当前加工任务状态（1准备中/2运行中/3停止中/4已停止）
   */
  Status?: number
  /**
   * 加工任务创建时间
   */
  CreateTime?: string
  /**
   * 最近修改时间
   */
  UpdateTime?: string
  /**
   * 最后启用时间，如果需要重建集群，修改该时间
   */
  LastEnableTime?: string
  /**
   * 日志主题名称
   */
  SrcTopicName?: string
  /**
   * 日志集id
   */
  LogsetId?: string
  /**
   * 加工任务目的topic_id以及别名
   */
  DstResources?: Array<DataTransformResouceInfo>
  /**
   * 加工逻辑函数。
   */
  EtlContent?: string
  /**
   * 数据加工类型。0：标准加工任务；1：前置加工任务。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataTransformType?: number
  /**
   * 保留失败日志状态。 1:不保留，2:保留
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeepFailureLog?: number
  /**
   * 失败日志的字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureLogKey?: string
}

/**
 * DescribeMachines返回参数结构体
 */
export interface DescribeMachinesResponse {
  /**
   * 机器状态信息组
   */
  Machines?: Array<MachineInfo>
  /**
   * 机器组是否开启自动升级功能。 0：未开启自动升级；1：开启了自动升级。
   */
  AutoUpdate?: number
  /**
   * 机器组自动升级功能预设开始时间
   */
  UpdateStartTime?: string
  /**
   * 机器组自动升级功能预设结束时间
   */
  UpdateEndTime?: string
  /**
   * 当前用户可用最新的Loglistener版本
   */
  LatestAgentVersion?: string
  /**
   * 是否开启服务日志
   */
  ServiceLogging?: boolean
  /**
   * 总数目
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCosRecharge返回参数结构体
 */
export interface ModifyCosRechargeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDashboards返回参数结构体
 */
export interface DescribeDashboardsResponse {
  /**
   * 仪表盘的数量
   */
  TotalCount?: number
  /**
   * 仪表盘详细明细
   */
  DashboardInfos?: Array<DashboardInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 投递日志的压缩配置
 */
export interface CompressInfo {
  /**
   * 压缩格式，支持gzip、lzop、snappy和none不压缩
   */
  Format: string
}

/**
 * ApplyConfigToMachineGroup返回参数结构体
 */
export interface ApplyConfigToMachineGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知渠道组详情
 */
export interface AlertHistoryNotice {
  /**
   * 通知渠道组名称
   */
  Name?: string
  /**
   * 通知渠道组ID
   */
  AlarmNoticeId?: string
}

/**
 * DeleteAlarm请求参数结构体
 */
export interface DeleteAlarmRequest {
  /**
   * 告警策略ID。
   */
  AlarmId: string
}

/**
 * 告警屏蔽任务配置
 */
export interface AlarmShieldInfo {
  /**
   * 通知渠道组Id
   */
  AlarmNoticeId?: string
  /**
   * 屏蔽规则id
   */
  TaskId?: string
  /**
   * 屏蔽开始时间（秒级时间戳）。
   */
  StartTime?: number
  /**
   * 屏蔽结束时间（秒级时间戳）。
   */
  EndTime?: number
  /**
   * 屏蔽类型。1：屏蔽所有通知，2：按照Rule参数屏蔽匹配规则的通知。
   */
  Type?: number
  /**
   * 屏蔽规则，当Type为2时必填。规则填写方式详见[产品文档](https://cloud.tencent.com/document/product/614/103178#rule)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rule?: string
  /**
   * 屏蔽原因。
   */
  Reason?: string
  /**
   * 规则创建来源。
1. 控制台，2.api，3.告警通知
   */
  Source?: number
  /**
   * 操作者。
   */
  Operator?: string
  /**
   * 规则状态。
0：暂未生效，1：生效中，2：已失效
   */
  Status?: number
  /**
   * 规则创建时间。
   */
  CreateTime?: number
  /**
   * 规则更新时间。
   */
  UpdateTime?: number
}

/**
 * CreateConsoleSharing返回参数结构体
 */
export interface CreateConsoleSharingResponse {
  /**
   * 免密分享链接
   */
  SharingUrl?: string
  /**
   * 免密分享链接ID
   */
  SharingId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyKafkaConsumer返回参数结构体
 */
export interface ModifyKafkaConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyConsoleSharing返回参数结构体
 */
export interface ModifyConsoleSharingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机器组类型描述
 */
export interface MachineGroupTypeInfo {
  /**
   * 机器组类型。支持 ip 和 label。
- ip：表示该机器组Values中存的是采集机器的ip地址
- label：表示该机器组Values中存储的是机器的标签
   */
  Type: string
  /**
   * 机器描述列表。
   */
  Values?: Array<string>
}

/**
 * DeleteConfigFromMachineGroup请求参数结构体
 */
export interface DeleteConfigFromMachineGroupRequest {
  /**
   * 机器组ID
   */
  GroupId: string
  /**
   * 采集配置ID
   */
  ConfigId: string
}

/**
 * SearchCosRechargeInfo返回参数结构体
 */
export interface SearchCosRechargeInfoResponse {
  /**
   * 匹配到的存储桶下的某个文件的前几行数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<string>
  /**
   * 匹配到的存储桶下的文件个数
   */
  Sum?: number
  /**
   * 当前预览文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 预览获取数据失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarms请求参数结构体
 */
export interface DescribeAlarmsRequest {
  /**
   * name
- 按照【告警策略名称】进行过滤。
- 类型：String
- 必选：否

alarmId
- 按照【告警策略ID】进行过滤。
- 类型：String
- 必选：否

topicId
- 按照【监控对象的日志主题ID】进行过滤。
- 类型：String
- 必选：否

enable
- 按照【启用状态】进行过滤。
- 类型：String
- 备注：enable参数值范围: 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False。 其它值将返回参数错误信息.
- 必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
}

/**
 * QueryMetric请求参数结构体
 */
export interface QueryMetricRequest {
  /**
   * 查询语句，使用PromQL语法
   */
  Query: string
  /**
   * 指标主题ID
   */
  TopicId: string
  /**
   * 查询时间，秒级Unix时间戳。为空时代表当前时间戳。

   */
  Time?: number
}

/**
 * DescribeDashboardSubscribes返回参数结构体
 */
export interface DescribeDashboardSubscribesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCosRecharge返回参数结构体
 */
export interface CreateCosRechargeResponse {
  /**
   * COS导入任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlertRecordHistory返回参数结构体
 */
export interface DescribeAlertRecordHistoryResponse {
  /**
   * 告警历史总数
   */
  TotalCount?: number
  /**
   * 告警历史详情
   */
  Records?: Array<AlertHistoryRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 键值或者元字段索引的字段信息
 */
export interface KeyValueInfo {
  /**
   * 需要配置键值或者元字段索引的字段名称，仅支持字母、数字、下划线和-./@，且不能以下划线开头

注意：
1，元字段（tag）的Key无需额外添加`__TAG__.`前缀，与上传日志时对应的字段Key一致即可，腾讯云控制台展示时将自动添加`__TAG__.`前缀
2，键值索引（KeyValue）及元字段索引（Tag）中的Key总数不能超过300
3，Key的层级不能超过10层，例如a.b.c.d.e.f.g.h.j.k
4，不允许同时包含json父子级字段，例如a及a.b
   */
  Key: string
  /**
   * 字段的索引描述信息
   */
  Value: ValueInfo
}

/**
 * SearchDashboardSubscribe返回参数结构体
 */
export interface SearchDashboardSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 投递规则
 */
export interface ShipperInfo {
  /**
   * 投递规则ID
   */
  ShipperId?: string
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 投递的bucket地址
   */
  Bucket?: string
  /**
   * 投递的前缀目录
   */
  Prefix?: string
  /**
   * 投递规则的名字
   */
  ShipperName?: string
  /**
   * 投递的时间间隔，单位 秒
   */
  Interval?: number
  /**
   * 投递的文件的最大值，单位 MB
   */
  MaxSize?: number
  /**
   * 是否生效
   */
  Status?: boolean
  /**
   * 投递日志的过滤规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterRules?: Array<FilterRuleInfo>
  /**
   * 投递日志的分区规则，支持strftime的时间格式表示
   */
  Partition?: string
  /**
   * 投递日志的压缩配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Compress?: CompressInfo
  /**
   * 投递日志的内容格式配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: ContentInfo
  /**
   * 投递日志的创建时间
   */
  CreateTime?: string
  /**
   * 投递文件命名配置，0：随机数命名，1：投递时间命名，默认0（随机数命名）
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilenameMode?: number
  /**
   * 投递数据范围的开始时间点
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: number
  /**
   * 投递数据范围的结束时间点
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: number
  /**
   * 历史数据投递的进度（仅当用户选择的数据内中历史数据时才有效）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
  /**
   * 历史数据全部投递完成剩余的时间（仅当用户选择的数据中有历史数据时才有效）
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemainTime?: number
  /**
   * 历史任务状态：
0：实时任务
1：任务准备中
2：任务运行中
3：任务运行异常
4：任务运行结束
注意：此字段可能返回 null，表示取不到有效值。
   */
  HistoryStatus?: number
  /**
   * cos桶类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
}

/**
 * AddMachineGroupInfo返回参数结构体
 */
export interface AddMachineGroupInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMachineGroup请求参数结构体
 */
export interface ModifyMachineGroupRequest {
  /**
   * 机器组ID
   */
  GroupId: string
  /**
   * 机器组名称
   */
  GroupName?: string
  /**
   * 机器组类型。Type：ip，Values中为ip字符串列表机器组；Type：label，Values中为标签字符串列表机器组。
   */
  MachineGroupType?: MachineGroupTypeInfo
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
  /**
   * 是否开启机器组自动更新
   */
  AutoUpdate?: boolean
  /**
   * 升级开始时间，建议业务低峰期升级LogListener
   */
  UpdateStartTime?: string
  /**
   * 升级结束时间，建议业务低峰期升级LogListener
   */
  UpdateEndTime?: string
  /**
   * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
   */
  ServiceLogging?: boolean
  /**
   * 机器组中机器定期离线清理时间。单位：天
   */
  DelayCleanupTime?: number
  /**
   * 机器组元数据信息列表
   */
  MetaTags?: Array<MetaTagInfo>
}

/**
 * DeleteDashboardSubscribe请求参数结构体
 */
export interface DeleteDashboardSubscribeRequest {
  /**
   * 仪表盘订阅记录id。
   */
  Id: number
}

/**
 * DescribeConsumer返回参数结构体
 */
export interface DescribeConsumerResponse {
  /**
   * 投递任务是否生效
   */
  Effective?: boolean
  /**
   * 是否投递日志的元数据信息
   */
  NeedContent?: boolean
  /**
   * 如果需要投递元数据信息，元数据信息的描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: ConsumerContent
  /**
   * CKafka的描述
   */
  Ckafka?: Ckafka
  /**
   * 压缩方式[0:NONE；2:SNAPPY；3:LZ4]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Compression?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤器
 */
export interface MetricLabel {
  /**
   * 指标名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 指标内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * CreateNoticeContent请求参数结构体
 */
export interface CreateNoticeContentRequest {
  /**
   * 模板名称。
   */
  Name: string
  /**
   * 模板内容语言。0：中文1：英文
   */
  Type?: number
  /**
   * 模板详细配置。
   */
  NoticeContents?: Array<NoticeContent>
}

/**
 * CKafka的描述-需要投递到的kafka信息
 */
export interface Ckafka {
  /**
   * Ckafka 的 InstanceId
   */
  InstanceId: string
  /**
   * Ckafka 的 TopicName
   */
  TopicName: string
  /**
   * Ckafka 的 Vip
   */
  Vip?: string
  /**
   * Ckafka 的 Vport
   */
  Vport?: string
  /**
   * Ckafka 的 InstanceName
   */
  InstanceName?: string
  /**
   * Ckafka 的 TopicId
   */
  TopicId?: string
}

/**
 * DescribeMachines请求参数结构体
 */
export interface DescribeMachinesRequest {
  /**
   * 查询的机器组ID
   */
  GroupId: string
  /**
   * ip
- 按照【ip】进行过滤。
- 类型：String
- 必选：否

instance
- 按照【instance】进行过滤。
- 类型：String
- 必选：否

version
- 按照【LogListener版本】进行过滤。
- 类型：String
- 必选：否

status
- 按照【状态】进行过滤。
- 类型：String
- 必选：否
- 可选值：0：离线，1：正常

offlineTime
- 按照【机器离线时间】进行过滤。
- 类型：String
- 必选：否
- - 可选值：0：无离线时间，12：12小时内，24：一天内，48：两天内，99：两天前

每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量。
   */
  Offset?: number
  /**
   * 分页单页限制数目。最大支持100
   */
  Limit?: number
}

/**
 * 多触发条件。
 */
export interface MultiCondition {
  /**
   * 触发条件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Condition?: string
  /**
   * 告警级别。0:警告(Warn); 1:提醒(Info); 2:紧急 (Critical)。

- 不填则默认为0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: number
}

/**
 * DeleteAlarmNotice请求参数结构体
 */
export interface DeleteAlarmNoticeRequest {
  /**
   * 通知渠道组ID
   */
  AlarmNoticeId: string
}

/**
 * DescribeScheduledSqlInfo请求参数结构体
 */
export interface DescribeScheduledSqlInfoRequest {
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
  /**
   * 任务名称。
   */
  Name?: string
  /**
   * 任务id。
   */
  TaskId?: string
  /**
   * <li>srcTopicName按照【源日志主题名称】进行过滤，模糊匹配。类型：String。必选：否</li>
<li>dstTopicName按照【目标日志主题名称】进行过滤，模糊匹配。类型：String。必选：否</li>
<li>srcTopicId按照【源日志主题ID】进行过滤。类型：String。必选：否</li>
<li>dstTopicId按照【目标日志主题ID】进行过滤。类型：String。必选：否</li>
<li>bizType按照【主题类型】进行过滤，0：日志主题；1：指标主题。类型：String。必选：否</li>
<li>status按照【任务状态】进行过滤，1：运行；2：停止。类型：String。必选：否</li>
<li>taskName按照【任务名称】进行过滤，模糊匹配。类型：String。必选：否</li>
<li>taskId按照【任务ID】进行过滤，模糊匹配。类型：String。必选：否</li>

   */
  Filters?: Array<Filter>
}

/**
 * DeleteLogset请求参数结构体
 */
export interface DeleteLogsetRequest {
  /**
   * 日志集ID
   */
  LogsetId: string
}

/**
 * 机器状态信息
 */
export interface MachineInfo {
  /**
   * 机器的IP
   */
  Ip?: string
  /**
   * 机器实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceID?: string
  /**
   * 机器状态，0:异常，1:正常
   */
  Status?: number
  /**
   * 机器离线时间，空为正常，异常返回具体时间
   */
  OfflineTime?: string
  /**
   * 机器是否开启自动升级。0:关闭，1:开启
   */
  AutoUpdate?: number
  /**
   * 机器当前版本号。
   */
  Version?: string
  /**
   * 机器升级功能状态。 0：升级成功；1：升级中；-1：升级失败。
   */
  UpdateStatus?: number
  /**
   * 机器升级结果标识。
0：成功；1200：升级成功；其他值表示异常。
   */
  ErrCode?: number
  /**
   * 机器升级结果信息。
“ok”：成功；“update success”：升级成功；其他值为失败原因。
   */
  ErrMsg?: string
}

/**
 * ModifyLogset返回参数结构体
 */
export interface ModifyLogsetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警策略中监控任务的执行时间点
 */
export interface MonitorTime {
  /**
   * 执行周期， 可选值：`Period`、`Fixed`、`Cron`。

- Period：固定频率
- Fixed：固定时间
- Cron：Cron表达式
   */
  Type: string
  /**
   * 执行的周期，或者定制执行的时间节点。单位为分钟，取值范围为1~1440。
当type为`Period`,`Fixed`时，time字段生效。
   */
  Time?: number
  /**
   * 执行的周期cron表达式。示例：`"* /1 * * * *"` 从左到右每个field的含义 Minutes field, Hours field,Day of month field,Month field,Day of week field， 不支持秒级别。
当type为`Cron`时，CronExpression字段生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronExpression?: string
}

/**
 * 多主题检索返回信息
 */
export interface SearchLogTopics {
  /**
   * 多日志主题检索对应的错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<SearchLogErrors>
  /**
   * 多日志主题检索各日志主题信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Infos?: Array<SearchLogInfos>
}

/**
 * 多日志主题检索相关信息
 */
export interface MultiTopicSearchInformation {
  /**
   * 要检索分析的日志主题ID
   */
  TopicId?: string
  /**
   * 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时
   */
  Context?: string
}

/**
 * CreateMachineGroup请求参数结构体
 */
export interface CreateMachineGroupRequest {
  /**
   * 机器组名字，不能重复
   */
  GroupName: string
  /**
   * 创建机器组类型。取值如下：
- Type：ip，Values中为ip字符串列表创建机器组
- Type：label，Values中为标签字符串列表创建机器组
   */
  MachineGroupType: MachineGroupTypeInfo
  /**
   * 标签描述列表，通过指定该参数可以同时绑定标签到相应的机器组。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。
   */
  Tags?: Array<Tag>
  /**
   * 是否开启机器组自动更新。默认false
   */
  AutoUpdate?: boolean
  /**
   * 升级开始时间，建议业务低峰期升级LogListener
   */
  UpdateStartTime?: string
  /**
   * 升级结束时间，建议业务低峰期升级LogListener
   */
  UpdateEndTime?: string
  /**
   * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费。默认false
   */
  ServiceLogging?: boolean
  /**
   * 机器组中机器离线清理时间。单位：天
   */
  DelayCleanupTime?: number
  /**
   * 机器组元数据信息列表
   */
  MetaTags?: Array<MetaTagInfo>
  /**
   * 系统类型，取值如下：
- 0：Linux （默认值）
- 1：Windows
   */
  OSType?: number
}

/**
 * 日志中的KV对
 */
export interface LogItem {
  /**
   * 日志Key
   */
  Key?: string
  /**
   * 日志Value
   */
  Value?: string
}

/**
 * 需要过滤日志的key，及其对应的regex
 */
export interface KeyRegexInfo {
  /**
   * 需要过滤日志的key
   */
  Key: string
  /**
   * key对应的过滤规则regex
   */
  Regex: string
}

/**
 * DescribeExports返回参数结构体
 */
export interface DescribeExportsResponse {
  /**
   * 日志导出列表
   */
  Exports: Array<ExportInfo>
  /**
   * 总数目
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyConfigToMachineGroup请求参数结构体
 */
export interface ApplyConfigToMachineGroupRequest {
  /**
   * 采集配置ID
   */
  ConfigId: string
  /**
   * 机器组ID
   */
  GroupId: string
}

/**
 * 采集配置信息
 */
export interface CollectConfig {
  /**
   * 指定采集类型的采集配置名称信息。
<li>当CollectInfo中Type为0：表示元数据配置，name为元数据名称。
目前支持"container_id"，"container_name"，"image_name"，"namespace"，"pod_uid"，"pod_name"，"pod_ip"。
</li>
<li>当CollectInfo中Type为1：指定pod label，name为指定pod label名称。</li>
   */
  Name: string
}

/**
 * 自建k8s-容器文件路径信息
 */
export interface ContainerFileInfo {
  /**
   * namespace可以多个，用分隔号分割,例如A,B
   */
  Namespace: string
  /**
   * 容器名称
   */
  Container: string
  /**
   * 日志文件夹
   */
  LogPath: string
  /**
   * 日志名称
   */
  FilePattern: string
  /**
   * 日志文件信息
   */
  FilePaths?: Array<FilePathInfo>
  /**
   * pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeLabels?: Array<string>
  /**
   * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkLoad?: ContainerWorkLoadInfo
  /**
   * 需要排除的namespace可以多个，用分隔号分割,例如A,B
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludeNamespace?: string
  /**
   * 需要排除的pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludeLabels?: Array<string>
  /**
   * metadata信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomLabels?: Array<string>
}

/**
 * csv内容描述
 */
export interface CsvInfo {
  /**
   * csv首行是否打印key
   */
  PrintKey: boolean
  /**
   * 每列key的名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys: Array<string>
  /**
   * 各字段间的分隔符
   */
  Delimiter: string
  /**
   * 若字段内容中包含分隔符，则使用该转义符包裹改字段，只能填写单引号、双引号、空字符串
   */
  EscapeChar: string
  /**
   * 对于上面指定的不存在字段使用该内容填充
   */
  NonExistingField: string
}

/**
 * DescribeConfigExtras请求参数结构体
 */
export interface DescribeConfigExtrasRequest {
  /**
   * 过滤器，支持如下选项：
name
- 按照【特殊采集配置名称】进行模糊匹配过滤。
- 类型：String

configExtraId
- 按照【特殊采集配置ID】进行过滤。
- 类型：String

topicId
- 按照【日志主题】进行过滤。
- 类型：String

machineGroupId
- 按照【机器组ID】进行过滤。
- 类型：String

每次请求的Filters的上限为10，Filter.Values的上限为5。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
  /**
   * 分页单页的限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * DescribeCloudProductLogTasks请求参数结构体
 */
export interface DescribeCloudProductLogTasksRequest {
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为100，最大值100。
   */
  Limit?: number
  /**
   * - assumerName
  - 按照【云产品标识】进行过滤。
  - 类型：String
  - 必选：否
  - 枚举：CDS、CWP、CDB、TDSQL-C、MongoDB、TDStore、DCDB、MariaDB、PostgreSQL、BH、APIS
- logType
  - 按照【日志类型】进行过滤。
  - 类型：String
  - 必选：否
  - 枚举：CDS-AUDIT、CDS-RISK、CDB-AUDIT、TDSQL-C-AUDIT、MongoDB-AUDIT、MongoDB-SlowLog、MongoDB-ErrorLog、TDMYSQL-SLOW、DCDB-AUDIT、DCDB-SLOW、DCDB-ERROR、MariaDB-AUDIT、MariaDB-SLOW、MariaDB-ERROR、PostgreSQL-SLOW、PostgreSQL-ERROR、PostgreSQL-AUDIT、BH-FILELOG、BH-COMMANDLOG、APIS-ACCESS
- instanceId
  - 按照【实例ID】进行过滤。
  - 类型：String
  - 必选：否
   */
  Filters?: Array<Filter>
}

/**
 * CreateAlarmNotice请求参数结构体
 */
export interface CreateAlarmNoticeRequest {
  /**
   * 通知渠道组名称。
   */
  Name: string
  /**
   * 标签描述列表，通过指定该参数可以同时绑定标签到相应的通知渠道组。最大支持50个标签键值对，并且不能有重复的键值对。
   */
  Tags?: Array<Tag>
  /**
   * 【简易模式】（简易模式/告警模式二选一，分别配置相应参数）
需要发送通知的告警类型。可选值：
- Trigger - 告警触发
- Recovery - 告警恢复
- All - 告警触发和告警恢复
   */
  Type?: string
  /**
   * 【简易模式】（简易模式/告警模式二选一，分别配置相应参数）
通知接收对象。
   */
  NoticeReceivers?: Array<NoticeReceiver>
  /**
   * 【简易模式】（简易模式/告警模式二选一，分别配置相应参数）
接口回调信息（包括企业微信、钉钉、飞书）。
   */
  WebCallbacks?: Array<WebCallback>
  /**
   * 【高级模式】（简易模式/告警模式二选一，分别配置相应参数）
通知规则。
   */
  NoticeRules?: Array<NoticeRule>
  /**
   * 查询数据链接。http:// 或者 https:// 开头，不能/结尾
   */
  JumpDomain?: string
  /**
   * 投递日志开关。可取值如下：
1：关闭（默认值）；
2：开启 
投递日志开关开启时， DeliverConfig参数必填。
   */
  DeliverStatus?: number
  /**
   * 投递日志配置参数。当DeliverStatus开启时，必填。
   */
  DeliverConfig?: DeliverConfig
  /**
   * 免登录操作告警开关。可取值如下：
-      1：关闭
-      2：开启（默认值）
   */
  AlarmShieldStatus?: number
}

/**
 * ModifyShipper返回参数结构体
 */
export interface ModifyShipperResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIndex返回参数结构体
 */
export interface DescribeIndexResponse {
  /**
   * 日志主题ID
   */
  TopicId: string
  /**
   * 是否生效
   */
  Status: boolean
  /**
   * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rule: RuleInfo
  /**
   * 索引修改时间，初始值为索引创建时间。
   */
  ModifyTime: string
  /**
   * 内置保留字段（`__FILENAME__`，`__HOSTNAME__`及`__SOURCE__`）是否包含至全文索引
* false:不包含
* true:包含
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeInternalFields: boolean
  /**
   * 元数据字段（前缀为`__TAG__`的字段）是否包含至全文索引
* 0:仅包含开启键值索引的元数据字段
* 1:包含所有元数据字段
* 2:不包含任何元数据字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetadataFlag: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直方图详细信息
 */
export interface HistogramInfo {
  /**
   * 统计周期内的日志条数
   */
  Count: number
  /**
   * 按 period 取整后的 unix timestamp： 单位毫秒
   */
  BTime: number
}

/**
 * DescribeMachineGroupConfigs请求参数结构体
 */
export interface DescribeMachineGroupConfigsRequest {
  /**
   * 机器组ID
   */
  GroupId: string
}

/**
 * ModifyConfigExtra请求参数结构体
 */
export interface ModifyConfigExtraRequest {
  /**
   * 采集配置扩展信息id
   */
  ConfigExtraId: string
  /**
   * 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾
   */
  Name?: string
  /**
   * 日志主题id
   */
  TopicId?: string
  /**
   * 节点文件配置信息
   */
  HostFile?: HostFileInfo
  /**
   * 采集配置标记。
- 目前只支持label_k8s，用于标记自建k8s集群使用的采集配置
   */
  ContainerFile?: ContainerFileInfo
  /**
   * 容器标准输出信息
   */
  ContainerStdout?: ContainerStdoutInfo
  /**
   * 采集的日志类型，默认为minimalist_log。支持以下类型：
- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；
- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；
- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；
- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；
- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；
- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；
- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）。
   */
  LogType?: string
  /**
   * 日志格式化方式，用于容器采集场景。目前已经废弃
- stdout-docker-json：用于docker容器采集场景
- stdout-containerd：用于containerd容器采集场景
   */
  LogFormat?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
   */
  ExtractRule?: ExtractRuleInfo
  /**
   * 采集黑名单路径列表
   */
  ExcludePaths?: Array<ExcludePathInfo>
  /**
   * 组合解析采集规则，用于复杂场景下的日志采集。
- 取值参考：[使用组合解析提取模式采集日志
](https://cloud.tencent.com/document/product/614/61310)
   */
  UserDefineRule?: string
  /**
   * 类型：container_stdout、container_file、host_file
   */
  Type?: string
  /**
   * 机器组ID
   */
  GroupId?: string
  /**
   * 自建采集配置标
   */
  ConfigFlag?: string
  /**
   * 日志集ID
   */
  LogsetId?: string
  /**
   * 日志集name
   */
  LogsetName?: string
  /**
   * 日志主题name
   */
  TopicName?: string
  /**
   * 高级采集配置。 Json字符串， Key/Value定义为如下：
- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时
- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数
- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false
- ClsAgentDefault(自定义默认值，无特殊含义，用于清空其他选项)，建议取值0

   */
  AdvancedConfig?: string
}

/**
 * ModifyKafkaRecharge请求参数结构体
 */
export interface ModifyKafkaRechargeRequest {
  /**
   * Kafka导入配置ID
   */
  Id: string
  /**
   * 导入CLS目标topic ID
   */
  TopicId: string
  /**
   * Kafka导入配置名称
   */
  Name?: string
  /**
   * 导入Kafka类型，0：腾讯云CKafka：1：用户自建Kafka。
   */
  KafkaType?: number
  /**
   * 腾讯云CKafka实例ID，KafkaType为0时必填。
   */
  KafkaInstance?: string
  /**
   * 服务地址，KafkaType为1时必填。
   */
  ServerAddr?: string
  /**
   * ServerAddr是否为加密连接，KafkaType为1时必填。
   */
  IsEncryptionAddr?: boolean
  /**
   * 加密访问协议，KafkaType参数为1并且IsEncryptionAddr参数为true时必填。
   */
  Protocol?: KafkaProtocolInfo
  /**
   * 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开
   */
  UserKafkaTopics?: string
  /**
   * 用户Kafka消费组名称
   */
  ConsumerGroupName?: string
  /**
   * 日志导入规则
   */
  LogRechargeRule?: LogRechargeRuleInfo
  /**
   * 导入控制，1：暂停；2：继续。
   */
  StatusControl?: number
}

/**
 * CreateDataTransform请求参数结构体
 */
export interface CreateDataTransformRequest {
  /**
   * 任务类型. 1: 指定主题；2:动态创建。详情请参考[创建加工任务文档](https://cloud.tencent.com/document/product/614/63940)。
   */
  FuncType: number
  /**
   * 源日志主题
   */
  SrcTopicId: string
  /**
   * 加工任务名称
   */
  Name: string
  /**
   * 加工语句。 当FuncType为2时，EtlContent必须使用[log_auto_output](https://cloud.tencent.com/document/product/614/70733#b3c58797-4825-4807-bef4-68106e25024f) 

其他参考文档：

- [创建加工任务](https://cloud.tencent.com/document/product/614/63940) 
-  [函数总览](https://cloud.tencent.com/document/product/614/70395)
   */
  EtlContent: string
  /**
   * 加工类型。
1：使用源日志主题中的随机数据，进行加工预览；2：使用用户自定义测试数据，进行加工预览；3：创建真实加工任务。
   */
  TaskType: number
  /**
   * 加工任务目的topic_id以及别名,当FuncType=1时，该参数必填，当FuncType=2时，无需填写。
   */
  DstResources?: Array<DataTransformResouceInfo>
  /**
   * 任务启动状态.   默认为1:开启,  2:关闭
   */
  EnableFlag?: number
  /**
   * 用于预览加工结果的测试数据
   */
  PreviewLogStatistics?: Array<PreviewLogStatistic>
  /**
   * 数据加工类型。0：标准加工任务； 1：前置加工任务。前置加工任务将采集的日志处理完成后，再写入日志主题。
   */
  DataTransformType?: number
}

/**
 * DeleteMachineGroupInfo返回参数结构体
 */
export interface DeleteMachineGroupInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckRechargeKafkaServer返回参数结构体
 */
export interface CheckRechargeKafkaServerResponse {
  /**
   * Kafka集群可访问状态，0：可正常访问 ...
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCosRecharge请求参数结构体
 */
export interface ModifyCosRechargeRequest {
  /**
   * COS导入配置Id
   */
  Id: string
  /**
   * 日志主题Id
   */
  TopicId: string
  /**
   * COS导入任务名称
   */
  Name?: string
  /**
   * 任务状态   0： 停用 ， 1：启用
   */
  Enable?: number
  /**
   * COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。
   */
  Bucket?: string
  /**
   * COS存储桶所在地域，详见产品支持的[地域列表](https://cloud.tencent.com/document/product/436/6224)。
   */
  BucketRegion?: string
  /**
   * COS文件所在文件夹的前缀。为空串时投递存储桶下所有的文件。
   */
  Prefix?: string
  /**
   * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表单行全文； 默认为minimalist_log
   */
  LogType?: string
  /**
   * 解析格式。supported: "", "gzip", "lzop", "snappy"; 默认空
   */
  Compress?: string
  /**
   * 提取规则，如果设置了ExtractRule，则必须设置LogType
   */
  ExtractRuleInfo?: ExtractRuleInfo
  /**
   * COS导入任务类型。1：一次性导入任务；2：持续性导入任务。
   */
  TaskType?: number
  /**
   * 元数据。支持 bucket，object。
   */
  Metadata?: Array<string>
}

/**
 * DescribeLogsets请求参数结构体
 */
export interface DescribeLogsetsRequest {
  /**
   * logsetName
- 按照【日志集名称】进行过滤。
- 类型：String
- 必选：否

logsetId
- 按照【日志集ID】进行过滤。
- 类型：String
- 必选：否

tagKey
- 按照【标签键】进行过滤。
- 类型：String
- 必选：否

tag:tagKey
- 按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。
- 类型：String
- 必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
  /**
   * 分页单页的限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * Parquet内容
 */
export interface ParquetInfo {
  /**
   * ParquetKeyInfo数组
   */
  ParquetKeyInfo: Array<ParquetKeyInfo>
}

/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos导入配置信息
 */
export interface CosRechargeInfo {
  /**
   * COS导入配置ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 日志集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetId?: string
  /**
   * COS导入任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * COS存储桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * COS存储桶所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  BucketRegion?: string
  /**
   * COS文件所在文件夹的前缀
注意：此字段可能返回 null，表示取不到有效值。
   */
  Prefix?: string
  /**
   * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表单行全文；
默认为minimalist_log
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogType?: string
  /**
   * 状态   status 0: 已创建, 1: 运行中, 2: 已停止, 3: 已完成, 4: 运行失败。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 是否启用:   0： 未启用  ， 1：启用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 进度条百分值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
  /**
   * supported: "", "gzip", "lzop", "snappy”; 默认空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Compress?: string
  /**
   * 见： ExtractRuleInfo 结构描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtractRuleInfo?: ExtractRuleInfo
  /**
   * COS导入任务类型。1：一次性导入任务；2：持续性导入任务。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: number
  /**
   * 元数据。支持 bucket，object。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metadata?: Array<string>
}

/**
 * SearchLog请求参数结构体
 */
export interface SearchLogRequest {
  /**
   * 要检索分析的日志的起始时间，Unix时间戳（毫秒）
   */
  From: number
  /**
   * 要检索分析的日志的结束时间，Unix时间戳（毫秒）
   */
  To: number
  /**
   * 检索分析语句，最大长度为12KB
语句由 <a href="https://cloud.tencent.com/document/product/614/47044" target="_blank">[检索条件]</a> | <a href="https://cloud.tencent.com/document/product/614/44061" target="_blank">[SQL语句]</a>构成，无需对日志进行统计分析时，可省略其中的管道符<code> | </code>及SQL语句
使用*或空字符串可查询所有日志
   */
  Query: string
  /**
   * 检索语法规则，默认值为0，推荐使用1 。

- 0：Lucene语法
- 1：CQL语法（日志服务专用检索语法，控制台默认也使用该语法规则）。

详细说明参见<a href="https://cloud.tencent.com/document/product/614/47044#RetrievesConditionalRules" target="_blank">检索条件语法规则</a>
   */
  SyntaxRule?: number
  /**
   * - 要检索分析的日志主题ID，仅能指定一个日志主题。
- 如需同时检索多个日志主题，请使用Topics参数。
- TopicId 和 Topics 不能同时使用，在一次请求中有且只能选择一个。
   */
  TopicId?: string
  /**
   * - 要检索分析的日志主题列表，最大支持50个日志主题。
- 检索单个日志主题时请使用TopicId。
- TopicId 和 Topics 不能同时使用，在一次请求中有且只能选择一个。
   */
  Topics?: Array<MultiTopicSearchInformation>
  /**
   * 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL结果排序方式参考<a href="https://cloud.tencent.com/document/product/614/58978" target="_blank">SQL ORDER BY语法</a>
   */
  Sort?: string
  /**
   * 表示单次查询返回的原始日志条数，默认为100，最大值为1000。
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL结果条数指定方式参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a>

可通过两种方式获取后续更多日志：
* Context:透传上次接口返回的Context值，获取后续更多日志，总计最多可获取1万条原始日志
* Offset:偏移量，表示从第几行开始返回原始日志，无日志条数限制
   */
  Limit?: number
  /**
   * 查询原始日志的偏移量，表示从第几行开始返回原始日志，默认为0。 
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* 不能与Context参数同时使用
* 仅适用于单日志主题检索
   */
  Offset?: number
  /**
   * 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时。
注意：
* 透传该参数时，请勿修改除该参数外的其它参数
* 仅适用于单日志主题检索，检索多个日志主题时，请使用Topics中的Context
* 仅当检索分析语句(Query)不包含SQL时有效，SQL获取后续结果参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a>
   */
  Context?: string
  /**
   * 执行统计分析（Query中包含SQL）时，是否对原始日志先进行采样，再进行统计分析。
0：自动采样;
0～1：按指定采样率采样，例如0.02;
1：不采样，即精确分析
默认值为1
   */
  SamplingRate?: number
  /**
   * 为true代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效
为false时代表使用老的检索结果返回方式, 输出AnalysisResults和ColNames有效
两种返回方式在编码格式上有少量区别，建议使用true
   */
  UseNewAnalysis?: boolean
}

/**
 * DescribeWebCallbacks请求参数结构体
 */
export interface DescribeWebCallbacksRequest {
  /**
   * - name
按照【告警渠道回调配置名称】进行过滤。
类型：String
必选：否

- webCallbackId
按照【告警渠道回调配置ID】进行过滤。
类型：String
必选：否

- type
按照【告警渠道回调配置渠道类型】进行过滤。
类型：String
必选：否

每次请求的Filters的上限为10，Filter.Values的上限为100。
   */
  Filters?: Array<Filter>
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
}

/**
 * DeleteNoticeContent请求参数结构体
 */
export interface DeleteNoticeContentRequest {
  /**
   * 通知内容模板ID
   */
  NoticeContentId: string
}

/**
 * DescribeKafkaConsumer请求参数结构体
 */
export interface DescribeKafkaConsumerRequest {
  /**
   * 日志主题ID
   */
  FromTopicId: string
}

/**
 * 控制台分享链接params参数
 */
export interface ConsoleSharingParam {
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * ModifyDataTransform返回参数结构体
 */
export interface ModifyDataTransformResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataTransformInfo返回参数结构体
 */
export interface DescribeDataTransformInfoResponse {
  /**
   * 数据加工任务列表信息
   */
  DataTransformTaskInfos?: Array<DataTransformTaskInfo>
  /**
   * 任务总次数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 投递任务出入参 Content
 */
export interface ConsumerContent {
  /**
   * 是否投递 TAG 信息。
当EnableTag为true时，表示投递TAG元信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableTag: boolean
  /**
   * 需要投递的元数据列表，目前仅支持：\_\_SOURCE\_\_，\_\_FILENAME\_\_，\_\_TIMESTAMP\_\_，\_\_HOSTNAME\_\_和\_\_PKGID\_\_
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaFields: Array<string>
  /**
   * 当EnableTag为true时，必须填写TagJsonNotTiled字段。
TagJsonNotTiled用于标识tag信息是否json平铺。

TagJsonNotTiled为true时不平铺，示例：
TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`
不平铺：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`

TagJsonNotTiled为false时平铺，示例：
TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`
平铺：`{"__TAG__.fieldA":200,"__TAG__.fieldB":"text"}`
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagJsonNotTiled?: boolean
  /**
   * 投递时间戳精度，可选项 [1：秒；2：毫秒] ，默认是1。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimestampAccuracy?: number
  /**
   * 投递Json格式。
JsonType为0：和原始日志一致，不转义。示例：
日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`
投递到Ckafka：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`

JsonType为1：转义。示例：
日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`
投递到Ckafka：`{"a":"aa","b":"{\"b1\":\"b1b1\", \"c1\":\"c1c1\"}"}`
注意：此字段可能返回 null，表示取不到有效值。
   */
  JsonType?: number
}

/**
 * UploadLog请求参数结构体
 */
export interface UploadLogRequest {
  /**
   * 主题id
   */
  TopicId: string
  /**
   * 该参数已废弃，请勿使用
   * @deprecated
   */
  HashKey?: string
  /**
   * 压缩方法
   */
  CompressType?: string
}

/**
 * 投递配置入参
 */
export interface DeliverConfig {
  /**
   * 地域信息。

示例：
 ap-guangzhou  广州地域；
ap-nanjing 南京地域。

详细信息请查看官网：

https://cloud.tencent.com/document/product/614/18940
   */
  Region: string
  /**
   * 日志主题ID。
   */
  TopicId: string
  /**
   * 投递数据范围。

0: 全部日志, 包括告警策略日常周期执行的所有日志，也包括告警策略变更产生的日志，默认值

1:仅告警触发及恢复日志
   */
  Scope: number
}

/**
 * 日志内容高亮描述信息
 */
export interface HighLightItem {
  /**
   * 高亮的日志Key
   */
  Key?: string
  /**
   * 高亮的语法
   */
  Values?: Array<string>
}

/**
 * RetryShipperTask请求参数结构体
 */
export interface RetryShipperTaskRequest {
  /**
   * 投递规则ID
   */
  ShipperId: string
  /**
   * 投递任务ID
   */
  TaskId: string
}

/**
 * CreateExport返回参数结构体
 */
export interface CreateExportResponse {
  /**
   * 日志导出ID。
   */
  ExportId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自建k8s-节点文件配置信息
 */
export interface HostFileInfo {
  /**
   * 日志文件夹
   */
  LogPath: string
  /**
   * 日志文件名
   */
  FilePattern: string
  /**
   * metadata信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomLabels?: Array<string>
}

/**
 * DescribeConsoleSharingList请求参数结构体
 */
export type DescribeConsoleSharingListRequest = null

/**
 * GetAlarmLog请求参数结构体
 */
export interface GetAlarmLogRequest {
  /**
   * 要查询的执行详情的起始时间，Unix时间戳，单位ms。
   */
  From: number
  /**
   * 要查询的执行详情的结束时间，Unix时间戳，单位ms。
   */
  To: number
  /**
   * 查询过滤条件，例如：
- 按告警策略ID查询：`alert_id:"alarm-0745ec00-e605-xxxx-b50b-54afe61fc971"`
- 按监控对象ID查询：`monitored_object:"823d8bfa-76a7-xxxx-8399-8cda74d4009b" `
- 按告警策略ID及监控对象ID查询：`alert_id:"alarm-0745ec00-e605-xxxx-b50b-54afe61fc971" AND monitored_object:"823d8bfa-76a7-xxxx-8399-8cda74d4009b"`
- 按告警策略ID及监控对象ID查询支持SQL语句：`(alert_id:"alarm-5ce45495-09e8-4d58-xxxx-768134bf330c") AND (monitored_object:"3c514e84-6f1f-46ec-xxxx-05de6163f7fe") AND NOT condition_evaluate_result: "Skip" AND condition_evaluate_result:[* TO *] | SELECT count(*) as top50StatisticsTotalCount, count_if(condition_evaluate_result='ProcessError') as top50StatisticsFailureCount, count_if(notification_send_result!='NotSend') as top50NoticeTotalCount, count_if(notification_send_result='SendPartFail' or notification_send_result='SendFail') as top50NoticeFailureCount, alert_id, alert_name, monitored_object, topic_type, happen_threshold, alert_threshold, notify_template group by alert_id, alert_name, monitored_object,topic_type, happen_threshold, alert_threshold, notify_template order by top50StatisticsTotalCount desc limit 1`
   */
  Query: string
  /**
   * 单次查询返回的执行详情条数，最大值为1000
   */
  Limit?: number
  /**
   * 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时。
注意：
* 透传该参数时，请勿修改除该参数外的其它参数
* 仅当检索分析语句(Query)不包含SQL时有效，SQL获取后续结果参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a>
   */
  Context?: string
  /**
   * 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL结果排序方式参考<a href="https://cloud.tencent.com/document/product/614/58978" target="_blank">SQL ORDER BY语法</a>
   */
  Sort?: string
  /**
   * true：代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效；
false：代表使用老的检索结果返回方式，输出AnalysisResults和ColNames有效；
两种返回方式在编码格式上有少量区别，建议使用true。
   */
  UseNewAnalysis?: boolean
}

/**
 * MergePartition返回参数结构体
 */
export interface MergePartitionResponse {
  /**
   * 合并结果集
   */
  Partitions?: Array<PartitionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScheduledSql请求参数结构体
 */
export interface CreateScheduledSqlRequest {
  /**
   * 源日志主题
   */
  SrcTopicId: string
  /**
   * 任务名称
   */
  Name: string
  /**
   * 任务启动状态.  1开启,  2关闭
   */
  EnableFlag: number
  /**
   * 定时SQL分析目标日志主题
   */
  DstResource: ScheduledSqlResouceInfo
  /**
   * 查询语句
   */
  ScheduledSqlContent: string
  /**
   * 调度开始时间,Unix时间戳，单位ms
   */
  ProcessStartTime: number
  /**
   * 调度类型，1:持续运行 2:指定时间范围
   */
  ProcessType: number
  /**
   * 调度周期(分钟)
   */
  ProcessPeriod: number
  /**
   * 单次查询的时间窗口,如果您的目标主题为指标主题，建议该参数的大小不超过30分钟，否则可能转指标失败。
   */
  ProcessTimeWindow: string
  /**
   * 执行延迟(秒)
   */
  ProcessDelay: number
  /**
   * 源topicId的地域信息
   */
  SrcTopicRegion: string
  /**
   * 调度结束时间，当ProcessType=2时为必传字段, Unix时间戳，单位ms
   */
  ProcessEndTime?: number
  /**
   * 查询语法规则。 默认值为0。0：Lucene语法，1：CQL语法
   */
  SyntaxRule?: number
}

/**
 * RetryShipperTask返回参数结构体
 */
export interface RetryShipperTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigExtras返回参数结构体
 */
export interface DescribeConfigExtrasResponse {
  /**
   * 采集配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Configs?: Array<ConfigExtraInfo>
  /**
   * 过滤到的总数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
